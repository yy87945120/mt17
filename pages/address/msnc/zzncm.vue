<template>
	<view class="content grayBackground" style='padding-bottom:37upx;'>
		<view class='hr'></view>
		<view style='background: white;'>
			<view class='mine_l' ><view class=""><text class='requireSpan'>*</text>车牌号</view><input placeholder="请点此输入" disabled="true" @tap="plateShow=true" v-model.trim="car.carNo"></input>
        <plate-input v-if="plateShow" :plate="car.carNo" @export="setPlate" @close="plateShow=false"></plate-input></view>
			<view class='mine_l' ><view ><text class='requireSpan'>*</text>联系方式</view><view><input type="text" v-model='car.phone' placeholder="请输入手机号码"></view></view>
			
			<view class='mine_l' ><view class="requireSpan1">短信通知</view><view><switch :checked="car.msgNotify" @change='changeMsgNotify'></switch><text v-text="car.msgNotify == 1?'开启':'关闭'"></text></view></view>
		</view>
		<textarea v-show='car.msgNotify == 1' v-model="car.msgContent" placeholder="可编辑短信模板" style='padding:28upx;min-height: 188upx;'/>
		<view style='padding:31upx 31upx 43upx;margin-top:28upx;background:rgba(255,255,255,1)'>
			<view  style='font-size:32upx'>微信二维码</view>
			<an-upload-img :type="wx" @getImgList = "refreshImageList($event,'wx')"></an-upload-img>
		</view>
		<view class='hr'></view>
		<view style='background: white;'>
			<view class='mine_l' ><view class="requireSpan1">通知间隔防骚扰</view><view><switch :checked="car.intervalNotify" @change="changeIntervalNotify" /></switch><text v-text="car.intervalNotify == 1?'开启':'关闭'"></text></view></view>
			<view class='mine_l' ><view class="requireSpan1">消息推送</view><view><switch :checked="car.receiveVoice" @change="changeIntervalVoice" /></switch><text v-text="car.intervalVoice == 1?'开启':'关闭'"></text></view></view>
		</view>
		<view class='hr'></view>
		<view style='background: white;'>
			<view class='mine_l' ><view class="requireSpan1">汽车品牌</view><view><input @click="chooseCarBrand()" type="text" :disabled="true" v-model="car.carBrand" placeholder="选填"></view></view>
			<view class='mine_l' ><view class="requireSpan1">车型</view><view><input @click="chooseCarBrand()" type="text" :disabled="true" v-model="car.carType" placeholder="选填"></view></view>
						
			<view class='mine_l' ><view class="requireSpan1">购买时间</view><view><input type="text" v-model='car.buyTime' :disabled="true" @click='openDate()' placeholder="选填"></view></view>
									
			<view class='mine_l'><view class="requireSpan1">常用地点</view><view><input type="text" :disabled="true" @click='openAddress()' v-model="car.commonlyUsedPlace" placeholder="选填"></view></view>

			
			
		</view>
		<view style='padding:31upx 31upx 43upx;background: white;'>
			<view class='blue' style='font-size:32upx'>样式模板选择：</view>
			<view style="margin-top:20upx;width:158upx;height:158upx;background:rgba(248,248,248,1);border-radius:4upx;"></view>
		</view>
		<view class='blue' style='margin-top:68upx;font-size:28upx;display: flex;justify-content: center;align-items: center;'>
			<checkbox-group>
					<label>
						<checkbox @click='read = !read' value="" :checked="read" />
					</label>
			                   
			</checkbox-group>
			<view @click='xy()' style='margin-left:5upx;text-decoration: underline;'>已阅读并同意服务协议</view>
		</view>
		
		<button @click="pay()" class='normalButton' style='margin-top:28upx'>下一步</button>
		<!-- <link-url></link-url> -->
		<banner></banner>
		
		<w-picker
		    mode="linkage"
		   :level="2"  
		   :value="['1','1001']"
		   :defaultVal="['广汽三菱','劲炫ASX']"
		   @confirm="onConfirm2"
		   ref="linkage"
		   :linkList="linkList"
		   themeColor="#f00">
		</w-picker>
		<!-- <contact></contact> -->
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
				linkList:[
					{
						label:"广汽三菱",
						value:1,
						children:[
							{
								label:"劲炫ASX",
								value:1001
							},
							{
								label:"欧蓝德",
								value:1002
							},
							{
								label:"奕歌",
								value:1003
							},
							{
								label:"帕杰罗·劲畅",
								value:1004
							},
							{
								label:"帕杰罗",
								value:1005
							}
						]
					},
					{
						label:"三菱(进口)",
						value:2,
						children:[
							{
								label:"帕杰罗(进口)",
								value:2001
							},
							{
								label:"ASX劲炫(进口)",
								value:2002
							},
							{
								label:"欧蓝德(进口)",
								value:2003
							}
						]
					},
					{
						label:"东南汽车",
						value:3,
						children:[
							{
								label:"蓝瑟",
								value:3001
							},
							{
								label:"戈蓝",
								value:3002
							},
							{
								label:"翼神",
								value:3003
							}
						]
					}
				],
				plateShow:false,
				read:false,
				wx:"wx",
				time:60,
				timeState:false,
				token:"",
				code:""
				
			}
		},
		onLoad(){

		},
		methods: {
			onConfirm2(brand){
				this.car.carBrand = brand.checkArr[0];
				this.car.carType = brand.checkArr[1]
			},
			getCarBrand(){
				let _this = this;
				this.$ajax("/car/brand/page","POST",{pageNo:1,pageSize:99}).then(res=>{
					_this.linkList = res.list
				})
			},
			chooseCarBrand(){
				this.$refs.linkage.show();
			},
			openDate(){
				this.$refs.picker1.show();
			},
			onConfirm1(date){
				console.log(date);
				this.car.buyTime = date.result
			},
			openAddress(){
				this.$refs.picker.show();
			},
			onConfirm(address){
				this.car.commonlyUsedPlace = address.result
			},
			getCode(){
				// if(){
					
				// }
				// this.$ajax("/sms/send",{number:this.phone})
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
				if(_this.car.carNo == ""){
					uni.showToast({
						title:"车牌号不能为空",
						"icon":"none"
					})
					return false;
				}
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
				
				
				if(this.read){
					if(this.car.wechatImg == null){
						this.car.wechatImg = [];
					}
					this.$ajax("/move/apply","POST",this.car).then(res=>{
						// uni.setStorageSync("carMessage",JSON.stringify(res));
						uni.reLaunch({
							"url":"/pages/address/msnc/qcodesuccess?qrcode="+res
						})
						
					})
	
				}else{
					uni.showToast({
						"title":"请先勾选已阅读协议内容",
						"icon":"none"
					})
				}
				
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
