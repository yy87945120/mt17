<template>
	<view class="content">
		<view class='hr'></view>
		<view style='padding-left:28upx'>
			<view class='mine_l' @click="toUrl('/pages/mine/codelist?type=nav&nav=地址导航码')" style=''><view>码上导航：地址导航码</view><view><image src='/static/address_more.png' style='height:23upx;width:13upx'></image></view></view>
			<view class='mine_l' @click="toUrl('/pages/mine/codelist?type=park&nav=停车记录码')"><view>智能找车：停车记录码</view><view><image src='/static/address_more.png' style='height:23upx;width:13upx'></image></view></view>
						
			<view class='mine_l' @click="toUrl('/pages/mine/codelist&nav=自制分享码')" ><view>产品分享码：自制分享码</view><view><image src='/static/address_more.png' style='height:21upx;width:13upx'></image></view></view>
									
			<view class='mine_l' @click="toUrl('/pages/mine/codelist&nav=名片信息码')"><view>名片分享码：名片信息码</view><view><image src='/static/address_more.png' style='height:23upx;width:13upx'></image></view></view>
												
			<view class='mine_l' @click="toUrl('/pages/mine/codelist&nav=自主制作码')"><view>自建二维码：自主制作码</view><view><image src='/static/address_more.png' style='height:23upx;width:13upx'></image></view></view>
			<view class='mine_l' @click="toUrl('/pages/mine/codelist&nav=自主制作抽奖')"><view>码上抽奖：自主制作抽奖</view><view><image src='/static/address_more.png' style='height:23upx;width:13upx'></image></view></view>
			<view class='mine_l' @click="toUrl('/pages/mine/codelist?type=move&nav=挪车二维码')"><view>码上挪车：挪车二维码</view><view><image src='/static/address_more.png' style='height:23upx;width:13upx'></image></view></view>
			<view class='mine_l' @click="toUrl('/pages/mine/codelist&nav=智能寻人码')"><view>码上寻人：智能寻人码</view><view><image src='/static/address_more.png' style='height:23upx;width:13upx'></image></view></view>
			<view class='mine_l' @click="toUrl('/pages/mine/codelist&nav=失物联系码')"><view>码上防丢：失物联系码</view><view><image src='/static/address_more.png' style='height:23upx;width:13upx'></image></view></view>
			<view class='mine_l' @click="toUrl('/pages/mine/codelist&nav=WIFI直连网')"><view>码上连网：WIFI直连网</view><view><image src='/static/address_more.png' style='height:23upx;width:13upx'></image></view></view>
			<view class='mine_l' @click="toUrl('/pages/mine/codelist&nav=视频专用码')"><view>一码视频：视频专用码</view><view><image src='/static/address_more.png' style='height:23upx;width:13upx'></image></view></view>
			<view class='mine_l' @click="toUrl('/pages/mine/codelist&nav=挪车码')"><view>一码图书：电子书专码</view><view><image src='/static/address_more.png' style='height:23upx;width:13upx'></image></view></view>
		</view>
	</view>
</template>

<script>
	export default {
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
			}
		}
	}
</script>

<style>
	.mine_l{
		padding:28upx 0upx;
		align-items:center
	}
</style>
