(function(t){function e(e){for(var n,o,l=e[0],r=e[1],u=e[2],d=0,p=[];d<l.length;d++)o=l[d],s[o]&&p.push(s[o][0]),s[o]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);c&&c(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,l=1;l<i.length;l++){var r=i[l];0!==s[r]&&(n=!1)}n&&(a.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},s={app:0},a=[];function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var c=r;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0f01":function(t,e,i){t.exports=i.p+"img/7.b6f75e5f.png"},"4f33":function(t,e,i){t.exports=i.p+"img/BAR.791f2f18.png"},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"align"},[i("slotMachine",{staticClass:"slotMachine",attrs:{msg:"Welcome to Your Vue.js App"}})],1)])},a=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"slot-machine"},[i("div",{staticClass:"slot-wrapper"},[i("div",{staticClass:"slot-container"},[t._l(t.populateSlots,function(e){return i("div",{key:e.id,ref:"slots",refInFor:!0,staticClass:"slot"},[i("div",{staticClass:"slot__window"},[i("div",{staticClass:"slot__wrap"},t._l(t.slotsAmount,function(n){return i("div",{key:n},t._l(e.items,function(t){return i("div",{key:t.id,staticClass:"slot__item"},[i("img",{attrs:{src:t.src,width:"140",height:"120",alt:t.label}})])}),0)}),0)])])}),t._l(t.lineOptions.length,function(t){return i("div",{key:t},[i("div",{ref:"winLine",refInFor:!0,class:"win-line win-line-"+(t-1)})])})],2),i("div",{ref:"win",staticClass:"win"},[t._m(0),t._l(t.lineOptions.length,function(t){return i("div",{key:t},[i("span",{ref:"winShow",refInFor:!0,class:"win-show win-show-"+(t-1)})])}),i("span",{ref:"winTotal",staticClass:"win-total"})],2),i("button",{staticClass:"btn-spin pulse",attrs:{disabled:t.disabled},on:{click:t.start}}),i("div",{staticClass:"balance"},[t._v("Balance: "),i("span",{staticClass:"balance-amount"},[t._v(t._s(t.balance))])]),i("div",{staticClass:"debug"},[i("p",{staticClass:"btn-debug"},[t._v("Debug")]),i("div",{staticClass:"debug-content"},[i("div",[i("span",{staticClass:"debug-head"},[t._v("Balance:")]),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.balance,expression:"balance",modifiers:{number:!0}}],attrs:{id:"balanceDebug",type:"number",min:"1",max:"5000",maxlength:"5",name:"balanceDebug"},domProps:{value:t.balance},on:{input:[function(e){e.target.composing||(t.balance=t._n(e.target.value))},function(e){return t.inputCheck(e)}],blur:function(e){return t.$forceUpdate()}}})]),i("div",{staticClass:"position"},[i("span",{staticClass:"debug-head"},[t._v("Mode:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.positionMode,expression:"positionMode"}],attrs:{type:"radio",id:"random",value:"random"},domProps:{checked:t._q(t.positionMode,"random")},on:{change:[function(e){t.positionMode="random"},t.radioRandom]}}),i("label",{attrs:{for:"random"}},[t._v("Random")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.positionMode,expression:"positionMode"}],attrs:{type:"radio",value:"fixed",id:"fixed"},domProps:{checked:t._q(t.positionMode,"fixed")},on:{change:[function(e){t.positionMode="fixed"},t.radioFixed]}}),i("label",{attrs:{for:"fixed"}},[t._v("Fixed")])]),i("div",[i("span",{staticClass:"debug-head"},[t._v("Symbol:")]),t._l(t.slotsAmount,function(e){return i("select",{key:e,attrs:{disabled:t.debugInputsDis},on:{change:function(i){return t.selectSymbol(i,e-1)}}},t._l(t.slots[0].items,function(e,n){return i("option",{key:e.id,domProps:{value:n}},[t._v(t._s(e.label))])}),0)})],2),i("div",[i("span",{staticClass:"debug-head"},[t._v("Line:")]),t._l(t.slotsAmount,function(e){return i("select",{key:e,attrs:{disabled:t.debugInputsDis},on:{change:function(i){return t.selectLine(i,e-1)}}},t._l(t.lineOptions,function(e){return i("option",{key:e.value,domProps:{value:e.value}},[t._v(t._s(e.text))])}),0)})],2)])])])])},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"win-image blink"},[n("img",{attrs:{src:i("7840"),width:"215",height:"179",alt:""}})])}],r=(i("55dd"),i("ac4d"),i("8a81"),i("ac6a"),i("6c7b"),i("7bae")),u=i("1157"),c=i.n(u),d=c.a,p={name:"slotMachine",props:{msg:String},data:function(){return{lines:r,slots:[{items:[{label:"3xBAR",src:i("e8e7")},{label:"BAR",src:i("4f33")},{label:"2xBAR",src:i("ab22")},{label:"7",src:i("0f01")},{label:"CHERRY",src:i("587a")}]}],slotsAmount:3,opts:null,startedAt:null,isFullFinished:!1,balance:100,disabled:!1,winTotal:null,positionMode:"random",debugInputsDis:!0,selectedSymbol:[0,0,0],linePosition:.5,linePositionFixed:[1,1,1],lineOptions:[{text:"Top",value:1},{text:"Center",value:0},{text:"Bottom",value:2}]}},computed:{populateSlots:function(){return new Array(this.slotsAmount).fill(this.slots[0])}},methods:{start:function(){var t=this;if(!this.opts){for(var e in this.balance-=1,this.winTotal=null,this.$refs.win.style.display="none",this.lineOptions)this.$refs.winShow[e].innerText="",this.$refs.winLine[e].style.display="none";this.winResult=[[],[],[]],this.disabled=!0,this.isFullFinished=!1,this.opts=this.populateSlots.map(function(e,i){var n,s=t.$refs.slots[i];return"random"===t.positionMode?n=Math.floor(Math.random()*e.items.length):(t.linePosition=t.linePositionFixed[i],n=2===t.linePosition?t.selectedSymbol[i]-1:t.selectedSymbol[i]),Math.random()<t.linePosition?(s.querySelector(".slot__wrap").style.marginTop="-80px",2===t.linePosition&&n<0?t.winResult[0].push(e.items[e.items.length-1].label):t.winResult[0].push(e.items[n].label),n===e.items.length-1?t.winResult[2].push(e.items[0].label):t.winResult[2].push(e.items[n+1].label)):(s.querySelector(".slot__wrap").style.marginTop="0",t.winResult[1].push(e.items[n].label)),{el:s.querySelector(".slot__wrap"),finalPos:180*n-90,startOffset:2e3,height:180*e.items.length,duration:2e3+500*i,isFinished:!1}}),this.animate()}},animate:function(t){null==this.startedAt&&(this.startedAt=t);var e=t-this.startedAt;this.opts.forEach(function(t){if(!t.isFinished){var i=Math.max(t.duration-e,0),n=3,s=Math.pow(i,n)/Math.pow(t.duration,n)*t.startOffset,a=-1*Math.floor((s+t.finalPos)%t.height+t.height);t.el.style.transform="translateY("+a+"px)",e>t.duration&&(t.isFinished=!0)}}),this.opts.every(function(t){return t.isFinished})?(this.opts=null,this.startedAt=null,this.result()):f(this.animate)},result:function(){var t=!0,e=!1,i=void 0;try{for(var n,s=this.lines[Symbol.iterator]();!(t=(n=s.next()).done);t=!0){var a=n.value;for(var o in this.lineOptions){var l=this.winResult[o],r=a.items;this.compareArrays(l,r)&&(this.winTotal+=a.payOut[o],this.$refs.winShow[o].innerText=this.lineOptions[o].text+": "+a.payOut[o],this.$refs.winLine[o].style.display="block")}}}catch(u){e=!0,i=u}finally{try{t||null==s.return||s.return()}finally{if(e)throw i}}this.isFullFinished=!0,this.win(),this.isDisabled()},compareArrays:function(t,e){return t.length===e.length&&t.sort().every(function(t,i){return t===e.sort()[i]})},radioFixed:function(){this.linePosition=1,this.debugInputsDis=!1},radioRandom:function(){this.linePosition=.5,this.debugInputsDis=!0},isDisabled:function(){this.balance<1?this.disabled=!0:this.isFullFinished&&(this.disabled=!1)},win:function(){this.winTotal&&(this.$refs.win.style.display="block",this.$refs.winTotal.innerText="Total win: "+this.winTotal,this.balance+=parseInt(this.winTotal),this.isDisabled())},selectSymbol:function(t,e){this.selectedSymbol[e]=parseInt(t.target.value)},selectLine:function(t,e){this.linePositionFixed[e]=parseInt(t.target.value)},inputCheck:function(t){var e=parseInt(t.target.getAttribute("min")),i=parseInt(t.target.getAttribute("max")),n=parseInt(t.target.value);n>i&&(this.balance=i),n<e&&(this.balance=e),this.isDisabled()}}};d(document).ready(function(){d(".btn-debug").click(function(){d(".debug-content").slideToggle("fast")})});var f=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)},h=p,m=i("2877"),b=Object(m["a"])(h,o,l,!1,null,null,null),v=b.exports,w={name:"app",components:{slotMachine:v}},g=1280,y=screen.width/g;document.querySelector('meta[name="viewport"]').setAttribute("content","width="+g+", initial-scale="+y);var x=w,R=(i("5c0b"),Object(m["a"])(x,s,a,!1,null,null,null)),A=R.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(A)}}).$mount("#app")},"587a":function(t,e,i){t.exports=i.p+"img/cherry.86d62cbc.png"},"5c0b":function(t,e,i){"use strict";var n=i("5e27"),s=i.n(n);s.a},"5e27":function(t,e,i){},7840:function(t,e,i){t.exports=i.p+"img/win.ad0c2f86.png"},"7bae":function(t){t.exports=[{items:["CHERRY","CHERRY","CHERRY"],payOut:[2e3,1e3,4e3]},{items:["7","7","7"],payOut:[150,150,150]},{items:["CHERRY","CHERRY","7"],payOut:[75,75,75]},{items:["CHERRY","7","7"],payOut:[75,75,75]},{items:["3xBAR","3xBAR","3xBAR"],payOut:[50,50,50]},{items:["2xBAR","2xBAR","2xBAR"],payOut:[20,20,20]},{items:["BAR","BAR","BAR"],payOut:[10,10,10]},{items:["3xBAR","2xBAR","BAR"],payOut:[5,5,5]},{items:["BAR","BAR","3xBAR"],payOut:[5,5,5]},{items:["BAR","BAR","2xBAR"],payOut:[5,5,5]},{items:["3xBAR","3xBAR","BAR"],payOut:[5,5,5]},{items:["3xBAR","3xBAR","2xBAR"],payOut:[5,5,5]},{items:["2xBAR","2xBAR","BAR"],payOut:[5,5,5]},{items:["2xBAR","2xBAR","3xBAR"],payOut:[5,5,5]}]},ab22:function(t,e,i){t.exports=i.p+"img/2xBAR.a961a3ee.png"},e8e7:function(t,e,i){t.exports=i.p+"img/3xBAR.a4136bc2.png"}});
//# sourceMappingURL=app.bc235e97.js.map