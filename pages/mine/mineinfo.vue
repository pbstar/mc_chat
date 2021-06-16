<template>
	<view>
		<TopBar path="/pages/mine/mine" text="个人详情"></TopBar>
		<view class="">
			<view class="topbox">
				<view class="tlbox">
					<image :src="userinfo.imgurl" mode=""></image>
				</view>
				<view class="trbox">
					<text>{{userinfo.name}}</text>
					<view class="idbox">
						<text>ID:{{id}}</text>
					</view>
				</view>
			</view>
			<view class="midbox">
				<cl-list-item label="性别">
					<cl-text :size="30" :value="getsex(userinfo.sex)"></cl-text>
				</cl-list-item>
				<cl-list-item label="年龄">
					<cl-text v-if="userinfo.date" :size="30" :value="getage(userinfo.date)"></cl-text>
				</cl-list-item>
				<cl-list-item label="生日">
					<cl-text v-if="userinfo.date" :size="30" :value="getbirth(userinfo.date)"></cl-text>
				</cl-list-item>
				<cl-list-item label="地区">
					<cl-text v-if="userinfo.date" :size="30" :value="getarea(userinfo.area)"></cl-text>
				</cl-list-item>
			</view>
			<view class="botbox">
				<view class="">
					<cl-list-item label="二维码">
						<text slot="append" class="cl-icon-arrow-right"></text>
					</cl-list-item>
				</view>
			</view>
		</view>
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
				id:'',
				userinfo:{}
			}
		},
		onLoad: function(option) {
			this.id = option.id
			this.getuser(option.id)
		},
		methods: {
			getuser(id){
				uni.request({
					url: 'http://api.mcweb.top/mcchat/friend/search.php',
					method: 'GET',
					data: {
						id: id
					},
					success: (res) => {
						if (res.data.state == 101) {
							this.userinfo = res.data.body
						}
					}
				});
			},
			getsex(sex){
				if(sex=1){
					return '男'
				}else{
					return '女'
				}
			},
			getage(date){
				let myDate = new Date();
				let Year = myDate.getFullYear();
				return Year-date.substring(0,4)
			},
			getbirth(date){
				return date.substring(5).replace("-","月")+'日'
			},
			getarea(area){
				return area.replace(/-/g,"")
			}
		}
	}
</script>

<style>
.topbox {
		display: flex;
		padding: 40px 10px 10px 10px;
		background-color: #fff;
	}

	.tlbox image {
		width: 60px;
		height: 60px;
		border-radius: 10px;
	}

	.trbox {
		display: flex;
		justify-content: space-around;
		flex-direction: column;
		width: 100%;
		margin-left: 10px;
		font-size: 18px;
		font-weight: 800;
	}

	.idbox {
		display: flex;
		justify-content: space-between;
		font-size: 16px;
		font-weight: 400;
	}

	.idbox .icon {
		margin-left: 10px;
	}
</style>