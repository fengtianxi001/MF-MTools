<template>
	<div>
		<icon icon="#icon-vscode" class="table-icon"></icon>
		<icon icon="#icon-install" class="table-icon"></icon>
		<icon icon="#icon-info" class="table-icon"></icon>
		<icon icon="#icon-remove" class="table-icon"></icon>
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
					@click.native="handleScript(script)"
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
export default {
	name: 'operate-components',
	props: {
		scripts: Array,
	},
	methods: {
		handleScript(command) {
			console.log(command)
		},
	},
}
</script>
<style lang="scss" scoped></style>
