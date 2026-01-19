# 플랫폼 디자인 시스템

**기반**: 토스(Toss) 디자인 철학
**목표**: AI 티 안나는 자연스럽고 신뢰감 있는 디자인

---

## 디자인 철학

### 핵심 원칙
1. **명확성**: 사용자가 직관적으로 이해할 수 있는 인터페이스
2. **신뢰성**: 전문적이고 안정감 있는 시각적 언어
3. **편의성**: 최소한의 클릭으로 목적 달성
4. **일관성**: 모든 서비스에서 통일된 경험

### 토스에서 배운 점
- 넓은 여백으로 시각적 여유 제공
- 블루 계열 색상으로 신뢰감 표현
- 명확한 타이포그래피 계층
- 미니멀하지만 따뜻한 인터랙션

---

## 1. 색상 시스템

### Primary Colors (브랜드)

```css
:root {
  /* Primary Blue - 토스 스타일 */
  --primary-50: #eff6ff;
  --primary-100: #dbeafe;
  --primary-200: #bfdbfe;
  --primary-300: #93c5fd;
  --primary-400: #60a5fa;
  --primary-500: #3182f6;  /* Main - 토스 블루 */
  --primary-600: #2563eb;
  --primary-700: #1d4ed8;
  --primary-800: #1e40af;
  --primary-900: #1e3a8a;

  /* Semantic Colors */
  --success: #03b26c;      /* 토스 그린 */
  --danger: #f04452;       /* 토스 레드 */
  --warning: #fe9800;      /* 토스 오렌지 */
  --info: #3182f6;         /* Primary와 동일 */
}
```

### Neutral Colors (회색 스케일)

```css
:root {
  /* 토스의 뉴트럴 시스템 */
  --gray-50: #f9fafb;
  --gray-100: #f3f4f6;
  --gray-200: #e5e7eb;
  --gray-300: #d1d5db;
  --gray-400: #9ca3af;
  --gray-500: #6b7280;
  --gray-600: #4b5563;
  --gray-700: #374151;
  --gray-800: #1f2937;
  --gray-900: #191f28;     /* 토스 다크 */

  /* Semantic Grays */
  --background: #ffffff;
  --background-secondary: #f9fafb;
  --text-primary: #191f28;
  --text-secondary: #4b5563;
  --text-tertiary: #9ca3af;
  --border: #e5e7eb;
}
```

### Opacity System (투명도)

```css
:root {
  /* 토스식 10단계 투명도 - 미묘한 계층 표현 */
  --opacity-10: rgba(25, 31, 40, 0.04);
  --opacity-20: rgba(25, 31, 40, 0.08);
  --opacity-30: rgba(25, 31, 40, 0.12);
  --opacity-40: rgba(25, 31, 40, 0.16);
  --opacity-50: rgba(25, 31, 40, 0.20);
  --opacity-60: rgba(25, 31, 40, 0.30);
  --opacity-70: rgba(25, 31, 40, 0.50);
  --opacity-80: rgba(25, 31, 40, 0.70);
  --opacity-90: rgba(25, 31, 40, 0.85);
  --opacity-100: rgba(25, 31, 40, 1.00);
}
```

---

## 2. 타이포그래피

### Font Family

