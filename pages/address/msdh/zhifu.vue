<template>
	<view class="content grayBackground" >
		<view class='hr'></view>
		<view style='width:694upx;background:rgba(255,255,255,1);padding:32upx;display: flex;font-size:34upx;justify-content: space-between;'>
			<view style='display: flex;'>
				<view style='width:156upx;height:156upx;border-radius:2upx;background:#8F8F94'></view>
				<view style='width:356upx;margin-left:56upx'>码上挪车二维码生成次数服务费</view>
			</view>
			<view style='color:#FFA71A'>{{total}}元</view>
		</view>
		<view class='hr'></view>
		<view style='padding:36upx 32upx;display: flex;justify-content: space-between;font-size:32upx;background:rgba(255,255,255,1);'>
			<view>支付金额</view>
			<view>您需要支付{{total}}元</view>
		</view>
		
		<view class='bottomControlView' style=''>
			<!-- <view @click="toUrl('/pages/address/msnc/index')"><button class='detail_button' style="color:#979797;border:1upx solid #979797;">取消</button></view> -->
			<button @click="pay()" class="normalButton" style=''>确认支付</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				companyInformation:null,
				count:0,
				total:0
			}
		},
		onLoad(option) {
			this.count = option.count;
			this.total = option.total
			// this.companyInformation = JSON.parse(decodeURIComponent(option.info));
			
		},
		methods: {
			toUrl(url){
				uni.navigateTo({
					"url":url
				})
			},
			pay(){
				this.$ajax("/nav/applyFreeBatch","POST",{count:this.count}).then(res=>{
					console.log(res);
				})
				// let _this = this;
				// uni.showLoading({
				// 	"title":"正在支付",
				// 	"mask":"true"
				// })
				
				// console.log(this.companyInformation);
				// this.$ajax("/nav/applyFreeWithData","POST",_this.companyInformation).then((res)=>{
				// 	uni.hideLoading();
				// 	uni.showToast({
				// 		"title":"支付成功\n正在跳转",
				// 		"mask":"true"
				// 	})
				// 	uni.reLaunch({
				// 		"url":"/pages/address/msdh/paymentsuccess?qcode="+res
				// 	})
				// })
				
			}
		}
	}
</script>

<style>
	
</style>
