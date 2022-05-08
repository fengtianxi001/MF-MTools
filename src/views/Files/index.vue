<template>
	<div class="file">
		<draggable v-model="files" ghost-class="ghost" dragClass="drag" class="the-file-content">
			<template v-for="file in files">
				<the-file-card :key="file.id" :file="file"></the-file-card>
			</template>
		</draggable>
	</div>
</template>
<script>
import mixin from '@/mixins/dragFile.js'
import { addFiles } from './controller/index'
export default {
	name: 'Files',
	mixins: [mixin],
	computed: {
		files: {
			get() {
				return this.$store.getters.files
			},
			set(files) {
				this.$store.commit('setFiles', files)
			},
		},
	},
	components: {
		theFileCard: () => import('./components/The-file-card'),
	},
	methods: {
		dropListener(e) {
			e.preventDefault()
			const files = e.dataTransfer.files
			addFiles(files)
		},
	},
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/handle.scss';
.file {
	padding: 10px;
	transform: scale(1);
	height: $page-h;
	width: $page-w;
	.the-file-content {
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-columns: repeat(13, 1fr);
		grid-row-gap: 10px;
		grid-column-gap: 10px;
		grid-auto-rows: min-content;
	}
}
.ghost {
	opacity: 0.5;
}
</style>
