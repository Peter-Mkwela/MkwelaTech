// app/auth/reset-password/page.tsx
'use client';

import { Suspense } from 'react';
import ResetPasswordContent from './ResetPasswordContent';

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-gradient-to-br from-[#000066] via-[#330099] to-[#FFA500]">
        <div className="glass p-8 rounded-2xl shadow-2xl border border-white/20 text-center max-w-md w-full">
          <div className="w-16 h-16 mx-auto mb-4 bg-[#FFA500] rounded-2xl flex items-center justify-center animate-pulse"></div>
          <h1 className="text-2xl font-bold text-white mb-2">Loading...</h1>
          <p className="text-[#FFE5B4]">Please wait while we load the reset password page.</p>
        </div>
      </div>
    }>
      <ResetPasswordContent />
    </Suspense>
  );
}