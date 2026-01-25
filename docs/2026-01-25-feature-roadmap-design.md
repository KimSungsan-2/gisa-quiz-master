# 기사 자격증 마스터 - 기능 확장 로드맵 & 디자인

> **작성일**: 2026-01-25
> **목적**: 경쟁사 차별화 및 사용자 경험 극대화
> **목표**: AI 기반 개인화 학습 + 게이미피케이션 + 커뮤니티 플랫폼

---

## 📊 현황 분석

### 현재 기사 자격증 마스터

**강점:**
- ✅ **4개 자격증 지원** (정보처리, 빅데이터, 냉동공조, 일반기계)
- ✅ **100% 무료** (경쟁사는 프리미엄 기능 유료)
- ✅ **완벽한 SEO** (sitemap, 구조화 데이터, meta 태그)
- ✅ **Firebase 기반** 인증 & 데이터 동기화
- ✅ **모던 기술 스택** (React 19, Vite, Tailwind)

**현재 기능:**
- 연습 모드 / 모의고사 모드
- 과목별 선택
- 오답노트 / 북마크
- 기본 통계 (정답률, 연속 학습일)
- Google OAuth 로그인

### 경쟁사 (맞추다) 분석

**그들이 가진 것:**
- 다크모드
- 오늘의 문제
- 맞춤 학습 (과목별 문제 수 설정)
- 강사 콘텐츠
- 커뮤니티
- 프리미엄 기능

**우리의 차별화 전략:**
1. **AI 기반 개인화** - 약점 자동 분석 + 맞춤 추천
2. **게이미피케이션** - 업적, 리더보드, 대결 모드
3. **소셜 학습** - 스터디 그룹, 학습 인증 공유
4. **다중 자격증** - 4개 자격증 (vs 경쟁사 1개)
5. **완전 무료** - 모든 기능 무료 제공

---

## 🗄️ 데이터 아키텍처

### 확장된 Firestore 구조

```javascript
users/{uid}
├── stats: { total, correct, streak, bySubject, byDifficulty, timeSpent }
├── wrongAnswers: ["INFO_SW_001", ...]
├── bookmarks: ["INFO_SW_010", ...]
├── analytics: {
│   weakestTopics,
│   estimatedPassRate,
│   recommendedDailyGoal
│ }
├── studyPlan: { examDate, dailyGoal, customChapters }
├── achievements: [{ id, unlockedAt }, ...]
└── settings: { darkMode, soundEffects, dailyReminder }

dailyQuestions/{date}
├── questions: { info, bigdata, refrigeration, mechanical }
└── participants: 234

leaderboard/{period}  // "2026-W04", "2026-01", "all-time"
└── rankings: [{ uid, displayName, score, accuracy }, ...]

studyGroups/{groupId}
├── name, description, certification
├── members: [{ uid, displayName, role }, ...]
├── groupStats: { totalQuestions, averageAccuracy }
└── settings: { dailyGoal, examDate }

battleSessions/{sessionId}
├── players: [{ uid, score, answers }, ...]
├── questions: ["INFO_SW_001", ...]
└── status: "in_progress"
```

### JSON 문제 데이터 구조

```
src/data/questions/
├── info/
│   ├── 소프트웨어설계.json
│   ├── 데이터베이스구축.json
│   ├── 프로그래밍언어활용.json
│   └── 정보시스템구축관리.json
├── bigdata/
│   ├── 빅데이터분석기획.json
│   ├── 빅데이터탐색.json
│   ├── 빅데이터모델링.json
│   └── 빅데이터결과해석.json
└── ...

public/images/questions/
├── info/
│   ├── INFO_SW_001.png
│   ├── INFO_DB_042.jpg
│   └── ...
├── bigdata/
└── ...
```

**JSON 문제 양식:**
```json
{
  "metadata": {
    "certification": "정보처리기사",
    "certificationCode": "info",
    "subject": "소프트웨어 설계",
    "subjectCode": "SW",
    "questionCount": 250,
    "lastUpdated": "2026-01-25"
  },
  "questions": [
    {
      "id": "INFO_SW_001",
      "question": "문제 본문",
      "questionImage": "/images/questions/info/INFO_SW_001.png",
      "options": ["선택지1", "선택지2", "선택지3", "선택지4"],
      "optionImages": [null, null, null, null],
      "answer": 2,
      "explanation": "해설",
      "explanationImage": null,
      "difficulty": "중",
      "tags": ["객체지향", "SOLID"],
      "year": "2024",
      "round": "1회",
      "source": "기출"
    }
  ]
}
```

