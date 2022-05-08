<template>
	<div class="walls">
		<template v-for="image in images">
			<the-wall-image :key="image.id" :src="image.urls.small"></the-wall-image>
		</template>
	</div>
</template>
<script>
import images from './static'
export default {
	name: 'Walls',
	components: {
		theWallImage: () => import('./components/the-wall-image.vue'),
	},
	data() {
		return {
			images,
		}
	},
	computed: {},
	watch: {},
	created() {},
	mounted() {},
	destroyed() {},
}
</script>
<style lang="scss" scoped>
.walls {
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-column-gap: 10px;
	grid-row-gap: 10px;
	grid-auto-rows: min-content;
	padding: 10px;
	.image {
		height: 200px;
	}
}
</style>
