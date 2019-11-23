<template>
	<view class="content grayBackground" style='padding:28upx 0upx 188upx'>
		
		<view style='background: white;'>
			<view class='mine_l' ><view class="title">车牌号</view>
		<input placeholder="请点此输入" disabled="true" @tap="plateShow=true" v-model.trim="car.carNo"></input>
		<plate-input v-if="plateShow" :plate="car.carNo" @export="setPlate" @close="plateShow=false"></plate-input></view>
			<view class='mine_l' ><view>汽车品牌</view><view><input type="text" v-model="car.carBrand" placeholder="选填"></view></view>
			<view class='mine_l' ><view>车型</view><view><input type="text" v-model="car.carType" placeholder="选填"></view></view>
			<view class='mine_l' ><view>绑定蓝牙设备</view><view><switch :checked="lan" @change="openLan()" /></switch>开启</view></view>
		</view>
		<view style='padding:28upx;font-size:26upx;color:#5C92FD'>
			提示：使用蓝牙自动记录定位，需要绑定蓝牙。强烈建议绑定汽车上音响蓝牙，或者另外购买防丢蓝牙产品绑定后放置车上。商城也有防丢蓝牙出售
		</view>
		<view class='blue' style='margin-top:168upx;font-size:28upx;display: flex;justify-content: center;align-items: center;'>
			<checkbox-group>
					<label>
						<checkbox value="" checked="false" />
					</label>
			                   
			</checkbox-group>
			<view @click='xy()' style='margin-left:5upx;text-decoration: underline;'>已阅读并同意服务协议</view>
		</view>
		<view class='bottomControlView' style=''>
			<!-- <view @click="toUrl('/pages/address/msnc/index')"><button class='detail_button' style="color:#979797;border:1upx solid #979797;">取消</button></view> -->
			<button @click="pay()" class="normalButton" style=''>绑定停车码</button>
		</view>
		<banner></banner>
		<contact></contact>
	</view>
</template>

<script>
	import banner from '@/components/banner/banner.vue'
	import contact from '@/components/contact/contact.vue'
	import plateInput from '@/components/uni-plate-input/uni-plate-input.vue'
	export default {
		components:{
			plateInput,banner,contact
		},
		data() {
			return {
				title: 'Hello',
				car:{
					locationName:'',
					address:'',
					carBrand:'',
					carNo:'',
					carType:'',
					latitude:'',
					longitude:'',
					record:''
				},
				plateNo:'',
				plateShow:false,
				lan:false
			}
		},
		onLoad() {
			this.one();
		},
		methods: {
			openLan(){
				if(this.lan){
					this.lan = !this.lan;
					uni.showToast({
						"title":"取消绑定蓝牙成功",
						"icon":"none"
					})
				}else{
					this.lan = !this.lan;
					uni.showToast({
						"title":"绑定蓝牙成功",
						"icon":"none"
					})
				}
				
			},
			pay(){
				if(this.car.carNo == null || this.car.carNo == ""){
					uni.showToast({
						"title":"车牌号不能为空",
						"icon":"none"
					})
					return false;
				}
				// var arr = [];
				// this.car = this.car.map(res)
				// for(var key in this.car){
					
				// 	if(key != "createTime" && key!="lastModifyTime"){
				// 		let data = {
				// 			key:this.car.key
				// 		}
				// 		arr.push(data)
						
				// 	}
				// }
				let _this = this;
				// console.log(arr);
				this.$ajax('/park/apply',"POST",_this.car).then((res)=>{
					uni.reLaunch({
						"url":"/pages/address/mszc/tcm1?qrcode="+res
					})
					
				})	
			},
			toUrl(url){
				uni.navigateTo({
					"url":url
				})
			},
			xy(){
				uni.navigateTo({
					"url":"/pages/xy/xy"
				})
			},
			one(){
				let _this = this;
				this.$ajax("/park/page","POST",{"pageNo":1,"pageSize":1}).then((res)=>{
					
					// _this.car = res.list[0];
					
					_this.car.locationName = res.list[0].locationName;
					_this.car.address = res.list[0].address;
					_this.car.floor = res.list[0].floor;
					_this.car.parkNo = res.list[0].parkNo;
					
					_this.car.latitude = res.list[0].latitude;
					_this.car.longitude = res.list[0].longitude;
					_this.car.record = res.list[0].record;
					// _this.car = res.list[0].locationName;
					console.log(_this.car);
				})	
			},
			setPlate(plate){
				if(plate.length >= 7) this.car.carNo = plate
				this.plateShow = false
			}
		}
	}
</script>

<style>
	
</style>
