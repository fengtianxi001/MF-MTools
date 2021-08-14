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

}
module.exports = Operate
