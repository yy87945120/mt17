<template>
	<view class="content grayBackground" style='padding-bottom:147upx;'>
		<view class='blue' style='padding:0upx 47upx;font-size:28upx;height:93upx;background:rgba(248,248,248,1);line-height:93upx'>监护人信息</view>
		<view style='background: white;'>
			<view class='mine_l' ><view><text class='requireSpan'>*</text>姓名</view><view><input type="text" placeholder="请输入用户名称"></view></view>
			<view class='mine_l' ><view><text class='requireSpan'>*</text>电话1</view><view><input type="text" placeholder="请输入用户电话"></view></view>
			<view class='mine_l' ><view><text class='requireSpan'>*</text>电话2</view><view><input type="text" placeholder="请输入用户电话"></view></view>
			
		</view>
		
		<view style='padding:31upx 31upx 43upx;background:rgba(255,255,255,1)'>
			<view  style='font-size:32upx'><text class='requireSpan'>*</text>微信</view>
			<an-upload-img></an-upload-img>
		</view>
		<view class='blue' style='padding:0upx 47upx;font-size:28upx;height:93upx;background:rgba(248,248,248,1);line-height:93upx'>设置信息</view>
		
		<view style='background: white;'>
			<view class='mine_l' ><view>酬金</view><view style='display: flex;'><input v-model='cjinput17' type="number" placeholder="请输入答谢酬金">（元）<text style='margin-left:28upx'>icon</text></view></view>
			<view class='mine_l' ><button @click='checkedcj17(s)' :class="s.checked?'cj_button cj_button_focus':'cj_button'"  v-for='(s,i) in cj' :key="i">{{s.name}}</button><button @click='pay()' class='cj_button cj_button_pay'>支付</button></view>
			<view class='mine_l' ><view>负责救护</view><view><switch checked @change="" /></switch>是</view></view>
			<view class='mine_l'><view>备注</view><view><input type="text" placeholder="其它一些注意事项" ></view></view>
			
		
			
			
		</view>
		<view style='padding:31upx 31upx 43upx;background: white;'>
			<view class='blue' style='font-size:32upx'>样式模板选择：</view>
			<view style="margin-top:20upx;width:158upx;height:158upx;background:rgba(248,248,248,1);border-radius:4upx;"></view>
		</view>
		
		<view class='blue' style='display: flex;justify-content: center;align-items: center; font-size:28upx;text-decoration: underline;text-align: center;line-height: 147upx;'>
			
			<view><checkbox-group>
					<label>
						<checkbox value="" checked="false" />
					</label>
			                   
			</checkbox-group>
			</view>
			<view style='margin-left:5upx'>已阅读完免责协议</view>
		</view>
		<view style='background:rgba(255,255,255,1);width:682upx;padding-left:34upx;padding-right:34upx;padding-top:18upx;padding-bottom:18upx;display: flex;justify-content: space-between;position:fixed;bottom:0upx'>
			<button @click="toUrl('/pages/identity/znxr/xrmsc')" class='normalButton'>信息编辑完成，生成寻人码</button>
		</view>
		<!-- <view class='hr'></view> -->
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
				title: 'Hello',
				cjinput17:0,
				cj:[
					{
						name:"50元",
						value:50,
						checked:true
					},
					{
						name:"100元",
						value:100,
						checked:false
					},
					{
						name:"200元",
						value:200,
						checked:false
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			toUrl(url){
				uni.navigateTo({
					"url":url
				})
			},
			checkedcj17(s){
				if(s.checked){
					
				}else{
					this.cj.map(function(s,i){
						s.checked = false;
					})
					s.checked = !s.checked;
					
				}
				this.cjinput17 = s.value
				
			},
			pay(){
				let _this = this;
				uni.showToast({
					"title":"你要支付的酬金是："+_this.cjinput17+"元",
					"icon":"none"
				})
			}
		}
	}
</script>

<style>
	
	.cj_button{
		width:143upx;
		height:58upx;
		border:2upx solid rgba(214,214,214,1);
		line-height:58upx;
		font-size:28upx;
		border-radius:10upx;
	}
	.cj_button_focus{
		
		border-radius:10upx;
		border:2upx solid rgba(51,119,255,1);
		color: rgba(51,119,255,1);
		
	}
	.cj_button_pay{
		background:rgba(51,119,255,1);
		border-radius:10upx;
		border:2upx solid rgba(51,119,255,1);
		color:rgba(255,255,255,1)
	}
	.mine_l{
		padding:28upx 28upx;
		align-items:center
	}
	.mine_l input{
		text-align: right;
		
	}
</style>
