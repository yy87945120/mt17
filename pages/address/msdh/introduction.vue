<template>
	<view class="content" >
		
		<!-- <view class='bottomLogo' style='font-size:27upx;text-align: center;width: ;'>
			本服务由<text style='color:#FFA71A'>码捷达</text>提供 <br>
			服务热线：135 0300 2816
		</view> -->
		<link-url></link-url>
		<banner></banner>
		<contact></contact>
	</view>
</template>

<script>
	import linUrl from "@/components/link/link.vue"
	import contact from "@/components/contact/contact.vue"
	import banner from "@/components/banner/banner.vue"
	export default {
		components:{contact,banner}
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
