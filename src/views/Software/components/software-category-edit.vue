<template>
	<m-form ref="form" title="分类编辑" :submit="submit" @cancel="cancel">
		<software-category-item mode="edit" ref="categoryItem" :value="form" />
	</m-form>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
	name: 'software-category-edit',
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
		...mapGetters(['softwareCategory']),
	},

	components: {
		softwareCategoryItem: () => import('./software-category-item.vue'),
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
			this.$store.commit('setSoftwareCategory', form)
			return true
		},
		open() {
			this.$refs.form.open()
		},
		cancel() {
			this.form = this.softwareCategory
			this.$refs.categoryItem.reset()
		},
	},
	watch: {
		softwareCategory: {
			deep: true,
			immediate: true,
			handler(softwareCategory) {
				this.form = this.$utils.deepClone(softwareCategory)
			},
		},
	},
}
</script>
