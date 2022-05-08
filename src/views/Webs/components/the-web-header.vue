<template>
	<ul class="the-web-header">
		<li>It's simple</li>
		<li>Search,Find & Apply</li>
	</ul>
</template>
<script>
export default {
	name: 'the-web-header',
	components: {},
	mixins: [],
	props: {},
	data() {
		return {}
	},
	computed: {},
	watch: {},
	created() {},
	mounted() {},
	destroyed() {},
	methods: {},
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/handle.scss';
.the-web-header {
	/* color: $active_green; */
	@include font_color('font_color1');
	font-size: 24px;
	border-left: 4px solid $active_green;
	padding-left: 10px;
	font-weight: bold;
	font-family: fs;
	/* @include background_color("background_color1"); */
	height: 70px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 240px;
	/* line-height: 70px; */
	li:nth-child(1) {
		font-family: fs;
	}
	li:nth-child(2) {
		font-size: 18px;
		font-family: fs;
	}
}
</style>
