<template>
	<header class="header">
		<m-search @search="search"></m-search>
		<icon icon="#icon-SetOutline" class="header-icon"></icon>
	</header>
</template>
<script>
export default {
	name: 'm-header',
	methods: {
		search(keyword){
			this.$emit("search",keyword)
		}
	}
}
</script>
<style lang="scss" scoped>
.header {
	width: 100%;
	height: 34px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	.header-icon {
		width: 30px;
		height: 30px;
		background-color: $maincolor;
		padding: 6px;
		color: #fff;
		border-radius: 4px;
		cursor: pointer;
		&:active {
			background-color: $midcolor;
			transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
		}
	}
}
</style>
