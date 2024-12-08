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

export const settingsKeyboard = () => {
  return new InlineKeyboard()
      .text ("General Settings")
      .row()
      .text("Language: 🇬🇧", "change_language")
      .text("Min Pos Value: $10", "change_min_pos")
      .row()
      // Auto Buy
      .text("🔴 Disabled", "toggle_auto_buy")
      .text("0.10 SOL", "change_auto_buy_amount")
      .row()
      // Buy Buttons Config
      .text("Left: 1.0 SOL", "change_buy_left")
      .text("Right: 5.0 SOL", "change_buy_right")
      .row()
      // Sell Buttons Config
      .text("Left: 25%", "change_sell_left")
      .text("Right: 100%", "change_sell_right")
      .row()
      // Slippage Config
      .text("Buy: 5%", "change_buy_slippage")
      .text("Sell: 10%", "change_sell_slippage")
      .row()
      .text("Max Price Impact: 25%", "change_max_price_impact")
      .row()
      // MEV Protect
      .text("Secure", "toggle_mev_protect")
      .row()
      // Transaction Priority
      .text("Custom", "change_priority_type")
      .text("0.00501 SOL", "change_priority_amount")
      .row()
      // Sell Protection
      .text("🟢 Enabled", "toggle_sell_protection")
      .row()
      // Restore Defaults and Close
      .text("Restore Defaults", "restore_defaults")
      .text("Close menu", "close_settings");
};