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
		<view class='ncm codelist_bg' style='padding:28upx' v-if="type=='move'" v-for="(s,i) in codeList" :key="i">
			<view class='codelist' style=''>
				<view @click="detail('挪车码',1,'/pages/address/msdh/dhm')">
					<view class='codelist_image'>
						<image :src="s.qrcode.url" class='codelist_image'></image>
						
					</view>
					<view class='codelist_image_name'>{{s.qrcodeNo}}</view>
				</view>
				<view class='codelist_infomation' @click="detail('挪车码',1,'/pages/address/msnc/bdcg?qrcode='+s.qrcodeNo)">
					<view class='codelist_title'>车辆码：{{s.carNo}}</view>
					<view class='codelist_detail'>绑定手机号{{s.phone}}</view>
				</view>
				<view class='codelist_operation'>
					<view class='codelist_delete codelist_edit' @click="deleteMethod(s,'move')">
						<image src="/static/j.png"></image>
					</view>
					<view class='codelist_edit' @click="editMethod(s,'move')">
						<image src="/static/edit.png"></image>
					</view>
				</view>
			</view>
		</view>
		
		<view class='ncm codelist_bg' style='padding:28upx' v-if="type=='nav'" v-for="(s,i) in codeList" :key="i">
			<view class='codelist' style=''>
				<view @click="detail('导航码',1,'/pages/address/msdh/dhm')">
					<view class='codelist_image'>
						<image :src="s.qrcode.url" class='codelist_image'></image>
						
					</view>
					<view class='codelist_image_name'>{{s.qrcodeNo}}</view>
				</view>
				<view class='codelist_infomation' @click="detail('导航码',1,'/pages/address/msdh/dhm1?qcode='+s.qrcodeNo)">
					<view class='codelist_title'>{{s.addressName}}</view>
					<view class='codelist_detail'>地址:{{s.address}}</view>
				</view>
				<view class='codelist_operation'>
					<view class='codelist_delete codelist_edit' @click="deleteMethod(s,'nav')">
						<image src="/static/j.png"></image>
					</view>
					<view class='codelist_edit' @click="editMethod(s,'nav')">
						<image src="/static/edit.png"></image>
					</view>
				</view>
			</view>
		</view>
		
		<view class='tcm codelist_bg' style='padding:28upx' v-show="type=='park'" v-for="(s,i) in codeList" :key="i">
			<view class='codelist' style='' >
				<view @click="detail('停车码',1,'/pages/address/mszc/tcm1?qrcode='+s.qrcodeNo)">
					<view class='codelist_image'>
						<image :src="s.qrcode.url" class='codelist_image'></image>
						
					</view>
					<view class='codelist_image_name'>{{s.qrcodeNo}}</view>
				</view>
				<view @click="detail('停车码',1,'/pages/address/mszc/tcm?qrcode='+s.qrcodeNo)" class='codelist_infomation'>
					<view class='codelist_title'>车辆码：{{s.carNo | changeNull}}</view>
					<view class='codelist_detail'>汽车品牌： {{s.carBrand | changeNull}}</view>
					<view class='codelist_detail'>车型：{{s.carType | changeNull}}</view>
				</view>
				
				<view class='codelist_operation'>
					<view class='codelist_delete codelist_edit' @click="deleteMethod(s,'park')">
						<image src="/static/j.png"></image>
					</view>
					<view class='codelist_edit' @click="editMethod(s,'park')">
						<image src="/static/edit.png"></image>
					</view>
				</view>
			</view>
			
		</view>
		
		<view class='xrm codelist_bg' style='padding:28upx' v-show="type=='xrm'">
			<view class='codelist' style='' @click="detail('寻人码',1)">
				<view>
					<view class='codelist_image'>
						<image :src="s.qrcode.url" class='codelist_image'></image>
						
					</view>
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
		
		 
		<view v-if="type == ''" style='width:750upx;text-align:center;margin-top:180upx'>
			此二维码功能正在升级<br>
			敬请期待
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
				search_result_note:[],
				type:'',
				codeList:[],
				pageNo:1,
				pageSize:99,
				totalPage:0
				
			}
		},
		onLoad(option) {
			if(option.type){
				this.type = option.type;
				this.getCodeList();
			}else{
				
			}
			if(option.nav){
				// this.type = option.type;
				// this.getCodeList();
				
				uni.setNavigationBarTitle({
					title:option.nav
				})
			}else{
				
			}
		},
		methods: {
			toUrl(url){
				uni.navigateTo({
					"url":url
				})
			},
			deleteMethod(s,type){
				let _this = this;
				uni.showModal({
					"title":"删除提示",
					"content":"是否确认要删除此二维码？",
					"success":function(resModal){
						if(resModal.confirm){
							// console.log(s);
							_this.$ajax("/"+type+"/remove","POST",{qrcodeNo:s.qrcodeNo}).then(res1=>{
								if(res1.code == "200"){
									_this.getCodeList()
									// _this.codeList.filter(res2=>{
									// 	console.log(res2.qrcodeNo);
									// 	console.log(s.qrcodeNo);
									// 	return res2.qrcodeNo != s.qrcodeNo
									// 	// if(){
									// 	// 	return false;
									// 	// }
									// })
									uni.showToast({
										"title":"删除成功",
										"icon":"none"
									})
								}
							})
							
							
						}else{
							uni.showToast({
								"title":"取消删除",
								"icon":"none"
							})
						}
					}
				})
			},
			editMethod(s,type){
				uni.showModal({
					"title":"编辑提示",
					"content":"是否进行二维码编辑？",
					"success":function(res){
						if(res.confirm){
							if(type == 'nav'){
								uni.navigateTo({
									"url":"/pages/address/msdh/zzdhm?data="+encodeURIComponent(JSON.stringify(s))
								})
								return false
							}
							
							if(type == 'move'){
								uni.navigateTo({
									"url":"/pages/address/msnc/zzncm?data="+encodeURIComponent(JSON.stringify(s))
								})
								return false
							}
							
							if(type == 'park'){
								uni.navigateTo({
									"url":"/pages/address/mszc/zztcm?data="+encodeURIComponent(JSON.stringify(s))
								})
								return false
							}
						}else{
							uni.showToast({
								"title":"取消编辑",
								"icon":"none"
							})
						}
					}
				})
			},
			get_selected_lists(){
				
			},
			finish_search(){
				
			},
			getCodeList(){
				let _this = this;
				this.$ajax("/"+this.type+"/page","POST",{pageNo:this.pageNo,pageSize:this.pageSize}).then(res=>{
					console.log(res);
					_this.codeList = []
					res.list.map((res1)=>{
						_this.codeList.push(res1);
					})
					// console.log()
					this.totalPage = res.totalPage
					// this.pageNo++;
				})
			},
			detail(type,id,url){
				uni.showToast({
					"title":'正在跳转'+type+'详情页',
					"icon":"none"
				})
				setTimeout(function(){
					uni.navigateTo({
						"url":url
					})
				},1500)
			}
			
		},
		filters:{
			changeNull(value){
				console.log(value);
				if(value == null){
					return "--";
				}else{
					return value;
				}
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
		width: 278upx;
	}
	.codelist_infomation{
		margin-left:34upx
	}
	.codelist_image_name{
		margin-top:19upx;
		word-break: break-all;
		width: 132upx;
	}
	.codelist_image{
		width:132upx;
		height:132upx;
		background:#888888
	}
	.codelist_image image{
		width:132upx;
		height:132upx;
		background:#888888
	}
	.codelist_edit{
		width:45upx;
		height:42upx;
		
	}
	.codelist_edit image{
		width:45upx;
		height:42upx;
	}
	.codelist_delete image{
		width:45upx;
		height:42upx;
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
