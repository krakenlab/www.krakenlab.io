(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["game"],{"01e0":function(t,e,a){},"028a":function(t,e,a){"use strict";a("6d93")},1312:function(t,e,a){},"1aa8":function(t,e,a){},"24b5":function(t,e,a){},"26b3":function(t,e,a){"use strict";a("d768")},"2a7d":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{class:[t.color,t.size,t.font],attrs:{id:"button"},on:{click:function(e){return t.onClick()}}},[t._t("default")],2)},r=[],s={props:{color:{type:String,required:!0},size:{type:String,required:!1},font:{type:String,required:!0}},methods:{onClick:function(){this.$emit("click")}},name:"Button"},n=s,i=(a("8257"),a("2877")),l=Object(i["a"])(n,o,r,!1,null,"5fd5e5d4",null);e["a"]=l.exports},"4f30":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:["rectangle",t.roundedSide]},[t._t("default")],2)},r=[],s={name:"Rectangle",props:{roundedSide:{type:String,required:!0}}},n=s,i=(a("b384"),a("2877")),l=Object(i["a"])(n,o,r,!1,null,"ac663fa0",null);e["a"]=l.exports},"6b44":function(t,e,a){"use strict";a("1aa8")},"6d93":function(t,e,a){},"70d9":function(t,e,a){},7167:function(t,e,a){"use strict";a("1312")},"71f4":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{class:t.font},[t._t("default")],2)},r=[],s={props:{font:String}},n=s,i=(a("cc86"),a("2877")),l=Object(i["a"])(n,o,r,!1,null,null,null);e["a"]=l.exports},"7d36":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Flex",[a("Header"),a("Carousel"),a("GameInProgress"),a("Plataform"),a("Banner")],1)},r=[],s=a("fe02"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"game-header"},[t._m(0),a("div",{staticClass:"title"},[a("Typography",{attrs:{font:"velo"}},[t._v(" Aqui vai uma frase de ")]),a("br"),a("Typography",{attrs:{font:"velo"}},[t._v(" Efeito do jogo ")])],1)])},i=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"bigK"},[o("img",{attrs:{src:a("d967")}})])}],l=a("71f4"),c={components:{Typography:l["a"]}},u=c,p=(a("fe9c"),a("2877")),d=Object(p["a"])(u,n,i,!1,null,"892ca64e",null),f=d.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"gameCarousel"},[a("div",{staticClass:"content"},[a("div",{staticClass:"carrousel"},[a("carousel-3d",{attrs:{width:1048,autoplay:!1,speed:2e3,"controls-visible":!0,clickable:!1}},[a("slide",{staticClass:"slide",attrs:{index:0}},[a("iframe",{attrs:{width:"100%",height:"436",src:"https://www.youtube.com/embed/n3G-F_2IiuE",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),a("slide",{staticClass:"slide",attrs:{index:1}},[a("iframe",{attrs:{width:"100%",height:"436",src:"https://www.youtube.com/embed/n3G-F_2IiuE",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),a("slide",{staticClass:"slide",attrs:{index:2}},[a("iframe",{attrs:{width:"100%",height:"436",src:"https://www.youtube.com/embed/n3G-F_2IiuE",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])],1)],1),a("div",{staticClass:"carousel_footer"},[a("Typography",{staticClass:"video-description"},[t._v(" texto de impacto pra convencer a pessoa a dar dinheiro pra gente texto de impacto pra convencer a pessoa a dar dinheiro pra gente texto de impacto pra convencer a pessoa a dar dinheiro pra gente texto de impacto pra convencer a pessoa a dar dinheiro pra gente ")])],1)])])},g=[],m=a("2af0"),h={name:"GameCarousel",components:{Typography:l["a"],Carousel3d:m["Carousel3d"],Slide:m["Slide"]}},y=h,b=(a("ce60"),Object(p["a"])(y,v,g,!1,null,"9743161e",null)),_=b.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"gameInProgress"},[a("Rectangle",{attrs:{roundedSide:"right"}},[a("div",{staticClass:"content"},[a("div",{staticClass:"title"},[a("Typography",{attrs:{font:"velo-sw"}},[t._v("[Nome do Jogo]")])],1),a("div",{staticClass:"carrousel"},[a("carousel",{attrs:{perPage:3,autoplay:!0,loop:!0,paginationEnabled:!1,speed:2e3,autoplayTimeout:6e3,spacePaddingMaxOffsetFacto:2}},[a("slide",{staticClass:"slide"},[a("img",{attrs:{src:"https://picsum.photos/400/400/"}})]),a("slide",{staticClass:"slide"},[a("img",{attrs:{src:"https://picsum.photos/400/400/"}})]),a("slide",{staticClass:"slide"},[a("img",{attrs:{src:"https://picsum.photos/400/400/"}})]),a("slide",{staticClass:"slide"},[a("img",{attrs:{src:"https://picsum.photos/400/400/"}})])],1)],1),a("div",{staticClass:"carousel_footer"},[a("Typography",{attrs:{font:"work-m"}},[t._v(" Heroes of Narion » ")]),a("div",{staticClass:"description"},[t._v(" Uma aventura de estratégia e raciocínio lógico ")])],1)])])],1)},C=[],T=a("4f30"),x=a("0a63"),k={name:"GameInProgress",components:{Rectangle:T["a"],Typography:l["a"],Carousel:x["Carousel"],Slide:x["Slide"]}},E=k,B=(a("028a"),Object(p["a"])(E,w,C,!1,null,"1a14db4e",null)),S=B.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"platform-container"},[a("div",{staticClass:"description"},[a("Typography",{attrs:{font:"velo"}},[t._v("[Nome do Jogo] ta na "),a("Typography",{attrs:{font:"velo-sw"}},[t._v("s")]),t._v("ua"),a("br"),t._v(" p"),a("Typography",{attrs:{font:"velo-sw"}},[t._v("l")]),t._v("ataforma "),a("Typography",{attrs:{font:"velo-sw"}},[t._v("p")]),t._v("referi"),a("Typography",{attrs:{font:"velo-sw"}},[t._v("d")]),t._v("a")],1)],1),a("div",{staticClass:"button-group"},[a("Button",{attrs:{color:"colorButtonBlack",font:"colorFontWhite"},on:{click:function(e){return t.goToExternalLink("https://store.steampowered.com/?l=portuguese")}}},[a("Typography",{attrs:{font:"velo"}},[t._v("S"),a("Typography",{attrs:{font:"velo-sw"}},[t._v("T")]),t._v("ea"),a("Typography",{attrs:{font:"velo-sw"}},[t._v("m")])],1)],1),a("Button",{attrs:{color:"colorButtonTurquoise",font:"colorFontWhite"},on:{click:function(e){return t.goToExternalLink("https://www.xbox.com/pt-BR")}}},[a("Typography",{attrs:{font:"velo"}},[a("Typography",{attrs:{font:"velo-sw"}},[t._v("xbo")]),t._v("x")],1)],1),a("Button",{attrs:{color:"colorButtonRed",font:"colorFontWhite"},on:{click:function(e){return t.goToExternalLink("https://stadia.google.com/")}}},[a("Typography",{attrs:{font:"velo"}},[a("Typography",{attrs:{font:"velo-sw"}},[t._v("S")]),t._v("ta"),a("Typography",{attrs:{font:"velo-sw"}},[t._v("d")]),t._v("ia")],1)],1),a("Button",{attrs:{color:"colorButtonPurple",font:"colorFontWhite"},on:{click:function(e){return t.goToExternalLink("https://www.gog.com/")}}},[a("Typography",{attrs:{font:"velo-sw"}},[t._v("Gog")])],1)],1)])},j=[],$=a("2a7d"),F={components:{Button:$["a"],Typography:l["a"]},methods:{goToExternalLink:function(t){window.open(t,"_blank")}}},O=F,I=(a("26b3"),Object(p["a"])(O,q,j,!1,null,"502c8a32",null)),G=I.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("div",{staticClass:"container"},[a("div",{staticClass:"left"},[a("Typography",{attrs:{font:"velo"}},[t._v(" Aqui a gente fala sobre a krakenlab ")])],1),a("div",{staticClass:"right"},[a("div",{staticClass:"info"},[a("Typography",[t._v(" na verdade é AQUI que a gente fala sobre a krakenlab, ali do lado é só um título engraçadinho sobre esse textinho aqui na verdade é AQUI que a gente fala sobre a krakenlab, ali do lado é só um título engraçadinho sobre esse textinho aqui na verdade é AQUI que a gente fala sobre a krakenlab, ali do lado é só um título engraçadinho sobre esse textinho aqui ")])],1)])])])},A=[],L={name:"Banner",components:{Typography:l["a"]}},R=L,J=(a("7167"),Object(p["a"])(R,P,A,!1,null,"317e33ae",null)),U=J.exports,W={name:"Game",components:{Flex:s["a"],Header:f,Carousel:_,Plataform:G,GameInProgress:S,Banner:U}},H=W,N=Object(p["a"])(H,o,r,!1,null,null,null);e["default"]=N.exports},8257:function(t,e,a){"use strict";a("24b5")},"8e02":function(t,e,a){},b384:function(t,e,a){"use strict";a("70d9")},cc86:function(t,e,a){"use strict";a("8e02")},ce60:function(t,e,a){"use strict";a("01e0")},d768:function(t,e,a){},d967:function(t,e,a){t.exports=a.p+"img/game-hero-image.7e2514fb.jpg"},f2d4:function(t,e,a){},fe02:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex"},[t._t("default")],2)},r=[],s={name:"Flex"},n=s,i=(a("6b44"),a("2877")),l=Object(i["a"])(n,o,r,!1,null,"662b6fd5",null);e["a"]=l.exports},fe9c:function(t,e,a){"use strict";a("f2d4")}}]);
//# sourceMappingURL=game.40584403.js.map