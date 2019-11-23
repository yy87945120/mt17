<template>
	<view class="content" style='background:rgba(243,243,243,1);min-height:100vh'>
		<view><image class="logo" src="/static/mszc_banner.jpg" style='width:750upx;'></image></view>
		<view style='display: flex;justify-content: center;position: relative;top:-118upx;flex-direction: column;margin-left:-330upx;left:50%'>
			<view @click='updateMethod()' class='nav_box'>
				<view style='width: 76upx;'><image src="/static/fd17.png" style='width:53upx;height:53upx;'></image></view>
				<view style='width: 513upx;'>
					<view class='nav_title'>码上防丢</view>
					<view class='nav_title_span span'>证件宠物锁匙，码上联系信息，还失物皆有可能</view>
				</view>
				<view><image src="/static/address_more.png" style='width:15upx;height:26upx;'></image></view>
			</view>
			
			<view @click='updateMethod()' class='nav_box'>
				<view style='width: 76upx;'><image src="/static/xr17.png" style='width:53upx;height:53upx;'></image></view>
				<view style='width: 513upx;'>
					<view class='nav_title'>智能寻人</view>
					<view class='nav_title_span span'>老人小孩迷失，码上联系信息，爱心让亲人回家</view>
				</view>
				<view><image src="/static/address_more.png" style='width:15upx;height:26upx;'></image></view>
			</view>
			<view @click='updateMethod()' class='nav_box'>
				<view style='width: 76upx;'><image src="/static/share17.png" style='width:53upx;height:53upx;margin-left:5upx'></image></view>
				<view style='width: 513upx;'>
					<view class='nav_title'>产品分享码</view>
					<view class='nav_title_span span'>自制产品分享，跨平台发链接，人人都可推广</view>
				</view>
				<view><image src="/static/address_more.png" style='width:15upx;height:26upx;'></image></view>
			</view>
			<view @click='updateMethod()' class='nav_box'>
				<view style='width: 76upx;'><image src="/static/mp17.png" style='width:53upx;height:53upx;margin-left:5upx'></image></view>
				<view style='width: 513upx;'>
					<view class='nav_title'>名片分享码</view>
					<view class='nav_title_span span'>扫码速加朋友，一键加通讯录，更有自我介绍</view>
				</view>
				<view><image src="/static/address_more.png" style='width:15upx;height:26upx;'></image></view>
			</view>
		</view>
		<view style='100vw;position:relative;margin-top: -127upx;'>
			<banner></banner>
		</view>
		<contact></contact>
	</view>
	
</template>

<script>
	import banner from "@/components/banner/banner.vue"
	import contact from "@/components/contact/contact.vue";
	export default {
		components:{
			banner,contact
		},
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
			},
			updateMethod(){
				this.$updateMethod();
			}
		}
	}
</script>

<style>
	
</style>
