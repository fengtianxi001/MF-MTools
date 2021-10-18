<template>
	<m-form title="分类添加" ref="form" :submit="submit" @cancel="cancel">
		<file-category-item mode="add" ref="categoryItem" :value="form" />
	</m-form>
</template>
<script>
const formReset = () => [
	{
		color: '#000000',
		label: '',
		id: new Date().getTime(),
	},
]
export default {
	name: 'file-category-add',
	data() {
		return {
			form: formReset(),
		}
	},
	components: {
		fileCategoryItem: () => import('./file-category-item.vue'),
	},
	methods: {
		submit() {
			const form = this.$refs.categoryItem.data[0]
			const label = (form.label = form.label.trim())
			if (label.length == 0) {
				this.$message({
					type: 'error',
					message: `分类的名字不能为空`,
					offset: 60,
				})
				return false
			}
			this.$store.commit('addFileCategory', form)
			this.form = formReset()
			return true
		},
		open() {
			this.$refs.form.open()
		},
		cancel() {
			this.form = formReset()
		},
	},
}
</script>
