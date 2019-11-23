<template>
	<view class="content grayBackground" style='text-align:center'>
		<view style='padding:32upx;display: flex;justify-content: space-between;background:rgba(255,255,255,1);'>
			<view style='display: flex;'>
				<view style='width:156upx;height:156upx;border-radius:2upx;background: #8F8F94;'>
					<image src="/static/virtualPhone.jpg" style="width:158upx;height:158upx"></image>
				</view>
				<view style='margin-left:34upx;font-size:34upx'>虚拟电话购买</view>
			</view>
			<view>0.99元/年</view>
		</view>
		<view class='hr'></view>
		<view style='display: flex;height:104upx;line-height:104upx;padding:0upx 32upx;justify-content: space-between;font-size:32upx;background:rgba(255,255,255,1);'>
			<view>支付金额</view>
			<view>您需要支付0.99元/年</view>
		</view>
		<view style='color:#A0A0A0;font-size:28upx;line-height:147upx'>支付成功后将自动返回绑定页面</view>
		<button class='normalButton' @click="buy()">确认支付</button>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				phone:""
			}
		},
		onLoad(option) {
			if(option.phone){
				this.phone = option.phone
				// this.getData();
			}else{
				uni.showModal({
					showCancel:false,
					title:"未获取到手机号码",
					content:"按确定后，将返回生成页。",
					success:function(res){
						if(res.confirm){
							uni.navigateBack({
								delta:3
							})
						}
					}
				})
			}
		},
		methods: {
			toUrl(url){
				uni.navigateTo({
					"url":url
				})
			},
			buy(){
				this.$ajax("/virtual/buy","POST",{phone:this.phone}).then((res)=>{
					console.log(res);
					if(res.code=='200'){
						
						uni.requestPayment({
							provider: "wxpay",
							timeStamp:res.paymentResult.payment.timeStamp,
							nonceStr:res.paymentResult.payment.nonceStr,
							package:res.paymentResult.payment.package,
							signType:res.paymentResult.payment.signType,
							paySign:res.paymentResult.payment.paySign,
							success:function(){
								uni.showToast({
									"title":"支付成功",
									"icon":"none"
								})
								uni.navigateBack({
									delta:3
								})
							},
							fail:function(){
								uni.showToast({
									"title":"取消支付",
									"icon":"none"
								})
							}
						})
					}else{
						uni.showToast({
							"title":"服务器错误，请稍后再试"
						})
					}
				})
			}
		}
	}
</script>

<style>
	
</style>
