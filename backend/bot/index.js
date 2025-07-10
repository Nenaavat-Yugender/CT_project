// bot/index.js
import restify from 'restify';
import { BotFrameworkAdapter } from 'botbuilder';
import dotenv from 'dotenv';
import { RestaurantBot } from './bot.js';

dotenv.config();

const BOT_PORT = process.env.BOT_PORT || 3980;

// ✅ Create Restify server
const server = restify.createServer();

// ✅ Set necessary headers to handle CORS
server.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Or restrict to 'http://localhost:5173'
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type, x-ms-bot-agent');

  if (req.method === 'OPTIONS') {
    res.send(200);
    return;
  }

  return next();
});

// ✅ Start server
server.listen(BOT_PORT, () => {
  console.log(`🤖 Bot is running on http://localhost:${BOT_PORT}/api/messages`);
});

// ✅ Bot Framework Adapter
const adapter = new BotFrameworkAdapter({
  appId: process.env.MICROSOFT_APP_ID || '',
  appPassword: process.env.MICROSOFT_APP_PASSWORD || ''
});

// ✅ Error handling
adapter.onTurnError = async (context, error) => {
  console.error('❌ Bot error:', error);
  await context.sendActivity('Oops. Something went wrong!');
};

// ✅ Create bot instance
const bot = new RestaurantBot();

// ✅ Handle incoming messages from Web Chat
server.post('/api/messages', async (req, res) => {
  await adapter.processActivity(req, res, async (context) => {
    await bot.run(context);
  });
});
