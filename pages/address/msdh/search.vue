<template>
	<view class="content" >
		<!-- <map style='width:750upx;height:300upx'></map> -->
		<map name="" style="width: 100vw;" :markers='markers' :longitude='map.longitude' :latitude ='map.latitude'></map>
		<contact></contact>
	</view>
</template>

<script>
	import contact from "@/components/contact/contact.vue";
	var amapFile = require('../../../js/amap-wx.js');
	export default {
		components:{contact},
		data() {
			return {
				title: 'Hello',
				map:{
					longitude:0,
					latitude:0,
					address:'',
					description:''
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
				}]
			}
		},
		onLoad(option) {
			this.openMap();
		
		},
		methods: {
			openMap(){
				let _this = this;
				 uni.chooseLocation({
					 keyword:"",
					 success: function (res) {
						console.log(res);
						 uni.showModal({
						 	title:"选择地址",
							content:"请确定你要制作的二维码地址",
							success:function(res1){
								// console.log(res1);
								
								_this.map.longitude = res.longitude;
								_this.map.latitude = res.latitude;
								if(res1.confirm){
									uni.navigateTo({
										"url":"/pages/address/msdh/zzdhm?res="+JSON.stringify(res)
									})
								}else{
									uni.navigateTo({
										"url":"/pages/address/msdh/search"
									})
								}
							}
						 })	 
					         
					     }
				 })
				// uni.chooseLocation({
				// 	
				// })
			}
		}
	}
</script>

<style>
	
</style>
