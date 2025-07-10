// bot/bot.js
import { ActivityHandler } from 'botbuilder';
import fetch from 'node-fetch'; // For calling backend API

export class RestaurantBot extends ActivityHandler {
  constructor() {
    super();

    this.onMessage(async (context, next) => {
      const userMessage = context.activity.text?.toLowerCase() || '';
      console.log('📩 User Message:', userMessage);

      // 👉 Simple test message (before processing actual logic)
      if (userMessage === 'test') {
        await context.sendActivity("✅ Bot is working!");
        await next();
        return;
      }

      // 👉 Match cuisine & location
      const cuisineMatch = userMessage.match(/(south indian|north indian|chinese|italian|japanese|multi-cuisine)/i);
      const locationMatch = userMessage.match(/in (\w+)/i);

      const cuisine = cuisineMatch ? cuisineMatch[1] : null;
      const location = locationMatch ? locationMatch[1] : null;

      if (cuisine && location) {
        try {
          const url = `http://localhost:5000/api/restaurants?cuisine=${encodeURIComponent(cuisine)}&location=${encodeURIComponent(location)}`;
          console.log('🔍 Fetching:', url);

          const response = await fetch(url);
          const restaurants = await response.json();

          if (!restaurants.length) {
            await context.sendActivity(`😕 No ${cuisine} restaurants found in ${location}.`);
          } else {
            const reply = restaurants.map((r, i) => (
              `${i + 1}. ${r.name} (${r.priceRange})\n➡ ${r.description}`
            )).join('\n\n');

            await context.sendActivity(`🍽️ ${cuisine} restaurants in ${location}:\n\n${reply}`);
          }
        } catch (err) {
          console.error('❌ API Error:', err);
          await context.sendActivity('⚠️ Failed to fetch restaurant info.');
        }
      } else {
        // 👇 Help/fallback message
        await context.sendActivity(
          `🤖 I didn't understand. Try asking something like:\n\n- Show me South Indian food in Hyderabad\n- Find Chinese in Delhi`
        );
      }

      await next();
    });

    this.onMembersAdded(async (context, next) => {
      for (const member of context.activity.membersAdded || []) {
        if (member.id !== context.activity.recipient.id) {
          await context.sendActivity(
            `👋 Welcome to the RestaurantBot!\nTry something like:\n"Show me North Indian food in Delhi"`
          );
        }
      }

      await next();
    });
  }
}