```css
:root {
  /* Primary Font Stack */
  --font-sans: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo",
               "Pretendard Variable", Pretendard, Roboto,
               "Noto Sans KR", "Segoe UI", "Malgun Gothic",
               "Apple Color Emoji", "Segoe UI Emoji", sans-serif;

  /* Monospace (코드, 숫자) */
  --font-mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo,
               Consolas, "Liberation Mono", monospace;
}

body {
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

### Font Scale (토스 방식)

```css
:root {
  /* Display - 히어로 섹션용 */
  --text-display-1: 60px;
  --text-display-2: 52px;
  --text-display-3: 44px;

  /* Heading */
  --text-h1: 36px;
  --text-h2: 32px;
  --text-h3: 28px;
  --text-h4: 24px;
  --text-h5: 20px;
  --text-h6: 18px;

  /* Body */
  --text-body-1: 20px;     /* 토스의 큰 본문 */
  --text-body-2: 16px;     /* 기본 본문 */
  --text-body-3: 14px;     /* 작은 본문 */

  /* Caption */
  --text-caption: 13px;
  --text-overline: 12px;

  /* Line Heights */
  --leading-tight: 1.2;
  --leading-normal: 1.5;
  --leading-relaxed: 1.6;
  --leading-loose: 1.8;

  /* Font Weights */
  --font-light: 300;
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
}
```

### Typography Classes

```css
/* Display */
.display-1 {
  font-size: var(--text-display-1);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  letter-spacing: -0.02em;
}

/* Heading */
.heading-1 {
  font-size: var(--text-h1);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  letter-spacing: -0.01em;
}

/* Body - 토스 스타일 */
.body-1 {
  font-size: var(--text-body-1);
  font-weight: var(--font-semibold);  /* 토스는 본문도 semibold */
  line-height: var(--leading-relaxed);
}

.body-2 {
  font-size: var(--text-body-2);
  font-weight: var(--font-normal);
  line-height: var(--leading-normal);
}

/* Caption */
.caption {
  font-size: var(--text-caption);
  font-weight: var(--font-medium);
  line-height: var(--leading-normal);
  color: var(--text-secondary);
}
```

### 반응형 Typography

```css
/* Mobile: 폰트 크기 85% */
@media (max-width: 768px) {
  :root {
    --text-display-1: 44px;
    --text-display-2: 38px;
    --text-h1: 28px;
    --text-h2: 24px;
    --text-body-1: 18px;
  }
}
```

---

## 3. 간격 시스템 (Spacing)

### 토스 기반 4px 시스템

```css
:root {
  --spacing-1: 4px;
  --spacing-2: 8px;
  --spacing-3: 12px;
  --spacing-4: 16px;
  --spacing-5: 20px;
  --spacing-6: 24px;
  --spacing-8: 32px;
  --spacing-10: 40px;
  --spacing-12: 48px;
  --spacing-16: 64px;
  --spacing-20: 80px;
  --spacing-24: 96px;
  --spacing-32: 128px;
}
```

### Container & Layout

```css
.container {
  max-width: 1040px;        /* 토스 기준 */
  margin: 0 auto;
  padding: 0 var(--spacing-5);
}

@media (max-width: 768px) {
  .container {
    padding: 0 var(--spacing-4);
  }
}

/* Section 간격 */
.section {
  padding: var(--spacing-32) 0;  /* PC: 128px */
}

@media (max-width: 768px) {
  .section {
    padding: var(--spacing-16) 0;  /* Mobile: 64px */
  }
}
```

---

## 4. 컴포넌트 스타일

### Button (토스 스타일)

```css
.btn {
  /* 기본 */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: var(--font-semibold);
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  /* 토스식 활성 상태 */
  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
}

/* Size Variants - 토스 8px 단위 */
.btn-lg {
  height: 56px;
  padding: 0 var(--spacing-6);
  font-size: var(--text-body-1);
  border-radius: 12px;
}

.btn-md {
  height: 48px;
  padding: 0 var(--spacing-5);
  font-size: var(--text-body-2);
  border-radius: 10px;
}

.btn-sm {
  height: 40px;
  padding: 0 var(--spacing-4);
  font-size: var(--text-body-3);
  border-radius: 8px;
}

.btn-xs {
  height: 32px;
  padding: 0 var(--spacing-3);
  font-size: var(--text-caption);
  border-radius: 6px;
}

/* Color Variants */
.btn-primary {
  background: var(--primary-500);
  color: white;

  &:hover {
    background: var(--primary-600);
  }
}

