import { Bot } from "grammy";
import { handleStart } from "./startHandler.ts";
import { handleMessage } from "./messageHandler.ts";

export function registerHandlers(bot: Bot) {
    bot.command("start", handleStart);

    bot.command("home", handleStart);

    bot.on("message", handleMessage);
}