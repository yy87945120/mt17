<template>
	<view class="content" style='text-align: center;background:rgba(248,248,248,1);position:absolute;height:100%;width:100%'>
		<view style='width:750upx;height:288upx'><image src="/static/bill_pay.png" style='width: 750upx;height:277upx' mode=""></image></view>
		<view style='font-size:38upx;font-weight: bold;margin-top:38upx'>支付成功</view>
		<view class='span' style='margin-top:38upx'>
			类目：寻人码支付酬金
		</view>
		<view class='span'>
			支付人:0000000
		</view>
		<button @click='toUrl()' class='blue' style='background:rgba(248,248,248,1);border-radius:50upx;height:88upx;border:1upx solid rgba(42,151,255,1);width:70%;margin-top:60upx'>
			返回
		</button>
		<view style='color:#A0A0A0;font-size:28upx;margin-top:105upx'>支付成功后，二维码即刻可使用，无须审核</view>
	</view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
		components: {uniPopup},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			toUrl(){
				
			}
		}
	}
</script>

<style>
	.span{
		font-size:28upx;
	}
	
</style>
