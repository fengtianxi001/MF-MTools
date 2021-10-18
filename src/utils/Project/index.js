import path from 'path'

/*eslint-disable*/
const fs = require('fs')
class Project {
	static createProject(filePath) {
		// const isVaild = Project.checkProject(filePath)
		// if (!isVaild) return false
		const object = {}
		object.id = new Date().getTime()
		object.originPath = filePath
		object.name = Project.fetchProjectName(filePath)
		object.size = Project.fetchProjectSize(filePath)
		object.addtime = Project.fetchProjectAddtime(filePath)
		object.trusteeship = Project.fetchProjectTrusteeship(filePath)
		object.installed = Project.fetchProjectInstall(filePath)
		object.scripts = Project.fetchProjectScripts(filePath)
		object.category = null
		object.requireInstall = Project.fetchProjectRequireInstall(filePath)
		return object
	}
	static checkProject(filePath) {
		//判断是否是项目文件(文件夹,包含html,js)
		const stat = fs.statSync(filePath)
		const isFile = stat.isFile()
		if (isFile)
			return {
				code: 0,
				flag: false,
				msg: '项目管理模块不支持单文件管理',
			}
		const files = fs.readdirSync(filePath)
		const _enum = ['.js', '.html', '.css', '.vue']
		const result = files.some(file => _enum.includes(path.extname(file)))
		if (!result) {
			//非前端项目
			return {
				code: 1,
				flag: false,
				msg: '暂不支持非前端项目的管理',
			}
		} else {
			return {
				code: 200,
				flag: true,
				msg: '校验通过',
			}
		}
	}
	static fetchProjectName(filePath) {
		//获取项目名称
		return path.basename(filePath)
	}
	static fetchProjectSize(filePath) {
		//获取项目大小
		return fs.statSync(filePath).size
	}
	static fetchProjectAddtime(filePath) {
		//获取项目添加日期
		return new Date().getTime()
	}
	static fetchProjectTrusteeship(filePath) {
		//获取项托管类型
		const git_path = path.resolve(filePath, '.git')
		const svn_path = path.resolve(filePath, '.svn')
		if (fs.existsSync(git_path)) {
			return 'git'
		} else if (fs.existsSync(svn_path)) {
			return 'svn'
		} else {
			return 'local'
		}
	}
	static fetchProjectInstall(filePath) {
		//获取项目是否安装
		const url = path.resolve(filePath, './node_modules')
		return fs.existsSync(url) ? true : false
	}
	static fetchProjectRequireInstall(filePath) {
		//获取项目是否需要安装依赖
		const url = path.resolve(filePath, './package.json')
		return fs.existsSync(url) ? true : false
	}

	static fetchProjectScripts(filePath) {
		//获取项目脚本
		const jsonPath = path.resolve(filePath, './package.json')
		if (!fs.existsSync(jsonPath)) {
			return []
		}
		var options = { encoding: 'utf-8' }
		const file = fs.readFileSync(jsonPath, options)
		const scripts = JSON.parse(file).scripts || {}
		return Object.keys(scripts).reduce((prev, cur) => {
			prev.push(cur)
			return prev
		}, [])
	}
	// static fetchProjectType(filePath) {
	// 	const jsonPath = path.resolve(filePath, './package.json')
	// 	if (!fs.existsSync(jsonPath)) {
	// 		return "normal"
	// 	}
	// 	var options = { encoding: 'utf-8' }
	// 	const file = fs.readFileSync(jsonPath, options)
	// 	const devDependencies = JSON.parse(file).devDependencies
	// 	let type = null
	// 	for (let key in devDependencies) {
	// 		if (key.indexOf('vue') >= 0) {
	// 			type = 'vue'
	// 			break
	// 		} else if (key.indexOf('react') >= 0) {
	// 			type = 'react'
	// 			break
	// 		}
	// 	}
	// 	return type || 'js'
	// }
}

export default Project
