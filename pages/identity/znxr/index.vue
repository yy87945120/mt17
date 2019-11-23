<template>
	<view class="content grayBackground"  style='padding-bottom:50upx'>
		<view><image class="logo" src="/static/znxr_banner.png" style='width:750upx;height:529upx'></image></view>
		<view class='padding'>
			<view style='margin-top:-88upx;position:relative;z-index:99;padding:55upx;background:rgba(255,255,255,1);border-radius:20upx;font-size:28upx'>
				家人在对象人身上附带上防丢二维码，好心人扫描二维码时，家人即有位置信息。<br>好心人获取信息联系家人，好心人更可以根据身体信息进行应急处理。
			</view>
			<view style='margin-top:33upx;'>
				<button @click="toUrl('/pages/identity/znxr/yhlq')" class="normalButton">立即优惠领取</button>
				<button @click='toUrl()' class='normalButton1' style='margin-top:50upx'>
					线上生成体验
				</button>
			</view>
		<view style='margin-top:30upx;background:rgba(255,255,255,1);border-radius:20upx;display: flex;align-items: center;padding:36upx 48upx 26upx;justify-content: space-between;'>
			
			<view style='display: flex;flex-direction: column;text-align: center;align-items: center;'>
				<image style='width:94upx;height:94upx;border-radius:50%;background:#808080'></image>
				<view style='font-size:24upx;margin-top:18upx;color:#686868'>隐私拨号<br>信息无泄漏</view>
			</view>
			<view style='display: flex;flex-direction: column;text-align: center;align-items: center;'>
				<image style='width:94upx;height:94upx;border-radius:50%;background:#808080'></image>
				<view style='font-size:24upx;margin-top:18upx;color:#686868'>微信扫码<br>通知挪车</view>
			</view>
			<view style='display: flex;flex-direction: column;text-align: center;align-items: center;'>
				<image style='width:94upx;height:94upx;border-radius:50%;background:#808080'></image>
				<view style='font-size:24upx;margin-top:18upx;color:#686868'>微信电话<br>短信推送</view>
			</view>
		</view>
		
		<view style='margin-top:50upx;background:rgba(255,255,255,1);border-radius:20upx;display: flex;align-items: center;padding:36upx 27upx 26upx;justify-content: space-between;'>
			
			<view style='display: flex;flex-direction: column;text-align: center;align-items: center;'>
				<image style='width:79upx;height:79upx;border-radius:50%;background:#808080'></image>
				<view style='font-size:24upx;margin-top:7upx;color:#686868'>附近4S店</view>
			</view>
			<view style='display: flex;flex-direction: column;text-align: center;align-items: center;'>
				<image style='width:79upx;height:79upx;border-radius:50%;background:#808080'></image>
				<view style='font-size:24upx;margin-top:7upx;color:#686868'>加油优惠</view>
			</view>
			<view style='display: flex;flex-direction: column;text-align: center;align-items: center;'>
				<image style='width:79upx;height:79upx;border-radius:50%;background:#808080'></image>
				<view style='font-size:24upx;margin-top:7upx;color:#686868'>在线商城</view>
			</view>
			<view style='display: flex;flex-direction: column;text-align: center;align-items: center;'>
				<image style='width:79upx;height:79upx;border-radius:50%;background:#808080'></image>
				<view style='font-size:24upx;margin-top:7upx;color:#686868'>更多服务</view>
			</view>
		</view>
		<view style='margin-top:25upx;padding:20upx 37upx 28upx;display: flex;align-items: center;justify-content: space-between;background:rgba(255,255,255,1);border-radius:20upx;'>
			<view style="display: flex;align-items: center;">
				<image style='width:94upx;height:94upx;border-radius:50%;background:#808080'></image>
				<view style='font-size:32upx;margin-left:26upx'>品牌名称</view>
			</view>
			<view style='color:#FFFFFF;width:124upx;height:59upx;background:rgba(51,119,255,1);border-radius:10upx;line-height: 59upx;text-align: center;font-size:28upx'>
				关注	
			</view>
			
		</view>
		<view style='width:659upx;height:247upx;margin-top:50upx;background: #8F8F94;'>
			
		</view>
		
		<view class='bottomLogo' style='font-size:27upx;text-align: center;margin-top:41upx'>
			本服务由<text style='color:#FFA71A'>码捷达</text>提供 <br>
			服务热线：135 0300 2816
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
