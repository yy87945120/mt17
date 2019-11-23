<template>
	<view class="content grayBackground" style='padding-bottom:88upx'>
		
		
		<view style='padding:37upx 28upx;justify-content: space-between;display: flex;align-items: center;box-sizing: border-box;width: 750upx;' v-for='(s,i) in 4' :key="i">
			<view style='display:flex;align-items: center;'>
				<view><image src="/static/4s.png" style='width:117upx;height:117upx;border-radius:10upx;'></image></view>
				<view style="margin-left:18upx">
					<view style='font-size:28upx;font-weight:bold'>广州艺兴丰田萝岗分公司</view>
					<view style='color:#888888;font-size:22upx'>
						<view>5.3公里 <text>佛山市禅城区大高路290号</text></view>
						<view>233人去过 <text style="margin-left:28upx">一汽丰田4S店</text></view>
					</view>
					
				</view>
			</view>
			<view style='display: flex;'>
				<view style="margin-right:28upx"><image src="/static/phone.png" style='width:52upx;height:52upx'></image></view>
				<view ><image src="/static/dh.png" style='width:52upx;height:52upx'></image></view>
			</view>
		</view>
		<banner></banner>
		<banner></banner>
		<contact></contact>
	</view>
</template>

<script>
	import searchInput from "@/components/bm-searchInput/bm-searchInput.vue"
	import contact from "@/components/contact/contact.vue"
	import banner from "@/components/banner/banner.vue"
	export default {
		components:{
			contact,banner,searchInput
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
