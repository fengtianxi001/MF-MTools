<template>
	<div class="folder-card">
		<mHeader
			v-bind="$attrs"
			@openFile="openFile"
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
import File from '../../../../scripts/File'
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
		FileForm: () => import('../file-form.vue'),
	},
	methods: {
		...mapMutations(['deleteFile']),
		removeFile(params) {
			this.$confirm('确定移除该项目?', '', {
				confirmButtonText: '移除',
				cancelButtonText: '取消',
				type: 'warning',
				showClose: false,
			}).then(() => {
				if (params.remove) {
					//项目在托管文件夹中保管
					this.$confirm('是否同时在托管文件夹中删除项目文件夹', '', {
						confirmButtonText: '删除',
						cancelButtonText: '保留',
						type: 'warning',
						showClose: false,
					})
						.then(() => {
							this.deleteFile(params.id)
							File.deleteFolder(params.path)
							this.$message({
								type: 'success',
								message: `${params.name}删除成功!`,
								offset: 60,
							})
						})
						.catch(() => {
							console.log('inter')
							this.deleteFile(params.id)
							this.$message({
								type: 'success',
								message: `${params.name}删除成功!`,
								offset: 60,
							})
						})
				} else {
					this.deleteFile(params.id)
				}
			})
		},
		openFolder(_path) {
			File.openFolder(_path)
		},
		openFile(_path) {
			File.openFile(_path)
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
	width: 193.33px;
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
