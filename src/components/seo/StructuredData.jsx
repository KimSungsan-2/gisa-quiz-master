import React from 'react';

/**
 * StructuredData Component
 * Google, Naver 등 검색엔진이 사이트 정보를 더 잘 이해하도록 Schema.org JSON-LD 구조화된 데이터 제공
 */

// 웹사이트 기본 정보
export const WebsiteSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "기사 자격증 마스터",
    "alternateName": "Gisa Quiz Master",
    "url": "https://gisa-quiz-master.web.app/",
    "description": "정보처리기사, 빅데이터분석기사, 냉동공조기사, 일반기계기사 무료 기출문제와 모의고사 학습 플랫폼",
    "publisher": {
      "@type": "Organization",
      "name": "기사 자격증 마스터",
      "logo": {
        "@type": "ImageObject",
        "url": "https://gisa-quiz-master.web.app/logo.png"
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://gisa-quiz-master.web.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// 교육 조직 정보
export const EducationalOrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "기사 자격증 마스터",
    "url": "https://gisa-quiz-master.web.app/",
    "logo": "https://gisa-quiz-master.web.app/logo.png",
    "description": "국가기술자격증 기사 시험 대비 무료 학습 플랫폼",
    "sameAs": [
      "https://www.facebook.com/gisaquizmaster",
      "https://www.instagram.com/gisaquizmaster",
      "https://www.youtube.com/@gisaquizmaster"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "email": "support@gisaquizmaster.com"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// 개별 자격증 코스 스키마
export const CourseSchema = ({ certificate, totalQuestions }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": `${certificate.name} 필기시험 대비 과정`,
    "description": `${certificate.name} 자격증 시험 대비 무료 기출문제 ${totalQuestions}문제 제공. ${certificate.subjects.join(', ')} 과목 학습 가능.`,
    "provider": {
      "@type": "Organization",
      "name": "기사 자격증 마스터",
      "url": "https://gisa-quiz-master.web.app/"
    },
    "educationalLevel": "Professional",
    "inLanguage": "ko-KR",
    "isAccessibleForFree": true,
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online",
      "courseWorkload": `PT${certificate.examTime}M`
    },
    "teaches": certificate.subjects.map(subject => ({
      "@type": "DefinedTerm",
      "name": subject
    })),
    "numberOfQuestions": totalQuestions,
    "typicalAgeRange": "20-50"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// FAQ 스키마
export const FAQSchema = ({ faqs }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// 제품 스키마 (프리미엄 구독)
export const ProductSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "기사 자격증 마스터 프리미엄",
    "description": "무제한 문제 풀이, 오답노트, 고급 통계, 모의고사 제공",
    "brand": {
      "@type": "Brand",
      "name": "기사 자격증 마스터"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "월간 구독",
        "price": "9900",
        "priceCurrency": "KRW",
        "priceValidUntil": "2027-12-31",
        "availability": "https://schema.org/InStock",
        "url": "https://gisa-quiz-master.web.app/pricing"
      },
      {
        "@type": "Offer",
        "name": "연간 구독",
        "price": "99000",
        "priceCurrency": "KRW",
        "priceValidUntil": "2027-12-31",
        "availability": "https://schema.org/InStock",
        "url": "https://gisa-quiz-master.web.app/pricing"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// 빵 부스러기 (Breadcrumb) 스키마
export const BreadcrumbSchema = ({ items }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// 모든 스키마를 한 번에 렌더링하는 컴포넌트
export const AllStructuredData = () => {
  return (
    <>
      <WebsiteSchema />
      <EducationalOrganizationSchema />
    </>
  );
};

export default AllStructuredData;
