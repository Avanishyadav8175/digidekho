import mongoose from 'mongoose';

const LeadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    trim: true,
  },
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service',
  },
  city: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'City',
  },
  message: {
    type: String,
    required: true,
  },
  budget: {
    type: String,
  },
  timeline: {
    type: String,
  },
  source: {
    type: String,
    enum: ['website', 'whatsapp', 'phone', 'referral', 'social'],
    default: 'website',
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'qualified', 'proposal', 'won', 'lost'],
    default: 'new',
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium',
  },
  notes: [{
    content: String,
    addedBy: String,
    addedAt: { type: Date, default: Date.now },
  }],
}, {
  timestamps: true,
});

LeadSchema.index({ status: 1, createdAt: -1 });
LeadSchema.index({ service: 1, city: 1 });

export default mongoose.models.Lead || mongoose.model('Lead', LeadSchema);