<template>
	<view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		onLoad() {
			uni.getStorage({
				key: 'mc_chat_id',
				success: function(res) {
					console.log(res.data);
				}
			});
		},
		methods: {
		}
	}
</script>

<style>

</style>
