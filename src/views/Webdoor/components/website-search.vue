<template>
	<div class="search">
		<div class="search-welcom">
			<h6 style="font-size:20px">It's simple</h6>
			<h1 style="font-size:14px;color:#F2F2F2;margin:6px 0 20px">
				Search, Find & Apply
			</h1>
		</div>
		<ul class="search-container">
			<li
				class="search-baidu-container"
				v-for="{ icon, key, name } in searchMethods"
				:key="key"
				:class="computedClass(key)"
			>
				<img class="icon" :src="changeSrc(icon)" alt="" />
				<input
					type="text"
					:placeholder="name | placeholderFilter"
					@focus="focus(key)"
					@blur="blur($event)"
					v-model="keyword[key]"
					@keydown.enter="search(key)"
					:ref="key"
				/>
				<m-icon
					class="icon"
					v-show="active === key && !isEmpty"
					icon="#icon-SearchOutline"
					@click.native="search(key)"
				></m-icon>
			</li>
		</ul>
	</div>
</template>
<script>
/*eslint-disable*/
// import Search from '@/utils/Search'
const { shell } = require('electron')
export default {
	name: 'm-search',
	data() {
		return {
			searchMethods: [
				{ icon: 'baidu', key: 'baidu', name: 'baidu' },
				{ icon: 'github', key: 'github', name: 'github' },
				{ icon: 'youdao', key: 'youdao', name: 'youdao' },
			],
			active: 'null',
			keyword: {
				baidu: '',
				github: '',
				youdao: '',
			},
		}
	},
	computed: {
		isEmpty() {
			return this.keyword.length === 0
		},
	},
	methods: {
		focus(key) {
			this.active = key
		},
		blur() {
			// this.keyword = ''
			this.active = 'null'
		},
		computedClass(key) {
			const { active } = this
			if (active === 'null') {
				return 'normal'
			} else if (active === key) {
				return 'full'
			} else {
				return 'hide'
			}
		},
		search(key) {
			const kw = this.keyword[key]
			const _enum = {
				baidu: `https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=${kw}&fenlei=256`,
				github: `https://github.com/search?q=${kw}`,
				youdao: `http://www.youdao.com/w/eng/${kw}/#keyfrom=dict2.index`,
			}
			shell.openExternal(_enum[key])
		},
		changeSrc(ico) {
			if (this.active !== 'null') {
				ico = ico + 'Active'
			}
			return require(`../../../assets/searchIcon/${ico}.png`)
		},
	},
	filters: {
		placeholderFilter(val) {
			return `在${val}中搜索`
		},
	},
}
</script>
<style lang="scss" scoped>
.search {
	width: 100%;
	color: #fff;
	
	.search-welcom {
		border-left: 4px solid #007543;
		padding-left: 10px;
	}
	.search-container {
		display: flex;
		background-color: #222d35;
		height: 40px;
		box-sizing: border-box;
		padding: 4px 15px;
		border-radius: 6px;
		color: #898989;
		font-size: 13px;
		border: $border;
		li {
			width: 33.333%;
			position: relative;
			overflow: hidden;
			transition: all 0.2s cubic-bezier(0.72, -0.05, 0.46, 0.54);
			display: flex;
			align-items: center;
			&.full {
				width: 100%;
				input {
					padding-left: 35px;
					color: #38a576;
					&::-webkit-input-placeholder {
						/* WebKit, Blink, Edge */
						color: #38a576 !important;
					}
				}
				.icon {
					color: #38a576;
				}
			}
			&.hide {
				width: 0%;
			}
			input {
				width: 100%;
				height: 100%;
				outline: none;
				padding: 0 20px 0 30px;
				border: none;
				background-color: #222d35;
				color: #fff;
				&::-webkit-input-placeholder {
					/* WebKit, Blink, Edge */
					color: #fff !important;
				}
			}
			.icon {
				position: absolute;
				font-size: 18px;
				font-weight: bolder;
				top: 5px;
				color: #fff;
				width: 20px;
				height: 20px;
			}
			.icon:first-child {
				left: 0;
				top: 3px;
				font-size: 22px;
			}
			.icon:last-child {
				right: 0;
				top: 6px;
				cursor: pointer;
			}
		}
	}
}
</style>
