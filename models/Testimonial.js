import mongoose from 'mongoose';

const TestimonialSchema = new mongoose.Schema({
  clientName: {
    type: String,
    required: true,
    trim: true,
  },
  clientImage: {
    type: String,
  },
  company: {
    type: String,
    trim: true,
  },
  designation: {
    type: String,
    trim: true,
  },
  content: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service',
    required: true,
  },
  city: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'City',
    required: true,
  },
  projectValue: {
    type: String,
  },
  videoUrl: {
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
}, {
  timestamps: true,
});

TestimonialSchema.index({ service: 1, city: 1 });
TestimonialSchema.index({ isActive: 1, isFeatured: -1 });

export default mongoose.models.Testimonial || mongoose.model('Testimonial', TestimonialSchema);