(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["views-tabbar-index"],{"0a23":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-text",{staticClass:"uni-icons",class:[t.customIcons,t.customIcons?t.type:""],style:{color:t.color,"font-size":t.size+"px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._onClick.apply(void 0,arguments)}}},[t._v(t._s(t.icons[t.type]))])},o=[]},1891:function(t,e,i){"use strict";var n=i("5337"),a=i.n(n);a.a},"1bb3":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={ccTabbar:i("d17a").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticStyle:{background:"#F7F8FA"}},[i("v-uni-view",{staticClass:"demo"},[i("v-uni-view",{staticClass:"demo-title"},[t._v("基础用法")]),i("v-uni-view",{staticClass:"demo-item"},[i("cc-tabbar",{attrs:{list:t.list1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.handleChange.apply(void 0,arguments)}}})],1)],1),i("v-uni-view",{staticClass:"demo"},[i("v-uni-view",{staticClass:"demo-title"},[t._v("徽标提示")]),i("v-uni-view",{staticClass:"demo-item"},[i("cc-tabbar",{attrs:{list:t.list2}})],1)],1),i("v-uni-view",{staticClass:"demo"},[i("v-uni-view",{staticClass:"demo-title"},[t._v("自定义颜色")]),i("v-uni-view",{staticClass:"demo-item"},[i("cc-tabbar",{attrs:{list:t.list1,"active-color":"#ee0a24","inactive-color":"#000"}})],1)],1),i("v-uni-view",{staticClass:"demo"},[i("v-uni-view",{staticClass:"demo-title"},[t._v("自定义背景颜色")]),i("v-uni-view",{staticClass:"demo-item"},[i("cc-tabbar",{attrs:{list:t.list1,bgcolor:"#ddd"}})],1)],1),i("v-uni-view",{staticClass:"demo"},[i("v-uni-view",{staticClass:"demo-title"},[t._v("路由跳转")]),i("v-uni-view",{staticClass:"demo-item"},[i("cc-tabbar",{attrs:{list:t.list3,router:!0}})],1)],1),i("v-uni-view",{staticClass:"demo"},[i("v-uni-view",{staticClass:"demo-title"},[t._v("中间凸起按钮")]),i("v-uni-view",{staticClass:"demo-item"},[i("cc-tabbar",{attrs:{list:t.list4},scopedSlots:t._u([{key:"plus",fn:function(t){var e=t.item;return[i("img",{attrs:{width:"37",height:"37",src:e.active?"https://cdn.uviewui.com/uview/common/min_button_select.png":"https://cdn.uviewui.com/uview/common/min_button.png"}})]}}])})],1)],1)],1)},o=[]},"1de5":function(t,e,i){"use strict";t.exports=function(t,e){return e||(e={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},"28fa":function(t,e,i){"use strict";i.r(e);var n=i("1bb3"),a=i("8ebb");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("322a");var r,c=i("f0c5"),l=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"2a94b931",null,!1,n["a"],r);e["default"]=l.exports},"322a":function(t,e,i){"use strict";var n=i("3d37"),a=i.n(n);a.a},"3d37":function(t,e,i){var n=i("fb3c");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("6ccbd835",n,!0,{sourceMap:!1,shadowMode:!1})},"4a71":function(t,e,i){var n=i("24fb"),a=i("1de5"),o=i("86d9");e=n(!1);var r=a(o);e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */@font-face{font-family:uniicons;src:url('+r+') format("truetype")}.uni-icons[data-v-2be89183]{font-family:uniicons;text-decoration:none;text-align:center}',""]),t.exports=e},5337:function(t,e,i){var n=i("a3de");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("39dc3e22",n,!0,{sourceMap:!1,shadowMode:!1})},5364:function(t,e,i){"use strict";var n=i("4ea4");i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("d7f5")),o={name:"cc-icon",props:{type:{type:String,default:""},color:{type:String,default:"#333333"},size:{type:[Number,String],default:16},customIcons:{type:String,default:""}},data:function(){return{icons:a.default}},methods:{_onClick:function(){this.$emit("click")}}};e.default=o},"73d7":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={components:{},props:{},data:function(){return{list1:[{text:"首页",icon:"home"},{text:"分类",icon:"bars"},{text:"购物车",icon:"cart"},{text:"我的",icon:"person"}],list2:[{text:"首页",icon:"home",dot:!0},{text:"分类",icon:"bars",count:1},{text:"购物车",icon:"cart",dot:!0},{text:"我的",icon:"person",count:22}],list3:[{text:"首页",icon:"home",url:"/tabbar"},{text:"分类",icon:"bars",url:"/category"},{text:"购物车",icon:"cart",url:"/cart"},{text:"我的",icon:"person",url:"/my"}],list4:[{text:"首页",icon:"home",url:"/tabbar"},{text:"分类",icon:"bars",url:"/category"},{text:"发布",slots:"plus",midButton:!0},{text:"购物车",icon:"cart",url:"/cart"},{text:"我的",icon:"person",url:"/my"}]}},methods:{handleChange:function(t){var e=t.item,i=t.index;console.log(e,i)}},mounted:function(){},onLoad:function(){},onShow:function(){},filters:{},computed:{},watch:{}};e.default=n},"7e3d":function(t,e,i){"use strict";i.r(e);var n=i("f567"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"86d9":function(t,e,i){t.exports=i.p+"static/fonts/uni.75745d34.ttf"},"8ebb":function(t,e,i){"use strict";i.r(e);var n=i("73d7"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"9ba7":function(t,e,i){"use strict";var n=i("f7ee"),a=i.n(n);a.a},a243:function(t,e,i){"use strict";i.r(e);var n=i("5364"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},a3de:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.cc-tabbar[data-v-32ec6024]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%}.cc-tabbar-fixed[data-v-32ec6024]{position:fixed;left:0;bottom:0}.cc-tabbar-border[data-v-32ec6024]{border-top:1px solid #eee}.cc-tabbar-item[data-v-32ec6024]{position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:14px;padding:%?8?% 0}.cc-tabbar-item-midbtn[data-v-32ec6024]{width:37px;height:37px;border-radius:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:absolute;background-color:#fff;top:-16px;left:0;z-index:6}.cc-tabbar-item-icon[data-v-32ec6024]{position:relative}.cc-tabbar-item-count[data-v-32ec6024]{position:absolute;top:%?16?%;right:%?-16?%;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:%?32?%;padding:0 %?6?%;color:#fff;font-weight:500;font-size:12px;text-align:center;background-color:#ee0a24;border:1px solid #fff;border-radius:%?32?%;-webkit-transform:translate(50%,-50%);transform:translate(50%,-50%);-webkit-transform-origin:100%;transform-origin:100%}.cc-tabbar-item-dot[data-v-32ec6024]{position:absolute;width:%?16?%;height:%?16?%;background:#ee0a24;border-radius:100%;top:%?8?%;right:%?-12?%;-webkit-transform:translate(50%,-50%);transform:translate(50%,-50%);-webkit-transform-origin:100%;transform-origin:100%}',""]),t.exports=e},b2bc:function(t,e,i){"use strict";i.r(e);var n=i("0a23"),a=i("a243");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("9ba7");var r,c=i("f0c5"),l=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"2be89183",null,!1,n["a"],r);e["default"]=l.exports},d17a:function(t,e,i){"use strict";i.r(e);var n=i("dff1"),a=i("7e3d");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("1891");var r,c=i("f0c5"),l=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"32ec6024",null,!1,n["a"],r);e["default"]=l.exports},d7f5:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={pulldown:"",refreshempty:"",back:"",forward:"",more:"","more-filled":"",scan:"",qq:"",weibo:"",weixin:"",pengyouquan:"",loop:"",refresh:"","refresh-filled":"",arrowthindown:"",arrowthinleft:"",arrowthinright:"",arrowthinup:"","undo-filled":"",undo:"",redo:"","redo-filled":"",bars:"",chatboxes:"",camera:"","chatboxes-filled":"","camera-filled":"","cart-filled":"",cart:"","checkbox-filled":"",checkbox:"",arrowleft:"",arrowdown:"",arrowright:"","smallcircle-filled":"",arrowup:"",circle:"","eye-filled":"","eye-slash-filled":"","eye-slash":"",eye:"","flag-filled":"",flag:"","gear-filled":"",reload:"",gear:"","hand-thumbsdown-filled":"","hand-thumbsdown":"","hand-thumbsup-filled":"","heart-filled":"","hand-thumbsup":"",heart:"",home:"",info:"","home-filled":"","info-filled":"","circle-filled":"","chat-filled":"",chat:"","mail-open-filled":"","email-filled":"","mail-open":"",email:"",checkmarkempty:"",list:"","locked-filled":"",locked:"","map-filled":"","map-pin":"","map-pin-ellipse":"",map:"","minus-filled":"","mic-filled":"",minus:"",micoff:"",mic:"",clear:"",smallcircle:"",close:"",closeempty:"",paperclip:"",paperplane:"","paperplane-filled":"","person-filled":"","contact-filled":"",person:"",contact:"","images-filled":"",phone:"",images:"",image:"","image-filled":"","location-filled":"",location:"","plus-filled":"",plus:"",plusempty:"","help-filled":"",help:"","navigate-filled":"",navigate:"","mic-slash-filled":"",search:"",settings:"",sound:"","sound-filled":"","spinner-cycle":"","download-filled":"","personadd-filled":"","videocam-filled":"",personadd:"",upload:"","upload-filled":"",starhalf:"","star-filled":"",star:"",trash:"","phone-filled":"",compose:"",videocam:"","trash-filled":"",download:"","chatbubble-filled":"",chatbubble:"","cloud-download":"","cloud-upload-filled":"","cloud-upload":"","cloud-download-filled":"",headphones:"",shop:""};e.default=n},dff1:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={ccIcon:i("b2bc").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"cc-tabbar",class:{"cc-tabbar-fixed":t.fixed,"cc-tabbar-border":t.border},style:{height:t.height+"rpx",background:t.bgColor,zIndex:t.zIndex}},t._l(t.cloneList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"cc-tabbar-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clickItem(e,n)}}},[i("v-uni-view",{staticClass:"cc-tabbar-item-icon",class:{"cc-tabbar-item-midbtn":e.midButton}},[e.dot?i("v-uni-view",{staticClass:"cc-tabbar-item-dot"}):t._e(),Number(e.count)>0?i("v-uni-view",{staticClass:"cc-tabbar-item-count"},[t._v(t._s(e.count))]):t._e(),e.slots?t._t(e.slots,null,{item:e}):i("cc-icon",{attrs:{type:e.icon,color:t.router?t.route===e.url?t.activeColor:t.inactiveColor:t.currentIndex===n?t.activeColor:t.inactiveColor,size:t.iconSize}})],2),i("v-uni-view",{staticClass:"cc-tabbar-item-text",style:{color:t.router?t.route===e.url?t.activeColor:t.inactiveColor:t.currentIndex===n?t.activeColor:t.inactiveColor}},[t._v(t._s(e.text))])],1)})),1)},o=[]},f567:function(t,e,i){"use strict";i("d81d"),i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"cc-tabbar",components:{},props:{value:{type:Number,default:0},list:{type:Array,required:!0},fixed:{type:Boolean,default:!1},border:{type:Boolean,default:!0},router:{type:Boolean,default:!1},activeColor:{type:String,default:"#0081ff"},inactiveColor:{type:String,default:"#7d7e80"},iconSize:{type:[String,Number],default:20},height:{type:[String,Number],default:100},bgColor:{type:String,default:"#fff"},zIndex:{type:[Number,String],default:999}},data:function(){return{cloneList:this.list,currentIndex:this.value,route:null}},methods:{clickItem:function(t,e){t.url&&(uni.navigateTo({url:t.url}),this.currentIndex=t.url),this.cloneList.map((function(t){t.active=!1})),t.active=!0,this.currentIndex=e,this.$emit("change",{item:t,index:e})}},mounted:function(){var t=this;this.cloneList.map((function(e,i){t.currentIndex===i?t.$set(e,"active",!0):t.$set(e,"active",!1)}));var e=getCurrentPages();this.route=e[e.length-1].route},onLoad:function(){},onShow:function(){},filters:{},computed:{},watch:{}};e.default=n},f7ee:function(t,e,i){var n=i("4a71");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("201d0f9a",n,!0,{sourceMap:!1,shadowMode:!1})},fb3c:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.demo[data-v-2a94b931]{margin-bottom:%?40?%}.demo-title[data-v-2a94b931]{padding:%?20?%}.demo-title-fixed[data-v-2a94b931]{position:fixed;left:0;right:0;bottom:60px}.demo-item[data-v-2a94b931]{margin-bottom:10px}',""]),t.exports=e}}]);