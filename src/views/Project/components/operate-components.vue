<template>
	<div>
		<icon
			icon="#icon-vscode"
			class="table-icon"
			@click.native="vscode"
		></icon>
		<icon
			icon="#icon-install"
			class="table-icon"
			@click.native="install"
		></icon>
		<icon
			icon="#icon-remove"
			class="table-icon"
			@click.native="remove"
		></icon>
		<el-dropdown
			size="small"
			trigger="click"
			placement="bottom-end"
			:hide-after="900"
		>
			<span>
				<icon
					icon="#icon-more"
					class="table-icon table-icon-more"
				></icon>
			</span>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item
					v-for="script in scripts"
					:key="script"
					@click.native="run(script)"
				>
					<icon
						icon="#icon-run"
						class="table-icon"
						fill="#8baff2"
					></icon>
					<span style="position: relative;top:-2px;left:-2px">
						{{ script }}
					</span>
				</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
	</div>
</template>
<script>
const fs = require('fs')
const path = require('path')
const { exec } = require('child_process')
// import { del } from '../../../utils/datastore'
// import eventbus from '../../../api/eventbus'
export default {
	name: 'operate-components',
	props: {
		scripts: Array,
		dirpath: String,
	},
	methods: {
		runCode(code, options = {}) {
			exec(code, options)
		},
		vscode() {
			const code = 'code ' + this.dirpath
			this.runCode(code)
		},
		open() {
			const code = 'explorer /root,' + this.dirpath
			this.runCode(code)
		},
		install() {
			const { dirpath } = this
			const exist = fs.existsSync(path.resolve(dirpath, 'node_modules'))
			const options = { cwd: dirpath }
			const code = `start /i/high npm install`
			if (!exist) {
				return this.runCode(code, options)
			}
			this.$confirm(
				'此项目已包含"node_modules"文件夹,继续安装将会覆盖, 是否继续?',
				{
					confirmButtonText: '继续',
					cancelButtonText: '取消',
					type: 'warning',
					showClose: false,
				}
			)
				.then(() => {
					this.runCode(code, options)
				})
				.catch(() => {})
		},
		run(command) {
			const code = `start /i/high npm run ${command}`
			const options = { cwd: this.dirpath, detached: true }
			this.runCode(code, options)
		},
		remove() {
			this.$confirm('该操作会在列表中移除此项目, 是否继续?', {
				confirmButtonText: '继续',
				cancelButtonText: '取消',
				type: 'warning',
				showClose: false,
			})
				.then(() => {
					// const { dirpath } = this
					// const where = { name: path.basename(dirpath) }
					// // const res = delProject(where)
					// if (res) {
					// 	this.$message.success('项目移除成功!')
					// } else {
					// 	this.$message.error('未知错误导致,项目移除失败!')
					// }
					// eventbus.$emit('updateProject')
				})
				.catch(() => {})
		},
	},
}
</script>
<style lang="scss" scoped></style>
