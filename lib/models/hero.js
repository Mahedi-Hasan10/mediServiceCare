import mongoose from 'mongoose';

const heroSchema = new mongoose.Schema({
  image: {
    type: String,
    required: false, 
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Hero = mongoose.model('Hero', heroSchema);

export default Hero;