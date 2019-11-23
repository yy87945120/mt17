<template>
	<view class="content grayBackground" style='padding-bottom:188upx'>
		<view style='padding:41upx 0upx;text-align: center;background:rgba(255,255,255,1);'>
			<view style='font-size:34upx;color:#484848'>车主车牌 粤P2103</view>
			
		</view>
		<view class='hr'></view>
		
		<view style='margin-top:25upx;padding:20upx 37upx 28upx;display: flex;align-items: center;justify-content: space-between;background:rgba(255,255,255,1);'>
			<view @click="toUrl('/pages/4s/4s')" style="display: flex;align-items: center;">
				<image style='width:31upx;height:41upx;background:#808080'></image>
				<view style='font-size:32upx;margin-left:26upx;color:#686868'>附近4S店</view>
			</view>
			<view style='color:#3377FF;width:194upx;height:59upx;background:white;border-radius:10upx;line-height: 59upx;text-align: center;font-size:28upx;border:1upx solid #3377FF'>
				应用介绍
			</view>
			
		</view>
		
		
		<pinpai></pinpai>
		<linkUrl></linkUrl>
		<banner></banner>
		<contact></contact>
		<view style='background:rgba(255,255,255,1);width:682upx;padding-left:34upx;padding-right:34upx;padding-top:18upx;padding-bottom:18upx;display: flex;justify-content: space-between;position:fixed;bottom:0upx'>
			<view @click='trolley17()'><button class='detail_button detail_button_green'>生成我的挪车码</button></view>
			<view @click='cal17()'><button class='detail_button detail_button_blue' style='float: right;'>线上生成体验</button></view>
		</view>
	</view>
</template>

<script>
	import anUploadImg from '@/components/an-uploadImg/an-uploadImg.vue'
	import pinpai from "@/components/pinpai/pinpai.vue"
	import linkUrl from "@/components/link/link.vue"
	import banner from "@/components/banner/banner.vue"
	import contact from "@/components/contact/contact.vue"
	export default {
		components:{
			anUploadImg,pinpai,linkUrl,banner,contact
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
	.contact1{
		height:149upx;
		display: flex;
		justify-content: center;
		margin-top:62upx;
	}
	.contact1_view{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		height: 149upx;
	}
	.contact1 image{
		width:89upx;
		height:89upx;
		background:#8F8F94;
		border-radius: 50%;
	}
	.contact1 text{
		font-size:24upx;
		color:#3377FF
	}
</style>
