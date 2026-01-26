import { useEffect, useRef } from 'react';
import { useAuth } from '../../contexts/AuthContext';

export default function AdBanner({
  slot = '1234567890',
  format = 'auto',
  responsive = true,
  style = {},
  className = ''
}) {
  const { user } = useAuth();
  const adRef = useRef(null);

  // 프리미엄 사용자는 광고 안 보임
  const isPremium = user?.subscription?.status === 'active';

  useEffect(() => {
    if (isPremium) return;

    try {
      // AdSense 광고 푸시
      if (window.adsbygoogle && adRef.current) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, [isPremium]);

  // 프리미엄 사용자는 아무것도 렌더링 안 함
  if (isPremium) {
    return null;
  }

  return (
    <div className={`ad-container my-4 flex justify-center ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{
          display: 'block',
          ...style
        }}
        data-ad-client="ca-pub-6005351413282743"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  );
}
