import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
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
  content: {
    type: String,
    required: true,
  },
  excerpt: {
    type: String,
    required: true,
    maxlength: 200,
  },
  featuredImage: {
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
  tags: {
    services: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Service',
    }],
    cities: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'City',
    }],
    countries: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Country',
    }],
  },
  author: {
    type: String,
    required: true,
    default: 'Digital Dekho Team',
  },
  readTime: {
    type: Number,
    required: true,
  },
  isPublished: {
    type: Boolean,
    default: false,
  },
  publishedAt: {
    type: Date,
  },
  views: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
});

BlogSchema.index({ slug: 1 });
BlogSchema.index({ isPublished: 1, publishedAt: -1 });
BlogSchema.index({ 'tags.services': 1 });
BlogSchema.index({ 'tags.cities': 1 });

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema);