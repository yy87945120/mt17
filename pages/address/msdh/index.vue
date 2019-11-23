<template>
	<view class="content grayBackground"  style='padding-bottom:50upx'>
		<view><image class="logo" src="/static/msdh_banner.png" style='width:750upx;height:529upx'></image></view>
		<view class='padding'>
			<view style='margin-top:-147upx;position:relative;z-index:99;padding:18upx;background:rgba(255,255,255,1);border-radius:20upx;font-size:28upx'>
				<!-- <image style='height:288upx' src="/static/sm.png"></image>
				<image style='height:66upx' src="/static/zb.png"></image>
				<image style='height:198upx' src="/static/dt.png"></image> -->
				
					<view style='box-sizing:border-box;width:100%;background:rgba(255,255,255,1);border-radius:20upx;padding:36upx 0upx 18upx;justify-content: space-between;display: flex;'>
					
						<view style='display: flex;flex-direction: column;text-align: center;align-items: center;'>
							<image src="/static/msdh_icon1.png" style='width:79upx;height:79upx;border-radius:50%;'></image>
							<view style='font-size:24upx;margin-top:7upx;color:#686868'>地址变二维码</view>
						</view>
						<view style='display: flex;flex-direction: column;text-align: center;align-items: center;'>
							<image src="/static/msdh_icon2.png" style='width:79upx;height:79upx;border-radius:50%;'></image>
							<view style='font-size:24upx;margin-top:7upx;color:#686868'>扫码直接导航</view>
						</view>
						<view style='display: flex;flex-direction: column;text-align: center;align-items: center;'>
							<image src="/static/msdh_icon4.png" style='width:79upx;height:79upx;border-radius:50%;'></image>
							<view style='font-size:24upx;margin-top:7upx;color:#686868'>页面广告推广</view>
						</view>
						<view style='display: flex;flex-direction: column;text-align: center;align-items: center;'>
							<image src="/static/msdh_icon3.png" style='width:79upx;height:79upx;border-radius:50%;'></image>
							<view style='font-size:24upx;margin-top:7upx;color:#686868'>页面更多信息</view>
						</view>
						
					</view>
					<view style='justify-content: space-between;display: flex;flex-wrap: wrap;padding:18upx'>
						<view class="banner_introduction" style=''>
							<view class='banner_introduction_icon'>
								<image src="/static/msdh_icon5.png" style='width:66upx;height:66upx'></image>
							</view>
							<view class='banner_introduction_detail'>
								<view class='banner_introduction_detail_word1'>发送地址</view>
								<view class='banner_introduction_detail_word2'>无需现场或搜索</view>
							</view>
						</view>
						<view class="banner_introduction" style=''>
							<view class='banner_introduction_icon'>
								<image src="/static/msdh_icon6.png" style='width:66upx;height:66upx'></image>
							</view>
							<view class='banner_introduction_detail'>
								<view class='banner_introduction_detail_word1'>公众号地址</view>
								<view class='banner_introduction_detail_word2'>放置码扫码导航</view>
							</view>
						</view>
						<view class="banner_introduction" style=''>
							<view class='banner_introduction_icon'>
								<image src="/static/msdh_icon7.png" style='width:66upx;height:66upx'></image>
							</view>
							<view class='banner_introduction_detail'>
								<view class='banner_introduction_detail_word1'>网页地址</view>
								<view class='banner_introduction_detail_word2'>放置码扫码导航</view>
							</view>
						</view>
						<view class="banner_introduction" style=''>
							<view class='banner_introduction_icon'>
								<image src="/static/msdh_icon8.png" style='width:66upx;height:66upx'></image>
							</view>
							<view class='banner_introduction_detail'>
								<view class='banner_introduction_detail_word1'>名片物料</view>
								<view class='banner_introduction_detail_word2'>放置码扫码导航</view>
							</view>
						</view>
					</view>
					
				
			</view>
			
			<view style='margin-top:18upx;'>
				<!-- <button @click="$updateMethod()" class="normalButton">二维码导航搜索</button> -->
				<button @click="toUrl('/pages/address/msdh/search')" class='normalButton1' style='margin-top:50upx'>
					线上生成体验({{times}}次)
				</button>
			</view>
		
		
		
		
		<link2></link2>
		<pinpai></pinpai>
		<banner></banner>
		<contact style="margin-top:61upx"></contact>
		</view>
	</view>
</template>

<script>
	import contact from "@/components/contact/contact.vue"
	import counter from "@/components/counter/counter.vue"
	import link2 from "@/components/link2/link2.vue"
	import pinpai from "@/components/pinpai/pinpai.vue"
	import banner from "@/components/banner/banner.vue"
	export default {
		components:{contact,counter,pinpai,banner,link2},
		data() {
			return {
				title: 'Hello',
				production:null,
				times:0
			}
		},
		onLoad() {
			
			this.getPar();
		},
		methods: {
			toUrl(url){
				uni.navigateTo({
					"url":url
				})
			},
			getPar(){
				uni.showLoading({
					"title":"正在获取免费次数请稍后",
					"mask":"true"
				})
				this.$ajax("/my/freeCount","POST",{moduleCode:'nav'}).then((res)=>{
					console.log(res);
					if(res != 0){
						uni.hideLoading();
						uni.showToast({
							"title":"您的生成次数还剩"+res+"次",
							"icon":"none"
						})
						this.times = res
					}else{
						
							uni.showToast({
								"title":"您的免费次数不足正在跳转次数购买页",
								"mask":"true",
								"icon":"none"

							})
							uni.reLaunch({
								"url":"/pages/address/msdh/index"
							})
							
						
						
						
					}
				})
			},
			getLocation(){
				
			}
			
		}
	}
</script>

<style>
	.banner_introduction{
		padding:18upx;
		display: flex;
		align-items: center;
		box-shadow:0upx 12upx 12upx 0upx rgba(147,147,147,0.37);
		border-radius:20upx;
		margin-top:18upx
	}
	.banner_introduction_detail{
		margin-left:18upx
	}
	.banner_introduction_detail_word1{
		font-size:26upx
	}
	.banner_introduction_detail_word2{
		font-size:24upx;
		color:#BBBBBB
	}
</style>
