<template>
	<view class="content grayBackground" style='text-align:center;padding-bottom:188upx;'>
		<view style='font-size:44upx;margin-top:123upx;'>挪车二维码预生成</view>
		<view style='background:rgba(255,255,255,1);width:682upx;padding-left:34upx;padding-right:34upx;padding-top:18upx;padding-bottom:18upx;display: flex;justify-content: space-between;position:fixed;bottom:0upx;z-index: 99;'>
			<view @click="bdncm1()"><button class='detail_button detail_button_green'>绑定挪车码</button></view>
			<view @click="redirect()"><button class='detail_button detail_button_blue' style='float: right;'>进入个人中心</button></view>
		</view>
		<image :src='car.qrcode.url' style='width:376upx;height:376upx;margin-top:71upx;background: #8F8F94;'></image>
		<view style='font-size:33upx;margin-top:46upx'>编号：{{qrcode}}</view>
		<view class='blue' style='font-size:30upx'>此二维码可使用</view>
		
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
				qrcode:'',
				car:null
			}
		},
		onLoad(option) {
			if(option.qrcode){
				this.qrcode = option.qrcode;
				this.getQcode();
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
			getQcode(){
				let _this = this;
				this.$ajax("/move/detail","POST",{qrcodeNo:_this.qrcode}).then((res)=>{
					_this.car = res.detail;
					console.log(_this.car)
					// _this.checkVirtualPhone();
					
					for(var i in _this.car){
						if(_this.car[i]==null){
							_this.car[i] = "无"
						}
					}
					
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