---

## 🚀 단계별 구현 로드맵

### Phase 0: 기반 작업 (1주, ~10시간)

**목표**: 현재 JS 파일 → JSON 시스템으로 마이그레이션

| 작업 | 시간 | 우선순위 |
|------|------|---------|
| JSON 폴더 구조 생성 | 1h | ⚫⚫⚫ |
| 기존 문제 JSON 변환 | 1h | ⚫⚫⚫ |
| questionLoader.js 작성 | 2h | ⚫⚫⚫ |
| App.jsx 수정 (JSON import) | 1h | ⚫⚫⚫ |
| QuestionImage 컴포넌트 | 2h | ⚫⚫⚫ |
| 테스트 & 디버깅 | 3h | ⚫⚫⚫ |

**완료 기준:**
- ✅ 모든 문제가 JSON에서 정상 로드
- ✅ 이미지 있는 문제 표시 가능
- ✅ 기존 기능 모두 작동

---

### Phase 1: 즉시 개선 (1주, ~15시간)

**목표**: 빠르게 적용 가능한 UX 개선

#### 1. 다크모드 (4시간)

**구현 파일:**
- `src/contexts/DarkModeContext.jsx`
- `src/components/common/DarkModeToggle.jsx`
- `tailwind.config.js` (darkMode: 'class')

**기능:**
- 시스템 설정 자동 감지
- localStorage 저장
- 모든 컴포넌트에 dark: 클래스 적용

#### 2. 오늘의 문제 (6시간)

**구현 파일:**
- `functions/createDailyQuestions.js` (Cloud Function)
- `src/components/quiz/DailyQuestion.jsx`

**기능:**
- 매일 자정 자동 생성
- 자격증별 랜덤 1문제
- 참여자 수 표시
- 홈 화면 카드 배치

#### 3. 설정 화면 (3시간)

**구현 파일:**
- `src/components/settings/SettingsScreen.jsx`

**기능:**
- 다크모드 토글
- 사운드 효과 on/off
- 일일 알림 설정
- 자동 다음 문제 on/off

#### 4. 사운드 효과 (2시간)

**구현 파일:**
- `src/utils/soundEffects.js`
- `public/sounds/correct.mp3`, `wrong.mp3`, `achievement.mp3`

**기능:**
- 정답/오답 효과음
- 업적 달성 사운드
- 설정에서 on/off

---

### Phase 2: AI 개인화 학습 (2주, ~32시간)

**목표**: 핵심 차별화 기능 구현

#### 1. 약점 분석 엔진 (8시간)

**구현 파일:**
- `src/utils/aiAnalytics.js`
- `src/components/analytics/WeaknessAnalysis.jsx`

**기능:**
```javascript
- analyzeWeakness() // 주제별 정답률 분석
- analyzeByTags() // 태그별 상세 분석
- generateWeaknessReport() // 약점 리포트 생성
```

**UI:**
- 약한 과목 Top 3 표시
- 진행 바 + 정답률 %
- AI 추천 메시지

#### 2. 맞춤 문제 추천 (6시간)

**구현 파일:**
- `src/utils/recommendationEngine.js`
- "맞춤 학습" 모드 추가

**알고리즘:**
1. 약한 주제 우선 출제 (정답률 낮은 순)
2. 틀린 문제 재출제 (스페이스 리피티션)
3. 난이도 자동 조절 (너무 쉽지도 어렵지도 않게)

#### 3. 예상 합격률 계산 (4시간)

**구현 파일:**
- `src/utils/aiAnalytics.js` (calculatePassRate)
- `src/components/analytics/PassRateCard.jsx`

**계산 방식:**
- 과목별 가중 평균
- 최근 학습 추세 반영
- 합격 기준선(60점) 대비 비교

#### 4. D-day 학습 플랜 (6시간)

**구현 파일:**
- `src/components/study/StudyPlanSetting.jsx`
- `src/components/study/StudyPlanDashboard.jsx`

**기능:**
- 시험일 설정
- 일일 목표 자동 계산
- 진행률 대시보드
- "현재 진도로는 시험 전까지 80% 완료 예상"

#### 5. 스페이스 리피티션 (8시간)

