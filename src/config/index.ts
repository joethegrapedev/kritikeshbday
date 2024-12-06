// Configuration object with environment variables and constants
export const config = {
    TELEGRAM_TOKEN: process.env.TELEGRAM_BOT_TOKEN || "",
    isDevelopment: process.env.NODE_ENV !== "production",
  };
  
  // Validate required configuration
  if (!config.TELEGRAM_TOKEN) {
    console.error("Missing TELEGRAM_BOT_TOKEN environment variable");
    process.exit(1);
  }