<template>
	<view class="content grayBackground" style='padding-bottom:88upx'>
		<view><image class="logo" src="/static/msdh_banner.png" style='width:750upx;height:529upx'></image></view>
		<view class='padding' style='margin-top:-198upx;position: relative;z-index: 99;'>
			<view  style='flex-direction: column; justify-content: space-between;font-size:32upx;display: flex;width:654upx;height:543upx;;background:rgba(255,255,255,1);border-radius:20upx;padding:66upx 41upx 49upx 34upx;box-sizing: border-box;'>
				<view class='form_item' style='padding-top:0upx'>
					<view>生成方式</view>
					<view>在线生成二维码</view>
				</view>
				<view class='form_item'><view>二维码类别</view><view>导航二维码</view></view>
				
				<view class='form_item'><view>申请数量</view><view><counter @getValue="setNum()"></counter></view></view>
				
				<view class='form_item' style="border: none;"><view>二维码单价</view><view><text>{{product.price}}元/1张 ，10元/30张</text></view></view>
				
			
				
				
			</view>
			<view class='blue' style="margin-top:36upx;font-size:32upx;box-sizing:border-box;height:90upx;background:rgba(255,255,255,1);border-radius:20upx;margin-bottom:36upx;line-height: 90upx;text-align: right;padding-right:31upx">
				已选{{num17}} 份 共{{num17}}份 ：{{total}}元
			</view>
			<button class='blue' style='width:194upx;height:54upx;border-radius:10upx;border:2upx solid rgba(51,119,255,1);line-height: 54upx;text-align: center;font-size:30upx'>应用介绍</button>
		</view>
		<view style='background:rgba(255,255,255,1);width:682upx;padding-left:34upx;padding-right:34upx;padding-top:18upx;padding-bottom:18upx;display: flex;justify-content: space-between;position:fixed;bottom:0upx;z-index: 99;'>
			<!-- <view @click="toUrl('/pages/address/msnc/index')"><button class='detail_button' style="color:#979797;border:1upx solid #979797;">取消</button></view> -->
			<view @click="cancel()"><button class='detail_button' style="color:#979797;border:1upx solid #979797;width:147upx">取消</button></view>
			<view @click="toBussness()"><button class='detail_button detail_button_blue' style='float: right;width:261upx;background:#6CC60A;color:white'>成为代理商</button></view>
			<view @click="pay()"><button class='detail_button detail_button_blue' style='float: right;width:261upx'>提交并付款</button></view>
		</view>
		<contact style='margin-top:59upx'></contact>
	</view>
</template>

<script>
	import counter from "@/components/counter/counter.vue"
	import contact from "@/components/contact/contact.vue"
	export default {
		components:{
			counter
		},
		data() {
			return {
				title: 'Hello',
				product:null,
				num17:5
			}
		},
		onLoad() {
			this.getPar()
		},
		methods: {
			getPar(){
				let _this = this;
				this.$ajax("/module/getModuleInfo","POST",{code:'nav'}).then((res)=>{
					console.log(res);
					_this.product = res
				})
			},
			toUrl(url){
				uni.navigateTo({
					"url":url
				})
			},
			cancel(){
				uni.switchTab({
					"url":"/pages/address/address"
				})
			},
			toBussness(){
				uni.showToast({
					"title":"功能尚未开发，敬请期待"
				})
			},
			setNum(num17){
				this.num17 = num17
				console.log(this.num17);
			},
			pay(){
				this.$ajax("/move/buy","POST",{moduleCode:"nav",count:this.num17}).then((res)=>{
						if(res){
							uni.requestPayment({
								provider: "wxpay",
								timeStamp:res.timeStamp,
								nonceStr:res.nonceStr,
								package:res.package,
								signType:res.signType,
								paySign:res.paySign,
								success:function(){
									uni.navigateTo({
										"url":"/pages/address/msdh/index"
									})
								},
								fail:function(){
									uni.showToast({
										"title":"取消支付",
										"icon":"none"
									})
								}
							})
						}else{
							uni.showToast({
								"title":"服务器错误，请稍后再试",
							})
						}
					})
				}
			
		},
		computed:{
			total(){
				if(this.product.price){
					let total = this.num17 * this.product.price;
					if(parseInt(this.num17/30) > 0){
						total = total - parseInt(this.num17/30)*20;
					}
					return total;
				}
				
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
