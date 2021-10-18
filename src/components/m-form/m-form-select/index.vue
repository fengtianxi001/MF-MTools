<template>
	<m-form-cell v-bind="$attrs">
		<el-select v-model="data" size="mini">
			<el-option
				v-for="option in options"
				:key="option[valueKey]"
				:label="option[labelKey]"
				:value="option[valueKey]"
			></el-option>
		</el-select>
	</m-form-cell>
</template>
<script>
export default {
	name: 'm-form-select',
	props: {
		options: Array,
		placeholder: String,
		value: [String, Number],
		valueKey: {
			type: String,
			default: 'value',
		},
		labelKey: {
			type: String,
			default: 'label',
		},
		disable: Boolean,
	},
	data() {
		return {
			data: '',
		}
	},
	watch: {
		data: {
			immediate: true,
			deep: true,
			handler(data) {
				this.$emit('input', data)
			},
		},
		value: {
			immediate: true,
			handler(value) {
				this.data = value
			},
		},
	},
}
</script>
