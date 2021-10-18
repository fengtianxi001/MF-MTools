<template>
	<div class="tabbar">
		<div class="tabbar-logo">MTOOLS</div>
		<div class="opeate-shell">
			<i class="iconfont icon-setting"></i>
			<i class="iconfont icon-minus-bold" @click="min"></i>
			<i class="iconfont icon-close-bold" @click="close"></i>
		</div>
	</div>
</template>
<script>
// import { windowClose, windowMini } from '../../plugins'
const { remote } = require('electron')
export default {
	name: 'm-tabbar',
	methods: {
		min() {
			// windowMini(1)
			const currentWindow = remote.getCurrentWindow();
			// console.log(currentWindow);
			currentWindow.minimize();
		},
		close() {
			// console.log("app",remote.app);
			remote.app.quit()
			// console.log(a);
			// const currentWindow = remote.getCurrentWindow();
			// console.log(currentWindow);
			// currentWindow.close();
			// currentWindow.off();

			// windowClose(1)
		},
	},
}
</script>
<style lang="scss" scoped>
.tabbar {
	height: $barHeight;
	border-bottom: 1px solid #6b6b6b33;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: $menuBgc;
	box-sizing: border-box;
	padding: 0 20px;
	-webkit-app-region: drag;
	.tabbar-logo {
		width: 100px;
		text-align: center;
		font-weight: bold;
		font-size: 16px;
		color: #999;
	}
	.opeate-shell {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.iconfont {
		width: 24px;
		height: 24px;
		margin-left: 10px;
		text-align: center;
		line-height: 24px;
		background-color: $tabbarButtonBgc;
		color: $tabbarButtonColor;
		border-radius: 6px;
		cursor: pointer;
		/* position: relative; */
		/* top: 0px; */
		-webkit-app-region: no-drag;
		&:active {
			background-color: $buttonActive;
		}
	}
}
</style>
