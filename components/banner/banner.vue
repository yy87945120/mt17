<template>
	<view class="content" >
		<view  style='width:100%;height:247upx;margin-top:50upx;background: #8F8F94;'>
			<swiper :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item>
					<image src="/static/banner1.jpg" mode="" style='width:100%;height:247upx;'></image>
				</swiper-item>
				<swiper-item>
					<image src="/static/banner2.jpg" mode="" style='width:100%;height:247upx;'></image>
				</swiper-item>
				
			</swiper>
			
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

</style>
