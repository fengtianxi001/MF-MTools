/*eslint-disable*/
import path from 'path'
import { v4 as uuidv4 } from 'uuid'
let { shell } = require('electron')

const fs = require('fs')
class Software {
	static createSoftware(filePath) {
		//先判断是exe 还是 ink
		let [name, ext] = path.basename(filePath).split('.')
		const object = {}
		object.id = uuidv4()
		object.name = name
		object.originPath = filePath
		object.category = null
		object.type = ext
		if (ext === 'exe') {
			object.target = filePath
			object.ico = null
		} else {
			let lnk
			try {
				lnk = shell.readShortcutLink(filePath)
				object.target = lnk.target
				if (path.basename(lnk.icon).split('.')[1] === 'ico') {
					object.icon = lnk.icon
				} else {
					object.icon = null
				}
				return object
			} catch (error) {
				return false
			}
		}
	}
	static checkFile(filePath) {
		// 判断文件的后缀是不是 ink或者exe
		const ext = path.extname(filePath)
		if (!ext) {
			return {
				code: 100,
				flag: false,
				msg: '该模块不支持管理文件夹',
			}
		}
		const _ext = ext.split('.')[1].toLowerCase()
		if (!['exe', 'lnk'].includes(_ext)) {
			return {
				code: 300,
				flag: false,
				msg: '该模块仅支持管理exe文件或ink快捷方式',
			}
		}
		return {
			code: 200,
			flag: true,
		}
	}
}

export default Software
