// Step 1: Project Initialization
// We'll be using Vite for fast React setup

// Run these in your terminal:
// npm create vite@latest frontend -- --template react
// cd frontend
// npm install
// npm install axios react-router-dom
// npm install -D tailwindcss postcss autoprefixer
// npx tailwindcss init -p


// Folder Structure (src)
// src/
// ├── assets/
// ├── components/
// │   ├── Navbar.jsx
// │   ├── Footer.jsx
// │   ├── RestaurantCard.jsx
// │   ├── MenuItem.jsx
// │   └── ChatBot.jsx
// ├── pages/
// │   ├── Home.jsx
// │   ├── BrowseRestaurants.jsx
// │   ├── RestaurantDetails.jsx
// │   ├── Cart.jsx
// │   ├── Reservations.jsx
// │   ├── Orders.jsx
// │   ├── Login.jsx
// │   └── Signup.jsx
// ├── services/
// │   └── api.js
// ├── context/
// │   └── AuthContext.jsx
// ├── App.jsx
// └── main.jsx



✅ services/api.js is now implemented using axios and based on the resources you provided.

🔧 Features included:
🔐 Auth: registerUser, loginUser
🍽 Restaurants: getAllRestaurants, getRestaurantById
📜 Menu: getMenuByRestaurant
📆 Reservations: makeReservation, getUserReservations
📦 Orders: placeOrder, getUserOrders
🤖 ChatBot: sendChatMessage (Microsoft Bot API)
All requests auto-include JWT tokens from localStorage for authentication.



✅ Step 1: 1. Install the botframework-webchat + peer dependencies
In your React project (inside frontend/), run:
```bash
    npm install botframework-webchat

```