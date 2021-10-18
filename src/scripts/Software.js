/*eslint-disable*/
const { exec, spawn } = require('child_process')
const path = require('path')
const fs = require('fs')
const { shell } = require('electron')
// import copyFolders from '../utils/common/copyFolders.js'
class Software {
	static open(_path) {
		console.log(_path)
		shell.openPath(`"${_path}"`)
	}

	static openFolder(_path) {
		const ext = path.extname(_path)
		const url = ext ? path.dirname(_path) : _path
		console.log(`explorer "${url}"`)
		exec(`explorer "${url}"`)
	}

	static openByTerminal(_path) {
		const code = `start /i/high `
		exec(code, {
			cwd: _path,
			detached: true,
		})
	}

	static copy(originPath, targetPath) {
		const ext = path.extname(targetPath)
		let code = ''
		if (!ext) {
			targetPath = targetPath + '\\'
			code = `xcopy "${originPath}" "${targetPath}" /s/c/y/q`
		} else {
			code = `copy "${originPath}" "${targetPath}"`
		}
		console.log(code)
		return new Promise((resolve, resject) => {
			let ls = exec(code)
			ls.on('close', resolve)
		})
	}

	static deleteFolder(url) {
		let code = `rmdir /s/q "${url}"`
		const ext = path.extname(url)
		if (ext) code = `del  /F /S /Q ${url}`
		return new Promise((resolve, resject) => {
			let ls = exec(code)
			ls.on('close', resolve)
		})
	}
}
export default Software
