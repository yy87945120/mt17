<template>
	<view class="content grayBackground" >
		<view style='padding:31upx;margin-top:28upx;display: flex;'>
			<view>
				<image src="/static/mp17.png" style='width:94upx;height:94upx'></image>
			</view>
			<view style='font-size:34upx'>
				我的用户名
			</view>
		</view>
		<view style="display: flex;">
			<view style="flex: 1;">
				<view></view>
				<view>
					<view></view>
					<view></view>
				</view>
			</view>
			<view style="flex: 1;">123</view>
		</view>
		<view style='width:750upx;padding:28upx;box-sizing: border-box;'>
			<view class='banner' style='width:694upx'>
				<banner></banner>
			</view>
		</view>
	</view>
</template>

<script>
	import banner from "@/components/banner/banner.vue"
	export default {
		components:{
			banner
		},
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
	
</style>
