(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/billdetail"],{"0fcd":function(t,e,n){"use strict";n.r(e);var i=n("2137"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=o.a},2137:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{title:"Hello",orderNo:"",billDetail:null}},onLoad:function(t){t.orderNo&&(this.orderNo=t.orderNo,this.detail())},methods:{toUrl:function(e){t.navigateTo({url:e})},detail:function(){var t=this;this.$ajax("/order/detail","POST",{orderNo:t.orderNo}).then(function(e){t.billDetail=e})}},filters:{position:function(t){return-1==t?"取消订单":1==t?"待支付":2==t?"待发货":3==t?"待收货":0==t?"交易成功":-1==t?"取消订单":void 0},size:function(t){var e=JSON.parse(t),n="";return e.map(function(t){n=n+" "+t.value}),n},dateTime:function(t){var e=[];e=t.split(".");var n=e[0].replace("T"," ");return n},getP:function(e){this.$ajax("/order/finish","POST",{orderNo:billDetail.orderNo}).then(function(e){"200"==e.code&&(t.showToast({title:"确认收货成功",icon:"none"}),setTimeout(function(){t.reLaunch({url:"/pages/mine/bill"})},888))})}}};e.default=n}).call(this,n("543d")["default"])},"551d":function(t,e,n){},a603:function(t,e,n){"use strict";(function(t){n("7b40"),n("921b");i(n("66fd"));var e=i(n("bf7a"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},bf7a:function(t,e,n){"use strict";n.r(e);var i=n("dbf1"),o=n("0fcd");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("d181");var r=n("2877"),l=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,null,null);e["default"]=l.exports},d181:function(t,e,n){"use strict";var i=n("551d"),o=n.n(i);o.a},dbf1:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=(t._self._c,t._f("position")(t.billDetail.state)),i=t._f("position")(t.billDetail.state),o=t._f("dateTime")(t.billDetail.createTime),a=t.__map(t.billDetail.details,function(e,n){var i=t._f("size")(e.sku.specificationValues);return{$orig:t.__get_orig(e),f3:i}});t.$mp.data=Object.assign({},{$root:{f0:n,f1:i,f2:o,l0:a}})},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})}},[["a603","common/runtime","common/vendor"]]]);