
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  brandname: {
    type: String,
    required: true,
  },  
  imageUrl: {
    type: String,
    
  },
}, { timestamps: true });

export default mongoose.models.Product || mongoose.model('Product', productSchema);