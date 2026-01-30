'use client';

import { useState, useEffect } from 'react';
import { storage, STORAGE_KEYS } from '../../../lib/storage';

export default function AdminSettingsPage() {
  const defaultSettings = {
    siteName: 'Digital Dekho',
    siteDescription: 'Professional Digital Services Agency',
    contactEmail: 'info@digitaldekho.com',
    contactPhone: '+91 9996821315',
    address: 'Mumbai, India',
    socialMedia: {
      facebook: 'https://facebook.com/digitaldekho',
      twitter: 'https://twitter.com/digitaldekho_',
      linkedin: 'https://linkedin.com/company/digitaldekho_',
      instagram: 'https://instagram.com/digitaldekho_'
    },
    seo: {
      metaTitle: 'Digital Dekho - Professional Digital Services',
      metaDescription: 'Leading digital agency providing web development, app development, AI automation, and digital marketing services.',
      keywords: 'web development, app development, digital marketing, SEO, AI automation'
    },
    notifications: {
      emailNotifications: true,
      leadNotifications: true,
      projectUpdates: true,
      systemAlerts: true
    },
    analytics: {
      googleAnalyticsId: 'GA-XXXXXXXXX',
      facebookPixelId: 'FB-XXXXXXXXX',
      trackingEnabled: true
    }
  };

  const [settings, setSettings] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = storage.get(STORAGE_KEYS.SETTINGS, defaultSettings);
      return saved;
    }
    return defaultSettings;
  });

  const [activeTab, setActiveTab] = useState('general');
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  // Save to localStorage whenever settings change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      storage.set(STORAGE_KEYS.SETTINGS, settings);
    }
  }, [settings]);

  const handleSave = async () => {
    setIsSaving(true);
    setSaveMessage('');
    
    try {
      // Save to localStorage
      storage.set(STORAGE_KEYS.SETTINGS, settings);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSaveMessage('Settings saved successfully!');
      setTimeout(() => setSaveMessage(''), 3000);
    } catch (error) {
      setSaveMessage('Error saving settings. Please try again.');
      setTimeout(() => setSaveMessage(''), 3000);
    } finally {
      setIsSaving(false);
    }
  };

  const handleInputChange = (section, field, value) => {
    if (section) {
      setSettings(prev => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value
        }
      }));
    } else {
      setSettings(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to reset all settings to default values?')) {
      setSettings(defaultSettings);
      setSaveMessage('Settings reset to default values.');
      setTimeout(() => setSaveMessage(''), 3000);
    }
  };

  const tabs = [
    { id: 'general', label: 'General', icon: '⚙️' },
    { id: 'contact', label: 'Contact', icon: '📞' },
    { id: 'social', label: 'Social Media', icon: '📱' },
    { id: 'seo', label: 'SEO', icon: '🔍' },
    { id: 'notifications', label: 'Notifications', icon: '🔔' },
    { id: 'analytics', label: 'Analytics', icon: '📊' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600">Manage your website and admin panel settings</p>
          {saveMessage && (
            <div className={`mt-2 px-4 py-2 rounded-lg text-sm font-medium ${
              saveMessage.includes('Error') 
                ? 'bg-red-100 text-red-800' 
                : 'bg-green-100 text-green-800'
            }`}>
              {saveMessage}
            </div>
          )}
        </div>
        <div className="flex space-x-3">
          <button
            onClick={handleReset}
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            Reset to Default
          </button>
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50"
          >
            {isSaving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span className="text-xl">{tab.icon}</span>
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            {/* General Settings */}
            {activeTab === 'general' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">General Settings</h2>
                  <div className="text-sm text-gray-500">
                    Last updated: {new Date().toLocaleDateString()}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Site Name
                    </label>
                    <input
                      type="text"
                      value={settings.siteName}
                      onChange={(e) => handleInputChange(null, 'siteName', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your site name"
                    />
                    <p className="text-xs text-gray-500 mt-1">This will appear in the browser title and header</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Site Description
                    </label>
                    <input
                      type="text"
                      value={settings.siteDescription}
                      onChange={(e) => handleInputChange(null, 'siteDescription', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Brief description of your business"
                    />
                    <p className="text-xs text-gray-500 mt-1">Used in meta descriptions and about sections</p>
                  </div>
                </div>

                {/* Preview Section */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Preview</h3>
                  <div className="bg-white p-4 rounded border">
                    <h4 className="text-xl font-bold text-blue-600">{settings.siteName}</h4>
                    <p className="text-gray-600">{settings.siteDescription}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Contact Settings */}
            {activeTab === 'contact' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
                <p className="text-gray-600">Update your business contact details that will be displayed on your website.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Email
                    </label>
                    <input
                      type="email"
                      value={settings.contactEmail}
                      onChange={(e) => handleInputChange(null, 'contactEmail', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="info@yourcompany.com"
                    />
                    <p className="text-xs text-gray-500 mt-1">Primary email for customer inquiries</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Phone
                    </label>
                    <input
                      type="tel"
                      value={settings.contactPhone}
                      onChange={(e) => handleInputChange(null, 'contactPhone', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="+91 9996821315"
                    />
                    <p className="text-xs text-gray-500 mt-1">Include country code for international clients</p>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Address
                  </label>
                  <textarea
                    value={settings.address}
                    onChange={(e) => handleInputChange(null, 'address', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your complete business address"
                  />
                  <p className="text-xs text-gray-500 mt-1">This will be displayed in the footer and contact page</p>
                </div>

                {/* Contact Preview */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Preview</h3>
                  <div className="bg-white p-4 rounded border space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-blue-600">📧</span>
                      <span>{settings.contactEmail}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-600">📞</span>
                      <span>{settings.contactPhone}</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-red-600">📍</span>
                      <span>{settings.address}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Social Media Settings */}
            {activeTab === 'social' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Social Media Links</h2>
                <p className="text-gray-600">Add your social media profiles to increase your online presence.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <span className="flex items-center space-x-2">
                        <span>📘</span>
                        <span>Facebook URL</span>
                      </span>
                    </label>
                    <input
                      type="url"
                      value={settings.socialMedia.facebook}
                      onChange={(e) => handleInputChange('socialMedia', 'facebook', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="https://facebook.com/yourpage"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <span className="flex items-center space-x-2">
                        <span>🐦</span>
                        <span>Twitter URL</span>
                      </span>
                    </label>
                    <input
                      type="url"
                      value={settings.socialMedia.twitter}
                      onChange={(e) => handleInputChange('socialMedia', 'twitter', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="https://twitter.com/youraccount"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <span className="flex items-center space-x-2">
                        <span>💼</span>
                        <span>LinkedIn URL</span>
                      </span>
                    </label>
                    <input
                      type="url"
                      value={settings.socialMedia.linkedin}
                      onChange={(e) => handleInputChange('socialMedia', 'linkedin', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="https://linkedin.com/company/yourcompany"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <span className="flex items-center space-x-2">
                        <span>📸</span>
                        <span>Instagram URL</span>
                      </span>
                    </label>
                    <input
                      type="url"
                      value={settings.socialMedia.instagram}
                      onChange={(e) => handleInputChange('socialMedia', 'instagram', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="https://instagram.com/youraccount"
                    />
                  </div>
                </div>

                {/* Social Media Preview */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Social Media Links Preview</h3>
                  <div className="bg-white p-4 rounded border">
                    <div className="flex flex-wrap gap-4">
                      {settings.socialMedia.facebook && (
                        <a href={settings.socialMedia.facebook} target="_blank" rel="noopener noreferrer" 
                           className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                          <span>📘</span>
                          <span>Facebook</span>
                        </a>
                      )}
                      {settings.socialMedia.twitter && (
                        <a href={settings.socialMedia.twitter} target="_blank" rel="noopener noreferrer"
                           className="flex items-center space-x-2 px-3 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors">
                          <span>🐦</span>
                          <span>Twitter</span>
                        </a>
                      )}
                      {settings.socialMedia.linkedin && (
                        <a href={settings.socialMedia.linkedin} target="_blank" rel="noopener noreferrer"
                           className="flex items-center space-x-2 px-3 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors">
                          <span>💼</span>
                          <span>LinkedIn</span>
                        </a>
                      )}
                      {settings.socialMedia.instagram && (
                        <a href={settings.socialMedia.instagram} target="_blank" rel="noopener noreferrer"
                           className="flex items-center space-x-2 px-3 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors">
                          <span>📸</span>
                          <span>Instagram</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SEO Settings */}
            {activeTab === 'seo' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">SEO Settings</h2>
                <p className="text-gray-600">Optimize your website for search engines to improve visibility and rankings.</p>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Meta Title
                    <span className="text-xs text-gray-500 ml-2">
                      ({settings.seo.metaTitle.length}/60 characters)
                    </span>
                  </label>
                  <input
                    type="text"
                    value={settings.seo.metaTitle}
                    onChange={(e) => handleInputChange('seo', 'metaTitle', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your Website Title - Brand Name"
                    maxLength="60"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Keep it under 60 characters for optimal display in search results
                  </p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Meta Description
                    <span className="text-xs text-gray-500 ml-2">
                      ({settings.seo.metaDescription.length}/160 characters)
                    </span>
                  </label>
                  <textarea
                    value={settings.seo.metaDescription}
                    onChange={(e) => handleInputChange('seo', 'metaDescription', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Brief description of your website and services..."
                    maxLength="160"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Keep it under 160 characters. This appears in search results below your title.
                  </p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Keywords
                  </label>
                  <input
                    type="text"
                    value={settings.seo.keywords}
                    onChange={(e) => handleInputChange('seo', 'keywords', e.target.value)}
                    placeholder="web development, app development, digital marketing, SEO"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Separate keywords with commas. Focus on 5-10 relevant keywords.
                  </p>
                </div>

                {/* SEO Preview */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Search Result Preview</h3>
                  <div className="bg-white p-4 rounded border">
                    <div className="text-blue-600 text-lg hover:underline cursor-pointer">
                      {settings.seo.metaTitle}
                    </div>
                    <div className="text-green-600 text-sm">
                      https://digitaldekho.com
                    </div>
                    <div className="text-gray-600 text-sm mt-1">
                      {settings.seo.metaDescription}
                    </div>
                  </div>
                </div>

                {/* SEO Tips */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">SEO Tips</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Include your main keyword in the title</li>
                    <li>• Write compelling descriptions that encourage clicks</li>
                    <li>• Use location-based keywords if you serve specific areas</li>
                    <li>• Keep titles unique for each page</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Notifications Settings */}
            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Notification Preferences</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Email Notifications</h3>
                      <p className="text-sm text-gray-500">Receive general email notifications</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.notifications.emailNotifications}
                        onChange={(e) => handleInputChange('notifications', 'emailNotifications', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Lead Notifications</h3>
                      <p className="text-sm text-gray-500">Get notified when new leads arrive</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.notifications.leadNotifications}
                        onChange={(e) => handleInputChange('notifications', 'leadNotifications', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Project Updates</h3>
                      <p className="text-sm text-gray-500">Receive updates about project progress</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.notifications.projectUpdates}
                        onChange={(e) => handleInputChange('notifications', 'projectUpdates', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">System Alerts</h3>
                      <p className="text-sm text-gray-500">Important system and security alerts</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.notifications.systemAlerts}
                        onChange={(e) => handleInputChange('notifications', 'systemAlerts', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Analytics Settings */}
            {activeTab === 'analytics' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Analytics & Tracking</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Google Analytics ID
                    </label>
                    <input
                      type="text"
                      value={settings.analytics.googleAnalyticsId}
                      onChange={(e) => handleInputChange('analytics', 'googleAnalyticsId', e.target.value)}
                      placeholder="GA-XXXXXXXXX"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Facebook Pixel ID
                    </label>
                    <input
                      type="text"
                      value={settings.analytics.facebookPixelId}
                      onChange={(e) => handleInputChange('analytics', 'facebookPixelId', e.target.value)}
                      placeholder="FB-XXXXXXXXX"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Enable Tracking</h3>
                    <p className="text-sm text-gray-500">Allow analytics and tracking scripts</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.analytics.trackingEnabled}
                      onChange={(e) => handleInputChange('analytics', 'trackingEnabled', e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}