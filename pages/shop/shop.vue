<template>
	<view class="content grayBackground" style="">
		<view>
			<swiper :indicator-dots="false" :autoplay="true" :interval="3000" :duration="1000" style="height:288upx;width: 750upx;">
				<swiper-item>
					<view class="swiper-item"><image src="/static/shop_banner.png" mode="scaleToFill" style="height:288upx;width: 750upx;"></image></view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item"><image src="/static/shop_banner.png" mode="scaleToFill" style="height:288upx;width: 750upx;" ></image></view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item"><image src="/static/shop_banner.png" mode="scaleToFill" style="height:288upx;width: 750upx;"></image></view>
				</swiper-item>
			</swiper>
		</view>
		<view style='padding-top:8upx;padding-left:28upx;padding-bottom:28upx;padding-right:28upx;display: flex;flex-wrap: wrap;justify-content: space-between;width: 694upx;'>
			<view style='width: 333upx;background:rgba(255,255,255,1);margin-top:28upx;border-radius:18upx' v-for='(s,i) in product' :key="i">
				
				<view><image @click='detail17(s)' :src="s.cover" mode="" style='width: 333upx;height:282upx;border-radius:34upx'></image></view>
				
				<view style='padding-left:13upx;padding-right:13upx;margin-top:13upx;'>
				<view style="align-items: center;justify-content: space-between;display: flex;">
					<view class='blue' @click='detail17(s.id)'>￥{{s.price/100}}</view>
					<view @click='buy17(s)' style='width:46upx;height:46upx'><image style='width:46upx;height:46upx' src="/static/a.png" mode=""></image></view>
				</view>
				<view @click='detail17(s)' class='span' style="font-size:24upx;padding-left:9upx;padding-right:9upx;height: 128upx;margin-top:9upx">
					<!-- 定制亚克力二维码支付牌语音播报器创意微信收钱收款扫码支付摆台高档 -->
				{{s.name}}
				</view>
				</view>
			</view>
		</view>
		<uni-popup ref="popup" type="center">
			<view style="width:677upx">
			<view  style='background:rgba(255,255,255,1);padding-bottom:78upx;padding-top:67upx;border-radius:36upx 36upx 0upx 0upx;padding-left:46upx;padding-right:46upx'>
				<view @click='close17()' style="width: 38upx;height:38upx;position: absolute;right: 31upx;top:31upx;"><image src="/static/c.png" mode="" style='width: 38upx;height:38upx'></image></view>
				<view  style='text-align: center;font-size:34upx;font-weight: bold;'>{{popupData.name}}</view>
				<view style='display: flex;font-size:30upx;flex-direction: column;justify-content: space-between;height: 364upx;margin-top:46upx;width:588upx;'>
					<view><text>类型：  {{popupData.productCategory.name}}</text></view>
					<view style='display: flex;justify-content: space-between;'>
						<view>数量：  {{popupData.perCount}}个/份</view><view style='display:flex'>
							<view>需要：</view>
							<view style='display: flex;justify-content: space-between;'>
								<counter ref='counter' :num17="num17" @getValue="setNum"></counter>
							</view>
						</view>
					</view>
					<view><text>规格：  {{size}}</text></view>
					<view style="display: flex;align-items: center;" v-for="(s1,i1) in popupData.specification" :key="i1">
						<view>{{s1.name}}</view>
						<view v-for="(s2,i2) in s1.entries" :key="i2" style="display: flex;flex-wrap: wrap;">
							<button @click='chooseSize(i1,i2)' v-show="s2.isSelected" :class="s1.focus == i2 && size != '未选择'?'shop_button shop_button_focus':'shop_button'">{{s2.value}}</button>
						</view>
					</view>
				</view>
			</view>
			<view style='border-radius:0upx 0upx 36upx 36upx;height: 116upx;box-sizing:border-box;background:rgba(247,247,247,1);padding-bottom:28upx;padding-top:28upx;padding-left:46upx;padding-right:46upx'>
				<view style='display: flex;justify-content: space-between;align-items: center;'>
					<view><text class='blue' style='font-size:38upx'>{{popupData.price/100}}元/份</text></view>
					<view><text class='blue' style='font-size:38upx'>总价：{{(popupData.price/100 * num18).toFixed(2)}}</text></view>
					<view><button @click='addTrolley()' style='background:rgba(48,116,255,1);color:rgba(255,255,255,1);border-radius:40upx;font-size:28upx;'>+ 加入购物车</button></view>
				</view>
			</view>
			</view>
		</uni-popup>
		<view @click='trolley()' style='position: fixed;bottom: 38upx;right:38upx;background: rgba(255,255,255,0.8);width: 88upx;height:88upx;border-radius: 50%;display: flex;align-items: center;justify-content: center;'>
			<image src='/static/mine/gouwuche.png' style='height:68upx;width: 68upx;'></image>
			<view v-if='trolleyNum!=0' style='font-size: 24upx;position:absolute;right: 0upx;top:0upx;height:38upx;width: 38upx;border-radius:50%;line-height: 38upx;text-align: center;background: red;color: white;'><text>{{trolleyNum}}</text></view>
			</view>
	</view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	import counter from "@/components/counter/counter.vue"
	export default {
		components: {uniPopup,counter},
		data() {
			return {
				title: 'Hello',
				num17:1,
				num18:1,
				pageNo:1,
				pageSize:6,
				shopId:"",
				product:[],
				popupData:{},
				size:"未选择",
				skus:[],
				skusId:0,
				trolleyNum:0
			}
		},
		onShow(){
			this.getTrolleyNum();
		},
		onLoad() {
			this.getProduct();
			this.getTrolleyNum();
		},
		methods: {
			chooseSize(i1,i2){
				this.popupData.specification[i1].focus = i2;
				this.priceCal();
			},
			getTrolleyNum(){
				let _this = this;
				this.$ajax("/cart/getCart","POST",{}).then(res=>{
					_this.trolleyNum = res.cartItems.length;
				})
			},
			buy17(s){
				this.$refs.counter.setNum(1);
				this.popupData = s;
				this.skusId = 0;
				this.size = "未选择";
				this.$refs.popup.open();
				
			},
			close17(){
				this.$refs.popup.close()
			},
			trolley(){
				uni.navigateTo({
					"url":"/pages/shop/trolley"
				})
			},
			detail17(s){
				uni.navigateTo({
					"url":"/pages/shop/detail?id="+s.id
				})
			},
			atrolley(){
				
				
				
			},
			priceCal(){
				let _this = this;
				this.skus = [];
				uni.showLoading({
					"title":"计算中",
					"mask":"true"
				});
				_this.size = "";
				if(_this.popupData.skus.length != 0){
					_this.popupData.specification.map((s)=>{
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
						_this.popupData.skus.map((s1)=>{
							console.log(s1.specificationValues);
							if(s1.specificationValues == JSON.stringify(_this.skus)){
								_this.popupData.price = s1.price;
								_this.skusId = s1.id;
								
								// console.log(_this.skus);
								console.log(_this.popupData.price);
							}
						})
						setTimeout(function(){
							uni.hideLoading();
						},888)
					},999);
					
				}
				
			},
			setNum(num18){
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
			addTrolley(){
				let _this = this;
				if(_this.skusId != 0){
					
					this.$ajax("/cart/add","POST",{skuId:_this.skusId,count:_this.num18,orderName:'id',orderType:'desc'}).then((res)=>{
						if(res){
							
							uni.showToast({
								"title":"添加成功，商品正在购物车等着你呢",
								"icon":"none"
							})
							_this.getTrolleyNum()
							_this.$refs.popup.close()
						}else{
							uni.showToast({
								"title":"添加失败",
								"icon":"none"
							})
							_this.$refs.popup.close()
						}
					})
				}else{
					uni.showToast({
						"title":"请选择规格",
						"icon":"none"
					})
				}
				
				
				
				
				
				
			},
			getProduct(){
				let _this = this;
				this.$ajax("/product/page","POST",{pageNo:this.pageNo,pageSize:_this.pageSize}).then(res=>{
					console.log(res);
					if(res){
						uni.showToast({
							"title":"加载成功",
							"icon":"none"
						})
						res.list.map((s)=>{
							s.specification = JSON.parse(s.specification)
							_this.product.push(s)
						})
						// _this.product.push(res.list);
						console.log(_this.product)
						_this.pageNo = _this.pageNo + 1
						console.log(_this.pageNo);
					}
					
				})
				
				
			}
		}
	}
</script>

<style>
	.shop_button{
		padding:0upx 18upx;
		/* border: 1upx solid rgba(228,228,228,1); */
		height:67upx;
		line-height:67upx;
		margin-left:18upx;
		/* float: left; */
		
	}
	.content {
		/* display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center; */
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50upx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
