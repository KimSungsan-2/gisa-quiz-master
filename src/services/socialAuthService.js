// 소셜 로그인 서비스 (카카오, 네이버)

const SOCIAL_USER_KEY = 'socialUser';

// 카카오 SDK 초기화
function initKakao() {
  const kakaoKey = import.meta.env.VITE_KAKAO_JS_KEY;
  if (!kakaoKey) {
    console.warn('카카오 JavaScript 키가 설정되지 않았습니다.');
    return false;
  }
  if (window.Kakao && !window.Kakao.isInitialized()) {
    window.Kakao.init(kakaoKey);
  }
  return window.Kakao?.isInitialized() || false;
}

// 카카오 로그인
async function signInWithKakao() {
  if (!initKakao()) {
    return { user: null, error: '카카오 SDK가 초기화되지 않았습니다. VITE_KAKAO_JS_KEY를 확인하세요.' };
  }

  return new Promise((resolve) => {
    window.Kakao.Auth.login({
      success: () => {
        window.Kakao.API.request({
          url: '/v2/user/me',
          success: (res) => {
            const user = {
              uid: `kakao_${res.id}`,
              displayName: res.kakao_account?.profile?.nickname || '카카오 사용자',
              photoURL: res.kakao_account?.profile?.profile_image_url || null,
              email: res.kakao_account?.email || null,
              provider: 'kakao'
            };
            saveSocialUser(user);
            resolve({ user, error: null });
          },
          fail: (error) => {
            resolve({ user: null, error: '카카오 사용자 정보를 가져올 수 없습니다.' });
          }
        });
      },
      fail: (error) => {
        resolve({ user: null, error: '카카오 로그인에 실패했습니다.' });
      }
    });
  });
}

// 네이버 로그인 (팝업 방식)
function signInWithNaver() {
  const clientId = import.meta.env.VITE_NAVER_CLIENT_ID;
  if (!clientId) {
    return Promise.resolve({ user: null, error: '네이버 Client ID가 설정되지 않았습니다. VITE_NAVER_CLIENT_ID를 확인하세요.' });
  }

  return new Promise((resolve) => {
    const state = Math.random().toString(36).substring(2);
    const redirectUri = `${window.location.origin}/callback/naver`;
    const authUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=token&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&state=${state}`;

    const width = 500;
    const height = 600;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;

    const popup = window.open(
      authUrl,
      'naver_login',
      `width=${width},height=${height},left=${left},top=${top}`
    );

    if (!popup) {
      resolve({ user: null, error: '팝업이 차단되었습니다. 팝업 차단을 해제해주세요.' });
      return;
    }

    // 팝업에서 콜백 결과 수신
    const handleMessage = (event) => {
      if (event.origin !== window.location.origin) return;
      if (event.data?.type === 'naver_login') {
        window.removeEventListener('message', handleMessage);
        if (event.data.error) {
          resolve({ user: null, error: event.data.error });
        } else {
          const user = event.data.user;
          saveSocialUser(user);
          resolve({ user, error: null });
        }
      }
    };

    window.addEventListener('message', handleMessage);

    // 팝업이 닫히면 정리
    const checkPopup = setInterval(() => {
      if (popup.closed) {
        clearInterval(checkPopup);
        window.removeEventListener('message', handleMessage);
        // 메시지를 받지 못한 경우
        resolve({ user: null, error: null }); // 사용자가 취소한 것으로 간주
      }
    }, 500);
  });
}

// 네이버 콜백 처리 (팝업 윈도우에서 호출)
async function handleNaverCallback() {
  const hash = window.location.hash.substring(1);
  const params = new URLSearchParams(hash);
  const accessToken = params.get('access_token');

  if (!accessToken) {
    window.opener?.postMessage(
      { type: 'naver_login', error: '네이버 인증에 실패했습니다.' },
      window.location.origin
    );
    window.close();
    return;
  }

  try {
    // 네이버 프로필 API는 CORS 제한이 있어서 프록시 필요
    // 클라이언트에서 직접 호출 시 CORS 에러 발생
    // 대안: 네이버 로그인 시 받은 토큰 정보만 사용하거나, 프록시 서버 사용
    const response = await fetch('https://openapi.naver.com/v1/nid/me', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    if (!response.ok) throw new Error('프로필 조회 실패');

    const data = await response.json();
    const profile = data.response;

    const user = {
      uid: `naver_${profile.id}`,
      displayName: profile.name || profile.nickname || '네이버 사용자',
      photoURL: profile.profile_image || null,
      email: profile.email || null,
      provider: 'naver'
    };

    window.opener?.postMessage(
      { type: 'naver_login', user },
      window.location.origin
    );
  } catch (error) {
    window.opener?.postMessage(
      { type: 'naver_login', error: '네이버 사용자 정보를 가져올 수 없습니다.' },
      window.location.origin
    );
  }

  window.close();
}

// 소셜 사용자 정보 저장 (세션 유지용)
function saveSocialUser(user) {
  localStorage.setItem(SOCIAL_USER_KEY, JSON.stringify(user));
}

// 저장된 소셜 사용자 정보 로드
function loadSocialUser() {
  try {
    const data = localStorage.getItem(SOCIAL_USER_KEY);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
}

// 소셜 로그아웃
function socialSignOut() {
  localStorage.removeItem(SOCIAL_USER_KEY);

  // 카카오 로그아웃
  if (window.Kakao?.isInitialized() && window.Kakao.Auth.getAccessToken()) {
    window.Kakao.Auth.logout();
  }
}

// 네이버 콜백 URL인지 확인
function isNaverCallback() {
  return window.location.pathname === '/callback/naver' && window.location.hash.includes('access_token');
}

export const socialAuthService = {
  signInWithKakao,
  signInWithNaver,
  handleNaverCallback,
  isNaverCallback,
  loadSocialUser,
  socialSignOut
};

export default socialAuthService;