**구현 파일:**
- `src/utils/spaceRepetition.js`

**알고리즘:**
- 틀린 문제: 1일 → 3일 → 7일 → 30일 후 재출제
- 맞은 문제: 간격 늘리기
- 다시 틀리면: 스케줄 초기화

---

### Phase 3: 소셜 & 게이미피케이션 (2주, ~50시간)

**목표**: 동기부여 & 재미 요소

#### 1. 업적 시스템 (8시간)

**구현 파일:**
- `src/data/achievements.js` (20-30개 업적 정의)
- `src/utils/achievementChecker.js`
- `src/components/gamification/AchievementUnlock.jsx`
- `src/components/gamification/AchievementList.jsx`

**업적 종류:**
- 기본: 첫 100문제, 500문제, 1000문제
- 연속: 3일, 7일, 30일 연속
- 정확도: 80%, 90% 달성
- 모의고사: 80점, 100점
- 시간대: 아침형 인간, 올빼미족
- 특별: 만능 엔터테이너, 스피드 러너

**애니메이션:**
- 풀스크린 축하 모달
- 별 효과 + 애니메이션
- 사운드 효과

#### 2. 리더보드 (10시간)

**구현 파일:**
- `functions/updateLeaderboard.js` (Cloud Function)
- `src/components/gamification/Leaderboard.jsx`

**기능:**
- 주간/월간/전체 탭
- Top 100 표시
- 프로필 사진 + 이름
- 점수, 정답률, 학습 시간
- 1-3등 특별 표시 (🏆🥈🥉)

#### 3. 학습 인증 공유 (4시간)

**구현 파일:**
- `src/components/gamification/ShareProgress.jsx`

**기능:**
- Canvas로 이미지 생성
  - 오늘의 문제 수
  - 정답률
  - 연속 학습일
  - 앱 로고
- Web Share API (모바일)
- 다운로드 (PC)

#### 4. 스터디 그룹 (12시간)

**구현 파일:**
- `src/components/social/StudyGroup.jsx`
- `src/components/social/CreateGroupModal.jsx`
- `src/components/social/GroupDashboard.jsx`

**기능:**
- 그룹 생성 (이름, 설명, 목표일, 일일 목표)
- 공개/비공개 설정
- 최대 20명
- 그룹 통계 (평균 정답률, 총 학습 시간)
- 멤버 진행률 비교

#### 5. 1:1 퀴즈 대결 (16시간)

**구현 파일:**
- `src/components/battle/BattleMatching.jsx`
- `src/components/battle/BattleArena.jsx`
- `src/components/battle/BattleResult.jsx`

**기능:**
- 친구 초대 or 랜덤 매칭
- 10문제 동시 풀이
- 실시간 점수 표시
- 승자 결정 + 리플레이

---

### Phase 4: 고급 학습 기능 (2주, ~28시간)

**목표**: 전문성 강화

#### 1. 상세 모의고사 리포트 (8시간)
- 과목별 정답률 차트 (Chart.js)
- 난이도별 분석
- 취약 영역 하이라이트
- PDF 내보내기

#### 2. 문제별 시간 분석 (4시간)
- 각 문제 소요 시간 저장
- 평균 vs 본인 비교
- 시간 관리 팁 제공

#### 3. AI 요약 노트 (6시간)
- 틀린 문제 자동 분류
- 패턴 분석
- PDF/이미지 내보내기

#### 4. 음성 해설 TTS (6시간)
- Web Speech API
- 해설 음성 재생
- 이동 중 학습

#### 5. 스마트 리마인더 (4시간)
- Push Notification (Firebase Cloud Messaging)
- 학습 시간 알림
- 스트릭 유지 알림

---

### Phase 5: 커뮤니티 (3주+, ~50시간)

**목표**: 장기 운영 기반 구축

#### 1. Q&A 게시판 (20시간)
- 문제별 질문/답변
- 좋아요/베스트 답변
- 태그 검색
- 알림 시스템

#### 2. 사용자 문제 생성 (16시간)
- 문제 제출 폼
- 관리자 승인 시스템
- 기여도 포인트

#### 3. 문제 평가 시스템 (8시간)
- 👍 도움됐어요 / 👎 별로예요
- 난이도 피드백
- 오류 신고

#### 4. 합격 후기 (6시간)
- 후기 작성
- 공부 팁 공유
- 좋아요 + 댓글

---

