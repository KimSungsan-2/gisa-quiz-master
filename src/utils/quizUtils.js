// 퀴즈 유틸리티 함수

/**
 * Fisher-Yates 알고리즘으로 배열 셔플
 */
export function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * 배열에서 n개의 랜덤 요소 선택
 */
export function getRandomItems(array, count) {
  const shuffled = shuffleArray(array);
  return shuffled.slice(0, Math.min(count, array.length));
}

/**
 * 선택지 셔플 (정답 인덱스 추적)
 */
export function shuffleOptions(question) {
  const indices = question.options.map((_, i) => i);
  const shuffledIndices = shuffleArray(indices);

  const shuffledOptions = shuffledIndices.map(i => question.options[i]);
  const newAnswerIndex = shuffledIndices.findIndex(i => i === question.answer);

  return {
    shuffledOptions,
    newAnswerIndex
  };
}

/**
 * 챕터별 문제 필터링 및 랜덤 출제
 * @param {Array} allQuestions - 전체 문제 배열
 * @param {Object} options - 옵션
 * @param {Array} options.chapters - 선택된 챕터(과목) 배열
 * @param {number} options.count - 출제할 문제 수
 * @param {string} options.difficulty - 난이도 필터 ('all', '하', '중', '상')
 * @param {Array} options.excludeIds - 제외할 문제 ID 배열
 */
export function getRandomQuestions(allQuestions, options = {}) {
  const { chapters, count = 10, difficulty, excludeIds = [] } = options;

  // 1. 챕터 필터링
  let filtered = allQuestions;
  if (chapters && chapters.length > 0) {
    filtered = filtered.filter(q => chapters.includes(q.subject));
  }

  // 2. 난이도 필터링
  if (difficulty && difficulty !== 'all') {
    filtered = filtered.filter(q => q.difficulty === difficulty);
  }

  // 3. 이미 푼 문제 제외 (선택적)
  if (excludeIds.length > 0) {
    filtered = filtered.filter(q => !excludeIds.includes(q.id));
  }

  // 4. 랜덤 추출
  const randomQuestions = getRandomItems(filtered, count);

  // 5. 각 문제의 선택지도 셔플
  return randomQuestions.map(question => ({
    ...question,
    ...shuffleOptions(question)
  }));
}

/**
 * 균등 분포 출제 (챕터별로 균등하게)
 */
export function getBalancedRandomQuestions(allQuestions, options = {}) {
  const { chapters, count = 10 } = options;

  if (!chapters || chapters.length === 0) {
    return getRandomQuestions(allQuestions, options);
  }

  // 챕터별로 그룹화
  const questionsByChapter = {};
  chapters.forEach(chapter => {
    questionsByChapter[chapter] = allQuestions.filter(q => q.subject === chapter);
  });

  // 각 챕터에서 균등하게 추출
  const perChapter = Math.floor(count / chapters.length);
  const remainder = count % chapters.length;

  let result = [];
  chapters.forEach((chapter, index) => {
    const chapterCount = perChapter + (index < remainder ? 1 : 0);
    const chapterQuestions = getRandomItems(questionsByChapter[chapter], chapterCount);
    result = [...result, ...chapterQuestions];
  });

  // 전체 셔플 후 반환 (선택지도 셔플)
  return shuffleArray(result).map(question => ({
    ...question,
    ...shuffleOptions(question)
  }));
}

/**
 * 모든 문제 선택지 미리 셔플
 */
export function shuffleAllQuestions(questions) {
  const shuffledMap = {};
  questions.forEach(q => {
    shuffledMap[q.id] = shuffleOptions(q);
  });
  return shuffledMap;
}

/**
 * 시간 포맷팅 (초 -> MM:SS 또는 HH:MM:SS)
 */
export function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  if (hours > 0) {
    return `${hours}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

/**
 * 난이도 색상 클래스
 */
export function getDifficultyColor(difficulty) {
  switch(difficulty) {
    case '하': return 'text-green-600';
    case '중': return 'text-yellow-600';
    case '상': return 'text-red-600';
    default: return 'text-gray-600';
  }
}

/**
 * 난이도 배경 색상 클래스
 */
export function getDifficultyBg(difficulty) {
  switch(difficulty) {
    case '하': return 'bg-green-100';
    case '중': return 'bg-yellow-100';
    case '상': return 'bg-red-100';
    default: return 'bg-gray-100';
  }
}

/**
 * 정확도 계산
 */
export function calculateAccuracy(correct, total) {
  if (total === 0) return 0;
  return Math.round((correct / total) * 100);
}

/**
 * 번역된 문제 데이터 반환
 * @param {Object} question - 문제 객체
 * @param {string} lang - 언어 코드 ('ko', 'vi', 'th')
 * @returns {Object} - 번역된 question, options, explanation
 */
export function getTranslatedQuestion(question, lang) {
  if (!lang || lang === 'ko' || !question.translations?.[lang]) {
    return {
      question: question.question,
      options: question.options,
      explanation: question.explanation
    };
  }
  const t = question.translations[lang];
  return {
    question: t.question || question.question,
    options: t.options || question.options,
    explanation: t.explanation || question.explanation
  };
}

/**
 * 취약 과목 분석 (정확도 낮은 순으로 정렬)
 */
export function getWeakestTopics(bySubject, limit = 3) {
  const subjectAccuracy = {};
  Object.entries(bySubject).forEach(([subject, data]) => {
    if (data.total > 0) {
      subjectAccuracy[subject] = (data.correct / data.total) * 100;
    }
  });
  return Object.entries(subjectAccuracy)
    .sort((a, b) => a[1] - b[1])
    .slice(0, limit);
}
