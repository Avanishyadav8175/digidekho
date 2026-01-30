'use client';

import { useState, useEffect } from 'react';

export default function SEOGeneratorPage() {
  const [cities, setCities] = useState([]);
  const [seoPages, setSeoPages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [selectedCity, setSelectedCity] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterIndexed, setFilterIndexed] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [editingPage, setEditingPage] = useState(null);
  const [message, setMessage] = useState('');

  // Load cities and SEO pages
  useEffect(() => {
    loadCities();
    loadSEOPages();
  }, []);

  const loadCities = async () => {
    try {
      // For now, use localStorage cities data
      const savedCities = localStorage.getItem('admin-cities');
      if (savedCities) {
        setCities(JSON.parse(savedCities));
      }
    } catch (error) {
      console.error('Error loading cities:', error);
    }
  };

  const loadSEOPages = async () => {
    try {
      setLoading(true);
      // For now, use localStorage for SEO pages
      const savedPages = localStorage.getItem('admin-seo-pages');
      if (savedPages) {
        setSeoPages(JSON.parse(savedPages));
      }
    } catch (error) {
      console.error('Error loading SEO pages:', error);
    } finally {
      setLoading(false);
    }
  };

  const generateSEOContent = async (cityId) => {
    try {
      setGenerating(true);
      setMessage('');

      const city = cities.find(c => c.id === parseInt(cityId));
      if (!city) {
        setMessage('City not found');
        return;
      }

      // Get services from localStorage
      const savedServices = localStorage.getItem('admin-services');
      const services = savedServices ? JSON.parse(savedServices) : [];

      if (services.length === 0) {
        setMessage('No services found. Please add services first.');
        return;
      }

      // Generate pages for each service
      const generatedPages = [];
      const serviceTemplates = {
        'Web Development': 'web-development',
        'App Development': 'app-development',
        'AI Automation': 'ai-automation',
        'Video Editing': 'video-editing',
        'Photo Editing': 'photo-editing',
        'Meta Ads': 'meta-ads',
        'Google Ads': 'google-ads',
        'SEO Services': 'seo'
      };

      services.forEach(service => {
        const serviceSlug = serviceTemplates[service.title] || 'web-development';
        const pageSlug = `${serviceSlug}-in-${city.name.toLowerCase().replace(/\s+/g, '-')}`;
        
        // Check if page already exists
        const existingPage = seoPages.find(p => p.slug === pageSlug);
        if (existingPage) return;

        const seoContent = generateServiceContent(city, service, serviceSlug);
        
        const newPage = {
          id: Date.now() + Math.random(),
          cityId: city.id,
          cityName: city.name,
          serviceId: service.id,
          serviceName: service.title,
          slug: pageSlug,
          metaTitle: seoContent.metaTitle,
          metaDescription: seoContent.metaDescription,
          keywords: seoContent.keywords,
          content: seoContent.content,
          status: 'draft',
          isIndexed: false,
          views: 0,
          qualityScore: 85,
          generatedAt: new Date().toISOString(),
          generatedBy: 'AI_SEO_Generator'
        };

        generatedPages.push(newPage);
      });

      // Save to localStorage
      const updatedPages = [...seoPages, ...generatedPages];
      setSeoPages(updatedPages);
      localStorage.setItem('admin-seo-pages', JSON.stringify(updatedPages));

      // Update city status
      const updatedCities = cities.map(c => 
        c.id === parseInt(cityId) 
          ? { ...c, seoGenerated: true, seoGeneratedAt: new Date().toISOString() }
          : c
      );
      setCities(updatedCities);
      localStorage.setItem('admin-cities', JSON.stringify(updatedCities));

      setMessage(`Successfully generated ${generatedPages.length} SEO pages for ${city.name}`);

    } catch (error) {
      console.error('Error generating SEO content:', error);
      setMessage('Error generating SEO content. Please try again.');
    } finally {
      setGenerating(false);
    }
  };

  const generateServiceContent = (city, service, serviceSlug) => {
    const cityName = city.name;
    const serviceName = service.title;
    
    const contentTemplates = {
      'web-development': {
        intro: `${cityName}'s competitive business landscape demands websites that perform exceptionally across all devices and browsers. With a thriving business community, your web presence needs to capture attention instantly and convert visitors into customers.`,
        useCase: `A local business in ${cityName} was losing customers to competitors with better online presence. After implementing a custom web solution with modern frameworks and mobile optimization, they saw a 340% increase in user engagement within three months.`,
        whyChoose: `Our development approach combines cutting-edge technologies like React and Node.js with deep understanding of ${cityName}'s market dynamics. We specialize in building scalable web applications that serve local businesses effectively.`
      },
      'app-development': {
        intro: `${cityName}'s mobile-first population expects apps that work flawlessly and provide exceptional user experiences. Successful businesses need mobile applications that understand local user behaviors and market requirements.`,
        useCase: `A ${cityName}-based company struggled with customer engagement. We developed a custom mobile app with location-based features and push notifications. The result? 85% increase in customer retention and 200% boost in engagement.`,
        whyChoose: `We build native iOS and Android applications using Swift, Kotlin, and React Native, optimized for local market conditions. Our development team creates apps that perform excellently across different connectivity conditions.`
      }
      // Add more templates as needed
    };

    const template = contentTemplates[serviceSlug] || contentTemplates['web-development'];
    
    const content = `
      <h1>${serviceName} Services in ${cityName}</h1>
      <p>${template.intro}</p>
      
      <h2>How ${serviceName} Solves ${cityName} Business Challenges</h2>
      <p>${template.useCase}</p>
      
      <h2>Why Choose Our ${serviceName} Team in ${cityName}</h2>
      <p>${template.whyChoose}</p>
      
      <h2>Our ${serviceName} Process</h2>
      <ol>
        <li><strong>Discovery & Strategy:</strong> Analyze your ${cityName} market position</li>
        <li><strong>Custom Design:</strong> Create solutions tailored to local audience</li>
        <li><strong>Development:</strong> Build using modern frameworks and best practices</li>
        <li><strong>Testing:</strong> Comprehensive QA across devices and platforms</li>
        <li><strong>Launch & Support:</strong> Deploy with ongoing maintenance and optimization</li>
      </ol>
      
      <h2>${cityName} ${serviceName} Experience</h2>
      <p>We've successfully delivered ${serviceName.toLowerCase()} solutions for businesses across ${cityName}, helping local companies achieve their digital goals and grow their market presence.</p>
      
      <h2>Frequently Asked Questions</h2>
      <h3>How long does ${serviceName.toLowerCase()} take for ${cityName} businesses?</h3>
      <p>Most ${cityName} ${serviceName.toLowerCase()} projects are completed within 6-12 weeks, depending on complexity and specific requirements.</p>
      
      <h3>Do you provide ${serviceName.toLowerCase()} that works with local ${cityName} systems?</h3>
      <p>Yes, we ensure all our ${serviceName.toLowerCase()} solutions integrate seamlessly with local business systems and requirements in ${cityName}.</p>
      
      <h3>What makes your ${serviceName.toLowerCase()} different for ${cityName} businesses?</h3>
      <p>Our ${serviceName.toLowerCase()} approach is tailored specifically for ${cityName} market conditions, local user preferences, and regional business requirements.</p>
      
      <h2>Ready to Transform Your ${cityName} Business?</h2>
      <p>Don't let your competitors dominate ${cityName}'s market. Our ${serviceName.toLowerCase()} team is ready to create solutions that drive real results for your business. Contact us today for a free consultation.</p>
    `;

    return {
      content: content.trim(),
      metaTitle: `${serviceName} Services in ${cityName} | Digital Dekho`,
      metaDescription: `Professional ${serviceName.toLowerCase()} services in ${cityName}. Expert solutions that drive results for local businesses. Get a free consultation today.`,
      keywords: [
        `${serviceName.toLowerCase()} ${cityName.toLowerCase()}`,
        `${serviceName.toLowerCase()} services ${cityName.toLowerCase()}`,
        `${cityName.toLowerCase()} ${serviceName.toLowerCase()} company`,
        `best ${serviceName.toLowerCase()} ${cityName.toLowerCase()}`
      ]
    };
  };

  const handleEditPage = (page) => {
    setEditingPage(page);
    setShowModal(true);
  };

  const handleUpdatePage = (updatedPage) => {
    const updatedPages = seoPages.map(p => 
      p.id === updatedPage.id ? { ...p, ...updatedPage, updatedAt: new Date().toISOString() } : p
    );
    setSeoPages(updatedPages);
    localStorage.setItem('admin-seo-pages', JSON.stringify(updatedPages));
    setShowModal(false);
    setEditingPage(null);
    setMessage('SEO page updated successfully');
  };

  const handleDeletePage = (pageId) => {
    if (confirm('Are you sure you want to delete this SEO page?')) {
      const updatedPages = seoPages.filter(p => p.id !== pageId);
      setSeoPages(updatedPages);
      localStorage.setItem('admin-seo-pages', JSON.stringify(updatedPages));
      setMessage('SEO page deleted successfully');
    }
  };

  const handlePublishPage = (pageId) => {
    const updatedPages = seoPages.map(p => 
      p.id === pageId 
        ? { ...p, status: 'published', isIndexed: false, updatedAt: new Date().toISOString() }
        : p
    );
    setSeoPages(updatedPages);
    localStorage.setItem('admin-seo-pages', JSON.stringify(updatedPages));
    setMessage('SEO page published successfully (NoIndex for safety - enable indexing when ready)');
  };

  const handleToggleIndex = (pageId) => {
    const updatedPages = seoPages.map(p => 
      p.id === pageId 
        ? { ...p, isIndexed: !p.isIndexed, updatedAt: new Date().toISOString() }
        : p
    );
    setSeoPages(updatedPages);
    localStorage.setItem('admin-seo-pages', JSON.stringify(updatedPages));
    const page = seoPages.find(p => p.id === pageId);
    setMessage(`SEO page ${page.isIndexed ? 'removed from' : 'added to'} search index`);
  };

  const filteredPages = seoPages.filter(page => {
    const matchesStatus = filterStatus === 'all' || page.status === filterStatus;
    const matchesIndexed = filterIndexed === 'all' || 
      (filterIndexed === 'indexed' && page.isIndexed) ||
      (filterIndexed === 'noindex' && !page.isIndexed);
    return matchesStatus && matchesIndexed;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800';
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      case 'archived': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">SEO Content Generator</h1>
          <p className="text-gray-600">Generate and manage SEO-optimized city service pages</p>
          {message && (
            <div className={`mt-2 px-4 py-2 rounded-lg text-sm font-medium ${
              message.includes('Error') || message.includes('failed')
                ? 'bg-red-100 text-red-800' 
                : 'bg-green-100 text-green-800'
            }`}>
              {message}
            </div>
          )}
        </div>
      </div>

      {/* Generate New Content */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Generate SEO Content for City</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select a city...</option>
            {cities.map(city => (
              <option key={city.id} value={city.id}>
                {city.name}, {city.country}
                {city.seoGenerated && ' (Generated)'}
              </option>
            ))}
          </select>
          <button
            onClick={() => generateSEOContent(selectedCity)}
            disabled={!selectedCity || generating}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {generating ? 'Generating...' : 'Generate SEO Pages'}
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          This will generate SEO-optimized pages for all active services in the selected city.
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex flex-col sm:flex-row gap-4">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Status</option>
            <option value="draft">Draft</option>
            <option value="published">Published</option>
            <option value="archived">Archived</option>
          </select>
          <select
            value={filterIndexed}
            onChange={(e) => setFilterIndexed(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Index Status</option>
            <option value="indexed">Indexed</option>
            <option value="noindex">No Index</option>
          </select>
        </div>
      </div>

      {/* SEO Pages Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Page
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  City
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Service
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Index
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Views
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loading ? (
                <tr>
                  <td colSpan="7" className="px-6 py-12 text-center text-gray-500">
                    Loading SEO pages...
                  </td>
                </tr>
              ) : filteredPages.length === 0 ? (
                <tr>
                  <td colSpan="7" className="px-6 py-12 text-center text-gray-500">
                    <div className="flex flex-col items-center">
                      <span className="text-4xl mb-4">📄</span>
                      <p className="text-lg font-medium">No SEO pages found</p>
                      <p className="text-sm">Generate content for a city to get started</p>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredPages.map((page) => (
                  <tr key={page.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm font-medium text-gray-900 max-w-xs truncate">
                          {page.metaTitle}
                        </div>
                        <div className="text-sm text-gray-500">
                          /{page.slug}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {page.cityName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {page.serviceName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(page.status)}`}>
                        {page.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        page.isIndexed 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {page.isIndexed ? 'Indexed' : 'No Index'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {page.views.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                      <button 
                        onClick={() => handleEditPage(page)}
                        className="text-blue-600 hover:text-blue-900 font-medium"
                      >
                        Edit
                      </button>
                      {page.status === 'draft' && (
                        <button 
                          onClick={() => handlePublishPage(page.id)}
                          className="text-green-600 hover:text-green-900 font-medium"
                        >
                          Publish
                        </button>
                      )}
                      {page.status === 'published' && (
                        <button 
                          onClick={() => handleToggleIndex(page.id)}
                          className={`font-medium ${
                            page.isIndexed 
                              ? 'text-red-600 hover:text-red-900' 
                              : 'text-green-600 hover:text-green-900'
                          }`}
                        >
                          {page.isIndexed ? 'NoIndex' : 'Index'}
                        </button>
                      )}
                      <button 
                        onClick={() => handleDeletePage(page.id)}
                        className="text-red-600 hover:text-red-900 font-medium"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-lg">
              <span className="text-blue-600 text-xl">📄</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Pages</p>
              <p className="text-2xl font-bold text-gray-900">{seoPages.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-lg">
              <span className="text-green-600 text-xl">✅</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Published</p>
              <p className="text-2xl font-bold text-gray-900">
                {seoPages.filter(p => p.status === 'published').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <span className="text-yellow-600 text-xl">📝</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Drafts</p>
              <p className="text-2xl font-bold text-gray-900">
                {seoPages.filter(p => p.status === 'draft').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 rounded-lg">
              <span className="text-purple-600 text-xl">👁️</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Views</p>
              <p className="text-2xl font-bold text-gray-900">
                {seoPages.reduce((total, page) => total + page.views, 0).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {showModal && editingPage && (
        <SEOPageEditModal
          page={editingPage}
          onSave={handleUpdatePage}
          onClose={() => {
            setShowModal(false);
            setEditingPage(null);
          }}
        />
      )}
    </div>
  );
}

// SEO Page Edit Modal Component
function SEOPageEditModal({ page, onSave, onClose }) {
  const [formData, setFormData] = useState({
    metaTitle: page.metaTitle,
    metaDescription: page.metaDescription,
    keywords: page.keywords.join(', '),
    content: page.content,
    status: page.status,
    isIndexed: page.isIndexed
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...page,
      ...formData,
      keywords: formData.keywords.split(',').map(k => k.trim()).filter(k => k)
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Edit SEO Page</h2>
          <p className="text-gray-600">{page.serviceName} in {page.cityName}</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Meta Title ({formData.metaTitle.length}/60)
              </label>
              <input
                type="text"
                value={formData.metaTitle}
                onChange={(e) => setFormData({ ...formData, metaTitle: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                maxLength="60"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="archived">Archived</option>
              </select>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Meta Description ({formData.metaDescription.length}/160)
            </label>
            <textarea
              value={formData.metaDescription}
              onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              maxLength="160"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Keywords (comma separated)
            </label>
            <input
              type="text"
              value={formData.keywords}
              onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="keyword1, keyword2, keyword3"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Content (HTML)
            </label>
            <textarea
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              rows={12}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
              required
            />
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="isIndexed"
              checked={formData.isIndexed}
              onChange={(e) => setFormData({ ...formData, isIndexed: e.target.checked })}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="isIndexed" className="ml-2 block text-sm text-gray-900">
              Allow search engines to index this page
            </label>
          </div>
          
          <div className="flex space-x-4 pt-4">
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}