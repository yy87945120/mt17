(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/about"],{"2f1d":function(t,n,e){"use strict";(function(t){e("7b40"),e("921b");o(e("66fd"));var n=o(e("5451"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},5451:function(t,n,e){"use strict";e.r(n);var o=e("adce"),u=e("689d");for(var c in u)"default"!==c&&function(t){e.d(n,t,function(){return u[t]})}(c);var a=e("2877"),i=Object(a["a"])(u["default"],o["a"],o["b"],!1,null,null,null);n["default"]=i.exports},"689d":function(t,n,e){"use strict";e.r(n);var o=e("ca9b"),u=e.n(o);for(var c in o)"default"!==c&&function(t){e.d(n,t,function(){return o[t]})}(c);n["default"]=u.a},adce:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return u})},ca9b:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=function(){return e.e("components/contact/contact").then(e.bind(null,"5475"))},u={components:{contact:o},data:function(){return{title:"",content:""}},onLoad:function(){this.getInfo()},methods:{toUrl:function(n){t.navigateTo({url:n})},getInfo:function(){var t=this;this.$ajax("/webcontent/info","POST",{code:"about"}).then(function(n){t.title=n.title,t.content=n.content})}}};n.default=u}).call(this,e("543d")["default"])}},[["2f1d","common/runtime","common/vendor"]]]);