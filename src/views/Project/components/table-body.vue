<template>
	<draggable
		class="table-body"
		v-if="projectList.length !== 0"
		v-model="projectList"
	>
		<ul
			v-for="{ name, path, type, scripts, trusteeship } in projectList"
			:key="path"
			class="table-row"
		>
			<li :style="calcStyle(0)">
				<icon
					icon="#icon-folder"
					@click.native="open(path)"
					class="table-icon"
				></icon>
				<span>{{ name }}</span>
			</li>

			<li
				:style="calcStyle(1)"
				style="cursor: pointer"
				@click="open(path)"
			>
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
	</draggable>
	<div v-else class="empty">
		<div class="bgi"></div>
	</div>
</template>
<script>
import { Number2px } from '@/utils'
const { exec } = require('child_process')
import draggable from 'vuedraggable'
export default {
	name: 'table-body',
	props: {
		header: Array,
	},
	data() {
		return {}
	},
	methods: {
		calcStyle(index) {
			const { width, align } = this.header[index]
			return {
				width: Number2px(width),
				textAlign: align,
			}
		},
		open(cwd) {
			const code = 'explorer /root,' + cwd
			exec(code)
		},
	},
	components: {
		trusteeshipType: () => import('./trusteeship-type.vue'),
		operateComponents: () => import('./operate-components.vue'),
		draggable,
	},
	computed: {
		projectList: {
			get() {
				return this.$store.state.Project.list
			},
			set(value) {
				this.$store.commit('orderProject', value)
			},
		},
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
.empty {
	height: calc(100% - 46px);
	/* border: 1px solid #2b6ee7; */
	background-color: #f2f3f7;
	border-radius: 4px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	user-select: none;
	position: relative;
	div {
		width: 70%;
		height: 100%;
		background-image: url('../../../assets/images/empty.png');
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center center;
	}
	p {
		position: absolute;
		bottom: 20px;
		color: #858585;
	}
}
</style>
