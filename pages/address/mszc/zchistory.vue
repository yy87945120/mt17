<template>
	<view class="content grayBackground" style="padding-bottom:188upx">
		<search-input placeholder='请输入关键词' :dataList="history" @getList="filterList"></search-input>
		<uni-icon type="contact" size="30" style='color:black'></uni-icon>
		<view v-for='(s,i) in history' :key="i">
		<uni-swipe-action :options="options2" @click="bindClick($event,s)">
			<view  style='justify-content: space-between;display: flex;padding:17upx 51upx;align-items:center;border-bottom:1upx solid rgba(238,238,238,1);'>
				
				<view style='display: flex;align-items:center' @click="tcm(s)">
					<view><uni-icons type='location' size="24"></uni-icons></view>
					<view style='margin-left:18upx;'>
						<view style='font-size:30upx'>{{s.locationName}}</view>
						<view style='margin-top:7upx;color:#A3A3A3;font-size:24upx'>{{s.address}}</view>
					</view>
				</view>
				
				<view @click="openMap(s)" style='width:52upx;height:52upx'><image src='/static/dh.png' style='width:52upx;height:52upx'></image></view>
			</view>
		</uni-swipe-action>
		</view>
		
		
		
		<banner></banner>
		<contact></contact>
		
	</view>
</template>

<script>
	import banner from "@/components/banner/banner.vue"
	import contact from "@/components/contact/contact.vue"
	import searchInput from "@/components/bm-searchInput/bm-searchInput.vue"
	import uniIcons from "@/components/uni-icons/uni-icons.vue";
	// import uniSwipeAction from "@dcloudio/uni-ui"
	import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action.vue'
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	// import uniSwipeAction from "@dcloudio/uni-ui"
	export default {
		components:{searchInput,uniIcons,uniSwipeAction,uniList,uniListItem,banner,contact},
		data() {
			return {
				title: 'Hello',
				isOpened: false,
				history:[],
				options1: [{
					text: '取消置顶'
				}],
				options2: [{
					text: '删除',
					style: {
						backgroundColor: '#dd524d'
					}
				}],
				options3: [{
					text: '置顶'
				}, {
					text: '标记为已读',
					style: {
						backgroundColor: 'rgb(254,156,1)'
					}
				}, {
					text: '删除',
					style: {
						backgroundColor: 'rgb(255,58,49)'
					}
				}]
			}
		},
		onLoad() {
			this.$nextTick(() => {
				this.isOpened = true
			})
			this.getHistory();
		},
		methods: {
			filterList(list){
				_this.history = list;
			},
			toUrl(url){
				uni.navigateTo({
					"url":url
				})
			},
			tcm(s){
				uni.navigateTo({
					"url":"/pages/address/mszc/tcm?qrcode="+s.qrcodeNo
				})
			},
			getHistory(){
				let _this = this;
				this.$ajax("/park/page","POST",{"pageNo":1,"pageSize":3}).then((res)=>{
					console.log(res);
					_this.history = res.list;
				})
			},
			openMap(s){
				let _this = this;
				console.log(s);
				uni.openLocation({
				    latitude: parseFloat(s.longitude),
				    longitude: parseFloat(s.latitude),
				    success: function () {
				        console.log('success');
				    }
				});
			},
			bindClick(e,s) {
				let _this = this;
				if(e.content.text == '删除'){
					this.$ajax("/park/remove","POST",{qrcodeNo:s.qrcodeNo}).then(res=>{
						if(res.code == '200'){
							uni.showToast({
								"title":res.msg,
								"icon":"none",
								"mask":"true"
							})
							setTimeout(function(){
								_this.getHistory();
							},999)
							
						}
					})
				}
				
			},
		}
	}
</script>

<style>
	
</style>
