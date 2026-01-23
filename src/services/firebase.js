// Firebase 초기화
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Firebase 설정이 있는지 확인
const isFirebaseConfigured = firebaseConfig.apiKey && firebaseConfig.projectId;

let app = null;
let auth = null;
let db = null;
let googleProvider = null;

if (isFirebaseConfigured) {
  try {
    // Firebase 앱 초기화
    app = initializeApp(firebaseConfig);

    // Auth 인스턴스
    auth = getAuth(app);

    // Firestore 인스턴스
    db = getFirestore(app);

    // Google 로그인 Provider
    googleProvider = new GoogleAuthProvider();
    googleProvider.setCustomParameters({
      prompt: 'select_account'
    });
  } catch (error) {
    console.warn('Firebase 초기화 실패:', error.message);
  }
} else {
  console.info('Firebase 설정이 없습니다. 로컬 모드로 동작합니다.');
}

export { auth, db, googleProvider, isFirebaseConfigured };
export default app;
