// Script to populate test data for SEO generator testing

const testCities = [
  { id: 1, name: 'Toronto', country: 'Canada', status: 'active', slug: 'toronto' },
  { id: 2, name: 'Vancouver', country: 'Canada', status: 'active', slug: 'vancouver' },
  { id: 3, name: 'New York', country: 'USA', status: 'active', slug: 'new-york' },
  { id: 4, name: 'London', country: 'UK', status: 'active', slug: 'london' }
];

const testServices = [
  { 
    id: 1, 
    title: 'Web Development', 
    slug: 'web-development',
    description: 'Custom websites and web applications built with modern technologies.',
    price: '$2,500 - $15,000',
    icon: '🌐',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading'],
    status: 'active'
  },
  { 
    id: 2, 
    title: 'App Development', 
    slug: 'app-development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    price: '$5,000 - $25,000',
    icon: '📱',
    features: ['Native iOS', 'Native Android', 'Cross-Platform'],
    status: 'active'
  },
  { 
    id: 3, 
    title: 'AI Automation', 
    slug: 'ai-automation',
    description: 'Intelligent automation solutions powered by artificial intelligence.',
    price: '$3,000 - $20,000',
    icon: '🤖',
    features: ['Process Automation', 'AI Integration', 'Cost Reduction'],
    status: 'active'
  },
  { 
    id: 4, 
    title: 'Video Editing', 
    slug: 'video-editing',
    description: 'Professional video editing services for content creators and businesses.',
    price: '$500 - $5,000',
    icon: '🎬',
    features: ['4K Quality', 'Motion Graphics', 'Color Grading'],
    status: 'active'
  },
  { 
    id: 5, 
    title: 'Photo Editing', 
    slug: 'photo-editing',
    description: 'Professional photo editing and retouching services.',
    price: '$100 - $1,000',
    icon: '📸',
    features: ['High Resolution', 'Color Correction', 'Background Removal'],
    status: 'active'
  },
  { 
    id: 6, 
    title: 'Meta Ads', 
    slug: 'meta-ads',
    description: 'Facebook and Instagram advertising campaigns that drive results.',
    price: '$1,000 - $10,000/month',
    icon: '📘',
    features: ['Targeted Campaigns', 'A/B Testing', 'ROI Tracking'],
    status: 'active'
  },
  { 
    id: 7, 
    title: 'Google Ads', 
    slug: 'google-ads',
    description: 'Strategic Google Ads campaigns that increase visibility and drive traffic.',
    price: '$1,500 - $15,000/month',
    icon: '🔍',
    features: ['Keyword Research', 'Campaign Optimization', 'Performance Reports'],
    status: 'active'
  },
  { 
    id: 8, 
    title: 'SEO Services', 
    slug: 'seo',
    description: 'Comprehensive search engine optimization services.',
    price: '$800 - $5,000/month',
    icon: '📈',
    features: ['On-Page SEO', 'Link Building', 'Technical SEO'],
    status: 'active'
  }
];

// Function to populate localStorage (for browser environment)
function populateTestData() {
  if (typeof window !== 'undefined') {
    localStorage.setItem('admin-cities', JSON.stringify(testCities));
    localStorage.setItem('admin-services', JSON.stringify(testServices));
    console.log('Test data populated successfully!');
    console.log('Cities:', testCities.length);
    console.log('Services:', testServices.length);
  } else {
    console.log('This script should be run in a browser environment');
  }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { testCities, testServices, populateTestData };
}

// Auto-run if in browser
if (typeof window !== 'undefined') {
  populateTestData();
}