// 데이터 통합 모듈
import { certificates } from './certificates';
import { bigdataQuestions } from './questions/bigdata';
import { infoQuestions } from './questions/info';
import { refrigerationQuestions } from './questions/refrigeration';
import { mechanicalQuestions } from './questions/mechanical';

// 모든 문제 데이터
export const questions = {
  bigdata: bigdataQuestions,
  info: infoQuestions,
  refrigeration: refrigerationQuestions,
  mechanical: mechanicalQuestions
};

// 통합 데이터 객체 (기존 sampleData 형식 호환)
export const sampleData = {
  certificates,
  questions
};

export { certificates };
export default sampleData;
