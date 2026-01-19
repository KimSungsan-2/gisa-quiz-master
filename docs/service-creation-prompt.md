# 새로운 서비스 추가 가이드

이 문서는 월간 서비스 플랫폼에 새로운 서비스를 추가하는 방법을 설명합니다.

---

## 개요

**현재 플랫폼 구조:**
- 공통 백엔드: User 모델, Google OAuth 인증, 결제 시스템
- 공통 프론트엔드: 로그인, 요금제 페이지
- 예시 서비스: Todo App
- 디자인 시스템: 토스 스타일 (Tailwind CSS)
- 배포 환경: React Native WebView

**새 서비스를 추가할 때:**
1. 백엔드 서비스 폴더 생성
2. 프론트엔드 페이지 생성
3. 라우터 등록
4. DB 마이그레이션

---

## 참고 문서

시작하기 전에 다음 문서를 참고하세요:
1. [@docs/monthly-service-platform-design.md](./monthly-service-platform-design.md) - 플랫폼 아키텍처
2. [@docs/design-system.md](./design-system.md) - 토스 기반 디자인 시스템

---

## 작업 순서

### 1단계: 기획 분석

기획문서를 분석하여 다음을 도출하세요:

- **서비스명**: 영문 소문자 + 하이픈 (예: `study-helper`, `book-tracker`)
- **표시명**: 한글 또는 영문 (예: "학습 도우미", "독서 기록")
- **핵심 기능**: 3-5개의 주요 기능
- **데이터 모델**: 필요한 DB 테이블 (User는 공통 모델 사용)
- **API 엔드포인트**: RESTful API 목록
- **Primary 색상**: 서비스 브랜딩 색상 (HEX)

**예시 분석 결과:**
```
서비스명: study-helper
표시명: 학습 도우미
색상: #8b5cf6 (보라색)

핵심 기능:
1. 학습 타이머
2. 플래시카드
3. 학습 통계

데이터 모델:
- StudySession (학습 세션)
- Flashcard (플래시카드)
```

---

### 2단계: 백엔드 서비스 생성

#### 2.1 서비스 폴더 구조 생성

```bash
mkdir -p backend/app/services/study_helper
cd backend/app/services/study_helper
```

생성할 파일:
- `models.py` - 데이터 모델
- `schemas.py` - Pydantic 스키마
- `router.py` - API 엔드포인트
- `__init__.py` - 패키지 초기화

#### 2.2 models.py 작성

**중요: SQLite 사용 규칙**
- UUID 대신 `String(36)` 사용
- `default=lambda: str(uuid.uuid4())` 사용
- 스키마 지정 불필요

```python
"""
학습 도우미 서비스 모델
"""
import uuid
from datetime import datetime
from sqlalchemy import Column, String, Integer, Boolean, DateTime, ForeignKey, Text

from app.core.database import Base


class StudySession(Base):
    """학습 세션"""
    __tablename__ = "study_sessions"

    id = Column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    user_id = Column(String(36), ForeignKey("users.id"), nullable=False, index=True)

    # 내용
    subject = Column(String(100), nullable=False)
    duration = Column(Integer)  # 분 단위

    # 타임스탬프
    started_at = Column(DateTime, default=datetime.utcnow)
    ended_at = Column(DateTime, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f"<StudySession {self.subject}>"


class Flashcard(Base):
    """플래시카드"""
    __tablename__ = "flashcards"

    id = Column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    user_id = Column(String(36), ForeignKey("users.id"), nullable=False, index=True)

    # 내용
    front = Column(Text, nullable=False)  # 질문
    back = Column(Text, nullable=False)   # 답변
    category = Column(String(100))

    # 복습 추적
    reviewed_count = Column(Integer, default=0)
    next_review_at = Column(DateTime, nullable=True)

    # 타임스탬프
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    def __repr__(self):
        return f"<Flashcard {self.front[:20]}>"
```

#### 2.3 schemas.py 작성

