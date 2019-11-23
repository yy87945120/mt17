<template>
	<view class="content" >
		<view style='display: flex;justify-content: space-between;'>
				<view style="width:48upx;height:48upx;" @click='down()'><image style="width:48upx;height:48upx;" src="/static/j.png" mode=""></image></view>
				<view style='width: 68upx;text-align: center;'>{{num18}}</view>
				<view style="width:48upx;height:48upx;" @click='plus()'><image style="width:48upx;height:48upx;" src="/static/a.png" mode=""></image></view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				num18:this.num17
			}
		},
		props:['num17'],
		onLoad() {
			// this.num18 = this.num17;
		},
		methods: {
			plus(){
				this.num18++;
				
			},
			down(){
				this.num18--;
				
			},
			setNum(num){
				this.num18 = num
			}
		},
		
		watch:{
			num18(newval,oldval){
				if(newval <= 0){
					this.num18 = 1
					uni.showToast({
						"title":"数量必须大于等于1哦",
						"icon":"none"
					})
					
				}
				this.$emit("getValue",this.num18)
			}
		}
	}
</script>

<style>
	
</style>
