'use client';

import { useState, useEffect } from 'react';
import { 
  Users, 
  FileText, 
  MessageSquare, 
  TrendingUp,
  Globe,
  MapPin,
  Settings,
  Star
} from 'lucide-react';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalLeads: 0,
    totalServices: 0,
    totalCities: 0,
    totalCountries: 0,
    totalBlogs: 0,
    totalProjects: 0,
    totalTestimonials: 0,
    recentLeads: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // In a real app, you'd fetch this data from your API
      // For now, we'll use mock data
      setStats({
        totalLeads: 156,
        totalServices: 8,
        totalCities: 45,
        totalCountries: 12,
        totalBlogs: 23,
        totalProjects: 67,
        totalTestimonials: 89,
        recentLeads: [
          { id: 1, name: 'John Doe', service: 'Web Development', city: 'New York', createdAt: '2024-01-10' },
          { id: 2, name: 'Jane Smith', service: 'App Development', city: 'London', createdAt: '2024-01-09' },
          { id: 3, name: 'Mike Johnson', service: 'SEO', city: 'Toronto', createdAt: '2024-01-08' },
        ],
      });
      setLoading(false);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      setLoading(false);
    }
  };

  const statCards = [
    {
      title: 'Total Leads',
      value: stats.totalLeads,
      icon: MessageSquare,
      color: 'bg-blue-500',
      change: '+12%',
    },
    {
      title: 'Services',
      value: stats.totalServices,
      icon: Settings,
      color: 'bg-green-500',
      change: '+2',
    },
    {
      title: 'Cities',
      value: stats.totalCities,
      icon: MapPin,
      color: 'bg-purple-500',
      change: '+5',
    },
    {
      title: 'Countries',
      value: stats.totalCountries,
      icon: Globe,
      color: 'bg-orange-500',
      change: '+1',
    },
    {
      title: 'Blog Posts',
      value: stats.totalBlogs,
      icon: FileText,
      color: 'bg-indigo-500',
      change: '+3',
    },
    {
      title: 'Projects',
      value: stats.totalProjects,
      icon: TrendingUp,
      color: 'bg-pink-500',
      change: '+8',
    },
    {
      title: 'Testimonials',
      value: stats.totalTestimonials,
      icon: Star,
      color: 'bg-yellow-500',
      change: '+4',
    },
    {
      title: 'Conversion Rate',
      value: '24%',
      icon: TrendingUp,
      color: 'bg-teal-500',
      change: '+2%',
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="loading-dots">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with your digital agency.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-green-600">{stat.change} from last month</p>
                </div>
                <div className={`p-3 rounded-full ${stat.color}`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Leads */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Leads</h2>
          <div className="space-y-4">
            {stats.recentLeads.map((lead) => (
              <div key={lead.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{lead.name}</p>
                  <p className="text-sm text-gray-600">{lead.service} • {lead.city}</p>
                </div>
                <div className="text-sm text-gray-500">
                  {new Date(lead.createdAt).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <a href="/admin/leads" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
              View all leads →
            </a>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <a
              href="/admin/services/new"
              className="block p-3 bg-primary-50 hover:bg-primary-100 rounded-lg transition-colors"
            >
              <div className="font-medium text-primary-900">Add New Service</div>
              <div className="text-sm text-primary-600">Create a new service offering</div>
            </a>
            <a
              href="/admin/cities/new"
              className="block p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
            >
              <div className="font-medium text-green-900">Add New City</div>
              <div className="text-sm text-green-600">Expand to a new location</div>
            </a>
            <a
              href="/admin/blog/new"
              className="block p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors"
            >
              <div className="font-medium text-purple-900">Write Blog Post</div>
              <div className="text-sm text-purple-600">Create new content</div>
            </a>
            <a
              href="/admin/seo"
              className="block p-3 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors"
            >
              <div className="font-medium text-orange-900">SEO Manager</div>
              <div className="text-sm text-orange-600">Optimize site performance</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;