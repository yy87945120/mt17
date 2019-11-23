<template>
	<view class="content" >
		<view class="content" style='text-align: center;'>
			<h3 style='line-height: 188upx;'>{{title}}</h3>
			<view v-html="content"></view>
			<contact></contact>
		</view>
	</view>
</template>

<script>
	import contact from "@/components/contact/contact.vue";
	export default {
		components:{contact},
		data() {
			return {
				title:"",
				content:""
				
			}
		},
		onLoad() {
			this.getInfo();
		},
		methods: {
			toUrl(url){
				uni.navigateTo({
					"url":url
				})
			},
			getInfo(){
				let _this = this;
				this.$ajax("/webcontent/info","POST",{code:"about"}).then(res=>{
					_this.title = res.title;
					_this.content = res.content;
				})
			}
		}
	}
</script>

<style>
	
</style>
