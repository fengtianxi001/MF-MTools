<template>
	<div class="menu">
		<div class="menu-logo">
			<icon class="menu-logo-icon" icon="icon-logo"></icon>
			<span>Mtools</span>
		</div>
		<ul class="menu-list">
			<li class="menu-list-button menu-list-add">
				<icon
					class="menu-list-item-icon"
					icon="#icon-AddOutline"
				></icon>
				<span>添加项目</span>
			</li>
			<template v-for="{ event, desc, mid } in category">
				<li
					class="menu-list-button menu-list-item"
					:class="{ active: active === event }"
					:key="mid"
					@click="handle(event)"
				>
					<icon
						class="menu-list-item-icon"
						icon="#icon-OpenfolderOutline"
					></icon>
					<span>{{ desc }}</span>
				</li>
			</template>
		</ul>
	</div>
</template>
<script>
import { category } from './static'
export default {
	data() {
		return {
			active: '',
			category,
		}
	},
	methods: {
		handle(event) {
			this.$router.push({ name: event })
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
}
</script>
<style lang="scss" scoped>
.menu {
	width: 100%;
	height: 100%;
	background-color: $menubgc;
	user-select: none;
	.menu-logo {
		height: 60px;
		font-size: 20px;
		font-weight: bold;
		padding: 0 10px;
		display: flex;
		align-items: center;
		cursor: pointer;
		.menu-logo-icon {
			margin-right: 4px;
			font-size: 24px;
			font-weight: bold;
		}
		span {
			font-weight: bold;
			font-size: 22px;
			position: relative;
			top: -2px;
		}
	}
	.menu-list {
		padding: 0 10px;
		& > li {
			width: 100%;
			height: 34px;
			border-radius: 4px;
			font-size: 14px;
			line-height: 34px;
			padding: 0 10px;
			cursor: pointer;
			.menu-list-item-icon {
				font-size: 18px;
				margin-right: 6px;
			}
		}
		.menu-list-button {
			color: $main_font_color;
			&:active {
				background-color: $deepcolor !important;
			}
		}
		.menu-list-item {
			margin-bottom: 10px;
			background-color: $lightcolor;
			&.active {
				background-color: $maincolor;
			}
		}
		.menu-list-add {
			background-color: $maincolor;
			margin-bottom: 44px;
			margin-top: 6px;
			.menu-list-item-icon {
				font-size: 16px;
				margin-right: 8px;
			}
		}
	}
}
</style>