```python
"""
학습 도우미 스키마
"""
from pydantic import BaseModel
from datetime import datetime
from typing import Optional


# StudySession 스키마
class StudySessionCreate(BaseModel):
    subject: str
    duration: Optional[int] = None


class StudySessionResponse(BaseModel):
    id: str
    subject: str
    duration: Optional[int]
    started_at: datetime
    ended_at: Optional[datetime]
    created_at: datetime

    class Config:
        from_attributes = True


# Flashcard 스키마
class FlashcardCreate(BaseModel):
    front: str
    back: str
    category: Optional[str] = None


class FlashcardUpdate(BaseModel):
    front: Optional[str] = None
    back: Optional[str] = None
    category: Optional[str] = None
    reviewed_count: Optional[int] = None


class FlashcardResponse(BaseModel):
    id: str
    front: str
    back: str
    category: Optional[str]
    reviewed_count: int
    next_review_at: Optional[datetime]
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True
```

#### 2.4 router.py 작성

```python
"""
학습 도우미 라우터
"""
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List, Optional
from datetime import datetime

from app.core.database import get_db
from app.core.auth import get_current_user
from app.models.user import User
from app.services.study_helper.models import StudySession, Flashcard
from app.services.study_helper import schemas

router = APIRouter()


# 학습 세션 API
@router.post("/sessions", response_model=schemas.StudySessionResponse)
async def start_session(
    session: schemas.StudySessionCreate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    """학습 세션 시작"""
    db_session = StudySession(
        user_id=current_user.id,
        subject=session.subject,
        duration=session.duration,
    )

    db.add(db_session)
    db.commit()
    db.refresh(db_session)

    return db_session


@router.post("/sessions/{session_id}/end", response_model=schemas.StudySessionResponse)
async def end_session(
    session_id: str,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    """학습 세션 종료"""
    db_session = db.query(StudySession).filter(
        StudySession.id == session_id,
        StudySession.user_id == current_user.id
    ).first()

    if not db_session:
        raise HTTPException(status_code=404, detail="Session not found")

    db_session.ended_at = datetime.utcnow()
    db.commit()
    db.refresh(db_session)

    return db_session


@router.get("/sessions", response_model=List[schemas.StudySessionResponse])
async def get_sessions(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    """학습 세션 목록"""
    sessions = db.query(StudySession).filter(
        StudySession.user_id == current_user.id
    ).order_by(StudySession.started_at.desc()).all()

    return sessions


# 플래시카드 API
@router.post("/flashcards", response_model=schemas.FlashcardResponse)
async def create_flashcard(
    card: schemas.FlashcardCreate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    """플래시카드 생성"""
    db_card = Flashcard(
        user_id=current_user.id,
        front=card.front,
        back=card.back,
        category=card.category,
    )

    db.add(db_card)
    db.commit()
    db.refresh(db_card)

    return db_card


@router.get("/flashcards", response_model=List[schemas.FlashcardResponse])
async def get_flashcards(
    category: Optional[str] = None,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    """플래시카드 목록"""
    query = db.query(Flashcard).filter(Flashcard.user_id == current_user.id)

    if category:
        query = query.filter(Flashcard.category == category)

    cards = query.order_by(Flashcard.created_at.desc()).all()
    return cards


@router.patch("/flashcards/{card_id}", response_model=schemas.FlashcardResponse)
async def update_flashcard(
    card_id: str,
    card_update: schemas.FlashcardUpdate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    """플래시카드 수정"""
    db_card = db.query(Flashcard).filter(
        Flashcard.id == card_id,
        Flashcard.user_id == current_user.id
    ).first()

    if not db_card:
        raise HTTPException(status_code=404, detail="Flashcard not found")

    update_data = card_update.dict(exclude_unset=True)
    for key, value in update_data.items():
        setattr(db_card, key, value)

    db.commit()
    db.refresh(db_card)

    return db_card


@router.delete("/flashcards/{card_id}")
async def delete_flashcard(
    card_id: str,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    """플래시카드 삭제"""
    db_card = db.query(Flashcard).filter(
        Flashcard.id == card_id,
        Flashcard.user_id == current_user.id
    ).first()

    if not db_card:
        raise HTTPException(status_code=404, detail="Flashcard not found")

    db.delete(db_card)
    db.commit()

    return {"message": "Flashcard deleted successfully"}
```

