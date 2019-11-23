<template>
	<view class="content grayBackground" style='text-align:center;padding-bottom:188upx'>
		<view style='width:750upx;height:288upx'><image :src="car.qrcode.url" style='width: 277upx;height:277upx' mode=""></image></view>
		<view style='font-size:36upx;margin-top:38upx'>挪车码生成成功</view>
		<view style='font-size:32upx;margin-top:30upx'>你现在可以正常使用挪车码</view>
		<view style='font-size:32upx;margin-top:30upx'>编号：{{car.qrcodeNo}}</view>
		<view style='font-size:32upx;margin-top:30upx'>绑定手机号为：{{car.phone}}</view>
		
		<saveimg :url='map.qrcode.url'></saveimg>
		<view style='background: white;margin-top:94upx'>
			<view class='mine_l' ><view>车牌号</view><view>{{car.carNo}}</view></view>
			<view class='mine_l' ><view>联系方式</view><view>{{car.phone}}</view></view>
			<view class='mine_l' v-show="car.virtualPhone"><view>虚拟电话</view><view>已开通</view></view>
			<view class='mine_l' ><view>消息推送</view><view>{{car.msgNotify | name17}}</view></view>
			<view v-show='car.msgNotify == 1' v-text="car.msgContent" style='padding:28upx;text-align: left;width: 100%;box-sizing: border-box;min-height: 188upx;'></view>
			<view class='mine_l' ><view>通知间隔防骚扰</view><view>{{car.intervalNotify | name17}}</view></view>
			<view class='mine_l' ><view>语音通知</view><view>{{car.receiveVoice | name17}}</view></view>
		</view>
		<view class='hr'></view>
		<view style='background: white;'>
			<view class='mine_l' ><view>汽车品牌</view><view>{{car.carBrand}}</view></view>
			<view class='mine_l' ><view>车型</view><view>{{car.carType}}</view></view>
			<view class='mine_l' ><view>购买时间</view><view>{{car.buyTime}}</view></view>
			<view class='mine_l' ><view>常用地点</view><view>{{car.commonlyUsedPlace}}</view></view>
		</view>
		<view class='span' style='margin-top:38upx'>
			此号码将呈现在二维码，别人扫码后可以看<br>到，建议使用虚拟电话
		</view>
		<button class='normalButton' style='width:500upx;margin-top:47upx' @click="buyVirtualPhone()">我要使用虚拟电话</button>
		<button class='normalButton' style='width:500upx;margin-top:35upx' @click="bdcg()">查看我的挪车码</button>
		<linkUrl></linkUrl>
		<banner></banner>
		<contact></contact>
	</view>
</template>

<script>
	import linkUrl from '@/components/link/link.vue'
	import banner from '@/components/banner/banner.vue'
	import contact from '@/components/contact/contact.vue'
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	import saveimg from "@/components/saveimg/saveimg.vue"
	
	export default {
		components: {uniPopup,linkUrl,banner,contact,saveimg},
		data() {
			return {
				title: 'Hello',
				qrcode:"",
				car:null
			}
		},
		onShow(){
			this.getQcode();
			
		},
		onLoad(option) {
			this.qrcode = option.qrcode;
			// this.showTip();
		},
		filters: {
		  name17: function (value) {
		    if (value == 1){
				return '启动'
			}else{
				return '关闭'
			}
		    
		  }
		},
		methods: {
			
			bdcg(){
				uni.navigateTo({
					"url":"/pages/mine/codelist?type=move"
				})
			},
			checkVirtualPhone(){
				let _this = this;
				this.$ajax("/my/hasVirtualService","POST",{phone:_this.car.phone}).then((res)=>{
					console.log(res);
					this.car.virtualPhone = res;
					if(_this.car.virtualPhone){
						uni.showModal({
							showCancel:false,
							title:"虚拟电话",
							content:"此电话已经开通了虚拟电话，他人扫码将无法获取你的真实号码",
							success:function(res){
								if(res.confirm){
									
								}
							}
						})
					}
				})	
			},
			buyVirtualPhone(){
				let _this = this;
				if(!_this.car.virtualPhone){
					uni.navigateTo({
						"url":"/pages/phone/contactway?phone="+this.car.phone
					})
				}else{
					uni.showModal({
						showCancel:false,
						title:"虚拟电话",
						content:"此电话已经开通了虚拟电话，他人扫码将无法获取你的真实号码",
						success:function(res){
							if(res.confirm){
								
							}
						}
					})
				}
				
			},
			toUrl(url){
				uni.navigateTo({
					"url":url
				})
			},
			getQcode(){
				let _this = this;
				this.$ajax("/move/detail","POST",{qrcodeNo:_this.qrcode}).then((res)=>{
					_this.car = res.detail;
					_this.checkVirtualPhone();
					
					for(var i in _this.car){
						if(_this.car[i]==null){
							_this.car[i] = "无"
						}
					}
					
				})	
			}
		}
	}
</script>

<style>
	.span{
		font-size:28upx;
	}
	.mine_l{
		padding:28upx 28upx;
		align-items:center
	}
	.mine_l input{
		text-align: right;
		
	}
</style>
