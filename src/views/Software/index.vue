<template>
	<m-view>
		<template slot="menu">
			<m-menu-search v-model="search.keyword"></m-menu-search>
			<m-checkbox
				:options="softwareCategory"
				valueKey="id"
				v-model="search.category"
				whole="全部项目"
			/>
			<soft-category-set />
		</template>
		<template slot="content">
			<soft-content :filterParams="search"></soft-content>
			<soft-form ref="softwareForm" :formProps="formProps" />
		</template>
	</m-view>
</template>
<script>
/*eslint-disable*/
import Software from '../../utils/Software/index'
import { mapGetters } from 'vuex'
let { shell } = require('electron')
const fs = require('fs')
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
		SoftForm: () => import('./components/software-form.vue'),
		SoftColumnSet: () => import('./components/software-column-set.vue'),
		SoftCategorySet: () => import('./components/software-category-set.vue'),
		SoftContent: () => import('./views/content.vue'),
	},
	computed: {
		...mapGetters(['softwareCategory']),
	},
	methods: {
		dropListener(e) {
			e.preventDefault()
			//拖拽进来的文件
			const newFile = e.dataTransfer.files[0]
			if (!newFile) return false
			//项目类型检查
			const checkResult = Software.checkFile(newFile.path)
			if (!checkResult.flag) {
				return this.$message({
					type: 'error',
					message: checkResult.msg,
					offset: 60,
				})
			}
			var software = Software.createSoftware(newFile.path)
			if (software) {
				this.formProps = this.$utils.deepClone(software)
				this.$refs.softwareForm.open()
			}else{
				this.$message({
					type: 'error',
					message: "快捷方式读取失败,请尝试右击打开所在文件,拖入exe",
					offset: 60,
				})
			}
			// console.log(software)
			// const originFile = File.createFile(newFile.path)
			//console.log(originFile)

			// if (this.search.category !== 0) {
			// 	this.formProps.category = this.search.category
			// }
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