#### 2.5 __init__.py 작성

```python
# 패키지 초기화
```

---

### 3단계: 라우터 등록

`backend/app/api/v1/router.py`에 서비스 라우터 추가:

```python
"""
API v1 라우터
"""
from fastapi import APIRouter

from app.api.v1.endpoints import auth, payment
from app.services.todo import router as todo_router
from app.services.study_helper import router as study_helper_router  # 추가

api_router = APIRouter()

# 공통 엔드포인트
api_router.include_router(auth.router, prefix="/auth", tags=["인증"])
api_router.include_router(payment.router, prefix="/payment", tags=["결제"])

# 서비스별 라우터
api_router.include_router(todo_router.router, prefix="/todo", tags=["Todo"])
api_router.include_router(study_helper_router.router, prefix="/study-helper", tags=["학습 도우미"])  # 추가
```

---

### 4단계: DB 마이그레이션

모델 변경사항을 DB에 반영:

```bash
cd backend

# 테이블 자동 생성 (개발 환경)
# main.py의 lifespan에서 Base.metadata.create_all(bind=engine) 실행됨

# 또는 Alembic 사용 (프로덕션)
alembic revision --autogenerate -m "Add study helper tables"
alembic upgrade head
```

**빠른 확인:**
```bash
# 백엔드 실행
cd backend
uvicorn app.main:app --reload --port 8101

# API 문서 확인
# http://localhost:8101/docs
```

---

### 5단계: 프론트엔드 페이지 생성

#### 5.1 서비스 폴더 생성

```bash
mkdir -p apps/web/app/study-helper/components
```

생성할 파일:
- `page.tsx` - 메인 페이지
- `layout.tsx` - 레이아웃
- `components/StudyTimer.tsx` - 타이머 컴포넌트
- `components/FlashcardDeck.tsx` - 플래시카드 컴포넌트

#### 5.2 layout.tsx 작성

```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '학습 도우미',
  description: '효율적인 학습 관리 서비스',
};

export default function StudyHelperLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div data-service="study-helper">
      {children}
    </div>
  );
}
```

#### 5.3 page.tsx 작성

```typescript
'use client';

import { useState } from 'react';
import StudyTimer from './components/StudyTimer';
import FlashcardDeck from './components/FlashcardDeck';

export default function StudyHelperPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero */}
      <section className="hero">
        <h1 className="hero-title">
          효율적인 학습, 스마트하게
        </h1>
        <p className="hero-description">
          집중력을 높이고 학습 효율을 극대화하세요
        </p>
      </section>

      {/* 기능 */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-6">
        <StudyTimer />
        <FlashcardDeck />
      </section>
    </div>
  );
}
```

#### 5.4 components/StudyTimer.tsx 작성

```typescript
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';

export default function StudyTimer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(s => s + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (totalSeconds: number) => {
    const h = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
    const s = (totalSeconds % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  return (
    <Card>
      <h3 className="card-title">학습 타이머</h3>
      <div className="text-5xl font-bold my-8 text-center text-purple-600">
        {formatTime(seconds)}
      </div>
      <div className="flex gap-3">
        <Button
          variant={isRunning ? 'secondary' : 'primary'}
          fullWidth
          onClick={() => setIsRunning(!isRunning)}
        >
          {isRunning ? '일시정지' : '시작'}
        </Button>
        {seconds > 0 && (
          <Button
            variant="outline"
            onClick={() => {
              setSeconds(0);
              setIsRunning(false);
            }}
          >
            초기화
          </Button>
        )}
      </div>
    </Card>
  );
}
```

#### 5.5 components/FlashcardDeck.tsx 작성

