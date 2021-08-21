/*
 * @description:
 * @author: 肛肠科冯主任
 * @Date: 2020-08-29 20:13:13
 */
const path = require('path')

module.exports = {
	publicPath: './',
	chainWebpack: config => {
		//设置全局sass
		const oneOfsMap = config.module.rule('scss').oneOfs.store
		oneOfsMap.forEach(item => {
			item.use('sass-resources-loader')
				.loader('sass-resources-loader')
				.options({
					resources: [
						'./src/assets/styles/base.scss',
						'./src/assets/styles/mixin.scss',
						'./src/assets/styles/variable.scss',
					],
				})
				.end()
		})
		// set svg-sprite-loader
		config.module
			.rule('svg')
			.exclude.add(resolve('src/assets/icon/svg'))
			.end()
		config.module
			.rule('icons')
			.test(/\.svg$/)
			.include.add(resolve('src/assets/icon/svg'))
			.end()
			.use('svg-sprite-loader')
			.loader('svg-sprite-loader')
			.options({
				symbolId: 'icon-[name]',
			})
			.end()
	},
	pluginOptions: {
		electronBuilder: {
			builderOptions: {
				appId: 'com.example.app',
				productName: 'aDemo',
				copyright: 'Copyright © 2021', //版权信息
				directories: {
					output: './dist', //输出文件路径
				},
				win: {
					//win相关配置
					icon: './favicon.ico', //图标，当前图标在根目录下，注意这里有两个坑
					target: [
						{
							target: 'nsis', //利用nsis制作安装程序
							arch: [
								'x64', //64位
								'ia32', //32位
							],
						},
					],
				},
			},
			nodeIntegration: true,
		},
	},
}
function resolve(dir) {
	return path.join(__dirname, dir)
}
