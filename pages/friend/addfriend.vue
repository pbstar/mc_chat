<template>
	<view>
		<TopBar path="/pages/friend/friend" text="新的好友"></TopBar>
		<view class="searchbox">
			<view class="search">
				<svg t="1623654021930" class="icon" viewBox="0 0 1024 1024" version="1.1"
					xmlns="http://www.w3.org/2000/svg" p-id="13512" width="15" height="15">
					<path
						d="M222.6944 222.7968A323.1488 323.1488 0 0 0 133.6832 512c19.2512-87.3728 64.512-172.7488 135.0144-243.3024C339.2512 198.1184 424.6272 152.8832 512 133.632c-101.632-19.1488-210.688 10.5216-289.3056 89.1648z"
						fill="#707070" p-id="13513"></path>
					<path
						d="M989.44 822.1184l-121.7024-121.7024a118.016 118.016 0 0 0-92.8-34.1248c114.4576-165.5552 97.92-394.3936-49.4848-541.824-165.9392-165.9904-435.0464-165.9904-601.0368 0-165.9392 165.9904-165.9392 435.1232 0 601.1136 147.4048 147.4304 376.064 163.84 541.7216 49.3824-2.56 33.28 8.8576 67.5328 34.1248 92.8l121.7024 121.728c46.08 45.9776 121.3696 45.9776 167.3472 0 46.208-45.9776 46.208-121.2928 0.128-167.3728zM676.096 676.096c-138.6752 138.6752-363.392 138.6752-502.016 0-138.6752-138.6752-138.6752-363.4432 0-502.1184 138.624-138.6752 363.3408-138.6752 502.016 0 138.6496 138.5728 138.6496 363.4432 0 502.1184z"
						fill="#707070" p-id="13514"></path>
				</svg>
				<input type="text" v-model="seaid" placeholder="添加好友"/>
				<view class="seabtn" @click="tosea()">
					搜索
				</view>
			</view>
		</view>
		<cl-scroller ref="scroller" :refresher-enabled="false">
			<view class="item" v-for="(item, index) in list" :key="index">
				<cl-list-item :label="item.name" swipe="right">
					<image class="tximg" slot="icon" :src="item.imgurl" mode=""></image>
					<cl-button type="error" size="mini" @click="through(item.id)">通过</cl-button>
					<cl-button type="primary" size="mini" @click="del(item.id)">拒绝</cl-button>
				</cl-list-item>
			</view>
		</cl-scroller>
		<cl-toast ref="toast"></cl-toast>
	</view>
</template>

<script>
	import TopBar from "../../components/TopBar.vue";
	export default {
		components:{
			TopBar
		},
		data() {
			return {
				id: '',
				seaid:'',
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
					url: 'http://api.mcweb.top/mcchat/friend/getreqlist.php',
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
			},
			del(yid){
				uni.request({
					url: 'http://api.mcweb.top/mcchat/friend/del.php',
					method: 'GET',
					data: {
						mid: this.id,
						yid: yid
					},
					success: (res) => {
						if (res.data.state == 101) {
							this.$refs["toast"].open({
								type:"error  ",
								position:"top",
							    message: "拒绝成功",
							});
							this.getlist(this.id);
						}else{
							this.$refs["toast"].open({
								type:"warning ",
								position:"top",
							    message: "拒绝失败",
							});
						}
					}
				});
			},
			through(yid){
				uni.request({
					url: 'http://api.mcweb.top/mcchat/friend/through.php',
					method: 'GET',
					data: {
						mid: this.id,
						yid: yid
					},
					success: (res) => {
						if (res.data.state == 101) {
							this.$refs["toast"].open({
								type:"error  ",
								position:"top",
							    message: "已通过",
							});
							this.getlist(this.id);
						}else{
							this.$refs["toast"].open({
								type:"warning ",
								position:"top",
							    message: "通过失败",
							});
						}
					}
				});
			},
			tosea(){
				if(this.seaid==''){
					this.$refs["toast"].open({
						type:"warning ",
						position:"top",
					    message: "搜索内容为空",
					});
					return
				}
				uni.redirectTo({
					url: '/pages/friend/seafriend?seaid='+this.seaid
				});
				
			}
		}
	}
</script>

<style>
.searchbox {
		width: 100%;
		height: 50px;
		background-color: #fff;
		overflow: hidden;
		margin-bottom: 10px;
	}

	.search {
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

	.search .icon {
		margin-right: 5px;
	}
	.search input {
		width: 80%;
	}
	.tximg {
		width: 35px;
		height: 35px;
		border-radius: 5px;
	}
</style>
