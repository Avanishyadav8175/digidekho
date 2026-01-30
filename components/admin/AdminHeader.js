'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bell, User, LogOut, ExternalLink } from 'lucide-react';

const AdminHeader = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
      });
      
      if (response.ok) {
        window.location.href = '/admin/login';
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Left side */}
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-semibold text-gray-900">
              Digital Dekho Admin
            </h1>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* View Site */}
            <Link
              href="/"
              target="_blank"
              className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="text-sm">View Site</span>
            </Link>

            {/* Notifications */}
            <button className="relative p-2 text-gray-600 hover:text-primary-600 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-2 p-2 text-gray-600 hover:text-primary-600 transition-colors"
              >
                <User className="w-5 h-5" />
                <span className="text-sm">Admin</span>
              </button>

              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <Link
                    href="/admin/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Profile Settings
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;