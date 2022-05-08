import { ipcRenderer, remote } from "electron";
import { windowOptions } from "./type";
export function createWindow(options: windowOptions) {
  ipcRenderer.send("window-create", options);
}

export function closeWindowById(id: string) {
  ipcRenderer.send("window-closed", id);
}

export function closeWindowCurrent() {
  const currentWindow = remote.getCurrentWindow();
  currentWindow?.close();
}

export function miniWindowCurrent() {
  const currentWindow = remote.getCurrentWindow();
  currentWindow?.minimizable && currentWindow?.minimize();
}

export function maxiWindowCurrent() {
  const currentWindow = remote.getCurrentWindow();
  currentWindow.maximizable && currentWindow?.maximize();
}
