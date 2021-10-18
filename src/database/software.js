const path = require('path')
const fs = require('fs')
import baseURL from './baseURL'
class Software {
	constructor() {
		this.dir = path.resolve(baseURL,'./data')
		this.json = path.resolve(baseURL,'./data/software.json')
		this.initData()
	}
	initData() {
		//数据初始化
		const { dir, json } = this
		!fs.existsSync(dir) && fs.mkdirSync(dir)
		!fs.existsSync(json) && fs.writeFileSync(json, JSON.stringify([]))
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

export default Software
