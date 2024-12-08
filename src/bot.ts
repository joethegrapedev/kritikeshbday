import { Bot } from "grammy";
import { config } from "./config/index.ts";
import { registerHandlers } from "./handlers/index.ts";

async function startBot() {
    try {
        const bot = new Bot(config.TELEGRAM_TOKEN);

        // Register all command and message handlers
        registerHandlers(bot);

        console.log("Starting bot...");
        await bot.start();
    } catch (error) {
        console.error("Error starting bot:", error);
        process.exit(1);
    }
}

startBot();
