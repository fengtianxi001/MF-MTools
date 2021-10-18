<template>
	<div class="websit" @click="handle">
		<div class="websize-coat" :style="{ backgroundImage: src }"></div>
		<div class="name">{{ info.name }}</div>
	</div>
</template>
<script>
const { shell } = require('electron')
export default {
	name: 'm-website',
	props: {
		info: Object,
	},
	computed: {
		src() {
			const { icon } = this.info
			let pic = ''
			try {
				pic = require('../../../assets/siteIcon/' + icon)
			} catch (error) {
				pic = require('../../../assets/siteIcon/default.png')
			}
			return `url(${pic})`
		},
	},
	methods: {
		handle() {
			console.log(this.info.site)
			shell.openExternal(this.info.site)
		},
	},
}
</script>
<style lang="scss" scoped>
$width: 50px;
.websit {
	display: flex;
	flex-direction: column;
	height: 100px;
	.websize-coat {
		width: $width;
		height: $width;
		border-radius: 6px;
		//		border: $border;
		box-sizing: border-box;
		cursor: pointer;
		background-size: cover;
	}
	.name {
		font-size: 12px;
		text-align: center;
		margin-top: 6px;
		width: $width;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
}
</style>
