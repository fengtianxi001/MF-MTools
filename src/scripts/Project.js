/*eslint-disable*/
const { exec, spawn } = require('child_process')
const path = require('path')
const fs = require('fs')
// import copyFolders from '../utils/common/copyFolders.js'
class Project {
	static openByexplorer(path) {
		if (process.platform == 'darwin') {
			exec(`open ${path}`)
		} else {
			exec('explorer /root,' + path)
		}
	}

	static openByEdit(path) {
		//编辑器打开文件夹
		exec('code ' + path)
	}
	static openByTerminal(_path) {
		const code = `start /i/high `
		exec(code, {
			cwd: _path,
			detached: true,
		})
	}
	static npmRun(path, script) {
		let code = ''
		if (process.platform == 'darwin') {
			code = `open -a Terminal.app /path/to/script.sh`
		} else {
			code = `start /i/high npm run ${script}`
		}

		const options = { cwd: path, detached: true }
		exec(code, options)
	}

	static gitRun(path, action) {
		//console.log(path)
		const _enum = {
			commit: `TortoiseGitProc /command:commit /path:${path} /logmsg:update`,
			pull: `TortoiseGitProc /command:pull /path:${path}`,
			push: `TortoiseGitProc /command:push /path:${path}`,
		}
		const options = { path, detached: true }
		exec(_enum[action], options)
	}

	static install(_path) {
		const code = `start /i/high npm install`
		exec(code, {
			cwd: _path,
			detached: true,
		})
	}

	static copy(originPath, targetPath) {
		// copyFolders(originPath, targetPath)
		// 要判断一下 文件夹是否已经存在
		targetPath = Project.existsFolder(targetPath)
		fs.mkdirSync(targetPath)
		//生成排除配置表
		const excludePath = path.resolve('./exclude.txt')
		if (!fs.existsSync(excludePath)) {
			const exclude = `\\node_modules\\`
			fs.writeFileSync(excludePath, exclude)
		}
		return new Promise((resolve, resject) => {
			const code = `xcopy`
			let ls = spawn(
				code,
				[
					`${originPath}`,
					`${targetPath}`,
					'/s',
					'/c',
					`/EXCLUDE:${excludePath}`,
				],
				{
					stdio: ['pipe', 'pipe', 'pipe'],
				}
			)
			ls.on('close', resolve(targetPath))
		})
	}

	static deleteFolder(url) {
		return new Promise((resolve, resject) => {
			const code = `rmdir /s/q "${url}"`
			let ls = exec(code)
			ls.on('close', resolve)
		})
	}
	static existsFolder(_path, count = 1) {
		const exist = fs.existsSync(_path)
		if (!exist) {
			//不存在直接抛出
			return _path
		}
		const cache = _path + count
		return Project.existsFolder(cache, count + 1)
	}
}
export default Project
