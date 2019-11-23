<template>
	<view class="content grayBackground"  style='padding-bottom:50upx'>
		<view><image class="logo" src="/static/msnc_banner.jpg" style='width:750upx;height:529upx'></image></view>
		<view class='padding'>
			<view style='margin-top:-53upx;'>
				<button @click="toUrl('/pages/address/msnc/yhlq')" class="normalButton">立即优惠领取</button>
				<button @click="toUrl('/pages/address/msnc/zzncm')" class='normalButton1' style='margin-top:30upx'>
					线上生成体验（{{times}}次）
				</button>
			</view>
		<view style='margin-top:30upx;background:rgba(255,255,255,1);border-radius:20upx;display: flex;align-items: center;padding:36upx 48upx 26upx;justify-content: space-between;'>
			<view style='display: flex;flex-direction: column;text-align: center;align-items: center;'>
				<image src="/static/msdh_icon1.png" style='width:94upx;height:94upx;border-radius:50%;background:#808080'></image>
				<view style='font-size:24upx;margin-top:18upx;color:#686868'>手机扫码<br>通知挪车</view>
			</view>
			
			<view style='display: flex;flex-direction: column;text-align: center;align-items: center;'>
				<image src="/static/message.png" style='width:94upx;height:94upx;border-radius:50%;background:rgba(255,255,255,1)'></image>
				<view style='font-size:24upx;margin-top:18upx;color:#686868'>微信电话<br>短信推送</view>
			</view>
			<view style='display: flex;flex-direction: column;text-align: center;align-items: center;'>
				<image src="/static/virtualPhone.png" style='width:94upx;height:94upx;border-radius:50%;background:#808080'></image>
				<view style='font-size:24upx;margin-top:18upx;color:#686868'>隐私拨号<br>信息无泄漏</view>
			</view>
			
		</view>
		<view style='margin-top:25upx;padding:20upx 37upx 28upx;display: flex;align-items: center;justify-content: space-between;background:rgba(255,255,255,1);'>
			<view  @click="toUrl('/pages/introduction/introduction?code=move')" style='color:#3377FF;width:194upx;height:59upx;background:white;border-radius:10upx;line-height: 59upx;text-align: center;font-size:28upx;border:1upx solid #3377FF'>
				使用帮助
			</view>
			<view  @click="toUrl('/pages/introduction/introduction?code=moveIntroduction')" style='color:#3377FF;width:194upx;height:59upx;background:white;border-radius:10upx;line-height: 59upx;text-align: center;font-size:28upx;border:1upx solid #3377FF'>
				应用介绍
			</view>
			
		</view>
		
		<pinpai></pinpai>
		<link2></link2>
		<view  style='width:100%;height:247upx;margin-top:50upx;background: #8F8F94;'>
			<swiper :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item>
					<image src="/static/banner3.jpg" mode="" style='width:100%;height:247upx;'></image>
				</swiper-item>
				<swiper-item>
					<image src="/static/banner4.jpg" mode="" style='width:100%;height:247upx;'></image>
				</swiper-item>
				
			</swiper>
			
		</view>
		<!-- <banner></banner> -->
		
		<contact></contact>
		
		</view>
	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
	import pinpai from "@/components/pinpai/pinpai.vue"
	import contact from "@/components/contact/contact.vue";
	import banner from "@/components/banner/banner.vue"
	import linkUrl from "@/components/link/link.vue"
	import link2 from "@/components/link2/link2.vue"
	export default {
		components:{
			pinpai,contact,banner,wPicker,linkUrl,pinpai,link2
		},
		data() {
			
			return {
				title: 'Hello',
				times:0
			}
		},
		onLoad() {
			this.getFreeTime();
		},
		methods: {
			updateTip(){
				this.$updateMethod();
			},
			getFreeTime(){
				uni.showLoading({
					"title":"正在获取免费次数请稍后",
					"mask":"true"
				})
				this.$ajax("/my/freeCount","POST",{moduleCode:'moving_car'}).then((res)=>{
					console.log(res);
					if(res != 0){
						uni.hideLoading();
						uni.showToast({
							"title":"您的生成次数还剩"+res+"次",
							"icon":"none"
						})
						this.times = res
					}else{
							uni.showToast({
								"title":"您的免费次数不足正在跳转次数购买页",
								"mask":"true",
								"icon":"none"
							})
							uni.reLaunch({
								"url":"/pages/address/msnc/index3"
							})
							
						
						
						
					}
				})
			},
			toUrl(url){
				uni.navigateTo({
					"url":url
				})
			},
			getTimes(){
				// this.$ajax("/move/buyWithData","POST",{})
			}
		}
	}
</script>

<style>
	
</style>
