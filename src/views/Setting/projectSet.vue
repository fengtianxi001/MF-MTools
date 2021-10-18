<template>
	<div class="set-card">
		<div class="set-card-header">
			<div class="left">
				<i class="iconfont icon-folder-close"></i>
				<span>项目管理设置</span>
			</div>
			<i class="iconfont icon-folder-close"></i>
		</div>
		<div class="set-card-body">
			<div class="form-item">
				<span class="form-item-label">项目保存地址:</span>
				<div>
					<el-input size="mini"></el-input>
				</div>
			</div>
            <div class="form-item">
				<span class="form-item-label">项目排列方式:</span>
				<div>
					<el-input size="mini"></el-input>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.set-card {
	width: 100%;
	background-color: #222d35;
    overflow: hidden;
	box-sizing: border-box;
	border-radius: 6px;
	.set-card-header {
		font-size: 14px;
		display: flex;
		justify-content: space-between;
        background-color: #222d35;
        padding: 10px 20px;
		.left {
			.iconfont {
				margin-right: 10px;
			}
		}
		& > .iconfont {
			cursor: pointer;
		}
	}
	.set-card-body {
		padding: 10px 20px;
		box-sizing: border-box;
		border-top: 1px solid #6e6e6e;
	}
}

.form-item {
	position: relative;
	display: flex;
	align-items: center;
	&:not(:last-child) {
		margin-bottom: 20px;
	}
	.form-item-label {
		width: 100px;
		font-size: 12px;
		position: relative;
		color: #fff;
	}
	div {
		flex: 1;
	}
}
</style>
