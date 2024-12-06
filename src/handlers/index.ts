// src/handlers/index.ts
import { Bot } from "grammy";
import { handleStart } from "./startHandler.ts";
import { handleMessage } from "./messageHandler.ts";

// Central function to register all handlers with the bot
export function registerHandlers(bot: Bot) {
    // Register command handlers
    bot.command("start", handleStart);

    // Register message handlers
    bot.on("message", handleMessage);
}