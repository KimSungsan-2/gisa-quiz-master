import React, { useState, useEffect } from 'react';
import { BookOpen, CheckCircle, XCircle, BarChart3, RefreshCw, ArrowLeft, Trophy, Flame, Filter, Clock, Star, Download, Calendar, TrendingUp, Award, Target, AlertCircle, Brain, Zap, Activity } from 'lucide-react';

// 확장된 샘플 데이터
const sampleData = {
  certificates: [
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
    }
  ],
  questions: {
    bigdata: [
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
    ],
    info: [
      {
        id: 'INFO_001',
        subject: '소프트웨어 설계',
        question: '객체지향 설계 원칙 중 SOLID 원칙에 해당하지 않는 것은?',
        options: ['SRP (Single Responsibility Principle)', 'OCP (Open-Closed Principle)', 'DRY (Don\'t Repeat Yourself)', 'LSP (Liskov Substitution Principle)'],
        answer: 2,
        explanation: 'SOLID 원칙은 SRP(단일 책임), OCP(개방-폐쇄), LSP(리스코프 치환), ISP(인터페이스 분리), DIP(의존관계 역전) 원칙입니다.',
        difficulty: '하',
        tags: ['객체지향', 'SOLID']
      },
      {
        id: 'INFO_002',
        subject: '소프트웨어 설계',
        question: 'UML 다이어그램 중 구조적(Structural) 다이어그램이 아닌 것은?',
        options: ['클래스 다이어그램 (Class Diagram)', '컴포넌트 다이어그램 (Component Diagram)', '시퀀스 다이어그램 (Sequence Diagram)', '패키지 다이어그램 (Package Diagram)'],
        answer: 2,
        explanation: '시퀀스 다이어그램은 행위(Behavioral) 다이어그램입니다.',
        difficulty: '중',
        tags: ['UML', '다이어그램']
      },
      {
        id: 'INFO_003',
        subject: '데이터베이스 구축',
        question: '관계 데이터베이스의 정규화 과정이 올바른 순서로 나열된 것은?',
        options: ['1NF → 2NF → 3NF → BCNF', '1NF → 3NF → 2NF → BCNF', '2NF → 1NF → 3NF → BCNF', '1NF → BCNF → 2NF → 3NF'],
        answer: 0,
        explanation: '정규화는 1NF(제1정규형) → 2NF(제2정규형) → 3NF(제3정규형) → BCNF(보이스-코드 정규형) → 4NF → 5NF 순서로 진행됩니다.',
        difficulty: '하',
        tags: ['정규화', '데이터베이스']
      },
      {
        id: 'INFO_004',
        subject: '데이터베이스 구축',
        question: 'SQL에서 트랜잭션의 특성(ACID)이 아닌 것은?',
        options: ['Atomicity (원자성)', 'Consistency (일관성)', 'Isolation (격리성)', 'Availability (가용성)'],
        answer: 3,
        explanation: '트랜잭션의 ACID 특성은 Atomicity(원자성), Consistency(일관성), Isolation(격리성), Durability(지속성)입니다.',
        difficulty: '중',
        tags: ['트랜잭션', 'ACID']
      },
      {
        id: 'INFO_005',
        subject: '프로그래밍 언어 활용',
        question: '다음 C언어 코드의 출력 결과는?\n\nint a = 10, b = 20;\nprintf("%d", a > b ? a : b);',
        options: ['10', '20', '30', '컴파일 에러'],
        answer: 1,
        explanation: '삼항 연산자 (조건) ? 참일때값 : 거짓일때값 을 사용합니다. a > b는 거짓이므로 b의 값인 20이 출력됩니다.',
        difficulty: '하',
        tags: ['C언어', '연산자']
      },
      {
        id: 'INFO_006',
        subject: '프로그래밍 언어 활용',
        question: '객체지향 프로그래밍의 특징이 아닌 것은?',
        options: ['캡슐화 (Encapsulation)', '상속성 (Inheritance)', '다형성 (Polymorphism)', '순차성 (Sequentiality)'],
        answer: 3,
        explanation: '객체지향 프로그래밍의 4대 특징은 캡슐화(Encapsulation), 상속성(Inheritance), 다형성(Polymorphism), 추상화(Abstraction)입니다.',
        difficulty: '하',
        tags: ['객체지향', '특징']
      },
      {
        id: 'INFO_007',
        subject: '정보시스템 구축관리',
        question: 'OSI 7계층 중 데이터 링크 계층(Data Link Layer)에서 사용되는 프로토콜은?',
        options: ['IP', 'TCP', 'Ethernet', 'HTTP'],
        answer: 2,
        explanation: 'Ethernet은 데이터 링크 계층(2계층) 프로토콜입니다. IP는 네트워크 계층(3계층), TCP는 전송 계층(4계층), HTTP는 응용 계층(7계층) 프로토콜입니다.',
        difficulty: '중',
        tags: ['네트워크', 'OSI']
      },
      {
        id: 'INFO_008',
        subject: '정보시스템 구축관리',
        question: 'IPv4 주소 체계에서 C클래스의 기본 서브넷 마스크는?',
        options: ['255.0.0.0', '255.255.0.0', '255.255.255.0', '255.255.255.255'],
        answer: 2,
        explanation: 'IPv4 클래스별 기본 서브넷 마스크는 A클래스: 255.0.0.0, B클래스: 255.255.0.0, C클래스: 255.255.255.0입니다.',
        difficulty: '중',
        tags: ['네트워크', 'IP']
      },
      {
        id: 'INFO_009',
        subject: '소프트웨어 설계',
        question: '디자인 패턴 중 Singleton 패턴의 목적은?',
        options: ['객체 생성을 서브클래스에 위임', '클래스의 인스턴스를 하나만 생성', '객체 간의 일대다 의존성 정의', '알고리즘을 캡슐화하여 교체 가능하게'],
        answer: 1,
        explanation: 'Singleton 패턴은 클래스의 인스턴스가 오직 하나만 생성되도록 보장하고, 이에 대한 전역적인 접근점을 제공하는 패턴입니다.',
        difficulty: '중',
        tags: ['디자인패턴', 'Singleton']
      },
      {
        id: 'INFO_010',
        subject: '데이터베이스 구축',
        question: 'JOIN 연산 중 두 테이블의 공통된 속성값이 있는 튜플만 반환하는 것은?',
        options: ['INNER JOIN', 'LEFT OUTER JOIN', 'RIGHT OUTER JOIN', 'FULL OUTER JOIN'],
        answer: 0,
        explanation: 'INNER JOIN은 두 테이블에서 조인 조건을 만족하는(공통된 값이 있는) 튜플만 결과로 반환합니다.',
        difficulty: '하',
        tags: ['SQL', 'JOIN']
      },
      {
        id: 'INFO_011',
        subject: '소프트웨어 설계',
        question: '애자일(Agile) 방법론의 특징이 아닌 것은?',
        options: ['짧은 개발 주기(스프린트)', '문서보다 실행 가능한 소프트웨어 중시', '계획 변경에 유연한 대응', '상세한 사전 계획과 문서화 필수'],
        answer: 3,
        explanation: '애자일은 변화에 유연하게 대응하며, 과도한 문서화보다 실행 가능한 소프트웨어를 중시합니다.',
        difficulty: '하',
        tags: ['애자일', '방법론']
      },
      {
        id: 'INFO_012',
        subject: '소프트웨어 설계',
        question: '유스케이스 다이어그램의 구성요소가 아닌 것은?',
        options: ['액터(Actor)', '유스케이스(Use Case)', '관계(Relationship)', '상태(State)'],
        answer: 3,
        explanation: '상태(State)는 상태 다이어그램의 구성요소입니다. 유스케이스 다이어그램은 액터, 유스케이스, 관계, 시스템 경계로 구성됩니다.',
        difficulty: '중',
        tags: ['UML', '유스케이스']
      },
      {
        id: 'INFO_013',
        subject: '소프트웨어 설계',
        question: '결합도(Coupling)가 가장 낮은 것은?',
        options: ['내용 결합도(Content)', '공통 결합도(Common)', '자료 결합도(Data)', '제어 결합도(Control)'],
        answer: 2,
        explanation: '결합도는 낮을수록 좋으며, 자료 결합도 < 스탬프 결합도 < 제어 결합도 < 외부 결합도 < 공통 결합도 < 내용 결합도 순입니다.',
        difficulty: '상',
        tags: ['결합도', '모듈']
      },
      {
        id: 'INFO_014',
        subject: '소프트웨어 설계',
        question: '응집도(Cohesion)가 가장 높은 것은?',
        options: ['우연적 응집도(Coincidental)', '논리적 응집도(Logical)', '기능적 응집도(Functional)', '절차적 응집도(Procedural)'],
        answer: 2,
        explanation: '응집도는 높을수록 좋으며, 기능적 > 순차적 > 통신적 > 절차적 > 시간적 > 논리적 > 우연적 순입니다.',
        difficulty: '상',
        tags: ['응집도', '모듈']
      },
      {
        id: 'INFO_015',
        subject: '소프트웨어 설계',
        question: 'GoF 디자인 패턴 중 구조 패턴이 아닌 것은?',
        options: ['어댑터(Adapter)', '브리지(Bridge)', '팩토리 메서드(Factory Method)', '데코레이터(Decorator)'],
        answer: 2,
        explanation: '팩토리 메서드는 생성 패턴입니다. 구조 패턴에는 어댑터, 브리지, 컴포지트, 데코레이터, 퍼사드, 플라이웨이트, 프록시가 있습니다.',
        difficulty: '중',
        tags: ['디자인패턴', 'GoF']
      },
      {
        id: 'INFO_016',
        subject: '데이터베이스 구축',
        question: '데이터베이스 무결성 제약조건이 아닌 것은?',
        options: ['개체 무결성', '참조 무결성', '도메인 무결성', '분산 무결성'],
        answer: 3,
        explanation: '데이터베이스 무결성에는 개체 무결성, 참조 무결성, 도메인 무결성, 키 무결성 등이 있습니다.',
        difficulty: '중',
        tags: ['무결성', '데이터베이스']
      },
      {
        id: 'INFO_017',
        subject: '데이터베이스 구축',
        question: '인덱스(Index)에 대한 설명으로 틀린 것은?',
        options: ['검색 속도를 향상시킨다', 'B-트리, 해시 등의 자료구조 사용', '삽입/삭제 시 오버헤드 발생', '항상 모든 컬럼에 인덱스 생성이 좋다'],
        answer: 3,
        explanation: '인덱스는 저장 공간을 추가로 사용하고, 삽입/삭제 시 오버헤드가 발생하므로 적절한 컬럼에만 생성해야 합니다.',
        difficulty: '중',
        tags: ['인덱스', '성능']
      },
      {
        id: 'INFO_018',
        subject: '데이터베이스 구축',
        question: 'SQL의 DDL(Data Definition Language)에 해당하지 않는 것은?',
        options: ['CREATE', 'ALTER', 'DROP', 'UPDATE'],
        answer: 3,
        explanation: 'UPDATE는 DML(Data Manipulation Language)입니다. DDL에는 CREATE, ALTER, DROP, TRUNCATE 등이 있습니다.',
        difficulty: '하',
        tags: ['SQL', 'DDL']
      },
      {
        id: 'INFO_019',
        subject: '데이터베이스 구축',
        question: '뷰(View)에 대한 설명으로 틀린 것은?',
        options: ['가상의 테이블이다', '데이터 독립성 제공', '보안 기능 제공', '물리적으로 데이터를 저장한다'],
        answer: 3,
        explanation: '뷰는 가상의 테이블로 물리적으로 데이터를 저장하지 않고 논리적으로만 존재합니다.',
        difficulty: '하',
        tags: ['뷰', 'SQL']
      },
      {
        id: 'INFO_020',
        subject: '데이터베이스 구축',
        question: '이상(Anomaly)의 종류가 아닌 것은?',
        options: ['삽입 이상', '삭제 이상', '갱신 이상', '조회 이상'],
        answer: 3,
        explanation: '이상에는 삽입 이상, 삭제 이상, 갱신 이상이 있습니다. 조회 이상은 존재하지 않습니다.',
        difficulty: '중',
        tags: ['이상', '정규화']
      },
      {
        id: 'INFO_021',
        subject: '프로그래밍 언어 활용',
        question: '스택(Stack)의 특징으로 옳은 것은?',
        options: ['FIFO 구조', 'LIFO 구조', '양방향 삽입/삭제 가능', '임의 접근 가능'],
        answer: 1,
        explanation: '스택은 LIFO(Last In First Out) 구조로, 나중에 삽입된 데이터가 먼저 삭제됩니다.',
        difficulty: '하',
        tags: ['자료구조', '스택']
      },
      {
        id: 'INFO_022',
        subject: '프로그래밍 언어 활용',
        question: '이진 탐색(Binary Search)의 시간 복잡도는?',
        options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
        answer: 1,
        explanation: '이진 탐색은 정렬된 배열에서 절반씩 탐색 범위를 줄여가므로 O(log n)의 시간 복잡도를 가집니다.',
        difficulty: '중',
        tags: ['알고리즘', '탐색']
      },
      {
        id: 'INFO_023',
        subject: '프로그래밍 언어 활용',
        question: '퀵 정렬(Quick Sort)의 평균 시간 복잡도는?',
        options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(log n)'],
        answer: 1,
        explanation: '퀵 정렬의 평균 시간 복잡도는 O(n log n)이며, 최악의 경우 O(n²)입니다.',
        difficulty: '중',
        tags: ['알고리즘', '정렬']
      },
      {
        id: 'INFO_024',
        subject: '프로그래밍 언어 활용',
        question: '재귀 함수 호출 시 사용되는 메모리 영역은?',
        options: ['힙(Heap)', '스택(Stack)', '데이터(Data)', '코드(Code)'],
        answer: 1,
        explanation: '재귀 함수 호출 시 스택 영역에 함수의 지역 변수, 매개변수, 복귀 주소 등이 저장됩니다.',
        difficulty: '중',
        tags: ['메모리', '재귀']
      },
      {
        id: 'INFO_025',
        subject: '프로그래밍 언어 활용',
        question: '해시 테이블에서 충돌(Collision) 해결 방법이 아닌 것은?',
        options: ['체이닝(Chaining)', '선형 탐사(Linear Probing)', '이차 탐사(Quadratic Probing)', '이진 탐색(Binary Search)'],
        answer: 3,
        explanation: '이진 탐색은 탐색 알고리즘이며, 해시 충돌 해결에는 체이닝, 선형 탐사, 이차 탐사, 이중 해싱 등이 있습니다.',
        difficulty: '중',
        tags: ['해시', '자료구조']
      },
      {
        id: 'INFO_026',
        subject: '프로그래밍 언어 활용',
        question: '객체지향 프로그래밍의 특징이 아닌 것은?',
        options: ['캡슐화(Encapsulation)', '상속(Inheritance)', '다형성(Polymorphism)', '순차성(Sequentiality)'],
        answer: 3,
        explanation: '객체지향의 주요 특징은 캡슐화, 상속, 다형성, 추상화입니다.',
        difficulty: '하',
        tags: ['객체지향', 'OOP']
      },
      {
        id: 'INFO_027',
        subject: '프로그래밍 언어 활용',
        question: '그래프 탐색 알고리즘 중 BFS(Breadth First Search)에서 주로 사용하는 자료구조는?',
        options: ['스택', '큐', '트리', '힙'],
        answer: 1,
        explanation: 'BFS는 너비 우선 탐색으로 큐(Queue)를 사용하고, DFS는 스택(Stack)이나 재귀를 사용합니다.',
        difficulty: '중',
        tags: ['그래프', 'BFS']
      },
      {
        id: 'INFO_028',
        subject: '프로그래밍 언어 활용',
        question: 'Java의 가비지 컬렉션(Garbage Collection)에 대한 설명으로 틀린 것은?',
        options: ['자동 메모리 관리 기능', '더 이상 참조되지 않는 객체 해제', '프로그래머가 명시적으로 호출 필수', 'JVM이 자동으로 수행'],
        answer: 2,
        explanation: '가비지 컬렉션은 JVM이 자동으로 수행하며, 프로그래머가 명시적으로 호출하지 않아도 됩니다.',
        difficulty: '중',
        tags: ['Java', 'GC']
      },
      {
        id: 'INFO_029',
        subject: '정보시스템 구축관리',
        question: '소프트웨어 테스트 기법 중 화이트박스 테스트에 해당하는 것은?',
        options: ['동등 분할 테스트', '경계값 분석', '조건/결정 커버리지', '상태 전이 테스트'],
        answer: 2,
        explanation: '조건/결정 커버리지는 화이트박스 테스트 기법입니다. 동등 분할, 경계값 분석, 상태 전이는 블랙박스 기법입니다.',
        difficulty: '중',
        tags: ['테스트', '화이트박스']
      },
      {
        id: 'INFO_030',
        subject: '정보시스템 구축관리',
        question: 'HTTPS 프로토콜에서 사용하는 기본 포트 번호는?',
        options: ['80', '21', '443', '22'],
        answer: 2,
        explanation: 'HTTPS는 443 포트, HTTP는 80 포트, FTP는 21 포트, SSH는 22 포트를 사용합니다.',
        difficulty: '하',
        tags: ['네트워크', '포트']
      },
      {
        id: 'INFO_031',
        subject: '정보시스템 구축관리',
        question: 'TCP와 UDP의 차이점으로 옳은 것은?',
        options: ['TCP는 비연결형, UDP는 연결형', 'TCP는 신뢰성 보장, UDP는 신뢰성 미보장', 'TCP가 UDP보다 빠름', 'UDP는 3-way handshake 사용'],
        answer: 1,
        explanation: 'TCP는 연결형 프로토콜로 신뢰성을 보장하고, UDP는 비연결형으로 신뢰성을 보장하지 않습니다.',
        difficulty: '중',
        tags: ['TCP', 'UDP']
      },
      {
        id: 'INFO_032',
        subject: '정보시스템 구축관리',
        question: 'SQL 인젝션(SQL Injection) 공격을 방지하는 방법으로 적절하지 않은 것은?',
        options: ['입력값 검증', '파라미터화된 쿼리 사용', '저장 프로시저 활용', '에러 메시지 상세 출력'],
        answer: 3,
        explanation: '에러 메시지를 상세히 출력하면 공격자에게 정보를 제공할 수 있으므로 적절하지 않습니다.',
        difficulty: '중',
        tags: ['보안', 'SQL인젝션']
      },
      {
        id: 'INFO_033',
        subject: '정보시스템 구축관리',
        question: '대칭키 암호화 알고리즘이 아닌 것은?',
        options: ['AES', 'DES', '3DES', 'RSA'],
        answer: 3,
        explanation: 'RSA는 비대칭키(공개키) 암호화 알고리즘입니다. AES, DES, 3DES는 대칭키 알고리즘입니다.',
        difficulty: '중',
        tags: ['암호화', '보안']
      },
      {
        id: 'INFO_034',
        subject: '정보시스템 구축관리',
        question: 'XSS(Cross-Site Scripting) 공격의 유형이 아닌 것은?',
        options: ['Stored XSS', 'Reflected XSS', 'DOM-based XSS', 'Buffer Overflow XSS'],
        answer: 3,
        explanation: 'XSS는 Stored, Reflected, DOM-based 세 가지 유형이 있습니다. Buffer Overflow는 다른 종류의 공격입니다.',
        difficulty: '상',
        tags: ['보안', 'XSS']
      },
      {
        id: 'INFO_035',
        subject: '소프트웨어 설계',
        question: '마이크로서비스 아키텍처의 특징이 아닌 것은?',
        options: ['서비스 간 독립적 배포', '분산 데이터 관리', '강한 결합(Tight Coupling)', 'API를 통한 통신'],
        answer: 2,
        explanation: '마이크로서비스는 느슨한 결합(Loose Coupling)을 특징으로 합니다.',
        difficulty: '중',
        tags: ['아키텍처', '마이크로서비스']
      },
      {
        id: 'INFO_036',
        subject: '소프트웨어 설계',
        question: 'REST API의 특징이 아닌 것은?',
        options: ['Stateless', 'Uniform Interface', 'Session 기반 상태 관리', 'Layered System'],
        answer: 2,
        explanation: 'REST는 Stateless(무상태성)를 특징으로 하며, 세션 기반 상태 관리를 사용하지 않습니다.',
        difficulty: '중',
        tags: ['REST', 'API']
      },
      {
        id: 'INFO_037',
        subject: '소프트웨어 설계',
        question: 'MVC 패턴에서 View의 역할은?',
        options: ['비즈니스 로직 처리', '데이터베이스 접근', '사용자 인터페이스 표시', '요청 흐름 제어'],
        answer: 2,
        explanation: 'View는 사용자 인터페이스를 표시하고, Model은 데이터와 로직, Controller는 요청 흐름을 제어합니다.',
        difficulty: '하',
        tags: ['MVC', '디자인패턴']
      },
      {
        id: 'INFO_038',
        subject: '데이터베이스 구축',
        question: '데이터베이스 회복 기법 중 검사점(Checkpoint) 기법의 장점은?',
        options: ['회복 시간 단축', '로그 기록 불필요', '트랜잭션 동시 실행 증가', '디스크 공간 절약'],
        answer: 0,
        explanation: '검사점 기법은 회복 시 검사점 이전의 트랜잭션은 처리할 필요가 없어 회복 시간이 단축됩니다.',
        difficulty: '상',
        tags: ['회복', '데이터베이스']
      },
      {
        id: 'INFO_039',
        subject: '데이터베이스 구축',
        question: '교착상태(Deadlock) 해결 방법이 아닌 것은?',
        options: ['예방(Prevention)', '회피(Avoidance)', '탐지(Detection)', '지연(Delay)'],
        answer: 3,
        explanation: '교착상태 해결 방법에는 예방, 회피, 탐지 및 복구가 있습니다.',
        difficulty: '중',
        tags: ['교착상태', '데이터베이스']
      },
      {
        id: 'INFO_040',
        subject: '데이터베이스 구축',
        question: '관계대수 연산 중 순수 관계 연산이 아닌 것은?',
        options: ['선택(Select)', '추출(Project)', '조인(Join)', '합집합(Union)'],
        answer: 3,
        explanation: '합집합, 교집합, 차집합, 카티션 프로덕트는 일반 집합 연산이고, 선택, 추출, 조인, 디비전은 순수 관계 연산입니다.',
        difficulty: '상',
        tags: ['관계대수', '데이터베이스']
      },
      {
        id: 'INFO_041',
        subject: '프로그래밍 언어 활용',
        question: '다익스트라(Dijkstra) 알고리즘의 용도는?',
        options: ['정렬', '최단 경로 탐색', '최소 신장 트리', '이진 탐색'],
        answer: 1,
        explanation: '다익스트라 알고리즘은 가중치가 있는 그래프에서 최단 경로를 찾는 알고리즘입니다.',
        difficulty: '중',
        tags: ['그래프', '다익스트라']
      },
      {
        id: 'INFO_042',
        subject: '프로그래밍 언어 활용',
        question: '동적 프로그래밍(Dynamic Programming)의 특징이 아닌 것은?',
        options: ['최적 부분 구조', '중복 부분 문제', '분할 후 독립적 해결', '메모이제이션 활용'],
        answer: 2,
        explanation: '분할 정복은 부분 문제가 독립적이지만, 동적 프로그래밍은 부분 문제가 중복됩니다.',
        difficulty: '상',
        tags: ['DP', '알고리즘']
      },
      {
        id: 'INFO_043',
        subject: '프로그래밍 언어 활용',
        question: '힙(Heap) 자료구조의 특징으로 옳은 것은?',
        options: ['FIFO 구조', '완전 이진 트리', '선형 구조', '해시 기반'],
        answer: 1,
        explanation: '힙은 완전 이진 트리 형태로, 최대 힙 또는 최소 힙의 성질을 만족합니다.',
        difficulty: '중',
        tags: ['힙', '자료구조']
      },
      {
        id: 'INFO_044',
        subject: '정보시스템 구축관리',
        question: 'CI/CD에서 CI의 의미는?',
        options: ['Continuous Integration', 'Continuous Implementation', 'Code Integration', 'Code Inspection'],
        answer: 0,
        explanation: 'CI는 Continuous Integration(지속적 통합)의 약자입니다.',
        difficulty: '하',
        tags: ['CI/CD', 'DevOps']
      },
      {
        id: 'INFO_045',
        subject: '정보시스템 구축관리',
        question: '도커(Docker) 컨테이너의 특징이 아닌 것은?',
        options: ['가벼움', '이식성', '하드웨어 가상화', '격리된 환경'],
        answer: 2,
        explanation: '도커는 OS 수준 가상화로 하드웨어 가상화가 아닌 컨테이너 기반입니다.',
        difficulty: '중',
        tags: ['Docker', '컨테이너']
      },
      {
        id: 'INFO_046',
        subject: '정보시스템 구축관리',
        question: 'Git에서 원격 저장소의 변경사항을 로컬로 가져오는 명령어는?',
        options: ['git push', 'git pull', 'git commit', 'git add'],
        answer: 1,
        explanation: 'git pull은 원격 저장소의 변경사항을 로컬로 가져오고, git push는 로컬의 변경사항을 원격으로 보냅니다.',
        difficulty: '하',
        tags: ['Git', '버전관리']
      },
      {
        id: 'INFO_047',
        subject: '소프트웨어 설계',
        question: '소프트웨어 개발 생명주기(SDLC) 모델 중 폭포수 모델의 단점은?',
        options: ['단계별 산출물 명확', '요구사항 변경 대응 어려움', '관리가 용이', '이해하기 쉬움'],
        answer: 1,
        explanation: '폭포수 모델은 순차적으로 진행되어 이전 단계로 돌아가기 어려워 요구사항 변경 대응이 어렵습니다.',
        difficulty: '하',
        tags: ['SDLC', '폭포수']
      },
      {
        id: 'INFO_048',
        subject: '소프트웨어 설계',
        question: '스크럼(Scrum)에서 개발 주기를 의미하는 용어는?',
        options: ['백로그(Backlog)', '스프린트(Sprint)', '칸반(Kanban)', '데일리 미팅'],
        answer: 1,
        explanation: '스프린트는 스크럼에서 정해진 기간(보통 2~4주) 동안의 개발 주기를 의미합니다.',
        difficulty: '중',
        tags: ['스크럼', '애자일']
      },
      {
        id: 'INFO_049',
        subject: '데이터베이스 구축',
        question: 'NoSQL 데이터베이스의 특징이 아닌 것은?',
        options: ['수평적 확장 용이', '스키마 유연성', 'ACID 완벽 보장', '대용량 데이터 처리'],
        answer: 2,
        explanation: 'NoSQL은 일반적으로 ACID보다 BASE 모델을 따르며, 완벽한 ACID 보장을 하지 않습니다.',
        difficulty: '중',
        tags: ['NoSQL', '데이터베이스']
      },
      {
        id: 'INFO_050',
        subject: '정보시스템 구축관리',
        question: 'ISO/IEC 27001은 무엇에 대한 국제 표준인가?',
        options: ['소프트웨어 품질', '정보보안 관리체계', '프로젝트 관리', '소프트웨어 개발 프로세스'],
        answer: 1,
        explanation: 'ISO/IEC 27001은 정보보안 관리체계(ISMS)에 대한 국제 표준입니다.',
        difficulty: '중',
        tags: ['표준', '보안']
      }
    ],
    refrigeration: [
      {
        id: 'REF_001',
        subject: '냉동공조이론',
        question: '냉동 사이클에서 압축기의 역할은?',
        options: ['저온저압 증기를 고온고압 증기로 압축', '고온고압 액체를 저온저압 액체로 팽창', '냉매를 증발시켜 냉각', '냉매를 응축시켜 열 방출'],
        answer: 0,
        explanation: '압축기는 증발기에서 나온 저온저압의 냉매 증기를 고온고압의 증기로 압축하는 역할을 합니다.',
        difficulty: '하',
        tags: ['냉동사이클', '압축기']
      },
      {
        id: 'REF_002',
        subject: '냉동공조이론',
        question: 'COP(성적계수)를 나타내는 식으로 올바른 것은?',
        options: ['COP = 압축일 / 냉동효과', 'COP = 냉동효과 / 압축일', 'COP = 응축열량 / 증발열량', 'COP = 압축비 × 냉동효과'],
        answer: 1,
        explanation: 'COP(Coefficient of Performance, 성적계수)는 냉동효과를 압축기 소요동력으로 나눈 값입니다.',
        difficulty: '중',
        tags: ['COP', '성적계수']
      },
      {
        id: 'REF_003',
        subject: '냉동공조장치',
        question: '왕복동 압축기의 특징이 아닌 것은?',
        options: ['소형에서 대형까지 제작 가능', '압축비가 높아도 사용 가능', '진동과 소음이 거의 없음', '효율이 비교적 높음'],
        answer: 2,
        explanation: '왕복동 압축기는 피스톤의 왕복운동으로 인해 진동과 소음이 큰 것이 단점입니다.',
        difficulty: '하',
        tags: ['압축기', '왕복동']
      },
      {
        id: 'REF_004',
        subject: '냉동공조장치',
        question: '증발기의 종류가 아닌 것은?',
        options: ['건식 증발기', '만액식 증발기', '직접팽창식 증발기', '압축식 증발기'],
        answer: 3,
        explanation: '증발기의 종류에는 건식(직접팽창식), 만액식(액식), 강제순환식 등이 있습니다.',
        difficulty: '중',
        tags: ['증발기', '분류']
      },
      {
        id: 'REF_005',
        subject: '전기제어공학',
        question: '3상 유도전동기에서 회전방향을 바꾸는 방법은?',
        options: ['전압을 높인다', '주파수를 변경한다', '3상 중 2상의 결선을 바꾼다', '중성선을 접지한다'],
        answer: 2,
        explanation: '3상 유도전동기의 회전방향을 바꾸려면 3상 전원선 중 임의의 2개 상을 바꿔 결선하면 됩니다.',
        difficulty: '중',
        tags: ['전동기', '제어']
      },
      {
        id: 'REF_006',
        subject: '전기제어공학',
        question: '전자접촉기(MC)의 주요 용도는?',
        options: ['전류 측정', '전압 조정', '전동기의 원격 제어', '전력 변환'],
        answer: 2,
        explanation: '전자접촉기(Magnetic Contactor, MC)는 전동기를 원격으로 ON/OFF 제어하는 장치입니다.',
        difficulty: '하',
        tags: ['전자접촉기', 'MC']
      },
      {
        id: 'REF_007',
        subject: '냉동공조관련 법규',
        question: '고압가스 안전관리법상 냉동능력 20RT 이상의 냉동기를 설치한 경우 반드시 선임해야 하는 사람은?',
        options: ['냉동기계책임자', '냉동설비기사', '안전관리자', '품질관리자'],
        answer: 0,
        explanation: '고압가스 안전관리법에 따라 냉동능력 20RT(톤) 이상의 냉동기를 설치·운영하는 경우 냉동기계책임자를 선임해야 합니다.',
        difficulty: '중',
        tags: ['법규', '책임자']
      },
      {
        id: 'REF_008',
        subject: '냉동공조관련 법규',
        question: '몬트리올 의정서에서 규제하는 물질은?',
        options: ['이산화탄소', '메탄', 'CFC 및 HCFC', '아산화질소'],
        answer: 2,
        explanation: '몬트리올 의정서는 오존층 파괴물질인 CFC(염화불화탄소), HCFC(수소염화불화탄소) 등의 생산과 사용을 규제하는 국제 협약입니다.',
        difficulty: '상',
        tags: ['법규', '환경']
      },
      {
        id: 'REF_009',
        subject: '냉동공조이론',
        question: '습공기선도에서 상대습도 100%인 선은?',
        options: ['건구온도선', '습구온도선', '포화선', '엔탈피선'],
        answer: 2,
        explanation: '습공기선도에서 상대습도 100%인 선을 포화선이라고 합니다.',
        difficulty: '중',
        tags: ['습공기', '선도']
      },
      {
        id: 'REF_010',
        subject: '냉동공조장치',
        question: '응축기에서 냉매가 방출하는 열량은?',
        options: ['냉동효과만', '압축일만', '냉동효과 + 압축일', '냉동효과 - 압축일'],
        answer: 2,
        explanation: '응축기에서 방출되는 열량(응축열량)은 증발기에서 흡수한 열량(냉동효과)과 압축기에서 투입된 일(압축일)의 합입니다.',
        difficulty: '중',
        tags: ['응축기', '열량']
      },
      {
        id: 'REF_011',
        subject: '냉동공조이론',
        question: '카르노 사이클의 구성 과정으로 옳은 것은?',
        options: ['등온압축 → 단열압축 → 등온팽창 → 단열팽창', '단열압축 → 등온방열 → 단열팽창 → 등온흡열', '등압가열 → 등온팽창 → 등압냉각 → 등온압축', '등적가열 → 단열팽창 → 등적냉각 → 단열압축'],
        answer: 1,
        explanation: '카르노 사이클은 단열압축 → 등온방열(응축) → 단열팽창 → 등온흡열(증발) 과정으로 구성됩니다.',
        difficulty: '상',
        tags: ['카르노', '사이클']
      },
      {
        id: 'REF_012',
        subject: '냉동공조이론',
        question: '냉동능력 1RT(냉동톤)은 얼마인가?',
        options: ['약 1.16kW', '약 2.33kW', '약 3.52kW', '약 4.69kW'],
        answer: 2,
        explanation: '1RT = 3024kcal/h ≒ 3.52kW입니다. 0℃의 물 1톤을 24시간 동안 0℃의 얼음으로 만드는 냉동능력입니다.',
        difficulty: '중',
        tags: ['냉동톤', '단위']
      },
      {
        id: 'REF_013',
        subject: '냉동공조이론',
        question: '역카르노 사이클에 대한 설명으로 옳은 것은?',
        options: ['열기관의 이론적 사이클', '냉동기의 이상적 사이클', '실제 냉동기에 적용 가능', '증기 사이클의 일종'],
        answer: 1,
        explanation: '역카르노 사이클은 냉동기의 이론상 최대 효율을 나타내는 이상적인 사이클입니다.',
        difficulty: '중',
        tags: ['역카르노', '사이클']
      },
      {
        id: 'REF_014',
        subject: '냉동공조이론',
        question: '증발 온도가 일정할 때 응축 온도가 높아지면?',
        options: ['COP 증가', 'COP 감소', '냉동효과 증가', '압축비 감소'],
        answer: 1,
        explanation: '응축 온도가 높아지면 압축비가 증가하고 COP(성적계수)는 감소합니다.',
        difficulty: '중',
        tags: ['COP', '온도']
      },
      {
        id: 'REF_015',
        subject: '냉동공조이론',
        question: '과냉각(Subcooling)의 효과는?',
        options: ['냉동효과 증가', '압축일 증가', 'COP 감소', '플래시 가스 증가'],
        answer: 0,
        explanation: '과냉각은 응축기에서 액체 냉매를 더 냉각시켜 냉동효과를 증가시키고 COP를 향상시킵니다.',
        difficulty: '중',
        tags: ['과냉각', '효과']
      },
      {
        id: 'REF_016',
        subject: '냉동공조이론',
        question: '과열(Superheating)에 대한 설명으로 틀린 것은?',
        options: ['증발기 출구에서 냉매를 가열', '액압축 방지', '흡입 가스 비체적 증가', '냉동효과 감소'],
        answer: 3,
        explanation: '과열은 냉동효과를 약간 증가시키지만, 과도한 과열은 압축기에 부담을 줍니다.',
        difficulty: '상',
        tags: ['과열', '효과']
      },
      {
        id: 'REF_017',
        subject: '냉동공조이론',
        question: '흡수식 냉동기에서 흡수제로 사용되지 않는 것은?',
        options: ['리튬브로마이드(LiBr)', '암모니아(NH₃)', '물(H₂O)', '황산(H₂SO₄)'],
        answer: 3,
        explanation: '흡수식 냉동기에서는 물-리튬브로마이드, 암모니아-물 조합이 사용됩니다.',
        difficulty: '중',
        tags: ['흡수식', '냉동기']
      },
      {
        id: 'REF_018',
        subject: '냉동공조이론',
        question: '열펌프의 성능계수(COP)를 나타내는 식은?',
        options: ['냉동효과 / 압축일', '방열량 / 압축일', '압축일 / 냉동효과', '냉동효과 / 방열량'],
        answer: 1,
        explanation: '열펌프의 COP는 방열량(난방 효과)을 압축일로 나눈 값입니다.',
        difficulty: '중',
        tags: ['열펌프', 'COP']
      },
      {
        id: 'REF_019',
        subject: '냉동공조장치',
        question: '스크류 압축기의 특징이 아닌 것은?',
        options: ['연속 압축으로 맥동이 적음', '고속 회전 가능', '흡입 밸브와 토출 밸브 필요', '오일 주입식이 많음'],
        answer: 2,
        explanation: '스크류 압축기는 흡입/토출 밸브가 없이 포트 방식으로 작동합니다.',
        difficulty: '중',
        tags: ['스크류 압축기', '특징']
      },
      {
        id: 'REF_020',
        subject: '냉동공조장치',
        question: '원심식(터보) 압축기의 특징으로 옳은 것은?',
        options: ['소용량에 적합', '압축비가 매우 높음', '대용량에 적합', '구조가 복잡함'],
        answer: 2,
        explanation: '원심식 압축기는 대용량 냉동기에 적합하며, 고속 회전으로 연속 압축합니다.',
        difficulty: '중',
        tags: ['원심압축기', '터보']
      },
      {
        id: 'REF_021',
        subject: '냉동공조장치',
        question: '팽창밸브의 역할이 아닌 것은?',
        options: ['냉매 유량 조절', '냉매 압력 강하', '냉매 증발', '과열도 조절'],
        answer: 2,
        explanation: '냉매의 증발은 증발기에서 일어나며, 팽창밸브는 압력 강하와 유량 조절 역할을 합니다.',
        difficulty: '하',
        tags: ['팽창밸브', '역할']
      },
      {
        id: 'REF_022',
        subject: '냉동공조장치',
        question: '온도식 자동팽창밸브(TEV)의 감온통 설치 위치는?',
        options: ['압축기 흡입측', '증발기 출구측', '응축기 입구측', '팽창밸브 전단'],
        answer: 1,
        explanation: '감온통은 증발기 출구의 과열도를 감지하기 위해 증발기 출구 배관에 설치합니다.',
        difficulty: '중',
        tags: ['TEV', '감온통']
      },
      {
        id: 'REF_023',
        subject: '냉동공조장치',
        question: '핀 코일형 증발기의 특징으로 틀린 것은?',
        options: ['공기 냉각용', '전열 면적 증대', '서리 발생 가능', '액체 냉각 전용'],
        answer: 3,
        explanation: '핀 코일형 증발기는 공기 냉각용이며, 액체 냉각에는 셸 앤 튜브형 등이 사용됩니다.',
        difficulty: '중',
        tags: ['증발기', '핀코일']
      },
      {
        id: 'REF_024',
        subject: '냉동공조장치',
        question: '수냉식 응축기와 공랭식 응축기의 비교로 옳은 것은?',
        options: ['수냉식이 설치 면적이 더 큼', '공랭식이 냉각 효율이 더 높음', '수냉식이 응축 온도가 더 낮음', '공랭식이 운전 비용이 더 저렴'],
        answer: 2,
        explanation: '수냉식 응축기는 물의 열전달 효율이 높아 응축 온도를 더 낮출 수 있습니다.',
        difficulty: '중',
        tags: ['응축기', '비교']
      },
      {
        id: 'REF_025',
        subject: '냉동공조장치',
        question: '냉동장치의 부속기기 중 수액기(Receiver)의 역할은?',
        options: ['냉매 가스 저장', '오일 분리', '액냉매 저장', '불응축 가스 제거'],
        answer: 2,
        explanation: '수액기는 응축된 액체 냉매를 저장하여 부하 변동에 대응합니다.',
        difficulty: '하',
        tags: ['수액기', '부속기기']
      },
      {
        id: 'REF_026',
        subject: '냉동공조장치',
        question: '유분리기(Oil Separator)의 설치 위치는?',
        options: ['압축기와 응축기 사이', '응축기와 팽창밸브 사이', '팽창밸브와 증발기 사이', '증발기와 압축기 사이'],
        answer: 0,
        explanation: '유분리기는 압축기 토출측에 설치하여 토출 가스에서 오일을 분리합니다.',
        difficulty: '중',
        tags: ['유분리기', '위치']
      },
      {
        id: 'REF_027',
        subject: '냉동공조장치',
        question: '드라이어(Dryer)의 역할은?',
        options: ['냉매 압력 조절', '냉매 중 수분 제거', '냉매 온도 조절', '냉매 유량 측정'],
        answer: 1,
        explanation: '드라이어(건조기)는 냉매 중의 수분을 흡착하여 제거하는 역할을 합니다.',
        difficulty: '하',
        tags: ['드라이어', '수분제거']
      },
      {
        id: 'REF_028',
        subject: '냉동공조장치',
        question: '냉매 R-410A의 특징으로 옳은 것은?',
        options: ['단일 냉매', 'ODP가 높음', 'R-22 대체 냉매', '저압 냉매'],
        answer: 2,
        explanation: 'R-410A는 R-22 대체 냉매로, 혼합냉매이며 ODP가 0입니다.',
        difficulty: '중',
        tags: ['R-410A', '냉매']
      },
      {
        id: 'REF_029',
        subject: '냉동공조장치',
        question: '냉매의 구비조건이 아닌 것은?',
        options: ['증발 잠열이 클 것', '비등점이 높을 것', '임계 온도가 높을 것', '화학적으로 안정할 것'],
        answer: 1,
        explanation: '냉매는 비등점이 낮아야 상온에서 쉽게 증발할 수 있습니다.',
        difficulty: '중',
        tags: ['냉매', '조건']
      },
      {
        id: 'REF_030',
        subject: '전기제어공학',
        question: 'Y-Δ 기동 방식의 목적은?',
        options: ['기동 토크 증가', '기동 전류 감소', '운전 속도 증가', '정격 전압 상승'],
        answer: 1,
        explanation: 'Y-Δ 기동은 기동 시 Y결선으로 전압을 1/√3로 낮춰 기동 전류를 감소시킵니다.',
        difficulty: '중',
        tags: ['Y-Δ 기동', '전동기']
      },
      {
        id: 'REF_031',
        subject: '전기제어공학',
        question: '인버터(Inverter)의 주요 기능은?',
        options: ['직류를 교류로 변환', '전압 증폭', '전류 측정', '저항 조절'],
        answer: 0,
        explanation: '인버터는 직류(DC)를 교류(AC)로 변환하여 전동기 속도를 제어합니다.',
        difficulty: '중',
        tags: ['인버터', '전력변환']
      },
      {
        id: 'REF_032',
        subject: '전기제어공학',
        question: '열동형 과부하계전기(Thermal Overload Relay)의 동작 원리는?',
        options: ['전압 검출', '전류에 의한 바이메탈 변형', '주파수 변화', '저항값 측정'],
        answer: 1,
        explanation: '열동형 계전기는 과전류에 의해 바이메탈이 가열되어 변형되면서 접점을 개폐합니다.',
        difficulty: '중',
        tags: ['과부하계전기', '바이메탈']
      },
      {
        id: 'REF_033',
        subject: '전기제어공학',
        question: 'PID 제어에서 I(적분) 동작의 역할은?',
        options: ['빠른 응답', '잔류 편차 제거', '진동 억제', '노이즈 제거'],
        answer: 1,
        explanation: '적분 동작은 시간에 따라 축적된 오차를 제거하여 잔류 편차를 없앱니다.',
        difficulty: '상',
        tags: ['PID', '제어']
      },
      {
        id: 'REF_034',
        subject: '전기제어공학',
        question: '전자개폐기(Magnetic Switch)의 구성요소가 아닌 것은?',
        options: ['전자접촉기(MC)', '열동과부하계전기(THR)', '인버터', '조작버튼'],
        answer: 2,
        explanation: '전자개폐기는 전자접촉기와 열동과부하계전기의 조합이며, 인버터는 별도 장치입니다.',
        difficulty: '중',
        tags: ['전자개폐기', '구성']
      },
      {
        id: 'REF_035',
        subject: '전기제어공학',
        question: '배선용 차단기(MCCB)의 주요 기능은?',
        options: ['전압 조정', '과전류 및 단락 보호', '역률 개선', '전력 계량'],
        answer: 1,
        explanation: 'MCCB는 과전류 및 단락 전류 발생 시 회로를 차단하여 보호합니다.',
        difficulty: '하',
        tags: ['MCCB', '차단기']
      },
      {
        id: 'REF_036',
        subject: '전기제어공학',
        question: '접지의 목적이 아닌 것은?',
        options: ['감전 방지', '기기 보호', '전력 소비 감소', '낙뢰 보호'],
        answer: 2,
        explanation: '접지는 감전 방지, 기기 보호, 낙뢰 보호 등의 목적이며, 전력 소비와는 관련이 없습니다.',
        difficulty: '하',
        tags: ['접지', '안전']
      },
      {
        id: 'REF_037',
        subject: '전기제어공학',
        question: '누전차단기(ELB)의 동작 원리는?',
        options: ['과전압 검출', '영상전류 검출', '주파수 변화 검출', '온도 상승 검출'],
        answer: 1,
        explanation: '누전차단기는 누전 시 발생하는 영상전류(누설전류)를 검출하여 동작합니다.',
        difficulty: '중',
        tags: ['누전차단기', 'ELB']
      },
      {
        id: 'REF_038',
        subject: '냉동공조관련 법규',
        question: '냉동능력 산정에서 왕복동 압축기의 냉동능력 계산식에 포함되지 않는 것은?',
        options: ['실린더 내경', '행정', '기통수', '응축 온도'],
        answer: 3,
        explanation: '왕복동 압축기 냉동능력은 실린더 내경, 행정, 기통수, 회전수로 계산합니다.',
        difficulty: '상',
        tags: ['냉동능력', '계산']
      },
      {
        id: 'REF_039',
        subject: '냉동공조관련 법규',
        question: '고압가스 안전관리법상 냉동기의 정기검사 주기는?',
        options: ['6개월', '1년', '2년', '3년'],
        answer: 1,
        explanation: '냉동기 정기검사는 1년마다 실시해야 합니다.',
        difficulty: '중',
        tags: ['법규', '정기검사']
      },
      {
        id: 'REF_040',
        subject: '냉동공조관련 법규',
        question: 'GWP(지구온난화지수)가 가장 낮은 냉매는?',
        options: ['R-410A', 'R-134a', 'R-32', 'R-404A'],
        answer: 2,
        explanation: 'R-32의 GWP는 약 675로, R-410A(2088), R-134a(1430), R-404A(3922)보다 낮습니다.',
        difficulty: '상',
        tags: ['GWP', '환경']
      },
      {
        id: 'REF_041',
        subject: '냉동공조이론',
        question: '습공기의 성질 중 노점온도에 대한 설명으로 옳은 것은?',
        options: ['공기 온도와 같음', '포화 상태가 되는 온도', '습구온도보다 높음', '건구온도보다 높음'],
        answer: 1,
        explanation: '노점온도는 공기가 냉각되어 포화 상태(상대습도 100%)가 되는 온도입니다.',
        difficulty: '중',
        tags: ['노점온도', '습공기']
      },
      {
        id: 'REF_042',
        subject: '냉동공조이론',
        question: '현열비(SHF)가 1인 경우는?',
        options: ['잠열만 있는 경우', '현열만 있는 경우', '현열과 잠열이 같은 경우', '열 전달이 없는 경우'],
        answer: 1,
        explanation: 'SHF = 현열/(현열+잠열)이므로, SHF가 1이면 잠열이 0이고 현열만 있는 경우입니다.',
        difficulty: '상',
        tags: ['현열비', 'SHF']
      },
      {
        id: 'REF_043',
        subject: '냉동공조이론',
        question: '에어컨 냉방 시 실내 쾌적 조건으로 적합한 것은?',
        options: ['온도 30℃, 습도 70%', '온도 26℃, 습도 50%', '온도 22℃, 습도 30%', '온도 18℃, 습도 80%'],
        answer: 1,
        explanation: '일반적인 실내 쾌적 조건은 온도 24~26℃, 상대습도 40~60%입니다.',
        difficulty: '하',
        tags: ['쾌적조건', '냉방']
      },
      {
        id: 'REF_044',
        subject: '냉동공조장치',
        question: 'VAV(Variable Air Volume) 시스템의 특징으로 옳은 것은?',
        options: ['풍량 일정, 온도 변화', '풍량 변화, 온도 일정', '풍량과 온도 모두 일정', '풍량과 온도 모두 변화'],
        answer: 1,
        explanation: 'VAV 시스템은 급기 온도를 일정하게 유지하고 풍량을 변화시켜 부하에 대응합니다.',
        difficulty: '중',
        tags: ['VAV', '공조시스템']
      },
      {
        id: 'REF_045',
        subject: '냉동공조장치',
        question: 'AHU(Air Handling Unit)의 구성요소가 아닌 것은?',
        options: ['냉각코일', '가열코일', '송풍기', '압축기'],
        answer: 3,
        explanation: 'AHU는 냉각/가열코일, 필터, 송풍기 등으로 구성되며, 압축기는 냉동기에 포함됩니다.',
        difficulty: '중',
        tags: ['AHU', '공조기']
      },
      {
        id: 'REF_046',
        subject: '냉동공조장치',
        question: '덕트의 정압손실과 관련 없는 것은?',
        options: ['덕트 길이', '풍속', '덕트 단면적', '냉매 종류'],
        answer: 3,
        explanation: '덕트 정압손실은 덕트 길이, 풍속, 단면적, 형상 등에 영향을 받으며 냉매와는 무관합니다.',
        difficulty: '중',
        tags: ['덕트', '압력손실']
      },
      {
        id: 'REF_047',
        subject: '전기제어공학',
        question: '전동기의 역률 개선 방법으로 옳은 것은?',
        options: ['저항기 설치', '콘덴서 설치', '다이오드 설치', '퓨즈 설치'],
        answer: 1,
        explanation: '역률 개선을 위해 진상 콘덴서를 전동기와 병렬로 설치합니다.',
        difficulty: '중',
        tags: ['역률', '콘덴서']
      },
      {
        id: 'REF_048',
        subject: '전기제어공학',
        question: '전동기의 회전수를 구하는 공식에서 필요한 요소가 아닌 것은?',
        options: ['극수', '주파수', '슬립', '전압'],
        answer: 3,
        explanation: '유도전동기 회전수 = 120f(1-s)/p로, 주파수, 극수, 슬립이 필요하며 전압은 직접 관계없습니다.',
        difficulty: '상',
        tags: ['회전수', '전동기']
      },
      {
        id: 'REF_049',
        subject: '냉동공조관련 법규',
        question: '냉매 누출 시 응급조치로 적절하지 않은 것은?',
        options: ['환기 실시', '누출 부위 확인', '전기 스위치 조작', '관계자 외 대피'],
        answer: 2,
        explanation: '냉매 누출 시 전기 스위치 조작은 스파크를 발생시킬 수 있어 위험합니다.',
        difficulty: '중',
        tags: ['안전', '응급조치']
      },
      {
        id: 'REF_050',
        subject: '냉동공조관련 법규',
        question: '냉동 설비의 안전장치가 아닌 것은?',
        options: ['고압차단스위치', '저압차단스위치', '유량계', '안전밸브'],
        answer: 2,
        explanation: '유량계는 계측기기이며, 안전장치에는 고/저압차단스위치, 안전밸브, 용융플러그 등이 있습니다.',
        difficulty: '중',
        tags: ['안전장치', '법규']
      }
    ]
  }
};

