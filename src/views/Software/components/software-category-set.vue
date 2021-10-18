<template>
	<m-menu-group title="分类操作">
		<m-menu-button @click="categoryEdit">编辑分类</m-menu-button>
		<m-menu-button @click="categoryAdd">添加分类</m-menu-button>
		<file-category-edit ref="categoryEdit"></file-category-edit>
		<file-category-add ref="categoryAdd"></file-category-add>
	</m-menu-group>
</template>
<script>
//项目分类的修改和新增
export default {
	name: 'software-category-set',
	components: {
		FileCategoryEdit: () => import('./software-category-edit.vue'),
		FileCategoryAdd: () => import('./software-category-add.vue'),
	},
	methods: {
		categoryEdit() {
			this.$refs.categoryEdit.open()
		},
		categoryAdd() {
			this.$refs.categoryAdd.open()
		},
	},
}
</script>
<style lang="scss" scoped></style>
