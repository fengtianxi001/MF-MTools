<template>
	<li
		class="m-checkbox-item"
		:class="{ active }"
		@click="$emit('change', option[valueKey])"
	>
		<span class="checkbox">
			<i class="dot"></i>
		</span>
		<span class="label">{{ option[labelKey] }}</span>
	</li>
</template>
<script>
export default {
	name: 'm-checkbox-item',
	props: {
		option: {
			type: Object,
			default: () => {
				return { label: '', value: '' }
			},
		},
		active: {
			type: Boolean,
			default: false,
		},
		valueKey: {
			type: String,
			default: 'value',
		},
		labelKey: {
			type: String,
			default: 'label',
		},
	},
}
</script>
<style lang="scss" scoped>
.m-checkbox-item {
	background-color: #222d35;
	margin-top: 10px;
	box-sizing: border-box;
	height: 28px;
	border-radius: 4px;
	display: flex;
	align-items: center;
	padding-left: 10px;
	position: relative;
	cursor: pointer;
	border: $border;
	.checkbox {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		border: 2px solid #fff;
		margin-right: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		.dot {
			width: 6px;
			height: 6px;
			background-color: #38a576;
			display: none;
			border-radius: 4px;
			transition: all 0.5s ease-in-out;
		}
	}

	&.active {
		border-color: #38a576;
		.checkbox {
			border-color: #38a576;

			.dot {
				display: block;
			}
		}
	}
	&:active {
		background-color: $buttonActive;
	}
}
</style>
