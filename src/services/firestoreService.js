// Firestore 서비스
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  serverTimestamp
} from 'firebase/firestore';
import { db, isFirebaseConfigured } from './firebase';

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

export const firestoreService = {
  // 사용자 데이터 문서 참조
  getUserDocRef(userId) {
    if (!isFirebaseConfigured || !db) return null;
    return doc(db, 'users', userId);
  },

  // 사용자 데이터 가져오기
  async getUserData(userId) {
    if (!isFirebaseConfigured || !db) {
      return { data: null, error: null };
    }
    try {
      const docRef = this.getUserDocRef(userId);
      if (!docRef) return { data: null, error: null };

      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return { data: docSnap.data(), error: null };
      }
      return { data: null, error: null };
    } catch (error) {
      console.error('사용자 데이터 가져오기 실패:', error);
      return { data: null, error: error.message };
    }
  },

  // 사용자 초기 데이터 생성
  async createUserData(userId, userData = {}) {
    if (!isFirebaseConfigured || !db) {
      return { error: null };
    }
    try {
      const docRef = this.getUserDocRef(userId);
      if (!docRef) return { error: null };

      await setDoc(docRef, {
        profile: {
          email: userData.email || '',
          displayName: userData.displayName || '',
          photoURL: userData.photoURL || '',
          createdAt: serverTimestamp()
        },
        stats: getDefaultStats(),
        wrongAnswers: [],
        bookmarks: [],
        updatedAt: serverTimestamp()
      });
      return { error: null };
    } catch (error) {
      console.error('사용자 데이터 생성 실패:', error);
      return { error: error.message };
    }
  },

  // 통계 업데이트
  async updateStats(userId, stats) {
    if (!isFirebaseConfigured || !db) {
      return { error: null };
    }
    try {
      const docRef = this.getUserDocRef(userId);
      if (!docRef) return { error: null };

      await updateDoc(docRef, {
        stats,
        updatedAt: serverTimestamp()
      });
      return { error: null };
    } catch (error) {
      console.error('통계 업데이트 실패:', error);
      return { error: error.message };
    }
  },

  // 오답 추가
  async addWrongAnswer(userId, questionId) {
    if (!isFirebaseConfigured || !db) {
      return { error: null };
    }
    try {
      const docRef = this.getUserDocRef(userId);
      if (!docRef) return { error: null };

      await updateDoc(docRef, {
        wrongAnswers: arrayUnion(questionId),
        updatedAt: serverTimestamp()
      });
      return { error: null };
    } catch (error) {
      console.error('오답 추가 실패:', error);
      return { error: error.message };
    }
  },

  // 오답 제거 (정답 시)
  async removeWrongAnswer(userId, questionId) {
    if (!isFirebaseConfigured || !db) {
      return { error: null };
    }
    try {
      const docRef = this.getUserDocRef(userId);
      if (!docRef) return { error: null };

      await updateDoc(docRef, {
        wrongAnswers: arrayRemove(questionId),
        updatedAt: serverTimestamp()
      });
      return { error: null };
    } catch (error) {
      console.error('오답 제거 실패:', error);
      return { error: error.message };
    }
  },

  // 북마크 토글
  async toggleBookmark(userId, questionId, isCurrentlyBookmarked) {
    if (!isFirebaseConfigured || !db) {
      return { error: null };
    }
    try {
      const docRef = this.getUserDocRef(userId);
      if (!docRef) return { error: null };

      await updateDoc(docRef, {
        bookmarks: isCurrentlyBookmarked
          ? arrayRemove(questionId)
          : arrayUnion(questionId),
        updatedAt: serverTimestamp()
      });
      return { error: null };
    } catch (error) {
      console.error('북마크 토글 실패:', error);
      return { error: error.message };
    }
  },

  // 오답 및 북마크 일괄 업데이트
  async updateWrongAnswersAndBookmarks(userId, wrongAnswers, bookmarks) {
    if (!isFirebaseConfigured || !db) {
      return { error: null };
    }
    try {
      const docRef = this.getUserDocRef(userId);
      if (!docRef) return { error: null };

      await updateDoc(docRef, {
        wrongAnswers,
        bookmarks,
        updatedAt: serverTimestamp()
      });
      return { error: null };
    } catch (error) {
      console.error('데이터 업데이트 실패:', error);
      return { error: error.message };
    }
  },

  // 전체 사용자 데이터 저장 (마이그레이션용)
  async saveAllUserData(userId, data) {
    if (!isFirebaseConfigured || !db) {
      return { error: null };
    }
    try {
      const docRef = this.getUserDocRef(userId);
      if (!docRef) return { error: null };

      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // 기존 데이터가 있으면 병합
        await updateDoc(docRef, {
          ...data,
          updatedAt: serverTimestamp()
        });
      } else {
        // 새 데이터 생성
        await setDoc(docRef, {
          ...data,
          updatedAt: serverTimestamp()
        });
      }
      return { error: null };
    } catch (error) {
      console.error('전체 데이터 저장 실패:', error);
      return { error: error.message };
    }
  }
};

export default firestoreService;
