// src/config/index.ts
import { load } from "https://deno.land/std/dotenv/mod.ts";

// Load environment variables from .env file
const env = await load();

// Configuration object with environment variables and constants
export const config = {
    TELEGRAM_TOKEN: env["TELEGRAM_BOT_TOKEN"] || Deno.env.get("TELEGRAM_BOT_TOKEN") || "",
    isDevelopment: Deno.env.get("DENO_ENV") !== "production",
};

// Validate required configuration
if (!config.TELEGRAM_TOKEN) {
    console.error("Missing TELEGRAM_BOT_TOKEN environment variable");
    Deno.exit(1);
}