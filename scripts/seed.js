const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config({ path: '.env.local' });

// Import models
const AdminUser = require('../models/AdminUser');
const Service = require('../models/Service');
const Country = require('../models/Country');
const City = require('../models/City');
const Testimonial = require('../models/Testimonial');
const Project = require('../models/Project');
const Product = require('../models/Product');
const Blog = require('../models/Blog');

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
}

async function seedAdminUser() {
  try {
    const existingAdmin = await AdminUser.findOne({ email: process.env.ADMIN_EMAIL });
    if (existingAdmin) {
      console.log('Admin user already exists');
      return;
    }

    const admin = new AdminUser({
      name: 'Admin User',
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD,
      role: 'super_admin',
    });

    await admin.save();
    console.log('Admin user created successfully');
  } catch (error) {
    console.error('Error creating admin user:', error);
  }
}

async function seedServices() {
  try {
    const services = [
      {
        title: 'Web Development',
        slug: 'web-development',
        description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
        shortDescription: 'Professional web development services using cutting-edge technologies.',
        bannerImage: 'https://picsum.photos/1200/600?random=1',
        icon: 'globe',
        seoTitle: 'Web Development Services | Custom Websites & Web Apps',
        seoDescription: 'Professional web development services. Custom websites, web applications, e-commerce solutions with modern technologies.',
        keywords: ['web development', 'website design', 'web applications', 'responsive design', 'e-commerce'],
        features: [
          'Responsive Design',
          'SEO Optimized',
          'Fast Loading Speed',
          'Mobile-First Approach',
          'Cross-Browser Compatibility',
          'Content Management System',
          'E-commerce Integration',
          'Security Implementation'
        ],
        technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'TypeScript', 'Tailwind CSS'],
        faqs: [
          {
            question: 'How long does it take to develop a website?',
            answer: 'The timeline depends on the complexity of the project. A simple website takes 2-4 weeks, while complex web applications can take 8-12 weeks.'
          },
          {
            question: 'Do you provide ongoing maintenance?',
            answer: 'Yes, we offer ongoing maintenance and support packages to keep your website updated and secure.'
          }
        ],
        pricing: [
          {
            title: 'Basic Website',
            price: '$999',
            features: ['5 Pages', 'Responsive Design', 'Contact Form', 'Basic SEO', '1 Month Support'],
            isPopular: false
          },
          {
            title: 'Business Website',
            price: '$2,499',
            features: ['10 Pages', 'CMS Integration', 'E-commerce Ready', 'Advanced SEO', '3 Months Support', 'Analytics Setup'],
            isPopular: true
          },
          {
            title: 'Enterprise Solution',
            price: '$4,999',
            features: ['Unlimited Pages', 'Custom Features', 'API Integration', 'Performance Optimization', '6 Months Support', 'Training'],
            isPopular: false
          }
        ]
      },
      {
        title: 'App Development',
        slug: 'app-development',
        description: 'Native and cross-platform mobile applications for iOS and Android with exceptional user experience.',
        shortDescription: 'Professional mobile app development for iOS and Android platforms.',
        bannerImage: 'https://picsum.photos/1200/600?random=2',
        icon: 'smartphone',
        seoTitle: 'Mobile App Development | iOS & Android Apps',
        seoDescription: 'Professional mobile app development services. Native iOS, Android apps and cross-platform solutions.',
        keywords: ['app development', 'mobile apps', 'iOS development', 'Android development', 'cross-platform'],
        features: [
          'Native iOS Development',
          'Native Android Development',
          'Cross-Platform Solutions',
          'UI/UX Design',
          'App Store Optimization',
          'Push Notifications',
          'Offline Functionality',
          'Third-party Integrations'
        ],
        technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Redux'],
        faqs: [
          {
            question: 'Should I choose native or cross-platform development?',
            answer: 'It depends on your requirements. Native apps offer better performance, while cross-platform apps are more cost-effective for reaching both platforms.'
          }
        ]
      },
      {
        title: 'AI Automation',
        slug: 'ai-automation',
        description: 'Intelligent automation solutions to streamline business processes and increase operational efficiency.',
        shortDescription: 'AI-powered automation solutions to optimize your business processes.',
        bannerImage: 'https://picsum.photos/1200/600?random=3',
        icon: 'bot',
        seoTitle: 'AI Automation Services | Business Process Automation',
        seoDescription: 'AI automation services to streamline business processes. Chatbots, workflow automation, and intelligent solutions.',
        keywords: ['AI automation', 'business automation', 'chatbots', 'workflow automation', 'artificial intelligence'],
        features: [
          'Process Automation',
          'Intelligent Chatbots',
          'Data Analysis & Insights',
          'Workflow Optimization',
          'Custom AI Solutions',
          'Integration Services',
          'Performance Monitoring',
          'Scalable Architecture'
        ],
        technologies: ['Python', 'TensorFlow', 'OpenAI', 'Langchain', 'FastAPI', 'Docker']
      },
      {
        title: 'Video Editing',
        slug: 'video-editing',
        description: 'Professional video editing services for marketing, social media, and corporate content.',
        shortDescription: 'Professional video editing for marketing and corporate content.',
        bannerImage: 'https://picsum.photos/1200/600?random=4',
        icon: 'video',
        seoTitle: 'Professional Video Editing Services | Marketing Videos',
        seoDescription: 'Professional video editing services for marketing, social media, corporate videos, and promotional content.',
        keywords: ['video editing', 'video production', 'marketing videos', 'social media videos', 'corporate videos'],
        features: [
          'Professional Editing',
          'Motion Graphics',
          'Color Grading',
          'Audio Enhancement',
          'Social Media Optimization',
          'Brand Integration',
          'Multiple Formats',
          'Fast Turnaround'
        ],
        technologies: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Final Cut Pro']
      },
      {
        title: 'Photo Editing',
        slug: 'photo-editing',
        description: 'High-quality photo editing and retouching services for all your visual content needs.',
        shortDescription: 'Professional photo editing and retouching services.',
        bannerImage: 'https://picsum.photos/1200/600?random=5',
        icon: 'camera',
        seoTitle: 'Professional Photo Editing Services | Image Retouching',
        seoDescription: 'Professional photo editing services. Image retouching, background removal, color correction, and enhancement.',
        keywords: ['photo editing', 'image retouching', 'background removal', 'color correction', 'photo enhancement'],
        features: [
          'Image Retouching',
          'Background Removal',
          'Color Correction',
          'Batch Processing',
          'Product Photography',
          'Portrait Enhancement',
          'Creative Effects',
          'High-Resolution Output'
        ],
        technologies: ['Adobe Photoshop', 'Lightroom', 'GIMP', 'Canva']
      },
      {
        title: 'Meta Ads',
        slug: 'meta-ads',
        description: 'Strategic Facebook and Instagram advertising campaigns to reach your target audience effectively.',
        shortDescription: 'Strategic Facebook and Instagram advertising campaigns.',
        bannerImage: 'https://picsum.photos/1200/600?random=6',
        icon: 'facebook',
        seoTitle: 'Meta Ads Management | Facebook & Instagram Advertising',
        seoDescription: 'Professional Meta ads management. Facebook and Instagram advertising campaigns for better ROI.',
        keywords: ['Meta ads', 'Facebook ads', 'Instagram ads', 'social media advertising', 'PPC'],
        features: [
          'Campaign Strategy',
          'Audience Targeting',
          'Ad Creative Design',
          'A/B Testing',
          'Performance Tracking',
          'ROI Optimization',
          'Retargeting Campaigns',
          'Detailed Reporting'
        ],
        technologies: ['Meta Business Manager', 'Facebook Ads Manager', 'Meta Pixel', 'Analytics']
      },
      {
        title: 'Google Ads',
        slug: 'google-ads',
        description: 'Effective Google Ads campaigns to drive qualified traffic and increase conversions.',
        shortDescription: 'Professional Google Ads campaign management and optimization.',
        bannerImage: 'https://picsum.photos/1200/600?random=7',
        icon: 'search',
        seoTitle: 'Google Ads Management | PPC Campaign Optimization',
        seoDescription: 'Professional Google Ads management. PPC campaigns, keyword research, and conversion optimization.',
        keywords: ['Google Ads', 'PPC', 'search advertising', 'Google AdWords', 'paid search'],
        features: [
          'Keyword Research',
          'Campaign Setup',
          'Ad Copy Writing',
          'Landing Page Optimization',
          'Bid Management',
          'Quality Score Improvement',
          'Conversion Tracking',
          'Performance Analysis'
        ],
        technologies: ['Google Ads', 'Google Analytics', 'Google Tag Manager', 'Keyword Planner']
      },
      {
        title: 'SEO',
        slug: 'seo',
        description: 'Comprehensive SEO strategies to improve search engine rankings and increase organic traffic.',
        shortDescription: 'Comprehensive SEO services to improve search rankings.',
        bannerImage: 'https://picsum.photos/1200/600?random=8',
        icon: 'trending-up',
        seoTitle: 'SEO Services | Search Engine Optimization',
        seoDescription: 'Professional SEO services. On-page SEO, technical SEO, link building, and local SEO for better rankings.',
        keywords: ['SEO', 'search engine optimization', 'organic traffic', 'keyword ranking', 'local SEO'],
        features: [
          'Keyword Research',
          'On-Page Optimization',
          'Technical SEO',
          'Link Building',
          'Local SEO',
          'Content Strategy',
          'Site Speed Optimization',
          'Analytics & Reporting'
        ],
        technologies: ['Google Search Console', 'SEMrush', 'Ahrefs', 'Screaming Frog', 'Google Analytics']
      }
    ];

    for (const serviceData of services) {
      const existingService = await Service.findOne({ slug: serviceData.slug });
      if (!existingService) {
        const service = new Service(serviceData);
        await service.save();
        console.log(`Service created: ${serviceData.title}`);
      }
    }
  } catch (error) {
    console.error('Error seeding services:', error);
  }
}

