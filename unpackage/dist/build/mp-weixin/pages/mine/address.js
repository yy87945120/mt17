(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/address"],{"0599":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-swipe-action/uni-swipe-action")]).then(n.bind(null,"7776"))},a={components:{uniSwipeAction:s},data:function(){return{title:"Hello",address:null,bill:!1,options2:[{text:"编辑",style:{backgroundColor:"#007AFF"}},{text:"删除",style:{backgroundColor:"#dd524d"}}]}},onLoad:function(e){e.bill&&(this.bill=!0),this.getAddress()},methods:{bindClick:function(t,n){var s=this;console.log(t),"编辑"==t.content.text?(e.setStorageSync("address",JSON.stringify(n)),e.navigateTo({url:"/pages/mine/eaddress"})):e.showModal({content:"删除确认",title:"确定要删除此地址吗？",success:function(t){t.confirm&&s.$ajax("/useraddress/remove","POST",{id:n.id}).then(function(n){t&&(e.showToast({title:"地址已经删除",icon:"none"}),s.getAddress())})}})},picker:function(e,t){},aaddress:function(){e.navigateTo({url:"/pages/mine/aaddress"})},getAddress:function(){var e=this;this.$ajax("/useraddress/page","POST",{pageNo:1,pageSize:10}).then(function(t){e.address=t.list,e.address.map(function(t,n){0==e.address[n].defaultFlag?e.address[n].defaultFlag=!1:e.address[n].defaultFlag=!0}),console.log(e.address)})},setDefalut:function(t,n){console.log(t);var s=this;this.$ajax("/useraddress/setDefault","POST",{id:t.id}).then(function(t){t&&(s.getAddress(),e.showToast({title:"设置成功",icon:"none"}),s.bill&&e.navigateBack({delta:1}))})}}};t.default=a}).call(this,n("543d")["default"])},"0831":function(e,t,n){"use strict";var s=n("c63c"),a=n.n(s);a.a},"450d":function(e,t,n){"use strict";n.r(t);var s=n("8c3d"),a=n("8245");for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);n("0831");var i=n("2877"),d=Object(i["a"])(a["default"],s["a"],s["b"],!1,null,null,null);t["default"]=d.exports},8245:function(e,t,n){"use strict";n.r(t);var s=n("0599"),a=n.n(s);for(var o in s)"default"!==o&&function(e){n.d(t,e,function(){return s[e]})}(o);t["default"]=a.a},"8c3d":function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return s}),n.d(t,"b",function(){return a})},c63c:function(e,t,n){},c82c:function(e,t,n){"use strict";(function(e){n("7b40"),n("921b");s(n("66fd"));var t=s(n("450d"));function s(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])}},[["c82c","common/runtime","common/vendor"]]]);