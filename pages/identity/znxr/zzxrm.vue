<template>
	<view class="content grayBackground" style='padding-bottom:167upx;background: white;'>
		<view class='blue' style='padding:0upx 47upx;font-size:28upx;height:93upx;background:rgba(248,248,248,1);line-height:93upx'>被监护人信息</view>
		<view style='background: white;'>
			<view class='mine_l' ><view><text class='requireSpan'>*</text>姓名</view><view><input type="text" placeholder="请输入用户名称"></view><view><switch checked @change="" />隐藏</view></view>
			<view class='mine_l' ><view>身份证号</view><view><input type="text" placeholder="身份证号"></view><view><switch checked @change="" />隐藏</view></view>
			<view class='mine_l' ><view>家庭住址</view><view><input type="text" placeholder="请输入详细地址"></view><view><switch checked @change="" />隐藏</view></view>
			<view class='mine_l' ><view>是否有特殊病史</view><view><switch checked @change="" />有<switch checked @change="" />隐藏</view></view>
			<view class='mine_l' style='justify-content: flex-end;'><view><input type="text" placeholder="请填写病史" style='width: 694upx;'></view></view>
		</view>
		
		<view class='imgUpload'>
			<view  style='font-size:32upx'>上传被监护人照片</view>
			<an-upload-img></an-upload-img>
		</view>
		<view class='hr'></view>
		<view style='background: white;'>
			<view class='mine_l' ><view>是否随身携带药物</view><view><switch checked @change="" /></switch>有 <switch checked @change="" />隐藏</view></view>
			<view class='mine_l' style='justify-content: flex-end;'><view><input type="text" placeholder="请输入药物使用方法与剂量" style='width: 694upx;'></view></view>
			
		
			
			
		</view>
		
		
		<view style='background:rgba(255,255,255,1);width:682upx;padding-left:34upx;padding-right:34upx;padding-top:18upx;padding-bottom:18upx;display: flex;justify-content: space-between;position:fixed;bottom:0upx'>
			<button @click="toUrl('/pages/identity/znxr/zzxrm1')" class='normalButton'>下一步，编辑监护人信息</button>
		</view>
		<!-- <view class='bottomLogo' style='font-size:27upx;text-align: center;width: ;'>
			本服务由<text style='color:#FFA71A'>码捷达</text>提供 <br>
			服务热线：135 0300 2816
		</view> -->
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
	.mine_l{
		padding:28upx 28upx;
		align-items:center
	}
	.mine_l input{
		text-align: right;
		
	}
</style>
