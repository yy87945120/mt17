<template>
	<view class="content grayBackground" >
		<view style='padding:72upx 42upx 188upx'>
		<view class='billdetail_information'>
			<view class='billdetail_title'>
				<view class='billdetail_title1'>订单信息</view>
				<view class='billdetail_status'>{{billDetail.state | position}}</view>
			</view>
			<view class='billdetail_form'>
				<view>订单类型：{{billDetail.orderName}}</view>
				<view>订单状态：{{billDetail.state | position}}</view>
				<view>订单编号：{{billDetail.orderNo}}</view>
				<view>订单创建时间：{{billDetail.createTime | dateTime}}</view>
				<view>收货人：{{billDetail.userAddress.receiver}}</view>
				<view>收货电话：{{billDetail.userAddress.phone}}</view>
				<view>收货地址：{{billDetail.userAddress.province}}{{billDetail.userAddress.city}}{{billDetail.userAddress.area}}{{billDetail.userAddress.detail}}</view>
			</view>
		</view>
		<view class='billdetaillist_information'>
			<view class='billdetail_title'>
				<view class='billdetail_title1'>商品信息</view>
				<view class='billdetail_status'></view>
			</view>
			<view class='tab-view-item-detail' v-for="(s,i) in billDetail.details" :key="i">
				
					<view class='tab-view-item-detail-image'><image :src='s.sku.cover' class='tab-view-item-detail-image'></image></view>
					<view class='tab-view-item-detail-information'>
						<view class='detail-information-title'>商品名称：{{s.sku.product.name}}</view>
						<view class='detail-information-word'>类型：{{s.sku.product.name}}</view>
						<view class='detail-information-word'>规格：{{s.sku.specificationValues | size}}</view>
						<view class='detail-information-word'>数量：{{s.count}}份   价格：{{s.price/100}}元/份</view>
					
				</view>
			</view>
			<view style='display: flex;justify-content: space-between;font-size:32upx;margin-top:38upx'>
				<view style='display: flex;'>
					<!-- <view>已选<text class='blue'>2</text> 种</view>
					<view>共<text class='blue'>30</text>份</view> -->
				</view>
				<view>共计<text class='blue'>{{billDetail.amount/100}}</text>元</view>
			</view>
		</view>
		
		</view>
		<view class='tab-view-item-button'>
			
			<!-- <button class='bill_button' v-for=''>取消订单</button> -->
			<view v-if='billDetail.state == 1 || billDetail.state == 2' @click='cancelBill()'><button class='bill_button normalButton'>取消订单</button></view>
			<view v-if='billDetail.state == 1' @click='pay(s)'><button class='bill_button normalButton'>去支付</button></view>
			<view v-if='billDetail.state == 2'><button class='bill_button normalButton'>催发货</button></view>
		
			<view v-if='billDetail.state == 3'><button class='bill_button normalButton' @click='getP()'>确认收货</button></view>
			<!-- <button class='bill_button'>去支付</button> -->
			
		</view>
		<!-- <view class='bottomControlView' style=''> -->
			<!-- <view @click="toUrl('/pages/address/msnc/index')"><button class='detail_button' style="color:#979797;border:1upx solid #979797;">取消</button></view> -->
			<!-- <button @click="toUrl('/pages/address/msnc/plqcodesuccess')" class="normalButton" style=''>确认收货</button> -->
			
		<!-- </view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				orderNo:'',
				billDetail:null
			}
		},
		onLoad(option) {
			if(option.orderNo){
				this.orderNo = option.orderNo;
				this.detail();
			}
		},
		methods: {
			
			toUrl(url){
				uni.navigateTo({
					"url":url
				})
			},
			detail(){
				let _this = this;
				this.$ajax("/order/detail","POST",{orderNo:_this.orderNo}).then((res)=>{
					_this.billDetail = res
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
			},
			dateTime(value){
				let dateArr = [];
				dateArr = value.split(".");
				let dateTime = dateArr[0].replace("T"," ");
				return dateTime;
			},
			getP(s){
				this.$ajax("/order/finish","POST",{orderNo:billDetail.orderNo}).then(res=>{
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
		}
	}
</script>

<style>
	.bill_button{
		width:317upx;
		/* height:60upx;
		border-radius:17upx; */
		border:1upx solid rgba(151,151,151,1);
		/* font-size:28upx;
		line-height:60upx; */
		
	}
	.tab-view-item-button view:first-child{
		margin-right:38upx
	}
	.tab-view-item-button view{
		margin-left:38upx
	}
	.tab-view-item-button{
		display: flex;
		font-size:28upx;
		flex-wrap: wrap;
		justify-content:center;
	}
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
	.tab-view-item-button view{
		
		width: 288upx;
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
		margin-top:127upx
	}
	.billdetail_title{
		display: flex;
		justify-content: space-between;
	}
	.billdetail_information{
		font-size:36upx;
		
	}
	.billdetail_form{
		font-size:28upx;
		margin-top:36upx
	}
</style>
