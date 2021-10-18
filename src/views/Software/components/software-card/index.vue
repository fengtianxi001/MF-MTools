<template>
	<div class="folder-card">
		<mHeader
			v-bind="$attrs"
			@openSoftware="openSoftware"
			@openFolder="openFolder"
			@copyPath="copyPath"
			@removeFile="removeFile"
			@openEdit="openEdit"
		/>
		<file-form ref="fileForm" :formProps="formProps" mode="edit" />
	</div>
</template>
<script>
/*eslint-disable*/
import { mapMutations } from 'vuex'
import Software from '../../../../scripts/Software'
const fs = require('fs')
const path = require('path')
const clipboard = require('electron').clipboard
export default {
	name: 'm-project-card',
	data() {
		return {
			formProps: {},
		}
	},
	components: {
		mHeader: () => import('./header.vue'),
		FileForm: () => import('../software-form.vue'),
	},
	methods: {
		...mapMutations(['deleteSoftware']),
		removeFile(params) {
			this.$confirm('确定移除该项目?', '', {
				confirmButtonText: '移除',
				cancelButtonText: '取消',
				type: 'warning',
				showClose: false,
			}).then(() => {
				this.deleteSoftware(params.id)
				// File.deleteFolder(params.path)
				this.$message({
					type: 'success',
					message: `${params.name}删除成功!`,
					offset: 60,
				})
			})
		},
		openFolder(_path) {
			Software.openFolder(_path)
		},
		openSoftware(_path) {
			Software.open(_path)
		},
		copyPath(_path) {
			clipboard.writeText(_path)
			this.$message({
				type: 'info',
				message: '文件路径复制成功',
				offset: 60,
			})
		},
		openEdit() {
			this.formProps = this.$attrs.file
			this.$refs.fileForm.open()
		},
	},
}
</script>
<style lang="scss" scoped>
.folder-card {
	width: 140px;
	background-color: $cardBgc;
	border-radius: 4px;
	box-sizing: border-box;
	padding: 10px;
	cursor: pointer;
	margin-bottom: 20px;
	user-select: none;
	cursor: pointer;
	border: $border;
	transition: $transition;
}
</style>
