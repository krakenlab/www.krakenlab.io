(function(t){function e(e){for(var o,r,i=e[0],c=e[1],u=e[2],l=0,f=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,r=1;r<n.length;r++){var i=n[r];0!==a[i]&&(o=!1)}o&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},r={app:0},a={app:0},s=[];function i(t){return c.p+"js/"+({career:"career",community:"community"}[t]||t)+"."+{career:"a1b2c6e1",community:"8ece0da7"}[t]+".js"}function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={career:1,community:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var o="css/"+({career:"career",community:"community"}[t]||t)+"."+{career:"f0180885",community:"0fef9544"}[t]+".css",a=c.p+o,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===a))return e()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){u=f[i],l=u.getAttribute("data-href");if(l===o||l===a)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var o=e&&e.target&&e.target.src||a,s=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=o,delete r[t],d.parentNode.removeChild(d),n(s)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){r[t]=0})));var o=a[t];if(0!==o)if(o)e.push(o[2]);else{var s=new Promise((function(e,n){o=a[t]=[e,n]}));e.push(o[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",f.name="ChunkLoadError",f.type=o,f.request=r,n[1](f)}a[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"15c5":function(t,e,n){t.exports=n.p+"img/bigK.0ec79603.svg"},"1aa8":function(t,e,n){},"1f85":function(t,e,n){t.exports=n.p+"media/krakenlab-animeted-logo.7855c3c4.mp4"},"272c":function(t,e,n){"use strict";n("e0c7")},"29d6":function(t,e,n){},"2a7d":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{class:[t.color,t.size,t.font],attrs:{id:"button"},on:{click:function(e){return t.onClick()}}},[t._t("default")],2)},r=[],a={props:{color:{type:String,required:!0},size:{type:String,required:!0},font:{type:String,required:!0}},methods:{onClick:function(){this.$emit("click")}},name:"Button"},s=a,i=(n("a9a0"),n("2877")),c=Object(i["a"])(s,o,r,!1,null,"32488f76",null);e["a"]=c.exports},"3e7e":function(t,e,n){t.exports=n.p+"img/KOutline.1feec826.svg"},"40bf":function(t,e,n){},"436a":function(t,e,n){"use strict";n("d44a")},"4f30":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["rectangle",t.roundedSide]},[t._t("default")],2)},r=[],a={name:"Rectangle",props:{roundedSide:{type:String,required:!0}}},s=a,i=(n("617c"),n("2877")),c=Object(i["a"])(s,o,r,!1,null,"4a668d67",null);e["a"]=c.exports},"56d7":function(t,e,n){"use strict";n.r(e);n("e623"),n("e379"),n("5dc8"),n("37e1");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("router-view"),n("Footer")],1)},a=[],s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"headerSize"},[o("div",{attrs:{id:"header"}},[o("img",{staticClass:"logoKHome",attrs:{src:n("612b")},on:{click:t.toHome}}),o("img",{attrs:{src:n("81b9")},on:{click:t.openMenu}})]),o("Menu",{attrs:{isShowing:t.isShowingMenu},on:{close:function(e){return t.onMenuClose(e)}}})],1)},i=[],c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.isShowing?o("div",{staticClass:"modal"},[o("div",{attrs:{id:"header"}},[o("img",{staticClass:"logoKMenu",attrs:{src:n("612b")},on:{click:t.closeToHome}}),o("img",{attrs:{src:n("6ca8")},on:{click:t.close}})]),o("div",{staticClass:"menu"},[o("a",{staticClass:"rolling-text",on:{click:function(e){return t.goTo("Home")}}},[t._v(" home ")]),o("br"),o("a",{staticClass:"rolling-text",on:{click:function(e){return t.goTo("Community")}}},[t._v(" comunidade ")]),o("br"),o("a",{staticClass:"rolling-text",on:{click:function(e){return t.goTo("Career")}}},[t._v(" carreira ")]),o("br"),o("a",{staticClass:"rolling-text",attrs:{href:"#"}},[t._v(" lojinha ")]),o("br"),o("a",{staticClass:"rolling-text",attrs:{href:"#"}},[t._v(" newsletter ")])])]):t._e()},u=[],l={name:"Menu",props:{isShowing:{type:Boolean,required:!0}},methods:{goTo:function(t){this.$router.push({name:t}).catch((function(){})),this.close()},closeToHome:function(){this.$emit("close",!0)},close:function(){this.$emit("close",!1)}}},f=l,d=(n("c171"),n("2877")),p=Object(d["a"])(f,c,u,!1,null,"efff6658",null),m=p.exports,v={name:"Header",components:{Menu:m},methods:{toHome:function(){this.$router.push({name:"Home"}).catch((function(){})),this.closeMenu()},openMenu:function(){this.isShowingMenu=!0},closeMenu:function(){this.isShowingMenu=!1},onMenuClose:function(t){t?this.toHome():this.closeMenu()}},data:function(){return{isShowingMenu:!1}}},h=v,g=(n("436a"),Object(d["a"])(h,s,i,!1,null,"1cb05f79",null)),_=g.exports,y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"footer"}},[o("img",{staticClass:"filter-K-yellow",attrs:{id:"logoK",src:n("612b")}}),o("div",{staticClass:"text"},[o("span",[t._v("Joinville")]),o("br"),t._v("Rua Orestes Guimarães, 876 - América ")]),o("div",{staticClass:"text"},[o("span",[t._v("Curitiba")]),o("br"),t._v("esqueci o nome da rua - Centro ")]),o("div",{staticClass:"text"},[t._v(" comlicenca@krakenlab.io "),o("br"),t._v("medaumtrampo@krakenlab.io ")]),o("div",{staticClass:"text"},[o("i",{staticClass:"fab fa-discord fa-fw fa-2x"}),o("i",{staticClass:"fab fa-linkedin fa-fw fa-2x"}),o("i",{staticClass:"fab fa-github fa-fw fa-2x"}),o("i",{staticClass:"fab fa-trello fa-fw fa-2x",staticStyle:{display:"none"}}),o("i",{staticClass:"fas fa-rss fa-fw fa-2x"})])])}],C={name:"Footer"},w=C,x=(n("5cda"),Object(d["a"])(w,y,b,!1,null,"72601842",null)),k=x.exports,T={name:"App",components:{Header:_,Footer:k}},S=T,j=(n("f317"),Object(d["a"])(S,r,a,!1,null,null,null)),E=j.exports,O=(n("d3b7"),n("8c4f")),P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Flex",[n("AnimatedKraken"),n("WhoIAm",[n("Presentation")],1),n("WorkInProgress"),n("FloatingEnding")],1)},$=[],M=n("fe02"),B=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"animetedKraken"},[o("video",{staticClass:"background-video",attrs:{loop:"",muted:"",autoplay:"",border:"0"},domProps:{muted:!0}},[o("source",{attrs:{src:n("1f85"),type:"video/mp4"}})])])},A=[],H={},F=H,K=(n("cfb2"),Object(d["a"])(F,B,A,!1,null,"42d00dc0",null)),q=K.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"whoIAm"},[t._m(0),t._t("default")],2)},I=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"bigK"},[o("div",[o("img",{attrs:{src:n("15c5")}})]),o("div",{staticClass:"edge"},[o("img",{attrs:{src:n("3e7e")}})])])}],N={},W=N,L=(n("272c"),Object(d["a"])(W,z,I,!1,null,"040ee69f",null)),R=L.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"presentation"},[n("div",{staticClass:"title"},[n("Typography",{attrs:{font:"velo"}},[t._v(" A ge"),n("Typography",{attrs:{font:"velo-sw"}},[t._v("n")]),t._v("te se dive"),n("Typography",{attrs:{font:"velo-sw"}},[t._v("r")]),t._v("te crian"),n("Typography",{attrs:{font:"velo-sw"}},[t._v("d")]),t._v("o jo"),n("Typography",{attrs:{font:"velo-sw"}},[t._v("g")]),t._v("os dive"),n("Typography",{attrs:{font:"velo-sw"}},[t._v("r")]),t._v("tid"),n("Typography",{attrs:{font:"velo-sw"}},[t._v("o")]),t._v("s. ")],1)],1),t._m(0),n("Button",{attrs:{color:"colorButtonPurple",size:"sizeMedium",font:"colorFontWhite",onClick:t.clickButtonParticipe}},[t._v(" Participe da nossa comunidade ")])],1)},J=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"body"},[t._v(" Somos a Krakenlab, um game studio que abraça as diferenças e os desafios. Nos esforçamos em construir experiências divertidas tanto para jogadores quanto para o nosso processo de desenvolvimento. "),n("br"),n("br"),t._v(" Da concepção a diversão, construímos jogos colaborativamente. Participe da nossa comunidade ")])}],U=n("2a7d"),G=n("71f4"),V={components:{Button:U["a"],Typography:G["a"]},methods:{clickButtonParticipe:function(){this.$router.push({name:"About"})}}},Y=V,Q=(n("8d7d"),Object(d["a"])(Y,D,J,!1,null,"9d419a00",null)),X=Q.exports,Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"workInProgress"},[n("Rectangle",{attrs:{roundedSide:"right"}},[n("div",{staticClass:"content"},[n("div",{staticClass:"title"},[n("Typography",{attrs:{font:"velo-sw"}},[t._v(" w"),n("Typography",{attrs:{font:"velo-w"}},[t._v("o")]),t._v("r"),n("Typography",{attrs:{font:"velo-w"}},[t._v("k in ")]),t._v(" p"),n("Typography",{attrs:{font:"velo-w"}},[t._v("ro")]),t._v("g"),n("Typography",{attrs:{font:"velo-w"}},[t._v("re")]),t._v("s"),n("Typography",{attrs:{font:"velo-w"}},[t._v("s")])],1)],1),n("div",[n("carousel",{attrs:{perPage:3,autoplay:!0,loop:!0,paginationEnabled:!1,speed:2e3,autoplayTimeout:6e3,spacePaddingMaxOffsetFacto:2}},[n("slide",[n("img",{attrs:{src:"https://picsum.photos/400/400/"}})]),n("slide",[n("img",{attrs:{src:"https://picsum.photos/400/400/"}})]),n("slide",[n("img",{attrs:{src:"https://picsum.photos/400/400/"}})]),n("slide",[n("img",{attrs:{src:"https://picsum.photos/400/400/"}})])],1)],1),n("div",{staticClass:"carousel_footer"},[n("Typography",{attrs:{font:"work-m"}},[t._v(" Heroes of Narion » ")]),n("div",{staticClass:"description"},[t._v(" Uma aventura de estratégia e raciocínio lógico ")])],1)])])],1)},tt=[],et=n("4f30"),nt=n("0a63"),ot=n.n(nt),rt={name:"Home",components:{Rectangle:et["a"],Typography:G["a"],Carousel:nt["Carousel"],Slide:nt["Slide"]},methods:{clickButtonParticipe:function(){this.$router.push({name:"About"})}}},at=rt,st=(n("e7fe"),Object(d["a"])(at,Z,tt,!1,null,"60cc4b2b",null)),it=st.exports,ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"end"},[n("div",{staticClass:"halfCol"},[n("Button",{attrs:{color:"colorButtonTurquoise",size:"sizeBig",font:"colorFontWhite"}},[n("Typography",{attrs:{font:"velo"}},[t._v("Co"),n("Typography",{attrs:{font:"velo-sw"}},[t._v("m")]),t._v("uni"),n("Typography",{attrs:{font:"velo-sw"}},[t._v("d")]),t._v("ade")],1)],1)],1),n("div",{staticClass:"halfCol"},[n("Button",{attrs:{color:"colorButtonPurple",size:"sizeBig",font:"colorFontYellow"}},[n("Typography",{attrs:{font:"velo"}},[t._v("C"),n("Typography",{attrs:{font:"velo-sw"}},[t._v("ar")]),t._v("reira"),n("Typography",{attrs:{font:"velo-sw"}},[t._v("s")])],1)],1)],1)])},ut=[],lt={components:{Button:U["a"],Typography:G["a"]}},ft=lt,dt=(n("6378"),Object(d["a"])(ft,ct,ut,!1,null,"34aea79e",null)),pt=dt.exports,mt={name:"Home",components:{Flex:M["a"],AnimatedKraken:q,WhoIAm:R,Presentation:X,WorkInProgress:it,FloatingEnding:pt}},vt=mt,ht=Object(d["a"])(vt,P,$,!1,null,null,null),gt=ht.exports;o["a"].use(O["a"]);var _t=[{path:"/",name:"Home",component:gt},{path:"/community",name:"Community",component:function(){return n.e("community").then(n.bind(null,"8838"))}},{path:"/career",name:"Career",component:function(){return n.e("career").then(n.bind(null,"6990"))}}],yt=new O["a"]({routes:_t}),bt=yt,Ct=n("ecee"),wt=n("ad3d"),xt=n("f2d1"),kt=n("c074");Ct["d"].add(xt["a"],kt["a"]),Ct["b"].watch(),o["a"].component("font-awesome-icon",wt["a"]),o["a"].config.productionTip=!1,new o["a"]({router:bt,VueCarousel:ot.a,render:function(t){return t(E)}}).$mount("#app")},"5cda":function(t,e,n){"use strict";n("29d6")},"612b":function(t,e,n){t.exports=n.p+"img/K.36669afb.svg"},"617c":function(t,e,n){"use strict";n("8c1d")},6378:function(t,e,n){"use strict";n("9d40")},"6b44":function(t,e,n){"use strict";n("1aa8")},"6ca8":function(t,e,n){t.exports=n.p+"img/MenuClose.8702be6e.svg"},"71f4":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{class:t.font},[t._t("default")],2)},r=[],a={props:{font:String}},s=a,i=(n("cc86"),n("2877")),c=Object(i["a"])(s,o,r,!1,null,null,null);e["a"]=c.exports},7879:function(t,e,n){},"81b9":function(t,e,n){t.exports=n.p+"img/MenuSandwich.cee5a954.svg"},8803:function(t,e,n){},"8c1d":function(t,e,n){},"8d7d":function(t,e,n){"use strict";n("7879")},"8e02":function(t,e,n){},"9d40":function(t,e,n){},a324:function(t,e,n){},a9a0:function(t,e,n){"use strict";n("8803")},c171:function(t,e,n){"use strict";n("40bf")},c1bf:function(t,e,n){},cc86:function(t,e,n){"use strict";n("8e02")},cfb2:function(t,e,n){"use strict";n("a324")},d44a:function(t,e,n){},e0c7:function(t,e,n){},e7fe:function(t,e,n){"use strict";n("c1bf")},f317:function(t,e,n){"use strict";n("fe06")},fe02:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex"},[t._t("default")],2)},r=[],a={name:"Flex"},s=a,i=(n("6b44"),n("2877")),c=Object(i["a"])(s,o,r,!1,null,"662b6fd5",null);e["a"]=c.exports},fe06:function(t,e,n){}});
//# sourceMappingURL=app.0d499103.js.map