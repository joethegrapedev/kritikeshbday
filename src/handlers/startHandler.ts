// src/handlers/startHandler.ts
import { Context } from "grammy";
import { getUserBalance } from "../services/wallet.ts";


export async function handleStart(ctx: Context) {
    // First, we'll get the user's balance. In the future, this will come from 
    // our wallet service, but for now we'll use a placeholder value
    const balance = getUserBalance(); // This will eventually come from getUserBalance()

    // We construct our welcome message, using a template literal for better readability
    // and to easily incorporate dynamic values like the balance
    return ctx.reply(`Welcome to Coinlol's XRP telegram trading bot!

You currently have a balance of ${balance} XRP, but no open positions.

To get started trading, you can open a position by buying a token.

To buy a token just enter a ticker, token address, or paste a coin.lol, pump.fun, Birdeye, DEX Screener or Meteora URL, and you will see a Buy dashboard pop up where you can choose how much you want to buy.Advanced traders can enable Auto Buy in their settings. When enabled, BONKbot will instantly buy any token you enter with a fixed amount that you set. This is disabled by default.`);
}