(function(t){function e(e){for(var i,o,l=e[0],r=e[1],p=e[2],c=0,d=[];c<l.length;c++)o=l[c],s[o]&&d.push(s[o][0]),s[o]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,p||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,l=1;l<n.length;l++){var r=n[l];0!==s[r]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},s={app:0},a=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var p=0;p<l.length;p++)e(l[p]);var u=r;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0f01":function(t,e,n){t.exports=n.p+"img/7.b6f75e5f.png"},"4f33":function(t,e,n){t.exports=n.p+"img/BAR.791f2f18.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"align"},[n("div",{staticClass:"wrapper"},[n("slotMachine",{staticClass:"slotMachine",attrs:{msg:"Welcome to Your Vue.js App"}})],1)]),n("div",{staticClass:"background"})])},a=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slot-machine"},[n("div",{staticClass:"slotwrap"},[t._l(t.slots,function(e,i){return n("div",{key:i+"-label-1",ref:"slots",refInFor:!0,staticClass:"slot"},[n("div",{staticClass:"slot__window"},[n("div",{staticClass:"slot__wrap"},[t._l(e.items,function(t,e){return n("div",{key:e+"-one",staticClass:"slot__item"},[n("img",{attrs:{src:t.src,width:"140",height:"120",alt:t.label}})])}),t._l(e.items,function(t,e){return n("div",{key:e+"-two",staticClass:"slot__item"},[n("img",{attrs:{src:t.src,width:"140",height:"120",alt:t.label}})])}),t._l(e.items,function(t,e){return n("div",{key:e+"-three",staticClass:"slot__item"},[n("img",{attrs:{src:t.src,width:"140",height:"120",alt:t.label}})])})],2)])])}),n("div",{ref:"winlineTop",staticClass:"winline winline-top"}),n("div",{ref:"winlineCenter",staticClass:"winline winline-center"}),n("div",{ref:"winlineBottom",staticClass:"winline winline-bottom"})],2),n("div",{ref:"win",staticClass:"win"},[t._m(0),n("span",{ref:"wintop"}),n("span",{ref:"wincenter"}),n("span",{ref:"winbottom"}),n("span",{ref:"wintotal",staticClass:"wintotal"})]),n("button",{staticClass:"btn-spin pulse",attrs:{disabled:t.disabled},on:{click:t.start}}),n("div",{staticClass:"balance"},[t._v("Balance: "),n("span",{staticClass:"balance-amount"},[t._v(t._s(t.balance))])]),n("div",{staticClass:"debug"},[n("p",{staticClass:"btn-debug"},[t._v("Debug")]),n("div",{staticClass:"debug-content"},[n("div",[n("span",{staticClass:"debug-head"},[t._v("Balance:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.balanceDebug,expression:"balanceDebug"}],attrs:{id:"balanceDebug",type:"number",min:"1",max:"5000",maxlength:"5",name:"balanceDebug",oninput:"(!validity.rangeOverflow||(value=this.max)) && (!validity.rangeUnderflow||(value=this.min));"},domProps:{value:t.balanceDebug},on:{input:function(e){e.target.composing||(t.balanceDebug=e.target.value)}}}),n("button",{staticClass:"btn-balance-debug",on:{click:t.updateBalance}},[t._v("Update")])]),n("div",{staticClass:"position"},[n("span",{staticClass:"debug-head"},[t._v("Position:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.position,expression:"position"}],attrs:{type:"radio",id:"random",value:"random"},domProps:{checked:t._q(t.position,"random")},on:{change:[function(e){t.position="random"},t.radioRandom]}}),n("label",{attrs:{for:"random"}},[t._v("Random")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.position,expression:"position"}],attrs:{type:"radio",value:"fixed",id:"fixed"},domProps:{checked:t._q(t.position,"fixed")},on:{change:[function(e){t.position="fixed"},t.radioFixed]}}),n("label",{attrs:{for:"fixed"}},[t._v("Fixed")])]),n("div",[n("span",{staticClass:"debug-head"},[t._v("Symbol:")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],attrs:{disabled:t.debugInputsDis},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.selected=e.target.multiple?n:n[0]}}},t._l(t.options,function(e){return n("option",{key:e.value,domProps:{value:e.value}},[t._v(t._s(e.text))])}),0)]),n("div",[n("span",{staticClass:"debug-head"},[t._v("Line:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.lineposition,expression:"lineposition"}],attrs:{disabled:t.debugInputsDis,type:"radio",id:"linetop",value:"1"},domProps:{checked:t._q(t.lineposition,"1")},on:{change:function(e){t.lineposition="1"}}}),n("label",{attrs:{for:"linetop"}},[t._v("Top")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.lineposition,expression:"lineposition"}],attrs:{disabled:t.debugInputsDis,type:"radio",id:"linecenter",value:"0"},domProps:{checked:t._q(t.lineposition,"0")},on:{change:function(e){t.lineposition="0"}}}),n("label",{attrs:{for:"linecenter"}},[t._v("Center")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.lineposition,expression:"lineposition"}],attrs:{disabled:t.debugInputsDis,type:"radio",id:"linebottom",value:"2"},domProps:{checked:t._q(t.lineposition,"2")},on:{change:function(e){t.lineposition="2"}}}),n("label",{attrs:{for:"linebottom"}},[t._v("Bottom")])])])])])},l=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"win-image blink"},[i("img",{attrs:{src:n("7840"),width:"215",height:"179",alt:""}})])}],r=(n("55dd"),n("ac6a"),n("1157")),p=n.n(r),u=n("7bae"),c=p.a;c(document).ready(function(){c(".btn-debug").click(function(){c(".debug-content").slideToggle("fast")})});var d=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)},m={name:"slotMachine",props:{msg:String},data:function(){return{lines:u,el:"#numberBox",slots:[{items:[{label:"CHERRY",src:n("587a")},{label:"7",src:n("0f01")},{label:"3xBAR",src:n("e8e7")},{label:"2xBAR",src:n("ab22")},{label:"BAR",src:n("4f33")}]},{items:[{label:"CHERRY",src:n("587a")},{label:"7",src:n("0f01")},{label:"3xBAR",src:n("e8e7")},{label:"2xBAR",src:n("ab22")},{label:"BAR",src:n("4f33")}]},{items:[{label:"CHERRY",src:n("587a")},{label:"7",src:n("0f01")},{label:"3xBAR",src:n("e8e7")},{label:"2xBAR",src:n("ab22")},{label:"BAR",src:n("4f33")}]}],opts:null,startedAt:null,balance:100,balanceDebug:100,disabled:!1,wintotal:null,wintop:null,wincenter:null,winbottom:null,position:"random",debugInputsDis:!0,lineposition:.5,selected:0,options:[{text:"CHERRY",value:0},{text:"7",value:1},{text:"3xBAR",value:2},{text:"2xBAR",value:3},{text:"BAR",value:4}]}},methods:{radioFixed:function(){this.lineposition=1,this.debugInputsDis=!1},radioRandom:function(){this.lineposition=.5,this.debugInputsDis=!0},updateBalance:function(){this.balance=parseInt(this.balanceDebug),this.balance>0&&(this.disabled=!1)},start:function(){var t=this;this.opts||(this.wintotal=null,this.wintop=null,this.wincenter=null,this.winbottom=null,this.$refs.wintop.innerText="",this.$refs.wincenter.innerText="",this.$refs.winbottom.innerText="",this.$refs.winlineTop.style.display="none",this.$refs.winlineCenter.style.display="none",this.$refs.winlineBottom.style.display="none",this.balance-=1,this.disabled=!0,this.resultCenter=[],this.resultTop=[],this.resultBottom=[],this.$refs.win.style.display="none",this.opts=this.slots.map(function(e,n){var i,s=t.$refs.slots[n];i="random"==t.position?Math.floor(Math.random()*e.items.length):2==t.lineposition?t.selected-1:t.selected,Math.random()<t.lineposition?(s.querySelector(".slot__wrap").style.marginTop="-80px",2==t.lineposition&&i<0?t.resultTop.push(e.items[e.items.length-1].label):t.resultTop.push(e.items[i].label),i===e.items.length-1?t.resultBottom.push(e.items[0].label):t.resultBottom.push(e.items[i+1].label)):(s.querySelector(".slot__wrap").style.marginTop="0",t.resultCenter.push(e.items[i].label));var a={el:s.querySelector(".slot__wrap"),finalPos:180*i-90,startOffset:2e3,height:180*e.items.length,duration:2e3+500*n,isFinished:!1};return a}),d(this.animate))},animate:function(t){null==this.startedAt&&(this.startedAt=t);var e=t-this.startedAt;this.opts.forEach(function(t){if(!t.isFinished){var n=Math.max(t.duration-e,0),i=6,s=Math.pow(n,i)/Math.pow(t.duration,i)*t.startOffset,a=-1*Math.floor((s+t.finalPos)%t.height+t.height);t.el.style.transform="translateY("+a+"px)",e>t.duration&&(t.isFinished=!0)}}),this.opts.every(function(t){return t.isFinished})?(this.opts=null,this.startedAt=null,this.balance<1?this.disabled=!0:this.disabled=!1,d(this.result)):d(this.animate)},result:function(){var t=this;Array.prototype.equals=function(t,e){if(!t)return!1;if(1==arguments.length&&(e=!0),this.length!=t.length)return!1;for(var n=0;n<this.length;n++)if(this[n]instanceof Array&&t[n]instanceof Array){if(!this[n].equals(t[n],e))return!1}else{if(e&&this[n]!=t[n])return!1;if(!e)return this.sort().equals(t.sort(),!0)}return!0},this.lines.map(function(e){e.items.equals(t.resultTop,!1)&&(t.wintop=e.payTop,t.balance+=t.wintop,t.$refs.wintop.innerText="Top: "+t.wintop,t.$refs.winlineTop.style.display="block"),e.items.equals(t.resultCenter,!1)&&(t.wincenter=e.payCenter,t.balance+=t.wincenter,t.$refs.wincenter.innerText="Center: "+t.wincenter,t.$refs.winlineCenter.style.display="block"),e.items.equals(t.resultBottom,!1)&&(t.winbottom=e.payBottom,t.balance+=t.winbottom,t.$refs.winbottom.innerText="Bottom: "+t.winbottom,t.$refs.winlineBottom.style.display="block")});var e=this.wintop+this.wincenter+this.winbottom;e&&(this.$refs.win.style.display="block"),this.$refs.wintotal.innerText="Total win: "+e}}},f=m,b=n("2877"),h=Object(b["a"])(f,o,l,!1,null,null,null),v=h.exports,y={name:"app",components:{slotMachine:v}},w=y,g=(n("5c0b"),Object(b["a"])(w,s,a,!1,null,null,null)),x=g.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(x)}}).$mount("#app")},"587a":function(t,e,n){t.exports=n.p+"img/cherry.86d62cbc.png"},"5c0b":function(t,e,n){"use strict";var i=n("5e27"),s=n.n(i);s.a},"5e27":function(t,e,n){},7840:function(t,e,n){t.exports=n.p+"img/win.ad0c2f86.png"},"7bae":function(t){t.exports=[{items:["CHERRY","CHERRY","CHERRY"],payTop:2e3,payCenter:1e3,payBottom:4e3},{items:["7","7","7"],payTop:150,payCenter:150,payBottom:150},{items:["CHERRY","CHERRY","7"],payTop:75,payCenter:75,payBottom:75},{items:["CHERRY","7","7"],payTop:75,payCenter:75,payBottom:75},{items:["3xBAR","3xBAR","3xBAR"],payTop:50,payCenter:50,payBottom:50},{items:["2xBAR","2xBAR","2xBAR"],payTop:20,payCenter:20,payBottom:20},{items:["BAR","BAR","BAR"],payTop:10,payCenter:10,payBottom:10},{items:["3xBAR","2xBAR","BAR"],payTop:5,payCenter:5,payBottom:5},{items:["BAR","BAR","3xBAR"],payTop:5,payCenter:5,payBottom:5},{items:["BAR","BAR","2xBAR"],payTop:5,payCenter:5,payBottom:5},{items:["3xBAR","3xBAR","BAR"],payTop:5,payCenter:5,payBottom:5},{items:["3xBAR","3xBAR","2xBAR"],payTop:5,payCenter:5,payBottom:5},{items:["2xBAR","2xBAR","BAR"],payTop:5,payCenter:5,payBottom:5},{items:["2xBAR","2xBAR","3xBAR"],payTop:5,payCenter:5,payBottom:5}]},ab22:function(t,e,n){t.exports=n.p+"img/2xBAR.a961a3ee.png"},e8e7:function(t,e,n){t.exports=n.p+"img/3xBAR.a4136bc2.png"}});
//# sourceMappingURL=app.493e21e6.js.map