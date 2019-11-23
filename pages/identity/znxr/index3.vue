<template>
	<view class="content grayBackground" style='padding-bottom:88upx'>
		<view><image class="logo" src="/static/address_banner.png" style='width:750upx;height:529upx'></image></view>
		<view class='padding' style='margin-top:-198upx;position: relative;z-index: 99;'>
			<view  style='flex-direction: column; justify-content: space-between;font-size:32upx;display: flex;width:654upx;height:543upx;;background:rgba(255,255,255,1);border-radius:20upx;padding:66upx 41upx 49upx 34upx;box-sizing: border-box;'>
				<view class='form_item' style='padding-top:0upx'>
					<view>生成方式</view>
					<view>在线生成二维码</view>
				</view>
				<view class='form_item'><view>二维码类别</view><view>寻人二维码</view></view>
				
				<view class='form_item'><view>申请数量</view><view></view></view>
				
				<view class='form_item' style="border: none;"><view>二维码单价</view><view><text>0.5元/1张 ，10元/30张</text></view></view>
				
			
				
				
			</view>
			<view class='blue' style="margin-top:36upx;font-size:32upx;box-sizing:border-box;height:90upx;background:rgba(255,255,255,1);border-radius:20upx;margin-bottom:36upx;line-height: 90upx;text-align: right;padding-right:31upx">
				已选1 份 共10份 ：200元
			</view>
			<button class='blue' style='width:194upx;height:54upx;border-radius:10upx;border:2upx solid rgba(51,119,255,1);line-height: 54upx;text-align: center;font-size:30upx'>应用介绍</button>
		</view>
		<view style='background:rgba(255,255,255,1);width:682upx;padding-left:34upx;padding-right:34upx;padding-top:18upx;padding-bottom:18upx;display: flex;justify-content: space-between;position:fixed;bottom:0upx;z-index: 99;'>
			<!-- <view @click="toUrl('/pages/address/msnc/index')"><button class='detail_button' style="color:#979797;border:1upx solid #979797;">取消</button></view> -->
			<view @click="toUrl('/pages/address/msnc/index')"><button class='detail_button' style="color:#979797;border:1upx solid #979797;width:147upx">取消</button></view>
			<view @click="toUrl('/pages/address/msnc/zzncm')"><button class='detail_button detail_button_blue' style='float: right;width:261upx;background:#6CC60A;color:white'>成为代理商</button></view>
			<view @click="toUrl('/pages/address/msnc/zzncm')"><button class='detail_button detail_button_blue' style='float: right;width:261upx'>提交并付款</button></view>
		</view>
		<view class='bottomLogo' style='font-size:27upx;text-align: center;margin-top:59upx'>
			本服务由<text style='color:#FFA71A'>码捷达</text>提供 <br>
			服务热线：135 0300 2816
		</view>
	</view>
</template>

<script>
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
	.form_item{
		display: flex;
		border-bottom:1upx solid #D8D8D8;
		padding:36upx 0upx;
		justify-content: space-between;
	}
	.form_item input{
		text-align: right;
	}
</style>
