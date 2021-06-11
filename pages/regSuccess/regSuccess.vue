<template>
	<view class="box">
		<text>注册成功</text>
		<view class="idbox">
			<text>ID:</text>
			<text>{{id}}</text>
		</view>
		<text>注：ID是唯一登录凭证，请牢记！</text>
		<view class="tlbox">
			<cl-button type="error"@click="tologin">去登陆</cl-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:''
			}
		},
		onLoad: function(option) {
			this.id=option.id
		},
		methods: {
			tologin(){
				uni.redirectTo({
					url: '/pages/login/login'
				});
			}
		}
	}
</script>

<style>
	.box{
		padding: 20px;
	}
.idbox{
	width: 100%;
	height: 200px;
	line-height: 200px;
	text-align: center;
	font-size: 38px;
}
.tlbox{
	float: right;
	margin-top: 50px;
}
</style>
