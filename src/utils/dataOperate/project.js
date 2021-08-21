import database from '../datastore'
const projectData = database('db')

export const getProject = params => {
	return projectData
		.get('projects')
		.filter(params)
		.value()
}
export const insertProject = params => {
	if (Array.isArray(params)) {
		params.map(cur => {
			projectData
				.get('projects')
				.push(cur)
				.write()
		})
		return getProject()
	}
	return projectData
		.get('projects')
		.push(params)
		.write()
}

export const updateProject = (where, newvalue) => {
	return projectData
		.get('projects')
		.find(where)
		.assign(newvalue)
		.write()
}

export const delProject = where => {
	return projectData
		.get('projects')
		.remove(where)
		.write()
}

// /* eslint-disable */
// const fs = require("fs")
// const path = require("path")
// class Storage {
// 	static getProject() {
// 		// const folders = window.localStorage.getItem('folders')
// 		// return folders ? JSON.parse(folders) : []
//         console.log(__dirname,"/database");
//         // const a = fs.readFileSync(path.resolve(__dirname,"renderer"))
//         // console.log(a);
//         // const _path = path.resolve()
//         // const file = fs.readFileSync("")
//         // return file.toString()
//         return false

// 	}
// 	static setProject(folders) {
// 		window.localStorage.setItem('folders', JSON.stringify(folders))
// 		// vm.folders = Storage.getProject()
// 	}
// 	static addProject(val) {
// 		const folders = Storage.getProject()
// 		if (Array.isArray(val)) {
// 			val.forEach(element => {
// 				if (folders.findIndex(cur => cur.path === element.path) < 0) {
// 					folders.unshift(element)
// 				}
// 			})
// 		} else {
// 			if (folders.findIndex(cur => cur.path === val.path) < 0)
// 				folders.push(val)
// 		}
// 		Storage.setProject([...new Set(folders)])
// 	}
// 	static delProjectByIndex(index) {
// 		const folders = Storage.getProject()
// 		folders.splice(index, 1)
// 		Storage.setProject(folders)
// 		// vm.folders = Storage.getProject()
// 	}
// 	static delProjectByPath(_path) {
// 		const folders = Storage.getProject()
// 		const index = folders.findIndex(folder => folder.path == _path)
// 		if (index >= 0) {
// 			Storage.delProjectByIndex(index)
// 			return true
// 		} else {
// 			return false
// 		}
// 	}
// 	static searchProjectByName(name) {
// 		const folders = Storage.getProject()
// 		return folders.filter(cur => cur.name.indexOf(name) >= 0)
// 	}
// }
// export default Storage
