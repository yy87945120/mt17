<template>
	<view class="content grayBackground" >
		
		<view><image class="logo" src="/static/mszc_banner.jpg" style='width:750upx;'></image></view>
		<view style='display: flex;justify-content: center;position: relative;top:-118upx;flex-direction: column;margin-left:-330upx;left:50%;'>
			<view @click="getMap()" class='nav_box' style='background:rgba(108,198,10,1);'>
				<view style='width: 167upx;font-size:28upx;color:rgba(255,255,255,1)'>一键定位</view>
				
				<view><image src="/static/you.png" style='width:26upx;height:26upx;'></image></view>
			</view>
			
			<view @click="toUrl('/pages/address/mszc/zchistory')" class='nav_box' style='background:#3377FF;'>
				<view style='width: 167upx;font-size:28upx;color:rgba(255,255,255,1)'>最近记录</view>
				
				<view><image src="/static/you.png" style='width:26upx;height:26upx;'></image></view>
			</view>
			<view @click="getCar()" class='nav_box' style='background:#3377FF;'>
				<view style='width: 167upx;font-size:28upx;color:rgba(255,255,255,1)'>申请停车码</view>
				<view><image src="/static/you.png" style='width:26upx;height:26upx;'></image></view>
			</view>
		</view>
		<banner></banner>
		<contact></contact>
	</view>
</template>

<script>
	import contact from "@/components/contact/contact.vue";
	import banner from "@/components/banner/banner.vue"
	export default {
		components:{contact,banner},
		data() {
			return {
				title: 'Hello'
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
			getMap(){
				this.$ajax("/park/page","POST",{"pageNo":1,"pageSize":99,"orderType":"desc"}).then((res)=>{
					if(res.list.length == 0){
						uni.navigateTo({
							"url":"/pages/address/mszc/location"
						})
					}else{
						uni.navigateTo({
							"url":"/pages/address/mszc/tcm?qrcode="+res.list[0].qrcodeNo
						})
						
					}
				})
			},
			getCar(){
				uni.navigateTo({
					"url":"/pages/address/mszc/zztcm"
				})
				// this.$ajax("/park/page","POST",{"pageNo":1,"pageSize":99,"orderType":"desc"}).then((res)=>{
				// 	if(res.list.length != 0){
						
				// 	}else{
				// 		uni.showModal({
				// 			"title":"提示",
				// 			"cancelText":"取消",
				// 			"confirmText":"去定位",
				// 			"content":"亲你还没有定位码，请先定位后再绑定你的爱车？",
				// 			"success":function(res1){
				// 				if(res1.confirm){
				// 					uni.navigateTo({
				// 						"url":"/pages/address/mszc/location"
				// 					})
				// 				}else{
				// 					// console.log(res.list);
				// 					// uni.navigateTo({
										
				// 					// 	"url":"/pages/address/mszc/tcm?qrcode="+res.list[0].qrcodeNo
				// 					// })
				// 				}
				// 			}
				// 		})
				// 	}
				// })
			}
		}
	}
</script>

<style>
	.nav_box{
		justify-content: space-between;
	}
	
</style>
