<template>
	<view class="content" style='padding-bottom:138upx'>
		<view v-for="(s,i) in trolley" :key="i" >
			<view style='padding:38upx 28upx;display: flex;'>
				<view style="display: flex;align-items: center;"><text :class="s.selectFlag == 0?'iconfont iconyuancircle46':'iconfont iconxuanzhong'" @click="selectOne(s,i)"></text></view>
				<view style='height:210upx;width:208upx;margin-left: 18upx;' @click='detail(s)'><image style='height:210upx;width:208upx' :src="s.sku.product.cover" mode=""></image></view>
				<view style='margin-left:28upx;padding-top:9upx;padding-bottom:9upx;display: flex;flex-direction: column;justify-content: space-between;width: 599upx;'>
					<view>
						<view style='34upx;font-weight: bold;' class='title_overflow2'>{{s.sku.product.name}}</view>
						<view class='span title_overflow1' style='font-size:24upx;margin-top:9upx' >{{s.sku.product.name}}</view>
						<view style='font-size:24upx;margin-top:9upx' @click='size(s,i)'>规格：{{s.size}} <text class='iconfont iconwebicon212' style='margin-left:18upx'></text></view>
					</view>
					<view style='display: flex;flex-direction: row;justify-content: space-between;align-items: center;'>
						<view class='blue' style='font-size:32upx'>{{s.sku.price/100}}元/份</view>
						<view class='span' style='font-size:28upx'>{{s.sku.product.perCount}}个/份</view>
						<view style='display: flex;justify-content: space-between;'>
							<counter ref="counter" :num17="s.count" @getValue="cal($event,s,i)"></counter>
						</view>
					</view>
				</view>
			</view>
			<view class='hr'></view>
		</view>
		<view v-if='trolley.length != 0' style='position:fixed;bottom:28upx;color:rgba(255,255,255,1);display: flex;margin:0upx auto;margin-left:56upx;font-size:31upx;height:88upx;line-height:88upx'>
			<view style='box-shadow:0 0 4px #000;color:rgb(37,37,37);display: flex;align-items: center;justify-content: space-between;min-width:488upx;box-sizing:border-box;padding-left:38upx;padding-right:38upx;border-radius:58upx 0upx 0upx 58upx;background:rgba(243,243,243,1);font-size:32upx'><view><text @click='chooseAll()' :class="selectAllFlag == 1?'iconfont iconxuanzhong':'iconfont iconyuancircle46'"></text></view><text style='margin-left:18upx'>全选  共{{count}}份 ：<text style="width: 188upx;">{{total.toFixed(2)}}</text>元</text><text @click='delete1(s)' class='iconfont iconshanchu' style="font-size: 58upx;font-weight:bold;color:red"></text></view>
			<view @click='bill17()' style='box-shadow:0 0 4px #000;font-size:34upx;box-sizing:border-box;padding-left:38upx;padding-right:38upx;border-radius:0upx 58upx 58upx 0upx;background:rgba(42,155,255,1)'>去结算</view>
		</view>
		<uni-popup ref="popup" type="bottom">
			<view style="width:677upx">
			<view  style='background:rgba(255,255,255,1);padding-bottom:78upx;padding-top:47upx;border-radius:36upx 36upx 0upx 0upx;padding-left:46upx;padding-right:46upx'>
				<view @click='close17()' style="width: 38upx;height:38upx;position: absolute;right: 31upx;top:31upx;"><image src="/static/c.png" mode="" style='width: 38upx;height:38upx'></image></view>
				<view  style='text-align: center;font-size:34upx;font-weight: bold;'>{{popupData.name}}</view>
				<view style='display: flex;font-size:30upx;flex-direction: column;justify-content: space-between;height: 364upx;margin-top:46upx;width:588upx;'>
					<view><text>类型：  {{popupData.name}}</text></view>
					<view style='display: flex;justify-content: space-between;'>
						<view>数量：  {{popupData.perCount}}个/份</view><view style='display:flex'>
							<view>需要：</view>
							<view style='display: flex;justify-content: space-between;'>
								<counter :num17="num17" @getValue="setNum"></counter>
							</view>
						</view>
					</view>
					<view><text>规格：  {{size}}</text></view>
					<view style="display: flex;align-items: center;" v-for="(s1,i1) in popupData.specification" :key="i1">
						<view>{{s1.name}}</view>
						<view v-for="(s2,i2) in s1.entries" :key="i2" style="display: flex;flex-wrap: wrap;">
							<button @click='chooseSize(i1,i2)' v-show="s2.isSelected" :class="s1.focus == i2?'shop_button shop_button_focus':'shop_button'">{{s2.value}}</button>
						</view>
					</view>
				</view>
			</view>
			<view style='border-radius:0upx 0upx 36upx 36upx;height: 116upx;box-sizing:border-box;background:rgba(247,247,247,1);padding-bottom:28upx;padding-top:28upx;padding-left:46upx;padding-right:46upx'>
				<view style='display: flex;justify-content: space-between;align-items: center;'>
					<view><text class='blue' style='font-size:38upx'>{{popupData.price}}元/份</text></view>
					<view><text class='blue' style='font-size:38upx'>总价：{{popupData.price * num18}}</text></view>
					<view><button @click='atrolley()' style='background:rgba(48,116,255,1);color:rgba(255,255,255,1);border-radius:40upx;font-size:28upx;'>+ 加入购物车</button></view>
				</view>
			</view>
			</view>
		</uni-popup>
		
		<view v-if='trolley.length == 0' style='width:750upx;text-align:center;margin-top:180upx'>
			<image src="/static/timg.gif" style='width:677upx'></image>
			<view style='margin-top:67upx;width: 750upx;'>亲，你没有添加任何商品到购物车哦</view>
		</view>
	</view>
