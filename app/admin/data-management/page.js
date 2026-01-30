'use client';

import { useState } from 'react';
import { storage, STORAGE_KEYS } from '../../../lib/storage';

export default function DataManagementPage() {
  const [exportData, setExportData] = useState('');
  const [importData, setImportData] = useState('');
  const [message, setMessage] = useState('');

  const handleExportData = () => {
    const allData = {
      cities: storage.get(STORAGE_KEYS.CITIES),
      services: storage.get(STORAGE_KEYS.SERVICES),
      blogPosts: storage.get(STORAGE_KEYS.BLOG_POSTS),
      leads: storage.get(STORAGE_KEYS.LEADS),
      projects: storage.get(STORAGE_KEYS.PROJECTS),
      settings: storage.get(STORAGE_KEYS.SETTINGS),
      exportDate: new Date().toISOString()
    };
    
    const jsonData = JSON.stringify(allData, null, 2);
    setExportData(jsonData);
    setMessage('Data exported successfully! Copy the JSON below to backup your data.');
  };

  const handleImportData = () => {
    try {
      const data = JSON.parse(importData);
      
      if (data.cities) storage.set(STORAGE_KEYS.CITIES, data.cities);
      if (data.services) storage.set(STORAGE_KEYS.SERVICES, data.services);
      if (data.blogPosts) storage.set(STORAGE_KEYS.BLOG_POSTS, data.blogPosts);
      if (data.leads) storage.set(STORAGE_KEYS.LEADS, data.leads);
      if (data.projects) storage.set(STORAGE_KEYS.PROJECTS, data.projects);
      if (data.settings) storage.set(STORAGE_KEYS.SETTINGS, data.settings);
      
      setMessage('Data imported successfully! Please refresh the page to see changes.');
      setImportData('');
    } catch (error) {
      setMessage('Error importing data. Please check the JSON format.');
    }
  };

  const handleClearAllData = () => {
    if (confirm('Are you sure you want to clear ALL admin data? This cannot be undone.')) {
      storage.clearAll();
      setMessage('All data cleared successfully! Please refresh the page.');
    }
  };

  const downloadBackup = () => {
    const allData = {
      cities: storage.get(STORAGE_KEYS.CITIES),
      services: storage.get(STORAGE_KEYS.SERVICES),
      blogPosts: storage.get(STORAGE_KEYS.BLOG_POSTS),
      leads: storage.get(STORAGE_KEYS.LEADS),
      projects: storage.get(STORAGE_KEYS.PROJECTS),
      settings: storage.get(STORAGE_KEYS.SETTINGS),
      exportDate: new Date().toISOString()
    };
    
    const jsonData = JSON.stringify(allData, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `digitaldekho-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Data Management</h1>
        <p className="text-gray-600">Export, import, and manage your admin panel data</p>
      </div>

      {/* Message */}
      {message && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-blue-800">{message}</p>
        </div>
      )}

      {/* Export Section */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Export Data</h2>
        <p className="text-gray-600 mb-4">
          Export all your admin data as JSON for backup purposes.
        </p>
        <div className="flex space-x-4">
          <button
            onClick={handleExportData}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Export Data
          </button>
          <button
            onClick={downloadBackup}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Download Backup File
          </button>
        </div>
        
        {exportData && (
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Exported Data (Copy this JSON):
            </label>
            <textarea
              value={exportData}
              readOnly
              rows={10}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 font-mono text-sm"
            />
          </div>
        )}
      </div>

      {/* Import Section */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Import Data</h2>
        <p className="text-gray-600 mb-4">
          Import previously exported JSON data to restore your admin panel.
        </p>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Paste JSON Data:
            </label>
            <textarea
              value={importData}
              onChange={(e) => setImportData(e.target.value)}
              rows={8}
              placeholder="Paste your exported JSON data here..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg font-mono text-sm"
            />
          </div>
          <button
            onClick={handleImportData}
            disabled={!importData.trim()}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Import Data
          </button>
        </div>
      </div>

      {/* Clear Data Section */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Clear All Data</h2>
        <p className="text-gray-600 mb-4">
          ⚠️ <strong>Warning:</strong> This will permanently delete all admin data including cities, services, blog posts, leads, and projects.
        </p>
        <button
          onClick={handleClearAllData}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
        >
          Clear All Data
        </button>
      </div>

      {/* Current Data Summary */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Current Data Summary</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-2xl font-bold text-blue-600">{storage.get(STORAGE_KEYS.CITIES).length}</p>
            <p className="text-sm text-gray-600">Cities</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-2xl font-bold text-green-600">{storage.get(STORAGE_KEYS.SERVICES).length}</p>
            <p className="text-sm text-gray-600">Services</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-2xl font-bold text-purple-600">{storage.get(STORAGE_KEYS.BLOG_POSTS).length}</p>
            <p className="text-sm text-gray-600">Blog Posts</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-2xl font-bold text-orange-600">{storage.get(STORAGE_KEYS.LEADS).length}</p>
            <p className="text-sm text-gray-600">Leads</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-2xl font-bold text-indigo-600">{storage.get(STORAGE_KEYS.PROJECTS).length}</p>
            <p className="text-sm text-gray-600">Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
}