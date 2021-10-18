<template>
	<m-empty v-if="isEmpty"></m-empty>
	<div v-else class="projects-container" :style="style">
		<template v-for="(col, index) in data">
			<draggable
				:key="index"
				:data-index="index"
				v-model="data[index]"
				ghost-class="ghost"
				group="projects"
				onMove="onMove"
				end="end"
				:style="draggableStyle"
			>
				<template v-for="project in data[index]">
					<file-card :file="project" :key="project.id" />
				</template>
			</draggable>
		</template>
	</div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
import { arrayChunk, arrayConcat } from '../../../utils/common/arrayOperate'
export default {
	name: 'project-content',
	props: {
		filterParams: Object,
	},
	data() {
		return {
			data: [],
		}
	},
	components: {
		fileCard: () => import('../components/file-card'),
	},
	computed: {
		...mapGetters(['files', 'fileColumn']),
		draggableStyle() {
			const { fileColumn } = this
			if (fileColumn === 2) {
				return { width: '300px' }
			}
			return {}
		},
		isEmpty() {
			return this.data.every(col => col.length === 0)
		},
		isWhole() {
			//是否显示全部数据
			const { keyword, category } = this.filterParams
			return keyword == '' && category == 0
		},
		style() {
			const { fileColumn } = this
			const col = fileColumn || 3
			return `grid-template-columns: repeat(${col}, 1fr);`
		},
		needUpdate() {
			const { files, fileColumn, filterParams } = this
			//随便return 一个结果
			return [
				JSON.stringify(files),
				JSON.stringify(fileColumn),
				JSON.stringify(filterParams),
			]
		},
	},
	methods: {
		...mapMutations(['setFiles']),
		update() {
			const { fileColumn, files, fileFilter, filterParams } = this
			//条件筛选
			const _projects = fileFilter(files, filterParams)
			//把数组拆成1或2列
			this.data = arrayChunk(_projects, fileColumn)
		},
		fileFilter(files, params) {
			const { keyword, category } = params
			let _files = files
			if (category !== 0) {
				_files = _files.filter(file => file.category === category)
			}
			return _files.filter(file => file.name.indexOf(keyword) >= 0)
		},
		onMove() {
			//不是全部展示,不允许拖拽
			return this.isWhole ? true : false
		},
	},
	mounted() {
		this.update()
	},
	watch: {
		needUpdate: {
			deep: true,
			handler() {
				this.update()
			},
		},
	},
	beforeDestroy() {
		// console.log(this.isWhole)
		if (this.isWhole) {
			// console.log(1122)
			const result = arrayConcat(this.data)
			this.setFiles(result)
		}
	},
}
</script>
<style lang="scss">
.ghost {
	opacity: 0.2;
}
.projects-container {
	width: 100%;
	max-height: 100%;
	display: grid;
	grid-column-gap: 20px;
	box-sizing: border-box;
	padding: 20px;
	overflow-y: scroll;
	&::-webkit-scrollbar {
		width: 2px;
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 2px;
		background: #6b6b6b33;
	}
}
</style>
