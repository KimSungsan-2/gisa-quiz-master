import { ArrowLeft, Check, Star, BarChart3, Calendar, TrendingUp, Award, Zap, Shield } from 'lucide-react';

export default function PremiumPage({ onBack, onSubscribe }) {
  return (
    <div className="min-h-screen bg-indigo-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* 헤더 */}
        <div className="mb-8 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            돌아가기
          </button>
        </div>

        {/* 히어로 섹션 */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-2 rounded-full mb-6">
            <Star className="w-5 h-5 fill-white" />
            <span className="font-bold">프리미엄 플랜</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-4 text-indigo-600">
            광고 없이 집중하고,
            <br />
            약점을 정확히 파악하세요
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            하루 커피 값의 1/3로 합격 확률을 높이세요
          </p>

          {/* 가격 카드 */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-2xl mx-auto mb-12">
            <div className="text-center mb-8">
              <div className="text-5xl md:text-7xl font-black text-gray-800 mb-2">
                3,900<span className="text-3xl md:text-4xl">원</span>
              </div>
              <div className="text-gray-500 text-lg">/ 월</div>
              <div className="text-indigo-600 font-semibold mt-2">하루 130원</div>
            </div>

            <button
              onClick={onSubscribe}
              className="w-full px-8 py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold text-xl transition-all transform hover:-translate-y-1 shadow-lg mb-4"
            >
              지금 구독하기
            </button>
            <p className="text-sm text-gray-500 text-center">
              언제든지 취소 가능 · 남은 기간까지 사용
            </p>
          </div>
        </div>

        {/* 혜택 섹션 */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-gray-800">
            프리미엄 혜택
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 광고 제거 */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">광고 완전 제거</h3>
              <p className="text-gray-600 leading-relaxed">
                모든 페이지에서 광고가 사라집니다. 깨끗한 UI로 집중력을 극대화하세요.
              </p>
            </div>

            {/* 상세 통계 */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">상세 통계 대시보드</h3>
              <p className="text-gray-600 leading-relaxed">
                과목별, 난이도별, 태그별 정답률을 한눈에 확인하고 약점을 파악하세요.
              </p>
            </div>

            {/* 약점 분석 */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">약점 분석</h3>
              <p className="text-gray-600 leading-relaxed">
                정답률 50% 미만 주제를 자동으로 찾아내고, 집중 학습을 추천합니다.
              </p>
            </div>

            {/* 학습 달력 */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">학습 달력</h3>
              <p className="text-gray-600 leading-relaxed">
                GitHub 스타일 히트맵으로 학습 패턴을 시각화하고 동기부여를 얻으세요.
              </p>
            </div>

            {/* 합격률 계산기 */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">예상 합격률</h3>
              <p className="text-gray-600 leading-relaxed">
                현재 실력으로 예상되는 점수와 합격 확률을 실시간으로 확인하세요.
              </p>
            </div>

            {/* 우선 지원 */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">우선 지원</h3>
              <p className="text-gray-600 leading-relaxed">
                문의 시 24시간 내 답변 보장. 기능 요청과 버그 수정을 우선 처리합니다.
              </p>
            </div>
          </div>
        </div>

        {/* 비교 테이블 */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-gray-800">
            무료 vs 프리미엄
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 text-gray-600 font-semibold">기능</th>
                  <th className="text-center py-4 px-4 text-gray-600 font-semibold">무료</th>
                  <th className="text-center py-4 px-4 text-indigo-600 font-semibold">프리미엄</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-medium">전체 문제 접근 (800문제)</td>
                  <td className="text-center py-4 px-4"><Check className="w-6 h-6 text-green-500 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><Check className="w-6 h-6 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-medium">기본 통계</td>
                  <td className="text-center py-4 px-4"><Check className="w-6 h-6 text-green-500 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><Check className="w-6 h-6 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 font-medium">오답노트 & 북마크</td>
                  <td className="text-center py-4 px-4"><Check className="w-6 h-6 text-green-500 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><Check className="w-6 h-6 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-100 bg-indigo-50">
                  <td className="py-4 px-4 font-medium">광고 제거</td>
                  <td className="text-center py-4 px-4 text-gray-400">-</td>
                  <td className="text-center py-4 px-4"><Check className="w-6 h-6 text-indigo-600 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-100 bg-indigo-50">
                  <td className="py-4 px-4 font-medium">상세 통계 대시보드</td>
                  <td className="text-center py-4 px-4 text-gray-400">-</td>
                  <td className="text-center py-4 px-4"><Check className="w-6 h-6 text-indigo-600 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-100 bg-indigo-50">
                  <td className="py-4 px-4 font-medium">약점 분석</td>
                  <td className="text-center py-4 px-4 text-gray-400">-</td>
                  <td className="text-center py-4 px-4"><Check className="w-6 h-6 text-indigo-600 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-100 bg-indigo-50">
                  <td className="py-4 px-4 font-medium">학습 달력 히트맵</td>
                  <td className="text-center py-4 px-4 text-gray-400">-</td>
                  <td className="text-center py-4 px-4"><Check className="w-6 h-6 text-indigo-600 mx-auto" /></td>
                </tr>
                <tr className="bg-indigo-50">
                  <td className="py-4 px-4 font-medium">예상 합격률 계산기</td>
                  <td className="text-center py-4 px-4 text-gray-400">-</td>
                  <td className="text-center py-4 px-4"><Check className="w-6 h-6 text-indigo-600 mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-gray-800">
            자주 묻는 질문
          </h2>

          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-800">어떻게 결제하나요?</h3>
              <p className="text-gray-600 leading-relaxed">
                토스페이먼츠를 통해 간편하게 결제할 수 있습니다. 카드, 계좌이체, 간편결제(카카오페이, 네이버페이 등) 모두 지원합니다.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-800">언제든지 취소할 수 있나요?</h3>
              <p className="text-gray-600 leading-relaxed">
                네, 언제든지 취소 가능합니다. 취소 후에도 남은 기간까지는 프리미엄 혜택을 계속 사용하실 수 있습니다.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-800">환불 정책은 어떻게 되나요?</h3>
              <p className="text-gray-600 leading-relaxed">
                구독 후 7일 이내에는 100% 환불이 가능합니다. 7일 이후에는 남은 기간에 대해 일할 계산하여 환불해드립니다.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-800">프리미엄이 정말 도움이 되나요?</h3>
              <p className="text-gray-600 leading-relaxed">
                광고 없이 집중할 수 있고, 상세한 통계로 약점을 정확히 파악할 수 있습니다. 시험 한 번 떨어지면 응시료가 19,400원이니, 3,900원은 저렴한 투자입니다.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-800">기업용 플랜이 있나요?</h3>
              <p className="text-gray-600 leading-relaxed">
                현재는 개인용 플랜만 제공하고 있습니다. 기업용 플랜이 필요하시면 문의해주세요.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-indigo-600 rounded-xl p-12 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            지금 시작하세요
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            합격을 향한 첫 걸음, 프리미엄과 함께
          </p>
          <button
            onClick={onSubscribe}
            className="px-12 py-5 bg-white hover:bg-gray-100 text-indigo-600 rounded-lg font-bold text-xl transition-all transform hover:-translate-y-1 shadow-lg"
          >
            월 3,900원으로 시작하기
          </button>
        </div>
      </div>
    </div>
  );
}
