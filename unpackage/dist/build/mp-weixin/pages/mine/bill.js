(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/bill"],{"68ab":function(t,e,n){},8994:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.data,function(e,n){var a=t._f("position")(e.state),o=t.__map(e.details,function(e,n){var a=t._f("size")(e.sku.specificationValues);return{$orig:t.__get_orig(e),f1:a}});return{$orig:t.__get_orig(e),f0:a,l0:o}}));t.$mp.data=Object.assign({},{$root:{l1:n}})},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},"89db":function(t,e,n){"use strict";(function(t){n("7b40"),n("921b");a(n("66fd"));var e=a(n("e34f"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"999e":function(t,e,n){"use strict";n.r(e);var a=n("bf4b"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=o.a},bf4b:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){return n.e("components/v-tab/v-tab").then(n.bind(null,"6f04"))},o={components:{vTab:a},data:function(){return{title:"Hello",position:function(t){return-1==t?"取消订单":1==t?"待支付":2==t?"待发货":3==t?"待收货":0==t?"交易成功":void 0},state:"all",dataNav:[{name:"全部",value:"all"},{name:"待支付",value:1},{name:"待发货",value:2},{name:"待收货",value:3},{name:"交易成功",value:0},{name:"取消订单",value:-1}],data:[]}},onLoad:function(){this.bill()},methods:{getP:function(e){this.$ajax("/order/finish","POST",{orderNo:e.orderNo}).then(function(e){"200"==e.code&&(t.showToast({title:"确认收货成功",icon:"none"}),setTimeout(function(){t.reLaunch({url:"/pages/mine/bill"})},888))})},pay:function(e){this.$ajax("/order/buy","POST",{addressId:_this.address.id}).then(function(e){200==e.code?t.requestPayment({provider:"wxpay",timeStamp:e.paymentResult.payment.timeStamp,nonceStr:e.paymentResult.payment.nonceStr,package:e.paymentResult.payment.package,signType:e.paymentResult.payment.signType,paySign:e.paymentResult.payment.paySign,success:function(){t.navigateTo({url:"/pages/mine/billdetail/?orderNo="+e.paymentResult.no})},fail:function(){t.showToast({title:"取消支付,将放入待支付队列",icon:"none"}),setTimeout(function(){t.navigateTo({url:"/pages/mine/billdetail/?orderNo="+e.paymentResult.no})},999)}}):t.showToast({title:e.msg,icon:"none"})})},cancelBill:function(t){},toTab:function(e){t.reLaunch({url:"/pages/shop/shop"})},toUrl:function(e){t.navigateTo({url:e})},bill:function(t){var e=this;e.data=[],"all"==e.state?this.$ajax("/order/page","POST",{pageNo:1,pageSize:10}).then(function(t){t.list.map(function(t){e.data.push(t)}),console.log(e.data)}):this.$ajax("/order/page","POST",{pageNo:1,pageSize:10,state:e.state}).then(function(t){t.list.map(function(t){e.data.push(t)}),console.log(e.data)})},changeIndex:function(t){console.log(t),this.state=t.value,this.bill()},detail:function(e){t.showLoading({title:"加载中"}),t.hideLoading(),t.navigateTo({url:"/pages/mine/billdetail?orderNo="+e.orderNo})}},filters:{position:function(t){return-1==t?"取消订单":1==t?"待支付":2==t?"待发货":3==t?"待收货":0==t?"交易成功":-1==t?"取消订单":void 0},size:function(t){var e=JSON.parse(t),n="";return e.map(function(t){n=n+" "+t.value}),n}}};e.default=o}).call(this,n("543d")["default"])},dc70:function(t,e,n){"use strict";var a=n("68ab"),o=n.n(a);o.a},e34f:function(t,e,n){"use strict";n.r(e);var a=n("8994"),o=n("999e");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("dc70");var u=n("2877"),l=Object(u["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=l.exports}},[["89db","common/runtime","common/vendor"]]]);