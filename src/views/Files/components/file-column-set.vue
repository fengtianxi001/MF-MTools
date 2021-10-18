<template>
	<m-menu-group title="显示设置">
		<m-menu-radio
			:options="options"
			v-model="column"
			@change="change"
		></m-menu-radio>
	</m-menu-group>
</template>
<script>
//设置项目展示的列数
//因为操作具有独立性 所以抽离
export default {
	name: 'file-column-set',
	data() {
		return {
			column: this.$store.getters.projectColumn,
			options: [
				{ label: '单行显示', value: 1 },
				{ label: '双行显示', value: 2 },
			],
		}
	},
	methods: {
		change(value) {
			this.$store.commit('setFileColumn', value)
		},
	},
}
</script>
