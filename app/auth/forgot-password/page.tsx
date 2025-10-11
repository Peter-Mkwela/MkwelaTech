// app/auth/forgot-password/page.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { Mail, ArrowRight, Key, CheckCircle } from 'lucide-react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const res = await fetch('/api/auth/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.error || 'Failed to send reset link');
      return;
    }

    setIsSubmitted(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    alert('Something went wrong. Please try again.');
  }
};


  if (isSubmitted) {
    return (
      <div className="min-h-screen relative flex items-center justify-center px-6 py-12 bg-gradient-to-br from-[#000066] via-[#330099] to-[#FFA500]">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            animate={{ 
              x: [0, -20, 0],
              y: [0, -20, 0],
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-20 -left-20 w-64 h-64 bg-[#FFA500] rounded-full mix-blend-soft-light filter blur-[100px] opacity-30"
          />
          <motion.div
            animate={{ 
              x: [0, 20, 0],
              y: [0, 15, 0],
            }}
            transition={{ 
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-0 right-0 w-80 h-80 bg-[#000066] rounded-full mix-blend-soft-light filter blur-[100px] opacity-30"
          />
        </div>

        <div className="w-full max-w-md">
          {/* Success Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass p-8 rounded-2xl shadow-2xl border border-white/20 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="w-16 h-16 mx-auto mb-4 bg-green-500 rounded-2xl flex items-center justify-center"
            >
              <CheckCircle size={32} className="text-white" />
            </motion.div>
            
            <h1 className="text-2xl font-bold text-white mb-4">Check Your Email</h1>
            <p className="text-[#FFE5B4] mb-6">
              We&apos;ve sent a password reset link to <strong>{email}</strong>. 
              Please check your inbox and follow the instructions.
            </p>
            
            <div className="space-y-4">
              <p className="text-sm text-[#FFE5B4]/80">
                Didn&apos;t receive the email? Check your spam folder or{' '}
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-[#FFA500] hover:text-white transition-colors"
                >
                  try again
                </button>
              </p>
              
              <Link
                href="/auth/login"
                className="inline-flex items-center gap-2 text-[#FFA500] hover:text-white transition-colors font-medium group"
              >
                <ArrowRight size={16} className="rotate-180" />
                Back to login
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative flex items-center justify-center px-6 py-12 bg-gradient-to-br from-[#000066] via-[#330099] to-[#FFA500]">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ 
            x: [0, -20, 0],
            y: [0, -20, 0],
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-20 -left-20 w-64 h-64 bg-[#FFA500] rounded-full mix-blend-soft-light filter blur-[100px] opacity-30"
        />
        <motion.div
          animate={{ 
            x: [0, 20, 0],
            y: [0, 15, 0],
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-0 right-0 w-80 h-80 bg-[#000066] rounded-full mix-blend-soft-light filter blur-[100px] opacity-30"
        />
      </div>

      <div className="w-full max-w-md">

        {/* Forgot Password Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass p-8 rounded-2xl shadow-2xl border border-white/20"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="w-16 h-16 mx-auto mb-4 bg-[#FFA500] rounded-2xl flex items-center justify-center"
            >
              <Key size={32} className="text-[#000066]" />
            </motion.div>
            <h1 className="text-2xl font-bold text-white mb-2">Reset Password</h1>
            <p className="text-[#FFE5B4]">Enter your email to receive a reset link</p>
          </div>

          {/* Forgot Password Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <label className="block text-[#FFE5B4] mb-2 text-sm font-medium">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail size={20} className="text-[#FFA500]" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-[#FFE5B4]/50 focus:outline-none focus:border-[#FFA500] transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-[#FFA500] text-[#000066] py-3 px-6 rounded-lg font-semibold hover:bg-orange-400 transition-colors flex items-center justify-center gap-2 group"
            >
              Send Reset Link
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </form>

          {/* Back to Login */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="text-center mt-6"
          >
            <Link
              href="/auth/login"
              className="inline-flex items-center gap-2 text-[#FFA500] hover:text-white transition-colors font-medium group"
            >
              <ArrowRight size={16} className="rotate-180" />
              Back to login
            </Link>
          </motion.div>
        </motion.div>

        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="text-center mt-6"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#FFE5B4] hover:text-white transition-colors text-sm"
          >
            <ArrowRight size={16} className="rotate-180" />
            Back to home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}