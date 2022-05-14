/* eslint-disable @typescript-eslint/ban-ts-comment */
import { app, BrowserWindow, globalShortcut } from "electron";
import { Window } from "./controllers/window/index.js";
const gotTheLock = app.requestSingleInstanceLock()
let mainWindow;
const isDevelopment = process.env.NODE_ENV !== "production";
function createWindow() {
  const window = new Window();
  const newWindow = window.createWindow({
    isMainWin: true,
    name: "Mtools",
    width: 1340,
    height: 800,
  });
  window.createTray();
  window.listen();
  return newWindow
}

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

if (!gotTheLock) {
  app.quit()
} else {
  app.on('second-instance', () => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore()
      mainWindow.focus()
    }
  })
  app.on('ready', () => {
    mainWindow = createWindow()
    console.log("mainWindow",mainWindow)
    globalShortcut.register('Ctrl+Shift+b', function(){
      mainWindow.webContents.openDevTools();
    });
  })
}

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
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