async function seedCountries() {
  try {
    const countries = [
      {
        name: 'United States',
        slug: 'united-states',
        code: 'US',
        currency: 'USD',
        timezone: 'America/New_York',
        whatsappNumber: '+1234567890'
      },
      {
        name: 'India',
        slug: 'india',
        code: 'IN',
        currency: 'INR',
        timezone: 'Asia/Kolkata',
        whatsappNumber: '+919996821315'
      },
      {
        name: 'United Kingdom',
        slug: 'united-kingdom',
        code: 'GB',
        currency: 'GBP',
        timezone: 'Europe/London',
        whatsappNumber: '+441234567890'
      },
      {
        name: 'Canada',
        slug: 'canada',
        code: 'CA',
        currency: 'CAD',
        timezone: 'America/Toronto',
        whatsappNumber: '+1234567890'
      },
      {
        name: 'Australia',
        slug: 'australia',
        code: 'AU',
        currency: 'AUD',
        timezone: 'Australia/Sydney',
        whatsappNumber: '+61234567890'
      }
    ];

    for (const countryData of countries) {
      const existingCountry = await Country.findOne({ slug: countryData.slug });
      if (!existingCountry) {
        const country = new Country(countryData);
        await country.save();
        console.log(`Country created: ${countryData.name}`);
      }
    }
  } catch (error) {
    console.error('Error seeding countries:', error);
  }
}

