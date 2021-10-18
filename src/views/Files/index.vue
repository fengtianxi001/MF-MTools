<template>
	<m-view>
		<template slot="menu">
			<m-menu-search v-model="search.keyword"></m-menu-search>
			<m-checkbox
				:options="fileCategory"
				valueKey="id"
				v-model="search.category"
				whole="全部项目"
			/>
			<file-category-set />
		</template>
		<template slot="content">
			<file-content :filterParams="search"></file-content>
			<file-form ref="fileForm" :formProps="formProps" />
		</template>
	</m-view>
</template>
<script>
/*eslint-disable*/
import File from '../../utils/File/index'
import { mapGetters } from 'vuex'
const preventDefault = e => e.preventDefault()
export default {
	name: 'files',
	data() {
		return {
			formProps: {},
			search: {
				keyword: '',
				category: 0,
			},
		}
	},
	components: {
		FileForm: () => import('./components/file-form.vue'),
		FileColumnSet: () => import('./components/file-column-set.vue'),
		FileCategorySet: () => import('./components/file-category-set.vue'),
		FileContent: () => import('./views/content.vue'),
	},
	computed: {
		...mapGetters(['fileCategory']),
	},
	methods: {
		dropListener(e) {
			e.preventDefault()
			//拖拽进来的文件
			const newFile = e.dataTransfer.files[0]
			if (!newFile) return false
			//项目类型检查
			// const checkResult = Project.checkProject(newFile.path)
			// if (!checkResult.flag) {
			// 	return this.$message({
			// 		type: 'error',
			// 		message: checkResult.msg,
			// 		offset: 60,
			// 	})
			// }
			const originFile = File.createFile(newFile.path)
			//console.log(originFile)

			this.formProps = this.$utils.deepClone(originFile)
			if (this.search.category !== 0) {
				this.formProps.category = this.search.category
			}
			this.$refs.fileForm.open()
		},
	},
	mounted() {
		const { dropListener } = this
		document.addEventListener('drop', dropListener, false)
		document.addEventListener('dragover', preventDefault, false)
	},
	beforeDestroy() {
		const { dropListener } = this
		document.removeEventListener('drop', dropListener)
		document.removeEventListener('dragover', this.dropListener)
	},
}
</script>
