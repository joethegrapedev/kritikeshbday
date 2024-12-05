import { Bot } from "https://deno.land/x/grammy@v1.33.0/mod.ts";
import { config } from "./config/index.ts";
import { registerHandlers } from "./handlers/index.ts";

// Main bot initialization and startup function
async function startBot() {
    try {
        const bot = new Bot(config.TELEGRAM_TOKEN);

        // Register all command and message handlers
        registerHandlers(bot);

        // Start the bot
        console.log("Starting bot...");
        await bot.start();
    } catch (error) {
        console.error("Error starting bot:", error);
        Deno.exit(1);
    }
}

// Start the bot when this file is run directly
if (import.meta.main) {
    startBot();
}
