import React, { useState, useEffect } from 'react';
import { BookOpen, CheckCircle, XCircle, BarChart3, RefreshCw, ArrowLeft, Trophy, Flame, Filter, Clock, Star, Download, Calendar, TrendingUp, Award, Target, AlertCircle, Brain, LogIn } from 'lucide-react';

// 데이터 import
import { sampleData, certificates } from './data';

// 컴포넌트 import
import { AuthProvider, useAuth } from './contexts/AuthContext';
import ChapterSelector from './components/quiz/ChapterSelector';
import LoginScreen from './components/auth/LoginScreen';
import UserProfile from './components/auth/UserProfile';
import AllStructuredData from './components/seo/StructuredData';
import AdBanner from './components/ads/AdBanner';
import PremiumPage from './components/premium/PremiumPage';
import LearningTree from './components/quiz/LearningTree';

// 유틸리티 import
import {
  shuffleOptions,
  shuffleAllQuestions,
  getRandomQuestions,
  formatTime,
  getDifficultyColor,
  getDifficultyBg,
  getWeakestTopics,
  getTranslatedQuestion
} from './utils/quizUtils';
import { getLearningTree } from './utils/learningTreeUtils';

// SEO hook
import { useSEO, getScreenSEO } from './hooks/useSEO';

// Buy Me a Coffee 후원 버튼 컴포넌트
const BuyMeCoffeeButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isExpanded ? (
        <div className="flex items-center gap-2 animate-fade-in">
          <a
            href="https://buymeacoffee.com/gisaquizmaster"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-4 py-2 rounded-full shadow-md font-medium text-sm transition-all"
          >
            <span>☕</span>
            <span>커피 사주기</span>
          </a>
          <button
            onClick={() => setIsExpanded(false)}
            className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center text-gray-600 transition-all"
          >
            ✕
          </button>
        </div>
      ) : (
        <button
          onClick={() => setIsExpanded(true)}
          className="w-10 h-10 bg-gray-100 hover:bg-yellow-100 rounded-full shadow-sm flex items-center justify-center text-lg transition-all opacity-50 hover:opacity-100"
          title="개발자 후원하기"
        >
          ☕
        </button>
      )}
    </div>
  );
};

function CertificationQuizApp() {
  const { user, userData, loading, isAuthenticated, updateStats, updateWrongAnswers, updateBookmarks, toggleBookmark: authToggleBookmark } = useAuth();

  // 화면 상태
  const [screen, setScreen] = useState('home'); // home, login, chapterSelect, quiz, result, stats, premium
  const [selectedCert, setSelectedCert] = useState(null);
  const [quizMode, setQuizMode] = useState('practice'); // practice, mock
  const [showLogin, setShowLogin] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('ko'); // 운전면허 다국어

  // 퀴즈 상태
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [questionStartTime, setQuestionStartTime] = useState(null);
  const [submittedQuestions, setSubmittedQuestions] = useState(new Set());
  const [shuffledOptionsMap, setShuffledOptionsMap] = useState({});

  // 모의고사 상태
  const [mockExamMode, setMockExamMode] = useState(false);
  const [mockExamTimeLeft, setMockExamTimeLeft] = useState(null);

  // 필터 상태
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({ subject: 'all', difficulty: 'all' });

  // 로컬 데이터 (로그인 전용 fallback)
  const stats = userData?.stats || { total: 0, correct: 0, streak: 0, maxStreak: 0, bySubject: {}, byDifficulty: {}, studyDays: [], lastStudied: null, timeSpent: {} };
  const wrongAnswers = userData?.wrongAnswers || [];
  const bookmarks = userData?.bookmarks || [];

  // 현재 문제
  const currentQuestion = currentQuestions[currentQuestionIndex];

  // SEO 메타 태그 동적 업데이트
  const currentCert = certificates.find(c => c.id === selectedCert);
  const seoData = getScreenSEO(screen, currentCert);
  useSEO(seoData);

  // 문제 시작 시간 기록
  useEffect(() => {
    if (screen === 'quiz' && currentQuestion) {
      setQuestionStartTime(Date.now());
    }
  }, [currentQuestionIndex, screen, currentQuestion]);

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

  // 로딩 화면
  if (loading) {
    return (
      <div className="min-h-screen bg-indigo-600 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="text-6xl mb-4">📚</div>
          <p className="text-xl font-medium">로딩 중...</p>
        </div>
      </div>
    );
  }

  // 로그인 화면
  if (showLogin) {
    return (
      <LoginScreen
        onGuestMode={() => setShowLogin(false)}
      />
    );
  }

  // 북마크 토글
  const handleToggleBookmark = async (questionId) => {
    if (isAuthenticated) {
      await authToggleBookmark(questionId);
    } else {
      const newBookmarks = bookmarks.includes(questionId)
        ? bookmarks.filter(id => id !== questionId)
        : [...bookmarks, questionId];
      localStorage.setItem('bookmarks', JSON.stringify(newBookmarks));
      await updateBookmarks(newBookmarks);
    }
  };

  // 셔플된 옵션 가져오기
  const getShuffledData = () => {
    if (!currentQuestion) return null;
    if (shuffledOptionsMap[currentQuestion.id]) {
      return shuffledOptionsMap[currentQuestion.id];
    }
    const shuffled = shuffleOptions(currentQuestion);
    setShuffledOptionsMap(prev => ({
      ...prev,
      [currentQuestion.id]: shuffled
    }));
    return shuffled;
  };

  const shuffledData = currentQuestion ? getShuffledData() : null;

  // 자격증 선택 (챕터 선택 화면으로)
  const handleCertSelect = (certId, mode = 'practice') => {
    setSelectedCert(certId);
    setQuizMode(mode);
    setMockExamMode(mode === 'mock');
    setSelectedLanguage('ko');
    setScreen('chapterSelect');
  };

  // 챕터 선택 후 퀴즈 시작
  const handleChapterStart = ({ chapters, count, mode }) => {
    const allQuestions = sampleData.questions[selectedCert] || [];
    const randomQuestions = getRandomQuestions(allQuestions, { chapters, count });

    // 셔플맵 생성
    const newShuffledMap = {};
    randomQuestions.forEach(q => {
      newShuffledMap[q.id] = {
        shuffledOptions: q.shuffledOptions,
        newAnswerIndex: q.newAnswerIndex
      };
    });

    setCurrentQuestions(randomQuestions);
    setShuffledOptionsMap(newShuffledMap);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setShowExplanation(false);
    setSubmittedQuestions(new Set());

    if (mode === 'mock') {
      const cert = certificates.find(c => c.id === selectedCert);
      // 문제 수에 비례한 시간 계산 (전체 문제 기준 시간 비율)
      const timeRatio = count / allQuestions.length;
      const examTime = Math.max(Math.round(cert.examTime * timeRatio), 10); // 최소 10분
      setMockExamTimeLeft(examTime * 60);
    }

    setScreen('quiz');
  };

  // 답안 선택
  const handleAnswerSelect = (optionIndex) => {
    if (showExplanation) return;
    setUserAnswers({
      ...userAnswers,
      [currentQuestion.id]: optionIndex
    });
  };

  // 답안 제출
  const handleAnswerSubmit = async () => {
    const userAnswer = userAnswers[currentQuestion.id];
    if (userAnswer === undefined) return;
    if (submittedQuestions.has(currentQuestion.id)) return;

    setSubmittedQuestions(prev => new Set([...prev, currentQuestion.id]));

    const timeSpent = questionStartTime ? Math.floor((Date.now() - questionStartTime) / 1000) : 0;
    const correctAnswerIndex = shuffledOptionsMap[currentQuestion.id]?.newAnswerIndex ?? currentQuestion.answer;
    const isCorrect = userAnswer === correctAnswerIndex;

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

    await updateStats(newStats);

    // 오답 처리
    if (!isCorrect && !wrongAnswers.includes(currentQuestion.id)) {
      await updateWrongAnswers([...wrongAnswers, currentQuestion.id]);
    } else if (isCorrect && wrongAnswers.includes(currentQuestion.id)) {
      await updateWrongAnswers(wrongAnswers.filter(id => id !== currentQuestion.id));
    }

    if (!mockExamMode) {
      setShowExplanation(true);
    }
  };

  // 다음 문제
  const handleNext = () => {
    if (mockExamMode && userAnswers[currentQuestion.id] !== undefined) {
      handleAnswerSubmit();
    }

    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowExplanation(false);
    } else {
      setScreen('result');
    }
  };

  // 이전 문제
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setShowExplanation(false);
    }
  };

  // 특정 모드로 퀴즈 시작 (오답/북마크)
  const startQuizMode = (mode) => {
    if (mode === 'wrong' && wrongAnswers.length === 0) {
      alert('오답노트가 비어있습니다!');
      return;
    }
    if (mode === 'bookmarked' && bookmarks.length === 0) {
      alert('북마크한 문제가 없습니다!');
      return;
    }

    // 모든 자격증의 해당 모드 문제 수집
    let questionsToUse = [];
    Object.entries(sampleData.questions).forEach(([certId, certQuestions]) => {
      const filtered = mode === 'wrong'
        ? certQuestions.filter(q => wrongAnswers.includes(q.id))
        : certQuestions.filter(q => bookmarks.includes(q.id));
      questionsToUse = [...questionsToUse, ...filtered];
    });

    if (questionsToUse.length === 0) {
      alert(mode === 'wrong' ? '오답 문제가 없습니다!' : '북마크한 문제가 없습니다!');
      return;
    }

    // 셔플
    const shuffledQuestions = questionsToUse.map(q => ({
      ...q,
      ...shuffleOptions(q)
    }));

    const newShuffledMap = {};
    shuffledQuestions.forEach(q => {
      newShuffledMap[q.id] = {
        shuffledOptions: q.shuffledOptions,
        newAnswerIndex: q.newAnswerIndex
      };
    });

    setCurrentQuestions(shuffledQuestions);
    setShuffledOptionsMap(newShuffledMap);
    setMockExamMode(false);
    setScreen('quiz');
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setShowExplanation(false);
    setSubmittedQuestions(new Set());
  };

  // 성적표 다운로드
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

  // 취약 과목 분석
  const weakTopics = getWeakestTopics(stats.bySubject);

  // 챕터 선택 화면
  if (screen === 'chapterSelect') {
    const cert = certificates.find(c => c.id === selectedCert);
    const questions = sampleData.questions[selectedCert] || [];

    return (
      <ChapterSelector
        certificate={cert}
        questions={questions}
        mode={quizMode}
        onStart={handleChapterStart}
        onBack={() => setScreen('home')}
        selectedLanguage={selectedLanguage}
        onLanguageChange={setSelectedLanguage}
      />
    );
  }

  // 홈 화면
  if (screen === 'home') {
    const daysSinceLastStudy = stats.lastStudied
      ? Math.floor((Date.now() - new Date(stats.lastStudied).getTime()) / (1000 * 60 * 60 * 24))
      : null;
    const studyStreak = stats.studyDays?.length || 0;

    return (
      <div className="min-h-screen bg-gray-50 p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          {/* 헤더 */}
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => setScreen('premium')}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-md hover:shadow-md transition-all font-medium"
            >
              <Star className="w-5 h-5 fill-white" />
              <span>프리미엄</span>
            </button>

            {isAuthenticated ? (
              <UserProfile />
            ) : (
              <button
                onClick={() => setShowLogin(true)}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md hover:shadow-md transition-all font-medium text-gray-700"
              >
                <LogIn className="w-5 h-5" />
                <span>로그인</span>
              </button>
            )}
          </div>

          <div className="text-center mb-12 pt-8">
            <div className="inline-block mb-4">
              <div className="text-5xl mb-4">📚</div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3 text-gray-800">
              기사 자격증 학습 시스템
            </h1>
            <p className="text-lg text-gray-600">
              체계적인 학습으로 합격을 향해 나아갑니다
            </p>
            {daysSinceLastStudy !== null && (
              <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
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

          {/* 상단 광고 */}
          <AdBanner
            slot="1234567890"
            format="horizontal"
            style={{ minHeight: '90px' }}
            className="mb-8"
          />

          {/* 자격증 카드 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {certificates.map((cert) => {
              const certQuestions = sampleData.questions[cert.id] || [];
              const attemptedCount = stats.bySubject
                ? cert.subjects.reduce((sum, subject) => {
                    const subjectStat = stats.bySubject[subject];
                    return sum + (subjectStat?.total || 0);
                  }, 0)
                : 0;
              const progress = certQuestions.length > 0 ? Math.min(100, Math.round((attemptedCount / certQuestions.length) * 100)) : 0;

              return (
                <div key={cert.id} className="bg-white rounded-xl p-6 md:p-8 shadow-lg">
                  <div className="text-5xl md:text-6xl mb-4">{cert.icon}</div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-800">{cert.name}</h3>
                  <div className="text-sm text-gray-500 mb-4">{cert.subjects.length}개 과목 · {certQuestions.length}문제</div>
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>학습 진도</span>
                      <span>{progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-indigo-600 transition-all duration-500"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <button
                      onClick={() => handleCertSelect(cert.id, 'practice')}
                      className="w-full px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition-all"
                    >
                      연습 모드
                    </button>
                    <button
                      onClick={() => handleCertSelect(cert.id, 'mock')}
                      className="w-full px-4 py-3 bg-white hover:bg-gray-50 text-indigo-600 border-2 border-indigo-600 rounded-xl font-semibold transition-all"
                    >
                      모의고사 ({cert.examTime}분)
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 중간 광고 */}
          <AdBanner
            slot="1234567891"
            format="rectangle"
            style={{ minHeight: '250px' }}
            className="mb-8"
          />

          {/* 통계 카드 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
            <div
              onClick={() => setScreen('stats')}
              className="cursor-pointer bg-indigo-600 rounded-xl p-6 md:p-8 text-white shadow-lg hover:shadow-md transition-all duration-300"
            >
              <BarChart3 className="w-10 md:w-12 h-10 md:h-12 mb-4" />
              <h3 className="text-xl md:text-2xl font-bold mb-2">학습 통계</h3>
              <p className="text-white/70 text-sm">내 실력 확인</p>
              <div className="mt-4 text-2xl md:text-3xl font-black">{stats.correct}/{stats.total}</div>
            </div>

            <div
              onClick={() => startQuizMode('wrong')}
              className="cursor-pointer bg-gray-700 rounded-xl p-6 md:p-8 text-white shadow-lg hover:shadow-md transition-all duration-300"
            >
              <RefreshCw className="w-10 md:w-12 h-10 md:h-12 mb-4" />
              <h3 className="text-xl md:text-2xl font-bold mb-2">오답노트</h3>
              <p className="text-white/70 text-sm">틀린 문제 복습</p>
              <div className="mt-4 text-2xl md:text-3xl font-black">{wrongAnswers.length}</div>
            </div>

            <div
              onClick={() => startQuizMode('bookmarked')}
              className="cursor-pointer bg-gray-600 rounded-xl p-6 md:p-8 text-white shadow-lg hover:shadow-md transition-all duration-300"
            >
              <Star className="w-10 md:w-12 h-10 md:h-12 mb-4" />
              <h3 className="text-xl md:text-2xl font-bold mb-2">북마크</h3>
              <p className="text-white/70 text-sm">중요 문제</p>
              <div className="mt-4 text-2xl md:text-3xl font-black">{bookmarks.length}</div>
            </div>

            <div className="bg-gray-500 rounded-xl p-6 md:p-8 text-white shadow-lg">
              <Flame className="w-10 md:w-12 h-10 md:h-12 mb-4" />
              <h3 className="text-xl md:text-2xl font-bold mb-2">연속 정답</h3>
              <p className="text-white/70 text-sm">현재 기록</p>
              <div className="mt-4 text-2xl md:text-3xl font-black">{stats.streak}🔥</div>
              <div className="text-sm text-white/70 mt-2">최고: {stats.maxStreak}</div>
            </div>
          </div>

          {/* 취약 과목 분석 */}
          {weakTopics.length > 0 && (
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Brain className="w-8 h-8 text-red-500" />
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">취약 과목 분석</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {weakTopics.map(([subject, accuracy], index) => (
                  <div key={subject} className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-800 text-sm md:text-base">{subject}</span>
                      <span className="text-xl md:text-2xl font-black text-red-600">{Math.round(accuracy)}%</span>
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

  // 퀴즈 화면
  if (screen === 'quiz' && currentQuestion) {
    const userAnswer = userAnswers[currentQuestion.id];
    const isAnswered = userAnswer !== undefined;
    const correctAnswerIndex = shuffledOptionsMap[currentQuestion.id]?.newAnswerIndex ?? currentQuestion.answer;
    const isCorrect = userAnswer === correctAnswerIndex;
    const isBookmarked = bookmarks.includes(currentQuestion.id);
    const translated = getTranslatedQuestion(currentQuestion, selectedLanguage);
    const learningTreeData = showExplanation ? getLearningTree(currentQuestion, selectedCert) : null;

    return (
      <div className="min-h-screen bg-gray-50 p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <button
              onClick={() => setScreen('home')}
              className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              돌아가기
            </button>
          </div>

          {/* 모의고사 타이머 */}
          {mockExamMode && mockExamTimeLeft !== null && (
            <div className="bg-white rounded-xl shadow-md p-4 md:p-6 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Clock className="w-6 md:w-8 h-6 md:h-8 text-red-500" />
                  <span className="text-lg md:text-2xl font-bold text-gray-800">모의고사 진행 중</span>
                </div>
                <div className={`text-2xl md:text-4xl font-black ${mockExamTimeLeft < 300 ? 'text-red-600 animate-pulse' : 'text-gray-800'}`}>
                  {formatTime(mockExamTimeLeft)}
                </div>
              </div>
            </div>
          )}

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {/* Header */}
            <div className="bg-indigo-600 p-6 md:p-8 text-white">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 md:w-6 h-5 md:h-6" />
                  <span className="font-semibold text-sm md:text-base">
                    {currentQuestion.subject}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className={`px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-bold ${getDifficultyBg(currentQuestion.difficulty)} ${getDifficultyColor(currentQuestion.difficulty)}`}>
                    난이도: {currentQuestion.difficulty}
                  </div>
                  {!mockExamMode && (
                    <button
                      onClick={() => handleToggleBookmark(currentQuestion.id)}
                      className={`p-2 rounded-full transition-all ${isBookmarked ? 'bg-yellow-400' : 'bg-white/20 hover:bg-white/30'}`}
                    >
                      <Star className={`w-4 md:w-5 h-4 md:h-5 ${isBookmarked ? 'text-white fill-white' : 'text-white'}`} />
                    </button>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {!mockExamMode && (
                    <div className="flex items-center gap-2 text-sm opacity-90">
                      <Clock className="w-4 h-4" />
                      <span>{questionStartTime ? formatTime(Math.floor((Date.now() - questionStartTime) / 1000)) : '0:00'}</span>
                    </div>
                  )}
                </div>
                <div className="text-xl md:text-2xl font-bold">
                  {currentQuestionIndex + 1} / {currentQuestions.length}
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="h-2 bg-gray-200">
              <div
                className="h-full bg-indigo-600 transition-all duration-500"
                style={{ width: `${((currentQuestionIndex + 1) / currentQuestions.length) * 100}%` }}
              />
            </div>

            {/* Question */}
            <div className="p-6 md:p-8">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-8 leading-relaxed whitespace-pre-wrap">
                {translated.question}
              </h2>

              {/* Options */}
              <div className="space-y-3 md:space-y-4 mb-8">
                {(shuffledData?.shuffledOptions || currentQuestion.options).map((option, index) => {
                  // 번역된 선택지 표시
                  const displayOption = (selectedLanguage !== 'ko' && translated.options)
                    ? (translated.options[currentQuestion.options.indexOf(option)] || option)
                    : option;
                  const isSelected = userAnswer === index;
                  const isCorrectOption = index === (shuffledData?.newAnswerIndex ?? currentQuestion.answer);

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
                      disabled={showExplanation}
                      className={`w-full text-left p-4 md:p-6 rounded-lg transition-all duration-300 ${optionClass} ${showExplanation ? 'cursor-default' : 'cursor-pointer'}`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`flex-shrink-0 w-8 md:w-10 h-8 md:h-10 rounded-full flex items-center justify-center font-bold text-base md:text-lg ${
                          showExplanation && isCorrectOption ? 'bg-green-500 text-white' :
                          showExplanation && isSelected && !isCorrect ? 'bg-red-500 text-white' :
                          isSelected ? 'bg-indigo-600 text-white' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {index + 1}
                        </div>
                        <div className="flex-1 text-base md:text-lg font-medium text-gray-700">
                          {displayOption}
                        </div>
                        {showExplanation && isCorrectOption && (
                          <CheckCircle className="w-5 md:w-6 h-5 md:h-6 text-green-500" />
                        )}
                        {showExplanation && isSelected && !isCorrect && (
                          <XCircle className="w-5 md:w-6 h-5 md:h-6 text-red-500" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Explanation */}
              {showExplanation && !mockExamMode && (
                <div className={`p-4 md:p-6 rounded-lg mb-8 ${isCorrect ? 'bg-green-50 border-2 border-green-200' : 'bg-red-50 border-2 border-red-200'}`}>
                  <div className="flex items-center gap-3 mb-4">
                    {isCorrect ? (
                      <>
                        <CheckCircle className="w-6 md:w-8 h-6 md:h-8 text-green-600" />
                        <h3 className="text-xl md:text-2xl font-bold text-green-700">정답입니다! 🎉</h3>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-6 md:w-8 h-6 md:h-8 text-red-600" />
                        <h3 className="text-xl md:text-2xl font-bold text-red-700">틀렸습니다 😢</h3>
                      </>
                    )}
                  </div>
                  <div className="bg-white p-4 md:p-5 rounded-xl">
                    <p className="text-base md:text-lg font-semibold text-gray-700 mb-2">📝 해설</p>
                    <p className="text-gray-600 leading-relaxed">{translated.explanation}</p>
                  </div>
                  <LearningTree treeData={learningTreeData} />
                </div>
              )}

              {/* Submit Button */}
              {!mockExamMode && !showExplanation && (
                <div className="mb-4">
                  <button
                    onClick={handleAnswerSubmit}
                    disabled={!isAnswered}
                    className={`w-full px-6 py-4 rounded-xl font-bold text-lg transition-all ${
                      isAnswered
                        ? 'bg-green-600 hover:bg-green-700 text-white cursor-pointer shadow-md'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {isAnswered ? '답안 제출' : '답을 선택해주세요'}
                  </button>
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
                {(mockExamMode || showExplanation) && (
                  <button
                    onClick={handleNext}
                    className="flex-1 px-6 py-3 rounded-xl font-semibold transition-all bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer"
                  >
                    {currentQuestionIndex < currentQuestions.length - 1 ? '다음 문제 →' : '결과 확인'}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 결과 화면
  if (screen === 'result') {
    const answeredQuestions = Object.keys(userAnswers).length;
    const correctAnswers = Object.entries(userAnswers).filter(([id, answer]) => {
      const question = currentQuestions.find(q => q.id === id);
      const correctIdx = shuffledOptionsMap[id]?.newAnswerIndex ?? question?.answer;
      return question && answer === correctIdx;
    }).length;
    const score = answeredQuestions > 0 ? Math.round((correctAnswers / answeredQuestions) * 100) : 0;
    const isPassed = score >= 60;

    return (
      <div className="min-h-screen bg-gray-50 p-4 md:p-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 text-center">
            <div className="text-6xl md:text-8xl mb-6">
              {isPassed ? '🎉' : score >= 40 ? '👍' : '💪'}
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-indigo-600">
              {isPassed ? '합격입니다!' : score >= 40 ? '조금만 더!' : '다시 도전!'}
            </h2>
            {mockExamMode && (
              <div className="text-xl md:text-2xl font-semibold text-gray-600 mb-4">
                {isPassed ? '✅ 모의고사 합격' : '❌ 모의고사 불합격'}
              </div>
            )}
            <div className="text-5xl md:text-7xl font-black text-gray-800 mb-8">
              {score}점
            </div>
            <div className="grid grid-cols-3 gap-4 md:gap-6 mb-8">
              <div className="bg-blue-50 p-4 md:p-6 rounded-lg">
                <div className="text-blue-600 text-xs md:text-sm font-semibold mb-2">정답</div>
                <div className="text-2xl md:text-4xl font-black text-blue-700">{correctAnswers}</div>
              </div>
              <div className="bg-red-50 p-4 md:p-6 rounded-lg">
                <div className="text-red-600 text-xs md:text-sm font-semibold mb-2">오답</div>
                <div className="text-2xl md:text-4xl font-black text-red-700">{answeredQuestions - correctAnswers}</div>
              </div>
              <div className="bg-purple-50 p-4 md:p-6 rounded-lg">
                <div className="text-purple-600 text-xs md:text-sm font-semibold mb-2">정답률</div>
                <div className="text-2xl md:text-4xl font-black text-purple-700">{score}%</div>
              </div>
            </div>

            {/* 결과 페이지 광고 */}
            <AdBanner
              slot="1234567892"
              format="rectangle"
              style={{ minHeight: '250px' }}
              className="mb-6"
            />

            <div className="space-y-4">
              <button
                onClick={() => setScreen('home')}
                className="w-full px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold text-lg transition-all"
              >
                홈으로 돌아가기
              </button>
              <button
                onClick={() => {
                  setCurrentQuestionIndex(0);
                  setUserAnswers({});
                  setShowExplanation(false);
                  setSubmittedQuestions(new Set());
                  setScreen('quiz');
                  if (mockExamMode) {
                    const cert = certificates.find(c => c.id === selectedCert);
                    const timeRatio = currentQuestions.length / (sampleData.questions[selectedCert]?.length || 1);
                    const examTime = Math.max(Math.round(cert.examTime * timeRatio), 10);
                    setMockExamTimeLeft(examTime * 60);
                  }
                }}
                className="w-full px-8 py-4 bg-white hover:bg-gray-50 text-indigo-600 border-2 border-indigo-600 rounded-lg font-bold text-lg transition-all"
              >
                다시 풀기
              </button>
            </div>

            {/* 하단 광고 */}
            <AdBanner
              slot="1234567893"
              format="horizontal"
              style={{ minHeight: '90px' }}
              className="mt-6"
            />
          </div>
        </div>
      </div>
    );
  }

  // 통계 화면
  if (screen === 'stats') {
    const accuracy = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;

    return (
      <div className="min-h-screen bg-gray-50 p-4 md:p-8">
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
              className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition-all"
            >
              <Download className="w-5 h-5" />
              <span className="hidden sm:inline">성적표 다운로드</span>
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 md:p-12 mb-8">
            <div className="flex items-center gap-4 mb-8 md:mb-12">
              <Trophy className="w-10 md:w-12 h-10 md:h-12 text-yellow-500" />
              <h2 className="text-2xl md:text-4xl font-black text-gray-800">학습 통계</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
              <div className="bg-green-50 p-6 md:p-8 rounded-lg">
                <div className="text-green-600 font-semibold mb-2">정답률</div>
                <div className="text-4xl md:text-6xl font-black text-green-700 mb-2">{accuracy}%</div>
                <div className="text-green-600">{stats.correct} / {stats.total} 문제</div>
              </div>

              <div className="bg-orange-50 p-6 md:p-8 rounded-lg">
                <div className="text-orange-600 font-semibold mb-2">최고 연속 정답</div>
                <div className="text-4xl md:text-6xl font-black text-orange-700 mb-2">{stats.maxStreak}</div>
                <div className="text-orange-600">현재: {stats.streak} 🔥</div>
              </div>

              <div className="bg-blue-50 p-6 md:p-8 rounded-lg">
                <div className="text-blue-600 font-semibold mb-2">학습 일수</div>
                <div className="text-4xl md:text-6xl font-black text-blue-700 mb-2">{stats.studyDays?.length || 0}</div>
                <div className="text-blue-600">일 학습</div>
              </div>
            </div>

            {/* 과목별 통계 */}
            {Object.keys(stats.bySubject).length > 0 && (
              <div className="mb-8 md:mb-12">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <Target className="w-6 md:w-7 h-6 md:h-7 text-indigo-600" />
                  과목별 성적
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {Object.entries(stats.bySubject).map(([subject, data]) => {
                    const subjectAccuracy = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
                    return (
                      <div key={subject} className="bg-gray-50 p-4 md:p-6 rounded-lg">
                        <div className="flex justify-between items-center mb-3">
                          <span className="font-semibold text-gray-800 text-sm md:text-base">{subject}</span>
                          <span className="text-xl md:text-2xl font-black text-indigo-600">{subjectAccuracy}%</span>
                        </div>
                        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-indigo-600 transition-all duration-500"
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
              <div className="mb-8 md:mb-12">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <TrendingUp className="w-6 md:w-7 h-6 md:h-7 text-indigo-600" />
                  난이도별 성적
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {['하', '중', '상'].map(difficulty => {
                    const data = stats.byDifficulty[difficulty];
                    if (!data) return null;
                    const diffAccuracy = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
                    return (
                      <div key={difficulty} className={`${getDifficultyBg(difficulty)} p-4 md:p-6 rounded-lg`}>
                        <div className="flex justify-between items-center mb-3">
                          <span className={`font-semibold ${getDifficultyColor(difficulty)}`}>
                            {difficulty}
                          </span>
                          <span className={`text-xl md:text-2xl font-black ${getDifficultyColor(difficulty)}`}>
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
                          {data.correct} / {data.total}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 취약 과목 */}
            {weakTopics.length > 0 && (
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <AlertCircle className="w-6 md:w-7 h-6 md:h-7 text-red-600" />
                  취약 과목 Top 3
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {weakTopics.map(([subject, accuracy], index) => (
                    <div key={subject} className="bg-red-50 p-4 md:p-6 rounded-lg border-2 border-red-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-800 text-sm">{subject}</span>
                        <span className="text-xl md:text-2xl font-black text-red-600">{Math.round(accuracy)}%</span>
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
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            <button
              onClick={() => startQuizMode('wrong')}
              disabled={wrongAnswers.length === 0}
              className="bg-gray-700 hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed text-white p-6 md:p-8 rounded-xl shadow-lg transition-all"
            >
              <RefreshCw className="w-8 md:w-10 h-8 md:h-10 mb-3" />
              <div className="text-xl md:text-2xl font-bold mb-2">오답노트</div>
              <div className="text-white/70">{wrongAnswers.length}문제 복습하기</div>
            </button>

            <button
              onClick={() => startQuizMode('bookmarked')}
              disabled={bookmarks.length === 0}
              className="bg-gray-600 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed text-white p-6 md:p-8 rounded-xl shadow-lg transition-all"
            >
              <Star className="w-8 md:w-10 h-8 md:h-10 mb-3" />
              <div className="text-xl md:text-2xl font-bold mb-2">북마크</div>
              <div className="text-white/70">{bookmarks.length}문제 풀기</div>
            </button>

            <button
              onClick={() => setScreen('home')}
              className="bg-indigo-600 hover:bg-indigo-700 text-white p-6 md:p-8 rounded-xl shadow-lg transition-all"
            >
              <Award className="w-8 md:w-10 h-8 md:h-10 mb-3" />
              <div className="text-xl md:text-2xl font-bold mb-2">새로운 학습</div>
              <div className="text-white/70">문제 풀러가기</div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 프리미엄 화면
  if (screen === 'premium') {
    return (
      <PremiumPage
        onBack={() => setScreen('home')}
        onSubscribe={() => {
          // TODO: 토스페이먼츠 결제 연동 (Phase 3)
          alert('결제 기능은 곧 추가됩니다!');
        }}
      />
    );
  }

  return null;
}

// 메인 App 래퍼
export default function App() {
  return (
    <AuthProvider>
      <AllStructuredData />
      <CertificationQuizApp />
      <BuyMeCoffeeButton />
    </AuthProvider>
  );
}
