/*
 * @description: 
 * @author: 肛肠科冯主任
 * @Date: 2020-08-29 20:13:13
 */
const path = require('path');
const utils = {
	assetsPath: function (_path) {
		const assetsSubDirectory = process.env.NODE_ENV === 'production'
			// 生产环境下的 static 路径
			? 'static'
			// 开发环境下的 static 路径
			: 'static'

		return path.posix.join(assetsSubDirectory, _path)
	},
	resolve: function (dir) {
		return path.join(__dirname, '..', dir)
	}
}
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
						'./src/assets/scss/base.scss',
						'./src/assets/scss/frame.scss',
						'./src/assets/scss/global.scss',
						'./src/assets/scss/mixin.scss',
						'./src/assets/scss/variable.scss',
						'./src/assets/scss/reset.scss',
					],
				})
				.end()
		})
		// set svg-sprite-loader
		config.module
			.rule('svg')
			.exclude.add(resolve('src/icons'))
			.end()
		config.module
			.rule('icons')
			.test(/\.svg$/)
			.include.add(resolve('src/icons'))
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
				appId: 'mtools-dev',
				productName: 'mtools2.0',
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
			enableRemoteModule: true,
			webSecurity: false,
		},
	},
	configureWebpack: {
		module: {
			rules: [
				{
					test: /\.(woff2?|eot|ttf|otf)(\?.*)$/,
					loader: 'url-loader',
					options: {
						limit: 10000,
						name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
					}
				}
			]
		}
	}
}
function resolve(dir) {
	return path.join(__dirname, dir)
}