class Storage {
	static getProject() {
		const folders = window.localStorage.getItem('folders')
		return folders ? JSON.parse(folders) : []
	}
	static setProject(folders) {
		window.localStorage.setItem('folders', JSON.stringify(folders))
		vm.folders = Storage.getProject()
	}
	static addProject(val) {
		const folders = Storage.getProject()
		if (Array.isArray(val)) {
			val.forEach(element => {
				folders.unshift(element)
			})
		} else {
			folders.push(val)
		}
		Storage.setProject([...new Set(folders)])
	}
	static delProjectByIndex(index) {
		const folders = Storage.getProject()
		folders.splice(index, 1)
		Storage.setProject(folders)
		vm.folders = Storage.getProject()
	}
	static delProjectByPath(_path) {
		const folders = Storage.getProject()
		const index = folders.findIndex(folder => folder.path == _path)
		Storage.delProjectByIndex(index)
	}
}
module.exports = Storage
