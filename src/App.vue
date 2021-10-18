<template>
	<div id="app">
		<router-view />
	</div>
</template>
<script>
export default {
	data() {
		return {}
	},
}
</script>
<style lang="scss">
#app {
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	border-radius: 6px;
	overflow: hidden;
	box-sizing: border-box;
	padding: $padding;
}
</style>
