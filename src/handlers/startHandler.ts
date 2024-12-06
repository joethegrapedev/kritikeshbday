import { Context } from "grammy";
import { getUserBalance } from "../services/wallet.ts";
import { keyboard } from "../utils/keyboard.ts";

export async function handleStart(ctx: Context) {
  try {
    const balance = await getUserBalance(); // Ensure this function fetches the correct user balance.

    await ctx.reply(
      `🎉 Welcome to Coinlol's XRP telegram trading bot!
      
💰 Current Balance: ${balance} XRP
📊 Open Positions: None

Getting Started:
1️⃣ To open a position, simply enter any ticker or token address
2️⃣ Use the Buy dashboard to set your purchase amount
3️⃣ Configure your settings via /settings
4️⃣ Manage your positions from the /home dashboard

💡 Pro Tip: Advanced traders can enable Auto Buy in settings to instantly purchase tokens.`,
      {
        reply_markup: keyboard(), // Use the keyboard imported from your utility.
      }
    );
  } catch (error) {
    console.error("Error in handleStart:", error);
    await ctx.reply(
      "⚠️ An error occurred while loading your balance. Please try again later.",
      {
        reply_markup: keyboard(),
      }
    );
  }
}
