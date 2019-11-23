<template>
	<view>
		<view class="an-uploadImg-group">
			<view>
				<view class="an-img" v-for="(item, index) in imgListUrl" :key="index" @click="perviewImg(index)">
					<image :src="item" v-if="item" mode=""></image>
					<view class="an-icon-close" @click.stop="handleRemove(index)">
						<uni-icons type="closeempty" size="26" color="#F00"></uni-icons>
					</view>
				</view>
				<view v-if="imgListUrl.length != 3" class="an-img-add" @click="chooseImage">
					<uni-icons type="plusempty" size="81" color="#CCCCCC"></uni-icons>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	
	import uniIcons from '@/components/uni-icons/uni-icons.vue'	
	export default {
		name: 'AnUploadImg',
		components:{
			uniIcons
		},
		data() {
			return {
				imgBase64List: [],
				count:0,
				length:0,
				arr:[],
				imgListUrl:[],
				imgList:[],
				size:0
			};
		},
		// props:['type'],
		props:{
			type:{
				type: String,
				default: ""
			},
			imgListUrl1:{
				type:Array,
				default:() => {
					return []
				}
			},
			imgList1:{
				type:Array,
				default:() => {
					return []
				}
			}
		},
		onLoad() {
			console.log("长度："+this.size)
			if(this.type == 'wx'){
				this.size = 1;
				console.log("长度："+this.size)
			}else{
				this.size = 3;
				console.log("长度："+this.size)
			}
			
			this.imgListUrl = this.imgListUrl1;
		},
		methods:{
			chooseImage() {
				
				
				let _this = this;
				
				if(_this.type != "wx"){
					var imgLength =3 - _this.imgList.length;
					if(_this.imgListUrl.length == 3){
						console.log(_this.imgListUrl.length);
						uni.showToast({
							"title":"只能上传3张图片哦",
							"icon":"none"
						})
						return false;
					}
				}else{
					var imgLength = 1 ;
					if(_this.imgListUrl.length == 1){
						console.log(_this.imgListUrl.length);
						console.log(_this.imgListUrl)
						uni.showToast({
							"title":"只能上传1张微信图片哦",
							"icon":"none"
						})
						return false;
					}
				}
				
				uni.chooseImage({
				  count: imgLength,
				  
				  success: (chooseImageRes) => {
					     _this.arr = chooseImageRes;
						 _this.length = _this.arr.tempFilePaths.length;
						 _this.uploadImg();
						
					
					
					
					
				  }
				})
			},
			uploadImg(){
				let _this = this;
				var tempFilesSize = _this.arr.tempFiles[_this.count].size;
				console.log(tempFilesSize);
				if(tempFilesSize / 1024000 > 2){
					 uni.showToast({
						"title":"你第"+(_this.count + 1)+"图片大于2m，不能上传",
						"icon":"none"
					 })
					_this.count++;
					return false;
				}else{				 
				 _this.imgList.push(_this.arr.tempFilePaths[_this.count]);
				 uni.getFileSystemManager().readFile({
					filePath: _this.arr.tempFilePaths[_this.count], //选择图片返回的相对路径
					encoding: 'base64', //编码格式
					success: res => { //成功的回调
						let base64 = 'data:image/jpeg;base64,' + res.data //不加上这串字符，在页面无法显示的哦
						_this.imgBase64List.push(base64);
						console.log(res);
						
						let token = uni.getStorageSync('token');
						uni.showLoading({
							"title":'正在上传',
							"mask":"true"
						})
						
						uni.uploadFile({
									url: 'https://majieda.rng1021.top/mjd/uploadFile', //仅为示例，非真实的接口地址
									filePath: _this.arr.tempFilePaths[_this.count],
									name: 'file',
									header:{
										'Authorization':token
									},
									success: (uploadFileRes) => {
										uni.hideLoading();
										_this.count++;
										_this.imgListUrl.push((JSON.parse(uploadFileRes.data)).url);
										console.log(_this.length);
										console.log(_this.count);
										if(_this.length  == _this.count){
											_this.length = 0;
											_this.count = 0;
											_this.arr = [];
											
										}else{
											_this.uploadImg();
											
										}
									}
						});
						
						
						
					}
				 })
				}
			},
			perviewImg(index){
				let urls = [];
				if(index != -1){
					urls[0] = this.imgList[index];
				}else{
					urls = this.imgList;
				}
				uni.previewImage({
					urls: urls
				});
			},
			handleRemove(index){
				let il=[], ibl=[], ibl1=[];
				for (var i = 0; i < this.imgList.length; i++) {
					if(i != index){
						il.push(this.imgList[i]);
						ibl.push(this.imgBase64List[i]);
						ibl1.push(this.imgListUrl[i])
					}
				}
				this.imgList = il;
				this.imgBase64List = ibl;
				this.imgListUrl = ibl1
			}
		},
		watch:{
			'imgListUrl': {
				immediate: true,
			    handler: function(newVal,oldVal) {
			      this.$emit('getImgList',newVal);
			    },
			    deep: true
			    
			}
			
		}
	}
</script>

<style>
	.an-uploadImg-group{
		margin: 36upx 0upx 00upx;
		overflow: hidden;
	}
	.an-img{
		float: left; 
		margin-right: 10upx;
		height: 158upx; 
		width: 158upx; 
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
	.an-icon-close{
		position: absolute; 
		right: 3upx;
		top:3upx;
		background: rgba(255,255,255,0.8);
		border-radius:50%;
		
	}
</style>
