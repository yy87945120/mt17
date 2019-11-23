<template>
	<view class="content grayBackground" >
		<view class='hr'></view>
		<view style='width:694upx;background:rgba(255,255,255,1);padding:32upx;display: flex;font-size:34upx;justify-content: space-between;'>
			<view style='display: flex;'>
				<view style='width:156upx;height:156upx;border-radius:2upx;background:#8F8F94'></view>
				<view style='width:356upx;margin-left:56upx'>导航码广告推送服务费</view>
			</view>
			<view style='color:#FFA71A'>0.5元</view>
		</view>
		<view class='hr'></view>
		<view style='padding:36upx 32upx;display: flex;justify-content: space-between;font-size:32upx;background:rgba(255,255,255,1);'>
			<view>支付金额</view>
			<view>您需要支付0.5元</view>
		</view>
		
		<view class='bottomControlView' style=''>
			<!-- <view @click="toUrl('/pages/address/msnc/index')"><button class='detail_button' style="color:#979797;border:1upx solid #979797;">取消</button></view> -->
			<button @click='pay()' class="normalButton" style=''>确认支付</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				paymentInfo:null,
				orderNo:''
			}
		},
		onLoad() {

		},
		methods: {
			// toUrl(url){
			// 	uni.navigateBack({
			// 		"url":url
			// 	})
			// }
			pay(){
				uni.setStorageSync('orderNo','1')
				uni.navigateBack({
					"url":"/pages/address/msdh/paymentsuccess"
				})
				// this.$ajax("/service/buy","POST",{"code":"nav_user_adv"}).then(res=>{
					
				// 	uni.requestPayment({
				// 		provider: "wxpay",
				// 		orderInfo:res.orderInfo,
				// 		timeStamp:res.payment.timeStamp,
				// 		nonceStr:res.payment.nonceStr,
				// 		package:res.payment.package,
				// 		signType:res.payment.signType,
				// 		paySign:res.payment.paySign,
				// 		success:function(){
				// 			uni.setStorageSync('orderNo',res.orderInfo.orderNo);
				// 			uni.navigateBack({
				// 				"url":"/pages/address/msdh/zzdhm?pay=true&orderNo="+res.orderInfo.orderNo
				// 			})
				// 		}
				// 	})
				// })
				
			}
		}
	}
</script>

<style>
	
</style>
