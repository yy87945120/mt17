<template>
	<view class="content grayBackground" >
		<view v-if='data'>
		<v-tab :data="dataNav" @select="changeIndex"></v-tab>
		<scroll-view scroll-y class='tab-view'>
			<view v-if='data.length == 0' style='width:750upx;text-align: center;font-size: 36upx;'>
				<image style='width:432upx;height:302upx;margin-top:167upx' src="/static/bill_empty.png" mode=""></image>
				<view>没有该状态的订单哦！</view>
			</view>
			<view class='status-0 tab-view-item' v-for="(s,i) in data" :key="i">
				<view class='tab-view-item-status'>
					<view>订单编号：{{s.orderNo}}</view>
					<view>订单状态：{{s.state | position}}</view>
				</view>
				<view class='tab-view-item-detail' v-for="(s1,i1) in s.details" :key="i1">
					
					<view class='tab-view-item-detail-image'><image :src="s1.sku.cover" class='tab-view-item-detail-image'></image></view>
					<view class='tab-view-item-detail-information'>
						<view class='detail-information-title title_overflow2'>商品名称：{{s1.sku.product.name}}</view>
						<!-- <view class='detail-information-word'>类型：{{s1.sku.product.name}}</view> -->
						<view class='detail-information-word'>规格：{{s1.sku.specificationValues | size}}</view>
						<view class='detail-information-word'>数量：{{s1.count}}份   价格：{{s1.price/100}}元/份</view>
					</view>			
				</view>
				<view class='detail-information-word' style='margin-bottom:18upx;width:588upx;font-weight:bold;text-align: right;'>总价：{{s.amount/100}}元</view>
				<view class='tab-view-item-button'>
					<view class='bill_button_word'><button class='bill_button' @click='detail(s)'>查看详情</button></view>
					<!-- <button class='bill_button' v-for=''>取消订单</button> -->
					<view v-if='s.state == 1 || s.state == 2' @click='cancelBill(s)'><button class='bill_button normalButton'>取消订单</button></view>
					<view v-if='s.state == 1' @click='pay(s)'><button class='bill_button normalButton'>去支付</button></view>
					<view v-if='s.state == 2'><button class='bill_button normalButton'>催发货</button></view>

					<view v-if='s.state == 3'><button class='bill_button normalButton' @click='getP(s)'>确认收货</button></view>
					<!-- <button class='bill_button'>去支付</button> -->
					
				</view>
			</view>
			
			
			
		</scroll-view>
		</view>
		<view v-if='!data' style='text-align:center'>
			<view style='margin-top:188upx;background: #888888;width:432upx;height:302upx;display: inline-block;'><image style='width:432upx;height:302upx' src="/static/bill_empty.png" mode=""></image></view>
			<view style='font-size:36upx;margin-top:34upx'>亲 您还没有订单哦</view>
			<view style='font-size:28upx;color:#A6A6A6;margin-top:15upx'>亲 您还没有订单哦</view>
			<view class='blue' @click="toTab()" style='font-size:28upx;margin-top:47upx'>去逛逛</view>
			<!-- <button @click='data = !data'>演示订单</button> -->
		</view>
	</view>
</template>

<script>
	import vTab from "@/components/v-tab/v-tab.vue";
	export default {
		components:{vTab},
		data() {
			return {
				title: 'Hello',
				position(value){
					if(value == -1){
						return "取消订单";
					}
					if(value == 1){
						return "待支付";
					}
					if(value == 2){
						return "待发货";
					}
					if(value == 3){
						return "待收货";
					}
					if(value == 0){
						return "交易成功";
					}
				},
				state:'all',
				dataNav:[
					{
						name:'全部',
						value:'all'
					},
					{
						name:'待支付',
						value:1
					},
					{
						name:'待发货',
						value:2
					},
					{
						name:'待收货',
						value:3
					},
					{
						name:'交易成功',
						value:0
					},
					{
						name:'取消订单',
						value:-1
					}
					
				],
				data:[]
				
			}
		},
		onLoad() {
			this.bill();
		},
		methods: {
			getP(s){
				this.$ajax("/order/finish","POST",{orderNo:s.orderNo}).then(res=>{
					if(res.code == "200"){
						uni.showToast({
							"title":"确认收货成功",
							"icon":"none"
						})
						setTimeout(function(){
							uni.reLaunch({
								"url":"/pages/mine/bill"
							})
						},888)
						
					}
				})
			},
			pay(s){
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
			cancelBill(s){
				
			},
			toTab(url){
				uni.reLaunch({
					"url":"/pages/shop/shop"
				})
			},
			toUrl(url){
				uni.navigateTo({
					"url":url
				})
			},
			bill(state){
				let _this = this;
				_this.data = [];
				if(_this.state == 'all'){
					this.$ajax("/order/page","POST",{pageNo:1,pageSize:10}).then(res=>{
						res.list.map(res=>{
							_this.data.push(res);
						})
						console.log(_this.data);
					})
				}else{
					this.$ajax("/order/page","POST",{pageNo:1,pageSize:10,state:_this.state}).then(res=>{
						res.list.map(res=>{
							_this.data.push(res);
						})
						console.log(_this.data);
					})
				}
				
			},
			changeIndex(item){
				// this.status = item.value;
				console.log(item);
				this.state = item.value;
				this.bill()
				// if(){
					
				// }
			},
			detail(s){
				uni.showLoading({
					"title":"加载中"
				})
				uni.hideLoading();
				uni.navigateTo({
					"url":"/pages/mine/billdetail?orderNo="+s.orderNo
				})
				
				
			}
		},
		filters:{
			position(value){
				if(value == -1){
					return "取消订单";
				}
				if(value == 1){
					return "待支付";
				}
				if(value == 2){
					return "待发货";
				}
				if(value == 3){
					return "待收货";
				}
				if(value == 0){
					return "交易成功";
				}
				if(value == -1){
					return "取消订单";
				}
			},
			size(value){
				let sizeArr = JSON.parse(value);
				let size = "";
				sizeArr.map((res)=>{
					size = size + " " + res.value 
				})
				return size;
			}
		}
	}
</script>

<style>
	.tab-view-item-detail-image{
		width:132upx;
		height:132upx;
		background: #888888;
	}
	.tab-view-item-detail{
		display: flex;
		margin-top:28upx;
		margin-bottom:9upx
	}
	.tab-view{
		width: 100vw;
		
	}
	.tab-view-item-button{
		display: flex;
		font-size:28upx;
		flex-wrap: wrap;
		
		
	}
	.tab-view-item-button view{
		margin-left:18upx
	}
	.tab-view-item-button view:first-child{
		margin-left:0upx
	}
	.tab-view-item-status{
		display: flex;
		justify-content: space-between;
		font-size:28upx;
	}
	.tab-view-item{
		padding: 43upx;
		/* min-height:430upx; */
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		/* justify-content: space-between; */
		background:rgb(255,255,255);
		margin-top:18upx
	}
	
	.bill_button{
		width:207upx;
		height:60upx;
		border-radius:17upx;
		border:1upx solid rgba(151,151,151,1);
		font-size:28upx;
		line-height:60upx;
		
	}
	
	.normalButton{
		width:207upx;
		border-radius:17upx;
		border:1upx solid #3377FF;
	}
	.tab-view-item-detail-information{
		color:#333333;
		margin-left:36upx
	}
	.detail-information-title{
		font-size:32upx;
		font-weight:bold
	}
	.detail-information-word{
		font-size:28upx;
		margin-top:20upx
	}
	
</style>
