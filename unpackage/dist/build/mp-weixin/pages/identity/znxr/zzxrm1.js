(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/identity/znxr/zzxrm1"],{"38b3":function(n,t,e){"use strict";(function(n){e("7b40"),e("921b");c(e("66fd"));var t=c(e("96f6"));function c(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},"48bd":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=function(){return e.e("components/an-uploadImg/an-uploadImg").then(e.bind(null,"758d"))},u={components:{anUploadImg:c},data:function(){return{title:"Hello",cjinput17:0,cj:[{name:"50元",value:50,checked:!0},{name:"100元",value:100,checked:!1},{name:"200元",value:200,checked:!1}]}},onLoad:function(){},methods:{toUrl:function(t){n.navigateTo({url:t})},checkedcj17:function(n){n.checked||(this.cj.map(function(n,t){n.checked=!1}),n.checked=!n.checked),this.cjinput17=n.value},pay:function(){var t=this;n.showToast({title:"你要支付的酬金是："+t.cjinput17+"元",icon:"none"})}}};t.default=u}).call(this,e("543d")["default"])},"584b":function(n,t,e){},"5e4c":function(n,t,e){"use strict";var c=e("584b"),u=e.n(c);u.a},"64fa":function(n,t,e){"use strict";var c=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"a",function(){return c}),e.d(t,"b",function(){return u})},"6c32":function(n,t,e){"use strict";e.r(t);var c=e("48bd"),u=e.n(c);for(var a in c)"default"!==a&&function(n){e.d(t,n,function(){return c[n]})}(a);t["default"]=u.a},"96f6":function(n,t,e){"use strict";e.r(t);var c=e("64fa"),u=e("6c32");for(var a in u)"default"!==a&&function(n){e.d(t,n,function(){return u[n]})}(a);e("5e4c");var o=e("2877"),i=Object(o["a"])(u["default"],c["a"],c["b"],!1,null,null,null);t["default"]=i.exports}},[["38b3","common/runtime","common/vendor"]]]);