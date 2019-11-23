<template>
	<view class="content">
		<view v-for="(s,i) in 4" :key='i'>
			<view style='padding:34upx;display: flex;'>
				<view style='width:208upx;height:210upx'><image style='width:208upx;height:210upx' src="/static/shop_list_item.png"  mode=""></image></view>
				<view @click='pay17()' style='display: flex;justify-content: space-between;flex-direction: column;font-size:28upx;width: 566upx;margin-left:28upx'>
					<view style="display: flex;justify-content: space-between;">
						<view>商城名称：寻人码贴纸</view>
						<view class='blue'>
							20元/份
						</view>
					</view>
					<view>
						<view>类型：寻人码贴纸</view>
						<view>数量：10份</view>
					</view>
					<view style='display:flex;'>
						<view>需要：</view>
						
						<view style='display: flex;justify-content: space-between;'>
							<view style="width:48upx;height:48upx;"><image style="width:48upx;height:48upx;" src="/static/j.png" mode=""></image></view>
							<view style='width: 68upx;text-align: center;'><input type="text" v-model="num17"></view>
							<view style="width:48upx;height:48upx;"><image style="width:48upx;height:48upx;" src="/static/a.png" mode=""></image></view>
						</view>
						
					</view>
				</view>
			</view>
			<view class="hr"></view>
		</view>
		
	</view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
		components: {uniPopup},
		data() {
			return {
				title: 'Hello',
				num17:20
			}
		},
		onLoad() {

		},
		methods: {
			pay17(){
				uni.showModal({
					confirmText:"去支付",
					confirmColor:"#007AFF",
					title:"30.00元",
					content:"收货人:彭艳香(13824461940)\n收货地址：地址信息地址信息地址信息地址信息地址信息",
					success:function(res){
						if (res.confirm) {
						            uni.showToast({
						            	"title":"支付成功"
						            })
						        }else{
						            uni.showToast({
						            	"title":"取消支付"
						            })
						        }

					}
				})
			}
		}
	}
</script>

<style>
	
</style>
