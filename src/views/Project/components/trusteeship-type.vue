<template>
	<el-dropdown
		size="small"
		trigger="click"
		placement="bottom-end"
		:hide-after="900"
		style="width:100%"
	>
		<div
			style="width:100%;cursor: pointer;display:flex;justify-content: center;align-items: center;"
		>
			<i :class="type"></i>
			<span>{{ type }}</span>
		</div>
		<el-dropdown-menu slot="dropdown">
			<el-dropdown-item @click.native="pull()">
				<icon
					icon="icon-xiazai6"
					class="table-icon"
					fill="#8baff2"
				></icon>
				<span style="position: relative;top:-2px;left:-2px">拉取</span>
			</el-dropdown-item>
			<el-dropdown-item @click.native="commit()">
				<icon
					icon="icon-shangchuan5"
					class="table-icon"
					fill="#8baff2"
				></icon>
				<span style="position: relative;top:-2px;left:-2px">提交</span>
			</el-dropdown-item>

			<el-dropdown-item @click.native="push()">
				<icon
					icon="icon-shangchuan5"
					class="table-icon"
					fill="#8baff2"
				></icon>
				<span style="position: relative;top:-2px;left:-2px">推送</span>
			</el-dropdown-item>
		</el-dropdown-menu>
	</el-dropdown>
</template>
<script>
const { exec } = require('child_process')
export default {
	name: 'trusteeship-type',
	props: {
		type: String,
		path: String,
	},
	methods: {
		commit() {
			const { path } = this
			const options = { path, detached: true }
			exec(
				`TortoiseGitProc /command:commit /path:${path} /logmsg:update`,
				options
			)
		},
		pull() {
			const { path } = this
			const options = { path, detached: true }
			exec(`TortoiseGitProc /command:fetch /path:${path}`, options)
		},
		push() {
			const { path } = this
			const options = { path, detached: true }
			exec(`TortoiseGitProc /command:push /path:${path}`, options)
		},
	},
}
</script>
<style lang="scss" scoped>
.git {
	background-color: #f05133;
}
.svn {
	background-color: #af9ab2;
}
.local {
	background-color: #809dca;
}
</style>
