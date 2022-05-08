import { BrowserWindowConstructorOptions } from "electron/main";

export interface windowOptions extends BrowserWindowConstructorOptions {
  route: string;
  name: string;
}
