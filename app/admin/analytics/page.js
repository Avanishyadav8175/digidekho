'use client';

import { useState } from 'react';

export default function AdminAnalyticsPage() {
  const [timeRange, setTimeRange] = useState('30d');

  const analyticsData = {
    overview: {
      totalVisitors: { value: '0', change: '+0%', trend: 'up' },
      pageViews: { value: '0', change: '+0%', trend: 'up' },
      bounceRate: { value: '0%', change: '+0%', trend: 'down' },
      avgSession: { value: '0m 0s', change: '+0%', trend: 'up' }
    },
    traffic: {
      organic: { value: '0%', visitors: '0' },
      direct: { value: '0%', visitors: '0' },
      social: { value: '0%', visitors: '0' },
      referral: { value: '0%', visitors: '0' }
    },
    topPages: [],
    devices: {
      desktop: { value: '0%', visitors: '0' },
      mobile: { value: '0%', visitors: '0' },
      tablet: { value: '0%', visitors: '0' }
    },
    locations: [],
    conversions: {
      leads: { value: '0', rate: '0%', change: '+0%' },
      contacts: { value: '0', rate: '0%', change: '+0%' },
      quotes: { value: '0', rate: '0%', change: '+0%' },
      sales: { value: '0', rate: '0%', change: '+0%' }
    }
  };

  const getChangeColor = (change) => {
    if (change.startsWith('+')) return 'text-green-600';
    if (change.startsWith('-')) return 'text-red-600';
    return 'text-gray-600';
  };

  const getTrendIcon = (trend) => {
    return trend === 'up' ? '📈' : '📉';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-600">Track your website performance and user behavior</p>
        </div>
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="7d">Last 7 days</option>
          <option value="30d">Last 30 days</option>
          <option value="90d">Last 90 days</option>
          <option value="1y">Last year</option>
        </select>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Visitors</p>
              <p className="text-3xl font-bold text-gray-900">{analyticsData.overview.totalVisitors.value}</p>
              <p className={`text-sm flex items-center mt-1 ${getChangeColor(analyticsData.overview.totalVisitors.change)}`}>
                <span className="mr-1">{getTrendIcon(analyticsData.overview.totalVisitors.trend)}</span>
                {analyticsData.overview.totalVisitors.change} from last period
              </p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <span className="text-blue-600 text-2xl">👥</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Page Views</p>
              <p className="text-3xl font-bold text-gray-900">{analyticsData.overview.pageViews.value}</p>
              <p className={`text-sm flex items-center mt-1 ${getChangeColor(analyticsData.overview.pageViews.change)}`}>
                <span className="mr-1">{getTrendIcon(analyticsData.overview.pageViews.trend)}</span>
                {analyticsData.overview.pageViews.change} from last period
              </p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <span className="text-green-600 text-2xl">📄</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Bounce Rate</p>
              <p className="text-3xl font-bold text-gray-900">{analyticsData.overview.bounceRate.value}</p>
              <p className={`text-sm flex items-center mt-1 ${getChangeColor(analyticsData.overview.bounceRate.change)}`}>
                <span className="mr-1">{getTrendIcon(analyticsData.overview.bounceRate.trend)}</span>
                {analyticsData.overview.bounceRate.change} from last period
              </p>
            </div>
            <div className="p-3 bg-orange-100 rounded-full">
              <span className="text-orange-600 text-2xl">⚡</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg. Session</p>
              <p className="text-3xl font-bold text-gray-900">{analyticsData.overview.avgSession.value}</p>
              <p className={`text-sm flex items-center mt-1 ${getChangeColor(analyticsData.overview.avgSession.change)}`}>
                <span className="mr-1">{getTrendIcon(analyticsData.overview.avgSession.trend)}</span>
                {analyticsData.overview.avgSession.change} from last period
              </p>
            </div>
            <div className="p-3 bg-purple-100 rounded-full">
              <span className="text-purple-600 text-2xl">⏱️</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Traffic Sources */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Traffic Sources</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-green-500 text-xl">🔍</span>
                  <div>
                    <p className="font-semibold text-gray-900">Organic Search</p>
                    <p className="text-sm text-gray-600">{analyticsData.traffic.organic.visitors} visitors</p>
                  </div>
                </div>
                <span className="text-lg font-bold text-gray-900">{analyticsData.traffic.organic.value}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-blue-500 text-xl">🔗</span>
                  <div>
                    <p className="font-semibold text-gray-900">Direct</p>
                    <p className="text-sm text-gray-600">{analyticsData.traffic.direct.visitors} visitors</p>
                  </div>
                </div>
                <span className="text-lg font-bold text-gray-900">{analyticsData.traffic.direct.value}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-purple-500 text-xl">📱</span>
                  <div>
                    <p className="font-semibold text-gray-900">Social Media</p>
                    <p className="text-sm text-gray-600">{analyticsData.traffic.social.visitors} visitors</p>
                  </div>
                </div>
                <span className="text-lg font-bold text-gray-900">{analyticsData.traffic.social.value}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-orange-500 text-xl">🌐</span>
                  <div>
                    <p className="font-semibold text-gray-900">Referral</p>
                    <p className="text-sm text-gray-600">{analyticsData.traffic.referral.visitors} visitors</p>
                  </div>
                </div>
                <span className="text-lg font-bold text-gray-900">{analyticsData.traffic.referral.value}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Top Pages */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Top Pages</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {analyticsData.topPages.map((page, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 truncate">{page.page}</p>
                    <p className="text-sm text-gray-600">Bounce: {page.bounce}</p>
                  </div>
                  <span className="text-lg font-bold text-gray-900">{page.views}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Device Breakdown */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Device Breakdown</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-blue-500 text-xl">💻</span>
                  <div>
                    <p className="font-semibold text-gray-900">Desktop</p>
                    <p className="text-sm text-gray-600">{analyticsData.devices.desktop.visitors} visitors</p>
                  </div>
                </div>
                <span className="text-lg font-bold text-gray-900">{analyticsData.devices.desktop.value}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-green-500 text-xl">📱</span>
                  <div>
                    <p className="font-semibold text-gray-900">Mobile</p>
                    <p className="text-sm text-gray-600">{analyticsData.devices.mobile.visitors} visitors</p>
                  </div>
                </div>
                <span className="text-lg font-bold text-gray-900">{analyticsData.devices.mobile.value}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-purple-500 text-xl">📟</span>
                  <div>
                    <p className="font-semibold text-gray-900">Tablet</p>
                    <p className="text-sm text-gray-600">{analyticsData.devices.tablet.visitors} visitors</p>
                  </div>
                </div>
                <span className="text-lg font-bold text-gray-900">{analyticsData.devices.tablet.value}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Locations */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Top Locations</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {analyticsData.locations.map((location, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">🌍</span>
                    <div>
                      <p className="font-semibold text-gray-900">{location.country}</p>
                      <p className="text-sm text-gray-600">{location.percentage} of total</p>
                    </div>
                  </div>
                  <span className="text-lg font-bold text-gray-900">{location.visitors}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Conversions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Conversions</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">{analyticsData.conversions.leads.value}</p>
                <p className="text-sm text-gray-600">Leads</p>
                <p className="text-xs text-blue-600">{analyticsData.conversions.leads.rate} rate</p>
                <p className={`text-xs ${getChangeColor(analyticsData.conversions.leads.change)}`}>
                  {analyticsData.conversions.leads.change}
                </p>
              </div>
              
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="text-2xl font-bold text-green-600">{analyticsData.conversions.contacts.value}</p>
                <p className="text-sm text-gray-600">Contacts</p>
                <p className="text-xs text-green-600">{analyticsData.conversions.contacts.rate} rate</p>
                <p className={`text-xs ${getChangeColor(analyticsData.conversions.contacts.change)}`}>
                  {analyticsData.conversions.contacts.change}
                </p>
              </div>
              
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <p className="text-2xl font-bold text-purple-600">{analyticsData.conversions.quotes.value}</p>
                <p className="text-sm text-gray-600">Quotes</p>
                <p className="text-xs text-purple-600">{analyticsData.conversions.quotes.rate} rate</p>
                <p className={`text-xs ${getChangeColor(analyticsData.conversions.quotes.change)}`}>
                  {analyticsData.conversions.quotes.change}
                </p>
              </div>
              
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <p className="text-2xl font-bold text-orange-600">{analyticsData.conversions.sales.value}</p>
                <p className="text-sm text-gray-600">Sales</p>
                <p className="text-xs text-orange-600">{analyticsData.conversions.sales.rate} rate</p>
                <p className={`text-xs ${getChangeColor(analyticsData.conversions.sales.change)}`}>
                  {analyticsData.conversions.sales.change}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}