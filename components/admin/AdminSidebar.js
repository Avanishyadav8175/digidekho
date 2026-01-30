'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Settings, 
  Users, 
  FileText, 
  MapPin, 
  Globe, 
  MessageSquare, 
  FolderOpen,
  Package,
  Star,
  BarChart3,
  Search
} from 'lucide-react';

const AdminSidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { href: '/admin', icon: LayoutDashboard, label: 'Dashboard' },
    { href: '/admin/services', icon: Settings, label: 'Services' },
    { href: '/admin/countries', icon: Globe, label: 'Countries' },
    { href: '/admin/cities', icon: MapPin, label: 'Cities' },
    { href: '/admin/blog', icon: FileText, label: 'Blog' },
    { href: '/admin/projects', icon: FolderOpen, label: 'Projects' },
    { href: '/admin/products', icon: Package, label: 'Products' },
    { href: '/admin/testimonials', icon: Star, label: 'Testimonials' },
    { href: '/admin/leads', icon: MessageSquare, label: 'Leads' },
    { href: '/admin/seo', icon: Search, label: 'SEO Manager' },
    { href: '/admin/analytics', icon: BarChart3, label: 'Analytics' },
    { href: '/admin/users', icon: Users, label: 'Admin Users' },
  ];

  return (
    <aside className="w-64 bg-white shadow-sm h-screen sticky top-0">
      <div className="p-6">
        <Link href="/admin" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">DD</span>
          </div>
          <span className="text-lg font-bold text-gray-900">Admin Panel</span>
        </Link>
      </div>

      <nav className="px-4 pb-4">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                    isActive
                      ? 'bg-primary-50 text-primary-600 border-r-2 border-primary-600'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;