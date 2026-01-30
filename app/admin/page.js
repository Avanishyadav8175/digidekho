'use client';

import { useState } from 'react';
import Link from 'next/link';

const AdminDashboard = () => {
  const [stats] = useState({
    leads: { count: 0, change: '+0%', trend: 'up' },
    services: { count: 0, change: '+0%', trend: 'up' },
    cities: { count: 0, change: '+0%', trend: 'up' },
    blogPosts: { count: 0, change: '+0%', trend: 'up' },
    projects: { count: 0, change: '+0%', trend: 'up' },
    revenue: { count: '$0', change: '+0%', trend: 'up' }
  });

  const recentLeads = [];

  const recentActivities = [];

  const getStatusColor = (status) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'contacted': return 'bg-yellow-100 text-yellow-800';
      case 'qualified': return 'bg-purple-100 text-purple-800';
      case 'converted': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-500';
      case 'medium': return 'text-yellow-500';
      case 'low': return 'text-green-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, Admin! 👋</h1>
            <p className="text-blue-100">Here's what's happening with Digital Dekho today.</p>
          </div>
          <div className="text-right">
            <p className="text-blue-100 text-sm">Today's Date</p>
            <p className="text-xl font-semibold">{new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Leads</p>
              <p className="text-3xl font-bold text-gray-900">{stats.leads.count}</p>
              <p className="text-sm text-green-600 flex items-center mt-1">
                <span className="mr-1">↗️</span>
                {stats.leads.change} from last month
              </p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <span className="text-blue-600 text-2xl">💬</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Services</p>
              <p className="text-3xl font-bold text-gray-900">{stats.services.count}</p>
              <p className="text-sm text-green-600 flex items-center mt-1">
                <span className="mr-1">↗️</span>
                {stats.services.change} from last month
              </p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <span className="text-green-600 text-2xl">⚙️</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Cities</p>
              <p className="text-3xl font-bold text-gray-900">{stats.cities.count}</p>
              <p className="text-sm text-green-600 flex items-center mt-1">
                <span className="mr-1">↗️</span>
                {stats.cities.change} from last month
              </p>
            </div>
            <div className="p-3 bg-purple-100 rounded-full">
              <span className="text-purple-600 text-2xl">🏙️</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Blog Posts</p>
              <p className="text-3xl font-bold text-gray-900">{stats.blogPosts.count}</p>
              <p className="text-sm text-green-600 flex items-center mt-1">
                <span className="mr-1">↗️</span>
                {stats.blogPosts.change} from last month
              </p>
            </div>
            <div className="p-3 bg-orange-100 rounded-full">
              <span className="text-orange-600 text-2xl">📝</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Projects</p>
              <p className="text-3xl font-bold text-gray-900">{stats.projects.count}</p>
              <p className="text-sm text-green-600 flex items-center mt-1">
                <span className="mr-1">↗️</span>
                {stats.projects.change} from last month
              </p>
            </div>
            <div className="p-3 bg-indigo-100 rounded-full">
              <span className="text-indigo-600 text-2xl">🎯</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Revenue</p>
              <p className="text-3xl font-bold text-gray-900">{stats.revenue.count}</p>
              <p className="text-sm text-green-600 flex items-center mt-1">
                <span className="mr-1">↗️</span>
                {stats.revenue.change} from last month
              </p>
            </div>
            <div className="p-3 bg-emerald-100 rounded-full">
              <span className="text-emerald-600 text-2xl">💰</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Leads */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Recent Leads</h2>
              <Link 
                href="/admin/leads"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                View All →
              </Link>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentLeads.map((lead) => (
                <div key={lead.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{lead.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{lead.name}</p>
                      <p className="text-sm text-gray-600">{lead.service} • {lead.city}</p>
                      <p className="text-xs text-gray-500">{lead.email}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(lead.status)}`}>
                      {lead.status}
                    </span>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(lead.date).toLocaleDateString()}
                    </p>
                    <span className={`text-xs ${getPriorityColor(lead.priority)}`}>
                      ● {lead.priority} priority
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions & Recent Activity */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Quick Actions</h2>
            </div>
            <div className="p-6 space-y-3">
              <Link
                href="/admin/services"
                className="block p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors group"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-blue-600 text-xl">⚙️</span>
                  <div>
                    <div className="font-semibold text-blue-900 group-hover:text-blue-700">Manage Services</div>
                    <div className="text-sm text-blue-600">Add or edit service offerings</div>
                  </div>
                </div>
              </Link>
              
              <Link
                href="/admin/cities"
                className="block p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors group"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-green-600 text-xl">🏙️</span>
                  <div>
                    <div className="font-semibold text-green-900 group-hover:text-green-700">Manage Cities</div>
                    <div className="text-sm text-green-600">Add new locations</div>
                  </div>
                </div>
              </Link>
              
              <Link
                href="/admin/blog"
                className="block p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors group"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-purple-600 text-xl">📝</span>
                  <div>
                    <div className="font-semibold text-purple-900 group-hover:text-purple-700">Write Blog Post</div>
                    <div className="text-sm text-purple-600">Create new content</div>
                  </div>
                </div>
              </Link>
              
              <Link
                href="/admin/leads"
                className="block p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors group"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-orange-600 text-xl">💬</span>
                  <div>
                    <div className="font-semibold text-orange-900 group-hover:text-orange-700">View Leads</div>
                    <div className="text-sm text-orange-600">Check new inquiries</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-lg">{activity.icon}</span>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">{activity.message}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function AdminPage() {
  return <AdminDashboard />;
}