import { InlineKeyboard } from "grammy";

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

