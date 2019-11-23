<template>
	<view class="content" style='min-height:100vh;background:rgba(243,243,243,1)'>
		<view class='hr'></view>
		<view style='padding-left:28upx;background:rgba(255,255,255,1)'>
			<view class='aaddress_list_form'>
				<view class='aaddress_list17'>
					<view class='aaddress_label' style=''>联系人</view>
					<input class='aaddress_input' v-model="address.receiver" type="text" placeholder="名字" style=''>
				</view>
				
				<view class='aaddress_list17'>
					<view class='aaddress_label' style=''>手机号码</view>
					<input class='aaddress_input' v-model="address.phone" type="text" placeholder="11位手机号" style=''>
				</view>
				
				<view class='aaddress_list17' >
					<view class='aaddress_label' style=''>选择地区</view>
					<input class='aaddress_input' type="text" placeholder="地区信息" style='' @click="openPicker()" v-model="word" :disabled="true">
				</view>
				
				<view class='aaddress_list17'>
					<view class='aaddress_label' style=''>详细地址</view>
					<input class='aaddress_input' v-model="address.detail" type="text" placeholder="街道门牌信息" style=''>
				</view>
				
				<view class='aaddress_list17'>
					<view class='aaddress_label' style=''>邮政编码</view>
					<input class='aaddress_input' type="text" placeholder="邮政编码" style=''>
				</view>
				
				
				
			</view>
		</view>
		
		<button @click='aaddress()' style='margin-top:67upx;width: 684upx;font-size:36upx;height:94upx;text-align: center;line-height: 88upx;color: rgba(255,255,255,1);background: #007AFF;border-radius:58upx'>保存</button>
		
		
		<w-picker 
		    mode="region"
		    :defaultVal="['广东省','广州市','从化区']"
		    :areaCode="['44','4401','440117']"
		    @confirm="onConfirm" 
		    ref="picker" 
		    themeColor="#f00">
		</w-picker>
	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue"; 
	export default {
		components:{
			wPicker
		},
		data() {
			return {
				title: 'Hello',
				address:null,
				type:'',
				
			}
		},
		onLoad(option) {
			this.address = JSON.parse(uni.getStorageSync('address'));
			console.log(this.address);
		},
		methods: {
			onConfirm(data){
				console.log(data);
				this.address.province = data.checkArr[0];
				this.address.city = data.checkArr[1];
				this.address.area = data.checkArr[2];
				this.word = this.address.province+this.address.city+this.address.area
				
			},
			openPicker(){
				this.$refs.picker.show()
			},
			aaddress(){
				let _this = this;
				console.log(this.address)
				if(_this.address.receiver == ""){
					uni.showToast({
						title:"联系人不能为空",
						"icon":"none"
					})
					return false;
				}
				if(_this.address.phone == ""){
					uni.showToast({
						title:"手机号不能为空",
						"icon":"none"
					})
					return false;
				}
				
				if(!(/^1[3456789]\d{9}$/.test(_this.address.phone))){
					uni.showToast({
						"title":"电话号码格式不正确",
						"icon":"none"
					}) 
					return false; 
				}
				if(_this.address.province == ""){
					uni.showToast({
						title:"请选择地区信息",
						"icon":"none"
					})
					return false;
				}
				if(_this.address.detail == ""){
					uni.showToast({
						title:"请选择详细地址",
						"icon":"none"
					})
					return false;
				}
				
				let arr = this.address;
				delete arr.createTime;
				if(arr.defaultFlag){
					arr.defaultFlag = 1
				}else{
					arr.defaultFlag = 0
				}
				this.$ajax("/useraddress/edit","POST",arr).then((res)=>{
					uni.showToast({
						"title":"编辑成功,正在跳转",
						"icon":"none",
						"mask":"true"
					})
					setTimeout(function(){
						uni.navigateTo({
							"url":"/pages/mine/address"
						})
					},777)
					
				})
			}
		},
		computed:{
			word:function(){
				let word = this.address.province + this.address.city + this.address.area;
				return word
			}
		}
	}
</script>

<style>
	.aaddress_list17{
		display: flex;
		padding-top:24upx;
		padding-bottom:25upx;
		border-bottom:1upx solid rgba(243,243,243,1)
	}
	.aaddress_list_form{
		padding-right:28upx;
		
	}
	.aaddress_label{
		text-align:left;
		font-size: 32upx;
		width: 188upx;
	}
	.aaddress_input{
		text-align:left;
		font-size: 28upx;
		padding-right: 28upx;
	}
</style>
