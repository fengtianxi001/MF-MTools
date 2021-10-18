<template>
	<div
		class="file-card-header"
		@click.stop="$emit('openSoftware', file.target)"
	>
		<name-shot @click.native="$emit('openSoftware', file.target)">
			{{ file.name }}
		</name-shot>
		<ul>
			<li class="projectName">{{ file.name }}</li>
			<li>
				<m-tag @click="$emit('openEdit', file)">
					<i class="el-icon-edit-outline"></i>
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
			const category = this.$store.getters.projectCategory
			const res = category.find(cur => cur.id == categoryId)
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
	cursor: pointer;
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
