<template>
	<view class="content grayBackground" style='padding-bottom:188upx'>
		<view style='padding:41upx 0upx;text-align: center;background:rgba(255,255,255,1);'>
			<view style='font-size:34upx;color:#484848'>车主车牌 粤P2103</view>
			<view class='contact1'>
				<view class='contact1_view'>
					<image src="/static/phone.png" mode=""></image>
					<text>电话通知</text>
				</view>
				<view @click='yuyin()' class='contact1_view' style='margin-left:127upx'>
					<image src="/static/weixin.png" mode=""></image>
					<text style='color:#4EC64E'>微信通知</text>
				</view>
			</view>
		</view>
		<view class='hr'></view>
		<view style='padding:31upx 31upx 43upx;background: white;'>
			<view  style='font-size:32upx'>上传挡车图片</view>
			<an-upload-img @getImgList = "refreshImageList()"></an-upload-img>
		</view>
		<view style='margin-top:25upx;padding:20upx 37upx 28upx;display: flex;align-items: center;justify-content: space-between;background:rgba(255,255,255,1);'>
			<view @click="toUrl('/pages/4s/4s')" style="display: flex;align-items: center;">
				<image src="/static/4s.png" style='width: 47upx;height:47upx'></image>
				<view style='font-size:32upx;margin-left:26upx;color:#686868'>附近4S店</view>
			</view>
			<view  style='color:#3377FF;width:194upx;height:59upx;background:white;border-radius:10upx;line-height: 59upx;text-align: center;font-size:28upx;border:1upx solid #3377FF'>
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
			linkUrl,anUploadImg,banner
		},
		data() {
			return {
				title: 'Hello',
				qrcode:"",
				car:null,
				imgs:[]
			}
		},
		onLoad(option) {
			if(option.qrcode){
				this.qrcode = option.qrcode;
			}
			this.getQrcode();
			
		},
		methods: {
			yuyin(){
				uni.navigateTo({
					"url":"/pages/address/msnc/yuyin"
				})
			},
			toUrl(url){
				uni.reLaunch({
					"url":url
				})
			},
			refreshImageList(list){
				this.imgs = list
			},
			getQrcode(){
				this.$ajax("/move/detail","POST",{qrcodeNo:this.qrcode}).then(res=>{
					this.car = res.detail
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
		border-radius: 50%;
	}
	.contact1 text{
		font-size:24upx;
		color:#3377FF
	}
</style>
