<template>
	<view class="content grayBackground" style='padding-bottom:188upx'>
		<view><image class="logo" src="/static/address_banner.png" style='width:750upx;height:529upx'></image></view>
		<view class='padding' style='margin-top:-198upx;position: relative;z-index: 99;'>
			<view  style='flex-direction: column; justify-content: space-between;font-size:32upx;display: flex;width:654upx;height:739upx;background:rgba(255,255,255,1);border-radius:20upx;padding:66upx 41upx 119upx 34upx;box-sizing: border-box;'>
				<view class='form_item' style='padding-top:0upx'>
					<view>寻人贴+说明书（套）</view>
					<view></view>
				</view>
				<view class='form_item'><view>收货人</view><input type="text" placeholder="请输入收货人名称"></view>
				
				<view class='form_item'><view>联系电话</view><input type="text" placeholder="请输入联系电话"></view>
				
				<view class='form_item'><view>详细地址</view><input type="text" placeholder="请选择省市区"></view>
				
				<view class='form_item' style="border: none;"><view>请输入详细地址</view><input type="text" placeholder="请输入详细地址"></view>
				
				
			</view>
			<view class='blue' style="margin-top:36upx;font-size:32upx;width:664upx;height:90upx;background:rgba(255,255,255,1);border-radius:20upx;margin-bottom:36upx;line-height: 90upx;text-align: center;">
				服务费: 19.9元 优惠价: 9元 邮费: 5元
			</view>
		</view>
		<view style='background:rgba(255,255,255,1);width:682upx;padding-left:34upx;padding-right:34upx;padding-top:18upx;padding-bottom:18upx;display: flex;justify-content: space-between;position:fixed;bottom:0upx;z-index: 99;'>
			<view @click="toUrl('/pages/identity/znxr/index')"><button class='detail_button' style="color:#979797;border:1upx solid #979797;">取消</button></view>
			<view @click="toUrl('/pages/identity/znxr/zzxrm')"><button class='detail_button detail_button_blue' style='float: right;'>立刻申请</button></view>
		</view>
		<view class='bottomLogo' style='font-size:27upx;text-align: center;width: ;'>
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
