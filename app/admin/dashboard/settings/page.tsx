'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Save, Bell, Shield, User, CreditCard, Globe, Database, Mail } from 'lucide-react';

export default function AdminSettings() {
  const [activeTab, setActiveTab] = useState('general');
  const [settings, setSettings] = useState({
    siteName: 'MkwelaTech',
    adminEmail: 'admin@simplifiedit.co',
    timezone: 'UTC-05:00',
    emailNotifications: true,
    pushNotifications: false,
    twoFactorAuth: false,
  });

  const tabs = [
    { id: 'general', name: 'General', icon: User },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'billing', name: 'Billing', icon: CreditCard },
    { id: 'appearance', name: 'Appearance', icon: Globe },
  ];

  const handleSave = () => {
    // Save settings logic here
    console.log('Settings saved:', settings);
  };

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-white mb-2">System Settings</h1>
          <p className="text-gray-400">Manage your admin panel preferences and system configuration</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:w-64"
          >
            <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
              <nav className="space-y-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-orange-500 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{tab.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex-1"
          >
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
              {activeTab === 'general' && (
                <div>
                  <h2 className="text-xl font-semibold text-white mb-6">General Settings</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Site Name</label>
                      <input 
                        type="text" 
                        value={settings.siteName}
                        onChange={(e) => setSettings({...settings, siteName: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Admin Email</label>
                      <input 
                        type="email" 
                        value={settings.adminEmail}
                        onChange={(e) => setSettings({...settings, adminEmail: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Timezone</label>
                      <select 
                        value={settings.timezone}
                        onChange={(e) => setSettings({...settings, timezone: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                      >
                        <option value="UTC-05:00">UTC-05:00 Eastern Time</option>
                        <option value="UTC-08:00">UTC-08:00 Pacific Time</option>
                        <option value="UTC+00:00">UTC+00:00 GMT</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div>
                  <h2 className="text-xl font-semibold text-white mb-6">Notification Preferences</h2>
                  <div className="space-y-4">
                    {[
                      { label: 'Email notifications', description: 'Receive email alerts for important events', key: 'emailNotifications' },
                      { label: 'Push notifications', description: 'Get real-time updates in your browser', key: 'pushNotifications' },
                      { label: 'SMS alerts', description: 'Critical alerts via SMS' },
                      { label: 'Weekly reports', description: 'Weekly summary of system activity' },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border border-gray-700 rounded-lg">
                        <div>
                          <div className="font-medium text-white">{item.label}</div>
                          <div className="text-sm text-gray-400">{item.description}</div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="sr-only peer" 
                            checked={settings[item.key as keyof typeof settings] as boolean}
                            onChange={(e) => setSettings({...settings, [item.key]: e.target.checked})}
                          />
                          <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'security' && (
                <div>
                  <h2 className="text-xl font-semibold text-white mb-6">Security Settings</h2>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 border border-gray-700 rounded-lg">
                      <div>
                        <div className="font-medium text-white">Two-Factor Authentication</div>
                        <div className="text-sm text-gray-400">Add an extra layer of security to your account</div>
                      </div>
                      <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg text-white transition-colors">
                        Enable 2FA
                      </button>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Change Password</label>
                      <div className="space-y-3">
                        <input 
                          type="password" 
                          placeholder="Current password"
                          className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        <input 
                          type="password" 
                          placeholder="New password"
                          className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        <input 
                          type="password" 
                          placeholder="Confirm new password"
                          className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Save Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 flex justify-end"
              >
                <button 
                  onClick={handleSave}
                  className="flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg text-white transition-colors"
                >
                  <Save className="w-4 h-4" />
                  Save Changes
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}