<template>
	<view class="content grayBackground" style='padding:28upx'>
		
		
		
		
		<view class='shadow' style='font-size:28upx;backgruond:rgba(255,255,255,1)'>
			<view class='mine_l' ><view class='mine_left'>车牌号</view><view class='mine_right'>{{map.carNo}}</view></view>
			<view class='mine_l' ><view class='mine_left'>楼层 <text style='margin-left:28upx'>{{map.floor}}</text></view><view class='mine_right'>车位编号<text style='margin-left:28upx'>{{map.parkNo}}</text></view></view>
			<view v-if='map.record.length!=0'  style='box-sizing:border-box;height:94upx;padding:0upx 28upx;display: flex;justify-content: space-between;align-items:center'>
				<view style='font-size:32upx;'>
					录音
				</view>
				<view @click='playRecord()' style='height:47upx;width:47upx'>
						
						<image src="/static/sound_recording.png" mode="" style='height:47upx;width:47upx'></image></view>
				
					
				</view>
		
			
			<view class='mine_l' style='justify-content: space-between;'><view class='' style='display: flex;'><view style='width:278upx;text-align:left'>定位地址</view> <view class='mine_right' style='text-align: left;'>{{map.address}}({{map.locationName}})</view></view><view class='blue' @click='openMap()' style='width: 137upx;'>导航</view></view>
			<view class='mine_l' ><view class='mine_left'>备注</view><view class='mine_right'>无</view></view>
			<view class='imgUpload'>
				<view  class='blue' style='font-size:32upx'>停车位置周边实景图：</view>
				<view style='display: flex;justify-content: flex-start;flex-wrap: wrap;margin-top:20upx;min-height:163upx'>
					<view v-for="(s,i) in map.imgs" :key="i" style="margin-right:10upx;margin-top:20upx;width:164upx;height:163upx;background:rgba(248,248,248,1);border-radius:4upx;">
						<image @click='preview(i,0)' style='width:158upx;height:158upx;' :src='s' mode="aspectFit"></image>
					</view>
					<view class='tipWord' style='' v-show="map.imgs.length == 0">暂无上传</view>
				</view>
				
			</view>
			
			<view class='mine_l' style='border-top:1upx solid rgba(243,243,243,1);'><view class='mine_left'>定位时间</view><view class='mine_right' style='text-align:left'>{{map.createTime | date}}</view></view>
		</view>
		
		<banner></banner>
		<contact></contact>
		<view style='background:rgba(255,255,255,1);width:750upx;padding-left:34upx;left:0upx;padding-right:34upx;box-sizing:border-box;padding-top:18upx;padding-bottom:18upx;display: flex;justify-content: space-between;position:fixed;bottom:0upx'>
			<view class='detail_button detail_button_blue' style="width: 168upx;height:88upx;line-height:88upx;text-align:center;padding: 0upx;" @click="share()"><text class='iconfont iconfenxiang' style="font-size:48upx;font-weight: bold;"></text></view>
			<view><button class='detail_button detail_button_blue'  @click="toUrl('/pages/address/mszc/zztcm')" style='margin-left: 28upx;width: 488upx;'>我也要申请停车码</button></view>
		</view>
	</view>
</template>

<script>
	const innerAudioContext = uni.createInnerAudioContext();
	innerAudioContext.autoplay = true;
	
	var amapFile = require('../../../js/amap-wx.js');
	import jsfunRecord from '@/components/jsfun-record/jsfun-record.vue'
	import anUploadImg from "@/components/an-uploadImg/an-uploadImg.vue";
	import banner from "@/components/banner/banner.vue";
	import contact from "@/components/contact/contact.vue";
	export default {
		components:{
			anUploadImg,jsfunRecord,banner,contact
		},
		data() {
			return {
				title: 'Hello',
				map:null,
				qrcode:'',
				markers:[{
					 title:'',
					 latitude: 0,
					 longitude: 0,
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
			if(option.qrcode){
				this.qrcode = option.qrcode
			}
			this.getHistory();
			this.showChoice();
		},
		methods: {
			share(){
				uni.showToast({
					"title":"分享此二维码",
					"icon":"none"
				})
			},
			showChoice(){
				let _this = this;
				uni.showModal({
					"title":"提示",
					"cancelText":"已有定位",
					"confirmText":"重新定位",
					"content":"你已有定位是否重新定位？",
					"success":function(res1){
						if(res1.confirm){
							uni.navigateTo({
								"url":"/pages/address/mszc/location"
							})
							
						}else{
							
							
						}
					}
				})
			},
			openMap(){
				let _this = this;
				console.log(_this.map);
				uni.showToast({
					"title":"打开地图后请点击右下角选择导航软件",
					"icon":"none"
				})
				setTimeout(function(){
					uni.openLocation({
					    latitude: parseFloat(_this.map.longitude),
					    longitude: parseFloat(_this.map.latitude),
					    success: function () {
					        console.log('success');
					    }
					});
				},999)
				
			},
			toUrl(url){
				uni.navigateTo({
					"url":url
				})
			},
			getMap(){
				let _this = this;
				this.$ajax("/park/detail","POST",{"qrcodeNo":_this.qrcode}).then((res)=>{
					console.log(_this.map)
					// let str = "2019-10-31T00:16:21.000+0000";
					
					for(var i in res){
						if(res[i] == null){
							res[i] = '';
						}
					}
					
					
					_this.map = res;
					// console.log(_this.map.record.length)
					// console.log(_this.map)
				})
			},
			getHistory(){
				let _this = this;
				this.$ajax("/park/page","POST",{"pageNo":1,"pageSize":3}).then((res)=>{
					console.log(res);
					_this.map = res.list[0];
				})
			},
			
			playRecord(){
				// if(res.record==''){
					
				// }
				innerAudioContext.src = this.map.record;
				// innerAudioContext.src = "https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3";
				innerAudioContext.onPlay(() => {
				  console.log('开始播放');
				});
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
			}
			
		},
		filters:{
			date(val){
				let date = val.split(".");
				date = date[0].replace("T"," ");
				return date;
			}
		}
	}
</script>

<style>
	.mine_l{
		padding:28upx 28upx;
		align-items:center;
		justify-content: flex-start;
		box-sizing: border-box;
	}
	.mine_l{
		text-align: right;
		
	}
	.mine_left{
		width: 188upx;
		text-align:left
	}
	
</style>
