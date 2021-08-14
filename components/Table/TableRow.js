// const {} = require("../../scripts/utils/Operate")
const { exec } = require('child_process')
const { delProjectByPath } = require('../../scripts/utils/Storage')
const eventbus = require('../../scripts/utils/EventBus')
const fs = require('fs')
const path = require('path')
const TableRow = {
	props: {
		filesList: {
			type: Array,
			default: () => [],
		},
	},
	data() {
		return {
			loading: false,
		}
	},
	methods: {
		vscode(_path) {
			const code = 'code ' + _path
			this.runCode(code)
		},
		install(cwd) {
			const exist = fs.existsSync(path.resolve(cwd, 'node_modules'))
			const code = `start /i/high npm install`
			const options = { cwd }
			if (!exist) {
				this.runCode(code, options)
			} else {
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
			}
		},
		open(_path) {
			const code = 'explorer /root,' + _path
			this.runCode(code)
		},
		remove(cwd) {
			this.$confirm('该操作会在列表中移除此项目, 是否继续?', {
				confirmButtonText: '继续',
				cancelButtonText: '取消',
				type: 'warning',
				showClose: false
			})
				.then(() => {
					const res = delProjectByPath(cwd)
					if (res) {
						this.$message.success('项目移除成功!')
						eventbus.$emit('updateProject')
					} else {
						this.$message.error('未知错误导致,项目移除失败!')
					}
				})
				.catch(() => {})
		},
		run(cwd, _script) {
			const code = `start /i/high npm run ${_script}`
			const options = { cwd, detached: true }
			this.runCode(code, options)
		},

		runCode(code, options = {}) {
			console.log(code)
			exec(code, options)
		},
		copyPath(cwd) {
			var textareaEl = document.createElement('textarea')
			textareaEl.setAttribute('readonly', 'readonly') // 防止手机上弹出软键盘
			textareaEl.value = cwd
			document.body.appendChild(textareaEl)
			textareaEl.select()
			var res = document.execCommand('copy')
			document.body.removeChild(textareaEl)
			this.$message({
				type: 'success',
				message: '项目文件夹地址复制成功!',
			})
		},
	},
	template: /*html*/ `
        <div class="table-body">
            <ul class="table-content" 
                v-for="{name,path,scripts,type},index in filesList" 
                :key="path"
            >
                <li>
                    <i class="iconfont icon-wenjian1"></i>
                    {{name}}
                </li>
                <li>
                    <div :class="type">
                        <i></i>
                        <span>{{type}}</span>
                    </div>
                </li>
                <li @click="copyPath(path)">{{path}}</li>
                <li>
                    <i class="iconfont icon-vscode" @click="vscode(path)"></i>
                    <i class="iconfont icon-download-fill" @click="install(path)"></i>
                    <i class="iconfont icon-wenjian1" @click="open(path)"></i>
                    <i class="iconfont icon-delete1" @click="remove(path)"></i>
                    <el-dropdown 
                        size="small" 
                        trigger="click" 
                        placement="bottom-end" 
                        :hide-after="900"
                    >
                        <i class="iconfont icon-moreread"></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item 
                                v-for="script in scripts" 
                                :key="script"
                                @click.native="run(path,script)"
                            > 
                                <i class="iconfont icon-run"></i>
                                <span style="position: relative;top:-2px;left:-2px">
                                    {{script}}
                                </span>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </li>
            </ul>
        </div>
    `,
}
module.exports = TableRow
