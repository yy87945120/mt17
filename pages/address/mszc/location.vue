<template>
	<view class="content grayBackground" style='padding:28upx 0upx 188upx'>
		<view style='font-size:26upx;padding:28upx 28upx;background: rgba(255,255,255,1);'>
			LBS定位址（自动）： <text @click='getLocation' style='color: rgba(147,147,147,1);'>点击此处手动定位</text><br>
			{{map.address}}（{{map.locationName}}）
			
		</view>
		<map name="" style="width: 100vw;" :markers='markers' :longitude='map.longitude' :latitude ='map.latitude'></map>
		<view style='background: white;'>
			<view class='mine_l' ><view>停车场楼层</view><view><input v-model='map.floor' type="text" placeholder="停车场楼层"></view></view>
			<view class='mine_l' ><view>车位编号</view><view><input v-model='map.parkNo' type="text" placeholder="编码"></view></view>
		</view>
		<view class='imgUpload'>
			<view  class='blue' style='font-size:32upx'>上传停车位置周边实景图：</view>
			<an-upload-img @getImgList = "refreshImageList($event,'room')"></an-upload-img>
			<!-- <view style="margin-top:20upx;width:158upx;height:158upx;background:rgba(248,248,248,1);border-radius:4upx;"></view> -->
		</view>
		<view class='blue' style='font-size:26upx;padding:0upx 28upx 28upx;background: rgba(255,255,255,1);'>
			建议您上传停车周边图、出楼面实景图，方便您更快找到您的爱车
			
		</view>
		<view style='width:750upx;box-sizing:border-box;height:94upx;background: rgba(255,255,255,1);padding:0upx 28upx;border-top:1upx solid rgba(243,243,243,1);display: flex;justify-content: space-between;align-items:center'>
			<view style='font-size:32upx;'>
				录音
			</view>
			<view style='height:47upx;width:47upx'>
				<jsfun-record
				  voicePath=""
				  maxTime="30"
				  minTime="0"
				  @okClick="saveRecord">
					<view class="centerwz"><image src="/static/sound_recording.png" mode="" style='height:47upx;width:47upx'></image></view>
				  </jsfun-record>
				
			</view>
		</view>
		<banner></banner>
		<view class='bottomControlView'>
			<!-- <view @click="toUrl('/pages/address/msnc/index')"><button class='detail_button' style="color:#979797;border:1upx solid #979797;">取消</button></view> -->
			<button @click="apply()" class="normalButton" style=''>生成定位</button>
		</view>
	</view>
</template>

<script>
	
	var amapFile = require('../../../js/amap-wx.js');
	import jsfunRecord from '@/components/jsfun-record/jsfun-record.vue'
	import anUploadImg from "@/components/an-uploadImg/an-uploadImg.vue";
	import banner from "@/components/banner/banner.vue"
	export default {
		components:{
			anUploadImg,jsfunRecord,banner
		},
		data() {
			return {
				title: 'Hello',
				map:{
					longitude:0,
					latitude:0,
					address:'',
					locationName:'',
					floor:'',
					parkNo:'',
					imgs:[],
					record:''
				},
				markers:[{
					 title:'',
					 latitude: 39.9085,
					 longitude: 116.39747,
					 // iconPath: '../../static/address_icon3.png',
					 label:{
					 	content:'文本1',
					 	color:'#F76350',
					 	bgColor:'#fff',
					 	padding:5,
					 	borderRadius:4
					 }
				}],
				voicePath:''
				
			}
		},
		onLoad(option) {
			if(option.status == 1){
				
			}else{
				
			}
			let _this = this;
		
			
			var myAmapFun = new amapFile.AMapWX({key:'480fe41eddd896896634c36549b171df'});
			myAmapFun.getRegeo({ 
				 success: function(data){
					_this.map.longitude = data[0].longitude;
					_this.map.latitude = data[0].latitude;
					_this.map.address = data[0].name;
					_this.map.locationName = data[0].desc;
					_this.markers[0].title = data[0].name;
					_this.markers[0].latitude = data[0].latitude;
					_this.markers[0].longitude = data[0].longitude;
					_this.markers[0].label.content = data[0].name;
					
					
				 }, 
				 fail: function(info){ 
					 uni.showModal({
					 	"title":JSON.stringify(info)
					 })
				 }
			})
			
			
		},
		methods: {
			toUrl(url){
				uni.navigateTo({
					"url":url
				})
			},
			refreshImageList(list){
				this.map.imgs = list;
				console.log(this.map.imgs)
			},
			saveRecord(list){
			
				console.log(list);
				this.voicePath = list;
				let token = uni.getStorageSync("token");
				uni.uploadFile({
							url: 'https://majieda.rng1021.top/mjd/uploadFile', //仅为示例，非真实的接口地址
							filePath: list,
							name: 'file',
							header:{
								'Authorization':token
							},
							success: (uploadFileRes) => {
								uni.showToast({
									"title":"录音上传成功",
									"icon":"none"
								})
								
								this.map.record = JSON.parse(uploadFileRes.data).url;
								console.log(this.map);
							}
				});
				
			},
			
			getLocation(){
				let _this = this;
				uni.chooseLocation({
					success:function(data){
						console.log(data);
						if(data.name){
							_this.map.longitude = data.longitude;
							_this.map.latitude = data.latitude;
							_this.map.address = data.name;
							_this.map.description = data.address;
							_this.markers[0].title = data.name;
							_this.markers[0].latitude = data.latitude;
							_this.markers[0].longitude = data.longitude;
							_this.markers[0].label.content = data.name;
						}else{
							uni.showToast({
								"icon":"none",
								"title":"请选择地图下面的地址，并且按确认"
							})
							setTimeout(function(){
								_this.getLocation()
							},1477)
							
							return ;
						}
						
					},
					fail:function(){
						uni.showToast({
							"icon":"none",
							"title":"如果无法获取准确的定位信息，请打开GPS导航系统"
						})
					}
				})
			},
			preview(i,type){
				let _this = this;
				var url = "";
				if(type == 0){
					
					url = _this.map.imgs
				}else{
					url = _this.map.imgs
				}
				uni.previewImage({
					urls: url
				});
			},
			apply(){
				if(this.map.longitude == 0 || this.map.latitude == 0 || this.map.address == '' || this.map.locationName == ''){
					uni.showToast({
						'title': '你的定位信息不全，请重新定位',
						"icon":"none"
					});
					return false;
				}
				// if(this.map.floor == ""){
				// 	uni.showToast({
				// 		'title': '楼层信息不能为空,请填写',
				// 		"icon":"none"
				// 	});
				// 	return false;
				// }
				// if(this.map.parkNo == ""){
				// 	uni.showToast({
				// 		'title': '停车位信息，不能为空',
				// 		"icon":"none"
				// 	});
				// 	return false;
				// }
				
			
				console.log(this.map);
				this.$ajax('/park/apply',"POST",this.map).then((res)=>{
					console.log(res);
					uni.reLaunch({
						"url":"/pages/address/mszc/index"
					})
					// console.log(res);
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
