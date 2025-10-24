// app/terms-of-service/page.tsx
'use client';

import { motion } from 'framer-motion';
import { FileText, AlertTriangle, CheckCircle } from 'lucide-react';

export default function TermsOfService() {
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
            <FileText className="text-[#FFA500]" size={32} />
            <h1 className="text-4xl md:text-5xl font-bold text-white">Terms of Service</h1>
          </div>
          <p className="text-xl text-[#FFE5B4] max-w-2xl mx-auto">
            Last updated: {new Date().getFullYear()}
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
              <h2 className="text-2xl font-semibold text-[#FFA500] mb-4">1. Agreement to Terms</h2>
              <p className="text-[#FFE5B4]/80 mb-4">
                By accessing and using MkwelaTech services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            {/* Services */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#FFA500] mb-4">2. Services Provided</h2>
              <ul className="text-[#FFE5B4]/80 space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-[#FFA500] mt-1 flex-shrink-0" />
                  <span>Web Development & Design</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-[#FFA500] mt-1 flex-shrink-0" />
                  <span>Software Development & Troubleshooting</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-[#FFA500] mt-1 flex-shrink-0" />
                  <span>Data Recovery Services</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-[#FFA500] mt-1 flex-shrink-0" />
                  <span>Graphics Design</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-[#FFA500] mt-1 flex-shrink-0" />
                  <span>OS Installations & Activation</span>
                </li>
              </ul>
            </section>

            {/* User Responsibilities */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#FFA500] mb-4">3. User Responsibilities</h2>
              <div className="bg-white/5 p-4 rounded-lg mb-4">
                <AlertTriangle className="text-[#FFA500] mb-2" size={24} />
                <p className="text-[#FFE5B4]/80">
                  You agree to provide accurate information and not to use our services for any illegal purposes.
                </p>
              </div>
            </section>

            {/* Payments */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#FFA500] mb-4">4. Payments & Pricing</h2>
              <p className="text-[#FFE5B4]/80 mb-4">
                All services are subject to the quoted prices. Payment terms will be agreed upon before project commencement.
              </p>
            </section>

            {/* Intellectual Property */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#FFA500] mb-4">5. Intellectual Property</h2>
              <p className="text-[#FFE5B4]/80 mb-4">
                All intellectual property rights for delivered projects transfer to the client upon full payment.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#FFA500] mb-4">6. Limitation of Liability</h2>
              <p className="text-[#FFE5B4]/80 mb-4">
                MkwelaTech shall not be liable for any indirect, incidental, special, consequential or punitive damages.
              </p>
            </section>

            {/* Changes to Terms */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#FFA500] mb-4">7. Changes to Terms</h2>
              <p className="text-[#FFE5B4]/80 mb-4">
                We reserve the right to modify these terms at any time. Continued use of services constitutes acceptance of changes.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-semibold text-[#FFA500] mb-4">8. Contact Information</h2>
              <p className="text-[#FFE5B4]/80">
                For questions about these Terms, please contact us at{' '}
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