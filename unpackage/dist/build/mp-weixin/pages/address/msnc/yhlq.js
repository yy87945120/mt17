(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/address/msnc/yhlq"],{"09a1":function(n,e,t){"use strict";t.r(e);var o=t("8d0e"),c=t.n(o);for(var r in o)"default"!==r&&function(n){t.d(e,n,function(){return o[n]})}(r);e["default"]=c.a},"308b":function(n,e,t){"use strict";var o=function(){var n=this,e=n.$createElement;n._self._c},c=[];t.d(e,"a",function(){return o}),t.d(e,"b",function(){return c})},"364a":function(n,e,t){"use strict";t.r(e);var o=t("308b"),c=t("09a1");for(var r in c)"default"!==r&&function(n){t.d(e,n,function(){return c[n]})}(r);t("c529");var a=t("2877"),i=Object(a["a"])(c["default"],o["a"],o["b"],!1,null,null,null);e["default"]=i.exports},"69d2":function(n,e,t){"use strict";(function(n){t("7b40"),t("921b");o(t("66fd"));var e=o(t("364a"));function o(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},"8d0e":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){return Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"ad37"))},c=function(){return t.e("components/contact/contact").then(t.bind(null,"5475"))},r=function(){return t.e("components/banner/banner").then(t.bind(null,"5242"))},a=function(){return t.e("components/counter/counter").then(t.bind(null,"84bc"))},i={components:{contact:c,counter:a,banner:r,wPicker:o},data:function(){return{title:"Hello",num18:1,price:9.99,province:"",city:"",area:"",address:"",phone:"",addressDetail:"",reciver:""}},onLoad:function(){},methods:{toUrl:function(e){n.navigateTo({url:e})},onConfirm:function(n){console.log(n),this.province=n.checkArr[0],this.city=n.checkArr[1],this.area=n.checkArr[2],this.address=n.checkArr[0]+n.checkArr[1]+n.checkArr[2]},openAddress:function(){this.$refs.picker.show()},setNum:function(n){this.num18=n},pay:function(){var e=this;return""==this.reciver?(n.showToast({title:"请添加收货人",icon:"none"}),!1):""==this.phone?(n.showToast({title:"请填写手机",icon:"none"}),!1):/^1[3456789]\d{9}$/.test(e.phone)?0==this.num18?(n.showToast({title:"数量不能为0，请添加数量",icon:"none"}),!1):""==this.address?(n.showToast({title:"请输入详细地址",icon:"none"}),!1):""==this.addressDetail?(n.showToast({title:"想输入详细地址",icon:"none"}),!1):void n.showModal({title:e.price*e.num18+"元",content:"收货人："+e.reciver+"("+e.phone+")\n收货地址："+e.address+e.addressDetail,confirmText:"去支付",success:function(t){t.confirm&&e.$ajax("/order/preferential/buy","POST",{skuId:1,count:e.num18,receiver:e.reciver,phone:e.phone,province:e.province,city:e.city,area:e.area,detail:e.detail,defaultFlag:0}).then(function(e){console.log(e),"200"==e.code&&(console.log(e),n.requestPayment({provider:"wxpay",appId:e.paymentResult.payment.appId,timeStamp:e.paymentResult.payment.timeStamp,nonceStr:e.paymentResult.payment.nonceStr,package:e.paymentResult.payment.package,signType:e.paymentResult.payment.signType,paySign:e.paymentResult.payment.paySign,success:function(){n.navigateTo({url:"/pages/shop/payment?orderNo="+e.paymentResult.no})},fail:function(){n.showToast({title:"取消支付",icon:"none"})}}))})}}):(n.showToast({title:"手机号码格式不正确",icon:"none"}),!1)}}};e.default=i}).call(this,t("543d")["default"])},b7f4:function(n,e,t){},c529:function(n,e,t){"use strict";var o=t("b7f4"),c=t.n(o);c.a}},[["69d2","common/runtime","common/vendor"]]]);