<template>
	<view class="content grayBackground" style=''>
		<view>
			<image :src='product.cover' style='width:750upx;'>
			
			</image>
		</view>
		<view style='padding-top:34upx;padding-bottom:34upx;padding-left:28upx;padding-right:28upx;background:rgba(255,255,255,1)'>
			<view style='font-weight: bold;'>{{product.name}}</view>
			<view style='display:flex;justify-content: space-between;margin-top:18upx'>
				<view class='blue'>{{product.price/100}}元/份</view>
				<!-- <view style='display: flex;justify-content: space-between;width: 198upx;'>
					<counter :num17="num17" @getValue="setValue2"></counter>
				</view> -->
			</view>
		</view>
		<view class='hr'></view>
		<view style='padding-top:34upx;padding-bottom:34upx;padding-left:28upx;padding-right:28upx;background:rgba(255,255,255,1)'>
			<view>
				<view><text>类型： {{product.productCategory.name}}</text></view>
				<view style='margin-top:18upx'><text>数量： {{product.perCount}}个/份</text></view>
				
			</view>
		</view>
		
		<view style='margin-top:28upx;min-height:288upx;background:#808080'>
			商品详情
		</view>
		
		<view style='background:rgba(255,255,255,1);width:682upx;padding-left:34upx;padding-right:34upx;padding-top:18upx;padding-bottom:18upx;display: flex;justify-content: space-between;position:fixed;bottom:0upx'>
			<view @click='trolley17()'><button class='detail_button detail_button_green'>加入购物车</button></view>
			<view @click='cal17()'><button class='detail_button detail_button_blue' style='float: right;'>直接购买</button></view>
		</view>
		
		<uni-popup ref="popup1" type="bottom">
			<view style='display:flex;flex-direction:column;justify-content: space-between;height:689upx;padding-left:57upx;padding-right:57upx;padding-top:51upx;padding-bottom:51upx;background:rgba(255,255,255,1)'>
				<view @click='close17()' style="width: 38upx;height:38upx;position: absolute;right: 31upx;top:31upx;"><image src="/static/c.png" mode="" style='width: 38upx;height:38upx'></image></view>
				<view style='display: flex;'>
					<view><image :src="product.cover" style='width: 173upx;height:173upx;border-radius:8upx;' mode=""></image></view>
					<view style='margin-left:45upx;'>
						<view class='blue' style='font-size:40upx'>{{product.price/100}}元/份</view>
						<view><text style='color:#5E5E5E;font-size:30upx'>数量： {{product.perCount}}个/份</text></view>
						<view><text style='color:#5E5E5E;font-size:30upx'>已选择：{{size}}</text></view>
					</view>
				</view>
				<view style='font-size:30upx'>规格：</view>
				<!-- <view style="overflow: hidden;"><button class='shop_button shop_button_focus'>规格1</button><button class='shop_button' style='margin-left:47upx;'>规格2</button></view> -->
				<view style="display: flex;align-items: center;" v-for="(s1,i1) in product.specification" :key="i1">
					<view>{{s1.name}}</view>
					<view v-for="(s2,i2) in s1.entries" :key="i2" style="display: flex;flex-wrap: wrap;">
						<button @click='chooseSize(i1,i2)' style='margin-left:9upx' v-show="s2.isSelected" :class="s1.focus == i2 && size != '未选择'?'shop_button shop_button_focus':'shop_button'">{{s2.value}}</button>
					</view>
					

				</view>
				<view style='font-size:30upx;'>数量：</view>
				<view style='display: flex;justify-content: space-between;width: 198upx;'>
					<counter :num17="num17" @getValue="setValue2" ref='counter'></counter>

				</view>
				
			<button @click='addTrolley()' style='background:rgba(51,119,255,1);height:88upx;width: 638upx;color:rgba(255,255,255,1);border-radius:58upx'>确认选择</button>
			</view>
		</uni-popup>
		
		
	</view>
</template>

