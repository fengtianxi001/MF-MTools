/* eslint-disable @typescript-eslint/ban-ts-comment */
import { app, BrowserWindow } from "electron";
const isDevelopment = process.env.NODE_ENV !== "production";

//@ts-ignore
import { Window } from "./controllers/window/index.js";

async function createWindow() {
  const window = new Window();
  window.createWindow({
    isMainWin: true,
    name: "Mtools",
    width: 1340,
    height: 800,
  });
  window.createTray();
  window.listen();
}

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

app.on("ready", async () => {
  createWindow();
});

if (isDevelopment) {
  if (process.platform === "win32") {
    process.on("message", (data) => {
      if (data === "graceful-exit") {
        app.quit();
      }
    });
  } else {
    process.on("SIGTERM", () => {
      app.quit();
    });
  }
}
