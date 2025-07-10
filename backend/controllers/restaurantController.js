import Restaurant from '../models/Restaurant.js';

// @desc    Get all restaurants with optional filters
// @route   GET /api/restaurants
// @access  Public
export const getRestaurants = async (req, res) => {
  try {
    const { location, cuisine, priceRange } = req.query;

    const query = {};

    if (location) query.location = new RegExp(location, 'i');
    if (cuisine) query.cuisine = new RegExp(cuisine, 'i');
    if (priceRange) query.priceRange = priceRange;

    const restaurants = await Restaurant.find(query);
    res.status(200).json(restaurants);
  } catch (err) {
    res.status(500).json({ message: 'Server error fetching restaurants' });
  }
};
