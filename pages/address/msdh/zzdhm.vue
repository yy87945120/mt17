<template>
	<view class="content grayBackground" style='padding-bottom:87upx;'>
		<view style='text-align:center;font-size:28upx;height:93upx;background:rgba(248,248,248,1);line-height:93upx'>第二步：填写标注说明</view>
		<view style='background: white;display: flex;flex-direction: column;'>
			<view class='mine_l' ><view class='mine_l_label' style="width:437upx"><text class='requireSpan' space="emsp">*</text>定位地点</view><view style='margin-left:18upx'>{{companyInformation.address}}</view><view  @click='toSearch()'><uni-icon type="refreshempty" size="26" class='blue' color=""></uni-icon></view></view>
			<view class='mine_l' ><view class='mine_l_label'><text class='requireSpan'>*</text>详细地址</view><view><input style='width:497upx' v-model='companyInformation.addressDetail' type="text" placeholder="请输入地点信息"></view></view>
			<view class='mine_l' ><view class='mine_l_label'><text class='requireSpan'>*</text>地点名称</view><view><input style='width:497upx' v-model='companyInformation.addressName'  type="text" placeholder="用于二维码标识显示"></view></view>
			<view class='mine_l' ><view class='mine_l_label requireSpan1' style='width:348upx'><text class='requireSpan '>&nbsp;&nbsp;&nbsp;&nbsp;    </text>&nbsp; 地址类别/行业</view><view><input style='width:467upx' v-model='companyInformation.addressType' type="text" placeholder="如饭店、汽车维修、加油站"></view></view>
			<view class='mine_l' ><view class='mine_l_label requireSpan1'><text class='requireSpan'></text>联系人</view><input style='width:497upx' v-model='companyInformation.owner' type="text" placeholder="请输入联系人名字"></view>
			<view class='mine_l' ><view class='mine_l_label requireSpan1'><text class='requireSpan'></text>联系电话</view><input style='width:497upx' v-model='companyInformation.realPhone' type="text" placeholder="请输入联系人电话"></view>
			<!-- <view class='mine_l' ><view class='mine_l_label'><text class='requireSpan'>*</text>验证电话</view><input style='width:497upx' v-model='validatePhone' type="text" placeholder="请输入验证电话"></view> -->
			<!-- <view class='mine_l' ><view class='mine_l_label requireSpan1'><text class='requireSpan'></text></view><input style='width:497upx' v-model='companyInformation.contact' type="text" placeholder="请输入qq,邮箱或者微信"></view> -->
		</view>
		<view class='imgUpload'>
			<view  class='blue' style='font-size:32upx'>其他联系方式：</view>
			<textarea value="" maxlength="400" v-model='companyInformation.otherContacts' style='padding:28upx 0upx;height:147upx;width: 684upx;' placeholder="请输入其他联系方式,如qq,微信"/>
		</view>
		<view class='imgUpload'>
			<view  class='blue' style='font-size:32upx'>室外实景图片：</view>
			<an-upload-img :imgListUrl1="companyInformation.realImgs" @getImgList = "refreshImageList($event,'live')"></an-upload-img>
		</view>
		<view class='imgUpload' >
			<view  class='blue' style='font-size:32upx'>室内位置图片：</view>
			<an-upload-img :imgListUrl1="companyInformation.innerImgs" @getImgList = "refreshImageList($event,'room')"></an-upload-img>
			
		</view>
		
		<view class='imgUpload' style='height:567upx;overflow: hidden;'>
			<view  class='blue' style='font-size:32upx;'>视频介绍：</view>
			<an-upload-video @getVideoList = "refreshVideoList"></an-upload-video>
		</view>
		<view class='imgUpload'>
			<view  class='blue' style='font-size:32upx'>信息资讯：</view>
			<textarea value="" maxlength="400" v-model='companyInformation.info' style='padding:28upx 0upx;width: 684upx;' placeholder="宣传自已店铺或者公司的简介，不超400字"/>
		</view>
		<!-- <view class='imgUpload'>
			<view  class='blue' style='font-size:32upx'>其他信息：</view>
			<textarea value="" maxlength="400" v-model='companyInformation.explain' style='padding:28upx 0upx;width: 684upx;' placeholder="路线说明及其他信息，不超400字"/>
		</view> -->
		<view class='hr'></view>
		<view @click='blade()' style='padding:31upx 31upx 43upx;background: white;'>
			<view class='blue' style='font-size:32upx'>样式模板选择：</view>
			<view style="margin-top:20upx;width:158upx;height:158upx;background:rgba(248,248,248,1);border-radius:4upx;"></view>
		</view>
		<view class='blue' style='margin-top:68upx;font-size:28upx;display: flex;justify-content: center;align-items: center;'>
			<checkbox-group>
					<label>
						<checkbox @click='read = !read' value="" :checked="read" />
					</label>
			                   
			</checkbox-group>
			<view @click='xy()' style='margin-left:5upx;text-decoration: underline;'>已阅读并同意服务协议</view>
		</view>
		<button v-if="type!='edit'" @click="payAll()" class='normalButton' style='margin-top:39upx;width:694upx;'>生成导航码</button>
		<button  v-if="type=='edit'" @click="saveAll()" class='normalButton' style='margin-top:39upx;width:694upx;'>保存修改</button>
		
		<view class='blue' style='margin-top:67upx;padding:0upx 28upx;font-size:28upx;height:93upx;background:rgba(248,248,248,1);line-height:93upx'>付费购买可以显示以下信息：</view>
		<view class='imgUpload' style='position:relative'>
			<view  class='blue' style='font-size:32upx'>推广优惠活动</view>
			<view  v-if='companyInformation.buyAdv == 0' @click='tip()' style='position:absolute;width: 100vh;height: 100%;z-index: 99;background:rgba(77,77,77,0);'></view>
			<an-upload-adv :imgListUrl1="companyInformation.advImg"  ref="uploadAdv" @getImgList = "refreshImageList($event,'activity')"></an-upload-adv>
			<!-- anUploadAdv -->
		</view>
		<view class='blue' style='display:flex;justify-content: space-between;align-items:center; padding:0upx 28upx;font-size:28upx;height:93upx;background:rgba(248,248,248,1);line-height:93upx'>
			活动链接
			<view><input type="text" v-model="companyInformation.advLikn" placeholder="请输入活动链接"></view>
		</view>
		<view style='width:750upx;height:94upx;background:rgba(255,255,255,1);padding:15upx 28upx;box-sizing:border-box'>
			<button v-text="companyInformation.buyAdv == 0?'开启广告位':'取消广告位'" @click="buyAdv17()" style='float:right;color:rgb(255,255,255);font-size:28upx;width:228upx;height:64upx;line-height:64upx;background:rgba(51,119,255,1);border-radius:13upx;'>
				
			</button>
		</view>
		<banner></banner>
		<contact></contact>
	</view>
