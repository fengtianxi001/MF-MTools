<template>
	<div class="m-view">
		<m-menu>
			<slot name="menu"></slot>
		</m-menu>
		<div class="m-content">
			<slot name="content"></slot>
		</div>
	</div>
</template>
<script>
export default {
	name: 'm-view',
}
</script>
<style lang="scss" scoped>
.m-view {
	width: 100%;
	min-height: 100vh;
	display: flex;
	.m-content {
		width: 100%;
		height: calc(calc(100vh - 30px) - 40px);
	}
}
</style>
