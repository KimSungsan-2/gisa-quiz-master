import { useEffect } from 'react';

/**
 * 페이지별 동적 SEO 메타 태그를 설정하는 커스텀 훅
 * @param {Object} seoData - SEO 데이터
 * @param {string} seoData.title - 페이지 제목
 * @param {string} seoData.description - 페이지 설명
 * @param {string} seoData.keywords - 키워드 (선택)
 * @param {string} seoData.canonical - 표준 URL (선택)
 * @param {string} seoData.ogImage - OG 이미지 URL (선택)
 */
export const useSEO = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = 'https://gisa-quiz-master.web.app/og-image.png'
}) => {
  useEffect(() => {
    // 제목 설정
    if (title) {
      document.title = title;
    }

    // 메타 태그 설정 헬퍼 함수
    const setMetaTag = (name, content, isProperty = false) => {
      if (!content) return;

      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    };

    // 기본 메타 태그
    setMetaTag('description', description);
    if (keywords) setMetaTag('keywords', keywords);

    // Open Graph 태그
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:image', ogImage, true);
    if (canonical) setMetaTag('og:url', canonical, true);

    // Twitter Card 태그
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', ogImage);

    // Canonical URL
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }

    // Cleanup 함수 (원래 제목으로 복원)
    return () => {
      document.title = '기사 자격증 마스터 - 정보처리기사, 빅데이터분석기사 무료 기출문제';
    };
  }, [title, description, keywords, canonical, ogImage]);
};

// 자격증별 SEO 데이터 생성 헬퍼
export const getCertificateSEO = (certificate) => {
  const baseUrl = 'https://gisa-quiz-master.web.app';

  const seoMap = {
    'info': {
      title: '정보처리기사 무료 기출문제 & 모의고사 | 기사 자격증 마스터',
      description: '정보처리기사 필기시험 대비 무료 기출문제 100문제 제공. 소프트웨어 설계, 데이터베이스, 프로그래밍 언어 등 전 과목 학습 가능. 오답노트, 통계 분석 지원.',
      keywords: '정보처리기사, 정보처리기사 기출문제, 정보처리기사 모의고사, 정보처리기사 무료, 필기시험, 소프트웨어 설계',
      canonical: `${baseUrl}/info`
    },
    'bigdata': {
      title: '빅데이터분석기사 무료 기출문제 & 모의고사 | 기사 자격증 마스터',
      description: '빅데이터분석기사 필기시험 대비 무료 기출문제 80문제 제공. 빅데이터 분석 기획, 탐색, 모델링 등 전 과목 학습. 120분 실전 모의고사 제공.',
      keywords: '빅데이터분석기사, 빅데이터분석기사 기출문제, 빅데이터 모의고사, 빅데이터 무료 문제, 데이터 분석',
      canonical: `${baseUrl}/bigdata`
    },
    'refrigeration': {
      title: '냉동공조기사 무료 기출문제 & 모의고사 | 기사 자격증 마스터',
      description: '냉동공조기사 필기시험 대비 무료 기출문제 80문제 제공. 냉동공조이론, 장치, 전기제어공학 등 전 과목 학습. 실전 모의고사 포함.',
      keywords: '냉동공조기사, 냉동공조기사 기출문제, 냉동공조 모의고사, 냉동공조 무료, 필기시험',
      canonical: `${baseUrl}/refrigeration`
    },
    'mechanical': {
      title: '일반기계기사 무료 기출문제 & 모의고사 | 기사 자격증 마스터',
      description: '일반기계기사 필기시험 대비 무료 기출문제 100문제 제공. 재료역학, 열역학, 유체역학, 기계제작법 등 전 과목 학습 가능.',
      keywords: '일반기계기사, 일반기계기사 기출문제, 기계기사 모의고사, 기계 무료 문제, 필기시험',
      canonical: `${baseUrl}/mechanical`
    }
  };

  return seoMap[certificate?.id] || {
    title: '기사 자격증 마스터 - 정보처리기사, 빅데이터분석기사 무료 기출문제',
    description: '정보처리기사, 빅데이터분석기사, 냉동공조기사, 일반기계기사 무료 기출문제와 모의고사로 합격률 높이세요.',
    keywords: '기사 자격증, 기출문제, 모의고사, 무료',
    canonical: baseUrl
  };
};

// 화면별 SEO 데이터
export const getScreenSEO = (screen, certificate = null) => {
  const baseUrl = 'https://gisa-quiz-master.web.app';

  switch (screen) {
    case 'home':
      return {
        title: '기사 자격증 마스터 - 정보처리기사, 빅데이터분석기사 무료 기출문제',
        description: '정보처리기사, 빅데이터분석기사, 냉동공조기사, 일반기계기사 무료 기출문제와 모의고사로 합격률 높이세요. 오답노트, 학습 통계, 과목별 분석까지 모두 무료!',
        keywords: '정보처리기사, 빅데이터분석기사, 냉동공조기사, 일반기계기사, 기출문제, 모의고사, 무료, 자격증',
        canonical: baseUrl
      };

    case 'chapterSelect':
    case 'quiz':
      return certificate ? getCertificateSEO(certificate) : {};

    case 'stats':
      return {
        title: '학습 통계 | 기사 자격증 마스터',
        description: '나의 학습 진도, 정답률, 취약 과목 분석을 확인하세요. 데이터 기반으로 효율적인 학습 계획을 세울 수 있습니다.',
        keywords: '학습 통계, 정답률, 과목별 분석, 취약 과목',
        canonical: `${baseUrl}/stats`
      };

    case 'result':
      return {
        title: '시험 결과 | 기사 자격증 마스터',
        description: '모의고사 결과를 확인하고 내 실력을 점검하세요.',
        canonical: `${baseUrl}/result`
      };

    default:
      return {
        title: '기사 자격증 마스터',
        description: '기사 자격증 시험 대비 무료 학습 플랫폼',
        canonical: baseUrl
      };
  }
};

export default useSEO;
