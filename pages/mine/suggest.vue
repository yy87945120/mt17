<template>
	<view class="content grayBackground" style="padding:28upx">
		
		<textarea v-model='introduction' style='background:rgba(255,255,255,1);margin-top:28upx;width:684upx;padding:18upx;box-sizing: border-box;' value="" placeholder="简要描述你要反馈的问题和意见" />
		
		<view class='imgUpload'>
			<view  class='blue' style='font-size:32upx'>图片上传</view>
			<an-upload-img @getImgList = "refreshImageList($event,'live')"></an-upload-img>
		</view>
		
		<input v-model='email' style='margin-top:28upx;height:88upx;background:rgba(255,255,255,1);padding:18upx;box-sizing: border-box;' type="text" placeholder='请输入你的邮箱（必填）'>
		<button @click="pay()" class='normalButton' style='margin-top:28upx'>提交</button>
	</view>
</template>

<script>
	import anUploadImg from '@/components/an-uploadImg/an-uploadImg.vue'
	export default {
		components:{
			anUploadImg
		},
		data() {
			return {
				title: 'Hello',
				introduction:'',
				email:'',
				imageUrl:[]
			}
		},
		onLoad() {

		},
		methods: {
			pay(){
				
					uni.showToast({
						"title":"亲，你的意见已经提交成功啦！",
						"icon":"none"
					})
					
					setTimeout(function(){
						uni.reLaunch({
							"url":"/pages/mine/mine"
						})	
					},1477)
				
				
			},
			toUrl(url){
				uni.navigateTo({
					"url":url
				})
			},
			refreshImageList(list){
				this.imageUrl = list
			}
		}
	}
</script>

<style>
	
</style>
