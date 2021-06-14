<template>
	<view>
		<view class="topbox">
			<view class="searchbox">
				<view class="search">
					<svg t="1623654021930" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13512" width="15" height="15"><path d="M222.6944 222.7968A323.1488 323.1488 0 0 0 133.6832 512c19.2512-87.3728 64.512-172.7488 135.0144-243.3024C339.2512 198.1184 424.6272 152.8832 512 133.632c-101.632-19.1488-210.688 10.5216-289.3056 89.1648z" fill="#707070" p-id="13513"></path><path d="M989.44 822.1184l-121.7024-121.7024a118.016 118.016 0 0 0-92.8-34.1248c114.4576-165.5552 97.92-394.3936-49.4848-541.824-165.9392-165.9904-435.0464-165.9904-601.0368 0-165.9392 165.9904-165.9392 435.1232 0 601.1136 147.4048 147.4304 376.064 163.84 541.7216 49.3824-2.56 33.28 8.8576 67.5328 34.1248 92.8l121.7024 121.728c46.08 45.9776 121.3696 45.9776 167.3472 0 46.208-45.9776 46.208-121.2928 0.128-167.3728zM676.096 676.096c-138.6752 138.6752-363.392 138.6752-502.016 0-138.6752-138.6752-138.6752-363.4432 0-502.1184 138.624-138.6752 363.3408-138.6752 502.016 0 138.6496 138.5728 138.6496 363.4432 0 502.1184z" fill="#707070" p-id="13514"></path></svg>
					搜索
				</view>
			</view>
			<cl-list-item label="新的好友" @click="toblog">
				<svg t="1623637056969" slot="icon" class="icon" viewBox="0 0 1024 1024" version="1.1"
					xmlns="http://www.w3.org/2000/svg" p-id="9795" width="26" height="26">
					<path
						d="M825.6 773h-68.4v-68.4c0-20.8-16.8-37.6-37.6-37.6S682 683.9 682 704.6V773h-68.4c-20.8 0-37.6 16.8-37.6 37.6s16.8 37.6 37.6 37.6H682v68.4c0 20.8 16.8 37.6 37.6 37.6s37.6-16.8 37.6-37.6v-68.4h68.4c20.8 0 37.6-16.8 37.6-37.6S846.3 773 825.6 773z"
						fill="#d81e06" p-id="9796" data-spm-anchor-id="a313x.7781069.0.i17" class="selected"></path>
					<path
						d="M619.531 861.5H373.906c-19.5 0-35.25-15.844-35.25-35.25 0-60 48.75-108.75 108.75-108.75h11.625c12.375 1.5 24.938 2.531 37.688 2.531 12.75 0 25.312-1.031 37.781-2.531h11.531c6.375 0 12.375-1.875 17.532-4.875 141.093-30.75 247.125-156.469 247.125-306.656C810.688 232.906 669.875 92 496.717 92S182.845 232.906 182.845 405.969C182.844 523.625 248 626.28 344.094 680c-45.844 32.531-75.844 85.875-75.844 146.156 0 58.313 47.438 105.75 105.75 105.75h245.531c19.5 0 35.25-15.75 35.25-35.25 0-19.406-15.844-35.156-35.25-35.156zM253.25 405.969c0-134.25 109.219-243.469 243.469-243.469s243.469 109.219 243.469 243.469c0 123.094-91.875 224.812-210.563 241.031h-65.813C345.125 630.875 253.25 529.062 253.25 405.969z"
						p-id="9797" data-spm-anchor-id="a313x.7781069.0.i18" class="" fill="#1296db"></path>
					<path
						d="M363.5 276.4c-20.8 0-37.6 16.8-37.6 37.6v103.7c0 20.8 16.8 37.6 37.6 37.6s37.6-16.8 37.6-37.6V314c0-20.8-16.9-37.6-37.6-37.6z m264.4 178.8c20.8 0 37.6-16.8 37.6-37.6V314c0-20.8-16.8-37.6-37.6-37.6s-37.6 16.8-37.6 37.6v103.7c0 20.7 16.9 37.5 37.6 37.5z"
						p-id="9798"></path>
				</svg>
				<svg t="1623380786732" class="icon" viewBox="0 0 1024 1024" version="1.1"
					xmlns="http://www.w3.org/2000/svg" p-id="4118" width="20" height="20">
					<path
						d="M326.848 75.52a41.408 41.408 0 0 0-59.648 2.432 44.16 44.16 0 0 0 1.856 60.8l0.512 0.448 393.984 374.272-393.216 371.2a44.16 44.16 0 0 0-3.008 60.8l0.448 0.512a41.408 41.408 0 0 0 59.136 3.072l0.512-0.512 426.88-403.072a44.16 44.16 0 0 0 0.64-63.232l-0.512-0.512L326.848 75.52z"
						p-id="4119"></path>
				</svg>
			</cl-list-item>
		</view>
		<view class="midbox">
			<cl-scroller ref="scroller" :refresher-enabled="false">
				<view class="item" v-for="(item, index) in list" :key="index">
					<cl-list-item :label="item.name" swipe="right">
					<!-- 	<text slot="append" class="cl-icon-arrow-right"></text> -->
						<!-- <view slot="icon" class=""> -->
							<image class="tximg" slot="icon" :src="item.imgurl" mode=""></image>
						<!-- </view> -->
						<view class="append delfriend" slot="menu">
							删除
							<!-- <button class="error-btn delfriend">删除</button> -->
						</view>
					</cl-list-item>
				</view>
				<text class="sumfriend">共有{{list.length}}位好友</text>
			</cl-scroller>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:'',
				list: []
			}
		},
		onLoad() {
			uni.getStorage({
				key: 'mc_chat_id',
				success: (res) => {
					this.getlist(res.data);
					this.id = res.data
				}
			})
		},
		methods: {
			getlist(id) {
				uni.request({
					url: 'http://api.mcweb.top/mcchat/friend/getlist.php',
					method: 'GET',
					data: {
						id: id
					},
					success: (res) => {
						if (res.data.state == 101) {
							this.list = res.data.body
						}
					}
				});
			}
		}
	}
</script>

<style>
	.cl-list-item {
		margin-bottom: 10px;
	}
	.sumfriend{
		text-align: center;
		display: block;
		font-size: 13px;
		color: #77787b;
	}
	.midbox .tximg{
		width: 35px;
		height: 35px;
		border-radius: 5px;
	}
	.midbox .delfriend{
		font-size: 14px;
		width: 80px;
		height: 100%;
		text-align: center;
		/* display: inline-block; */
		line-height: 50px;
		color: #fff;
		background-color: #aa2116;
	}
	.searchbox{
		width: 100%;
		height: 50px;
		background-color: #fff;
		overflow: hidden;
	}
	.search{
		height: 30px;
		width: 90%;
		border-radius: 15px;
		background-color: #eee;
		margin: 10px auto;
		display: flex;
		color: #666;
		justify-content: center;
		align-items: center;
	}
	.search .icon{
		margin-right: 5px;
	}
</style>
