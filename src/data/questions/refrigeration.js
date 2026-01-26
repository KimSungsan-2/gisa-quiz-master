// 냉동공조기사 문제 데이터
export const refrigerationQuestions = [
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
  },
  {
    id: 'REF_051',
    subject: '냉동공조 원리',
    question: '증기압축식 냉동사이클의 순서로 옳은 것은?',
    options: ['압축→응축→팽창→증발', '압축→증발→응축→팽창', '증발→압축→팽창→응축', '응축→압축→증발→팽창'],
    answer: 0,
    explanation: '증기압축식 냉동사이클은 압축기→응축기→팽창밸브→증발기 순으로 작동합니다.',
    difficulty: '하',
    tags: ['냉동사이클', '기본원리']
  },
  {
    id: 'REF_052',
    subject: '냉동공조 설비',
    question: '왕복동 압축기의 특징으로 옳지 않은 것은?',
    options: ['소형 냉동기에 적합', '고압 압축 가능', '진동이 적다', '간헐적 토출'],
    answer: 2,
    explanation: '왕복동 압축기는 피스톤의 왕복운동으로 인해 진동이 크다는 단점이 있습니다.',
    difficulty: '중',
    tags: ['압축기', '왕복동']
  },
  {
    id: 'REF_053',
    subject: '냉동공조 원리',
    question: 'COP(성적계수)의 정의로 옳은 것은?',
    options: ['소비동력 / 냉동효과', '냉동효과 / 소비동력', '압축비 × 효율', '냉동능력 + 소비동력'],
    answer: 1,
    explanation: 'COP(Coefficient of Performance)는 냉동효과를 소비동력으로 나눈 값으로, 효율을 나타냅니다.',
    difficulty: '중',
    tags: ['COP', '성능']
  },
  {
    id: 'REF_054',
    subject: '냉동공조 설계',
    question: '냉매 배관 설계 시 고려사항이 아닌 것은?',
    options: ['오일 회수', '압력 손실', '배관 재질', '실내 조도'],
    answer: 3,
    explanation: '냉매 배관 설계 시 오일 회수, 압력 손실, 배관 재질, 단열 등을 고려해야 합니다. 실내 조도는 관련 없습니다.',
    difficulty: '하',
    tags: ['배관설계', '냉매']
  },
  {
    id: 'REF_055',
    subject: '냉동공조 설비',
    question: '스크롤 압축기의 장점이 아닌 것은?',
    options: ['진동이 적다', '소음이 낮다', '효율이 높다', '대용량에 적합하다'],
    answer: 3,
    explanation: '스크롤 압축기는 중소형 냉동기에 적합합니다. 진동과 소음이 적고 효율이 높다는 장점이 있습니다.',
    difficulty: '중',
    tags: ['압축기', '스크롤']
  },
  {
    id: 'REF_056',
    subject: '냉동공조 원리',
    question: 'R-22 냉매의 특징으로 옳지 않은 것은?',
    options: ['HCFC 계열', '오존층 파괴 물질', '현재 생산 금지', '독성이 매우 강함'],
    answer: 3,
    explanation: 'R-22는 독성이 낮은 냉매입니다. HCFC 계열로 오존층 파괴 물질이며 몬트리올 의정서에 따라 생산이 금지되었습니다.',
    difficulty: '중',
    tags: ['냉매', 'R-22']
  },
  {
    id: 'REF_057',
    subject: '냉동공조 설계',
    question: '덕트 설계에서 마찰 저항을 줄이는 방법이 아닌 것은?',
    options: ['덕트 직경 증가', '덕트 길이 감소', '곡관부 증가', '매끄러운 내면'],
    answer: 2,
    explanation: '곡관부가 많으면 마찰 저항이 증가합니다. 덕트 직경 증가, 길이 감소, 매끄러운 내면이 마찰 저항을 줄입니다.',
    difficulty: '중',
    tags: ['덕트', '설계']
  },
  {
    id: 'REF_058',
    subject: '냉동공조 설비',
    question: '응축기의 종류가 아닌 것은?',
    options: ['수냉식', '공냉식', '증발식', '압축식'],
    answer: 3,
    explanation: '응축기는 수냉식, 공냉식, 증발식으로 분류됩니다. 압축식은 응축기 종류가 아닙니다.',
    difficulty: '하',
    tags: ['응축기', '종류']
  },
  {
    id: 'REF_059',
    subject: '냉동공조 원리',
    question: '과열도(Superheat)의 정의로 옳은 것은?',
    options: ['증발 온도 - 냉매 온도', '냉매 온도 - 증발 온도', '응축 온도 - 냉매 온도', '냉매 온도 - 응축 온도'],
    answer: 1,
    explanation: '과열도는 냉매의 실제 온도에서 증발 온도를 뺀 값입니다. 증발기 출구에서 냉매가 포화 상태를 넘어 과열된 정도를 나타냅니다.',
    difficulty: '중',
    tags: ['과열도', '냉매']
  },
  {
    id: 'REF_060',
    subject: '냉동공조관련 법규',
    question: '고압가스 안전관리법상 냉동능력 20RT 이상의 냉동기는?',
    options: ['신고 대상', '허가 대상', '등록 대상', '규제 없음'],
    answer: 0,
    explanation: '냉동능력 20RT 이상의 냉동기는 고압가스 안전관리법에 따라 신고 대상입니다.',
    difficulty: '중',
    tags: ['법규', '고압가스']
  },
  {
    id: 'REF_061',
    subject: '냉동공조 설비',
    question: '증발기의 서리 제거 방법이 아닌 것은?',
    options: ['전기 히터', '온수 순환', '역사이클', '압축기 정지'],
    answer: 3,
    explanation: '제상(Defrost) 방법에는 전기 히터, 온수 순환, 역사이클(핫가스) 등이 있습니다. 압축기 정지는 제상 방법이 아닙니다.',
    difficulty: '중',
    tags: ['증발기', '제상']
  },
  {
    id: 'REF_062',
    subject: '냉동공조 원리',
    question: '카르노 사이클의 4가지 과정이 아닌 것은?',
    options: ['등온팽창', '단열팽창', '등온압축', '등압압축'],
    answer: 3,
    explanation: '카르노 사이클은 등온팽창, 단열팽창, 등온압축, 단열압축의 4과정으로 구성됩니다.',
    difficulty: '상',
    tags: ['카르노사이클', '열역학']
  },
  {
    id: 'REF_063',
    subject: '냉동공조 설계',
    question: '공조 부하 계산 시 고려 요소가 아닌 것은?',
    options: ['외벽 열관류', '환기 부하', '인체 발열', '배관 재질'],
    answer: 3,
    explanation: '공조 부하는 외벽 열관류, 환기, 인체 발열, 조명, 기기 발열 등을 고려합니다. 배관 재질은 부하 계산 요소가 아닙니다.',
    difficulty: '중',
    tags: ['공조부하', '설계']
  },
  {
    id: 'REF_064',
    subject: '냉동공조 설비',
    question: '팽창밸브의 종류가 아닌 것은?',
    options: ['온도자동팽창밸브', '모세관', '플로트밸브', '역지밸브'],
    answer: 3,
    explanation: '팽창밸브 종류에는 온도자동팽창밸브, 전자팽창밸브, 모세관, 플로트밸브 등이 있습니다. 역지밸브는 팽창밸브가 아닙니다.',
    difficulty: '하',
    tags: ['팽창밸브', '종류']
  },
  {
    id: 'REF_065',
    subject: '냉동공조 원리',
    question: 'P-h 선도에서 압축 과정은?',
    options: ['등압 과정', '등온 과정', '등엔트로피 과정', '등엔탈피 과정'],
    answer: 2,
    explanation: '이상적인 압축 과정은 등엔트로피(단열) 과정입니다. P-h 선도에서 수직에 가까운 선으로 표현됩니다.',
    difficulty: '상',
    tags: ['P-h선도', '압축']
  },
  {
    id: 'REF_066',
    subject: '냉동공조 설계',
    question: 'VAV 시스템의 장점이 아닌 것은?',
    options: ['에너지 절약', '실별 온도 조절', '시스템 구조 단순', '부분 부하 운전'],
    answer: 2,
    explanation: 'VAV(Variable Air Volume) 시스템은 에너지 절약과 실별 온도 조절이 가능하지만, 제어 시스템이 복잡합니다.',
    difficulty: '중',
    tags: ['VAV', '공조시스템']
  },
  {
    id: 'REF_067',
    subject: '냉동공조 설비',
    question: '원심식 압축기의 특징으로 옳은 것은?',
    options: ['소형 냉동기용', '고압 압축', '대용량 적합', '간헐적 토출'],
    answer: 2,
    explanation: '원심식 압축기는 대용량 냉동기에 적합하며, 연속적으로 토출하고 진동이 적습니다.',
    difficulty: '중',
    tags: ['압축기', '원심식']
  },
  {
    id: 'REF_068',
    subject: '냉동공조 원리',
    question: '습공기 선도(Psychrometric Chart)에서 읽을 수 없는 값은?',
    options: ['건구온도', '습구온도', '상대습도', '압력']
    answer: 3,
    explanation: '습공기 선도에서는 건구온도, 습구온도, 상대습도, 절대습도, 엔탈피 등을 읽을 수 있지만, 압력은 나타나지 않습니다.',
    difficulty: '중',
    tags: ['습공기선도', '공조']
  },
  {
    id: 'REF_069',
    subject: '냉동공조관련 법규',
    question: '냉매 회수의무 대상이 아닌 것은?',
    options: ['냉동기 폐기 시', '냉동기 수리 시', '냉매 충전 시', '냉매 교체 시'],
    answer: 2,
    explanation: '냉매는 폐기, 수리, 교체 시 회수해야 합니다. 충전 시에는 회수 의무가 없습니다.',
    difficulty: '하',
    tags: ['냉매회수', '법규']
  },
  {
    id: 'REF_070',
    subject: '냉동공조 설비',
    question: '냉각탑의 냉각 방식이 아닌 것은?',
    options: ['증발 냉각', '현열 냉각', '복사 냉각', '대류 냉각'],
    answer: 2,
    explanation: '냉각탑은 주로 증발 냉각(잠열)과 현열 냉각, 대류에 의해 냉각됩니다. 복사 냉각은 냉각탑의 주요 방식이 아닙니다.',
    difficulty: '중',
    tags: ['냉각탑', '냉각방식']
  },
  {
    id: 'REF_071',
    subject: '냉동공조 설계',
    question: '냉동 창고 설계 시 고려사항이 아닌 것은?',
    options: ['단열재 두께', '제상 방법', '환기 횟수', '실내 조명 밝기'],
    answer: 3,
    explanation: '냉동 창고는 단열, 제상, 환기를 중요하게 고려해야 합니다. 조명 밝기는 냉동 성능과 직접적 관련이 적습니다.',
    difficulty: '중',
    tags: ['냉동창고', '설계']
  },
  {
    id: 'REF_072',
    subject: '냉동공조 원리',
    question: '흡수식 냉동기의 냉매와 흡수제 조합으로 옳은 것은?',
    options: ['암모니아-물', '물-암모니아', '프레온-물', 'R-22-LiBr'],
    answer: 0,
    explanation: '흡수식 냉동기는 암모니아(냉매)-물(흡수제) 또는 물(냉매)-LiBr(흡수제) 조합을 사용합니다.',
    difficulty: '중',
    tags: ['흡수식', '냉동기']
  },
  {
    id: 'REF_073',
    subject: '냉동공조 설비',
    question: '수액기(Receiver)의 역할은?',
    options: ['냉매 압축', '냉매 저장', '냉매 증발', '냉매 건조'],
    answer: 1,
    explanation: '수액기는 응축된 액체 냉매를 일시적으로 저장하는 역할을 합니다.',
    difficulty: '하',
    tags: ['수액기', '냉동설비']
  },
  {
    id: 'REF_074',
    subject: '냉동공조 설계',
    question: 'FCU(Fan Coil Unit) 시스템의 특징으로 옳지 않은 것은?',
    options: ['실별 온도 조절 가능', '설치 공간 작음', '중앙 제어 용이', '냉온수 배관 필요'],
    answer: 2,
    explanation: 'FCU 시스템은 개별 제어에 적합하지만, 중앙 제어는 다소 복잡합니다. 실별 온도 조절이 가능하고 설치 공간이 작습니다.',
    difficulty: '중',
    tags: ['FCU', '공조시스템']
  },
  {
    id: 'REF_075',
    subject: '냉동공조 원리',
    question: '냉동 톤(RT)의 정의로 옳은 것은?',
    options: ['1시간에 1톤의 물을 냉각', '24시간에 1톤의 얼음 생성', '1시간에 1톤의 0°C 물을 0°C 얼음으로', '24시간에 1톤의 물을 증발'],
    answer: 2,
    explanation: '1냉동톤(RT)은 1시간에 1톤(1000kg)의 0°C 물을 0°C 얼음으로 만드는 냉동 능력으로, 약 3024 kcal/h입니다.',
    difficulty: '중',
    tags: ['냉동톤', '단위']
  }
];

export default refrigerationQuestions;
