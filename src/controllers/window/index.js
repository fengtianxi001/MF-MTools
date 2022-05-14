import { app, BrowserWindow, ipcMain, Menu, Tray } from "electron";
import { createProtocol } from "vue-cli-plugin-electron-builder/lib";
import { isNumber } from "lodash-es";
import path from "path";

const windowDefaultOptions = {
  width: 800,
  height: 500,
  backgroundColor: "#fff",
  autoHideMenuBar: true,
  resizable: true,
  minimizable: true,
  maximizable: true,
  frame: false,
  show: false,
  webPreferences: {
    contextIsolation: false,
    nodeIntegration: true,
    webSecurity: false,
    enableRemoteModule: true,
  },
};

export class Window {
  constructor() {
    this.windowMap = new Map();
    this.windowTRay = null;
    this.windowMain = null;
  }
  getWindowByName(name) {
    const id = this.windowMap.get(name);
    return isNumber(id) ? this.getWindowById(id) : false;
  }
  getWindowById(id) {
    return BrowserWindow.fromId(id);
  }
  createWindowOptions(config) {
    const options = Object.assign({}, windowDefaultOptions, config);
    const { name, parentName } = options;
    const window = this.getWindowByName(name);
    if (window) {
      return window.focus();
    }
    const parentWindow = this.getWindowByName(parentName);
    if (parentName && parentWindow) {
      options.parent = parentWindow;
    }
    // console.log("options",options)
    return options;
  }

  createWindow(config) {
    const options = this.createWindowOptions(config);
    if(!options) return false
    const { name, isMainWin, route, title } = options;
    let newWindow = new BrowserWindow(options);
    newWindow.setTitle(title||"123");
    newWindow.webContents.openDevTools();
    if (!name) {
      throw new Error("创建的名字是必须的");
    }
    this.windowMap.set(options.name, newWindow.id);
    if (isMainWin) {
      if (this.windowMain) {
        this.windowMap.delete(name);
        this.windowMain.close();
      }
      this.windowMain = newWindow;
      options.id = newWindow.id;
    }
    // 加载页面
    let windowURL;
    if (process.env.WEBPACK_DEV_SERVER_URL) {
      // 测试环境下
      windowURL = route
        ? `http://localhost:8080/#${route}`
        : `http://localhost:8080`;
    } else {
      createProtocol("app");
      windowURL = route ? `app://./index.html/#${route}` : `app://./index.html`;
    }
    newWindow.loadURL(windowURL);
    newWindow.once("ready-to-show", newWindow.show);
    // 屏蔽窗口菜单
    newWindow.hookWindowMessage(278, (e) => {
      newWindow.setEnabled(false);
      setTimeout(() => newWindow.setEnabled(true), 100);
      return true;
    });
  }
  closeAllWindows() {
    this.windowMap.forEach((id) => {
      const window = this.getWindowById(id);
      window && window.close();
    });
    app.quit();
  }
  createTray() {
    const { windowMap, getWindowById } = this;
    const dashBoardItem = {
      label: "显示主页面",
      click() {
        windowMap.forEach((id) => {
          const window = getWindowById(id);
          if (window) {
            window.isMinimized() && window.restore();
            window.show();
          }
        });
      },
    };
    const quitItem = {
      label: "退出程序",
      click() {
        app.quit();
      },
    };
    const contextMenu = Menu.buildFromTemplate([dashBoardItem, quitItem]);
    const trayIcon = path.join(__dirname, "../static/logo.png");
    this.windowTRay = new Tray(trayIcon);
    this.windowTRay.setContextMenu(contextMenu);
    this.windowTRay.setToolTip(app.name);
  }
  listen() {
    ipcMain.on("window-create", (event, options) => {
      console.log("this is active");
      this.createWindow(options);
    });

    ipcMain.on("window-closed", (event, windowName) => {
      if (windowName) {
        this.windowMap.get(windowName).close();
        this.windowMap.delete(windowName);
      } else {
        this.closeAllWindows();
      }
    });
    ipcMain.on("window-hide", (event, windowName) => {
      if (windowName) {
        this.windowMap.get(windowName).hide();
      } else {
        this.windowMap.forEach((windowName, windowInstance) => {
          windowInstance.hide();
        });
      }
    });
    ipcMain.on("window-show", (event, windowName) => {
      if (windowName) {
        this.windowMap.get(windowName).show();
      } else {
        this.windowMap.forEach((windowName, windowInstance) => {
          windowInstance.show();
        });
      }
    });
    ipcMain.on("window-mini", (event, windowName) => {
      if (windowName) {
        this.windowMap.get(windowName).maximize();
      } else {
        this.windowMap.forEach((windowName, windowInstance) => {
          windowInstance.maximize();
        });
      }
    });
    ipcMain.on("window-max-min-size", (event, windowName) => {
      if (windowName) {
        const windowInstance = this.windowMap(windowName);
        if (windowInstance.isMaximized()) {
          windowInstance.unmaximize();
        } else {
          windowInstance.maximize();
        }
      }
    });
    ipcMain.on("window-restore", (event, windowName) => {
      if (windowName) {
        this.windowMap.get(windowName).restore();
      } else {
        this.windowMap.forEach((windowName, windowInstance) => {
          windowInstance.restore();
        });
      }
    });
    ipcMain.on("window-reload", (event, windowName) => {
      if (windowName) {
        this.windowMap.get(windowName).reload();
      } else {
        this.windowMap.forEach((windowName, windowInstance) => {
          windowInstance.reload();
        });
      }
    });
  }
}
