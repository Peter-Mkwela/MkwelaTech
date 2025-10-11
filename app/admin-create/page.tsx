'use client';
import { useState } from 'react';

export default function AdminCreatePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    secretKey: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');

    try {
      const res = await fetch('/api/admin/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(data.message || 'Admin created successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          password: '',
          confirmPassword: '',
          secretKey: '',
        });
      } else {
        setError(data.error || 'Something went wrong.');
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#000066]/10 p-6">
      <div className="glass p-8 rounded-2xl max-w-md w-full">
        <h2 className="text-3xl font-bold text-[#FFA500] mb-6 text-center">
          Create Admin User
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-[#FFE5B4]/50 focus:outline-none focus:border-[#FFA500] transition-colors"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-[#FFE5B4]/50 focus:outline-none focus:border-[#FFA500] transition-colors"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone (optional)"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-[#FFE5B4]/50 focus:outline-none focus:border-[#FFA500] transition-colors"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-[#FFE5B4]/50 focus:outline-none focus:border-[#FFA500] transition-colors"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-[#FFE5B4]/50 focus:outline-none focus:border-[#FFA500] transition-colors"
          />
          <input
            type="password"
            name="secretKey"
            placeholder="Secret Key"
            value={formData.secretKey}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-[#FFE5B4]/50 focus:outline-none focus:border-[#FFA500] transition-colors"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#FFA500] text-[#000066] py-3 px-6 rounded-lg font-semibold hover:bg-orange-400 transition-colors"
          >
            {loading ? 'Creating...' : 'Create Admin'}
          </button>

          {success && <p className="text-orange-500 mt-2 text-center">{success}</p>}
          {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
        </form>
      </div>
    </div>
  );
}
