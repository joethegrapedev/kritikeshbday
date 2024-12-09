// src/handlers/startHandler.ts
import { Context } from "grammy";
import { getUserBalance } from "../services/wallet.ts";
import { startKeyboard } from "../utils/keyboards.ts";

export async function startHandler(ctx: Context) {
  try {
    const balance = await getUserBalance(); // Get user's balance
    const menuText = `🎉 Welcome to Coinlol's Solana telegram trading bot!

💰 Current Balance: ${balance} SOL
📊 Open Positions: None

Getting Started:
1️⃣ To open a position, simply enter any ticker or token address
2️⃣ Use the Buy dashboard to set your purchase amount
3️⃣ Configure your settings via /settings
4️⃣ Manage your positions from the /home dashboard

💡 Pro Tip: Advanced traders can enable Auto Buy in settings to instantly purchase tokens`;

    await ctx.reply(menuText, {
      reply_markup: {
        inline_keyboard: startKeyboard().inline_keyboard,
      }
    });
  } catch (error) {
    console.error('Error in start handler:', error);
    await ctx.reply('Sorry, there was an error loading your balance. Please try again.');
  }
}
