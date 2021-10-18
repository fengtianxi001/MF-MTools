<template>
	<div class="empty">
		<!-- <div class="empty-tips">
            <span>你的数据暂不好使</span>
            <div>your's data zanbuhaoshi</div>
        </div> -->
		<img src="../../assets/gif/2.gif" alt="gif" />
	</div>
</template>
<script>
export default {
	name: 'm-empty',
}
</script>
<style lang="scss" scoped>
.empty {
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	.empty-tips {
		position: absolute;
		top: 180px;
		left: 160px;
		font-size: 18px;
		font-weight: bold;
		color: #505a5f;
		div {
			font-size: 12px;
		}
	}
	img {
		width: 450px;
		height: 450px;
	}
}
</style>
