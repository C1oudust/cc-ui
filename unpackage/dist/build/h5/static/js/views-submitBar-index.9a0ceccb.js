(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["views-submitBar-index"],{"07b5":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return i}));var i={ccSubmitBar:n("36987").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"item"},[t._v("普通用法")]),n("cc-submit-bar",{attrs:{price:3050},on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"item"},[t._v("禁止提交")]),n("cc-submit-bar",{attrs:{price:3050,disabled:!0},on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"item"},[t._v("加载状态")]),n("cc-submit-bar",{attrs:{price:3050,loading:!0}}),n("v-uni-view",{staticClass:"item"},[t._v("控制显示小数点位数")]),n("cc-submit-bar",{attrs:{price:3050,decimalLength:1}}),n("v-uni-view",{staticClass:"item"},[t._v("控制显示货币符号")]),n("cc-submit-bar",{attrs:{price:3050,decimalLength:1,currency:"$"}}),n("v-uni-view",{staticClass:"item"},[t._v("自定义按钮颜色和文字")]),n("cc-submit-bar",{attrs:{price:3050,buttonColor:"#07c160",buttonText:"结算"}}),n("v-uni-view",{staticClass:"item"},[t._v("自定义内容")]),n("cc-submit-bar",{attrs:{price:3050}},[n("v-uni-checkbox",{attrs:{checked:"true"}}),t._v("全选")],1),n("v-uni-view",{staticClass:"item"},[t._v("自定义顶部内容")]),n("cc-submit-bar",{attrs:{price:3050},scopedSlots:t._u([{key:"tip",fn:function(){return[t._v("你的收货地址不支持同城送,"),n("v-uni-text",{staticStyle:{color:"#007AFF"}},[t._v("修改地址")])]},proxy:!0}])})],1)},c=[]},"14e0":function(t,e,n){"use strict";var i=n("c8a5"),a=n.n(i);a.a},"164c":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.item[data-v-06059540]{font-size:18px;font-weight:700}',""]),t.exports=e},36987:function(t,e,n){"use strict";n.r(e);var i=n("77d3"),a=n("4a4a");for(var c in a)"default"!==c&&function(t){n.d(e,t,(function(){return a[t]}))}(c);n("e6da");var r,s=n("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"6e503c04",null,!1,i["a"],r);e["default"]=u.exports},"4a4a":function(t,e,n){"use strict";n.r(e);var i=n("f6bf"),a=n.n(i);for(var c in i)"default"!==c&&function(t){n.d(e,t,(function(){return i[t]}))}(c);e["default"]=a.a},"722b":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{}},components:{},methods:{submit:function(){console.log("submit")}}};e.default=i},"77d3":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t.$slots.tip?n("v-uni-view",{staticClass:"tip"},[t._t("tip")],2):t._e(),n("v-uni-view",{staticClass:"container flex a-center"},[t._t("default"),n("v-uni-view",{staticClass:"flex j-end a-center f-1"},[n("v-uni-view",{staticClass:"label"},[t._v(t._s(t.label)+":")]),n("v-uni-view",{staticClass:"price flex a-center"},[n("v-uni-view",{staticClass:"currency"},[t._v(t._s(t.currency))]),n("v-uni-view",{staticClass:"leftPrice"},[t._v(t._s(t.leftPrice))]),n("v-uni-view",{staticClass:"rightPrice"},[t._v("."+t._s(t.rightPrice))])],1),n("v-uni-view",[n("v-uni-button",{staticClass:"button flex a-center j-center",class:{disable:t.disabled},style:{background:t.buttonColor},attrs:{loading:t.loading},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t.loading?t._e():n("span",[t._v(t._s(t.buttonText))])])],1)],1)],2)],1)},c=[]},"96e9":function(t,e,n){"use strict";n.r(e);var i=n("07b5"),a=n("a777");for(var c in a)"default"!==c&&function(t){n.d(e,t,(function(){return a[t]}))}(c);n("14e0");var r,s=n("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"06059540",null,!1,i["a"],r);e["default"]=u.exports},a1a6:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.w100[data-v-6e503c04]{width:100%}.f-1[data-v-6e503c04]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.flex[data-v-6e503c04]{display:-webkit-box;display:-webkit-flex;display:flex}.a-center[data-v-6e503c04]{-webkit-box-align:center;-webkit-align-items:center;align-items:center}.j-center[data-v-6e503c04]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.j-between[data-v-6e503c04]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.j-end[data-v-6e503c04]{-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.container[data-v-6e503c04]{height:50px;padding:0 16px;font-size:14px;position:relative}.container .price[data-v-6e503c04]{margin:0 %?10?%;color:#ee0a24}.container .price .currency[data-v-6e503c04]{font-size:12px;position:relative;top:%?2?%}.container .price .leftPrice[data-v-6e503c04]{font-size:20px;font-weight:500}.container .price .rightPrice[data-v-6e503c04]{font-size:12px;position:relative;top:%?2?%}.container .button[data-v-6e503c04]{width:%?220?%;height:%?80?%;border-radius:%?1998?%;color:#fff;margin-left:%?10?%;font-size:16px}.tip[data-v-6e503c04]{padding:8px 12px;color:#f56723;font-size:12px;line-height:1.5;background-color:#fff7cc}.disable[data-v-6e503c04]{cursor:not-allowed;opacity:.5}',""]),t.exports=e},a777:function(t,e,n){"use strict";n.r(e);var i=n("722b"),a=n.n(i);for(var c in i)"default"!==c&&function(t){n.d(e,t,(function(){return i[t]}))}(c);e["default"]=a.a},c8a5:function(t,e,n){var i=n("164c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("42021054",i,!0,{sourceMap:!1,shadowMode:!1})},e6da:function(t,e,n){"use strict";var i=n("fe18"),a=n.n(i);a.a},f6bf:function(t,e,n){"use strict";n("a9e3"),n("b680"),n("ac1f"),n("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"cc-submit-bar",components:{},props:{price:{type:Number,required:!0},label:{type:String,default:"合计"},buttonText:{type:String,default:"提交订单"},buttonColor:{type:String,default:"#ee0a24"},currency:{type:String,default:"¥"},decimalLength:{type:[String,Number],default:"2"},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},data:function(){return{leftPrice:0,rightPrice:0}},methods:{submit:function(t){this.disabled||this.loading||this.$emit("submit",t)}},mounted:function(){this.leftPrice=Math.floor(this.price/100),this.rightPrice=String((this.price/100).toFixed(this.decimalLength)).split(".")[1]}};e.default=i},fe18:function(t,e,n){var i=n("a1a6");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("6cbf2147",i,!0,{sourceMap:!1,shadowMode:!1})}}]);