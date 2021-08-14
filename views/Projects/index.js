const mySearch = require("../../components/Search")
const myTable = require("../../components/Table")

const Project = {
	components: { mySearch, myTable },
	template: /*html*/ `
        <div class="container">
            <header>
                <my-search></my-search>
                <div class="develop-info">
                    <span></span>
                    <span class="set">
                        <i class="iconfont icon-shezhi2"></i>
                    </span>
                    
                </div>
            </header>
            <my-table></my-table>
        <div>
    `,
}
module.exports = Project

/*<span class="mode mode-dark">
                        <i class="iconfont icon-yejianduoyun"></i>
                    </span>
                    <span class="mode mode-light">
                        <i class="iconfont icon-richu"></i>
                    </span> */