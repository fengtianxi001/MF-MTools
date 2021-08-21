import fs from "fs"
const path = require('path')


//1. 检查是否带有指定字符串
export function hasCharacter(str, arr) {
	if (typeof str !== 'string') {
		throw Error('"hasCharacter"方法第一个参数需要传入字符串')
	} else if (typeof arr === 'string') {
		return str.indexOf(arr) >= 0
	} else if (Array.isArray(arr)) {
		return arr.some(cur => str.indexOf(cur) >= 0)
	} else {
		throw Error('"hasCharacter"方法第二个参数需要传入字符串或者数组')
	}
}
function fetchType(_path) {
	const jsonPath = path.resolve(_path, 'package.json')
	var options = { encoding: 'utf-8' }
	const file = fs.readFileSync(jsonPath, options)
	const devDependencies = JSON.parse(file).devDependencies
	let type = null
	for (let key in devDependencies) {
		if (key.indexOf('vue') >= 0) {
			type = 'vue'
			break
		} else if (key.indexOf('react') >= 0) {
			type = 'react'
			break
		}
	}
	return type || 'js'
}

//2. 参数转化为像素
export function Number2px(param) {
	if (!isNaN(Number(param))) {
		return param + 'px'
	} else if (hasCharacter(param, ['px', '%', 'vw', 'vh', 'rem', 'calc'])) {
		return param
	} else {
		return 'auto'
	}
}

function _package(_path) {
	return {
		path: _path,
		name: path.basename(_path),
		scripts: _fetchScripts(_path),
		type: fetchType(_path),
	}
}
function _checkDir(dir) {
	//判断文件夹是否是项目文件夹 package.json
	return fs.existsSync(path.resolve(dir, 'package.json'))
}
function _fetchScripts(_path) {
	const jsonPath = path.resolve(_path, 'package.json')
	var options = { encoding: 'utf-8' }
	const file = fs.readFileSync(jsonPath, options)
	const scripts = JSON.parse(file).scripts
	return Object.keys(scripts).reduce((prev, cur) => {
		prev.push(cur)
		return prev
	}, [])
}

//3. 挑拣项目文件夹
export function loopDir(dir, times = 1) {
	//先判断它是不是一个项目文件,如果是直接抛出
	if (_checkDir(dir)) return [_package(dir)]
	//不是的话遍历子文件夹
	var options = { withFileTypes: true }
	const dirsChildren = fs
		.readdirSync(dir, options)
		.filter(cur => _checkDir(path.resolve(dir, cur.name)))
	const collection = []

	for (let i = 0; i < dirsChildren.length; i++) {
		const _path = path.resolve(dir, dirsChildren[i].name)
		if (_checkDir(_path)) {
			collection.push(_package(_path))
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
