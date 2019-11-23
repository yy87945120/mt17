<template>
	<view class="content" style='text-align: center;background:rgba(248,248,248,1);position:absolute;height:100%;width:100%'>
		<view style='width:750upx;height:288upx'><image src="/static/bill_pay.png" style='width: 750upx;height:288upx' mode=""></image></view>
		<view style='font-size:38upx;margin-top:38upx'>支付成功</view>
		<view class='span' style='margin-top:38upx'>
			类目：虚拟电话
		</view>
		<view class='span'>
			支付流水号：000000
		</view>
		<view class='blue' style='font-size:36upx;margin-top:104upx;'>
			进入下一步
		</view>
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
			bill17(){
				uni.navigateTo({
					"url":"/pages/shop/bill"
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
