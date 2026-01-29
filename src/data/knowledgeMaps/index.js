// 지식맵 통합 모듈
import { mechanicalKnowledgeMap } from './mechanical';
import { bigdataKnowledgeMap } from './bigdata';
import { infoKnowledgeMap } from './info';
import { refrigerationKnowledgeMap } from './refrigeration';

export const knowledgeMaps = {
  mechanical: mechanicalKnowledgeMap,
  bigdata: bigdataKnowledgeMap,
  info: infoKnowledgeMap,
  refrigeration: refrigerationKnowledgeMap
};

export default knowledgeMaps;
