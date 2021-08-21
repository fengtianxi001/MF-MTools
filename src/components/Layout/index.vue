<template>
	<ul class="layout">
		<li class="layout-menu">
			<Menu></Menu>
		</li>
		<li class="layout-continer">
			<router-view></router-view>
		</li>
	</ul>
</template>
<script>
export default {
	components: {
		Menu: () => import('../Menu/index.vue'),
	},
}
</script>
<style lang="scss" scoped>
.layout {
	width: 100vw;
	height: 100vh;
	display: flex;
	.layout-menu {
		width: 140px;
		height: 100%;
	}
	.layout-continer {
		height: 100%;
		overflow: hidden;
		flex: 1;
	}
}
</style>
