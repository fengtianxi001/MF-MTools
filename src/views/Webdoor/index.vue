<template>
	<div id="webdoor">
		<div class="webdoor-container" slot="content">
			<website-search class="search" />
			<draggable
				class="website-container"
				v-model="websites"
				ghost-class="ghost"
			>
				<website-card
					class="website"
					v-for="website in websites"
					:key="website.site"
					:info="website"
				/>
			</draggable>

			<!-- <div class="add">
				<i class="el-icon-plus"></i>
			</div> -->
		</div>
	</div>
</template>
<script>
export default {
	computed: {
		websites: {
			get() {
				console.log(this.$store.state)
				return this.$store.state.Webdoor.website
			},
			set(value) {
				console.log(value)
				this.$store.commit('setWebsite', value)
			},
		},
	},
	components: {
		websiteSearch: () => import('./components/website-search.vue'),
		websiteCard: () => import('./components/website-card.vue'),
	},
}
</script>
<style lang="scss">
.ghost {
	opacity: 0.2;
}
</style>
<style lang="scss" scoped>
#webdoor {
	width: 100%;
	height: 100%;
	position: relative;
	box-sizing: border-box;
	.webdoor-container {
		flex: 1 1 auto;
		/* background-color: #222d35; */
		box-sizing: border-box;
		padding: 20px;
		display: flex;
		flex-wrap: wrap;
		user-select: none;

		.add {
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 22px;
			cursor: pointer;
			color: #5e6264;
			font-weight: bold;
		}
	}
	.search {
		height: 135px;
	}
	.website-container {
		$grap: 18px;
		display: flex;
		flex-wrap: wrap;
		box-sizing: border-box;
		padding-left: 0;
		height: 446px;
		overflow-y: scroll;
		align-content: flex-start;
		.website {
			margin-right: $grap;
			&:nth-child(12n) {
				margin-right: 0;
			}
		}
	}
}
</style>
