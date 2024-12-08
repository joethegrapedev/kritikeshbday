import { Context } from "grammy";
import { settingsKeyboard } from "../utils/keyboards";

export async function settingsHandler(ctx: Context) {


    return ctx.reply(
        `⚙️ GENERAL \n
🌐 Language: Switch languages 
 Min Position: Hide tokens below threshold
` + `
🤖 AUTO BUY
 Quick buy on paste
` + `
🎯 BUTTONS
 Customize buy/sell buttons
` + `
📊 SLIPPAGE
 Set buy/sell slippage
 Max impact protects in low liquidity
` + `
🔒 MEV PROTECT
 Turbo: Speed + protection when needed
 Secure: Max protection, might be slower
` + `
🔥 TX PRIORITY
The higher the tip, the faster the transaction lands.
` + `
🔐 SELL SAFETY
Double-confirm 100% sell commands`,
        {
            reply_markup: {
                inline_keyboard: settingsKeyboard().inline_keyboard,
            }
        }
    );
}
