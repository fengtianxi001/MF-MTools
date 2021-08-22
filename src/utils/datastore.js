/*eslint-disable*/
// 初始化数据库
const fs = require('fs')
const path = require('path')

const dataPath = path.resolve('./data.json')

const rawData = {
	project: [],
}
//判断是否存在文件
if (!fs.existsSync(dataPath)) {
	fs.writeFileSync(dataPath, JSON.stringify(rawData))
}

export const update = (data, dataname = 'project') => {
	const string_data = fs.readFileSync(dataPath, {
		encoding: 'utf-8',
	})
	const object_data = JSON.parse(string_data)
	object_data[dataname] = data
	fs.writeFileSync(dataPath, JSON.stringify(object_data))
}

export const get = (dataname = 'project') => {
	const string_data = fs.readFileSync(dataPath, {
		encoding: 'utf-8',
	})
	const object_data = JSON.parse(string_data)
	const res = object_data[dataname]
	return res.filter(cur => 
		fs.existsSync(path.resolve(cur.path))
	)
}

// export const insert = (dataname = 'project', content) => {
// 	const all = get()
// 	const prev = all[dataname]
// 	if (!Array.isArray(content)) {
// 		content = [content]
// 	}
// 	content.map(project => {
// 		const index = prev.findIndex(cur => cur.path === project.path)
// 		if (index < 0) {
// 			prev.push(project)
// 		}
// 	})
// 	fs.writeFileSync(dataPath, JSON.stringify(all))
// 	return prev
// }

// export const del = (dataname = 'project', projectPath) => {
// 	const all = get()
// 	const prev = all[dataname]
// 	const index = prev.findIndex(folder => folder.path == projectPath)
// 	prev.splice(index, 1)
// 	fs.writeFileSync(dataPath, JSON.stringify(all))
// 	return prev
// }
