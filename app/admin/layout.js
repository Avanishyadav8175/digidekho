'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { storage, STORAGE_KEYS } from '../../lib/storage';
import Logo from '../../components/shared/Logo';

const AdminSidebar = () => {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [counts, setCounts] = useState({
    services: 0,
    cities: 0,
    blog: 0,
    leads: 0,
    projects: 0
  });

  // Update counts from localStorage
  useEffect(() => {
    const updateCounts = () => {
      setCounts({
        services: storage.get(STORAGE_KEYS.SERVICES).length,
        cities: storage.get(STORAGE_KEYS.CITIES).length,
        blog: storage.get(STORAGE_KEYS.BLOG_POSTS).length,
        leads: storage.get(STORAGE_KEYS.LEADS).length,
        projects: storage.get(STORAGE_KEYS.PROJECTS).length
      });
    };

    updateCounts();
    
    // Update counts when localStorage changes
    const handleStorageChange = () => updateCounts();
    window.addEventListener('storage', handleStorageChange);
    
    // Also update on focus (for same-tab changes)
    window.addEventListener('focus', updateCounts);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('focus', updateCounts);
    };
  }, []);

  const menuItems = [
    { href: '/admin', label: 'Dashboard', icon: '📊', badge: null },
    { href: '/admin/services', label: 'Services', icon: '⚙️', badge: counts.services.toString() },
    { href: '/admin/cities', label: 'Cities', icon: '🏙️', badge: counts.cities.toString() },
    { href: '/admin/blog', label: 'Blog', icon: '📝', badge: counts.blog.toString() },
    { href: '/admin/leads', label: 'Leads', icon: '💬', badge: counts.leads.toString() },
    { href: '/admin/projects', label: 'Projects', icon: '🎯', badge: counts.projects.toString() },
    { href: '/admin/seo-generator', label: 'SEO Generator', icon: '🚀', badge: null },
    { href: '/admin/notifications', label: 'Notifications', icon: '🔔', badge: null },
    { href: '/admin/analytics', label: 'Analytics', icon: '📈', badge: null },
    { href: '/admin/settings', label: 'Settings', icon: '⚙️', badge: null },
    { href: '/admin/data-management', label: 'Data Management', icon: '💾', badge: null },
  ];

  return (
    <aside className={`${isCollapsed ? 'w-16' : 'w-64'} bg-white shadow-lg h-screen sticky top-0 transition-all duration-300 border-r border-gray-200`}>
      {/* Logo Section */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center space-x-3">
              <Logo href="/admin" size="sm" variant="admin" showText={false} />
              <div>
                <h2 className="text-lg font-bold text-gray-900">Digital Dekho</h2>
                <p className="text-xs text-gray-500">Admin Panel</p>
              </div>
            </div>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <span className="text-gray-600">{isCollapsed ? '→' : '←'}</span>
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center justify-between px-3 py-3 rounded-xl transition-all duration-200 group ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className={`text-xl ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-blue-600'}`}>
                      {item.icon}
                    </span>
                    {!isCollapsed && (
                      <span className="font-medium">{item.label}</span>
                    )}
                  </div>
                  {!isCollapsed && item.badge && (
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      isActive 
                        ? 'bg-white/20 text-white' 
                        : 'bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Profile Section */}
      {!isCollapsed && (
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Admin User</p>
                <p className="text-xs text-gray-500">admin@digitaldekho.com</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};

import NotificationSystem from '../../components/admin/NotificationSystem';

const AdminHeader = () => {
  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      window.location.href = '/admin/login';
    } catch (error) {
      console.error('Logout error:', error);
      window.location.href = '/admin/login';
    }
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-gray-900">
              Admin Dashboard
            </h1>
            <div className="hidden md:flex items-center space-x-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span>System Online</span>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:block">
              <input
                type="text"
                placeholder="Search..."
                className="w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Notifications */}
            <NotificationSystem />

            {/* View Site */}
            <a
              href="/"
              target="_blank"
              className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <span>🔗</span>
              <span className="text-sm font-medium">View Site</span>
            </a>

            {/* User Menu */}
            <div className="flex items-center space-x-3 px-3 py-2 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-medium text-gray-900">Admin</p>
                <p className="text-xs text-gray-500">Super Admin</p>
              </div>
            </div>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <span>🚪</span>
              <span className="text-sm font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}