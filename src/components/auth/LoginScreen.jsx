// 로그인 화면 컴포넌트
import React, { useState } from 'react';
import { Mail, Lock, User, ArrowRight, AlertCircle } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

function LoginScreen({ onGuestMode }) {
  const { signInWithGoogle, signInWithKakao, signInWithNaver, signInWithEmail, signUpWithEmail, authError } = useAuth();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError('');
    const success = await signInWithGoogle();
    if (!success) {
      setError(authError || 'Google 로그인에 실패했습니다.');
    }
    setLoading(false);
  };

  const handleKakaoLogin = async () => {
    setLoading(true);
    setError('');
    const success = await signInWithKakao();
    if (!success) {
      setError(authError || '카카오 로그인에 실패했습니다.');
    }
    setLoading(false);
  };

  const handleNaverLogin = async () => {
    setLoading(true);
    setError('');
    const success = await signInWithNaver();
    if (!success) {
      setError(authError || '네이버 로그인에 실패했습니다.');
    }
    setLoading(false);
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    let success;
    if (isSignUp) {
      success = await signUpWithEmail(email, password, displayName);
    } else {
      success = await signInWithEmail(email, password);
    }

    if (!success) {
      setError(authError || (isSignUp ? '회원가입에 실패했습니다.' : '로그인에 실패했습니다.'));
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        {/* 로고 */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">📚</div>
          <h1 className="text-2xl font-bold text-gray-800">기사 자격증 학습 시스템</h1>
          <p className="text-gray-500 mt-2">로그인하여 학습 기록을 관리하세요</p>
        </div>

        {/* 에러 메시지 */}
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2 text-red-600">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm">{error}</span>
          </div>
        )}

        {/* Google 로그인 */}
        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 rounded-xl font-medium text-gray-700 transition-all disabled:opacity-50"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          <span>Google로 계속하기</span>
        </button>

        {/* 카카오 로그인 */}
        <button
          onClick={handleKakaoLogin}
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl font-medium transition-all disabled:opacity-50 mt-3"
          style={{ backgroundColor: '#FEE500', color: '#000000' }}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#000000"
              d="M12 3C6.477 3 2 6.463 2 10.691c0 2.726 1.8 5.117 4.508 6.467-.152.554-.55 2.013-.63 2.325-.098.383.14.377.296.274.122-.08 1.942-1.318 2.726-1.855.692.097 1.404.149 2.1.149 5.523 0 10-3.463 10-7.691S17.523 3 12 3z"
            />
          </svg>
          <span>카카오로 계속하기</span>
        </button>

        {/* 네이버 로그인 */}
        <button
          onClick={handleNaverLogin}
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl font-medium text-white transition-all disabled:opacity-50 mt-3"
          style={{ backgroundColor: '#03C75A' }}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#FFFFFF"
              d="M16.273 12.845L7.376 3H3v18h4.726V12.155L16.624 21H21V3h-4.727z"
            />
          </svg>
          <span>네이버로 계속하기</span>
        </button>

        {/* 구분선 */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-gray-400 text-sm">또는</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* 이메일 로그인/회원가입 폼 */}
        <form onSubmit={handleEmailSubmit} className="space-y-4">
          {isSignUp && (
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="이름"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-all"
                required={isSignUp}
              />
            </div>
          )}

          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              placeholder="이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-all"
              required
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="password"
              placeholder="비밀번호 (6자 이상)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-all"
              required
              minLength={6}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition-all disabled:opacity-50"
          >
            <span>{isSignUp ? '회원가입' : '로그인'}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        {/* 로그인/회원가입 전환 */}
        <p className="text-center text-gray-500 mt-4">
          {isSignUp ? '이미 계정이 있으신가요?' : '계정이 없으신가요?'}{' '}
          <button
            onClick={() => {
              setIsSignUp(!isSignUp);
              setError('');
            }}
            className="text-indigo-600 font-semibold hover:underline"
          >
            {isSignUp ? '로그인' : '회원가입'}
          </button>
        </p>

        {/* 게스트 모드 */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <button
            onClick={onGuestMode}
            className="w-full px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-medium transition-all"
          >
            로그인 없이 계속하기
          </button>
          <p className="text-center text-gray-400 text-xs mt-2">
            학습 기록은 이 기기에만 저장됩니다
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
