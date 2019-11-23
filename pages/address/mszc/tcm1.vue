<template>
	<view class="content grayBackground" style='padding:28upx'>
		<view class='shadow' style='position:relative;text-align:center;padding:48upx 0upx 28upx'>
			<view>停车码在线生成</view>
			<view style='color:#C7C7C7;font-size:24upx;margin-top:21upx;'>编号：{{map.qrcodeNo}}</view>
			<image :src='map.qrcode.url' style='height:277upx;width:277upx;margin-top:28upx'></image>
			<!-- <view style='color:#888888;font-size:28upx;margin-top:31upx'>此二维码可以扫描，可下载与打印，可识别</view> -->
			<saveimg :url='map.qrcode.url'></saveimg>
		</view>
		<view class='shadow' style='font-size:28upx;margin-top:28upx'>
			<view class='mine_l' ><view class='mine_left'>你的爱车车牌号</view><view class='mine_right'>{{map.carNo}}</view></view>
			<view class='mine_l' ><view class='mine_left'>汽车品牌 </view><view class='mine_right'>{{map.carBrand}}</view></view>
			<view class='mine_l' ><view class='mine_left'>车型</view><view class='mine_right'>{{map.carType}}</view></view>
			<view class='mine_l' ><view class='mine_left'>绑定蓝牙设备</view><view class='mine_right' style='text-align:left'>是</view></view>
		</view>
		<button style='margin-top:28upx' class='normalButton' @click="toUrl('/pages/address/mszc/zchistory')">
			查看停车记录
		</button>
		<button style='margin-top:28upx' class='normalButton' @click="toUrl('/pages/mine/codelist?type=park&nav=停车码')">
			进入我的个人中心
		</button>
		<button style='margin-top:28upx' class='normalButton' @click="openTip()">
			生成桌面小程序
		</button>
		<banner></banner>
		<contact></contact>
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
	import saveimg from "@/components/saveimg/saveimg.vue";
	export default {
		components:{
			anUploadImg,jsfunRecord,banner,contact,saveimg
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
			if(option.qrcode){
				this.qrcode = option.qrcode
			}
			if(option.scene){
				this.qrcode = decodeURIComponent(option.scene)
			}
			this.getMap();
			
		},
		methods: {
			openTip(){
				uni.showModal({
					"showCancel":"false",
					"title":"提示",
					"content":"安卓用户可以点击右上角第一个图标,在菜单中，选择添加到桌面小程序。"
				})
			},
			toUrl(url){
				uni.navigateTo({
					"url":url
				})
			},
			getMap(){
				let _this = this;
				this.$ajax("/park/detail","POST",{"qrcodeNo":_this.qrcode}).then(res=>{
					console.log(res.detail);
					
					_this.map = res.detail;
					console.log(_this.map.detail)
				})
			},
			
			// playRecord(){
			// 	innerAudioContext.src = this.map.record;
			// 	// innerAudioContext.src = "https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3";
			// 	innerAudioContext.onPlay(() => {
			// 	  console.log('开始播放');
			// 	});
			// },
			
			
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
		width: 288upx;
		text-align:left
	}
	/* .mine_right{
		margin-right:47upx
	} */
</style>