<script>
	import counter from "@/components/counter/counter";
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
		components: {uniPopup,counter},
		data() {
			return {
				title: 'Hello',
				num17:1,
				type:'',
				popupData:null,
				size:"未选择",
				skuId:0,
				sku:[],
				num18:1,
				id:0,
				product:null
			}
		},
		onLoad(option) {
			if(option.id){
				this.id = option.id;
				console.log(this.id);
				this.getDetail();
			}
		},
		methods: {
			addTrolley(){
				let _this = this;
				if(this.type == "trolley"){
					if(_this.skuId != 0){
						
						this.$ajax("/cart/add","POST",{skuId:_this.skuId,count:_this.num18}).then((res)=>{
							if(res){
								uni.showToast({
									"title":"添加成功，商品正在购物车等着你呢",
									"icon":"none"
								})
								_this.$refs.popup1.close()
							}else{
								uni.showToast({
									"title":"添加失败",
									"icon":"none"
								})
								_this.$refs.popup1.close()
							}
						})
					}else{
						uni.showToast({
							"title":"请选择规格",
							"icon":"none"
						})
					}
				}else{
					if(_this.skuId != 0){
						
						this.$ajax("/useraddress/page","POST",{pageNo:1,pageSize:10,orderName:"default_flag",orderType:"desc"}).then((res)=>{
							
							let str = "";
							
							console.log(res);
							str = "收货人："+res.list[0].receiver+"("+res.list[0].phone+")"+"\n收货地址："+res.list[0].province+res.list[0].city+res.list[0].area+res.list[0].detail+"\n";
							// for(var i = 0 ; i < _this.trolley.length ; i++){
							// 	str = str + _this.trolley[i]
							// }
							uni.showModal({
								"title":"结算清单",
								"content":str,
								"confirmText":"去支付",
								"cancelText":"设置地址",
								"success":function(resModal){
									if(resModal.confirm){
												console.log(_this.skuId);
												console.log(_this.num18);
												_this.$ajax("/order/buyNow","POST",{skuId:_this.skuId,count:_this.num18,addressId:res.list[0].id}).then((res2)=>{
													console.log(res2)
													uni.requestPayment({
														provider: "wxpay",
														appId: res2.paymentResult.payment.appId,
														timeStamp:res2.paymentResult.payment.timeStamp,
														nonceStr:res2.paymentResult.payment.nonceStr,
														package:res2.paymentResult.payment.package,
														signType:res2.paymentResult.payment.signType,
														paySign:res2.paymentResult.payment.paySign,
														success:function(){
															uni.showToast({
																"title":"下单成功"
															})
															uni.redirectTo({
																url: '/pages/mine/bill'
															});
														},
														fail:function(){
															uni.showToast({
																"title":"取消支付",
																"icon":"none"
															})
														}
													})
												})
											
										
									}else{
										uni.navigateTo({
											"url":"/pages/mine/address?bill=true"
										})
									}
								}
							})
						})
					}else{
						uni.showToast({
							"title":"请选择规格",
							"icon":"none"
						})
					}
					
				}
				
			},
			chooseSize(i1,i2){
				this.product.specification[i1].focus = i2;
				this.priceCal();
			},
			priceCal(){
				let _this = this;
				this.skus = [];
				uni.showLoading({
					"title":"计算中",
					"mask":"true"
				});
				_this.size = "";
				if(_this.product.skus.length != 0){
					_this.product.specification.map((s)=>{
						s.entries.map((i,index)=>{
							if(s.focus == index){
								let data = {
									id:i.id,
									value:i.value
								}
								_this.size = _this.size +" "+i.value;
								_this.skus.push(data);
							}
						})
					})
					
					
					setTimeout(function(){
						console.log(_this.skus);
						_this.product.skus.map((s1)=>{
							console.log(s1.specificationValues);
							if(s1.specificationValues == JSON.stringify(_this.skus)){
								_this.product.price = s1.price;
								_this.skuId = s1.id;
								
							
								console.log(_this.product.price);
							}
						})
						setTimeout(function(){
							uni.hideLoading();
						},888)
					},999);
					
				}
				
			},
			setValue2(num18){
				if(this.size=='未选择'){
					uni.showToast({
						"title":"请先选择规格",
						"icon":"none"
					})
					this.$refs.counter.setNum(1);
				}else{
					this.num18 = num18;
					this.priceCal()
				}
			},
			getDetail(){
				let _this = this;
				let id = this.id;
				this.$ajax("/product/detail","POST",{id:id}).then((res)=>{
					console.log(res);
					_this.product = res;
					_this.product.specification = JSON.parse(_this.product.specification)
					// s.specification = JSON.parse(s.specification)
				})
			},
			setValue(data){
				this.num18 = data;
			},
			trolley17(){
				this.type = 'trolley'
				this.$refs.popup1.open();
				this.skuId = 0;
				this.sku = [];
				this.popupData = [];
				this.size = "未选择";
				// this.popupData = this.product
			},
			pay(){
				// this.popupData = [];
				
			},
			cal17(){
				this.type = 'cal';
				this.size = "未选择";
				this.skuId = 0;
				this.sku = [];
				this.$refs.popup1.open();
				this.sku = [];
				this.popupData = [];
			},
			close17(){
				this.$refs.popup1.close()
			}
		},
		
	}
</script>

<style>
	
	
	.detail_button{
		color:rgba(255,255,255,1);
		border-radius:58upx;
		width: 326upx;
		
	}
	.detail_button_green{
		background:rgba(108,198,10,1)
	}
	.detail_button_blue{
		background:rgba(51,119,255,1);
		
	}
</style>
