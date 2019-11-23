
<script>
	export default {
		onLaunch: function() {
			
				let _this = this;
				uni.login({
				  provider: 'weixin',
				  success: function (loginRes) {
				    if(loginRes.code){
						_this.$ajaxLogin('/wxLogin',"POST",{'code':loginRes.code}).then(res=>{
									uni.setStorageSync('token',res.token)
						})
					}else{
						
					}
				  }
				});
				
				
				
			
		},
		onShow: function() {
			
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>



<style>
	/* 引入字体图标 */
	
	@font-face {
	  font-family: 'iconfont';  /* project id 1454348 */
	  src: url('//at.alicdn.com/t/font_1454348_kxn9np6ppua.eot');
	  src: url('//at.alicdn.com/t/font_1454348_kxn9np6ppua.eot?#iefix') format('embedded-opentype'),
	  url('//at.alicdn.com/t/font_1454348_kxn9np6ppua.woff2') format('woff2'),
	  url('//at.alicdn.com/t/font_1454348_kxn9np6ppua.woff') format('woff'),
	  url('//at.alicdn.com/t/font_1454348_kxn9np6ppua.ttf') format('truetype'),
	  url('//at.alicdn.com/t/font_1454348_kxn9np6ppua.svg#iconfont') format('svg');
	}
	.requireSpan1{
		padding-left:14upx
	}
	.iconfont {
	  font-family: "iconfont" !important;
	  font-size: 16px;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
	
	.iconshoucang:before {
	  content: "\e64d";
	}
	
	.iconshoucang1:before {
	  content: "\e610";
	}
	.iconxuanzhong:before {
	  content: "\e70a";
	}
	.iconyuancircle46:before {
	  content: "\e75d";
	}
	.iconwebicon212:before {
	  content: "\e68a";
	}
	.iconbianji:before {
	  content: "\e660";
	}
	.iconshanchu:before {
	  content: "\e6d0";
	}
	.iconfenxiang:before {
	  content: "\e655";
	}
	.icontablerefresh:before {
	  content: "\e61c";
	}
	
	/* 全局样式 */
	.padding{
		padding:0upx 48upx;
		box-sizing: border-box;
		width: 750upx;
	}
	.grayBackground{
		background:rgba(248,248,248,1);
		min-height:100vh;
		overflow-x: hidden;
	}
	.imgUpload{
		padding:31upx 31upx 31upx 31upx;margin-top:28upx;background:rgba(255,255,255,1);
	}
	.tipWord{
		line-height:88upx;color:rgba(147,147,147,1);font-size:28upx
	}
	/* 蓝色背景按钮 */
	.normalButton{
		background:rgba(51,119,255,1);height:88upx;width: 654upx;color:rgba(255,255,255,1);border-radius:58upx
	}
	/* 白色背景按钮 */
	.normalButton1{
		background:rgba(248,248,248,1);width: 654upx;border-radius:50upx;height:88upx;border:1upx solid rgba(42,151,255,1);color:rgb(42,151,255)
	}
	.bottomControlView{
		background:rgba(255,255,255,1);width:682upx;padding-left:34upx;padding-right:34upx;padding-top:18upx;padding-bottom:18upx;display: flex;justify-content: space-between;position:fixed;bottom:0upx;z-index: 99;
	}
	
	/* 默认栏目 */
	.hr{
		background:rgba(248,248,248,1);
		width: 750upx;
		height:28upx;
	},
	/* 蓝色字体 */
	.blue{
		color:rgba(42,151,255,1)
	}
	/* 默认文字 */
	.span{
		color:#686868
	}
	/* 蓝色背景 */
	.blue_bg{
		background: rgb(42,151,255);
	}
	.requireSpan{
		color:#FF2116;white-space: pre-wrap;
	}
	.uploadForm{
		
	}
	
	
	
	.uni-popup__wrapper-box{
		background:rgba(255,255,255,0) !important;
		padding-top:0upx !important;
		padding-bottom:0upx !important;
		padding-left:0upx !important;
		padding-right:0upx !important;
		max-width: 100% !important;
	}
	.page__hd .pagehead{
		background:red
	}
	
	
	
	
	
	
	.nav_title{
		font-weight:bold;
		font-size:28upx;
	}
	.nav_title_span{
		font-size:22upx;color:rgba(148,148,148,1);margin-top:9upx
	}
	.nav_box{
		display: flex;background:rgba(255,255,255,1);padding-left:34upx;padding-right:34upx;padding-top:36upx;padding-bottom:36upx;align-items: center;width:604upx;border-radius:18upx;margin-top:28upx
	}
	/* 详情页按钮 */
	.detail_button{
		color:rgba(255,255,255,1);
		border-radius:58upx;
		width: 326upx;
		
	}
	.detail_button_green{
		background:rgba(108,198,10,1)
	}
	.detail_button_blue{
		background:rgba(51,119,255,1);
		
	}
	.shadow{
		width:694upx;
		/* height:1029upx; */
		background:rgba(255,255,255,1);
		box-shadow:0upx 12upx 25upx 0upx rgba(221,221,221,0.08);
		border-radius:20upx;
	}
	/* 购物车按钮 */
	.shop_button{
		width: 194upx;
		border: 1upx solid rgba(228,228,228,1);
		height: 67upx;
		line-height: 67upx;
		float: left;
		font-size:30upx
	}
	.shop_button_focus{
		color:#3377FF;
		background:rgba(225,235,255,1);
		border:1upx solid #3377FF;
	}
	/* 列表样式 */
	.mine_l{
		font-size:32upx;border-bottom:1upx solid rgba(243,243,243,1);width: 694upx;padding-top:28upx;padding-bottom:28upx;display: flex;justify-content: space-between;padding-right:28upx;
	}
	.mine_l{
		padding:28upx 28upx;
		align-items:center
	}
	.mine_l input{
		text-align: right;
		
	}
	
	
	
	
	
	
	
	
</style>

<style lang="scss">
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
	 .title_overflow2{
	 	display: -webkit-box;
	 	overflow: hidden;
	 	text-overflow: ellipsis;
	 	word-wrap: break-word;
	 	white-space: normal !important;
	 	-webkit-line-clamp: 2;
	 	-webkit-box-orient: vertical;
	 }
	 .title_overflow1{
	 	display: -webkit-box;
	 	overflow: hidden;
	 	text-overflow: ellipsis;
	 	word-wrap: break-word;
	 	white-space: normal !important;
	 	-webkit-line-clamp: 1;
	 	-webkit-box-orient: vertical;
	 }
	 .nav_title_span{
		 font-size:25upx
	 }

</style>
