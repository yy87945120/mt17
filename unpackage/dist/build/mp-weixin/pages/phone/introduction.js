(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/phone/introduction"],{"0333":function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return u})},4301:function(n,t,e){"use strict";e.r(t);var o=e("0333"),u=e("54d9");for(var c in u)"default"!==c&&function(n){e.d(t,n,function(){return u[n]})}(c);var i=e("2877"),a=Object(i["a"])(u["default"],o["a"],o["b"],!1,null,null,null);t["default"]=a.exports},"54d9":function(n,t,e){"use strict";e.r(t);var o=e("c0c0"),u=e.n(o);for(var c in o)"default"!==c&&function(n){e.d(t,n,function(){return o[n]})}(c);t["default"]=u.a},"9e78":function(n,t,e){"use strict";(function(n){e("7b40"),e("921b");o(e("66fd"));var t=o(e("4301"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},c0c0:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){return e.e("components/contact/contact").then(e.bind(null,"5475"))},u=function(){return e.e("components/banner/banner").then(e.bind(null,"5242"))},c=function(){return e.e("components/uni-popup/uni-popup").then(e.bind(null,"3946"))},i={components:{contact:o,uniPopup:c,banner:u},data:function(){return{title:"Hello",phone:""}},onLoad:function(n){this.showTip(),this.phone=n.phone},methods:{cal17:function(){n.navigateBack({delta:1})},trolley17:function(){var t=this;n.navigateTo({url:"/pages/phone/contactway?phone="+t.phone})},showTip:function(){n.showModal({title:"提示",content:"当用户选择使用真实电话，可以直接确认使用；当前用户选择使用虚拟电话，分为两种情况：1.由于不是合约商用户，需支付XX元。2.是合约商用户，可以直接确认使用。",showCancel:!1,confirmText:"知道了",success:function(n){n.confirm}})},toUrl:function(t){n.navigateTo({url:t})},openPopup:function(){this.$refs.popup.open()}}};t.default=i}).call(this,e("543d")["default"])}},[["9e78","common/runtime","common/vendor"]]]);