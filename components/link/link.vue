<template>
	<view class="content" >
		<view style='margin-top:28upx'>
			<view style='margin-top:30upx;background:rgba(255,255,255,1);border-radius:20upx;display: flex;align-items: center;padding:36upx 27upx 26upx;justify-content: space-between;'>
			
				<view @click="toUrl('/pages/address/msnc/index')" style='display: flex;flex-direction: column;text-align: center;align-items: center;'>
					<image src="/static/01.png" style='width:79upx;height:79upx;border-radius:50%;background:#808080'></image>
					<view style='font-size:24upx;margin-top:7upx;color:#686868'>码上挪车</view>
				</view>
				<view @click="toUrl('/pages/identity/identity')" style='display: flex;flex-direction: column;text-align: center;align-items: center;'>
					<image src="/static/02.png" style='width:79upx;height:79upx;border-radius:50%;background:#808080'></image>
					<view style='font-size:24upx;margin-top:7upx;color:#686868'>码上防丢</view>
				</view>
				<view @click="toUrl('/pages/identity/znxr/index')" style='display: flex;flex-direction: column;text-align: center;align-items: center;'>
					<image src="/static/03.png" style='width:79upx;height:79upx;border-radius:50%;background:#808080'></image>
					<view style='font-size:24upx;margin-top:7upx;color:#686868'>智能寻人</view>
				</view>
				<view @click="$updateMethod()" style='display: flex;flex-direction: column;text-align: center;align-items: center;'>
					<image src="/static/04.png" style='width:79upx;height:79upx;border-radius:50%;background:#808080'></image>
					<view style='font-size:24upx;margin-top:7upx;color:#686868'>更多服务</view>
				</view>
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
