<template>
	<div class="the-file-card" @contextmenu.prevent="onContextmenu" @click="cardHandle">
		<the-file-icon :icon="file.extname"></the-file-icon>
		<span class="the-file-card-name">{{ file.name }}</span>
	</div>
</template>
<script>
import { deleteFile, openFile, openFolder } from '../../controller'
const { clipboard } = require('electron')
export default {
	name: 'the-file-card',
	props: {
		file: Object,
	},
	components: {
		theFileIcon: () => import('../The-file-icon'),
	},
	methods: {
		onContextmenu(event) {
			const { id, path } = this.file
			this.$contextmenu({
				items: [
					{
						label: '打开文件',
						icon: 'el-icon-document',
						onClick: () => openFile(path),
					},
					{
						label: '删除文件',
						icon: 'el-icon-delete',
						onClick: () => deleteFile({ path, id }),
					},
					{
						label: '文件夹中打开',
						icon: 'el-icon-folder-opened',
						onClick: () => openFolder(path),
					},
					{
						label: '复制文件路径',
						icon: 'el-icon-document-copy',
						onClick: () => clipboard.writeText(path),
					},
					{
						label: '复制到剪切板',
						icon: 'el-icon-document-copy',
						onClick: () => clipboard.writeText(path),
					},
				],
				event,
				customClass: 'custom-class',
				zIndex: 3,
				minWidth: 160,
			})
			return false
		},
		cardHandle() {
			openFile(this.file.path)
		},
	},
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/handle.scss';
.the-file-card {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	box-shadow: $box_shadow;
	cursor: pointer;
	&:active {
		background-color: transparent !important;
	}
	.the-file-card-icon {
		width: 40px;
		height: 40px;
	}
	.the-file-card-name {
		font-size: 12px;
		height: 24px;
		line-height: 24px;
		width: 68.45px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		@include font_color('font_color2');
		text-align: center;
		@include background_color('background_color5');
	}
}
</style>
