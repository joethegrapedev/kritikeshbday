import { Keyboard } from "grammy";

export const keyboard = () => {
  return new Keyboard()
    .text("Buy").text("Sell & Manage")
    .row()
    .text("Help").text("Refer Friends").text("Alerts")
    .row()
    .text("Wallet").text("Settings").text("Limit Orders")
    .row()
    .text("Pin").text("Refresh")
    .resized()
    .persistent();
};
function persistent() {
    throw new Error("Function not implemented.");
}

