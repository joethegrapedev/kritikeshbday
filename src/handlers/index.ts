import { Bot } from "grammy";
import { startHandler } from "./startHandler.js";
import { messageHandler } from "./messageHandler.js";

export function registerHandlers(bot: Bot) {
    // Set bot commands with descriptions
    bot.api.setMyCommands([
        { command: "home", description: "view trades and open main menu" },
        { command: "settings", description: "customize your bot" },
        { command: "bots", description: "fast backup bots. same wallet & positions" },
        { command: "help", description: "get help and support" }
    ]);

    // Register command handlers
    bot.command("start", startHandler);
    bot.command("home", async (ctx) => {
        await ctx.reply("🏠 Main Menu - View your trades and access main features");
    });
    bot.command("settings", async (ctx) => {
        await ctx.reply("⚙️ Settings - Customize your bot preferences");
    });
    bot.command("bots", async (ctx) => {
        await ctx.reply("🤖 Backup Bots - Access alternative bot instances\n\nAll bots share the same wallet and positions.");
    });
    bot.command("help", async (ctx) => {
        await ctx.reply("❓ Help Center - Get support and answers to common questions");
    });

    // Register message handler
    bot.on("message", messageHandler);

    // Error handling
    bot.catch((err) => {
        console.error("Error in bot:", err);
    });
}
