// 학습 트리 조회 유틸리티
import { knowledgeMaps } from '../data/knowledgeMaps';

/**
 * 문제의 학습 트리 데이터를 조회한다.
 * @param {Object} question - 문제 객체 (subject, tags 필요)
 * @param {string} certId - 자격증 ID (e.g., 'mechanical')
 * @returns {Object|null} - { breadcrumb, concept, relatedConcepts, siblings } 또는 null
 */
export function getLearningTree(question, certId) {
  const map = knowledgeMaps[certId];
  if (!map) return null;

  const subjectData = map.subjects[question.subject];
  if (!subjectData) return null;

  const conceptKey = question.tags?.[0];
  if (!conceptKey) return null;

  // 해당 과목의 토픽들을 순회하며 개념 검색
  for (const [, topicData] of Object.entries(subjectData.topics)) {
    if (topicData.concepts[conceptKey]) {
      const concept = topicData.concepts[conceptKey];

      // 관련 개념 조회 (같은 과목 내 전체 토픽에서 검색)
      const relatedConcepts = (concept.relatedConcepts || []).map(relKey => {
        for (const t of Object.values(subjectData.topics)) {
          if (t.concepts[relKey]) {
            return { key: relKey, name: t.concepts[relKey].name };
          }
        }
        return { key: relKey, name: relKey };
      });

      // 같은 토픽의 다른 개념 (현재 개념 제외)
      const siblings = Object.entries(topicData.concepts)
        .filter(([key]) => key !== conceptKey)
        .map(([key, data]) => ({ key, name: data.name }));

      return {
        breadcrumb: [subjectData.name || question.subject, topicData.name, concept.name],
        concept,
        relatedConcepts,
        siblings
      };
    }
  }

  return null;
}
