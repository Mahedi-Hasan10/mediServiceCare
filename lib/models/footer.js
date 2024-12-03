import mongoose from 'mongoose';

const footerSchema = new mongoose.Schema({
  logo: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  registerAddress: {
    type: String,
    required: true,
  },
  socialMedia: {
    facebook: {
      type: String,
      required: true,
    },
    twitter: {
      type: String,
      required: true,
    },
    instagram: {
      type: String,
      required: true,
    },
    linkedin: {
      type: String,
      required: true,
    },
  },
  copyrightText: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Footer = mongoose.model('Footer', footerSchema);

export default Footer;