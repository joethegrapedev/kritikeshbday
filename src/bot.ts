import { Bot } from "https://deno.land/x/grammy@v1.33.0/mod.ts";

// Create an instance of the `Bot` class and pass your bot token to it.
const bot = new Bot("7730783927:AAHtbFCz9FYFeuAL6LQ5krpwD1LuaA8TP34"); 

// Welcome message
bot.command("start", (ctx) => ctx.reply(`Welcome to BONKBot

You currently have a balance of 0.0018 SOL, but no open positions.

To get started trading, you can open a position by buying a token.

To buy a token just enter a ticker, token address, or paste a pump.fun, Birdeye, DEX Screener or Meteora URL, and you will see a Buy dashboard pop up where you can choose how much you want to buy.Advanced traders can enable Auto Buy in their settings. When enabled, BONKbot will instantly buy any token you enter with a fixed amount that you set. This is disabled by default. 
`));

// Handle other messages.
bot.on("message", (ctx) => ctx.reply(`Token not found. Make sure address (${ctx.message.text}) is correct. You can enter a ticker, token address, or a pump.fun, Solscan, Birdeye, DEX Screener or Meteora URL. If you are trying to enter a buy or sell amount, ensure you click and reply to the message.`));

// Start the bot.
bot.start();