<template>
	<img class="type-icon" :src="iconURL" alt="file-icon" />
</template>
<script>
import fileIconType from '../../utils/common/fileIconType.js'
export default {
	name: 'm-type-icon',
	props: {
		ext: String,
		src: String,
	},
	computed: {
		iconURL() {
			if (this.src) {
				return this.src
			} else {
				let type = this.ext.toLowerCase()
				const keys = Object.keys(fileIconType)
				const result = keys.reduce((prev, key) => {
					if (key.indexOf(type) >= 0)
						return (prev = fileIconType[key])
					return prev
				}, '')
				if (result) {
					return require(`../../assets/fileIcon/${result}.png`)
				}
				return require(`../../assets/fileIcon/default.png`)
			}
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
