// 빅데이터분석기사 문제 데이터
export const bigdataQuestions = [
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
  },
  {
    id: 'BAE_013',
    subject: '빅데이터 분석 기획',
    question: '데이터 마이닝의 CRISP-DM 방법론 단계로 올바르지 않은 것은?',
    options: ['비즈니스 이해', '데이터 이해', '모델링', '시스템 통합'],
    answer: 3,
    explanation: 'CRISP-DM은 비즈니스 이해 → 데이터 이해 → 데이터 준비 → 모델링 → 평가 → 배포의 6단계로 구성됩니다.',
    difficulty: '중',
    tags: ['CRISP-DM', '방법론']
  },
  {
    id: 'BAE_014',
    subject: '빅데이터 분석 기획',
    question: '하둡(Hadoop) 에코시스템의 구성요소가 아닌 것은?',
    options: ['HDFS', 'MapReduce', 'TensorFlow', 'YARN'],
    answer: 2,
    explanation: 'TensorFlow는 Google의 딥러닝 프레임워크로, Hadoop 에코시스템의 구성요소가 아닙니다.',
    difficulty: '중',
    tags: ['Hadoop', '빅데이터 플랫폼']
  },
  {
    id: 'BAE_015',
    subject: '빅데이터 분석 기획',
    question: '데이터 레이크(Data Lake)에 대한 설명으로 틀린 것은?',
    options: ['정형/비정형 데이터를 원시 형태로 저장', '스키마 온 리드(Schema on Read) 방식 사용', '데이터 웨어하우스보다 유연한 구조', '데이터 저장 전 반드시 ETL 과정 필요'],
    answer: 3,
    explanation: '데이터 레이크는 원시 데이터를 그대로 저장하고 필요시 변환하는 방식(ELT)을 사용합니다.',
    difficulty: '중',
    tags: ['데이터 레이크', '아키텍처']
  },
  {
    id: 'BAE_016',
    subject: '빅데이터 탐색',
    question: '이상값(Outlier) 탐지 방법이 아닌 것은?',
    options: ['IQR 방법', 'Z-score 방법', 'DBSCAN', 'PCA'],
    answer: 3,
    explanation: 'PCA는 차원 축소 기법이며, IQR, Z-score, DBSCAN 등은 이상값 탐지에 사용됩니다.',
    difficulty: '중',
    tags: ['이상값', '탐지']
  },
  {
    id: 'BAE_017',
    subject: '빅데이터 탐색',
    question: '데이터 불균형(Imbalanced Data) 처리 방법이 아닌 것은?',
    options: ['오버샘플링(SMOTE)', '언더샘플링', '비용 민감 학습', '정규화(Normalization)'],
    answer: 3,
    explanation: '정규화는 스케일링 기법이며, 데이터 불균형 처리와는 관계가 없습니다.',
    difficulty: '중',
    tags: ['불균형 데이터', '샘플링']
  },
  {
    id: 'BAE_018',
    subject: '빅데이터 탐색',
    question: '피처 선택(Feature Selection) 방법 중 필터(Filter) 방식에 해당하는 것은?',
    options: ['상관계수 기반 선택', 'Recursive Feature Elimination', 'Forward Selection', 'Backward Elimination'],
    answer: 0,
    explanation: '필터 방식은 모델 학습 없이 통계적 기법(상관계수, 카이제곱 등)으로 특성을 선택합니다.',
    difficulty: '상',
    tags: ['피처 선택', '필터']
  },
  {
    id: 'BAE_019',
    subject: '빅데이터 탐색',
    question: '원-핫 인코딩(One-Hot Encoding)에 대한 설명으로 틀린 것은?',
    options: ['범주형 변수를 수치형으로 변환', '각 범주를 이진 벡터로 표현', '범주 간 순서 정보를 유지', '고차원 데이터를 생성할 수 있음'],
    answer: 2,
    explanation: '원-핫 인코딩은 범주 간 순서 정보를 유지하지 않습니다. 순서가 있는 경우 레이블 인코딩이 적합합니다.',
    difficulty: '하',
    tags: ['인코딩', '전처리']
  },
  {
    id: 'BAE_020',
    subject: '빅데이터 모델링',
    question: '로지스틱 회귀(Logistic Regression)에 대한 설명으로 옳은 것은?',
    options: ['연속형 목표 변수 예측에 사용', '시그모이드 함수를 사용하여 확률 출력', '선형 회귀의 확장으로 비선형 문제 해결', '다중 클래스 분류에 사용 불가'],
    answer: 1,
    explanation: '로지스틱 회귀는 시그모이드 함수를 사용하여 0~1 사이의 확률값을 출력하는 분류 알고리즘입니다.',
    difficulty: '중',
    tags: ['로지스틱 회귀', '분류']
  },
  {
    id: 'BAE_021',
    subject: '빅데이터 모델링',
    question: 'K-평균(K-Means) 군집화의 단점이 아닌 것은?',
    options: ['군집 수 K를 사전에 지정해야 함', '이상값에 민감함', '구형이 아닌 군집 탐지 어려움', '해석이 어려움'],
    answer: 3,
    explanation: 'K-Means는 결과 해석이 비교적 용이한 편입니다. 각 군집의 중심점과 소속 데이터를 쉽게 파악할 수 있습니다.',
    difficulty: '중',
    tags: ['K-Means', '군집화']
  },
  {
    id: 'BAE_022',
    subject: '빅데이터 모델링',
    question: '딥러닝에서 Dropout의 목적은?',
    options: ['학습 속도 향상', '과적합 방지', '경사 소실 문제 해결', '활성화 함수 대체'],
    answer: 1,
    explanation: 'Dropout은 학습 시 무작위로 일부 뉴런을 비활성화하여 과적합을 방지하는 정규화 기법입니다.',
    difficulty: '중',
    tags: ['딥러닝', 'Dropout']
  },
  {
    id: 'BAE_023',
    subject: '빅데이터 모델링',
    question: '그래디언트 부스팅(Gradient Boosting)에 대한 설명으로 틀린 것은?',
    options: ['순차적으로 모델을 학습', '이전 모델의 잔차를 학습 대상으로 함', '병렬 처리로 학습 속도가 빠름', 'XGBoost, LightGBM 등이 대표적'],
    answer: 2,
    explanation: '그래디언트 부스팅은 순차적 학습 방식으로, 기본적으로 병렬 처리가 어렵습니다.',
    difficulty: '상',
    tags: ['그래디언트 부스팅', '앙상블']
  },
  {
    id: 'BAE_024',
    subject: '빅데이터 모델링',
    question: 'CNN(Convolutional Neural Network)의 구성요소가 아닌 것은?',
    options: ['Convolutional Layer', 'Pooling Layer', 'Recurrent Layer', 'Fully Connected Layer'],
    answer: 2,
    explanation: 'Recurrent Layer는 RNN의 구성요소입니다. CNN은 합성곱층, 풀링층, 완전연결층으로 구성됩니다.',
    difficulty: '중',
    tags: ['CNN', '딥러닝']
  },
  {
    id: 'BAE_025',
    subject: '빅데이터 모델링',
    question: '나이브 베이즈(Naive Bayes) 분류기의 가정은?',
    options: ['특성 간 상관관계가 존재', '모든 특성이 서로 독립적', '데이터가 정규 분포를 따름', '클래스 간 분산이 동일'],
    answer: 1,
    explanation: '나이브 베이즈는 모든 특성이 서로 독립적이라는 가정(조건부 독립)을 기반으로 합니다.',
    difficulty: '중',
    tags: ['나이브 베이즈', '분류']
  },
  {
    id: 'BAE_026',
    subject: '빅데이터 결과 해석',
    question: 'F1-Score에 대한 설명으로 옳은 것은?',
    options: ['정밀도와 재현율의 산술 평균', '정밀도와 재현율의 조화 평균', '정확도와 정밀도의 기하 평균', 'TP와 TN의 합'],
    answer: 1,
    explanation: 'F1-Score는 정밀도(Precision)와 재현율(Recall)의 조화 평균으로, 둘 사이의 균형을 측정합니다.',
    difficulty: '중',
    tags: ['F1-Score', '평가지표']
  },
  {
    id: 'BAE_027',
    subject: '빅데이터 결과 해석',
    question: '혼동 행렬(Confusion Matrix)에서 Type I Error는?',
    options: ['True Positive', 'True Negative', 'False Positive', 'False Negative'],
    answer: 2,
    explanation: 'Type I Error(제1종 오류)는 False Positive로, 실제 Negative를 Positive로 잘못 예측한 경우입니다.',
    difficulty: '상',
    tags: ['혼동 행렬', '오류']
  },
  {
    id: 'BAE_028',
    subject: '빅데이터 결과 해석',
    question: '회귀 모델의 평가지표가 아닌 것은?',
    options: ['MSE (Mean Squared Error)', 'RMSE (Root Mean Squared Error)', 'R² (결정계수)', 'AUC (Area Under Curve)'],
    answer: 3,
    explanation: 'AUC는 분류 모델의 평가지표입니다. 회귀 모델은 MSE, RMSE, MAE, R² 등을 사용합니다.',
    difficulty: '하',
    tags: ['회귀', '평가지표']
  },
  {
    id: 'BAE_029',
    subject: '빅데이터 결과 해석',
    question: 'SHAP(SHapley Additive exPlanations)에 대한 설명으로 옳은 것은?',
    options: ['모델 학습 속도를 향상시키는 기법', '특성 중요도를 설명하는 해석 기법', '과적합을 방지하는 정규화 기법', '차원을 축소하는 기법'],
    answer: 1,
    explanation: 'SHAP은 게임 이론의 Shapley value를 기반으로 각 특성이 예측에 기여하는 정도를 설명하는 XAI 기법입니다.',
    difficulty: '상',
    tags: ['SHAP', 'XAI']
  },
  {
    id: 'BAE_030',
    subject: '빅데이터 분석 기획',
    question: '데이터 웨어하우스의 특징이 아닌 것은?',
    options: ['주제 지향적(Subject Oriented)', '통합적(Integrated)', '시간 변이적(Time Variant)', '실시간 처리(Real-time Processing)'],
    answer: 3,
    explanation: '데이터 웨어하우스는 배치 처리 중심이며, 주제 지향적, 통합적, 시간 변이적, 비휘발성 특징을 가집니다.',
    difficulty: '중',
    tags: ['데이터 웨어하우스', '아키텍처']
  },
  {
    id: 'BAE_031',
    subject: '빅데이터 분석 기획',
    question: 'ETL과 ELT의 차이점에 대한 설명으로 옳은 것은?',
    options: ['ETL은 데이터 레이크에서 주로 사용', 'ELT는 변환 후 적재하는 방식', 'ETL은 추출-변환-적재 순서', 'ELT가 더 오래된 방식'],
    answer: 2,
    explanation: 'ETL은 Extract-Transform-Load, ELT는 Extract-Load-Transform 순서입니다. ELT는 클라우드 환경에서 주로 사용됩니다.',
    difficulty: '중',
    tags: ['ETL', 'ELT']
  },
  {
    id: 'BAE_032',
    subject: '빅데이터 탐색',
    question: 'PCA(Principal Component Analysis)의 목적은?',
    options: ['데이터 분류', '차원 축소', '이상값 제거', '결측값 대체'],
    answer: 1,
    explanation: 'PCA는 고차원 데이터를 저차원으로 변환하여 데이터의 주요 특성을 유지하면서 차원을 축소하는 기법입니다.',
    difficulty: '하',
    tags: ['PCA', '차원축소']
  },
  {
    id: 'BAE_033',
    subject: '빅데이터 탐색',
    question: 't-SNE에 대한 설명으로 틀린 것은?',
    options: ['비선형 차원 축소 기법', '시각화에 주로 사용', '새로운 데이터에 대한 변환이 용이', '고차원 데이터의 군집 구조 파악에 유용'],
    answer: 2,
    explanation: 't-SNE는 새로운 데이터 포인트에 대한 변환을 직접 수행하기 어려우며, 주로 시각화 목적으로 사용됩니다.',
    difficulty: '상',
    tags: ['t-SNE', '시각화']
  },
  {
    id: 'BAE_034',
    subject: '빅데이터 탐색',
    question: '데이터 스케일링 방법 중 Min-Max Scaling의 결과 범위는?',
    options: ['-1 ~ 1', '0 ~ 1', '평균 0, 분산 1', '제한 없음'],
    answer: 1,
    explanation: 'Min-Max Scaling은 데이터를 0과 1 사이의 범위로 변환합니다.',
    difficulty: '하',
    tags: ['스케일링', '전처리']
  },
  {
    id: 'BAE_035',
    subject: '빅데이터 모델링',
    question: 'RNN(Recurrent Neural Network)의 특징이 아닌 것은?',
    options: ['순차적 데이터 처리에 적합', '이전 상태 정보를 기억', '이미지 인식에 주로 사용', '장기 의존성 문제가 있음'],
    answer: 2,
    explanation: 'RNN은 시계열, 자연어 등 순차적 데이터 처리에 적합하며, 이미지 인식에는 CNN이 주로 사용됩니다.',
    difficulty: '중',
    tags: ['RNN', '딥러닝']
  },
  {
    id: 'BAE_036',
    subject: '빅데이터 모델링',
    question: 'LSTM(Long Short-Term Memory)이 해결하고자 하는 문제는?',
    options: ['과적합 문제', '경사 소실 문제', '차원의 저주', '데이터 불균형'],
    answer: 1,
    explanation: 'LSTM은 RNN의 장기 의존성 학습 시 발생하는 경사 소실(Vanishing Gradient) 문제를 해결하기 위해 개발되었습니다.',
    difficulty: '상',
    tags: ['LSTM', '딥러닝']
  },
  {
    id: 'BAE_037',
    subject: '빅데이터 모델링',
    question: '랜덤 포레스트(Random Forest)에 대한 설명으로 틀린 것은?',
    options: ['배깅 기반의 앙상블 방법', '여러 의사결정나무의 예측을 결합', '특성 선택 시 전체 특성 사용', '과적합에 강함'],
    answer: 2,
    explanation: '랜덤 포레스트는 각 트리 학습 시 무작위로 일부 특성만 선택하여 다양성을 확보합니다.',
    difficulty: '중',
    tags: ['랜덤 포레스트', '앙상블']
  },
  {
    id: 'BAE_038',
    subject: '빅데이터 모델링',
    question: '비지도 학습 알고리즘이 아닌 것은?',
    options: ['K-Means', 'DBSCAN', 'Random Forest', 'Hierarchical Clustering'],
    answer: 2,
    explanation: 'Random Forest는 지도 학습 알고리즘입니다. K-Means, DBSCAN, 계층적 군집화는 비지도 학습입니다.',
    difficulty: '하',
    tags: ['비지도 학습', '분류']
  },
  {
    id: 'BAE_039',
    subject: '빅데이터 결과 해석',
    question: 'Recall(재현율)의 정의로 옳은 것은?',
    options: ['TP / (TP + FP)', 'TP / (TP + FN)', 'TN / (TN + FP)', 'TN / (TN + FN)'],
    answer: 1,
    explanation: '재현율(Recall)은 실제 Positive 중 모델이 Positive로 올바르게 예측한 비율입니다.',
    difficulty: '중',
    tags: ['Recall', '평가지표']
  },
  {
    id: 'BAE_040',
    subject: '빅데이터 결과 해석',
    question: '과적합(Overfitting)의 특징으로 옳은 것은?',
    options: ['훈련 데이터 성능 낮음, 테스트 데이터 성능 높음', '훈련 데이터 성능 높음, 테스트 데이터 성능 낮음', '훈련/테스트 데이터 모두 성능 낮음', '훈련/테스트 데이터 모두 성능 높음'],
    answer: 1,
    explanation: '과적합은 모델이 훈련 데이터에 과하게 맞춰져 훈련 성능은 높지만 새로운 데이터에 대한 일반화 성능이 낮은 상태입니다.',
    difficulty: '하',
    tags: ['과적합', '일반화']
  },
  {
    id: 'BAE_041',
    subject: '빅데이터 분석 기획',
    question: 'NoSQL 데이터베이스 유형이 아닌 것은?',
    options: ['Key-Value Store', 'Document Store', 'Column Family Store', 'Relational Store'],
    answer: 3,
    explanation: 'Relational Store는 관계형 데이터베이스(RDBMS)입니다. NoSQL은 Key-Value, Document, Column Family, Graph 유형이 있습니다.',
    difficulty: '중',
    tags: ['NoSQL', '데이터베이스']
  },
  {
    id: 'BAE_042',
    subject: '빅데이터 분석 기획',
    question: 'Apache Spark의 특징이 아닌 것은?',
    options: ['인메모리 처리로 빠른 속도', '배치 및 스트리밍 처리 지원', 'SQL 쿼리만 지원', 'RDD 기반 분산 처리'],
    answer: 2,
    explanation: 'Spark는 SQL뿐만 아니라 Python, Scala, Java, R 등 다양한 언어와 API를 지원합니다.',
    difficulty: '중',
    tags: ['Spark', '빅데이터']
  },
  {
    id: 'BAE_043',
    subject: '빅데이터 탐색',
    question: '히스토그램과 막대그래프의 차이점으로 옳은 것은?',
    options: ['히스토그램은 범주형 데이터 표현', '막대그래프는 연속형 데이터 표현', '히스토그램은 막대 사이 간격 없음', '막대그래프는 막대 사이 간격 없음'],
    answer: 2,
    explanation: '히스토그램은 연속형 데이터의 분포를 나타내며 막대 사이 간격이 없고, 막대그래프는 범주형 데이터를 나타내며 간격이 있습니다.',
    difficulty: '하',
    tags: ['시각화', '히스토그램']
  },
  {
    id: 'BAE_044',
    subject: '빅데이터 탐색',
    question: '왜도(Skewness)가 양수인 경우 데이터 분포의 특징은?',
    options: ['좌측으로 꼬리가 긴 분포', '우측으로 꼬리가 긴 분포', '대칭 분포', '균등 분포'],
    answer: 1,
    explanation: '양의 왜도는 우측으로 꼬리가 긴 분포(오른쪽 치우침)를 나타냅니다.',
    difficulty: '중',
    tags: ['왜도', '분포']
  },
  {
    id: 'BAE_045',
    subject: '빅데이터 모델링',
    question: 'Attention 메커니즘의 주요 장점은?',
    options: ['모델 크기 축소', '학습 속도 향상', '중요한 정보에 집중', '메모리 사용량 감소'],
    answer: 2,
    explanation: 'Attention 메커니즘은 입력의 중요한 부분에 가중치를 부여하여 집중할 수 있게 하는 기법입니다.',
    difficulty: '상',
    tags: ['Attention', '딥러닝']
  },
  {
    id: 'BAE_046',
    subject: '빅데이터 모델링',
    question: 'Word2Vec의 학습 방식이 아닌 것은?',
    options: ['CBOW', 'Skip-gram', 'TF-IDF', 'Negative Sampling'],
    answer: 2,
    explanation: 'TF-IDF는 통계 기반 텍스트 표현 방식이고, Word2Vec은 CBOW, Skip-gram 방식으로 학습합니다.',
    difficulty: '상',
    tags: ['Word2Vec', 'NLP']
  },
  {
    id: 'BAE_047',
    subject: '빅데이터 결과 해석',
    question: 'A/B 테스트에 대한 설명으로 틀린 것은?',
    options: ['두 가지 버전의 성과를 비교', '무작위 배정으로 편향 감소', '통계적 유의성 검정 필요', '한 번에 여러 변수 동시 변경'],
    answer: 3,
    explanation: 'A/B 테스트는 한 번에 하나의 변수만 변경하여 그 효과를 측정합니다.',
    difficulty: '중',
    tags: ['A/B 테스트', '실험']
  },
  {
    id: 'BAE_048',
    subject: '빅데이터 결과 해석',
    question: 'p-value에 대한 설명으로 옳은 것은?',
    options: ['항상 0과 1 사이의 값', '높을수록 통계적으로 유의', '귀무가설이 참일 확률', '표본 크기와 무관'],
    answer: 0,
    explanation: 'p-value는 0과 1 사이의 확률값으로, 귀무가설이 참일 때 관측된 결과가 나타날 확률입니다.',
    difficulty: '상',
    tags: ['p-value', '통계']
  },
  {
    id: 'BAE_049',
    subject: '빅데이터 분석 기획',
    question: '데이터 품질 요소가 아닌 것은?',
    options: ['정확성(Accuracy)', '완전성(Completeness)', '복잡성(Complexity)', '일관성(Consistency)'],
    answer: 2,
    explanation: '데이터 품질의 주요 요소는 정확성, 완전성, 일관성, 최신성, 유효성 등이며, 복잡성은 품질 요소가 아닙니다.',
    difficulty: '하',
    tags: ['데이터 품질', '기획']
  },
  {
    id: 'BAE_050',
    subject: '빅데이터 결과 해석',
    question: '엘보우 방법(Elbow Method)의 용도는?',
    options: ['이상값 탐지', '최적의 군집 수 결정', '변수 선택', '모델 성능 평가'],
    answer: 1,
    explanation: '엘보우 방법은 K-Means 등 군집화에서 최적의 군집 수(K)를 결정하기 위해 사용되는 방법입니다.',
    difficulty: '중',
    tags: ['엘보우 방법', '군집화']
  }
];

export default bigdataQuestions;
