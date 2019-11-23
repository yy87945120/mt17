<template>
	<view class="content grayBackground" style='padding-bottom:137upx'>
		<view style='padding:28upx'>
			<view class='tab-view-item'>
				<view class='tab-view-item-detail'>
					<view style="display: flex;">
						<view>
							<view class='tab-view-item-detail-image'></view>
							<view class='detail-information-word'>长按识别二维码</view>
						</view>
						
						<view class='tab-view-item-detail-information'>
							<view class='detail-information-title'>监护人信息</view>
							<view class='detail-information-word'>彭小姐</view>
							<view class='detail-information-word'>1382283388</view>
							<view class='detail-information-word'>1382283388</view>
						
					</view>
					</view>
					<view>
						<view style='width:94upx;height:94upx;'><image src="/static/phone.png" style='width:94upx;height:94upx;' mode=""></image></view>
						<view class="blue" style='font-size:22upx'>电话通知</view>
					</view>
				</view>
			</view>
			
			<view class='dhm_information shadow' style='background: rgb(255,255,255);display:flex;flex-direction: column;justify-content: space-between;margin-top:24upx;box-sizing:border-box;padding:49upx 46upx 60upx 46upx;height:721upx;'>
				<view class='dhm_form1'>
					<view  class='dhm_form'>
						<view class='dhm_form_item1'>位置名称</view>
						<view class='dhm_form_item3'>天河城小区</view>
					</view>
					<view  class='dhm_form'>
						<view class='dhm_form_item1'>性别:</view>
						<view class='dhm_form_item3'>女</view>
					</view>
				</view>
				<view class='dhm_form'>
					<view class='dhm_form_item1'>身份证</view>
					<view class='dhm_form_item2'>2020220202002200202</view>
				</view>
				<view class='dhm_form'>
					<view class='dhm_form_item1'>家庭住址</view>
					<view class='dhm_form_item2'>彭小姐</view>
				</view>
				<view class='dhm_form'>
					<view class='dhm_form_item1'>病 史</view>
					<view class='dhm_form_item2'>过敏，对花生过敏</view>
				</view>
				<view class='dhm_form'>
					<view class='dhm_form_item1'>是否有药物</view>
					<view class='dhm_form_item2'>AD，温水喝，一天两粒</view>
				</view>
				<view class='dhm_form'>
					<view class='dhm_form_item1'>头像</view>
				</view>
				<view style="display: flex;justify-content: space-between;width: 547upx;">
					<view style='width:164upx;height:163upx;background: #888888;'></view>
					<view style='width:164upx;height:163upx;background: #888888;'></view>
					<view style='width:164upx;height:163upx;background: #888888;'></view>
				</view>
				
				
			</view>
			
			
			<view class='dhm_information shadow' style='border-radius:20upx;background: rgb(255,255,255);display:flex;flex-direction: column;justify-content: space-between;margin-top:24upx;box-sizing:border-box;padding:49upx 46upx 60upx 46upx;'>
					<view class='dhm_form1'>
							<view  class='dhm_form'>
								<view class='dhm_form_item1'>佣　　金</view>
								<view class='dhm_form_item3'>¥10000.00</view>
							</view>
							<view  class='dhm_form'>
								<view class='dhm_form_item1'>免责救护</view>
								<view class='dhm_form_item3'>是</view>
							</view>
						</view>
						<view class='dhm_form'>
							<view class='dhm_form_item1'>备　　注</view>
							<view class='dhm_form_item2'>请耐心照看两天，不要让其碰水谢谢</view>
						</view>
						
						
					
			</view>
			
			<view class='dhm_information shadow' style='border-radius:20upx;background: rgb(255,255,255);display:flex;flex-direction: column;justify-content: space-between;margin-top:24upx;box-sizing:border-box;padding:49upx 46upx 60upx 46upx;'>
				<view style='font-size:28upx'>上传实时照片：</view>
				<an-upload-img></an-upload-img>
				<view style="margin-top:28upx;font-size:34upx;display: flex;justify-content: flex-start"><view style='width:237upx;'>*手机号码：</view><view style="width:488upx;display: flex;justify-content: space-between;"><view><input type="number" style='width:267upx' placeholder="手机号码让家人联系您"></view><view><button style='font-size:24upx;color:rgb(255,255,255);line-height:50upx;width:125upx;height:50upx;background:rgba(51,119,255,1);border-radius:25upx;'>发送</button></view></view></view>
			</view>
		</view>
		<view class='bottomControlView' style=''>
			<!-- <view @click="toUrl('/pages/address/msnc/index')"><button class='detail_button' style="color:#979797;border:1upx solid #979797;">取消</button></view> -->
			<button @click="toUrl('/pages/address/msnc/paymentsuccess')" class="normalButton" style=''>立刻生成我的寻人码</button>
		</view>
		
		
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
	.dhm_form1{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.dhm_form{
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
	.dhm_form_item1{
		font-size:28upx;
		width: 127upx;
		/* height: ; */
	}
	.dhm_form_item2{
		font-size:26upx;
		color:#888888;
		margin-left:43upx;
		width: 399upx;
	}
	.dhm_form_item3{
		font-size:26upx;
		color:#888888;
		margin-left:43upx;
		width: 188upx;
	}
	.tab-view-item-detail-image{
		width:193upx;
		height:193upx;
		background: #888888;
	}
	.tab-view-item-detail{
		display: flex;
		justify-content: space-between;
		
	}
	.detail-information-title{
		font-size:32upx;
		font-weight:bold
	}
	.detail-information-word{
		font-size:28upx;
		margin-top:20upx
	}
	.tab-view-item-detail-information{
		color:#333333;
		margin-left:36upx
	}
	.tab-view-item{
		padding: 43upx;
		height:347upx;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background:rgb(255,255,255);
		/* margin-top:18upx; */
		box-shadow:0upx 12upx 25upx 0upx rgba(136,136,136,0.08);
		border-radius:20upx;
	}
	.shadow{
		width:694upx;
		/* height:1029upx; */
		background:rgba(255,255,255,1);
		box-shadow:0upx 12upx 25upx 0upx rgba(221,221,221,0.08);
		border-radius:20upx;
	}
</style>
