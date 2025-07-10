import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Restaurant from '../models/Restaurant.js';

dotenv.config();

// Sample data
export const restaurants = [
  {
    name: 'Punjabi Tandoori Dhaba',
    location: 'Delhi',
    cuisine: 'North Indian',
    priceRange: 'Low',
    rating: 4.5,
    description: 'Authentic North Indian dhaba-style food with buttery naan and spicy gravies.',
    image: 'https://images.unsplash.com/photo-1604908811899-0e6d13e9e674?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Saffron Spice',
    location: 'Hyderabad',
    cuisine: 'South Indian',
    priceRange: 'Medium',
    rating: 4.2,
    description: 'Traditional South Indian meals, biryanis, and filter coffee in a cozy setting.',
    image: 'https://images.unsplash.com/photo-1600708850973-18f10b23ba3d?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Dragon Bowl',
    location: 'Mumbai',
    cuisine: 'Chinese',
    priceRange: 'Medium',
    rating: 4.0,
    description: 'Szechuan specialties and Indo-Chinese fusion favorites.',
    image: 'https://images.unsplash.com/photo-1562967916-eb82221dfb36?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'The Italian Oven',
    location: 'Bangalore',
    cuisine: 'Italian',
    priceRange: 'High',
    rating: 4.7,
    description: 'Wood-fired pizzas, handmade pasta, and desserts straight from Italy.',
    image: 'https://images.unsplash.com/photo-1603133872878-684f5bba1d11?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Sushi Zen',
    location: 'Delhi',
    cuisine: 'Japanese',
    priceRange: 'High',
    rating: 4.6,
    description: 'Premium sushi platters and authentic Japanese ramen and tempura.',
    image: 'https://images.unsplash.com/photo-1579881260140-998ac43a23dc?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Mexican Fiesta',
    location: 'Chennai',
    cuisine: 'Mexican',
    priceRange: 'Low',
    rating: 4.1,
    description: 'Tacos, burritos, and nachos served with a spicy twist.',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Wok & Roll',
    location: 'Pune',
    cuisine: 'Chinese',
    priceRange: 'Low',
    rating: 3.9,
    description: 'Quick stir-fried meals and budget Chinese combos.',
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Tokyo Bites',
    location: 'Hyderabad',
    cuisine: 'Japanese',
    priceRange: 'Medium',
    rating: 4.3,
    description: 'Sushi rolls and ramen bowls crafted by Japanese chefs.',
    image: 'https://images.unsplash.com/photo-1532634896-26909d0d2e44?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Biryani Bazaar',
    location: 'Hyderabad',
    cuisine: 'South Indian',
    priceRange: 'Medium',
    rating: 4.4,
    description: 'Hyderabadi biryanis with spicy sides and cool desserts.',
    image: 'https://images.unsplash.com/photo-1620207418302-439b387441b0?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Taste of Tuscany',
    location: 'Mumbai',
    cuisine: 'Italian',
    priceRange: 'High',
    rating: 4.8,
    description: 'Luxury dining with authentic Tuscan dishes and wines.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Bangalore BBQ',
    location: 'Bangalore',
    cuisine: 'Multi-cuisine',
    priceRange: 'Medium',
    rating: 4.2,
    description: 'Buffet-style barbecue with a wide array of global dishes.',
    image: 'https://images.unsplash.com/photo-1551854838-dbf10f6029d6?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Thali House',
    location: 'Delhi',
    cuisine: 'North Indian',
    priceRange: 'Low',
    rating: 4.0,
    description: 'Affordable Indian thalis served with love and spice.',
    image: 'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Spice Route',
    location: 'Chennai',
    cuisine: 'South Indian',
    priceRange: 'Medium',
    rating: 4.3,
    description: 'Dosas, idlis, and spicy Andhra curries in a rustic ambience.',
    image: 'https://images.unsplash.com/photo-1555992336-03a23c20a7e4?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Roll It Up',
    location: 'Mumbai',
    cuisine: 'Multi-cuisine',
    priceRange: 'Low',
    rating: 3.8,
    description: 'Kathi rolls, frankies, and wraps on-the-go.',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Sushi Spot',
    location: 'Bangalore',
    cuisine: 'Japanese',
    priceRange: 'High',
    rating: 4.7,
    description: 'Contemporary sushi bar with fresh daily ingredients.',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Olive Gardenia',
    location: 'Hyderabad',
    cuisine: 'Mediterranean',
    priceRange: 'High',
    rating: 4.5,
    description: 'Grilled meats, hummus platters, and Greek salads.',
    image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Tandoor Treats',
    location: 'Delhi',
    cuisine: 'North Indian',
    priceRange: 'Medium',
    rating: 4.2,
    description: 'Delicious kebabs and tandoori dishes with naan.',
    image: 'https://images.unsplash.com/photo-1579613832220-3936b46e2c2a?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Waffle World',
    location: 'Pune',
    cuisine: 'American',
    priceRange: 'Low',
    rating: 3.9,
    description: 'Waffles, pancakes, and shakes with sweet toppings.',
    image: 'https://images.unsplash.com/photo-1586441942982-3ca6bff78a7a?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Cheesy Crust',
    location: 'Chennai',
    cuisine: 'Italian',
    priceRange: 'Low',
    rating: 4.1,
    description: 'Loaded pizzas with gooey cheese and bold toppings.',
    image: 'https://images.unsplash.com/photo-1601924560764-cc8c2e1a36ad?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Royal Biryani',
    location: 'Hyderabad',
    cuisine: 'South Indian',
    priceRange: 'High',
    rating: 4.6,
    description: 'Aromatic dum biryanis with traditional accompaniments.',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Green Bowl',
    location: 'Mumbai',
    cuisine: 'Mediterranean',
    priceRange: 'Medium',
    rating: 4.3,
    description: 'Healthy salads and wraps made with fresh ingredients.',
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Spice Junction',
    location: 'Bangalore',
    cuisine: 'North Indian',
    priceRange: 'Medium',
    rating: 4.2,
    description: 'Rich gravies, biryanis, and stuffed parathas.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Dimsum Den',
    location: 'Chennai',
    cuisine: 'Chinese',
    priceRange: 'Low',
    rating: 3.7,
    description: 'Affordable and delicious dim sum baskets and noodles.',
    image: 'https://images.unsplash.com/photo-1562967916-eb82221dfb36?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Masala Mix',
    location: 'Hyderabad',
    cuisine: 'Multi-cuisine',
    priceRange: 'Low',
    rating: 4.0,
    description: 'Variety of dishes including Indian, Chinese and continental.',
    image: 'https://images.unsplash.com/photo-1543353071-087092ec3936?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'The Urban Bowl',
    location: 'Delhi',
    cuisine: 'American',
    priceRange: 'Medium',
    rating: 4.1,
    description: 'Burgers, fries, and grilled meat platters.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Roti & Curry',
    location: 'Bangalore',
    cuisine: 'North Indian',
    priceRange: 'Low',
    rating: 4.2,
    description: 'Simple yet flavorful Indian meals at pocket-friendly prices.',
    image: 'https://images.unsplash.com/photo-1523986371872-9d3ba2e2c0f3?auto=format&fit=crop&w=400&q=80'
  }
];



// Insert sample restaurants into DB
const seedRestaurants = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Restaurant.deleteMany();
    await Restaurant.insertMany(restaurants);
    console.log('✅ Restaurant data seeded!');
    process.exit();
  } catch (err) {
    console.error('❌ Error seeding data:', err);
    process.exit(1);
  }
};

seedRestaurants();
