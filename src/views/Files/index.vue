<template>
	<div class="files">
		<mTable></mTable>
	</div>
</template>
<script>
/*eslint-disable*/
const path = require('path')
import { mapActions } from 'vuex'
export default {
	components: {
		mTable: () => import('./components/table.vue'),
	},
	methods: {
		...mapActions(['insertFiles']),
		dropFiles(e) {
			if (!e.dataTransfer) return false
			if (e.dataTransfer.files.length === 0) return false
			const rawFiles = Array.from(e.dataTransfer.files)
			let files = rawFiles.reduce((prev, item) => {
				if (path.extname(item['path']) !== '') {
					const { path: _path, name, size } = item
					const type = path.extname(_path)
					prev.push({ path: _path, name, size, type })
				}
				return prev
			}, [])
			this.insertFiles(files)
		},
	},
	mounted() {
		const files = document.querySelector('.files')
		files.addEventListener('drop', this.dropFiles)
		files.addEventListener('dragover', e => {
			e.preventDefault()
			e.stopPropagation()
		})
	},
}
</script>
<style lang="scss" scoped>
.files {
	width: 100%;
	height: 100%;
	background-color: #fff;
	border-radius: 4px;
	position: relative;
	padding-top: 20px;
	padding-left: 20px;
	padding-right: 20px;
	overflow-y: hidden;
}
</style>
