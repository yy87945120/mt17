<template>
	<view class="content grayBackground" style='padding-bottom:37upx;'>
		<view class='hr'></view>
		<view style='background: white;'>
			
			<view class='mine_l' ><view><text class='requireSpan'>*</text>手机号</view><view><input type="text" v-model='car.phone' placeholder="请输入手机号码"></view></view>
			<view class='mine_l' ><view class="requireSpan1">验证码</view><view ><input v-model="code" type="text" style='text-align:left' placeholder="请输入验证码" ></view><view class='blue' @click='timeStart()'>获取验证码<text v-show="timeState">({{time}}s)</text></view></view>
			<view class='mine_l' ><view class=""><text class='requireSpan'>*</text>车牌号</view><input placeholder="请点此输入" disabled="true" @tap="plateShow=true" v-model.trim="car.carNo"></input>
			
			<plate-input v-if="plateShow" :plate="car.carNo" @export="setPlate" @close="plateShow=false"></plate-input></view>
			
			<view class='mine_l' ><view class="requireSpan1">消息推送</view><view><switch :checked="car.msgNotify" @change='changeMsgNotify'></switch><text v-text="car.msgNotify == 1?'开启':'关闭'"></text></view></view>
		</view>
		<textarea v-show='car.msgNotify == 1' v-model="car.msgContent" placeholder="可编辑短信模板" style='padding:28upx'/>
		<!-- <view style='padding:31upx 31upx 43upx;margin-top:28upx;background:rgba(255,255,255,1)'>
			<view  style='font-size:32upx'>微信二维码</view>
			<an-upload-img :type="wx" @getImgList = "refreshImageList($event,'wx')"></an-upload-img>
		</view> -->
		<view class='hr'></view>
		<view style='background: white;'>
			<view class='mine_l' ><view class="requireSpan1">通知间隔防骚扰</view><view><switch :checked="car.intervalNotify" @change="changeIntervalNotify" /></switch><text v-text="car.intervalNotify == 1?'开启':'关闭'"></text></view></view>
			<view class='mine_l' ><view class="requireSpan1">语音接收</view><view><switch :checked="car.receiveVoice" @change="changeIntervalVoice" /></switch><text v-text="car.intervalVoice == 1?'开启':'关闭'"></text></view></view>
		</view>
		<view class='hr'></view>
		<view style='background: white;'>
			<view class='mine_l' ><view class="requireSpan1">汽车品牌</view><view><input type="text" v-model="car.carBrand" placeholder="选填"></view></view>
			<view class='mine_l' ><view class="requireSpan1">车型</view><view><input type="text" v-model="car.carType" placeholder="选填"></view></view>
						
			<view class='mine_l' ><view class="requireSpan1">购买时间</view><view><input type="text" @click='openDate()' v-model="car.buyTime" placeholder="选填"></view></view>
									
			<view class='mine_l'><view class="requireSpan1">常用地点</view><view><input type="text" @click='openAddress()' v-model="car.commonlyUsedPlace" placeholder="选填"></view></view>
			
			
		</view>
		
		<w-picker
		    mode="region"
		    :defaultVal="['广东省','广州市','从化区']"
		    :areaCode="['44','4401','440117']"
		    @confirm="onConfirm" 
		    ref="picker" 
		    themeColor="#f00">
		</w-picker>
		<button v-if="type!='edit'" @click="pay()" class='normalButton' style='margin-top:28upx'>绑定挪车码</button>
		<!-- <button v-if="type!='edit'" @click="payAll()" class='normalButton' style='margin-top:39upx;width:694upx;'>生成导航码</button> -->
		<button v-if="type=='edit'" @click="saveAll()" class='normalButton' style='margin-top:39upx;width:694upx;'>保存修改</button>
		<link-url></link-url>
		<banner></banner>
		<contact></contact>
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
		
		<w-picker
		    mode="region"
		    :defaultVal="['广东省','广州市','从化区']"
		    :areaCode="['44','4401','440117']"
		    @confirm="onConfirm" 
		    ref="picker" 
		    themeColor="#f00">
		</w-picker>
	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue"; 
	import plateInput from '@/components/uni-plate-input/uni-plate-input.vue'
	import anUploadImg from '@/components/an-uploadImg/an-uploadImg.vue'
	import linkUrl from '@/components/link/link.vue'
	import banner from '@/components/banner/banner.vue'
	import contact from '@/components/contact/contact.vue'
	
	export default {
		components: {
			plateInput,
			anUploadImg,
			wPicker,
			linkUrl,
			banner,
			contact
		},
		data() {
			return {
				title: 'Hello',
				car:{
					"qrcodeNo":"",
					"carNo":"",
					"phone":"",
					"msgNotify":0,
					"msgContent":"",
					"wechatImg":null,
					"intervalNotify":0,
					"receiveVoice":0,
					"carBrand":"",
					"carType":"",
					"buyTime":"",
					"commonlyUsedPlace":"",
					"qrcodeTemplateId":1
				},
				plateShow:false,
				read:false,
				wx:"wx",
				time:60,
				timeState:false,
				qrcode:"",
				code:"",
				type:"create"
			}
		},
		onLoad(option){
			if(option.qrcode){
				this.qrcode=option.qrcode;
				this.getCode();
			}
			
		},
		methods: {
			openDate(){
				this.$refs.picker1.show();
			},
			onConfirm1(date){
				this.car.buyTime = date.result
			},
			openAddress(){
				this.$refs.picker.show();
			},
			onConfirm(address){
				this.car.commonlyUsedPlace = address.result
			},
			
			timeStart(){
				let _this = this;
				if(_this.timeState){
					uni.showToast({
						"title":"请不要频繁发送请求",
						"icon":"none"
					})
					return false;
				}else{
					if(_this.car.phone == ""){
						uni.showToast({
							title:"手机号不能为空",
							"icon":"none"
						})
						return false;
					}
					
					if(!(/^1[3456789]\d{9}$/.test(_this.car.phone))){
						uni.showToast({
							"title":"电话号码格式不正确",
							"icon":"none"
						}) 
						return false; 
					} 
					if(_this.car.carNo == ""){
						uni.showToast({
							title:"车牌号不能为空",
							"icon":"none"
						})
						return false;
					}
					_this.timeState = true;
					_this.$ajax("/sms/send","POST",{number:_this.car.phone,type:1}).then((res)=>{
						if(res.flag){
							_this.token = res.token
							uni.showToast({
								"title":"已经发送请求",
								"icon":"none"
							})
						}
					})
					let timeCount = setInterval(function(){
						if(_this.time == 0){
							_this.timeState = false
							_this.time = 60;
							clearInterval(timeCount); 
						}else{
							_this.time--;
							console.log(_this.time)
						}
					},1000)
				}
				
				
			},
			getCode(){
				let _this = this;
				this.$ajax("/move/detail","POST",{qrcodeNo:_this.qrcode}).then(res=>{
					// _this.car = res.detail
					
					_this.car.qrcodeNo = _this.qrcode;
					_this.car.carNo = res.detail.carNo;
					_this.car.phone = res.detail.phone;
					_this.car.msgNotify = res.detail.msgNotify;
					_this.car.msgContent = res.detail.msgContent;
					_this.car.wechatImg = res.detail.wechatImg;
					_this.car.intervalNotify = res.detail.intervalNotify;
					_this.car.receiveVoice = res.detail.receiveVoice;
					_this.car.carBrand = res.detail.carBrand;
					_this.car.carType = res.detail.carType;
					_this.car.buyTime = res.detail.buyTime;
					_this.car.commonlyUsedPlace = res.detail.commonlyUsedPlace;
					// _this.car.qrcodeTemplateId = res.detail.qrcodeTemplateId;
					
					
					
					
				})
			},
			changeIntervalNotify(e){
				if(e.target.value){
					this.car.intervalNotify = 1
				}else{
					this.car.intervalNotify = 0
				}
			},
			changeIntervalVoice(e){
				if(e.target.value){
					this.car.receiveVoice = 1
				}else{
					this.car.receiveVoice = 0
				}
			},
			changeMsgNotify(e){
				if(e.target.value){
					this.car.msgNotify = 1
				}else{
					this.car.msgNotify = 0;
					this.car.msgContent = "";
				}
				
			},
			refreshImageList(list){
				this.car.wechatImg = list;
			},
			setPlate(plate){
				if(plate.length >= 7) this.car.carNo = plate;
				console.log(this.car.carNo);
				this.plateShow = false
			},
			xy(){
				uni.navigateTo({
					"url":"/pages/xy/xy"
				})
			},
			toUrl(url){
				uni.navigateTo({
					"url":url
				})
			},
			pay(){
				let _this = this;
				if(_this.car.phone == ""){
					uni.showToast({
						title:"手机号不能为空",
						"icon":"none"
					})
					return false;
				}
				
				if(!(/^1[3456789]\d{9}$/.test(_this.car.phone))){
					uni.showToast({
						"title":"电话号码格式不正确",
						"icon":"none"
					}) 
					return false; 
				}
				
				_this.$ajax("/sms/check","POST",{token:_this.token,type:1,code:_this.code,number:_this.car.phone}).then((res)=>{
					
					if(!res.flag){
						uni.showToast({
							"title":"你的验证码错误！",
							"icon":"none"
						})
						return false;
					}else{
						
						console.log(_this.car);
						this.$ajax("/move/apply","POST",_this.car).then((res)=>{
							console.log(res)
							if(res){
								uni.reLaunch({
									"url":"/pages/address/msnc/bdcg?qrcode="+_this.car.qrcodeNo
								})
							}
						})
					}
					
				})
				
				
				
				
				
			}
		}
		
	}
</script>

<style>
	.mine_l{
		padding:28upx 28upx;
		align-items:center
	}
	.mine_l input{
		text-align: right;
		
	}
</style>
