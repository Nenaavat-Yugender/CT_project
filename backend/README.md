STEP 1: Initialize Backend Project

    mkdir backend
    cd backend
    npm init -y

Install Required Dependencies

    npm install express mongoose dotenv cors morgan bcryptjs jsonwebtoken
    npm install nodemon --save-dev


backend/
├── config/
│   └── db.js                    # MongoDB config
│
├── controllers/
│   ├── authController.js
│   ├── restaurantController.js
│   ├── reservationController.js
│   ├── orderController.js
│   └── chatbotController.js
│
├── models/
│   ├── User.js
│   ├── Restaurant.js
│   ├── MenuItem.js
│   ├── Reservation.js
│   └── Order.js
│
├── routes/
│   ├── authRoutes.js
│   ├── restaurantRoutes.js
│   ├── reservationRoutes.js
│   ├── orderRoutes.js
│   └── chatbotRoutes.js
│
├── services/
│   └── chatbotService.js        # Integrate with MS Bot
│
├── middlewares/
│   ├── authMiddleware.js
│   └── errorMiddleware.js
│
├── data/
│   └── seed.js                  # Seed dummy data
└── bot/
    ├── index.js        # Bot server entry point
    └── bot.js          # Main bot logic (message handler)
│
├── app.js
├── server.js
├── .env
└── README.md

🧩 Step 1: Download & Install
    👉 Go to:
    🔗 GitHub Bot Emulator Releases
    Download the latest .exe file for Windows
    Install it like a regular application

🧪 Emulator Setup:
Open Microsoft Bot Framework Emulator ---> Click "Open Bot" ---> In the “Bot URL” field, enter: http://localhost:3978/api/messages
Leave Microsoft App ID and Password empty ,Click Connect
💬 Try typing:
    Hi,
    Show me restaurants,
    I want to see the menu

how to connect bot ? 
    -> 
    ```bash
        node bot/index.js
    ```

You should get matching replies like:  👋 Hi! I can help you find restaurants, menus, book tables, and place orders.

Your Bot Framework Emulator will connect to http://localhost:3978/api/messages



server.js – Entry Point of Your Backend App
        Purpose: This file initializes environment variables, connects to the database, and starts the Express server.
        Does NOT define routes or middlewares (keeps it clean).
        Good for separation of concerns: This file just starts the server.

app.js – Core Express Application Logic
        Purpose: Sets up middlewares, routes, and error handling.
        No server startup logic (no app.listen here).
        Keeps your express logic modular and testable.

📁 File     	🧩 Purpose
app.js	         Express app setup — middleware, routes, error handling
server.js	     Starts the app — loads environment and connects DB



📦 Step 1: Install Bot Framework SDK
    Navigate to your backend/ directory and run:

npm install botbuilder restify

## 🌱 Seed Restaurant Data

    ```bash
        node data/seed.js
    ```
    You should see: ✅ Restaurant data seeded!

## 🧪 Test Backend API with Postman

Make sure server is running:
```bash
    npm run dev
```

Get all restaurants   GET  -->  http://localhost:5000/api/restaurants
Filter by cuisine/location/price  GET --->   http://localhost:5000/api/restaurants?location=Delhi&cuisine=South Indian