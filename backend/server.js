// backend/server.js
import dotenv from 'dotenv';
import app from './app.js';
import connectDB from './config/db.js';

dotenv.config();
const PORT = process.env.PORT;
 
// Connect to MongoDB
connectDB();

// Start server
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
