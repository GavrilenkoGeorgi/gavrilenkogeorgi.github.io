(function(t){function e(e){for(var i,s,o=e[0],l=e[1],c=e[2],u=0,v=[];u<o.length;u++)s=o[u],n[s]&&v.push(n[s][0]),n[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(e);while(v.length)v.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,s=1;s<a.length;s++){var o=a[s];0!==n[o]&&(i=!1)}i&&(r.splice(e--,1),t=l(l.s=a[0]))}return t}var i={},s={app:0},n={app:0},r=[];function o(t){return l.p+"js/"+({about:"about",gallery:"gallery",philosophy:"philosophy"}[t]||t)+"."+{about:"7f09e68a",gallery:"15569833",philosophy:"d560c558"}[t]+".js"}function l(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={about:1,gallery:1,philosophy:1};s[t]?e.push(s[t]):0!==s[t]&&a[t]&&e.push(s[t]=new Promise(function(e,a){for(var i="css/"+({about:"about",gallery:"gallery",philosophy:"philosophy"}[t]||t)+"."+{about:"7105ebee",gallery:"b5b4cbb5",philosophy:"43f63379"}[t]+".css",s=l.p+i,n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],c=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(c===i||c===s))return e()}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],c=o.getAttribute("data-href");if(c===i||c===s)return e()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=e,v.onerror=function(e){var i=e&&e.target&&e.target.src||s,n=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");n.request=i,a(n)},v.href=s;var d=document.getElementsByTagName("head")[0];d.appendChild(v)}).then(function(){s[t]=0}));var i=n[t];if(0!==i)if(i)e.push(i[2]);else{var r=new Promise(function(e,a){i=n[t]=[e,a]});e.push(i[2]=r);var c,u=document.getElementsByTagName("head")[0],v=document.createElement("script");v.charset="utf-8",v.timeout=120,l.nc&&v.setAttribute("nonce",l.nc),v.src=o(t),c=function(e){v.onerror=v.onload=null,clearTimeout(d);var a=n[t];if(0!==a){if(a){var i=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+i+": "+s+")");r.type=i,r.request=s,a[1](r)}n[t]=void 0}};var d=setTimeout(function(){c({type:"timeout",target:v})},12e4);v.onerror=v.onload=c,u.appendChild(v)}return Promise.all(e)},l.m=t,l.c=i,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)l.d(a,i,function(e){return t[e]}.bind(null,i));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var v=0;v<c.length;v++)e(c[v]);var d=u;r.push([1,"chunk-vendors"]),a()})({1:function(t,e,a){t.exports=a("56d7")},2856:function(t,e,a){},"2b30":function(t,e,a){t.exports=a.p+"img/groomingTitlePhoto.54a4d39b.png"},"2ca8":function(t,e,a){"use strict";var i=a("9e6e"),s=a.n(i);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var i=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"app"}},[a("v-container",{attrs:{fluid:"",column:"","pa-0":""}},[a("v-navigation-drawer",{attrs:{temporary:"",absolute:"",right:""},model:{value:t.sideNav,callback:function(e){t.sideNav=e},expression:"sideNav"}},[a("v-list",[a("v-list-tile",[a("v-list-tile-content",[a("router-link",{attrs:{to:"/gallery"}},[t._v("Галерея")])],1)],1),a("v-list-tile",[a("v-list-tile-content",[t._v("Отзывы")])],1),a("v-list-tile",[a("v-list-tile-content",[a("router-link",{attrs:{to:"/philosophy"}},[t._v("Наша философия")])],1)],1),a("v-list-tile",[a("v-list-tile-content",[a("router-link",{attrs:{to:"/about"}},[t._v("О нас")])],1)],1),a("v-list-tile",[a("v-list-tile-content",[t._v("Контакты")])],1)],1)],1),a("v-toolbar",{attrs:{app:""}},[a("v-toolbar-title",[a("span",[a("router-link",{staticClass:"logo",attrs:{to:"/"}},[t._v("MaxDog")])],1)]),a("v-spacer"),a("v-btn",{staticClass:"hidden-xs-only",attrs:{to:"/gallery",flat:""}},[t._v("\n      Галерея")]),a("v-btn",{staticClass:"hidden-xs-only",attrs:{flat:""}},[t._v("\n      Отзывы")]),a("v-btn",{staticClass:"hidden-xs-only",attrs:{to:"/philosophy",flat:""}},[t._v("\n      Наша философия")]),a("v-btn",{staticClass:"hidden-xs-only",attrs:{to:"/about",flat:""}},[t._v("\n      О нас")]),a("v-btn",{staticClass:"hidden-xs-only",attrs:{flat:""}},[t._v("\n      Контакты")]),a("v-toolbar-side-icon",{staticClass:"hidden-sm-and-up",on:{click:function(e){t.sideNav=!t.sideNav}}})],1),a("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("transition",{attrs:{name:"custom-classes-transition",mode:"out-in","enter-active-class":"animated fadeInLeft","leave-active-class":"animated fadeOutRight"}},[a("router-view")],1)],1)],1)],1),a("Footer")],1)],1)},n=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{attrs:{absolute:""}},[a("v-layout",{staticClass:"footer",attrs:{row:"",wrap:"","align-center":"","justify-center":""}},[a("v-flex",{attrs:{"d-flex":"",xs12:"",md4:"","pt-2":""}},[a("h2",[a("span",{staticClass:"logo"},[t._v("MaxDog")])])]),a("v-flex",{attrs:{"d-flex":"",xs12:"",md4:""}},[a("p",{staticClass:"contacts"},[t._v("ул. Крещатик, 1а, Киев. "),a("br"),t._v("\n        119019, Украина "),a("br"),t._v("\n        Телефон: +38 (050) 123-45-67 "),a("br"),t._v("\n        info@maxdog.com.ua\n      ")])]),a("v-flex",{attrs:{xs12:"","ma-2":""}},[a("ul",{staticClass:"social-icons"},[a("li",[a("a",{staticClass:"social-icon",attrs:{href:""}},[a("i",{staticClass:"fa fa-facebook"})])]),a("li",[a("a",{staticClass:"social-icon",attrs:{href:""}},[a("i",{staticClass:"fa fa-twitter"})])]),a("li",[a("a",{staticClass:"social-icon",attrs:{href:""}},[a("i",{staticClass:"fa fa-rss"})])]),a("li",[a("a",{staticClass:"social-icon",attrs:{href:""}},[a("i",{staticClass:"fa fa-youtube"})])]),a("li",[a("a",{staticClass:"social-icon",attrs:{href:""}},[a("i",{staticClass:"fa fa-linkedin"})])]),a("li",[a("a",{staticClass:"social-icon",attrs:{href:""}},[a("i",{staticClass:"fa fa-google-plus"})])])])])],1)],1)},o=[],l={name:"Footer",props:{msg:String}},c=l,u=(a("a08a"),a("2877")),v=Object(u["a"])(c,r,o,!1,null,"2190b6f3",null);v.options.__file="Footer.vue";var d=v.exports,p={name:"app",data:function(){return{sideNav:!1}},components:{Footer:d}},f=p,m=(a("5c0b"),Object(u["a"])(f,s,n,!1,null,null,null));m.options.__file="App.vue";var h=m.exports,b=a("8c4f"),g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"home"}},[i("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[i("v-layout",[i("v-flex",{attrs:{xs12:""}},[i("v-parallax",{attrs:{height:"500",src:a("be59")}},[i("h1",{staticClass:"display-2 photo-overlay"},[t._v("Дрессировка собак в Киеве и Киевской области")])])],1)],1)],1),i("v-container",[i("v-layout",[i("v-flex",{attrs:{xs12:""}},[i("h2",{staticClass:"display-3"},[t._v("Почему именно MaxDog?")]),i("p",{staticClass:"simpleTextBlock"},[t._v("\n                Blah, blah, blah. Lorem ipsum dolor sit amet, solum meliore efficiendi ut quo, ex assum interesset mel,\n                quis eirmod in est. Ea quod verear albucius eos, an est eros insolens reprehendunt. No veritus assentior ius,\n                duo no modus paulo expetendis, est enim intellegat omittantur ut. His munere soleat verear ex, cu his diam delectus.\n              ")])])],1),i("v-layout",{staticClass:"mt-4",attrs:{row:"",wrap:"","justify-space-around":""}},[i("v-flex",{staticClass:"mt-4",attrs:{xs10:"",md4:""}},[i("v-icon",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:{callback:t.visibilityChanged,throttle:300},expression:"{ callback: visibilityChanged, throttle: 300 }"}],staticClass:"animated",attrs:{"x-large":""}},[t._v("favorite")]),i("p",{staticClass:"simpleTextBlock"},[t._v("\n              Qui cu omnes dissentias. Laoreet accumsan mea at, sea harum facilisi no. Ad eos fierent salutandi repudiare,\n              ei eum sint graece, ei sanctus detraxit cum.\n            ")])],1),i("v-flex",{staticClass:"mt-4",attrs:{xs10:"",md4:""}},[i("v-icon",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:{callback:t.visibilityChanged,throttle:300},expression:"{ callback: visibilityChanged, throttle: 300 }"}],staticClass:"animated",attrs:{"x-large":""}},[t._v("pets")]),i("p",{staticClass:"simpleTextBlock"},[t._v("\n              Nam eu ferri mediocritatem, vix prodesset definitionem ut, ea usu veri urbanitas. Et elit officiis deterruisset\n              per, eam at quaeque copiosae euripidis. Duo in natum nemore gubergren, ne sensibus consetetur est, cum at ipsum error.\n            ")])],1),i("v-flex",{attrs:{xs12:""}},[i("h2",{staticClass:"display-3"},[t._v("Первый урок — 50%")]),i("v-btn",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:{callback:t.visibilityChanged,throttle:300},expression:"{ callback: visibilityChanged, throttle: 300 }"}],staticClass:"mt-4 animated",attrs:{color:"info",large:""}},[t._v("ОНЛАЙН ЗАПИСЬ")])],1)],1)],1),i("v-container",[i("v-layout",{attrs:{row:"",wrap:"","justify-space-around":""}},[i("v-flex",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:{callback:t.visibilityChanged,throttle:300},expression:"{ callback: visibilityChanged, throttle: 300 }"}],staticClass:"animated groupTraining hidden",attrs:{xs12:"",md5:""}},[i("h4",{staticClass:"display-1"},[t._v("Групповые занятия")]),i("v-img",{attrs:{src:a("7e1e"),height:"320",contain:""}}),i("p",{staticClass:"simpleTextBlock"},[t._v("\n              На групповых занятиях дважды в неделю вы получаете практический\n              и теоретический инструктаж как проводить воспитание и дрессировку поэтапно далее в домашних\n              условиях.\n              Мы постараемся ответить на все ваши вопросы. Вы, ежедневно в быту, закрепляете со\n              щенком домашнее задание — полученную на занятиях базу знаний и навыков.\n              При этом варианте обучения требуется несколько больше времени, но терпение и труд обернутся\n              — хорошим выполнением всех необходимых базовых команд. Вы получите послушную,\n              социализированную, контактную собаку.\n            ")])],1),i("v-flex",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:{callback:t.visibilityChanged,throttle:300},expression:"{ callback: visibilityChanged, throttle: 300 }"}],staticClass:"animated individualTraining hidden",attrs:{xs12:"",md5:""}},[i("h4",{staticClass:"display-1"},[t._v("Индивидуальные занятия")]),i("v-img",{attrs:{src:a("cdec"),height:"320",contain:""}}),i("p",{staticClass:"simpleTextBlock"},[t._v("\n              При индивидуальных занятиях мы тренируем собаку тет-а-тет с вами или\n              самостоятельно там, где, когда и во сколько вам удобно. Тренировка ориентирована на потребности\n              сугубо вашей собаки и соответственно обучение дает максимальный результат в сжатые сроки.\n            ")])],1)],1)],1),i("v-container",{staticClass:"pa-0 mt-5",attrs:{fluid:""}},[i("v-layout",[i("v-flex",{attrs:{xs12:""}},[i("v-parallax",{attrs:{src:a("9b7a")}},[i("h1",{staticClass:"display-2 photo-overlay"},[t._v("Грумінг собак і кішок")])])],1)],1)],1),i("v-container",[i("v-layout",{attrs:{row:"",wrap:"","justify-space-around":""}},[i("v-flex",{attrs:{xs12:"",md8:""}},[i("v-img",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:{callback:t.visibilityChanged,throttle:300},expression:"{ callback: visibilityChanged, throttle: 300 }"}],staticClass:"animated hidden groomingSection",attrs:{src:a("2b30"),height:"371",contain:""}}),i("p",{staticClass:"simpleTextBlock marginBottom"},[t._v("\n            Здравствуй, дорогой друг, меня зовут Людмила!\n            «Hairstyle animals» — Ты здесь, а это значит что провел свои пару минут не просто посетив сайт,\n            а нашел именно того грумера которого так долго искал, грумера-стилиста, создающего не просто\n            стандартный образ, а тот образ который подчеркивает все преимущества животного, скрывая недостатки, придавая шарм\n            и новизну, учитывая здоровье животного, так как имеем высшее ветеринарное образование!\n            Мы не стоим на месте, повышаем свою квалификацию на всевозможных конкурсах и мастер классах.\n            Стремимся к тому, чтобы приучить не только животное к грумингу, а и его хозяина к своевременному посещению грумера.\n            Так как это залог здоровья, красоты, послушания животного!\n            Груминг и кинология взаимосвязаные сферы. Как вы приучите своё животное к грумингу с детства, так и дальше будет оно\n            себя вести.\n          ")])],1)],1)],1)],1)},y=[],x={name:"home",data:function(){return{title:"MaxDog"}},methods:{visibilityChanged:function(t,e){var a="flipInY";e.target.classList.contains("groupTraining")?a="fadeInLeft":e.target.classList.contains("individualTraining")?a="fadeInRight":e.target.classList.contains("groomingSection")&&(a="zoomIn"),t?(e.target.classList.add(a),e.target.classList.remove("hidden")):(e.target.classList.remove(a),e.target.classList.add("hidden"))}}},C=x,_=(a("ec54"),Object(u["a"])(C,g,y,!1,null,"7198be56",null));_.options.__file="Home.vue";var w=_.exports,k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"main"}},[a("h2",[t._v("Hey!")])])}],T=(a("2ca8"),{}),N=Object(u["a"])(T,k,j,!1,null,"945948f0",null);N.options.__file="Main.vue";var E=N.exports;i["default"].use(b["a"]);var O=new b["a"]({mode:"history",routes:[{path:"/",name:"home",component:w},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/philosophy",name:"philosophy",component:function(){return a.e("philosophy").then(a.bind(null,"77d0"))}},{path:"/gallery",name:"gallery",component:function(){return a.e("gallery").then(a.bind(null,"0d77"))}},{path:"*",component:E}]}),B=a("2f62");i["default"].use(B["a"]);var L=new B["a"].Store({state:{},mutations:{},actions:{}}),S=a("ce5b"),P=a.n(S),M=(a("bf40"),a("641b"),a("85fe"));i["default"].use(M["a"]),i["default"].use(P.a),i["default"].config.productionTip=!1,new i["default"]({router:O,store:L,render:function(t){return t(h)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var i=a("2856"),s=a.n(i);s.a},"641b":function(t,e,a){},"7e1e":function(t,e,a){t.exports=a.p+"img/groupOfDogs.67a417c7.jpg"},"9b7a":function(t,e,a){t.exports=a.p+"img/dogFenceRunningSquare.02ccb4e9.jpg"},"9e6e":function(t,e,a){},a08a:function(t,e,a){"use strict";var i=a("f191"),s=a.n(i);s.a},a404:function(t,e,a){},be59:function(t,e,a){t.exports=a.p+"img/dog-wallpaper.105b48c0.jpg"},cdec:function(t,e,a){t.exports=a.p+"img/dogPlayingBallSmall.48d14dc8.jpg"},ec54:function(t,e,a){"use strict";var i=a("a404"),s=a.n(i);s.a},f191:function(t,e,a){}});
//# sourceMappingURL=app.8ff42be2.js.map