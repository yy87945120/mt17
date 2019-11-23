<template>
	<view class="content grayBackground" >
		<view style='padding:28upx 28upx 188upx'>
		<view class='billdetail_information shadow' style='display: flex;justify-content: space-between;'>
			<!-- <view class='billdetail_title'>
				<view class='billdetail_title1'>地址信息</view>
			
			</view> -->
				<view>
					<view>收货人：{{address.receiver}}</view>
					<view>收货电话：{{address.phone}}</view>
					<view>收货地区：{{address.province}}{{address.city}}{{address.area}}</view>
					<view>详细地址：{{address.detail}}</view>
				</view>
				<view @click='changeAddress()'>
					<text style='font-size:36upx' class='iconfont iconbianji'></text>
				</view>
				
				
		</view>
		<view class='billdetaillist_information shadow'>
			<!-- <view class='billdetail_title'>
				<view class='billdetail_title1'>商品信息</view>
				<view class='billdetail_status'></view>
			</view> -->
			<view class='tab-view-item-detail' v-for="(s,i) in trolley" :key="i">
				
					<view class='tab-view-item-detail-image'><image :src='s.sku.cover' class='tab-view-item-detail-image'></image></view>
					<view class='tab-view-item-detail-information'>
						<view class='detail-information-title'>商品名称：{{s.sku.product.name}}</view>
						<view class='detail-information-word'>规格：{{s.sku.specificationValues | size}}<text class='iconfont iconwebicon212' style='margin-left:18upx'></text></view>
						<view class='detail-information-word'>数量：{{s.count}}份   价格：{{s.sku.price/100}}元/份</view>
					
				</view>
			</view>
			<view style='display: flex;justify-content: space-between;font-size:32upx;margin-top:38upx'>
				<view style='display: flex;'>
				</view>
				<view>共计<text class='blue'>{{amount/100}}</text>元</view>
			</view>
		</view>
		
		</view>
		<view class='bottomControlView' style=''>
			<!-- <view @click="toUrl('/pages/address/msnc/index')"><button class='detail_button' style="color:#979797;border:1upx solid #979797;">取消</button></view> -->
			<button @click="shop()" class="normalButton1" style='margin-right:8upx'>继续添加</button>
			<button @click="pay()" class="normalButton" style='margin-left:8upx'>去支付</button>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				orderNo:'',
				trolley:null,
				address:null,
				amount:0
			}
		},
		onShow(){
			this.getAddress();
		},
		onLoad(option) {
			this.getAddress();
			this.getTrolley();
		},
		methods: {
			shop(){
				uni.reLaunch({
					"url":"/pages/shop/shop"
				})
			},
			changeAddress(){
				uni.navigateTo({
					"url":"/pages/mine/address?bill=true"
				})
			},
			pay(){
				let _this = this;
				this.$ajax("/order/buy","POST",{addressId:_this.address.id}).then(res=>{
					if(res.code == 200){
						uni.requestPayment({
							provider: "wxpay",
							timeStamp:res.paymentResult.payment.timeStamp,
							nonceStr:res.paymentResult.payment.nonceStr,
							package:res.paymentResult.payment.package,
							signType:res.paymentResult.payment.signType,
							paySign:res.paymentResult.payment.paySign,
							success:function(){
								// uni.setStorageSync('qrcodeNo',res.no);
								uni.navigateTo({
									"url":"/pages/mine/billdetail/?orderNo="+res.paymentResult.no
								})
								
							},
							fail:function(){
								uni.showToast({
									"title":"取消支付,将放入待支付队列",
									"icon":"none"
								})
								setTimeout(function(){
									uni.navigateTo({
										"url":"/pages/mine/billdetail/?orderNo="+res.paymentResult.no
									})
								},999)
							},
						})
					}else{
						uni.showToast({
							"title":res.msg,
							"icon":"none"
						})
					}
					
				})
			},
			getAddress(){
				let _this = this;
				this.$ajax("/useraddress/page","POST",{pageNo:1,pageSize:1,orderName:"default_flag",orderType:"desc"}).then((res)=>{
					
					let str = "";
					if(res.list.length == 0){
						uni.showModal({
							"title":"设置地址",
							"content":"你还没有设置地址，请先设置默认地址",
							"success":function(resModal1){
								if(resModal1.confirm){
									uni.navigateTo({
										"url":"/pages/mine/address?bill=true"
									})
								}
							}
						})
						return false;
					}else{
						_this.address = res.list[0];
					}
				})
			},
			toUrl(url){
				uni.navigateTo({
					"url":url
				})
			},
			getTrolley(){
				let _this = this;
				this.$ajax("/order/checkOut","POST",{}).then(res=>{
					_this.trolley = res.cart.cartItems;
					_this.amount = res.amount
					// console.log(res);
				})
			}
			// detail(){
			// 	let _this = this;
			// 	this.$ajax("/order/detail","POST",{orderNo:_this.orderNo}).then((res)=>{
			// 		_this.billDetail = res
			// 	})
			// }
		},
		filters:{
			position(value){
				if(value == -1){
					return "取消订单";
				}
				if(value == 1){
					return "下单";
				}
				if(value == 2){
					return "已支付";
				}
				if(value == 3){
					return "已发货";
				}
				if(value == 4){
					return "已收货";
				}
				if(value == 0){
					return "交易成功";
				}
			},
			size(value){
				let sizeArr = JSON.parse(value);
				let size = "";
				sizeArr.map((res)=>{
					size = size + " " + res.value 
				})
				return size;
			},
			dateTime(value){
				let dateArr = [];
				dateArr = value.split(".");
				let dateTime = dateArr[0].replace("T"," ");
				return dateTime;
			}
		}
	}
</script>

<style>
	.tab-view-item-detail-information{
		color:#333333;
		margin-left:36upx;
	}
	.detail-information-title{
		font-size:32upx;
		font-weight:bold
	}
	.detail-information-word{
		font-size:28upx;
		margin-top:20upx
	}
	.tab-view-item-detail-image{
		width:132upx;
		height:132upx;
		background: #888888;
	}
	.tab-view-item-detail{
		display: flex;
		margin-top:36upx
	}
	.billdetaillist_information{
		margin-top:47upx;
		padding:28upx;
		box-sizing: border-box;
	}
	.billdetail_title{
		display: flex;
		justify-content: space-between;
	}
	.billdetail_information{
		font-size:28upx;
		padding:28upx;
		box-sizing: border-box;
	}
	.billdetail_form{
		/* font-size:28upx;
		margin-top:36upx */
	}
</style>
