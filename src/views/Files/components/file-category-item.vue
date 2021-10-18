<template>
	<div>
		<ul v-for="option in data" :key="option.id" class="file-category-row">
			<li class="input-shell">
				<span class="tag">分类名称:</span>
				<input v-model="option['label']" />
			</li>
			<m-color-picker
				class="colorPick"
				v-model="option['color']"
			></m-color-picker>
			<li class="remove" v-show="mode === 'edit'">
				<i class="el-icon-close" @click="remove(option.id)"></i>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	name: 'file-category-item',
	props: {
		value: Array,
		index: {
			type: Number,
			default: 0,
		},
		mode: {
			type: String,
			default: 'add',
		},
	},
	data() {
		return {
			data: [],
		}
	},
	methods: {
		remove(id) {
			const index = this.data.findIndex(cur => cur.id === id)
			// console.log(index);
			this.data.splice(index, 1)
		},
		reset() {
			this.data = this.$utils.deepClone(this.value)
		},
	},
	watch: {
		value: {
			deep: true,
			immediate: true,
			handler(value) {
				this.data = this.$utils.deepClone(value)
				// console.log('inter', this.data)
			},
		},
	},
}
</script>
<style lang="scss" scoped>
$height: 36px;
.file-category-row {
	display: flex;
	align-items: center;
	height: $height;
	border: $border;
	user-select: none;
	padding: 0 6px;
	margin-bottom: 10px;
	background-color: #222d35;
	border-radius: 2px;
	overflow: hidden;
	padding-left: 0;
	.colorPick {
		margin-right: 10px;
	}
	li {
		height: 100%;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		padding: 6px;
	}
	li:nth-child(n + 2) {
		margin-left: 4px;
	}
	.remove {
		width: 21px;
		height: 21px;
		background-color: #1f1f1f;
		color: #fff;
		font-size: 13px;
		border-radius: 2px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		box-sizing: border-box;
		background-color: #e91c4f;
		border: $border;
	}
	.input-shell {
		flex: 1 auto;
		input {
			background-color: transparent;
			height: 100%;
			border: none;
			outline: none;
			color: #fff;
			box-sizing: border-box;
			padding-left: 6px;
		}
		.tag {
			background-color: #1f1f1f;
			color: #fff;
			height: 100%;
			font-size: 12px;
			display: flex;
			align-items: center;
			padding: 0 10px;
			border-radius: 2px;
			border: $border;
		}
	}
}
</style>

<style lang="scss">
.color-picker-popover {
	background-color: #242f35 !important;
	border: $border !important;
	.popper__arrow {
		display: none !important;
	}
}
</style>
