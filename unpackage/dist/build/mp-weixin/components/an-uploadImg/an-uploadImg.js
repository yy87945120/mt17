(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/an-uploadImg/an-uploadImg"],{"3f15":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},s=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return s})},"758d":function(t,e,i){"use strict";i.r(e);var n=i("3f15"),s=i("95fb");for(var o in s)"default"!==o&&function(t){i.d(e,t,function(){return s[t]})}(o);i("d240");var a=i("2877"),l=Object(a["a"])(s["default"],n["a"],n["b"],!1,null,null,null);e["default"]=l.exports},"8aad":function(t,e,i){},"95fb":function(t,e,i){"use strict";i.r(e);var n=i("ba54"),s=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=s.a},ba54:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=function(){return i.e("components/uni-icons/uni-icons").then(i.bind(null,"1122"))},s={name:"AnUploadImg",components:{uniIcons:n},onLoad:function(){console.log("长度："+this.size),"wx"==this.type?(this.size=1,console.log("长度："+this.size)):(this.size=3,console.log("长度："+this.size))},data:function(){return{imgBase64List:[],count:0,length:0,arr:[],imgListUrl:[],imgList:[],size:0}},props:["type"],methods:{chooseImage:function(){var e=this;if("wx"!=e.type){var i=3-e.imgList.length;if(3==e.imgListUrl.length)return console.log(e.imgListUrl.length),t.showToast({title:"只能上传3张图片哦",icon:"none"}),!1}else{i=1;if(1==e.imgListUrl.length)return console.log(e.imgListUrl.length),t.showToast({title:"只能上传1张微信图片哦",icon:"none"}),!1}t.chooseImage({count:i,success:function(t){e.arr=t,e.length=e.arr.tempFilePaths.length,e.uploadImg()}})},uploadImg:function(){var e=this,i=e.arr.tempFiles[e.count].size;if(console.log(i),i/1024e3>2)return t.showToast({title:"你第"+(e.count+1)+"图片大于2m，不能上传",icon:"none"}),e.count++,!1;e.imgList.push(e.arr.tempFilePaths[e.count]),t.getFileSystemManager().readFile({filePath:e.arr.tempFilePaths[e.count],encoding:"base64",success:function(i){var n="data:image/jpeg;base64,"+i.data;e.imgBase64List.push(n),console.log(i);var s=t.getStorageSync("token");t.showLoading({title:"正在上传",mask:"true"}),t.uploadFile({url:"https://majieda.rng1021.top/mjd/uploadFile",filePath:e.arr.tempFilePaths[e.count],name:"file",header:{Authorization:s},success:function(i){t.hideLoading(),e.count++,e.imgListUrl.push(JSON.parse(i.data).url),console.log(e.length),console.log(e.count),e.length==e.count?(e.length=0,e.count=0,e.arr=[]):e.uploadImg()}})}})},perviewImg:function(e){var i=[];-1!=e?i[0]=this.imgList[e]:i=this.imgList,t.previewImage({urls:i})},handleRemove:function(t){for(var e=[],i=[],n=[],s=0;s<this.imgList.length;s++)s!=t&&(e.push(this.imgList[s]),i.push(this.imgBase64List[s]),n.push(this.imgListUrl[s]));this.imgList=e,this.imgBase64List=i,this.imgListUrl=n}},watch:{imgListUrl:{handler:function(t,e){this.$emit("getImgList",t)},deep:!0,immediate:!0}}};e.default=s}).call(this,i("543d")["default"])},d240:function(t,e,i){"use strict";var n=i("8aad"),s=i.n(n);s.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/an-uploadImg/an-uploadImg-create-component',
    {
        'components/an-uploadImg/an-uploadImg-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("758d"))
        })
    },
    [['components/an-uploadImg/an-uploadImg-create-component']]
]);                
