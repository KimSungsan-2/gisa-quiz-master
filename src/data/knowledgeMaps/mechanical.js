// 일반기계기사 지식맵 (General Mechanical Engineer Knowledge Map)
export const mechanicalKnowledgeMap = {
  certId: 'mechanical',
  subjects: {
    '재료역학': {
      name: '재료역학',
      description: '외력에 의한 재료의 응력, 변형률, 강도 및 안정성을 해석하는 학문',
      topics: {
        '응력과 변형': {
          name: '응력과 변형',
          description: '외력에 의해 재료 내부에 발생하는 응력과 변형의 기본 개념',
          concepts: {
            '응력': {
              name: '응력(Stress)',
              description: '단위 면적당 작용하는 내력',
              formulas: ['σ = P/A', 'τ = V/A'],
              relatedConcepts: ['변형률', '전단응력', '안전율']
            },
            '변형률': {
              name: '변형률(Strain)',
              description: '원래 길이에 대한 변형량의 비',
              formulas: ['ε = ΔL/L'],
              relatedConcepts: ['응력', '훅의 법칙', '푸아송 비']
            },
            '훅의 법칙': {
              name: '훅의 법칙(Hooke\'s Law)',
              description: '탄성 한도 내에서 응력과 변형률의 비례 관계',
              formulas: ['σ = Eε', 'τ = Gγ'],
              relatedConcepts: ['탄성계수', '응력', '변형률']
            },
            '탄성계수': {
              name: '탄성계수(Young\'s Modulus)',
              description: '응력과 변형률의 비로 재료의 강성을 나타내는 상수',
              formulas: ['E = σ/ε'],
              relatedConcepts: ['훅의 법칙', '푸아송 비', '변형률']
            },
            '푸아송 비': {
              name: '푸아송 비(Poisson\'s Ratio)',
              description: '횡방향 변형률과 축방향 변형률의 비',
              formulas: ['ν = -ε_횡/ε_축', 'E = 2G(1+ν)'],
              relatedConcepts: ['변형률', '탄성계수']
            },
            '전단응력': {
              name: '전단응력(Shear Stress)',
              description: '면에 평행하게 작용하여 물체를 미끄러지게 하는 응력',
              formulas: ['τ = V/A', 'τ = Tr/J'],
              relatedConcepts: ['응력', '비틀림', '주응력']
            },
            '충격': {
              name: '충격(Impact)',
              description: '짧은 시간에 작용하는 하중으로 정하중보다 큰 응력 발생',
              formulas: ['σ_충격 = σ_정(1 + √(1 + 2h/δ))'],
              relatedConcepts: ['응력', '탄성에너지']
            }
          }
        },
        '단면의 성질': {
          name: '단면의 성질',
          description: '보와 축의 단면에 관한 기하학적 성질',
          concepts: {
            '관성모멘트': {
              name: '관성모멘트(Moment of Inertia)',
              description: '단면 2차 모멘트로 굽힘 강성을 결정하는 기하 성질',
              formulas: ['I_원형 = πd⁴/64', 'I_사각형 = bh³/12'],
              relatedConcepts: ['극관성모멘트', '단면', '굽힘모멘트']
            },
            '극관성모멘트': {
              name: '극관성모멘트(Polar Moment of Inertia)',
              description: '비틀림 강성을 결정하는 단면의 기하학적 성질',
              formulas: ['J = πd⁴/32', 'J = Ix + Iy'],
              relatedConcepts: ['관성모멘트', '비틀림', '단면']
            },
            '단면': {
              name: '단면(Cross Section)',
              description: '보와 축의 단면 형상에 따른 역학적 특성',
              formulas: ['Z = I/y_max (단면계수)'],
              relatedConcepts: ['관성모멘트', '극관성모멘트', '굽힘모멘트']
            }
          }
        },
        '보와 굽힘': {
          name: '보와 굽힘',
          description: '보에 작용하는 굽힘모멘트와 전단력 해석',
          concepts: {
            '굽힘모멘트': {
              name: '굽힘모멘트(Bending Moment)',
              description: '보를 굽히려는 모멘트, 최대 굽힘응력 결정',
              formulas: ['σ = My/I', 'σ_max = M/Z'],
              relatedConcepts: ['관성모멘트', '단면', '응력']
            },
            '비틀림': {
              name: '비틀림(Torsion)',
              description: '축에 비틀림 모멘트가 작용하여 전단응력 발생',
              formulas: ['τ = Tr/J', 'θ = TL/GJ'],
              relatedConcepts: ['전단응력', '극관성모멘트']
            }
          }
        },
        '기둥과 좌굴': {
          name: '기둥과 좌굴',
          description: '축방향 압축력을 받는 기둥의 좌굴 현상',
          concepts: {
            '좌굴': {
              name: '좌굴(Buckling)',
              description: '압축력에 의해 기둥이 갑자기 옆으로 휘는 불안정 현상',
              formulas: ['P_cr = π²EI/L²'],
              relatedConcepts: ['세장비', '탄성계수', '관성모멘트']
            },
            '세장비': {
              name: '세장비(Slenderness Ratio)',
              description: '기둥의 유효길이와 단면2차반경의 비로 좌굴 판정 지표',
              formulas: ['λ = L/r', 'r = √(I/A)'],
              relatedConcepts: ['좌굴', '관성모멘트']
            }
          }
        },
        '응력 해석': {
          name: '응력 해석',
          description: '복합 응력 상태에서의 주응력, 모어 원, 안전율 해석',
          concepts: {
            '모어 원': {
              name: '모어 원(Mohr\'s Circle)',
              description: '2차원 응력 상태를 그래픽으로 해석하는 방법',
              formulas: ['R = √((σx-σy)/2)² + τxy²)', 'σ_1,2 = (σx+σy)/2 ± R'],
              relatedConcepts: ['주응력', '전단응력', '응력']
            },
            '주응력': {
              name: '주응력(Principal Stress)',
              description: '전단응력이 0인 면에서의 수직응력, 최대/최소 응력',
              formulas: ['σ_1,2 = (σx+σy)/2 ± √(((σx-σy)/2)² + τxy²)'],
              relatedConcepts: ['모어 원', '전단응력']
            },
            '안전율': {
              name: '안전율(Safety Factor)',
              description: '극한강도 또는 항복강도를 허용응력으로 나눈 값',
              formulas: ['S = σ_극한/σ_허용', 'S = σ_항복/σ_허용'],
              relatedConcepts: ['응력', '좌굴']
            },
            '박막': {
              name: '박막(Thin Wall)',
              description: '벽 두께가 지름에 비해 매우 얇은 압력용기의 응력 해석',
              formulas: ['σ_원주 = pr/t', 'σ_축 = pr/2t'],
              relatedConcepts: ['응력', '안전율']
            }
          }
        },
        '에너지와 특수현상': {
          name: '에너지와 특수현상',
          description: '탄성 에너지, 크리프, 유한요소해석 등 고급 주제',
          concepts: {
            '탄성에너지': {
              name: '탄성에너지(Strain Energy)',
              description: '탄성 변형에 의해 재료에 저장되는 에너지',
              formulas: ['U = σ²V/2E', 'U = P²L/2AE'],
              relatedConcepts: ['응력', '변형률', '충격']
            },
            '크리프': {
              name: '크리프(Creep)',
              description: '고온에서 일정 하중 하에 시간에 따라 변형이 증가하는 현상',
              formulas: [],
              relatedConcepts: ['응력', '변형률']
            },
            'FEA': {
              name: 'FEA(Finite Element Analysis)',
              description: '구조를 유한개 요소로 나누어 응력과 변형을 근사 계산하는 수치해석법',
              formulas: ['[K]{u} = {F}'],
              relatedConcepts: ['응력', '굽힘모멘트', '관성모멘트']
            }
          }
        }
      }
    },
    '열역학': {
      name: '열역학',
      description: '열과 일의 상호 변환, 에너지 보존 및 엔트로피에 관한 학문',
      topics: {
        '열역학 법칙': {
          name: '열역학 법칙',
          description: '열역학의 기본 법칙과 원리',
          concepts: {
            '열역학 제1법칙': {
              name: '열역학 제1법칙(First Law)',
              description: '에너지 보존 법칙으로, 에너지는 형태만 변할 뿐 총량은 일정',
              formulas: ['Q = ΔU + W', 'dU = δQ - δW'],
              relatedConcepts: ['열역학 제2법칙', '엔탈피', '열역학']
            },
            '열역학 제2법칙': {
              name: '열역학 제2법칙(Second Law)',
              description: '고립계의 엔트로피는 항상 증가하거나 일정',
              formulas: ['dS ≥ δQ/T'],
              relatedConcepts: ['열역학 제1법칙', '엔트로피', '카르노']
            },
            '열역학': {
              name: '열역학(Thermodynamics)',
              description: '열과 일의 상호 변환 및 에너지 전달 과정을 다루는 기본 원리',
              formulas: [],
              relatedConcepts: ['열역학 제1법칙', '열역학 제2법칙', '엔탈피']
            }
          }
        },
        '열역학 상태량': {
          name: '열역학 상태량',
          description: '엔탈피, 엔트로피, 비열 등 열역학적 상태를 나타내는 물리량',
          concepts: {
            '엔탈피': {
              name: '엔탈피(Enthalpy)',
              description: '내부에너지와 유동일의 합으로 정의되는 상태량',
              formulas: ['H = U + PV', 'h = u + pv'],
              relatedConcepts: ['열역학 제1법칙', '비열', '엔트로피']
            },
            '엔트로피': {
              name: '엔트로피(Entropy)',
              description: '열역학계의 무질서도를 나타내는 상태량',
              formulas: ['dS = δQ_rev/T'],
              relatedConcepts: ['열역학 제2법칙', '카르노', '단열과정']
            },
            '비열': {
              name: '비열(Specific Heat)',
              description: '단위 질량의 물질 온도를 1도 올리는 데 필요한 열량',
              formulas: ['Q = mcΔT', 'Cp - Cv = R'],
              relatedConcepts: ['엔탈피', '이상기체']
            }
          }
        },
        '이상기체와 과정': {
          name: '이상기체와 과정',
          description: '이상기체 상태방정식과 다양한 열역학적 과정',
          concepts: {
            '이상기체': {
              name: '이상기체(Ideal Gas)',
              description: '분자 간 상호작용이 없는 가상의 기체로 상태방정식을 따름',
              formulas: ['PV = nRT', 'Pv = RT'],
              relatedConcepts: ['비열', '등온과정', '단열과정']
            },
            '등온과정': {
              name: '등온과정(Isothermal Process)',
              description: '온도가 일정하게 유지되는 열역학적 과정',
              formulas: ['PV = 일정', 'W = nRT ln(V2/V1)'],
              relatedConcepts: ['이상기체', '단열과정', '카르노']
            },
            '단열과정': {
              name: '단열과정(Adiabatic Process)',
              description: '계와 외부 사이에 열 출입이 없는 과정 (Q = 0)',
              formulas: ['PV^k = 일정', 'T1/T2 = (P1/P2)^((k-1)/k)'],
              relatedConcepts: ['등온과정', '이상기체', '엔트로피']
            }
          }
        },
        '열기관 사이클': {
          name: '열기관 사이클',
          description: '카르노, 오토, 디젤, 브레이튼 등 열기관의 이론적 사이클',
          concepts: {
            '카르노': {
              name: '카르노 사이클(Carnot Cycle)',
              description: '이상적 가역 사이클로 최대 열효율을 제공',
              formulas: ['η = 1 - TL/TH'],
              relatedConcepts: ['열역학 제2법칙', '등온과정', '단열과정']
            },
            '오토 사이클': {
              name: '오토 사이클(Otto Cycle)',
              description: '가솔린 기관의 이론적 사이클, 정적 연소',
              formulas: ['η = 1 - 1/r^(k-1)'],
              relatedConcepts: ['디젤 사이클', '카르노', '오토사이클']
            },
            '오토사이클': {
              name: '오토 사이클 효율(Otto Cycle Efficiency)',
              description: '압축비에 따른 오토 사이클의 열효율 변화',
              formulas: ['η = 1 - 1/r^(k-1)'],
              relatedConcepts: ['오토 사이클', '카르노', '디젤 사이클']
            },
            '디젤 사이클': {
              name: '디젤 사이클(Diesel Cycle)',
              description: '디젤 기관의 이론적 사이클, 정압 연소',
              formulas: ['η = 1 - (1/r^(k-1)) × ((σ^k - 1)/(k(σ-1)))'],
              relatedConcepts: ['오토 사이클', '카르노', '브레이튼']
            },
            '브레이튼': {
              name: '브레이튼 사이클(Brayton Cycle)',
              description: '가스터빈의 이론적 사이클, 단열 압축-등압 가열-단열 팽창-등압 냉각',
              formulas: ['η = 1 - 1/rp^((k-1)/k)'],
              relatedConcepts: ['카르노', '오토 사이클', '디젤 사이클']
            },
            '랭킨': {
              name: '랭킨 사이클(Rankine Cycle)',
              description: '증기 터빈(발전소)의 이론적 사이클',
              formulas: ['η = (h1 - h2)/(h1 - h4)'],
              relatedConcepts: ['카르노', '재생사이클', '엔탈피']
            },
            '스털링': {
              name: '스털링 사이클(Stirling Cycle)',
              description: '2개의 등온과 2개의 등적 과정으로 구성된 사이클',
              formulas: ['η_이상 = 1 - TL/TH (카르노 효율과 동일)'],
              relatedConcepts: ['카르노', '등온과정']
            },
            '재생사이클': {
              name: '재생 사이클(Regenerative Cycle)',
              description: '배기 가스의 폐열을 회수하여 열효율을 향상시키는 사이클',
              formulas: [],
              relatedConcepts: ['랭킨', '브레이튼', '카르노']
            }
          }
        },
        '냉동과 열펌프': {
          name: '냉동과 열펌프',
          description: '냉동기, 히트펌프의 성능계수와 원리',
          concepts: {
            'COP': {
              name: '성능계수(COP, Coefficient of Performance)',
              description: '냉동기의 냉동효과를 투입일로 나눈 성능 지표',
              formulas: ['COP_냉동 = QL/W', 'COP_난방 = QH/W'],
              relatedConcepts: ['히트펌프', '카르노']
            },
            '히트펌프': {
              name: '히트펌프(Heat Pump)',
              description: '저온에서 고온으로 열을 전달하는 장치, COP는 냉동기+1',
              formulas: ['COP_HP = COP_R + 1', 'COP_HP = QH/W'],
              relatedConcepts: ['COP', '카르노']
            },
            '조절단열': {
              name: '조절 단열(Throttling)',
              description: '팽창밸브를 통한 비가역 팽창으로 엔탈피가 일정',
              formulas: ['h1 = h2 (등엔탈피)'],
              relatedConcepts: ['엔탈피', 'COP']
            }
          }
        },
        '열전달 및 습도': {
          name: '열전달 및 습도',
          description: '열전달 방식, 열교환기, 습도 측정 등',
          concepts: {
            'LMTD': {
              name: 'LMTD(Log Mean Temperature Difference)',
              description: '열교환기 양단의 온도차를 대수 평균하여 열전달량을 계산',
              formulas: ['LMTD = (ΔT1 - ΔT2)/ln(ΔT1/ΔT2)', 'Q = UA × LMTD'],
              relatedConcepts: ['대류', '히트파이프']
            },
            '대류': {
              name: '대류(Convection)',
              description: '유체의 움직임에 의한 열전달로 유속, 점성 등에 영향',
              formulas: ['Q = hA(Ts - T∞)', 'Nu = hL/k'],
              relatedConcepts: ['LMTD', '히트파이프']
            },
            '히트파이프': {
              name: '히트파이프(Heat Pipe)',
              description: '작동 유체의 증발과 응축(상변화 잠열)을 이용한 고효율 열전달 장치',
              formulas: [],
              relatedConcepts: ['대류', 'LMTD']
            },
            '습도': {
              name: '습도(Humidity)',
              description: '공기 중 수증기량의 정도, 건습구 온도계/모발 습도계 등으로 측정',
              formulas: ['상대습도 = (수증기분압/포화증기압) × 100%'],
              relatedConcepts: ['비열', '이상기체']
            }
          }
        }
      }
    },
    '유체역학': {
      name: '유체역학',
      description: '정지 또는 운동하는 유체의 역학적 거동을 해석하는 학문',
      topics: {
        '유체의 기본 성질': {
          name: '유체의 기본 성질',
          description: '밀도, 점성, 압력 등 유체의 기본 물리적 특성',
          concepts: {
            '밀도': {
              name: '밀도(Density)',
              description: '단위 체적당 질량',
              formulas: ['ρ = m/V'],
              relatedConcepts: ['점성', '부력', '레이놀즈 수']
            },
            '점성': {
              name: '점성(Viscosity)',
              description: '유체 흐름에 대한 저항, 유체 내 마찰력의 원인',
              formulas: ['τ = μ(du/dy)', 'ν = μ/ρ'],
              relatedConcepts: ['밀도', '레이놀즈 수', '층류']
            },
            '정수압': {
              name: '정수압(Hydrostatic Pressure)',
              description: '정지 유체에서 깊이에 비례하고 모든 방향으로 동일한 압력',
              formulas: ['P = ρgh', 'P = P₀ + ρgh'],
              relatedConcepts: ['파스칼', '부력', '압력']
            },
            '압력': {
              name: '압력(Pressure)',
              description: '단위 면적당 작용하는 힘, 정압/동압/전압으로 구분',
              formulas: ['P = F/A', '전압 = 정압 + 동압', '동압 = ½ρV²'],
              relatedConcepts: ['정수압', '파스칼', '베르누이']
            }
          }
        },
        '유체 정역학': {
          name: '유체 정역학',
          description: '정지 유체에 작용하는 힘과 압력에 관한 원리',
          concepts: {
            '파스칼': {
              name: '파스칼의 원리(Pascal\'s Principle)',
              description: '밀폐된 유체에 가한 압력은 모든 방향으로 동일하게 전달',
              formulas: ['P1 = P2', 'F1/A1 = F2/A2'],
              relatedConcepts: ['정수압', '부력', '압력측정']
            },
            '부력': {
              name: '부력(Buoyancy)',
              description: '물체가 배제한 유체의 무게와 같은 상향력 (아르키메데스의 원리)',
              formulas: ['F_b = ρ_f × g × V_잠긴'],
              relatedConcepts: ['밀도', '정수압', '파스칼']
            },
            '압력측정': {
              name: '압력 측정(Pressure Measurement)',
              description: '마노미터 등 액주 높이 차이를 이용한 압력 측정',
              formulas: ['ΔP = ρgΔh'],
              relatedConcepts: ['정수압', '파스칼']
            }
          }
        },
        '유체 동역학': {
          name: '유체 동역학',
          description: '유체 유동의 기본 방정식과 에너지 보존',
          concepts: {
            '베르누이': {
              name: '베르누이 방정식(Bernoulli Equation)',
              description: '유선을 따라 에너지가 보존됨을 나타내는 방정식 (비압축성, 비점성, 정상류)',
              formulas: ['P + ½ρV² + ρgz = 일정'],
              relatedConcepts: ['연속방정식', '압력', '피토관']
            },
            '연속방정식': {
              name: '연속 방정식(Continuity Equation)',
              description: '질량 보존을 나타내는 유체 기본 방정식',
              formulas: ['A₁V₁ = A₂V₂', 'ρ₁A₁V₁ = ρ₂A₂V₂'],
              relatedConcepts: ['베르누이', '밀도']
            },
            '토리첼리': {
              name: '토리첼리 정리(Torricelli\'s Theorem)',
              description: '용기에서 유출되는 유체의 속도를 구하는 공식',
              formulas: ['V = √(2gh)'],
              relatedConcepts: ['베르누이', '연속방정식']
            }
          }
        },
        '유동 분류와 무차원수': {
          name: '유동 분류와 무차원수',
          description: '레이놀즈 수, 층류/난류, 무차원수 등 유동의 분류와 특성',
          concepts: {
            '레이놀즈 수': {
              name: '레이놀즈 수(Reynolds Number)',
              description: '관성력/점성력의 비로 층류/난류 판별에 사용',
              formulas: ['Re = ρVL/μ = VL/ν'],
              relatedConcepts: ['층류', '난류', '레이놀즈수']
            },
            '레이놀즈수': {
              name: '레이놀즈수(Reynolds Number)',
              description: '관성력과 점성력의 비로 유동 상태를 판단하는 무차원수',
              formulas: ['Re = ρVD/μ'],
              relatedConcepts: ['레이놀즈 수', '층류', '난류']
            },
            '층류': {
              name: '층류(Laminar Flow)',
              description: '유체가 규칙적으로 층을 이루며 흐르는 유동 (Re < 2300)',
              formulas: ['Re < 2300 (원관 기준)'],
              relatedConcepts: ['레이놀즈 수', '난류', '점성']
            },
            '난류': {
              name: '난류(Turbulent Flow)',
              description: '유체가 불규칙적으로 혼합되며 흐르는 유동 (Re > 4000)',
              formulas: ['Re > 4000 (원관 기준)'],
              relatedConcepts: ['층류', '레이놀즈 수', '경계층']
            },
            '무차원수': {
              name: '무차원수(Dimensionless Number)',
              description: '레이놀즈, 마하, 프루드 수 등 물리량의 비로 표현되는 무차원 지표',
              formulas: ['Re = ρVL/μ', 'Ma = V/a', 'Fr = V/√(gL)'],
              relatedConcepts: ['레이놀즈 수', '항력']
            }
          }
        },
        '유량 측정과 배관': {
          name: '유량 측정과 배관',
          description: '피토관, 벤투리미터, 수력직경 등 유량 측정 및 배관 해석',
          concepts: {
            '피토관': {
              name: '피토관(Pitot Tube)',
              description: '정압과 전압의 차이를 이용하여 유속을 측정하는 장치',
              formulas: ['V = √(2(P_전 - P_정)/ρ)'],
              relatedConcepts: ['베르누이', '벤투리', '압력측정']
            },
            '벤투리': {
              name: '벤투리미터(Venturi Meter)',
              description: '베르누이 원리를 이용하여 유량을 측정하는 장치',
              formulas: ['Q = CdA₂√(2ΔP/(ρ(1-(A₂/A₁)²)))'],
              relatedConcepts: ['베르누이', '피토관', '연속방정식']
            },
            '수력직경': {
              name: '수력직경(Hydraulic Diameter)',
              description: '비원형 관의 유동 해석을 위한 등가 직경',
              formulas: ['Dh = 4A/P'],
              relatedConcepts: ['레이놀즈 수', '층류', '난류']
            }
          }
        },
        '외부유동과 특수현상': {
          name: '외부유동과 특수현상',
          description: '경계층, 항력, 양력, 캐비테이션, 수격현상 등',
          concepts: {
            '경계층': {
              name: '경계층(Boundary Layer)',
              description: '고체 표면 근처에서 점성의 영향으로 유속이 변하는 영역',
              formulas: ['δ ∝ √(νx/U)'],
              relatedConcepts: ['점성', '층류', '난류']
            },
            '항력': {
              name: '항력(Drag)',
              description: '유체 속을 이동하는 물체에 대한 저항력',
              formulas: ['F_D = ½CdρV²A'],
              relatedConcepts: ['양력', '레이놀즈 수', '경계층']
            },
            '양력': {
              name: '양력(Lift)',
              description: '날개 위아래 압력 차이로 발생하는 수직방향 힘',
              formulas: ['F_L = ½CLρV²A'],
              relatedConcepts: ['항력', '베르누이']
            },
            '캐비테이션': {
              name: '캐비테이션(Cavitation)',
              description: '국부 압력이 증기압 이하로 떨어져 기포가 발생하고 붕괴하는 현상',
              formulas: ['NPSH_available > NPSH_required'],
              relatedConcepts: ['펌프', '압력', '수격']
            },
            '수격': {
              name: '수격(Water Hammer)',
              description: '밸브 급폐쇄 시 운동에너지가 압력에너지로 변환되어 압력 급상승',
              formulas: ['ΔP = ρcV'],
              relatedConcepts: ['캐비테이션', '압력', '워터해머']
            },
            '워터해머': {
              name: '워터해머(Water Hammer)',
              description: '밸브 급폐쇄로 유체의 운동량 변화에 의한 큰 압력 충격 발생',
              formulas: ['ΔP = ρcΔV'],
              relatedConcepts: ['수격', '캐비테이션', '압력']
            },
            '펌프': {
              name: '펌프(Pump)',
              description: '유체에 에너지를 부여하여 이송하는 기계, 양정으로 성능 표현',
              formulas: ['H = (P₂-P₁)/ρg + (V₂²-V₁²)/2g + (z₂-z₁)'],
              relatedConcepts: ['캐비테이션', '베르누이', '비속도']
            }
          }
        }
      }
    },
    '기계제작법 및 기계동력학': {
      name: '기계제작법 및 기계동력학',
      description: '절삭가공, 소성가공, 용접 및 진동/동역학을 통합한 과목',
      topics: {
        '절삭 가공': {
          name: '절삭 가공',
          description: '선반, 밀링, 드릴링, 연삭 등 절삭에 의한 가공법',
          concepts: {
            '선반': {
              name: '선반(Lathe)',
              description: '공작물을 회전시키고 바이트로 원통형 부품을 가공하는 공작기계',
              formulas: ['V = πDN/1000 (절삭속도, m/min)'],
              relatedConcepts: ['밀링', '드릴링', '구성인선']
            },
            '밀링': {
              name: '밀링(Milling)',
              description: '다인 공구(커터)를 회전시켜 공작물을 가공하는 방식',
              formulas: ['f = fz × z × N (이송속도)'],
              relatedConcepts: ['선반', '드릴링', '구성인선']
            },
            '드릴링': {
              name: '드릴링(Drilling)',
              description: '회전하는 드릴로 새로운 구멍을 뚫는 가공법',
              formulas: ['V = πDN/1000'],
              relatedConcepts: ['선반', '밀링', '연삭']
            },
            '연삭': {
              name: '연삭(Grinding)',
              description: '연삭숫돌을 사용하여 고정밀도, 좋은 표면거칠기를 얻는 가공법',
              formulas: [],
              relatedConcepts: ['선반', '밀링', '구성인선']
            },
            '구성인선': {
              name: '구성인선(Built-up Edge)',
              description: '절삭 공구에 재료가 용착되어 표면 거칠기를 악화시키는 현상',
              formulas: [],
              relatedConcepts: ['선반', '밀링', '연삭']
            }
          }
        },
        '특수 가공 및 주조/소성가공': {
          name: '특수 가공 및 주조/소성가공',
          description: '방전가공, 주조, 단조, 용접 등 비절삭 가공법',
          concepts: {
            '방전가공': {
              name: '방전가공(EDM)',
              description: '전극과 공작물 사이의 방전으로 재료를 용융 제거하는 비접촉 가공법',
              formulas: [],
              relatedConcepts: ['주조', '단조', '용접']
            },
            '주조': {
              name: '주조(Casting)',
              description: '금속을 용융시켜 주형에 부어 형상을 만드는 가공법',
              formulas: [],
              relatedConcepts: ['단조', '방전가공']
            },
            '단조': {
              name: '단조(Forging)',
              description: '금속을 해머나 프레스로 압축하여 형상을 만드는 소성가공법',
              formulas: [],
              relatedConcepts: ['주조', '용접']
            },
            '용접': {
              name: '용접(Welding)',
              description: '금속을 녹여 접합하는 가공법, 블로홀 등 결함 주의',
              formulas: [],
              relatedConcepts: ['주조', '단조']
            }
          }
        },
        '기계요소': {
          name: '기계요소',
          description: '기어, 베어링, 벨트 등 기계의 구성 요소',
          concepts: {
            '기어': {
              name: '기어(Gear)',
              description: '모듈로 규격화된 치형을 가진 동력전달 요소',
              formulas: ['m = d/z', 'p = πm'],
              relatedConcepts: ['벨트', '베어링']
            },
            '베어링': {
              name: '베어링(Bearing)',
              description: '축을 지지하고 회전 마찰을 줄이는 기계요소 (구름/미끄럼)',
              formulas: ['L10 = (C/P)^p'],
              relatedConcepts: ['기어', '벨트']
            },
            '벨트': {
              name: '벨트(Belt)',
              description: '마찰력으로 동력을 전달하는 전동장치',
              formulas: ['T₁/T₂ = e^(μθ)'],
              relatedConcepts: ['기어', '베어링']
            }
          }
        },
        '진동과 공진': {
          name: '진동과 공진',
          description: '기계 시스템의 진동 특성과 공진 현상',
          concepts: {
            '진동': {
              name: '진동(Vibration)',
              description: '질량, 강성, 감쇠의 3요소로 구성된 역학적 진동 시스템',
              formulas: ['ωn = √(k/m)', 'f = ωn/2π'],
              relatedConcepts: ['공진', '베어링']
            },
            '공진': {
              name: '공진(Resonance)',
              description: '가진 주파수가 고유진동수와 일치할 때 진폭이 급격히 증가하는 현상',
              formulas: ['ω_가진 = ωn'],
              relatedConcepts: ['진동', '베어링']
            }
          }
        }
      }
    },
    '기계설계': {
      name: '기계설계',
      description: '기계요소의 설계, 강도 계산 및 동력전달 장치 설계',
      topics: {
        '체결요소': {
          name: '체결요소',
          description: '나사, 볼트, 키 등 기계 부품을 연결하는 체결요소',
          concepts: {
            '나사': {
              name: '나사(Screw)',
              description: '나선면을 이용한 체결요소, 리드각이 클수록 효율 증가',
              formulas: ['η = tan(α)/(tan(α+φ))', 'd₂ = d - 1.2268P'],
              relatedConcepts: ['볼트', '볼나사']
            },
            '볼트': {
              name: '볼트(Bolt)',
              description: '나사와 너트를 이용한 체결요소, 토크렌치로 적정 조임력 확보',
              formulas: ['T = KDF (토크-하중 관계)'],
              relatedConcepts: ['나사', '키']
            },
            '키': {
              name: '키(Key)',
              description: '축과 보스 사이의 회전력(토크)을 전달하는 기계요소',
              formulas: ['T = F × d/2'],
              relatedConcepts: ['축', '볼트']
            }
          }
        },
        '축 설계': {
          name: '축 설계',
          description: '축의 강도, 강성, 진동 해석과 위험속도',
          concepts: {
            '축': {
              name: '축(Shaft)',
              description: '동력을 전달하는 회전 부재, 비틀림과 굽힘 응력에 대해 설계',
              formulas: ['τ = 16T/πd³', 'd = ∛(16T/πτ)'],
              relatedConcepts: ['비틀림', '위험속도', '베어링']
            },
            '위험속도': {
              name: '위험속도(Critical Speed)',
              description: '회전속도가 축의 고유진동수와 일치하여 공진이 발생하는 속도',
              formulas: ['Nc = (1/2π)√(g/δ)'],
              relatedConcepts: ['축', '베어링', '공진']
            }
          }
        },
        '동력전달 장치': {
          name: '동력전달 장치',
          description: '기어, 벨트, 체인, 클러치 등 동력전달 시스템',
          concepts: {
            '기어': {
              name: '기어(Gear)',
              description: '정확한 속도비와 큰 동력 전달이 가능한 전동장치',
              formulas: ['m = d/z', 'i = z₂/z₁ = n₁/n₂'],
              relatedConcepts: ['유성기어', '체인', 'V벨트']
            },
            '유성기어': {
              name: '유성기어(Planetary Gear)',
              description: '컴팩트한 구조로 큰 감속비를 얻을 수 있는 감속기',
              formulas: ['i = 1 + Z_ring/Z_sun'],
              relatedConcepts: ['기어', '체인']
            },
            '체인': {
              name: '체인(Chain)',
              description: '미끄러짐 없이 정확한 속도비로 동력을 전달하는 전동장치',
              formulas: ['P = p × z × n/60000'],
              relatedConcepts: ['기어', 'V벨트']
            },
            'V벨트': {
              name: 'V벨트(V-Belt)',
              description: '쐐기 작용으로 마찰력을 증가시킨 벨트 전동장치, 표준 쐐기각 40도',
              formulas: ['T₁/T₂ = e^(μθ/sinα)'],
              relatedConcepts: ['체인', '기어', '클러치']
            },
            '클러치': {
              name: '클러치(Clutch)',
              description: '동력의 전달과 차단을 담당하는 기계요소',
              formulas: ['T = μFr_m (마찰 클러치)'],
              relatedConcepts: ['V벨트', '기어']
            }
          }
        },
        '용접과 밀봉': {
          name: '용접과 밀봉',
          description: '용접 이음, O링 등 접합과 밀봉 설계',
          concepts: {
            '용접': {
              name: '용접 이음(Welded Joint)',
              description: '맞대기, 모살, 플러그 용접 등 용접에 의한 접합 설계',
              formulas: ['σ = P/(tL) (맞대기)', 'τ = P/(0.707×s×L) (모살)'],
              relatedConcepts: ['볼트', 'O링']
            },
            'O링': {
              name: 'O링(O-Ring)',
              description: '고무 재질의 링으로 유체 누설을 방지하는 밀봉 장치',
              formulas: [],
              relatedConcepts: ['용접', '볼트']
            }
          }
        },
        '스프링과 베어링': {
          name: '스프링과 베어링',
          description: '스프링, 베어링의 설계와 수명 계산',
          concepts: {
            '스프링': {
              name: '스프링(Spring)',
              description: '탄성력을 이용하여 에너지를 저장하고 진동을 흡수하는 요소',
              formulas: ['k = Gd⁴/(8D³n)', 'F = kδ'],
              relatedConcepts: ['베어링', '축']
            },
            '베어링': {
              name: '베어링(Bearing)',
              description: '축을 지지하고 회전 마찰을 줄이는 요소, L₁₀ 수명으로 설계',
              formulas: ['L₁₀ = (C/P)^p', 'p=3(볼), p=10/3(롤러)'],
              relatedConcepts: ['스프링', '축', '위험속도']
            },
            '볼나사': {
              name: '볼 나사(Ball Screw)',
              description: '볼을 이용하여 높은 효율과 정밀 이송이 가능한 나사 장치',
              formulas: ['η ≈ 90%'],
              relatedConcepts: ['나사', '서보모터']
            }
          }
        },
        '피로와 최적화': {
          name: '피로와 최적화',
          description: '피로 파괴, S-N 선도, 위상 최적화 등 설계 고급 주제',
          concepts: {
            '피로': {
              name: '피로(Fatigue)',
              description: '항복 응력 이하의 반복 하중으로 점진적 파괴가 진행되는 현상',
              formulas: ['σ_e = 피로한도'],
              relatedConcepts: ['S-N선도', '안전율', '위상최적화']
            },
            'S-N선도': {
              name: 'S-N 선도(S-N Curve)',
              description: '응력-수명 선도로 철강은 10⁶~10⁷ 사이클에서 피로한도 존재',
              formulas: ['S^m × N = C'],
              relatedConcepts: ['피로', '안전율']
            },
            '플라이휠': {
              name: '플라이휠(Flywheel)',
              description: '관성 모멘트가 큰 회전체로 에너지를 저장하여 속도 변동 억제',
              formulas: ['E = ½Iω²', 'δ = (ω_max - ω_min)/ω_avg'],
              relatedConcepts: ['축', '위험속도']
            },
            '위상최적화': {
              name: '위상 최적화(Topology Optimization)',
              description: '최소 재료로 최대 강성 구조를 설계하는 최적화 기법',
              formulas: [],
              relatedConcepts: ['피로', 'FEA']
            }
          }
        }
      }
    },
    '기계재료': {
      name: '기계재료',
      description: '금속, 비금속 재료의 조직, 특성, 열처리 및 시험 방법',
      topics: {
        '철강 재료': {
          name: '철강 재료',
          description: '탄소강, 주철, 합금강, 스테인리스강 등 철 기반 재료',
          concepts: {
            '탄소강': {
              name: '탄소강(Carbon Steel)',
              description: '탄소 함유량에 따라 강도/경도 증가, 연성/용접성 감소',
              formulas: [],
              relatedConcepts: ['주철', '스테인리스강', '열처리']
            },
            '주철': {
              name: '주철(Cast Iron)',
              description: '주조성과 감쇠능이 우수하나 인장강도가 낮고 취성이 큰 재료',
              formulas: [],
              relatedConcepts: ['탄소강', '스테인리스강']
            },
            '스테인리스강': {
              name: '스테인리스강(Stainless Steel)',
              description: '크롬 12% 이상, 니켈 첨가로 내식성을 향상시킨 합금강',
              formulas: [],
              relatedConcepts: ['탄소강', '비철금속']
            }
          }
        },
        '비철금속과 특수재료': {
          name: '비철금속과 특수재료',
          description: '비철금속, 초경합금, 형상기억합금 등 특수 재료',
          concepts: {
            '비철금속': {
              name: '비철금속(Non-Ferrous Metal)',
              description: '알루미늄, 구리, 티타늄 등 철을 기본으로 하지 않는 금속',
              formulas: [],
              relatedConcepts: ['스테인리스강', '초경합금']
            },
            '초경합금': {
              name: '초경합금(Cemented Carbide)',
              description: '텅스텐 카바이드(WC)를 코발트로 소결한 고경도 공구 재료',
              formulas: [],
              relatedConcepts: ['비철금속', '경도']
            },
            '형상기억합금': {
              name: '형상기억합금(Shape Memory Alloy)',
              description: '특정 온도에서 원래 형상을 회복하는 합금 (예: 니티놀 Ni-Ti)',
              formulas: [],
              relatedConcepts: ['비철금속', '나노재료']
            },
            '쾌삭강': {
              name: '쾌삭강(Free-Cutting Steel)',
              description: '황(S), 납(Pb)을 첨가하여 절삭성을 향상시킨 강',
              formulas: [],
              relatedConcepts: ['탄소강', '스테인리스강']
            }
          }
        },
        '재료의 구조와 특성': {
          name: '재료의 구조와 특성',
          description: '결정구조, 열처리, 크리프, 부식 등 재료의 미시적/거시적 특성',
          concepts: {
            '결정구조': {
              name: '결정구조(Crystal Structure)',
              description: 'BCC(체심입방), FCC(면심입방), HCP(조밀육방) 등 금속의 원자 배열',
              formulas: [],
              relatedConcepts: ['탄소강', '열처리']
            },
            '열처리': {
              name: '열처리(Heat Treatment)',
              description: '담금질, 뜨임, 풀림, 불림 등 가열/냉각으로 재료 성질을 변경',
              formulas: [],
              relatedConcepts: ['결정구조', '경도', '탄소강']
            },
            '크리프': {
              name: '크리프(Creep)',
              description: '고온에서 일정 응력 하에 시간에 따라 변형이 증가하는 현상',
              formulas: [],
              relatedConcepts: ['열처리', 'SCC']
            },
            'SCC': {
              name: '응력 부식 균열(SCC, Stress Corrosion Cracking)',
              description: '인장 응력, 부식 환경, 감수성 재료가 동시에 존재할 때 발생하는 균열',
              formulas: [],
              relatedConcepts: ['크리프', '스테인리스강']
            },
            '초소성': {
              name: '초소성(Superplasticity)',
              description: '미세 결정립 재료가 특정 조건에서 수백% 이상의 극대 연신율을 보이는 현상',
              formulas: [],
              relatedConcepts: ['결정구조', '나노재료']
            }
          }
        },
        '재료 시험': {
          name: '재료 시험',
          description: '경도, 비파괴검사 등 재료의 기계적 성질을 평가하는 시험법',
          concepts: {
            '경도': {
              name: '경도(Hardness)',
              description: '재료의 단단함 정도, 브리넬/로크웰/비커스 경도 시험',
              formulas: ['HB = 2P/(πD(D-√(D²-d²)))'],
              relatedConcepts: ['쇼어경도', '비파괴검사']
            },
            '쇼어경도': {
              name: '쇼어 경도(Shore Hardness)',
              description: '고무, 플라스틱 등 연질 재료의 경도를 측정하는 시험법',
              formulas: [],
              relatedConcepts: ['경도', '비파괴검사']
            },
            '비파괴검사': {
              name: '비파괴검사(NDT, Non-Destructive Testing)',
              description: '초음파 탐상, 방사선 투과, 자기 탐상 등 재료를 손상시키지 않고 결함 검사',
              formulas: [],
              relatedConcepts: ['경도', '쇼어경도']
            }
          }
        },
        '복합재료와 첨단재료': {
          name: '복합재료와 첨단재료',
          description: '복합재료, 세라믹, 나노재료, 적층제조 등 첨단 재료',
          concepts: {
            '복합재료': {
              name: '복합재료(Composite Material)',
              description: '기지재(Matrix)와 강화재(Reinforcement)로 구성된 고성능 재료',
              formulas: ['σ_c = σ_f×V_f + σ_m×V_m (혼합법칙)'],
              relatedConcepts: ['CFRP', 'CMC', '세라믹']
            },
            'CFRP': {
              name: 'CFRP(Carbon Fiber Reinforced Plastic)',
              description: '탄소 섬유로 강화한 플라스틱, 높은 비강도와 경량성',
              formulas: [],
              relatedConcepts: ['복합재료', 'CMC']
            },
            'CMC': {
              name: 'CMC(Ceramic Matrix Composite)',
              description: '세라믹에 섬유를 첨가하여 인성을 개선한 고온용 복합재료',
              formulas: [],
              relatedConcepts: ['복합재료', '세라믹']
            },
            '세라믹': {
              name: '세라믹(Ceramic)',
              description: '높은 경도와 내열성을 가지나 취성이 큰 무기 비금속 재료',
              formulas: [],
              relatedConcepts: ['복합재료', 'CMC']
            },
            '나노재료': {
              name: '나노재료(Nanomaterial)',
              description: '100nm 이하 크기로 벌크 재료와 다른 독특한 물리화학적 특성',
              formulas: [],
              relatedConcepts: ['형상기억합금', '복합재료']
            },
            '적층제조': {
              name: '적층제조(Additive Manufacturing)',
              description: '층층이 쌓아 형상을 만드는 제조법, 복잡 형상 및 소량 생산에 유리',
              formulas: [],
              relatedConcepts: ['3D프린팅', 'CFRP']
            },
            '3D프린팅': {
              name: '3D 프린팅(3D Printing)',
              description: 'SLM, EBM, Binder Jetting 등 금속 적층 제조 방식',
              formulas: [],
              relatedConcepts: ['적층제조', '복합재료']
            }
          }
        }
      }
    },
    '기계동력학': {
      name: '기계동력학',
      description: '기계 시스템의 운동, 진동, 평형 및 동역학적 거동 해석',
      topics: {
        '기구학과 동역학': {
          name: '기구학과 동역학',
          description: '기구의 자유도, 운동학, 힘과 가속도 해석',
          concepts: {
            '기구학': {
              name: '기구학(Kinematics)',
              description: '기구의 자유도와 운동을 해석하는 학문 (크랭크-슬라이더 등)',
              formulas: ['F = 3(n-1) - 2j₁ - j₂ (Gruebler)'],
              relatedConcepts: ['자유도', '캠', '관성력']
            },
            '자유도': {
              name: '자유도(Degree of Freedom)',
              description: '시스템의 독립적인 운동 변수의 수',
              formulas: ['F = 3(n-1) - 2j'],
              relatedConcepts: ['기구학', '진동']
            },
            '관성력': {
              name: '관성력(Inertia Force)',
              description: '질량과 가속도에 의해 결정되는 힘 (F = ma)',
              formulas: ['F = ma'],
              relatedConcepts: ['기구학', '평형']
            },
            '캠': {
              name: '캠(Cam)',
              description: '회전 운동을 다양한 형태의 종동절 운동으로 변환하는 기구',
              formulas: [],
              relatedConcepts: ['기구학', '자유도']
            }
          }
        },
        '회전체 역학': {
          name: '회전체 역학',
          description: '회전체의 평형, 밸런싱, 자이로 효과',
          concepts: {
            '평형': {
              name: '평형(Equilibrium)',
              description: '회전체의 정적 평형과 동적 평형 조건',
              formulas: ['ΣF = 0', 'ΣM = 0'],
              relatedConcepts: ['밸런싱', '관성력', '플라이휠']
            },
            '밸런싱': {
              name: '밸런싱(Balancing)',
              description: '회전체의 질량 중심을 회전축과 일치시켜 진동 감소',
              formulas: ['Σm_i×r_i = 0'],
              relatedConcepts: ['평형', '진동']
            },
            '플라이휠': {
              name: '플라이휠(Flywheel)',
              description: '회전 관성으로 에너지를 저장하여 속도를 균일화하는 장치',
              formulas: ['E = ½Iω²'],
              relatedConcepts: ['평형', '밸런싱']
            },
            '자이로': {
              name: '자이로스코프(Gyroscope)',
              description: '각운동량 보존을 이용한 관성 항법, 자세 제어 장치',
              formulas: ['L = Iω (각운동량)'],
              relatedConcepts: ['평형', '관성력']
            }
          }
        },
        '진동 해석': {
          name: '진동 해석',
          description: '기계 시스템의 진동, 감쇠, 공진, 절연 등',
          concepts: {
            '진동': {
              name: '진동(Vibration)',
              description: '질량(관성), 강성(스프링), 감쇠(저항)의 3요소로 구성된 역학계',
              formulas: ['ωn = √(k/m)', 'mẍ + cẋ + kx = F(t)'],
              relatedConcepts: ['공진', '감쇠', '동흡진기']
            },
            '공진': {
              name: '공진(Resonance)',
              description: '가진 주파수가 고유진동수와 일치하여 진폭이 급격히 증가',
              formulas: ['ω = ωn'],
              relatedConcepts: ['진동', '감쇠', '진동절연']
            },
            '감쇠': {
              name: '감쇠(Damping)',
              description: '진동 에너지를 흡수하여 진폭을 감소시키는 요소',
              formulas: ['ζ = c/cc', 'cc = 2√(km)'],
              relatedConcepts: ['진동', '공진', '동흡진기']
            },
            '동흡진기': {
              name: '동흡진기(Dynamic Absorber)',
              description: '주 시스템과 같은 고유진동수를 가져 진동 에너지를 흡수하는 장치',
              formulas: ['ωa = ωn (주 시스템)'],
              relatedConcepts: ['진동', '공진', '감쇠']
            },
            '진동절연': {
              name: '진동 절연(Vibration Isolation)',
              description: '방진고무, 스프링 등으로 진동 전달을 차단',
              formulas: ['TR = 1/((ω/ωn)² - 1) (비감쇠)'],
              relatedConcepts: ['진동', '공진']
            }
          }
        },
        '진동 분석과 소음': {
          name: '진동 분석과 소음',
          description: 'FFT, 모달해석, 소음 측정 등 진동/소음 분석 기법',
          concepts: {
            'FFT': {
              name: 'FFT(Fast Fourier Transform)',
              description: '시간 영역 신호를 주파수 영역으로 변환하는 분석 도구',
              formulas: ['X(f) = ∫x(t)e^(-j2πft)dt'],
              relatedConcepts: ['모달해석', '소음', '진동']
            },
            '모달해석': {
              name: '모달 해석(Modal Analysis)',
              description: '구조물의 고유진동수, 모드 형상, 감쇠비 등 동특성 파악',
              formulas: ['[M]{ẍ} + [C]{ẋ} + [K]{x} = {F}'],
              relatedConcepts: ['FFT', '진동', '공진']
            },
            '소음': {
              name: '소음(Noise)',
              description: '음압의 비율을 로그 척도(dB)로 나타낸 청각적 진동',
              formulas: ['L = 20 log(P/P₀) dB'],
              relatedConcepts: ['FFT', '진동']
            }
          }
        }
      }
    },
    '기계제작법': {
      name: '기계제작법',
      description: '절삭가공, 특수가공, 수치제어, 적층제조 등 기계 부품의 제작 방법',
      topics: {
        '절삭 가공': {
          name: '절삭 가공',
          description: '선반, 밀링, 연삭 등 절삭에 의한 기계 가공',
          concepts: {
            '선반': {
              name: '선반(Lathe)',
              description: '공작물을 회전시키고 바이트로 가공, 이송속도 단위 mm/rev',
              formulas: ['V = πDN/1000', 'f: mm/rev'],
              relatedConcepts: ['밀링', '연삭']
            },
            '밀링': {
              name: '밀링(Milling)',
              description: '커터를 회전시켜 가공, 상향/하향/정면 절삭 등',
              formulas: ['V = πDN/1000', 'f = fz × z × N'],
              relatedConcepts: ['선반', '연삭']
            },
            '연삭': {
              name: '연삭(Grinding)',
              description: '연삭숫돌을 이용한 고정밀/고품질 가공, 가공속도는 느림',
              formulas: [],
              relatedConcepts: ['선반', '밀링']
            }
          }
        },
        '특수 가공': {
          name: '특수 가공',
          description: '방전가공, 레이저, 워터젯, 초음파, 전해가공 등 비전통적 가공법',
          concepts: {
            'EDM': {
              name: 'EDM(Electrical Discharge Machining)',
              description: '전극과 공작물 사이의 방전으로 재료를 용융 제거하는 비접촉 가공법',
              formulas: [],
              relatedConcepts: ['Wire EDM', 'ECM', '레이저']
            },
            'Wire EDM': {
              name: 'Wire EDM(와이어 방전가공)',
              description: '가는 와이어 전극으로 복잡하고 정밀한 형상 가공',
              formulas: [],
              relatedConcepts: ['EDM', 'ECM']
            },
            'ECM': {
              name: 'ECM(Electrochemical Machining)',
              description: '전해액 중에서 전기화학적 반응으로 양극 공작물을 용해 가공',
              formulas: [],
              relatedConcepts: ['EDM', '레이저']
            },
            '레이저': {
              name: '레이저 가공(Laser Machining)',
              description: '비접촉, 고정밀 가공이 가능하나 설비 비용이 높고 두꺼운 재료 제한',
              formulas: [],
              relatedConcepts: ['EDM', '워터젯']
            },
            '워터젯': {
              name: '워터젯(Water Jet Machining)',
              description: '초고압 물(연마재 첨가 가능)로 열변형 없이 다양한 재료 절단',
              formulas: [],
              relatedConcepts: ['레이저', '초음파']
            },
            '초음파': {
              name: '초음파 가공(Ultrasonic Machining)',
              description: '경질 취성 재료(유리, 세라믹 등) 가공에 적합한 특수 가공법',
              formulas: [],
              relatedConcepts: ['EDM', '워터젯']
            }
          }
        },
        '수치 제어': {
          name: '수치 제어',
          description: 'NC, CNC 공작기계, G코드, CAD/CAM 등 자동화 가공',
          concepts: {
            'NC': {
              name: 'NC(Numerical Control)',
              description: '수치 제어 공작기계, 다품종 소량생산에 적합',
              formulas: [],
              relatedConcepts: ['CNC', 'CAD', 'CAM']
            },
            'CNC': {
              name: 'CNC(Computer Numerical Control)',
              description: '컴퓨터에 의한 수치 제어로 높은 정밀도와 복잡 형상 가공',
              formulas: [],
              relatedConcepts: ['NC', 'G코드', '5축가공']
            },
            'G코드': {
              name: 'G코드(G-code)',
              description: 'CNC 공작기계에 이송, 절삭 등의 동작을 지시하는 프로그래밍 언어',
              formulas: [],
              relatedConcepts: ['CNC', 'CAM']
            },
            'CAD': {
              name: 'CAD(Computer-Aided Design)',
              description: '컴퓨터를 이용한 설계로 설계시간 단축과 도면 수정 용이',
              formulas: [],
              relatedConcepts: ['CAM', 'CNC']
            },
            'CAM': {
              name: 'CAM(Computer-Aided Manufacturing)',
              description: 'CAD 모델 기반 공구 경로 생성 및 NC 프로그램 자동 생성',
              formulas: [],
              relatedConcepts: ['CAD', 'CNC', 'G코드']
            },
            '5축가공': {
              name: '5축 가공(5-Axis Machining)',
              description: 'X,Y,Z 이동축과 2개 회전축으로 복잡한 3D 곡면 한 번에 가공',
              formulas: [],
              relatedConcepts: ['CNC', 'CAM']
            }
          }
        },
        '적층 제조': {
          name: '적층 제조',
          description: '3D 프린팅 방식의 적층 제조 기술',
          concepts: {
            '3D프린팅': {
              name: '3D 프린팅(3D Printing)',
              description: 'FDM, SLA, SLS 등 적층 제조 방식',
              formulas: [],
              relatedConcepts: ['FDM', 'SLA']
            },
            'FDM': {
              name: 'FDM(Fused Deposition Modeling)',
              description: '열가소성 필라멘트를 녹여 층층이 적층하는 3D 프린팅 방식',
              formulas: [],
              relatedConcepts: ['SLA', '3D프린팅']
            },
            'SLA': {
              name: 'SLA(Stereolithography)',
              description: '자외선 레이저로 광경화성 레진을 경화시키는 3D 프린팅 방식',
              formulas: [],
              relatedConcepts: ['FDM', '3D프린팅']
            }
          }
        },
        '소성가공과 용접': {
          name: '소성가공과 용접',
          description: '열간/냉간가공, 쾌삭강, 용접 기법 등',
          concepts: {
            '열간가공': {
              name: '열간/냉간 가공(Hot/Cold Working)',
              description: '재결정 온도 기준으로 이상은 열간, 이하는 냉간 가공',
              formulas: [],
              relatedConcepts: ['용접', '쾌삭강']
            },
            '용접': {
              name: '용접(Welding)',
              description: 'MIG, TIG, 피복 아크 등 다양한 용접법과 결함 관리',
              formulas: [],
              relatedConcepts: ['열간가공']
            },
            '쾌삭강': {
              name: '쾌삭강(Free-Cutting Steel)',
              description: '황(S), 납(Pb)을 첨가하여 절삭성을 향상시킨 재료',
              formulas: [],
              relatedConcepts: ['열간가공']
            }
          }
        }
      }
    },
    '기계제어': {
      name: '기계제어',
      description: 'PLC, 로봇, 모터, 스마트 제조 등 기계 제어 및 자동화',
      topics: {
        'PLC와 자동화': {
          name: 'PLC와 자동화',
          description: 'PLC 프로그래밍 및 산업 자동화 제어',
          concepts: {
            'PLC': {
              name: 'PLC(Programmable Logic Controller)',
              description: '공장 자동화, 생산 라인 제어용 프로그래밍 가능 제어기',
              formulas: [],
              relatedConcepts: ['서보모터', '스테핑모터', '로봇']
            }
          }
        },
        '산업용 로봇': {
          name: '산업용 로봇',
          description: '산업용 로봇의 자유도, 작업공간, 티칭 방법',
          concepts: {
            '로봇': {
              name: '산업용 로봇(Industrial Robot)',
              description: '6자유도가 일반적이며, 플레이백/온라인/오프라인 프로그래밍으로 티칭',
              formulas: [],
              relatedConcepts: ['PLC', '서보모터', '디지털트윈']
            }
          }
        },
        '모터와 구동': {
          name: '모터와 구동',
          description: '서보모터, 스테핑모터 등 기계 구동 제어',
          concepts: {
            '서보모터': {
              name: '서보모터(Servo Motor)',
              description: '엔코더로 위치/속도를 피드백하여 정밀한 폐루프 제어가 가능한 모터',
              formulas: [],
              relatedConcepts: ['스테핑모터', 'PLC', '로봇']
            },
            '스테핑모터': {
              name: '스테핑모터(Stepping Motor)',
              description: '펄스 신호로 일정 각도씩 회전, 피드백 없이도 위치 제어 가능',
              formulas: [],
              relatedConcepts: ['서보모터', 'PLC']
            }
          }
        },
        '스마트 제조': {
          name: '스마트 제조',
          description: '디지털 트윈, Industry 4.0, 예지 정비 등 스마트 팩토리 기술',
          concepts: {
            '디지털트윈': {
              name: '디지털 트윈(Digital Twin)',
              description: '물리적 시스템을 가상으로 재현하여 시뮬레이션/모니터링/최적화',
              formulas: [],
              relatedConcepts: ['Industry4.0', '예지정비']
            },
            'Industry4.0': {
              name: 'Industry 4.0(4차 산업혁명)',
              description: 'IoT, AI, 빅데이터, 클라우드 등을 활용한 스마트 제조',
              formulas: [],
              relatedConcepts: ['디지털트윈', '예지정비']
            },
            '예지정비': {
              name: '예지 정비(Predictive Maintenance)',
              description: '센서 데이터와 AI로 고장을 사전 예측하여 계획적 정비 수행',
              formulas: [],
              relatedConcepts: ['디지털트윈', 'Industry4.0']
            }
          }
        }
      }
    },
    '기계재료 및 유체역학': {
      name: '기계재료 및 유체역학',
      description: '기계재료와 유체역학의 통합 과목',
      topics: {
        '열처리': {
          name: '열처리',
          description: '철강 재료의 열처리 방법과 원리',
          concepts: {
            '열처리': {
              name: '열처리(Heat Treatment)',
              description: '담금질, 뜨임, 풀림, 불림, 침탄 등 가열/냉각을 통한 재료 성질 변경',
              formulas: [],
              relatedConcepts: ['탄소강', '경도']
            }
          }
        }
      }
    },
    '유체기계': {
      name: '유체기계',
      description: '펌프, 송풍기, 터빈 등 유체를 이용한 기계 장치',
      topics: {
        '펌프와 송풍기': {
          name: '펌프와 송풍기',
          description: '펌프의 비속도, 송풍기의 전압 등 유체기계 성능',
          concepts: {
            '비속도': {
              name: '비속도(Specific Speed)',
              description: '펌프의 형상과 특성을 분류하는 무차원수 지표',
              formulas: ['Ns = NQ^(1/2)/H^(3/4)'],
              relatedConcepts: ['전압', '펌프', '캐비테이션']
            },
            '전압': {
              name: '전압(Total Pressure)',
              description: '정압과 동압의 합으로 유체가 가진 전체 에너지를 나타냄',
              formulas: ['P_t = P_s + P_d', 'P_d = ½ρV²'],
              relatedConcepts: ['비속도', '베르누이']
            }
          }
        }
      }
    }
  }
};
