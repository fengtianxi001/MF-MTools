<template>
	<div class="the-file-icon">
		<div class="the-file-icon-container" :style="style">
			<div class="the-file-icon-angle"></div>
			<span class="the-file-icon-name">{{ icon.toUpperCase() }}</span>
		</div>
	</div>
</template>
<script>
import { stringColor } from '@/utils/index.js'
export default {
	name: 'the-file-icon',
	props: {
		icon: String,
	},
	data() {
		return {}
	},
	computed: {
		style() {
			const backgroundColor = stringColor(this.icon)
			return { backgroundColor }
		},
	},
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/handle.scss';
.the-file-icon {
	width: 100%;
	overflow: hidden;
	.the-file-icon-container {
		width: 100%;
		height: 36px;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		overflow: hidden;
		background: #f0695f;
		.the-file-icon-name {
			font-weight: bolder;
			font-size: 20px;
			font-family: fs;
		}
	}
}
</style>
