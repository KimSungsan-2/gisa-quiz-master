import React, { useState, useEffect } from 'react';
import { BookOpen, CheckCircle, XCircle, BarChart3, RefreshCw, ArrowLeft, Trophy, Flame, Filter, Clock, Star, Download, Calendar, TrendingUp, Award, Target, AlertCircle, Brain, Zap, Activity } from 'lucide-react';

// 확장된 샘플 데이터
const sampleData = {
  certificates: [
    { 
      id: 'bigdata', 
      name: '빅데이터분석기사', 
      icon: '📊',
      subjects: ['빅데이터 분석 기획', '빅데이터 탐색', '빅데이터 모델링', '빅데이터 결과 해석'],
      examTime: 120, // 분
      totalQuestions: 80
    },
    { 
      id: 'info', 
      name: '정보처리기사', 
      icon: '💻',
      subjects: ['소프트웨어 설계', '데이터베이스 구축', '프로그래밍 언어 활용', '정보시스템 구축관리'],
      examTime: 150,
      totalQuestions: 100
    },
    { 
      id: 'refrigeration', 
      name: '냉동공조기사', 
      icon: '❄️',
      subjects: ['냉동공조이론', '냉동공조장치', '전기제어공학', '냉동공조관련 법규'],
      examTime: 120,
      totalQuestions: 80
    }
  ],
  questions: {
    bigdata: [
      {
        id: 'BAE_001',
        subject: '빅데이터 분석 기획',
        question: '빅데이터의 특징을 나타내는 3V에 해당하지 않는 것은?',
        options: ['Volume (규모)', 'Velocity (속도)', 'Variety (다양성)', 'Vision (비전)'],
        answer: 3,
        explanation: '빅데이터의 3V는 Volume(규모), Velocity(속도), Variety(다양성)입니다. 최근에는 Veracity(정확성), Value(가치)를 추가하여 5V로 확장되기도 합니다.',
        difficulty: '하',
        tags: ['빅데이터 개념', '기초']
      },
      {
        id: 'BAE_002',
        subject: '빅데이터 탐색',
        question: '결측값 처리 방법으로 적절하지 않은 것은?',
        options: ['삭제법 (Deletion)', '평균 대체법 (Mean Imputation)', 'KNN 대체법', '무시법 (Ignore)'],
        answer: 3,
        explanation: '결측값은 반드시 처리해야 하므로 "무시법"은 적절한 처리 방법이 아닙니다.',
        difficulty: '중',
        tags: ['데이터 전처리', '결측값']
      },
      {
        id: 'BAE_003',
        subject: '빅데이터 모델링',
        question: '의사결정나무의 장점이 아닌 것은?',
        options: ['해석이 용이하다', '비선형 관계 모델링이 가능하다', '과적합(Overfitting)에 강하다', '범주형/연속형 변수 모두 사용 가능하다'],
        answer: 2,
        explanation: '의사결정나무는 과적합(Overfitting)에 취약한 것이 단점입니다.',
        difficulty: '중',
        tags: ['머신러닝', '의사결정나무']
      },
      {
        id: 'BAE_004',
        subject: '빅데이터 결과 해석',
        question: '분류 모델의 성능 평가지표 중 정밀도(Precision)의 정의로 옳은 것은?',
        options: ['TP / (TP + FP)', 'TP / (TP + FN)', '(TP + TN) / (TP + TN + FP + FN)', 'TN / (TN + FP)'],
        answer: 0,
        explanation: '정밀도(Precision)는 모델이 Positive로 예측한 것 중 실제로 Positive인 비율입니다.',
        difficulty: '중',
        tags: ['평가지표', '정밀도']
      },
      {
        id: 'BAE_005',
        subject: '빅데이터 분석 기획',
        question: '개인정보보호법상 가명처리에 대한 설명으로 틀린 것은?',
        options: ['개인정보의 일부를 삭제하거나 일부 또는 전부를 대체하는 등의 방법', '추가 정보 없이는 특정 개인을 알아볼 수 없도록 처리하는 것', '가명정보는 동의 없이 통계작성, 연구 목적으로 활용 가능', '가명처리된 정보는 개인정보가 아니므로 개인정보보호법 적용을 받지 않음'],
        answer: 3,
        explanation: '가명정보는 여전히 개인정보에 해당하며 개인정보보호법의 적용을 받습니다.',
        difficulty: '상',
        tags: ['법규', '개인정보보호']
      },
      {
        id: 'BAE_006',
        subject: '빅데이터 탐색',
        question: '상관계수(Correlation Coefficient)에 대한 설명으로 옳지 않은 것은?',
        options: ['피어슨 상관계수의 범위는 -1 ~ 1 이다', '상관계수가 0이면 두 변수는 완전히 독립이다', '상관관계가 높다고 인과관계가 있는 것은 아니다', '상관계수는 선형 관계의 강도를 측정한다'],
        answer: 1,
        explanation: '상관계수가 0이라는 것은 "선형 관계"가 없다는 의미이며, 완전히 독립이라는 의미는 아닙니다.',
        difficulty: '상',
        tags: ['통계', '상관분석']
      },
      {
        id: 'BAE_007',
        subject: '빅데이터 모델링',
        question: '앙상블(Ensemble) 기법 중 배깅(Bagging)에 대한 설명으로 옳은 것은?',
        options: ['순차적으로 모델을 학습하여 이전 모델의 오류를 보완한다', '부트스트랩 샘플링을 통해 여러 모델을 병렬로 학습한다', '가중치를 부여하여 약한 학습기를 강한 학습기로 만든다', '서로 다른 알고리즘의 예측을 결합한다'],
        answer: 1,
        explanation: '배깅(Bagging)은 Bootstrap Aggregating의 약자로, 부트스트랩 샘플링으로 여러 훈련 데이터셋을 생성하고 각각에 대해 모델을 병렬로 학습한 뒤 결과를 집계하는 방법입니다.',
        difficulty: '중',
        tags: ['앙상블', '배깅']
      },
      {
        id: 'BAE_008',
        subject: '빅데이터 결과 해석',
        question: 'ROC 곡선과 AUC에 대한 설명으로 틀린 것은?',
        options: ['ROC 곡선은 TPR과 FPR의 관계를 나타낸다', 'AUC 값은 0.5 ~ 1 사이의 값을 가진다', 'AUC가 1에 가까울수록 모델 성능이 우수하다', '불균형 데이터에서도 항상 신뢰할 수 있는 지표이다'],
        answer: 3,
        explanation: 'ROC-AUC는 클래스 불균형이 심한 데이터에서는 적절하지 않을 수 있습니다.',
        difficulty: '상',
        tags: ['평가지표', 'ROC']
      },
      {
        id: 'BAE_009',
        subject: '빅데이터 분석 기획',
        question: '데이터 거버넌스의 구성요소가 아닌 것은?',
        options: ['데이터 표준화', '데이터 품질관리', '메타데이터 관리', '데이터 시각화'],
        answer: 3,
        explanation: '데이터 거버넌스의 주요 구성요소는 데이터 표준화, 데이터 품질관리, 메타데이터 관리, 데이터 보안, 마스터 데이터 관리 등입니다.',
        difficulty: '하',
        tags: ['거버넌스', '기획']
      },
      {
        id: 'BAE_010',
        subject: '빅데이터 탐색',
        question: '표준화(Standardization)와 정규화(Normalization)에 대한 설명으로 옳은 것은?',
        options: ['표준화는 데이터를 0~1 범위로 변환한다', '정규화는 평균을 0, 표준편차를 1로 만든다', '표준화는 Z-score 변환이라고도 한다', '둘 다 이상값에 민감하지 않다'],
        answer: 2,
        explanation: '표준화(Standardization)는 평균을 0, 표준편차를 1로 만드는 Z-score 변환입니다.',
        difficulty: '중',
        tags: ['데이터 전처리', '정규화']
      },
      {
        id: 'BAE_011',
        subject: '빅데이터 모델링',
        question: '서포트 벡터 머신(SVM)의 커널 함수가 아닌 것은?',
        options: ['선형(Linear) 커널', 'RBF(Radial Basis Function) 커널', '다항식(Polynomial) 커널', '로지스틱(Logistic) 커널'],
        answer: 3,
        explanation: 'SVM의 주요 커널 함수에는 선형(Linear), RBF(Gaussian), 다항식(Polynomial), 시그모이드(Sigmoid) 커널 등이 있습니다.',
        difficulty: '중',
        tags: ['SVM', '커널']
      },
      {
        id: 'BAE_012',
        subject: '빅데이터 결과 해석',
        question: '교차 검증(Cross Validation)의 목적이 아닌 것은?',
        options: ['모델의 일반화 성능 평가', '과적합 방지', '훈련 데이터의 효율적 활용', '학습 속도 향상'],
        answer: 3,
        explanation: '교차 검증은 모델의 일반화 성능을 평가하고, 과적합을 방지하며, 제한된 데이터를 효율적으로 활용하기 위한 방법입니다.',
        difficulty: '하',
        tags: ['교차검증', '평가']
      }
    ],
    info: [
      {
        id: 'INFO_001',
        subject: '소프트웨어 설계',
        question: '객체지향 설계 원칙 중 SOLID 원칙에 해당하지 않는 것은?',
        options: ['SRP (Single Responsibility Principle)', 'OCP (Open-Closed Principle)', 'DRY (Don\'t Repeat Yourself)', 'LSP (Liskov Substitution Principle)'],
        answer: 2,
        explanation: 'SOLID 원칙은 SRP(단일 책임), OCP(개방-폐쇄), LSP(리스코프 치환), ISP(인터페이스 분리), DIP(의존관계 역전) 원칙입니다.',
        difficulty: '하',
        tags: ['객체지향', 'SOLID']
      },
      {
        id: 'INFO_002',
        subject: '소프트웨어 설계',
        question: 'UML 다이어그램 중 구조적(Structural) 다이어그램이 아닌 것은?',
        options: ['클래스 다이어그램 (Class Diagram)', '컴포넌트 다이어그램 (Component Diagram)', '시퀀스 다이어그램 (Sequence Diagram)', '패키지 다이어그램 (Package Diagram)'],
        answer: 2,
        explanation: '시퀀스 다이어그램은 행위(Behavioral) 다이어그램입니다.',
        difficulty: '중',
        tags: ['UML', '다이어그램']
      },
      {
        id: 'INFO_003',
        subject: '데이터베이스 구축',
        question: '관계 데이터베이스의 정규화 과정이 올바른 순서로 나열된 것은?',
        options: ['1NF → 2NF → 3NF → BCNF', '1NF → 3NF → 2NF → BCNF', '2NF → 1NF → 3NF → BCNF', '1NF → BCNF → 2NF → 3NF'],
        answer: 0,
        explanation: '정규화는 1NF(제1정규형) → 2NF(제2정규형) → 3NF(제3정규형) → BCNF(보이스-코드 정규형) → 4NF → 5NF 순서로 진행됩니다.',
        difficulty: '하',
        tags: ['정규화', '데이터베이스']
      },
      {
        id: 'INFO_004',
        subject: '데이터베이스 구축',
        question: 'SQL에서 트랜잭션의 특성(ACID)이 아닌 것은?',
        options: ['Atomicity (원자성)', 'Consistency (일관성)', 'Isolation (격리성)', 'Availability (가용성)'],
        answer: 3,
        explanation: '트랜잭션의 ACID 특성은 Atomicity(원자성), Consistency(일관성), Isolation(격리성), Durability(지속성)입니다.',
        difficulty: '중',
        tags: ['트랜잭션', 'ACID']
      },
      {
        id: 'INFO_005',
        subject: '프로그래밍 언어 활용',
        question: '다음 C언어 코드의 출력 결과는?\n\nint a = 10, b = 20;\nprintf("%d", a > b ? a : b);',
        options: ['10', '20', '30', '컴파일 에러'],
        answer: 1,
        explanation: '삼항 연산자 (조건) ? 참일때값 : 거짓일때값 을 사용합니다. a > b는 거짓이므로 b의 값인 20이 출력됩니다.',
        difficulty: '하',
        tags: ['C언어', '연산자']
      },
      {
        id: 'INFO_006',
        subject: '프로그래밍 언어 활용',
        question: '객체지향 프로그래밍의 특징이 아닌 것은?',
        options: ['캡슐화 (Encapsulation)', '상속성 (Inheritance)', '다형성 (Polymorphism)', '순차성 (Sequentiality)'],
        answer: 3,
        explanation: '객체지향 프로그래밍의 4대 특징은 캡슐화(Encapsulation), 상속성(Inheritance), 다형성(Polymorphism), 추상화(Abstraction)입니다.',
        difficulty: '하',
        tags: ['객체지향', '특징']
      },
      {
        id: 'INFO_007',
        subject: '정보시스템 구축관리',
        question: 'OSI 7계층 중 데이터 링크 계층(Data Link Layer)에서 사용되는 프로토콜은?',
        options: ['IP', 'TCP', 'Ethernet', 'HTTP'],
        answer: 2,
        explanation: 'Ethernet은 데이터 링크 계층(2계층) 프로토콜입니다. IP는 네트워크 계층(3계층), TCP는 전송 계층(4계층), HTTP는 응용 계층(7계층) 프로토콜입니다.',
        difficulty: '중',
        tags: ['네트워크', 'OSI']
      },
      {
        id: 'INFO_008',
        subject: '정보시스템 구축관리',
        question: 'IPv4 주소 체계에서 C클래스의 기본 서브넷 마스크는?',
        options: ['255.0.0.0', '255.255.0.0', '255.255.255.0', '255.255.255.255'],
        answer: 2,
        explanation: 'IPv4 클래스별 기본 서브넷 마스크는 A클래스: 255.0.0.0, B클래스: 255.255.0.0, C클래스: 255.255.255.0입니다.',
        difficulty: '중',
        tags: ['네트워크', 'IP']
      },
      {
        id: 'INFO_009',
        subject: '소프트웨어 설계',
        question: '디자인 패턴 중 Singleton 패턴의 목적은?',
        options: ['객체 생성을 서브클래스에 위임', '클래스의 인스턴스를 하나만 생성', '객체 간의 일대다 의존성 정의', '알고리즘을 캡슐화하여 교체 가능하게'],
        answer: 1,
        explanation: 'Singleton 패턴은 클래스의 인스턴스가 오직 하나만 생성되도록 보장하고, 이에 대한 전역적인 접근점을 제공하는 패턴입니다.',
        difficulty: '중',
        tags: ['디자인패턴', 'Singleton']
      },
      {
        id: 'INFO_010',
        subject: '데이터베이스 구축',
        question: 'JOIN 연산 중 두 테이블의 공통된 속성값이 있는 튜플만 반환하는 것은?',
        options: ['INNER JOIN', 'LEFT OUTER JOIN', 'RIGHT OUTER JOIN', 'FULL OUTER JOIN'],
        answer: 0,
        explanation: 'INNER JOIN은 두 테이블에서 조인 조건을 만족하는(공통된 값이 있는) 튜플만 결과로 반환합니다.',
        difficulty: '하',
        tags: ['SQL', 'JOIN']
      }
    ],
    refrigeration: [
      {
        id: 'REF_001',
        subject: '냉동공조이론',
        question: '냉동 사이클에서 압축기의 역할은?',
        options: ['저온저압 증기를 고온고압 증기로 압축', '고온고압 액체를 저온저압 액체로 팽창', '냉매를 증발시켜 냉각', '냉매를 응축시켜 열 방출'],
        answer: 0,
        explanation: '압축기는 증발기에서 나온 저온저압의 냉매 증기를 고온고압의 증기로 압축하는 역할을 합니다.',
        difficulty: '하',
        tags: ['냉동사이클', '압축기']
      },
      {
        id: 'REF_002',
        subject: '냉동공조이론',
        question: 'COP(성적계수)를 나타내는 식으로 올바른 것은?',
        options: ['COP = 압축일 / 냉동효과', 'COP = 냉동효과 / 압축일', 'COP = 응축열량 / 증발열량', 'COP = 압축비 × 냉동효과'],
        answer: 1,
        explanation: 'COP(Coefficient of Performance, 성적계수)는 냉동효과를 압축기 소요동력으로 나눈 값입니다.',
        difficulty: '중',
        tags: ['COP', '성적계수']
      },
      {
        id: 'REF_003',
        subject: '냉동공조장치',
        question: '왕복동 압축기의 특징이 아닌 것은?',
        options: ['소형에서 대형까지 제작 가능', '압축비가 높아도 사용 가능', '진동과 소음이 거의 없음', '효율이 비교적 높음'],
        answer: 2,
        explanation: '왕복동 압축기는 피스톤의 왕복운동으로 인해 진동과 소음이 큰 것이 단점입니다.',
        difficulty: '하',
        tags: ['압축기', '왕복동']
      },
      {
        id: 'REF_004',
        subject: '냉동공조장치',
        question: '증발기의 종류가 아닌 것은?',
        options: ['건식 증발기', '만액식 증발기', '직접팽창식 증발기', '압축식 증발기'],
        answer: 3,
        explanation: '증발기의 종류에는 건식(직접팽창식), 만액식(액식), 강제순환식 등이 있습니다.',
        difficulty: '중',
        tags: ['증발기', '분류']
      },
      {
        id: 'REF_005',
        subject: '전기제어공학',
        question: '3상 유도전동기에서 회전방향을 바꾸는 방법은?',
        options: ['전압을 높인다', '주파수를 변경한다', '3상 중 2상의 결선을 바꾼다', '중성선을 접지한다'],
        answer: 2,
        explanation: '3상 유도전동기의 회전방향을 바꾸려면 3상 전원선 중 임의의 2개 상을 바꿔 결선하면 됩니다.',
        difficulty: '중',
        tags: ['전동기', '제어']
      },
      {
        id: 'REF_006',
        subject: '전기제어공학',
        question: '전자접촉기(MC)의 주요 용도는?',
        options: ['전류 측정', '전압 조정', '전동기의 원격 제어', '전력 변환'],
        answer: 2,
        explanation: '전자접촉기(Magnetic Contactor, MC)는 전동기를 원격으로 ON/OFF 제어하는 장치입니다.',
        difficulty: '하',
        tags: ['전자접촉기', 'MC']
      },
      {
        id: 'REF_007',
        subject: '냉동공조관련 법규',
        question: '고압가스 안전관리법상 냉동능력 20RT 이상의 냉동기를 설치한 경우 반드시 선임해야 하는 사람은?',
        options: ['냉동기계책임자', '냉동설비기사', '안전관리자', '품질관리자'],
        answer: 0,
        explanation: '고압가스 안전관리법에 따라 냉동능력 20RT(톤) 이상의 냉동기를 설치·운영하는 경우 냉동기계책임자를 선임해야 합니다.',
        difficulty: '중',
        tags: ['법규', '책임자']
      },
      {
        id: 'REF_008',
        subject: '냉동공조관련 법규',
        question: '몬트리올 의정서에서 규제하는 물질은?',
        options: ['이산화탄소', '메탄', 'CFC 및 HCFC', '아산화질소'],
        answer: 2,
        explanation: '몬트리올 의정서는 오존층 파괴물질인 CFC(염화불화탄소), HCFC(수소염화불화탄소) 등의 생산과 사용을 규제하는 국제 협약입니다.',
        difficulty: '상',
        tags: ['법규', '환경']
      },
      {
        id: 'REF_009',
        subject: '냉동공조이론',
        question: '습공기선도에서 상대습도 100%인 선은?',
        options: ['건구온도선', '습구온도선', '포화선', '엔탈피선'],
        answer: 2,
        explanation: '습공기선도에서 상대습도 100%인 선을 포화선이라고 합니다.',
        difficulty: '중',
        tags: ['습공기', '선도']
      },
      {
        id: 'REF_010',
        subject: '냉동공조장치',
        question: '응축기에서 냉매가 방출하는 열량은?',
        options: ['냉동효과만', '압축일만', '냉동효과 + 압축일', '냉동효과 - 압축일'],
        answer: 2,
        explanation: '응축기에서 방출되는 열량(응축열량)은 증발기에서 흡수한 열량(냉동효과)과 압축기에서 투입된 일(압축일)의 합입니다.',
        difficulty: '중',
        tags: ['응축기', '열량']
      }
    ]
  }
};

