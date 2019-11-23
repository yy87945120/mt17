<template>
	<view class="content" >
		<button class='normalButton' @click='savePic()' style='margin-top:28upx'>保存到相册</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		props:['url'],
		onLoad() {

		},
		methods: {
			toUrl(url){
				uni.navigateTo({
					"url":url
				})
			},
			savePic(){
				let url = this.url;
				console.log(url);
				uni.showLoading({
					"title":"下载中"
				})
				uni.downloadFile({
						url: url,
						success: (res) =>{
							if (res.statusCode === 200){
								uni.saveImageToPhotosAlbum({
									filePath: res.tempFilePath,
									success: function() {
										uni.showToast({
											title: "保存成功",
											icon: "none"
										});
										uni.hideLoading();
									},
									fail: function() {
										uni.showToast({
											title: "保存失败，请稍后重试",
											icon: "none"
										});
										uni.hideLoading();
									}
								});
							}
						}
					})
			
			},
		}
	}
</script>

<style>
	
</style>
