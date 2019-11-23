<template>
	<view>
		<view class="an-uploadImg-group">
			<view>
				<view class="an-img" v-for="(item, index) in videoList" :key="index">
					<video :src="item" v-if="item"></video>
					<view class="an-icon-close" @click.stop="handleRemove(index)">
						<uni-icons type="closeempty" size="26" color="#F00"></uni-icons>
					</view>
				</view>
				<view v-if='videoListUrl.length != 1' class="an-img-add" @click="chooseImage">
					<uni-icons type="plusempty" size="81" color="#CCCCCC"></uni-icons>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue'	
	export default {
		name: 'AnUploadVideo',
		components:{
			uniIcons
		},
		data() {
			return {
				videoList: [],
				videoListUrl:[]
			};
		},
		methods:{
			
			chooseImage() {
				let _this = this;
				if(_this.videoListUrl.length == 1){
					uni.showToast({
						"title":"目前仅支持上传一个视频哦",
						"icon":"none"
					})
					return ;
				}
				// if(_this.videoListUrl.length == 1){
				// 	uni.showToast({
				// 		"title":"目前仅支持上传一个视频哦",
				// 		"icon":"none"
				// 	})
				// 	return ;
				// }
				
				
				
				uni.chooseVideo({
				  count: 1,
				  compressed:true,
				  sourceType: ['camera', 'album'],
				  success: function (res) {
						  _this.videoList.push(res.tempFilePath);
						  console.log(res)
						  if(res.size/1024000 > 50){
							  uni.showModal({
							  	title:"上传提示",
								content:"您上传的视频大小大于50MB，我们将收取一定的空间存储费，确认后将继续为您上传",
								success:function(res){
									if(res.confirm){
										let token = uni.getStorageSync('token');
										
										
										uni.showLoading({
											"title":'正在上传',
											"mask":"true"
										})
										uni.uploadFile({
											  url: 'https://majieda.rng1021.top/mjd/uploadFile', //仅为示例，非真实的接口地址
											  filePath: res.tempFilePath,
											  name: 'file',
											  header:{
												'Authorization':token
											  },
											  success: (uploadFileRes) => {
												  uni.hideLoading();
												   _this.videoListUrl.push((JSON.parse(uploadFileRes.data)).url);
													console.log(res)
											  }
										});
									}
								},
								fail:function(){
									return false;
								}
							  })
							  
						  }else{
							  let token = uni.getStorageSync('token');
							  uni.showLoading({
							  	"title":'正在上传',
							  	"mask":"true"
							  })
							  uni.uploadFile({
							  	  url: 'https://majieda.rng1021.top/mjd/uploadFile', //仅为示例，非真实的接口地址
							  	  filePath: res.tempFilePath,
							  	  name: 'file',
							  	  header:{
							  		'Authorization':token
							  	  },
							  	  success: (uploadFileRes) => {
							  		  uni.hideLoading();
							  		   _this.videoListUrl.push((JSON.parse(uploadFileRes.data)).url);
							  	  }
							  });
						  }
						  
				  }
				
				})
			},
			handleRemove(index){
				let il=[], ibl=[];
				for (var i = 0; i < this.videoList.length; i++) {
					if(i != index){
						il.push(this.videoList[i]);
						ibl.push(this.videoListUrl[i])
					}
				}
				this.videoList = il;
				this.videoListUrl = ibl;
			}
		},
		watch:{
			'videoListUrl': {
				handler: function(newVal,oldVal) {
				  this.$emit('getVideoList',newVal);
				},
				deep: true,
				immediate: true
			}
		}
	}
</script>

<style>
	.an-uploadImg-group{
		margin: 36upx 0upx;
		
		/* overflow: hidden; */
	}
	.an-img{
		float: left; 
		margin-right: 10upx;
		height: 567upx; 
		width: 694upx;
		position: relative;
	}
	.an-img-add{
		float: left; 
		margin-right: 10upx; 
		height: 158upx; 
		width: 158upx; 
		background:rgba(255,255,255,1);
		border-radius:6upx;
		border:1upx solid rgba(221,221,221,1);
		/* background-color: #C8C7CC; */
		text-align: center; 
		line-height: 158upx;
	}
	.an-img>image{
		height: 158upx; 
		width: 158upx;
	}
	.an-img>video{
		width: 694upx;
		height:488upx
	}
	.an-icon-close{
		position: absolute; 
		right: 3upx;
		top:3upx;
		background: rgba(255,255,255,0.8);
		border-radius:50%;
		
	}
</style>
