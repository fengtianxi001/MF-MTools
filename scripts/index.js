const router = require('../routers/index')
const { loopDir } = require('../scripts/utils/Utils')
const { addProject } = require('../scripts/utils/Storage')
const eventbus = require('../scripts/utils/EventBus')
new Vue({
	el: '#app',
	data() {
		return {
			count: 1200,
		}
	},
	router,
	components: {
		'tools-menu': require('../components/Menu'),
	},
	mounted() {
		const appContainer = document.getElementById('app')
		appContainer.addEventListener('drop', e => {
			const folders = e.dataTransfer.files
			const foldersPath = Object.keys(folders).reduce((prev, cur) => {
				return prev.push(folders[cur]['path']) && prev
			}, [])
			const projects = foldersPath.reduce((prev, cur) => {
				prev.push(...loopDir(cur))
				return prev
			}, [])
			if (projects.length === 0){
				this.$message.error("只要包含'package.json'文件的项目,才可以被管理")
			}else{
				this.$message.success(`成功添加${projects.length}个项目文件`)
				addProject(projects)
				eventbus.$emit('updateProject')
			}
		})
		appContainer.addEventListener('dragover', e => {
			e.preventDefault()
			e.stopPropagation()
		})
	},
})
