import mongoose from 'mongoose';

const ServiceCityPageSchema = new mongoose.Schema({
  city: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'City',
    required: true,
  },
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service',
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  // SEO Meta Data
  metaTitle: {
    type: String,
    required: true,
    maxlength: 60,
  },
  metaDescription: {
    type: String,
    required: true,
    maxlength: 160,
  },
  keywords: [String],
  
  // Generated Content
  content: {
    type: String,
    required: true,
  },
  
  // Publishing Status
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'draft',
  },
  
  // SEO Settings
  isIndexed: {
    type: Boolean,
    default: false, // Start as noindex
  },
  canonicalUrl: {
    type: String,
  },
  
  // Generation Info
  generatedAt: {
    type: Date,
    default: Date.now,
  },
  generatedBy: {
    type: String,
    default: 'AI_SEO_Generator',
  },
  
  // Performance Metrics
  views: {
    type: Number,
    default: 0,
  },
  lastViewed: {
    type: Date,
  },
  
  // Content Quality Score (1-100)
  qualityScore: {
    type: Number,
    min: 1,
    max: 100,
    default: 85,
  },
  
}, {
  timestamps: true,
});

// Compound indexes
ServiceCityPageSchema.index({ city: 1, service: 1 }, { unique: true });
ServiceCityPageSchema.index({ slug: 1 });
ServiceCityPageSchema.index({ status: 1, isIndexed: 1 });
ServiceCityPageSchema.index({ city: 1, status: 1 });
ServiceCityPageSchema.index({ service: 1, status: 1 });

// Generate slug from city and service
ServiceCityPageSchema.pre('save', async function(next) {
  if (!this.slug && this.city && this.service) {
    try {
      const city = await mongoose.model('City').findById(this.city);
      const service = await mongoose.model('Service').findById(this.service);
      
      if (city && service) {
        this.slug = `${service.slug}-in-${city.slug}`;
      }
    } catch (error) {
      console.error('Error generating slug:', error);
    }
  }
  next();
});

export default mongoose.models.ServiceCityPage || mongoose.model('ServiceCityPage', ServiceCityPageSchema);