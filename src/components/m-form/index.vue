<template>
	<el-dialog
		:title="title"
		:visible.sync="visible"
		custom-class="dialog"
		width="420px"
		style="overflow: hidden;"
		@close="hanleCancel"
	>
		<div class="form-container">
			<slot></slot>
		</div>
		<div class="form-button">
			<div class="cancel" @click="hanleCancel">取消</div>
			<div class="submit" @click="hanleSubmit">提交</div>
		</div>
	</el-dialog>
</template>
<script>
export default {
	name: 'm-form',
	props: {
		title: {
			type: String,
			default: '标题栏',
		},
		submit: Function,
	},
	data() {
		return {
			visible: false,
		}
	},
	methods: {
		hanleSubmit() {
			this.$emit('submit')
			if (this.submit) {
				if (this.submit()) this.visible = false
				return
			}
			this.visible = false

			//阻止关闭 submit要返回 false
		},
		hanleCancel() {
			this.$emit('cancel')
			this.visible = false
		},
		open() {
			this.visible = true
		},
	},
}
</script>
<style lang="scss" scoped>
.form-container {
	max-height: 450px;
	overflow-y: scroll;
	box-sizing: border-box;
	padding: 20px 20px 0;
}
.form-button {
	display: flex;
	justify-content: flex-end;
	color: #fff;
	margin-top: 20px;
	font-size: 12px;
	margin-bottom: 20px;
	padding: 0 20px;
	div {
		width: 56px;
		height: 26px;
		text-align: center;
		line-height: 26px;
		margin-left: 10px;
		background-color: #222d34;
		border-radius: 2px;
		cursor: pointer;
		user-select: none;
		&:active {
			background-color: #000 !important;
		}
		&.submit {
			background: #42a378;
		}
	}
}
</style>
