<template>
	<view class="content" style='text-align:center'>
		<image style='margin-top:132upx;width:138upx;height:140upx;background:#888888'>icon</image>
		<view style='font-size:36upx;margin-top:55upx'>关注成功</view>
		<view style='font-size:28upx;color:#999999;margin-top:29upx'>您已关注XXXXX的微信公众号</view>
		<button @click="toReLaunch('/pages/address/msnc/qcodesuccess')" class='blue' style='background:rgba(248,248,248,1);border-radius:50upx;height:88upx;border:1upx solid rgba(42,151,255,1);width:500upx;margin-top:60upx'>
			3S后自动进入下一步
		</button>
	</view>
</template>

<script>
	
	export default {
		components:{
			
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			toUrl(url){
				uni.navigateTo({
					"url":url
				})
			}
		}
	}
</script>

<style>
	
</style>
