import path from 'path'
import { v4 as uuidv4 } from 'uuid'

/*eslint-disable*/
const fs = require('fs')
class File {
	static createFile(filePath) {
		const object = {}
		object.id = uuidv4()
		object.originPath = filePath
		object.name = File.fetchFileName(filePath)
		object.size = File.fetchFileSize(filePath)
		object.addtime = File.fetchFileAddtime(filePath)
		object.isFolder = File.fetchIsFolder(filePath)
		object.type = File.fetchType(filePath)
		object.category = null
		return object
	}
	static checkFile(filePath) {
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
	static fetchFileName(filePath) {
		//获取项目名称
		return path.basename(filePath)
	}
	static fetchFileSize(filePath) {
		//获取项目大小
		return fs.statSync(filePath).size
	}
	static fetchFileAddtime(filePath) {
		//获取项目添加日期
		return new Date().getTime()
	}
	static fetchIsFolder(filePath) {
		const stat = fs.statSync(filePath)
		return stat.isDirectory()

	}
	static fetchType(filePath) {
		const ext = path.extname(filePath)
		if(ext){
			return ext.split(".")[1]
		}
		return "folder"
	}
}

export default File
