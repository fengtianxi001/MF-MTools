<template>
	<m-form :title="title" @submit="submit" @cancel="cancel" ref="form">
		<m-form-card title="基本信息填写">
			<m-form-input
				v-model="form.name"
				label="文件名称"
				tips="文件名称"
				:disabled="mode !== 'add'"
			/>
			<m-form-input
				v-model="form.originPath"
				label="文件路径"
				tips="系统已为您填写文件路径,如无必要请勿修改,否则将导致文件快捷操作失效"
				:disabled="mode !== 'add'"
			/>
			<m-form-select
				v-model="form.category"
				value-key="id"
				label="文件分类"
				tips="为了更方便的检索,将文件归档在合适的分类下"
				:options="fileCategory"
			/>
		</m-form-card>
		<m-form-card title="配置项选择" v-if="mode === 'add'">
			<m-form-switch
				label="是否移动项目文件夹"
				tips="将会把该文件复制到程序指定的目录文件夹下"
				v-model="config.isRemove"
				width="140px"
			/>
		</m-form-card>
	</m-form>
</template>
<script>
/*eslint-disable*/
import { mapGetters, mapMutations } from 'vuex'
import File from '../../../scripts/File'
const path = require('path')
export default {
	name: 'file-form',
	props: {
		formProps: Object,
		mode: {
			type: String,
			default: 'add',
		},
	},
	data() {
		return {
			title: this.mode === 'add' ? '添加文件' : '编辑文件信息',
			form: {
				name: '',
				originPath: '',
				size: '',
				category: '',
				addtime: '',
				isFolder: true,
				type: 'folder',
				remove: false,
			},
			config: {
				isRemove: true,
				isDelete: false,
				isInstall: false,
			},
		}
	},
	computed: {
		...mapGetters(['fileCategory']),
	},
	methods: {
		...mapMutations(['addFiles', 'updateFiles']),
		submit() {
			const { unshiftFile, modifyFile } = this
			return this.mode == 'add' ? unshiftFile() : modifyFile()
		},
		cancel() {
			if (this.mode === 'edit') {
				setTimeout(() => {
					this.form = Object.assign(this.form, this.formProps)
				}, 0)
			}
		},
		open() {
			this.$refs.form.open()
		},
		async unshiftFile() {
			const { isRemove } = this.config
			const originPath = this.form.originPath
			this.form.path = originPath
			const configPath = this.$store.getters.config.fileSavePath
			const targetPath = path.resolve(configPath, this.form.name)
			const loading = this.$loading({
				lock: true,
				text: '文件添加中,请耐心等待',
				spinner: 'el-icon-loading',
				background: 'rgba(0, 0, 0, 0.7)',
			})

			if (this.mode === 'add') {
				// this.form.path = originPath
				if (isRemove) {
					//是否移动文件夹
					this.form.path = targetPath
					this.form.remove = true
					const cache = await File.copy(originPath, targetPath)
					this.form.path = cache
					const name = path.basename(cache).split('.')[0]
					if (name !== this.form.name) {
						this.form.name = name
					}
				}
			}
			this.addFiles(this.form)
			loading.close()
		},
		modifyFile() {
			this.updateFiles(this.form)
			//判断配置项
			// const checkResult = this.nameCheck(this.form.name)
			// if (!checkResult.flag) {
			// 	this.$message({
			// 		type: 'error',
			// 		message: `添加失败,${checkResult.msg}`,
			// 		offset: 60,
			// 	})
			// 	return false
			// }
		},
		// nameCheck(name) {
		// 	if (name.trim().length <= 0) {
		// 		return {
		// 			flag: false,
		// 			msg: '名字长度不能为空',
		// 		}
		// 	}
		// 	const files = this.$store.getters.files
		// 	const loopCheck = files.some(cur => cur.name === name)
		// 	if (loopCheck) {
		// 		return {
		// 			flag: false,
		// 			msg: '项目名称已存在',
		// 		}
		// 	}
		// 	return {
		// 		flag: true,
		// 		msg: '通过',
		// 	}
		// },
		// modifyProject() {
		// 	this.form.name = this.form.name.trim()
		// 	const name = this.form.name
		// 	if (name.length === 0) {
		// 		this.$message({
		// 			type: 'error',
		// 			message: `项目名称不能为空`,
		// 			offset: 60,
		// 		})
		// 		return false
		// 	}
		// 	this.updateProject(this.form)
		// 	return true
		// },
	},
	watch: {
		config: {
			deep: true,
			handler(config) {
				const { isRemove, isDelete, isInstall } = this.config
				if (!isRemove) {
					this.config.isDelete = this.config.isInstall = false
				}
				if (isDelete || isInstall) {
					this.config.isRemove = true
				}
			},
		},
		formProps: {
			deep: true,
			handler(formProps) {
				this.form = Object.assign(this.form, formProps)
			},
		},
	},
}
</script>
