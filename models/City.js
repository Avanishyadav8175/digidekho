import mongoose from 'mongoose';

const CitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    required: true,
    lowercase: true,
  },
  country: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Country',
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  population: {
    type: Number,
  },
  coordinates: {
    lat: Number,
    lng: Number,
  },
  services: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service',
  }],
  whatsappNumber: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  // SEO Content Generation Fields
  seoGenerated: {
    type: Boolean,
    default: false,
  },
  seoGeneratedAt: {
    type: Date,
  },
  seoStatus: {
    type: String,
    enum: ['pending', 'generating', 'completed', 'failed'],
    default: 'pending',
  },
}, {
  timestamps: true,
});

CitySchema.index({ slug: 1, country: 1 }, { unique: true });
CitySchema.index({ country: 1, isActive: 1 });
CitySchema.index({ seoGenerated: 1, seoStatus: 1 });

export default mongoose.models.City || mongoose.model('City', CitySchema);