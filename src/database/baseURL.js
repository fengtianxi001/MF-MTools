const fs = require('fs')
const path = require('path')

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

const cache = 'd://'
let baseURL = ''
if (fs.existsSync(cache)) {
	//如果存在d盘,数据就放在d盘
	baseURL = cache + '/mtools_cache'
} else {
	//数据放在程序根目录
	baseURL = path.resolve('c://', './mtools_cache')
}
createDir(baseURL)
export default baseURL
