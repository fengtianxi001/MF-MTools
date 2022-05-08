<template>
	<div class="the-project-card-calendar">
		<template v-for="index in 100">
			<el-tooltip
				class="item"
				effect="dark"
				:content="createContent(data[index])"
				placement="top-start"
				:key="index"
				v-if="data[index]"
			>
				<li class="active"></li>
			</el-tooltip>
			<li v-else :key="index" class="empty"></li>
		</template>
	</div>
</template>
<script>
import moment from 'moment'
moment.locale('zh-cn')
import { gitLog } from '../../controller'
export default {
	name: 'index',
	props: {
		projectPath: String,
	},
	data() {
		return {
			data: [],
		}
	},
	methods: {
		createContent([timeStamp, author]) {
			const date = moment(timeStamp).format('YYYY/MM/DD HH:mm')
			return `${date} ${author} 提交`
		},
	},
	watch: {
		projectPath: {
			immediate: true,
			handler(projectPath) {
				if (projectPath.length <= 0) return false
				gitLog(projectPath).then(res => {
					this.data = res
				})
			},
		},
	},
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/handle.scss';
.the-project-card-calendar {
	width: 100%;
	height: 105px;
	padding: 10px;
	border-width: 1px;
	border-style: solid;
	@include border_color('border_color3');
	display: grid;
	grid-template-columns: repeat(20, 1fr);
	grid-template-rows: repeat(30, 13.39px);
	grid-column-gap: 4px;
	grid-row-gap: 4px;
	li {
		/* background-color: red; */
		border-width: 1px;
		border-style: solid;
		@include border_color('border_color3');
		height: 13.39px;
		@include background_color('background_color7');
		&.active {
			background-color: $active_green !important;
		}
	}
}
</style>
