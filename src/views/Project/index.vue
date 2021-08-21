<template>
	<div class="project">
		<m-header></m-header>
		<m-table :data="projects"></m-table>
	</div>
</template>
<script>
/*eslint-disable*/
import MTable from './components/table.vue'
import { loopDir } from '@/utils'
import { get, insert } from '../../utils/datastore'
import eventbus from '@/api/eventbus'
export default {
	data() {
		return {
			projects: get('project'),
		}
	},
	components: {
		MTable,
	},
	methods: {
		dropProject(e) {
			if (!e.dataTransfer) return false
			const folders = e.dataTransfer.files

			this.dropProject(folders)
			const foldersPath = Object.keys(folders).reduce((prev, cur) => {
				return prev.push(folders[cur]['path']) && prev
			}, [])
			const projects = foldersPath.reduce((prev, cur) => {
				prev.push(...loopDir(cur))
				return prev
			}, [])
			if (projects.length === 0) {
				this.$message.error(
					"只要包含'package.json'文件的项目,才可以被管理"
				)
			} else {
				this.$message.success(`成功添加${projects.length}个项目文件`)
				console.log('projects', projects)
				this.projects = insert('project', projects)
			}
		},
	},
	mounted() {
		const project = document.querySelector('.project')
		project.addEventListener('drop', this.dropProject)
		project.addEventListener('dragover', e => {
			e.preventDefault()
			e.stopPropagation()
		})
		eventbus.$on('updateProject', () => {
			this.projects = get('project')
		})
	},
}
</script>
<style lang="scss" scoped>
.project {
	width: 100%;
	height: 100%;
	background-color: #fff;
	border-radius: 4px;
	position: relative;
	padding-top: 20px;
	padding-left: 20px;
	padding-right: 20px;
	overflow-y: hidden;
}
</style>
