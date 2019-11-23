<template>
	<view class="content" style='text-align: center;background:rgba(248,248,248,1);position:absolute;height:100%;width:100%'>
		<view style='width:750upx;height:288upx'><image src="/static/bill_pay.png" style='width: 750upx;height:288upx' mode=""></image></view>
		<view style='font-size:38upx;font-weight: bold;margin-top:38upx'>支付成功</view>
		<!-- <view class='span' style='margin-top:38upx'>
			支付流水号：000000000
		</view> -->
		<view class='span'>
			订单号：{{orderNo}}
		</view>
		<button @click='bill17()' class='blue' style='background:rgba(248,248,248,1);border-radius:50upx;height:88upx;border:1upx solid rgba(42,151,255,1);width:70%;margin-top:60upx'>
			进入我的订单
		</button>
	</view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
		components: {uniPopup},
		data() {
			return {
				title: 'Hello',
				orderNo:''
			}
		},
		onLoad(option) {
			if(option.orderNo){
				this.orderNo = option.orderNo
			}
		},
		methods: {
			bill17(){
				let _this = this;
				uni.navigateTo({
					"url":"/pages/mine/billdetail?orderNo="+_this.orderNo
				})
			}
		}
	}
</script>

<style>
	.span{
		font-size:28upx;
	}
	
</style>
