<template>
	<ul class="menu">
		<li
			v-for="{ name, path, icon } in menus"
			:key="name"
			:class="{active:active===path}"
			@click="$router.push(path)"
		>
			<i :class="icon"></i>
			<span>{{ name }}</span>
		</li>
	</ul>
</template>
<script>
export default {
	name: 'm-menu',
	data() {
		return {
            active: "",
			menus: [
				{
					name: '项目管理',
					icon: 'icon el-icon-folder',
					path: '/projects',
				},
				{
					name: '文件管理',
					icon: 'icon el-icon-tickets',
					path: '/files',
				},
				{
					name: '程序门户',
					icon: 'icon el-icon-monitor',
                    path: '/software',
				},
				{
					name: '网门门户',
					icon: 'icon el-icon-discover',
                    path: '/webdoor',
				},
				{
					name: '系统设置',
					icon: 'icon el-icon-setting',
                    path: '/setting',
				},
			],
		}
	},
    watch: {
        $route:{
            deep: true,
            immediate: true,
            handler(route){
                this.active = route.path
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.menu {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10px 16px 0px;
	color: $menuDefaultColor;
	height: 100%;
	border-right: 1px solid #6b6b6b33;
	user-select: none;
	li {
		width: 100%;
		font-size: 13px;
		height: 30px;
		cursor: pointer;
		margin-top: 10px;
		display: flex;
		align-items: center;
		box-sizing: border-box;
		padding-left: 10px;
		border-radius: 6px;
		/* font-weight: bolder; */
		.icon {
			margin-right: 6px;
			font-size: 16px;
			font-weight: lighter;
		}
		/* font-weight: bold; */
		&.active {
			background-color: $menuActiveBgc;
			color: $menuActiveColor;
			position: relative;
			&::after{
				width: 8px;
				height: 8px;
				content: "";
				border-radius: 50%;
				background-color: #38a576;
				position: absolute;
				right: 10px;
				top: 6px;
			}
			/* border: 1px solid#38A576;  */
		}
	}
}
</style>
