import axios from 'axios';

// Base URL for your backend API (adjust as needed for local/dev/prod)
const API_BASE_URL = 'http://localhost:5000/api';

// Create an axios instance with defaults
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include JWT token if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// -------------------- Auth APIs --------------------
export const registerUser = (data) => api.post('/auth/register', data);
export const loginUser = (data) => api.post('/auth/login', data);

// -------------------- Restaurant APIs --------------------
export const getAllRestaurants = () => api.get('/restaurants');
export const getRestaurantById = (id) => api.get(`/restaurants/${id}`);

// -------------------- Menu APIs --------------------
export const getMenuByRestaurant = (restaurantId) => api.get(`/restaurants/${restaurantId}/menu`);

// -------------------- Reservation APIs --------------------
export const makeReservation = (data) => api.post('/reservations', data);
export const getUserReservations = () => api.get('/reservations');

// -------------------- Orders APIs --------------------
export const placeOrder = (data) => api.post('/orders', data);
export const getUserOrders = () => api.get('/orders');

// -------------------- Chatbot API --------------------
// This is a placeholder integration with Microsoft Bot Framework REST endpoint
export const sendChatMessage = (message) =>
  api.post('/chatbot/message', { message });

export default api;

/*
  🔗 Resources used:
  - Bot Framework SDK: https://github.com/microsoft/botframework-sdk
  - Microsoft Bot Emulator: https://github.com/Microsoft/BotFramework-Emulator/releases
  - Conversational AI Docs: https://learn.microsoft.com/en-us/azure/ai-services/language-service/conversational-language-understanding/overview
  - Node.js: https://nodejs.org/docs/latest/api
  - Express: https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm
*/
