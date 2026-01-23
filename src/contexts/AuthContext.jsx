// 인증 Context
import React, { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '../services/authService';
import { firestoreService } from '../services/firestoreService';

const AuthContext = createContext(null);

// LocalStorage 키
const LS_KEYS = {
  WRONG_ANSWERS: 'wrongAnswers',
  BOOKMARKS: 'bookmarks',
  STATS: 'stats',
  MIGRATED: 'firebaseMigrated'
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState(null);

  // 인증 상태 변화 감지
  useEffect(() => {
    const unsubscribe = authService.onAuthStateChange(async (firebaseUser) => {
      setUser(firebaseUser);

      if (firebaseUser) {
        // 사용자 데이터 로드
        await loadUserData(firebaseUser);
      } else {
        // 로그아웃 시 로컬 데이터 사용
        loadLocalData();
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Firestore에서 사용자 데이터 로드
  const loadUserData = async (firebaseUser) => {
    const { data, error } = await firestoreService.getUserData(firebaseUser.uid);

    if (error) {
      console.error('사용자 데이터 로드 실패:', error);
      loadLocalData();
      return;
    }

    if (data) {
      setUserData({
        stats: data.stats || getDefaultStats(),
        wrongAnswers: data.wrongAnswers || [],
        bookmarks: data.bookmarks || []
      });

      // 마이그레이션 체크
      await checkAndMigrate(firebaseUser.uid, data);
    } else {
      // 신규 사용자 - Firestore에 초기 데이터 생성
      await firestoreService.createUserData(firebaseUser.uid, {
        email: firebaseUser.email,
        displayName: firebaseUser.displayName,
        photoURL: firebaseUser.photoURL
      });

      // 로컬 데이터가 있으면 마이그레이션
      await migrateLocalData(firebaseUser.uid);
    }
  };

  // 로컬 데이터 로드 (비로그인 상태)
  const loadLocalData = () => {
    try {
      const stats = JSON.parse(localStorage.getItem(LS_KEYS.STATS) || '{}');
      const wrongAnswers = JSON.parse(localStorage.getItem(LS_KEYS.WRONG_ANSWERS) || '[]');
      const bookmarks = JSON.parse(localStorage.getItem(LS_KEYS.BOOKMARKS) || '[]');

      setUserData({
        stats: Object.keys(stats).length > 0 ? stats : getDefaultStats(),
        wrongAnswers,
        bookmarks
      });
    } catch (error) {
      console.error('로컬 데이터 로드 실패:', error);
      setUserData({
        stats: getDefaultStats(),
        wrongAnswers: [],
        bookmarks: []
      });
    }
  };

  // 로컬 데이터 Firestore로 마이그레이션
  const migrateLocalData = async (userId) => {
    const isMigrated = localStorage.getItem(LS_KEYS.MIGRATED) === 'true';
    if (isMigrated) return;

    try {
      const localStats = JSON.parse(localStorage.getItem(LS_KEYS.STATS) || '{}');
      const localWrongAnswers = JSON.parse(localStorage.getItem(LS_KEYS.WRONG_ANSWERS) || '[]');
      const localBookmarks = JSON.parse(localStorage.getItem(LS_KEYS.BOOKMARKS) || '[]');

      // 로컬에 데이터가 있으면 마이그레이션
      if (Object.keys(localStats).length > 0 || localWrongAnswers.length > 0 || localBookmarks.length > 0) {
        await firestoreService.saveAllUserData(userId, {
          stats: localStats,
          wrongAnswers: localWrongAnswers,
          bookmarks: localBookmarks
        });

        setUserData({
          stats: localStats,
          wrongAnswers: localWrongAnswers,
          bookmarks: localBookmarks
        });

        localStorage.setItem(LS_KEYS.MIGRATED, 'true');
      } else {
        setUserData({
          stats: getDefaultStats(),
          wrongAnswers: [],
          bookmarks: []
        });
      }
    } catch (error) {
      console.error('마이그레이션 실패:', error);
      loadLocalData();
    }
  };

  // 기존 데이터와 로컬 데이터 병합 체크
  const checkAndMigrate = async (userId, existingData) => {
    const isMigrated = localStorage.getItem(LS_KEYS.MIGRATED) === 'true';
    if (isMigrated) return;

    try {
      const localStats = JSON.parse(localStorage.getItem(LS_KEYS.STATS) || '{}');
      const localWrongAnswers = JSON.parse(localStorage.getItem(LS_KEYS.WRONG_ANSWERS) || '[]');
      const localBookmarks = JSON.parse(localStorage.getItem(LS_KEYS.BOOKMARKS) || '[]');

      // 로컬에 데이터가 있으면 병합
      if (Object.keys(localStats).length > 0 || localWrongAnswers.length > 0 || localBookmarks.length > 0) {
        const mergedStats = mergeStats(existingData.stats, localStats);
        const mergedWrongAnswers = [...new Set([...existingData.wrongAnswers, ...localWrongAnswers])];
        const mergedBookmarks = [...new Set([...existingData.bookmarks, ...localBookmarks])];

        await firestoreService.saveAllUserData(userId, {
          stats: mergedStats,
          wrongAnswers: mergedWrongAnswers,
          bookmarks: mergedBookmarks
        });

        setUserData({
          stats: mergedStats,
          wrongAnswers: mergedWrongAnswers,
          bookmarks: mergedBookmarks
        });

        localStorage.setItem(LS_KEYS.MIGRATED, 'true');
      }
    } catch (error) {
      console.error('마이그레이션 체크 실패:', error);
    }
  };

  // 통계 병합 함수
  const mergeStats = (existing, local) => {
    if (!existing || Object.keys(existing).length === 0) return local;
    if (!local || Object.keys(local).length === 0) return existing;

    return {
      total: (existing.total || 0) + (local.total || 0),
      correct: (existing.correct || 0) + (local.correct || 0),
      streak: local.streak || existing.streak || 0,
      maxStreak: Math.max(existing.maxStreak || 0, local.maxStreak || 0),
      lastStudied: local.lastStudied || existing.lastStudied,
      studyDays: [...new Set([...(existing.studyDays || []), ...(local.studyDays || [])])].sort(),
      bySubject: mergeByKey(existing.bySubject, local.bySubject),
      byDifficulty: mergeByKey(existing.byDifficulty, local.byDifficulty),
      timeSpent: { ...(existing.timeSpent || {}), ...(local.timeSpent || {}) }
    };
  };

  const mergeByKey = (existing = {}, local = {}) => {
    const allKeys = new Set([...Object.keys(existing), ...Object.keys(local)]);
    const merged = {};
    allKeys.forEach(key => {
      merged[key] = {
        total: (existing[key]?.total || 0) + (local[key]?.total || 0),
        correct: (existing[key]?.correct || 0) + (local[key]?.correct || 0)
      };
    });
    return merged;
  };

  // 기본 통계 데이터
  const getDefaultStats = () => ({
    total: 0,
    correct: 0,
    streak: 0,
    maxStreak: 0,
    lastStudied: null,
    studyDays: [],
    bySubject: {},
    byDifficulty: {},
    timeSpent: {}
  });

  // Google 로그인
  const signInWithGoogle = async () => {
    setAuthError(null);
    const { user: firebaseUser, error } = await authService.signInWithGoogle();
    if (error) {
      setAuthError(error);
      return false;
    }
    return true;
  };

  // 이메일 로그인
  const signInWithEmail = async (email, password) => {
    setAuthError(null);
    const { user: firebaseUser, error } = await authService.signInWithEmail(email, password);
    if (error) {
      setAuthError(error);
      return false;
    }
    return true;
  };

  // 이메일 회원가입
  const signUpWithEmail = async (email, password, displayName) => {
    setAuthError(null);
    const { user: firebaseUser, error } = await authService.signUpWithEmail(email, password, displayName);
    if (error) {
      setAuthError(error);
      return false;
    }
    return true;
  };

  // 로그아웃
  const signOut = async () => {
    await authService.signOut();
    setUserData(null);
    loadLocalData();
  };

  // 통계 업데이트
  const updateStats = async (newStats) => {
    setUserData(prev => ({ ...prev, stats: newStats }));

    // 로컬에도 저장 (오프라인 지원)
    localStorage.setItem(LS_KEYS.STATS, JSON.stringify(newStats));

    // 로그인 상태면 Firestore에도 저장
    if (user) {
      await firestoreService.updateStats(user.uid, newStats);
    }
  };

  // 오답 업데이트
  const updateWrongAnswers = async (newWrongAnswers) => {
    setUserData(prev => ({ ...prev, wrongAnswers: newWrongAnswers }));
    localStorage.setItem(LS_KEYS.WRONG_ANSWERS, JSON.stringify(newWrongAnswers));

    if (user) {
      await firestoreService.saveAllUserData(user.uid, {
        ...userData,
        wrongAnswers: newWrongAnswers
      });
    }
  };

  // 북마크 업데이트
  const updateBookmarks = async (newBookmarks) => {
    setUserData(prev => ({ ...prev, bookmarks: newBookmarks }));
    localStorage.setItem(LS_KEYS.BOOKMARKS, JSON.stringify(newBookmarks));

    if (user) {
      await firestoreService.saveAllUserData(user.uid, {
        ...userData,
        bookmarks: newBookmarks
      });
    }
  };

  // 북마크 토글
  const toggleBookmark = async (questionId) => {
    const isBookmarked = userData?.bookmarks?.includes(questionId);
    const newBookmarks = isBookmarked
      ? userData.bookmarks.filter(id => id !== questionId)
      : [...(userData?.bookmarks || []), questionId];

    await updateBookmarks(newBookmarks);
    return !isBookmarked;
  };

  const value = {
    user,
    userData,
    loading,
    authError,
    isAuthenticated: !!user,
    signInWithGoogle,
    signInWithEmail,
    signUpWithEmail,
    signOut,
    updateStats,
    updateWrongAnswers,
    updateBookmarks,
    toggleBookmark
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export default AuthContext;
