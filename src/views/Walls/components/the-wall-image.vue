<template>
	<el-image :src="src" fit="cover" class="the-wall-image" lazy v-loading="loading" @click="handle"></el-image>
</template>
<script>
export default {
	name: 'the-wall-image',
	components: {},
	mixins: [],
	props: {
		src: String,
	},
	data() {
		return {
			loading: false,
		}
	},
	computed: {},
	watch: {},
	created() {},
	mounted() {},
	destroyed() {},
	methods: {
		handle() {
			this.loading = true
			setTimeout(() => {
				this.loading = false
			}, 1000)
		},
	},
}
</script>
<style lang="scss" scoped>
.the-wall-image {
	height: 200px;
	cursor: pointer;
}
</style>
