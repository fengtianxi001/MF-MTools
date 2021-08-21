<template>
	<div class="table">
		<ul class="table-header">
			<li
				v-for="({ name }, index) in tableHeader"
				:key="name"
				:style="calcStyle(index)"
			>
				{{ name }}
			</li>
		</ul>
		<table-body :header="tableHeader" :data="data"></table-body>
	</div>
</template>
<script>
import { Number2px } from '@/utils'
export default {
	props: {
		data: Array,
	},
	data() {
		return {
			tableHeader: [
				{ name: '项目名称', width: '20%', align: 'left' },
				{ name: '项目路径', width: '40%', align: 'left' },
				{ name: '项目类型', width: '10%', align: 'left' },
				{ name: '操作', width: '30%', align: 'center' },
			],
		}
	},
	methods: {
		calcStyle(index) {
			const { width, align } = this.tableHeader[index]
			return {
				width: Number2px(width),
				textAlign: align,
			}
		},
	},
	components: {
		tableBody: () => import('./table-body.vue'),
	},
}
</script>
<style lang="scss">
.table {
	width: 100%;
	height: calc(100% - 54px);
	/* background-color: red; */
	padding-top: 20px;
	.table-header {
		height: 36px;
		background-color: $maincolor;
		border-radius: 4px;
		color: #fff;
		font-size: 12px;
		margin-bottom: 10px;
		display: flex;
		align-items: center;
		li {
			padding: 0 10px;
			border-right: 1px solid rgba(255, 255, 255, 0.2);
		}
	}
	.table-body {
		height: calc(100% - 46px);
		overflow-y: scroll;

		&::-webkit-scrollbar {
			width: 2px;
			height: 2px;
		}
		&::-webkit-scrollbar-thumb {
			border-radius: 10px;
			background-color: $lightcolor;
		}
		.table-row {
			font-size: 12px;
			display: flex;
			align-items: center;
			height: 36px;
			border-bottom: 1px solid $menubgc;
			user-select: none;
			li {
				padding: 0 10px;
			}
			.table-icon {
				margin-right: 6px;
				fill: #8baff2;
				cursor: pointer;
				&:active {
					fill: #2b6ee7;
				}
			}
			.table-row-operate {
				.table-icon {
					margin-right: 10px;
					fill: #8baff2;
					&:active {
						fill: #2b6ee7;
					}
				}
				span {
					cursor: pointer;
					.table-more {
						margin-right: 0px;
						fill: #8baff2;
						&:active {
							fill: #2b6ee7;
						}
					}
				}
			}
			.table-row-type {
				width: 100%;
				height: 100%;
				display: flex;
				align-items: center;
				i {
					display: inline-block;
					width: 10px;
					height: 10px;
					border-radius: 10px;
				}
				span {
					position: relative;
					top: -1px;
					margin-left: 4px;
				}
				.node {
					background-color: #83bb02;
				}
				.vue {
					background-color: #40b883;
				}
				.react {
					background-color: #05d7fb;
				}
				.js {
					background-color: #ffca28;
				}
			}
		}
	}
}
</style>

<style lang="scss">
.el-dropdown-menu--small {
	padding: 6px !important;
	.el-dropdown-menu__item:focus,
	.el-dropdown-menu__item:not(.is-disabled):hover {
		background-color: #8baff2 !important;
		color: #fff;
		border-radius: 4px;
	}
}
</style>