```typescript
'use client';

import { useState } from 'react';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';

export default function FlashcardDeck() {
  const [flipped, setFlipped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 예시 데이터
  const cards = [
    { front: 'React Hook이란?', back: '함수형 컴포넌트에서 상태와 생명주기를 사용할 수 있게 하는 기능' },
    { front: 'useEffect란?', back: '컴포넌트의 사이드 이펙트를 처리하는 Hook' },
  ];

  const currentCard = cards[currentIndex];

  return (
    <Card>
      <h3 className="card-title">플래시카드</h3>
      <div
        className="min-h-[200px] flex items-center justify-center p-8 bg-purple-50 rounded-lg cursor-pointer my-4"
        onClick={() => setFlipped(!flipped)}
      >
        <p className="text-lg text-center">
          {flipped ? currentCard.back : currentCard.front}
        </p>
      </div>
      <div className="flex gap-3">
        <Button
          variant="outline"
          fullWidth
          onClick={() => setCurrentIndex(i => (i > 0 ? i - 1 : cards.length - 1))}
        >
          이전
        </Button>
        <Button
          variant="outline"
          fullWidth
          onClick={() => setFlipped(!flipped)}
        >
          {flipped ? '뒤집기' : '정답보기'}
        </Button>
        <Button
          variant="outline"
          fullWidth
          onClick={() => setCurrentIndex(i => (i < cards.length - 1 ? i + 1 : 0))}
        >
          다음
        </Button>
      </div>
    </Card>
  );
}
```

---

### 6단계: 서비스별 스타일 커스터마이징

`apps/web/app/study-helper/globals.css` 또는 메인 `globals.css`에 서비스별 스타일 추가:

```css
[data-service="study-helper"] {
  --primary-500: #8b5cf6;
  --primary-600: #7c3aed;
}

[data-service="study-helper"] .btn-primary {
  background: var(--primary-500);
}

[data-service="study-helper"] .btn-primary:hover {
  background: var(--primary-600);
}
```

---

### 7단계: 홈페이지에 서비스 추가

`apps/web/app/page.tsx`의 services 배열에 추가:

```typescript
const services = [
  {
    name: 'Todo App',
    slug: 'todo',
    description: '간단한 할 일 관리',
    color: 'bg-blue-500',
    icon: '✓',
  },
  {
    name: '학습 도우미',
    slug: 'study-helper',
    description: '효율적인 학습 관리',
    color: 'bg-purple-500',
    icon: '📚',
  },
];
```

---

## 체크리스트

서비스 생성 후 다음을 확인하세요:

### 백엔드
- [ ] 모델이 SQLite 규칙을 따르는가? (String(36), uuid4)
- [ ] API 엔드포인트가 모든 기능을 지원하는가?
- [ ] 권한 검증이 적용되었는가? (get_current_user)
- [ ] 에러 처리가 구현되었는가? (HTTPException)
- [ ] 라우터가 등록되었는가? (api/v1/router.py)

### 프론트엔드
- [ ] 토스 디자인 시스템이 적용되었는가?
- [ ] 모바일 WebView에서 정상 작동하는가?
- [ ] 터치 영역이 충분한가? (최소 44px)
- [ ] 로딩 상태가 표시되는가?
- [ ] 에러 메시지가 친절한가?

### 통합
- [ ] 백엔드 API 문서 확인 (http://localhost:8101/docs)
- [ ] 프론트엔드 페이지 확인 (http://localhost:3000/study-helper)
- [ ] 인증이 동작하는가?
- [ ] API 연동이 정상인가?

---

## 빠른 시작

```bash
# 백엔드 실행
cd backend
uvicorn app.main:app --reload --port 8101

# 프론트엔드 실행
cd apps/web
npm run dev

# 접속
# http://localhost:3000/study-helper
```

---

## 다음 단계

1. API 연동 로직 추가 (`lib/api.ts` 사용)
2. 로딩/에러 상태 처리
3. React Native WebView 메시지 통신
4. 애널리틱스 이벤트 추가

