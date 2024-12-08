import { Bot } from "grammy";
import { handleStart } from "./startHandler.ts";
import { handleMessage } from "./messageHandler.ts";
import { handleSettings } from "./settingsHandler.ts";

export function registerHandlers(bot: Bot) {
    bot.command("start", handleStart);

    bot.command("home", handleStart);

    bot.command("settings", handleSettings);

    bot.on("message", handleMessage);

    
}