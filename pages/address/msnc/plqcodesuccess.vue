<template>
	<view class="content grayBackground" style='text-align:center;padding-bottom:198upx;'>
		<view style='padding:0upx 44upx;display: flex;flex-wrap: wrap;justify-content: space-between;'>
			<view @click="toUrl('/pages/address/msnc/qcodesuccess')" v-for="(s,i) in 6" :key='i' style='margin-top:24upx;width:315upx;display:flex;flex-direction:column;align-items:center;padding:53upx 47upx 34upx 47upx;height:359upx;background:rgba(255,255,255,1);border-radius:20upx;box-sizing:border-box'>
				<view style='width:210upx;height:210upx;background:#8F8F94'></view>
				<view style='font-size:28upx;margin-top:22upx'>编号：wifi20000</view>
			</view>
			<view style='margin-top:22upx;padding:0upx 28upx;width:663upx;height:124upx;font-size:36upx;background:rgba(255,255,255,1);border-radius:20upx;display: flex;justify-content: space-between;align-items: center;'>
				<view style='width:147upx;height:88upx;line-height:88upx;background:rgba(255,255,255,1);border-radius:10upx;border:1px solid rgba(221,221,221,1);'>上一页</view>
				<view><text class='blue'>2</text>/10</view>
				<view style='width:147upx;height:88upx;line-height:88upx;background:rgba(255,255,255,1);border-radius:10upx;border:1upx solid rgba(221,221,221,1);'>下一页</view>
			</view>
		</view>
		
		<!-- <image src="" mode="" style='width:376upx;height:376upx;margin-top:71upx;background: #8F8F94;'></image> -->
		
		<view style='font-size:28upx;margin-top:54upx'>注：此二维码可下载可打印可识别，可扫描</view>
		<view style='padding:0upx 26upx;'>
			<view style='margin-top:50upx;background:rgba(255,255,255,1);border-radius:20upx;display: flex;align-items: center;padding:36upx 27upx 26upx;justify-content: space-between;'>
				
				<view style='display: flex;flex-direction: column;text-align: center;align-items: center;'>
					<image style='width:79upx;height:79upx;border-radius:50%;background:#808080'></image>
					<view style='font-size:24upx;margin-top:7upx;color:#686868'>码上挪车</view>
				</view>
				<view style='display: flex;flex-direction: column;text-align: center;align-items: center;'>
					<image style='width:79upx;height:79upx;border-radius:50%;background:#808080'></image>
					<view style='font-size:24upx;margin-top:7upx;color:#686868'>码上防丢</view>
				</view>
				<view style='display: flex;flex-direction: column;text-align: center;align-items: center;'>
					<image style='width:79upx;height:79upx;border-radius:50%;background:#808080'></image>
					<view style='font-size:24upx;margin-top:7upx;color:#686868'>智能寻人</view>
				</view>
				<view style='display: flex;flex-direction: column;text-align: center;align-items: center;'>
					<image style='width:79upx;height:79upx;border-radius:50%;background:#808080'></image>
					<view style='font-size:24upx;margin-top:7upx;color:#686868'>更多服务</view>
				</view>
			</view>
		</view>
		<view class='bottomControlView' style=''>
			<!-- <view @click="toUrl('/pages/address/msnc/index')"><button class='detail_button' style="color:#979797;border:1upx solid #979797;">取消</button></view> -->
			<button @click="toUrl('/pages/address/msnc/plqcodesuccess')" class="normalButton" style=''>进入我的个人中心</button>
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
