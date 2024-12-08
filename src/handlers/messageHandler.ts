// src/handlers/messageHandler.ts
import { Context } from "grammy";
import { MESSAGES } from "../utils/constants";

export async function messageHandler(ctx: Context) {
  // Original basic message handling
  if (ctx.message?.text && !ctx.message.text.startsWith("/")) {
    await ctx.reply("Please use one of the available commands:\n/home\n/settings\n/bots\n/help");
  }
}

// Enhanced message handling
export async function handleMessage(ctx: Context) {
  if (!ctx.message?.text) {
    return ctx.reply("Please send a text message.");
  }

  return ctx.reply(
    `Token not found. Make sure address (${ctx.message.text}) is correct. ` +
    `You can enter a ticker, token address, or a pump.fun, Solscan, ` +
    `Birdeye, DEX Screener or Meteora URL. If you are trying to enter ` +
    `a buy or sell amount, ensure you click and reply to the message.`
  );
}