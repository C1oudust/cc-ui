(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["views-cell-index"],{"09d9":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"cc-cell",components:{},props:{title:{type:String},value:{type:String},label:{type:String},icon:{type:String},border:{type:Boolean,default:!0},size:{type:String},isLink:{type:Boolean,default:!1},arrowDirection:{type:String,default:"right"},iconSize:{type:String,default:"16"}},data:function(){return{}},methods:{onClick:function(){this.$emit("click")}},mounted:function(){console.log()},onLoad:function(){},onShow:function(){},filters:{},computed:{},watch:{}};t.default=n},"09e7":function(e,t,i){"use strict";i.r(t);var n=i("09d9"),l=i.n(n);for(var c in n)"default"!==c&&function(e){i.d(t,e,(function(){return n[e]}))}(c);t["default"]=l.a},"0a23":function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return l})),i.d(t,"c",(function(){return c})),i.d(t,"a",(function(){return n}));var l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-text",{staticClass:"uni-icons",class:[e.customIcons,e.customIcons?e.type:""],style:{color:e.color,"font-size":e.size+"px"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e._onClick.apply(void 0,arguments)}}},[e._v(e._s(e.icons[e.type]))])},c=[]},"1b95":function(e,t,i){"use strict";i.r(t);var n=i("226e"),l=i("09e7");for(var c in l)"default"!==c&&function(e){i.d(t,e,(function(){return l[e]}))}(c);i("497b");var a,o=i("f0c5"),r=Object(o["a"])(l["default"],n["b"],n["c"],!1,null,"868e5dc6",null,!1,n["a"],a);t["default"]=r.exports},"1de5":function(e,t,i){"use strict";e.exports=function(e,t){return t||(t={}),e=e&&e.__esModule?e.default:e,"string"!==typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},"226e":function(e,t,i){"use strict";i.d(t,"b",(function(){return l})),i.d(t,"c",(function(){return c})),i.d(t,"a",(function(){return n}));var n={ccIcon:i("b2bc").default},l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"cc-cell",class:[{"cc-cell-large":e.size},{"cc-cell-border":e.border}],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick.apply(void 0,arguments)}}},[i("v-uni-view",[i("v-uni-view",{staticClass:"cc-cell-title"},[e.icon?i("v-uni-view",{staticClass:"cc-cell-left-icon"},[i("cc-icon",{attrs:{size:e.iconSize,type:e.icon,color:"#323233"}}),e._t("left-icon")],2):e._e(),i("v-uni-view",[e.title?i("v-uni-text",[e._v(e._s(e.title))]):e._t("title")],2)],1),i("v-uni-view",{staticClass:"cc-cell-label"},[e.label?i("v-uni-text",[e._v(e._s(e.label))]):e._t("label")],2)],1),i("v-uni-view",{staticClass:"cc-cell-value"},[i("v-uni-view",{staticClass:"cc-cell-value-wrap"},[e.value?i("v-uni-text",[e._v(e._s(e.value))]):i("v-uni-view",{staticStyle:{width:"100%",display:"flex","align-items":"center"}},[e._t("value")],2)],1),i("v-uni-view",{staticClass:"cc-cell-right-icon"},[e.isLink?i("cc-icon",{attrs:{color:"#969799",type:"arrow"+e.arrowDirection,size:e.iconSize}}):e._e(),e._t("right-icon")],2)],1)],1)},c=[]},3944:function(e,t,i){var n=i("97d0");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var l=i("4f06").default;l("47835a5a",n,!0,{sourceMap:!1,shadowMode:!1})},"497b":function(e,t,i){"use strict";var n=i("3944"),l=i.n(n);l.a},"4a71":function(e,t,i){var n=i("24fb"),l=i("1de5"),c=i("86d9");t=n(!1);var a=l(c);t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */@font-face{font-family:uniicons;src:url('+a+') format("truetype")}.uni-icons[data-v-2be89183]{font-family:uniicons;text-decoration:none;text-align:center}',""]),e.exports=t},5364:function(e,t,i){"use strict";var n=i("4ea4");i("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(i("d7f5")),c={name:"cc-icon",props:{type:{type:String,default:""},color:{type:String,default:"#333333"},size:{type:[Number,String],default:16},customIcons:{type:String,default:""}},data:function(){return{icons:l.default}},methods:{_onClick:function(){this.$emit("click")}}};t.default=c},"5f1d":function(e,t,i){"use strict";var n=i("c89e"),l=i.n(n);l.a},8051:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={components:{},props:{},data:function(){return{}},methods:{},mounted:function(){},onLoad:function(){},onShow:function(){},filters:{},computed:{},watch:{}};t.default=n},"86d9":function(e,t,i){e.exports=i.p+"static/fonts/uni.75745d34.ttf"},"97d0":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.cc-cell[data-v-868e5dc6]{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;padding:%?20?% %?32?%;overflow:hidden;color:#323233;font-size:14px;background-color:#fff}.cc-cell-border[data-v-868e5dc6]::after{position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box;content:" ";pointer-events:none;right:%?32?%;bottom:0;left:%?32?%;border-bottom:1px solid #ebedf0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.cc-cell-left-icon[data-v-868e5dc6]{margin-right:%?8?%;-webkit-flex-shrink:0;flex-shrink:0}.cc-cell-large[data-v-868e5dc6]{padding-top:%?24?%;padding-bottom:%?24?%}.cc-cell-title[data-v-868e5dc6], .cc-cell-value[data-v-868e5dc6]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.cc-cell-title[data-v-868e5dc6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.cc-cell-value[data-v-868e5dc6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;overflow:hidden;color:#969799;text-align:right;vertical-align:middle;word-wrap:break-word}.cc-cell-value-wrap[data-v-868e5dc6]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.cc-cell-value .cc-cell-right-icon[data-v-868e5dc6]{position:relative;top:%?2?%;margin-left:%?8?%}.cc-cell-label[data-v-868e5dc6]{margin-top:%?8?%;color:#969799;font-size:12px;line-height:%?36?%}',""]),e.exports=t},"9ba7":function(e,t,i){"use strict";var n=i("f7ee"),l=i.n(n);l.a},a243:function(e,t,i){"use strict";i.r(t);var n=i("5364"),l=i.n(n);for(var c in n)"default"!==c&&function(e){i.d(t,e,(function(){return n[e]}))}(c);t["default"]=l.a},b2bc:function(e,t,i){"use strict";i.r(t);var n=i("0a23"),l=i("a243");for(var c in l)"default"!==c&&function(e){i.d(t,e,(function(){return l[e]}))}(c);i("9ba7");var a,o=i("f0c5"),r=Object(o["a"])(l["default"],n["b"],n["c"],!1,null,"2be89183",null,!1,n["a"],a);t["default"]=r.exports},c3ca:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.title[data-v-abb21edc]{margin:%?20?%}.custom-title[data-v-abb21edc]{margin-right:%?4?%;vertical-align:middle;color:#ee0a24}.danger[data-v-abb21edc]{background-color:#ee0a24;padding:0 %?4?%;color:#fff;font-size:12px;line-height:%?64?%;border-radius:%?2?%}.search-icon[data-v-abb21edc]{font-size:16px;line-height:inherit}',""]),e.exports=t},c6ad:function(e,t,i){"use strict";i.d(t,"b",(function(){return l})),i.d(t,"c",(function(){return c})),i.d(t,"a",(function(){return n}));var n={ccCell:i("1b95").default,ccIcon:i("b2bc").default},l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"title"},[i("v-uni-view",{staticClass:"title"},[e._v("基础语法")]),i("v-uni-view",[i("cc-cell",{attrs:{title:"单元格",value:"内容"}})],1),i("v-uni-view",[i("cc-cell",{attrs:{title:"单元格",label:"描述信息",value:"内容"}})],1),i("v-uni-view",[i("cc-cell",{attrs:{icon:"person",title:"单元格",label:"描述信息",value:"内容"}})],1)],1),i("v-uni-view",{staticClass:"title"},[i("v-uni-view",{staticClass:"title"},[e._v("单元格尺寸")]),i("v-uni-view",[i("cc-cell",{attrs:{size:"large",title:"单元格",value:"内容"}})],1),i("v-uni-view",[i("cc-cell",{attrs:{size:"large",title:"单元格",label:"描述信息",value:"内容"}})],1)],1),i("v-uni-view",{staticClass:"title"},[i("v-uni-view",{staticClass:"title"},[e._v("无边框")]),i("v-uni-view",[i("cc-cell",{attrs:{title:"单元格",value:"内容",border:!1}})],1)],1),i("v-uni-view",{staticClass:"title"},[i("v-uni-view",{staticClass:"title"},[e._v("右侧箭头")]),i("v-uni-view",[i("cc-cell",{attrs:{title:"单元格",isLink:!0}})],1),i("v-uni-view",[i("cc-cell",{attrs:{title:"单元格",value:"内容",isLink:!0}})],1),i("v-uni-view",[i("cc-cell",{attrs:{title:"单元格",value:"内容",isLink:!0,arrowDirection:"left"}})],1),i("v-uni-view",[i("cc-cell",{attrs:{title:"单元格",value:"内容",isLink:!0,arrowDirection:"up"}})],1),i("v-uni-view",[i("cc-cell",{attrs:{title:"单元格",value:"内容",isLink:!0,arrowDirection:"down"}})],1)],1),i("v-uni-view",{staticClass:"title"},[i("v-uni-view",{staticClass:"title"},[e._v("插槽内容")]),i("v-uni-view",[i("cc-cell",{attrs:{value:"内容"},scopedSlots:e._u([{key:"title",fn:function(){return[i("v-uni-text",{staticClass:"custom-title"},[e._v("单元格")]),i("v-uni-text",{staticClass:"danger"},[e._v("标签")])]},proxy:!0}])})],1),i("v-uni-view",[i("cc-cell",{attrs:{title:"单元格"},scopedSlots:e._u([{key:"right-icon",fn:function(){return[i("cc-icon",{attrs:{type:"search"}})]},proxy:!0}])})],1)],1)],1)},c=[]},c89e:function(e,t,i){var n=i("c3ca");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var l=i("4f06").default;l("0a746504",n,!0,{sourceMap:!1,shadowMode:!1})},cfd6:function(e,t,i){"use strict";i.r(t);var n=i("8051"),l=i.n(n);for(var c in n)"default"!==c&&function(e){i.d(t,e,(function(){return n[e]}))}(c);t["default"]=l.a},d7f5:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={pulldown:"",refreshempty:"",back:"",forward:"",more:"","more-filled":"",scan:"",qq:"",weibo:"",weixin:"",pengyouquan:"",loop:"",refresh:"","refresh-filled":"",arrowthindown:"",arrowthinleft:"",arrowthinright:"",arrowthinup:"","undo-filled":"",undo:"",redo:"","redo-filled":"",bars:"",chatboxes:"",camera:"","chatboxes-filled":"","camera-filled":"","cart-filled":"",cart:"","checkbox-filled":"",checkbox:"",arrowleft:"",arrowdown:"",arrowright:"","smallcircle-filled":"",arrowup:"",circle:"","eye-filled":"","eye-slash-filled":"","eye-slash":"",eye:"","flag-filled":"",flag:"","gear-filled":"",reload:"",gear:"","hand-thumbsdown-filled":"","hand-thumbsdown":"","hand-thumbsup-filled":"","heart-filled":"","hand-thumbsup":"",heart:"",home:"",info:"","home-filled":"","info-filled":"","circle-filled":"","chat-filled":"",chat:"","mail-open-filled":"","email-filled":"","mail-open":"",email:"",checkmarkempty:"",list:"","locked-filled":"",locked:"","map-filled":"","map-pin":"","map-pin-ellipse":"",map:"","minus-filled":"","mic-filled":"",minus:"",micoff:"",mic:"",clear:"",smallcircle:"",close:"",closeempty:"",paperclip:"",paperplane:"","paperplane-filled":"","person-filled":"","contact-filled":"",person:"",contact:"","images-filled":"",phone:"",images:"",image:"","image-filled":"","location-filled":"",location:"","plus-filled":"",plus:"",plusempty:"","help-filled":"",help:"","navigate-filled":"",navigate:"","mic-slash-filled":"",search:"",settings:"",sound:"","sound-filled":"","spinner-cycle":"","download-filled":"","personadd-filled":"","videocam-filled":"",personadd:"",upload:"","upload-filled":"",starhalf:"","star-filled":"",star:"",trash:"","phone-filled":"",compose:"",videocam:"","trash-filled":"",download:"","chatbubble-filled":"",chatbubble:"","cloud-download":"","cloud-upload-filled":"","cloud-upload":"","cloud-download-filled":"",headphones:"",shop:""};t.default=n},f7ee:function(e,t,i){var n=i("4a71");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var l=i("4f06").default;l("201d0f9a",n,!0,{sourceMap:!1,shadowMode:!1})},fff9:function(e,t,i){"use strict";i.r(t);var n=i("c6ad"),l=i("cfd6");for(var c in l)"default"!==c&&function(e){i.d(t,e,(function(){return l[e]}))}(c);i("5f1d");var a,o=i("f0c5"),r=Object(o["a"])(l["default"],n["b"],n["c"],!1,null,"abb21edc",null,!1,n["a"],a);t["default"]=r.exports}}]);