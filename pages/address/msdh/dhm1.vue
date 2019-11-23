<template>
	<view class="content grayBackground" style='padding:24upx 28upx 88upx;'>
		<view class='shadow' style='position:relative;text-align:center;padding:46upx 0upx 28upx'>
			<image :src='companyInformation.qrcode.url' style='height:193upx;width:193upx;'></image>
			<view style='color:#C7C7C7;font-size:24upx;margin-top:21upx;'>详细地址：{{companyInformation.addressDetail}}</view>
			<view style='color:#C7C7C7;font-size:24upx;margin-top:21upx;'>编号：{{companyInformation.qrcodeNo}}</view>
			<!-- <view class='blue' style='text-decoration: underline;font-size:28upx;margin-top:28upx;'>复制导航地址链接分享</view> -->
			<!-- <button class='normalButton' @click='savePic()'>保存到相册</button> -->
			<saveimg :url="companyInformation.qrcode.url"></saveimg>
			<view class='blue' @click='toTab()' style='border:1upx solid rgba(42,151,255,1);position:absolute;right: 28upx;top:35upx;font-size:20upx;padding:8upx'>我也要申<br>请导航码</view>
			<view @click='collection()' style='position:absolute;right: 33upx;top:127upx;'>
					<view  :class="collectionI?'iconfont iconshoucang1':'iconfont iconshoucang'" style='font-size:51upx'>
						
					</view>
					<view style='color:#888888;font-size:24upx'>{{collectionT}}</view></view>
			
		</view>
		
		
		<view class='dhm_information shadow' style='display:flex;flex-direction: column;justify-content: space-between;margin-top:24upx;box-sizing:border-box;padding:18upx 46upx 60upx 46upx;'>
			<view class='dhm_form'>
				<view class='dhm_form_item1'>定位地点</view>
				<view class='dhm_form_item2'>{{companyInformation.address}}</view>
				<view @click="Nav()" style='height:52upx;width:52upx;background:rgba(255,255,255,1);border-radius: 50%;'>
					<image src="/static/dh.png" style="height:52upx;width:52upx;"></image>
				</view>
			</view>
			<view class='dhm_form'>
				<view class='dhm_form_item1'>详细地址</view>
				<view class='dhm_form_item2'>{{companyInformation.addressDetail}}</view>
			</view>
			<view class='dhm_form'>
				<view class='dhm_form_item1'>地点名称</view>
				<view class='dhm_form_item2'>{{companyInformation.addressName}}</view>
			</view>
			<view class='dhm_form'>
				<view class='dhm_form_item1'>地点类别/行业</view>
				<view class='dhm_form_item2'>{{companyInformation.addressType}}</view>
			</view>
			<view class='dhm_form'>
				<view class='dhm_form_item1'>联系人</view>
				<view class='dhm_form_item2'>{{companyInformation.owner}}</view>
			</view>
			<view class='dhm_form'>
				<view class='dhm_form_item1'>联系电话</view>
				<view class='dhm_form_item2'>{{companyInformation.realPhone}}</view>
				<view @click='phone()' style='height:52upx;width:52upx;background:rgba(255,255,255,1);border-radius: 50%;'>
					<image src="/static/phone.png" style="height:52upx;width:52upx;"></image>
				</view>
			</view>
			
			<view class='dhm_form' v-show="companyInformation.useVirtualPhone == 1">
				<view class='dhm_form_item1'>虚拟电话</view>
				<view class='dhm_form_item2'>{{companyInformation.virtualPhone}}</view>
			</view>
			<view class='dhm_form'>
				<view class='dhm_form_item1'>其他联系方式</view>
				<view class='dhm_form_item2'>{{companyInformation.otherContacts}}</view>
			</view>
			
			
		</view>
		<view class='shadow' style='display:flex;flex-direction: column;justify-content: space-between;padding:49upx 46upx 60upx 46upx;box-sizing: border-box;margin-top:24upx'>
			
			<view class='' style='margin-top:18upx'>
				<view  style='font-size:32upx'>公司简介：</view>
				<view class='info' v-show="companyInformation.info.length == 0">暂无简介</view>
				<view class='info' v-show="companyInformation.info.length != 0">{{companyInformation.info}}</view>
			</view>
			
			<view style='margin-top:28upx;background:rgba(255,255,255,1)'>
				<view  style='font-size:32upx'>公司实景照：</view>
				<view style='display: flex;justify-content: flex-start;flex-wrap: wrap;margin-top:20upx;min-height:158upx'>
					<view v-for="(s,i) in companyInformation.realImgs" :key="i" style="margin-right:10upx;margin-top:20upx;width:158upx;height:158upx;background:rgba(248,248,248,1);border-radius:4upx;">
						<image @click='preview(i,0)' style='width:158upx;height:158upx;' :src='s' mode="aspectFit"></image>
					</view>
					<view class='tipWord' style='' v-show="companyInformation.innerImgs.length == 0">暂无上传</view>
				</view>
				<!-- <view style="margin-top:20upx;width:158upx;height:158upx;background:rgba(248,248,248,1);border-radius:4upx;"></view> -->
			</view>
			<view style='margin-top:28upx;background:rgba(255,255,255,1)'>
				<view  style='font-size:32upx'>室内位置图片：</view>
				<view style='display: flex;justify-content: flex-start;flex-wrap: wrap;margin-top:20upx;min-height:158upx'>
					<view v-for="(s,i) in companyInformation.innerImgs" :key="i" style="margin-right:10upx;margin-top:20upx;width:158upx;height:158upx;background:rgba(248,248,248,1);border-radius:4upx;">
						<image @click='preview(i,1)' style='width:158upx;height:158upx;' :src='s'></image>
					</view>
					<view class='tipWord' style='' v-show="companyInformation.innerImgs.length == 0">暂无上传</view>
				</view>
				
			</view>
			<view style='margin-top:28upx;background:rgba(255,255,255,1);min-height:158upx'>
				<view  style='font-size:32upx'>视频：</view>
				<video v-show="companyInformation.videos.length != 0" style='margin-top:28upx;width: 607upx;height:427upx' :src="companyInformation.videos"></video>
				<view class='tipWord' style='' v-show="companyInformation.videos.length == 0">暂无上传</view>
			</view>
			<view v-show='companyInformation.advImgs.length > 0' @click='link(companyInformation.advLikn)'>
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" style='height: 327upx;width: width: 654upx;'>
				<swiper-item v-for="(s,i) in companyInformation.advImgs" :key="i">
					<view class="swiper-item" style='height: 327upx;width: 654upx;'>
						<image style='height: 327upx;width: 654upx;' :src="s" mode="aspectFit"></image>
					</view>
				</swiper-item>
			</swiper>
			</view>
		</view>
		<link-url></link-url>
		<banner></banner>
	</view>
