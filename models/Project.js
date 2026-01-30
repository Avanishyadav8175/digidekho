import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
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
  featuredImage: {
    type: String,
    required: true,
  },
  images: [String],
  liveUrl: {
    type: String,
  },
  githubUrl: {
    type: String,
  },
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service',
    required: true,
  },
  city: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'City',
  },
  client: {
    name: String,
    company: String,
  },
  technologies: [String],
  duration: {
    type: String,
  },
  budget: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  order: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
});

ProjectSchema.index({ slug: 1 });
ProjectSchema.index({ service: 1, isActive: 1 });
ProjectSchema.index({ isFeatured: -1, order: 1 });

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema);