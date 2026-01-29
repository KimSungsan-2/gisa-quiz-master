// 챕터(과목) 선택 컴포넌트
import React, { useState } from 'react';
import { BookOpen, CheckSquare, Square, PlayCircle, ArrowLeft, Clock } from 'lucide-react';
import LanguageSelector from './LanguageSelector';

function ChapterSelector({
  certificate,
  questions,
  mode = 'practice', // 'practice' or 'mock'
  onStart,
  onBack,
  selectedLanguage,
  onLanguageChange
}) {
  const [selectedChapters, setSelectedChapters] = useState([]);
  const [questionCount, setQuestionCount] = useState(10);

  // 해당 자격증의 과목(챕터) 목록
  const chapters = certificate.subjects;

  // 챕터별 문제 수 계산
  const getQuestionCountByChapter = (chapter) => {
    return questions.filter(q => q.subject === chapter).length;
  };

  // 선택된 챕터들의 총 문제 수
  const totalAvailableQuestions = selectedChapters.length === 0
    ? questions.length
    : questions.filter(q => selectedChapters.includes(q.subject)).length;

  // 전체 선택/해제 토글
  const toggleAll = () => {
    if (selectedChapters.length === chapters.length) {
      setSelectedChapters([]);
    } else {
      setSelectedChapters([...chapters]);
    }
  };

  // 개별 챕터 토글
  const toggleChapter = (chapter) => {
    setSelectedChapters(prev =>
      prev.includes(chapter)
        ? prev.filter(c => c !== chapter)
        : [...prev, chapter]
    );
  };

  // 시작 핸들러
  const handleStart = () => {
    const chaptersToUse = selectedChapters.length === 0 ? chapters : selectedChapters;
    const countToUse = questionCount === 'all' ? totalAvailableQuestions : questionCount;

    onStart({
      chapters: chaptersToUse,
      count: countToUse,
      mode
    });
  };

  // 문제 수 옵션
  const countOptions = [10, 20, 30, 'all'];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        {/* 헤더 */}
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={onBack}
            className="p-2 hover:bg-gray-200 rounded-full transition-all"
          >
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <div className="flex items-center gap-3">
            <span className="text-3xl">{certificate.icon}</span>
            <div>
              <h1 className="text-xl font-bold text-gray-800">{certificate.name}</h1>
              <p className="text-sm text-gray-500">
                {mode === 'mock' ? '모의고사' : '연습 모드'} - 과목 선택
              </p>
            </div>
          </div>
        </div>

        {/* 메인 카드 */}
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-7 h-7 text-indigo-600" />
            <h2 className="text-xl font-bold text-gray-800">과목 선택</h2>
          </div>

          {/* 언어 선택 (운전면허만) */}
          {certificate.supportedLanguages && onLanguageChange && (
            <LanguageSelector
              selectedLanguage={selectedLanguage}
              onSelect={onLanguageChange}
            />
          )}

          {/* 전체 선택 */}
          <button
            onClick={toggleAll}
            className="w-full flex items-center gap-3 p-4 mb-4 bg-indigo-50 rounded-xl hover:bg-indigo-100 transition-all"
          >
            {selectedChapters.length === chapters.length ? (
              <CheckSquare className="w-6 h-6 text-indigo-600" />
            ) : (
              <Square className="w-6 h-6 text-gray-400" />
            )}
            <span className="font-semibold text-gray-800">전체 선택</span>
            <span className="ml-auto text-sm text-gray-500">{questions.length}문제</span>
          </button>

          {/* 개별 챕터 */}
          <div className="space-y-2 mb-6">
            {chapters.map(chapter => (
              <button
                key={chapter}
                onClick={() => toggleChapter(chapter)}
                className={`w-full flex items-center gap-3 p-4 rounded-xl transition-all ${
                  selectedChapters.includes(chapter)
                    ? 'bg-indigo-100 border-2 border-indigo-500'
                    : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
                }`}
              >
                {selectedChapters.includes(chapter) ? (
                  <CheckSquare className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                ) : (
                  <Square className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
                <span className="font-medium text-gray-700 text-left flex-1">{chapter}</span>
                <span className="text-sm text-gray-500 flex-shrink-0">
                  {getQuestionCountByChapter(chapter)}문제
                </span>
              </button>
            ))}
          </div>

          {/* 문제 수 선택 */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              문제 수
            </label>
            <div className="grid grid-cols-4 gap-2">
              {countOptions.map(count => {
                const isDisabled = count !== 'all' && count > totalAvailableQuestions;
                return (
                  <button
                    key={count}
                    onClick={() => !isDisabled && setQuestionCount(count)}
                    disabled={isDisabled}
                    className={`px-4 py-3 rounded-xl font-semibold transition-all ${
                      questionCount === count
                        ? 'bg-indigo-600 text-white'
                        : isDisabled
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {count === 'all' ? '전체' : `${count}문제`}
                  </button>
                );
              })}
            </div>
            <p className="mt-2 text-sm text-gray-500">
              선택 가능: 최대 {totalAvailableQuestions}문제
            </p>
          </div>

          {/* 모의고사 시간 안내 */}
          {mode === 'mock' && (
            <div className="mb-6 p-4 bg-orange-50 rounded-xl flex items-center gap-3">
              <Clock className="w-5 h-5 text-orange-600" />
              <div>
                <p className="font-medium text-orange-800">모의고사 시간</p>
                <p className="text-sm text-orange-600">
                  {certificate.examTime}분 제한 (선택한 문제 수에 비례하여 조정)
                </p>
              </div>
            </div>
          )}

          {/* 버튼 */}
          <div className="flex gap-4">
            <button
              onClick={onBack}
              className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-xl font-semibold transition-all"
            >
              뒤로
            </button>
            <button
              onClick={handleStart}
              disabled={selectedChapters.length === 0 && totalAvailableQuestions === 0}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <PlayCircle className="w-5 h-5" />
              {mode === 'mock' ? '모의고사 시작' : '학습 시작'}
            </button>
          </div>
        </div>

        {/* 안내 문구 */}
        <p className="text-center text-gray-500 text-sm mt-4">
          {selectedChapters.length === 0
            ? '과목을 선택하지 않으면 전체 과목에서 출제됩니다.'
            : `${selectedChapters.length}개 과목 선택됨`}
        </p>
      </div>
    </div>
  );
}

export default ChapterSelector;
