# SEO 설정 가이드

## ✅ 완료된 작업

### 1. 기본 SEO 구조
- ✅ `index.html`에 메타 태그 최적화 완료
- ✅ Open Graph (Facebook, KakaoTalk 공유) 설정
- ✅ Twitter Card 설정
- ✅ `sitemap.xml` 생성
- ✅ `robots.txt` 생성
- ✅ 구조화된 데이터 (Schema.org JSON-LD) 컴포넌트 생성
- ✅ 동적 메타 태그 시스템 구현

### 2. 자동으로 작동하는 기능
- 각 페이지 이동 시 자동으로 메타 태그 업데이트
- 자격증별로 최적화된 SEO 데이터 적용
- 검색엔진 크롤러에게 구조화된 정보 제공

---

## 🚀 출시 후 즉시 해야 할 작업

### 1. Open Graph 이미지 생성 (10분)

**필요한 이미지:**
- `public/og-image.png` - 1200x630px
- `public/apple-touch-icon.png` - 180x180px

**추천 도구:**
- Canva.com (무료)
- Figma (무료)

**이미지 내용 예시:**
```
┌─────────────────────────────────┐
│  📚 기사 자격증 마스터           │
│                                 │
│  정보처리기사 · 빅데이터분석기사  │
│  무료 기출문제 1000+ 제공        │
│                                 │
│  ✓ 오답노트  ✓ 모의고사         │
│  ✓ 학습 통계  ✓ 과목별 분석     │
└─────────────────────────────────┘
```

### 2. Google Search Console 등록 (5분)

**URL:** https://search.google.com/search-console

**절차:**
1. Google 계정으로 로그인
2. "속성 추가" 클릭
3. URL 입력: `https://gisa-quiz-master.web.app/`
4. Firebase Hosting 인증:
   - 제공된 HTML 파일을 `public/` 폴더에 업로드
   - 또는 메타 태그를 `index.html`에 추가
5. 인증 완료 후 Sitemap 제출:
   - 왼쪽 메뉴 > Sitemaps
   - `https://gisa-quiz-master.web.app/sitemap.xml` 입력

### 3. Naver Search Advisor 등록 (5분)

**URL:** https://searchadvisor.naver.com/

**절차:**
1. 네이버 계정으로 로그인
2. "사이트 등록" 클릭
3. URL 입력: `https://gisa-quiz-master.web.app/`
4. HTML 태그 인증 (index.html에 추가)
5. 사이트맵 제출:
   - 웹마스터 도구 > 요청 > 사이트맵 제출
   - `https://gisa-quiz-master.web.app/sitemap.xml`

### 4. Google Analytics 설정 (10분)

**URL:** https://analytics.google.com/

**절차:**
1. 새 속성 만들기
2. 측정 ID 확인 (예: G-XXXXXXXXXX)
3. `index.html`의 `<head>` 안에 추가:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 5. Firebase Hosting 배포 확인

배포 후 다음 파일들이 제대로 접근 가능한지 확인:

```bash
# 브라우저에서 확인
https://gisa-quiz-master.web.app/sitemap.xml  ✅
https://gisa-quiz-master.web.app/robots.txt   ✅
```

---

## 📊 1주일 후 할 작업

### 1. 검색엔진 인덱싱 확인

**Google Search Console에서 확인:**
- 커버리지 리포트
- 인덱싱된 페이지 수
- 크롤링 오류 없는지 확인

**수동 인덱싱 요청:**
```
1. Google Search Console > URL 검사
2. 주요 페이지 URL 입력
3. "색인 생성 요청" 클릭
```

**주요 페이지:**
- https://gisa-quiz-master.web.app/
- https://gisa-quiz-master.web.app/info
- https://gisa-quiz-master.web.app/bigdata
- https://gisa-quiz-master.web.app/refrigeration
- https://gisa-quiz-master.web.app/mechanical

### 2. 구조화된 데이터 검증

**Google Rich Results Test:**
- URL: https://search.google.com/test/rich-results
- 각 주요 페이지 URL 테스트
- 오류 있으면 수정

---

## 🎯 지속적인 SEO 개선 (월 1회)

