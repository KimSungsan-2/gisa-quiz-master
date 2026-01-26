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
  },
  {
    id: 'BAE_051',
    subject: '빅데이터 탐색',
    question: '데이터 전처리에서 이상값(Outlier)을 탐지하는 방법이 아닌 것은?',
    options: ['IQR(Interquartile Range)', 'Z-Score', 'PCA(주성분분석)', 'Box Plot'],
    answer: 2,
    explanation: 'PCA는 차원 축소 기법으로 이상값 탐지 방법이 아닙니다. IQR, Z-Score, Box Plot은 이상값 탐지에 사용됩니다.',
    difficulty: '중',
    tags: ['이상값', '전처리']
  },
  {
    id: 'BAE_052',
    subject: '빅데이터 모델링',
    question: 'Random Forest의 특징으로 옳은 것은?',
    options: ['단일 의사결정나무 사용', '배깅(Bagging) 기반', '부스팅(Boosting) 기반', '선형 모델'],
    answer: 1,
    explanation: 'Random Forest는 여러 의사결정나무를 배깅 방식으로 결합한 앙상블 모델입니다.',
    difficulty: '중',
    tags: ['Random Forest', '앙상블']
  },
  {
    id: 'BAE_053',
    subject: '빅데이터 결과 해석',
    question: 'Recall(재현율)의 정의로 옳은 것은?',
    options: ['TP / (TP + FP)', 'TP / (TP + FN)', 'TN / (TN + FP)', '(TP + TN) / Total'],
    answer: 1,
    explanation: 'Recall(재현율)은 실제 Positive 중에서 모델이 Positive로 예측한 비율입니다. TP / (TP + FN)로 계산됩니다.',
    difficulty: '중',
    tags: ['평가지표', 'Recall']
  },
  {
    id: 'BAE_054',
    subject: '빅데이터 탐색',
    question: '주성분분석(PCA)의 목적은?',
    options: ['차원 축소', '결측값 처리', '이상값 탐지', '범주형 변수 변환'],
    answer: 0,
    explanation: 'PCA는 고차원 데이터를 저차원으로 축소하면서 정보 손실을 최소화하는 차원 축소 기법입니다.',
    difficulty: '하',
    tags: ['PCA', '차원축소']
  },
  {
    id: 'BAE_055',
    subject: '빅데이터 모델링',
    question: '과적합(Overfitting)을 방지하는 방법이 아닌 것은?',
    options: ['정규화(Regularization)', '드롭아웃(Dropout)', '데이터 증강', '모델 복잡도 증가'],
    answer: 3,
    explanation: '모델 복잡도를 증가시키면 과적합이 더 심해집니다. 정규화, 드롭아웃, 데이터 증강은 과적합 방지 기법입니다.',
    difficulty: '중',
    tags: ['과적합', '모델링']
  },
  {
    id: 'BAE_056',
    subject: '빅데이터 분석 기획',
    question: 'CRISP-DM의 6단계가 아닌 것은?',
    options: ['비즈니스 이해', '데이터 이해', '코딩', '배포'],
    answer: 2,
    explanation: 'CRISP-DM의 6단계는 비즈니스 이해, 데이터 이해, 데이터 준비, 모델링, 평가, 배포입니다.',
    difficulty: '중',
    tags: ['CRISP-DM', '방법론']
  },
  {
    id: 'BAE_057',
    subject: '빅데이터 탐색',
    question: '정규분포의 특징으로 옳지 않은 것은?',
    options: ['평균=중앙값=최빈값', '좌우 대칭', '왜도=0', '첨도는 항상 3'],
    answer: 3,
    explanation: '표준 정규분포의 첨도는 3이지만, 모든 정규분포의 첨도가 3은 아닙니다. 평균, 중앙값, 최빈값이 같고 좌우 대칭이며 왜도가 0입니다.',
    difficulty: '상',
    tags: ['정규분포', '통계']
  },
  {
    id: 'BAE_058',
    subject: '빅데이터 모델링',
    question: 'XGBoost의 특징으로 옳지 않은 것은?',
    options: ['그래디언트 부스팅 기반', '병렬 처리 지원', '과적합에 매우 약함', '결측값 자동 처리'],
    answer: 2,
    explanation: 'XGBoost는 정규화 기능이 내장되어 과적합 방지에 강합니다. 그래디언트 부스팅 기반이며 병렬 처리와 결측값 자동 처리를 지원합니다.',
    difficulty: '중',
    tags: ['XGBoost', '부스팅']
  },
  {
    id: 'BAE_059',
    subject: '빅데이터 결과 해석',
    question: 'F1-Score의 정의로 옳은 것은?',
    options: ['Precision + Recall', '2 × (Precision × Recall) / (Precision + Recall)', 'Precision - Recall', 'Accuracy × 2'],
    answer: 1,
    explanation: 'F1-Score는 Precision과 Recall의 조화평균입니다. 2 × (Precision × Recall) / (Precision + Recall)로 계산됩니다.',
    difficulty: '중',
    tags: ['F1-Score', '평가지표']
  },
  {
    id: 'BAE_060',
    subject: '빅데이터 탐색',
    question: '범주형 변수를 수치형으로 변환하는 방법이 아닌 것은?',
    options: ['Label Encoding', 'One-Hot Encoding', 'Target Encoding', 'Min-Max Scaling'],
    answer: 3,
    explanation: 'Min-Max Scaling은 수치형 변수의 정규화 방법입니다. Label Encoding, One-Hot Encoding, Target Encoding은 범주형 변수 변환 방법입니다.',
    difficulty: '하',
    tags: ['인코딩', '전처리']
  },
  {
    id: 'BAE_061',
    subject: '빅데이터 모델링',
    question: 'K-Means 군집화의 특징으로 옳지 않은 것은?',
    options: ['K값을 미리 지정해야 함', '유클리드 거리 사용', '계층적 군집화', '중심점 기반'],
    answer: 2,
    explanation: 'K-Means는 비계층적 군집화 방법입니다. K값을 미리 지정하고 유클리드 거리와 중심점을 사용합니다.',
    difficulty: '중',
    tags: ['K-Means', '군집화']
  },
  {
    id: 'BAE_062',
    subject: '빅데이터 분석 기획',
    question: '데이터 웨어하우스의 특징이 아닌 것은?',
    options: ['주제 중심적', '통합적', '시계열적', '실시간 트랜잭션 처리'],
    answer: 3,
    explanation: '데이터 웨어하우스는 분석을 위한 저장소로 실시간 트랜잭션 처리가 아닌 OLAP에 최적화되어 있습니다.',
    difficulty: '중',
    tags: ['데이터웨어하우스', 'DW']
  },
  {
    id: 'BAE_063',
    subject: '빅데이터 탐색',
    question: '시계열 데이터의 구성 요소가 아닌 것은?',
    options: ['추세(Trend)', '계절성(Seasonality)', '주기성(Cycle)', '정규성(Normality)'],
    answer: 3,
    explanation: '시계열 데이터는 추세, 계절성, 주기성, 불규칙 요소로 구성됩니다. 정규성은 시계열 구성 요소가 아닙니다.',
    difficulty: '중',
    tags: ['시계열', '데이터탐색']
  },
  {
    id: 'BAE_064',
    subject: '빅데이터 모델링',
    question: 'Convolutional Neural Network(CNN)이 주로 사용되는 분야는?',
    options: ['자연어 처리', '이미지 처리', '시계열 예측', '추천 시스템'],
    answer: 1,
    explanation: 'CNN은 합성곱 신경망으로 이미지 처리 분야에서 우수한 성능을 보입니다.',
    difficulty: '하',
    tags: ['CNN', '딥러닝']
  },
  {
    id: 'BAE_065',
    subject: '빅데이터 결과 해석',
    question: '혼동 행렬(Confusion Matrix)에서 Type I Error는?',
    options: ['False Positive', 'False Negative', 'True Positive', 'True Negative'],
    answer: 0,
    explanation: 'Type I Error는 실제 Negative를 Positive로 잘못 판단하는 False Positive(FP)입니다.',
    difficulty: '중',
    tags: ['혼동행렬', '오류']
  },
  {
    id: 'BAE_066',
    subject: '빅데이터 탐색',
    question: '변수 간 상관관계 분석에 사용되는 계수가 아닌 것은?',
    options: ['피어슨 상관계수', '스피어만 상관계수', '켄달 타우', '엔트로피'],
    answer: 3,
    explanation: '엔트로피는 정보량을 측정하는 지표입니다. 피어슨, 스피어만, 켄달 타우는 상관관계 측정 계수입니다.',
    difficulty: '중',
    tags: ['상관분석', '통계']
  },
  {
    id: 'BAE_067',
    subject: '빅데이터 모델링',
    question: 'LSTM(Long Short-Term Memory)이 RNN보다 우수한 점은?',
    options: ['계산 속도', '장기 의존성 문제 해결', '파라미터 수 감소', '단순한 구조'],
    answer: 1,
    explanation: 'LSTM은 게이트 메커니즘을 통해 RNN의 장기 의존성(Long-term dependency) 문제를 해결합니다.',
    difficulty: '중',
    tags: ['LSTM', 'RNN', '딥러닝']
  },
  {
    id: 'BAE_068',
    subject: '빅데이터 분석 기획',
    question: 'ETL 프로세스의 단계 순서로 옳은 것은?',
    options: ['Extract → Transform → Load', 'Transform → Extract → Load', 'Load → Extract → Transform', 'Extract → Load → Transform'],
    answer: 0,
    explanation: 'ETL은 Extract(추출) → Transform(변환) → Load(적재) 순서로 데이터를 처리합니다.',
    difficulty: '하',
    tags: ['ETL', '데이터처리']
  },
  {
    id: 'BAE_069',
    subject: '빅데이터 결과 해석',
    question: 'A/B 테스트에서 통계적 유의성을 판단하기 위해 주로 사용하는 검정은?',
    options: ['F-검정', 't-검정', '카이제곱 검정', 'ANOVA'],
    answer: 1,
    explanation: 'A/B 테스트에서는 두 그룹의 평균 차이를 검정하기 위해 주로 t-검정을 사용합니다.',
    difficulty: '중',
    tags: ['A/B테스트', '통계검정']
  },
  {
    id: 'BAE_070',
    subject: '빅데이터 탐색',
    question: 'Hadoop의 핵심 구성 요소가 아닌 것은?',
    options: ['HDFS', 'MapReduce', 'YARN', 'Spark'],
    answer: 3,
    explanation: 'Spark는 별도의 빅데이터 처리 프레임워크입니다. Hadoop의 핵심 구성 요소는 HDFS, MapReduce, YARN입니다.',
    difficulty: '하',
    tags: ['Hadoop', '빅데이터플랫폼']
  },
  {
    id: 'BAE_071',
    subject: '빅데이터 모델링',
    question: 'Gradient Descent의 학습률(Learning Rate)이 너무 크면 발생하는 문제는?',
    options: ['학습 속도 느림', '지역 최솟값 수렴', '발산(Divergence)', '과적합'],
    answer: 2,
    explanation: '학습률이 너무 크면 최솟값을 지나쳐 발산할 수 있습니다. 너무 작으면 학습 속도가 느려집니다.',
    difficulty: '중',
    tags: ['경사하강법', '최적화']
  },
  {
    id: 'BAE_072',
    subject: '빅데이터 결과 해석',
    question: 'ROC 곡선의 X축과 Y축은?',
    options: ['X: Precision, Y: Recall', 'X: FPR, Y: TPR', 'X: Accuracy, Y: F1', 'X: Recall, Y: Precision'],
    answer: 1,
    explanation: 'ROC 곡선의 X축은 FPR(False Positive Rate), Y축은 TPR(True Positive Rate)입니다.',
    difficulty: '중',
    tags: ['ROC', '평가지표']
  },
  {
    id: 'BAE_073',
    subject: '빅데이터 탐색',
    question: 'Apache Spark의 주요 특징이 아닌 것은?',
    options: ['인메모리 처리', '배치/스트리밍 지원', 'SQL 지원', '디스크 기반 처리 전용'],
    answer: 3,
    explanation: 'Spark는 인메모리 기반 처리로 빠른 속도를 제공합니다. 배치와 스트리밍 모두 지원하며 Spark SQL도 제공합니다.',
    difficulty: '하',
    tags: ['Spark', '빅데이터플랫폼']
  },
  {
    id: 'BAE_074',
    subject: '빅데이터 모델링',
    question: '교차 검증(Cross Validation)의 목적은?',
    options: ['학습 속도 향상', '모델 일반화 성능 평가', '데이터 전처리', '차원 축소'],
    answer: 1,
    explanation: '교차 검증은 모델의 일반화 성능을 평가하고 과적합을 방지하기 위해 사용됩니다.',
    difficulty: '하',
    tags: ['교차검증', '모델평가']
  },
  {
    id: 'BAE_075',
    subject: '빅데이터 분석 기획',
    question: '데이터 레이크(Data Lake)와 데이터 웨어하우스의 주요 차이점은?',
    options: ['저장 용량', '스키마 정의 시점', '비용', '보안 수준'],
    answer: 1,
    explanation: '데이터 레이크는 Schema-on-Read(읽을 때 스키마 정의), 데이터 웨어하우스는 Schema-on-Write(쓸 때 스키마 정의)입니다.',
    difficulty: '상',
    tags: ['데이터레이크', '데이터웨어하우스']
  },
  {
    id: 'BAE_076',
    subject: '빅데이터 탐색',
    question: 'Scikit-learn에서 train_test_split의 기본 테스트 데이터 비율은?',
    options: ['10%', '20%', '25%', '30%'],
    answer: 2,
    explanation: 'Scikit-learn의 train_test_split 함수는 기본적으로 25%를 테스트 데이터로 분할합니다.',
    difficulty: '하',
    tags: ['데이터 분할', 'Scikit-learn']
  },
  {
    id: 'BAE_077',
    subject: '빅데이터 모델링',
    question: 'Transformer 모델의 핵심 메커니즘은?',
    options: ['Convolution', 'Recurrence', 'Self-Attention', 'Pooling'],
    answer: 2,
    explanation: 'Transformer는 Self-Attention 메커니즘을 통해 시퀀스의 모든 위치 간 관계를 학습합니다.',
    difficulty: '중',
    tags: ['Transformer', '딥러닝']
  },
  {
    id: 'BAE_078',
    subject: '빅데이터 탐색',
    question: 'SQL의 JOIN 종류가 아닌 것은?',
    options: ['INNER JOIN', 'LEFT JOIN', 'CROSS JOIN', 'PARALLEL JOIN'],
    answer: 3,
    explanation: 'SQL JOIN 종류에는 INNER, LEFT, RIGHT, FULL OUTER, CROSS JOIN이 있습니다.',
    difficulty: '하',
    tags: ['SQL', 'JOIN']
  },
  {
    id: 'BAE_079',
    subject: '빅데이터 모델링',
    question: 'Batch Normalization의 주요 효과는?',
    options: ['모델 크기 감소', '학습 안정화 및 속도 향상', '과소적합 방지', '데이터 증강'],
    answer: 1,
    explanation: 'Batch Normalization은 각 층의 입력을 정규화하여 학습을 안정화하고 속도를 향상시킵니다.',
    difficulty: '중',
    tags: ['Batch Normalization', '딥러닝']
  },
  {
    id: 'BAE_080',
    subject: '빅데이터 플랫폼',
    question: 'Apache Kafka의 주요 용도는?',
    options: ['배치 처리', '실시간 스트리밍 처리', '데이터 웨어하우스', '머신러닝 모델 학습'],
    answer: 1,
    explanation: 'Kafka는 대규모 실시간 데이터 스트리밍 처리를 위한 분산 메시징 시스템입니다.',
    difficulty: '하',
    tags: ['Kafka', '스트리밍']
  },
  {
    id: 'BAE_081',
    subject: '빅데이터 모델링',
    question: 'GANs(Generative Adversarial Networks)의 구성 요소는?',
    options: ['Encoder-Decoder', 'Generator-Discriminator', 'Actor-Critic', 'Teacher-Student'],
    answer: 1,
    explanation: 'GAN은 생성자(Generator)와 판별자(Discriminator) 두 네트워크가 경쟁하며 학습합니다.',
    difficulty: '중',
    tags: ['GAN', '생성모델']
  },
  {
    id: 'BAE_082',
    subject: '빅데이터 탐색',
    question: 'Box Plot에서 확인할 수 없는 것은?',
    options: ['중앙값', '사분위수', '이상값', '평균'],
    answer: 3,
    explanation: 'Box Plot은 중앙값, 사분위수, 이상값을 시각화하지만 평균은 기본적으로 표시되지 않습니다.',
    difficulty: '하',
    tags: ['시각화', 'Box Plot']
  },
  {
    id: 'BAE_083',
    subject: '빅데이터 모델링',
    question: 'Adam 최적화 알고리즘의 특징은?',
    options: ['고정 학습률 사용', 'Momentum과 RMSProp 결합', '배치 크기 의존', '메모리 효율적'],
    answer: 1,
    explanation: 'Adam은 Momentum과 RMSProp을 결합하여 적응적 학습률을 사용하는 최적화 알고리즘입니다.',
    difficulty: '중',
    tags: ['최적화', 'Adam']
  },
  {
    id: 'BAE_084',
    subject: '빅데이터 결과 해석',
    question: 'Confusion Matrix에서 Accuracy의 계산식은?',
    options: ['(TP + TN) / Total', 'TP / (TP + FP)', 'TP / (TP + FN)', '(TP + FP) / Total'],
    answer: 0,
    explanation: 'Accuracy(정확도)는 전체 예측 중 올바른 예측의 비율로 (TP + TN) / Total입니다.',
    difficulty: '하',
    tags: ['평가지표', 'Accuracy']
  },
  {
    id: 'BAE_085',
    subject: '빅데이터 모델링',
    question: 'Transfer Learning의 장점이 아닌 것은?',
    options: ['적은 데이터로 학습 가능', '학습 시간 단축', '모델 크기 감소', '사전 학습된 지식 활용'],
    answer: 2,
    explanation: 'Transfer Learning은 사전 학습된 모델을 활용하여 적은 데이터와 시간으로 학습할 수 있지만, 모델 크기 감소와는 관련 없습니다.',
    difficulty: '중',
    tags: ['Transfer Learning', '딥러닝']
  },
  {
    id: 'BAE_086',
    subject: '빅데이터 플랫폼',
    question: 'Docker 컨테이너의 특징이 아닌 것은?',
    options: ['가상화 기술', '경량화', '이식성', '하드웨어 수준 가상화'],
    answer: 3,
    explanation: 'Docker는 OS 수준 가상화로 경량화되어 있으며, 하드웨어 수준 가상화는 VM의 특징입니다.',
    difficulty: '중',
    tags: ['Docker', '컨테이너']
  },
  {
    id: 'BAE_087',
    subject: '빅데이터 탐색',
    question: 'Pandas DataFrame에서 결측값을 확인하는 메서드는?',
    options: ['isnull()', 'isna()', 'notnull()', '모두 가능'],
    answer: 3,
    explanation: 'Pandas에서 isnull()과 isna()는 동일하게 결측값을 확인하며, notnull()은 결측값이 아닌 것을 확인합니다.',
    difficulty: '하',
    tags: ['Pandas', '결측값']
  },
  {
    id: 'BAE_088',
    subject: '빅데이터 모델링',
    question: 'AutoML의 주요 목적은?',
    options: ['모델 크기 축소', '머신러닝 자동화', '데이터 수집 자동화', '모델 배포 자동화'],
    answer: 1,
    explanation: 'AutoML은 피처 엔지니어링, 모델 선택, 하이퍼파라미터 튜닝 등 머신러닝 과정을 자동화합니다.',
    difficulty: '중',
    tags: ['AutoML', '자동화']
  },
  {
    id: 'BAE_089',
    subject: '빅데이터 탐색',
    question: 'Chi-square 검정의 용도는?',
    options: ['두 연속형 변수 간 상관관계', '두 범주형 변수 간 독립성', '평균 차이 검정', '분산 동질성 검정'],
    answer: 1,
    explanation: 'Chi-square 검정은 두 범주형 변수 간의 독립성을 검정하는 데 사용됩니다.',
    difficulty: '중',
    tags: ['통계검정', 'Chi-square']
  },
  {
    id: 'BAE_090',
    subject: '빅데이터 결과 해석',
    question: 'Silhouette Score의 범위는?',
    options: ['0 ~ 1', '-1 ~ 1', '0 ~ 100', '-∞ ~ +∞'],
    answer: 1,
    explanation: 'Silhouette Score는 -1에서 1 사이의 값으로, 1에 가까울수록 군집화가 잘 된 것입니다.',
    difficulty: '중',
    tags: ['군집화', 'Silhouette']
  },
  {
    id: 'BAE_091',
    subject: '빅데이터 플랫폼',
    question: 'MLflow의 주요 기능이 아닌 것은?',
    options: ['실험 추적', '모델 레지스트리', '모델 배포', '데이터 수집'],
    answer: 3,
    explanation: 'MLflow는 ML 실험 추적, 모델 관리, 배포를 지원하지만 데이터 수집 기능은 없습니다.',
    difficulty: '상',
    tags: ['MLflow', 'MLOps']
  },
  {
    id: 'BAE_092',
    subject: '빅데이터 모델링',
    question: 'BERT 모델의 특징이 아닌 것은?',
    options: ['Bidirectional Transformer', 'Masked Language Model', 'Autoregressive', 'Pre-training + Fine-tuning'],
    answer: 2,
    explanation: 'BERT는 양방향(Bidirectional) 모델이며, GPT가 Autoregressive 모델입니다.',
    difficulty: '상',
    tags: ['BERT', 'NLP']
  },
  {
    id: 'BAE_093',
    subject: '빅데이터 탐색',
    question: 'Data Augmentation의 목적은?',
    options: ['데이터 크기 감소', '학습 데이터 다양성 증가', '모델 복잡도 감소', '추론 속도 향상'],
    answer: 1,
    explanation: 'Data Augmentation은 기존 데이터를 변형하여 학습 데이터의 다양성을 증가시키고 과적합을 방지합니다.',
    difficulty: '하',
    tags: ['데이터 증강', '전처리']
  },
  {
    id: 'BAE_094',
    subject: '빅데이터 결과 해석',
    question: 'Feature Importance를 제공하지 않는 모델은?',
    options: ['Random Forest', 'XGBoost', 'Logistic Regression', 'KNN'],
    answer: 3,
    explanation: 'KNN은 거리 기반 모델로 Feature Importance를 직접 제공하지 않습니다.',
    difficulty: '중',
    tags: ['Feature Importance', '해석']
  },
  {
    id: 'BAE_095',
    subject: '빅데이터 플랫폼',
    question: 'Kubernetes의 주요 역할은?',
    options: ['데이터베이스 관리', '컨테이너 오케스트레이션', '데이터 분석', '모델 학습'],
    answer: 1,
    explanation: 'Kubernetes는 컨테이너화된 애플리케이션의 배포, 확장, 관리를 자동화하는 오케스트레이션 플랫폼입니다.',
    difficulty: '중',
    tags: ['Kubernetes', '컨테이너']
  },
  {
    id: 'BAE_096',
    subject: '빅데이터 모델링',
    question: 'Gradient Clipping의 목적은?',
    options: ['학습 속도 향상', 'Exploding Gradient 방지', '모델 압축', '데이터 정규화'],
    answer: 1,
    explanation: 'Gradient Clipping은 기울기 값을 제한하여 Exploding Gradient 문제를 방지합니다.',
    difficulty: '상',
    tags: ['경사 클리핑', '최적화']
  },
  {
    id: 'BAE_097',
    subject: '빅데이터 탐색',
    question: 'Apache Airflow의 용도는?',
    options: ['데이터 시각화', '워크플로우 스케줄링', '모델 학습', '데이터 저장'],
    answer: 1,
    explanation: 'Apache Airflow는 데이터 파이프라인의 워크플로우를 스케줄링하고 모니터링하는 도구입니다.',
    difficulty: '중',
    tags: ['Airflow', '워크플로우']
  },
  {
    id: 'BAE_098',
    subject: '빅데이터 결과 해석',
    question: 'Bias-Variance Tradeoff에서 High Bias는?',
    options: ['과적합', '과소적합', '적정 적합', '불균형'],
    answer: 1,
    explanation: 'High Bias는 모델이 단순하여 훈련 데이터도 제대로 학습하지 못하는 과소적합 상태입니다.',
    difficulty: '하',
    tags: ['Bias-Variance', '모델 평가']
  },
  {
    id: 'BAE_099',
    subject: '빅데이터 플랫폼',
    question: 'GraphQL의 특징이 아닌 것은?',
    options: ['클라이언트가 필요한 데이터만 요청', '단일 엔드포인트', 'REST API 대체', '관계형 데이터베이스 전용'],
    answer: 3,
    explanation: 'GraphQL은 API 쿼리 언어로 다양한 데이터 소스에 사용 가능하며, 관계형 DB 전용이 아닙니다.',
    difficulty: '상',
    tags: ['GraphQL', 'API']
  },
  {
    id: 'BAE_100',
    subject: '빅데이터 모델링',
    question: 'Federated Learning의 주요 특징은?',
    options: ['중앙 집중식 학습', '분산 학습으로 데이터 프라이버시 보호', '모델 압축', '전이 학습'],
    answer: 1,
    explanation: 'Federated Learning은 데이터를 중앙 서버로 전송하지 않고 분산된 디바이스에서 학습하여 프라이버시를 보호합니다.',
    difficulty: '상',
    tags: ['Federated Learning', '분산학습']
  },
  {
    id: 'BAE_101',
    subject: '빅데이터 분석 기획',
    question: '데이터 분석 프로젝트에서 KPI(핵심성과지표) 설정 시 고려사항이 아닌 것은?',
    options: ['측정 가능성', '비즈니스 목표와의 연계', '데이터 수집 비용', '분석가의 선호도'],
    answer: 3,
    explanation: 'KPI는 측정 가능하고 비즈니스 목표와 연계되며 비용 효율적이어야 하지만, 분석가 개인의 선호도는 고려사항이 아닙니다.',
    difficulty: '하',
    tags: ['KPI', '분석기획']
  },
  {
    id: 'BAE_102',
    subject: '빅데이터 탐색',
    question: '다중공선성(Multicollinearity) 진단 방법이 아닌 것은?',
    options: ['VIF(Variance Inflation Factor)', '상관계수', 'Condition Index', 'F-검정'],
    answer: 3,
    explanation: 'VIF, 상관계수, Condition Index는 다중공선성 진단에 사용되며, F-검정은 모델 전체의 유의성 검정입니다.',
    difficulty: '중',
    tags: ['다중공선성', '회귀분석']
  },
  {
    id: 'BAE_103',
    subject: '빅데이터 모델링',
    question: 'Bagging과 Boosting의 차이점으로 옳은 것은?',
    options: ['Bagging은 순차적, Boosting은 병렬적', 'Bagging은 병렬적, Boosting은 순차적', '둘 다 순차적', '둘 다 병렬적'],
    answer: 1,
    explanation: 'Bagging은 독립적으로 병렬 학습하고, Boosting은 이전 모델의 오류를 보완하며 순차적으로 학습합니다.',
    difficulty: '중',
    tags: ['앙상블', 'Bagging', 'Boosting']
  },
  {
    id: 'BAE_104',
    subject: '빅데이터 결과 해석',
    question: 'Lift Chart의 용도는?',
    options: ['회귀 모델 평가', '분류 모델의 효과성 평가', '군집 평가', '차원 축소 평가'],
    answer: 1,
    explanation: 'Lift Chart는 분류 모델이 무작위 선택 대비 얼마나 효과적인지 평가하는 도구입니다.',
    difficulty: '중',
    tags: ['Lift Chart', '모델평가']
  },
  {
    id: 'BAE_105',
    subject: '빅데이터 분석 기획',
    question: 'Data Lineage(데이터 계보)의 목적은?',
    options: ['데이터 압축', '데이터 흐름 추적', '데이터 암호화', '데이터 시각화'],
    answer: 1,
    explanation: 'Data Lineage는 데이터의 출처, 이동, 변환 과정을 추적하여 데이터 품질과 투명성을 보장합니다.',
    difficulty: '하',
    tags: ['Data Lineage', '거버넌스']
  },
  {
    id: 'BAE_106',
    subject: '빅데이터 탐색',
    question: 'SMOTE(Synthetic Minority Over-sampling Technique)의 목적은?',
    options: ['차원 축소', '불균형 데이터 처리', '이상값 제거', '정규화'],
    answer: 1,
    explanation: 'SMOTE는 소수 클래스의 합성 샘플을 생성하여 불균형 데이터를 처리하는 오버샘플링 기법입니다.',
    difficulty: '중',
    tags: ['SMOTE', '불균형데이터']
  },
  {
    id: 'BAE_107',
    subject: '빅데이터 모델링',
    question: 'CatBoost의 특징으로 옳은 것은?',
    options: ['범주형 변수 자동 처리', '이미지 전용', '회귀만 가능', '군집화 전용'],
    answer: 0,
    explanation: 'CatBoost는 범주형 변수를 자동으로 처리하는 그래디언트 부스팅 알고리즘입니다.',
    difficulty: '중',
    tags: ['CatBoost', '부스팅']
  },
  {
    id: 'BAE_108',
    subject: '빅데이터 결과 해석',
    question: 'LIME(Local Interpretable Model-agnostic Explanations)의 목적은?',
    options: ['모델 학습', '모델 해석', '데이터 전처리', '차원 축소'],
    answer: 1,
    explanation: 'LIME은 블랙박스 모델의 개별 예측을 지역적으로 해석하는 XAI 기법입니다.',
    difficulty: '상',
    tags: ['LIME', 'XAI']
  },
  {
    id: 'BAE_109',
    subject: '빅데이터 플랫폼',
    question: 'Delta Lake의 주요 기능이 아닌 것은?',
    options: ['ACID 트랜잭션', '타임 트래블', '스키마 진화', '실시간 스트리밍 전용'],
    answer: 3,
    explanation: 'Delta Lake는 배치와 스트리밍 모두 지원하며, ACID, 타임 트래블, 스키마 진화 기능을 제공합니다.',
    difficulty: '중',
    tags: ['Delta Lake', '데이터레이크']
  },
  {
    id: 'BAE_110',
    subject: '빅데이터 분석 기획',
    question: 'Data Mesh 아키텍처의 핵심 원칙이 아닌 것은?',
    options: ['도메인 소유권', '데이터 제품화', '중앙 집중식 관리', '셀프 서비스 플랫폼'],
    answer: 2,
    explanation: 'Data Mesh는 분산된 도메인 소유권을 강조하며, 중앙 집중식 관리가 아닌 분산 관리를 지향합니다.',
    difficulty: '상',
    tags: ['Data Mesh', '아키텍처']
  },
  {
    id: 'BAE_111',
    subject: '빅데이터 탐색',
    question: 'Target Encoding의 단점으로 옳은 것은?',
    options: ['범주 개수 증가', '데이터 누수 위험', '학습 속도 저하', '메모리 부족'],
    answer: 1,
    explanation: 'Target Encoding은 목표 변수 정보를 사용하므로 올바르게 구현하지 않으면 데이터 누수가 발생할 수 있습니다.',
    difficulty: '상',
    tags: ['Target Encoding', '인코딩']
  },
  {
    id: 'BAE_112',
    subject: '빅데이터 모델링',
    question: 'TabNet의 특징으로 옳은 것은?',
    options: ['CNN 기반', 'Attention 기반 테이블 데이터 학습', '텍스트 전용', '이미지 전용'],
    answer: 1,
    explanation: 'TabNet은 Attention 메커니즘을 사용하여 테이블 데이터를 효과적으로 학습하는 딥러닝 모델입니다.',
    difficulty: '상',
    tags: ['TabNet', '딥러닝']
  },
  {
    id: 'BAE_113',
    subject: '빅데이터 결과 해석',
    question: 'Permutation Importance의 원리는?',
    options: ['변수 제거', '변수 순서 섞기', '변수 정규화', '변수 결합'],
    answer: 1,
    explanation: 'Permutation Importance는 변수 값을 무작위로 섞었을 때 성능 변화를 측정하여 변수 중요도를 계산합니다.',
    difficulty: '중',
    tags: ['Feature Importance', '해석']
  },
  {
    id: 'BAE_114',
    subject: '빅데이터 플랫폼',
    question: 'Databricks의 핵심 기술은?',
    options: ['Hadoop', 'Apache Spark', 'Flink', 'Storm'],
    answer: 1,
    explanation: 'Databricks는 Apache Spark 기반의 통합 분석 플랫폼입니다.',
    difficulty: '하',
    tags: ['Databricks', 'Spark']
  },
  {
    id: 'BAE_115',
    subject: '빅데이터 분석 기획',
    question: 'Responsible AI의 핵심 원칙이 아닌 것은?',
    options: ['공정성', '투명성', '설명가능성', '수익 극대화'],
    answer: 3,
    explanation: 'Responsible AI는 공정성, 투명성, 설명가능성, 프라이버시 등을 강조하며, 수익 극대화는 핵심 원칙이 아닙니다.',
    difficulty: '하',
    tags: ['Responsible AI', '윤리']
  },
  {
    id: 'BAE_116',
    subject: '빅데이터 탐색',
    question: 'Isolation Forest의 원리는?',
    options: ['거리 기반', '밀도 기반', '고립 용이성 기반', '클러스터 기반'],
    answer: 2,
    explanation: 'Isolation Forest는 이상값이 정상값보다 쉽게 고립된다는 원리를 이용한 이상탐지 알고리즘입니다.',
    difficulty: '중',
    tags: ['Isolation Forest', '이상탐지']
  },
  {
    id: 'BAE_117',
    subject: '빅데이터 모델링',
    question: 'AutoEncoder의 주요 용도가 아닌 것은?',
    options: ['차원 축소', '이상 탐지', '데이터 생성', '분류 모델 학습'],
    answer: 3,
    explanation: 'AutoEncoder는 차원 축소, 이상 탐지, 생성에 주로 사용되며, 분류는 주 목적이 아닙니다.',
    difficulty: '중',
    tags: ['AutoEncoder', '딥러닝']
  },
  {
    id: 'BAE_118',
    subject: '빅데이터 결과 해석',
    question: 'Calibration Curve의 목적은?',
    options: ['모델 속도 측정', '예측 확률의 신뢰도 평가', '과적합 진단', '변수 선택'],
    answer: 1,
    explanation: 'Calibration Curve는 모델의 예측 확률이 실제 확률과 얼마나 일치하는지 평가합니다.',
    difficulty: '상',
    tags: ['Calibration', '모델평가']
  },
  {
    id: 'BAE_119',
    subject: '빅데이터 플랫폼',
    question: 'Snowflake의 특징으로 옳은 것은?',
    options: ['온프레미스 전용', '클라우드 네이티브 DW', 'NoSQL 전용', '스트리밍 전용'],
    answer: 1,
    explanation: 'Snowflake는 클라우드 네이티브 데이터 웨어하우스로, 스토리지와 컴퓨팅을 분리합니다.',
    difficulty: '하',
    tags: ['Snowflake', '데이터웨어하우스']
  },
  {
    id: 'BAE_120',
    subject: '빅데이터 분석 기획',
    question: 'DataOps의 핵심 목표는?',
    options: ['비용 절감', '데이터 파이프라인 자동화 및 품질 향상', '데이터 삭제', '보안 강화'],
    answer: 1,
    explanation: 'DataOps는 DevOps 원칙을 데이터 관리에 적용하여 파이프라인을 자동화하고 데이터 품질을 향상시킵니다.',
    difficulty: '중',
    tags: ['DataOps', '자동화']
  },
  {
    id: 'BAE_121',
    subject: '빅데이터 탐색',
    question: 'WOE(Weight of Evidence) 변환의 목적은?',
    options: ['정규화', '범주형 변수의 예측력 표현', '이상값 제거', '차원 축소'],
    answer: 1,
    explanation: 'WOE는 범주형 변수의 각 범주가 목표 변수에 미치는 영향을 수치로 표현합니다.',
    difficulty: '상',
    tags: ['WOE', '변환']
  },
  {
    id: 'BAE_122',
    subject: '빅데이터 모델링',
    question: 'Vision Transformer(ViT)의 특징은?',
    options: ['CNN 기반', 'Transformer를 이미지에 적용', 'RNN 기반', '통계 모델'],
    answer: 1,
    explanation: 'ViT는 이미지를 패치로 나누어 Transformer 아키텍처를 적용한 모델입니다.',
    difficulty: '상',
    tags: ['ViT', '이미지']
  },
  {
    id: 'BAE_123',
    subject: '빅데이터 결과 해석',
    question: 'Matthews Correlation Coefficient(MCC)의 범위는?',
    options: ['0~1', '-1~1', '0~100', '-∞~+∞'],
    answer: 1,
    explanation: 'MCC는 -1(완전 불일치)부터 1(완전 일치) 사이 값으로, 불균형 데이터에도 신뢰할 수 있습니다.',
    difficulty: '중',
    tags: ['MCC', '평가지표']
  },
  {
    id: 'BAE_124',
    subject: '빅데이터 플랫폼',
    question: 'Presto(Trino)의 특징은?',
    options: ['배치 처리 전용', '분산 SQL 쿼리 엔진', 'NoSQL 전용', '스트리밍 전용'],
    answer: 1,
    explanation: 'Presto(Trino)는 여러 데이터 소스에 대한 대화형 분산 SQL 쿼리를 지원합니다.',
    difficulty: '중',
    tags: ['Presto', 'SQL']
  },
  {
    id: 'BAE_125',
    subject: '빅데이터 분석 기획',
    question: 'Data Quality Dimensions가 아닌 것은?',
    options: ['정확성', '완전성', '일관성', '속도'],
    answer: 3,
    explanation: '데이터 품질 차원에는 정확성, 완전성, 일관성, 적시성, 유효성 등이 있으며, 속도는 차원이 아닙니다.',
    difficulty: '하',
    tags: ['데이터품질', 'DQ']
  },
  {
    id: 'BAE_126',
    subject: '빅데이터 탐색',
    question: 'Entropy와 Information Gain의 관계는?',
    options: ['무관함', 'IG = Entropy 감소량', 'IG = Entropy 증가량', 'IG = 1/Entropy'],
    answer: 1,
    explanation: 'Information Gain은 분할 전후 Entropy의 감소량을 측정하여 변수의 유용성을 평가합니다.',
    difficulty: '중',
    tags: ['Entropy', 'IG']
  },
  {
    id: 'BAE_127',
    subject: '빅데이터 모델링',
    question: 'Hugging Face Transformers의 용도는?',
    options: ['데이터베이스', 'NLP 모델 라이브러리', '웹 프레임워크', 'BI 도구'],
    answer: 1,
    explanation: 'Hugging Face Transformers는 BERT, GPT 등 사전 학습된 NLP 모델을 제공하는 라이브러리입니다.',
    difficulty: '하',
    tags: ['Hugging Face', 'NLP']
  },
  {
    id: 'BAE_128',
    subject: '빅데이터 결과 해석',
    question: 'Learning Curve 분석의 목적은?',
    options: ['하이퍼파라미터 튜닝', '과적합/과소적합 진단', '변수 선택', '이상값 탐지'],
    answer: 1,
    explanation: 'Learning Curve는 훈련 데이터 크기에 따른 성능 변화를 보여주어 과적합/과소적합을 진단합니다.',
    difficulty: '중',
    tags: ['Learning Curve', '진단']
  },
  {
    id: 'BAE_129',
    subject: '빅데이터 플랫폼',
    question: 'dbt(data build tool)의 주요 기능은?',
    options: ['데이터 수집', 'SQL 기반 데이터 변환', '시각화', '모델 학습'],
    answer: 1,
    explanation: 'dbt는 SQL을 사용하여 데이터 변환(T)을 정의하고 실행하는 도구입니다.',
    difficulty: '중',
    tags: ['dbt', 'ELT']
  },
  {
    id: 'BAE_130',
    subject: '빅데이터 분석 기획',
    question: 'Data Catalog의 핵심 기능이 아닌 것은?',
    options: ['메타데이터 관리', '데이터 검색', '데이터 변환 실행', '계보 추적'],
    answer: 2,
    explanation: 'Data Catalog는 메타데이터 관리, 검색, 계보 추적을 제공하며, 데이터 변환 실행은 주 기능이 아닙니다.',
    difficulty: '하',
    tags: ['Data Catalog', '메타데이터']
  },
  {
    id: 'BAE_131',
    subject: '빅데이터 탐색',
    question: 'UMAP(Uniform Manifold Approximation and Projection)의 용도는?',
    options: ['분류', '차원 축소 및 시각화', '회귀', '군집화'],
    answer: 1,
    explanation: 'UMAP은 t-SNE보다 빠르고 전역 구조를 잘 보존하는 차원 축소 기법입니다.',
    difficulty: '중',
    tags: ['UMAP', '차원축소']
  },
  {
    id: 'BAE_132',
    subject: '빅데이터 모델링',
    question: 'Focal Loss의 목적은?',
    options: ['속도 향상', '불균형 데이터 학습 개선', '메모리 절약', '정규화'],
    answer: 1,
    explanation: 'Focal Loss는 쉬운 샘플의 가중치를 낮추고 어려운 샘플에 집중하여 불균형 문제를 개선합니다.',
    difficulty: '상',
    tags: ['Focal Loss', '손실함수']
  },
  {
    id: 'BAE_133',
    subject: '빅데이터 결과 해석',
    question: 'Cumulative Accuracy Profile(CAP)의 용도는?',
    options: ['회귀 평가', '분류 모델의 누적 정확도 시각화', '군집 평가', '시계열 평가'],
    answer: 1,
    explanation: 'CAP은 분류 모델의 누적 정확도를 시각화하여 모델의 식별 능력을 평가합니다.',
    difficulty: '중',
    tags: ['CAP', '평가']
  },
  {
    id: 'BAE_134',
    subject: '빅데이터 플랫폼',
    question: 'Apache Iceberg의 특징은?',
    options: ['NoSQL', '테이블 포맷', '스트리밍 엔진', 'BI 도구'],
    answer: 1,
    explanation: 'Apache Iceberg는 대규모 분석을 위한 오픈 테이블 포맷으로, ACID와 타임 트래블을 지원합니다.',
    difficulty: '상',
    tags: ['Iceberg', '테이블포맷']
  },
  {
    id: 'BAE_135',
    subject: '빅데이터 분석 기획',
    question: 'Privacy-Preserving Machine Learning 기법이 아닌 것은?',
    options: ['Differential Privacy', 'Federated Learning', 'Homomorphic Encryption', 'Batch Normalization'],
    answer: 3,
    explanation: 'Batch Normalization은 학습 안정화 기법이며, 나머지는 프라이버시 보호 ML 기법입니다.',
    difficulty: '중',
    tags: ['프라이버시', 'ML']
  },
  {
    id: 'BAE_136',
    subject: '빅데이터 탐색',
    question: 'Gini Impurity의 범위는?',
    options: ['0~1', '-1~1', '0~∞', '-∞~+∞'],
    answer: 0,
    explanation: 'Gini Impurity는 0(완전 순수)부터 1 사이의 값을 가지며, 의사결정나무에서 사용됩니다.',
    difficulty: '하',
    tags: ['Gini', '의사결정나무']
  },
  {
    id: 'BAE_137',
    subject: '빅데이터 모델링',
    question: 'Knowledge Distillation의 목적은?',
    options: ['데이터 증강', '모델 경량화', '과적합 방지', '데이터 수집'],
    answer: 1,
    explanation: 'Knowledge Distillation은 큰 교사 모델의 지식을 작은 학생 모델에 전달하여 경량화합니다.',
    difficulty: '상',
    tags: ['Knowledge Distillation', '경량화']
  },
  {
    id: 'BAE_138',
    subject: '빅데이터 결과 해석',
    question: 'Residual Plot의 이상적인 패턴은?',
    options: ['선형 패턴', '무작위 분포', '곡선 패턴', '계단 패턴'],
    answer: 1,
    explanation: 'Residual Plot은 잔차가 무작위로 분포해야 모델의 가정이 충족된 것으로 판단합니다.',
    difficulty: '중',
    tags: ['Residual Plot', '회귀']
  },
  {
    id: 'BAE_139',
    subject: '빅데이터 플랫폼',
    question: 'MinIO의 용도는?',
    options: ['관계형 DB', '객체 스토리지', '메시지 큐', '검색 엔진'],
    answer: 1,
    explanation: 'MinIO는 S3 호환 오픈소스 객체 스토리지 서버입니다.',
    difficulty: '하',
    tags: ['MinIO', '스토리지']
  },
  {
    id: 'BAE_140',
    subject: '빅데이터 분석 기획',
    question: 'Model Registry의 주요 기능이 아닌 것은?',
    options: ['모델 버전 관리', '모델 메타데이터 저장', '데이터 수집', '모델 배포 추적'],
    answer: 2,
    explanation: 'Model Registry는 모델 버전, 메타데이터, 배포를 관리하며, 데이터 수집은 별도 기능입니다.',
    difficulty: '중',
    tags: ['Model Registry', 'MLOps']
  },
  {
    id: 'BAE_141',
    subject: '빅데이터 탐색',
    question: 'Polynomial Features의 목적은?',
    options: ['차원 축소', '비선형 관계 표현', '정규화', '이상값 제거'],
    answer: 1,
    explanation: 'Polynomial Features는 변수 간 다항식 조합을 생성하여 비선형 관계를 선형 모델로 표현합니다.',
    difficulty: '중',
    tags: ['Polynomial', '피처엔지니어링']
  },
  {
    id: 'BAE_142',
    subject: '빅데이터 모델링',
    question: 'Multi-Task Learning의 장점은?',
    options: ['모델 단순화', '관련 작업 간 지식 공유', '학습 속도 저하', '메모리 증가'],
    answer: 1,
    explanation: 'Multi-Task Learning은 여러 관련 작업을 동시에 학습하여 공통 표현을 학습하고 일반화 성능을 향상시킵니다.',
    difficulty: '상',
    tags: ['Multi-Task', '전이학습']
  },
  {
    id: 'BAE_143',
    subject: '빅데이터 결과 해석',
    question: 'Business Value Framework에서 모델 평가 시 고려사항이 아닌 것은?',
    options: ['비즈니스 영향', '구현 비용', '모델 복잡도', '알고리즘 이름'],
    answer: 3,
    explanation: 'Business Value Framework는 비즈니스 영향, 비용, 복잡도를 고려하며, 알고리즘 이름은 중요하지 않습니다.',
    difficulty: '하',
    tags: ['Business Value', '평가']
  },
  {
    id: 'BAE_144',
    subject: '빅데이터 플랫폼',
    question: 'Apache Pinot의 특화 분야는?',
    options: ['배치 처리', '실시간 OLAP', 'ETL', '데이터 시각화'],
    answer: 1,
    explanation: 'Apache Pinot은 실시간 분산 OLAP 데이터 저장소로, 낮은 지연시간의 분석 쿼리를 지원합니다.',
    difficulty: '상',
    tags: ['Pinot', 'OLAP']
  },
  {
    id: 'BAE_145',
    subject: '빅데이터 분석 기획',
    question: 'Feature Store의 목적은?',
    options: ['모델 저장', '피처 재사용 및 일관성 관리', '데이터 삭제', '시각화'],
    answer: 1,
    explanation: 'Feature Store는 피처를 중앙에서 관리하여 재사용성을 높이고 학습-서빙 간 일관성을 보장합니다.',
    difficulty: '중',
    tags: ['Feature Store', 'MLOps']
  },
  {
    id: 'BAE_146',
    subject: '빅데이터 탐색',
    question: 'Stratified Sampling의 목적은?',
    options: ['속도 향상', '계층별 비율 유지', '무작위성 증가', '데이터 압축'],
    answer: 1,
    explanation: 'Stratified Sampling은 각 계층(층)의 비율을 원본 데이터와 동일하게 유지하여 샘플링합니다.',
    difficulty: '하',
    tags: ['Sampling', '데이터분할']
  },
  {
    id: 'BAE_147',
    subject: '빅데이터 모델링',
    question: 'Contrastive Learning의 핵심 아이디어는?',
    options: ['지도 학습', '유사한 샘플 가깝게, 다른 샘플 멀게', '회귀', '군집화'],
    answer: 1,
    explanation: 'Contrastive Learning은 유사한 데이터는 가깝게, 다른 데이터는 멀게 배치하도록 학습합니다.',
    difficulty: '상',
    tags: ['Contrastive Learning', '자기지도학습']
  },
  {
    id: 'BAE_148',
    subject: '빅데이터 결과 해석',
    question: 'Champion/Challenger 테스트의 목적은?',
    options: ['데이터 수집', '신규 모델과 기존 모델 성능 비교', '데이터 정제', '시각화'],
    answer: 1,
    explanation: 'Champion/Challenger는 운영 중인 모델(Champion)과 신규 모델(Challenger)을 동시 운영하여 성능을 비교합니다.',
    difficulty: '중',
    tags: ['A/B테스트', '모델평가']
  },
  {
    id: 'BAE_149',
    subject: '빅데이터 플랫폼',
    question: 'Redshift Spectrum의 특징은?',
    options: ['S3 데이터 직접 쿼리', '스트리밍 전용', 'NoSQL 전용', '온프레미스 전용'],
    answer: 0,
    explanation: 'Redshift Spectrum은 S3의 데이터를 Redshift로 로드하지 않고 직접 쿼리할 수 있습니다.',
    difficulty: '중',
    tags: ['Redshift', 'AWS']
  },
  {
    id: 'BAE_150',
    subject: '빅데이터 분석 기획',
    question: 'Concept Drift의 의미는?',
    options: ['데이터 수집 오류', '시간에 따른 데이터 분포 변화', '모델 오버피팅', '하드웨어 고장'],
    answer: 1,
    explanation: 'Concept Drift는 시간이 지나면서 데이터의 통계적 특성이나 관계가 변화하는 현상입니다.',
    difficulty: '중',
    tags: ['Concept Drift', '모델관리']
  },
  {
    id: 'BAE_151',
    subject: '빅데이터 분석 기획',
    question: '베이지안 통계의 핵심 개념은?',
    options: ['빈도론적 접근', '사전 확률과 사후 확률', '단순 평균', '분산만 고려'],
    answer: 1,
    explanation: '베이지안 통계는 사전 확률(prior)에 데이터(likelihood)를 결합하여 사후 확률(posterior)을 구하는 방법입니다.',
    difficulty: '중',
    tags: ['베이지안', '통계']
  },
  {
    id: 'BAE_152',
    subject: '빅데이터 분석 기획',
    question: 'MCMC(Markov Chain Monte Carlo)의 주요 용도는?',
    options: ['데이터 정제', '복잡한 사후 분포 샘플링', '데이터 시각화', '데이터 압축'],
    answer: 1,
    explanation: 'MCMC는 직접 계산하기 어려운 복잡한 확률 분포에서 샘플을 추출하는 방법으로, 베이지안 추론에 널리 사용됩니다.',
    difficulty: '상',
    tags: ['MCMC', '베이지안']
  },
  {
    id: 'BAE_153',
    subject: '빅데이터 탐색',
    question: '가설검정에서 제1종 오류(Type I Error)는?',
    options: ['귀무가설이 참인데 기각', '귀무가설이 거짓인데 채택', '정확한 판단', '검정력'],
    answer: 0,
    explanation: '제1종 오류는 귀무가설이 실제로 참인데 이를 기각하는 오류로, 유의수준(α)에 의해 제어됩니다.',
    difficulty: '중',
    tags: ['가설검정', '통계']
  },
  {
    id: 'BAE_154',
    subject: '빅데이터 탐색',
    question: 'p-value의 올바른 해석은?',
    options: ['가설이 참일 확률', '귀무가설이 참일 때 관측된 결과 이상이 나올 확률', '대립가설이 참일 확률', '오류 확률'],
    answer: 1,
    explanation: 'p-value는 귀무가설이 참이라고 가정할 때 관측된 데이터 또는 더 극단적인 데이터가 나올 확률입니다.',
    difficulty: '상',
    tags: ['p-value', '가설검정']
  },
  {
    id: 'BAE_155',
    subject: '빅데이터 탐색',
    question: '검정력(Power)의 정의는?',
    options: ['1 - α', '1 - β', 'α + β', 'α / β'],
    answer: 1,
    explanation: '검정력은 대립가설이 참일 때 이를 올바르게 채택할 확률로, 1 - β(제2종 오류율)입니다.',
    difficulty: '중',
    tags: ['검정력', '가설검정']
  },
  {
    id: 'BAE_156',
    subject: '빅데이터 모델링',
    question: 'ARIMA 모델에서 (p, d, q)가 의미하는 것은?',
    options: ['평균, 분산, 왜도', 'AR차수, 차분차수, MA차수', '최솟값, 중간값, 최댓값', '시작, 중간, 끝'],
    answer: 1,
    explanation: 'ARIMA(p,d,q)에서 p는 자기회귀(AR) 차수, d는 차분 차수, q는 이동평균(MA) 차수를 나타냅니다.',
    difficulty: '중',
    tags: ['ARIMA', '시계열']
  },
  {
    id: 'BAE_157',
    subject: '빅데이터 모델링',
    question: '시계열 분석에서 정상성(Stationarity)의 조건이 아닌 것은?',
    options: ['일정한 평균', '일정한 분산', '시간 독립적 자기공분산', '계속 증가하는 추세'],
    answer: 3,
    explanation: '정상 시계열은 평균, 분산이 일정하고 자기공분산이 시간에 독립적이어야 합니다. 추세가 있으면 비정상입니다.',
    difficulty: '중',
    tags: ['시계열', '정상성']
  },
  {
    id: 'BAE_158',
    subject: '빅데이터 모델링',
    question: 'Prophet 모델의 주요 구성 요소가 아닌 것은?',
    options: ['추세(Trend)', '계절성(Seasonality)', '휴일 효과(Holidays)', '주성분 분석(PCA)'],
    answer: 3,
    explanation: 'Prophet은 추세, 계절성, 휴일 효과를 모델링하는 시계열 예측 라이브러리로, Facebook에서 개발했습니다.',
    difficulty: '하',
    tags: ['Prophet', '시계열']
  },
  {
    id: 'BAE_159',
    subject: '빅데이터 모델링',
    question: 'LSTM을 시계열 예측에 사용하는 이유는?',
    options: ['빠른 학습 속도', '장기 의존성 학습 가능', '파라미터 적음', '해석 용이'],
    answer: 1,
    explanation: 'LSTM은 장단기 메모리를 통해 장기 의존성을 학습할 수 있어 시계열 데이터의 패턴을 효과적으로 포착합니다.',
    difficulty: '중',
    tags: ['LSTM', '시계열']
  },
  {
    id: 'BAE_160',
    subject: '빅데이터 모델링',
    question: '추천 시스템의 Cold Start 문제를 해결하는 방법이 아닌 것은?',
    options: ['인기도 기반 추천', '컨텐츠 기반 필터링', '하이브리드 방식', '협업 필터링만 사용'],
    answer: 3,
    explanation: 'Cold Start 문제(신규 사용자/아이템)는 협업 필터링만으로 해결 어렵고, 인기도, 컨텐츠 기반, 하이브리드 방식을 사용합니다.',
    difficulty: '중',
    tags: ['추천시스템', 'Cold Start']
  },
  {
    id: 'BAE_161',
    subject: '빅데이터 모델링',
    question: '협업 필터링(Collaborative Filtering)의 종류가 아닌 것은?',
    options: ['사용자 기반(User-based)', '아이템 기반(Item-based)', '모델 기반(Model-based)', '규칙 기반(Rule-based)'],
    answer: 3,
    explanation: '협업 필터링은 사용자 기반, 아이템 기반, 모델 기반(Matrix Factorization 등)으로 분류됩니다.',
    difficulty: '하',
    tags: ['협업필터링', '추천시스템']
  },
  {
    id: 'BAE_162',
    subject: '빅데이터 모델링',
    question: 'Matrix Factorization의 목적은?',
    options: ['차원 확대', '사용자-아이템 행렬을 저차원으로 분해', '데이터 삭제', '정규화'],
    answer: 1,
    explanation: 'Matrix Factorization은 희소한 사용자-아이템 행렬을 저차원의 잠재 요인 행렬로 분해하여 추천을 수행합니다.',
    difficulty: '중',
    tags: ['Matrix Factorization', '추천시스템']
  },
  {
    id: 'BAE_163',
    subject: '빅데이터 모델링',
    question: 'ALS(Alternating Least Squares)가 사용되는 분야는?',
    options: ['이미지 분류', '추천 시스템의 Matrix Factorization', '텍스트 요약', '음성 인식'],
    answer: 1,
    explanation: 'ALS는 추천 시스템에서 Matrix Factorization을 효율적으로 수행하는 최적화 알고리즘입니다.',
    difficulty: '중',
    tags: ['ALS', '추천시스템']
  },
  {
    id: 'BAE_164',
    subject: '빅데이터 모델링',
    question: '강화학습의 핵심 요소가 아닌 것은?',
    options: ['에이전트(Agent)', '환경(Environment)', '보상(Reward)', '레이블(Label)'],
    answer: 3,
    explanation: '강화학습은 에이전트가 환경과 상호작용하며 보상을 최대화하도록 학습합니다. 레이블은 지도학습의 요소입니다.',
    difficulty: '하',
    tags: ['강화학습', 'RL']
  },
  {
    id: 'BAE_165',
    subject: '빅데이터 모델링',
    question: 'Q-Learning의 Q가 의미하는 것은?',
    options: ['Quality', 'Quantity', 'Query', 'Quick'],
    answer: 0,
    explanation: 'Q-Learning의 Q는 Quality를 의미하며, 상태-행동 쌍의 품질(가치)을 학습하는 강화학습 알고리즘입니다.',
    difficulty: '하',
    tags: ['Q-Learning', '강화학습']
  },
  {
    id: 'BAE_166',
    subject: '빅데이터 모델링',
    question: 'DQN(Deep Q-Network)이 기존 Q-Learning과 다른 점은?',
    options: ['Q-table 사용', '신경망으로 Q 함수 근사', '보상 없음', '환경 없음'],
    answer: 1,
    explanation: 'DQN은 Q-table 대신 심층 신경망을 사용하여 Q 함수를 근사하므로 고차원 상태 공간에서도 사용 가능합니다.',
    difficulty: '중',
    tags: ['DQN', '강화학습']
  },
  {
    id: 'BAE_167',
    subject: '빅데이터 모델링',
    question: 'Policy Gradient의 핵심 아이디어는?',
    options: ['가치 함수 학습', '정책을 직접 최적화', 'Q 함수만 사용', '규칙 기반'],
    answer: 1,
    explanation: 'Policy Gradient는 가치 함수를 거치지 않고 정책(policy)을 직접 최적화하여 행동을 선택합니다.',
    difficulty: '상',
    tags: ['Policy Gradient', '강화학습']
  },
  {
    id: 'BAE_168',
    subject: '빅데이터 모델링',
    question: 'Actor-Critic 방법에서 Actor와 Critic의 역할은?',
    options: ['Actor는 정책, Critic은 가치 평가', 'Actor는 데이터 수집, Critic은 삭제', 'Actor는 학습, Critic은 테스트', 'Actor는 전처리, Critic은 후처리'],
    answer: 0,
    explanation: 'Actor-Critic에서 Actor는 정책(행동 선택)을 담당하고, Critic은 그 행동의 가치를 평가합니다.',
    difficulty: '상',
    tags: ['Actor-Critic', '강화학습']
  },
  {
    id: 'BAE_169',
    subject: '빅데이터 탐색',
    question: '다중공선성(Multicollinearity)의 문제점은?',
    options: ['모델 성능 향상', '회귀 계수의 불안정성', '속도 향상', '정확도 향상'],
    answer: 1,
    explanation: '다중공선성은 독립변수 간 높은 상관관계로 인해 회귀 계수가 불안정해지고 해석이 어려워지는 문제입니다.',
    difficulty: '중',
    tags: ['다중공선성', '회귀분석']
  },
  {
    id: 'BAE_170',
    subject: '빅데이터 탐색',
    question: 'VIF(Variance Inflation Factor)가 10 이상이면?',
    options: ['다중공선성 없음', '심각한 다중공선성', '완벽한 모델', '변수 추가 필요'],
    answer: 1,
    explanation: 'VIF가 10 이상이면 심각한 다중공선성이 있다고 판단하며, 변수 제거나 PCA 등의 조치가 필요합니다.',
    difficulty: '중',
    tags: ['VIF', '다중공선성']
  },
  {
    id: 'BAE_171',
    subject: '빅데이터 모델링',
    question: 'Transformer 모델의 핵심 메커니즘은?',
    options: ['RNN', 'Attention', 'CNN만 사용', '결정 트리'],
    answer: 1,
    explanation: 'Transformer는 Self-Attention 메커니즘을 사용하여 순차 데이터를 병렬로 처리하며, RNN 없이도 시퀀스를 모델링합니다.',
    difficulty: '중',
    tags: ['Transformer', 'Attention']
  },
  {
    id: 'BAE_172',
    subject: '빅데이터 모델링',
    question: 'BERT의 사전학습 방법이 아닌 것은?',
    options: ['Masked Language Model', 'Next Sentence Prediction', 'Image Classification', 'Fine-tuning'],
    answer: 2,
    explanation: 'BERT는 MLM과 NSP로 사전학습되는 언어 모델이며, 이미지 분류는 포함되지 않습니다.',
    difficulty: '하',
    tags: ['BERT', 'NLP']
  },
  {
    id: 'BAE_173',
    subject: '빅데이터 모델링',
    question: 'GPT와 BERT의 주요 차이점은?',
    options: ['GPT는 양방향, BERT는 단방향', 'GPT는 단방향, BERT는 양방향', 'GPT는 CNN, BERT는 RNN', '차이 없음'],
    answer: 1,
    explanation: 'GPT는 단방향(왼쪽에서 오른쪽) 언어 모델이고, BERT는 양방향(Masked LM)으로 문맥을 이해합니다.',
    difficulty: '중',
    tags: ['GPT', 'BERT']
  },
  {
    id: 'BAE_174',
    subject: '빅데이터 모델링',
    question: 'Few-Shot Learning의 목표는?',
    options: ['많은 데이터 필요', '적은 샘플로 학습', '데이터 없이 학습', '무한 데이터 학습'],
    answer: 1,
    explanation: 'Few-Shot Learning은 매우 적은 수의 레이블된 샘플만으로도 새로운 클래스를 학습하는 기법입니다.',
    difficulty: '중',
    tags: ['Few-Shot', '전이학습']
  },
  {
    id: 'BAE_175',
    subject: '빅데이터 모델링',
    question: 'Zero-Shot Learning의 특징은?',
    options: ['학습 데이터 필요', '학습 시 보지 못한 클래스 예측', '오버피팅 유발', '데이터 증강'],
    answer: 1,
    explanation: 'Zero-Shot Learning은 학습 시 보지 못한 클래스를 의미적 정보나 속성을 통해 예측하는 기법입니다.',
    difficulty: '상',
    tags: ['Zero-Shot', '전이학습']
  },
  {
    id: 'BAE_176',
    subject: '빅데이터 플랫폼',
    question: 'Apache Airflow의 DAG는 무엇을 의미하는가?',
    options: ['Data Analysis Group', 'Directed Acyclic Graph', 'Database Access Gateway', 'Dynamic API Generator'],
    answer: 1,
    explanation: 'DAG(Directed Acyclic Graph)는 방향성 비순환 그래프로, Airflow에서 워크플로우의 작업 간 의존성을 표현합니다.',
    difficulty: '하',
    tags: ['Airflow', 'DAG']
  },
  {
    id: 'BAE_177',
    subject: '빅데이터 플랫폼',
    question: 'Apache Kafka의 주요 구성 요소가 아닌 것은?',
    options: ['Producer', 'Consumer', 'Broker', 'Selector'],
    answer: 3,
    explanation: 'Kafka는 Producer(메시지 발행), Consumer(메시지 소비), Broker(메시지 저장)로 구성됩니다.',
    difficulty: '하',
    tags: ['Kafka', '스트리밍']
  },
  {
    id: 'BAE_178',
    subject: '빅데이터 플랫폼',
    question: 'Apache Flink의 특징은?',
    options: ['배치 처리만 지원', '실시간 스트리밍과 배치 통합', 'SQL 미지원', '분산 처리 불가'],
    answer: 1,
    explanation: 'Flink는 통합된 스트림 처리 엔진으로, 실시간 스트리밍과 배치 처리를 모두 지원합니다.',
    difficulty: '중',
    tags: ['Flink', '스트리밍']
  },
  {
    id: 'BAE_179',
    subject: '빅데이터 모델링',
    question: 'AutoML의 주요 목적은?',
    options: ['수동 튜닝 강제', '머신러닝 파이프라인 자동화', '데이터 삭제', '시각화만 수행'],
    answer: 1,
    explanation: 'AutoML은 피처 엔지니어링, 모델 선택, 하이퍼파라미터 튜닝 등을 자동화하여 머신러닝을 접근 가능하게 합니다.',
    difficulty: '하',
    tags: ['AutoML', '자동화']
  },
  {
    id: 'BAE_180',
    subject: '빅데이터 모델링',
    question: 'Neural Architecture Search(NAS)의 목적은?',
    options: ['데이터 수집', '최적의 신경망 구조 자동 탐색', '데이터 시각화', '데이터 정제'],
    answer: 1,
    explanation: 'NAS는 강화학습이나 진화 알고리즘을 사용하여 주어진 작업에 최적인 신경망 구조를 자동으로 찾습니다.',
    difficulty: '상',
    tags: ['NAS', 'AutoML']
  },
  {
    id: 'BAE_181',
    subject: '빅데이터 탐색',
    question: '차원의 저주(Curse of Dimensionality)의 문제점은?',
    options: ['데이터 부족', '고차원에서 데이터 희소성 증가', '속도 향상', '정확도 향상'],
    answer: 1,
    explanation: '차원이 증가할수록 공간이 기하급수적으로 커져 데이터가 희소해지고, 모델 학습에 더 많은 데이터가 필요합니다.',
    difficulty: '중',
    tags: ['차원의 저주', '차원축소']
  },
  {
    id: 'BAE_182',
    subject: '빅데이터 탐색',
    question: 't-SNE의 주요 용도는?',
    options: ['회귀', '고차원 데이터 시각화', '분류', '군집화만'],
    answer: 1,
    explanation: 't-SNE는 고차원 데이터를 2D/3D로 축소하여 시각화하는 데 특화된 비선형 차원 축소 기법입니다.',
    difficulty: '하',
    tags: ['t-SNE', '시각화']
  },
  {
    id: 'BAE_183',
    subject: '빅데이터 탐색',
    question: 'UMAP의 장점은?',
    options: ['느린 속도', 't-SNE보다 빠르고 전역 구조 보존', '선형 변환만', '2차원만 지원'],
    answer: 1,
    explanation: 'UMAP은 t-SNE보다 빠르며 전역 구조를 더 잘 보존하고, 더 높은 차원으로도 축소 가능합니다.',
    difficulty: '중',
    tags: ['UMAP', '차원축소']
  },
  {
    id: 'BAE_184',
    subject: '빅데이터 모델링',
    question: 'Federated Learning의 주요 특징은?',
    options: ['중앙 서버에 모든 데이터 수집', '데이터를 로컬에 유지하며 분산 학습', '단일 기기 학습', '데이터 공유 필수'],
    answer: 1,
    explanation: 'Federated Learning은 데이터를 중앙으로 모으지 않고 각 디바이스에서 로컬로 학습한 후 모델만 공유합니다.',
    difficulty: '상',
    tags: ['Federated Learning', '분산학습']
  },
  {
    id: 'BAE_185',
    subject: '빅데이터 모델링',
    question: 'Differential Privacy의 목적은?',
    options: ['속도 향상', '개인정보 보호하며 데이터 분석', '모델 압축', '데이터 증강'],
    answer: 1,
    explanation: 'Differential Privacy는 데이터에 노이즈를 추가하여 개인정보를 보호하면서도 통계적 분석이 가능하게 합니다.',
    difficulty: '상',
    tags: ['Differential Privacy', '프라이버시']
  },
  {
    id: 'BAE_186',
    subject: '빅데이터 결과 해석',
    question: 'Shapley Value의 의미는?',
    options: ['손실 함수', '각 피처의 기여도', '학습률', '배치 크기'],
    answer: 1,
    explanation: 'Shapley Value는 게임 이론에서 유래한 개념으로, 각 피처가 예측에 기여한 정도를 공정하게 분배합니다.',
    difficulty: '중',
    tags: ['SHAP', '설명가능성']
  },
  {
    id: 'BAE_187',
    subject: '빅데이터 결과 해석',
    question: 'LIME의 설명 방식은?',
    options: ['전역적 설명', '국소적 선형 근사', '규칙 기반', '트리 기반'],
    answer: 1,
    explanation: 'LIME은 예측 주변에서 선형 모델로 국소적으로 근사하여 개별 예측을 설명합니다.',
    difficulty: '중',
    tags: ['LIME', '설명가능성']
  },
  {
    id: 'BAE_188',
    subject: '빅데이터 모델링',
    question: 'Model Compression의 기법이 아닌 것은?',
    options: ['Pruning', 'Quantization', 'Knowledge Distillation', 'Data Augmentation'],
    answer: 3,
    explanation: 'Model Compression은 Pruning(가지치기), Quantization(양자화), Knowledge Distillation(지식 증류)로 모델 크기를 줄입니다.',
    difficulty: '중',
    tags: ['Model Compression', '경량화']
  },
  {
    id: 'BAE_189',
    subject: '빅데이터 모델링',
    question: 'Knowledge Distillation에서 Teacher와 Student의 관계는?',
    options: ['동일한 모델', '큰 모델이 작은 모델을 학습시킴', '작은 모델이 큰 모델을 학습시킴', '독립적 학습'],
    answer: 1,
    explanation: 'Knowledge Distillation은 큰 Teacher 모델의 지식을 작은 Student 모델로 전달하여 성능을 유지하며 경량화합니다.',
    difficulty: '중',
    tags: ['Knowledge Distillation', '경량화']
  },
  {
    id: 'BAE_190',
    subject: '빅데이터 플랫폼',
    question: 'Delta Lake의 주요 기능은?',
    options: ['단순 저장소', 'ACID 트랜잭션과 Time Travel', 'SQL 미지원', '스트리밍 불가'],
    answer: 1,
    explanation: 'Delta Lake는 Data Lake에 ACID 트랜잭션, Time Travel, Schema Evolution 등을 제공하는 오픈소스 스토리지 레이어입니다.',
    difficulty: '중',
    tags: ['Delta Lake', 'Data Lake']
  },
  {
    id: 'BAE_191',
    subject: '빅데이터 플랫폼',
    question: 'Apache Iceberg의 특징은?',
    options: ['파일 포맷', '테이블 포맷', '데이터베이스', 'BI 도구'],
    answer: 1,
    explanation: 'Apache Iceberg는 대규모 분석을 위한 오픈 테이블 포맷으로, Schema Evolution과 Time Travel을 지원합니다.',
    difficulty: '중',
    tags: ['Iceberg', 'Table Format']
  },
  {
    id: 'BAE_192',
    subject: '빅데이터 모델링',
    question: 'Active Learning의 목적은?',
    options: ['모든 데이터 레이블링', '불확실한 샘플만 선택적 레이블링', '데이터 삭제', '무작위 선택'],
    answer: 1,
    explanation: 'Active Learning은 모델이 가장 불확실한 샘플을 선택하여 레이블링 비용을 최소화하며 효율적으로 학습합니다.',
    difficulty: '상',
    tags: ['Active Learning', '준지도학습']
  },
  {
    id: 'BAE_193',
    subject: '빅데이터 모델링',
    question: 'Self-Supervised Learning의 특징은?',
    options: ['레이블 필수', '데이터 자체에서 감독 신호 생성', '강화학습과 동일', '지도학습과 동일'],
    answer: 1,
    explanation: 'Self-Supervised Learning은 레이블 없이 데이터 자체에서 감독 신호를 생성하여 표현을 학습합니다.',
    difficulty: '중',
    tags: ['Self-Supervised', '비지도학습']
  },
  {
    id: 'BAE_194',
    subject: '빅데이터 탐색',
    question: 'Bootstrapping의 목적은?',
    options: ['데이터 삭제', '샘플링을 통한 통계적 추정', '모델 압축', '속도 향상'],
    answer: 1,
    explanation: 'Bootstrapping은 복원 추출로 여러 샘플을 생성하여 통계량의 분포를 추정하는 리샘플링 기법입니다.',
    difficulty: '중',
    tags: ['Bootstrapping', '통계']
  },
  {
    id: 'BAE_195',
    subject: '빅데이터 결과 해석',
    question: 'Partial Dependence Plot(PDP)이 보여주는 것은?',
    options: ['모델 정확도', '특정 변수가 예측에 미치는 평균적 영향', '손실 함수', '학습 곡선'],
    answer: 1,
    explanation: 'PDP는 다른 변수를 평균화하여 특정 변수가 예측값에 미치는 영향을 시각화합니다.',
    difficulty: '중',
    tags: ['PDP', '모델해석']
  },
  {
    id: 'BAE_196',
    subject: '빅데이터 모델링',
    question: 'Ensemble Learning의 Bagging과 Boosting의 차이점은?',
    options: ['Bagging은 순차적, Boosting은 병렬', 'Bagging은 병렬, Boosting은 순차적', '차이 없음', 'Bagging만 앙상블'],
    answer: 1,
    explanation: 'Bagging은 독립적으로 병렬 학습하고, Boosting은 이전 모델의 오차를 보완하며 순차적으로 학습합니다.',
    difficulty: '중',
    tags: ['Ensemble', 'Bagging', 'Boosting']
  },
  {
    id: 'BAE_197',
    subject: '빅데이터 모델링',
    question: 'Stacking Ensemble의 메타 모델(Meta-model)의 역할은?',
    options: ['데이터 전처리', '베이스 모델들의 예측을 결합', '데이터 생성', '피처 선택'],
    answer: 1,
    explanation: 'Stacking에서 메타 모델은 여러 베이스 모델의 예측을 입력으로 받아 최종 예측을 수행합니다.',
    difficulty: '중',
    tags: ['Stacking', 'Ensemble']
  },
  {
    id: 'BAE_198',
    subject: '빅데이터 플랫폼',
    question: 'Apache Hudi의 주요 기능은?',
    options: ['단순 파일 저장', '증분 데이터 처리와 Upsert', '이미지 처리', '텍스트 편집'],
    answer: 1,
    explanation: 'Apache Hudi는 Hadoop에서 증분 데이터 처리, Upsert, Delete를 효율적으로 지원하는 데이터 레이크 스토리지입니다.',
    difficulty: '중',
    tags: ['Hudi', 'Data Lake']
  },
  {
    id: 'BAE_199',
    subject: '빅데이터 모델링',
    question: 'Online Learning의 특징은?',
    options: ['배치로만 학습', '데이터가 도착하는 대로 점진적 학습', '학습 불가', '오프라인만 가능'],
    answer: 1,
    explanation: 'Online Learning은 새로운 데이터가 도착할 때마다 모델을 점진적으로 업데이트하여 변화하는 패턴에 적응합니다.',
    difficulty: '중',
    tags: ['Online Learning', '점진학습']
  },
  {
    id: 'BAE_200',
    subject: '빅데이터 분석 기획',
    question: 'MLOps의 핵심 목표는?',
    options: ['개발만 집중', 'ML 모델의 지속적 배포와 모니터링', '데이터 삭제', '수동 관리'],
    answer: 1,
    explanation: 'MLOps는 ML 모델의 개발, 배포, 모니터링, 재학습을 자동화하여 프로덕션 환경에서 안정적으로 운영하는 것을 목표로 합니다.',
    difficulty: '하',
    tags: ['MLOps', '운영']
  }
];

export default bigdataQuestions;
