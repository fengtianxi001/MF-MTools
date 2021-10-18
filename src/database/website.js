const path = require('path')
const fs = require('fs')
import { v4 as uuidv4 } from 'uuid'
import baseURL from './baseURL'
class Website {
	constructor() {
		this.dir = path.resolve(baseURL, './data')
		this.json = path.resolve(baseURL, './data/website.json')
		this.initData()
	}
	initData() {
		//数据初始化
		const { dir, json } = this
		//默认值
		const defaultValue = [
			{
				id: uuidv4(),
				site: 'https://www.baidu.com',
				name: 'baidu',
				icon: 'baidu.png',
			},
			{
				id: uuidv4(),
				site: 'https://www.github.com',
				name: 'github',
				icon: 'github.png',
			},
			{
				id: uuidv4(),
				site: 'https://www.iconfont.cn/',
				name: 'iconfont',
				icon: 'iconfont.png',
			},
			{
				id: uuidv4(),
				site: 'http://112.124.22.244:3000/fengtianxi001',
				name: 'gogs',
				icon: 'gogs.png',
			},
			{
				id: uuidv4(),
				site: 'http://112.124.22.244:8080/',
				name: 'jenkins',
				icon: 'jenkins.png',
			},
			{
				id: uuidv4(),
				site: 'https://www.figma.com/community',
				name: 'figma',
				icon: 'figma.png',
			},
			{
				id: uuidv4(),
				site: 'https://dribbble.com/',
				name: 'dribbble',
				icon: 'dribbble.png',
			},
			{
				id: uuidv4(),
				site: 'https://www.zcool.com.cn/',
				name: 'zcool',
				icon: 'zcool.png',
			},
			{
				id: uuidv4(),
				site: 'https://www.xiaomapan.com/#/',
				name: 'xiaomapan',
				icon: 'xiaomapan.png',
			},
			{
				id: uuidv4(),
				site: 'https://www.imooc.com/',
				name: 'imooc',
				icon: 'imooc.png',
			},
			{
				id: uuidv4(),
				site: 'https://www.npmjs.com/',
				name: 'npm',
				icon: 'npm.png',
			},
			{
				id: uuidv4(),
				site: 'https://www.bilibili.com/',
				name: 'bilibili',
				icon: 'bilibili.png',
			},
			{
				id: uuidv4(),
				site: 'https://www.zhihu.com/hot',
				name: 'zhihu',
				icon: 'zhihu.png',
			},
			{
				id: uuidv4(),
				site: 'https://lanhuapp.com/web/#/item',
				name: '蓝湖',
				icon: 'lanhu.png',
			},
			{
				id: uuidv4(),
				site: 'https://react.docschina.org/',
				name: 'react',
				icon: 'react.png',
			},
			{
				id: uuidv4(),
				site: 'https://uniapp.dcloud.io/',
				name: 'uniapp',
				icon: 'uniapp.png',
			},
			{
				id: uuidv4(),
				site: 'https://storyset.com/',
				name: 'storyset',
				icon: 'storyset.png',
			},
			{
				id: uuidv4(),
				site: 'http://nodejs.cn/',
				name: 'nodejs',
				icon: 'node.png',
			},
			{
				id: uuidv4(),
				site: 'http://www.webgl3d.cn/',
				name: 'threejs',
				icon: 'threejs.png',
			},
			{
				id: uuidv4(),
				site: 'https://pan.baidu.com/',
				name: 'baiduyun',
				icon: 'baiduyun.png',
			},
			{
				id: uuidv4(),
				site: 'https://mail.qq.com/',
				name: 'qq邮箱',
				icon: 'qqmail.png',
			},
			{
				id: uuidv4(),
				site: 'http://www.youdao.com/',
				name: '有道翻译',
				icon: 'youdao.png',
			},
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

export default Website
