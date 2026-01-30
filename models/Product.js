import mongoose from 'mongoose';

const FeatureSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String },
});

const ProductSchema = new mongoose.Schema({
  name: {
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
  logo: {
    type: String,
    required: true,
  },
  screenshots: [String],
  features: [FeatureSchema],
  pricing: {
    free: {
      features: [String],
    },
    premium: {
      price: String,
      features: [String],
    },
  },
  demoUrl: {
    type: String,
  },
  downloadUrl: {
    type: String,
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
  isActive: {
    type: Boolean,
    default: true,
  },
  downloads: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
});

ProductSchema.index({ slug: 1 });
ProductSchema.index({ isActive: 1 });

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);