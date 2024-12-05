// src/handlers/index.ts
import { Bot } from "https://deno.land/x/grammy@v1.33.0/mod.ts";
import { handleStart } from "./startHandler.ts";
import { handleMessage } from "./messageHandler.ts";

// Central function to register all handlers with the bot
export function registerHandlers(bot: Bot) {
    // Register command handlers
    bot.command("start", handleStart);

    // Register message handlers
    bot.on("message", handleMessage);
}