<template>
	<ul class="m-checkbox">
		<template v-for="(option, index) in data">
			<m-checkbox-item
				:key="index"
				:option="option"
				:active="value == option[valueKey]"
				@change="change"
				:valueKey="valueKey"
				:labelKey="labelKey"
			/>
		</template>
	</ul>
</template>

<script>
/*eslint-disable*/
export default {
	name: 'm-checkbox',
	data() {
		return {
			data: [],
		}
	},
	props: {
		options: Array,
		value: [String, Number, Boolean],
		valueKey: {
			type: String,
			default: 'value',
		},
		labelKey: {
			type: String,
			default: 'label',
		},
		whole: String,
	},
	components: {
		MCheckboxItem: () => import('./m-checkbox-item.vue'),
	},
	methods: {
		change(value) {
			this.$emit('input', value)
		},
	},
	watch: {
		options: {
			deep: true,
			immediate: true,
			handler(options) {
				if (this.whole) {
					const fir = {
						[this.valueKey]: 0,
						[this.labelKey]: this.whole,
					}
					this.data = [fir, ...options]
				} else {
					this.data = [...options]
				}
			},
		},
	},
}
</script>
<style lang="scss" scoped>
.m-checkbox {
	font-size: 12px;
	color: #fff;
	user-select: none;
}
</style>
