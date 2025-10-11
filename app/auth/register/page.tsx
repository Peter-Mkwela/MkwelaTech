'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { Eye, EyeOff, UserPlus, Mail, Lock, User, ArrowRight, LogIn, Phone } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const calculatePasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/[0-9]/.test(password)) strength += 25;
    if (/[!@#$%^&*]/.test(password)) strength += 25;
    return strength;
  };

  const passwordStrength = calculatePasswordStrength(formData.password);

  const getStrengthLabel = () => {
    if (!formData.password) return 'No password';
    if (passwordStrength <= 25) return 'Weak';
    if (passwordStrength <= 50) return 'Fair';
    if (passwordStrength <= 75) return 'Good';
    return 'Strong';
  };

  const getStrengthColor = () => {
    if (!formData.password) return 'bg-gray-500';
    if (passwordStrength <= 25) return 'bg-red-500';
    if (passwordStrength <= 50) return 'bg-orange-500';
    if (passwordStrength <= 75) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setError('');

  if (formData.password !== formData.confirmPassword) {
    setError('Passwords do not match');
    return;
  }

  setLoading(true);

  try {
    // Map fullName -> name
 const payload = {
  name: formData.fullName,
  email: formData.email,
  phone: formData.phone || undefined,
  password: formData.password,
  confirmPassword: formData.confirmPassword,
  agreeToTerms: formData.agreeToTerms,
};


    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error || 'Registration failed');
    } else {
      router.push('/auth/login');
    }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    setError('An error occurred during registration');
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="min-h-screen relative flex items-center justify-center px-6 py-12 bg-gradient-to-br from-[#000066] via-[#330099] to-[#FFA500]">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div animate={{ x: [0, -20, 0], y: [0, -20, 0] }} transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }} className="absolute -top-20 -left-20 w-64 h-64 bg-[#FFA500] rounded-full mix-blend-soft-light filter blur-[100px] opacity-30" />
        <motion.div animate={{ x: [0, 20, 0], y: [0, 15, 0] }} transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }} className="absolute bottom-0 right-0 w-80 h-80 bg-[#000066] rounded-full mix-blend-soft-light filter blur-[100px] opacity-30" />
      </div>

      <div className="w-full max-w-md">
        {/* Registration Card */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="glass p-8 rounded-2xl shadow-2xl border border-white/20">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, type: 'spring' }} className="w-16 h-16 mx-auto mb-4 bg-[#FFA500] rounded-2xl flex items-center justify-center">
              <UserPlus size={32} className="text-[#000066]" />
            </motion.div>
            <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
            <p className="text-[#FFE5B4]">Join MkwelaTech  Solutions today</p>
          </div>

          {/* Error Message */}
          {error && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm">
              {error}
            </motion.div>
          )}

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.3 }}>
              <label className="block text-[#FFE5B4] mb-2 text-sm font-medium">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User size={16} className="text-[#FFA500]" />
                </div>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-[#FFE5B4]/50 focus:outline-none focus:border-[#FFA500] transition-colors text-sm" placeholder="Enter your full name" required />
              </div>
            </motion.div>

            {/* Email */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.4 }}>
              <label className="block text-[#FFE5B4] mb-2 text-sm font-medium">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail size={16} className="text-[#FFA500]" />
                </div>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-[#FFE5B4]/50 focus:outline-none focus:border-[#FFA500] transition-colors text-sm" placeholder="your@email.com" required />
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.5 }}>
              <label className="block text-[#FFE5B4] mb-2 text-sm font-medium">Phone Number (Optional)</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone size={16} className="text-[#FFA500]" />
                </div>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-[#FFE5B4]/50 focus:outline-none focus:border-[#FFA500] transition-colors text-sm" placeholder="+263 77 000 0000" />
              </div>
            </motion.div>

            {/* Password */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.6 }}>
              <label className="block text-[#FFE5B4] mb-2 text-sm font-medium">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={16} className="text-[#FFA500]" />
                </div>
                <input type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleChange} className="w-full pl-10 pr-12 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-[#FFE5B4]/50 focus:outline-none focus:border-[#FFA500] transition-colors text-sm" placeholder="Create password" required />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#FFA500] hover:text-white transition-colors">{showPassword ? <EyeOff size={16} /> : <Eye size={16} />}</button>
              </div>

              {/* Password Strength */}
              {formData.password && (
                <div className="mt-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-[#FFE5B4]">Password strength:</span>
                    <span className={`text-xs font-medium ${
                      passwordStrength <= 25 ? 'text-red-400' :
                      passwordStrength <= 50 ? 'text-orange-400' :
                      passwordStrength <= 75 ? 'text-yellow-400' : 'text-green-400'
                    }`}>{getStrengthLabel()}</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className={`h-2 rounded-full transition-all duration-300 ${getStrengthColor()}`} style={{ width: `${passwordStrength}%` }} />
                  </div>
                </div>
              )}
            </motion.div>

            {/* Confirm Password */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.7 }}>
              <label className="block text-[#FFE5B4] mb-2 text-sm font-medium">Confirm Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={16} className="text-[#FFA500]" />
                </div>
                <input type={showConfirmPassword ? 'text' : 'password'} name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="w-full pl-10 pr-12 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-[#FFE5B4]/50 focus:outline-none focus:border-[#FFA500] transition-colors text-sm" placeholder="Confirm password" required />
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#FFA500] hover:text-white transition-colors">{showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}</button>
              </div>
            </motion.div>

            {/* Terms */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.8 }} className="flex items-start gap-3">
              <input type="checkbox" name="agreeToTerms" checked={formData.agreeToTerms} onChange={handleChange} className="w-4 h-4 mt-1 text-[#FFA500] bg-white/10 border-white/20 rounded focus:ring-[#FFA500]" required />
              <label className="text-sm text-[#FFE5B4]">
                I agree to the{' '}
                <Link href="/terms" className="text-[#FFA500] hover:text-white transition-colors">Terms of Service</Link> and{' '}
                <Link href="/privacy" className="text-[#FFA500] hover:text-white transition-colors">Privacy Policy</Link>
              </label>
            </motion.div>

            {/* Submit */}
            <motion.button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.9 }} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" disabled={loading} className="w-full bg-[#FFA500] text-[#000066] py-3 px-6 rounded-lg font-semibold hover:bg-orange-400 transition-colors flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed">
              {loading ? 'Creating...' : 'Create Account'}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </form>

          {/* Login Link */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 1.0 }} className="text-center mt-6">
            <Link href="/auth/login" className="inline-flex items-center gap-2 text-[#FFA500] hover:text-white transition-colors font-medium group">
              <LogIn size={16} /> Sign in to your account <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Back to Home */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 1.1 }} className="text-center mt-6">
          <Link href="/" className="inline-flex items-center gap-2 text-[#FFE5B4] hover:text-white transition-colors text-sm">
            <ArrowRight size={16} className="rotate-180" /> Back to home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
