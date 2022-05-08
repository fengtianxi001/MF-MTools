<template>
	<div class="the-web-site">
		<img class="the-web-site-ico" :src="src" />
		<!-- <div class="the-web-site-name">{{ site.name }}</div> -->
	</div>
</template>
<script>
export default {
	name: 'the-web-site',
	components: {},
	mixins: [],
	props: {
		site: Object,
	},
	data() {
		return {}
	},
	computed: {
		src() {
			console.log(this.site.icon)
			return require(`../../../assets/icons/site_icon/${this.site.icon}.jpg`)
		},
	},
	watch: {},
	created() {},
	mounted() {},
	destroyed() {},
	methods: {},
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/handle.scss';
.the-web-site {
	@include background_color('background_color5');
	@include font_color('font_color2');
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	box-shadow: $box_shadow;
	cursor: pointer;
	.the-web-site-ico {
		background-color: #1e1e1e;
		width: 100%;
		height: 52px;
		object-fit: cover;
	}
	.the-web-site-name {
		font-size: 14px;
		/* width: 80px; */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		text-align: center;
        position: absolute;
	}
}
</style>