// Buy Me a Coffee 후원 버튼 컴포넌트 (숨김형)
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
  const [screen, setScreen] = useState('home');
  const [selectedCert, setSelectedCert] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizMode, setQuizMode] = useState('all');
  const [filters, setFilters] = useState({ subject: 'all', difficulty: 'all' });
  const [stats, setStats] = useState({
    total: 0,
    correct: 0,
    streak: 0,
    maxStreak: 0,
    bySubject: {},
    byDifficulty: {},
    lastStudied: null,
    timeSpent: {},
    studyDays: []
  });
  const [questionStartTime, setQuestionStartTime] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  
  // 모의고사 모드 state
  const [mockExamMode, setMockExamMode] = useState(false);
  const [mockExamTimeLeft, setMockExamTimeLeft] = useState(null);
  const [mockExamStartTime, setMockExamStartTime] = useState(null);

  // 이미 제출된 문제 추적 (중복 통계 방지)
  const [submittedQuestions, setSubmittedQuestions] = useState(new Set());

  // 셔플된 선택지 저장 (문제 ID -> { shuffledOptions, answerMap })
  const [shuffledOptionsMap, setShuffledOptionsMap] = useState({});

  // 선택지 셔플 함수
  const shuffleOptions = (question) => {
    const indices = question.options.map((_, i) => i);
    // Fisher-Yates 셔플
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    const shuffledOptions = indices.map(i => question.options[i]);
    // indices[newPos] === originalAnswer 인 newPos를 찾아야 함
    // 즉, 셔플된 배열에서 원래 정답 인덱스가 어느 위치에 있는지
    const newAnswerIndex = indices.findIndex(i => i === question.answer);
    return { shuffledOptions, newAnswerIndex };
  };

  useEffect(() => {
    const saved = localStorage.getItem('wrongAnswers');
    if (saved) setWrongAnswers(JSON.parse(saved));
    
    const savedBookmarks = localStorage.getItem('bookmarks');
    if (savedBookmarks) setBookmarks(JSON.parse(savedBookmarks));
    
    const savedStats = localStorage.getItem('stats');
    if (savedStats) setStats(JSON.parse(savedStats));
  }, []);

  useEffect(() => {
    if (screen === 'quiz' && currentQuestion) {
      setQuestionStartTime(Date.now());
    }
  }, [currentQuestionIndex, screen]);

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

  const saveWrongAnswers = (answers) => localStorage.setItem('wrongAnswers', JSON.stringify(answers));
  const saveBookmarks = (marks) => localStorage.setItem('bookmarks', JSON.stringify(marks));
  const saveStats = (newStats) => localStorage.setItem('stats', JSON.stringify(newStats));

  const toggleBookmark = (questionId) => {
    const newBookmarks = bookmarks.includes(questionId)
      ? bookmarks.filter(id => id !== questionId)
      : [...bookmarks, questionId];
    setBookmarks(newBookmarks);
    saveBookmarks(newBookmarks);
  };

  const getFilteredQuestions = () => {
    let questions = sampleData.questions[selectedCert] || [];
    
    if (quizMode === 'wrong') {
      questions = questions.filter(q => wrongAnswers.includes(q.id));
    } else if (quizMode === 'bookmarked') {
      questions = questions.filter(q => bookmarks.includes(q.id));
    }

    if (filters.subject !== 'all') {
      questions = questions.filter(q => q.subject === filters.subject);
    }

    if (filters.difficulty !== 'all') {
      questions = questions.filter(q => q.difficulty === filters.difficulty);
    }

    return questions;
  };

  const currentQuestions = getFilteredQuestions();
  const currentQuestion = currentQuestions[currentQuestionIndex];

  // 현재 문제의 셔플된 옵션 가져오기
  const getShuffledData = () => {
    if (!currentQuestion) return null;
    if (shuffledOptionsMap[currentQuestion.id]) {
      return shuffledOptionsMap[currentQuestion.id];
    }
    // 아직 셔플되지 않았으면 셔플
    const shuffled = shuffleOptions(currentQuestion);
    setShuffledOptionsMap(prev => ({
      ...prev,
      [currentQuestion.id]: shuffled
    }));
    return shuffled;
  };

  const shuffledData = currentQuestion ? getShuffledData() : null;

  // 모든 문제 선택지 셔플 (퀴즈 시작 시)
  const shuffleAllQuestions = (questions) => {
    const newMap = {};
    questions.forEach(q => {
      newMap[q.id] = shuffleOptions(q);
    });
    setShuffledOptionsMap(newMap);
  };

  const startMockExam = (certId) => {
    const cert = sampleData.certificates.find(c => c.id === certId);
    const questions = sampleData.questions[certId] || [];
    setSelectedCert(certId);
    setMockExamMode(true);
    setMockExamTimeLeft(cert.examTime * 60);
    setMockExamStartTime(Date.now());
    setScreen('quiz');
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setShowExplanation(false);
    setQuizMode('all');
    setFilters({ subject: 'all', difficulty: 'all' });
    setSubmittedQuestions(new Set());
    shuffleAllQuestions(questions);
  };

  const handleCertSelect = (certId) => {
    const questions = sampleData.questions[certId] || [];
    setSelectedCert(certId);
    setMockExamMode(false);
    setScreen('quiz');
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setShowExplanation(false);
    setQuizMode('all');
    setFilters({ subject: 'all', difficulty: 'all' });
    setSubmittedQuestions(new Set());
    shuffleAllQuestions(questions);
  };

  const handleAnswerSelect = (optionIndex) => {
    if (showExplanation) return;
    
    // 답변만 업데이트 (모의고사 모드나 연습 모드에서 답변 변경 가능)
    setUserAnswers({
      ...userAnswers,
      [currentQuestion.id]: optionIndex
    });
  };

  const handleAnswerSubmit = () => {
    const userAnswer = userAnswers[currentQuestion.id];
    if (userAnswer === undefined) return;

    // 이미 제출된 문제는 통계 중복 방지
    if (submittedQuestions.has(currentQuestion.id)) return;

    // 제출된 문제로 기록
    setSubmittedQuestions(prev => new Set([...prev, currentQuestion.id]));

    const timeSpent = questionStartTime ? Math.floor((Date.now() - questionStartTime) / 1000) : 0;
    // 셔플된 정답 인덱스 사용
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
    
    setStats(newStats);
    saveStats(newStats);

    if (!isCorrect && !wrongAnswers.includes(currentQuestion.id)) {
      const newWrongAnswers = [...wrongAnswers, currentQuestion.id];
      setWrongAnswers(newWrongAnswers);
      saveWrongAnswers(newWrongAnswers);
    } else if (isCorrect && wrongAnswers.includes(currentQuestion.id)) {
      const newWrongAnswers = wrongAnswers.filter(id => id !== currentQuestion.id);
      setWrongAnswers(newWrongAnswers);
      saveWrongAnswers(newWrongAnswers);
    }

    if (!mockExamMode) {
      setShowExplanation(true);
    }
  };

  const handleNext = () => {
    // 모의고사 모드에서 답안 제출 처리
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

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setShowExplanation(false);
    }
  };

  const startQuizMode = (mode) => {
    if (mode === 'wrong' && wrongAnswers.length === 0) {
      alert('오답노트가 비어있습니다!');
      return;
    }
    if (mode === 'bookmarked' && bookmarks.length === 0) {
      alert('북마크한 문제가 없습니다!');
      return;
    }

    // 해당 모드의 문제들을 가져와서 셔플
    let questionsToShuffle = [];
    if (selectedCert) {
      const allQuestions = sampleData.questions[selectedCert] || [];
      if (mode === 'wrong') {
        questionsToShuffle = allQuestions.filter(q => wrongAnswers.includes(q.id));
      } else if (mode === 'bookmarked') {
        questionsToShuffle = allQuestions.filter(q => bookmarks.includes(q.id));
      } else {
        questionsToShuffle = allQuestions;
      }
      shuffleAllQuestions(questionsToShuffle);
    }

    setQuizMode(mode);
    setScreen('quiz');
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setShowExplanation(false);
    setSubmittedQuestions(new Set());
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case '하': return 'text-green-600';
      case '중': return 'text-yellow-600';
      case '상': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getDifficultyBg = (difficulty) => {
    switch(difficulty) {
      case '하': return 'bg-green-100';
      case '중': return 'bg-yellow-100';
      case '상': return 'bg-red-100';
      default: return 'bg-gray-100';
    }
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    if (hours > 0) {
      return `${hours}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

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

  // 오답 분석 함수
  const getWeakestTopics = () => {
    const subjectAccuracy = {};
    Object.entries(stats.bySubject).forEach(([subject, data]) => {
      if (data.total > 0) {
        subjectAccuracy[subject] = (data.correct / data.total) * 100;
      }
    });
    return Object.entries(subjectAccuracy)
      .sort((a, b) => a[1] - b[1])
      .slice(0, 3);
  };

  // Home Screen
  if (screen === 'home') {
    const daysSinceLastStudy = stats.lastStudied 
      ? Math.floor((Date.now() - new Date(stats.lastStudied).getTime()) / (1000 * 60 * 60 * 24))
      : null;
    const studyStreak = stats.studyDays?.length || 0;

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 pt-12">
            <div className="inline-block mb-4">
              <div className="text-5xl mb-4">📚</div>
            </div>
            <h1 className="text-5xl font-bold mb-3 text-gray-800">
              기사 자격증 학습 시스템
            </h1>
            <p className="text-lg text-gray-600">
              체계적인 학습으로 합격을 향해 나아갑니다
            </p>
            {daysSinceLastStudy !== null && (
              <div className="mt-4 flex items-center justify-center gap-4">
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

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {sampleData.certificates.map((cert) => {
              const certQuestions = sampleData.questions[cert.id] || [];
              const attemptedQuestions = certQuestions.filter(q => 
                stats.bySubject && Object.keys(stats.bySubject).some(subject => {
                  const subjectStat = stats.bySubject[subject];
                  return subjectStat && subjectStat.total > 0;
                })
              ).length;
              const progress = certQuestions.length > 0 ? Math.round((attemptedQuestions / certQuestions.length) * 100) : 0;

              return (
                <div key={cert.id} className="bg-white rounded-3xl p-8 shadow-lg">
                  <div className="text-6xl mb-4">{cert.icon}</div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">{cert.name}</h3>
                  <div className="text-sm text-gray-500 mb-4">{cert.subjects.length}개 과목</div>
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>학습 진도</span>
                      <span>{progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <button
                      onClick={() => handleCertSelect(cert.id)}
                      className="w-full px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl font-semibold transition-all"
                    >
                      연습 모드
                    </button>
                    <button
                      onClick={() => startMockExam(cert.id)}
                      className="w-full px-4 py-3 bg-white hover:bg-gray-50 text-indigo-600 border-2 border-indigo-600 rounded-xl font-semibold transition-all"
                    >
                      모의고사 ({cert.examTime}분)
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div 
              onClick={() => setScreen('stats')}
              className="cursor-pointer bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-8 text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <BarChart3 className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">학습 통계</h3>
              <p className="text-blue-100 text-sm">내 실력 확인</p>
              <div className="mt-4 text-3xl font-black">{stats.correct}/{stats.total}</div>
            </div>

            <div 
              onClick={() => startQuizMode('wrong')}
              className="cursor-pointer bg-gradient-to-br from-rose-500 to-pink-600 rounded-3xl p-8 text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <RefreshCw className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">오답노트</h3>
              <p className="text-pink-100 text-sm">틀린 문제 복습</p>
              <div className="mt-4 text-3xl font-black">{wrongAnswers.length}</div>
            </div>

            <div 
              onClick={() => startQuizMode('bookmarked')}
              className="cursor-pointer bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl p-8 text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <Star className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">북마크</h3>
              <p className="text-purple-100 text-sm">중요 문제</p>
              <div className="mt-4 text-3xl font-black">{bookmarks.length}</div>
            </div>

            <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl p-8 text-white shadow-lg">
              <Flame className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">연속 정답</h3>
              <p className="text-amber-100 text-sm">현재 기록</p>
              <div className="mt-4 text-3xl font-black">{stats.streak}🔥</div>
              <div className="text-sm text-amber-100 mt-2">최고: {stats.maxStreak}</div>
            </div>
          </div>

          {/* 약점 분석 */}
          {getWeakestTopics().length > 0 && (
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Brain className="w-8 h-8 text-red-500" />
                <h3 className="text-2xl font-bold text-gray-800">취약 과목 분석</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {getWeakestTopics().map(([subject, accuracy], index) => (
                  <div key={subject} className="bg-red-50 p-6 rounded-2xl border-2 border-red-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-800">{subject}</span>
                      <span className="text-2xl font-black text-red-600">{Math.round(accuracy)}%</span>
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

  // Quiz Screen
  if (screen === 'quiz' && currentQuestion) {
    const userAnswer = userAnswers[currentQuestion.id];
    const isAnswered = userAnswer !== undefined;
    // 셔플된 정답 인덱스 사용
    const correctAnswerIndex = shuffledOptionsMap[currentQuestion.id]?.newAnswerIndex ?? currentQuestion.answer;
    const isCorrect = userAnswer === correctAnswerIndex;
    const isBookmarked = bookmarks.includes(currentQuestion.id);
    const subjects = sampleData.certificates.find(c => c.id === selectedCert)?.subjects || [];

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <button
              onClick={() => setScreen('home')}
              className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              돌아가기
            </button>
            {!mockExamMode && (
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <Filter className="w-5 h-5 text-indigo-600" />
                <span className="font-medium text-gray-700">필터</span>
              </button>
            )}
          </div>

          {/* 모의고사 타이머 */}
          {mockExamMode && mockExamTimeLeft !== null && (
            <div className="bg-white rounded-3xl shadow-xl p-6 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Clock className="w-8 h-8 text-red-500" />
                  <span className="text-2xl font-bold text-gray-800">모의고사 진행 중</span>
                </div>
                <div className={`text-4xl font-black ${mockExamTimeLeft < 300 ? 'text-red-600 animate-pulse' : 'text-gray-800'}`}>
                  {formatTime(mockExamTimeLeft)}
                </div>
              </div>
            </div>
          )}

          {/* Filter Panel */}
          {showFilters && !mockExamMode && (
            <div className="bg-white rounded-3xl shadow-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">문제 필터링</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">과목별</label>
                  <select
                    value={filters.subject}
                    onChange={(e) => {
                      setFilters({ ...filters, subject: e.target.value });
                      setCurrentQuestionIndex(0);
                      setShowExplanation(false);
                    }}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:outline-none"
                  >
                    <option value="all">전체 과목</option>
                    {subjects.map(subject => (
                      <option key={subject} value={subject}>{subject}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">난이도별</label>
                  <select
                    value={filters.difficulty}
                    onChange={(e) => {
                      setFilters({ ...filters, difficulty: e.target.value });
                      setCurrentQuestionIndex(0);
                      setShowExplanation(false);
                    }}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:outline-none"
                  >
                    <option value="all">전체 난이도</option>
                    <option value="하">하</option>
                    <option value="중">중</option>
                    <option value="상">상</option>
                  </select>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                필터 적용 결과: 총 {currentQuestions.length}문제
              </div>
            </div>
          )}

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-6 h-6" />
                  <span className="font-semibold">
                    {sampleData.certificates.find(c => c.id === selectedCert)?.name}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className={`px-4 py-2 rounded-full text-sm font-bold ${getDifficultyBg(currentQuestion.difficulty)} ${getDifficultyColor(currentQuestion.difficulty)}`}>
                    난이도: {currentQuestion.difficulty}
                  </div>
                  {!mockExamMode && (
                    <button
                      onClick={() => toggleBookmark(currentQuestion.id)}
                      className={`p-2 rounded-full transition-all ${isBookmarked ? 'bg-yellow-400' : 'bg-white/20 hover:bg-white/30'}`}
                    >
                      <Star className={`w-5 h-5 ${isBookmarked ? 'text-white fill-white' : 'text-white'}`} />
                    </button>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm opacity-90">
                  {currentQuestion.subject}
                </div>
                <div className="flex items-center gap-4">
                  {!mockExamMode && (
                    <div className="flex items-center gap-2 text-sm opacity-90">
                      <Clock className="w-4 h-4" />
                      <span>{questionStartTime ? formatTime(Math.floor((Date.now() - questionStartTime) / 1000)) : '0:00'}</span>
                    </div>
                  )}
                  <div className="text-2xl font-bold">
                    {currentQuestionIndex + 1} / {currentQuestions.length}
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="h-2 bg-gray-200">
              <div 
                className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-500"
                style={{ width: `${((currentQuestionIndex + 1) / currentQuestions.length) * 100}%` }}
              />
            </div>

            {/* Question */}
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 leading-relaxed whitespace-pre-wrap">
                {currentQuestion.question}
              </h2>

              {/* Options */}
              <div className="space-y-4 mb-8">
                {(shuffledData?.shuffledOptions || currentQuestion.options).map((option, index) => {
                  const isSelected = userAnswer === index;
                  const correctAnswerIndex = shuffledData?.newAnswerIndex ?? currentQuestion.answer;
                  const isCorrectOption = index === correctAnswerIndex;

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
                      className={`w-full text-left p-6 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 ${optionClass} ${showExplanation ? 'cursor-default' : 'cursor-pointer'}`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${
                          showExplanation && isCorrectOption ? 'bg-green-500 text-white' :
                          showExplanation && isSelected && !isCorrect ? 'bg-red-500 text-white' :
                          isSelected ? 'bg-indigo-600 text-white' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {index + 1}
                        </div>
                        <div className="flex-1 text-lg font-medium text-gray-700">
                          {option}
                        </div>
                        {showExplanation && isCorrectOption && (
                          <CheckCircle className="w-6 h-6 text-green-500" />
                        )}
                        {showExplanation && isSelected && !isCorrect && (
                          <XCircle className="w-6 h-6 text-red-500" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Explanation (연습모드에서만) */}
              {showExplanation && !mockExamMode && (
                <div className={`p-6 rounded-2xl mb-8 ${isCorrect ? 'bg-green-50 border-2 border-green-200' : 'bg-red-50 border-2 border-red-200'}`}>
                  <div className="flex items-center gap-3 mb-4">
                    {isCorrect ? (
                      <>
                        <CheckCircle className="w-8 h-8 text-green-600" />
                        <h3 className="text-2xl font-bold text-green-700">정답입니다! 🎉</h3>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-8 h-8 text-red-600" />
                        <h3 className="text-2xl font-bold text-red-700">틀렸습니다 😢</h3>
                      </>
                    )}
                  </div>
                  <div className="bg-white p-5 rounded-xl">
                    <p className="text-lg font-semibold text-gray-700 mb-2">📝 해설</p>
                    <p className="text-gray-600 leading-relaxed">{currentQuestion.explanation}</p>
                  </div>
                </div>
              )}

              {/* Submit Button (연습 모드에서만) */}
              {!mockExamMode && !showExplanation && (
                <div className="mb-4">
                  <button
                    onClick={handleAnswerSubmit}
                    disabled={!isAnswered}
                    className={`w-full px-6 py-4 rounded-xl font-bold text-lg transition-all ${
                      isAnswered
                        ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white cursor-pointer shadow-md' 
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
                    className="flex-1 px-6 py-3 rounded-xl font-semibold transition-all bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white cursor-pointer"
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

  // Result Screen
  if (screen === 'result') {
    const answeredQuestions = Object.keys(userAnswers).length;
    const correctAnswers = Object.entries(userAnswers).filter(([id, answer]) => {
      const question = currentQuestions.find(q => q.id === id);
      return question && answer === question.answer;
    }).length;
    const score = answeredQuestions > 0 ? Math.round((correctAnswers / answeredQuestions) * 100) : 0;
    const isPassed = score >= 60;

    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
            <div className="text-8xl mb-6">
              {isPassed ? '🎉' : score >= 40 ? '👍' : '💪'}
            </div>
            <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {isPassed ? '합격입니다!' : score >= 40 ? '조금만 더!' : '다시 도전!'}
            </h2>
            {mockExamMode && (
              <div className="text-2xl font-semibold text-gray-600 mb-4">
                {isPassed ? '✅ 모의고사 합격' : '❌ 모의고사 불합격'}
              </div>
            )}
            <div className="text-7xl font-black text-gray-800 mb-8">
              {score}점
            </div>
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
                <div className="text-blue-600 text-sm font-semibold mb-2">정답</div>
                <div className="text-4xl font-black text-blue-700">{correctAnswers}</div>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-2xl">
                <div className="text-red-600 text-sm font-semibold mb-2">오답</div>
                <div className="text-4xl font-black text-red-700">{answeredQuestions - correctAnswers}</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl">
                <div className="text-purple-600 text-sm font-semibold mb-2">정답률</div>
                <div className="text-4xl font-black text-purple-700">{score}%</div>
              </div>
            </div>
            <div className="space-y-4">
              <button
                onClick={() => setScreen('home')}
                className="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-2xl font-bold text-lg transition-all transform hover:-translate-y-1"
              >
                홈으로 돌아가기
              </button>
              <button
                onClick={() => {
                  setCurrentQuestionIndex(0);
                  setUserAnswers({});
                  setShowExplanation(false);
                  setScreen('quiz');
                  if (mockExamMode) {
                    const cert = sampleData.certificates.find(c => c.id === selectedCert);
                    setMockExamTimeLeft(cert.examTime * 60);
                  }
                }}
                className="w-full px-8 py-4 bg-white hover:bg-gray-50 text-indigo-600 border-2 border-indigo-600 rounded-2xl font-bold text-lg transition-all"
              >
                다시 풀기
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Stats Screen
  if (screen === 'stats') {
    const accuracy = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
    const weakestTopics = getWeakestTopics();

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8">
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
              className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition-all"
            >
              <Download className="w-5 h-5" />
              성적표 다운로드
            </button>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-12 mb-8">
            <div className="flex items-center gap-4 mb-12">
              <Trophy className="w-12 h-12 text-yellow-500" />
              <h2 className="text-4xl font-black text-gray-800">학습 통계</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
                <div className="text-green-600 font-semibold mb-2">정답률</div>
                <div className="text-6xl font-black text-green-700 mb-2">{accuracy}%</div>
                <div className="text-green-600">{stats.correct} / {stats.total} 문제</div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl">
                <div className="text-orange-600 font-semibold mb-2">최고 연속 정답</div>
                <div className="text-6xl font-black text-orange-700 mb-2">{stats.maxStreak}</div>
                <div className="text-orange-600">현재: {stats.streak} 🔥</div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
                <div className="text-blue-600 font-semibold mb-2">학습 일수</div>
                <div className="text-6xl font-black text-blue-700 mb-2">{stats.studyDays?.length || 0}</div>
                <div className="text-blue-600">일 연속 학습</div>
              </div>
            </div>

            {/* 과목별 통계 */}
            {Object.keys(stats.bySubject).length > 0 && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <Target className="w-7 h-7 text-indigo-600" />
                  과목별 성적
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {Object.entries(stats.bySubject).map(([subject, data]) => {
                    const subjectAccuracy = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
                    return (
                      <div key={subject} className="bg-gray-50 p-6 rounded-2xl">
                        <div className="flex justify-between items-center mb-3">
                          <span className="font-semibold text-gray-800">{subject}</span>
                          <span className="text-2xl font-black text-indigo-600">{subjectAccuracy}%</span>
                        </div>
                        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500"
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
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <TrendingUp className="w-7 h-7 text-indigo-600" />
                  난이도별 성적
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {['하', '중', '상'].map(difficulty => {
                    const data = stats.byDifficulty[difficulty];
                    if (!data) return null;
                    const diffAccuracy = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
                    return (
                      <div key={difficulty} className={`${getDifficultyBg(difficulty)} p-6 rounded-2xl`}>
                        <div className="flex justify-between items-center mb-3">
                          <span className={`font-semibold ${getDifficultyColor(difficulty)}`}>
                            난이도 {difficulty}
                          </span>
                          <span className={`text-2xl font-black ${getDifficultyColor(difficulty)}`}>
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
                          {data.correct} / {data.total} 문제
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 취약 과목 */}
            {weakestTopics.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <AlertCircle className="w-7 h-7 text-red-600" />
                  취약 과목 Top 3
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {weakestTopics.map(([subject, accuracy], index) => (
                    <div key={subject} className="bg-red-50 p-6 rounded-2xl border-2 border-red-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-800">{subject}</span>
                        <span className="text-2xl font-black text-red-600">{Math.round(accuracy)}%</span>
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
          <div className="grid md:grid-cols-3 gap-6">
            <button
              onClick={() => startQuizMode('wrong')}
              disabled={wrongAnswers.length === 0}
              className="bg-gradient-to-br from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed text-white p-8 rounded-3xl shadow-lg transition-all transform hover:-translate-y-1"
            >
              <RefreshCw className="w-10 h-10 mb-3" />
              <div className="text-2xl font-bold mb-2">오답노트</div>
              <div className="text-pink-100">{wrongAnswers.length}문제 복습하기</div>
            </button>

            <button
              onClick={() => startQuizMode('bookmarked')}
              disabled={bookmarks.length === 0}
              className="bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white p-8 rounded-3xl shadow-lg transition-all transform hover:-translate-y-1"
            >
              <Star className="w-10 h-10 mb-3" />
              <div className="text-2xl font-bold mb-2">북마크</div>
              <div className="text-purple-100">{bookmarks.length}문제 풀기</div>
            </button>

            <button
              onClick={() => setScreen('home')}
              className="bg-gradient-to-br from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white p-8 rounded-3xl shadow-lg transition-all transform hover:-translate-y-1"
            >
              <Award className="w-10 h-10 mb-3" />
              <div className="text-2xl font-bold mb-2">새로운 학습</div>
              <div className="text-indigo-100">문제 풀러가기</div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <BuyMeCoffeeButton />
    </>
  );
}

// 메인 App 래퍼
export default function App() {
  return (
    <>
      <CertificationQuizApp />
      <BuyMeCoffeeButton />
    </>
  );
}
