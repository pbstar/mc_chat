<template>
	<view class="tbbox">
		<view class="lbox" @click="toback()">
			<svg t="1623739443270" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
				p-id="2470" width="20" height="20">
				<path
					d="M766.862 1021.724c-10.24 0-20.594-3.64-28.444-10.922L228.693 538.396c-15.701-14.563-15.701-38.229 0-52.792L738.418 13.198c15.701-14.563 41.187-14.563 56.889 0 15.701 14.564 15.701 38.23 0 52.793L314.027 512l481.28 446.009c15.701 14.563 15.701 38.23 0 52.793-7.851 7.282-18.205 10.922-28.445 10.922z"
					fill="#ffffff" p-id="2471"></path>
			</svg>
		</view>
		<view class="">
			{{text}}
		</view>
		<view class="rbox">

		</view>
	</view>
</template>

<script>
	export default {
		name: "TopBar",
		data() {
			return {

			};
		},
		props: {
			path: '',
			text: ''
		},
		methods: {
			toback() {
				if (this.path == '/pages/message/message') {
					uni.switchTab({
						url: this.path
					});
				} else if(this.path == '/pages/friend/friend'){
					uni.switchTab({
						url: this.path
					});
				}else if(this.path == '/pages/found/found'){
					uni.switchTab({
						url: this.path
					});
				}else if(this.path == '/pages/mine/mine'){
					uni.switchTab({
						url: this.path
					});
				}
				else {
					uni.redirectTo({
						url: this.path
					});
				}
			},
		}
	}
</script>

<style>
	.tbbox {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 44px;
		background-color: #7bbfea;
		color: #fff;
	}

	.lbox,
	.rbox {
		width: 50px;
		padding: 0 10px;
	}
</style>
