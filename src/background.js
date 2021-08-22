'use strict'
const path = require('path')
import { app, Tray, BrowserWindow, Menu, globalShortcut } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
const isDevelopment = process.env.NODE_ENV !== 'production'
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'
// Scheme must be registered before the app is ready
Menu.setApplicationMenu(null)
let isShow = true
let appTray = null
async function createWindow() {
	// Create the browser window.
	const win = new BrowserWindow({
		width: 900,
		height: 505,
		webPreferences: {
			// Use pluginOptions.nodeIntegration, leave this alone
			// See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
			nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
			contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,
		},
	})

	if (process.env.WEBPACK_DEV_SERVER_URL) {
		await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
		if (!process.env.IS_TEST) win.webContents.openDevTools()
	} else {
		createProtocol('app')
		win.loadURL('app://./index.html')
	}
	setTray(win)
	win.on('minimize', function(event) {
		event.preventDefault()
		win.hide()
		isShow = false
	})
	globalShortcut.register('space+ctrl', () => {
		if (isShow) {
			win.hide()
			isShow = false
		} else {
			win.show()
			isShow = true
		}
	})

}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
	// On macOS it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('activate', () => {
	// On macOS it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
	if (isDevelopment && !process.env.IS_TEST) {
		// Install Vue Devtools
		try {
			await installExtension(VUEJS_DEVTOOLS)
		} catch (e) {
			console.error('Vue Devtools failed to install:', e.toString())
		}
	}
	createWindow()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
	if (process.platform === 'win32') {
		process.on('message', data => {
			if (data === 'graceful-exit') {
				app.quit()
			}
		})
	} else {
		process.on('SIGTERM', () => {
			app.quit()
		})
	}
}

function setTray(mainWindow) {
	let trayMenuTemplate = [
		{
			label: '退出',
			click: function() {
				app.quit()
			},
		},
	]
	// 当前目录下的app.ico图标
	let iconPath = path.resolve('./favicon.png')
	appTray = new Tray(iconPath)
	// 图标的上下文菜单
	const contextMenu = Menu.buildFromTemplate(trayMenuTemplate)
	mainWindow.hide()
	appTray.setToolTip('mtools')
	appTray.setContextMenu(contextMenu)
	appTray.on('click', function() {
		mainWindow.show()
		// appTray.destroy()
		isShow = true
	})
}