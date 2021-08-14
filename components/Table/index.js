const eventbus = require('../../scripts/utils/EventBus')
const {
	getProject,
	searchProjectByName,
} = require('../../scripts/utils/Storage')
const TableRow = require("./TableRow")
const Table = {
	data() {
		return {
			filesList: getProject(),
			headerOptions: [
				{
					textDesc: '项目名称',
					iconName: 'icon-paixu2',
				},
				{
					textDesc: '语言',
					iconName: 'icon-paixu2',
				},
				{
					textDesc: '添加时间',
					iconName: 'icon-paixu2',
				},
				{
					textDesc: '操作',
					iconName: null,
				},
			],
			emptyTips: '暂无托管项目,请拖拽文件夹到此处',
		}
	},
	template: /*html*/ `
        <div>
            <div class="table" v-if="filesList.length !== 0">
                <ul class="table-header">
                    <li v-for="{textDesc,iconName} in headerOptions" :key="textDesc">
                        <span>{{textDesc}}</span>
                        <i class="iconfont" :class="iconName"></i>
                    </li>
                </ul>
                <table-row :filesList="filesList"></table-row>
            </div>
            <div class="table-empty" v-else>
                <img src="../assets/images/empty.png">
                <h6><i class="el-icon-loading"></i>{{emptyTips}}</h6>
            </div>
        </div>
    `,
	mounted() {
		eventbus.$on('updateProject', () => {
			this.filesList = getProject()
			if (this.filesList.length === 0) {
				this.emptyTips = '暂无托管项目,请拖拽文件夹到此处'
			}
		})
        // eventbus.$on('remove', () => {
		// 	this.filesList = getProject()
		// 	if (this.filesList.length === 0) {
		// 		this.emptyTips = '暂无托管项目,请推拽文件夹到此处'
		// 	}
		// })
		eventbus.$on('search', keyword => {
			this.filesList = searchProjectByName(keyword)
			if (this.filesList.length === 0) {
				this.emptyTips = '暂未搜索结果'
			}
		})
	},
	components: {
		TableRow,
	},
}

module.exports = Table
