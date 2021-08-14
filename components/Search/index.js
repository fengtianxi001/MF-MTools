const eventbus = require('../../scripts/utils/EventBus')
const Search = {
	data() {
		return {
			keyword: '',
		}
	},
	computed: {
		isempty() {
			return this.keyword.length === 0 ? true : false
		},
	},
	methods: {
		search() {
			const { keyword, isempty } = this
			eventbus.$emit('search', keyword)
			// if (isempty) {
			// 	return this.$message.error('请输入关键字')
			// } else {

			// }
		},
		clear() {
			this.keyword = ''
			this.search()
		},
	},
	template: /*html*/ `
        <div class="search-shell" :class="{empty:isempty}">
            <input type="text" placeholder="搜索项目" v-model="keyword" @keyup.enter="search"/>
            <i class="el-icon-search" v-if="isempty"></i>
			keyword: '',
            <i class="el-icon-circle-close clear" v-else @click="clear"></i>
            <span v-if="!isempty"><i class="el-icon-search" @click="search" ></i></span>
        </div>
    `,
}
module.exports = Search
