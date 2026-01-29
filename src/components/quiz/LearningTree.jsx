// 학습 트리 컴포넌트 - 해설에 개념 트리 구조 표시
import React, { useState } from 'react';
import { ChevronRight, BookOpen, GitBranch, Lightbulb } from 'lucide-react';

function LearningTree({ treeData }) {
  const [expanded, setExpanded] = useState(true);

  if (!treeData) return null;

  const { breadcrumb, concept, relatedConcepts, siblings } = treeData;

  return (
    <div className="mt-4 bg-indigo-50 border-2 border-indigo-200 rounded-xl overflow-hidden">
      {/* 헤더 토글 */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-4 bg-indigo-100 hover:bg-indigo-200 transition-colors"
      >
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-indigo-600" />
          <span className="font-bold text-indigo-800">학습 트리</span>
        </div>
        <span className="text-indigo-600 text-sm">
          {expanded ? '접기 ▲' : '펼치기 ▼'}
        </span>
      </button>

      {expanded && (
        <div className="p-4 md:p-5 space-y-4">
          {/* 브레드크럼 경로 */}
          <div className="flex flex-wrap items-center gap-1 text-sm">
            {breadcrumb.map((item, i) => (
              <React.Fragment key={i}>
                {i > 0 && <ChevronRight className="w-4 h-4 text-indigo-400" />}
                <span className={`px-2 py-1 rounded ${
                  i === breadcrumb.length - 1
                    ? 'bg-indigo-600 text-white font-bold'
                    : 'bg-white text-indigo-700 font-medium'
                }`}>
                  {item}
                </span>
              </React.Fragment>
            ))}
          </div>

          {/* 개념 설명 */}
          {concept.description && (
            <div className="bg-white p-3 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <Lightbulb className="w-4 h-4 text-yellow-500" />
                <span className="font-semibold text-gray-700 text-sm">개념 설명</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{concept.description}</p>
            </div>
          )}

          {/* 핵심 공식 */}
          {concept.formulas && concept.formulas.length > 0 && (
            <div className="bg-white p-3 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-blue-600 font-bold text-sm">f(x)</span>
                <span className="font-semibold text-gray-700 text-sm">핵심 공식</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {concept.formulas.map((formula, i) => (
                  <code key={i} className="px-3 py-1.5 bg-blue-50 text-blue-800 rounded-lg font-mono text-sm border border-blue-200">
                    {formula}
                  </code>
                ))}
              </div>
            </div>
          )}

          {/* 관련 개념 */}
          {relatedConcepts && relatedConcepts.length > 0 && (
            <div className="bg-white p-3 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <GitBranch className="w-4 h-4 text-green-600" />
                <span className="font-semibold text-gray-700 text-sm">관련 개념</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {relatedConcepts.map((rc, i) => (
                  <span key={i} className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm border border-green-200">
                    {rc.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* 같은 단원의 다른 개념 */}
          {siblings && siblings.length > 0 && (
            <div className="bg-white p-3 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-gray-500">📚</span>
                <span className="font-semibold text-gray-700 text-sm">같은 단원의 다른 개념</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {siblings.map((s, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default LearningTree;
