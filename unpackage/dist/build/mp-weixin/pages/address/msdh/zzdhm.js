(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/address/msdh/zzdhm","components/link/link"],{"0995":function(n,t,o){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;e(o("ed48"));function e(n){return n&&n.__esModule?n:{default:n}}var a=function(){return o.e("components/an-uploadImg/an-uploadImg").then(o.bind(null,"758d"))},i=function(){return o.e("components/an-uploadVideo/an-uploadVideo").then(o.bind(null,"a35b"))},r=function(){return o.e("components/an-uploadAdv/an-uploadAdv").then(o.bind(null,"d706"))},u=function(){return o.e("components/uni-icons/uni-icons").then(o.bind(null,"1122"))},c=function(){return o.e("components/banner/banner").then(o.bind(null,"5242"))},d=function(){return o.e("components/contact/contact").then(o.bind(null,"5475"))},s={components:{anUploadImg:a,anUploadVideo:i,anUploadAdv:r,uniIcon:u,banner:c,contact:d},data:function(){return{title:"Hello",par:{address:"",name:"",longitude:0,latitude:0},decode:!0,img:[{type:"room"}],companyInformation:{innerImgs:[],realImgs:[],videos:[],info:"",realPhone:"",owner:"",address:"",addressType:"",addressDetail:"",addressName:"",longitude:0,latitude:0,advImg:[],advLikn:"",buyAdv:0,contack:"",explain:"",codeName:"",otherContacts:""},validatePhone:"",read:!1}},onLoad:function(n){this.par=JSON.parse(n.res)},onShow:function(){},methods:{xy:function(){n.navigateTo({url:"/pages/xy/xy"})},blade:function(){n.showToast({title:"此功能尚未开发，敬请期待"})},buyAdv17:function(){this.companyInformation.buyAdv?(n.showToast({title:"关闭广告位成功"}),this.companyInformation.buyAdv=0,this.$refs.uploadAdv.refresh(),this.companyInformation.advLikn=""):(n.showToast({title:"开启广告位成功，广告位将收取一定费用"}),this.companyInformation.buyAdv=1)},refreshImageList:function(n,t){"room"==t&&(this.companyInformation.innerImgs=n),"live"==t&&(this.companyInformation.realImgs=n),"activity"==t&&(this.companyInformation.advImgs=n,console.log(n),console.log(this.companyInformation.advImg))},refreshVideoList:function(n){console.log(123),this.companyInformation.videos=n},payAll:function(){var t=this;if(this.read){if(n.showLoading({title:"正在生成二维码",mask:"true"}),n.showLoading({title:"正在生成"}),""==t.companyInformation.addressDetail)return n.showToast({title:"详细地址不能为空",icon:"none"}),!1;if(""==t.companyInformation.addressName)return n.showToast({title:"地址名称不能为空",icon:"none"}),!1;1==t.companyInformation.buyAdv?this.$ajax("/nav/apply","POST",t.companyInformation).then(function(t){n.hideLoading(),t?n.requestPayment({provider:"wxpay",timeStamp:t.payment.timeStamp,nonceStr:t.payment.nonceStr,package:t.payment.package,signType:t.payment.signType,paySign:t.payment.paySign,success:function(){n.setStorageSync("qrcodeNo",t.no),n.reLaunch({url:"/pages/address/msdh/dhsc?qrcode="+t.no})},fail:function(){n.showToast({title:"取消支付",icon:"none"})}}):n.showToast({title:"服务器错误，请稍后再试"})}):this.$ajax("/nav/apply","POST",t.companyInformation).then(function(t){n.hideLoading(),t?(n.setStorageSync("qrcodeNo",t.no),n.navigateTo({url:"/pages/address/msdh/dhsc?qrcode="+t.no})):n.showToast({title:"服务器异常,请稍后再试",icon:"none"})})}else n.showToast({title:"请先阅读免责协议，勾选后再提交",icon:"none"})},toSearch:function(){var t=this;n.chooseLocation({keyword:"",success:function(n){t.par=n}})},tip:function(){0==this.companyInformation.buyAdv&&n.showToast({title:"亲，请先按下方按钮开启广告位",icon:"none"})},toUrl:function(t){n.navigateTo({url:t})}},watch:{par:{handler:function(n,t){this.companyInformation.address=n.name+"("+n.address+")",this.companyInformation.latitude=n.latitude,this.companyInformation.longitude=n.longitude},deep:!0,immediate:!0}}};t.default=s}).call(this,o("543d")["default"])},3238:function(n,t,o){"use strict";o.r(t);var e=o("42dc"),a=o.n(e);for(var i in e)"default"!==i&&function(n){o.d(t,n,function(){return e[n]})}(i);t["default"]=a.a},"42dc":function(n,t,o){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={data:function(){return{title:"Hello"}},onLoad:function(){},methods:{toUrl:function(t){n.navigateTo({url:t})}}};t.default=o}).call(this,o("543d")["default"])},"635d":function(n,t,o){"use strict";var e=function(){var n=this,t=n.$createElement;n._self._c;n._isMounted||(n.e0=function(t){n.read=!n.read})},a=[];o.d(t,"a",function(){return e}),o.d(t,"b",function(){return a})},8423:function(n,t,o){"use strict";var e=function(){var n=this,t=n.$createElement;n._self._c},a=[];o.d(t,"a",function(){return e}),o.d(t,"b",function(){return a})},a585:function(n,t,o){"use strict";(function(n){o("7b40"),o("921b");e(o("66fd"));var t=e(o("ddb1"));function e(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,o("543d")["createPage"])},c964:function(n,t,o){},d2fc:function(n,t,o){"use strict";var e=o("c964"),a=o.n(e);a.a},ddb1:function(n,t,o){"use strict";o.r(t);var e=o("635d"),a=o("e82b");for(var i in a)"default"!==i&&function(n){o.d(t,n,function(){return a[n]})}(i);o("d2fc");var r=o("2877"),u=Object(r["a"])(a["default"],e["a"],e["b"],!1,null,null,null);t["default"]=u.exports},e82b:function(n,t,o){"use strict";o.r(t);var e=o("0995"),a=o.n(e);for(var i in e)"default"!==i&&function(n){o.d(t,n,function(){return e[n]})}(i);t["default"]=a.a},ed48:function(n,t,o){"use strict";o.r(t);var e=o("8423"),a=o("3238");for(var i in a)"default"!==i&&function(n){o.d(t,n,function(){return a[n]})}(i);var r=o("2877"),u=Object(r["a"])(a["default"],e["a"],e["b"],!1,null,null,null);t["default"]=u.exports}},[["a585","common/runtime","common/vendor"]]]);