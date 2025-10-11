'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, FileText, Download, MessageSquare, 
  CreditCard, Settings,
  FolderOpen, CheckCircle, Shield,
  TrendingUp, Calendar, Clock, BarChart3,
  Menu, X
} from 'lucide-react';

export default function AdminDashboard() {
  const [user, setUser] = useState<{ name: string; email: string; role: string } | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Load admin info from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('adminUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-lg">
        Loading dashboard...
      </div>
    );
  }

  const stats = [
    { label: 'Total Clients', value: 42, icon: Users, color: 'text-blue-400', trend: '+12%' },
    { label: 'Pending Requests', value: 8, icon: FolderOpen, color: 'text-orange-400', trend: '-3%' },
    { label: 'Revenue This Month', value: '$3,240', icon: CreditCard, color: 'text-green-400', trend: '+15%' },
    { label: 'Unread Messages', value: 5, icon: MessageSquare, color: 'text-yellow-400', trend: '+8%' }
  ];

  const recentRequests = [
    { id: '#001', client: 'John Doe', service: 'Data Recovery', status: 'In Progress', priority: 'High', date: '2024-01-15' },
    { id: '#002', client: 'Jane Smith', service: 'Website Design', status: 'Pending', priority: 'Medium', date: '2024-01-14' },
    { id: '#003', client: 'Mike Johnson', service: 'Software Development', status: 'Completed', priority: 'Low', date: '2024-01-13' },
    { id: '#004', client: 'Sarah Wilson', service: 'Graphics Design', status: 'In Progress', priority: 'High', date: '2024-01-12' }
  ];

  const quickActions = [
    { icon: Users, label: 'Manage Clients', description: 'View and manage client accounts' },
    { icon: FolderOpen, label: 'Service Requests', description: 'Handle incoming requests' },
    { icon: CreditCard, label: 'Payments', description: 'Process and track payments' },
    { icon: Download, label: 'Deliverables', description: 'Upload client deliverables' },
    { icon: MessageSquare, label: 'Support', description: 'Respond to client messages' },
    { icon: Settings, label: 'Settings', description: 'Configure system settings' },
  ];

  const recentActivity = [
    { icon: CheckCircle, label: 'Service completed', info: 'Data Recovery #001', time: '2 hours ago', color: 'bg-green-900 text-green-300' },
    { icon: CreditCard, label: 'Payment received', info: '$150 from John Doe', time: '4 hours ago', color: 'bg-blue-900 text-blue-300' },
    { icon: Users, label: 'New client registered', info: 'Sarah Wilson', time: '1 day ago', color: 'bg-orange-900 text-orange-300' },
    { icon: FileText, label: 'New request', info: 'Website Design #005', time: '1 day ago', color: 'bg-purple-900 text-purple-300' }
  ];

  const systemStatus = [
    { label: 'Server Uptime', value: '99.9%', icon: TrendingUp, color: 'text-green-400' },
    { label: 'Storage Usage', value: '65%', icon: BarChart3, color: 'text-orange-400' },
    { label: 'Active Sessions', value: '18', icon: Users, color: 'text-blue-400' },
    { label: 'Response Time', value: '128ms', icon: Clock, color: 'text-purple-400' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100">
      {/* Mobile-Optimized Header */}
      <header className="bg-gray-950/80 backdrop-blur-lg border-b border-gray-800 shadow-xl sticky top-0 z-50">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button & Branding */}
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-400 hover:text-white lg:hidden"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-white font-semibold shadow-lg">
                  <Shield className="w-5 h-5" />
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-lg font-bold text-white">Admin Dashboard</h1>
                  <p className="text-gray-400 text-sm">Welcome, {user.name.split(' ')[0]}</p>
                </div>
              </div>
            </div>
            </div>

            
        </div>

        {/* Desktop Search - Hidden on Mobile */}
        
      </header>

      {/* Main Content */}
      <div className="px-4 py-6 max-w-7xl mx-auto">
        {/* Stats Grid - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 gap-3 mb-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 rounded-xl p-4 shadow-lg border border-gray-800 col-span-2 sm:col-span-1"
            >
              <div className="flex items-center justify-between">
                <div className="min-w-0">
                  <p className="text-xl font-bold text-white truncate">{stat.value}</p>
                  <p className="text-gray-400 text-xs truncate">{stat.label}</p>
                  <p className="text-green-400 text-xs font-medium mt-1">{stat.trend}</p>
                </div>
                <div className={`p-2 rounded-lg bg-gray-800 ${stat.color} flex-shrink-0 ml-2`}>
                  <stat.icon className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="space-y-6">
          {/* Recent Service Requests - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-900 rounded-xl p-4 shadow-lg border border-gray-800"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-white">Service Requests</h2>
              <button className="text-orange-400 text-xs font-medium hover:text-orange-300 transition-colors">
                View All
              </button>
            </div>
            <div className="space-y-3">
              {recentRequests.map((request, index) => (
                <motion.div
                  key={request.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-3 bg-gray-800 rounded-lg space-y-2"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3 min-w-0 flex-1">
                      <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FileText className="w-4 h-4 text-gray-400" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-white text-sm truncate">{request.service}</h4>
                        <p className="text-gray-400 text-xs truncate">{request.client}</p>
                        <p className="text-gray-500 text-xs">{request.id}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1 flex-wrap">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        request.status === 'Completed' ? 'bg-green-900 text-green-300' :
                        request.status === 'In Progress' ? 'bg-blue-900 text-blue-300' :
                        'bg-yellow-900 text-yellow-300'
                      }`}>
                        {request.status}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        request.priority === 'High' ? 'bg-red-900 text-red-300' :
                        request.priority === 'Medium' ? 'bg-orange-900 text-orange-300' :
                        'bg-gray-700 text-gray-300'
                      }`}>
                        {request.priority}
                      </span>
                    </div>
                    <p className="text-gray-400 text-xs flex-shrink-0 ml-2">{request.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-900 rounded-xl p-4 shadow-lg border border-gray-800"
          >
            <h2 className="text-lg font-semibold text-white mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-3">
              {quickActions.map((action) => (
                <motion.button
                  key={action.label}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-3 bg-gray-800 rounded-lg hover:bg-gray-750 transition-all duration-300 text-left"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className="p-1.5 bg-orange-900 rounded-lg">
                      <action.icon className="w-4 h-4 text-orange-400" />
                    </div>
                    <span className="font-semibold text-white text-sm truncate">{action.label}</span>
                  </div>
                  <p className="text-gray-400 text-xs truncate">{action.description}</p>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* System Status & Recent Activity Side by Side on Mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* System Status */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gray-900 rounded-xl p-4 shadow-lg border border-gray-800"
            >
              <h3 className="text-lg font-semibold text-white mb-4">System Status</h3>
              <div className="grid grid-cols-2 gap-3">
                {systemStatus.map((item) => (
                  <div key={item.label} className="flex items-center justify-between p-2 bg-gray-800 rounded-lg">
                    <div className="flex items-center gap-2">
                      <item.icon className={`w-4 h-4 ${item.color}`} />
                      <span className="text-gray-300 text-xs">{item.label}</span>
                    </div>
                    <span className="text-sm font-semibold text-white">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gray-900 rounded-xl p-4 shadow-lg border border-gray-800"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Recent Activity</h3>
                <Calendar className="w-4 h-4 text-gray-400" />
              </div>
              <div className="space-y-3">
                {recentActivity.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-2">
                    <div className={`w-8 h-8 ${item.color.split(' ')[0]} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <item.icon className={`w-3 h-3 ${item.color.split(' ')[1]}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white truncate">{item.label}</p>
                      <p className="text-gray-400 text-xs truncate">{item.info}</p>
                      <p className="text-gray-500 text-xs">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}