</template>

<script>
	import uniIcon from '@/components/uni-icons/uni-icons.vue'
	import linkUrl from "@/components/link/link.vue"
	import banner from "@/components/banner/banner.vue"
	import saveimg from "@/components/saveimg/saveimg.vue"
	export default {
		components:{
				uniIcon,linkUrl,banner,saveimg
		},
		data() {
			return {
				collectionI:false,
				title: 'Hello',
				companyInformation:null,
				qrcode:'',
				collectionT:'收藏'
			}
		},
		onLoad(option) {
			if(option.qcode){
				this.qrcode = option.qcode;
			}
			
			if(option.scene){
				this.qrcode = decodeURIComponent(option.scene)
			}
			this.getQcode();
		},
		methods: {
			
			phone(){
				let phone = this.companyInformation.realPhone
				uni.makePhoneCall({
					phoneNumber:phone,
					success:function(){
						uni.showToast({
							"title":"正在拨打电话",
							"icon":"none"
						})
					}
				})
			},
			link(){
				
			},
			Nav(){
				uni.openLocation({
				    latitude: parseFloat(this.companyInformation.longitude),
				    longitude: parseFloat(this.companyInformation.latitude),
				    success: function () {
				        console.log('success');
				    }
				});
			},
			toTab(){
				console.log(1);
				uni.showModal({
					"title":"提示",
					"content":"即将跳转至二维码申请页，请确定",
					"success":function(res){
						if(res.confirm){
							console.log(res)
							uni.reLaunch({
								"url":"/pages/address/msdh/index"
							})
						}
					}
				})
				
			},
			toUrl(url){
				uni.navigateTo({
					"url":url
				})
			},
			getQcode(){
				let _this = this;
				
				this.$ajax("/nav/detail","POST",{qrcodeNo:_this.qrcode}).then((res)=>{
					
					_this.companyInformation = res.detail;
				})
				
				
			},
			preview(i,type){
				let _this = this;
				var url = "";
				if(type == 0){
					
					url = _this.companyInformation.realImgs
				}else{
					url = _this.companyInformation.innerImgs
				}
				uni.previewImage({
					urls: url
				});
			},
			collection(){
				if(this.collectionI){
					this.collectionI = !this.collectionI;
					this.collectionT = '收藏'
					uni.showToast({
						"title":"收藏成功"
					})
				}else{
					this.collectionI = !this.collectionI;
					
					this.collectionT = '取消'
					uni.showToast({
						"title":"取消收藏成功"
					})
				}
				
				
			}
			
		}
	}
</script>

<style>
	.iconshoucang1{
		color: #DD524D;
	}
	.dhm_form{
		display: flex;
		align-items: center;
		margin-top:28upx;
	}
	.dhm_form_item1{
		font-size:28upx;
		width: 127upx;
		
	}
	.dhm_form_item2{
		font-size:26upx;
		color:#888888;
		margin-left:43upx;
		width: 347upx;;
		text-align: left;
	}
	.normalButton{
		width: 500upx;
	}
	/* .shadow{
		width:694upx;
		
		background:rgba(255,255,255,1);
		box-shadow:0upx 12upx 25upx 0upx rgba(221,221,221,0.08);
		border-radius:20upx;
	} */
	.info{
		color:#888888;
		font-size:26upx;
		min-height: 188upx;
		width: 617upx;
		overflow-y: auto;
	}
</style>
