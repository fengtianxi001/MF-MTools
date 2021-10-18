<template>
	<div class="m-menu">
		<slot></slot>
	</div>
</template>
<script>
export default {
	name: 'm-menu',
}
</script>
<style lang="scss" scoped>
.m-menu {
	width: 180px;
	height: calc(#{$height} - 40px);
	position: relative;
	background-color: #192229;
	flex-shrink: 0;

    
	border-right: 1px solid #6b6b6b33;
	padding: 20px 14px 0;
	box-sizing: border-box;
	overflow-y: scroll;
}
</style>
