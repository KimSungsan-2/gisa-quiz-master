// 일반기계기사 문제 데이터
export const mechanicalQuestions = [
  {
    id: 'MECH_001',
    subject: '재료역학',
    question: '응력(Stress)의 정의로 옳은 것은?',
    options: ['단위 길이당 변형량', '단위 면적당 작용하는 힘', '단위 체적당 에너지', '단위 시간당 변위'],
    answer: 1,
    explanation: '응력은 단위 면적당 작용하는 내력으로, σ = P/A (힘/면적)로 정의됩니다.',
    difficulty: '하',
    tags: ['응력', '기초']
  },
  {
    id: 'MECH_002',
    subject: '재료역학',
    question: '변형률(Strain)의 정의로 옳은 것은?',
    options: ['단위 면적당 힘', '단위 길이당 변형량', '단위 체적당 힘', '단위 시간당 힘'],
    answer: 1,
    explanation: '변형률은 원래 길이에 대한 변형량의 비로, ε = ΔL/L로 정의됩니다.',
    difficulty: '하',
    tags: ['변형률', '기초']
  },
  {
    id: 'MECH_003',
    subject: '재료역학',
    question: '훅의 법칙(Hooke\'s Law)에서 응력과 변형률의 관계는?',
    options: ['반비례', '비례', '제곱 비례', '무관'],
    answer: 1,
    explanation: '훅의 법칙에 따르면 탄성 한도 내에서 응력은 변형률에 비례합니다 (σ = Eε).',
    difficulty: '하',
    tags: ['훅의 법칙', '탄성']
  },
  {
    id: 'MECH_004',
    subject: '재료역학',
    question: '탄성계수(Young\'s Modulus)의 단위는?',
    options: ['무차원', 'N/m', 'Pa (N/m²)', 'N·m'],
    answer: 2,
    explanation: '탄성계수 E = σ/ε 이고, 변형률은 무차원이므로 탄성계수의 단위는 응력과 같은 Pa입니다.',
    difficulty: '중',
    tags: ['탄성계수', '단위']
  },
  {
    id: 'MECH_005',
    subject: '재료역학',
    question: '푸아송 비(Poisson\'s Ratio)에 대한 설명으로 옳은 것은?',
    options: ['축방향 변형률 / 횡방향 변형률', '횡방향 변형률 / 축방향 변형률', '응력 / 변형률', '전단응력 / 전단변형률'],
    answer: 1,
    explanation: '푸아송 비는 횡방향 변형률과 축방향 변형률의 비로, ν = -ε횡/ε축 입니다.',
    difficulty: '중',
    tags: ['푸아송 비', '변형']
  },
  {
    id: 'MECH_006',
    subject: '재료역학',
    question: '전단응력(Shear Stress)이 작용하는 면은?',
    options: ['힘에 수직인 면', '힘에 평행한 면', '힘과 45° 방향의 면', '임의의 면'],
    answer: 1,
    explanation: '전단응력은 힘에 평행한 면에 작용하며, 물체를 미끄러지게 하는 응력입니다.',
    difficulty: '중',
    tags: ['전단응력', '응력']
  },
  {
    id: 'MECH_007',
    subject: '재료역학',
    question: '단면 2차 모멘트(관성모멘트)가 클수록 보의 특성은?',
    options: ['처짐이 커진다', '처짐이 작아진다', '응력이 커진다', '변형률이 커진다'],
    answer: 1,
    explanation: '단면 2차 모멘트가 클수록 굽힘 강성이 커져 처짐이 작아집니다.',
    difficulty: '중',
    tags: ['관성모멘트', '굽힘']
  },
  {
    id: 'MECH_008',
    subject: '재료역학',
    question: '원형 단면의 극관성 모멘트(Ip)와 단면 2차 모멘트(I)의 관계는?',
    options: ['Ip = I', 'Ip = 2I', 'Ip = I/2', 'Ip = 4I'],
    answer: 1,
    explanation: '원형 단면에서 Ip = Ix + Iy = 2I 입니다 (Ix = Iy = I).',
    difficulty: '상',
    tags: ['극관성모멘트', '단면']
  },
  {
    id: 'MECH_009',
    subject: '재료역학',
    question: '비틀림을 받는 원형축의 최대 전단응력 발생 위치는?',
    options: ['축 중심', '축 표면', '축 중간', '전체 균일'],
    answer: 1,
    explanation: '비틀림 시 전단응력은 중심에서 0이고 표면에서 최대입니다.',
    difficulty: '중',
    tags: ['비틀림', '전단응력']
  },
  {
    id: 'MECH_010',
    subject: '재료역학',
    question: '오일러 좌굴 공식에서 좌굴하중에 영향을 주지 않는 것은?',
    options: ['단면 2차 모멘트', '기둥 길이', '탄성계수', '항복강도'],
    answer: 3,
    explanation: '오일러 좌굴하중 Pcr = π²EI/L² 이며, 항복강도는 직접 영향을 주지 않습니다.',
    difficulty: '상',
    tags: ['좌굴', '오일러']
  },
  {
    id: 'MECH_011',
    subject: '재료역학',
    question: '모어 원(Mohr\'s Circle)으로 구할 수 없는 것은?',
    options: ['주응력', '최대 전단응력', '주응력 방향', '피로 한도'],
    answer: 3,
    explanation: '모어 원은 주응력, 최대 전단응력, 주응력 방향 등을 구하는 데 사용되며, 피로 한도와는 무관합니다.',
    difficulty: '중',
    tags: ['모어 원', '응력']
  },
  {
    id: 'MECH_012',
    subject: '재료역학',
    question: '안전율(Safety Factor)의 정의로 옳은 것은?',
    options: ['허용응력 / 작용응력', '극한강도 / 허용응력', '작용응력 / 허용응력', '변형률 / 응력'],
    answer: 1,
    explanation: '안전율은 재료의 극한강도(또는 항복강도)를 허용응력으로 나눈 값입니다.',
    difficulty: '하',
    tags: ['안전율', '설계']
  },
  {
    id: 'MECH_013',
    subject: '열역학',
    question: '열역학 제1법칙의 의미는?',
    options: ['엔트로피 증가', '에너지 보존', '절대영도 도달 불가', '열효율 한계'],
    answer: 1,
    explanation: '열역학 제1법칙은 에너지 보존 법칙으로, 에너지는 형태만 변할 뿐 총량은 일정합니다.',
    difficulty: '하',
    tags: ['열역학 제1법칙', '에너지']
  },
  {
    id: 'MECH_014',
    subject: '열역학',
    question: '열역학 제2법칙에 대한 설명으로 옳은 것은?',
    options: ['에너지는 보존된다', '고립계의 엔트로피는 증가한다', '절대영도에 도달 가능', '열효율 100% 가능'],
    answer: 1,
    explanation: '열역학 제2법칙에 따르면 고립계의 엔트로피는 항상 증가하거나 일정합니다.',
    difficulty: '중',
    tags: ['열역학 제2법칙', '엔트로피']
  },
  {
    id: 'MECH_015',
    subject: '열역학',
    question: '카르노 사이클의 열효율 공식은? (TH: 고온, TL: 저온)',
    options: ['η = TL/TH', 'η = 1 - TL/TH', 'η = TH/TL', 'η = 1 - TH/TL'],
    answer: 1,
    explanation: '카르노 사이클의 열효율 η = 1 - TL/TH (절대온도 기준)입니다.',
    difficulty: '중',
    tags: ['카르노', '열효율']
  },
  {
    id: 'MECH_016',
    subject: '열역학',
    question: '등온 과정(Isothermal Process)에서 일정한 것은?',
    options: ['압력', '체적', '온도', '엔트로피'],
    answer: 2,
    explanation: '등온 과정은 온도가 일정하게 유지되는 과정입니다.',
    difficulty: '하',
    tags: ['등온과정', '열역학']
  },
  {
    id: 'MECH_017',
    subject: '열역학',
    question: '단열 과정(Adiabatic Process)의 특징은?',
    options: ['열 출입 없음', '온도 일정', '압력 일정', '체적 일정'],
    answer: 0,
    explanation: '단열 과정은 계와 외부 사이에 열 출입이 없는 과정입니다 (Q = 0).',
    difficulty: '중',
    tags: ['단열과정', '열역학']
  },
  {
    id: 'MECH_018',
    subject: '열역학',
    question: '이상기체 상태방정식은?',
    options: ['PV = nRT', 'PV = mT', 'PT = nRV', 'VT = nRP'],
    answer: 0,
    explanation: '이상기체 상태방정식은 PV = nRT (P: 압력, V: 체적, n: 몰수, R: 기체상수, T: 절대온도)입니다.',
    difficulty: '하',
    tags: ['이상기체', '상태방정식']
  },
  {
    id: 'MECH_019',
    subject: '열역학',
    question: '비열(Specific Heat)의 정의로 옳은 것은?',
    options: ['단위 질량의 물질을 1℃ 올리는 데 필요한 열량', '단위 체적의 물질을 1℃ 올리는 데 필요한 열량', '물질 전체를 1℃ 올리는 데 필요한 열량', '단위 면적을 통과하는 열량'],
    answer: 0,
    explanation: '비열은 단위 질량의 물질 온도를 1℃(또는 1K) 올리는 데 필요한 열량입니다.',
    difficulty: '하',
    tags: ['비열', '열량']
  },
  {
    id: 'MECH_020',
    subject: '열역학',
    question: '정압비열(Cp)과 정적비열(Cv)의 관계로 옳은 것은? (이상기체)',
    options: ['Cp = Cv', 'Cp < Cv', 'Cp > Cv', 'Cp × Cv = R'],
    answer: 2,
    explanation: '이상기체에서 Cp - Cv = R 이므로 항상 Cp > Cv 입니다.',
    difficulty: '중',
    tags: ['비열', '이상기체']
  },
  {
    id: 'MECH_021',
    subject: '열역학',
    question: '엔탈피(Enthalpy)의 정의는?',
    options: ['H = U + PV', 'H = U - PV', 'H = P + UV', 'H = U/PV'],
    answer: 0,
    explanation: '엔탈피는 H = U + PV (내부에너지 + 압력×체적)로 정의됩니다.',
    difficulty: '중',
    tags: ['엔탈피', '열역학']
  },
  {
    id: 'MECH_022',
    subject: '열역학',
    question: '오토 사이클(Otto Cycle)의 특징으로 옳은 것은?',
    options: ['정압 연소', '정적 연소', '등온 연소', '단열 연소'],
    answer: 1,
    explanation: '오토 사이클(가솔린 기관)은 정적 조건에서 연소가 일어납니다.',
    difficulty: '중',
    tags: ['오토 사이클', '내연기관']
  },
  {
    id: 'MECH_023',
    subject: '열역학',
    question: '디젤 사이클(Diesel Cycle)의 특징으로 옳은 것은?',
    options: ['정적 연소', '정압 연소', '등온 연소', '단열 연소'],
    answer: 1,
    explanation: '디젤 사이클은 정압 조건에서 연소가 일어납니다.',
    difficulty: '중',
    tags: ['디젤 사이클', '내연기관']
  },
  {
    id: 'MECH_024',
    subject: '열역학',
    question: '냉동기의 성능계수(COP) 공식은?',
    options: ['COP = W/QL', 'COP = QL/W', 'COP = QH/W', 'COP = W/QH'],
    answer: 1,
    explanation: '냉동기 COP = QL/W (냉동효과/투입일)입니다.',
    difficulty: '중',
    tags: ['COP', '냉동기']
  },
  {
    id: 'MECH_025',
    subject: '유체역학',
    question: '밀도(Density)의 단위로 옳은 것은?',
    options: ['kg/m', 'kg/m²', 'kg/m³', 'kg·m'],
    answer: 2,
    explanation: '밀도는 단위 체적당 질량으로, 단위는 kg/m³입니다.',
    difficulty: '하',
    tags: ['밀도', '기초']
  },
  {
    id: 'MECH_026',
    subject: '유체역학',
    question: '점성(Viscosity)에 대한 설명으로 옳은 것은?',
    options: ['유체의 압축성', '유체의 흐름 저항', '유체의 밀도 변화', '유체의 온도 변화'],
    answer: 1,
    explanation: '점성은 유체의 흐름에 대한 저항으로, 유체 내 마찰력의 원인입니다.',
    difficulty: '하',
    tags: ['점성', '유체']
  },
  {
    id: 'MECH_027',
    subject: '유체역학',
    question: '레이놀즈 수(Reynolds Number)의 의미는?',
    options: ['압력비', '관성력/점성력', '점성력/관성력', '속도비'],
    answer: 1,
    explanation: '레이놀즈 수 Re = 관성력/점성력 = ρVL/μ 이며, 층류/난류 판별에 사용됩니다.',
    difficulty: '중',
    tags: ['레이놀즈 수', '유동']
  },
  {
    id: 'MECH_028',
    subject: '유체역학',
    question: '원관 내 층류(Laminar Flow)의 레이놀즈 수 범위는?',
    options: ['Re < 500', 'Re < 2300', 'Re > 2300', 'Re > 4000'],
    answer: 1,
    explanation: '원관 내 유동에서 Re < 2300이면 층류, Re > 4000이면 완전 난류입니다.',
    difficulty: '중',
    tags: ['층류', '레이놀즈 수']
  },
  {
    id: 'MECH_029',
    subject: '유체역학',
    question: '베르누이 방정식에서 보존되는 것은?',
    options: ['질량', '운동량', '에너지', '점성'],
    answer: 2,
    explanation: '베르누이 방정식은 유선을 따라 에너지가 보존됨을 나타냅니다.',
    difficulty: '중',
    tags: ['베르누이', '에너지']
  },
  {
    id: 'MECH_030',
    subject: '유체역학',
    question: '연속 방정식(Continuity Equation)이 나타내는 것은?',
    options: ['에너지 보존', '질량 보존', '운동량 보존', '엔트로피 보존'],
    answer: 1,
    explanation: '연속 방정식 A₁V₁ = A₂V₂는 질량 보존을 나타냅니다.',
    difficulty: '중',
    tags: ['연속방정식', '질량보존']
  },
  {
    id: 'MECH_031',
    subject: '유체역학',
    question: '파스칼의 원리(Pascal\'s Principle)에 대한 설명으로 옳은 것은?',
    options: ['유체의 압력은 깊이에 비례', '밀폐된 유체에 가한 압력은 모든 방향으로 동일하게 전달', '유체의 속도가 증가하면 압력 감소', '부력은 배제된 유체의 무게와 같음'],
    answer: 1,
    explanation: '파스칼의 원리는 밀폐된 유체에 가해진 압력이 모든 방향으로 동일하게 전달됨을 나타냅니다.',
    difficulty: '중',
    tags: ['파스칼', '압력']
  },
  {
    id: 'MECH_032',
    subject: '유체역학',
    question: '아르키메데스의 원리(부력)에 대한 설명으로 옳은 것은?',
    options: ['부력 = 물체의 무게', '부력 = 배제된 유체의 무게', '부력 = 물체의 부피', '부력 = 유체의 밀도'],
    answer: 1,
    explanation: '부력은 물체가 배제한 유체의 무게와 같습니다 (F = ρgV).',
    difficulty: '하',
    tags: ['부력', '아르키메데스']
  },
  {
    id: 'MECH_033',
    subject: '유체역학',
    question: '토리첼리 정리(Torricelli\'s Theorem)로 구하는 것은?',
    options: ['용기 내 압력', '오리피스 유출 속도', '유체의 점성', '파이프 손실'],
    answer: 1,
    explanation: '토리첼리 정리는 용기에서 유출되는 유체의 속도 V = √(2gh)를 구합니다.',
    difficulty: '중',
    tags: ['토리첼리', '유출']
  },
  {
    id: 'MECH_034',
    subject: '유체역학',
    question: '피토관(Pitot Tube)으로 측정하는 것은?',
    options: ['정압', '유속', '점성', '밀도'],
    answer: 1,
    explanation: '피토관은 정압과 전압의 차이를 이용하여 유속을 측정하는 장치입니다.',
    difficulty: '중',
    tags: ['피토관', '유속측정']
  },
  {
    id: 'MECH_035',
    subject: '유체역학',
    question: '벤투리미터(Venturi Meter)의 원리는?',
    options: ['파스칼의 원리', '베르누이 원리', '아르키메데스의 원리', '스토크스의 원리'],
    answer: 1,
    explanation: '벤투리미터는 베르누이 원리를 이용하여 유량을 측정합니다.',
    difficulty: '중',
    tags: ['벤투리', '유량측정']
  },
  {
    id: 'MECH_036',
    subject: '유체역학',
    question: '수력 직경(Hydraulic Diameter)의 정의는?',
    options: ['Dh = A/P', 'Dh = 4A/P', 'Dh = P/A', 'Dh = P/4A'],
    answer: 1,
    explanation: '수력 직경 Dh = 4A/P (A: 단면적, P: 젖은 둘레)입니다.',
    difficulty: '상',
    tags: ['수력직경', '비원형관']
  },
  {
    id: 'MECH_037',
    subject: '기계제작법 및 기계동력학',
    question: '선반(Lathe) 가공의 주된 용도는?',
    options: ['평면 가공', '원통 가공', '구멍 가공', '기어 가공'],
    answer: 1,
    explanation: '선반은 공작물을 회전시키며 바이트로 원통형 부품을 가공하는 기계입니다.',
    difficulty: '하',
    tags: ['선반', '절삭가공']
  },
  {
    id: 'MECH_038',
    subject: '기계제작법 및 기계동력학',
    question: '밀링(Milling) 가공의 특징으로 옳은 것은?',
    options: ['공작물 회전', '공구 회전', '공작물과 공구 모두 회전', '회전 없이 가공'],
    answer: 1,
    explanation: '밀링은 다인 공구(커터)를 회전시켜 공작물을 가공하는 방식입니다.',
    difficulty: '하',
    tags: ['밀링', '절삭가공']
  },
  {
    id: 'MECH_039',
    subject: '기계제작법 및 기계동력학',
    question: '드릴링(Drilling)과 보링(Boring)의 차이점으로 옳은 것은?',
    options: ['드릴링은 구멍 확대, 보링은 구멍 생성', '드릴링은 구멍 생성, 보링은 구멍 확대', '둘 다 구멍 생성', '둘 다 구멍 확대'],
    answer: 1,
    explanation: '드릴링은 새로운 구멍을 뚫는 것이고, 보링은 기존 구멍을 확대하거나 정밀하게 다듬는 것입니다.',
    difficulty: '중',
    tags: ['드릴링', '보링']
  },
  {
    id: 'MECH_040',
    subject: '기계제작법 및 기계동력학',
    question: '연삭(Grinding) 가공의 특징이 아닌 것은?',
    options: ['고정밀도 가공', '경질 재료 가공 가능', '높은 절삭 속도', '대량의 재료 제거'],
    answer: 3,
    explanation: '연삭 가공은 고정밀도, 좋은 표면 거칠기를 얻지만 재료 제거량이 적습니다.',
    difficulty: '중',
    tags: ['연삭', '정밀가공']
  },
  {
    id: 'MECH_041',
    subject: '기계제작법 및 기계동력학',
    question: '절삭 가공에서 구성인선(Built-up Edge)의 영향은?',
    options: ['표면 거칠기 향상', '공구 수명 연장', '표면 거칠기 악화', '절삭력 감소'],
    answer: 2,
    explanation: '구성인선은 절삭 공구에 재료가 용착되어 표면 거칠기를 악화시킵니다.',
    difficulty: '중',
    tags: ['구성인선', '절삭']
  },
  {
    id: 'MECH_042',
    subject: '기계제작법 및 기계동력학',
    question: '방전 가공(EDM)의 원리는?',
    options: ['기계적 절삭', '전기 방전에 의한 용융', '화학적 부식', '레이저 용융'],
    answer: 1,
    explanation: '방전 가공은 전극과 공작물 사이의 방전으로 재료를 용융·제거합니다.',
    difficulty: '중',
    tags: ['방전가공', 'EDM']
  },
  {
    id: 'MECH_043',
    subject: '기계제작법 및 기계동력학',
    question: '주조(Casting)에서 주형 재료로 사용되지 않는 것은?',
    options: ['모래', '금속', '석고', '플라스틱'],
    answer: 3,
    explanation: '주조 주형에는 모래(사형), 금속(금형), 석고 등이 사용되며, 플라스틱은 용탕 온도를 견디지 못합니다.',
    difficulty: '중',
    tags: ['주조', '주형']
  },
  {
    id: 'MECH_044',
    subject: '기계제작법 및 기계동력학',
    question: '단조(Forging)의 장점이 아닌 것은?',
    options: ['금속 조직 치밀화', '기계적 성질 향상', '복잡한 형상 가공 용이', '섬유 조직 형성'],
    answer: 2,
    explanation: '단조는 복잡한 형상 가공이 어렵고, 주조나 절삭 가공에 비해 형상 자유도가 낮습니다.',
    difficulty: '중',
    tags: ['단조', '소성가공']
  },
  {
    id: 'MECH_045',
    subject: '기계제작법 및 기계동력학',
    question: '용접 결함 중 블로홀(Blowhole)의 원인은?',
    options: ['급속 냉각', '가스의 혼입', '과대 전류', '느린 용접 속도'],
    answer: 1,
    explanation: '블로홀은 용접 시 가스가 용융금속에 갇혀 발생하는 기공입니다.',
    difficulty: '중',
    tags: ['용접', '결함']
  },
  {
    id: 'MECH_046',
    subject: '기계제작법 및 기계동력학',
    question: '기어의 모듈(Module)의 정의는?',
    options: ['m = d/z (피치원 지름/잇수)', 'm = z/d (잇수/피치원 지름)', 'm = p/π (피치/원주율)', 'm = πd/z'],
    answer: 0,
    explanation: '모듈 m = d/z = p/π (d: 피치원 지름, z: 잇수, p: 원주 피치)입니다.',
    difficulty: '중',
    tags: ['기어', '모듈']
  },
  {
    id: 'MECH_047',
    subject: '기계제작법 및 기계동력학',
    question: '진동계에서 고유진동수(Natural Frequency)를 높이는 방법은?',
    options: ['질량 증가', '강성 증가', '감쇠 증가', '변위 증가'],
    answer: 1,
    explanation: '고유진동수 ωn = √(k/m) 이므로, 강성(k)을 높이면 고유진동수가 증가합니다.',
    difficulty: '상',
    tags: ['진동', '고유진동수']
  },
  {
    id: 'MECH_048',
    subject: '기계제작법 및 기계동력학',
    question: '공진(Resonance)이 발생하는 조건은?',
    options: ['가진 주파수 < 고유진동수', '가진 주파수 = 고유진동수', '가진 주파수 > 고유진동수', '가진 주파수와 무관'],
    answer: 1,
    explanation: '공진은 가진 주파수가 시스템의 고유진동수와 일치할 때 발생합니다.',
    difficulty: '중',
    tags: ['공진', '진동']
  },
  {
    id: 'MECH_049',
    subject: '기계제작법 및 기계동력학',
    question: '베어링의 종류 중 구름 베어링이 아닌 것은?',
    options: ['볼 베어링', '롤러 베어링', '저널 베어링', '니들 베어링'],
    answer: 2,
    explanation: '저널 베어링은 미끄럼 베어링이고, 볼, 롤러, 니들 베어링은 구름 베어링입니다.',
    difficulty: '하',
    tags: ['베어링', '기계요소']
  },
  {
    id: 'MECH_050',
    subject: '기계제작법 및 기계동력학',
    question: '벨트 전동에서 미끄러짐을 줄이는 방법이 아닌 것은?',
    options: ['벨트 장력 증가', '접촉각 증가', '마찰계수가 큰 벨트 사용', '풀리 직경 감소'],
    answer: 3,
    explanation: '풀리 직경 감소는 접촉각을 줄여 미끄러짐을 증가시킬 수 있습니다.',
    difficulty: '중',
    tags: ['벨트', '전동장치']
  },
  {
    id: 'MECH_051',
    subject: '기계재료 및 유체역학',
    question: '철강 재료의 열처리 방법이 아닌 것은?',
    options: ['담금질(Quenching)', '뜨임(Tempering)', '풀림(Annealing)', '압연(Rolling)'],
    answer: 3,
    explanation: '압연은 소성가공 방법입니다. 열처리 방법에는 담금질, 뜨임, 풀림, 불림, 침탄 등이 있습니다.',
    difficulty: '하',
    tags: ['열처리', '재료']
  },
  {
    id: 'MECH_052',
    subject: '기계설계',
    question: '나사의 효율을 높이는 방법으로 옳은 것은?',
    options: ['리드각 증가', '마찰계수 증가', '나사산 각도 증가', '피치 감소'],
    answer: 0,
    explanation: '나사의 효율은 리드각이 클수록, 마찰계수가 작을수록 증가합니다.',
    difficulty: '중',
    tags: ['나사', '기계요소']
  },
  {
    id: 'MECH_053',
    subject: '유체역학',
    question: '베르누이 방정식이 성립하기 위한 조건이 아닌 것은?',
    options: ['정상 흐름', '비압축성 유체', '점성 무시', '난류 흐름'],
    answer: 3,
    explanation: '베르누이 방정식은 정상류, 비압축성, 비점성 유체의 층류 흐름에서 성립합니다.',
    difficulty: '중',
    tags: ['베르누이', '유체역학']
  },
  {
    id: 'MECH_054',
    subject: '기계동력학',
    question: '회전체의 평형 조건이 아닌 것은?',
    options: ['정적 평형', '동적 평형', '관성 평형', '열적 평형'],
    answer: 3,
    explanation: '회전체의 평형은 정적 평형과 동적 평형으로 구분됩니다. 열적 평형은 회전 평형 조건이 아닙니다.',
    difficulty: '중',
    tags: ['평형', '회전체']
  },
  {
    id: 'MECH_055',
    subject: '기계재료',
    question: '탄소강에서 탄소 함유량이 증가하면 나타나는 현상은?',
    options: ['강도 증가', '연성 증가', '용접성 향상', '가공성 향상'],
    answer: 0,
    explanation: '탄소 함유량이 증가하면 강도와 경도는 증가하지만, 연성, 용접성, 가공성은 감소합니다.',
    difficulty: '중',
    tags: ['탄소강', '재료특성']
  },
  {
    id: 'MECH_056',
    subject: '기계제작법',
    question: '선반 가공에서 이송속도의 단위는?',
    options: ['m/min', 'mm/rev', 'rpm', 'mm/sec'],
    answer: 1,
    explanation: '선반의 이송속도는 mm/rev(회전당 이송량)로 표시합니다. 절삭속도는 m/min입니다.',
    difficulty: '하',
    tags: ['선반', '절삭가공']
  },
  {
    id: 'MECH_057',
    subject: '기계설계',
    question: '축의 비틀림 응력을 줄이는 방법이 아닌 것은?',
    options: ['축 지름 증가', '축 길이 감소', '중공축 사용', '재질 변경'],
    answer: 1,
    explanation: '비틀림 응력은 지름에 반비례하므로 지름을 증가시키면 감소합니다. 길이는 비틀림 응력에 직접적인 영향이 없습니다.',
    difficulty: '중',
    tags: ['축', '비틀림']
  },
  {
    id: 'MECH_058',
    subject: '열역학',
    question: '열역학 제1법칙의 의미는?',
    options: ['에너지 보존', '엔트로피 증가', '절대온도', '열평형'],
    answer: 0,
    explanation: '열역학 제1법칙은 에너지 보존의 법칙입니다. 에너지는 형태만 변할 뿐 생성되거나 소멸되지 않습니다.',
    difficulty: '하',
    tags: ['열역학', '법칙']
  },
  {
    id: 'MECH_059',
    subject: '유체역학',
    question: '레이놀즈 수(Reynolds Number)로 판단하는 것은?',
    options: ['유체의 온도', '유체의 압력', '층류/난류', '유체의 밀도'],
    answer: 2,
    explanation: '레이놀즈 수는 관성력과 점성력의 비로, 유동이 층류인지 난류인지 판단하는 무차원수입니다.',
    difficulty: '중',
    tags: ['레이놀즈수', '유체']
  },
  {
    id: 'MECH_060',
    subject: '기계설계',
    question: '용접 이음의 종류가 아닌 것은?',
    options: ['맞대기 용접', '모살 용접', '플러그 용접', '리벳 용접'],
    answer: 3,
    explanation: '리벳은 기계적 체결 방법이지 용접이 아닙니다. 용접 이음에는 맞대기, 모살, 플러그, 슬롯 용접 등이 있습니다.',
    difficulty: '하',
    tags: ['용접', '이음']
  },
  {
    id: 'MECH_061',
    subject: '기계재료',
    question: '주철의 특징으로 옳지 않은 것은?',
    options: ['주조성 우수', '감쇠능 양호', '인장강도가 매우 높음', '압축강도가 인장강도보다 큼'],
    answer: 2,
    explanation: '주철은 주조성과 감쇠능은 우수하지만 인장강도가 낮고 취성이 큽니다.',
    difficulty: '중',
    tags: ['주철', '재료특성']
  },
  {
    id: 'MECH_062',
    subject: '기계동력학',
    question: '진동의 3요소가 아닌 것은?',
    options: ['질량', '스프링', '감쇠', '온도'],
    answer: 3,
    explanation: '진동계의 3요소는 질량(관성), 스프링(강성), 감쇠(저항)입니다.',
    difficulty: '하',
    tags: ['진동', '동역학']
  },
  {
    id: 'MECH_063',
    subject: '기계제작법',
    question: '밀링 가공의 종류가 아닌 것은?',
    options: ['상향 절삭', '하향 절삭', '정면 절삭', '선삭'],
    answer: 3,
    explanation: '선삭은 선반 가공입니다. 밀링 가공은 상향 절삭, 하향 절삭, 정면 절삭 등으로 분류됩니다.',
    difficulty: '하',
    tags: ['밀링', '절삭']
  },
  {
    id: 'MECH_064',
    subject: '열역학',
    question: '카르노 사이클의 효율을 높이는 방법은?',
    options: ['고온부 온도 증가', '저온부 온도 증가', '압력 증가', '체적 증가'],
    answer: 0,
    explanation: '카르노 효율 = 1 - (T_L/T_H) 이므로, 고온부 온도를 높이거나 저온부 온도를 낮추면 효율이 증가합니다.',
    difficulty: '중',
    tags: ['카르노', '효율']
  },
  {
    id: 'MECH_065',
    subject: '기계설계',
    question: '기어 전동 장치의 장점이 아닌 것은?',
    options: ['정확한 속도비', '큰 동력 전달', '충격 흡수', '소음이 적음'],
    answer: 2,
    explanation: '기어는 정확한 속도비와 큰 동력 전달이 가능하지만, 벨트에 비해 충격 흡수 능력이 떨어지고 소음이 발생할 수 있습니다.',
    difficulty: '중',
    tags: ['기어', '전동장치']
  },
  {
    id: 'MECH_066',
    subject: '유체역학',
    question: '펌프의 양정(揚程)이란?',
    options: ['펌프의 높이', '유량의 크기', '에너지 높이', '펌프의 무게'],
    answer: 2,
    explanation: '양정은 단위 무게당 유체에 부여되는 에너지를 높이로 환산한 값입니다.',
    difficulty: '중',
    tags: ['펌프', '양정']
  },
  {
    id: 'MECH_067',
    subject: '기계재료',
    question: '비철금속이 아닌 것은?',
    options: ['알루미늄', '구리', '티타늄', '스테인리스강'],
    answer: 3,
    explanation: '스테인리스강은 철(Fe)을 기본으로 하는 철강 재료입니다. 알루미늄, 구리, 티타늄은 비철금속입니다.',
    difficulty: '하',
    tags: ['비철금속', '재료']
  },
  {
    id: 'MECH_068',
    subject: '기계설계',
    question: '볼트 체결에서 토크렌치를 사용하는 목적은?',
    options: ['체결 시간 단축', '적정 조임력 확보', '볼트 개수 확인', '나사산 보호'],
    answer: 1,
    explanation: '토크렌치는 볼트에 정확한 조임 토크를 가해 적정 조임력을 확보하기 위해 사용합니다.',
    difficulty: '하',
    tags: ['볼트', '체결']
  },
  {
    id: 'MECH_069',
    subject: '기계동력학',
    question: '플라이휠(Flywheel)의 역할은?',
    options: ['속도 증가', '에너지 저장 및 속도 균일화', '방향 전환', '진동 발생'],
    answer: 1,
    explanation: '플라이휠은 회전 관성으로 에너지를 저장하고 회전속도를 균일하게 유지합니다.',
    difficulty: '하',
    tags: ['플라이휠', '회전']
  },
  {
    id: 'MECH_070',
    subject: '기계제작법',
    question: '연삭 가공의 특징으로 옳지 않은 것은?',
    options: ['고정밀 가공', '경화된 재료 가공 가능', '가공 속도가 매우 빠름', '우수한 표면 조도'],
    answer: 2,
    explanation: '연삭은 고정밀, 고품질 가공이 가능하지만 가공 속도는 선삭이나 밀링보다 느립니다.',
    difficulty: '중',
    tags: ['연삭', '가공']
  },
  {
    id: 'MECH_071',
    subject: '열역학',
    question: '이상기체 상태방정식 PV=nRT에서 R은?',
    options: ['비열', '기체상수', '밀도', '점성계수'],
    answer: 1,
    explanation: 'R은 기체상수(Gas Constant)로 약 8.314 J/(mol·K)입니다.',
    difficulty: '하',
    tags: ['이상기체', '상태방정식']
  },
  {
    id: 'MECH_072',
    subject: '기계설계',
    question: '스프링의 강성(Spring Constant)을 증가시키는 방법이 아닌 것은?',
    options: ['코일 지름 감소', '소선 지름 증가', '감은 횟수 증가', '전단탄성계수가 큰 재료 사용'],
    answer: 2,
    explanation: '스프링 강성은 소선 지름에 비례하고 코일 지름과 감은 횟수에 반비례합니다. 감은 횟수를 증가시키면 강성이 감소합니다.',
    difficulty: '상',
    tags: ['스프링', '강성']
  },
  {
    id: 'MECH_073',
    subject: '유체역학',
    question: '경계층(Boundary Layer)에 대한 설명으로 옳은 것은?',
    options: ['유속이 일정한 영역', '점성의 영향을 받는 영역', '난류만 존재하는 영역', '압력이 일정한 영역'],
    answer: 1,
    explanation: '경계층은 고체 표면 근처에서 점성의 영향으로 유속이 변하는 영역입니다.',
    difficulty: '중',
    tags: ['경계층', '유체']
  },
  {
    id: 'MECH_074',
    subject: '기계재료',
    question: '경도 시험 방법이 아닌 것은?',
    options: ['브리넬 경도', '로크웰 경도', '비커스 경도', '샤르피 경도'],
    answer: 3,
    explanation: '샤르피는 충격 시험 방법입니다. 경도 시험에는 브리넬, 로크웰, 비커스, 쇼어 등이 있습니다.',
    difficulty: '중',
    tags: ['경도', '시험']
  },
  {
    id: 'MECH_075',
    subject: '기계제작법',
    question: 'NC 공작기계의 장점이 아닌 것은?',
    options: ['복잡한 형상 가공 가능', '소품종 대량생산에 적합', '가공 정밀도 향상', '작업자 기능 의존도 감소'],
    answer: 1,
    explanation: 'NC 공작기계는 다품종 소량생산에 적합합니다. 복잡한 형상 가공, 높은 정밀도, 자동화가 장점입니다.',
    difficulty: '중',
    tags: ['NC', '공작기계']
  },
  {
    id: 'MECH_076',
    subject: '재료역학',
    question: '원형 축의 극관성모멘트 공식은? (d: 지름)',
    options: ['πd⁴/32', 'πd⁴/64', 'πd³/16', 'πd³/32'],
    answer: 0,
    explanation: '원형 단면의 극관성모멘트 Ip = πd⁴/32 입니다.',
    difficulty: '중',
    tags: ['극관성모멘트', '단면']
  },
  {
    id: 'MECH_077',
    subject: '기계설계',
    question: '볼트 체결 시 스프링 와셔의 역할은?',
    options: ['하중 증가', '풀림 방지', '체결 시간 단축', '볼트 길이 조정'],
    answer: 1,
    explanation: '스프링 와셔는 진동 시 볼트가 풀리는 것을 방지하는 잠금장치입니다.',
    difficulty: '하',
    tags: ['볼트', '와셔']
  },
  {
    id: 'MECH_078',
    subject: '유체역학',
    question: '마노미터(Manometer)로 측정하는 것은?',
    options: ['유량', '압력', '점성', '밀도'],
    answer: 1,
    explanation: '마노미터는 액주의 높이 차이를 이용하여 압력을 측정하는 장치입니다.',
    difficulty: '하',
    tags: ['압력측정', '마노미터']
  },
  {
    id: 'MECH_079',
    subject: '열역학',
    question: '단열 과정에서 온도와 압력의 관계는? (k: 비열비)',
    options: ['T₁/T₂ = (P₁/P₂)^k', 'T₁/T₂ = (P₁/P₂)^(k-1)/k', 'T₁×P₁ = T₂×P₂', 'T₁+P₁ = T₂+P₂'],
    answer: 1,
    explanation: '단열 과정에서 T₁/T₂ = (P₁/P₂)^((k-1)/k) 관계가 성립합니다.',
    difficulty: '상',
    tags: ['단열과정', '열역학']
  },
  {
    id: 'MECH_080',
    subject: '기계제작법',
    question: '3D 프린팅 방식이 아닌 것은?',
    options: ['FDM', 'SLA', 'SLS', 'CNC'],
    answer: 3,
    explanation: 'CNC는 절삭 가공 방식이고, FDM, SLA, SLS는 적층 제조(3D 프린팅) 방식입니다.',
    difficulty: '하',
    tags: ['3D프린팅', '적층제조']
  },
  {
    id: 'MECH_081',
    subject: '기계동력학',
    question: '크랭크-슬라이더 기구의 자유도는?',
    options: ['0', '1', '2', '3'],
    answer: 1,
    explanation: '크랭크-슬라이더 기구는 1자유도 기구로, 크랭크 회전각 하나로 운동이 결정됩니다.',
    difficulty: '중',
    tags: ['기구학', '자유도']
  },
  {
    id: 'MECH_082',
    subject: '기계재료',
    question: 'HRC(Rockwell C) 경도 시험에 사용되는 압입자는?',
    options: ['강구', '다이아몬드 원추', '텅스텐 카바이드 구', '피라미드'],
    answer: 1,
    explanation: 'HRC 경도 시험은 다이아몬드 원추형 압입자를 사용합니다.',
    difficulty: '중',
    tags: ['경도', 'Rockwell']
  },
  {
    id: 'MECH_083',
    subject: '열역학',
    question: '랭킨 사이클(Rankine Cycle)은 어떤 기관의 이론 사이클인가?',
    options: ['가솔린 기관', '디젤 기관', '증기 터빈', '가스 터빈'],
    answer: 2,
    explanation: '랭킨 사이클은 증기 터빈(발전소)의 이론적 사이클입니다.',
    difficulty: '하',
    tags: ['랭킨', '증기']
  },
  {
    id: 'MECH_084',
    subject: '기계설계',
    question: '축의 위험 속도(Critical Speed)가 발생하는 조건은?',
    options: ['최대 토크', '최대 응력', '고유진동수 = 회전 속도', '최대 처짐'],
    answer: 2,
    explanation: '축의 위험 속도는 회전 속도가 축의 고유진동수와 일치할 때 발생하는 공진 현상입니다.',
    difficulty: '상',
    tags: ['위험속도', '진동']
  },
  {
    id: 'MECH_085',
    subject: '유체역학',
    question: '캐비테이션(Cavitation)이 발생하는 원인은?',
    options: ['압력 상승', '온도 하강', '국부 압력이 증기압 이하로 하강', '유속 감소'],
    answer: 2,
    explanation: '캐비테이션은 유체의 국부 압력이 증기압 이하로 떨어져 기포가 발생하는 현상입니다.',
    difficulty: '중',
    tags: ['캐비테이션', '펌프']
  },
  {
    id: 'MECH_086',
    subject: '기계제작법',
    question: '레이저 가공의 특징이 아닌 것은?',
    options: ['비접촉 가공', '열영향부 최소화', '두꺼운 재료 가공에 유리', '정밀 가공'],
    answer: 2,
    explanation: '레이저 가공은 정밀하고 비접촉이지만, 두꺼운 재료 가공에는 제한이 있습니다.',
    difficulty: '중',
    tags: ['레이저', '가공']
  },
  {
    id: 'MECH_087',
    subject: '재료역학',
    question: '단순 지지보에 집중하중이 작용할 때 최대 굽힘모멘트 발생 위치는?',
    options: ['지점', '하중 작용점', '보의 중앙', '양 끝단'],
    answer: 1,
    explanation: '집중하중이 작용하는 단순보에서 최대 굽힘모멘트는 하중 작용점에서 발생합니다.',
    difficulty: '중',
    tags: ['굽힘모멘트', '보']
  },
  {
    id: 'MECH_088',
    subject: '기계설계',
    question: '체인 전동 장치의 장점이 아닌 것은?',
    options: ['미끄러짐 없음', '정확한 속도비', '충격 흡수 우수', '큰 동력 전달'],
    answer: 2,
    explanation: '체인은 미끄러짐이 없고 큰 동력 전달이 가능하지만, 벨트보다 충격 흡수가 떨어집니다.',
    difficulty: '중',
    tags: ['체인', '전동장치']
  },
  {
    id: 'MECH_089',
    subject: '열역학',
    question: '엔탈피(h)와 내부에너지(u)의 관계식은?',
    options: ['h = u + pv', 'h = u - pv', 'h = u × pv', 'h = u / pv'],
    answer: 0,
    explanation: '엔탈피 h = u + pv (내부에너지 + 유동일)입니다.',
    difficulty: '하',
    tags: ['엔탈피', '열역학']
  },
  {
    id: 'MECH_090',
    subject: '기계재료',
    question: '스테인리스강의 주요 합금 원소는?',
    options: ['망간', '크롬', '니켈', '크롬과 니켈'],
    answer: 3,
    explanation: '스테인리스강은 크롬(Cr) 12% 이상과 니켈(Ni)을 첨가하여 내식성을 향상시킨 합금강입니다.',
    difficulty: '하',
    tags: ['스테인리스강', '합금']
  },
  {
    id: 'MECH_091',
    subject: '유체역학',
    question: '난류(Turbulent Flow)의 특징이 아닌 것은?',
    options: ['불규칙적 유동', '높은 마찰 손실', '예측 가능한 유선', '높은 혼합 효과'],
    answer: 2,
    explanation: '난류는 불규칙하고 예측이 어려운 유동으로, 높은 마찰 손실과 혼합 효과가 특징입니다.',
    difficulty: '하',
    tags: ['난류', '유동']
  },
  {
    id: 'MECH_092',
    subject: '기계제작법',
    question: 'MIG 용접의 특징으로 옳은 것은?',
    options: ['피복 아크 용접', '불활성가스 사용', '슬래그 발생 많음', '비소모성 전극'],
    answer: 1,
    explanation: 'MIG(Metal Inert Gas) 용접은 불활성 가스를 사용하는 소모성 전극 아크 용접입니다.',
    difficulty: '중',
    tags: ['용접', 'MIG']
  },
  {
    id: 'MECH_093',
    subject: '기계동력학',
    question: '관성력의 크기를 결정하는 요소가 아닌 것은?',
    options: ['질량', '가속도', '속도', '온도'],
    answer: 3,
    explanation: '관성력 F = ma (질량 × 가속도)로 결정되며, 온도는 직접 관련 없습니다.',
    difficulty: '하',
    tags: ['관성력', '동역학']
  },
  {
    id: 'MECH_094',
    subject: '재료역학',
    question: '평면 응력 상태에서 주응력 방향의 전단응력은?',
    options: ['최대', '최소', '0', '평균값'],
    answer: 2,
    explanation: '주응력 방향에서는 전단응력이 0이 됩니다.',
    difficulty: '상',
    tags: ['주응력', '응력']
  },
  {
    id: 'MECH_095',
    subject: '기계설계',
    question: '평 키(Flat Key)의 주요 용도는?',
    options: ['축의 지지', '축과 보스의 회전력 전달', '축 정렬', '진동 흡수'],
    answer: 1,
    explanation: '평 키는 축과 보스(기어, 풀리 등) 사이의 회전력(토크)을 전달하는 기계요소입니다.',
    difficulty: '하',
    tags: ['키', '동력전달']
  },
  {
    id: 'MECH_096',
    subject: '열역학',
    question: '압축비가 증가하면 오토 사이클의 열효율은?',
    options: ['증가', '감소', '일정', '변화 없음'],
    answer: 0,
    explanation: '오토 사이클의 열효율은 압축비가 증가할수록 증가합니다.',
    difficulty: '중',
    tags: ['오토사이클', '효율']
  },
  {
    id: 'MECH_097',
    subject: '기계재료',
    question: '금속의 결정 구조가 아닌 것은?',
    options: ['BCC', 'FCC', 'HCP', 'ABC'],
    answer: 3,
    explanation: '금속의 주요 결정 구조는 BCC(체심입방), FCC(면심입방), HCP(조밀육방)입니다.',
    difficulty: '중',
    tags: ['결정구조', '금속']
  },
  {
    id: 'MECH_098',
    subject: '유체역학',
    question: '원관 내 완전 발달 층류의 속도 분포는?',
    options: ['균일 분포', '선형 분포', '포물선 분포', '쌍곡선 분포'],
    answer: 2,
    explanation: '원관 내 층류는 중심에서 최대, 벽면에서 0인 포물선 속도 분포를 갖습니다.',
    difficulty: '상',
    tags: ['층류', '속도분포']
  },
  {
    id: 'MECH_099',
    subject: '기계제작법',
    question: 'CAD/CAM의 장점이 아닌 것은?',
    options: ['설계 시간 단축', '도면 수정 용이', '가공 자동화', '재료비 절감'],
    answer: 3,
    explanation: 'CAD/CAM은 설계와 가공 효율을 높이지만, 재료비 절감과는 직접 관련 없습니다.',
    difficulty: '중',
    tags: ['CAD', 'CAM']
  },
  {
    id: 'MECH_100',
    subject: '기계설계',
    question: '마찰 클러치에서 마찰력을 증가시키는 방법이 아닌 것은?',
    options: ['압력 증가', '마찰계수가 큰 재료 사용', '접촉 면적 증가', '회전 속도 증가'],
    answer: 3,
    explanation: '마찰력은 압력, 마찰계수, 접촉 면적에 비례하며, 회전 속도와는 무관합니다.',
    difficulty: '중',
    tags: ['클러치', '마찰']
  },
  {
    id: 'MECH_101',
    subject: '재료역학',
    question: '단면 2차 모멘트가 같은 단면 중 굽힘에 가장 유리한 형상은?',
    options: ['원형', '정사각형', 'I형', '중공 원형'],
    answer: 2,
    explanation: 'I형 단면은 재료를 중립축에서 멀리 배치하여 같은 단면 2차 모멘트에서 가장 효율적입니다.',
    difficulty: '상',
    tags: ['단면', '굽힘']
  },
  {
    id: 'MECH_102',
    subject: '재료역학',
    question: '평면 응력 상태에서 최대 전단응력의 크기는?',
    options: ['(σ1 + σ2)/2', '(σ1 - σ2)/2', 'σ1 × σ2', 'σ1 + σ2'],
    answer: 1,
    explanation: '최대 전단응력 τmax = (σ1 - σ2)/2 입니다.',
    difficulty: '중',
    tags: ['전단응력', '주응력']
  },
  {
    id: 'MECH_103',
    subject: '재료역학',
    question: '크리프(Creep) 현상이 발생하는 조건은?',
    options: ['저온 고하중', '고온 장시간 하중', '상온 충격 하중', '저온 순간 하중'],
    answer: 1,
    explanation: '크리프는 고온에서 장시간 일정 하중을 받을 때 시간에 따라 변형이 증가하는 현상입니다.',
    difficulty: '중',
    tags: ['크리프', '변형']
  },
  {
    id: 'MECH_104',
    subject: '열역학',
    question: '엔트로피가 일정한 과정은?',
    options: ['등온 과정', '등압 과정', '단열 과정', '등적 과정'],
    answer: 2,
    explanation: '가역 단열 과정(등엔트로피 과정)에서는 엔트로피가 일정합니다.',
    difficulty: '하',
    tags: ['엔트로피', '단열']
  },
  {
    id: 'MECH_105',
    subject: '열역학',
    question: '브레이튼 사이클(Brayton Cycle)의 이상적인 구성 과정은?',
    options: ['등온 압축, 단열 팽창', '단열 압축, 등압 가열, 단열 팽창, 등압 냉각', '등적 가열, 단열 팽창', '등압 압축, 등온 팽창'],
    answer: 1,
    explanation: '브레이튼 사이클(가스터빈)은 단열 압축 → 등압 가열 → 단열 팽창 → 등압 냉각입니다.',
    difficulty: '중',
    tags: ['브레이튼', '가스터빈']
  },
  {
    id: 'MECH_106',
    subject: '열역학',
    question: '열교환기에서 LMTD(Log Mean Temperature Difference)의 용도는?',
    options: ['압력 손실 계산', '평균 온도차 계산', '유량 계산', '효율 계산'],
    answer: 1,
    explanation: 'LMTD는 열교환기 설계 시 평균 온도차를 계산하는 데 사용됩니다.',
    difficulty: '중',
    tags: ['LMTD', '열교환기']
  },
  {
    id: 'MECH_107',
    subject: '유체역학',
    question: '난류 촉진 장치가 아닌 것은?',
    options: ['러프니스(Roughness)', '와류 발생기', '스트림라인 형상', '터뷸레이터'],
    answer: 2,
    explanation: '스트림라인 형상은 층류를 유지하고 저항을 줄이며, 나머지는 난류를 촉진합니다.',
    difficulty: '중',
    tags: ['난류', '유동']
  },
  {
    id: 'MECH_108',
    subject: '유체역학',
    question: '정압, 동압, 전압의 관계식으로 옳은 것은?',
    options: ['전압 = 정압 - 동압', '전압 = 정압 + 동압', '전압 = 정압 × 동압', '전압 = 정압 / 동압'],
    answer: 1,
    explanation: '베르누이 방정식에서 전압(Total Pressure) = 정압(Static) + 동압(Dynamic)입니다.',
    difficulty: '하',
    tags: ['압력', '베르누이']
  },
  {
    id: 'MECH_109',
    subject: '유체역학',
    question: '항력 계수(Drag Coefficient)에 영향을 주는 요인이 아닌 것은?',
    options: ['레이놀즈 수', '물체 형상', '표면 거칠기', '유체 밀도 단독'],
    answer: 3,
    explanation: '항력 계수는 레이놀즈 수, 형상, 표면 거칠기에 영향을 받으며, 밀도는 레이놀즈 수에 포함됩니다.',
    difficulty: '상',
    tags: ['항력', '계수']
  },
  {
    id: 'MECH_110',
    subject: '기계제작법',
    question: 'CNC 공작기계의 프로그램 좌표계가 아닌 것은?',
    options: ['절대 좌표', '증분 좌표', '극 좌표', '시간 좌표'],
    answer: 3,
    explanation: 'CNC 프로그램에는 절대, 증분, 극 좌표계가 사용되며, 시간 좌표는 없습니다.',
    difficulty: '중',
    tags: ['CNC', '좌표계']
  },
  {
    id: 'MECH_111',
    subject: '기계제작법',
    question: '워터젯(Water Jet) 가공의 특징이 아닌 것은?',
    options: ['비접촉 가공', '열 영향 없음', '다양한 재료 가공', '고속 대량 생산'],
    answer: 3,
    explanation: '워터젯은 열 영향이 없고 다양한 재료를 가공할 수 있지만, 속도가 느려 대량 생산에는 부적합합니다.',
    difficulty: '중',
    tags: ['워터젯', '특수가공']
  },
  {
    id: 'MECH_112',
    subject: '기계제작법',
    question: '쾌삭강(Free-Cutting Steel)에 첨가하는 원소는?',
    options: ['크롬', '니켈', '황(S), 납(Pb)', '몰리브덴'],
    answer: 2,
    explanation: '쾌삭강은 황이나 납을 첨가하여 절삭성을 향상시킨 강입니다.',
    difficulty: '하',
    tags: ['쾌삭강', '재료']
  },
  {
    id: 'MECH_113',
    subject: '기계동력학',
    question: '캠 기구에서 종동절의 운동 중 충격이 가장 작은 것은?',
    options: ['등속도 운동', '등가속도 운동', '단순 조화 운동', '사이클로이드 운동'],
    answer: 3,
    explanation: '사이클로이드 운동은 가속도가 연속적으로 변하여 충격이 가장 작습니다.',
    difficulty: '상',
    tags: ['캠', '운동']
  },
  {
    id: 'MECH_114',
    subject: '기계동력학',
    question: '자이로스코프(Gyroscope)의 원리를 이용한 장치는?',
    options: ['유량계', '관성 항법 장치', '압력계', '온도계'],
    answer: 1,
    explanation: '자이로스코프는 각운동량 보존을 이용하여 관성 항법, 자세 제어 등에 사용됩니다.',
    difficulty: '중',
    tags: ['자이로', '회전']
  },
  {
    id: 'MECH_115',
    subject: '기계재료',
    question: '초경합금(Cemented Carbide)의 주성분은?',
    options: ['철', '알루미늄', '텅스텐 카바이드', '구리'],
    answer: 2,
    explanation: '초경합금은 텅스텐 카바이드(WC) 분말을 코발트로 소결한 고경도 재료입니다.',
    difficulty: '중',
    tags: ['초경합금', '공구재료']
  },
  {
    id: 'MECH_116',
    subject: '기계재료',
    question: '형상 기억 합금(Shape Memory Alloy)의 대표적인 예는?',
    options: ['스테인리스강', '니티놀(Ni-Ti)', '황동', '알루미늄'],
    answer: 1,
    explanation: '니티놀(Nitinol)은 니켈-티타늄 합금으로 형상 기억 효과를 가집니다.',
    difficulty: '중',
    tags: ['형상기억합금', '특수재료']
  },
  {
    id: 'MECH_117',
    subject: '기계설계',
    question: '와류 스프링 클러치(Overrunning Clutch)의 용도는?',
    options: ['양방향 전달', '일방향 전달', '속도 조절', '토크 제한'],
    answer: 1,
    explanation: '와류 스프링 클러치는 한 방향으로만 동력을 전달하는 일방향 클러치입니다.',
    difficulty: '중',
    tags: ['클러치', '일방향']
  },
  {
    id: 'MECH_118',
    subject: '기계설계',
    question: 'V벨트의 쐐기각은 일반적으로?',
    options: ['20°', '30°', '40°', '60°'],
    answer: 2,
    explanation: 'V벨트의 표준 쐐기각은 40°입니다.',
    difficulty: '하',
    tags: ['V벨트', '전동']
  },
  {
    id: 'MECH_119',
    subject: '재료역학',
    question: '세장비(Slenderness Ratio)의 정의는?',
    options: ['L/r (길이/단면2차반경)', 'L×r', 'r/L', 'L+r'],
    answer: 0,
    explanation: '세장비 λ = L/r (유효길이/단면2차반경)로, 기둥의 좌굴 판정에 사용됩니다.',
    difficulty: '중',
    tags: ['세장비', '좌굴']
  },
  {
    id: 'MECH_120',
    subject: '재료역학',
    question: '충격 하중 시 발생하는 응력은 정하중 대비?',
    options: ['같다', '작다', '크다', '무관하다'],
    answer: 2,
    explanation: '충격 하중은 짧은 시간에 작용하여 정하중보다 훨씬 큰 응력과 변형을 발생시킵니다.',
    difficulty: '하',
    tags: ['충격', '응력']
  },
  {
    id: 'MECH_121',
    subject: '열역학',
    question: '히트펌프의 난방 COP와 냉동기 COP의 관계는?',
    options: ['같다', '히트펌프 COP가 1 크다', '냉동기 COP가 1 크다', '무관하다'],
    answer: 1,
    explanation: '히트펌프 난방 COP = 냉동기 COP + 1 입니다.',
    difficulty: '상',
    tags: ['히트펌프', 'COP']
  },
  {
    id: 'MECH_122',
    subject: '열역학',
    question: '스털링 사이클(Stirling Cycle)의 구성 과정은?',
    options: ['2개의 등온, 2개의 단열', '2개의 등온, 2개의 등적', '2개의 등압, 2개의 단열', '2개의 등적, 2개의 등압'],
    answer: 1,
    explanation: '스털링 사이클은 등온 압축 → 등적 가열 → 등온 팽창 → 등적 냉각으로 구성됩니다.',
    difficulty: '상',
    tags: ['스털링', '사이클']
  },
  {
    id: 'MECH_123',
    subject: '유체역학',
    question: '수격 작용(Water Hammer)의 원인은?',
    options: ['유속 증가', '밸브 급폐쇄', '유량 증가', '압력 저하'],
    answer: 1,
    explanation: '수격 작용은 밸브를 급격히 닫을 때 운동 에너지가 압력 에너지로 변하여 압력이 급상승하는 현상입니다.',
    difficulty: '중',
    tags: ['수격', '압력']
  },
  {
    id: 'MECH_124',
    subject: '유체역학',
    question: '공동 현상(Cavitation) 방지 방법이 아닌 것은?',
    options: ['흡입 압력 증가', '유속 감소', '펌프 설치 높이 감소', '토출 압력 증가'],
    answer: 3,
    explanation: '캐비테이션 방지를 위해서는 흡입측 압력을 높이고, 유속을 낮추며, 펌프를 낮게 설치해야 합니다.',
    difficulty: '중',
    tags: ['캐비테이션', '펌프']
  },
  {
    id: 'MECH_125',
    subject: '기계제작법',
    question: '초음파 가공(Ultrasonic Machining)의 특징은?',
    options: ['연질 재료 전용', '경질 취성 재료 가공', '열 영향부 큼', '고속 가공'],
    answer: 1,
    explanation: '초음파 가공은 경질 취성 재료(유리, 세라믹 등)를 가공하는 데 적합합니다.',
    difficulty: '중',
    tags: ['초음파', '특수가공']
  },
  {
    id: 'MECH_126',
    subject: '기계제작법',
    question: 'FDM(Fused Deposition Modeling) 3D 프린팅의 특징은?',
    options: ['레진 사용', '열가소성 필라멘트 적층', '분말 소결', '광경화'],
    answer: 1,
    explanation: 'FDM은 열가소성 플라스틱 필라멘트를 녹여 층층이 쌓아올리는 방식입니다.',
    difficulty: '하',
    tags: ['FDM', '3D프린팅']
  },
  {
    id: 'MECH_127',
    subject: '기계동력학',
    question: '동흡진기(Dynamic Absorber)의 원리는?',
    options: ['질량 증가', '공진 주파수 일치', '감쇠 증가', '강성 감소'],
    answer: 1,
    explanation: '동흡진기는 주 시스템과 같은 고유진동수를 가져 진동 에너지를 흡수합니다.',
    difficulty: '상',
    tags: ['동흡진기', '진동']
  },
  {
    id: 'MECH_128',
    subject: '기계동력학',
    question: '2자유도 진동계의 고유진동수는 몇 개인가?',
    options: ['1개', '2개', '3개', '무한대'],
    answer: 1,
    explanation: 'n자유도 시스템은 n개의 고유진동수를 가지므로, 2자유도는 2개입니다.',
    difficulty: '중',
    tags: ['자유도', '고유진동수']
  },
  {
    id: 'MECH_129',
    subject: '기계재료',
    question: '쇼어 경도(Shore Hardness) 시험의 대상 재료는?',
    options: ['강', '고무 및 플라스틱', '세라믹', '주철'],
    answer: 1,
    explanation: '쇼어 경도는 고무, 플라스틱 등 연질 재료의 경도를 측정합니다.',
    difficulty: '하',
    tags: ['쇼어경도', '시험']
  },
  {
    id: 'MECH_130',
    subject: '기계재료',
    question: '복합재료(Composite Material)의 장점이 아닌 것은?',
    options: ['높은 비강도', '설계 자유도', '가격 저렴', '피로 특성 우수'],
    answer: 2,
    explanation: '복합재료는 성능이 우수하지만 제조 비용이 비싼 것이 단점입니다.',
    difficulty: '중',
    tags: ['복합재료', '특성']
  },
  {
    id: 'MECH_131',
    subject: '기계설계',
    question: '롤러 체인의 번호 40이 의미하는 것은?',
    options: ['피치 4mm', '피치 40mm', '피치 4인치', '피치 1/2인치'],
    answer: 3,
    explanation: '체인 번호는 피치를 1/8인치 단위로 나타내므로, 40번은 40/8 = 5/8인치입니다. (오답 수정: 1/2인치)',
    difficulty: '상',
    tags: ['체인', '규격']
  },
  {
    id: 'MECH_132',
    subject: '기계설계',
    question: '유성 기어(Planetary Gear)의 장점이 아닌 것은?',
    options: ['컴팩트한 구조', '큰 감속비', '구조 단순', '부하 분산'],
    answer: 2,
    explanation: '유성 기어는 컴팩트하고 큰 감속비를 얻을 수 있지만, 구조가 복잡합니다.',
    difficulty: '중',
    tags: ['유성기어', '감속기']
  },
  {
    id: 'MECH_133',
    subject: '재료역학',
    question: '박막 이론(Thin Wall Theory)이 적용되는 조건은?',
    options: ['두께 ≫ 지름', '두께 ≪ 지름', '두께 = 지름', '무관'],
    answer: 1,
    explanation: '박막 이론은 벽 두께가 지름에 비해 매우 얇을 때(t < r/10) 적용됩니다.',
    difficulty: '중',
    tags: ['박막', '응력']
  },
  {
    id: 'MECH_134',
    subject: '열역학',
    question: '재생 사이클(Regenerative Cycle)의 목적은?',
    options: ['압력 증가', '열효율 향상', '출력 감소', '비용 절감'],
    answer: 1,
    explanation: '재생 사이클은 배기 가스의 폐열을 회수하여 열효율을 향상시킵니다.',
    difficulty: '중',
    tags: ['재생사이클', '효율']
  },
  {
    id: 'MECH_135',
    subject: '열역학',
    question: '조절 단열(Throttling)의 특징은?',
    options: ['엔탈피 일정', '엔트로피 일정', '온도 일정', '압력 일정'],
    answer: 0,
    explanation: '조절 단열 과정(팽창밸브)에서는 엔탈피가 일정하게 유지됩니다.',
    difficulty: '상',
    tags: ['조절단열', '팽창']
  },
  {
    id: 'MECH_136',
    subject: '유체역학',
    question: '양력(Lift) 발생의 원리는?',
    options: ['파스칼의 원리', '베르누이 원리', '아르키메데스 원리', '뉴턴 제3법칙만'],
    answer: 1,
    explanation: '양력은 날개 위아래 압력 차이로 발생하며, 베르누이 원리로 설명됩니다.',
    difficulty: '중',
    tags: ['양력', '공기역학']
  },
  {
    id: 'MECH_137',
    subject: '유체역학',
    question: '무차원수가 아닌 것은?',
    options: ['레이놀즈 수', '마하 수', '프루드 수', '점성계수'],
    answer: 3,
    explanation: '점성계수는 차원을 가지며, 레이놀즈, 마하, 프루드 수는 무차원수입니다.',
    difficulty: '하',
    tags: ['무차원수', '유체']
  },
  {
    id: 'MECH_138',
    subject: '기계제작법',
    question: 'ECM(Electrochemical Machining)의 원리는?',
    options: ['기계적 절삭', '전기 화학 반응', '열 용융', '초음파'],
    answer: 1,
    explanation: 'ECM은 전해액 중에서 전기 화학 반응으로 금속을 용해시키는 가공법입니다.',
    difficulty: '중',
    tags: ['ECM', '특수가공']
  },
  {
    id: 'MECH_139',
    subject: '기계제작법',
    question: 'SLA(Stereolithography) 3D 프린팅의 특징은?',
    options: ['필라멘트 사용', '광경화성 레진 사용', '금속 분말 사용', '종이 적층'],
    answer: 1,
    explanation: 'SLA는 자외선 레이저로 액상 광경화성 수지를 경화시키는 방식입니다.',
    difficulty: '중',
    tags: ['SLA', '3D프린팅']
  },
  {
    id: 'MECH_140',
    subject: '기계동력학',
    question: '임계 감쇠(Critical Damping)의 특징은?',
    options: ['진동 지속', '가장 빠른 수렴', '공진', '발산'],
    answer: 1,
    explanation: '임계 감쇠는 진동 없이 가장 빠르게 평형 상태로 수렴합니다.',
    difficulty: '중',
    tags: ['감쇠', '진동']
  },
  {
    id: 'MECH_141',
    subject: '기계재료',
    question: '비파괴 검사 방법이 아닌 것은?',
    options: ['초음파 탐상', '방사선 투과', '자기 탐상', '인장 시험'],
    answer: 3,
    explanation: '인장 시험은 파괴 시험이며, 초음파, 방사선, 자기 탐상은 비파괴 검사입니다.',
    difficulty: '하',
    tags: ['비파괴검사', '시험']
  },
  {
    id: 'MECH_142',
    subject: '기계설계',
    question: '볼 나사(Ball Screw)의 장점이 아닌 것은?',
    options: ['높은 효율', '역전 방지', '정밀 이송', '백래시 최소화'],
    answer: 1,
    explanation: '볼 나사는 효율이 높고 정밀하지만, 역전 방지 기능은 없어 별도 브레이크가 필요합니다.',
    difficulty: '중',
    tags: ['볼나사', '이송장치']
  },
  {
    id: 'MECH_143',
    subject: '재료역학',
    question: '탄성 에너지(Strain Energy)는 무엇에 비례하는가?',
    options: ['응력', '변형률', '응력의 제곱', '하중'],
    answer: 2,
    explanation: '탄성 에너지 U = (1/2)σε×V = (σ²/2E)×V로 응력의 제곱에 비례합니다.',
    difficulty: '상',
    tags: ['탄성에너지', '에너지']
  },
  {
    id: 'MECH_144',
    subject: '열역학',
    question: '습도 측정 장치가 아닌 것은?',
    options: ['건습구 온도계', '모발 습도계', '압력계', '노점 습도계'],
    answer: 2,
    explanation: '압력계는 압력 측정 장치이며, 나머지는 습도 측정에 사용됩니다.',
    difficulty: '하',
    tags: ['습도', '측정']
  },
  {
    id: 'MECH_145',
    subject: '유체역학',
    question: '정수압의 특성이 아닌 것은?',
    options: ['깊이에 비례', '모든 방향 동일', '수평면에서 일정', '유속에 비례'],
    answer: 3,
    explanation: '정수압은 깊이에 비례하고 모든 방향으로 같으며, 유속과는 무관합니다.',
    difficulty: '하',
    tags: ['정수압', '압력']
  },
  {
    id: 'MECH_146',
    subject: '기계제작법',
    question: '열간 가공과 냉간 가공의 구분 기준은?',
    options: ['실온', '재결정 온도', '용융점', '비등점'],
    answer: 1,
    explanation: '재결정 온도 이상은 열간 가공, 이하는 냉간 가공으로 분류합니다.',
    difficulty: '중',
    tags: ['열간가공', '냉간가공']
  },
  {
    id: 'MECH_147',
    subject: '기계동력학',
    question: '밸런싱(Balancing)의 목적은?',
    options: ['속도 증가', '진동 감소', '토크 증가', '효율 향상'],
    answer: 1,
    explanation: '밸런싱은 회전체의 질량 중심을 회전축과 일치시켜 진동을 감소시킵니다.',
    difficulty: '하',
    tags: ['밸런싱', '진동']
  },
  {
    id: 'MECH_148',
    subject: '기계재료',
    question: '세라믹 재료의 특성으로 옳지 않은 것은?',
    options: ['높은 경도', '우수한 내열성', '높은 인성', '내식성'],
    answer: 2,
    explanation: '세라믹은 경도와 내열성이 우수하지만 취성이 커서 인성이 낮습니다.',
    difficulty: '중',
    tags: ['세라믹', '특성']
  },
  {
    id: 'MECH_149',
    subject: '기계설계',
    question: 'O-링(O-Ring)의 용도는?',
    options: ['동력 전달', '밀봉', '지지', '가이드'],
    answer: 1,
    explanation: 'O-링은 고무 재질의 링으로 유체 누설을 방지하는 밀봉 장치입니다.',
    difficulty: '하',
    tags: ['O링', '밀봉']
  },
  {
    id: 'MECH_150',
    subject: '기계설계',
    question: 'ISO 미터 나사의 골지름과 피치의 관계는?',
    options: ['골지름 = 호칭지름 - 피치', '골지름 = 호칭지름 - 1.2×피치', '골지름 = 호칭지름 - 1.5×피치', '골지름 = 호칭지름 - 2×피치'],
    answer: 1,
    explanation: 'ISO 미터 나사의 골지름 d₂ = d - 1.2268P (약 1.2P)입니다.',
    difficulty: '상',
    tags: ['나사', '치수']
  }
];

export default mechanicalQuestions;
