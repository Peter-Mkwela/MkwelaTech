// app/privacy-policy/page.tsx
'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000066] via-[#000033] to-black pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="text-[#FFA500]" size={32} />
            <h1 className="text-4xl md:text-5xl font-bold text-white">Privacy Policy</h1>
          </div>
          <p className="text-xl text-[#FFE5B4] max-w-2xl mx-auto">
            How we protect and handle your information
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass p-8 rounded-2xl"
        >
          <div className="prose prose-invert max-w-none">
            {/* Introduction */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#FFA500] mb-4">1. Information We Collect</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <Eye className="text-[#FFA500] mb-2" size={24} />
                  <h3 className="text-white font-semibold mb-2">Personal Information</h3>
                  <p className="text-[#FFE5B4]/80 text-sm">
                    Name, email, phone number, and business details provided during consultations.
                  </p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <Database className="text-[#FFA500] mb-2" size={24} />
                  <h3 className="text-white font-semibold mb-2">Service Data</h3>
                  <p className="text-[#FFE5B4]/80 text-sm">
                    Project requirements, technical specifications, and communication history.
                  </p>
                </div>
              </div>
            </section>

            {/* Data Usage */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#FFA500] mb-4">2. How We Use Your Information</h2>
              <ul className="text-[#FFE5B4]/80 space-y-2 mb-4">
                <li>• To provide and maintain our services</li>
                <li>• To communicate with you about your projects</li>
                <li>• To improve our services and customer experience</li>
                <li>• To send important updates and notifications</li>
              </ul>
            </section>

            {/* Data Protection */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#FFA500] mb-4">3. Data Protection</h2>
              <div className="bg-white/5 p-4 rounded-lg mb-4">
                <Lock className="text-[#FFA500] mb-2" size={24} />
                <p className="text-[#FFE5B4]/80">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, or destruction.
                </p>
              </div>
            </section>

            {/* Data Sharing */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#FFA500] mb-4">4. Data Sharing</h2>
              <p className="text-[#FFE5B4]/80 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share information only when necessary for service delivery or when required by law.
              </p>
            </section>

            {/* Your Rights */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#FFA500] mb-4">5. Your Rights</h2>
              <p className="text-[#FFE5B4]/80 mb-4">
                You have the right to access, correct, or delete your personal information. Contact us to exercise these rights.
              </p>
            </section>

            {/* Cookies */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#FFA500] mb-4">6. Cookies & Tracking</h2>
              <p className="text-[#FFE5B4]/80 mb-4">
                We use cookies to improve website functionality and analyze traffic. See our Cookie Policy for more details.
              </p>
            </section>

            {/* Changes */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#FFA500] mb-4">7. Policy Changes</h2>
              <p className="text-[#FFE5B4]/80 mb-4">
                We may update this privacy policy periodically. Continued use of our services constitutes acceptance of changes.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-semibold text-[#FFA500] mb-4">8. Contact Us</h2>
              <p className="text-[#FFE5B4]/80">
                For privacy-related questions, contact us at{' '}
                <a href="mailto:mkwelait@gmail.com" className="text-[#FFA500] hover:text-orange-400">
                  mkwelait@gmail.com
                </a>
              </p>
            </section>
          </div>
        </motion.div>

        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-8"
        >
        </motion.div>
      </div>
    </div>
  );
}