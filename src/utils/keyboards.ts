import { Keyboard, InlineKeyboard } from "grammy";

// Regular keyboard
export const mainKeyboard = new Keyboard()
    .text("/home")
    .text("/settings")
    .row()
    .text("/bots")
    .text("/help")
    .resized();

// Your inline keyboard - keeping it exactly as provided
export const startKeyboard = () => {
  return new InlineKeyboard()
    .text("Buy", "buy")
    .text("Sell & Manage", "sell_manage")
    .row()
    .text("Help", "help")
    .text("Refer Friends", "refer_friends")
    .text("Alerts", "alerts")
    .row()
    .text("Wallet", "wallet")
    .text("Settings", "settings")
    .text("Limit Orders", "limit_orders")
    .row()
    .text("Pin", "pin")
    .text("Refresh", "refresh");
};