.btn-secondary {
  background: var(--gray-100);
  color: var(--text-primary);

  &:hover {
    background: var(--gray-200);
  }
}

.btn-danger {
  background: var(--danger);
  color: white;

  &:hover {
    background: #d93947;
  }
}

/* Outline Variant - 토스 스타일 */
.btn-outline {
  background: white;
  border: 1.5px solid var(--border);
  color: var(--text-primary);

  &:hover {
    background: var(--gray-50);
    border-color: var(--gray-300);
  }
}
```

### Card (토스 스타일)

```css
.card {
  background: white;
  border-radius: 12px;
  padding: var(--spacing-6);
  border: 1px solid var(--border);
  transition: all 0.2s ease;

  /* 토스식 미묘한 그림자 */
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  &:hover {
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.08);
    border-color: var(--gray-300);
  }
}

.card-header {
  margin-bottom: var(--spacing-4);
}

.card-title {
  font-size: var(--text-h4);
  font-weight: var(--font-bold);
  color: var(--text-primary);
}

.card-description {
  font-size: var(--text-body-3);
  color: var(--text-secondary);
  margin-top: var(--spacing-2);
}

.card-content {
  color: var(--text-primary);
}
```

### Input (토스 스타일)

```css
.input {
  width: 100%;
  height: 48px;
  padding: 0 var(--spacing-4);
  font-size: var(--text-body-2);
  font-weight: var(--font-medium);
  color: var(--text-primary);
  background: white;
  border: 1.5px solid var(--border);
  border-radius: 8px;
  transition: all 0.2s ease;

  &::placeholder {
    color: var(--text-tertiary);
  }

  &:focus {
    outline: none;
    border-color: var(--primary-500);
    box-shadow: 0 0 0 3px var(--primary-100);
  }

  &:disabled {
    background: var(--gray-50);
    color: var(--text-tertiary);
    cursor: not-allowed;
  }

  &.error {
    border-color: var(--danger);

    &:focus {
      box-shadow: 0 0 0 3px rgba(240, 68, 82, 0.1);
    }
  }
}

/* Textarea */
.textarea {
  min-height: 120px;
  padding: var(--spacing-3) var(--spacing-4);
  resize: vertical;
}

/* Label - 토스 스타일 */
.label {
  display: block;
  font-size: var(--text-body-3);
  font-weight: var(--font-semibold);
  color: var(--text-primary);
  margin-bottom: var(--spacing-2);
}

.helper-text {
  font-size: var(--text-caption);
  color: var(--text-secondary);
  margin-top: var(--spacing-2);

  &.error {
    color: var(--danger);
  }
}
```

### Modal (토스 스타일)

```css
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(25, 31, 40, 0.5);  /* 토스 다크 50% */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.2s ease;
}

.modal {
  background: white;
  border-radius: 16px;
  max-width: 480px;
  width: 90%;
  max-height: 90vh;
  overflow: hidden;
  box-shadow: 0 20px 60px 0 rgba(0, 0, 0, 0.15);
  animation: slideUp 0.3s ease;
}

.modal-header {
  padding: var(--spacing-6) var(--spacing-6) var(--spacing-4);
}

.modal-title {
  font-size: var(--text-h3);
  font-weight: var(--font-bold);
  color: var(--text-primary);
}

.modal-content {
  padding: 0 var(--spacing-6) var(--spacing-6);
  overflow-y: auto;
}

