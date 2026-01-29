// 운전면허 문제 데이터 (1종/2종 보통)
export const drivingQuestions = [
  {
    id: 'DRV_001',
    subject: '교통법규',
    question: '편도 1차로 도로에서 제한속도가 별도로 지정되지 않은 경우, 일반도로의 최고속도는?',
    options: ['시속 50km', '시속 60km', '시속 70km', '시속 80km'],
    answer: 1,
    explanation: '일반도로에서 편도 1차로의 최고속도는 시속 60km입니다.',
    difficulty: '하',
    tags: ['속도제한', '일반도로'],
    translations: {
      vi: {
        question: 'Tốc độ tối đa trên đường thường có 1 làn xe mỗi chiều khi không có biển báo giới hạn tốc độ riêng là bao nhiêu?',
        options: ['50km/h', '60km/h', '70km/h', '80km/h'],
        explanation: 'Tốc độ tối đa trên đường thường có 1 làn xe mỗi chiều là 60km/h.'
      },
      th: {
        question: 'ความเร็วสูงสุดบนถนนทั่วไปที่มี 1 ช่องจราจรต่อทิศทาง เมื่อไม่มีป้ายจำกัดความเร็วคือเท่าไร?',
        options: ['50 กม./ชม.', '60 กม./ชม.', '70 กม./ชม.', '80 กม./ชม.'],
        explanation: 'ความเร็วสูงสุดบนถนนทั่วไปที่มี 1 ช่องจราจรต่อทิศทางคือ 60 กม./ชม.'
      }
    }
  },
  {
    id: 'DRV_002',
    subject: '교통법규',
    question: '혈중알코올농도 0.03% 이상인 상태에서 운전하면 어떤 처벌을 받는가?',
    options: ['범칙금 부과', '음주운전 처벌 대상', '경고 조치', '과태료 부과'],
    answer: 1,
    explanation: '혈중알코올농도 0.03% 이상이면 음주운전으로 처벌받습니다.',
    difficulty: '하',
    tags: ['음주운전', '처벌'],
    translations: {
      vi: {
        question: 'Nếu lái xe khi nồng độ cồn trong máu từ 0,03% trở lên sẽ bị xử phạt gì?',
        options: ['Phạt tiền vi phạm', 'Bị xử phạt lái xe khi say rượu', 'Cảnh cáo', 'Phạt tiền hành chính'],
        explanation: 'Nồng độ cồn trong máu từ 0,03% trở lên sẽ bị xử phạt lái xe khi say rượu.'
      },
      th: {
        question: 'หากขับรถในขณะที่มีระดับแอลกอฮอล์ในเลือดตั้งแต่ 0.03% ขึ้นไป จะถูกลงโทษอย่างไร?',
        options: ['ปรับค่าปรับ', 'ถูกลงโทษข้อหาเมาแล้วขับ', 'ตักเตือน', 'ปรับค่าธรรมเนียม'],
        explanation: 'หากมีระดับแอลกอฮอล์ในเลือดตั้งแต่ 0.03% ขึ้นไป จะถูกลงโทษข้อหาเมาแล้วขับ'
      }
    }
  },
  {
    id: 'DRV_003',
    subject: '교통법규',
    question: '황색 실선의 중앙선은 어떤 의미인가?',
    options: ['추월 가능', '주정차 가능', '차선 변경 금지 및 추월 금지', '일방통행'],
    answer: 2,
    explanation: '황색 실선 중앙선은 차선 변경과 추월이 금지된다는 의미입니다.',
    difficulty: '하',
    tags: ['차선', '중앙선'],
    translations: {
      vi: {
        question: 'Vạch liền vàng ở giữa đường có ý nghĩa gì?',
        options: ['Được phép vượt', 'Được phép đỗ xe', 'Cấm thay đổi làn và cấm vượt', 'Đường một chiều'],
        explanation: 'Vạch liền vàng ở giữa đường có nghĩa là cấm thay đổi làn và cấm vượt.'
      },
      th: {
        question: 'เส้นทึบสีเหลืองตรงกลางถนนหมายความว่าอย่างไร?',
        options: ['แซงได้', 'จอดรถได้', 'ห้ามเปลี่ยนเลนและห้ามแซง', 'ทางเดินรถทางเดียว'],
        explanation: 'เส้นทึบสีเหลืองตรงกลางถนน หมายถึง ห้ามเปลี่ยนเลนและห้ามแซง'
      }
    }
  },
  {
    id: 'DRV_004',
    subject: '교통법규',
    question: '운전면허 취소 사유에 해당하지 않는 것은?',
    options: ['혈중알코올농도 0.08% 이상 음주운전', '교통사고 후 도주(뺑소니)', '누적 벌점 40점 이상', '신호위반 1회'],
    answer: 3,
    explanation: '신호위반 1회는 벌점 부과 사유이지만, 그 자체로 면허 취소 사유는 아닙니다.',
    difficulty: '중',
    tags: ['면허취소', '벌점'],
    translations: {
      vi: {
        question: 'Trường hợp nào sau đây KHÔNG phải là lý do thu hồi bằng lái?',
        options: ['Lái xe khi nồng độ cồn từ 0,08% trở lên', 'Bỏ trốn sau tai nạn giao thông', 'Điểm phạt tích lũy từ 40 điểm trở lên', 'Vi phạm tín hiệu đèn giao thông 1 lần'],
        explanation: 'Vi phạm tín hiệu đèn giao thông 1 lần chỉ bị phạt điểm, không phải lý do thu hồi bằng lái.'
      },
      th: {
        question: 'ข้อใดต่อไปนี้ไม่ใช่เหตุผลในการเพิกถอนใบอนุญาตขับขี่?',
        options: ['เมาแล้วขับที่ระดับแอลกอฮอล์ 0.08% ขึ้นไป', 'หนีหลังเกิดอุบัติเหตุ', 'คะแนนโทษสะสม 40 คะแนนขึ้นไป', 'ฝ่าสัญญาณไฟจราจร 1 ครั้ง'],
        explanation: 'การฝ่าสัญญาณไฟจราจร 1 ครั้ง เป็นเพียงการหักคะแนน ไม่ใช่เหตุเพิกถอนใบอนุญาต'
      }
    }
  },
  {
    id: 'DRV_005',
    subject: '교통법규',
    question: '어린이보호구역에서의 제한속도는?',
    options: ['시속 20km 이하', '시속 30km 이하', '시속 40km 이하', '시속 50km 이하'],
    answer: 1,
    explanation: '어린이보호구역(스쿨존)에서는 시속 30km 이하로 서행해야 합니다.',
    difficulty: '하',
    tags: ['어린이보호구역', '속도제한'],
    translations: {
      vi: {
        question: 'Giới hạn tốc độ trong khu vực bảo vệ trẻ em (School Zone) là bao nhiêu?',
        options: ['Dưới 20km/h', 'Dưới 30km/h', 'Dưới 40km/h', 'Dưới 50km/h'],
        explanation: 'Trong khu vực bảo vệ trẻ em (School Zone), phải đi chậm dưới 30km/h.'
      },
      th: {
        question: 'ความเร็วจำกัดในเขตคุ้มครองเด็ก (School Zone) คือเท่าไร?',
        options: ['ไม่เกิน 20 กม./ชม.', 'ไม่เกิน 30 กม./ชม.', 'ไม่เกิน 40 กม./ชม.', 'ไม่เกิน 50 กม./ชม.'],
        explanation: 'ในเขตคุ้มครองเด็ก (School Zone) ต้องขับช้าไม่เกิน 30 กม./ชม.'
      }
    }
  },
  {
    id: 'DRV_006',
    subject: '교통법규',
    question: '긴급자동차(소방차, 구급차 등)가 접근할 때 올바른 행동은?',
    options: ['속도를 높여 빨리 지나간다', '그 자리에 정차한다', '도로의 우측 가장자리로 피한다', '경적을 울려 알린다'],
    answer: 2,
    explanation: '긴급자동차가 접근하면 도로의 우측 가장자리로 피해야 합니다.',
    difficulty: '하',
    tags: ['긴급자동차', '양보'],
    translations: {
      vi: {
        question: 'Khi xe khẩn cấp (xe cứu hỏa, xe cứu thương) đến gần, hành động đúng là gì?',
        options: ['Tăng tốc để vượt qua nhanh', 'Dừng lại tại chỗ', 'Tránh sang bên phải đường', 'Bấm còi để thông báo'],
        explanation: 'Khi xe khẩn cấp đến gần, phải tránh sang bên phải đường.'
      },
      th: {
        question: 'เมื่อรถฉุกเฉิน (รถดับเพลิง รถพยาบาล) เข้าใกล้ ควรทำอย่างไร?',
        options: ['เร่งความเร็วเพื่อผ่านไปให้เร็ว', 'จอดรถอยู่กับที่', 'หลบไปทางขวาสุดของถนน', 'บีบแตรเพื่อแจ้งเตือน'],
        explanation: 'เมื่อรถฉุกเฉินเข้าใกล้ ต้องหลบไปทางขวาสุดของถนน'
      }
    }
  },
  {
    id: 'DRV_007',
    subject: '교통법규',
    question: '교차로에서 좌회전할 때 올바른 방법은?',
    options: ['교차로의 중심 안쪽으로 서행하며 좌회전', '빠르게 좌회전', '교차로 진입 전에 좌회전', '우회전 후 유턴'],
    answer: 0,
    explanation: '교차로에서 좌회전 시 교차로의 중심 안쪽으로 서행하면서 좌회전해야 합니다.',
    difficulty: '중',
    tags: ['교차로', '좌회전'],
    translations: {
      vi: {
        question: 'Cách rẽ trái đúng tại ngã tư là gì?',
        options: ['Đi chậm và rẽ trái phía trong tâm ngã tư', 'Rẽ trái nhanh chóng', 'Rẽ trái trước khi vào ngã tư', 'Rẽ phải rồi quay đầu'],
        explanation: 'Khi rẽ trái tại ngã tư, phải đi chậm và rẽ phía trong tâm ngã tư.'
      },
      th: {
        question: 'วิธีเลี้ยวซ้ายที่ถูกต้องที่สี่แยกคืออะไร?',
        options: ['ขับช้าๆ เลี้ยวซ้ายด้านในของจุดศูนย์กลางสี่แยก', 'เลี้ยวซ้ายอย่างรวดเร็ว', 'เลี้ยวซ้ายก่อนเข้าสี่แยก', 'เลี้ยวขวาแล้วกลับรถ'],
        explanation: 'เมื่อเลี้ยวซ้ายที่สี่แยก ต้องขับช้าๆ เลี้ยวด้านในของจุดศูนย์กลางสี่แยก'
      }
    }
  },
  {
    id: 'DRV_008',
    subject: '안전운전',
    question: '빗길에서 안전운전을 위해 가장 중요한 것은?',
    options: ['속도를 높여 빨리 통과한다', '감속하고 차간거리를 넓게 유지한다', '전조등을 끈다', '급제동을 자주 한다'],
    answer: 1,
    explanation: '빗길에서는 노면이 미끄러우므로 감속하고 차간거리를 넓게 유지해야 합니다.',
    difficulty: '하',
    tags: ['빗길', '안전운전'],
    translations: {
      vi: {
        question: 'Điều quan trọng nhất để lái xe an toàn trên đường ướt là gì?',
        options: ['Tăng tốc để qua nhanh', 'Giảm tốc và giữ khoảng cách xa với xe trước', 'Tắt đèn pha', 'Phanh gấp thường xuyên'],
        explanation: 'Trên đường ướt, mặt đường trơn nên phải giảm tốc và giữ khoảng cách xa với xe trước.'
      },
      th: {
        question: 'สิ่งสำคัญที่สุดในการขับขี่ปลอดภัยบนถนนเปียกคืออะไร?',
        options: ['เร่งความเร็วเพื่อผ่านไปเร็วๆ', 'ลดความเร็วและรักษาระยะห่างจากรถคันหน้า', 'ปิดไฟหน้า', 'เบรกกะทันหันบ่อยๆ'],
        explanation: 'บนถนนเปียก ผิวถนนลื่น จึงต้องลดความเร็วและรักษาระยะห่างจากรถคันหน้า'
      }
    }
  },
  {
    id: 'DRV_009',
    subject: '안전운전',
    question: '안개가 짙은 도로에서 사용해야 하는 등화는?',
    options: ['상향등', '안개등 또는 하향등', '비상등', '실내등'],
    answer: 1,
    explanation: '안개가 짙을 때는 안개등 또는 하향등을 켜야 합니다. 상향등은 빛이 반사되어 오히려 시야를 방해합니다.',
    difficulty: '중',
    tags: ['안개', '등화'],
    translations: {
      vi: {
        question: 'Khi đường có sương mù dày đặc, nên sử dụng đèn gì?',
        options: ['Đèn chiếu xa (đèn pha)', 'Đèn sương mù hoặc đèn chiếu gần', 'Đèn khẩn cấp', 'Đèn trong xe'],
        explanation: 'Khi sương mù dày đặc, nên bật đèn sương mù hoặc đèn chiếu gần. Đèn chiếu xa sẽ phản chiếu ánh sáng và cản trở tầm nhìn.'
      },
      th: {
        question: 'เมื่อถนนมีหมอกหนา ควรใช้ไฟอะไร?',
        options: ['ไฟสูง', 'ไฟตัดหมอกหรือไฟต่ำ', 'ไฟฉุกเฉิน', 'ไฟภายในรถ'],
        explanation: 'เมื่อมีหมอกหนา ควรเปิดไฟตัดหมอกหรือไฟต่ำ ไฟสูงจะสะท้อนแสงและทำให้มองไม่ชัด'
      }
    }
  },
  {
    id: 'DRV_010',
    subject: '안전운전',
    question: '타이어의 공기압이 부족하면 어떤 현상이 발생하는가?',
    options: ['제동거리가 짧아진다', '연료 소비가 줄어든다', '타이어 양쪽 마모가 심해진다', '승차감이 좋아진다'],
    answer: 2,
    explanation: '타이어 공기압이 부족하면 타이어 양쪽(숄더) 부분의 마모가 심해지고 연료 소비가 증가합니다.',
    difficulty: '중',
    tags: ['타이어', '정비'],
    translations: {
      vi: {
        question: 'Khi áp suất lốp không đủ sẽ xảy ra hiện tượng gì?',
        options: ['Khoảng cách phanh ngắn hơn', 'Tiêu thụ nhiên liệu giảm', 'Mòn hai bên lốp nghiêm trọng hơn', 'Cảm giác ngồi thoải mái hơn'],
        explanation: 'Khi áp suất lốp không đủ, hai bên (vai) lốp bị mòn nghiêm trọng hơn và tiêu thụ nhiên liệu tăng.'
      },
      th: {
        question: 'เมื่อแรงดันลมยางไม่เพียงพอจะเกิดอะไรขึ้น?',
        options: ['ระยะเบรกสั้นลง', 'การใช้เชื้อเพลิงลดลง', 'ยางสึกหรอด้านข้างมากขึ้น', 'การนั่งสบายขึ้น'],
        explanation: 'เมื่อแรงดันลมยางไม่เพียงพอ ยางจะสึกหรอด้านข้าง (ไหล่ยาง) มากขึ้น และใช้เชื้อเพลิงมากขึ้น'
      }
    }
  },
  {
    id: 'DRV_011',
    subject: '안전운전',
    question: '야간 운전 시 마주오는 차량의 전조등에 눈이 부실 때 올바른 대처법은?',
    options: ['상대방에게 상향등을 비춘다', '속도를 줄이고 도로 우측을 주시한다', '눈을 감고 직진한다', '급정거한다'],
    answer: 1,
    explanation: '마주오는 차량의 전조등이 눈부실 때는 속도를 줄이고 도로 우측 가장자리를 주시합니다.',
    difficulty: '중',
    tags: ['야간운전', '전조등'],
    translations: {
      vi: {
        question: 'Khi lái xe ban đêm bị chói mắt bởi đèn pha của xe ngược chiều, cách xử lý đúng là gì?',
        options: ['Chiếu đèn pha vào xe đối diện', 'Giảm tốc và nhìn sang bên phải đường', 'Nhắm mắt và đi thẳng', 'Phanh gấp'],
        explanation: 'Khi bị chói bởi đèn pha xe ngược chiều, hãy giảm tốc và nhìn sang bên phải đường.'
      },
      th: {
        question: 'เมื่อขับรถกลางคืนแล้วตาพร่าจากไฟหน้ารถสวน ควรทำอย่างไร?',
        options: ['เปิดไฟสูงส่องไปที่รถคันนั้น', 'ลดความเร็วและมองขอบถนนด้านขวา', 'หลับตาแล้วขับตรงไป', 'เบรกกะทันหัน'],
        explanation: 'เมื่อตาพร่าจากไฟหน้ารถสวน ให้ลดความเร็วและมองขอบถนนด้านขวา'
      }
    }
  },
  {
    id: 'DRV_012',
    subject: '안전운전',
    question: '차량이 수막현상(하이드로플레이닝)이 발생했을 때 올바른 대처법은?',
    options: ['급브레이크를 밟는다', '핸들을 급하게 꺾는다', '가속페달에서 발을 떼고 서서히 감속한다', '기어를 중립에 놓는다'],
    answer: 2,
    explanation: '수막현상 발생 시 급브레이크나 급핸들 조작을 하면 위험합니다. 가속페달에서 발을 떼고 서서히 감속해야 합니다.',
    difficulty: '상',
    tags: ['수막현상', '긴급상황'],
    translations: {
      vi: {
        question: 'Khi xe bị hiện tượng trượt nước (hydroplaning), cách xử lý đúng là gì?',
        options: ['Đạp phanh gấp', 'Bẻ lái đột ngột', 'Nhả chân ga và giảm tốc từ từ', 'Đặt số về N'],
        explanation: 'Khi bị trượt nước, phanh gấp hoặc bẻ lái đột ngột rất nguy hiểm. Phải nhả chân ga và giảm tốc từ từ.'
      },
      th: {
        question: 'เมื่อรถเกิดปรากฏการณ์ไฮโดรเพลนนิง (ลื่นไถลบนผิวน้ำ) ควรทำอย่างไร?',
        options: ['เหยียบเบรกอย่างกะทันหัน', 'หักพวงมาลัยอย่างรุนแรง', 'ปล่อมคันเร่งและค่อยๆ ลดความเร็ว', 'เข้าเกียร์ว่าง'],
        explanation: 'เมื่อเกิดไฮโดรเพลนนิง การเบรกกะทันหันหรือหักพวงมาลัยอย่างรุนแรงเป็นอันตราย ต้องปล่อยคันเร่งและค่อยๆ ลดความเร็ว'
      }
    }
  },
  {
    id: 'DRV_013',
    subject: '안전운전',
    question: '안전띠(안전벨트)를 착용하지 않은 경우의 벌점은?',
    options: ['없음', '벌점 없이 범칙금만 부과', '벌점 10점', '벌점 15점'],
    answer: 1,
    explanation: '안전벨트 미착용 시 벌점은 없으며, 범칙금만 부과됩니다.',
    difficulty: '중',
    tags: ['안전벨트', '벌점'],
    translations: {
      vi: {
        question: 'Điểm phạt khi không thắt dây an toàn là bao nhiêu?',
        options: ['Không có', 'Không có điểm phạt, chỉ phạt tiền', '10 điểm phạt', '15 điểm phạt'],
        explanation: 'Khi không thắt dây an toàn, không bị trừ điểm mà chỉ bị phạt tiền.'
      },
      th: {
        question: 'คะแนนโทษเมื่อไม่คาดเข็มขัดนิรภัยคือเท่าไร?',
        options: ['ไม่มี', 'ไม่มีคะแนนโทษ แค่ปรับเงิน', '10 คะแนน', '15 คะแนน'],
        explanation: 'เมื่อไม่คาดเข็มขัดนิรภัย ไม่มีคะแนนโทษ แต่จะถูกปรับเงินเท่านั้น'
      }
    }
  },
  {
    id: 'DRV_014',
    subject: '교통표지',
    question: '원형 빨간색 테두리 안에 숫자 "50"이 적힌 표지판의 의미는?',
    options: ['최저속도 50km/h', '최고속도 50km/h', '50m 앞 정지', '50톤 이하 통행'],
    answer: 1,
    explanation: '원형 빨간색 테두리에 숫자가 적힌 표지판은 최고속도 제한을 의미합니다.',
    difficulty: '하',
    tags: ['표지판', '속도제한'],
    translations: {
      vi: {
        question: 'Biển báo hình tròn viền đỏ có số "50" bên trong có ý nghĩa gì?',
        options: ['Tốc độ tối thiểu 50km/h', 'Tốc độ tối đa 50km/h', 'Dừng lại sau 50m', 'Xe dưới 50 tấn được đi'],
        explanation: 'Biển báo hình tròn viền đỏ có số là biển giới hạn tốc độ tối đa.'
      },
      th: {
        question: 'ป้ายวงกลมขอบแดงมีตัวเลข "50" ข้างใน หมายความว่าอะไร?',
        options: ['ความเร็วขั้นต่ำ 50 กม./ชม.', 'ความเร็วสูงสุด 50 กม./ชม.', 'หยุดใน 50 เมตร', 'รถต่ำกว่า 50 ตันผ่านได้'],
        explanation: 'ป้ายวงกลมขอบแดงมีตัวเลข หมายถึง จำกัดความเร็วสูงสุด'
      }
    }
  },
  {
    id: 'DRV_015',
    subject: '교통표지',
    question: '역삼각형 모양의 "양보" 표지판을 만났을 때 올바른 행동은?',
    options: ['무조건 정지한다', '교차도로의 차에게 통행 우선권을 양보한다', '속도를 높인다', '경적을 울린다'],
    answer: 1,
    explanation: '양보 표지판은 교차도로의 차량에게 통행 우선권을 양보해야 한다는 의미입니다.',
    difficulty: '하',
    tags: ['표지판', '양보'],
    translations: {
      vi: {
        question: 'Khi gặp biển "Nhường đường" hình tam giác ngược, hành động đúng là gì?',
        options: ['Dừng lại ngay', 'Nhường quyền đi trước cho xe trên đường giao nhau', 'Tăng tốc', 'Bấm còi'],
        explanation: 'Biển nhường đường có nghĩa là phải nhường quyền đi trước cho xe trên đường giao nhau.'
      },
      th: {
        question: 'เมื่อพบป้าย "ให้ทาง" รูปสามเหลี่ยมกลับหัว ควรทำอย่างไร?',
        options: ['หยุดรถทันที', 'ให้สิทธิ์ทางแก่รถบนถนนที่ตัดผ่าน', 'เร่งความเร็ว', 'บีบแตร'],
        explanation: 'ป้ายให้ทาง หมายถึง ต้องให้สิทธิ์ทางแก่รถบนถนนที่ตัดผ่าน'
      }
    }
  },
  {
    id: 'DRV_016',
    subject: '교통표지',
    question: '파란색 원형 표지판에 화살표가 있는 것의 의미는?',
    options: ['통행 금지', '지정 방향으로만 통행 가능', '주의 표시', '안내 표시'],
    answer: 1,
    explanation: '파란색 원형 표지판에 화살표는 지정 방향으로만 통행할 수 있다는 지시표지입니다.',
    difficulty: '하',
    tags: ['표지판', '지시표지'],
    translations: {
      vi: {
        question: 'Biển báo hình tròn màu xanh có mũi tên có ý nghĩa gì?',
        options: ['Cấm đi', 'Chỉ được đi theo hướng chỉ định', 'Biển cảnh báo', 'Biển chỉ dẫn'],
        explanation: 'Biển tròn xanh có mũi tên là biển chỉ dẫn chỉ được đi theo hướng chỉ định.'
      },
      th: {
        question: 'ป้ายวงกลมสีน้ำเงินที่มีลูกศรหมายความว่าอะไร?',
        options: ['ห้ามผ่าน', 'ให้ไปได้เฉพาะทิศทางที่กำหนด', 'ป้ายเตือน', 'ป้ายแนะนำ'],
        explanation: 'ป้ายวงกลมสีน้ำเงินที่มีลูกศร เป็นป้ายบังคับให้ไปได้เฉพาะทิศทางที่กำหนด'
      }
    }
  },
  {
    id: 'DRV_017',
    subject: '교통표지',
    question: '노면에 지그재그 형태의 흰색 선이 그려진 곳의 의미는?',
    options: ['주차 가능 구역', '서행 및 전방 횡단보도 주의', '버스 전용 구간', '유턴 가능 구역'],
    answer: 1,
    explanation: '지그재그 노면표시는 전방에 횡단보도가 있으니 서행하라는 의미입니다.',
    difficulty: '중',
    tags: ['노면표시', '횡단보도'],
    translations: {
      vi: {
        question: 'Vạch zigzag màu trắng trên mặt đường có ý nghĩa gì?',
        options: ['Khu vực được đỗ xe', 'Đi chậm và chú ý vạch qua đường phía trước', 'Làn xe buýt', 'Khu vực được quay đầu'],
        explanation: 'Vạch zigzag trên mặt đường nghĩa là phía trước có vạch qua đường, cần đi chậm.'
      },
      th: {
        question: 'เส้นสีขาวรูปซิกแซกบนพื้นถนนหมายความว่าอะไร?',
        options: ['เขตจอดรถได้', 'ชะลอความเร็วและระวังทางข้ามด้านหน้า', 'ช่องทางรถประจำทาง', 'เขตกลับรถได้'],
        explanation: 'เครื่องหมายซิกแซกบนพื้นถนน หมายถึง ด้านหน้ามีทางข้าม ให้ชะลอความเร็ว'
      }
    }
  },
  {
    id: 'DRV_018',
    subject: '교통표지',
    question: '삼각형 모양의 노란색 표지판은 어떤 종류의 표지판인가?',
    options: ['규제표지', '주의표지(경고)', '지시표지', '안내표지'],
    answer: 1,
    explanation: '삼각형 모양의 노란색(또는 노란 바탕) 표지판은 주의(경고) 표지판입니다.',
    difficulty: '하',
    tags: ['표지판', '주의표지'],
    translations: {
      vi: {
        question: 'Biển báo hình tam giác màu vàng thuộc loại biển báo nào?',
        options: ['Biển cấm', 'Biển cảnh báo', 'Biển chỉ dẫn', 'Biển thông tin'],
        explanation: 'Biển báo hình tam giác nền vàng là biển cảnh báo (biển báo nguy hiểm).'
      },
      th: {
        question: 'ป้ายสามเหลี่ยมสีเหลืองเป็นป้ายประเภทใด?',
        options: ['ป้ายบังคับ', 'ป้ายเตือน', 'ป้ายแนะนำ', 'ป้ายข้อมูล'],
        explanation: 'ป้ายสามเหลี่ยมพื้นเหลือง เป็นป้ายเตือน (ป้ายเตือนอันตราย)'
      }
    }
  },
  {
    id: 'DRV_019',
    subject: '안전운전',
    question: '고속도로에서 고장으로 정차할 때 삼각대를 설치해야 하는 위치는?',
    options: ['차량 앞쪽 50m', '차량 뒤쪽 100m 이상', '차량 바로 옆', '차량 뒤쪽 10m'],
    answer: 1,
    explanation: '고속도로에서 고장 시 차량 뒤쪽 100m 이상 지점에 삼각대를 설치해야 합니다.',
    difficulty: '중',
    tags: ['고속도로', '고장'],
    translations: {
      vi: {
        question: 'Khi xe hỏng phải dừng trên đường cao tốc, phải đặt tam giác cảnh báo ở đâu?',
        options: ['Phía trước xe 50m', 'Phía sau xe ít nhất 100m', 'Ngay bên cạnh xe', 'Phía sau xe 10m'],
        explanation: 'Trên đường cao tốc khi xe hỏng, phải đặt tam giác cảnh báo ít nhất 100m phía sau xe.'
      },
      th: {
        question: 'เมื่อรถเสียต้องจอดบนทางด่วน ต้องวางสามเหลี่ยมเตือนที่ไหน?',
        options: ['หน้ารถ 50 เมตร', 'หลังรถอย่างน้อย 100 เมตร', 'ข้างรถ', 'หลังรถ 10 เมตร'],
        explanation: 'บนทางด่วนเมื่อรถเสีย ต้องวางสามเหลี่ยมเตือนอย่างน้อย 100 เมตรหลังรถ'
      }
    }
  },
  {
    id: 'DRV_020',
    subject: '교통법규',
    question: '보행자 전용도로에서 차마가 통행할 수 있는 경우는?',
    options: ['언제든 통행 가능', '경찰관의 허가를 받은 경우', '긴급자동차와 어린이통학버스 등 특별 허가 차량만', '야간에만 통행 가능'],
    answer: 2,
    explanation: '보행자 전용도로는 긴급자동차, 어린이통학버스 등 법률에서 정한 특별 차량만 통행할 수 있습니다.',
    difficulty: '상',
    tags: ['보행자', '전용도로'],
    translations: {
      vi: {
        question: 'Trường hợp nào xe cơ giới được đi trên đường dành cho người đi bộ?',
        options: ['Được đi bất cứ lúc nào', 'Khi được cảnh sát cho phép', 'Chỉ xe khẩn cấp và xe đưa đón học sinh được phép đặc biệt', 'Chỉ được đi vào ban đêm'],
        explanation: 'Đường dành cho người đi bộ chỉ cho phép xe khẩn cấp, xe đưa đón học sinh và các xe được phép đặc biệt theo quy định.'
      },
      th: {
        question: 'กรณีใดที่รถยนต์สามารถวิ่งบนถนนสำหรับคนเดินเท้าได้?',
        options: ['วิ่งได้ตลอดเวลา', 'เมื่อได้รับอนุญาตจากตำรวจ', 'เฉพาะรถฉุกเฉินและรถรับส่งนักเรียนที่ได้รับอนุญาตพิเศษ', 'วิ่งได้เฉพาะตอนกลางคืน'],
        explanation: 'ถนนสำหรับคนเดินเท้า อนุญาตเฉพาะรถฉุกเฉิน รถรับส่งนักเรียน และรถที่ได้รับอนุญาตพิเศษตามกฎหมาย'
      }
    }
  }
];

export default drivingQuestions;
