import { Context } from "grammy";
import { getUserBalance } from "../services/wallet.ts";
import { inlineKeyboard } from "../utils/keyboard.ts";

export async function handleStart(ctx: Context) {
  const balance = await getUserBalance(); // This will eventually come from getUser

  return ctx.reply(
    `🎉 Welcome to Coinlol's XRP telegram trading bot!
    
💰 Current Balance: ${balance} XRP
📊 Open Positions: None

Getting Started:
1️⃣ To open a position, simply enter any ticker or token address
2️⃣ Use the Buy dashboard to set your purchase amount
3️⃣ Configure your settings via /settings
4️⃣ Manage your positions from the /home dashboard

💡 Pro Tip: Advanced traders can enable Auto Buy in settings to instantly purchase tokens`,
    {
      reply_markup: {
        inline_keyboard: inlineKeyboard().inline_keyboard,
      }
    }
  );
}
