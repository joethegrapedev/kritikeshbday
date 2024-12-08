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
    // Set bot commands with descriptions
    bot.api.setMyCommands([
        { command: "home", description: "view trades and open main menu" },
        { command: "settings", description: "customize your bot" },
        { command: "bots", description: "fast backup bots. same wallet & positions" },
        { command: "help", description: "get help and support" }
    ]);