<template>
	<view class="content grayBackground" >
		<view style="width:750upx;height: 328upx;"><image src='/static/payment1.png' style='width:750upx;height: 328upx;'></image></view>
		<view style='font-size:36upx;text-align: center;width: 750upx;'>付费申请</view>
		<view style='font-size:28upx;text-align: center;width: 750upx;margin-top:28upx'>
			您已用了<text class='blue'>3次</text>免费申请制作二维码的<br>机会想继续申请，请支付
		</view>
		<button @click="toUrl('/pages/address/msnc/index3')" class="normalButton" style='margin-top:49upx'>继续申请购买</button>
		<button @click="toUrl('/pages/address/msnc/index3')" class='normalButton1' style='margin-top:50upx;background:#6CC60A;color:white'>
			成为代理
		</button>	
		<contact></contact>
	</view>
</template>

<script>
	import contact from "@/components/contact/contact.vue"
	import counter from "@/components/counter/counter.vue"
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			toUrl(url){
				uni.navigateTo({
					"url":url
				})
			}
		}
	}
</script>

<style>
	
</style>
