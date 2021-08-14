const myMenu = require('../Menu/index')
const Layout = {
	components: {
		myMenu,
	},
	template: /*html*/ `
        <div class="layout-container">
            <my-menu></my-menu>
            <div class="layout-container-view">
                <router-view></router-view>    
            </div>  
        </div>
    `,
}
module.exports = Layout
