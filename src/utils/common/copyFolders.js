var fs = require('fs')

function copy(origin, target) {
	//读取目录
	const paths = fs.readdirSync(origin)
	paths.forEach(path => {
		if (path != 'node_modules') {
			var _origin = origin + '/' + path
			var _target = target + '/' + path
			var readable
			var writable
			const st = fs.statSync(_origin)
			if (st.isFile()) {
				readable = fs.createReadStream(_origin) //创建读取流
				writable = fs.createWriteStream(_target) //创建写入流
				readable.pipe(writable)
			} else if (st.isDirectory()) {
				copyFolder(_origin, _target, copy)
			}
		}
	})
}

function copyFolder(origin, target) {
	//测试某个路径下文件是否存在
	const result = fs.existsSync(target)
	if (result) {
		copy(origin, target)
	} else {
		fs.mkdirSync(target)
		copy(origin, target)
	}
}

export default copyFolder
