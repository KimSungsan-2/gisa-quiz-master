# 월간 서비스 출시 플랫폼 설계

**작성일**: 2026-01-18
**목표**: 매달 새로운 웹 서비스를 빠르게 출시할 수 있는 재사용 가능한 플랫폼 구축

## 목차

1. [전체 아키텍처 개요](#1-전체-아키텍처-개요)
2. [공통 패키지 (packages/core)](#2-공통-패키지-packagescore)
3. [디자인 시스템 (packages/ui)](#3-디자인-시스템-packagesui)
4. [통합 웹 애플리케이션](#4-통합-웹-애플리케이션)
5. [모바일 앱](#5-모바일-앱)
6. [백엔드 아키텍처](#6-백엔드-아키텍처)
7. [로컬 서버 배포 전략](#7-로컬-서버-배포-전략)
8. [월간 서비스 출시 워크플로우](#8-월간-서비스-출시-워크플로우)
9. [공통 재사용 모듈](#9-공통-재사용-모듈)
10. [CS 대응 및 레포팅](#10-cs-대응-및-레포팅)
11. [초기 구축 순서](#11-초기-구축-순서)

---

## 1. 전체 아키텍처 개요

### 핵심 전략
- **재사용 가능한 공통 인프라**: 인증, 결제, UI 컴포넌트 등을 모든 서비스에서 공유
- **서비스별 독립 모듈**: 각 서비스는 독립적인 로그인 시스템과 DB 스키마 보유
- **빠른 출시**: 2주 이내 신규 서비스 개발 가능

### 모노레포 구조
```
platform/
├── packages/              # 공통 패키지
│   ├── core/             # 인증, 결제, DB 클라이언트
│   ├── ui/               # 디자인 시스템 (shadcn/ui 기반)
│   ├── analytics/        # GA4 + Mixpanel 통합
│   └── utils/            # 공통 유틸리티
├── services/             # 개별 서비스 (사용 안함, apps에 통합)
├── apps/
│   ├── web/              # Next.js 통합 웹 (모든 서비스 호스팅)
│   └── mobile/           # React Native 앱
├── backend/              # FastAPI 백엔드
└── docs/                 # 문서
```

### 기술 스택

**프론트엔드**
- Framework: Next.js 14 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- UI: shadcn/ui
- State: Zustand

**모바일**
- React Native + WebView (URL 라우팅)
- 네이티브 기능: 푸시 알림, 생체인증

**백엔드**
- Framework: FastAPI
- Language: Python 3.11+
- Database: PostgreSQL (서비스별 스키마 분리)
- Cache: Redis
- AI: OpenAI GPT-4o-mini

**인증**
- Google OAuth
- JWT 토큰
- 서비스별 독립 로그인

**결제**
- Stripe (글로벌)
- Toss Payments (국내)

**애널리틱스**
- Google Analytics 4
- Mixpanel

**배포**
- 초기: 로컬 서버 (Docker Compose)
- 확장: AWS (성공한 서비스만)

---

## 2. 공통 패키지 (packages/core)

모든 서비스가 재사용할 핵심 기능들입니다.

### packages/core/auth

**Google OAuth 통합**
- 모든 서비스에서 동일한 구글 로그인 플로우
- Service-ID로 서비스별 사용자 구분
- 각 서비스는 독립적인 users 테이블 보유

**JWT 토큰 관리**
- 액세스 토큰 (15분)
- 리프레시 토큰 (7일)
- 자동 갱신 로직
- Token payload에 `service_id` 포함

**권한 관리**
- 역할 기반 접근 제어 (RBAC)
- admin, user, premium_user 등

**세션 관리**
- Redis 기반 세션 저장소
- 다중 디바이스 로그인 지원

### packages/core/payments

**통합 결제 인터페이스**
```typescript
interface PaymentProvider {
  createSubscription(plan: string): Promise<Subscription>
  cancelSubscription(id: string): Promise<void>
  refund(paymentId: string): Promise<void>
}

// Stripe, Toss 모두 동일한 인터페이스 구현
```

**구독 관리**
- 무료/프리미엄 플랜
- 자동 갱신
- 플랜 변경
- 구독 취소

**영수증 발행**
- 결제 내역 DB 저장
- 이메일 자동 발송
- PDF 생성 (선택사항)

**환불 처리**
- 정책 기반 자동/수동 환불
- 환불 내역 추적

### packages/core/database

**공통 모델**
- 각 서비스는 독립 스키마 사용
- 공통 스키마는 없음 (서비스 완전 분리)

**서비스별 스키마**
```sql
-- cert-exam 서비스
CREATE SCHEMA cert_exam;
CREATE TABLE cert_exam.users (...);
CREATE TABLE cert_exam.questions (...);

-- todolist (관리자 도구)
CREATE SCHEMA todolist;
CREATE TABLE todolist.users (...);
CREATE TABLE todolist.projects (...);
```

**마이그레이션 도구**
- Alembic으로 버전 관리
- 서비스별 마이그레이션 파일 분리

**캐싱 레이어**
- Redis로 자주 조회되는 데이터 캐싱
- 캐시 무효화 전략

### packages/analytics

**이벤트 추적**
```typescript
trackEvent('page_view', {
  service: 'cert-exam',
  page: '/questions/1234'
})

trackEvent('conversion', {
  service: 'cert-exam',
  plan: 'premium',
  revenue: 9.99
})
```

**GA4 연동**
- 자동 페이지뷰 추적
- 커스텀 이벤트 전송
- 전환 추적

**Mixpanel 연동**
- 사용자 행동 분석
- 퍼널 분석
- 코호트 분석

**대시보드**
- 서비스별 지표 조회 API
- 실시간 데이터 집계

---

## 3. 디자인 시스템 (packages/ui)

모든 서비스에서 일관된 UI/UX를 제공하면서도 서비스별 커스터마이징 가능.

### packages/ui/components

**공통 컴포넌트 (shadcn/ui 기반)**
- Button, Input, Textarea
- Card, Badge, Avatar
- Modal, Dialog, Toast
- Dropdown, Select, Checkbox
- Table, Pagination
- Tabs, Accordion
- Progress, Spinner

**레이아웃 컴포넌트**
- `<ServiceLayout>`: 공통 헤더/푸터/사이드바
- `<AuthLayout>`: 로그인/회원가입 페이지용
- `<DashboardLayout>`: 대시보드형 레이아웃
- `<AdminLayout>`: 관리자 페이지 전용

**폼 컴포넌트**
- `<FormInput>`: 유효성 검사 내장
- `<FormSelect>`, `<FormTextarea>`
- `<FormSubmitButton>`: 로딩 상태 자동 처리
- `<FormError>`: 에러 메시지 표시

**데이터 표시**
- `<DataTable>`: 정렬/필터링/페이징 내장
- `<StatCard>`: 통계 카드
- `<EmptyState>`: 데이터 없을 때
- `<LoadingState>`: 로딩 중

### 테마 시스템

**CSS 변수 기반**
```css
/* 서비스별로 색상만 변경 */
:root {
  --primary: 220 90% 56%;      /* cert-exam: 파란색 */
  --secondary: 280 70% 60%;
}

[data-service="todolist"] {
  --primary: 142 76% 36%;      /* todolist: 초록색 */
}
```

**다크모드 지원**
- 자동 전환 가능
- 사용자 설정 저장

**반응형 디자인**
- 모바일 우선
- Tailwind breakpoints 사용

**타이포그래피**
- 일관된 폰트 스케일
- 가독성 최적화

### 공통 페이지 템플릿

**인증 페이지**
- `/login`: Google OAuth 로그인
- `/signup`: 회원가입
- `/forgot-password`: 비밀번호 재설정

**결제 페이지**
- `/pricing`: 플랜 비교
- `/checkout`: 결제 정보 입력
- `/success`: 결제 완료

**설정 페이지**
- `/account/profile`: 프로필 수정
- `/account/subscription`: 구독 관리
- `/account/billing`: 결제 내역

**에러 페이지**
- 404, 500, 403 등

---

## 4. 통합 웹 애플리케이션

URL 기반으로 여러 서비스를 하나의 웹에서 제공.

### URL 라우팅 전략

```
platform.com/                    → 메인 랜딩 페이지 (서비스 소개)
platform.com/cert-exam/          → 자격증 서비스 (외부 공개)
platform.com/future-service/     → 향후 추가될 서비스들
platform.com/account/            → 공통 계정 관리
platform.com/pricing/            → 공통 결제/플랜

platform.com/admin/              → 관리자 전용 (인증 필요)
platform.com/admin/todolist/     → 내부 프로젝트 관리
platform.com/admin/analytics/    → 전체 서비스 분석
platform.com/admin/users/        → 사용자 관리
platform.com/admin/support/      → CS 문의 관리
```

### 접근 제어

**관리자 영역**
- `/admin/**` 경로는 미들웨어에서 관리자 권한 체크
- 일반 사용자 접근 불가 (403 Forbidden)
- DB에서 `role='admin'` 필드로 구분

**서비스별 인증**
- 각 서비스는 독립적인 로그인 상태
- 서비스 전환 시 재로그인 필요

### Next.js App Router 구조

```typescript
apps/web/
├── app/
│   ├── (public)/              # 외부 공개 영역
│   │   ├── page.tsx          # 랜딩 페이지
│   │   ├── cert-exam/        # 외부 서비스 1
│   │   │   └── [...slug]/    # 동적 라우팅
│   │   └── pricing/          # 결제 페이지
│   ├── (auth)/               # 인증 페이지
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── signup/
│   │       └── page.tsx
│   ├── account/              # 사용자 계정
│   │   ├── profile/
│   │   ├── subscription/
│   │   └── billing/
│   ├── admin/                # 관리자 전용
│   │   ├── middleware.ts     # 권한 체크
│   │   ├── todolist/         # 내부 프로젝트 관리
│   │   ├── analytics/        # 서비스 분석
│   │   ├── users/            # 사용자 관리
│   │   └── support/          # CS 관리
│   └── api/                  # API 라우트 (백엔드 프록시)
│       ├── auth/
│       └── [...proxy]/       # 백엔드로 프록시
├── components/
├── lib/
└── public/
```

### 서비스 격리 및 코드 스플리팅

**Dynamic Import**
```typescript
// 각 서비스는 사용 시에만 로드
const CertExamApp = dynamic(() => import('./cert-exam'), {
  loading: () => <LoadingSpinner />,
})
```

**공유 청크**
- 공통 코드는 자동으로 공유 청크로 추출
- 서비스 간 중복 최소화

### 서비스 전환 네비게이션

**앱 스위처**
- 헤더에 서비스 선택 드롭다운
- 빠른 서비스 전환

**공통 헤더**
- 로그인 상태 표시
- 알림 아이콘
- 프로필 메뉴
- 모든 서비스에서 동일

**독립적 사이드바**
- 각 서비스별 메뉴 구조
- 서비스 전환 시 사이드바 변경

---

## 5. 모바일 앱

React Native + WebView로 각 서비스를 네이티브 앱처럼 제공.

### 앱 구조

```typescript
apps/mobile/
├── src/
│   ├── navigation/
│   │   ├── AppNavigator.tsx      # 루트 네비게이터
│   │   └── TabNavigator.tsx      # 탭 네비게이션
│   ├── screens/
│   │   ├── ServiceWebView.tsx    # 웹뷰 래퍼
│   │   ├── ServiceList.tsx       # 서비스 선택
│   │   └── Settings.tsx          # 앱 설정
│   ├── components/
│   │   ├── TabBar.tsx            # 하단 탭바
│   │   └── Header.tsx            # 네이티브 헤더
│   └── utils/
│       ├── deeplink.ts           # 딥링크 처리
│       └── bridge.ts             # 웹↔네이티브 통신
├── android/
└── ios/
```

### URL 매핑 전략

```typescript
// 앱 내에서 탭 전환 시 WebView URL 변경
const SERVICE_URLS = {
  'cert-exam': 'https://platform.com/cert-exam',
  'future-service': 'https://platform.com/future-service',
  'account': 'https://platform.com/account',
}
```

### 네이티브 기능 활용

**푸시 알림**
- Firebase Cloud Messaging
- 서비스별 알림 채널
- 딥링크 연동

**로컬 저장소**
- AsyncStorage로 토큰/설정 캐시
- 빠른 로그인 유지

**생체인증**
- Face ID / Touch ID
- 지문 인식
- 빠른 로그인

**딥링크**
```
myapp://cert-exam/question/1234
→ 앱 열고 해당 문제로 바로 이동
```

**오프라인 감지**
- 네트워크 상태 체크
- 오프라인 안내 UI

### 웹↔네이티브 통신

**웹에서 네이티브 기능 호출**
```typescript
// 웹 코드
window.ReactNativeWebView.postMessage(JSON.stringify({
  type: 'SHOW_NOTIFICATION',
  payload: { title: '알림', message: '새 메시지' }
}))

window.ReactNativeWebView.postMessage(JSON.stringify({
  type: 'VIBRATE',
  payload: { duration: 100 }
}))
```

**네이티브에서 웹으로 이벤트 전달**
```typescript
// React Native 코드
webViewRef.current?.injectJavaScript(`
  window.dispatchEvent(new CustomEvent('native-event', {
    detail: { type: 'BIOMETRIC_SUCCESS' }
  }))
`)
```

---

## 6. 백엔드 아키텍처

서비스별 독립 로그인이지만 코드는 재사용하는 구조.

### FastAPI 프로젝트 구조

```python
backend/
├── app/
│   ├── core/                    # 공통 핵심 기능
│   │   ├── __init__.py
│   │   ├── auth.py             # JWT, OAuth 로직
│   │   ├── payments.py         # Stripe/Toss 통합
│   │   ├── database.py         # DB 연결 관리
│   │   ├── config.py           # 환경 변수 설정
│   │   └── security.py         # 보안 유틸리티
│   ├── services/                # 서비스별 비즈니스 로직
│   │   ├── cert_exam/
│   │   │   ├── __init__.py
│   │   │   ├── models.py       # SQLAlchemy 모델
│   │   │   ├── schemas.py      # Pydantic 스키마
│   │   │   ├── router.py       # API 엔드포인트
│   │   │   ├── service.py      # 비즈니스 로직
│   │   │   └── dependencies.py # 의존성 주입
│   │   └── admin/
│   │       └── todolist/
│   │           ├── models.py
│   │           ├── schemas.py
│   │           ├── router.py
│   │           └── service.py
│   ├── shared/                  # 공통 유틸리티
│   │   ├── analytics.py        # GA4/Mixpanel
│   │   ├── email.py            # 이메일 발송
│   │   └── storage.py          # 파일 저장
│   └── main.py                  # FastAPI 앱 진입점
├── alembic/                     # DB 마이그레이션
│   ├── versions/
│   └── env.py
├── tests/
├── requirements.txt
└── Dockerfile
```

### 데이터베이스 스키마 분리

**서비스별 독립 스키마**
```sql
-- cert-exam 서비스
CREATE SCHEMA cert_exam;

CREATE TABLE cert_exam.users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    google_id VARCHAR(255) UNIQUE,
    name VARCHAR(255),
    subscription_tier VARCHAR(50) DEFAULT 'free',
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE cert_exam.questions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    subject VARCHAR(100),
    content TEXT,
    options JSONB,
    correct_answer INTEGER,
    difficulty VARCHAR(20),
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE cert_exam.user_answers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES cert_exam.users(id),
    question_id UUID REFERENCES cert_exam.questions(id),
    selected_answer INTEGER,
    is_correct BOOLEAN,
    answered_at TIMESTAMP DEFAULT NOW()
);

-- todolist 서비스 (관리자 도구)
CREATE SCHEMA todolist;

CREATE TABLE todolist.users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    role VARCHAR(50) DEFAULT 'member', -- admin, member
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE todolist.projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255),
    service_name VARCHAR(100), -- cert-exam, future-service
    status VARCHAR(50), -- planning, in_progress, completed
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE todolist.tasks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id UUID REFERENCES todolist.projects(id),
    title VARCHAR(255),
    description TEXT,
    assignee_id UUID REFERENCES todolist.users(id),
    status VARCHAR(50),
    due_date DATE,
    created_at TIMESTAMP DEFAULT NOW()
);
```

### API 라우팅

```python
# main.py
from fastapi import FastAPI
from app.services.cert_exam.router import router as cert_exam_router
from app.services.admin.todolist.router import router as todolist_router
from app.core.config import settings

app = FastAPI(title="Platform API")

# 서비스별 라우터 등록
app.include_router(
    cert_exam_router,
    prefix="/api/cert-exam",
    tags=["cert-exam"]
)

app.include_router(
    todolist_router,
    prefix="/api/admin/todolist",
    tags=["todolist"]
)

# 공통 API
app.include_router(
    auth_router,
    prefix="/api/auth",
    tags=["auth"]
)

app.include_router(
    payments_router,
    prefix="/api/payments",
    tags=["payments"]
)
```

### 인증 토큰 격리

**JWT Payload 구조**
```json
{
  "sub": "user-uuid",
  "email": "user@example.com",
  "service_id": "cert-exam",
  "role": "premium_user",
  "exp": 1705654321
}
```

**서비스별 토큰 검증**
```python
def verify_service_token(service_id: str):
    def dependency(token: str = Depends(oauth2_scheme)):
        payload = decode_jwt(token)
        if payload["service_id"] != service_id:
            raise HTTPException(403, "Invalid service token")
        return payload
    return dependency

# 사용 예
@router.get("/questions")
async def get_questions(
    user = Depends(verify_service_token("cert-exam"))
):
    # cert-exam 서비스의 토큰만 허용
    pass
```

---

## 7. 로컬 서버 배포 전략

집 컴퓨터에서 시작해서 성공한 서비스만 AWS로 확장.

### Docker Compose 구성

```yaml
# docker-compose.yml
version: '3.8'

services:
  web:
    build:
      context: ./apps/web
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - NEXT_PUBLIC_API_URL=http://localhost:8000
      - NEXT_PUBLIC_WEB_URL=https://platform.com
    depends_on:
      - backend
    restart: unless-stopped

  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=postgresql://platform:password@postgres:5432/platform
      - REDIS_URL=redis://redis:6379
      - STRIPE_SECRET_KEY=${STRIPE_SECRET_KEY}
      - TOSS_SECRET_KEY=${TOSS_SECRET_KEY}
      - GOOGLE_CLIENT_ID=${GOOGLE_CLIENT_ID}
      - GOOGLE_CLIENT_SECRET=${GOOGLE_CLIENT_SECRET}
      - OPENAI_API_KEY=${OPENAI_API_KEY}
    depends_on:
      - postgres
      - redis
    restart: unless-stopped

  postgres:
    image: postgres:15-alpine
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
    environment:
      - POSTGRES_DB=platform
      - POSTGRES_USER=platform
      - POSTGRES_PASSWORD=password
    restart: unless-stopped

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/var/lib/redis/data
    restart: unless-stopped

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./certs:/etc/nginx/certs
    depends_on:
      - web
      - backend
    restart: unless-stopped

  watchtower:
    image: containrrr/watchtower
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    command: --interval 300
    restart: unless-stopped

volumes:
  postgres_data:
  redis_data:
```

### 외부 접근 설정

**동적 DNS**
- DuckDNS 또는 No-IP 사용
- 무료로 도메인 획득
- IP 변경 시 자동 업데이트

**HTTPS 설정**
```bash
# Let's Encrypt로 무료 SSL 인증서
certbot certonly --standalone -d platform.duckdns.org
```

**포트포워딩**
- 공유기 설정에서 80, 443 포트 열기
- 내부 IP (예: 192.168.0.100)로 전달

**방화벽**
```bash
# Ubuntu UFW 설정
sudo ufw allow 22    # SSH
sudo ufw allow 80    # HTTP
sudo ufw allow 443   # HTTPS
sudo ufw enable
```

### 모니터링 & 자동 재시작

**Watchtower**
- Docker 이미지 자동 업데이트
- 컨테이너 자동 재시작

**헬스 체크**
```yaml
# docker-compose.yml에 추가
services:
  backend:
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8000/health"]
      interval: 30s
      timeout: 10s
      retries: 3
```

**로그 관리**
```bash
# 로그 크기 제한
docker-compose logs --tail=100 -f

# 로그 로테이션 설정
```

### 백업 전략

**데이터베이스 백업**
```bash
#!/bin/bash
# backup.sh - 매일 자동 실행 (cron)

DATE=$(date +%Y%m%d)
docker exec postgres pg_dump -U platform platform > backup_$DATE.sql
gzip backup_$DATE.sql

# Google Drive에 업로드 (rclone 사용)
rclone copy backup_$DATE.sql.gz gdrive:/backups/
```

**Cron 설정**
```bash
# 매일 새벽 3시에 백업
0 3 * * * /home/user/backup.sh
```

**파일 저장소**
- 업로드 파일은 외장 HDD 동기화
- 또는 Google Drive 자동 백업

**코드**
- GitHub에 자동 푸시
- Git hooks 사용

### AWS 확장 시점

**확장이 필요한 경우:**
- 동시 접속자 100명 이상
- 월 매출 목표 달성 (예: $1000+)
- 99.9% 가동률이 필요한 서비스
- 글로벌 확장 필요

**AWS 마이그레이션 계획:**
1. RDS로 데이터베이스 이전
2. EC2 또는 ECS로 앱 배포
3. CloudFront CDN 추가
4. Route53으로 DNS 관리
5. 로드 밸런서 설정

---

## 8. 월간 서비스 출시 워크플로우

아이디어부터 출시까지 2주 이내 완료.

### 1단계: 아이디어 & 벤치마킹 (1-2일)

**경쟁사 분석**
- 유사 서비스 3-5개 조사
- 가격, 기능, UI/UX 비교
- 리뷰 및 사용자 피드백 분석

**차별화 포인트**
- 우리만의 강점 정의
- 타겟 유저 페르소나
- 핵심 가치 제안

**MVP 스코프**
- 최소 기능 정의
- todolist에 태스크 등록
- 출시 목표 설정

**수익 모델**
- 무료 플랜 범위
- 유료 플랜 가격
- 수익 목표 설정

### 2단계: 디자인 (2-3일)

**컬러 팔레트**
- Primary 색상 선정
- Secondary 색상
- 감성 키워드 정의 (모던, 따뜻함 등)

**와이어프레임**
- Figma로 주요 화면 5-7개 스케치
- 사용자 플로우 정의
- 모바일/데스크톱 레이아웃

**UI 컴포넌트**
- packages/ui에서 재사용
- 필요시 커스터마이징
- 새 컴포넌트 최소화

**디자인 시스템 적용**
```typescript
// 서비스 테마 정의 (5분 소요)
const theme = {
  primary: '#3B82F6',
  secondary: '#8B5CF6',
  serviceName: 'new-service',
}
```

### 3단계: 백엔드 개발 (3-4일)

**서비스 스캐폴딩**
```bash
# CLI로 자동 생성
npm run create-service new-service-name

# 자동 생성되는 구조:
# - backend/app/services/new_service/
#   - models.py (기본 User, Item 모델)
#   - schemas.py (Pydantic 스키마)
#   - router.py (CRUD API)
#   - service.py (비즈니스 로직)
# - DB 스키마 마이그레이션 파일
```

**DB 스키마 설계**
```sql
-- 자동 생성된 스키마 커스터마이징
CREATE SCHEMA new_service;
CREATE TABLE new_service.users (...);
CREATE TABLE new_service.items (...);
```

**API 개발**
- 기본 CRUD 수정
- 비즈니스 로직 추가
- 인증/결제 통합 (이미 구현됨)

**테스트**
```bash
# pytest로 주요 엔드포인트 검증
pytest tests/services/new_service/
```

### 4단계: 프론트엔드 개발 (4-5일)

**서비스 페이지 생성**
```bash
npm run create-service-frontend new-service-name

# 자동 생성:
# - app/new-service/ 디렉터리
# - layout.tsx (기본 레이아웃)
# - page.tsx (메인 페이지)
# - components/ (서비스 전용 컴포넌트)
```

**페이지 구현**
- 메인 페이지
- 상세 페이지
- 대시보드
- 설정 페이지

**상태 관리**
```typescript
// Zustand로 간단한 전역 상태
const useNewServiceStore = create((set) => ({
  items: [],
  addItem: (item) => set((state) => ({
    items: [...state.items, item]
  })),
}))
```

**API 연동**
```typescript
// React Query 사용
const { data, isLoading } = useQuery({
  queryKey: ['items'],
  queryFn: () => apiClient.get('/api/new-service/items'),
})
```

### 5단계: 애널리틱스 & CS (1일)

**이벤트 추적 설정**
```typescript
// 주요 이벤트 정의
trackEvent('new_service_signup')
trackEvent('new_service_conversion', { plan: 'premium' })
trackEvent('new_service_feature_used', { feature: 'export' })
```

**FAQ 작성**
- 예상 질문 5-10개
- 각 질문에 대한 답변
- 검색 가능하도록 DB에 저장

**문의 폼 활성화**
- 공통 문의 폼 사용
- 서비스별 카테고리 추가

### 6단계: 테스트 & 배포 (1일)

**내부 테스트**
- 팀원들이 todolist에서 버그 리포트
- 주요 기능 동작 확인
- 모바일 반응형 테스트

**Docker 빌드**
```bash
# 프로덕션 빌드
docker-compose build
docker-compose up -d

# 배포 확인
curl https://platform.com/new-service
```

**모니터링 확인**
- 로그 정상 출력 확인
- GA4 이벤트 수신 확인
- 에러 추적 동작 확인

### 총 소요 기간: 2주 이내 (12-14일)

---

## 9. 공통 재사용 모듈

빠른 출시를 위해 반복 작업을 최소화하는 핵심 컴포넌트들.

### packages/core - 핵심 비즈니스 로직

#### 인증 (auth)

```typescript
// 모든 서비스에서 동일한 방식으로 사용
import { useGoogleAuth } from '@platform/core/auth'

const LoginPage = () => {
  const { login, logout, user, isLoading } = useGoogleAuth('cert-exam')

  return (
    <button onClick={() => login()}>
      Google로 로그인
    </button>
  )
}
```

**제공 기능:**
- Google OAuth 플로우 자동 처리
- JWT 토큰 자동 갱신
- 로그인 상태 관리
- 서비스별 토큰 격리

#### 결제 (payments)

```typescript
import { useSubscription } from '@platform/core/payments'

const PricingPage = () => {
  const { subscribe, cancel, currentPlan, isLoading } = useSubscription()

  const handleSubscribe = async () => {
    await subscribe({
      plan: 'premium',
      provider: 'stripe', // or 'toss'
      serviceId: 'cert-exam',
    })
  }

  return (
    <button onClick={handleSubscribe}>
      프리미엄 구독하기
    </button>
  )
}
```

**제공 기능:**
- Stripe/Toss 추상화 (구현 상세 숨김)
- 구독 생성/취소/변경
- 결제 내역 조회
- 자동 영수증 발송

#### 애널리틱스 (analytics)

```typescript
import { trackEvent, trackPageView } from '@platform/core/analytics'

// 페이지뷰 자동 추적 (레이아웃에서)
useEffect(() => {
  trackPageView({
    service: 'cert-exam',
    page: '/questions/1234',
  })
}, [])

// 이벤트 추적
trackEvent('question_completed', {
  service: 'cert-exam',
  category: 'bigdata',
  score: 80,
  timeSpent: 45, // seconds
})

// 전환 추적
trackEvent('conversion', {
  service: 'cert-exam',
  plan: 'premium',
  revenue: 9.99,
})
```

**제공 기능:**
- GA4 + Mixpanel 자동 전송
- 표준화된 이벤트 형식
- 에러 자동 추적
- 사용자 속성 관리

### packages/ui - UI 컴포넌트

#### 레이아웃

```typescript
import { ServiceLayout } from '@platform/ui/layouts'

export default function CertExamLayout({ children }) {
  return (
    <ServiceLayout
      service="cert-exam"
      navigation={[
        { label: '문제 풀이', href: '/cert-exam/questions' },
        { label: '모의고사', href: '/cert-exam/mock-exams' },
        { label: '내 성적', href: '/cert-exam/stats' },
      ]}
    >
      {children}
    </ServiceLayout>
  )
}
```

**제공 컴포넌트:**
- `<ServiceLayout>`: 공통 헤더/푸터/사이드바
- `<AuthLayout>`: 로그인/회원가입 페이지용
- `<DashboardLayout>`: 대시보드형 레이아웃
- `<AdminLayout>`: 관리자 페이지 전용

#### 폼 컴포넌트

```typescript
import { FormInput, FormSubmitButton } from '@platform/ui/forms'
import { useForm } from 'react-hook-form'

const ProfileForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        label="이름"
        error={errors.name?.message}
        {...register('name', { required: '이름을 입력하세요' })}
      />

      <FormSubmitButton isLoading={isLoading}>
        저장
      </FormSubmitButton>
    </form>
  )
}
```

**제공 컴포넌트:**
- `<FormInput>`: 유효성 검사 내장, 에러 표시
- `<FormSelect>`, `<FormTextarea>`: 일관된 스타일
- `<FormSubmitButton>`: 로딩 상태 자동 처리
- `<FormError>`: 에러 메시지 표시

#### 데이터 표시

```typescript
import { DataTable, StatCard, EmptyState } from '@platform/ui/data'

const QuestionsPage = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        <StatCard
          title="총 문제 수"
          value={1234}
          change="+12%"
          icon={<BookIcon />}
        />
      </div>

      <DataTable
        columns={columns}
        data={questions}
        onSort={handleSort}
        onFilter={handleFilter}
        pagination
      />

      {questions.length === 0 && (
        <EmptyState
          title="문제가 없습니다"
          description="새로운 문제를 생성해보세요"
          action={<Button>문제 생성</Button>}
        />
      )}
    </>
  )
}
```

**제공 컴포넌트:**
- `<DataTable>`: 정렬/필터링/페이징 내장
- `<StatCard>`: 통계 카드
- `<EmptyState>`: 데이터 없을 때 표시
- `<LoadingState>`: 로딩 중 스켈레톤

#### 피드백

```typescript
import { useToast, useModal, useConfirm } from '@platform/ui/feedback'

const DeleteButton = ({ itemId }) => {
  const { toast } = useToast()
  const { confirm } = useConfirm()

  const handleDelete = async () => {
    const confirmed = await confirm({
      title: '정말 삭제하시겠습니까?',
      description: '이 작업은 되돌릴 수 없습니다.',
    })

    if (confirmed) {
      await deleteItem(itemId)
      toast.success('삭제되었습니다')
    }
  }

  return <Button onClick={handleDelete}>삭제</Button>
}
```

**제공 컴포넌트:**
- `<Toast>`: 알림 메시지
- `<Modal>`: 모달 다이얼로그
- `<ConfirmDialog>`: 확인 다이얼로그
- `<Alert>`: 경고/정보 메시지

### packages/utils - 공통 유틸리티

#### 날짜/시간

```typescript
import { formatDate, getRelativeTime } from '@platform/utils/date'

formatDate(new Date(), 'YYYY-MM-DD')  // "2026-01-18"
formatDate(new Date(), 'YYYY년 M월 D일')  // "2026년 1월 18일"

getRelativeTime(date)  // "3분 전", "2시간 전", "어제"
```

#### 검증

```typescript
import {
  validateEmail,
  validatePassword,
  validatePhone
} from '@platform/utils/validation'

const isValid = validateEmail('test@example.com')  // true
const passwordError = validatePassword('weak')
// "비밀번호는 8자 이상이어야 합니다"
```

#### API 클라이언트

```typescript
import { apiClient } from '@platform/utils/api'

// 자동으로 인증 헤더 추가, 에러 처리
const data = await apiClient.get('/api/cert-exam/questions')
const newItem = await apiClient.post('/api/cert-exam/questions', body)

// 에러는 자동으로 Toast로 표시
// 401 시 자동 로그아웃
// 토큰 만료 시 자동 갱신
```

---

## 10. CS 대응 및 레포팅

사용자 지원과 운영 현황을 효율적으로 관리.

### CS 대응 시스템

#### FAQ 자동 검색

```typescript
// 각 서비스 페이지에 FAQ 위젯 자동 삽입
<FAQWidget service="cert-exam" />

// 사용자가 검색하면 관련 FAQ 추천
// AI 기반 유사 질문 매칭 (선택사항)
```

**데이터베이스 구조:**
```sql
CREATE TABLE shared.faqs (
    id UUID PRIMARY KEY,
    service_id VARCHAR(100),
    question TEXT,
    answer TEXT,
    category VARCHAR(100),
    views INTEGER DEFAULT 0,
    helpful_count INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW()
);
```

#### 문의 양식

```typescript
import { ContactForm } from '@platform/ui/support'

const SupportPage = () => {
  return (
    <ContactForm
      service="cert-exam"
      categories={['기술 지원', '결제 문의', '기능 제안']}
      onSubmit={handleSubmit}
    />
  )
}
```

**자동 포함 정보:**
- User ID
- 구독 상태 (free/premium)
- 브라우저/OS 정보
- 에러 로그 (있는 경우)

**이메일 발송:**
```
To: support@platform.com
Subject: [cert-exam] 결제 문의 - 홍길동

서비스: cert-exam
카테고리: 결제 문의
사용자: 홍길동 (user-uuid)
구독: premium
등록일: 2026-01-15

문의 내용:
...
```

#### 문의 관리 (Admin Dashboard)

```
platform.com/admin/support

┌─────────────────────────────────────────┐
│ CS 문의 관리                             │
├─────────────────────────────────────────┤
│ 필터: [전체] [cert-exam] [todolist]     │
│ 상태: [미답변: 3] [답변 완료: 12]       │
├─────────────────────────────────────────┤
│ #123 | cert-exam | 결제 문의 | 미답변   │
│ 홍길동 | 2시간 전                        │
│                                          │
│ #122 | cert-exam | 버그 신고 | 답변완료 │
│ 김철수 | 5시간 전                        │
└─────────────────────────────────────────┘
```

**답변 템플릿:**
- 자주 사용하는 답변 저장
- 변수 삽입 (이름, 서비스명 등)
- 이메일로 직접 답변 전송

### 내부 레포팅 시스템

#### 실시간 대시보드

**URL:** `platform.com/admin/dashboard`

```
┌─────────────────────────────────────────┐
│ 오늘의 지표 (2026-01-18)                │
├─────────────────────────────────────────┤
│ 총 방문자: 1,234 (↑15%)                │
│ 신규 가입: 45 (↑8%)                    │
│   - cert-exam: 40                       │
│   - future-service: 5                   │
│ 결제 전환: 8건 ($320)                  │
│ 활성 사용자: 567 (DAU)                 │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ 서비스별 성과                            │
├─────────────────────────────────────────┤
│ cert-exam                               │
│ • DAU: 450 | MAU: 2,340                │
│ • 신규 가입: 40                        │
│ • 프리미엄 전환: 6 (15%)              │
│ • 수익: $240                           │
│                                          │
│ future-service                          │
│ • DAU: 117 | MAU: 450                  │
│ • 신규 가입: 5                         │
│ • 프리미엄 전환: 2 (40%)              │
│ • 수익: $80                            │
└─────────────────────────────────────────┘
```

#### 핵심 지표

**사용자 지표:**
- 총 가입자 수
- DAU (Daily Active Users)
- MAU (Monthly Active Users)
- 신규 가입자 (일/주/월)
- 이탈률

**수익 지표:**
- 일일 매출
- 월간 매출
- MRR (Monthly Recurring Revenue)
- 전환율 (무료 → 유료)
- ARPU (Average Revenue Per User)
- LTV (Lifetime Value)

**서비스 지표:**
- 서비스별 사용량
- 주요 기능 사용률
- 에러 발생률
- 응답 속도

#### 주간/월간 리포트 자동 발송

```python
# backend/app/shared/reporting.py

@scheduler.scheduled_job('cron', day_of_week='mon', hour=9)
async def send_weekly_report():
    """매주 월요일 오전 9시에 리포트 발송"""

    report = generate_weekly_report()

    email_content = f"""
Weekly Report {report.start_date} ~ {report.end_date}
━━━━━━━━━━━━━━━━━━━━━━━━

📊 cert-exam
  - 신규 가입: {report.cert_exam.signups} (↑12%)
  - 프리미엄 전환: {report.cert_exam.conversions} (7.7%)
  - 수익: ${report.cert_exam.revenue}
  - DAU 평균: {report.cert_exam.avg_dau}

📊 future-service
  - 신규 가입: {report.future_service.signups}
  - 프리미엄 전환: {report.future_service.conversions}
  - 수익: ${report.future_service.revenue}

💡 인사이트
  - cert-exam 전환율 개선 (5% → 7.7%)
  - 토요일 트래픽 가장 높음 (평일 대비 +30%)
  - 모바일 사용자 비율 증가 (45% → 52%)

⚠️ 주의사항
  - 환불 요청 3건 (cert-exam)
  - 서버 에러 spike 발생 (1/16 14:00-14:15)

📝 해야 할 일
  - 환불 사유 분석 필요
  - 에러 원인 파악 및 수정
    """

    await send_email(
        to=settings.ADMIN_EMAIL,
        subject=f"Weekly Report {report.start_date}",
        content=email_content
    )
```

#### 알림 설정

**Slack/이메일 알림:**
- 일일 매출 목표 달성 시
- 신규 프리미엄 가입 시
- 서버 에러 발생 시 (즉시)
- 환불 요청 시 (즉시)
- 높은 트래픽 감지 시

**알림 예시:**
```
🎉 목표 달성!
cert-exam 일일 매출이 $500를 달성했습니다.
현재: $520 (목표: $500)

━━━━━━━━━━━━━━━━

⚠️ 에러 발생
cert-exam에서 500 에러가 발생했습니다.
시간: 2026-01-18 14:32
URL: /api/cert-exam/questions/1234
사용자: user-uuid-123
```

---

## 11. 초기 구축 순서

플랫폼을 처음부터 구축하는 단계별 로드맵.

### Phase 1: 기반 인프라 (1-2주)

#### Week 1: 프로젝트 구조 & 공통 패키지

**Day 1-2: 모노레포 설정**
```bash
# pnpm workspace 초기화
mkdir platform && cd platform
pnpm init
echo "packages:\n  - 'packages/*'\n  - 'apps/*'" > pnpm-workspace.yaml

# 패키지 생성
mkdir -p packages/{core,ui,analytics,utils}
mkdir -p apps/{web,mobile}
mkdir -p backend
```

**Day 3-4: packages/core/auth**
- Google OAuth 연동
- JWT 토큰 생성/검증
- 로그인/로그아웃 훅
- 서비스별 토큰 격리

**Day 5-7: packages/core/payments**
- Stripe SDK 통합
- Toss Payments 통합
- 추상화 레이어 구현
- 구독 CRUD API

#### Week 2: UI & 데이터베이스

**Day 1-3: packages/ui**
- shadcn/ui 설치 및 설정
- 공통 컴포넌트 20개 구현
  - Button, Input, Card, Modal, Toast
  - DataTable, StatCard, EmptyState
  - FormInput, FormSelect, FormSubmitButton
  - ServiceLayout, AuthLayout, DashboardLayout
- 테마 시스템 구현

**Day 4-5: 데이터베이스 설정**
```sql
-- PostgreSQL 초기 설정
CREATE DATABASE platform;

-- 각 서비스용 스키마 생성
CREATE SCHEMA cert_exam;
CREATE SCHEMA todolist;
CREATE SCHEMA shared;

-- Alembic 마이그레이션 설정
```

**Day 6-7: packages/analytics**
- GA4 통합
- Mixpanel 통합
- trackEvent, trackPageView 함수
- 공통 이벤트 타입 정의

### Phase 2: 관리자 도구 (1주)

#### admin/todolist 구축

**목적:**
- 팀이 실제로 사용하면서 플랫폼 검증
- 공통 컴포넌트 실전 테스트
- 버그 조기 발견

**Day 1-2: 백엔드**
```python
# backend/app/services/admin/todolist/
# - models.py: Project, Task 모델
# - router.py: CRUD API
# - service.py: 비즈니스 로직
```

**Day 3-5: 프론트엔드**
```typescript
// apps/web/app/admin/todolist/
// - 프로젝트 목록/생성/수정
// - 태스크 목록/생성/수정
// - 진행 상황 대시보드
```

**Day 6-7: 테스트 & 개선**
- 팀원들이 실제 사용
- 피드백 수집 및 개선
- 공통 컴포넌트 버그 수정

### Phase 3: 첫 외부 서비스 (2주)

#### cert-exam 리팩토링

**Week 1: 백엔드 리팩토링**

**Day 1-2: 스키마 분리**
```sql
-- 기존 데이터를 cert_exam 스키마로 이전
CREATE SCHEMA cert_exam;
-- 테이블 이전 스크립트 작성
```

**Day 3-4: 인증 시스템 교체**
- 기존 인증 코드 제거
- packages/core/auth 사용
- 서비스 ID 'cert-exam' 적용

**Day 5-7: 결제 시스템 통합**
- packages/core/payments 적용
- 기존 결제 코드 제거
- 구독 관리 UI 연동

**Week 2: 프론트엔드 리팩토링**

**Day 1-3: UI 컴포넌트 교체**
- packages/ui 컴포넌트로 교체
- 기존 커스텀 컴포넌트 제거
- 테마 적용

**Day 4-5: 애널리틱스 연동**
- 주요 이벤트 추적 추가
- GA4/Mixpanel 연동
- 대시보드 확인

**Day 6-7: FAQ & CS 시스템**
- FAQ 데이터 작성
- 문의 폼 추가
- admin/support 페이지 연동

### Phase 4: 모바일 앱 (1주)

#### React Native 앱

**Day 1-2: 프로젝트 설정**
```bash
npx react-native init PlatformApp
cd apps/mobile

# 필수 패키지 설치
npm install react-native-webview
npm install @react-navigation/native
npm install @react-navigation/bottom-tabs
```

**Day 3-4: WebView 구현**
- ServiceWebView 컴포넌트
- URL 라우팅
- 웹↔네이티브 통신 브릿지

**Day 5: 네이티브 기능**
- Firebase 푸시 알림
- 생체인증 (Face ID/지문)
- 딥링크 설정

**Day 6-7: 테스트 & 빌드**
- iOS/Android 테스트
- 아이콘/스플래시 스크린
- 앱스토어 등록 준비

### Phase 5: 배포 & 모니터링 (3일)

#### 로컬 서버 세팅

**Day 1: Docker 설정**
```bash
# docker-compose.yml 작성
# Dockerfile 작성 (web, backend)
docker-compose build
docker-compose up -d
```

**Day 2: 도메인 & HTTPS**
- DuckDNS 등록
- Let's Encrypt 인증서 발급
- Nginx 리버스 프록시 설정
- 포트포워딩 설정

**Day 3: 백업 & 모니터링**
- DB 자동 백업 스크립트
- Cron 설정
- 로그 모니터링
- 알림 설정 (Slack/이메일)

### Phase 6: 서비스 템플릿 (2일)

#### 빠른 서비스 생성 CLI

**Day 1: CLI 구현**
```bash
# tools/create-service.js
# - 백엔드 템플릿 생성
# - 프론트엔드 템플릿 생성
# - DB 마이그레이션 생성
```

**Day 2: 템플릿 문서화**
- README 작성
- 사용 가이드
- 샘플 서비스 생성 테스트

### 총 기간: 6-7주

---

## 우선순위 정리

### Must Have (반드시 먼저)

1. **공통 인증 (Google OAuth)**
   - 모든 서비스의 기반
   - 보안 필수 요소

2. **공통 UI 컴포넌트**
   - 개발 속도 향상
   - 일관된 UX

3. **데이터베이스 구조**
   - 스키마 분리 전략
   - 마이그레이션 도구

4. **admin/todolist**
   - 내부 프로젝트 관리
   - 플랫폼 검증

### Should Have (그 다음)

5. **결제 시스템**
   - 수익화 필수
   - Stripe/Toss 통합

6. **cert-exam 리팩토링**
   - 첫 외부 서비스
   - 템플릿 검증

7. **애널리틱스**
   - 데이터 기반 의사결정
   - GA4/Mixpanel

8. **레포팅 대시보드**
   - 운영 현황 파악
   - 자동 리포트

### Nice to Have (나중에)

9. **모바일 앱**
   - 사용자 경험 향상
   - 푸시 알림

10. **고급 모니터링**
    - 상세 로그 분석
    - 성능 추적

11. **서비스 생성 CLI**
    - 개발 속도 향상
    - 템플릿 자동화

---

## 다음 단계

이 설계 문서를 바탕으로:

1. **구현 계획 수립**: 우선순위에 따라 구체적인 개발 일정 작성
2. **기술 스택 최종 확정**: 필요한 라이브러리/도구 리스트 작성
3. **팀 역할 분담**: 프론트/백엔드/인프라 담당 결정
4. **첫 스프린트 시작**: Phase 1부터 시작

---

**문서 작성**: 2026-01-18
**최종 검토**: 필요시 업데이트
