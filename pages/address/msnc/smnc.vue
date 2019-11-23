<template>
	<view class="content grayBackground" >
		<view style='padding:41upx 0upx;text-align: center;background:rgba(255,255,255,1);'>
			<image src="/static/shop_qcode.jpg" mode="" style='width:193upx;height:193upx;background:#8F8F94'></image>
			<view calss='span' style='font-size:28upx;margin-top:29upx;color:#484848'>车主车牌 {{car.carNo}}</view>
			<button class='normalButton' style='margin-top:50upx;width:500upx' @click="contact">点击联系车主</button>
		</view>
		<view class='hr'></view>
		<view style='padding:31upx 31upx 43upx;background: white;'>
			<view  style='font-size:32upx'>上传挡车图片</view>
			<an-upload-img @getImgList = "refreshImageList()"></an-upload-img>
		</view>
		
		<view style='margin-top:25upx;padding:20upx 37upx 28upx;display: flex;align-items: center;justify-content: space-between;background:rgba(255,255,255,1);'>
			<view style="display: flex;align-items: center;" @click="toUrl('/pages/4s/4s')">
				<image src="/static/4s.png" style='width: 47upx;height:47upx'></image>
				<view style='font-size:32upx;margin-left:26upx;color:#686868'>附近4S店</view>
			</view>
			<view  @click="toUrl('/pages/address/msdh/introduction')" style='color:#3377FF;width:194upx;height:59upx;background:white;border-radius:10upx;line-height: 59upx;text-align: center;font-size:28upx;border:1upx solid #3377FF'>
				应用介绍
			</view>
			
		</view>
		<pinpai></pinpai>
		<link-url></link-url>
		<banner></banner>
		<contact></contact>
		<view style='background:rgba(255,255,255,1);width:682upx;padding-left:34upx;padding-right:34upx;padding-top:18upx;padding-bottom:18upx;display: flex;justify-content: space-between;position:fixed;bottom:0upx'>
			<view><button class='detail_button detail_button_green' @click="toUrl('/pages/address/msnc/index')">生成我的挪车码</button></view>
			<view><button class='detail_button detail_button_blue' @click="toUrl('/pages/address/msnc/index')" style='float: right;'>线上生成体验</button></view>
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
			linkUrl,pinpai,anUploadImg,banner,contact
		},
		data() {
			return {
				title: 'Hello',
				qrcode:"",
				car:null,
				images:[]
			}
		},
		onLoad(option) {
			if(option.qrcode){
				this.qrcode = option.qrcode;
			}
			if(option.scene){
				this.qrcode = decodeURIComponent(option.scene)
			}
			this.getQrcode();
			
		},
		methods: {
			toUrl(url){
				uni.reLaunch({
					"url":url
				})
			},
			getQrcode(){
				this.$ajax("/move/detail","POST",{qrcodeNo:this.qrcode}).then(res=>{
					this.car = res.detail
				})
			},
			refreshImageList(list){
				this.images = list;
			},
			contact(){
				uni.navigateTo({
					"url":"/pages/address/msnc/smnc1?qrcode="+this.qrcode
				})
			}
		}
	}
</script>

<style>
	
</style>
