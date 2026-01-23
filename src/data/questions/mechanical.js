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
  }
];

export default mechanicalQuestions;
