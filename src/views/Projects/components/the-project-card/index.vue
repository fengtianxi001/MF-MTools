<template>
	<div class="the-project-card" @contextmenu.prevent="onContextmenu" :style="style">
		<div class="flex" @click="cardHandle">
			<base-name :name="project.pinyin" size="60px" />
			<div class="the-project-info">
				<div class="project-info-name">{{ project.name }}</div>
				<div class="project-info-category">{{ project.addtime | date_format }}</div>
			</div>
		</div>
		<the-project-card-detail :visible.sync="detailVisible" :project="project"></the-project-card-detail>
	</div>
</template>
<script>
/*eslint-disable*/
import { stringColor } from '@/utils/index.js'
import { deleteProject, reloadProject, editorProject, folderProject, cmdProject } from '../../controller'

export default {
	name: 'the-project-card',
	components: {
		theProjectCardDetail: () => import('../the-project-card-detail/index.vue'),
	},
	mixins: [],
	props: {
		project: Object,
	},
	data() {
		return { detailVisible: false }
	},
	computed: {
		style() {
			const color = stringColor(this.project.pinyin)
			return {
				background: color + '99',
			}
		},
	},
	methods: {
		onContextmenu(event) {
			const { id, path } = this.project
			this.$contextmenu({
				items: [
					{
						label: '重载项目',
						icon: 'el-icon-refresh',
						onClick: () => reloadProject({ path }),
					},
					{
						label: '删除项目',
						icon: 'el-icon-delete',
						onClick: () => deleteProject({ path, id }),
					},
					{
						label: '编辑器打开',
						icon: 'el-icon-edit',
						onClick: () => editorProject(path),
					},
					{
						label: '文件夹打开',
						icon: 'el-icon-folder-opened',
						onClick: () => folderProject(path),
					},
					{
						label: '终端打开',
						icon: 'el-icon-files',
						onClick: () => cmdProject(path),
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
			this.detailVisible = true
		},
	},
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/handle.scss';
.the-project-card {
	height: 60px;
	@include background_color('background_color5');
	background-color: #000;
	display: flex;
	user-select: none;
	@include font_color('font_color2');
	color: #fff;
	cursor: pointer;
	box-shadow: $box_shadow;
	position: relative;
	transition: none !important;
	.the-project-info {
		box-sizing: border-box;
		padding: 4px 4px 4px 10px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		.project-info-name {
			font-size: 16px;
			width: 100px;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			font-family: PingFang-Bold;
			/* font-weight: bolder; */
			/* font-family: fs, PingFang-Bold, sans-serif; */
		}
		.project-info-category {
			font-size: 12px;
			margin-top: 4px;
			/* font-family: fs, PingFang-Bold, sans-serif; */
		}
	}
}
</style>
