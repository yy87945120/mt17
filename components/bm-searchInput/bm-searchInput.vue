<template>
    <view style='background:white;padding:28upx;width: 750upx;box-sizing: border-box;display: flex;align-items: center;font-size:28upx'>
        <input :placeholder="placeholder"  v-model="value"  type="text" style="border-radius: 38upx;height: 66upx;width:618upx;padding:18upx;background: rgb(243,243,243);box-sizing: border-box;"><text onclick='search()' style="margin-left:18upx">搜索</text>
    </view>
</template>

<script>
    export default {
        name: "searchInput",
        data(){
            return{
				Data1:[],
				value:""
            }
        },
		props:["placeholder","data","key"],
        computed:{
			
        },
        onShow(){
            
        },
		onLoad(){
			this.Data1 = this.data;
			console.log(this.Data1);
		},
        methods:{
			// search(){
			// 	this.Data1 = this.data.filter(res=>{
			// 		console.log(res.this.key);
			// 		console.log(this.value)
			// 		if(res.this.key.indexOf(this.value)){
			// 			return true;
			// 		}
			// 	})
				
			// },
   //          getKey(){
			// 	// let str = "";
			// 	// this.key.map(res=>{
					
			// 	// })
				
			// },
			// setData(){
				
			// }
		},
		watch:{
			// 'data': {
			//     handler: function(newVal,oldVal) {
			//       this.$emit('getList',newVal);
			//     },
			//     deep: true,
			//     immediate: true
			// }
			
		}
    }
</script>

<!-- <style lang="scss" scoped>
    .search_input{
        width: 86%;
		margin: 20upx auto;
        background: #f3f3f3;
        border: 1upx solid #999999;
        border-radius: 10upx;
    }
	.search_input_foucs{
		width: 86%;
		margin: 20upx auto;
		background: white;
		border: 1upx solid #31AADC;
		border-radius: 10upx;
	}
	.search_bar{
	     display: flex;
	     flex-direction: row;
	     align-items: center;
	     justify-content: left;
	 }
	
	.suggestions{
	    width: 86%;
	    margin: 0 auto;
	    border-top: 1upx solid #dddddd;
	    display: flex;
	    flex-direction: row;
	    justify-content: space-between;
	    padding: .6rem 1rem;
	    color: #666666;
	    font-size: 28upx;
	}
	
	.suggestions:active{
	    color: #007cdc;
	}
	
	.history_suggestion{
	    font-size: 28upx;
	}
	
	.history_suggestion_title{
	    font-size: 28upx;
	    color: #aaaaaa;
	    text-align: center;
	    display: flex;
	    flex-direction: row;
	    align-items: flex-end;
	    margin-bottom:8upx;
	    margin-left: 40%;
	}
	
	.history_clear{
	    margin-left: 43%;
	    font-size: 24upx;
	    display: flex;
	    flex-direction: row;
		&:active{
		    color: black;
		}
	}		
	
	 .search_input input[type="text"]{
	     width: 80%;
	     margin-top: 6upx;
	     margin-bottom: 8upx;
	     margin-left: 3upx;
	     font-size: 18upx;
	     border: 0;
	     outline: none;
	     padding-top: 6upx;
	     padding-bottom: 6upx;
	     background: #f3f3f3;
	     color: #666666;
	 }
	
	 .search_input input[type="text"]::placeholder{
	     color: #999999;
	 }
	
	
	 .icon{
	     width: 54upx;
	     height: 54upx;
	     margin-left: 10upx;
	 }
	
	 .clear_icon{
	     width: 32upx;
	     height: 32upx;
	     opacity: 0.5;
	 }
	
	 .clear_icon:active{
	     opacity: 1;
	 }

</style> -->
