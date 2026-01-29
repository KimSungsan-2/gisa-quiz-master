export const bigdataKnowledgeMap = {
  certId: 'bigdata',
  subjects: {
    '빅데이터 분석 기획': {
      name: '빅데이터 분석 기획',
      description: '빅데이터 분석 프로젝트의 기획, 거버넌스, 플랫폼 아키텍처, 법규 및 윤리에 대한 영역',
      topics: {
        '빅데이터 개요': {
          name: '빅데이터 개요',
          description: '빅데이터의 정의, 특성(3V/5V), 분석 방법론 및 KPI 설정',
          concepts: {
            '빅데이터 개념': {
              name: '빅데이터 개념',
              description: '빅데이터는 Volume(규모), Velocity(속도), Variety(다양성)의 3V로 정의되며, Veracity(정확성), Value(가치)를 포함한 5V로 확장됩니다.',
              formulas: [],
              relatedConcepts: ['데이터 품질', '데이터 레이크', '데이터 웨어하우스']
            },
            'KPI': {
              name: 'KPI',
              description: '핵심성과지표(Key Performance Indicator)는 비즈니스 목표 달성 정도를 측정하는 정량적 지표로, 측정 가능하고 비즈니스 목표와 연계되어야 합니다.',
              formulas: [],
              relatedConcepts: ['빅데이터 개념', 'CRISP-DM', 'Data Lineage']
            },
            'CRISP-DM': {
              name: 'CRISP-DM',
              description: 'Cross-Industry Standard Process for Data Mining의 약자로, 비즈니스 이해 -> 데이터 이해 -> 데이터 준비 -> 모델링 -> 평가 -> 배포의 6단계 데이터 마이닝 방법론입니다.',
              formulas: [],
              relatedConcepts: ['KPI', '거버넌스', 'MLOps']
            }
          }
        },
        '데이터 거버넌스와 품질': {
          name: '데이터 거버넌스와 품질',
          description: '데이터 표준화, 품질관리, 메타데이터 관리, 데이터 카탈로그 등 조직 차원의 데이터 관리 체계',
          concepts: {
            '거버넌스': {
              name: '거버넌스',
              description: '데이터 거버넌스는 데이터 표준화, 데이터 품질관리, 메타데이터 관리, 데이터 보안, 마스터 데이터 관리 등을 포함하는 조직 차원의 데이터 관리 체계입니다.',
              formulas: [],
              relatedConcepts: ['데이터 품질', '데이터품질', 'Data Lineage', 'Data Catalog']
            },
            '데이터 품질': {
              name: '데이터 품질',
              description: '데이터 품질의 주요 요소는 정확성(Accuracy), 완전성(Completeness), 일관성(Consistency), 최신성(Timeliness), 유효성(Validity) 등이며 데이터의 활용 가치를 결정합니다.',
              formulas: [],
              relatedConcepts: ['거버넌스', '데이터품질', 'DataOps']
            },
            '데이터품질': {
              name: '데이터품질',
              description: '데이터 품질 차원(Data Quality Dimensions)은 정확성, 완전성, 일관성, 적시성, 유효성 등으로 구성되며 데이터 기반 의사결정의 신뢰성을 좌우합니다.',
              formulas: [],
              relatedConcepts: ['데이터 품질', '거버넌스', 'Data Catalog']
            },
            'Data Lineage': {
              name: 'Data Lineage',
              description: '데이터 계보로, 데이터의 출처, 이동, 변환 과정을 추적하여 데이터 품질과 투명성을 보장하는 거버넌스 핵심 요소입니다.',
              formulas: [],
              relatedConcepts: ['거버넌스', 'Data Catalog', 'ETL']
            },
            'Data Catalog': {
              name: 'Data Catalog',
              description: '데이터 카탈로그는 조직의 메타데이터를 중앙에서 관리하고, 데이터 검색, 계보 추적 기능을 제공하여 데이터 발견과 활용을 촉진합니다.',
              formulas: [],
              relatedConcepts: ['거버넌스', 'Data Lineage', '데이터품질']
            }
          }
        },
        '데이터 아키텍처': {
          name: '데이터 아키텍처',
          description: '데이터 웨어하우스, 데이터 레이크, Data Mesh 등 데이터 저장 및 처리 아키텍처',
          concepts: {
            '데이터 웨어하우스': {
              name: '데이터 웨어하우스',
              description: '데이터 웨어하우스는 주제 지향적(Subject Oriented), 통합적(Integrated), 시간 변이적(Time Variant), 비휘발성(Non-volatile) 특징을 가진 분석용 데이터 저장소입니다.',
              formulas: [],
              relatedConcepts: ['데이터 레이크', '데이터웨어하우스', '데이터레이크', 'ETL']
            },
            '데이터웨어하우스': {
              name: '데이터웨어하우스',
              description: '데이터 웨어하우스(DW)는 OLAP에 최적화된 분석 저장소로, 주제 중심적이며 통합적이고 시계열적 특성을 가집니다. 실시간 트랜잭션 처리(OLTP)가 아닌 분석에 사용됩니다.',
              formulas: [],
              relatedConcepts: ['데이터 웨어하우스', '데이터레이크', 'ETL']
            },
            '데이터 레이크': {
              name: '데이터 레이크',
              description: '데이터 레이크는 정형/비정형 데이터를 원시 형태로 저장하며, Schema on Read 방식을 사용하여 유연한 데이터 분석을 지원합니다.',
              formulas: [],
              relatedConcepts: ['데이터 웨어하우스', '데이터레이크', 'ETL']
            },
            '데이터레이크': {
              name: '데이터레이크',
              description: '데이터 레이크와 데이터 웨어하우스의 주요 차이는 스키마 정의 시점으로, 레이크는 Schema-on-Read, 웨어하우스는 Schema-on-Write 방식입니다.',
              formulas: [],
              relatedConcepts: ['데이터 레이크', '데이터 웨어하우스', 'Data Mesh']
            },
            'Data Mesh': {
              name: 'Data Mesh',
              description: 'Data Mesh는 도메인 소유권, 데이터 제품화, 셀프 서비스 플랫폼, 연합 거버넌스를 핵심 원칙으로 하는 분산형 데이터 아키텍처입니다.',
              formulas: [],
              relatedConcepts: ['데이터레이크', '데이터웨어하우스', '거버넌스']
            }
          }
        },
        '데이터 처리와 플랫폼': {
          name: '데이터 처리와 플랫폼',
          description: 'ETL/ELT 프로세스, Hadoop, Spark, NoSQL 등 빅데이터 처리 기술',
          concepts: {
            'ETL': {
              name: 'ETL',
              description: 'Extract(추출)-Transform(변환)-Load(적재) 순서의 데이터 처리 프로세스입니다. ELT는 Extract-Load-Transform 순서로 클라우드 환경에서 주로 사용됩니다.',
              formulas: [],
              relatedConcepts: ['데이터 웨어하우스', '데이터 레이크', 'Spark', 'DataOps']
            },
            'Hadoop': {
              name: 'Hadoop',
              description: 'Hadoop 에코시스템은 HDFS(분산 파일 시스템), MapReduce(분산 처리), YARN(리소스 관리)으로 구성된 빅데이터 처리 프레임워크입니다.',
              formulas: [],
              relatedConcepts: ['Spark', 'NoSQL', 'ETL']
            },
            'Spark': {
              name: 'Spark',
              description: 'Apache Spark는 인메모리 기반 분산 처리 프레임워크로, 배치 및 스트리밍 처리를 모두 지원하며 RDD 기반의 빠른 데이터 처리를 제공합니다.',
              formulas: [],
              relatedConcepts: ['Hadoop', 'ETL', 'NoSQL']
            },
            'NoSQL': {
              name: 'NoSQL',
              description: 'NoSQL 데이터베이스는 Key-Value Store, Document Store, Column Family Store, Graph Store 등의 유형이 있으며, 비관계형 데이터 저장에 사용됩니다.',
              formulas: [],
              relatedConcepts: ['Hadoop', 'Spark', '데이터 레이크']
            }
          }
        },
        '법규와 윤리': {
          name: '법규와 윤리',
          description: '개인정보보호법, 가명처리, 프라이버시 보호, Responsible AI 등 데이터 활용의 법적/윤리적 측면',
          concepts: {
            '법규': {
              name: '법규',
              description: '개인정보보호법상 가명처리는 추가 정보 없이 특정 개인을 알아볼 수 없도록 처리하는 것이며, 가명정보도 여전히 개인정보보호법의 적용을 받습니다.',
              formulas: [],
              relatedConcepts: ['프라이버시', 'Responsible AI']
            },
            '프라이버시': {
              name: '프라이버시',
              description: 'Privacy-Preserving ML 기법으로 Differential Privacy, Federated Learning, Homomorphic Encryption 등이 있으며 데이터 활용과 개인정보 보호를 동시에 추구합니다.',
              formulas: [],
              relatedConcepts: ['법규', 'Responsible AI', 'Federated Learning']
            },
            'Responsible AI': {
              name: 'Responsible AI',
              description: '책임 있는 AI는 공정성, 투명성, 설명가능성, 프라이버시 보호를 핵심 원칙으로 하여 AI 시스템이 사회적 책임을 다하도록 하는 개념입니다.',
              formulas: [],
              relatedConcepts: ['법규', '프라이버시', 'SHAP', 'LIME']
            }
          }
        },
        'MLOps와 운영': {
          name: 'MLOps와 운영',
          description: 'ML 모델의 배포, 모니터링, 재학습 자동화 및 운영 관련 개념',
          concepts: {
            'MLOps': {
              name: 'MLOps',
              description: 'MLOps는 ML 모델의 개발, 배포, 모니터링, 재학습을 자동화하여 프로덕션 환경에서 안정적으로 운영하는 것을 목표로 하는 실천 방법론입니다.',
              formulas: [],
              relatedConcepts: ['DataOps', 'Feature Store', 'Model Registry', 'Concept Drift']
            },
            'DataOps': {
              name: 'DataOps',
              description: 'DataOps는 DevOps 원칙을 데이터 관리에 적용하여 데이터 파이프라인을 자동화하고 데이터 품질을 향상시키는 방법론입니다.',
              formulas: [],
              relatedConcepts: ['MLOps', 'ETL', '데이터 품질']
            },
            'Feature Store': {
              name: 'Feature Store',
              description: 'Feature Store는 피처를 중앙에서 관리하여 재사용성을 높이고 학습-서빙 간 일관성을 보장하는 ML 인프라 컴포넌트입니다.',
              formulas: [],
              relatedConcepts: ['MLOps', 'Model Registry', 'DataOps']
            },
            'Model Registry': {
              name: 'Model Registry',
              description: 'Model Registry는 모델 버전 관리, 메타데이터 저장, 배포 추적 등을 담당하는 MLOps 핵심 구성 요소입니다.',
              formulas: [],
              relatedConcepts: ['MLOps', 'Feature Store', 'Concept Drift']
            },
            'Concept Drift': {
              name: 'Concept Drift',
              description: 'Concept Drift는 시간이 지나면서 데이터의 통계적 특성이나 관계가 변화하여 모델 성능이 저하되는 현상으로, 모니터링과 재학습이 필요합니다.',
              formulas: [],
              relatedConcepts: ['MLOps', 'Model Registry', 'Online Learning']
            }
          }
        },
        '통계 기초': {
          name: '통계 기초',
          description: '베이지안 통계, MCMC 등 분석 기획에 필요한 통계적 기초 개념',
          concepts: {
            '베이지안': {
              name: '베이지안',
              description: '베이지안 통계는 사전 확률(prior)에 데이터(likelihood)를 결합하여 사후 확률(posterior)을 구하는 방법으로, P(A|B) = P(B|A)P(A)/P(B)를 기반으로 합니다.',
              formulas: ['P(A|B) = P(B|A) * P(A) / P(B)'],
              relatedConcepts: ['MCMC', '나이브 베이즈', '가설검정']
            },
            'MCMC': {
              name: 'MCMC',
              description: 'Markov Chain Monte Carlo는 직접 계산하기 어려운 복잡한 확률 분포에서 샘플을 추출하는 방법으로, 베이지안 추론에 널리 사용됩니다.',
              formulas: [],
              relatedConcepts: ['베이지안', 'Bootstrapping']
            }
          }
        }
      }
    },
    '빅데이터 탐색': {
      name: '빅데이터 탐색',
      description: '데이터 전처리, 탐색적 데이터 분석(EDA), 통계 분석, 피처 엔지니어링에 대한 영역',
      topics: {
        '데이터 전처리': {
          name: '데이터 전처리',
          description: '결측값 처리, 이상값 탐지, 스케일링, 인코딩 등 데이터 정제 및 변환 기법',
          concepts: {
            '데이터 전처리': {
              name: '데이터 전처리',
              description: '결측값 처리 방법에는 삭제법(Deletion), 평균 대체법(Mean Imputation), KNN 대체법 등이 있으며, 데이터 분석 전 반드시 수행해야 합니다.',
              formulas: [],
              relatedConcepts: ['이상값', '스케일링', '인코딩']
            },
            '이상값': {
              name: '이상값',
              description: '이상값(Outlier)은 IQR(사분위범위) 방법, Z-score 방법, DBSCAN, Box Plot 등으로 탐지할 수 있으며, 데이터 품질에 영향을 미칩니다.',
              formulas: ['IQR = Q3 - Q1', '이상값 범위: Q1 - 1.5*IQR ~ Q3 + 1.5*IQR', 'Z-score = (X - mean) / std'],
              relatedConcepts: ['데이터 전처리', 'Isolation Forest', '시각화']
            },
            '스케일링': {
              name: '스케일링',
              description: 'Min-Max Scaling은 데이터를 0~1 범위로 변환하며, 표준화(Z-score)는 평균 0, 표준편차 1로 변환합니다. 모델 학습 성능에 중요한 영향을 미칩니다.',
              formulas: ['Min-Max: (X - Xmin) / (Xmax - Xmin)', 'Z-score: (X - mean) / std'],
              relatedConcepts: ['데이터 전처리', '인코딩', 'PCA']
            },
            '인코딩': {
              name: '인코딩',
              description: '범주형 변수를 수치형으로 변환하는 기법으로, Label Encoding, One-Hot Encoding, Target Encoding 등이 있습니다. One-Hot Encoding은 범주 간 순서 정보를 유지하지 않습니다.',
              formulas: [],
              relatedConcepts: ['데이터 전처리', 'Target Encoding', 'WOE']
            },
            'Target Encoding': {
              name: 'Target Encoding',
              description: 'Target Encoding은 범주형 변수의 각 범주를 목표 변수의 평균값으로 대체하는 인코딩 방법입니다. 데이터 누수(data leakage) 위험이 있어 주의가 필요합니다.',
              formulas: [],
              relatedConcepts: ['인코딩', 'WOE', '데이터 전처리']
            },
            'Pandas': {
              name: 'Pandas',
              description: 'Python의 데이터 분석 라이브러리로, DataFrame 기반의 데이터 처리를 지원합니다. isnull(), isna(), notnull() 등으로 결측값을 확인할 수 있습니다.',
              formulas: [],
              relatedConcepts: ['데이터 전처리', 'SQL', '데이터 분할']
            },
            '데이터 증강': {
              name: '데이터 증강',
              description: 'Data Augmentation은 기존 데이터를 변형(회전, 반전, 노이즈 추가 등)하여 학습 데이터의 다양성을 증가시키고 과적합을 방지하는 기법입니다.',
              formulas: [],
              relatedConcepts: ['과적합', '불균형 데이터', 'SMOTE']
            }
          }
        },
        '불균형 데이터 처리': {
          name: '불균형 데이터 처리',
          description: '클래스 불균형 문제 해결을 위한 오버샘플링, 언더샘플링 등의 기법',
          concepts: {
            '불균형 데이터': {
              name: '불균형 데이터',
              description: '데이터 불균형 처리 방법에는 오버샘플링(SMOTE), 언더샘플링, 비용 민감 학습 등이 있습니다. 정규화(Normalization)는 불균형 처리와 무관합니다.',
              formulas: [],
              relatedConcepts: ['SMOTE', '데이터 증강', 'Focal Loss']
            },
            'SMOTE': {
              name: 'SMOTE',
              description: 'Synthetic Minority Over-sampling Technique은 소수 클래스의 인접 샘플 사이에 합성 샘플을 생성하여 불균형 데이터를 처리하는 오버샘플링 기법입니다.',
              formulas: [],
              relatedConcepts: ['불균형 데이터', '데이터 증강', 'Focal Loss']
            }
          }
        },
        '통계 분석': {
          name: '통계 분석',
          description: '기술 통계, 상관 분석, 가설 검정, 분포 분석 등 통계적 탐색 기법',
          concepts: {
            '통계': {
              name: '통계',
              description: '피어슨 상관계수는 -1~1 범위에서 두 변수의 선형 관계 강도를 측정합니다. 상관계수가 0이면 선형 관계가 없다는 의미이지 완전 독립은 아닙니다.',
              formulas: ['피어슨 상관계수: r = Cov(X,Y) / (Sx * Sy)'],
              relatedConcepts: ['상관분석', '정규분포', '가설검정', 'p-value']
            },
            '상관분석': {
              name: '상관분석',
              description: '변수 간 상관관계를 분석하는 방법으로, 피어슨 상관계수, 스피어만 상관계수, 켄달 타우 등이 있습니다. 엔트로피는 상관 분석 계수가 아닙니다.',
              formulas: ['피어슨: 선형 상관', '스피어만: 순위 상관', '켄달 타우: 순위 일치성'],
              relatedConcepts: ['통계', '다중공선성', '피처 선택']
            },
            '정규분포': {
              name: '정규분포',
              description: '정규분포는 평균=중앙값=최빈값, 좌우 대칭, 왜도=0인 분포입니다. 표준 정규분포의 첨도는 3이지만 모든 정규분포의 첨도가 3은 아닙니다.',
              formulas: ['f(x) = (1/sqrt(2pi*s^2)) * exp(-(x-u)^2 / (2*s^2))'],
              relatedConcepts: ['통계', '왜도', 'Bootstrapping']
            },
            '왜도': {
              name: '왜도',
              description: '왜도(Skewness)는 분포의 비대칭 정도를 나타냅니다. 양의 왜도는 우측으로 꼬리가 긴 분포(오른쪽 치우침)를 나타냅니다.',
              formulas: ['Skewness = E[(X-u)^3] / s^3'],
              relatedConcepts: ['정규분포', '통계', '시각화']
            },
            '가설검정': {
              name: '가설검정',
              description: '가설검정에서 제1종 오류(Type I Error)는 귀무가설이 참인데 기각하는 오류이며, 유의수준(alpha)에 의해 제어됩니다.',
              formulas: ['Type I Error: alpha (유의수준)', 'Type II Error: beta', '검정력: 1 - beta'],
              relatedConcepts: ['p-value', '검정력', '통계검정']
            },
            'p-value': {
              name: 'p-value',
              description: 'p-value는 0과 1 사이의 확률값으로, 귀무가설이 참이라고 가정할 때 관측된 데이터 또는 더 극단적인 데이터가 나올 확률입니다.',
              formulas: [],
              relatedConcepts: ['가설검정', '검정력', '통계검정']
            },
            '검정력': {
              name: '검정력',
              description: '검정력(Power)은 대립가설이 참일 때 이를 올바르게 채택할 확률로, 1 - beta(제2종 오류율)입니다.',
              formulas: ['Power = 1 - beta'],
              relatedConcepts: ['가설검정', 'p-value', '통계검정']
            },
            '통계검정': {
              name: '통계검정',
              description: 'Chi-square 검정은 두 범주형 변수 간 독립성을 검정하며, t-검정은 두 그룹의 평균 차이를 검정합니다. ANOVA는 세 개 이상 그룹의 평균 차이를 검정합니다.',
              formulas: ['Chi-square = sum((O-E)^2 / E)'],
              relatedConcepts: ['가설검정', 'p-value', 'A/B테스트']
            },
            'Bootstrapping': {
              name: 'Bootstrapping',
              description: 'Bootstrapping은 복원 추출로 여러 샘플을 생성하여 통계량의 분포를 추정하는 리샘플링 기법으로, 모집단 분포를 모를 때 유용합니다.',
              formulas: [],
              relatedConcepts: ['통계', '정규분포', 'Sampling']
            },
            'Entropy': {
              name: 'Entropy',
              description: 'Entropy는 정보량(불확실성)을 측정하는 지표이며, Information Gain은 분할 전후 Entropy의 감소량으로 변수의 유용성을 평가합니다.',
              formulas: ['H(X) = -sum(p(x) * log2(p(x)))', 'IG = H(parent) - sum(w * H(child))'],
              relatedConcepts: ['Gini', '통계', '피처 선택']
            }
          }
        },
        '다중공선성과 회귀 진단': {
          name: '다중공선성과 회귀 진단',
          description: '독립변수 간 상관관계 진단 및 회귀 모델의 전제 조건 확인',
          concepts: {
            '다중공선성': {
              name: '다중공선성',
              description: '다중공선성(Multicollinearity)은 독립변수 간 높은 상관관계로 인해 회귀 계수가 불안정해지는 문제입니다. VIF, 상관계수, Condition Index로 진단합니다.',
              formulas: ['VIF = 1 / (1 - R^2)'],
              relatedConcepts: ['VIF', '상관분석', 'PCA']
            },
            'VIF': {
              name: 'VIF',
              description: 'Variance Inflation Factor는 다중공선성 진단 지표로, VIF가 10 이상이면 심각한 다중공선성이 있다고 판단합니다.',
              formulas: ['VIF = 1 / (1 - R_i^2)'],
              relatedConcepts: ['다중공선성', '상관분석', '피처 선택']
            }
          }
        },
        '차원 축소와 시각화': {
          name: '차원 축소와 시각화',
          description: 'PCA, t-SNE, UMAP 등 차원 축소 기법 및 데이터 시각화 방법',
          concepts: {
            'PCA': {
              name: 'PCA',
              description: 'Principal Component Analysis(주성분분석)는 고차원 데이터를 저차원으로 변환하여 주요 특성을 유지하면서 차원을 축소하는 선형 기법입니다.',
              formulas: ['공분산 행렬의 고유벡터/고유값 분해'],
              relatedConcepts: ['t-SNE', 'UMAP', '차원의 저주']
            },
            't-SNE': {
              name: 't-SNE',
              description: 't-distributed Stochastic Neighbor Embedding은 고차원 데이터를 2D/3D로 축소하여 시각화하는 비선형 기법입니다. 새로운 데이터 변환이 어렵습니다.',
              formulas: [],
              relatedConcepts: ['PCA', 'UMAP', '시각화']
            },
            'UMAP': {
              name: 'UMAP',
              description: 'Uniform Manifold Approximation and Projection은 t-SNE보다 빠르고 전역 구조를 더 잘 보존하는 차원 축소 기법으로, 더 높은 차원으로도 축소 가능합니다.',
              formulas: [],
              relatedConcepts: ['t-SNE', 'PCA', '차원의 저주']
            },
            '차원의 저주': {
              name: '차원의 저주',
              description: 'Curse of Dimensionality는 차원이 증가할수록 공간이 기하급수적으로 커져 데이터가 희소해지고 모델 학습에 더 많은 데이터가 필요해지는 현상입니다.',
              formulas: [],
              relatedConcepts: ['PCA', 't-SNE', 'UMAP', '피처 선택']
            },
            '시각화': {
              name: '시각화',
              description: '히스토그램은 연속형 데이터의 분포를 나타내며 막대 사이 간격이 없고, 막대그래프는 범주형 데이터를 나타내며 간격이 있습니다.',
              formulas: [],
              relatedConcepts: ['왜도', 't-SNE', 'UMAP']
            }
          }
        },
        '피처 엔지니어링': {
          name: '피처 엔지니어링',
          description: '피처 선택, 피처 변환, WOE, 데이터 분할 등 모델 입력 데이터를 준비하는 기법',
          concepts: {
            '피처 선택': {
              name: '피처 선택',
              description: 'Feature Selection 방법에는 Filter(상관계수 등 통계 기반), Wrapper(RFE, Forward/Backward Selection), Embedded(Lasso 등) 방식이 있습니다.',
              formulas: [],
              relatedConcepts: ['상관분석', 'VIF', 'Entropy', 'Gini']
            },
            'WOE': {
              name: 'WOE',
              description: 'Weight of Evidence는 범주형 변수의 각 범주가 목표 변수에 미치는 영향을 수치로 표현하는 변환 기법으로, 신용 평가 모델에서 널리 사용됩니다.',
              formulas: ['WOE = ln(Good Distribution / Bad Distribution)'],
              relatedConcepts: ['인코딩', 'Target Encoding', '피처 선택']
            },
            'Gini': {
              name: 'Gini',
              description: 'Gini Impurity는 0(완전 순수)부터 1 사이의 값을 가지며, 의사결정나무에서 분할 기준으로 사용됩니다. 값이 낮을수록 순수한 노드입니다.',
              formulas: ['Gini = 1 - sum(p_i^2)'],
              relatedConcepts: ['Entropy', '피처 선택', '머신러닝']
            },
            'Polynomial': {
              name: 'Polynomial',
              description: 'Polynomial Features는 변수 간 다항식 조합을 생성하여 비선형 관계를 선형 모델로 표현할 수 있게 하는 피처 엔지니어링 기법입니다.',
              formulas: ['x1, x2 -> x1, x2, x1^2, x1*x2, x2^2'],
              relatedConcepts: ['피처 선택', '로지스틱 회귀', '다중공선성']
            },
            '데이터 분할': {
              name: '데이터 분할',
              description: 'train_test_split은 데이터를 학습/테스트로 분할하며, Scikit-learn의 기본 테스트 비율은 25%입니다.',
              formulas: [],
              relatedConcepts: ['Sampling', '교차검증', 'Bootstrapping']
            },
            'Sampling': {
              name: 'Sampling',
              description: 'Stratified Sampling은 각 계층의 비율을 원본 데이터와 동일하게 유지하여 샘플링하는 기법으로, 불균형 데이터에서 특히 중요합니다.',
              formulas: [],
              relatedConcepts: ['데이터 분할', 'Bootstrapping', '불균형 데이터']
            },
            'SQL': {
              name: 'SQL',
              description: 'SQL의 JOIN 종류에는 INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN, CROSS JOIN이 있으며, 데이터 탐색과 전처리에 널리 사용됩니다.',
              formulas: [],
              relatedConcepts: ['Pandas', '데이터 전처리']
            }
          }
        },
        '이상 탐지와 시계열': {
          name: '이상 탐지와 시계열',
          description: '이상 탐지 알고리즘 및 시계열 데이터 탐색',
          concepts: {
            'Isolation Forest': {
              name: 'Isolation Forest',
              description: 'Isolation Forest는 이상값이 정상값보다 쉽게 고립된다는 원리를 이용한 이상탐지 알고리즘으로, 트리 기반 분리를 수행합니다.',
              formulas: [],
              relatedConcepts: ['이상값', 'SMOTE', 'AutoEncoder']
            },
            '시계열': {
              name: '시계열',
              description: '시계열 데이터는 추세(Trend), 계절성(Seasonality), 주기성(Cycle), 불규칙 요소(Irregular)로 구성됩니다. 정규성은 시계열 구성 요소가 아닙니다.',
              formulas: [],
              relatedConcepts: ['ARIMA', 'Prophet', 'LSTM']
            },
            'Airflow': {
              name: 'Airflow',
              description: 'Apache Airflow는 데이터 파이프라인의 워크플로우를 DAG(Directed Acyclic Graph)로 정의하고 스케줄링 및 모니터링하는 도구입니다.',
              formulas: [],
              relatedConcepts: ['ETL', 'DataOps', 'SQL']
            }
          }
        }
      }
    },
    '빅데이터 모델링': {
      name: '빅데이터 모델링',
      description: '지도학습, 비지도학습, 딥러닝, 앙상블, 시계열 모델링, NLP, 추천 시스템, 강화학습 등 다양한 모델링 기법',
      topics: {
        '지도학습 기본 모델': {
          name: '지도학습 기본 모델',
          description: '의사결정나무, 로지스틱 회귀, SVM, 나이브 베이즈 등 기본 지도학습 모델',
          concepts: {
            '머신러닝': {
              name: '머신러닝',
              description: '의사결정나무는 해석이 용이하고 비선형 관계 모델링이 가능하지만 과적합에 취약합니다. 범주형/연속형 변수 모두 사용 가능합니다.',
              formulas: [],
              relatedConcepts: ['로지스틱 회귀', 'SVM', '나이브 베이즈', '랜덤 포레스트']
            },
            '로지스틱 회귀': {
              name: '로지스틱 회귀',
              description: '로지스틱 회귀는 시그모이드 함수를 사용하여 0~1 사이의 확률값을 출력하는 이진 분류 알고리즘입니다. 다중 클래스 분류로 확장(Softmax)할 수 있습니다.',
              formulas: ['P(y=1|x) = 1 / (1 + exp(-wx))', 'sigmoid(z) = 1 / (1 + e^(-z))'],
              relatedConcepts: ['머신러닝', 'SVM', '나이브 베이즈']
            },
            'SVM': {
              name: 'SVM',
              description: 'Support Vector Machine은 클래스 간 마진을 최대화하는 초평면을 찾는 분류 알고리즘입니다. Linear, RBF, Polynomial, Sigmoid 커널을 사용합니다.',
              formulas: [],
              relatedConcepts: ['머신러닝', '로지스틱 회귀', '비지도 학습']
            },
            '나이브 베이즈': {
              name: '나이브 베이즈',
              description: '나이브 베이즈 분류기는 모든 특성이 서로 조건부 독립적이라는 가정을 기반으로 하며, 베이즈 정리를 적용하여 분류합니다.',
              formulas: ['P(C|X) = P(X|C) * P(C) / P(X)'],
              relatedConcepts: ['베이지안', '로지스틱 회귀', '머신러닝']
            },
            '비지도 학습': {
              name: '비지도 학습',
              description: '비지도 학습 알고리즘에는 K-Means, DBSCAN, Hierarchical Clustering 등이 있습니다. Random Forest는 지도 학습 알고리즘입니다.',
              formulas: [],
              relatedConcepts: ['K-Means', '머신러닝', 'PCA']
            }
          }
        },
        '앙상블 학습': {
          name: '앙상블 학습',
          description: '배깅, 부스팅, 스태킹 등 여러 모델을 결합하는 앙상블 기법',
          concepts: {
            '앙상블': {
              name: '앙상블',
              description: '앙상블은 여러 모델을 결합하여 성능을 향상시키는 기법입니다. Bagging은 병렬, Boosting은 순차적으로 학습합니다.',
              formulas: [],
              relatedConcepts: ['랜덤 포레스트', '그래디언트 부스팅', 'XGBoost', 'Random Forest']
            },
            '랜덤 포레스트': {
              name: '랜덤 포레스트',
              description: '랜덤 포레스트는 배깅 기반 앙상블로, 여러 의사결정나무를 결합합니다. 각 트리 학습 시 무작위로 일부 특성만 선택하여 다양성을 확보합니다.',
              formulas: [],
              relatedConcepts: ['앙상블', 'Random Forest', '그래디언트 부스팅']
            },
            'Random Forest': {
              name: 'Random Forest',
              description: 'Random Forest는 Bootstrap 샘플링과 랜덤 특성 선택을 통해 여러 의사결정나무를 학습하는 배깅(Bagging) 기반 앙상블 모델입니다.',
              formulas: [],
              relatedConcepts: ['랜덤 포레스트', '앙상블', '그래디언트 부스팅']
            },
            '그래디언트 부스팅': {
              name: '그래디언트 부스팅',
              description: '그래디언트 부스팅은 순차적으로 모델을 학습하며 이전 모델의 잔차를 학습 대상으로 합니다. XGBoost, LightGBM, CatBoost 등이 대표적입니다.',
              formulas: [],
              relatedConcepts: ['XGBoost', 'CatBoost', '앙상블']
            },
            'XGBoost': {
              name: 'XGBoost',
              description: 'XGBoost는 그래디언트 부스팅 기반으로 정규화 내장, 병렬 처리, 결측값 자동 처리를 지원하여 과적합 방지에 강한 고성능 알고리즘입니다.',
              formulas: [],
              relatedConcepts: ['그래디언트 부스팅', 'CatBoost', '앙상블']
            },
            'CatBoost': {
              name: 'CatBoost',
              description: 'CatBoost는 범주형 변수를 자동으로 처리하는 그래디언트 부스팅 알고리즘으로, Ordered Target Encoding을 내장하고 있습니다.',
              formulas: [],
              relatedConcepts: ['XGBoost', '그래디언트 부스팅', '앙상블']
            },
            'Ensemble': {
              name: 'Ensemble',
              description: 'Ensemble Learning에서 Bagging은 독립적으로 병렬 학습(분산 감소)하고, Boosting은 이전 모델의 오차를 보완하며 순차적으로 학습(편향 감소)합니다.',
              formulas: [],
              relatedConcepts: ['앙상블', 'Stacking', '랜덤 포레스트']
            },
            'Stacking': {
              name: 'Stacking',
              description: 'Stacking은 여러 베이스 모델의 예측을 메타 모델의 입력으로 사용하여 최종 예측을 수행하는 앙상블 기법입니다.',
              formulas: [],
              relatedConcepts: ['Ensemble', '앙상블', 'Random Forest']
            }
          }
        },
        '군집화': {
          name: '군집화',
          description: 'K-Means 등 비지도 학습 기반 군집화 알고리즘',
          concepts: {
            'K-Means': {
              name: 'K-Means',
              description: 'K-Means는 K개의 군집 중심점을 기반으로 유클리드 거리를 사용하는 비계층적 군집화 방법입니다. K를 사전에 지정해야 하며 이상값에 민감합니다.',
              formulas: ['within-cluster SSE = sum(||x_i - c_k||^2)'],
              relatedConcepts: ['비지도 학습', '엘보우 방법', 'DBSCAN']
            }
          }
        },
        '딥러닝 기초': {
          name: '딥러닝 기초',
          description: 'CNN, RNN, LSTM, 드롭아웃, 배치 정규화 등 딥러닝 핵심 개념',
          concepts: {
            '딥러닝': {
              name: '딥러닝',
              description: 'Dropout은 학습 시 무작위로 일부 뉴런을 비활성화하여 과적합을 방지하는 정규화 기법입니다. 딥러닝은 다층 신경망을 활용한 학습 방법입니다.',
              formulas: [],
              relatedConcepts: ['CNN', 'RNN', 'LSTM', 'Transformer']
            },
            'CNN': {
              name: 'CNN',
              description: 'Convolutional Neural Network는 합성곱층(Convolution), 풀링층(Pooling), 완전연결층(Fully Connected)으로 구성되며 이미지 처리에 주로 사용됩니다.',
              formulas: [],
              relatedConcepts: ['딥러닝', 'RNN', 'ViT']
            },
            'RNN': {
              name: 'RNN',
              description: 'Recurrent Neural Network는 이전 상태 정보를 기억하여 순차적 데이터(시계열, 자연어 등)를 처리합니다. 장기 의존성 문제(Vanishing Gradient)가 있습니다.',
              formulas: ['h_t = f(W_h * h_{t-1} + W_x * x_t + b)'],
              relatedConcepts: ['LSTM', '딥러닝', 'Transformer']
            },
            'LSTM': {
              name: 'LSTM',
              description: 'Long Short-Term Memory는 입력/출력/망각 게이트 메커니즘으로 RNN의 경사 소실(Vanishing Gradient) 문제를 해결하여 장기 의존성을 학습합니다.',
              formulas: ['f_t = sigma(W_f * [h_{t-1}, x_t] + b_f)', 'i_t = sigma(W_i * [h_{t-1}, x_t] + b_i)'],
              relatedConcepts: ['RNN', '딥러닝', '시계열', 'Attention']
            },
            'Batch Normalization': {
              name: 'Batch Normalization',
              description: '배치 정규화는 각 층의 입력을 미니배치 단위로 정규화하여 학습을 안정화하고 속도를 향상시킵니다. Internal Covariate Shift를 감소시킵니다.',
              formulas: ['BN(x) = gamma * (x - mean) / sqrt(var + eps) + beta'],
              relatedConcepts: ['딥러닝', '최적화', '과적합']
            },
            'Attention': {
              name: 'Attention',
              description: 'Attention 메커니즘은 입력의 중요한 부분에 가중치를 부여하여 집중할 수 있게 하는 기법으로, Transformer의 핵심 구성 요소입니다.',
              formulas: ['Attention(Q,K,V) = softmax(QK^T / sqrt(d_k)) * V'],
              relatedConcepts: ['Transformer', 'BERT', 'LSTM']
            },
            '경사하강법': {
              name: '경사하강법',
              description: 'Gradient Descent는 손실 함수의 기울기를 이용하여 파라미터를 업데이트하는 최적화 알고리즘입니다. 학습률이 너무 크면 발산, 너무 작으면 수렴이 느립니다.',
              formulas: ['w = w - lr * dL/dw'],
              relatedConcepts: ['최적화', '경사 클리핑', 'Batch Normalization']
            },
            '최적화': {
              name: '최적화',
              description: 'Adam 최적화 알고리즘은 Momentum과 RMSProp을 결합하여 적응적 학습률을 사용하는 알고리즘으로, 딥러닝에서 가장 널리 사용됩니다.',
              formulas: ['m_t = beta1*m_{t-1} + (1-beta1)*g_t', 'v_t = beta2*v_{t-1} + (1-beta2)*g_t^2'],
              relatedConcepts: ['경사하강법', '경사 클리핑', 'Batch Normalization']
            },
            '경사 클리핑': {
              name: '경사 클리핑',
              description: 'Gradient Clipping은 기울기 값을 일정 범위로 제한하여 Exploding Gradient 문제를 방지하는 기법입니다.',
              formulas: ['if ||g|| > threshold: g = threshold * g / ||g||'],
              relatedConcepts: ['경사하강법', '최적화', 'RNN']
            },
            '과적합': {
              name: '과적합',
              description: '과적합(Overfitting)을 방지하는 방법에는 정규화(Regularization), 드롭아웃(Dropout), 데이터 증강, 조기 종료 등이 있습니다. 모델 복잡도 증가는 과적합을 악화시킵니다.',
              formulas: ['L1: lambda * sum(|w|)', 'L2: lambda * sum(w^2)'],
              relatedConcepts: ['딥러닝', 'Batch Normalization', '교차검증']
            }
          }
        },
        '고급 딥러닝 모델': {
          name: '고급 딥러닝 모델',
          description: 'Transformer, GAN, AutoEncoder, TabNet, ViT 등 고급 딥러닝 아키텍처',
          concepts: {
            'Transformer': {
              name: 'Transformer',
              description: 'Transformer는 Self-Attention 메커니즘을 사용하여 시퀀스의 모든 위치 간 관계를 병렬로 학습하는 모델로, RNN 없이도 시퀀스를 모델링합니다.',
              formulas: ['Attention(Q,K,V) = softmax(QK^T / sqrt(d_k)) * V'],
              relatedConcepts: ['Attention', 'BERT', 'GPT', 'ViT']
            },
            'GAN': {
              name: 'GAN',
              description: 'Generative Adversarial Network는 생성자(Generator)와 판별자(Discriminator) 두 네트워크가 경쟁하며 학습하는 생성 모델입니다.',
              formulas: ['min_G max_D V(D,G) = E[log D(x)] + E[log(1-D(G(z)))]'],
              relatedConcepts: ['AutoEncoder', '딥러닝', 'Contrastive Learning']
            },
            'AutoEncoder': {
              name: 'AutoEncoder',
              description: 'AutoEncoder는 인코더-디코더 구조로 데이터를 압축한 뒤 재구성하는 비지도 학습 모델입니다. 차원 축소, 이상 탐지, 데이터 생성에 사용됩니다.',
              formulas: [],
              relatedConcepts: ['GAN', 'PCA', 'Isolation Forest']
            },
            'TabNet': {
              name: 'TabNet',
              description: 'TabNet은 Attention 메커니즘을 사용하여 테이블 데이터를 효과적으로 학습하는 딥러닝 모델로, 변수 중요도를 자동으로 학습합니다.',
              formulas: [],
              relatedConcepts: ['Attention', 'XGBoost', '딥러닝']
            },
            'ViT': {
              name: 'ViT',
              description: 'Vision Transformer(ViT)는 이미지를 패치로 나누어 Transformer 아키텍처를 적용한 모델로, CNN을 대체하여 이미지 분류에 사용됩니다.',
              formulas: [],
              relatedConcepts: ['Transformer', 'CNN', 'Attention']
            }
          }
        },
        'NLP 모델': {
          name: 'NLP 모델',
          description: '자연어 처리를 위한 Word2Vec, BERT, GPT 등의 모델',
          concepts: {
            'Word2Vec': {
              name: 'Word2Vec',
              description: 'Word2Vec은 CBOW와 Skip-gram 방식으로 단어를 밀집 벡터로 임베딩하는 모델입니다. TF-IDF는 통계 기반 방법으로 Word2Vec과 다릅니다.',
              formulas: [],
              relatedConcepts: ['BERT', 'GPT', 'Hugging Face']
            },
            'BERT': {
              name: 'BERT',
              description: 'BERT는 Bidirectional Transformer 기반의 사전학습 언어 모델로, Masked Language Model과 Next Sentence Prediction으로 사전학습된 후 Fine-tuning합니다.',
              formulas: [],
              relatedConcepts: ['Transformer', 'GPT', 'Word2Vec', 'Hugging Face']
            },
            'GPT': {
              name: 'GPT',
              description: 'GPT는 단방향(왼쪽에서 오른쪽) Autoregressive 언어 모델로, BERT의 양방향과 달리 텍스트 생성에 특화되어 있습니다.',
              formulas: [],
              relatedConcepts: ['BERT', 'Transformer', 'Word2Vec']
            },
            'Hugging Face': {
              name: 'Hugging Face',
              description: 'Hugging Face Transformers는 BERT, GPT 등 사전 학습된 NLP 모델을 쉽게 사용할 수 있도록 제공하는 오픈소스 라이브러리입니다.',
              formulas: [],
              relatedConcepts: ['BERT', 'GPT', 'Transformer']
            }
          }
        },
        '시계열 모델링': {
          name: '시계열 모델링',
          description: 'ARIMA, Prophet 등 시계열 데이터 예측 모델',
          concepts: {
            'ARIMA': {
              name: 'ARIMA',
              description: 'ARIMA(p,d,q) 모델에서 p는 자기회귀(AR) 차수, d는 차분 차수, q는 이동평균(MA) 차수입니다. 정상 시계열에 적용되며, 비정상 시계열은 차분으로 정상화합니다.',
              formulas: ['ARIMA(p,d,q): AR + I + MA'],
              relatedConcepts: ['시계열', 'Prophet', 'LSTM']
            },
            '시계열': {
              name: '시계열',
              description: '시계열 모델링에서 정상성(Stationarity)은 평균, 분산이 일정하고 자기공분산이 시간에 독립적인 조건을 요구합니다. 추세가 있으면 비정상입니다.',
              formulas: [],
              relatedConcepts: ['ARIMA', 'Prophet', 'LSTM']
            },
            'Prophet': {
              name: 'Prophet',
              description: 'Facebook Prophet은 추세(Trend), 계절성(Seasonality), 휴일 효과(Holidays)를 모델링하는 시계열 예측 라이브러리입니다.',
              formulas: ['y(t) = g(t) + s(t) + h(t) + e(t)'],
              relatedConcepts: ['ARIMA', '시계열', 'LSTM']
            }
          }
        },
        '추천 시스템': {
          name: '추천 시스템',
          description: '협업 필터링, Matrix Factorization 등 추천 시스템 알고리즘',
          concepts: {
            '추천시스템': {
              name: '추천시스템',
              description: '추천 시스템의 Cold Start 문제는 신규 사용자/아이템에 대한 정보 부족 문제로, 인기도 기반 추천, 컨텐츠 기반 필터링, 하이브리드 방식으로 해결합니다.',
              formulas: [],
              relatedConcepts: ['협업필터링', 'Matrix Factorization', 'ALS']
            },
            '협업필터링': {
              name: '협업필터링',
              description: '협업 필터링은 사용자 기반(User-based), 아이템 기반(Item-based), 모델 기반(Model-based)으로 분류됩니다. 규칙 기반은 포함되지 않습니다.',
              formulas: [],
              relatedConcepts: ['추천시스템', 'Matrix Factorization', 'ALS']
            },
            'Matrix Factorization': {
              name: 'Matrix Factorization',
              description: 'Matrix Factorization은 희소한 사용자-아이템 행렬을 저차원의 잠재 요인 행렬(User/Item latent factor)로 분해하여 추천을 수행합니다.',
              formulas: ['R ≈ U * V^T (R: 평점행렬, U: 사용자행렬, V: 아이템행렬)'],
              relatedConcepts: ['협업필터링', '추천시스템', 'ALS']
            },
            'ALS': {
              name: 'ALS',
              description: 'Alternating Least Squares는 사용자와 아이템 요인을 번갈아 고정하면서 최적화하는 Matrix Factorization 알고리즘으로, Spark에서 대규모 추천에 사용됩니다.',
              formulas: [],
              relatedConcepts: ['Matrix Factorization', '협업필터링', '추천시스템']
            }
          }
        },
        '강화학습': {
          name: '강화학습',
          description: '에이전트가 환경과 상호작용하며 보상을 최대화하도록 학습하는 패러다임',
          concepts: {
            '강화학습': {
              name: '강화학습',
              description: '강화학습은 에이전트(Agent)가 환경(Environment)과 상호작용하며 보상(Reward)을 최대화하도록 학습합니다. 레이블은 지도학습의 요소입니다.',
              formulas: [],
              relatedConcepts: ['Q-Learning', 'DQN', 'Policy Gradient', 'Actor-Critic']
            },
            'Q-Learning': {
              name: 'Q-Learning',
              description: 'Q-Learning은 상태-행동 쌍의 품질(Quality)을 Q-table로 학습하는 모델-프리 강화학습 알고리즘입니다.',
              formulas: ['Q(s,a) = Q(s,a) + alpha * (r + gamma * max Q(s\',a\') - Q(s,a))'],
              relatedConcepts: ['강화학습', 'DQN', 'Policy Gradient']
            },
            'DQN': {
              name: 'DQN',
              description: 'Deep Q-Network은 Q-table 대신 심층 신경망을 사용하여 Q 함수를 근사하므로 고차원 상태 공간에서도 사용 가능한 강화학습 알고리즘입니다.',
              formulas: [],
              relatedConcepts: ['Q-Learning', '강화학습', 'Actor-Critic']
            },
            'Policy Gradient': {
              name: 'Policy Gradient',
              description: 'Policy Gradient는 가치 함수를 거치지 않고 정책(policy)을 직접 파라미터화하고 최적화하여 행동을 선택하는 강화학습 방법입니다.',
              formulas: ['gradient = E[sum(grad log pi(a|s) * R)]'],
              relatedConcepts: ['강화학습', 'Actor-Critic', 'Q-Learning']
            },
            'Actor-Critic': {
              name: 'Actor-Critic',
              description: 'Actor-Critic에서 Actor는 정책(행동 선택)을 담당하고, Critic은 그 행동의 가치를 평가합니다. Policy Gradient와 Value Function을 결합한 방법입니다.',
              formulas: [],
              relatedConcepts: ['Policy Gradient', '강화학습', 'DQN']
            }
          }
        },
        '전이학습과 학습 패러다임': {
          name: '전이학습과 학습 패러다임',
          description: 'Transfer Learning, Few-Shot, Zero-Shot, Self-Supervised, Active Learning 등 다양한 학습 패러다임',
          concepts: {
            'Transfer Learning': {
              name: 'Transfer Learning',
              description: 'Transfer Learning은 사전 학습된 모델의 지식을 활용하여 적은 데이터와 시간으로 새로운 과제를 학습하는 기법입니다.',
              formulas: [],
              relatedConcepts: ['Few-Shot', 'Zero-Shot', 'BERT']
            },
            'Few-Shot': {
              name: 'Few-Shot',
              description: 'Few-Shot Learning은 매우 적은 수의 레이블된 샘플만으로도 새로운 클래스를 학습하는 기법으로, 메타 학습과 함께 사용됩니다.',
              formulas: [],
              relatedConcepts: ['Zero-Shot', 'Transfer Learning', 'Multi-Task']
            },
            'Zero-Shot': {
              name: 'Zero-Shot',
              description: 'Zero-Shot Learning은 학습 시 보지 못한 클래스를 의미적 정보나 속성을 통해 예측하는 기법으로, 레이블 없이도 분류가 가능합니다.',
              formulas: [],
              relatedConcepts: ['Few-Shot', 'Transfer Learning', 'BERT']
            },
            'Multi-Task': {
              name: 'Multi-Task',
              description: 'Multi-Task Learning은 여러 관련 작업을 동시에 학습하여 공통 표현을 학습하고 일반화 성능을 향상시키는 기법입니다.',
              formulas: [],
              relatedConcepts: ['Transfer Learning', 'Few-Shot', 'BERT']
            },
            'Active Learning': {
              name: 'Active Learning',
              description: 'Active Learning은 모델이 가장 불확실한 샘플을 선택하여 레이블링 비용을 최소화하며 효율적으로 학습하는 기법입니다.',
              formulas: [],
              relatedConcepts: ['Self-Supervised', 'Few-Shot', 'Online Learning']
            },
            'Self-Supervised': {
              name: 'Self-Supervised',
              description: 'Self-Supervised Learning은 레이블 없이 데이터 자체에서 감독 신호(pretext task)를 생성하여 표현을 학습하는 기법입니다.',
              formulas: [],
              relatedConcepts: ['Contrastive Learning', 'Active Learning', 'BERT']
            },
            'Contrastive Learning': {
              name: 'Contrastive Learning',
              description: 'Contrastive Learning은 유사한 데이터는 가깝게, 다른 데이터는 멀게 배치하도록 학습하는 자기지도학습 기법입니다.',
              formulas: [],
              relatedConcepts: ['Self-Supervised', 'GAN', 'Transfer Learning']
            },
            'Online Learning': {
              name: 'Online Learning',
              description: 'Online Learning은 새로운 데이터가 도착할 때마다 모델을 점진적으로 업데이트하여 변화하는 패턴에 적응하는 학습 방식입니다.',
              formulas: [],
              relatedConcepts: ['Concept Drift', 'Active Learning', 'Federated Learning']
            },
            'Federated Learning': {
              name: 'Federated Learning',
              description: 'Federated Learning은 데이터를 중앙 서버로 전송하지 않고 분산된 디바이스에서 로컬로 학습한 후 모델만 공유하여 프라이버시를 보호합니다.',
              formulas: [],
              relatedConcepts: ['Differential Privacy', '프라이버시', 'Online Learning']
            },
            'Differential Privacy': {
              name: 'Differential Privacy',
              description: 'Differential Privacy는 데이터에 수학적으로 보장된 노이즈를 추가하여 개인정보를 보호하면서도 통계적 분석이 가능하게 하는 프라이버시 기법입니다.',
              formulas: ['P(M(D) in S) <= e^epsilon * P(M(D\') in S)'],
              relatedConcepts: ['Federated Learning', '프라이버시', '법규']
            }
          }
        },
        '모델 자동화와 경량화': {
          name: '모델 자동화와 경량화',
          description: 'AutoML, NAS, 모델 압축, Knowledge Distillation 등 모델 자동화 및 경량화 기법',
          concepts: {
            'AutoML': {
              name: 'AutoML',
              description: 'AutoML은 피처 엔지니어링, 모델 선택, 하이퍼파라미터 튜닝 등 머신러닝 과정을 자동화하여 접근성을 높입니다.',
              formulas: [],
              relatedConcepts: ['NAS', '교차검증', 'XGBoost']
            },
            'NAS': {
              name: 'NAS',
              description: 'Neural Architecture Search는 강화학습이나 진화 알고리즘을 사용하여 주어진 작업에 최적인 신경망 구조를 자동으로 탐색합니다.',
              formulas: [],
              relatedConcepts: ['AutoML', '강화학습', '딥러닝']
            },
            'Knowledge Distillation': {
              name: 'Knowledge Distillation',
              description: 'Knowledge Distillation은 큰 Teacher 모델의 지식(soft labels)을 작은 Student 모델에 전달하여 성능을 유지하면서 경량화합니다.',
              formulas: ['L = alpha * L_hard + (1-alpha) * L_soft'],
              relatedConcepts: ['Model Compression', 'Transfer Learning', '딥러닝']
            },
            'Model Compression': {
              name: 'Model Compression',
              description: 'Model Compression은 Pruning(가지치기), Quantization(양자화), Knowledge Distillation(지식 증류)을 통해 모델 크기를 줄이는 기법입니다.',
              formulas: [],
              relatedConcepts: ['Knowledge Distillation', 'NAS', 'AutoML']
            },
            'Focal Loss': {
              name: 'Focal Loss',
              description: 'Focal Loss는 쉬운 샘플의 가중치를 낮추고 어려운 샘플에 집중하여 클래스 불균형 문제를 개선하는 손실 함수입니다.',
              formulas: ['FL(p_t) = -alpha_t * (1-p_t)^gamma * log(p_t)'],
              relatedConcepts: ['불균형 데이터', 'SMOTE', '딥러닝']
            },
            '교차검증': {
              name: '교차검증',
              description: '교차 검증(Cross Validation)은 데이터를 K개 폴드로 나누어 모델의 일반화 성능을 평가하고 과적합을 방지하는 기법입니다.',
              formulas: [],
              relatedConcepts: ['AutoML', '과적합', '데이터 분할']
            }
          }
        }
      }
    },
    '빅데이터 결과 해석': {
      name: '빅데이터 결과 해석',
      description: '모델 성능 평가, 설명가능한 AI(XAI), 통계 검정, 모델 해석에 대한 영역',
      topics: {
        '분류 모델 평가': {
          name: '분류 모델 평가',
          description: '정밀도, 재현율, F1-Score, ROC-AUC, 혼동 행렬 등 분류 모델 평가 지표',
          concepts: {
            '평가지표': {
              name: '평가지표',
              description: '분류 모델의 주요 평가지표에는 Accuracy, Precision, Recall, F1-Score, ROC-AUC 등이 있습니다. AUC는 분류, MSE/RMSE/R^2는 회귀 평가에 사용됩니다.',
              formulas: ['Precision = TP / (TP + FP)', 'Recall = TP / (TP + FN)', 'Accuracy = (TP + TN) / Total'],
              relatedConcepts: ['F1-Score', 'ROC', 'Recall', 'MCC', '혼동 행렬']
            },
            'F1-Score': {
              name: 'F1-Score',
              description: 'F1-Score는 정밀도(Precision)와 재현율(Recall)의 조화 평균으로, 두 지표 사이의 균형을 측정합니다.',
              formulas: ['F1 = 2 * (Precision * Recall) / (Precision + Recall)'],
              relatedConcepts: ['평가지표', 'Recall', '혼동 행렬']
            },
            'Recall': {
              name: 'Recall',
              description: '재현율(Recall)은 실제 Positive 중 모델이 Positive로 올바르게 예측한 비율입니다. 민감도(Sensitivity)라고도 합니다.',
              formulas: ['Recall = TP / (TP + FN)'],
              relatedConcepts: ['평가지표', 'F1-Score', 'ROC']
            },
            'ROC': {
              name: 'ROC',
              description: 'ROC 곡선은 X축 FPR(False Positive Rate)과 Y축 TPR(True Positive Rate)의 관계를 나타냅니다. AUC가 1에 가까울수록 우수하지만 불균형 데이터에서는 주의가 필요합니다.',
              formulas: ['FPR = FP / (FP + TN)', 'TPR = TP / (TP + FN)'],
              relatedConcepts: ['평가지표', 'Recall', 'MCC']
            },
            '혼동 행렬': {
              name: '혼동 행렬',
              description: '혼동 행렬(Confusion Matrix)에서 Type I Error(제1종 오류)는 False Positive, Type II Error(제2종 오류)는 False Negative입니다.',
              formulas: ['TP, FP, TN, FN'],
              relatedConcepts: ['평가지표', 'F1-Score', '혼동행렬']
            },
            '혼동행렬': {
              name: '혼동행렬',
              description: '혼동행렬에서 Type I Error는 실제 Negative를 Positive로 잘못 판단하는 False Positive(FP)이며, Type II Error는 False Negative(FN)입니다.',
              formulas: [],
              relatedConcepts: ['혼동 행렬', '평가지표', 'Recall']
            },
            'MCC': {
              name: 'MCC',
              description: 'Matthews Correlation Coefficient는 -1(완전 불일치)부터 1(완전 일치) 사이 값으로, 불균형 데이터에서도 신뢰할 수 있는 분류 평가 지표입니다.',
              formulas: ['MCC = (TP*TN - FP*FN) / sqrt((TP+FP)(TP+FN)(TN+FP)(TN+FN))'],
              relatedConcepts: ['평가지표', 'F1-Score', 'ROC']
            }
          }
        },
        '회귀 모델 평가': {
          name: '회귀 모델 평가',
          description: 'MSE, RMSE, R-squared 등 회귀 모델 평가 지표와 잔차 분석',
          concepts: {
            '회귀': {
              name: '회귀',
              description: '회귀 모델의 평가지표에는 MSE(Mean Squared Error), RMSE(Root MSE), MAE(Mean Absolute Error), R^2(결정계수)가 있습니다. AUC는 분류용입니다.',
              formulas: ['MSE = (1/n) * sum((y - y_hat)^2)', 'R^2 = 1 - SS_res/SS_tot'],
              relatedConcepts: ['평가지표', 'Residual Plot', 'Bias-Variance']
            },
            'Residual Plot': {
              name: 'Residual Plot',
              description: 'Residual Plot에서 잔차가 무작위로 분포해야 모델의 가정(선형성, 등분산성 등)이 충족된 것으로 판단합니다. 패턴이 있으면 모델 부적합을 시사합니다.',
              formulas: ['Residual = y - y_hat'],
              relatedConcepts: ['회귀', '다중공선성', 'Bias-Variance']
            }
          }
        },
        '모델 진단과 선택': {
          name: '모델 진단과 선택',
          description: '교차검증, 과적합 진단, Bias-Variance Tradeoff, 학습 곡선 분석',
          concepts: {
            '교차검증': {
              name: '교차검증',
              description: '교차 검증(Cross Validation)은 모델의 일반화 성능을 평가하고, 과적합을 방지하며, 제한된 데이터를 효율적으로 활용하기 위한 방법입니다.',
              formulas: ['K-Fold CV: 데이터를 K개 폴드로 나누어 K번 평가'],
              relatedConcepts: ['과적합', 'Bias-Variance', 'Learning Curve']
            },
            '과적합': {
              name: '과적합',
              description: '과적합(Overfitting)은 모델이 훈련 데이터에 과하게 맞춰져 훈련 성능은 높지만 새로운 데이터에 대한 일반화 성능이 낮은 상태입니다.',
              formulas: [],
              relatedConcepts: ['교차검증', 'Bias-Variance', 'Learning Curve']
            },
            'Bias-Variance': {
              name: 'Bias-Variance',
              description: 'Bias-Variance Tradeoff에서 High Bias는 과소적합(모델이 너무 단순), High Variance는 과적합(모델이 너무 복잡)을 의미합니다.',
              formulas: ['Total Error = Bias^2 + Variance + Noise'],
              relatedConcepts: ['과적합', '교차검증', 'Learning Curve']
            },
            'Learning Curve': {
              name: 'Learning Curve',
              description: 'Learning Curve는 훈련 데이터 크기에 따른 훈련/검증 성능 변화를 보여주어 과적합(큰 갭)과 과소적합(두 곡선 모두 낮음)을 진단합니다.',
              formulas: [],
              relatedConcepts: ['Bias-Variance', '과적합', '교차검증']
            },
            'Calibration': {
              name: 'Calibration',
              description: 'Calibration Curve는 모델의 예측 확률이 실제 확률과 얼마나 일치하는지 평가합니다. 잘 보정된 모델은 대각선에 가까운 곡선을 보입니다.',
              formulas: [],
              relatedConcepts: ['평가지표', 'ROC', 'Bias-Variance']
            }
          }
        },
        '군집화 평가': {
          name: '군집화 평가',
          description: '군집화 결과 평가를 위한 Silhouette Score, 엘보우 방법 등',
          concepts: {
            '군집화': {
              name: '군집화',
              description: 'Silhouette Score는 -1에서 1 사이의 값으로, 1에 가까울수록 군집화가 잘 된 것입니다. 군집 내 거리와 군집 간 거리의 비율로 평가합니다.',
              formulas: ['s(i) = (b(i) - a(i)) / max(a(i), b(i))'],
              relatedConcepts: ['엘보우 방법', 'K-Means', '비지도 학습']
            },
            '엘보우 방법': {
              name: '엘보우 방법',
              description: '엘보우 방법은 K값에 따른 SSE(Sum of Squared Errors) 변화를 그래프로 그려 꺾이는 지점(elbow)을 최적의 군집 수로 결정합니다.',
              formulas: ['SSE = sum(||x_i - c_k||^2)'],
              relatedConcepts: ['군집화', 'K-Means']
            }
          }
        },
        '설명가능한 AI (XAI)': {
          name: '설명가능한 AI (XAI)',
          description: 'SHAP, LIME, Feature Importance, PDP 등 모델 해석 기법',
          concepts: {
            'SHAP': {
              name: 'SHAP',
              description: 'SHAP(SHapley Additive exPlanations)은 게임 이론의 Shapley value를 기반으로 각 피처가 예측에 기여하는 정도를 공정하게 분배하여 설명하는 XAI 기법입니다.',
              formulas: ['phi_i = sum(|S|!(n-|S|-1)!/n! * [f(S ∪ {i}) - f(S)])'],
              relatedConcepts: ['LIME', 'Feature Importance', 'PDP']
            },
            'LIME': {
              name: 'LIME',
              description: 'LIME(Local Interpretable Model-agnostic Explanations)은 예측 주변에서 선형 모델로 국소적으로 근사하여 블랙박스 모델의 개별 예측을 설명합니다.',
              formulas: [],
              relatedConcepts: ['SHAP', 'Feature Importance', 'PDP']
            },
            'Feature Importance': {
              name: 'Feature Importance',
              description: '변수 중요도를 측정하는 방법으로 Permutation Importance(변수 값을 무작위로 섞어 성능 변화 측정), 트리 기반 중요도 등이 있습니다. KNN은 직접 제공하지 않습니다.',
              formulas: [],
              relatedConcepts: ['SHAP', 'LIME', 'PDP']
            },
            'PDP': {
              name: 'PDP',
              description: 'Partial Dependence Plot은 다른 변수를 평균화하여 특정 변수가 예측값에 미치는 평균적 영향을 시각화하는 전역적 해석 기법입니다.',
              formulas: ['PD(x_s) = (1/n) * sum(f(x_s, x_c^i))'],
              relatedConcepts: ['SHAP', 'LIME', 'Feature Importance']
            }
          }
        },
        '통계 검정과 실험': {
          name: '통계 검정과 실험',
          description: 'A/B 테스트, p-value, Lift Chart 등 통계 기반 검증 및 실험 설계',
          concepts: {
            'A/B 테스트': {
              name: 'A/B 테스트',
              description: 'A/B 테스트는 두 가지 버전의 성과를 비교하는 실험으로, 무작위 배정과 통계적 유의성 검정이 필요하며 한 번에 하나의 변수만 변경합니다.',
              formulas: [],
              relatedConcepts: ['A/B테스트', 'p-value', '통계검정']
            },
            'A/B테스트': {
              name: 'A/B테스트',
              description: 'A/B 테스트에서는 두 그룹의 평균 차이를 검정하기 위해 주로 t-검정을 사용합니다. Champion/Challenger 테스트는 기존 모델과 신규 모델을 동시 비교합니다.',
              formulas: [],
              relatedConcepts: ['A/B 테스트', '통계검정', 'p-value']
            },
            'p-value': {
              name: 'p-value',
              description: 'p-value는 0과 1 사이의 확률값으로, 유의수준(보통 0.05) 미만이면 통계적으로 유의하다고 판단합니다.',
              formulas: [],
              relatedConcepts: ['A/B 테스트', 'A/B테스트', '통계검정']
            },
            'Lift Chart': {
              name: 'Lift Chart',
              description: 'Lift Chart는 분류 모델이 무작위 선택 대비 얼마나 효과적인지 평가하는 시각화 도구입니다. 상위 분위에서의 Lift가 높을수록 모델이 효과적입니다.',
              formulas: ['Lift = (TP/(TP+FP)) / (P/Total)'],
              relatedConcepts: ['ROC', 'CAP', '평가지표']
            },
            'CAP': {
              name: 'CAP',
              description: 'Cumulative Accuracy Profile은 분류 모델의 누적 정확도를 시각화하여 모델의 식별 능력을 평가합니다. 완벽한 모델에 가까울수록 좋습니다.',
              formulas: [],
              relatedConcepts: ['Lift Chart', 'ROC', '평가지표']
            },
            'Business Value': {
              name: 'Business Value',
              description: 'Business Value Framework는 모델 평가 시 비즈니스 영향, 구현 비용, 모델 복잡도를 고려하며, 알고리즘 이름 자체는 중요한 평가 기준이 아닙니다.',
              formulas: [],
              relatedConcepts: ['KPI', 'A/B 테스트', '평가지표']
            }
          }
        }
      }
    },
    '빅데이터 플랫폼': {
      name: '빅데이터 플랫폼',
      description: '빅데이터 인프라, 스트리밍 처리, 컨테이너, 클라우드 플랫폼, 데이터 레이크 기술에 대한 영역',
      topics: {
        '스트리밍 처리': {
          name: '스트리밍 처리',
          description: 'Kafka, Flink 등 실시간 데이터 스트리밍 처리 플랫폼',
          concepts: {
            'Kafka': {
              name: 'Kafka',
              description: 'Apache Kafka는 Producer(발행), Consumer(소비), Broker(저장)로 구성된 대규모 실시간 데이터 스트리밍을 위한 분산 메시징 시스템입니다.',
              formulas: [],
              relatedConcepts: ['Flink', 'Spark', 'Airflow']
            },
            'Flink': {
              name: 'Flink',
              description: 'Apache Flink는 실시간 스트리밍과 배치 처리를 모두 지원하는 통합 스트림 처리 엔진으로, exactly-once 보장을 제공합니다.',
              formulas: [],
              relatedConcepts: ['Kafka', 'Spark', 'Delta Lake']
            }
          }
        },
        '컨테이너와 오케스트레이션': {
          name: '컨테이너와 오케스트레이션',
          description: 'Docker, Kubernetes 등 컨테이너 기술',
          concepts: {
            'Docker': {
              name: 'Docker',
              description: 'Docker는 OS 수준 가상화로 경량 컨테이너를 제공하며, 이식성이 높습니다. VM의 하드웨어 수준 가상화와는 다릅니다.',
              formulas: [],
              relatedConcepts: ['Kubernetes', 'MLflow', 'Airflow']
            },
            'Kubernetes': {
              name: 'Kubernetes',
              description: 'Kubernetes는 컨테이너화된 애플리케이션의 배포, 확장, 관리를 자동화하는 컨테이너 오케스트레이션 플랫폼입니다.',
              formulas: [],
              relatedConcepts: ['Docker', 'MLflow', 'Airflow']
            }
          }
        },
        'MLOps 플랫폼': {
          name: 'MLOps 플랫폼',
          description: 'MLflow, Databricks 등 ML 운영 및 분석 플랫폼',
          concepts: {
            'MLflow': {
              name: 'MLflow',
              description: 'MLflow는 ML 실험 추적(Tracking), 모델 레지스트리(Registry), 모델 배포(Serving)를 지원하는 오픈소스 MLOps 플랫폼입니다.',
              formulas: [],
              relatedConcepts: ['Databricks', 'Model Registry', 'Docker']
            },
            'Databricks': {
              name: 'Databricks',
              description: 'Databricks는 Apache Spark 기반의 통합 분석 플랫폼으로, 데이터 엔지니어링, 데이터 사이언스, 비즈니스 분석을 통합 지원합니다.',
              formulas: [],
              relatedConcepts: ['Spark', 'MLflow', 'Delta Lake']
            }
          }
        },
        '데이터 레이크 기술': {
          name: '데이터 레이크 기술',
          description: 'Delta Lake, Iceberg, Hudi 등 데이터 레이크 테이블 포맷과 스토리지',
          concepts: {
            'Delta Lake': {
              name: 'Delta Lake',
              description: 'Delta Lake는 Data Lake에 ACID 트랜잭션, Time Travel, Schema Evolution을 제공하는 오픈소스 스토리지 레이어로, 배치/스트리밍 모두 지원합니다.',
              formulas: [],
              relatedConcepts: ['Iceberg', 'Hudi', 'Databricks']
            },
            'Iceberg': {
              name: 'Iceberg',
              description: 'Apache Iceberg는 대규모 분석을 위한 오픈 테이블 포맷으로, ACID 트랜잭션, Time Travel, Schema Evolution을 지원합니다.',
              formulas: [],
              relatedConcepts: ['Delta Lake', 'Hudi', 'Snowflake']
            },
            'Hudi': {
              name: 'Hudi',
              description: 'Apache Hudi는 Hadoop에서 증분 데이터 처리, Upsert, Delete를 효율적으로 지원하는 데이터 레이크 스토리지 레이어입니다.',
              formulas: [],
              relatedConcepts: ['Delta Lake', 'Iceberg', 'Hadoop']
            },
            'MinIO': {
              name: 'MinIO',
              description: 'MinIO는 Amazon S3 호환 오픈소스 객체 스토리지 서버로, 고성능 분산 스토리지를 제공합니다.',
              formulas: [],
              relatedConcepts: ['Delta Lake', 'Redshift', 'Snowflake']
            }
          }
        },
        '클라우드 데이터 웨어하우스': {
          name: '클라우드 데이터 웨어하우스',
          description: 'Snowflake, Redshift 등 클라우드 기반 데이터 웨어하우스',
          concepts: {
            'Snowflake': {
              name: 'Snowflake',
              description: 'Snowflake는 클라우드 네이티브 데이터 웨어하우스로, 스토리지와 컴퓨팅을 분리하여 독립적으로 확장할 수 있습니다.',
              formulas: [],
              relatedConcepts: ['Redshift', 'Databricks', 'Presto']
            },
            'Redshift': {
              name: 'Redshift',
              description: 'Amazon Redshift는 AWS 클라우드 데이터 웨어하우스이며, Redshift Spectrum으로 S3 데이터를 직접 쿼리할 수 있습니다.',
              formulas: [],
              relatedConcepts: ['Snowflake', 'Databricks', 'MinIO']
            }
          }
        },
        'API와 데이터 변환': {
          name: 'API와 데이터 변환',
          description: 'GraphQL, dbt, Presto, Pinot 등 데이터 접근 및 변환 도구',
          concepts: {
            'GraphQL': {
              name: 'GraphQL',
              description: 'GraphQL은 클라이언트가 필요한 데이터만 요청할 수 있는 단일 엔드포인트 API 쿼리 언어로, REST API의 대안입니다.',
              formulas: [],
              relatedConcepts: ['Presto', 'SQL', 'dbt']
            },
            'dbt': {
              name: 'dbt',
              description: 'dbt(data build tool)는 SQL을 사용하여 데이터 변환(Transform)을 정의하고 실행하는 ELT 도구로, 버전 관리와 테스트를 지원합니다.',
              formulas: [],
              relatedConcepts: ['ETL', 'Snowflake', 'Redshift']
            },
            'Presto': {
              name: 'Presto',
              description: 'Presto(Trino)는 여러 데이터 소스에 대한 대화형 분산 SQL 쿼리를 지원하는 엔진으로, HDFS, S3, RDBMS 등 다양한 소스를 연결합니다.',
              formulas: [],
              relatedConcepts: ['Snowflake', 'GraphQL', 'Spark']
            },
            'Pinot': {
              name: 'Pinot',
              description: 'Apache Pinot은 실시간 분산 OLAP 데이터 저장소로, 낮은 지연시간의 분석 쿼리를 지원하며 LinkedIn에서 개발되었습니다.',
              formulas: [],
              relatedConcepts: ['Presto', 'Kafka', 'Flink']
            },
            'Airflow': {
              name: 'Airflow',
              description: 'Apache Airflow는 DAG(Directed Acyclic Graph)로 워크플로우를 정의하여 데이터 파이프라인을 스케줄링하고 모니터링합니다.',
              formulas: [],
              relatedConcepts: ['dbt', 'Kafka', 'ETL']
            }
          }
        }
      }
    }
  }
};
