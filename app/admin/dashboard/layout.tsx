'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  Users, Download, MessageSquare, 
  CreditCard, Settings, 
  FolderOpen, Shield, Home,
  Menu, X, LogOut
} from 'lucide-react';

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [admin, setAdmin] = useState<{ name?: string; email?: string }>({});

  // ✅ Get admin info from localStorage
  useEffect(() => {
    const storedAdmin = localStorage.getItem('adminUser');
    if (storedAdmin) {
      try {
        setAdmin(JSON.parse(storedAdmin));
      } catch (err) {
        console.error('Failed to parse admin data:', err);
      }
    }
  }, []);

  // ✅ Detect screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      setIsSidebarOpen(window.innerWidth >= 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const navigation = [
    { name: 'Overview', href: '/admin/dashboard', icon: Home },
    { name: 'Clients', href: '/admin/dashboard/clients', icon: Users },
    { name: 'Service Requests', href: '/admin/dashboard/requests', icon: FolderOpen },
    { name: 'Payments', href: '/admin/dashboard/payments', icon: CreditCard },
    { name: 'Support', href: '/admin/dashboard/support', icon: MessageSquare },
    { name: 'Downloads', href: '/admin/dashboard/downloads', icon: Download },
    { name: 'Settings', href: '/admin/dashboard/settings', icon: Settings },
  ];

  const handleNavigation = () => {
    if (isMobile) setIsSidebarOpen(false);
  };

  // ✅ Logout function
  const handleLogout = () => {
    localStorage.removeItem('adminUser');
    router.push('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100 flex">
      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-40 bg-gray-900 border-r border-gray-800 transition-transform duration-300
        lg:relative lg:translate-x-0 lg:z-auto
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        ${isMobile ? 'w-64' : 'w-64 flex-shrink-0'}
      `}>
        <div className="flex flex-col h-full pt-16 lg:pt-0">
          {/* Logo + Admin Info - Desktop */}
          <div className="hidden lg:flex items-center justify-between p-4 border-b border-gray-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-white">
                <Shield className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white">{admin.name || 'Admin User'}</p>
                <p className="text-xs text-gray-400 truncate">{admin.email || 'admin@email.com'}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {navigation.map(item => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={handleNavigation}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                    isActive ? 'bg-orange-500 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">{item.name}</span>
                </Link>
              );
            })}

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 p-3 mt-4 rounded-lg text-gray-400 hover:text-white hover:bg-red-600 transition-colors"
            >
              <LogOut className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">Logout</span>
            </button>
          </nav>

          {/* Mobile Admin Info */}
          <div className="lg:hidden p-4 border-t border-gray-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFA500] to-[#FF8C00] flex items-center justify-center text-white">
                {admin.name?.charAt(0).toUpperCase() || 'A'}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white">{admin.name || 'Admin User'}</p>
                <p className="text-xs text-gray-400 truncate">{admin.email || 'admin@email.com'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      {isMobile && isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Mobile header */}
        <header className="lg:hidden bg-gray-950 border-b border-gray-800 p-4 sticky top-0 z-50">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 text-gray-400 hover:text-white"
            >
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-medium text-white">{admin.name || 'Admin User'}</p>
                <p className="text-xs text-gray-400">Admin Dashboard</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFA500] to-[#FF8C00] flex items-center justify-center text-white text-sm font-medium">
                {admin.name?.charAt(0).toUpperCase() || 'A'}
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}