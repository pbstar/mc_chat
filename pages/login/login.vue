<template>
	<view class="loginbox">
		<!-- <text></text> -->
		<text class="zhdl">账号登陆</text>
		<view class="login">
			<view class="zh">
				<text>帐号：</text>
				<input type="text" v-model="id" placeholder="请输入ID帐号"/>
			</view>
			<view class="mm">
				<text>密码：</text>
				<input type="text" v-model="pass" placeholder="请输入密码"/>
			</view>
			<navigator url="/pages/register/register">还没有帐号，去注册</navigator>
			<button type="primary" @click="tologin()">登录</button>
			<cl-toast ref="toast"></cl-toast>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: '',
				pass:''
			}
		},
		methods: {
			tologin(){
				if(this.id==''){
					this.$refs["toast"].open({
						type:"warning ",
						position:"top",
					    message: "帐号不能为空",
					});
					return
				}
				if(this.pass==''){
					this.$refs["toast"].open({
						type:"warning ",
						position:"top",
					    message: "密码不能为空",
					});
					return
				}
				uni.request({
				    url: 'http://api.mcweb.top/mcchat/login.php',
					method :'GET',
				    data: {
				        id: this.id,
						pass:this.pass
				    },
				    success: (res) => {
						if(res.data.state==101){
							uni.setStorage({
							    key: 'mc_chat_id',
							    data: this.id,
							    success: function () {
							        uni.switchTab({
							            url: '/pages/message/message'
							        });
							    }
							});
							
						}else if(res.data.state==201){
							this.$refs["toast"].open({
								type:"warning ",
								position:"top",
							    message: "该账号未注册",
							});
						}else if(res.data.state==202){
							this.$refs["toast"].open({
								type:"warning ",
								position:"top",
							    message: "账号密码错误",
							});
						}
				    }
				});
			}
		}
	}
</script>

<style>
	.loginbox {
		overflow: hidden;
	}

	.zhdl {
		margin-left: 20px;
		font-size: 22px;
		margin-top: 150px;
		display: block;

	}

	.login {
		padding: 20px;
	}

	.login input {
		border-bottom: 1px solid #333333;
		line-height: 35px;
		height: 35px;
		padding-left: 50px;
		margin-top: 30px;
	}

	.login .zh,
	.login .mm {
		position: relative;
	}

	.login text {
		position: absolute;
		top: 5px;
		left: 5px;
	}

	.login navigator {
		margin-top: 5px;
		font-size: 14px;
		color: #0059b9;
		text-align: right;
		margin-bottom: 20px;
	}
</style>
