'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setFeedback({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setFeedback({ type: 'error', message: data.error || 'Something went wrong' });
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setFeedback({ type: 'error', message: 'Something went wrong' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="glass p-8 rounded-2xl shadow-lg max-w-2xl mx-auto"
    >
      <h3 className="text-2xl font-semibold text-[#FFA500] mb-6 text-center">Send us a Message</h3>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[#FFE5B4] mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-[#FFE5B4]/50 focus:outline-none focus:border-[#FFA500] transition-colors"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="block text-[#FFE5B4] mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-[#FFE5B4]/50 focus:outline-none focus:border-[#FFA500] transition-colors"
              placeholder="your@email.com"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-[#FFE5B4] mb-2">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-[#FFE5B4]/50 focus:outline-none focus:border-[#FFA500] transition-colors"
            placeholder="What can we help with?"
            required
          />
        </div>
        <div>
          <label className="block text-[#FFE5B4] mb-2">Message</label>
          <textarea
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-[#FFE5B4]/50 focus:outline-none focus:border-[#FFA500] transition-colors"
            placeholder="Tell us about your project..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#FFA500] text-[#000066] py-3 px-6 rounded-lg font-semibold hover:bg-orange-400 transition-colors"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>

        {/* Feedback message */}
        {feedback && (
          <p
            className={`mt-4 text-center font-semibold ${
              feedback.type === 'success' ? 'text-orange-400' : 'text-red-500'
            }`}
          >
            {feedback.message}
          </p>
        )}
      </form>
    </motion.div>
  );
}
