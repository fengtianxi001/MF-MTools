<template>
	<div class="table-body">
		<ul
			v-for="{ name, path, type, scripts } in data"
			:key="path"
			class="table-row"
		>
			<li :style="calcStyle(0)">
				<icon icon="#icon-folder" class="table-icon"></icon>
				<span>{{ name }}</span>
			</li>
			<li :style="calcStyle(1)">{{ path }}</li>
			<li :style="calcStyle(2)" class="table-row-type">
				<i :class="type"></i>
				<span>{{ type }}</span>
			</li>
			<li :style="calcStyle(3)" class="table-row-operate">
				<icon icon="#icon-vscode" class="table-icon"></icon>
				<icon icon="#icon-install" class="table-icon"></icon>
				<icon icon="#icon-folder" class="table-icon"></icon>
				<icon icon="#icon-remove" class="table-icon"></icon>
				<el-dropdown
					size="small"
					trigger="click"
					placement="bottom-end"
					:hide-after="900"
				>
					<span>
						<icon icon="#icon-more" class="table-icon-more"></icon>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item
							v-for="script in scripts"
							:key="script"
							@click.native="handleScript(script)"
						>
							<icon icon="#icon-run" class="table-icon"></icon>
							<span style="position: relative;top:-2px;left:-2px">
								{{ script }}
							</span>
						</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</li>
		</ul>
	</div>
</template>
<script>
import { Number2px } from '@/utils'
export default {
	name: 'table-body',
	props: {
		data: Array,
		header: Array,
	},
	methods: {
		calcStyle(index) {
			const { width, align } = this.header[index]
			return {
				width: Number2px(width),
				textAlign: align,
			}
		},
		handleScript(command) {
			console.log(command)
		},
	},
}
</script>
<style lang="scss">

</style>
