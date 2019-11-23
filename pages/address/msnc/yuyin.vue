<template>
	<view class="content grayBackground" style='padding:28upx 28upx 188upx 28upx;'>
		<view class='shadow' style='height:453upx;text-align:center'>
			<text>车主车牌：粤P2103</text>
			<scroll-view scroll-y="true" style='font-size:32upx;' class='blue'>
				<view v-for='(s,i) in list' :key="i">
					
				</view>
			</scroll-view>
		</view>
		<jsfun-record
		  voicePath=""
		  maxTime="15"
		  minTime="5"
		  @okClick="saveRecord"
		>
		    <view class="centerwz">录制语音</view>
		</jsfun-record> 
		<button @tap="endRecord" style='margin-top:60upx'>通知车主</button>
		<linkUrl></linkUrl>
		<banner></banner>
		<contact></contact>
	</view>
</template>

<script>
	import jsfunRecord from '@/components/jsfun-record/jsfun-record.vue'
	import linkUrl from '@/components/link/link.vue'
	import banner from '@/components/banner/banner.vue'
	import contact from '@/components/contact/contact.vue'
	export default {
		components: {jsfunRecord,linkUrl,banner,contact},
		data() {
			return {
				title: 'Hello',
				text: 'uni-app',
				voicePath: [],
				list:['正在录音',"语音已经发送，等待反馈...","语音未接听，短信发送中...","短信发送成功..."]
			}
		},
		onLoad() {
		
      
		},
		methods: {
			saveRecord: function(recordPath) {      
			        console.log("===音频文件地址："+recordPath+"===")
			        //do... 可以使用 uni.uploadFile 接口上传到服务器
			}
		}
	}
</script>

<style>
	
</style>
