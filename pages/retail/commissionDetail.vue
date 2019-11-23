<template>
	<view class="content" >
		
		<view class='bottomLogo' style='font-size:27upx;text-align: center;width: ;'>
			本服务由<text style='color:#FFA71A'>码捷达</text>提供 <br>
			服务热线：135 0300 2816
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
