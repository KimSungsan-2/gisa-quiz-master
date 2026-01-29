// 자격증 메타데이터
export const certificates = [
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
  },
  {
    id: 'mechanical',
    name: '일반기계기사',
    icon: '⚙️',
    subjects: ['재료역학', '열역학', '유체역학', '기계제작법 및 기계동력학'],
    examTime: 150,
    totalQuestions: 100
  },
  {
    id: 'driving',
    name: '운전면허 필기시험',
    icon: '🚗',
    subjects: ['교통법규', '안전운전', '교통표지'],
    examTime: 40,
    totalQuestions: 40,
    supportedLanguages: ['ko', 'vi', 'th']
  }
];

export default certificates;
