<template>
	<div class="table-body">
		<ul
			v-for="{ name, path, type, scripts, trusteeship } in data"
			:key="path"
			class="table-row"
		>
			<li :style="calcStyle(0)">
				<icon icon="#icon-folder" class="table-icon"></icon>
				<span>{{ name }}</span>
			</li>

			<li :style="calcStyle(1)" style="cursor: pointer">
				{{ path }}
			</li>
			<li
				:style="calcStyle(2)"
				class="table-row-type"
				style="display:flex;justify-content: center"
			>
				<i :class="type"></i>
				<span>{{ type }}</span>
			</li>
			<li :style="calcStyle(3)" class="table-row-type">
				<trusteeshipType
					:type="trusteeship"
					:path="path"
				></trusteeshipType>
			</li>
			<li :style="calcStyle(4)" class="table-row-operate">
				<operateComponents
					:scripts="scripts"
					:dirpath="path"
				></operateComponents>
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
	},
	components: {
		trusteeshipType: () => import('./trusteeship-type.vue'),
		operateComponents: () => import('./operate-components.vue'),
	},
}
</script>
<style lang="scss">
.table-row {
	cursor: pointer;
	border-top: 1px solid transparent;
	border-left: 1px solid transparent;
	border-right: 1px solid transparent;
	& > li {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
}
</style>