</template>

<script>
	import counter from "@/components/counter/counter.vue";
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
		components:{counter,uniPopup},
		data() {
			return {
				title: 'Hello',
				num17:20,
				trolley:[],
				popupData:'',
				skuId:0,
				total:0,
				num:0,
				count:0,
				tip:false,
				selectAllFlag:0,
				count1:0
			}
		},
		onLoad() {
			this.getTrolley()
		},
		methods: {	
			delete1(s){
				let _this = this;
				if(_this.num == 0){
					uni.showToast({
						"title":"你未勾选任何商品",
						"icon":"none"
					})
					return false;
				}
				uni.showModal({
					"title":"删除操作",
					"content":"亲，确认要删除勾选的商品？",
					"success":function(res){
						if(res.confirm){
							let count = 1;
							let length = _this.num; 
							console.log(length);
							_this.trolley.map(res1=>{
								if(res1.selectFlag == 1){
									_this.$ajax("/cart/remove","POST",{skuId:res1.skuId}).then(res2=>{
										if(!res2){
											uni.showToast({
												"title":"商品删除错误",
												"icon":"none"
											})
											if(count == length){
												_this.getTrolley();
											}
										}else{
											
											if(count == length){
												_this.getTrolley();
											}
										}
										count++;
									})
								}
								
								
							})
							
						}
					}
				})
			},
			deleteProduct(id){
				
			},
			detail(s){
				uni.navigateTo({
					"url":"/pages/shop/detail?id="+s.sku.product.id
				})
			},
			chooseAll(){
				let _this = this;
				if(this.selectAllFlag == 1){
					this.$ajax("/cart/unselectAll","POST",{}).then(res=>{
						if(res){
							_this.selectAllFlag = 0;
							_this.trolley.map((res,index)=>{
								_this.trolley[index].selectFlag = _this.selectAllFlag
							})
						}else{
							uni.showToast({
								"title":"无法取消全选，请再尝试",
								"icon":"none"
							})
							return false
						}
					})
				}else{
					this.$ajax("/cart/selectAll","POST",{}).then(res=>{
						if(res){
							_this.selectAllFlag = 1;
							_this.trolley.map((res,index)=>{
								_this.trolley[index].selectFlag = _this.selectAllFlag
							})
						}else{
							uni.showToast({
								"title":"无法全选，请再尝试",
								"icon":"none"
							})
							return false
						}
					})
				}
				
				
			},
			selectOne(s,i){
				let _this = this;
				if(s.selectFlag == 0){
					this.$ajax("/cart/select","POST",{skuId:s.skuId}).then(res=>{
						if(res){
							_this.trolley[i].selectFlag = 1;
							return false
						}else{
							uni.showToast({
								"title":"无法选中，请再尝试",
								"icon":"none"
							})
							return false
						}
					})
					
				}else{
					this.$ajax("/cart/unselect","POST",{skuId:s.skuId}).then(res=>{
						if(res){
							_this.trolley[i].selectFlag = 0
							return false
						}else{
							uni.showToast({
								"title":"无法取消，请再尝试",
								"icon":"none"
							})
							return false;
						}
					})
					
				}
				
			},
			cal(data,s,i){
				let _this = this;
				if(data < s.count){
					this.$ajax("/cart/add","POST",{skuId:s.skuId,count:-1}).then((res)=>{
						if(res.msg == "success"){
							uni.showToast({
								"title":"修改成功",
								"icon":"none"
							})
							_this.trolley[i].count = data
						}else{
							uni.showToast({
								"title":"添加失败",
								"icon":"none"
							})
							_this.$refs.counter.plus(s.count);
						}
					})
				}else{
					this.$ajax("/cart/add","POST",{skuId:s.skuId,count:1}).then((res)=>{
						if(res.msg == "success"){
							uni.showToast({
								"title":"修改成功",
								"icon":"none"
							})
							_this.trolley[i].count = data
						}else{
							uni.showToast({
								"title":"添加失败",
								"icon":"none"
							})
							_this.$refs.counter.plus(s.count);
						}
					})
				}
				
				
			},
			guige(s,i){
				console.log(i);
				this.popupData = [];
				this.skuId = 0;
				this.popupData = this.trolley[i];
				this.skuId = i;
				console.log(this.popupData);
			},
			bill17(){
				let _this = this;
				this.$ajax("/useraddress/page","POST",{pageNo:1,pageSize:10,orderName:"default_flag",orderType:"desc"}).then((res)=>{
					
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
						let count = 0;
						if(_this.count1 == 0){
							uni.showToast({
								"title":"您还未勾选任何商品",
								"icon":"none"
							})
						}else{
							uni.navigateTo({
								"url":"/pages/shop/settlement"
							})
						}
						
					}
					// console.log(res);
					// str = "收货人："+res.list[0].receiver+"("+res.list[0].phone+")"+"\n收货地址："+res.list[0].province+res.list[0].city+res.list[0].area+res.list[0].detail+"\n";
					
					// uni.showModal({
					// 	"title":"结算清单",
					// 	"content":str,
					// 	"confirmText":"去支付",
					// 	"cancelText":"设置地址",
					// 	"success":function(resModal){
					// 		if(resModal.confirm){
					// 			console.log(res.list[0].id)
					// 			_this.$ajax("/order/buy","POST",{addressId:res.list[0].id}).then((res1)=>{
					// 				console.log(res1);
					// 				if(res1){
					// 					uni.requestPayment({
					// 						provider: "wxpay",
					// 						appId: res1.payment.appId,
					// 						timeStamp:res1.payment.timeStamp,
					// 						nonceStr:res1.payment.nonceStr,
					// 						package:res1.payment.package,
					// 						signType:res1.payment.signType,
					// 						paySign:res1.payment.paySign,
					// 						success:function(){
					// 							uni.showToast({
					// 								"title":"下单成功"
					// 							})
					// 							uni.redirectTo({
					// 								url: '/pages/mine/bill'
					// 							});
					// 						},
					// 						fail:function(){
					// 							uni.showToast({
					// 								"title":"取消支付",
					// 								"icon":"none"
					// 							})
					// 						}
					// 					})
										
					// 				}
					// 			})
					// 		}else{
					// 			uni.navigateTo({
					// 				"url":"/pages/mine/address?bill=true"
					// 			})
					// 		}
					// 	}
					// })
				})
				// uni.navigateTo({
				// 	"url":"/pages/shop/bill"
				// })
			},
			getTrolley(){
				let _this = this;
				this.$ajax("/cart/getCart","POST",{}).then(res=>{
					if(res != "查询出错"){
						uni.showToast({
							"title":"加载成功",
							"icon":"none"
						})
						
						_this.selectAllFlag = res.selectAllFlag;
						_this.trolley = [];
						res.cartItems.map(res=>{
							_this.trolley.push(res);
						})
						
							
						
						
						
						console.log(_this.trolley.length);
					}else{
						uni.showToast({
							"title":"加载失败",
							"icon":"none"
						})
						
					}
				})
			}
		},
		watch:{
			trolley: {
			    　　handler(newName, oldName) {
					let _this = this;
					
					if(_this.trolley){
						_this.tip = false
						_this.num = 0;
						_this.total = 0;
						_this.count = 0;
						_this.count1 = 0
						let count1 = 1;
						_this.trolley.map((res,index)=>{
								
							if(_this.trolley[index].selectFlag == 0){
								_this.selectAllFlag = 0
							}else{
								if(count1 == _this.trolley.length){
									_this.selectAllFlag = 1
								}
								_this.count1 = _this.count1 + 1;
								count1++;
							}
							
							
							
							
							if(!_this.trolley[index].size){
								_this.$set(_this.trolley[index],'size',"");
							}
							if(typeof _this.trolley[index].sku.specificationValues =='string'){
								
								_this.trolley[index].sku.specificationValues = JSON.parse(_this.trolley[index].sku.specificationValues);
								res.sku.specificationValues.map((res1,index1)=>{
									if(_this.trolley[index].sku.specificationValues[index1].value){
										_this.trolley[index].size = _this.trolley[index].size +" "+ _this.trolley[index].sku.specificationValues[index1].value
									}
								})
							}
							if(res.selectFlag == 1){
								_this.num = _this.num + 1;
								_this.count = _this.count + res.count;
								_this.total = _this.total + (res.sku.price/100) * res.count
							}
							
							
						})
					}else{
						_this.tip = true
					}
			    },
			    immediate: true,
				deep:true
			}
		}
	}
</script>

<style>
	.iconfont{
		
	}
	.iconxuanzhong{
		font-size:36upx;
		color:rgb(42,151,255);
		background: white;
		height: 36upx;
		width: 36upx;
		border-radius: 50%;
	}
	.iconyuancircle46{
		font-size:36upx;
	}
	
</style>
