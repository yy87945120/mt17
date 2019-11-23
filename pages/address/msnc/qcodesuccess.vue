<template>
	<view class="content grayBackground" style='text-align:center;padding-bottom:188upx;'>
		<view style='font-size:44upx;margin-top:123upx;'>挪车二维码预生成</view>
		<view style='background:rgba(255,255,255,1);width:682upx;padding-left:34upx;padding-right:34upx;padding-top:18upx;padding-bottom:18upx;display: flex;justify-content: space-between;position:fixed;bottom:0upx;z-index: 99;'>
			<view @click="bdncm1()"><button class='detail_button detail_button_green'>绑定挪车码</button></view>
			<view @click="redirect()"><button class='detail_button detail_button_blue' style='float: right;'>进入个人中心</button></view>
		</view>
		<image src='/static/shop_qcode.jpg' style='width:376upx;height:376upx;margin-top:71upx;background: #8F8F94;'></image>
		<view style='font-size:33upx;margin-top:46upx'>编号：{{qrcode}}</view>
		<view class='blue' style='font-size:30upx'>此二维码可使用</view>
		<!-- <view style='padding:0upx 26upx;'>
			<view style='margin-top:50upx;background:rgba(255,255,255,1);border-radius:20upx;display: flex;align-items: center;padding:36upx 27upx 26upx;justify-content: space-between;'>
				
				<view style='display: flex;flex-direction: column;text-align: center;align-items: center;'>
					<image style='width:79upx;height:79upx;border-radius:50%;background:#808080'></image>
					<view style='font-size:24upx;margin-top:7upx;color:#686868'>码上挪车</view>
				</view>
				<view style='display: flex;flex-direction: column;text-align: center;align-items: center;'>
					<image style='width:79upx;height:79upx;border-radius:50%;background:#808080'></image>
					<view style='font-size:24upx;margin-top:7upx;color:#686868'>码上防丢</view>
				</view>
				<view style='display: flex;flex-direction: column;text-align: center;align-items: center;'>
					<image style='width:79upx;height:79upx;border-radius:50%;background:#808080'></image>
					<view style='font-size:24upx;margin-top:7upx;color:#686868'>智能寻人</view>
				</view>
				<view style='display: flex;flex-direction: column;text-align: center;align-items: center;'>
					<image style='width:79upx;height:79upx;border-radius:50%;background:#808080'></image>
					<view style='font-size:24upx;margin-top:7upx;color:#686868'>更多服务</view>
				</view>
			</view>
		</view> -->
		<link-url></link-url>
		<banner></banner>
		<contact></contact>
	</view>
</template>

<script>
	import linkUrl from "@/components/link/link.vue";
	import banner from "@/components/banner/banner.vue";
	import contact from "@/components/contact/contact.vue";
	export default {
		components:{
			banner,linkUrl,contact
		},
		data() {
			return {
				title: 'Hello',
				qrcode:''
			}
		},
		onLoad(option) {
			if(option.qrcode){
				this.qrcode = option.qrcode
			}
		},
		methods: {
			toUrl(url){
				uni.navigateTo({
					"url":url
				})
			},
			redirect(){
				uni.redirectTo({
					"url":"/pages/mine/codelist?type=move"
				})
			},
			bdncm1(){
				let _this = this;
				uni.navigateTo({
					"url":"/pages/address/msnc/bdncm?qrcode="+_this.qrcode
				})
			}
		}
	}
</script>

<style>
	
</style>
