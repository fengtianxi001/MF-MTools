<template>
	<img v-if="src" class="type-icon" :src="src" alt="file-icon" />
</template>
<script>
// import fileIconType from '../../utils/common/fileIconType.js'
// const path = require('path')
export default {
	name: 'm-software-icon',
	props: {
		src: String,
	},
	computed: {
		iconSrc() {
			// const ext = path.extname(this.src)
            return ""
		},
	},
}
</script>
<style lang="scss" scoped>
.type-icon {
	font-weight: bolder;
	font-size: 22px;
	width: 45px;
	height: 45px;
	border-radius: 10px;
	background-color: #1f1f1f;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 10px;
	flex-shrink: 0;
	object-fit: cover;
}
</style>