async function seedCities() {
  try {
    const countries = await Country.find();
    const services = await Service.find();
    
    const cities = [
      {
        name: 'New York',
        slug: 'new-york',
        country: countries.find(c => c.code === 'US')._id,
        state: 'New York',
        population: 8336817,
        coordinates: { lat: 40.7128, lng: -74.0060 },
        services: services.slice(0, 4).map(s => s._id)
      },
      {
        name: 'Los Angeles',
        slug: 'los-angeles',
        country: countries.find(c => c.code === 'US')._id,
        state: 'California',
        population: 3979576,
        coordinates: { lat: 34.0522, lng: -118.2437 },
        services: services.slice(0, 6).map(s => s._id)
      },
      {
        name: 'Mumbai',
        slug: 'mumbai',
        country: countries.find(c => c.code === 'IN')._id,
        state: 'Maharashtra',
        population: 12442373,
        coordinates: { lat: 19.0760, lng: 72.8777 },
        services: services.map(s => s._id)
      },
      {
        name: 'Delhi',
        slug: 'delhi',
        country: countries.find(c => c.code === 'IN')._id,
        state: 'Delhi',
        population: 11034555,
        coordinates: { lat: 28.7041, lng: 77.1025 },
        services: services.map(s => s._id)
      },
      {
        name: 'Bangalore',
        slug: 'bangalore',
        country: countries.find(c => c.code === 'IN')._id,
        state: 'Karnataka',
        population: 8443675,
        coordinates: { lat: 12.9716, lng: 77.5946 },
        services: services.map(s => s._id)
      },
      {
        name: 'London',
        slug: 'london',
        country: countries.find(c => c.code === 'GB')._id,
        state: 'England',
        population: 8982000,
        coordinates: { lat: 51.5074, lng: -0.1278 },
        services: services.slice(0, 5).map(s => s._id)
      },
      {
        name: 'Toronto',
        slug: 'toronto',
        country: countries.find(c => c.code === 'CA')._id,
        state: 'Ontario',
        population: 2731571,
        coordinates: { lat: 43.6532, lng: -79.3832 },
        services: services.slice(0, 4).map(s => s._id)
      },
      {
        name: 'Sydney',
        slug: 'sydney',
        country: countries.find(c => c.code === 'AU')._id,
        state: 'New South Wales',
        population: 5312163,
        coordinates: { lat: -33.8688, lng: 151.2093 },
        services: services.slice(0, 3).map(s => s._id)
      }
    ];

    for (const cityData of cities) {
      const existingCity = await City.findOne({ slug: cityData.slug });
      if (!existingCity) {
        const city = new City(cityData);
        await city.save();
        console.log(`City created: ${cityData.name}`);
      }
    }
  } catch (error) {
    console.error('Error seeding cities:', error);
  }
}

