<template>
	<view class="content" >
		<view style='margin-top:50upx;background:rgba(255,255,255,1);border-radius:20upx;display: flex;align-items: center;padding:36upx 27upx 26upx;justify-content: space-between;'>
			
			<view @click="toUrl('/pages/4s/4s')" style='display: flex;flex-direction: column;text-align: center;align-items: center;'>
				<image src='/static/4s.png' style='width:79upx;height:79upx;border-radius:50%;background:rgba(255,255,255,1)'></image>
				<view style='font-size:24upx;margin-top:7upx;color:#686868'>附近4S店</view>
			</view>
			<view @click="updateTip()" style='display: flex;flex-direction: column;text-align: center;align-items: center;'>
				<image src="/static/02.png" style='width:79upx;height:79upx;border-radius:50%;background:rgba(255,255,255,1)'></image>
				<view style='font-size:24upx;margin-top:7upx;color:#686868'>加油优惠</view>
			</view>
			<view @click="toTab('/pages/shop/shop')" style='display: flex;flex-direction: column;text-align: center;align-items: center;'>
				<image src="/static/03.png" style='width:79upx;height:79upx;border-radius:50%;background:rgba(255,255,255,1)'></image>
				<view style='font-size:24upx;margin-top:7upx;color:#686868'>在线商城</view>
			</view>
			<view @click="updateTip()" style='display: flex;flex-direction: column;text-align: center;align-items: center;'>
				<image src="/static/04.png" style='width:79upx;height:79upx;border-radius:50%;background:rgba(255,255,255,1)'></image>
				<view style='font-size:24upx;margin-top:7upx;color:#686868'>更多服务</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			updateTip(){
				this.$updateMethod();
			},
			toUrl(url){
				uni.navigateTo({
					"url":url
				})
			},
			toTab(url){
				uni.reLaunch({
					"url":url
				})
			}
		}
	}
</script>

<style>
	
</style>
