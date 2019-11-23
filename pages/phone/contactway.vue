<template>
	<view class="content grayBackground" >
		<view class='hr'></view>
		<view style='padding:39upx 42upx 48upx;background:rgba(255,255,255,1);'>
			<view style='font-size:32upx'>您是否同意使用虚拟电话</view>
			<view style='margin-top:34upx;font-size:28upx;display: flex;align-items: center;'>
				<view style='display:flex'>
					<view><checkbox-group>
                    <label>
                        <checkbox @click='check = !check' value="check" :checked="check" />
                    </label>
                    
                </checkbox-group></view>
					<view style='margin-left:19upx'>真实电话</view>
				</view>
				<view style='margin-left:74upx;display:flex;align-items: center;'>
					<view><checkbox-group>
                    <label>
                        <checkbox @click='check = !check' value="!check" :checked="!check" />
                    </label>
                    
                </checkbox-group></view>
					<view style='margin-left:19upx'><view>虚拟电话</view><view style='font-size:23upx'>合约商客户免费，个人付费</view></view>
				</view>
			</view>
			<view style='font-size:34upx;margin-top:28upx;'>{{phone}}</view>
			<view style='color:#BFBFBF;font-size:28upx;margin-top:26upx;'>此号码将呈现在二维码，别人扫码后可以看到此真实号码。</view>
		</view>
		<view style='font-size:26upx;color:#5C92FD;padding:35upx 50upx 0upx'>虚拟电话：双方号码隐藏，不暴露手机号，双方隐号通话 保护隐私，杜绝骚扰 快速拨号</view>
		<button class='normalButton' style='margin-top:109upx' @click='buy()'>确认使用</button>
		<view>
			<contact></contact>
		</view>
	</view>
</template>

<script>
	import contact from "@/components/contact/contact.vue";
	export default {
		components:{
			contact
		},
		data() {
			return {
				title: 'Hello',
				check:false,
				phone:""
			}
		},
		onLoad(option) {
			console.log(option);
			if(option.phone){
				this.phone = option.phone;
				console.log(this.phone);
			}else{
				uni.showModal({
					showCancel:false,
					title:"未获取到手机号码",
					content:"按确定后，将返回生成页。",
					success:function(res){
						if(res.confirm){
							uni.navigateBack({
								delta:2
							})
						}
					}
				})
			}
		},
		methods: {
			buy(){
				if(this.check){
					uni.navigateBack({
						delta:2
					})
				}else{
					uni.navigateTo({
						"url":"/pages/phone/buyphone?phone="+this.phone
					})
				}
			}
			
		},
		watch:{
			
		}
	}
</script>

<style>
	
</style>
