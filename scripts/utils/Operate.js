const { addProject } = require('./Storage')
const { loopDir } = require('./Utils')
const { exec } = require('child_process')
class Operate {
	//推拽添加文件夹
	static dragUpload(e) {
        const folders = e.dataTransfer.files
		console.log(folders)
		const rawFolders = Object.keys(folders).reduce((prev, cur) => {
			return prev.push(folders[cur]['path']) && prev
		}, [])

		const projects = rawFolders.reduce((prev, cur) => {
			prev.push(...loopDir(cur))
			return prev
		}, [])
		addProject(projects)
	}
	//在vscode中打开
	static openInVscode(_path) {
		//todo 建立vscode软链接
		exec(`code ${_path}`)
	}
	static runInstall(_path) {
		exec(`cd ${_path} & start npm install`)
	}
	static runExplorer(_path) {
		exec(`explorer /root,${_path}`)
	}
	static runScript(_path, scriptName) {
		const str = `cd ${_path} & start npm run ${scriptName}`
		exec(str)
	}
}
module.exports = Operate
