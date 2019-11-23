<template>
	<view class="content">
		<view >
			<view class='hr'></view>
			<view style='height:308upx;background:rgba(255,255,255,1);width: 750upx;display: flex;flex-direction: column;align-items: center;padding-top:47upx;'>
				<view v-if='user' style='width: 151upx;height:151upx;border-radius:50%;'><image :src="user.user.avatarUrl" style='width: 151upx;height:151upx;border-radius:50%;'></image></view>
				<text v-if='user' style='font-size:32upx;margin-top:13upx'>{{user.user.nickName}}</text>
				<text v-if='user' class='blue' style='font-size:32upx;margin-top:13upx'>积分：999</text>
				<view v-if='!user'>
					<button open-type="getUserInfo" style="width: 476upx;margin-top:91upx;" @getuserinfo="getUserInfo1" type="primary">授权登陆</button>
				</view>
			</view>
			<view class='hr'></view>
			<view style='padding-left:28upx'>
				<view class='mine_l' @click="toUrl('/pages/mine/bill')">
					<view class="mine-icon">
						<view>
							<image src="/static/mine/dingdan.png" mode=""></image>
						</view>
						<text style=''>我的订单</text>
					</view>
					<view>
						<image src='/static/address_more.png' style='height:23upx;width:13upx'></image>
					</view>
				</view>
				<view class='mine_l' @click="toUrl('/pages/shop/trolley')">
					<view class="mine-icon">
						<view>
							<image src="/static/mine/gouwuche.png" mode=""></image>
						</view>
						<text style=''>我的购物车</text>
					</view>
					<view>
						<image src='/static/address_more.png' style='height:23upx;width:13upx'></image>
					</view>
				</view>
				<view class='mine_l' @click="toUrl('/pages/mine/mycode')">
					<view class="mine-icon">
						<view style='background:rgba(255,255,255,1)'>
							<image src="/static/shop_qcode.jpg" mode="" ></image>
						</view>
						<text style=''>我的二维码</text>
					</view>
					<view>
						<image src='/static/address_more.png' style='height:23upx;width:13upx'></image>
					</view>
				</view>
				<view class='mine_l' @click="toUrl('/pages/mine/address')">
					<view class="mine-icon">
						<view>
							<image src="/static/mine/dizhi.png" mode="" style='height:38upx'></image>
						</view>
						<text style=''>我的地址</text>
					</view>
					<view>
						<image src='/static/address_more.png' style='height:23upx;width:13upx'></image>
					</view>
				</view>
				
				<view class='mine_l' @click="toUrl('/pages/mine/collection')">
					<view class="mine-icon">
						<view>
							<image src="/static/mine/blue-collect.png" mode=""></image>
						</view>
						<text style=''>我的收藏</text>
					</view>
					<view>
						<image src='/static/address_more.png' style='height:23upx;width:13upx'></image>
					</view>
				</view>
				
				<view class='mine_l' @click="toUrl('/pages/mine/mycode')">
					<view class="mine-icon">
						<view>
							<image src="/static/mine/fenxiaohetong.png" mode=""></image>
						</view>
						<text style=''>我的分销</text>
					</view>
					<view>
						<image src='/static/address_more.png' style='height:23upx;width:13upx'></image>
					</view>
				</view>
				
				<view class='mine_l' @click="toUrl('/pages/introduction/introduction?code=FAQ')">
					<view class="mine-icon">
						<view>
							<image src="/static/mine/changjianwenti.png" mode=""></image>
						</view>
						<text style=''>常见问题</text>
					</view>
					<view>
						<image src='/static/address_more.png' style='height:23upx;width:13upx'></image>
					</view>
				</view>
							
				<view class='mine_l' @click="toUrl('/pages/mine/suggest')">
					<view class="mine-icon">
						<view>
							<image src="/static/mine/drxx54.png" mode=""></image>
						</view>
						<text style=''>意见反馈</text>
					</view>
					<view>
						<image src='/static/address_more.png' style='height:23upx;width:13upx'></image>
					</view>
				</view>
				
				<view class='mine_l' @click="toUrl('/pages/introduction/introduction?code=about')">
					<view class="mine-icon">
						<view>
							<image src="/static/mine/guanyuwomen.png" mode=""></image>
						</view>
						<text style=''>关于码捷达二维码</text>
					</view>
					<view>
						<image src='/static/address_more.png' style='height:23upx;width:13upx'></image>
					</view>
				</view>
				
									
			
													
				
				
				
			</view>
		</view>
		
		<!-- <uni-popup type="center" ref='popup' @hidePopup='checkRegister()'>
			<view style="width: 587upx;padding:28upx;background:rgba(255,255,255,1);border-radius:18upx;">
				<view style='line-height: 67upx;'>授权登陆</view>
				<view style='margin-top:28upx;margin-bottom:28upx;'>亲，你还未是会员用户，请点击下方按钮授权登陆</view>
				<button open-type="getUserInfo" style="width: 476upx" @getuserinfo="getUserInfo1" type="primary">授权登陆</button>
			</view>
			
		</uni-popup> -->
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				title: 'Hello',
				user:null
			}
		},
		onLoad() {
			// this.user = JSON.parse(uni.getStorageInfoSync('user'));
			this.getUserData()
			// getUserInfo1
			// let _this = this;
			// uni.getStorage({
			// 	key:"code",
			// 	success:function(res){
			// 		_this.user = res.data;
			// 		console.log(res);
			// 	}
			// })
			
		},
		methods: {
			myaddress(){
				uni.navigateTo({
					"url":"/pages/mine/address"
				})
			},
			getUserData(){
				let _this = this;
				this.$ajax("/userInfo","POST",{}).then(res=>{
					if(res.vip){
						_this.user = res
					}
					
					console.log(res);
				})
				// let user = uni.getStorageInfoSync("user")
				
				// this.user = user;
				
			},
			bill17(){
				uni.navigateTo({
					"url":"/pages/shop/bill"
				})
			},
			getUserInfo1(){
				let _this = this
				uni.getUserInfo({
						provider:"weixin",
						success:function(res){
							_this.$ajax('/wxRegister','POST',{encryptedData:res.encryptedData,iv:res.iv}).then((registerRes)=>{
								  if(registerRes){
									 uni.setStorageSync('user',JSON.stringify(res));
									 _this.user = res
									 // uni.reLaunch({
									 // 	"url":"/pages/mine/mine"
									 // })
								  }else{
									  uni.showToast({
									  	"title":"获取用户信息失败，请重新点击",
									  	"icon":"none"
									  })
								  }															  
							})
							
						}	
						
					})
				
			},
			toUrl(url){
				uni.navigateTo({
					"url":url
				})
			},
			login(){
				this.$login();
			}
		}
	}
</script>

<style>
	.mine_l{
		padding:28upx 0upx;
		align-items:center
	}
	.mine-icon{
		display: flex;
		
	}
	.mine-icon image{
		width:48upx;
		height:48upx
	}
	.mine-icon text{
		margin-left:28upx
	}
</style>
