/* eslint-disable @typescript-eslint/ban-ts-comment */
import { app, BrowserWindow } from "electron";
import { Window } from "./controllers/window/index.js";
const gotTheLock = app.requestSingleInstanceLock()
let mainWindow;
const isDevelopment = process.env.NODE_ENV !== "production";
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
  return createWindow
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
    // 当运行第二个实例时,将会聚焦到myWindow这个窗口
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore()
      mainWindow.focus()
    }
  })
  app.on('ready', () => {
    mainWindow = createWindow()
  })
}

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

// app.on("ready", async () => {
//   createWindow();
// });
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
