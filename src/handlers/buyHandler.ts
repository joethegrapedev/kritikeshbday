import { Context } from "grammy";
import { buyKeyboard } from "../utils/keyboards";
// import { SOLANA_ADDRESS_REGEX } from "../utils/constants";

export function buyHandler(ctx: Context) {
    return ctx.reply(
        `Fartcoin  | Fartcoin  | 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump
Explorer (https://solscan.io/account/9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump) | Chart (https://dexscreener.com/solana/9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump?id=b3wx6at9) | Scan (https://t.me/RickBurpBot?start=9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump)

Price: $0.199
5m: -0.12%, 1h: -0.94%, 6h: -0.79%, 24h: -2.35%
Market Cap: $198.84M

Price Impact (5.0000 SOL): 1.29%

Wallet Balance: 0.0018 SOL
To buy press one of the buttons below.`,

        {
            reply_markup: {
                inline_keyboard: buyKeyboard("hi").inline_keyboard,
            }
        }
    );
}