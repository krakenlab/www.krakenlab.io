(function(t){function e(e){for(var o,r,s=e[0],c=e[1],u=e[2],l=0,f=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);m&&m(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,r=1;r<n.length;r++){var s=n[r];0!==a[s]&&(o=!1)}o&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},r={app:0},a={app:0},i=[];function s(t){return c.p+"js/"+({community:"community"}[t]||t)+"."+{community:"57bae0f7"}[t]+".js"}function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={community:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var o="css/"+({community:"community"}[t]||t)+"."+{community:"15e62738"}[t]+".css",a=c.p+o,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===a))return e()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){u=f[s],l=u.getAttribute("data-href");if(l===o||l===a)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var o=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[t],m.parentNode.removeChild(m),n(i)},m.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(m)})).then((function(){r[t]=0})));var o=a[t];if(0!==o)if(o)e.push(o[2]);else{var i=new Promise((function(e,n){o=a[t]=[e,n]}));e.push(o[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(m);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",f.name="ChunkLoadError",f.type=o,f.request=r,n[1](f)}a[t]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var m=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"3a92":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e623"),n("e379"),n("5dc8"),n("37e1");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("router-view"),n("Footer")],1)},a=[],i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"headerSize"},[o("div",{attrs:{id:"header"}},[o("svg",{class:t.currentRouteName,attrs:{width:"57",height:"56",viewBox:"0 0 57 56",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},on:{click:t.toHome}},[o("path",{attrs:{d:"M53.1788 34.7368L46.067 27.6842L52.3296 21.4737C54.8771 18.9474 56.0447 15.7895 56.0447 12.5263C56.0447 9.26316 54.8771 6.10526 52.3296 3.68421C50.1006 1.26316 46.8101 0 43.6257 0C40.3352 0 37.1508 1.26316 34.6034 3.68421L26.5363 11.6842C23.5642 14.5263 19.3184 16.7368 13.5866 16.4211C13.5866 16.4211 18.257 15.7895 24.6257 8.10526C22.7151 3.26316 18.1508 0 12.5251 0C5.51955 0 0 5.47368 0 12.5263V43.5789C0 50.5263 5.51955 56 12.5251 56C16.6648 56 19.743 54.4211 22.5028 51.4737L28.3408 45.4737L35.4525 52.3158C38 54.7368 41.1844 56 44.4749 56C47.6592 56 50.9497 54.7368 53.2849 52.3158C55.8324 49.8947 57 46.7368 57 43.5789C57 40.4211 55.7263 37.1579 53.1788 34.7368Z"}})]),o("img",{staticClass:"menuSandwich",attrs:{src:n("87f9")},on:{click:t.openMenu}})]),t.isShowingMenu?o("div",[o("Menu",{attrs:{isShowing:t.isShowingMenu},on:{close:function(e){return t.onMenuClose(e)}}})],1):t._e()])},s=[],c=(n("b0c0"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"modal"},[o("div",{attrs:{id:"header"}},[o("img",{staticClass:"logoKMenu",attrs:{src:n("6d9e")},on:{click:t.closeToHome}}),o("img",{attrs:{src:n("e6eb")},on:{click:t.close}})]),o("div",{staticClass:"menu"},[o("a",{staticClass:"rolling-text",on:{click:function(e){return t.goTo("Home")}}},[t._v(" home ")]),o("br"),o("a",{staticClass:"rolling-text",on:{click:function(e){return t.goTo("Community")}}},[t._v(" comunidade ")]),o("br"),o("a",{staticClass:"rolling-text",on:{click:function(e){return t.goTo("Career")}}},[t._v(" carreira ")]),o("br"),o("a",{staticClass:"rolling-text",on:{click:function(e){return t.goTo("Shop")}}},[t._v(" lojinha ")]),o("br"),o("a",{staticClass:"rolling-text",on:{click:function(e){return t.goTo("Newsletter")}}},[t._v(" newsletter ")])])])}),u=[],l={name:"Menu",props:{isShowing:{type:Boolean,required:!0}},methods:{goTo:function(t){this.$router.push({name:t}).catch((function(){})),this.close()},closeToHome:function(){this.$emit("close","home")},closeToNewsLetter:function(){this.$emit("close","newsletter")},close:function(){this.$emit("close","close")}},mounted:function(){document.body.classList.add("menu-toogle")},destroyed:function(){document.body.classList.remove("menu-toogle")}},f=l,m=(n("a56a"),n("2877")),d=Object(m["a"])(f,c,u,!1,null,"06d5b9a1",null),h=d.exports,p={name:"Header",components:{Menu:h},methods:{toHome:function(){this.$router.push({name:"Home"}),this.closeMenu()},openMenu:function(){this.isShowingMenu=!0},closeMenu:function(){this.isShowingMenu=!1},onMenuClose:function(t){switch(t){case"home":this.toHome();break;default:this.closeMenu();break}}},data:function(){return{isShowingMenu:!1}},computed:{currentRouteName:function(){return"logoKHome ".concat(this.$route?this.$route.name:"")}}},v=p,C=(n("847b"),Object(m["a"])(v,i,s,!1,null,"25c40264",null)),g=C.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.currentDivRouteName},[t._m(0),n("div",{attrs:{id:"footer"}},[n("svg",{class:t.currentRouteName,attrs:{width:"57",height:"56",viewBox:"0 0 57 56",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M53.1788 34.7368L46.067 27.6842L52.3296 21.4737C54.8771 18.9474 56.0447 15.7895 56.0447 12.5263C56.0447 9.26316 54.8771 6.10526 52.3296 3.68421C50.1006 1.26316 46.8101 0 43.6257 0C40.3352 0 37.1508 1.26316 34.6034 3.68421L26.5363 11.6842C23.5642 14.5263 19.3184 16.7368 13.5866 16.4211C13.5866 16.4211 18.257 15.7895 24.6257 8.10526C22.7151 3.26316 18.1508 0 12.5251 0C5.51955 0 0 5.47368 0 12.5263V43.5789C0 50.5263 5.51955 56 12.5251 56C16.6648 56 19.743 54.4211 22.5028 51.4737L28.3408 45.4737L35.4525 52.3158C38 54.7368 41.1844 56 44.4749 56C47.6592 56 50.9497 54.7368 53.2849 52.3158C55.8324 49.8947 57 46.7368 57 43.5789C57 40.4211 55.7263 37.1579 53.1788 34.7368Z"}})]),t._m(1),t._m(2),t._m(3),t._m(4)])])},w=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",{attrs:{id:"mobile-footer"}},[o("div",{staticClass:"icons"},[o("i",{staticClass:"fab fa-discord fa-fw fa-2x"}),o("i",{staticClass:"fab fa-linkedin fa-fw fa-2x"}),o("i",{staticClass:"fab fa-github fa-fw fa-2x"}),o("i",{staticClass:"fab fa-trello fa-fw fa-2x"}),o("i",{staticClass:"fas fa-rss fa-fw fa-2x"})]),o("div",{staticClass:"logok-container"},[o("img",{staticClass:"filter-K-yellow",attrs:{id:"logoK",src:n("6d9e")}})]),o("div",{staticClass:"contact-container"},[o("div",{staticClass:"contact-content"},[t._v(" fale com a gente pelo "),o("a",{attrs:{href:"mailto:oi@krakenlab.io"}},[t._v(" oi@krakenlab.io")]),t._v(" "),o("br"),t._v(" ou vem de zap no "),o("a",{attrs:{href:"tel:+55478888-8888"}},[t._v("(47) 8888-8888")]),o("div",{staticClass:"contact-address"},[o("div",{staticClass:"adress-icon"},[o("i",{staticClass:"fas fa-map-marker-alt fa-fw fa-2x"})]),o("div",[o("div",{staticClass:"text"},[o("strong",[t._v("Joinville")]),o("br"),t._v("Rua Orestes Guimarães, 876 - América ")]),o("div",{staticClass:"text"},[o("strong",[t._v("Curitiba")]),t._v(" "),o("br"),t._v(" Rua Treze de Maio, 305 - Centro ")])])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text"},[n("span",[t._v("Joinville")]),n("br"),t._v("Rua Orestes Guimarães, 876 - América ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text"},[n("span",[t._v("Curitiba")]),n("br"),t._v("Rua Treze de Maio, 305 - Centro ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text"},[t._v(" comlicenca@krakenlab.io "),n("br"),t._v("medaumtrampo@krakenlab.io ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icons"},[n("i",{staticClass:"fab fa-discord fa-fw fa-2x"}),n("i",{staticClass:"fab fa-linkedin fa-fw fa-2x"}),n("i",{staticClass:"fab fa-github fa-fw fa-2x"}),n("i",{staticClass:"fab fa-trello fa-fw fa-2x",staticStyle:{display:"none"}}),n("i",{staticClass:"fas fa-rss fa-fw fa-2x"})])}],_={name:"Footer",computed:{currentRouteName:function(){return"logoKFooter ".concat(this.$route?this.$route.name:"")},currentDivRouteName:function(){return"logoKDiv ".concat(this.$route?this.$route.name:"")}}},y=_,x=(n("ef35"),Object(m["a"])(y,b,w,!1,null,"34764a48",null)),k=x.exports,M={name:"App",components:{Header:g,Footer:k}},S=M,$=(n("f317"),Object(m["a"])(S,r,a,!1,null,null,null)),T=$.exports,E=(n("d3b7"),n("8c4f"));o["a"].use(E["a"]);var L=[{path:"/",name:"Home",component:function(){return n.e("community").then(n.bind(null,"bb51"))}},{path:"/community",name:"Community",component:function(){return n.e("community").then(n.bind(null,"8838"))}},{path:"/career",name:"Career",component:function(){return n.e("community").then(n.bind(null,"6990"))}},{path:"/shop",name:"Shop",component:function(){return n.e("community").then(n.bind(null,"0fa5"))}},{path:"/newsletter",name:"Newsletter",component:function(){return n.e("community").then(n.bind(null,"e134"))}}],O=new E["a"]({routes:L}),j=O,N=n("ecee"),H=n("ad3d"),P=n("f2d1"),R=n("c074");N["d"].add(P["a"],R["a"]),N["b"].watch(),o["a"].component("font-awesome-icon",H["a"]);var A=n("0a63"),K=n.n(A);o["a"].config.productionTip=!1,new o["a"]({router:j,VueCarousel:K.a,render:function(t){return t(T)}}).$mount("#app")},"6d9e":function(t,e,n){t.exports=n.p+"img/K.864c1a8c.svg"},7771:function(t,e,n){},"847b":function(t,e,n){"use strict";n("cb62")},"87f9":function(t,e,n){t.exports=n.p+"img/MenuSandwich.cee5a954.svg"},a56a:function(t,e,n){"use strict";n("7771")},cb62:function(t,e,n){},e6eb:function(t,e,n){t.exports=n.p+"img/MenuClose.8702be6e.svg"},ef35:function(t,e,n){"use strict";n("3a92")},f317:function(t,e,n){"use strict";n("fe06")},fe06:function(t,e,n){}});
//# sourceMappingURL=app.f816772e.js.map