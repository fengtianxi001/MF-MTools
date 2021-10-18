const path = require('path')
const fs = require('fs')
import { v4 as uuidv4 } from 'uuid'
import baseURL from './baseURL'
class SoftwareCatogory {
	constructor() {
		this.dir = path.resolve(baseURL, './data')
		this.json = path.resolve(baseURL, './data/softwareCatogory.json')
		this.initData()
	}
	initData() {
		//数据初始化
		const { dir, json } = this
		//默认值
		const defaultValue = [
			{ label: '软件分类一', id: uuidv4(), color: '#282c34' },
			{ label: '软件分类二', id: uuidv4(), color: '#3042d2' },
			{ label: '软件分类三', id: uuidv4(), color: '#3042d2' },
			{ label: '软件分类四', id: uuidv4(), color: '#3042d2' },
		]
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

export default SoftwareCatogory
