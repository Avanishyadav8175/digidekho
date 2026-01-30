import mongoose from 'mongoose';

const CountrySchema = new mongoose.Schema({
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
  code: {
    type: String,
    required: true,
    uppercase: true,
    length: 2,
  },
  currency: {
    type: String,
    required: true,
  },
  timezone: {
    type: String,
    required: true,
  },
  whatsappNumber: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
});

CountrySchema.index({ slug: 1 });
CountrySchema.index({ code: 1 });

export default mongoose.models.Country || mongoose.model('Country', CountrySchema);