</template>

<script>
	import anUploadImg from '@/components/an-uploadImg/an-uploadImg.vue'
	import anUploadVideo from '@/components/an-uploadVideo/an-uploadVideo.vue'
	import anUploadAdv from '@/components/an-uploadAdv/an-uploadAdv.vue'
	import uniIcon from '@/components/uni-icons/uni-icons.vue'
	import banner from '@/components/banner/banner.vue'
	import link from '@/components/link/link.vue'
	import contact from '@/components/contact/contact.vue'
	export default {
		components:{
		        anUploadImg,
				anUploadVideo,
				anUploadAdv,
				uniIcon,
				banner,
				contact
		},
		data() {
			return {
				title: 'Hello',
				par:{
					address:'',
					name:'',
					longitude:0,
					latitude:0
				},
				decode:true,
				img:[
					{
						type:'room'
					}
				],
				companyInformation:{
					innerImgs:[],
					realImgs:[],
					videos:[],
					info:'',
					realPhone:'',
					owner:'',
					address:'',
					addressType:'',
					addressDetail:'',
					addressName:'',
					longitude:0,
					latitude:0,
					advImg:[],
					advLikn:'',
					buyAdv:0,
					contack:'',
					explain:'',
					codeName:'',
					otherContacts:''
				},
				validatePhone:"",
				read:false,
				type:'create'
				
				
			}
		},
		
		onLoad(option) {	
			let _this = this;
			if(option.res){
				this.par = JSON.parse(option.res);
			}
			
			if(option.data){
				this.type = 'edit';
				const s = JSON.parse(decodeURIComponent(option.data));
				console.log(s);
				for(var key in s){
					_this.companyInformation[key] = s[key];
				}
				// companyInformation:{
				// 	innerImgs:[],
				// 	realImgs:[],
				// 	videos:[],
				// 	info:'',
				// 	realPhone:'',
				// 	owner:'',
				// 	address:'',
				// 	addressType:'',
				// 	addressDetail:'',
				// 	addressName:'',
				// 	longitude:0,
				// 	latitude:0,
				// 	advImg:[],
				// 	advLikn:'',
				// 	buyAdv:0,
				// 	contack:'',
				// 	explain:'',
				// 	codeName:'',
				// 	otherContacts:''
				// },
			}
			
		},
		onShow(){
			
			
		},
		methods: {
			xy(){
				uni.navigateTo({
					"url":"/pages/xy/xy"
				})
			},
			blade(){
				uni.showToast({
					"title":"此功能尚未开发，敬请期待"
				})
			},
			buyAdv17(){
				if(this.companyInformation.buyAdv){
					uni.showToast({
						"title":"关闭广告位成功"
					})
					this.companyInformation.buyAdv = 0;
					this.$refs.uploadAdv.refresh();
					this.companyInformation.advLikn = '';
				}else{
					uni.showToast({
						"title":"开启广告位成功，广告位将收取一定费用"
					})
					this.companyInformation.buyAdv = 1;
					
				}
				
			},
			refreshImageList(list,type){
				
				if(type == 'room'){
					this.companyInformation.innerImgs = list
				}
				if(type == 'live'){
					this.companyInformation.realImgs = list
				}
				if(type == 'activity'){
					this.companyInformation.advImgs = list;
					console.log(list);
					console.log(this.companyInformation.advImg);
				}
				
				
			},
			refreshVideoList(list){
				console.log(123)
				this.companyInformation.videos = list
			},
			
			payAll(){			
				let _this = this;
				if(this.read){
					uni.showLoading({
						"title":"正在生成二维码",
						"mask":"true"
					})
					
					uni.showLoading({
						"title":"正在生成"
					})
					console.log(_this.companyInformation);
					if(_this.companyInformation.addressDetail == ""){
						uni.showToast({
							"title":"详细地址不能为空",
							"icon":"none"
						})
						return false;
					}
					if(_this.companyInformation.addressName == ""){
						uni.showToast({
							"title":"地址名称不能为空",
							"icon":"none"
						})
						return false;
					}
					
					
					
						if(_this.companyInformation.buyAdv == 1){
							
							
							this.$ajax("/nav/apply","POST",_this.companyInformation).then(res=>{
								uni.hideLoading();
								if(res){
									uni.requestPayment({
										provider: "wxpay",
										timeStamp:res.payment.timeStamp,
										nonceStr:res.payment.nonceStr,
										package:res.payment.package,
										signType:res.payment.signType,
										paySign:res.payment.paySign,
										success:function(){
											uni.setStorageSync('qrcodeNo',res.no);
											uni.reLaunch({
												"url":"/pages/address/msdh/dhsc?qrcode="+res.no
											})
										},
										fail:function(){
											uni.showToast({
												"title":"取消支付",
												"icon":"none"
											})
										}
									})
								}else{
									uni.showToast({
										"title":"服务器错误，请稍后再试",
									})
								}
								
							})
						}else{
							
							this.$ajax("/nav/apply","POST",_this.companyInformation).then(res=>{
								uni.hideLoading();
								if(res){
									uni.setStorageSync('qrcodeNo',res.no);
									uni.reLaunch({
										"url":"/pages/address/msdh/dhsc?qrcode="+res.no
									})
								}else{
									uni.showToast({
										"title":"服务器异常,请稍后再试",
										"icon":"none"
									})
								}
								
								
							})
						}
					
					
					
					
					
		
				}else{
					uni.showToast({
						"title":"请先阅读免责协议，勾选后再提交",
						"icon":"none"
					})
				}
				
			},
			toSearch(){
				let _this = this;
				uni.chooseLocation({
					 keyword:"",
					 success: function (res) {
						_this.par = res;		         
					 }
				})
			},
			tip(){
				if(this.companyInformation.buyAdv == 0){
					uni.showToast({
						"title":"亲，请先按下方按钮开启广告位",
						"icon":"none"
					})
				}
			},
			
			toUrl(url){
				uni.navigateTo({
					"url":url
				})
			}
		},
		watch:{
			par: {
			    handler(newName, oldName) {
			      this.companyInformation.address = newName.name+"("+newName.address+")";
				  this.companyInformation.latitude = newName.latitude;
				  this.companyInformation.longitude = newName.longitude
			    },
				deep:true,
			    immediate: true
			}
		}
	}
</script>

<style>
	
	.mine_l_label{
		width: 328upx;
	}
	.mine_l{
		padding:28upx 28upx;
		align-items:center;
		
	}
	.mine_l input{
		text-align: right;
		
	}
</style>