## 📅 전체 타임라인

| Phase | 기간 | 주요 기능 | 누적 시간 |
|-------|------|----------|-----------|
| **Phase 0** | 1주 | JSON 마이그레이션 | 10h |
| **Phase 1** | 1주 | 다크모드 + 오늘의 문제 | 25h |
| **Phase 2** | 2주 | AI 개인화 학습 | 57h |
| **Phase 3** | 2주 | 소셜 & 게이미피케이션 | 107h |
| **Phase 4** | 2주 | 고급 학습 기능 | 135h |
| **Phase 5** | 3주+ | 커뮤니티 | 185h+ |

**총 개발 기간: 약 2-3개월 (파트타임 기준)**

---

## 🎯 우선순위별 추천 순서

### 🔴 최우선 (즉시 시작)

1. **Phase 0: JSON 마이그레이션** (필수 기반 작업)
2. **Phase 1: 다크모드 + 오늘의 문제** (빠른 효과)
3. **Phase 2: 약점 분석 + 맞춤 추천** (핵심 차별화)

**→ 이 3가지만 완성해도 경쟁사 대비 강력한 차별화!**

### 🟡 중요 (1-2개월 내)

4. **Phase 2: 예상 합격률 + D-day 플랜**
5. **Phase 3: 업적 시스템 + 리더보드**

**→ 동기부여 & 재방문율 극대화**

### 🟢 장기 (3개월+)

6. **Phase 3: 스터디 그룹 + 대결**
7. **Phase 4: 고급 기능**
8. **Phase 5: 커뮤니티**

---

## 🛠️ 기술 스택 추가 필요 사항

### 프론트엔드 라이브러리

```json
{
  "dependencies": {
    "chart.js": "^4.4.1",           // 차트 (약점 분석, 리포트)
    "react-chartjs-2": "^5.2.0",
    "jspdf": "^2.5.1",              // PDF 생성
    "html2canvas": "^1.4.1",        // 이미지 생성 (공유)
    "date-fns": "^3.0.0"            // 날짜 계산 (D-day)
  }
}
```

### Firebase 추가 설정

```javascript
// Cloud Functions 필요
- createDailyQuestions (매일 자정 실행)
- updateLeaderboard (매주 일요일 실행)
- sendReminders (푸시 알림)

// Firebase Cloud Messaging (Push 알림)
```

---

## 📝 문제 수집 가이드

### AI에게 줄 프롬프트

```markdown
다음 형식으로 문제를 JSON으로 변환해줘:

{
  "id": "INFO_SW_001",
  "question": "문제 텍스트",
  "questionImage": null,  // 이미지 있으면 "/images/questions/info/INFO_SW_001.png"
  "options": ["선택지1", "선택지2", "선택지3", "선택지4"],
  "optionImages": [null, null, null, null],
  "answer": 2,  // 0-3 (정답 인덱스)
  "explanation": "해설 텍스트",
  "explanationImage": null,
  "difficulty": "중",  // "하", "중", "상"
  "tags": ["태그1", "태그2"],
  "year": "2024",
  "round": "1회",
  "source": "기출"
}

규칙:
- ID는 {자격증코드}_{과목코드}_{3자리숫자} 형식
- answer는 0부터 시작 (0=1번, 1=2번, 2=3번, 3=4번)
- 이미지 없으면 null
- tags는 2-5개 정도
- difficulty는 문제 난이도 추정
```

### 이미지 파일 네이밍

```
문제 이미지:     {문제ID}.{확장자}
               예) INFO_SW_001.png

선택지 이미지:   {문제ID}_opt{번호}.{확장자}
               예) INFO_DB_042_opt1.png

해설 이미지:     {문제ID}_explain.{확장자}
               예) INFO_DB_042_explain.png
```

---

## 🎨 디자인 가이드라인

### 컬러 팔레트 (다크모드 대응)

```css
/* 라이트 모드 */
--primary: #667eea;        /* 메인 색상 */
--secondary: #764ba2;      /* 보조 색상 */
--success: #10b981;        /* 정답 */
--error: #ef4444;          /* 오답 */
--warning: #f59e0b;        /* 경고 */
--background: #ffffff;     /* 배경 */
--surface: #f3f4f6;        /* 카드 */

/* 다크 모드 */
--primary-dark: #818cf8;
--secondary-dark: #a78bfa;
--background-dark: #1f2937;
--surface-dark: #374151;
```

