import { Context } from "grammy";

export async function handleMessage(ctx: Context) {
    // Check if the message contains text
    // This is a safety check since messages could also be images, files, etc.
    if (!ctx.message?.text) {
        return ctx.reply("Please send a text message.");
    }

    // Send our response, including the user's text in the message
    return ctx.reply(
        `Token not found. Make sure address (${ctx.message.text}) is correct. ` +
        `You can enter a ticker, token address, or a pump.fun, Solscan, ` +
        `Birdeye, DEX Screener or Meteora URL. If you are trying to enter ` +
        `a buy or sell amount, ensure you click and reply to the message.`
    );
}