(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-plate-input/uni-plate-input"],{2930:function(t,e,n){},"2a61":function(t,e,n){"use strict";var u=n("2930"),r=n.n(u);r.a},"556d":function(t,e,n){"use strict";n.r(e);var u=n("9a7e"),r=n.n(u);for(var i in u)"default"!==i&&function(t){n.d(e,t,function(){return u[t]})}(i);e["default"]=r.a},"914c":function(t,e,n){"use strict";n.r(e);var u=n("b98f"),r=n("556d");for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);n("2a61");var a=n("2877"),c=Object(a["a"])(r["default"],u["a"],u["b"],!1,null,"9ca23f98",null);e["default"]=c.exports},"9a7e":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"uni-plate-input",data:function(){return{type:1,currentInputIndex:0,currentInputValue:["","","","","","",""],fillBlock:[{num:11},{num:12},{num:13},{num:14},{num:15},{num:16}],keyboardHeightInit:!1,keyboardHeight:"auto",provinceText:["粤","京","冀","沪","津","晋","蒙","辽","吉","黑","苏","浙","皖","闽","赣","鲁","豫","鄂","湘","桂","琼","渝","川","贵","云","藏","陕","甘","青","宁"],numberText:["1","2","3","4","5","6","7","8","9","0"],wordText:["A","B","C","D","E","F","G","H","J","K","L","M","N","P","Q","R","S","T","U","V","W","X","Y","Z"],lastWordText:["港","澳","学","领","警"]}},props:{plate:{type:String}},computed:{inputType:function(){switch(this.currentInputIndex){case 0:return 1;case 1:return 2;case 2:return 3;case 3:return 3;case 4:return 3;case 5:return 3;case 6:return 2==this.type?3:4;case 7:return 4;default:return 1}}},watch:{currentInputIndex:function(t,e){var n=this;this.keyboardHeightInit&&this.$nextTick(function(){n.changeKeyboardHeight()})}},methods:{typeChange:function(t){var e=t.detail.value;this.type=parseInt(e),this.currentInputIndex=0,this.currentInputValue=1==e?["","","","","","",""]:["","","","","","","",""]},inputSwitch:function(t){var e=t.currentTarget.dataset.index;this.currentInputIndex=parseInt(e)},chooseKey:function(t){var e=t.currentTarget.dataset.value;this.$set(this.currentInputValue,this.currentInputIndex,e),1==this.type&&this.currentInputIndex<6&&this.currentInputIndex++,2==this.type&&this.currentInputIndex<7&&this.currentInputIndex++},deleteKey:function(){this.$set(this.currentInputValue,this.currentInputIndex,""),0!=this.currentInputIndex&&this.currentInputIndex--},exportPlate:function(){var e=this.currentInputValue.join(""),n=!1;if(1===this.type&&7!=e.length?n=!0:2===this.type&&8!=e.length&&(n=!0),n)return t.showToast({title:"请输入完整的车牌号码",icon:"none"});this.$emit("export",e)},changeKeyboardHeight:function(){var e=this,n=t.createSelectorQuery().in(this);n.select("#keyboard").boundingClientRect(),n.exec(function(n){e.keyboardHeight=n[0].height+t.upx2px(30)+"px",e.keyboardHeightInit=!0})}},mounted:function(){var t=this;console.log(this.plate);var e=this.plate.split("");7===e.length?this.type=1:8===e.length&&(this.type=2),7!==e.length&&8!==e.length||(this.currentInputValue=e,this.currentInputIndex=e.length-1),setTimeout(function(){t.$nextTick(function(){t.changeKeyboardHeight()})},500)}};e.default=n}).call(this,n("543d")["default"])},b98f:function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return u}),n.d(e,"b",function(){return r})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-plate-input/uni-plate-input-create-component',
    {
        'components/uni-plate-input/uni-plate-input-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("914c"))
        })
    },
    [['components/uni-plate-input/uni-plate-input-create-component']]
]);                
