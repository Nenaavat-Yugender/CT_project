# 🍽️ Restaurant ChatBot App

A full-stack restaurant discovery web application integrated with a conversational AI chatbot to enhance the dining experience.

This project enables users to:

* 🔍 Discover restaurants by cuisine/location
* 📋 View menus with detailed descriptions
* 🗓 Book table reservations
* 🛒 Place and track orders
* 💬 Interact with an intelligent chatbot for queries

## 🌐 Tech Stack

| Layer     | Technology                       |
| --------- | -------------------------------- |
| Frontend  | React, Vite, TailwindCSS, Axios  |
| Backend   | Node.js, Express.js, MongoDB     |
| Chatbot   | Microsoft Bot Framework, RESTify |
| Auth      | JWT + bcrypt.js                  |
| Dev Tools | Postman, VS Code, Bot Emulator   |

---

## 📆 Folder Structure

```
/frontend           # React App
/backend            # Node.js + MongoDB + Bot logic
```

### Frontend Highlights

```
src/
🔼🔼 components/
🔼🔼 pages/
🔼🔼 services/api.js
🔼🔼 context/AuthContext.jsx
🔼 App.jsx
🔼 main.jsx
```

### Backend Highlights

```
backend/
🔼🔼 bot/
🔼🔼 controllers/
🔼🔼 models/
🔼🔼 routes/
🔼🔼 middlewares/
🔼🔼 data/seed.js
🔼🔼 config/db.js
🔼 app.js
🔼 server.js
```

---

## 🧠 ChatBot Features

* 🍽 **Find restaurants** by cuisine & location
* 📋 **Browse menus**
* 🗓 **Reserve tables**
* 🛒 **Place & track orders**
* 📦 **Personalized suggestions**
* 💬 Built with [Microsoft Bot Framework](https://github.com/microsoft/botframework-sdk)

---

## 🚀 Getting Started

### 🔧 Prerequisites

* Node.js + npm
* MongoDB (local or Atlas)
* Bot Framework Emulator

---

## ✅ Frontend Setup

```bash
# 1. Create & Install Dependencies
npm create vite@latest frontend -- --template react
cd frontend
npm install
npm install axios react-router-dom
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 2. Install Web Chat SDK
npm install botframework-webchat

# 3. Start Dev Server
npm run dev
```

### Example Test URLs

* Home Page: `http://localhost:5173/`
* Browse Restaurants: `/restaurants`
* Reservations: `/reservations`
* Orders: `/orders`

---

## ✅ Backend Setup

```bash
cd backend
npm install
npm install botbuilder restify
```

### 🌱 Seed Restaurant Data

```bash
node data/seed.js
# ✅ Restaurant data seeded!
```

### Start Backend Server

```bash
npm run dev
# Express server on http://localhost:5000
```

### Test API Endpoints (Postman)

| Endpoint                     | Type | URL                                                                                                                                   |
| ---------------------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Get All Restaurants          | GET  | [http://localhost:5000/api/restaurants](http://localhost:5000/api/restaurants)                                                        |
| Filter by Cuisine & Location | GET  | [http://localhost:5000/api/restaurants?cuisine=South](http://localhost:5000/api/restaurants?cuisine=South) Indian\&location=Hyderabad |
| User Register/Login          | POST | [http://localhost:5000/api/auth/register](http://localhost:5000/api/auth/register)                                                    |

---

## 🤖 Bot Server Setup

```bash
cd backend
node bot/index.js
# 🤖 Bot is running on http://localhost:3978/api/messages
```

### 🕪 Test with Bot Framework Emulator

1. Download from: [https://github.com/Microsoft/BotFramework-Emulator/releases](https://github.com/Microsoft/BotFramework-Emulator/releases)
2. Open Emulator → Click "Open Bot"
3. Bot URL: `http://localhost:3978/api/messages`
4. Leave Microsoft App ID & Password empty
5. Click **Connect**

💬 Try saying:

```
Show me Chinese in Delhi
Find South Indian food in Hyderabad
```

---

## 🔗 Frontend + ChatBot Integration

### `ChatBot.jsx`

Ensure the domain points to local bot server:

```jsx
const directLine = window.WebChat.createDirectLine({
  domain: 'http://localhost:3978/api/messages'
});
```

---

## 📚 Helpful Resources

* [https://github.com/microsoft/botframework-sdk](https://github.com/microsoft/botframework-sdk)
* [https://www.w3schools.com/MySQL/default.asp](https://www.w3schools.com/MySQL/default.asp)
* [https://nodejs.org/docs/latest/api](https://nodejs.org/docs/latest/api)
* [https://www.tutorialspoint.com/nodejs/nodejs\_express\_framework.htm](https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm)
* [https://learn.microsoft.com/en-us/azure/ai-services/language-service/conversational-language-understanding/overview](https://learn.microsoft.com/en-us/azure/ai-services/language-service/conversational-language-understanding/overview)

---

## ✨ Future Improvements

* ✅ Google Maps integration for nearby restaurants
* ✅ Real-time order tracking
* ✅ Stripe or Razorpay payment gateway
* ✅ Push notifications for order status

---

## 👨‍💼 Author

Built with ❤️ by **Nenavath Yugender**
BTech, IIT Madras
Contact: [LinkedIn](https://www.linkedin.com/in/nenaavath-yugender-496136310/)

---

