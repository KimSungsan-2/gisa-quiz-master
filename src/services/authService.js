// 인증 서비스
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth';
import { auth, googleProvider, isFirebaseConfigured } from './firebase';

export const authService = {
  // Firebase가 설정되어 있는지 확인
  isConfigured() {
    return isFirebaseConfigured;
  },

  // Google 로그인
  async signInWithGoogle() {
    if (!isFirebaseConfigured || !auth) {
      return { user: null, error: 'Firebase가 설정되지 않았습니다. .env 파일을 확인하세요.' };
    }
    try {
      const result = await signInWithPopup(auth, googleProvider);
      return { user: result.user, error: null };
    } catch (error) {
      return { user: null, error: error.message };
    }
  },

  // 이메일 로그인
  async signInWithEmail(email, password) {
    if (!isFirebaseConfigured || !auth) {
      return { user: null, error: 'Firebase가 설정되지 않았습니다. .env 파일을 확인하세요.' };
    }
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      return { user: result.user, error: null };
    } catch (error) {
      let errorMessage = '로그인에 실패했습니다.';
      if (error.code === 'auth/user-not-found') {
        errorMessage = '등록되지 않은 이메일입니다.';
      } else if (error.code === 'auth/wrong-password') {
        errorMessage = '비밀번호가 올바르지 않습니다.';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = '유효하지 않은 이메일 형식입니다.';
      }
      return { user: null, error: errorMessage };
    }
  },

  // 이메일 회원가입
  async signUpWithEmail(email, password, displayName) {
    if (!isFirebaseConfigured || !auth) {
      return { user: null, error: 'Firebase가 설정되지 않았습니다. .env 파일을 확인하세요.' };
    }
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      // 사용자 이름 설정
      if (displayName) {
        await updateProfile(result.user, { displayName });
      }
      return { user: result.user, error: null };
    } catch (error) {
      let errorMessage = '회원가입에 실패했습니다.';
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = '이미 사용 중인 이메일입니다.';
      } else if (error.code === 'auth/weak-password') {
        errorMessage = '비밀번호는 6자 이상이어야 합니다.';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = '유효하지 않은 이메일 형식입니다.';
      }
      return { user: null, error: errorMessage };
    }
  },

  // 로그아웃
  async signOut() {
    if (!isFirebaseConfigured || !auth) {
      return { error: null };
    }
    try {
      await firebaseSignOut(auth);
      return { error: null };
    } catch (error) {
      return { error: error.message };
    }
  },

  // 인증 상태 변화 감지
  onAuthStateChange(callback) {
    if (!isFirebaseConfigured || !auth) {
      // Firebase가 없으면 즉시 null 사용자로 콜백 호출
      setTimeout(() => callback(null), 0);
      return () => {}; // 빈 unsubscribe 함수
    }
    return onAuthStateChanged(auth, callback);
  },

  // 현재 사용자 가져오기
  getCurrentUser() {
    if (!isFirebaseConfigured || !auth) {
      return null;
    }
    return auth.currentUser;
  }
};

export default authService;
