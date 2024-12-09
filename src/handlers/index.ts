import { Bot } from "grammy";
import { startHandler } from "./startHandler";
import { messageHandler } from "./messageHandler";
import { settingsHandler } from "./settingsHandler";
import { Help } from "./helpHandler";
import { buyHandler } from "./buyHandler";

// Commands interface for better type safety
interface BotCommand {
    command: string;
    description: string;
}

const BOT_COMMANDS: BotCommand[] = [
    { command: "home", description: "view open positions from the main menu" },
    { command: "settings", description: "customize your bot settings" },
    { command: "bots", description: "fast backup bots. same wallet & positions" },
    { command: "help", description: "get help and support" }
];

export function registerHandlers(bot: Bot) {
    // menu button at bottom left.
    bot.api.setMyCommands(BOT_COMMANDS);

    bot.command("start", startHandler);
    bot.command("home", startHandler); 
    bot.command("settings", settingsHandler);
    bot.command("help", Help)
    bot.command("buy", buyHandler)

    bot.on("message", messageHandler);

    // Error handling
    bot.catch((err) => {
        const errorMessage = err instanceof Error ? err.message : String(err);
        console.error("Error in bot:", errorMessage);
    });
}