import express from 'express';
import { getRestaurants } from '../controllers/restaurantController.js';

const router = express.Router();

// GET /api/restaurants
router.get('/', getRestaurants);

export default router;