.modal-footer {
  padding: var(--spacing-4) var(--spacing-6) var(--spacing-6);
  display: flex;
  gap: var(--spacing-3);
  justify-content: flex-end;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Toast (토스 스타일)

```css
.toast {
  position: fixed;
  bottom: var(--spacing-6);
  left: 50%;
  transform: translateX(-50%);
  background: var(--gray-900);
  color: white;
  padding: var(--spacing-4) var(--spacing-5);
  border-radius: 12px;
  font-size: var(--text-body-3);
  font-weight: var(--font-medium);
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.2);
  z-index: 2000;
  animation: toastSlideUp 0.3s ease;

  &.success {
    background: var(--success);
  }

  &.error {
    background: var(--danger);
  }
}

@keyframes toastSlideUp {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}
```

---

## 5. 레이아웃 패턴

### Hero Section (토스 스타일)

```css
.hero {
  padding: var(--spacing-32) 0;
  text-align: center;
  background: linear-gradient(180deg,
    var(--gray-50) 0%,
    white 100%
  );
}

.hero-title {
  font-size: var(--text-display-1);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  letter-spacing: -0.02em;
  color: var(--text-primary);
  margin-bottom: var(--spacing-5);
}

.hero-description {
  font-size: var(--text-body-1);
  font-weight: var(--font-medium);
  color: var(--text-secondary);
  line-height: var(--leading-relaxed);
  max-width: 600px;
  margin: 0 auto var(--spacing-8);
}

.hero-cta {
  display: flex;
  gap: var(--spacing-3);
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .hero {
    padding: var(--spacing-16) 0;
  }

  .hero-cta {
    flex-direction: column;
  }
}
```

### Feature Grid (토스 스타일)

```css
.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-6);
  margin-top: var(--spacing-10);
}

.feature-item {
  padding: var(--spacing-6);
  border-radius: 12px;
  background: white;
  border: 1px solid var(--border);
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--primary-200);
    box-shadow: 0 4px 12px 0 rgba(49, 130, 246, 0.1);
  }
}

.feature-icon {
  width: 48px;
  height: 48px;
  background: var(--primary-50);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-500);
  margin-bottom: var(--spacing-4);
}

.feature-title {
  font-size: var(--text-h5);
  font-weight: var(--font-bold);
  color: var(--text-primary);
  margin-bottom: var(--spacing-2);
}

.feature-description {
  font-size: var(--text-body-3);
  color: var(--text-secondary);
  line-height: var(--leading-normal);
}

@media (max-width: 768px) {
  .feature-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-4);
  }
}
```

---

## 6. 애니메이션 & 인터랙션

### Transition Timing (토스 방식)

```css
:root {
  --duration-fast: 150ms;
  --duration-normal: 200ms;
  --duration-slow: 300ms;

  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
}

/* 토스식 스무스 트랜지션 */
.smooth-transition {
  transition: all var(--duration-normal) var(--ease-in-out);
}
```

### Scroll-based Animation

```css
/* 토스처럼 스크롤 시 점진적 등장 */
.fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in-up.visible {
  opacity: 1;
  transform: translateY(0);
}

/* JavaScript로 스크롤 감지 */
```

```javascript
// Intersection Observer로 토스식 애니메이션
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
    }
  })
}, observerOptions)

document.querySelectorAll('.fade-in-up').forEach(el => {
  observer.observe(el)
})
```

### Hover Effects (토스 스타일)

```css
/* 카드 호버 - 미묘한 상승 */
.card-hover {
  transition: all var(--duration-normal) var(--ease-out);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.1);
  }
}

/* 버튼 호버 - 밝기 변화 */
.btn-hover {
  transition: all var(--duration-fast) var(--ease-out);

  &:hover {
    filter: brightness(0.95);
  }

  &:active {
    transform: scale(0.98);
  }
}
```

---

## 7. 서비스별 커스터마이징

### 테마 변수 시스템

각 서비스는 primary 색상만 변경하여 브랜딩:

```css
/* cert-exam 서비스 */
[data-service="cert-exam"] {
  --primary-500: #3182f6;  /* 토스 블루 유지 */
  --service-accent: #60a5fa;
}

/* todolist 서비스 */
[data-service="todolist"] {
  --primary-500: #03b26c;  /* 토스 그린 */
  --service-accent: #10b981;
}

/* future-service */
[data-service="future-service"] {
  --primary-500: #8b5cf6;  /* 보라색 */
  --service-accent: #a78bfa;
}
```

### 다크모드 (선택사항)

```css
@media (prefers-color-scheme: dark) {
  :root {
    --background: #191f28;
    --background-secondary: #2d3748;
    --text-primary: #f9fafb;
    --text-secondary: #d1d5db;
    --border: #374151;
  }
}
```

---

## 8. 구현 가이드

### Tailwind Config

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3182f6',  // 토스 블루
          600: '#2563eb',
        },
        gray: {
          50: '#f9fafb',
          900: '#191f28',  // 토스 다크
        },
        success: '#03b26c',
        danger: '#f04452',
        warning: '#fe9800',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Apple SD Gothic Neo',
               'Pretendard Variable', 'Pretendard', 'sans-serif'],
      },
      fontSize: {
        'display-1': '60px',
        'display-2': '52px',
        'h1': '36px',
        'body-1': '20px',
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '32': '128px',
      },
      borderRadius: {
        'lg': '12px',
        'xl': '16px',
      },
      maxWidth: {
        'container': '1040px',  // 토스 기준
      },
    },
  },
}
```

### CSS Variables 통합

```css
/* globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* 토스 색상 시스템 */
    --primary: 207 89% 61%;  /* #3182f6 in HSL */
    --success: 162 97% 35%;  /* #03b26c in HSL */
    --danger: 354 85% 62%;   /* #f04452 in HSL */

    /* 토스 타이포그래피 */
    --font-sans: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", sans-serif;
  }

  body {
    @apply font-sans text-gray-900 bg-white antialiased;
  }
}
```

---

## 9. AI 티 안나는 디테일

### 자연스러운 요소들

1. **불규칙한 간격**: 완벽한 대칭보다 약간의 비대칭
2. **손으로 쓴 듯한 요소**: 일러스트, 아이콘에 약간의 불완전함
3. **따뜻한 마이크로카피**: "제출하기" 대신 "보내기", "완료했어요"
4. **실제 사용 시나리오**: 더미 데이터 대신 현실적인 예시
5. **미묘한 애니메이션**: 기계적이지 않은 자연스러운 움직임

### 피해야 할 AI 티나는 요소

- ❌ 완벽하게 정렬된 그리드
- ❌ 단조로운 컬러 그라데이션
- ❌ 과도하게 세련된 3D 일러스트
- ❌ 너무 많은 그림자/효과
- ❌ 로봇 같은 문구 ("귀하의 요청이 처리되었습니다")

### 사람이 만든 느낌

- ✅ 손글씨 폰트 포인트 사용
- ✅ 실제 사진 활용 (스톡 이미지라도)
- ✅ 친근한 톤의 메시지
- ✅ 불완전하지만 매력적인 일러스트
- ✅ 사용자 리뷰/피드백 노출

---

## 10. 체크리스트

### 디자인 품질 체크

- [ ] 모든 색상이 WCAG 2.1 AA 기준 충족 (4.5:1 대비)
- [ ] 모바일에서 터치 영역 최소 44x44px
- [ ] 로딩 상태 모든 인터랙션에 구현
- [ ] 에러 메시지 명확하고 친절
- [ ] 키보드 네비게이션 가능
- [ ] 스크린 리더 호환
- [ ] 다크모드 지원 (선택사항)
- [ ] 애니메이션 prefers-reduced-motion 고려

### 토스 디자인 원칙 준수

- [ ] 넓은 여백으로 시각적 여유
- [ ] 명확한 타이포그래피 계층
- [ ] 파란색 계열 브랜드 컬러
- [ ] 미니멀하지만 따뜻한 인터랙션
- [ ] 신뢰감 있는 시각적 언어
- [ ] 직관적인 사용자 경험

---

**참고**: 이 디자인 시스템은 토스의 디자인 철학을 기반으로 하되, 우리 플랫폼만의 정체성을 담아 재해석한 것입니다.
