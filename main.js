
const { app, BrowserWindow, ipcMain, Menu } = require('electron')
Menu.setApplicationMenu(null)
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'
app.on("ready", () => {
	const mainWindow = new BrowserWindow({
		width: 900,
		height: 500,
		// frame: false,
		resizable:false,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
			enableRemoteModule:true
		}
	})
	ipcMain.on("download", (params, params2) => {
		mainWindow.webContents.downloadURL(params2)
	})
	mainWindow.loadFile("./renderer/index.html")
	// mainWindow.webContents.openDevTools("bottom");
})
