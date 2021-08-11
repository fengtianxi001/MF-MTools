const {
	openInVscode,
	runExplorer,
	runInstall,
	runScript,
	dragUpload,
} = require('../scripts/utils/Operate')

const { delProjectByPath, getProject } = require('../scripts/utils/Storage')
const vm = new Vue({
	el: '#app',
	data: {
		folders: getProject(),
		operates: [
			{
				tips: '使用vscode打开',
				icon: 'icon-vscode',
				event: 'openInVscode',
			},
			{
				tips: '执行install',
				icon: 'icon-install-fill',
				event: 'runInstall',
			},
			{
				tips: '在系统资源库打开',
				icon: 'icon-wenjian',
				event: 'runExplorer',
			},
			{
				tips: '移除此项目',
				icon: 'icon-delete1',
				event: 'delProjectByPath',
			},
		],
	},
	methods: {
		openInVscode,
		runExplorer,
		runInstall,
		runScript,
		delProjectByPath,
		dispatch(eName, _path) {
			console.log(_path);
			this[eName](_path)
		},
	},
	mounted() {
		var div = document.querySelector('#app')
		div.addEventListener('drop', dragUpload)
		div.addEventListener('dragover', e => {
			e.preventDefault()
			e.stopPropagation()
		})
	},
	computed: {
		isEmpty(){
			return this.folders.length === 0 
		}
	}
})
