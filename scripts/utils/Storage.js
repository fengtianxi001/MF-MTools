class Storage {
	static getProject() {
		const folders = window.localStorage.getItem('folders')
		return folders ? JSON.parse(folders) : []
	}
	static setProject(folders) {
		window.localStorage.setItem('folders', JSON.stringify(folders))
		// vm.folders = Storage.getProject()
	}
	static addProject(val) {
		const folders = Storage.getProject()
		if (Array.isArray(val)) {
			val.forEach(element => {
				if (folders.findIndex(cur => cur.path === element.path) < 0) {
					folders.unshift(element)
				}
			})
		} else {
			if (folders.findIndex(cur => cur.path === element.path) < 0)
				folders.push(val)
		}
		Storage.setProject([...new Set(folders)])
	}
	static delProjectByIndex(index) {
		const folders = Storage.getProject()
		folders.splice(index, 1)
		Storage.setProject(folders)
		// vm.folders = Storage.getProject()
	}
	static delProjectByPath(_path) {
		const folders = Storage.getProject()
		const index = folders.findIndex(folder => folder.path == _path)
		if (index >= 0) {
			Storage.delProjectByIndex(index)
			return true
		} else {
			return false
		}
	}
	static searchProjectByName(name) {
		const folders = Storage.getProject()
		return folders.filter(cur => cur.name.indexOf(name) >= 0)
	}
}
module.exports = Storage
