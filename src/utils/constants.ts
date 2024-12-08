// src/utils/constants.ts
export const COMMANDS = {
    HOME: "home",
    SETTINGS: "settings",
    BOTS: "bots",
    HELP: "help",
    START: 'start',
    BALANCE: 'balance',
    BUY: 'buy',
    SELL: 'sell'
  } as const;
  
  export const MESSAGES = {
    NOT_FOUND: 'Token not found. Make sure address is correct.',
    NO_BALANCE: 'Insufficient balance for this transaction.',
    SUCCESS_BUY: 'Successfully bought token.',
    SUCCESS_SELL: 'Successfully sold token.'
  } as const;
  
  export const DEX_URLS = {
    BIRDEYE: 'birdeye.so',
    DEXSCREENER: 'dexscreener.com',
    METEORA: 'meteora.ag'
  } as const;
  
  export const CHAIN = {
    CURRENT: 'XRP',
    GAS_TOKEN: 'XRP'
  }