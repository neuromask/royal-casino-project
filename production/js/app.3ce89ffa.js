(function(t){function e(e){for(var i,a,r=e[0],l=e[1],u=e[2],c=0,d=[];c<r.length;c++)a=r[c],s[a]&&d.push(s[a][0]),s[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,r=1;r<n.length;r++){var l=n[r];0!==s[l]&&(i=!1)}i&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},s={app:0},o=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var p=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0f01":function(t,e,n){t.exports=n.p+"img/7.b6f75e5f.png"},"4f33":function(t,e,n){t.exports=n.p+"img/BAR.791f2f18.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"align"},[n("slotMachine",{staticClass:"slotMachine",attrs:{msg:"Welcome to Your Vue.js App"}})],1)])},o=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slot-machine"},[n("div",{staticClass:"slot-container"},[t._l(t.populateSlots,function(e){return n("div",{key:e.id,ref:"slots",refInFor:!0,staticClass:"slot"},[n("div",{staticClass:"slot__window"},[n("div",{staticClass:"slot__wrap"},t._l(t.slotsAmount,function(i){return n("div",{key:i},t._l(e.items,function(t){return n("div",{key:t.id,staticClass:"slot__item"},[n("img",{attrs:{src:t.src,width:"140",height:"120",alt:t.label}})])}),0)}),0)])])}),n("div",{ref:"winLineTop",staticClass:"win-line win-line-top"}),n("div",{ref:"winLineCenter",staticClass:"win-line win-line-center"}),n("div",{ref:"winLineBottom",staticClass:"win-line win-line-bottom"})],2),n("div",{ref:"win",staticClass:"win"},[t._m(0),n("span",{ref:"winTop"}),n("span",{ref:"winCenter"}),n("span",{ref:"winBottom"}),n("span",{ref:"winTotal",staticClass:"win-total"})]),n("button",{staticClass:"btn-spin pulse",attrs:{disabled:t.disabled},on:{click:t.start}}),n("div",{staticClass:"balance"},[t._v("Balance: "),n("span",{staticClass:"balance-amount"},[t._v(t._s(t.balance))])]),n("div",{staticClass:"debug"},[n("p",{staticClass:"btn-debug"},[t._v("Debug")]),n("div",{staticClass:"debug-content"},[n("div",[n("span",{staticClass:"debug-head"},[t._v("Balance:")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.balance,expression:"balance",modifiers:{number:!0}}],attrs:{id:"balanceDebug",type:"number",min:"1",max:"5000",maxlength:"5",name:"balanceDebug"},domProps:{value:t.balance},on:{input:[function(e){e.target.composing||(t.balance=t._n(e.target.value))},function(e){return t.inputCheck(e)}],blur:function(e){return t.$forceUpdate()}}})]),n("div",{staticClass:"position"},[n("span",{staticClass:"debug-head"},[t._v("Mode:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.positionMode,expression:"positionMode"}],attrs:{type:"radio",id:"random",value:"random"},domProps:{checked:t._q(t.positionMode,"random")},on:{change:[function(e){t.positionMode="random"},t.radioRandom]}}),n("label",{attrs:{for:"random"}},[t._v("Random")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.positionMode,expression:"positionMode"}],attrs:{type:"radio",value:"fixed",id:"fixed"},domProps:{checked:t._q(t.positionMode,"fixed")},on:{change:[function(e){t.positionMode="fixed"},t.radioFixed]}}),n("label",{attrs:{for:"fixed"}},[t._v("Fixed")])]),n("div",[n("span",{staticClass:"debug-head"},[t._v("Symbol:")]),n("select",{attrs:{disabled:t.debugInputsDis},on:{change:function(e){return t.selectSymbol(e,"0")}}},t._l(t.slots[0].items,function(e,i){return n("option",{key:e.id,domProps:{value:i}},[t._v(t._s(e.label))])}),0),n("select",{attrs:{disabled:t.debugInputsDis},on:{change:function(e){return t.selectSymbol(e,"1")}}},t._l(t.slots[0].items,function(e,i){return n("option",{key:e.id,domProps:{value:i}},[t._v(t._s(e.label))])}),0),n("select",{attrs:{disabled:t.debugInputsDis},on:{change:function(e){return t.selectSymbol(e,"2")}}},t._l(t.slots[0].items,function(e,i){return n("option",{key:e.id,domProps:{value:i}},[t._v(t._s(e.label))])}),0)]),n("div",[n("span",{staticClass:"debug-head"},[t._v("Line:")]),n("select",{attrs:{disabled:t.debugInputsDis},on:{change:function(e){return t.selectLine(e,"0")}}},t._l(t.lineOptions,function(e){return n("option",{key:e.value,domProps:{value:e.value}},[t._v(t._s(e.text))])}),0),n("select",{attrs:{disabled:t.debugInputsDis},on:{change:function(e){return t.selectLine(e,"1")}}},t._l(t.lineOptions,function(e){return n("option",{key:e.value,domProps:{value:e.value}},[t._v(t._s(e.text))])}),0),n("select",{attrs:{disabled:t.debugInputsDis},on:{change:function(e){return t.selectLine(e,"2")}}},t._l(t.lineOptions,function(e){return n("option",{key:e.value,domProps:{value:e.value}},[t._v(t._s(e.text))])}),0)])])])])},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"win-image blink"},[i("img",{attrs:{src:n("7840"),width:"215",height:"179",alt:""}})])}],l=(n("ac6a"),n("6c7b"),n("7bae")),u=n("1157"),p=n.n(u),c=p.a,d={name:"slotMachine",props:{msg:String},data:function(){return{lines:l,slots:[{items:[{label:"3xBAR",src:n("e8e7")},{label:"BAR",src:n("4f33")},{label:"2xBAR",src:n("ab22")},{label:"7",src:n("0f01")},{label:"CHERRY",src:n("587a")}]}],slotsAmount:3,opts:null,startedAt:null,isFullFinished:!1,balance:100,disabled:!1,winTotal:null,winTop:null,winCenter:null,winBottom:null,positionMode:"random",debugInputsDis:!0,selectedSymbol:[0,0,0],linePosition:.5,linePositionFixed:[1,1,1],lineOptions:[{text:"Top",value:1},{text:"Center",value:0},{text:"Bottom",value:2}]}},computed:{populateSlots:function(){return new Array(this.slotsAmount).fill(this.slots[0])}},methods:{start:function(){var t=this;this.opts||(this.balance-=1,this.winTotal=null,this.winTop=null,this.winCenter=null,this.winBottom=null,this.$refs.winTop.innerText=this.$refs.winTop.innerText=this.$refs.winBottom.innerText="",this.$refs.winLineTop.style.display=this.$refs.winLineCenter.style.display=this.$refs.winLineBottom.style.display=this.$refs.win.style.display="none",this.resultCenter=[],this.resultTop=[],this.resultBottom=[],this.disabled=!0,this.isFullFinished=!1,this.opts=this.populateSlots.map(function(e,n){var i,s=t.$refs.slots[n];return"random"===t.positionMode?i=Math.floor(Math.random()*e.items.length):(t.linePosition=t.linePositionFixed[n],i=2===t.linePosition?t.selectedSymbol[n]-1:t.selectedSymbol[n]),Math.random()<t.linePosition?(s.querySelector(".slot__wrap").style.marginTop="-80px",2===t.linePosition&&i<0?t.resultTop.push(e.items[e.items.length-1].label):t.resultTop.push(e.items[i].label),i===e.items.length-1?t.resultBottom.push(e.items[0].label):t.resultBottom.push(e.items[i+1].label)):(s.querySelector(".slot__wrap").style.marginTop="0",t.resultCenter.push(e.items[i].label)),{el:s.querySelector(".slot__wrap"),finalPos:180*i-90,startOffset:2e3,height:180*e.items.length,duration:2e3+500*n,isFinished:!1}}),m(this.animate))},animate:function(t){null==this.startedAt&&(this.startedAt=t);var e=t-this.startedAt;this.opts.forEach(function(t){if(!t.isFinished){var n=Math.max(t.duration-e,0),i=3,s=Math.pow(n,i)/Math.pow(t.duration,i)*t.startOffset,o=-1*Math.floor((s+t.finalPos)%t.height+t.height);t.el.style.transform="translateY("+o+"px)",e>t.duration&&(t.isFinished=!0)}}),this.opts.every(function(t){return t.isFinished})?(this.opts=null,this.startedAt=null,m(this.result)):m(this.animate)},result:function(){var t=this;Array.prototype.equals=this.$helpers.arrayEquals,this.lines.map(function(e){e.items.equals(t.resultTop,!1)&&(t.winTop=e.payTop,t.$refs.winTop.innerText="Top: "+t.winTop,t.$refs.winLineTop.style.display="block"),e.items.equals(t.resultCenter,!1)&&(t.winCenter=e.payCenter,t.$refs.winCenter.innerText="Center: "+t.winCenter,t.$refs.winLineCenter.style.display="block"),e.items.equals(t.resultBottom,!1)&&(t.winBottom=e.payBottom,t.$refs.winBottom.innerText="Bottom: "+t.winBottom,t.$refs.winLineBottom.style.display="block")}),this.isFullFinished=!0,this.win(),this.isDisabled()},radioFixed:function(){this.linePosition=1,this.debugInputsDis=!1},radioRandom:function(){this.linePosition=.5,this.debugInputsDis=!0},isDisabled:function(){this.balance<1?this.disabled=!0:this.isFullFinished&&(this.disabled=!1)},win:function(){this.winTotal=this.winTop+this.winCenter+this.winBottom,this.winTotal&&(this.$refs.win.style.display="block",this.$refs.winTotal.innerText="Total win: "+this.winTotal,this.balance+=parseInt(this.winTotal),this.isDisabled())},selectSymbol:function(t,e){this.selectedSymbol[e]=parseInt(t.target.value)},selectLine:function(t,e){this.linePositionFixed[e]=parseInt(t.target.value)},inputCheck:function(t){var e=parseInt(t.target.getAttribute("min")),n=parseInt(t.target.getAttribute("max")),i=parseInt(t.target.value);i>n&&(this.balance=n),i<e&&(this.balance=e),this.isDisabled()}}};c(document).ready(function(){c(".btn-debug").click(function(){c(".debug-content").slideToggle("fast")})});var m=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)},f=d,h=n("2877"),b=Object(h["a"])(f,a,r,!1,null,null,null),y=b.exports,v={name:"app",components:{slotMachine:y}},w=1280,g=screen.width/w;document.querySelector('meta[name="viewport"]').setAttribute("content","width="+w+", initial-scale="+g);var x=v,B=(n("5c0b"),Object(h["a"])(x,s,o,!1,null,null,null)),C=B.exports,_=(n("55dd"),{arrayEquals:function(t,e){if(!t)return!1;if(1==arguments.length&&(e=!0),this.length!=t.length)return!1;for(var n=0;n<this.length;n++)if(this[n]instanceof Array&&t[n]instanceof Array){if(!this[n].equals(t[n],e))return!1}else{if(e&&this[n]!=t[n])return!1;if(!e)return this.sort().equals(t.sort(),!0)}return!0}}),A={install:function(){i["a"].helpers=_,i["a"].prototype.$helpers=_}};i["a"].use(A),i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(C)}}).$mount("#app")},"587a":function(t,e,n){t.exports=n.p+"img/cherry.86d62cbc.png"},"5c0b":function(t,e,n){"use strict";var i=n("5e27"),s=n.n(i);s.a},"5e27":function(t,e,n){},7840:function(t,e,n){t.exports=n.p+"img/win.ad0c2f86.png"},"7bae":function(t){t.exports=[{items:["CHERRY","CHERRY","CHERRY"],payTop:2e3,payCenter:1e3,payBottom:4e3},{items:["7","7","7"],payTop:150,payCenter:150,payBottom:150},{items:["CHERRY","CHERRY","7"],payTop:75,payCenter:75,payBottom:75},{items:["CHERRY","7","7"],payTop:75,payCenter:75,payBottom:75},{items:["3xBAR","3xBAR","3xBAR"],payTop:50,payCenter:50,payBottom:50},{items:["2xBAR","2xBAR","2xBAR"],payTop:20,payCenter:20,payBottom:20},{items:["BAR","BAR","BAR"],payTop:10,payCenter:10,payBottom:10},{items:["3xBAR","2xBAR","BAR"],payTop:5,payCenter:5,payBottom:5},{items:["BAR","BAR","3xBAR"],payTop:5,payCenter:5,payBottom:5},{items:["BAR","BAR","2xBAR"],payTop:5,payCenter:5,payBottom:5},{items:["3xBAR","3xBAR","BAR"],payTop:5,payCenter:5,payBottom:5},{items:["3xBAR","3xBAR","2xBAR"],payTop:5,payCenter:5,payBottom:5},{items:["2xBAR","2xBAR","BAR"],payTop:5,payCenter:5,payBottom:5},{items:["2xBAR","2xBAR","3xBAR"],payTop:5,payCenter:5,payBottom:5}]},ab22:function(t,e,n){t.exports=n.p+"img/2xBAR.a961a3ee.png"},e8e7:function(t,e,n){t.exports=n.p+"img/3xBAR.a4136bc2.png"}});
//# sourceMappingURL=app.3ce89ffa.js.map