### 1. 키워드 순위 모니터링

**추적할 키워드:**
- 정보처리기사 기출문제
- 빅데이터분석기사 모의고사
- 냉동공조기사 무료
- 일반기계기사 문제 풀이
- [자격증명] + 무료 + 기출문제

**도구:**
- Google Search Console (무료)
- Naver Analytics (무료)
- Ubersuggest (무료 버전)

### 2. 페이지 속도 최적화

**도구:**
- https://pagespeed.web.dev/
- Lighthouse (Chrome DevTools)

**목표:**
- Mobile 점수: 90+
- Desktop 점수: 95+

**개선 방법:**
- 이미지 최적화 (WebP 변환)
- 코드 스플리팅
- 캐싱 전략

### 3. 백링크 확보

**전략:**
- 자격증 관련 블로그에 게스트 포스팅
- Q&A 사이트 (지식iN, 오픈캐스트)에서 유용한 답변 + 링크
- 개발자 커뮤니티 (OKKY, 생활코딩) 리소스 공유
- 대학교 취업 지원센터에 제휴 제안

---

## 📝 SEO 체크리스트

출시 전:
- [ ] OG 이미지 생성 및 업로드
- [ ] Google Search Console 등록
- [ ] Naver Search Advisor 등록
- [ ] Google Analytics 설정
- [ ] Firebase 배포 및 파일 접근성 확인

출시 1주일 후:
- [ ] 인덱싱 상태 확인
- [ ] 구조화된 데이터 검증
- [ ] 페이지 속도 테스트
- [ ] 주요 페이지 수동 인덱싱 요청

출시 1개월 후:
- [ ] 검색 트래픽 분석
- [ ] 키워드 순위 확인
- [ ] 사용자 행동 분석 (GA)
- [ ] 백링크 현황 점검

---

## 🔧 문제 해결

### 검색 결과에 나타나지 않아요!

**원인:**
- 인덱싱에는 보통 2-4주 소요
- robots.txt 설정 오류
- 사이트맵 문제

**해결:**
1. Google Search Console에서 URL 검사
2. "색인 생성 요청" 클릭
3. robots.txt 확인: `Allow: /` 있는지
4. 사이트맵 재제출

### OG 이미지가 안 보여요!

**원인:**
- 이미지 크기 문제 (1200x630px 권장)
- 캐시 문제

**해결:**
1. Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
2. URL 입력 후 "새로운 스크래핑 정보 가져오기"
3. 이미지 크기 확인

### 메타 태그가 업데이트 안 돼요!

**원인:**
- SPA (Single Page Application) 특성상 크롤러가 JavaScript 실행 전 HTML 읽음

**해결:**
- 현재 구현된 동적 메타 태그 시스템은 사용자에게는 작동하지만, 크롤러에게는 제한적
- 완벽한 SSR(Server-Side Rendering) 필요 시:
  - Next.js 마이그레이션 고려
  - 또는 Prerendering 서비스 사용 (Prerender.io, Netlify)

---

## 💡 추가 최적화 팁

1. **블로그 섹션 추가**
   - `/blog` 경로에 SEO 최적화 콘텐츠 발행
   - 장기적으로 가장 효과적인 무료 트래픽 확보 방법

2. **내부 링크 강화**
   - 홈 → 각 자격증 페이지 링크
   - 관련 콘텐츠 간 연결
   - Breadcrumb 네비게이션 추가

3. **소셜 미디어 연동**
   - 인스타그램, 유튜브 계정 생성
   - 프로필에 웹사이트 링크
   - 정기적인 콘텐츠 공유

4. **사용자 리뷰 수집**
   - 구글 비즈니스 프로필 생성 (선택)
   - 만족도 높은 사용자에게 리뷰 요청
   - 리뷰를 홈페이지에 표시 (사회적 증거)

---

## 📞 도움이 필요하면?

- Google Search Console Help: https://support.google.com/webmasters
- Naver 웹마스터 가이드: https://searchadvisor.naver.com/guide
- Firebase Hosting Docs: https://firebase.google.com/docs/hosting

---

**이 문서 업데이트:** 2026-01-25
**다음 리뷰:** 출시 후 1주일
