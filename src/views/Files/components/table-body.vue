<template>
	<draggable
		class="table-body"
		v-if="filesList.length !== 0"
		v-model="filesList"
	>
		<ul
			v-for="{ name, path, type, size } in filesList"
			:key="path"
			class="table-row"
			@click="open(path)"
		>
			<li :style="calcStyle(0)">
				<icon icon="#icon-folder" class="table-icon"></icon>
				<span>{{ name }}</span>
			</li>

			<li :style="calcStyle(1)" style="cursor: pointer">
				{{ path }}
			</li>
			<li :style="calcStyle(2)" class="table-row-type">
				<i :class="type"></i>
				<span>{{ type }}</span>
			</li>
			<li :style="calcStyle(3)" class="table-row-type">
				<span>{{ size | sizefilter }}</span>
			</li>
			<li
				:style="calcStyle(4)"
				class="table-row-type"
				style="display:flex;justify-content: center"
				@click.stop="remov(path)"
			>
				<icon icon="#icon-remove" class="table-icon"></icon>
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
import { mapActions } from "vuex";
export default {
	name: 'table-body',
	props: {
		header: Array,
	},
	data() {
		return {}
	},
	methods: {
		...mapActions(["delFiles"]),
		calcStyle(index) {
			const { width, align } = this.header[index]
			return {
				width: Number2px(width),
				textAlign: align,
			}
		},
		open(cwd) {
			const code = 'start ' + cwd
			console.log(code)
			exec(code)
		},
		remov(path){
			this.delFiles(path)
		}
	},
	components: {
		draggable,
	},
	computed: {
		filesList: {
			get() {
				return this.$store.state.Files.list
			},
			set(value) {
				this.$store.commit('orderFiles', value)
			},
		},
	},
	filters: {
		sizefilter(limit) {
			var size = ''
			if (limit < 0.1 * 1024) {
				//小于0.1KB，则转化成B
				size = limit.toFixed(2) + 'B'
			} else if (limit < 0.1 * 1024 * 1024) {
				//小于0.1MB，则转化成KB
				size = (limit / 1024).toFixed(2) + 'KB'
			} else if (limit < 0.1 * 1024 * 1024 * 1024) {
				//小于0.1GB，则转化成MB
				size = (limit / (1024 * 1024)).toFixed(2) + 'MB'
			} else {
				//其他转化成GB
				size = (limit / (1024 * 1024 * 1024)).toFixed(2) + 'GB'
			}

			var sizeStr = size + '' //转成字符串
			var index = sizeStr.indexOf('.') //获取小数点处的索引
			var dou = sizeStr.substr(index + 1, 2) //获取小数点后两位的值
			if (dou == '00') {
				//判断后两位是否为00，如果是则删除00
				return (
					sizeStr.substring(0, index) + sizeStr.substr(index + 3, 2)
				)
			}
			return size
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
