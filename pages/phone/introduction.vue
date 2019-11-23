<template>
	<view class="content grayBackground" style='padding:28upx'>
		<view class='shadow' style='padding:77upx;background: white;box-sizing: border-box;'>
			<view style='font-size:28upx;color:#888888'>双方号码隐藏，不暴露手机号，双方隐号通话保护隐私，杜绝骚扰快速拨号</view>
		</view>
		
		<view style='width:694upx;height:247upx;margin-top:247upx;background: #8F8F94;'>
			<banner></banner>
		</view>
		
		<contact style='margin-top:28upx'></contact>
		<view style='background:rgba(255,255,255,1);width:750upx;left:0;box-sizing:border-box;padding-left:34upx;padding-right:34upx;padding-top:18upx;padding-bottom:18upx;display: flex;justify-content: space-between;position:fixed;bottom:0upx'>
			<view @click='trolley17()'><button class='detail_button detail_button_green'>确认使用</button></view>
			<view @click='cal17()'><button class='detail_button detail_button_blue' style='float: right;'>以后再说</button></view>
		</view>
		<!-- <uni-popup ref="popup" type="center" >
			<view style='width:642upx;height:456upx;background:rgba(255,255,255,1);border-radius:14upx;padding:74upx 43upx 0upx;box-sizing: border-box;'>
				当用户选择真实电话，可以直接确认使用 当用户选择虚拟电话，分两种情况: 1.由于不是合约商用户，需支付XX元2.是合约商用户，可以直接确认使用
			</view>
		</uni-popup> -->
	</view>
</template>

<script>
	import contact from "@/components/contact/contact.vue";
	import banner from "@/components/banner/banner.vue";
	import uniPopup from "@/components/uni-popup/uni-popup.vue";
	export default {
		components:{contact,uniPopup,banner},
		data() {
			return {
				title: 'Hello',
				phone:""
			}
		},
		onLoad(option) {
			this.showTip();
			this.phone = option.phone
		},
		methods: {
			cal17(){
				uni.navigateBack({
					delta:1
				})
			},
			trolley17(){
				
				let _this = this;
				uni.navigateTo({
					"url":"/pages/phone/contactway?phone="+_this.phone
				})
			},
			showTip(){
				let _this = this;
				uni.showModal({
					"title":"提示",
					"content":"当用户选择使用真实电话，可以直接确认使用；当前用户选择使用虚拟电话，分为两种情况：1.由于不是合约商用户，需支付XX元。2.是合约商用户，可以直接确认使用。",
					"showCancel":false,
					"confirmText":"知道了",
					"success":function(res){
						if(res.confirm){
							
						}
						
					}
				})
			},
			toUrl(url){
				uni.navigateTo({
					"url":url
				})
				
			},
			openPopup(){
				this.$refs.popup.open()
			}
		}
	}
</script>

<style>
	
</style>
