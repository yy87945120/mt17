<template>
	<view class="content grayBackground" >
		
		<button class='normalButton' style='margin-top:48upx' @click='showDh()'>跳转导航</button>
		
		<!-- <uni-popup :show="true" type="center" msg="popup 文字内容">
			<view></view>
		</uni-popup> -->
	</view>
</template>

<script>
	var amapFile = require('../../../js/amap-wx.js');
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
		components: {uniPopup},
		data() {
			return {
				title: 'Hello',
				latitude:0,
				longitude:0
			}
		},
		onLoad(option) {
			this.latitude = parseFloat(option.latitude)
			this.longitude = parseFloat(option.longitude)
			this.txMap()
		},
		methods: {
			toUrl(url){
				uni.navigateTo({
					"url":url
				})
			},
			showDh(){
				let _this = this;
				
				uni.showActionSheet({
					itemList:['显示路线','街景','腾讯地图','百度地图','Apple地图'],
					success: function (res) {
					        console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
							if(tapIndex == 2){
								_this.txMap();
							}else{
								uni.showToast({
									"title":"其他暂未开发"
								})
							}
					},
				})
			},
			txMap(){
				uni.openLocation({
				    latitude: this.latitude,
				    longitude: this.longitude,
				    success: function () {
				        console.log('success');
				    }
				});
			},
			Nav(){
				// var myAmapFun = new amapFile.AMapWX({key:'480fe41eddd896896634c36549b171df'});
					
			}
		}
	}
</script>

<style>
	
</style>
