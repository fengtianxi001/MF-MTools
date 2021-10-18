const path = require('path')
const fs = require('fs')
import baseURL from './baseURL'

const createDir = dirname => {
	if (fs.existsSync(dirname)) {
		return true
	} else {
		if (createDir(path.dirname(dirname))) {
			fs.mkdirSync(dirname)
			return true
		}
	}
}
class Config {
	constructor() {
		this.dir = path.resolve(baseURL, './data')
		this.json = path.resolve(baseURL, './data/config.json')
		this.initData()
	}
	initData() {
		//数据初始化
		const { dir, json } = this
		//默认值
		console.log('baseURL', path.resolve(baseURL, './projects'))
		const projectSavePath = path.resolve(baseURL, './projects')
		const fileSavePath = path.resolve(baseURL, './files')
		const softSavePath = path.resolve(baseURL, './softwares')

		createDir(projectSavePath)
		createDir(fileSavePath)
		createDir(softSavePath)
		const defaultValue = {
			projectSavePath,
			fileSavePath,
			softSavePath,
		}

		!fs.existsSync(dir) && fs.mkdirSync(dir)

		!fs.existsSync(json) &&
			fs.writeFileSync(json, JSON.stringify(defaultValue, '', 2))
	}
	update(data) {
		const { json } = this
		fs.writeFileSync(json, JSON.stringify(data, '', 2))
	}
	fetch() {
		const { json } = this
		const string_data = fs.readFileSync(json, {
			encoding: 'utf-8',
		})
		return JSON.parse(string_data)
	}
}

export default Config
