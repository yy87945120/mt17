<template>
	<view class="content grayBackground" >
		<view style='background: rgba(255,255,255,1);padding:3upx 0upx'>
			<search-input :isHistory="true"
			                 :lists_title="search_result_title"
			                 :lists_note="search_result_note"
			                 @parent_get_lists="get_selected_lists"
			                 @parent_search="finish_search">
		   </search-input>
		</view>
		<view class='ncm codelist_bg' style='padding:28upx'>
			<view class='codelist' style='' @click="detail('挪车码',1,'/pages/address/msdh/dhm')">
				<view>
					<view class='codelist_image'></view>
					<view class='codelist_image_name'>wifi20000</view>
				</view>
				<view class='codelist_infomation'>
					<view class='codelist_title'>车辆码：粤PF210</view>
					<view class='codelist_detail'>绑定手机号13824462940</view>
				</view>
				<view class='codelist_operation'>
					<view class='codelist_delete codelist_edit'>
						
					</view>
					<view class='codelist_edit'>
						
					</view>
				</view>
			</view>
		</view>
		
		<view class='tcm codelist_bg' style='padding:28upx'>
			<view class='codelist' style='' @click="detail('停车码',1)">
				<view>
					<view class='codelist_image'></view>
					<view class='codelist_image_name'>wifi20000</view>
				</view>
				<view class='codelist_infomation'>
					<view class='codelist_title'>车辆码：粤PF210</view>
					<view class='codelist_detail'>汽车品牌： 奥迪</view>
					<view class='codelist_detail'>车险：SUV</view>
				</view>
				
				<view class='codelist_operation'>
					<view class='codelist_delete codelist_edit'>
						
					</view>
					<view class='codelist_edit'>
						
					</view>
				</view>
			</view>
			
		</view>
		
		<view class='xrm codelist_bg' style='padding:28upx'>
			<view class='codelist' style='' @click="detail('寻人码',1)">
				<view>
					<view class='codelist_image'></view>
					<view class='codelist_image_name'>wifi20000</view>
				</view>
				<view class='codelist_infomation'>
					<view class='codelist_title'>被监护人姓名：朱某某</view>
					<view class='codelist_detail'>扫描者呢称：呆呆</view>
					<view class='codelist_detail'>扫描者日期：20170907 12：03</view>
					<view class='codelist_detail'>扫描定位：广州市公只全合全佃全输人一全全人一全天河城</view>
				</view>
				
				<view class='codelist_operation'>
					<view class='codelist_delete codelist_edit'>
						
					</view>
					<view class='codelist_edit'>
						
					</view>
				</view>
			</view>
			
		</view>
		
		 
		
	</view>
</template>

<script>
	import searchInput from "@/components/bm-searchInput/bm-searchInput.vue"
	export default {
		components: {searchInput},
		data() {
			
			return {
				title: 'Hello',
				search_result_title:[],
				search_result_note:[]
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
			get_selected_lists(){
				
			},
			finish_search(){
				
			},
			detail(type,id,url){
				uni.showToast({
					"title":'正在跳转'+type+'详情页;id:'+id
				})
				setTimeout(function(){
					uni.navigateTo({
						"url":url
					})
				},1500)
			}
			
		}
	}
</script>

<style>
	.codelist_bg{
		padding:28upx
	}
	.codelist{
		width:694upx;
		min-height:308upx;
		box-sizing:border-box;
		background:rgba(255,255,255,1);
		box-shadow:0upx 12upx 25upx 0upx rgba(136,136,136,0.08);
		border-radius:20upx;
		font-size:28upx;
		display: flex;padding:48upx;
		position:relative;
	}
	.codelist_detail{
		margin-top:21upx;
		color:#9B9B9B
	}
	.codelist_title{
		font-size:32upx;
		width: 288upx;
	}
	.codelist_infomation{
		margin-left:34upx
	}
	.codelist_image_name{
		margin-top:19upx
	}
	.codelist_image{
		width:132upx;
		height:132upx;
		background:#888888
	}
	.codelist_edit{
		width:45upx;
		height:42upx;
		background:rgba(155,155,155,1);
	}
	.codelist_delete{
		
	}
	.codelist_operation{
		position:absolute;
		right:48upx;
		top:48upx;
		display: flex;
		width: 127upx;
		justify-content: space-between;
	}
</style>
