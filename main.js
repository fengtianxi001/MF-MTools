const {
	app,
	BrowserWindow,
	ipcMain,
	Menu,
	Tray,
	globalShortcut,
} = require('electron')
const path = require('path')

const gotTheLock = app.requestSingleInstanceLock()

let isShow = true
let appTray = null
Menu.setApplicationMenu(null)

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'
app.on('ready', () => {
	const mainWindow = new BrowserWindow({
		width: 900,
		height: 505,
		frame: false,
		resizable: false,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
			enableRemoteModule: true,
		},
	})

	mainWindow.loadFile('./renderer/index.html')
	mainWindow.on('minimize', function (event) {
		event.preventDefault()
		mainWindow.hide()
		setTray(mainWindow)
		isShow = false
	})
	if (!gotTheLock) {
		app.quit()
	} else {
		app.on('second-instance', (event, commandLine, workingDirectory) => {
			if (mainWindow) {
				if (mainWindow.isMinimized()) mainWindow.restore()
				mainWindow.focus()
				mainWindow.show()
			}
		})
	}
	globalShortcut.register('Space+Ctrl', () => {
		if (isShow) {
			mainWindow.hide()
			isShow = false
			setTray(mainWindow)
		} else {
			mainWindow.show()
			isShow = true
		}
	})
})

function setTray(mainWindow) {
	let trayMenuTemplate = [
		{
			label: '退出',
			click: function () {
				app.quit()
			},
		},
	]
	// 当前目录下的app.ico图标
	let iconPath = path.join(__dirname, 'favicon.png')
	appTray = new Tray(iconPath)
	// 图标的上下文菜单
	const contextMenu = Menu.buildFromTemplate(trayMenuTemplate)
	mainWindow.hide()
	appTray.setToolTip('never forget')
	appTray.setContextMenu(contextMenu)
	appTray.on('click', function () {
		mainWindow.show()
		appTray.destroy()
		isShow = true
	})
}
