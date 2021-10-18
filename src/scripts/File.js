/*eslint-disable*/
const { exec, spawn } = require('child_process')
const path = require('path')
const fs = require('fs')

// import copyFolders from '../utils/common/copyFolders.js'
class File {
	static openFile(_path) {
		const ext = path.extname(_path)
		// console.log(`explorer "${_path}"`)
		exec(`explorer "${_path}"`)
	}

	static openFolder(_path) {
		const ext = path.extname(_path)
		const url = ext ? path.dirname(_path) : _path
		console.log(`explorer "${url}"`)
		exec(`explorer "${url}"`)
		// if (process.platform == 'darwin') {
		// 	exec(`open "${url}"`)
		// } else {

		// }
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
		targetPath = File.existsFile(targetPath)
		let code = ''
		if (!ext) {
			// 复制文件夹
			targetPath = targetPath + '\\'
			code = `xcopy "${originPath}" "${targetPath}" /s/c/y/q`
		} else {
			console.log(targetPath)
			//复制文件
			code = `copy "${originPath}" "${targetPath}"`
		}
		return new Promise((resolve, resject) => {
			let ls = exec(code)
			ls.on('close', resolve(targetPath))
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
	static existsFile(_path, count = 1) {
		const exist = fs.existsSync(_path)
		if (!exist) {
			//不存在直接抛出
			return _path
		}
		const isDir = fs.statSync(_path).isDirectory()
		if (isDir) {
			//是文件
			const cache = _path + count
			return File.existsFile(cache, count + 1)
		} else {
			const dirname = path.dirname(_path)
			const [name, ext] = path.basename(_path).split('.')

			const cache = `${dirname}\\${name}${count}.${ext}`
			return File.existsFile(cache, count + 1)
		}
	}
}
export default File
