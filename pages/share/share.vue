<template>
	
		<view class="content grayBackground" style='overflow-x: hidden;'>
			<view><image class="logo" src="/static/mszc_banner.jpg" style='width:750upx;'></image></view>
			<view style='display: flex;justify-content: center;position: relative;top:-118upx;flex-direction: column;margin-left:-330upx;left:50%'>
				<view @click='updateMethod()' class='nav_box'>
					<view style='width: 76upx;'><image src="/static/cj17.png" style='width:53upx;height:53upx;'></image></view>
					<view style='width: 513upx;'>
						<view class='nav_title'>码上抽奖</view>
						<view class='nav_title_span span'>线上线下活动，抽奖券优惠卡，便捷自制抽奖</view>
					</view>
					<view><image src="/static/address_more.png" style='width:15upx;height:26upx;'></image></view>
				</view>
				
				<view @click='updateMethod()' class='nav_box'>
					<view style='width: 76upx;'><image src="/static/zj17.png" style='width:53upx;height:53upx;'></image></view>
					<view style='width: 513upx;'>
						<view class='nav_title'>自建二维码</view>
						<view class='nav_title_span span'>文件图片情书，说明书和影音 ，随意制作分享</view>
					</view>
					<view><image src="/static/address_more.png" style='width:15upx;height:26upx;'></image></view>
				</view>
				<view @click='updateMethod()' class='nav_box'>
					<view style='width: 76upx;'><image src="/static/video.png" style='width:53upx;height:53upx;margin-left:5upx'></image></view>
					<view style='width: 513upx;'>
						<view class='nav_title'>视频专用码</view>
						<view class='nav_title_span span'>书籍无需光碟，可设收费免费，验证观看防复制</view>
					</view>
					<view><image src="/static/address_more.png" style='width:15upx;height:26upx;'></image></view>
				</view>
				<view @click='updateMethod()' class='nav_box'>
					<view style='width: 76upx;'><image src="/static/net.png" style='width:53upx;height:53upx;margin-left:5upx'></image></view>
					<view style='width: 513upx;'>
						<view class='nav_title'>码上连网</view>
						<view class='nav_title_span span'>扫码分享WIFI，无需手动输入，附带信息可营销</view>
					</view>
					<view><image src="/static/address_more.png" style='width:15upx;height:26upx;'></image></view>
				</view>
				<view @click='updateMethod()' class='nav_box'>
					<view style='width: 76upx;'><image src="/static/book.png" style='width:53upx;height:53upx;margin-left:5upx'></image></view>
					<view style='width: 513upx;'>
						<view class='nav_title'>一码电子书</view>
						<view class='nav_title_span span'>电子书和文章，扫码分享阅读，可设置收费免费</view>
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
			updateMethod(){
				this.$updateMethod();
			}
		}
	}
</script>

<style>
	
</style>
