<template>
	<div class="search">
		<input type="text" placeholder="搜索项目" v-model="keyword" @input="search"/>
	</div>
</template>
<script>
import { mapActions } from "vuex";
export default {
	name: 'm-search',
	data(){
		return {
			keyword: ""
		}
	},
	methods: {
		...mapActions(["setKeyword"]),
		search(){
			this.setKeyword(this.keyword)
		}
	}
}
</script>
<style lang="scss" scoped>
.search {
	height: 100%;
	input {
		width: 260px;
		height: 100%;
		border: none;
		outline: none;
		background-color: #fff;
		border: 2px solid $maincolor;
		border-radius: 4px;
		padding-left: 10px;
		color: #000;
		transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
	}
}
</style>
