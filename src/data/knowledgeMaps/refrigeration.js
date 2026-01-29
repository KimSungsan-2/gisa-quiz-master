export const refrigerationKnowledgeMap = {
  certId: 'refrigeration',
  subjects: {
    '냉동공조이론': {
      name: '냉동공조이론',
      description: '냉동 및 공조 시스템의 기본 열역학 이론, 사이클 분석, 습공기 선도 해석 및 성능 평가에 대한 과목',
      topics: {
        '냉동 사이클': {
          name: '냉동 사이클',
          description: '증기압축식 냉동사이클의 기본 원리와 관련 이론',
          concepts: {
            '냉동사이클': {
              name: '냉동사이클(Refrigeration Cycle)',
              description: '증기압축식 냉동사이클은 압축→응축→팽창→증발의 4과정으로 구성되며, 저온부에서 열을 흡수하여 고온부로 방출하는 역사이클이다.',
              formulas: ['COP_R = Q_L / W', 'Q_H = Q_L + W'],
              relatedConcepts: ['COP', '카르노', 'P-h선도', '역카르노']
            },
            '카르노': {
              name: '카르노 사이클(Carnot Cycle)',
              description: '두 개의 등온과정과 두 개의 단열과정으로 이루어진 이상적 열역학 사이클로, 동일 온도 조건에서 최대 효율을 나타낸다.',
              formulas: ['COP_카르노 = T_L / (T_H - T_L)'],
              relatedConcepts: ['역카르노', 'COP', '엔트로피']
            },
            '역카르노': {
              name: '역카르노 사이클(Reverse Carnot Cycle)',
              description: '카르노 사이클의 역과정으로, 이상적인 냉동 사이클을 나타낸다. 실제 냉동기의 효율 비교 기준이 된다.',
              formulas: ['COP_역카르노 = T_L / (T_H - T_L)'],
              relatedConcepts: ['카르노', '냉동사이클', 'COP']
            },
            '카르노사이클': {
              name: '카르노사이클 열역학(Carnot Cycle Thermodynamics)',
              description: '카르노 사이클의 4가지 과정(등온팽창, 단열팽창, 등온압축, 단열압축)과 열역학적 분석을 다룬다.',
              formulas: ['η_카르노 = 1 - T_L / T_H', 'ΔS = Q / T'],
              relatedConcepts: ['카르노', '엔트로피', '냉동사이클']
            },
            '플래시가스': {
              name: '플래시가스(Flash Gas)',
              description: '팽창밸브를 통과하면서 액냉매 일부가 급격히 기화되어 발생하는 가스로, 냉동효과를 감소시킨다.',
              formulas: [],
              relatedConcepts: ['과냉각', '과냉도', '냉동사이클']
            },
            '2단압축': {
              name: '2단 압축 냉동사이클(Two-Stage Compression)',
              description: '저단과 고단 2개의 압축기를 사용하여 압축비를 줄이고 효율을 높이는 사이클로, 저온 냉동에 적합하다.',
              formulas: ['중간압력 P_m = √(P_L × P_H)'],
              relatedConcepts: ['다단압축', '압축비', '냉동사이클']
            },
            'P-h선도': {
              name: 'P-h 선도(Pressure-Enthalpy Diagram)',
              description: '압력-엔탈피 선도로 냉동사이클의 각 과정을 도시하여 분석하는 데 사용된다. 압축은 등엔트로피, 팽창은 등엔탈피 과정이다.',
              formulas: ['냉동효과 q = h1 - h4', '압축일 w = h2 - h1'],
              relatedConcepts: ['냉동사이클', '엔트로피', 'COP']
            }
          }
        },
        '성능 및 효율': {
          name: '성능 및 효율',
          description: '냉동기 및 공조기의 성능을 나타내는 각종 계수와 효율 지표',
          concepts: {
            'COP': {
              name: 'COP(Coefficient of Performance, 성적계수)',
              description: '냉동기의 성능을 나타내는 지표로, 냉동효과를 소비동력으로 나눈 값이다. 값이 클수록 효율이 높다.',
              formulas: ['COP = Q_L / W', 'COP_HP = Q_H / W = COP_R + 1'],
              relatedConcepts: ['냉동사이클', 'EER', 'SEER', '열펌프']
            },
            '냉동톤': {
              name: '냉동톤(Refrigeration Ton, RT)',
              description: '냉동능력의 단위로, 1시간에 0℃ 물 1톤을 0℃ 얼음으로 만드는 능력이다. 약 3,024 kcal/h에 해당한다.',
              formulas: ['1 RT = 3,024 kcal/h = 3.517 kW'],
              relatedConcepts: ['냉동능력', 'COP']
            },
            '냉동능력': {
              name: '냉동능력(Refrigerating Capacity)',
              description: '냉동기가 단위 시간당 흡수할 수 있는 열량으로, 냉매 순환량과 냉동효과의 곱이다.',
              formulas: ['Q = G × (h1 - h4)', 'Q = G × q_L'],
              relatedConcepts: ['냉동톤', 'COP', '냉동사이클']
            },
            '압축비': {
              name: '압축비(Compression Ratio)',
              description: '압축기 토출압력과 흡입압력의 비로, 높을수록 압축기 효율이 떨어지고 토출가스 온도가 상승한다.',
              formulas: ['압축비 = P_토출 / P_흡입'],
              relatedConcepts: ['2단압축', '다단압축', '냉동사이클']
            },
            'SEER': {
              name: 'SEER(Seasonal Energy Efficiency Ratio)',
              description: '냉방 기간 동안의 계절 에너지 소비효율을 나타내는 지표로, 연간 냉방능력을 연간 소비전력으로 나눈 값이다.',
              formulas: ['SEER = 연간 총 냉방능력(Wh) / 연간 총 소비전력(Wh)'],
              relatedConcepts: ['COP', 'EER', 'HSPF']
            },
            'HSPF': {
              name: 'HSPF(Heating Seasonal Performance Factor)',
              description: '난방 기간 동안의 계절 성능 계수로, 연간 난방능력을 연간 소비전력으로 나눈 값이다.',
              formulas: ['HSPF = 연간 총 난방능력(Wh) / 연간 총 소비전력(Wh)'],
              relatedConcepts: ['SEER', 'COP', '열펌프']
            },
            'EER': {
              name: 'EER(Energy Efficiency Ratio, 에너지소비효율)',
              description: '냉방능력(W 또는 kcal/h)을 소비전력(W)으로 나눈 값으로, 정격 조건에서의 에너지 효율을 나타낸다.',
              formulas: ['EER = 냉방능력(W) / 소비전력(W)'],
              relatedConcepts: ['COP', 'SEER', '냉동능력']
            }
          }
        },
        '열역학 기초': {
          name: '열역학 기초',
          description: '냉동공조 시스템 분석에 필요한 기본 열역학 개념',
          concepts: {
            '엔트로피': {
              name: '엔트로피(Entropy)',
              description: '열역학적 과정의 비가역성을 나타내는 상태량으로, 단열(등엔트로피) 과정에서는 변화가 없다.',
              formulas: ['dS = δQ / T', 'ΔS ≥ 0 (고립계)'],
              relatedConcepts: ['카르노', 'P-h선도', '카르노사이클']
            },
            '임계온도': {
              name: '임계온도(Critical Temperature)',
              description: '냉매가 액화될 수 있는 최고 온도로, 이 이상에서는 아무리 압력을 높여도 액화되지 않는다. 냉매 선택 시 중요한 기준이다.',
              formulas: [],
              relatedConcepts: ['냉매', 'CO2', 'R-410A']
            },
            '과냉각': {
              name: '과냉각(Subcooling)',
              description: '응축기에서 액화된 냉매를 응축온도 이하로 더 냉각시키는 것으로, 냉동효과를 증가시키고 플래시가스를 방지한다.',
              formulas: ['과냉도 = 응축온도 - 과냉각 후 온도'],
              relatedConcepts: ['과냉도', '플래시가스', 'COP']
            },
            '과냉도': {
              name: '과냉도(Degree of Subcooling)',
              description: '응축온도와 응축기 출구의 액냉매 온도 차이를 나타내며, 부족 시 플래시 가스가 발생하여 냉동효과가 감소한다.',
              formulas: ['과냉도(℃) = T_응축 - T_출구'],
              relatedConcepts: ['과냉각', '플래시가스', '응축기']
            },
            '과열': {
              name: '과열(Superheating)',
              description: '증발기에서 완전 증발 후 냉매가 추가로 가열되어 과열증기 상태가 되는 것으로, 액압축을 방지한다.',
              formulas: ['과열도 = 흡입가스온도 - 증발온도'],
              relatedConcepts: ['과열도', '증발기', '압축기']
            },
            '과열도': {
              name: '과열도(Degree of Superheat)',
              description: '증발기 출구 냉매 온도와 증발 온도의 차이로, 적정 과열도 유지가 시스템 안정 운전에 중요하다.',
              formulas: ['과열도(℃) = T_흡입 - T_증발'],
              relatedConcepts: ['과열', 'TEV', '증발기']
            },
            'SHR': {
              name: 'SHR(Sensible Heat Ratio, 현열비)',
              description: '전체 열부하 중 현열 부하가 차지하는 비율로, 공조 시스템 설계 시 코일 선정에 활용된다.',
              formulas: ['SHR = 현열부하 / 전열부하'],
              relatedConcepts: ['현열비', 'SHF', '바이패스팩터']
            },
            '바이패스팩터': {
              name: '바이패스팩터(Bypass Factor, BF)',
              description: '공조 코일을 통과하는 공기 중 코일과 열교환하지 않고 그대로 통과하는 공기의 비율을 나타낸다.',
              formulas: ['BF = (T_출구 - T_코일) / (T_입구 - T_코일)'],
              relatedConcepts: ['SHR', 'SHF', 'AHU']
            }
          }
        },
        '습공기 및 쾌적': {
          name: '습공기 및 쾌적',
          description: '습공기 선도의 해석, 공기 상태 변화, 실내 쾌적 조건에 관한 이론',
          concepts: {
            '습공기': {
              name: '습공기(Moist Air)',
              description: '건조 공기와 수증기가 혼합된 공기로, 공조 설계의 기본 대상이다. 건구온도, 습구온도, 절대습도, 상대습도 등으로 상태를 표현한다.',
              formulas: ['절대습도 x = 0.622 × Pw / (P - Pw)'],
              relatedConcepts: ['습공기선도', '노점온도', '가습']
            },
            '습공기선도': {
              name: '습공기선도(Psychrometric Chart)',
              description: '습공기의 상태를 도시한 선도로, 건구온도, 습구온도, 상대습도, 절대습도, 엔탈피, 비체적 등을 읽을 수 있다.',
              formulas: ['엔탈피 h = c_pa × t + x × (r + c_pw × t)'],
              relatedConcepts: ['습공기', '노점온도', '현열비', '가습']
            },
            '노점온도': {
              name: '노점온도(Dew Point Temperature)',
              description: '공기를 냉각할 때 수증기가 응축되기 시작하는 온도로, 절대습도에 의해 결정된다.',
              formulas: [],
              relatedConcepts: ['습공기', '습공기선도', '제습냉방']
            },
            '현열비': {
              name: '현열비(Sensible Heat Factor, SHF)',
              description: '전체 열부하 중 현열 부하의 비율로, 습공기 선도에서 공기 상태 변화의 방향을 결정한다.',
              formulas: ['SHF = Q_s / (Q_s + Q_l)'],
              relatedConcepts: ['SHF', 'SHR', '습공기선도']
            },
            'SHF': {
              name: 'SHF(Sensible Heat Factor)',
              description: '현열비와 동일한 개념으로, 전열부하에서 현열부하가 차지하는 비율이다. 공조 코일 설계의 핵심 파라미터이다.',
              formulas: ['SHF = Q_현열 / Q_전열'],
              relatedConcepts: ['현열비', 'SHR', '습공기선도']
            },
            '쾌적조건': {
              name: '쾌적조건(Comfort Condition)',
              description: '인체가 쾌적하게 느끼는 실내 환경 조건으로, 온도 22~26℃, 상대습도 40~60%, 기류속도 0.15~0.25m/s가 일반적이다.',
              formulas: [],
              relatedConcepts: ['PMV', 'PPD', '공조']
            },
            'PMV': {
              name: 'PMV(Predicted Mean Vote, 예상평균온열감)',
              description: '실내 열환경의 쾌적도를 -3(추움)~+3(더움)으로 수치화한 지표로, 0에 가까울수록 쾌적하다.',
              formulas: ['PMV = f(대사량, 착의량, 온도, 습도, 기류, 복사온도)'],
              relatedConcepts: ['PPD', '쾌적조건', '공조']
            },
            'PPD': {
              name: 'PPD(Predicted Percentage of Dissatisfied)',
              description: '예상 불만족률로, PMV 값에 대응하여 불만족자 비율을 백분율로 나타낸 지표이다.',
              formulas: ['PPD = 100 - 95 × exp(-0.03353 × PMV⁴ - 0.2179 × PMV²)'],
              relatedConcepts: ['PMV', '쾌적조건']
            },
            '가습': {
              name: '가습(Humidification)',
              description: '공기 중 수분을 증가시키는 과정으로, 수분사식, 증기분사식, 기화식 등이 있다.',
              formulas: ['가습량 = G × (x2 - x1)'],
              relatedConcepts: ['습공기', '습공기선도', '공조']
            },
            '공조': {
              name: '공조 4대 요소(Air Conditioning 4 Elements)',
              description: '공기조화의 4대 요소는 온도, 습도, 기류, 청정도로, 이를 조절하여 쾌적한 실내 환경을 유지한다.',
              formulas: [],
              relatedConcepts: ['쾌적조건', 'PMV', 'AHU']
            }
          }
        },
        '특수 냉동 및 신기술': {
          name: '특수 냉동 및 신기술',
          description: '극저온 냉동, 흡수식 냉동, 차세대 냉동 기술 등',
          concepts: {
            '흡수식': {
              name: '흡수식 냉동기(Absorption Refrigerator)',
              description: '열에너지를 이용하여 냉동하는 방식으로, 물-LiBr 또는 암모니아-물 조합을 사용한다. 증기, 온수, 가스 등을 열원으로 활용할 수 있다.',
              formulas: ['COP_흡수식 = Q_증발 / Q_재생기'],
              relatedConcepts: ['열펌프', '냉동사이클', '암모니아']
            },
            '열펌프': {
              name: '열펌프(Heat Pump)',
              description: '저온에서 고온으로 열을 이동시키는 장치로, 냉동기의 응축열을 난방에 이용한다. 난방 COP는 냉방 COP보다 1만큼 크다.',
              formulas: ['COP_HP = Q_H / W = COP_R + 1'],
              relatedConcepts: ['히트펌프', 'COP', '4방밸브', '지열']
            },
            '극저온': {
              name: '극저온 냉동(Cryogenic Refrigeration)',
              description: '-150℃ 이하의 극저온을 생성하는 냉동 기술로, 캐스케이드 사이클, 린데 방식 등이 사용된다.',
              formulas: [],
              relatedConcepts: ['초전도', '캐스케이드', '다단압축']
            },
            '초전도': {
              name: '초전도(Superconductivity)',
              description: '특정 물질이 극저온에서 전기 저항이 0이 되는 현상으로, 극저온 냉동 기술의 중요한 응용 분야이다.',
              formulas: [],
              relatedConcepts: ['극저온', '캐스케이드']
            },
            '열음향': {
              name: '열음향 냉동(Thermoacoustic Refrigeration)',
              description: '음파의 진동을 이용하여 열을 펌핑하는 차세대 냉동 기술로, 냉매가 필요 없어 환경친화적이다.',
              formulas: [],
              relatedConcepts: ['자기냉동', 'GWP']
            },
            '자기냉동': {
              name: '자기냉동(Magnetic Refrigeration)',
              description: '자성체의 자기열량효과(MCE)를 이용한 냉동 기술로, 냉매를 사용하지 않는 친환경 차세대 기술이다.',
              formulas: [],
              relatedConcepts: ['열음향', 'GWP', 'ODP']
            },
            '기화냉각': {
              name: '기화냉각(Evaporative Cooling)',
              description: '물의 증발 잠열을 이용하여 냉각하는 방식으로, 냉각탑 등에서 활용된다.',
              formulas: ['Q = m × L (L: 증발잠열)'],
              relatedConcepts: ['냉각탑', '쿨링타워', '습공기']
            },
            '제습냉방': {
              name: '제습냉방(Desiccant Cooling)',
              description: '제습제를 사용하여 공기를 제습한 후 증발냉각으로 냉방하는 방식으로, 잠열 부하가 큰 경우 유효하다.',
              formulas: [],
              relatedConcepts: ['노점온도', '습공기선도', '가습']
            },
            '복사냉방': {
              name: '복사냉방(Radiant Cooling)',
              description: '천장이나 벽면의 냉수 패널에서 복사열 교환으로 냉방하는 방식으로, 기류 없이 쾌적한 환경을 조성한다.',
              formulas: [],
              relatedConcepts: ['쾌적조건', 'PMV', '공조']
            }
          }
        },
        '냉매 이론': {
          name: '냉매 이론',
          description: '냉매의 종류, 물성, 환경 영향 및 국제 규제에 관한 이론',
          concepts: {
            'GWP': {
              name: 'GWP(Global Warming Potential, 지구온난화지수)',
              description: 'CO2를 기준(GWP=1)으로 온실가스가 지구온난화에 미치는 영향을 수치로 나타낸 지표이다.',
              formulas: [],
              relatedConcepts: ['ODP', '몬트리올의정서', '교토의정서', '킬리수정안']
            },
            'ODP': {
              name: 'ODP(Ozone Depletion Potential, 오존층파괴지수)',
              description: 'R-11을 기준(ODP=1)으로 냉매가 오존층을 파괴하는 정도를 나타내는 지표이다. HFC 계열은 ODP=0이다.',
              formulas: [],
              relatedConcepts: ['GWP', '몬트리올의정서', '냉매']
            },
            '몬트리올의정서': {
              name: '몬트리올 의정서(Montreal Protocol)',
              description: '1987년 채택된 오존층 파괴 물질 규제에 관한 국제 협약으로, CFC 및 HCFC 냉매의 생산과 사용을 규제한다.',
              formulas: [],
              relatedConcepts: ['ODP', 'GWP', '교토의정서', '킬리수정안']
            },
            '교토의정서': {
              name: '교토의정서(Kyoto Protocol)',
              description: '1997년 채택된 온실가스 감축 국제 협약으로, HFC 등 불소계 가스도 규제 대상에 포함된다.',
              formulas: [],
              relatedConcepts: ['GWP', '몬트리올의정서', '킬리수정안']
            },
            '킬리수정안': {
              name: '킬리수정안(Kigali Amendment)',
              description: '2016년 몬트리올 의정서의 수정안으로, HFC 냉매의 단계적 감축을 규정한다.',
              formulas: [],
              relatedConcepts: ['몬트리올의정서', 'GWP', 'ODP']
            },
            '혼합냉매': {
              name: '혼합냉매(Mixed Refrigerant)',
              description: '2종 이상의 냉매를 혼합하여 원하는 물성을 구현한 냉매로, 공비혼합물과 비공비혼합물로 구분된다.',
              formulas: [],
              relatedConcepts: ['공비혼합물', '온도글라이드', 'R-410A']
            },
            '공비혼합물': {
              name: '공비혼합물(Azeotropic Mixture)',
              description: '혼합냉매 중 증발·응축 시 조성이 변하지 않는 냉매로, 단일 냉매처럼 취급할 수 있다.',
              formulas: [],
              relatedConcepts: ['혼합냉매', '온도글라이드']
            },
            '온도글라이드': {
              name: '온도글라이드(Temperature Glide)',
              description: '비공비 혼합냉매가 상변화 시 온도가 변하는 현상으로, 열교환기 설계 시 고려해야 한다.',
              formulas: [],
              relatedConcepts: ['혼합냉매', '공비혼합물', 'R-410A']
            }
          }
        }
      }
    },
    '냉동공조장치': {
      name: '냉동공조장치',
      description: '냉동 및 공조 시스템을 구성하는 주요 기기와 부속장치의 구조, 원리, 특성에 대한 과목',
      topics: {
        '압축기': {
          name: '압축기',
          description: '냉동 시스템의 핵심 구성 기기로, 냉매를 압축하여 고온고압 상태로 만드는 장치',
          concepts: {
            '압축기': {
              name: '압축기(Compressor)',
              description: '저온저압의 냉매 가스를 고온고압으로 압축하는 장치로, 왕복동식, 스크류식, 스크롤식, 원심식 등이 있다.',
              formulas: ['이론 체적효율 η_v = 1 - c × ((P_d/P_s)^(1/n) - 1)'],
              relatedConcepts: ['스크류 압축기', '원심압축기', '냉동사이클']
            },
            '스크류 압축기': {
              name: '스크류 압축기(Screw Compressor)',
              description: '암수 한 쌍의 스크류 로터 회전에 의해 냉매를 연속적으로 압축하는 방식으로, 중대형 냉동기에 적합하다.',
              formulas: [],
              relatedConcepts: ['압축기', '원심압축기', '서징']
            },
            '원심압축기': {
              name: '원심압축기(Centrifugal Compressor)',
              description: '임펠러의 고속회전에 의한 원심력으로 냉매를 압축하는 방식으로, 대용량 냉동기에 적합하며 터보냉동기에 사용된다.',
              formulas: [],
              relatedConcepts: ['압축기', '스크류 압축기', '터보냉동기', '서징']
            },
            '크랭크케이스히터': {
              name: '크랭크케이스 히터(Crankcase Heater)',
              description: '압축기 정지 중 크랭크케이스에 냉매가 용해되는 것을 방지하기 위해 오일을 가열하는 히터이다.',
              formulas: [],
              relatedConcepts: ['압축기', '냉동유', '냉매']
            },
            '서징': {
              name: '서징(Surging)',
              description: '터보 압축기에서 유량이 감소하면 발생하는 역류 현상으로, 소음과 진동을 동반하며 장비 손상을 초래할 수 있다.',
              formulas: [],
              relatedConcepts: ['원심압축기', '터보냉동기', '압축기']
            },
            '터보냉동기': {
              name: '터보냉동기(Turbo Chiller)',
              description: '원심 압축기를 사용하는 대용량 냉동기로, 냉수를 생산하여 대형 건물의 공조에 사용된다.',
              formulas: [],
              relatedConcepts: ['원심압축기', '서징', '압축기']
            }
          }
        },
        '열교환기': {
          name: '열교환기',
          description: '냉매와 외부 매체 사이의 열교환을 담당하는 장치',
          concepts: {
            '증발기': {
              name: '증발기(Evaporator)',
              description: '저압의 액냉매가 증발하면서 주위로부터 열을 흡수하는 열교환기로, 건식, 만액식, 핀코일형 등이 있다.',
              formulas: ['Q_증발 = G × (h1 - h4)'],
              relatedConcepts: ['응축기', '냉동사이클', '제상']
            },
            '응축기': {
              name: '응축기(Condenser)',
              description: '고압의 과열증기 냉매가 냉각되어 액화되는 열교환기로, 수냉식, 공냉식, 증발식으로 분류된다.',
              formulas: ['Q_응축 = G × (h2 - h3)'],
              relatedConcepts: ['증발기', '냉동사이클', '쿨링타워', '냉각탑']
            },
            '판형열교환기': {
              name: '판형열교환기(Plate Heat Exchanger)',
              description: '주름이 있는 금속판을 여러 장 적층한 열교환기로, 소형 고효율이며 청소와 유지보수가 용이하다.',
              formulas: ['Q = U × A × LMTD'],
              relatedConcepts: ['응축기', '증발기', '전열교환기']
            },
            '전열교환기': {
              name: '전열교환기(Total Heat Exchanger)',
              description: '환기 시 배기의 현열과 잠열을 모두 회수하여 급기에 전달하는 장치로, 에너지 절약에 효과적이다.',
              formulas: ['열교환효율 η = (T_외기 - T_급기) / (T_외기 - T_배기)'],
              relatedConcepts: ['ERV', '열회수', 'AHU']
            },
            '냉각탑': {
              name: '냉각탑(Cooling Tower)',
              description: '응축기에서 냉매에 의해 가열된 냉각수를 외기와 접촉시켜 증발 냉각하는 장치이다.',
              formulas: ['냉각능력 Q = G × c × ΔT'],
              relatedConcepts: ['쿨링타워', '응축기', '기화냉각']
            },
            '쿨링타워': {
              name: '쿨링타워(Cooling Tower) 온도 관계',
              description: '쿨링타워의 입출구 냉각수 온도 차이(레인지)는 일반적으로 3~5℃이며, 어프로치는 냉각수 출구온도와 습구온도의 차이이다.',
              formulas: ['레인지 = T_입구 - T_출구', '어프로치 = T_출구 - T_습구'],
              relatedConcepts: ['냉각탑', '응축기', '기화냉각']
            }
          }
        },
        '팽창장치 및 부속기기': {
          name: '팽창장치 및 부속기기',
          description: '냉매의 팽창을 담당하는 장치와 냉동 시스템의 보조 장비',
          concepts: {
            '팽창밸브': {
              name: '팽창밸브(Expansion Valve)',
              description: '고압 액냉매를 저압으로 감압하여 증발기로 보내는 장치로, TEV, EEV, 모세관, 플로트밸브 등이 있다.',
              formulas: [],
              relatedConcepts: ['TEV', '모세관', '냉동사이클']
            },
            'TEV': {
              name: 'TEV(Thermostatic Expansion Valve, 온도식자동팽창밸브)',
              description: '감온통의 냉매 온도 변화에 따라 밸브 개도를 자동 조절하여 과열도를 일정하게 유지하는 팽창밸브이다.',
              formulas: [],
              relatedConcepts: ['팽창밸브', '과열도', '과열']
            },
            '모세관': {
              name: '모세관(Capillary Tube)',
              description: '가느다란 관의 마찰 저항을 이용하여 냉매를 감압하는 가장 단순한 팽창장치로, 소형 냉동기에 사용된다.',
              formulas: [],
              relatedConcepts: ['팽창밸브', 'TEV', '냉동사이클']
            },
            '수액기': {
              name: '수액기(Receiver)',
              description: '응축기에서 나온 액냉매를 일시적으로 저장하여 부하 변동에 따른 냉매 유량을 조절하는 용기이다.',
              formulas: [],
              relatedConcepts: ['응축기', '팽창밸브', '드라이어']
            },
            '유분리기': {
              name: '유분리기(Oil Separator)',
              description: '압축기 토출측에 설치하여 냉매 가스에 포함된 냉동기유를 분리하고 압축기로 되돌리는 장치이다.',
              formulas: [],
              relatedConcepts: ['압축기', '냉동유', '배관']
            },
            '드라이어': {
              name: '드라이어(Dryer/Filter Drier)',
              description: '냉동 시스템 내의 수분과 이물질을 제거하는 장치로, 실리카겔이나 활성알루미나 등의 건조제를 사용한다.',
              formulas: [],
              relatedConcepts: ['수액기', '냉매', '유분리기']
            },
            '어큐뮬레이터': {
              name: '어큐뮬레이터(Accumulator)',
              description: '증발기 출구에 설치하여 미증발 액냉매가 압축기로 유입되는 것(액압축)을 방지하는 기액분리 장치이다.',
              formulas: [],
              relatedConcepts: ['액분리기', '증발기', '압축기']
            },
            '액분리기': {
              name: '액분리기(Liquid Separator)',
              description: '증발기와 압축기 사이에 설치하여 액냉매를 분리하고 가스 냉매만 압축기로 보내는 보호장치이다.',
              formulas: [],
              relatedConcepts: ['어큐뮬레이터', '증발기', '압축기']
            },
            'EPR': {
              name: 'EPR(Evaporator Pressure Regulator)',
              description: '증발기 출구 압력을 일정 이상으로 유지하여 증발 온도가 너무 낮아지는 것을 방지하는 밸브이다.',
              formulas: [],
              relatedConcepts: ['CPR', '증발기', '팽창밸브']
            },
            'CPR': {
              name: 'CPR(Crankcase Pressure Regulator)',
              description: '압축기 흡입 압력이 과도하게 상승하여 압축기가 과부하되는 것을 방지하는 밸브이다.',
              formulas: [],
              relatedConcepts: ['EPR', '압축기', '과부하계전기']
            },
            '4방밸브': {
              name: '4방밸브(Four-Way Valve)',
              description: '히트펌프에서 냉매 흐름 방향을 전환하여 냉방/난방 모드를 전환하는 밸브이다.',
              formulas: [],
              relatedConcepts: ['열펌프', '히트펌프', '냉동사이클']
            },
            '오리피스': {
              name: '오리피스(Orifice)',
              description: '관로에 설치하여 유량을 측정하거나 제한하는 장치로, 유체의 차압을 이용하여 유량을 산출한다.',
              formulas: ['Q = C × A × √(2ΔP / ρ)'],
              relatedConcepts: ['팽창밸브', '배관', '냉매']
            }
          }
        },
        '냉매': {
          name: '냉매',
          description: '냉동 시스템에서 열을 운반하는 작동 유체에 관한 내용',
          concepts: {
            '냉매': {
              name: '냉매(Refrigerant)',
              description: '냉동 시스템에서 열을 저온부에서 흡수하여 고온부에서 방출하는 작동 유체로, CFC, HCFC, HFC, 자연냉매 등으로 분류된다.',
              formulas: [],
              relatedConcepts: ['R-410A', 'R-134a', 'R-32', 'R-22', 'CO2', '암모니아']
            },
            'R-410A': {
              name: 'R-410A 냉매',
              description: 'R-32와 R-125의 공비혼합 HFC 냉매로, R-22를 대체하여 널리 사용된다. ODP=0이나 GWP가 2088로 높다.',
              formulas: [],
              relatedConcepts: ['냉매', 'R-32', 'GWP', '공비혼합물']
            },
            'R-134a': {
              name: 'R-134a 냉매',
              description: 'HFC 계열 냉매로 자동차 에어컨과 가정용 냉장고에 널리 사용된다. ODP=0, GWP=1430이다.',
              formulas: [],
              relatedConcepts: ['냉매', 'R-410A', 'GWP']
            },
            'R-32': {
              name: 'R-32 냉매(Difluoromethane)',
              description: 'HFC 단일 냉매로, R-410A 대비 GWP가 약 1/3(675) 수준이며 열전달 특성이 우수하다. 미약한 가연성(A2L)이 있다.',
              formulas: [],
              relatedConcepts: ['냉매', 'R-410A', 'GWP']
            },
            'R-22': {
              name: 'R-22 냉매(Chlorodifluoromethane)',
              description: 'HCFC 계열 냉매로, 오존층 파괴 물질이어서 몬트리올 의정서에 따라 생산이 단계적으로 금지되었다.',
              formulas: [],
              relatedConcepts: ['냉매', '몬트리올의정서', 'ODP', 'R-410A']
            },
            'CO2': {
              name: 'CO2 냉매(R-744)',
              description: '자연냉매로 GWP=1, ODP=0이다. 초임계 사이클로 작동하며 작동 압력이 매우 높다.',
              formulas: [],
              relatedConcepts: ['암모니아', '자연냉매', 'GWP']
            },
            '암모니아': {
              name: '암모니아 냉매(R-717)',
              description: '자연냉매로 우수한 열역학 특성을 가지며 GWP=0, ODP=0이다. 독성과 가연성이 있으며 자극적 냄새로 누출 감지가 용이하다.',
              formulas: [],
              relatedConcepts: ['CO2', '자연냉매', '흡수식']
            },
            '냉동유': {
              name: '냉동유(Refrigeration Oil)',
              description: '압축기 윤활, 밀봉, 냉각을 위해 사용되는 오일로, 냉매와의 상용성이 중요하며 광유, POE, PAG 등이 있다.',
              formulas: [],
              relatedConcepts: ['압축기', '유분리기', '크랭크케이스히터']
            },
            '브라인': {
              name: '브라인(Brine, 2차 냉매)',
              description: '간접 냉각 시스템에서 열을 운반하는 2차 냉매로, 염화칼슘 수용액이나 에틸렌글리콜 등이 사용된다.',
              formulas: [],
              relatedConcepts: ['냉매', '증발기', '냉동창고']
            },
            '배관': {
              name: '배관(Piping)',
              description: '냉매를 순환시키는 관으로, 흡입관, 토출관, 액관으로 구분된다. 오일 트랩 설치와 적정 유속 유지가 중요하다.',
              formulas: [],
              relatedConcepts: ['유분리기', '압축기', '냉매']
            }
          }
        },
        '공조 장치': {
          name: '공조 장치',
          description: '공기조화를 위한 주요 장치와 시스템 구성',
          concepts: {
            'AHU': {
              name: 'AHU(Air Handling Unit, 공조기)',
              description: '공기의 냉각, 가열, 가습, 제습, 여과를 수행하는 종합 공조 장치로, 코일, 필터, 팬 등으로 구성된다.',
              formulas: [],
              relatedConcepts: ['FCU', 'VAV', '덕트']
            },
            'VAV': {
              name: 'VAV(Variable Air Volume, 가변풍량방식)',
              description: '실내 부하에 따라 공급 풍량을 변화시켜 온도를 제어하는 공조 방식으로, 에너지 절약과 실별 제어가 가능하다.',
              formulas: [],
              relatedConcepts: ['AHU', '덕트', 'CAV']
            },
            'FCU': {
              name: 'FCU(Fan Coil Unit)',
              description: '소형 팬과 냉온수 코일로 구성된 개별 공조 장치로, 실별 온도 조절이 가능하며 호텔, 사무실 등에 사용된다.',
              formulas: [],
              relatedConcepts: ['AHU', 'VAV', '4관식']
            },
            'VRF': {
              name: 'VRF(Variable Refrigerant Flow, 멀티시스템)',
              description: '하나의 실외기에 여러 실내기를 연결하여 냉매 유량을 가변 제어하는 시스템으로, 실별 개별 제어와 동시 냉난방이 가능하다.',
              formulas: [],
              relatedConcepts: ['인버터', '4방밸브', '히트펌프']
            },
            '패키지에어컨': {
              name: '패키지에어컨(Package Air Conditioner, PAC)',
              description: '압축기, 증발기, 응축기, 팽창장치를 하나의 케이스에 일체로 조합한 공조 장치이다.',
              formulas: [],
              relatedConcepts: ['AHU', 'VRF', '압축기']
            },
            '덕트': {
              name: '덕트(Duct)',
              description: '공조된 공기를 각 실로 분배하거나 환기하기 위한 공기 통로로, 원형, 직사각형, 플렉시블 타입이 있다.',
              formulas: ['ΔP = f × (L/D) × (ρv²/2)'],
              relatedConcepts: ['AHU', 'VAV', '디퓨저']
            },
            '디퓨저': {
              name: '디퓨저(Diffuser, 취출구)',
              description: '덕트에서 공조된 공기를 실내에 고르게 분포시키는 취출구로, 원형, 사각형, 라인형 등이 있다.',
              formulas: [],
              relatedConcepts: ['덕트', 'AHU', 'VAV']
            },
            '댐퍼': {
              name: '댐퍼(Damper)',
              description: '덕트 내의 풍량이나 풍향을 조절하는 장치로, 모터 댐퍼, 수동 댐퍼, 방화 댐퍼 등이 있다.',
              formulas: [],
              relatedConcepts: ['덕트', 'VAV', 'AHU']
            }
          }
        },
        '특수 냉동장치 및 설비': {
          name: '특수 냉동장치 및 설비',
          description: '특수 용도의 냉동 및 공조 장치',
          concepts: {
            '히트펌프': {
              name: '히트펌프(Heat Pump) 시스템',
              description: '냉동기의 응축열을 난방에 이용하는 장치로, 공기열원, 수열원, 지열 등 다양한 열원을 사용한다.',
              formulas: ['COP_HP = Q_H / W'],
              relatedConcepts: ['열펌프', '지열', '4방밸브']
            },
            '지열': {
              name: '지열 히트펌프(Geothermal Heat Pump)',
              description: '지중의 안정적인 온도를 열원으로 이용하는 히트펌프로, 연중 높은 효율을 유지하나 초기 비용이 높다.',
              formulas: [],
              relatedConcepts: ['히트펌프', '열펌프', 'COP']
            },
            '이코노마이저': {
              name: '이코노마이저(Economizer)',
              description: '냉동 시스템의 효율을 높이기 위한 장치 또는 외기 냉방을 위한 장치로, 중간 냉각이나 외기 도입에 사용된다.',
              formulas: [],
              relatedConcepts: ['자유냉각', 'COP', '2단압축']
            },
            '자유냉각': {
              name: '자유냉각(Free Cooling)',
              description: '외기 온도가 낮을 때 압축기 없이 외기만으로 냉방하는 에너지 절약 기술이다.',
              formulas: [],
              relatedConcepts: ['이코노마이저', 'BMS', '에너지절약']
            },
            '열회수': {
              name: '열회수(Heat Recovery)',
              description: '공조 시스템에서 배열, 배기열 등을 회수하여 재활용하는 에너지 절약 기술이다.',
              formulas: ['열회수율 η = 회수열량 / 배출열량'],
              relatedConcepts: ['전열교환기', 'ERV', '에너지절약']
            },
            '캐스케이드': {
              name: '캐스케이드 냉동(Cascade Refrigeration)',
              description: '2종류 이상의 냉매를 사용하여 각각의 사이클을 직렬로 연결한 극저온 냉동 방식이다.',
              formulas: [],
              relatedConcepts: ['극저온', '2단압축', '다단압축']
            },
            '다단압축': {
              name: '다단압축(Multi-Stage Compression)',
              description: '압축을 여러 단계로 나누어 수행하는 방식으로, 압축비를 줄여 효율을 높이고 토출 온도를 낮춘다.',
              formulas: ['최적 중간압력 P_m = √(P_L × P_H)'],
              relatedConcepts: ['2단압축', '압축비', '캐스케이드']
            },
            '제상': {
              name: '제상(Defrosting)',
              description: '증발기 표면에 형성된 서리나 얼음을 제거하는 과정으로, 전기히터, 핫가스, 온수 방식 등이 있다.',
              formulas: [],
              relatedConcepts: ['증발기', '성에', '냉동창고']
            },
            '성에': {
              name: '성에(Frost)',
              description: '증발기 표면 온도가 0℃ 이하일 때 공기 중 수분이 응결·동결되어 형성되며, 열교환 효율을 저하시킨다.',
              formulas: [],
              relatedConcepts: ['제상', '증발기']
            },
            '축열': {
              name: '축열시스템(Thermal Storage System)',
              description: '심야 전력 등 저렴한 시간대에 열을 저장하고 주간에 사용하는 에너지 절약 시스템이다.',
              formulas: [],
              relatedConcepts: ['빙축열', '에너지절약']
            },
            '빙축열': {
              name: '빙축열(Ice Thermal Storage)',
              description: '심야에 얼음을 생성하여 열을 저장하고, 주간 냉방 피크 시 활용하는 축열 시스템이다.',
              formulas: ['축열량 Q = m × L + m × c × ΔT'],
              relatedConcepts: ['축열', '냉방', '에너지절약']
            },
            '4관식': {
              name: '4관식 공조시스템(Four-Pipe System)',
              description: '냉수 공급·환수 배관과 온수 공급·환수 배관을 각각 별도로 설치한 방식으로, 동시 냉난방이 가능하다.',
              formulas: [],
              relatedConcepts: ['FCU', 'AHU', '열회수']
            },
            'CAV': {
              name: 'CAV(Constant Air Volume, 정풍량방식)',
              description: '일정 풍량의 공기를 공급하고 온도를 변화시켜 실내 온도를 제어하는 공조 방식이다.',
              formulas: [],
              relatedConcepts: ['VAV', 'AHU', '덕트']
            },
            'DOAS': {
              name: 'DOAS(Dedicated Outdoor Air System)',
              description: '외기 처리 전용 공조 시스템으로, 환기 부하만을 전담하며 실내기(FCU, 복사패널 등)와 병용한다.',
              formulas: [],
              relatedConcepts: ['ERV', 'FCU', '전열교환기']
            },
            'ERV': {
              name: 'ERV(Energy Recovery Ventilator) / HRV',
              description: 'ERV는 전열교환 환기장치, HRV는 현열교환 환기장치로, 환기 시 에너지를 회수한다.',
              formulas: [],
              relatedConcepts: ['전열교환기', '열회수', 'DOAS']
            },
            '언더플로어': {
              name: '언더플로어 공조(Underfloor Air Distribution)',
              description: '이중 바닥 하부에서 공조 공기를 공급하는 방식으로, 에너지 절약과 쾌적성이 우수하다.',
              formulas: [],
              relatedConcepts: ['VAV', 'AHU', '디퓨저']
            },
            '냉동창고': {
              name: '냉동창고(Cold Storage)',
              description: '식품 등의 저온 보관을 위한 시설로, 단열, 제상, 결로 방지, 환기 등의 설계가 중요하다.',
              formulas: [],
              relatedConcepts: ['제상', '브라인', '증발기']
            },
            '클린룸': {
              name: '클린룸(Clean Room)',
              description: '공기 중 먼지 입자 수를 규정 이하로 관리하는 청정 공간으로, 반도체, 제약, 바이오 분야에서 필수적이다.',
              formulas: [],
              relatedConcepts: ['AHU', '덕트', '공조']
            },
            '수술실': {
              name: '수술실 공조(Operating Room HVAC)',
              description: '수술실은 양압 유지, 청정도 관리, 적정 온습도 제어가 중요하며, 수직 층류 기류가 사용된다.',
              formulas: [],
              relatedConcepts: ['클린룸', 'AHU', '공조']
            }
          }
        }
      }
    },
    '전기제어공학': {
      name: '전기제어공학',
      description: '냉동공조 시스템의 전기 회로, 전동기, 자동 제어 및 전력 설비에 대한 과목',
      topics: {
        '전동기': {
          name: '전동기',
          description: '냉동공조 시스템의 동력원인 전동기의 종류와 특성',
          concepts: {
            '전동기': {
              name: '전동기(Electric Motor)',
              description: '전기에너지를 기계에너지로 변환하는 장치로, 냉동공조에서는 주로 유도전동기가 사용된다.',
              formulas: ['N_s = 120f / P', 'T = P / (2πN)'],
              relatedConcepts: ['Y-Δ 기동', 'DOL기동', '인버터', '회전수']
            },
            'Y-Δ 기동': {
              name: 'Y-Δ 기동(Star-Delta Starting)',
              description: '기동 시 Y결선으로 전압을 1/√3로 낮춰 기동전류를 줄이고, 정상운전 시 Δ결선으로 전환하는 기동 방식이다.',
              formulas: ['기동전류 = 1/3 × 직입기동전류'],
              relatedConcepts: ['전동기', 'DOL기동', '전자접촉기']
            },
            'DOL기동': {
              name: 'DOL기동(Direct On-Line Starting)',
              description: '전동기에 전전압을 직접 인가하는 가장 간단한 기동 방식으로, 소용량 전동기에 적합하다.',
              formulas: ['기동전류 = 정격전류 × 4~8배'],
              relatedConcepts: ['전동기', 'Y-Δ 기동', '인버터']
            },
            '회전수': {
              name: '전동기 회전수(Motor Speed)',
              description: '유도전동기의 동기속도는 주파수와 극수에 의해 결정되며, 실제 회전수는 슬립만큼 감소한다.',
              formulas: ['N_s = 120f / P', 's = (N_s - N) / N_s'],
              relatedConcepts: ['전동기', '인버터', 'VFD']
            },
            '역률': {
              name: '역률(Power Factor)',
              description: '피상전력에 대한 유효전력의 비율로, 역률이 낮으면 전력 손실이 증가한다. 콘덴서로 개선할 수 있다.',
              formulas: ['역률 = cos φ = P / (V × I)', 'Q_c = P × (tan φ1 - tan φ2)'],
              relatedConcepts: ['전동기', '인버터', 'UPS']
            }
          }
        },
        '전력기기 및 보호장치': {
          name: '전력기기 및 보호장치',
          description: '전력 개폐, 보호, 안전을 위한 전기 기기',
          concepts: {
            '전자접촉기': {
              name: '전자접촉기(Magnetic Contactor, MC)',
              description: '전자석의 힘으로 접점을 개폐하는 전력 개폐 장치로, 전동기의 기동·정지에 사용된다.',
              formulas: [],
              relatedConcepts: ['전자개폐기', '전동기', 'Y-Δ 기동']
            },
            '전자개폐기': {
              name: '전자개폐기(Magnetic Switch)',
              description: '전자접촉기(MC)와 열동형 과부하계전기(THR)를 조합한 장치로, 전동기의 개폐와 과부하 보호를 겸한다.',
              formulas: [],
              relatedConcepts: ['전자접촉기', '과부하계전기', 'MCCB']
            },
            '과부하계전기': {
              name: '과부하계전기(Thermal Overload Relay)',
              description: '바이메탈의 열변형을 이용하여 전동기 과부하를 감지하고 차단하는 보호장치이다.',
              formulas: [],
              relatedConcepts: ['전자개폐기', 'MCCB', '전동기']
            },
            'MCCB': {
              name: 'MCCB(Molded Case Circuit Breaker, 배선용차단기)',
              description: '과전류 및 단락 발생 시 자동으로 회로를 차단하는 배선용 차단기이다.',
              formulas: [],
              relatedConcepts: ['누전차단기', '과부하계전기', '접지']
            },
            '누전차단기': {
              name: '누전차단기(ELB, Earth Leakage Breaker)',
              description: '누설전류를 감지하여 회로를 차단하는 안전장치로, 감전 사고를 방지한다.',
              formulas: [],
              relatedConcepts: ['MCCB', '접지', '안전']
            },
            '접지': {
              name: '접지(Grounding)',
              description: '전기 설비를 대지에 연결하여 누전 시 감전을 방지하고 이상전압을 억제하는 안전 조치이다.',
              formulas: [],
              relatedConcepts: ['누전차단기', 'MCCB', '안전']
            },
            'UPS': {
              name: 'UPS(Uninterruptible Power Supply, 무정전전원장치)',
              description: '정전 시 배터리로 전력을 공급하여 중요 기기의 연속 운전을 보장하는 장치이다.',
              formulas: [],
              relatedConcepts: ['전동기', '역률', 'BMS']
            },
            '트랜지스터': {
              name: '트랜지스터(Transistor)',
              description: '반도체 소자로 전류 증폭 및 스위칭에 사용되며, NPN과 PNP 타입이 있다. 인버터 등 전력 변환 회로의 기본 소자이다.',
              formulas: ['I_C = β × I_B'],
              relatedConcepts: ['인버터', 'PWM', 'VFD']
            }
          }
        },
        '자동제어': {
          name: '자동제어',
          description: '냉동공조 시스템의 자동 제어 이론과 장비',
          concepts: {
            '인버터': {
              name: '인버터(Inverter)',
              description: '교류 전원의 주파수와 전압을 가변하여 전동기 회전수를 무단계 제어하는 전력변환장치이다.',
              formulas: ['N = 120f / P'],
              relatedConcepts: ['VFD', '전동기', '회전수', 'PWM']
            },
            'VFD': {
              name: 'VFD(Variable Frequency Drive)',
              description: '가변 주파수 드라이브로, 인버터와 동의어이다. 전동기 속도를 제어하여 에너지를 절감한다.',
              formulas: ['P ∝ N³ (팬의 법칙)'],
              relatedConcepts: ['인버터', '전동기', '회전수']
            },
            'PID': {
              name: 'PID 제어(Proportional-Integral-Derivative Control)',
              description: '비례(P), 적분(I), 미분(D) 동작을 조합한 피드백 제어 방식으로, 공조 자동제어의 핵심 알고리즘이다.',
              formulas: ['u(t) = K_p × e(t) + K_i × ∫e(t)dt + K_d × de(t)/dt'],
              relatedConcepts: ['DDC', 'BMS', 'PWM']
            },
            'PLC': {
              name: 'PLC(Programmable Logic Controller)',
              description: '산업 현장의 자동화 제어를 위한 프로그래밍 가능한 논리 제어기로, 시퀀스 제어와 연산 제어가 가능하다.',
              formulas: [],
              relatedConcepts: ['DDC', 'BMS', '시퀀스']
            },
            '시퀀스': {
              name: '시퀀스 제어(Sequence Control)',
              description: '미리 정해진 순서에 따라 제어 동작을 수행하는 방식으로, 자기유지회로가 기본 구성이다.',
              formulas: [],
              relatedConcepts: ['PLC', '전자접촉기', 'DDC']
            },
            'DDC': {
              name: 'DDC(Direct Digital Control)',
              description: '디지털 컨트롤러를 이용한 직접 디지털 제어 방식으로, 공조 시스템의 정밀한 자동 제어에 사용된다.',
              formulas: [],
              relatedConcepts: ['PID', 'BMS', 'PLC']
            },
            'BMS': {
              name: 'BMS(Building Management System, 빌딩관리시스템)',
              description: '건물의 공조, 전기, 방재, 보안 등을 통합 관리하는 시스템으로, DDC와 연계하여 최적 운전을 수행한다.',
              formulas: [],
              relatedConcepts: ['DDC', 'PID', 'IoT']
            },
            'PWM': {
              name: 'PWM(Pulse Width Modulation)',
              description: '펄스 폭을 변조하여 출력을 제어하는 방식으로, 인버터의 출력 전압 제어에 사용된다.',
              formulas: ['듀티비 D = t_on / T'],
              relatedConcepts: ['인버터', 'VFD', 'PID']
            },
            '리미트스위치': {
              name: '리미트스위치(Limit Switch)',
              description: '물체의 위치나 이동 한계를 감지하는 접촉식 센서로, 댐퍼나 밸브의 위치 확인에 사용된다.',
              formulas: [],
              relatedConcepts: ['온도센서', '시퀀스', 'PLC']
            },
            '온도센서': {
              name: '온도센서(Temperature Sensor)',
              description: '온도를 전기 신호로 변환하는 센서로, 열전대(Thermocouple), 측온저항체(RTD), 서미스터 등이 있다.',
              formulas: ['RTD: R_t = R_0(1 + αt)'],
              relatedConcepts: ['리미트스위치', 'PID', 'DDC']
            },
            'IoT': {
              name: 'IoT(Internet of Things) 스마트공조',
              description: '센서, 통신, 클라우드를 활용하여 공조 시스템을 원격 모니터링 및 최적 제어하는 기술이다.',
              formulas: [],
              relatedConcepts: ['BMS', 'DDC', '온도센서']
            }
          }
        }
      }
    },
    '냉동공조관련 법규': {
      name: '냉동공조관련 법규',
      description: '냉동공조 시스템의 안전관리, 환경 규제, 검사 및 관련 법령에 대한 과목',
      topics: {
        '안전관리 법규': {
          name: '안전관리 법규',
          description: '고압가스 안전관리법 등 냉동기 관련 안전 법규',
          concepts: {
            '법규': {
              name: '냉동공조 관련 법규(HVAC Regulations)',
              description: '고압가스 안전관리법, 에너지이용합리화법, 대기환경보전법 등 냉동공조 관련 주요 법규를 다룬다.',
              formulas: [],
              relatedConcepts: ['안전', '검사', '안전장치']
            },
            '안전': {
              name: '안전관리(Safety Management)',
              description: '냉동기 취급 시의 안전 수칙으로, 환기, 보호구 착용, 화기 금지, 냉매 누출 대응 등이 포함된다.',
              formulas: [],
              relatedConcepts: ['법규', '안전장치', '안전밸브']
            },
            '안전장치': {
              name: '안전장치(Safety Devices)',
              description: '고압차단장치, 저압차단장치, 안전밸브, 용전장치 등 냉동기의 이상 상태를 방지하는 장치이다.',
              formulas: [],
              relatedConcepts: ['안전밸브', '법규', '안전']
            },
            '안전밸브': {
              name: '안전밸브(Safety Valve)',
              description: '냉동 시스템의 압력이 설정값을 초과하면 자동으로 개방하여 냉매를 방출하는 안전장치로, 법규로 설치가 의무화되어 있다.',
              formulas: [],
              relatedConcepts: ['안전장치', '법규', '내압시험']
            }
          }
        },
        '검사 및 시험': {
          name: '검사 및 시험',
          description: '냉동기의 각종 검사 및 시험 관련 법규',
          concepts: {
            '검사': {
              name: '검사(Inspection)',
              description: '냉동기의 제조검사, 설치검사, 정기검사 등 관련 법규에 따른 검사 제도이다.',
              formulas: [],
              relatedConcepts: ['법규', '내압시험', '기밀시험']
            },
            '내압시험': {
              name: '내압시험(Pressure Test)',
              description: '냉동기 압력용기의 내압 강도를 확인하는 시험으로, 설계압력의 1.5배(액압) 또는 1.25배(기압)로 실시한다.',
              formulas: ['수압시험압력 = 설계압력 × 1.5'],
              relatedConcepts: ['기밀시험', '검사', '안전밸브']
            },
            '기밀시험': {
              name: '기밀시험(Leak Test)',
              description: '냉동 시스템의 누설 여부를 확인하는 시험으로, 설계압력 이상의 기체압력을 가하여 실시한다.',
              formulas: [],
              relatedConcepts: ['내압시험', '검사', '냉매회수']
            }
          }
        },
        '환경 규제': {
          name: '환경 규제',
          description: '냉매의 환경 영향과 관련된 규제 및 법규',
          concepts: {
            '냉매회수': {
              name: '냉매회수(Refrigerant Recovery)',
              description: '냉동기 폐기, 수리, 교체 시 냉매를 대기 방출하지 않고 회수하는 것으로, 환경보호를 위해 법규로 의무화되어 있다.',
              formulas: [],
              relatedConcepts: ['법규', 'GWP', '자연냉매']
            },
            '자연냉매': {
              name: '자연냉매(Natural Refrigerant)',
              description: '자연에 존재하는 물질을 냉매로 사용하는 것으로, 암모니아(R-717), CO2(R-744), 탄화수소(R-290) 등이 있다. ODP=0이며 GWP가 매우 낮다.',
              formulas: [],
              relatedConcepts: ['CO2', '암모니아', 'GWP', 'ODP']
            },
            '냉매(안전등급)': {
              name: '냉매 안전등급(Refrigerant Safety Classification)',
              description: 'ASHRAE 34에 따른 냉매의 독성(A/B)과 가연성(1/2L/2/3) 분류로, A1이 가장 안전하다.',
              formulas: [],
              relatedConcepts: ['냉매', '안전', '자연냉매']
            }
          }
        }
      }
    },
    '냉동공조 원리': {
      name: '냉동공조 원리',
      description: '냉동 및 공조의 기본 원리와 작동 메커니즘을 다루는 과목으로, 사이클 분석, 열역학 원리, 냉매 물성 등을 포함',
      topics: {
        '냉동 기본원리': {
          name: '냉동 기본원리',
          description: '냉동 시스템의 기본 작동 원리와 사이클',
          concepts: {
            '냉동사이클': {
              name: '냉동사이클(Refrigeration Cycle)',
              description: '증기압축식 냉동사이클은 압축→응축→팽창→증발의 4과정으로 구성되며, 저온부에서 열을 흡수하여 고온부로 방출하는 역사이클이다.',
              formulas: ['COP_R = Q_L / W', 'Q_H = Q_L + W'],
              relatedConcepts: ['COP', '카르노사이클', 'P-h선도']
            },
            'COP': {
              name: 'COP(성적계수, Coefficient of Performance)',
              description: '냉동효과를 소비동력으로 나눈 값으로, 냉동기 및 히트펌프의 효율을 나타내는 핵심 지표이다.',
              formulas: ['COP = Q_L / W = (h1 - h4) / (h2 - h1)'],
              relatedConcepts: ['냉동사이클', 'EER', '히트펌프']
            },
            '카르노사이클': {
              name: '카르노사이클(Carnot Cycle)',
              description: '등온팽창, 단열팽창, 등온압축, 단열압축의 4과정으로 구성된 이상적 열역학 사이클이다.',
              formulas: ['COP_카르노 = T_L / (T_H - T_L)'],
              relatedConcepts: ['냉동사이클', 'COP', '엔트로피']
            },
            'P-h선도': {
              name: 'P-h 선도(Pressure-Enthalpy Diagram)',
              description: '압력-엔탈피 선도로 냉동사이클을 도시하여 각 과정의 열량과 일량을 분석한다.',
              formulas: ['냉동효과 q = h1 - h4', '압축일 w = h2 - h1'],
              relatedConcepts: ['냉동사이클', 'COP']
            },
            '과열도': {
              name: '과열도(Degree of Superheat)',
              description: '냉매의 실제 온도에서 증발 온도를 뺀 값으로, 증발기 출구에서 냉매가 과열된 정도를 나타낸다.',
              formulas: ['과열도(℃) = T_흡입 - T_증발'],
              relatedConcepts: ['과열', 'TEV', '증발기']
            },
            '흡수식': {
              name: '흡수식 냉동기(Absorption Refrigerator)',
              description: '열에너지를 동력으로 사용하는 냉동기로, 암모니아-물 또는 물-LiBr 조합을 사용한다.',
              formulas: ['COP_흡수식 = Q_증발 / Q_재생기'],
              relatedConcepts: ['열펌프', '암모니아', 'COP']
            },
            '냉동톤': {
              name: '냉동톤(RT)',
              description: '냉동능력의 단위로, 1시간에 0℃ 물 1톤을 0℃ 얼음으로 만드는 능력이다.',
              formulas: ['1 RT = 3,024 kcal/h ≈ 3.517 kW'],
              relatedConcepts: ['냉동능력', 'COP']
            }
          }
        },
        '냉매 원리': {
          name: '냉매 원리',
          description: '냉매의 물성과 선정 원리',
          concepts: {
            '냉매': {
              name: '냉매(Refrigerant)',
              description: '냉동 시스템의 작동 유체로, 증발과 응축을 반복하며 열을 운반한다.',
              formulas: [],
              relatedConcepts: ['R-22', 'R-32', 'CO2', '암모니아']
            },
            'R-22': {
              name: 'R-22(HCFC-22)',
              description: 'HCFC 계열 냉매로 독성이 낮으나 오존층 파괴 물질이어서 생산이 금지되었다.',
              formulas: [],
              relatedConcepts: ['냉매', '몬트리올의정서', 'ODP']
            },
            'R-32': {
              name: 'R-32(HFC-32)',
              description: 'R-410A 대비 GWP가 약 1/3 수준인 차세대 HFC 냉매이다.',
              formulas: [],
              relatedConcepts: ['냉매', 'R-410A', 'GWP']
            },
            'CO2': {
              name: 'CO2 냉매(R-744)',
              description: '자연냉매로 GWP=1, ODP=0이며 초임계 사이클로 작동 압력이 매우 높다.',
              formulas: [],
              relatedConcepts: ['암모니아', '자연냉매', 'GWP']
            },
            '암모니아': {
              name: '암모니아(R-717)',
              description: '자연냉매로 우수한 열역학 특성을 가지나 독성과 가연성이 있다.',
              formulas: [],
              relatedConcepts: ['CO2', '흡수식', '자연냉매']
            },
            '브라인': {
              name: '브라인(Brine, 2차 냉매)',
              description: '간접 냉각 시스템에서 사용되는 2차 냉매로, 염화칼슘 수용액 등이 있다.',
              formulas: [],
              relatedConcepts: ['냉매', '냉동창고']
            }
          }
        },
        '습공기 원리': {
          name: '습공기 원리',
          description: '습공기의 기본 원리와 선도 해석',
          concepts: {
            '습공기선도': {
              name: '습공기선도(Psychrometric Chart)',
              description: '습공기의 상태를 도시한 선도로, 건구온도, 습구온도, 상대습도, 엔탈피 등을 읽을 수 있다.',
              formulas: [],
              relatedConcepts: ['습공기', '노점온도', '현열비']
            },
            '히트펌프': {
              name: '히트펌프(Heat Pump)',
              description: '냉동기의 응축열을 난방에 이용하며, 난방 COP는 냉방 COP보다 1만큼 크다.',
              formulas: ['COP_HP = COP_R + 1'],
              relatedConcepts: ['열펌프', '지열', '4방밸브']
            },
            '과냉도': {
              name: '과냉도(Subcooling)',
              description: '응축온도와 응축기 출구 액냉매 온도의 차이로, 부족하면 플래시가스가 발생한다.',
              formulas: ['과냉도 = T_응축 - T_출구'],
              relatedConcepts: ['과냉각', '플래시가스']
            }
          }
        }
      }
    },
    '냉동공조 설비': {
      name: '냉동공조 설비',
      description: '냉동공조 시스템을 구성하는 각종 설비와 기기의 설치, 운전, 유지보수에 대한 과목',
      topics: {
        '압축기 설비': {
          name: '압축기 설비',
          description: '각종 압축기의 구조와 운전 특성',
          concepts: {
            '압축기': {
              name: '압축기(Compressor)',
              description: '왕복동, 스크류, 스크롤, 원심식 등 다양한 형식의 압축기로, 냉매를 압축하는 핵심 설비이다.',
              formulas: [],
              relatedConcepts: ['스크류 압축기', '원심압축기', '냉동사이클']
            }
          }
        },
        '열교환기 설비': {
          name: '열교환기 설비',
          description: '증발기, 응축기 등 열교환 설비',
          concepts: {
            '증발기': {
              name: '증발기(Evaporator)',
              description: '저압 액냉매가 증발하여 열을 흡수하는 설비로, 건식, 만액식, 핀코일형 등이 있다.',
              formulas: ['Q = G × (h1 - h4)'],
              relatedConcepts: ['응축기', '제상', '냉동사이클']
            },
            '응축기': {
              name: '응축기(Condenser)',
              description: '고온고압 냉매가 응축되는 설비로, 수냉식, 공냉식, 증발식으로 분류된다.',
              formulas: ['Q = G × (h2 - h3)'],
              relatedConcepts: ['증발기', '냉각탑', '쿨링타워']
            },
            '냉각탑': {
              name: '냉각탑(Cooling Tower)',
              description: '냉각수를 대기와 접촉시켜 증발냉각하는 설비이다.',
              formulas: [],
              relatedConcepts: ['쿨링타워', '응축기']
            },
            '쿨링타워': {
              name: '쿨링타워 설비',
              description: '쿨링타워의 입출구 온도차(레인지)와 어프로치 관리가 중요하다.',
              formulas: ['레인지 = T_in - T_out'],
              relatedConcepts: ['냉각탑', '응축기']
            }
          }
        },
        '팽창장치 및 부속기기 설비': {
          name: '팽창장치 및 부속기기 설비',
          description: '팽창밸브 및 부속 설비의 설치와 운전',
          concepts: {
            '팽창밸브': {
              name: '팽창밸브(Expansion Valve)',
              description: '고압 액냉매를 감압하여 증발기로 보내는 설비로, TEV, EEV, 모세관, 플로트밸브 등이 있다.',
              formulas: [],
              relatedConcepts: ['TEV', '모세관', '수액기']
            },
            '수액기': {
              name: '수액기(Receiver)',
              description: '응축기에서 나온 액냉매를 저장하는 설비이다.',
              formulas: [],
              relatedConcepts: ['응축기', '팽창밸브']
            },
            '어큐뮬레이터': {
              name: '어큐뮬레이터(Accumulator)',
              description: '증발기 출구에 설치하여 액냉매의 압축기 유입(액압축)을 방지하는 설비이다.',
              formulas: [],
              relatedConcepts: ['액분리기', '증발기', '압축기']
            },
            '4방밸브': {
              name: '4방밸브(Four-Way Valve)',
              description: '히트펌프에서 냉매 흐름을 전환하여 냉난방을 교체하는 밸브 설비이다.',
              formulas: [],
              relatedConcepts: ['히트펌프', '열펌프']
            }
          }
        },
        '공조 설비': {
          name: '공조 설비',
          description: '공기조화를 위한 설비 구성',
          concepts: {
            'FCU': {
              name: 'FCU(Fan Coil Unit)',
              description: '소형 팬과 냉온수 코일로 구성된 개별 공조 설비로, 실별 온도 조절이 가능하다.',
              formulas: [],
              relatedConcepts: ['AHU', 'VRF', '4관식']
            },
            '클린룸': {
              name: '클린룸 설비(Clean Room)',
              description: '공기 중 먼지 입자 수를 규정 이하로 관리하는 청정 설비이다.',
              formulas: [],
              relatedConcepts: ['AHU', '수술실']
            },
            '수술실': {
              name: '수술실 공조 설비',
              description: '양압 유지와 청정도 관리가 핵심인 수술실 전용 공조 설비이다.',
              formulas: [],
              relatedConcepts: ['클린룸', 'AHU']
            }
          }
        }
      }
    },
    '냉동공조 설계': {
      name: '냉동공조 설계',
      description: '냉동공조 시스템의 설계, 부하 계산, 배관 설계, 에너지 효율 등에 대한 과목',
      topics: {
        '부하 계산 및 설계': {
          name: '부하 계산 및 설계',
          description: '공조 부하 산정 및 시스템 설계',
          concepts: {
            '공조부하': {
              name: '공조부하(HVAC Load)',
              description: '실내 환경을 유지하기 위해 제거하거나 공급해야 하는 열량으로, 외벽 열관류, 환기, 인체발열, 조명 등을 고려한다.',
              formulas: ['Q = U × A × ΔT (열관류)', 'Q_환기 = ρ × c × V × ΔT'],
              relatedConcepts: ['SHR', '현열비', 'SHF']
            },
            '냉동창고': {
              name: '냉동창고 설계(Cold Storage Design)',
              description: '단열재 두께, 제상 방법, 환기 횟수, 결로 방지 등을 고려한 냉동창고 설계이다.',
              formulas: ['침입열량 Q = K × A × ΔT'],
              relatedConcepts: ['제상', '브라인', '증발기']
            },
            '클린룸': {
              name: '클린룸 설계(Clean Room Design)',
              description: '청정도(Class), 환기횟수, 양압 유지, 온습도 정밀 제어를 고려한 설계이다.',
              formulas: [],
              relatedConcepts: ['AHU', '수술실', '공조']
            },
            '수술실': {
              name: '수술실 공조 설계',
              description: '양압 유지, 수직 층류 기류, 청정도 관리를 위한 수술실 공조 설계이다.',
              formulas: [],
              relatedConcepts: ['클린룸', 'AHU']
            }
          }
        },
        '배관 및 덕트 설계': {
          name: '배관 및 덕트 설계',
          description: '냉매 배관 및 공조 덕트 설계',
          concepts: {
            '배관설계': {
              name: '배관설계(Piping Design)',
              description: '냉매 배관 설계 시 오일 회수, 압력 손실, 배관 재질, 단열 등을 고려해야 한다.',
              formulas: ['ΔP = f × (L/D) × (ρv²/2)'],
              relatedConcepts: ['배관', '냉매', '유분리기']
            },
            '덕트': {
              name: '덕트 설계(Duct Design)',
              description: '마찰 저항, 풍속, 소음, 정압법 등을 고려한 공조 덕트 설계이다.',
              formulas: ['ΔP = f × (L/D_h) × (ρv²/2)'],
              relatedConcepts: ['AHU', 'VAV', '디퓨저']
            }
          }
        },
        '시스템 설계': {
          name: '시스템 설계',
          description: '공조 시스템의 방식 선정과 설계',
          concepts: {
            'VAV': {
              name: 'VAV 시스템 설계(Variable Air Volume)',
              description: '가변 풍량 방식의 공조 시스템 설계로, 에너지 절약과 실별 제어가 가능하나 제어가 복잡하다.',
              formulas: [],
              relatedConcepts: ['AHU', '덕트', 'CAV']
            },
            'FCU': {
              name: 'FCU 시스템 설계(Fan Coil Unit)',
              description: '실별 온도 조절이 가능하고 설치 공간이 작은 개별 공조 시스템 설계이다.',
              formulas: [],
              relatedConcepts: ['AHU', '4관식', 'VRF']
            },
            'VRF': {
              name: 'VRF 시스템 설계(Variable Refrigerant Flow)',
              description: '실별 개별 제어와 동시 냉난방이 가능한 멀티형 공조 시스템 설계이다.',
              formulas: [],
              relatedConcepts: ['인버터', '4방밸브', '히트펌프']
            },
            'EER': {
              name: 'EER(Energy Efficiency Ratio)',
              description: '설계 시 에너지 효율을 평가하는 지표로, 냉방능력을 소비전력으로 나눈 값이다.',
              formulas: ['EER = 냉방능력(W) / 소비전력(W)'],
              relatedConcepts: ['COP', 'SEER', '냉동능력']
            },
            '지열': {
              name: '지열 히트펌프 설계',
              description: '지중 열교환기(수직형, 수평형)와 히트펌프를 조합한 시스템 설계로, 초기 비용이 높으나 효율이 우수하다.',
              formulas: [],
              relatedConcepts: ['히트펌프', 'COP']
            }
          }
        }
      }
    }
  }
};