### 컴포넌트 스타일 원칙

1. **모든 배경/텍스트에 dark: 클래스 적용**
2. **트랜지션 추가** (transition-colors duration-200)
3. **호버 효과** (hover:bg-gray-100 dark:hover:bg-gray-700)
4. **그림자 적용** (shadow-md, shadow-lg)
5. **둥근 모서리** (rounded-lg, rounded-xl)

---

## 📊 성공 지표 (KPI)

### Phase별 목표

**Phase 1 완료 후:**
- [ ] 일일 활성 사용자(DAU) 10% 증가
- [ ] 평균 체류 시간 15% 증가
- [ ] 다크모드 사용률 60% 이상

**Phase 2 완료 후:**
- [ ] 학습 효율 30% 향상 (정답률 증가)
- [ ] 재방문율 40% 증가
- [ ] 사용자 만족도 4.5/5.0 이상

**Phase 3 완료 후:**
- [ ] 소셜 공유 주간 100회 이상
- [ ] 스터디 그룹 50개 생성
- [ ] 리더보드 참여율 30% 이상

**전체 완료 후:**
- [ ] 월간 활성 사용자(MAU) 10,000명
- [ ] 평균 학습 문제 수 300문제/유저
- [ ] 앱스토어 리뷰 평점 4.8/5.0

---

## 🚧 리스크 & 대응 방안

### 기술적 리스크

**1. Firebase 비용 증가**
- **리스크**: 사용자 증가 시 Firestore 읽기/쓰기 비용 폭증
- **대응**:
  - 로컬 캐싱 강화
  - 실시간 리스너 최소화
  - 배치 작업 최적화

**2. JSON 파일 크기**
- **리스크**: 1,000문제 × 4자격증 = 대용량 파일
- **대응**:
  - Lazy loading (과목별 분리 import)
  - 코드 스플리팅 (Vite 자동 처리)
  - 압축 최적화

**3. 실시간 대결 기능**
- **리스크**: WebSocket 구현 복잡도
- **대응**:
  - Phase 3 후반부로 미루기
  - Firestore 실시간 리스너로 간단 구현
  - 완벽한 동기화보다 UX 우선

### 운영 리스크

**1. 문제 저작권**
- **리스크**: 기출문제 무단 사용 이슈
- **대응**:
  - 공공 기출문제만 사용
  - 출처 명시
  - AI 생성 문제로 보완

**2. 부적절한 콘텐츠 (커뮤니티)**
- **리스크**: Q&A, 후기에 스팸/욕설
- **대응**:
  - 신고 기능
  - 간단한 필터링 (욕설 감지)
  - 관리자 승인 시스템

---

## 📚 참고 자료

### 유사 서비스 벤치마킹

1. **맞추다** (https://www.machuda.kr)
   - 다크모드, 오늘의 문제, 프리미엄 기능

2. **Duolingo** (언어 학습)
   - 게이미피케이션, 스트릭, 리더보드

3. **Kahoot** (퀴즈 플랫폼)
   - 실시간 대결, 재미 요소

### 기술 문서

- [Firebase Firestore 가이드](https://firebase.google.com/docs/firestore)
- [Chart.js 문서](https://www.chartjs.org/docs/)
- [Tailwind Dark Mode](https://tailwindcss.com/docs/dark-mode)
- [Web Share API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API)

---

## ✅ 다음 단계

### 즉시 시작할 작업

1. **Phase 0 시작**: JSON 마이그레이션
   - [ ] `src/data/questions/info/` 폴더 생성
   - [ ] 기존 문제 JSON 변환
   - [ ] questionLoader.js 작성

2. **문제 수집 준비**
   - [ ] 기출문제 PDF/사이트 URL 수집
   - [ ] AI 변환 프롬프트 준비
   - [ ] 이미지 추출 계획

3. **Firebase 설정**
   - [ ] Cloud Functions 활성화
   - [ ] Firestore 인덱스 생성
   - [ ] Storage 규칙 설정

---

## 📞 문의 & 피드백

**질문이나 제안이 있다면:**
- GitHub Issues: [github.com/yourrepo/issues]
- 이메일: [your-email@example.com]

**이 문서는 살아있는 문서입니다.**
구현 과정에서 지속적으로 업데이트됩니다.

---

**작성자**: Claude Sonnet 4.5
**최종 수정**: 2026-01-25
