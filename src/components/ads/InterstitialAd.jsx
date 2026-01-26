import { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

export default function InterstitialAd({ onClose, autoCloseDelay = 3000 }) {
  const { user } = useAuth();
  const [countdown, setCountdown] = useState(Math.ceil(autoCloseDelay / 1000));

  // 프리미엄 사용자는 광고 안 보임
  const isPremium = user?.subscription?.status === 'active';

  useEffect(() => {
    // 프리미엄이면 즉시 닫기
    if (isPremium) {
      onClose?.();
      return;
    }

    // 카운트다운
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // 자동 닫기 타이머
    const timer = setTimeout(() => {
      onClose?.();
    }, autoCloseDelay);

    return () => {
      clearTimeout(timer);
      clearInterval(countdownInterval);
    };
  }, [isPremium, onClose, autoCloseDelay]);

  // 프리미엄 사용자는 아무것도 렌더링 안 함
  if (isPremium) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
      {/* 닫기 버튼 */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
      >
        {countdown > 0 ? (
          <>
            <span className="text-sm">광고 {countdown}초 후 닫힘</span>
          </>
        ) : (
          <>
            <span className="text-sm">광고 닫기</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </>
        )}
      </button>

      {/* 광고 영역 */}
      <div className="max-w-3xl w-full mx-4">
        <ins
          className="adsbygoogle"
          style={{
            display: 'block',
            minHeight: '250px'
          }}
          data-ad-client="ca-pub-6005351413282743"
          data-ad-slot="1234567890"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>

      {/* 프리미엄 안내 */}
      <div className="absolute bottom-8 text-center">
        <p className="text-white/70 text-sm mb-2">광고 없이 집중하고 싶으신가요?</p>
        <button className="text-indigo-400 hover:text-indigo-300 text-sm underline transition-colors">
          ⭐ 프리미엄으로 광고 제거하기 (월 3,900원)
        </button>
      </div>
    </div>
  );
}
