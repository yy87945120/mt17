<template>
	<view class="content grayBackground" >
		<swiper :indicator-dots="false" :autoplay="true" :interval="3000" :duration="1000" style="height:529upx">
			<swiper-item>
				<view class="swiper-item"><image class="logo" src="/static/msdh_banner.png" style='width:750upx;'></image></view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item"><image class="logo" src="/static/msnc_banner.jpg" style='width:750upx;'></image></view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item"><image class="logo" src="/static/znxr_banner.png" style='width:750upx;'></image></view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item"><image class="logo" src="/static/mszc_banner.jpg" style='width:750upx;'></image></view>
			</swiper-item>
		</swiper>
		<!-- <view></view> -->
		<view style='display: flex;justify-content: center;position: relative;top:-147upx;flex-direction: column;margin-left:-330upx;left:50%;'>
			<view @click="toUrl('/pages/address/msnc/index')" class='nav_box'>
				<view style='width: 76upx;'><image src="/static/address_icon1.png" style='width:53upx;height:38upx;'></image></view>
				<view  style='width: 513upx;'>
					<view class='nav_title'>码上挪车</view>
					<view class='nav_title_span span'>无需公开电话，扫码拨号联络，隐私保护更安全</view>
				</view>
				<view><image src="/static/address_more.png" style='width:15upx;height:26upx;'></image></view>
			</view>
			
			<view @click="toUrl('/pages/address/mszc/index')" class='nav_box'>
				<view style='width: 76upx;'><image src="/static/address_icon2.png" style='width:53upx;height:53upx;'></image></view>
				<view  style='width: 513upx;'>
					<view class='nav_title'>智能找车</view>
					<view class='nav_title_span span'>自动记录位置，停车不怕遗忘，添语音相片备忘</view>
				</view>
				<view><image src="/static/address_more.png" style='width:15upx;height:26upx;'></image></view>
			</view>
			<view @click="toUrl('/pages/address/msdh/index')" class='nav_box'>
				<view style='width: 76upx;'><image src="/static/address_icon3.png" style='width:43upx;height:53upx;margin-left:5upx'></image></view>
				<view  style='width: 513upx;'>
					<view class='nav_title'>码上导航</view>
					<view class='nav_title_span span'>扫码即可导航，无需定位分享，附带信息可营销</view>
				</view>
				<view><image src="/static/address_more.png" style='width:15upx;height:26upx;'></image></view>
			</view>
		</view>
		<view style='100vw;position:relative;margin-top: -127upx;'>
			<banner></banner>
		</view>
		<contact></contact>
		<uni-popup type="center" ref='popup' @hidePopup='checkRegister()'>
			<view style="width: 587upx;padding:28upx;background:rgba(255,255,255,1);border-radius:18upx;">
				<view style='line-height: 67upx;'>授权登陆</view>
				<view style='margin-top:28upx;margin-bottom:28upx;'>亲，你还未是会员用户，请点击下方按钮授权登陆</view>
				<button open-type="getUserInfo" style="width: 476upx" @getuserinfo="getUserInfo1" type="primary">授权登陆</button>
			</view>
			
		</uni-popup>
	</view>
</template>

<script>
	import banner from "@/components/banner/banner.vue"
	import contact from "@/components/contact/contact.vue"
	import uniPopup from "@/components/uni-popup/uni-popup.vue"; 
	export default {
		components:{uniPopup,banner,contact},
		data() {
			return {
				title: 'Hello',
				state:false
			}
		},
		onLoad(option) {
			// this.autho();
			
			// if(option.t && option.q){
			// 	if(option.t == 'move'){
			// 			uni.navigateTo({
			// 				"url":"/pages/address/msnc/smnc?qrcode="+option.q
			// 			})
			// 	}
			// 	if(option.t == 'park'){
			// 			uni.navigateTo({
			// 				"url":"/pages/address/mszc/tcm1?qrcode="+option.q
			// 			})
			// 	}
			// 	if(option.t == 'nav'){
			// 			uni.navigateTo({
			// 				"url":"/pages/address/msdh/dhm1?qcode="+option.q
			// 			})
			// 	}
				
			// }
			
			
		},
		methods: {
			toUrl(url){
				uni.navigateTo({
					"url":url
				})
			},
			getUserInfo1(data){
				let _this = this;
				if(data){
					uni.getUserInfo({
						provider:"weixin",
						success:function(res){
							let user = uni.getStorageSync('user');
							if(user){
								uni.setStorage({
									  key:"user",
									  data:JSON.stringify(res),
									  success:function(){
										  _this.$refs.popup.close();
									  },
									  fail:function(){
										  uni.showToast({
											"title":"获取用户信息失败，请重新点击",
											"icon":"none"
										  })
									  }
								}) 
							}else{
								_this.$ajax('/wxRegister','POST',{encryptedData:res.encryptedData,iv:res.iv}).then((registerRes)=>{
									  if(registerRes){
										 uni.setStorage({
										 	  key:"user",
										 	  data:JSON.stringify(res),
										 	  success:function(){
										 		  _this.$refs.popup.close();
										 	  },
											  fail:function(){
												  uni.showToast({
												  	"title":"获取用户信息失败，请重新点击",
												  	"icon":"none"
												  })
											  }
										 }) 
									  }else{
										  uni.showToast({
										  	"title":"获取用户信息失败，请重新点击",
										  	"icon":"none"
										  })
									  }															  
								})
	
							}
							
						}
					})
				}else{
					uni.showToast({
						"title":"获取用户信息失败，请重新点击",
						"icon":"none"
					})
				}
				
			},
			checkRegister(){
				// let user = uni.getStorageSync('user');
				// if(!user){
				// 	_this.$refs.popup.open();
				// }
			}
			
			
		}
	}
</script>

<style>
.banner /deep/ view{
	width: 100vw;
}
	
</style>