async function seedProducts() {
  try {
    const products = [
      {
        name: 'RoomWala',
        slug: 'roomwala',
        description: 'Complete room rental management platform with advanced booking system, payment integration, and property management features.',
        shortDescription: 'Room rental management platform with booking and payment system.',
        logo: 'https://picsum.photos/200/200?random=20',
        screenshots: [
          'https://picsum.photos/800/600?random=21',
          'https://picsum.photos/800/600?random=22',
          'https://picsum.photos/800/600?random=23'
        ],
        features: [
          {
            title: 'Property Management',
            description: 'Manage multiple properties and rooms with ease',
            icon: 'home'
          },
          {
            title: 'Online Booking',
            description: 'Accept bookings 24/7 with automated confirmation',
            icon: 'calendar'
          },
          {
            title: 'Payment Integration',
            description: 'Secure payment processing with multiple gateways',
            icon: 'credit-card'
          },
          {
            title: 'Tenant Management',
            description: 'Complete tenant profiles and communication tools',
            icon: 'users'
          }
        ],
        pricing: {
          free: {
            features: ['Up to 5 rooms', 'Basic booking system', 'Email support']
          },
          premium: {
            price: '$29/month',
            features: ['Unlimited rooms', 'Advanced analytics', 'Priority support', 'Custom branding']
          }
        },
        demoUrl: 'https://demo.roomwala.com',
        downloadUrl: 'https://roomwala.com/download',
        seoTitle: 'RoomWala - Room Rental Management Platform',
        seoDescription: 'Complete room rental management solution with booking system, payment integration, and property management.',
        keywords: ['room rental', 'property management', 'booking system', 'rental software']
      }
    ];

    for (const productData of products) {
      const existingProduct = await Product.findOne({ slug: productData.slug });
      if (!existingProduct) {
        const product = new Product(productData);
        await product.save();
        console.log(`Product created: ${productData.name}`);
      }
    }
  } catch (error) {
    console.error('Error seeding products:', error);
  }
}

async function main() {
  await connectDB();
  
  console.log('Starting database seeding...');
  
  await seedAdminUser();
  await seedServices();
  await seedCountries();
  await seedCities();
  await seedProducts();
  
  console.log('Database seeding completed!');
  
  mongoose.connection.close();
}

main().catch(console.error);