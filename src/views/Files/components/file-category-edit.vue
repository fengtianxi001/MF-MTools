<template>
	<m-form ref="form" title="分类编辑" :submit="submit" @cancel="cancel">
		<file-category-item mode="edit" ref="categoryItem" :value="form" />
	</m-form>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
	name: 'file-category-edit',
	props: {
		visible: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			form: [], //用来重置
		}
	},
	computed: {
		...mapGetters(['fileCategory']),
	},

	components: {
		fileCategoryItem: () => import('./file-category-item.vue'),
	},
	methods: {
		submit() {
			let form = this.$refs.categoryItem.data
			form = form.map(cur => {
				cur.label = cur.label.trim()
				return cur
			})
			const result = form.some(cur => cur.label.length === 0)
			if (result) {
				this.$message({
					type: 'success',
					message: `分类名字不能为空`,
					offset: 60,
				})
				return false
			}
			this.$store.commit('setFileCategory', form)
			return true
		},
		open() {
			this.$refs.form.open()
		},
		cancel() {
			this.form = this.fileCategory
			this.$refs.categoryItem.reset()
		},
	},
	watch: {
		fileCategory: {
			deep: true,
			immediate: true,
			handler(fileCategory) {
				this.form = this.$utils.deepClone(fileCategory)
			},
		},
	},
}
</script>
