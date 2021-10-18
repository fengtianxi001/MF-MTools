<template>
	<div class="menuGroup">
		<h5 v-if="title">{{ title }}</h5>
		<slot></slot>
	</div>
</template>
<script>
export default {
	name: 'm-menu-group',
	props: {
		title: {
			type: String,
			default: '',
		},
	},
}
</script>
<style lang="scss" scoped>
.menuGroup {
	margin-top: 20px;
	h5 {
		font-size: 12px;
		font-weight: normal;
		margin-bottom: 10px;
        border-left: 4px solid #38a576;
        padding-left: 10px;
        /* color: #222d35; */
        /* transform: scale(.9); */
	}
}
</style>
