// app/cookie-policy/page.tsx
'use client';

import { motion } from 'framer-motion';
import { Cookie, Settings, BarChart3, Trash2 } from 'lucide-react';

export default function CookiePolicy() {
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
            <Cookie className="text-[#FFA500]" size={32} />
            <h1 className="text-4xl md:text-5xl font-bold text-white">Cookie Policy</h1>
          </div>
          <p className="text-xl text-[#FFE5B4] max-w-2xl mx-auto">
            Understanding how we use cookies and similar technologies
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
              <h2 className="text-2xl font-semibold text-[#FFA500] mb-4">1. What Are Cookies?</h2>
              <p className="text-[#FFE5B4]/80 mb-4">
                Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better browsing experience and understand how you use our services.
              </p>
            </section>

            {/* Types of Cookies */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#FFA500] mb-4">2. Types of Cookies We Use</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <Settings className="text-[#FFA500] mb-2" size={24} />
                  <h3 className="text-white font-semibold mb-2">Essential Cookies</h3>
                  <p className="text-[#FFE5B4]/80 text-sm">
                    Necessary for the website to function properly. Cannot be switched off.
                  </p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <BarChart3 className="text-[#FFA500] mb-2" size={24} />
                  <h3 className="text-white font-semibold mb-2">Analytics Cookies</h3>
                  <p className="text-[#FFE5B4]/80 text-sm">
                    Help us understand how visitors interact with our website.
                  </p>
                </div>
              </div>
            </section>

            {/* Purpose */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#FFA500] mb-4">3. Why We Use Cookies</h2>
              <ul className="text-[#FFE5B4]/80 space-y-2 mb-4">
                <li>• To ensure website functionality</li>
                <li>• To analyze website traffic and usage patterns</li>
                <li>• To improve user experience</li>
                <li>• To remember your preferences</li>
                <li>• To provide relevant content</li>
              </ul>
            </section>

            {/* Cookie Management */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#FFA500] mb-4">4. Managing Cookies</h2>
              <div className="bg-white/5 p-4 rounded-lg mb-4">
                <Trash2 className="text-[#FFA500] mb-2" size={24} />
                <p className="text-[#FFE5B4]/80 mb-2">
                  You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and set most browsers to prevent them from being placed.
                </p>
                <p className="text-[#FFE5B4]/80 text-sm">
                  However, if you do this, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
                </p>
              </div>
            </section>

            {/* Third-Party Cookies */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#FFA500] mb-4">5. Third-Party Cookies</h2>
              <p className="text-[#FFE5B4]/80 mb-4">
                We may use third-party services that place cookies on your device. These include analytics services that help us understand website usage.
              </p>
            </section>

            {/* Updates */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#FFA500] mb-4">6. Policy Updates</h2>
              <p className="text-[#FFE5B4]/80 mb-4">
                We may update this Cookie Policy from time to time. We encourage you to review this policy periodically to stay informed about how we use cookies.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-semibold text-[#FFA500] mb-4">7. Contact Us</h2>
              <p className="text-[#FFE5B4]/80">
                If you have any questions about our Cookie Policy, please contact us at{' '}
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