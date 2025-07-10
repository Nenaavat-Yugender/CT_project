import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: String,
  cuisine: String,
  priceRange: { type: String, enum: ['Low', 'Medium', 'High'] },
  description: String,
  image: String, // Optional: image URL
  rating: { type: Number, min: 0, max: 5, default: 4.2 } // ✅ added rating field
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
export default Restaurant;
