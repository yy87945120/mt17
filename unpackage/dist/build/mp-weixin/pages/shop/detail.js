(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shop/detail"],{"560e":function(t,e,n){},7411:function(t,e,n){"use strict";n.r(e);var i=n("c87b"),o=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e["default"]=o.a},"7e19":function(t,e,n){"use strict";n.r(e);var i=n("ae93"),o=n("7411");for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);n("a4be");var u=n("2877"),a=Object(u["a"])(o["default"],i["a"],i["b"],!1,null,null,null);e["default"]=a.exports},a4be:function(t,e,n){"use strict";var i=n("560e"),o=n.n(i);o.a},ae93:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},b2f5:function(t,e,n){"use strict";(function(t){n("7b40"),n("921b");i(n("66fd"));var e=i(n("7e19"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},c87b:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=function(){return n.e("components/counter/counter").then(n.bind(null,"84bc"))},o=function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"3946"))},s={components:{uniPopup:o,counter:i},data:function(){return{title:"Hello",num17:1,type:"",popupData:null,size:"未选择",skuId:0,sku:[],num18:1,id:0,product:null}},onLoad:function(t){t.id&&(this.id=t.id,console.log(this.id),this.getDetail())},methods:{addTrolley:function(){var e=this;"trolley"==this.type?0!=e.skuId?this.$ajax("/cart/add","POST",{skuId:e.skuId,count:e.num18}).then(function(n){n?(t.showToast({title:"添加成功，商品正在购物车等着你呢",icon:"none"}),e.$refs.popup1.close()):(t.showToast({title:"添加失败",icon:"none"}),e.$refs.popup1.close())}):t.showToast({title:"请选择规格",icon:"none"}):0!=e.skuId?this.$ajax("/useraddress/page","POST",{pageNo:1,pageSize:10,orderName:"default_flag",orderType:"desc"}).then(function(n){var i="";console.log(n),i="收货人："+n.list[0].receiver+"("+n.list[0].phone+")\n收货地址："+n.list[0].province+n.list[0].city+n.list[0].area+n.list[0].detail+"\n",t.showModal({title:"结算清单",content:i,confirmText:"去支付",cancelText:"设置地址",success:function(i){i.confirm?(console.log(e.skuId),console.log(e.num18),e.$ajax("/order/buyNow","POST",{skuId:e.skuId,count:e.num18,addressId:n.list[0].id}).then(function(e){console.log(e),t.requestPayment({provider:"wxpay",appId:e.paymentResult.payment.appId,timeStamp:e.paymentResult.payment.timeStamp,nonceStr:e.paymentResult.payment.nonceStr,package:e.paymentResult.payment.package,signType:e.paymentResult.payment.signType,paySign:e.paymentResult.payment.paySign,success:function(){t.showToast({title:"下单成功"}),t.redirectTo({url:"/pages/mine/bill"})},fail:function(){t.showToast({title:"取消支付",icon:"none"})}})})):t.navigateTo({url:"/pages/mine/address?bill=true"})}})}):t.showToast({title:"请选择规格",icon:"none"})},chooseSize:function(t,e){this.product.specification[t].focus=e,this.priceCal()},priceCal:function(){var e=this;this.skus=[],t.showLoading({title:"计算中",mask:"true"}),e.size="",0!=e.product.skus.length&&(e.product.specification.map(function(t){t.entries.map(function(n,i){if(t.focus==i){var o={id:n.id,value:n.value};e.size=e.size+" "+n.value,e.skus.push(o)}})}),setTimeout(function(){console.log(e.skus),e.product.skus.map(function(t){console.log(t.specificationValues),t.specificationValues==JSON.stringify(e.skus)&&(e.product.price=t.price,e.skuId=t.id,console.log(e.product.price))}),setTimeout(function(){t.hideLoading()},888)},999))},setValue2:function(e){"未选择"==this.size?(t.showToast({title:"请先选择规格",icon:"none"}),this.$refs.counter.setNum(1)):(this.num18=e,this.priceCal())},getDetail:function(){var t=this,e=this.id;this.$ajax("/product/detail","POST",{id:e}).then(function(e){console.log(e),t.product=e,t.product.specification=JSON.parse(t.product.specification)})},setValue:function(t){this.num18=t},trolley17:function(){this.type="trolley",this.$refs.popup1.open(),this.skuId=0,this.sku=[],this.popupData=[],this.size="未选择"},pay:function(){},cal17:function(){this.type="cal",this.size="未选择",this.skuId=0,this.sku=[],this.$refs.popup1.open(),this.sku=[],this.popupData=[]},close17:function(){this.$refs.popup1.close()}}};e.default=s}).call(this,n("543d")["default"])}},[["b2f5","common/runtime","common/vendor"]]]);