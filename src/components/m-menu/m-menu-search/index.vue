<template>
	<div class="m-menu-search" :class="{ focus }">
		<i v-if="isEmpty" class="el-icon-search" style="color:#999"></i>
		<i v-else class="el-icon-circle-close" @click="keyword = ''"></i>
		<input type="text" :placeholder="placeholder" v-model="keyword" @focus="focus = true" @blur="focus = false" />
	</div>
</template>
<script>
export default {
	name: 'm-menu-search',
	props: {
		placeholder: {
			type: String,
			default: '请输入搜索内容',
		},
	},
	data() {
		return {
			keyword: '',
			focus: false,
		}
	},
	computed: {
		isEmpty() {
			return this.keyword.length === 0
		},
	},
	watch: {
		keyword() {
			this.$emit('input', this.keyword)
		},
	},
}
</script>
<style lang="scss" scoped>
$height: 28px;
.m-menu-search {
	display: flex;
	background-color: #131c23;
	border-radius: 4px;
	border: $border;
	&.focus {
		border-color: #3ea477;
	}
	.el-icon-search,
	.el-icon-circle-close {
		width: $height;
		height: $height;
		text-align: center;
		line-height: $height;
		cursor: pointer;
		font-size: 14px;
		color: #38a576;
		font-weight: bolder;
	}
	input {
		width: calc(100% - 30px);
		border: 0;
		height: $height;
		background-color: transparent;
		border-radius: 6px;
		outline-width: 0;
		font-size: 12px;
		line-height: 30px;
		box-sizing: border-box;
		color: #38a576;
		&::-webkit-input-placeholder {
			color: #999;
			font-size: 12px;
		}
	}
}
</style>