// Buy Me a Coffee 후원 버튼 컴포넌트
const BuyMeCoffeeButton = () => {
  return (
    <a
      href="https://buymeacoffee.com/gisa-quiz-master"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-6 py-3 rounded-full shadow-lg font-bold transition-all transform hover:scale-105 animate-pulse hover:animate-none"
    >
      <span className="text-2xl">☕</span>
      <span>커피 사주기</span>
    </a>
  );
};

export default function CertificationQuizApp() {
  const [screen, setScreen] = useState('home');
  const [selectedCert, setSelectedCert] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizMode, setQuizMode] = useState('all');
  const [filters, setFilters] = useState({ subject: 'all', difficulty: 'all' });
  const [stats, setStats] = useState({
    total: 0,
    correct: 0,
    streak: 0,
    maxStreak: 0,
    bySubject: {},
    byDifficulty: {},
    lastStudied: null,
    timeSpent: {},
    studyDays: []
  });
  const [questionStartTime, setQuestionStartTime] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  
  // 모의고사 모드 state
  const [mockExamMode, setMockExamMode] = useState(false);
  const [mockExamTimeLeft, setMockExamTimeLeft] = useState(null);
  const [mockExamStartTime, setMockExamStartTime] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('wrongAnswers');
    if (saved) setWrongAnswers(JSON.parse(saved));
    
    const savedBookmarks = localStorage.getItem('bookmarks');
    if (savedBookmarks) setBookmarks(JSON.parse(savedBookmarks));
    
    const savedStats = localStorage.getItem('stats');
    if (savedStats) setStats(JSON.parse(savedStats));
  }, []);

  useEffect(() => {
    if (screen === 'quiz' && currentQuestion) {
      setQuestionStartTime(Date.now());
    }
  }, [currentQuestionIndex, screen]);

  // 모의고사 타이머
  useEffect(() => {
    if (mockExamMode && mockExamTimeLeft !== null && mockExamTimeLeft > 0) {
      const timer = setInterval(() => {
        setMockExamTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            setScreen('result');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [mockExamMode, mockExamTimeLeft]);

  const saveWrongAnswers = (answers) => localStorage.setItem('wrongAnswers', JSON.stringify(answers));
  const saveBookmarks = (marks) => localStorage.setItem('bookmarks', JSON.stringify(marks));
  const saveStats = (newStats) => localStorage.setItem('stats', JSON.stringify(newStats));

  const toggleBookmark = (questionId) => {
    const newBookmarks = bookmarks.includes(questionId)
      ? bookmarks.filter(id => id !== questionId)
      : [...bookmarks, questionId];
    setBookmarks(newBookmarks);
    saveBookmarks(newBookmarks);
  };

  const getFilteredQuestions = () => {
    let questions = sampleData.questions[selectedCert] || [];
    
    if (quizMode === 'wrong') {
      questions = questions.filter(q => wrongAnswers.includes(q.id));
    } else if (quizMode === 'bookmarked') {
      questions = questions.filter(q => bookmarks.includes(q.id));
    }

    if (filters.subject !== 'all') {
      questions = questions.filter(q => q.subject === filters.subject);
    }

    if (filters.difficulty !== 'all') {
      questions = questions.filter(q => q.difficulty === filters.difficulty);
    }

    return questions;
  };

  const currentQuestions = getFilteredQuestions();
  const currentQuestion = currentQuestions[currentQuestionIndex];

  const startMockExam = (certId) => {
    const cert = sampleData.certificates.find(c => c.id === certId);
    setSelectedCert(certId);
    setMockExamMode(true);
    setMockExamTimeLeft(cert.examTime * 60);
    setMockExamStartTime(Date.now());
    setScreen('quiz');
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setShowExplanation(false);
    setQuizMode('all');
    setFilters({ subject: 'all', difficulty: 'all' });
  };

  const handleCertSelect = (certId) => {
    setSelectedCert(certId);
    setMockExamMode(false);
    setScreen('quiz');
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setShowExplanation(false);
    setQuizMode('all');
    setFilters({ subject: 'all', difficulty: 'all' });
  };

  const handleAnswerSelect = (optionIndex) => {
    if (showExplanation) return;
    
    const timeSpent = questionStartTime ? Math.floor((Date.now() - questionStartTime) / 1000) : 0;
    const isCorrect = optionIndex === currentQuestion.answer;
    
    setUserAnswers({
      ...userAnswers,
      [currentQuestion.id]: optionIndex
    });

    const today = new Date().toISOString().split('T')[0];
    const studyDays = stats.studyDays || [];
    const newStudyDays = studyDays.includes(today) ? studyDays : [...studyDays, today];

    const newStats = {
      ...stats,
      total: stats.total + 1,
      correct: stats.correct + (isCorrect ? 1 : 0),
      streak: isCorrect ? stats.streak + 1 : 0,
      maxStreak: isCorrect ? Math.max(stats.maxStreak, stats.streak + 1) : stats.maxStreak,
      lastStudied: new Date().toISOString(),
      studyDays: newStudyDays,
      bySubject: {
        ...stats.bySubject,
        [currentQuestion.subject]: {
          total: (stats.bySubject[currentQuestion.subject]?.total || 0) + 1,
          correct: (stats.bySubject[currentQuestion.subject]?.correct || 0) + (isCorrect ? 1 : 0)
        }
      },
      byDifficulty: {
        ...stats.byDifficulty,
        [currentQuestion.difficulty]: {
          total: (stats.byDifficulty[currentQuestion.difficulty]?.total || 0) + 1,
          correct: (stats.byDifficulty[currentQuestion.difficulty]?.correct || 0) + (isCorrect ? 1 : 0)
        }
      },
      timeSpent: {
        ...stats.timeSpent,
        [currentQuestion.id]: timeSpent
      }
    };
    
    setStats(newStats);
    saveStats(newStats);

    if (!isCorrect && !wrongAnswers.includes(currentQuestion.id)) {
      const newWrongAnswers = [...wrongAnswers, currentQuestion.id];
      setWrongAnswers(newWrongAnswers);
      saveWrongAnswers(newWrongAnswers);
    } else if (isCorrect && wrongAnswers.includes(currentQuestion.id)) {
      const newWrongAnswers = wrongAnswers.filter(id => id !== currentQuestion.id);
      setWrongAnswers(newWrongAnswers);
      saveWrongAnswers(newWrongAnswers);
    }

    if (!mockExamMode) {
      setShowExplanation(true);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowExplanation(false);
    } else {
      setScreen('result');
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setShowExplanation(false);
    }
  };

  const startQuizMode = (mode) => {
    if (mode === 'wrong' && wrongAnswers.length === 0) {
      alert('오답노트가 비어있습니다!');
      return;
    }
    if (mode === 'bookmarked' && bookmarks.length === 0) {
      alert('북마크한 문제가 없습니다!');
      return;
    }
    setQuizMode(mode);
    setScreen('quiz');
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setShowExplanation(false);
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case '하': return 'text-green-600';
      case '중': return 'text-yellow-600';
      case '상': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getDifficultyBg = (difficulty) => {
    switch(difficulty) {
      case '하': return 'bg-green-100';
      case '중': return 'bg-yellow-100';
      case '상': return 'bg-red-100';
      default: return 'bg-gray-100';
    }
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    if (hours > 0) {
      return `${hours}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const downloadReport = () => {
    const report = {
      generatedAt: new Date().toISOString(),
      totalQuestions: stats.total,
      correctAnswers: stats.correct,
      accuracy: stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0,
      maxStreak: stats.maxStreak,
      bySubject: stats.bySubject,
      byDifficulty: stats.byDifficulty,
      wrongAnswersCount: wrongAnswers.length,
      bookmarksCount: bookmarks.length,
      studyDaysCount: stats.studyDays?.length || 0
    };

    const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `학습리포트_${new Date().toLocaleDateString('ko-KR')}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // 오답 분석 함수
  const getWeakestTopics = () => {
    const subjectAccuracy = {};
    Object.entries(stats.bySubject).forEach(([subject, data]) => {
      if (data.total > 0) {
        subjectAccuracy[subject] = (data.correct / data.total) * 100;
      }
    });
    return Object.entries(subjectAccuracy)
      .sort((a, b) => a[1] - b[1])
      .slice(0, 3);
  };

  // Home Screen
  if (screen === 'home') {
    const daysSinceLastStudy = stats.lastStudied 
      ? Math.floor((Date.now() - new Date(stats.lastStudied).getTime()) / (1000 * 60 * 60 * 24))
      : null;
    const studyStreak = stats.studyDays?.length || 0;

    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 pt-12">
            <div className="inline-block mb-4">
              <div className="text-6xl mb-4 animate-bounce">🎯</div>
            </div>
            <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              기사 자격증 마스터
            </h1>
            <p className="text-xl text-gray-600 font-medium">
              똑똑하게 공부하고, 확실하게 합격하자! 💪
            </p>
            {daysSinceLastStudy !== null && (
              <div className="mt-4 flex items-center justify-center gap-4">
                <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
                  <Calendar className="w-5 h-5 text-indigo-600" />
                  <span className="text-gray-700">
                    {daysSinceLastStudy === 0 ? '오늘' : `${daysSinceLastStudy}일 전`} 마지막 학습
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
                  <Flame className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">
                    {studyStreak}일 연속 학습
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {sampleData.certificates.map((cert) => {
              const certQuestions = sampleData.questions[cert.id] || [];
              const attemptedQuestions = certQuestions.filter(q => 
                stats.bySubject && Object.keys(stats.bySubject).some(subject => {
                  const subjectStat = stats.bySubject[subject];
                  return subjectStat && subjectStat.total > 0;
                })
              ).length;
              const progress = certQuestions.length > 0 ? Math.round((attemptedQuestions / certQuestions.length) * 100) : 0;

              return (
                <div key={cert.id} className="bg-white rounded-3xl p-8 shadow-lg">
                  <div className="text-6xl mb-4">{cert.icon}</div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">{cert.name}</h3>
                  <div className="text-sm text-gray-500 mb-4">{cert.subjects.length}개 과목</div>
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>학습 진도</span>
                      <span>{progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <button
                      onClick={() => handleCertSelect(cert.id)}
                      className="w-full px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl font-semibold transition-all"
                    >
                      연습 모드
                    </button>
                    <button
                      onClick={() => startMockExam(cert.id)}
                      className="w-full px-4 py-3 bg-white hover:bg-gray-50 text-indigo-600 border-2 border-indigo-600 rounded-xl font-semibold transition-all"
                    >
                      모의고사 ({cert.examTime}분)
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div 
              onClick={() => setScreen('stats')}
              className="cursor-pointer bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-8 text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <BarChart3 className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">학습 통계</h3>
              <p className="text-blue-100 text-sm">내 실력 확인</p>
              <div className="mt-4 text-3xl font-black">{stats.correct}/{stats.total}</div>
            </div>

            <div 
              onClick={() => startQuizMode('wrong')}
              className="cursor-pointer bg-gradient-to-br from-rose-500 to-pink-600 rounded-3xl p-8 text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <RefreshCw className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">오답노트</h3>
              <p className="text-pink-100 text-sm">틀린 문제 복습</p>
              <div className="mt-4 text-3xl font-black">{wrongAnswers.length}</div>
            </div>

            <div 
              onClick={() => startQuizMode('bookmarked')}
              className="cursor-pointer bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl p-8 text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <Star className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">북마크</h3>
              <p className="text-purple-100 text-sm">중요 문제</p>
              <div className="mt-4 text-3xl font-black">{bookmarks.length}</div>
            </div>

            <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl p-8 text-white shadow-lg">
              <Flame className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">연속 정답</h3>
              <p className="text-amber-100 text-sm">현재 기록</p>
              <div className="mt-4 text-3xl font-black">{stats.streak}🔥</div>
              <div className="text-sm text-amber-100 mt-2">최고: {stats.maxStreak}</div>
            </div>
          </div>

          {/* 약점 분석 */}
          {getWeakestTopics().length > 0 && (
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Brain className="w-8 h-8 text-red-500" />
                <h3 className="text-2xl font-bold text-gray-800">취약 과목 분석</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {getWeakestTopics().map(([subject, accuracy], index) => (
                  <div key={subject} className="bg-red-50 p-6 rounded-2xl border-2 border-red-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-800">{subject}</span>
                      <span className="text-2xl font-black text-red-600">{Math.round(accuracy)}%</span>
                    </div>
                    <div className="text-sm text-red-600">
                      {index === 0 ? '⚠️ 가장 취약' : index === 1 ? '⚡ 보완 필요' : '📝 연습 권장'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Quiz Screen
  if (screen === 'quiz' && currentQuestion) {
    const userAnswer = userAnswers[currentQuestion.id];
    const isAnswered = userAnswer !== undefined;
    const isCorrect = userAnswer === currentQuestion.answer;
    const isBookmarked = bookmarks.includes(currentQuestion.id);
    const subjects = sampleData.certificates.find(c => c.id === selectedCert)?.subjects || [];

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <button
              onClick={() => setScreen('home')}
              className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              돌아가기
            </button>
            {!mockExamMode && (
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <Filter className="w-5 h-5 text-indigo-600" />
                <span className="font-medium text-gray-700">필터</span>
              </button>
            )}
          </div>

          {/* 모의고사 타이머 */}
          {mockExamMode && mockExamTimeLeft !== null && (
            <div className="bg-white rounded-3xl shadow-xl p-6 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Clock className="w-8 h-8 text-red-500" />
                  <span className="text-2xl font-bold text-gray-800">모의고사 진행 중</span>
                </div>
                <div className={`text-4xl font-black ${mockExamTimeLeft < 300 ? 'text-red-600 animate-pulse' : 'text-gray-800'}`}>
                  {formatTime(mockExamTimeLeft)}
                </div>
              </div>
            </div>
          )}

          {/* Filter Panel */}
          {showFilters && !mockExamMode && (
            <div className="bg-white rounded-3xl shadow-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">문제 필터링</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">과목별</label>
                  <select
                    value={filters.subject}
                    onChange={(e) => {
                      setFilters({ ...filters, subject: e.target.value });
                      setCurrentQuestionIndex(0);
                      setShowExplanation(false);
                    }}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:outline-none"
                  >
                    <option value="all">전체 과목</option>
                    {subjects.map(subject => (
                      <option key={subject} value={subject}>{subject}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">난이도별</label>
                  <select
                    value={filters.difficulty}
                    onChange={(e) => {
                      setFilters({ ...filters, difficulty: e.target.value });
                      setCurrentQuestionIndex(0);
                      setShowExplanation(false);
                    }}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:outline-none"
                  >
                    <option value="all">전체 난이도</option>
                    <option value="하">하</option>
                    <option value="중">중</option>
                    <option value="상">상</option>
                  </select>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                필터 적용 결과: 총 {currentQuestions.length}문제
              </div>
            </div>
          )}

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-6 h-6" />
                  <span className="font-semibold">
                    {sampleData.certificates.find(c => c.id === selectedCert)?.name}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className={`px-4 py-2 rounded-full text-sm font-bold ${getDifficultyBg(currentQuestion.difficulty)} ${getDifficultyColor(currentQuestion.difficulty)}`}>
                    난이도: {currentQuestion.difficulty}
                  </div>
                  {!mockExamMode && (
                    <button
                      onClick={() => toggleBookmark(currentQuestion.id)}
                      className={`p-2 rounded-full transition-all ${isBookmarked ? 'bg-yellow-400' : 'bg-white/20 hover:bg-white/30'}`}
                    >
                      <Star className={`w-5 h-5 ${isBookmarked ? 'text-white fill-white' : 'text-white'}`} />
                    </button>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm opacity-90">
                  {currentQuestion.subject}
                </div>
                <div className="flex items-center gap-4">
                  {!mockExamMode && (
                    <div className="flex items-center gap-2 text-sm opacity-90">
                      <Clock className="w-4 h-4" />
                      <span>{questionStartTime ? formatTime(Math.floor((Date.now() - questionStartTime) / 1000)) : '0:00'}</span>
                    </div>
                  )}
                  <div className="text-2xl font-bold">
                    {currentQuestionIndex + 1} / {currentQuestions.length}
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="h-2 bg-gray-200">
              <div 
                className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-500"
                style={{ width: `${((currentQuestionIndex + 1) / currentQuestions.length) * 100}%` }}
              />
            </div>

            {/* Question */}
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 leading-relaxed whitespace-pre-wrap">
                {currentQuestion.question}
              </h2>

              {/* Options */}
              <div className="space-y-4 mb-8">
                {currentQuestion.options.map((option, index) => {
                  const isSelected = userAnswer === index;
                  const isCorrectOption = index === currentQuestion.answer;
                  
                  let optionClass = "border-2 border-gray-200 hover:border-indigo-400 hover:bg-indigo-50";
                  
                  if (showExplanation) {
                    if (isCorrectOption) {
                      optionClass = "border-2 border-green-500 bg-green-50";
                    } else if (isSelected && !isCorrect) {
                      optionClass = "border-2 border-red-500 bg-red-50";
                    }
                  } else if (isSelected) {
                    optionClass = "border-2 border-indigo-600 bg-indigo-50";
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={showExplanation || isAnswered}
                      className={`w-full text-left p-6 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 ${optionClass} ${(showExplanation || isAnswered) ? 'cursor-default' : 'cursor-pointer'}`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${
                          showExplanation && isCorrectOption ? 'bg-green-500 text-white' :
                          showExplanation && isSelected && !isCorrect ? 'bg-red-500 text-white' :
                          isSelected ? 'bg-indigo-600 text-white' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {index + 1}
                        </div>
                        <div className="flex-1 text-lg font-medium text-gray-700">
                          {option}
                        </div>
                        {showExplanation && isCorrectOption && (
                          <CheckCircle className="w-6 h-6 text-green-500" />
                        )}
                        {showExplanation && isSelected && !isCorrect && (
                          <XCircle className="w-6 h-6 text-red-500" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Explanation (연습모드에서만) */}
              {showExplanation && !mockExamMode && (
                <div className={`p-6 rounded-2xl mb-8 ${isCorrect ? 'bg-green-50 border-2 border-green-200' : 'bg-red-50 border-2 border-red-200'}`}>
                  <div className="flex items-center gap-3 mb-4">
                    {isCorrect ? (
                      <>
                        <CheckCircle className="w-8 h-8 text-green-600" />
                        <h3 className="text-2xl font-bold text-green-700">정답입니다! 🎉</h3>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-8 h-8 text-red-600" />
                        <h3 className="text-2xl font-bold text-red-700">틀렸습니다 😢</h3>
                      </>
                    )}
                  </div>
                  <div className="bg-white p-5 rounded-xl">
                    <p className="text-lg font-semibold text-gray-700 mb-2">📝 해설</p>
                    <p className="text-gray-600 leading-relaxed">{currentQuestion.explanation}</p>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex gap-4">
                <button
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                    currentQuestionIndex === 0
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-700 cursor-pointer'
                  }`}
                >
                  ← 이전
                </button>
                <button
                  onClick={handleNext}
                  disabled={!showExplanation && !isAnswered && !mockExamMode}
                  className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all ${
                    (showExplanation || isAnswered || mockExamMode)
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white cursor-pointer' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {currentQuestionIndex < currentQuestions.length - 1 ? '다음 →' : '결과 보기'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Result Screen
  if (screen === 'result') {
    const answeredQuestions = Object.keys(userAnswers).length;
    const correctAnswers = Object.entries(userAnswers).filter(([id, answer]) => {
      const question = currentQuestions.find(q => q.id === id);
      return question && answer === question.answer;
    }).length;
    const score = answeredQuestions > 0 ? Math.round((correctAnswers / answeredQuestions) * 100) : 0;
    const isPassed = score >= 60;

    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
            <div className="text-8xl mb-6">
              {isPassed ? '🎉' : score >= 40 ? '👍' : '💪'}
            </div>
            <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {isPassed ? '합격입니다!' : score >= 40 ? '조금만 더!' : '다시 도전!'}
            </h2>
            {mockExamMode && (
              <div className="text-2xl font-semibold text-gray-600 mb-4">
                {isPassed ? '✅ 모의고사 합격' : '❌ 모의고사 불합격'}
              </div>
            )}
            <div className="text-7xl font-black text-gray-800 mb-8">
              {score}점
            </div>
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
                <div className="text-blue-600 text-sm font-semibold mb-2">정답</div>
                <div className="text-4xl font-black text-blue-700">{correctAnswers}</div>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-2xl">
                <div className="text-red-600 text-sm font-semibold mb-2">오답</div>
                <div className="text-4xl font-black text-red-700">{answeredQuestions - correctAnswers}</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl">
                <div className="text-purple-600 text-sm font-semibold mb-2">정답률</div>
                <div className="text-4xl font-black text-purple-700">{score}%</div>
              </div>
            </div>
            <div className="space-y-4">
              <button
                onClick={() => setScreen('home')}
                className="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-2xl font-bold text-lg transition-all transform hover:-translate-y-1"
              >
                홈으로 돌아가기
              </button>
              <button
                onClick={() => {
                  setCurrentQuestionIndex(0);
                  setUserAnswers({});
                  setShowExplanation(false);
                  setScreen('quiz');
                  if (mockExamMode) {
                    const cert = sampleData.certificates.find(c => c.id === selectedCert);
                    setMockExamTimeLeft(cert.examTime * 60);
                  }
                }}
                className="w-full px-8 py-4 bg-white hover:bg-gray-50 text-indigo-600 border-2 border-indigo-600 rounded-2xl font-bold text-lg transition-all"
              >
                다시 풀기
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Stats Screen
  if (screen === 'stats') {
    const accuracy = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
    const weakestTopics = getWeakestTopics();

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <button
              onClick={() => setScreen('home')}
              className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              돌아가기
            </button>
            <button
              onClick={downloadReport}
              className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition-all"
            >
              <Download className="w-5 h-5" />
              성적표 다운로드
            </button>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-12 mb-8">
            <div className="flex items-center gap-4 mb-12">
              <Trophy className="w-12 h-12 text-yellow-500" />
              <h2 className="text-4xl font-black text-gray-800">학습 통계</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
                <div className="text-green-600 font-semibold mb-2">정답률</div>
                <div className="text-6xl font-black text-green-700 mb-2">{accuracy}%</div>
                <div className="text-green-600">{stats.correct} / {stats.total} 문제</div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl">
                <div className="text-orange-600 font-semibold mb-2">최고 연속 정답</div>
                <div className="text-6xl font-black text-orange-700 mb-2">{stats.maxStreak}</div>
                <div className="text-orange-600">현재: {stats.streak} 🔥</div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
                <div className="text-blue-600 font-semibold mb-2">학습 일수</div>
                <div className="text-6xl font-black text-blue-700 mb-2">{stats.studyDays?.length || 0}</div>
                <div className="text-blue-600">일 연속 학습</div>
              </div>
            </div>

            {/* 과목별 통계 */}
            {Object.keys(stats.bySubject).length > 0 && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <Target className="w-7 h-7 text-indigo-600" />
                  과목별 성적
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {Object.entries(stats.bySubject).map(([subject, data]) => {
                    const subjectAccuracy = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
                    return (
                      <div key={subject} className="bg-gray-50 p-6 rounded-2xl">
                        <div className="flex justify-between items-center mb-3">
                          <span className="font-semibold text-gray-800">{subject}</span>
                          <span className="text-2xl font-black text-indigo-600">{subjectAccuracy}%</span>
                        </div>
                        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500"
                            style={{ width: `${subjectAccuracy}%` }}
                          />
                        </div>
                        <div className="mt-2 text-sm text-gray-600">
                          {data.correct} / {data.total} 문제
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 난이도별 통계 */}
            {Object.keys(stats.byDifficulty).length > 0 && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <TrendingUp className="w-7 h-7 text-indigo-600" />
                  난이도별 성적
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {['하', '중', '상'].map(difficulty => {
                    const data = stats.byDifficulty[difficulty];
                    if (!data) return null;
                    const diffAccuracy = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
                    return (
                      <div key={difficulty} className={`${getDifficultyBg(difficulty)} p-6 rounded-2xl`}>
                        <div className="flex justify-between items-center mb-3">
                          <span className={`font-semibold ${getDifficultyColor(difficulty)}`}>
                            난이도 {difficulty}
                          </span>
                          <span className={`text-2xl font-black ${getDifficultyColor(difficulty)}`}>
                            {diffAccuracy}%
                          </span>
                        </div>
                        <div className="h-3 bg-white rounded-full overflow-hidden">
                          <div 
                            className={`h-full transition-all duration-500 ${
                              difficulty === '하' ? 'bg-green-500' :
                              difficulty === '중' ? 'bg-yellow-500' :
                              'bg-red-500'
                            }`}
                            style={{ width: `${diffAccuracy}%` }}
                          />
                        </div>
                        <div className="mt-2 text-sm text-gray-600">
                          {data.correct} / {data.total} 문제
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 취약 과목 */}
            {weakestTopics.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <AlertCircle className="w-7 h-7 text-red-600" />
                  취약 과목 Top 3
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {weakestTopics.map(([subject, accuracy], index) => (
                    <div key={subject} className="bg-red-50 p-6 rounded-2xl border-2 border-red-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-800">{subject}</span>
                        <span className="text-2xl font-black text-red-600">{Math.round(accuracy)}%</span>
                      </div>
                      <div className="text-sm text-red-600 font-semibold">
                        {index === 0 ? '⚠️ 가장 취약' : index === 1 ? '⚡ 보완 필요' : '📝 연습 권장'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-3 gap-6">
            <button
              onClick={() => startQuizMode('wrong')}
              disabled={wrongAnswers.length === 0}
              className="bg-gradient-to-br from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed text-white p-8 rounded-3xl shadow-lg transition-all transform hover:-translate-y-1"
            >
              <RefreshCw className="w-10 h-10 mb-3" />
              <div className="text-2xl font-bold mb-2">오답노트</div>
              <div className="text-pink-100">{wrongAnswers.length}문제 복습하기</div>
            </button>

            <button
              onClick={() => startQuizMode('bookmarked')}
              disabled={bookmarks.length === 0}
              className="bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white p-8 rounded-3xl shadow-lg transition-all transform hover:-translate-y-1"
            >
              <Star className="w-10 h-10 mb-3" />
              <div className="text-2xl font-bold mb-2">북마크</div>
              <div className="text-purple-100">{bookmarks.length}문제 풀기</div>
            </button>

            <button
              onClick={() => setScreen('home')}
              className="bg-gradient-to-br from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white p-8 rounded-3xl shadow-lg transition-all transform hover:-translate-y-1"
            >
              <Award className="w-10 h-10 mb-3" />
              <div className="text-2xl font-bold mb-2">새로운 학습</div>
              <div className="text-indigo-100">문제 풀러가기</div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <BuyMeCoffeeButton />
    </>
  );
}

// 메인 App 래퍼
export function App() {
  return (
    <>
      <CertificationQuizApp />
      <BuyMeCoffeeButton />
    </>
  );
}
