<template>
	<view class="content">
		<image class="logo" src="/static/qdy.jpg"></image>
		<text class="num">{{this.num}}</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				num: 3
			}
		},
		onLoad() {
			var interval = setInterval(() => {
				--this.num
			}, 1000)
			setTimeout(() => {
				clearInterval(interval)
				uni.getStorage({
					key: 'mc_chat_id',
					success: function(res) {
						if (res.data) {
							uni.switchTab({
								url: '/pages/message/message'
							});
						} else {
							uni.redirectTo({
								url: '/pages/login/login'
							});
						}
					}
				})
			}, 3000)
		},
		destroyed() {
			clearTimeout(this.timeClose)
		},
		methods: {

		}
	}
</script>

<style>
	page {
		height: 100%;
	}

	.content {
		height: 100%;
		position: relative;
	}

	.logo {
		width: 100%;
		height: 100%;

	}

	.num {
		position: absolute;
		top: 20px;
		right: 20px;
		background-color: #fff;
		padding: 2px 5px;
		border-radius: 3px;
	}
</style>
