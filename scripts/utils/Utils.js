const fs = require('fs')
const path = require('path')

function package(_path) {
	return {
		path: _path,
		name: path.basename(_path),
		scripts: fetchScripts(_path),
	}
}

function checkDir(dir) {
	//判断文件夹是否是项目文件夹 package.json
	return fs.existsSync(path.resolve(dir, 'package.json'))
}
//从大文件夹中挑拣出项目文件夹
function loopDir(dir, times = 1) {
	//先判断它是不是一个项目文件,如果是直接抛出
	if (checkDir(dir)) return [package(dir)]
	//不是的话遍历子文件夹
	var options = { withFileTypes: true }
	const dirsChildren = fs
		.readdirSync(dir, options)
		.filter(cur => checkDir(path.resolve(dir, cur.name)))
	const collection = []

	for (let i = 0; i < dirsChildren.length; i++) {
		const _path = path.resolve(dir, dirsChildren[i].name)
		if (checkDir(_path)) {
			collection.push(package(_path))
		} else {
			if (times > 0) {
				const cache = loopDir(_path, times - 1)
				collection.push(...cache)
			} else {
				continue
			}
		}
	}
	return collection
}

function fetchScripts(_path) {
	const jsonPath = path.resolve(_path, 'package.json')
	var options = { encoding: 'utf-8' }
	const file = fs.readFileSync(jsonPath, options)
	const scripts = JSON.parse(file).scripts
	return Object.keys(scripts).reduce((prev, cur) => {
		prev.push(cur)
		return prev
	}, [])
}
module.exports = {
	loopDir,
}
