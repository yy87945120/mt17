<template>
	<view class="content grayBackground" style='padding-bottom:188upx'>
		<view><image class="logo" src="/static/msnc_banner.jpg" style='width:750upx;height:529upx'></image></view>
		<view class='padding' style='margin-top:-198upx;position: relative;z-index: 99;'>
			<view  style='flex-direction: column; justify-content: space-between;font-size:32upx;display: flex;width:654upx;height:739upx;background:rgba(255,255,255,1);border-radius:20upx;padding:66upx 41upx 119upx 34upx;box-sizing: border-box;'>
				<view class='form_item' style='padding-top:0upx'>
					<view>挪车贴+说明书（套）</view>
					<view></view>
				</view>
				<view class='form_item'><view>收货人</view><input v-model="reciver" type="text" placeholder="请输入收货人名称"></view>
				
				<view class='form_item'><view>联系电话</view><input type="text" v-model='phone' placeholder="请输入联系电话"></view>
				
				<view class='form_item'><view>数量</view><counter num17="1" @getValue="setNum()"></counter></view>
				
				<view class='form_item'><view>详细地址</view><input type="text" v-model='address' placeholder="请选择省市区" :disabled="true" @click="openAddress()"></view>
				
				<view class='form_item' style="border: none;"><view>请输入详细地址</view><input v-model='addressDetail' type="text" placeholder="请输入详细地址"></view>
				
				
			</view>
			<view class='blue' style="margin-top:36upx;font-size:32upx;width:664upx;background:rgba(255,255,255,1);border-radius:20upx;margin-bottom:36upx;line-height: 90upx;text-align: center;">
				<text style="color: red;">原价<text style="text-decoration: line-through;margin-right:18upx">19.99</text></text>   优惠价9.99  邮费:包邮
			</view>
		</view>
		<view style='background:rgba(255,255,255,1);width:682upx;padding-left:34upx;padding-right:34upx;padding-top:18upx;padding-bottom:18upx;display: flex;justify-content: space-between;position:fixed;bottom:0upx;z-index: 99;'>
			<view @click="toUrl('/pages/address/msnc/index')"><button class='detail_button' style="color:#979797;border:1upx solid #979797;">取消</button></view>
			<view @click="pay()"><button class='detail_button detail_button_blue' style='float: right;'>立刻优惠领取</button></view>
		</view>
		<banner></banner>
		<contact></contact>
		<w-picker
		    mode="region"
		    :defaultVal="['广东省','广州市','从化区']"
		    :areaCode="['44','4401','440117']"
		    @confirm="onConfirm" 
		    ref="picker" 
		    themeColor="#f00">
		</w-picker>
		
		<w-picker 
		    mode="date" 
		    startYear="2016" 
		    endYear="2030" 
		    :defaultVal="defaultVal1" 
		    :current="true" 
		    @confirm="onConfirm1" 
		    ref="picker1" 
		    themeColor="#f00" 
		    :selectList="selectList1">
		</w-picker>
	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue"; 
	import contact from "@/components/contact/contact.vue"
	import banner from "@/components/banner/banner.vue"
	import counter from "@/components/counter/counter.vue"
	export default {
		components:{
			contact,counter,banner,wPicker
		},
		data() {
			return {
				title: 'Hello',
				num18:1,
				price:9.99,
				province:"",
				city:"",
				area:"",
				address:'',
				phone:'',
				addressDetail:'',
				reciver:""
				
			}
		},
		onLoad() {

		},
		methods: {
			toUrl(url){
				uni.navigateTo({
					"url":url
				})
			},
			// pay(){
				
			// },
			onConfirm(address){
				console.log(address);
				this.province = address.checkArr[0];
				this.city = address.checkArr[1];
				this.area = address.checkArr[2];
				
				this.address = address.checkArr[0]+address.checkArr[1]+address.checkArr[2]
			},
			openAddress(){
				this.$refs.picker.show()
			},
			setNum(num18){
				this.num18 = num18
			},
			pay(){
				let _this = this
				if(this.reciver == ""){
					uni.showToast({
						"title":"请添加收货人",
						"icon":"none"
					})
					return false;
				}
				if(this.phone == ""){
					uni.showToast({
						"title":"请填写手机",
						"icon":"none"
					})
					return false;
				}

				if(!(/^1[3456789]\d{9}$/.test(_this.phone))){
					uni.showToast({
						"title":"手机号码格式不正确",
						"icon":"none"
					}) 
					return false; 
				}
				if(this.num18 == 0){
					uni.showToast({
						"title":"数量不能为0，请添加数量",
						"icon":"none"
					})
					return false;
				}
				
				if(this.address == ""){
					uni.showToast({
						"title":"请输入详细地址",
						"icon":"none"
					})
					return false;
				}
				
				if(this.addressDetail == ""){
					uni.showToast({
						"title":"想输入详细地址",
						"icon":"none"
					})
					return false;
				}
				// let str = 
				uni.showModal({
					"title":(_this.price*_this.num18)+"元",
					"content":"收货人："+_this.reciver+"("+_this.phone+")\n收货地址："+_this.address+_this.addressDetail,
					"confirmText":"去支付",
					"success":function(res){
						if(res.confirm){
							_this.$ajax("/order/preferential/buy","POST",{skuId:1,count:_this.num18,receiver:_this.reciver,phone:_this.phone,province:_this.province,city:_this.city,area:_this.area,detail:_this.detail,defaultFlag:0}).then(res1=>{
								console.log(res1);
								if(res1.code == '200'){
									console.log(res1);
									uni.requestPayment({
										provider: "wxpay",
										appId: res1.paymentResult.payment.appId,
										timeStamp:res1.paymentResult.payment.timeStamp,
										nonceStr:res1.paymentResult.payment.nonceStr,
										package:res1.paymentResult.payment.package,
										signType:res1.paymentResult.payment.signType,
										paySign:res1.paymentResult.payment.paySign,
										success:function(){
											uni.navigateTo({
												"url":"/pages/shop/payment?orderNo="+res1.paymentResult.no
											})
											// uni.showToast({
											// 	"title":"下单成功"
											// })
											// uni.redirectTo({
											// 	url: '/pages/mine/bill'
											// });
										},
										fail:function(){
											uni.showToast({
												"title":"取消支付",
												"icon":"none"
											})
										}
									})
								}
							})
						}
					}
				})
				// setTimeout(function(){
				// 	uni.redirectTo({
				// 		"url":"../msdh/paymentsuccess"
				// 	})
				// })
				
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
