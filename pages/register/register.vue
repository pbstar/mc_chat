<template>
	<view class="loginbox">
		<!-- <text></text> -->
		<text class="zhdl">账号注册</text>
		<view class="login">
			<view class="namebox">
				<view>
					<view class="list">
						<text>昵称：</text>
						<input class="input1" type="text" v-model="name" />
					</view>
					<view class="list">
						<text>性别：</text>
						<view class="input1">
							<cl-radio v-model="sex" label="1">男</cl-radio>
							<cl-radio v-model="sex" label="2">女</cl-radio>
						</view>
					</view>
				</view>
				<view class="list">
					<view class="txsc" @click="uploadImg" :style="{backgroundImage: 'url(' + imgurl + ')'}">
						<image v-if="ischange==true" src="../../static/sctx.png" mode=""></image>
						<text v-if="ischange==true" class="tx">上传头像</text>
					</view>
				</view>
			</view>
			<view class="list">
				<text>出生日期：</text>
				<cl-select class="input2" v-model="date" mode="date" start="1921-01-01" end="2021-01-01"></cl-select>
			</view>
			<view class="list">
				<text>地区：</text>
				<cl-select-region class="input1" v-model="area" api="../../static/city.json"></cl-select-region>
			</view>
			<view class="list">
				<text>手机号码：</text>
				<input class="input2" type="text" v-model="tel" />
			</view>
			<view class="list">
				<text>密码：</text>
				<input class="input1" type="password" v-model="pass1" />
			</view>
			<view class="list">
				<text>确认密码：</text>
				<input class="input2" type="password" v-model="pass2" />
			</view>
			<navigator url="/pages/login/login">已有帐号，去登录</navigator>
			<button type="primary" @click="toreg()">注册</button>
			<cl-toast ref="toast"></cl-toast>
		</view>
	</view>
</template>

<script>
	import cityList from '../../static/city.json'
	export default {
		data() {
			return {
				name: '',
				area: [],
				date: '',
				sex: '1',
				tel: '',
				pass1: '',
				pass2: '',
				ischange: true,
				imgurl: 'https://z3.ax1x.com/2021/06/10/2gucEq.png'
			}
		},
		methods: {
			uploadImg() {
				let that = this
				uni.chooseImage({
					success(res) {
						that.imgurl = res.tempFilePaths[0]
						that.ischange = false
					}
				})
			},
			toarea(area) {
				for (let i = 0; i < cityList.length; i++) {
					if (cityList[i].value == area[0]) {
						for (let j = 0; j < cityList[i].children.length; j++) {
							if (cityList[i].children[j].value == area[1]) {
								for (let k = 0; k < cityList[i].children[j].children.length; k++) {
									if (cityList[i].children[j].children[k].value == area[2]) {
										let str = cityList[i].label + '-' + cityList[i].children[j].label + '-' + cityList[
											i].children[j].children[k].label
										return str
									}
								}
							}
						}
					}
				}

			},
			toreg() {
				if (this.name == '') {
					this.$refs["toast"].open({
						type: "warning ",
						position: "top",
						message: "昵称不能为空",
					});
					return
				}
				if (this.imgurl == 'https://z3.ax1x.com/2021/06/10/2gucEq.png') {
					this.$refs["toast"].open({
						type: "warning ",
						position: "top",
						message: "请上传头像",
					});
					return
				}
				if (this.date == '') {
					this.$refs["toast"].open({
						type: "warning ",
						position: "top",
						message: "请选择出生日期",
					});
					return
				}
				if (this.area == '') {
					this.$refs["toast"].open({
						type: "warning ",
						position: "top",
						message: "请选择地区",
					});
					return
				}
				if (this.tel == '') {
					this.$refs["toast"].open({
						type: "warning ",
						position: "top",
						message: "手机号不能为空",
					});
					return
				}
				if (this.pass1 == '' || this.pass2 == '') {
					this.$refs["toast"].open({
						type: "warning ",
						position: "top",
						message: "密码不能为空",
					});
					return
				} else {
					if (this.pass1 != this.pass2) {
						this.$refs["toast"].open({
							type: "warning ",
							position: "top",
							message: "两次输入密码不同",
						});
						return
					}
				}
				uni.request({
					url: 'http://api.mcweb.top/mcchat/register.php',
					method: 'POST',
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					data: {
						name: this.name,
						sex: this.sex,
						date: this.date,
						area: this.toarea(this.area),
						tel: this.tel,
						pass: this.pass1,
						imgurl: this.imgurl
					},
					success: (res) => {
						if (res.data.state == 101) {
							console.log(res.data)
							uni.redirectTo({
								url: '/pages/regSuccess/regSuccess?id='+res.data.body.id
							});
						} else if (res.data.state == 201) {
							this.$refs["toast"].open({
								type: "warning ",
								position: "top",
								message: "该手机号已被注册",
							});
						} else {
							this.$refs["toast"].open({
								type: "warning ",
								position: "top",
								message: "注册失败",
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
		margin-top: 50px;
		display: block;

	}

	.login {
		padding: 20px;
	}

	.login .input1 {
		border-bottom: 1px solid #333333;
		line-height: 35px;
		height: 35px;
		padding-left: 50px;
		margin-top: 30px;
		box-sizing: border-box;
		padding-right: 0;
	}

	.login .input2 {
		border-bottom: 1px solid #333333;
		line-height: 35px;
		height: 35px;
		padding-left: 82px !important;
		margin-top: 30px;
		padding-right: 0 !important;
	}

	.login .list {
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

	.namebox {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}

	.login .tx {
		position: static;
		color: #6b6b6b;
	}

	.login .txsc {
		text-align: center;
		background-size: 100% 100%;
		border-radius: 10px;
		width: 100px;
		height: 100px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 15px 0 0 15px;
	}

	.login .txsc image {
		width: 30px;
		height: 30px;
	}
</style>
