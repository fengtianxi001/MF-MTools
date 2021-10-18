<template>
	<div class="file-card-header" @click.stop="$emit('openFile', file.path)">
		<m-type-icon v-if="iconNative.includes(file.type)" :src="file.path" />
		<m-type-icon v-else :ext="file.type" />
		<ul>
			<li class="projectName">{{ file.name }}</li>
			<li>
				<m-tag @click="$emit('openEdit', file)">
					<i class="el-icon-edit-outline"></i>
				</m-tag>
				<m-tag @click="$emit('openFolder', file.path)">
					<i class="el-icon-folder-opened"></i>
				</m-tag>
				<m-tag @click="$emit('copyPath', file.path)">
					<i class="el-icon-copy-document"></i>
				</m-tag>
				<m-tag @click="$emit('removeFile', file)">
					<i class="el-icon-delete"></i>
				</m-tag>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	props: {
		file: Object,
	},
	data() {
		return {
			iconNative: ['jpeg', 'jpg', 'ico', 'png'],
		}
	},
	methods: {
		toggleHandle() {
			this.expansion = !this.value
			this.$emit('input', this.expansion)
		},
		getCategoryColor(categoryId) {
			// console.log("categoryId",categoryId);
			const category = this.$store.getters.projectCategory
			const res = category.find(cur => cur.id == categoryId)
			// console.log("res",res);
			if (res) {
				return res.color
			}
			return 'black'
		},
	},
}
</script>
<style lang="scss" scoped>
.file-card-header {
	width: 100%;
	display: flex;
	color: #fff;
	font-size: 12px;
	position: relative;
	transition: $transition;
	overflow: hidden;
	.m-tag {
		margin-right: 2px;
	}
	ul {
		width: 100%;
		height: 45px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
}
.projectName {
	width: 100%;
	overflow: hidden;
	/* height: 10px; */
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 1; //行数
	-webkit-box-orient: vertical;
}
</style>
