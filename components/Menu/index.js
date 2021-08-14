const Menu = {
	data() {
		return {
			active: '',
			category: [
				{
					eventTarget: 'project',
					textDesc: '项目文件夹',
				},
				{
					eventTarget: 'files',
					textDesc: '普通文件',
				},
			],
		}
	},
	methods: {
		handle(pathName) {
			this.$router.push({ name: pathName })
		},
	},
	watch: {
		$route: {
			deep: true,
			immediate: true,
			handler($route) {
				this.active = $route.name
			},
		},
	},
	template: /*html*/ `
        <div class="menu">
            <div class="logo">
                <i class="iconfont icon-logo-slack"></i>
                <span>Mtools</span>
            </div>
            <ul class="menu-list">
                <li class="add active">
                    <i class="iconfont icon-tianjia1"></i>
                    <span>添加项目</span>
                </li>

                <template v-for="{eventTarget,textDesc} in category">
                    <li 
                        :key="eventTarget" 
                        class="menu-item"
                        :class="{active:active===eventTarget}" 
                        @click="handle(eventTarget)"
                    >
                        <i class="iconfont icon-fenlei1"></i>
                        <span>{{textDesc}}</span>
                    </li>
                </template>
            </ul>
        </div>
    `,
}
module.exports = Menu
