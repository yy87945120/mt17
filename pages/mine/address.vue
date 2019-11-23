<template>
	<view class="content" style='position:absolute;height:100%;width:100%;background:rgba(243,243,243,1);padding-top:28upx'>
		<uni-swipe-action :options="options2" @click="bindClick($event,s)" v-for="(s,i) in address" :key="i">
			<view  style='border-bottom:1upx solid rgba(242,242,242,1);padding-left:28upx;padding-right:28upx;background: rgba(255,255,255,1);display:flex;align-items: center;padding-top:46upx;padding-bottom:52upx'>
				<image v-show="s.defaultFlag" style='width: 38upx;height:27upx' src="/static/select.png"></image>
				<view v-show="!s.defaultFlag" style='width: 38upx;height:27upx'></view>
				
				<view style="width:576upx;margin-left:28upx" @click='setDefalut(s,i)'>
					<view style='font-size: 28upx;'>{{s.province}}{{s.city}}{{s.area}}{{s.detail}}</view>
					<view class='span' style='font-size:26upx;margin-top:9upx'>{{s.receiver}} {{s.phone}}</view>
				</view>
				<image src="/static/address_more.png" style='margin-left:28upx;height:31upx;width:17upx;'></image>
			</view>
		</uni-swipe-action>
		<view v-show='address' style='width:750upx;text-align: center;font-size: 36upx;'>
			<image style='width:432upx;height:302upx;margin-top:167upx' src="/static/bill_empty.png" mode=""></image>
			<view>你还没有设置地址哦！</view>
		</view>
		<view style="width: 750upx;text-align: center;line-height:88upx;color:rgba(147,147,147,1);font-size:28upx">直接点击设置默认地址，左划进行删除或编辑</view>
		<button @click='aaddress()' style='position:fixed;bottom:28upx;left:50%;margin-left:-194upx;width: 388upx;height:88upx;text-align: center;line-height: 88upx;color: rgba(255,255,255,1);background: #007AFF;border-radius:58upx'>新增地址</button>
	</view>
</template>

<script>
	import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action.vue'
	export default {
		components:{
			uniSwipeAction
		},
		data() {
			return {
				title: 'Hello',
				address:null,
				bill:false,
				options2: [{
						text: '编辑',
						style: {
							backgroundColor: '#007AFF'
						}
				},{
					text: '删除',
					style: {
						backgroundColor: '#dd524d'
					}}
					],
			}
		},
		onLoad(option) {
			if(option.bill){
				this.bill = true
			}
			this.getAddress();
		},
		methods: {
			bindClick(e,s){
				let _this = this;
				console.log(e)
				if(e.content.text == '编辑'){
					uni.setStorageSync('address',JSON.stringify(s));
					uni.navigateTo({
						"url":"/pages/mine/eaddress"
					})
				}else{
					uni.showModal({
						"content":"删除确认",
						"title":"确定要删除此地址吗？",
						"success":function(res){
							if(res.confirm){
								_this.$ajax("/useraddress/remove","POST",{id:s.id}).then(res1=>{
									
									if(res){
										uni.showToast({
											"title":"地址已经删除",
											"icon":"none"
										})
										_this.getAddress();
									}
									
								})
							}
						}
					})
				}
				// uni.showToast({
				// 	title: `点击了${e.content.text}按钮`,
				// 	icon: 'none'
				// })
			},
			picker(s,i){
				
			},
			aaddress(){
				uni.navigateTo({
					"url":"/pages/mine/aaddress"
				})
			},
			getAddress(){
				let _this = this;
				this.$ajax("/useraddress/page","POST",{pageNo:1,pageSize:10}).then((res)=>{
					_this.address = res.list;
					_this.address.map((res1,index1)=>{
						if(_this.address[index1].defaultFlag == 0){
							_this.address[index1].defaultFlag = false;
						}else{
							_this.address[index1].defaultFlag = true;
						}
						
					})
					console.log(_this.address);
					
				})
			},
			setDefalut(s,i){
				console.log(s);
				let _this = this;
				// this.address.map((s,i)=>{
				// 	_this.address[i].c = false;
				// })
				this.$ajax("/useraddress/setDefault","POST",{id:s.id}).then((res)=>{
					if(res){
						_this.getAddress();
						uni.showToast({
							title:'设置成功',
							"icon":"none"
						});
						if(_this.bill){
							uni.navigateBack({
								delta:1
							})
						}
						
						
					}else{
						
					}
				})
				
				
				
			}
		}
	}
</script>

<style>
	.aaddress_list{
		padding-right:28upx;
		border:1upx solid rgba(243,243,243,1)
	}
</style>
