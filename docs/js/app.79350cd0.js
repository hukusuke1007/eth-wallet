(function(e){function t(t){for(var r,i,s=t[0],c=t[1],u=t[2],l=0,h=[];l<s.length;l++)i=s[l],a[i]&&h.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(h.length)h.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"83998765"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=a[e]=[t,r]});t.push(n[2]=r);var o,c=document.getElementsByTagName("head")[0],u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(e),o=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}a[e]=void 0}};var l=setTimeout(function(){o({type:"timeout",target:u})},12e4);u.onerror=u.onload=o,c.appendChild(u)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/eth-wallet/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0af1":function(e,t,n){},1:function(e,t){},2:function(e,t){},"2a79":function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return l});n("6b54"),n("96cf");var r=n("3040"),a=n("c665"),o=n("aa9a"),i=n("6314"),s=n.n(i),c=n("dbd9"),u=n.n(c),l=function(){function t(){Object(a["a"])(this,t),this.host="wss://ropsten.infura.io/ws/v3/f1cd14beb0774d7599bdc94c703928f0",this.web3=new s.a(this.host)}return Object(o["a"])(t,[{key:"createAccount",value:function(){var e=this.web3.eth.accounts.create();return console.log(e),e}},{key:"getAccountFromPrivateKey",value:function(e){var t=this.web3.eth.accounts.privateKeyToAccount(e);return console.log(t),t}},{key:"getBalance",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.web3.eth.getBalance(t);case 2:return n=e.sent,console.log(n),e.abrupt("return",this.web3.utils.fromWei(n,"ether"));case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"sendEthWithSign",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(n,r,a,o){var i,s,c,l,f,h,d,p,v;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i=this.web3.utils.toWei("".concat(o),"ether"),console.log(i),s={from:n,to:r,value:i},t.next=5,this.web3.eth.estimateGas(s);case 5:return c=t.sent,t.next=8,this.web3.eth.getGasPrice();case 8:return l=t.sent,t.next=11,this.web3.eth.getTransactionCount(n);case 11:return f=t.sent,h={nonce:f,gasPrice:this.web3.utils.toHex(l),gasLimit:this.web3.utils.toHex(c),to:r,value:this.web3.utils.toHex(i)},d=new u.a(h),"0x"===a.slice(0,2)&&(a=a.slice(2)),console.log("privateKey",a),d.sign(new e.from(a,"hex")),p="0x"+d.serialize().toString("hex"),t.next=20,this.web3.eth.sendSignedTransaction(p);case 20:return v=t.sent,console.log(v),t.abrupt("return",v);case 23:case"end":return t.stop()}},t,this)}));return function(e,n,r,a){return t.apply(this,arguments)}}()},{key:"sendEth",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n,r){var a,o,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=this.web3.utils.toWei("".concat(r),"ether"),console.log(a),o={from:t,to:n,value:a},e.next=5,this.web3.eth.sendTransaction(o);case 5:return i=e.sent,console.log(i),e.abrupt("return",i);case 8:case"end":return e.stop()}},e,this)}));return function(t,n,r){return e.apply(this,arguments)}}()}]),t}()}).call(this,n("b639").Buffer)},3:function(e,t){},4:function(e,t){},"718a":function(e,t,n){},"7ba8":function(e,t,n){},"7fad":function(e,t,n){"use strict";var r=n("718a"),a=n.n(r);a.a},"7faf":function(e,t,n){"use strict";var r=n("0af1"),a=n.n(r);a.a},"7fd9":function(e,t,n){"use strict";var r=n("7ba8"),a=n.n(r);a.a},cd49:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("header",[n("span",[e._v(e._s(e.title)+" ")])]),n("main",[n("Wallet")],1)])},o=[],i=n("c665"),s=n("dc0a"),c=n("d328"),u=n("11d9"),l=n("9ab4"),f=n("60a3"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wallet"},[n("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[n("v-card",[n("v-container",{attrs:{fluid:""}},[n("v-card",{attrs:{flat:""}},[n("v-card-actions",[n("v-card-title",[n("b",[e._v("残高")])]),n("v-spacer"),n("v-btn",{attrs:{fab:"",small:"",flat:"",loading:e.isLoading},on:{click:function(t){e.getAccount()}}},[n("v-icon",[e._v("cached")])],1)],1),n("v-card-text",[e._v(e._s(e.wallet.balance)+" eth")]),n("v-card-title",[n("b",[e._v("送金先アドレス")])]),n("v-card-text",[e._v(e._s(e.wallet.address))]),n("v-card",{attrs:{flat:""}},[n("qriously",{attrs:{size:e.qrSize},model:{value:e.qrJson,callback:function(t){e.qrJson=t},expression:"qrJson"}})],1)],1),n("v-card",{attrs:{flat:""}},[e._l(e.validation,function(t,r){return n("div",{key:r,staticClass:"errorLabel"},[!0!==t?n("div",[e._v(e._s(t))]):e._e()])}),n("v-card-title",[n("b",[e._v("送金")])]),n("v-text-field",{attrs:{label:"送金先",counter:42,required:"",placeholder:"例. 0x26d88305D5f16f5763E4bAcB15e106Dd22014F16"},model:{value:e.toAddr,callback:function(t){e.toAddr=t},expression:"toAddr"}}),n("v-text-field",{attrs:{label:"ETH",type:"number",required:""},model:{value:e.toAmount,callback:function(t){e.toAmount=t},expression:"toAmount"}}),n("v-flex",[n("v-btn",{staticClass:"white--text",attrs:{color:"blue",loading:e.isLoading,disabled:e.isLoading},on:{click:function(t){e.tapSend()}}},[e._v("送金")])],1)],2)],1)],1)],1)],1)},d=[],p=(n("96cf"),n("3040")),v=(n("c5f6"),n("aa9a")),b=n("a002"),m=n.n(b),g=n("2a79"),w=function(){function e(){var t=this;Object(i["a"])(this,e),this.balance=0,this.address="",this.privateKey="",this.eth=new g["a"],this.localStorageKey="eth-wallet",this.load().then(function(e){if(console.log(e),null===e){var n=t.eth.createAccount();t.address=n.address,t.privateKey=n.privateKey,t.save()}else t.address=e.address,t.privateKey=e.privateKey,t.getAccount()}).catch(function(e){console.error(e)})}return Object(v["a"])(e,[{key:"save",value:function(){var e=Object(p["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m.a.setItem(this.localStorageKey,this.toJSON());case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"load",value:function(){var e=Object(p["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m.a.getItem(this.localStorageKey);case 2:return t=e.sent,null!==t&&(this.address=t.address,this.privateKey=t.privateKey),e.abrupt("return",t);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"remove",value:function(){var e=Object(p["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m.a.removeItem(this.localStorageKey);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getAccount",value:function(){var e=Object(p["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.eth.getBalance(this.address);case 2:this.balance=e.sent;case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"sendEth",value:function(){var e=Object(p["a"])(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.eth.sendEthWithSign(this.address,t,this.privateKey,n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()},{key:"toJSON",value:function(){return{address:this.address,privateKey:this.privateKey}}}]),e}(),y=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(c["a"])(this,Object(u["a"])(t).apply(this,arguments)),e.isLoading=!1,e.wallet=new w,e.qrSize=200,e.toAmount=0,e.toAddr="",e.qrJson="",e.validation=[],e.rules={senderAddrLimit:function(e){return e&&42===e.length||"送金先アドレスは0x含めた42文字です。"},senderAddrInput:function(e){var t=/^[a-zA-Z0-9-]+$/;return t.test(e)||"送金先の入力が不正です"},amountLimit:function(e){return e>=0||"数量を入力してください"},amountInput:function(e){var t=/^[0-9.]+$/;return t.test(e)&&!isNaN(Number(e))||"数量の入力が不正です"},messageRules:function(e){return e.length<=1024||"メッセージの最大文字数が超えています。"}},e}return Object(v["a"])(t,[{key:"onValueChange",value:function(e,t){console.log("watch: ".concat(e,", ").concat(t)),this.qrJson="ethereum:\n"+e}},{key:"mounted",value:function(){console.log("hello"),f["c"].prototype.$toast("Hello eth wallet")}},{key:"getAccount",value:function(){var e=Object(p["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.isLoading=!0,e.next=3,this.wallet.getAccount();case 3:this.isLoading=!1;case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"tapSend",value:function(){var e=Object(p["a"])(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!0!==this.isValidation()){e.next=16;break}return console.log("OK"),this.isLoading=!0,e.prev=3,e.next=6,this.wallet.sendEth(this.toAddr,this.toAmount);case 6:t=e.sent,n="送金しました\n".concat(t.transactionHash),f["c"].prototype.$toast(n),e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](3),console.error(e.t0),f["c"].prototype.$toast(e.t0);case 15:this.isLoading=!1;case 16:console.log(this.isValidation());case 17:case"end":return e.stop()}},e,this,[[3,11]])}));return function(){return e.apply(this,arguments)}}()},{key:"isValidation",value:function(){this.validation=[],this.validation.push(this.rules.senderAddrLimit(this.toAddr)),this.validation.push(this.rules.senderAddrInput(this.toAddr)),this.validation.push(this.rules.amountLimit(this.toAmount)),this.validation.push(this.rules.amountInput("".concat(this.toAmount)));var e=this.validation.filter(function(e){return!0!==e});return 0===e.length}}]),Object(s["a"])(t,e),t}(f["c"]);l["a"]([Object(f["d"])("wallet.address")],y.prototype,"onValueChange",null),y=l["a"]([f["a"]],y);var x=y,j=x,O=(n("7fd9"),n("2877")),k=Object(O["a"])(j,h,d,!1,null,"14741b8a",null);k.options.__file="Wallet.vue";var A=k.exports,_=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(c["a"])(this,Object(u["a"])(t).apply(this,arguments)),e.title="ETH wallet",e}return Object(s["a"])(t,e),t}(f["c"]);_=l["a"]([Object(f["a"])({components:{Wallet:A}})],_);var R=_,S=R,E=(n("7faf"),Object(O["a"])(S,a,o,!1,null,null,null));E.options.__file="App.vue";var K=E.exports,L=n("8c4f"),F=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js + TypeScript App"}})],1)},T=[],W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"})},q=[],C=function(e){function t(){return Object(i["a"])(this,t),Object(c["a"])(this,Object(u["a"])(t).apply(this,arguments))}return Object(s["a"])(t,e),t}(f["c"]);l["a"]([Object(f["b"])()],C.prototype,"msg",void 0),C=l["a"]([f["a"]],C);var H=C,P=H,$=(n("7fad"),Object(O["a"])(P,W,q,!1,null,"1d45b990",null));$.options.__file="HelloWorld.vue";var J=$.exports,N=function(e){function t(){return Object(i["a"])(this,t),Object(c["a"])(this,Object(u["a"])(t).apply(this,arguments))}return Object(s["a"])(t,e),t}(f["c"]);N=l["a"]([Object(f["a"])({components:{HelloWorld:J}})],N);var V=N,B=V,I=Object(O["a"])(B,F,T,!1,null,null,null);I.options.__file="Home.vue";var z=I.exports;r["default"].use(L["a"]);var M=new L["a"]({mode:"history",base:"/eth-wallet/",routes:[{path:"/",name:"home",component:z},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),D=n("2f62");r["default"].use(D["a"]);var G=new D["a"].Store({state:{},mutations:{},actions:{}}),Y=n("9483");Object(Y["a"])("".concat("/eth-wallet/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var Z=n("ce5b"),Q=n.n(Z),U=n("c0a4"),X=n.n(U),ee=(n("cc20"),n("7869")),te=n.n(ee),ne=n("6112"),re=n.n(ne);r["default"].use(Q.a,{theme:{original:X.a.purple.base,theme:"#FFDEEA",background:"#FFF6EA",view:"#ffa07a",select:"#FF7F78",button:"#5FACEF"},options:{themeVariations:["original","secondary"]}}),r["default"].use(te.a,{defaultType:"bottom",duration:3e3,wordWrap:!0,width:"280px"}),r["default"].use(re.a),r["default"].config.productionTip=!1,new r["default"]({router:M,store:G,render:function(e){return e(K)}}).$mount("#app")},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.79350cd0.js.map