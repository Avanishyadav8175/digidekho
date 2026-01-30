import mongoose from 'mongoose';

const FAQSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
});

const PricingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: String, required: true },
  features: [String],
  isPopular: { type: Boolean, default: false },
});

const ServiceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  description: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
    maxlength: 160,
  },
  bannerImage: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  seoTitle: {
    type: String,
    required: true,
    maxlength: 60,
  },
  seoDescription: {
    type: String,
    required: true,
    maxlength: 160,
  },
  keywords: [String],
  faqs: [FAQSchema],
  pricing: [PricingSchema],
  features: [String],
  technologies: [String],
  isActive: {
    type: Boolean,
    default: true,
  },
  order: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
});

ServiceSchema.index({ slug: 1 });
ServiceSchema.index({ isActive: 1, order: 1 });

export default mongoose.models.Service || mongoose.model('Service', ServiceSchema);