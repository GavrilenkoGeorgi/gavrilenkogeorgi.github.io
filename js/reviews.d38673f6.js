(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["reviews"],{"214f":function(t,e,n){"use strict";var r=n("32e9"),o=n("2aba"),a=n("79e5"),i=n("be13"),c=n("2b4c");t.exports=function(t,e,n){var s=c(t),u=n(i,s,""[t]),l=u[0],f=u[1];a(function(){var e={};return e[s]=function(){return 7},7!=""[t](e)})&&(o(String.prototype,t,l),r(RegExp.prototype,s,2==e?function(t,e){return f.call(t,this,e)}:function(t){return f.call(t,this)}))}},"2e51":function(t,e,n){"use strict";n.r(e);var r,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"pa-0":""}},[n("v-layout",{attrs:{column:""}},[n("v-flex",{attrs:{"d-flex":"","align-center":""}},[n("h1",[t._v(t._s(t.pageTitle))])]),n("v-layout",{attrs:{"justify-center":""}},[n("v-carousel",{staticClass:"reviews",attrs:{light:"",height:"550px"}},t._l(t.allReviews,function(e){return n("v-carousel-item",{key:e.id,staticClass:"slow"},[n("v-layout",{attrs:{"align-center":"","justify-center":"",column:"","fill-height":""}},[n("v-flex",{staticClass:"text-xs-center",attrs:{"d-flex":"","align-center":""}},[n("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[n("v-flex",{staticClass:"text-xs-left",attrs:{xs9:""}},t._l(e.stars,function(e){return n("v-icon",{key:e,attrs:{color:"orange"}},[t._v("grade")])})),n("v-flex",{staticClass:"text-xs-left",attrs:{xs9:""}},[n("i",[t._v(t._s(e.content))])]),n("v-flex",{staticClass:"author-name text-xs-right",attrs:{xs9:""}},[t._v("\n                    "+t._s(t.quoteFormatting)+t._s(e.author)+"\n                  ")])],1)],1)],1)],1)}))],1),n("v-layout",{attrs:{"justify-center":"",wrap:""}},[n("v-flex",{attrs:{"mt-4":""}},[n("h3",[t._v("ОСТАВЬТЕ ОТЗЫВ")])]),n("v-flex",{attrs:{xs10:""}},[n("v-form",{ref:"form",staticClass:"mt-4",model:{value:t.form,callback:function(e){t.form=e},expression:"form"}},[n("v-text-field",{staticStyle:{"min-height":"96px"},attrs:{rules:[t.rules.nameLength(10)],box:"",color:"deep-purple",counter:"10",label:"Ваше имя",type:"user-name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),n("v-textarea",{attrs:{rules:[t.rules.reviewLength(200)],"auto-grow":"",box:"",counter:"200",color:"deep-purple",label:"Отзыв",rows:"5"},model:{value:t.formReviewText,callback:function(e){t.formReviewText=e},expression:"formReviewText"}})],1)],1),n("v-flex",{attrs:{xs10:"",sm8:"",md6:"",lg3:""}},[n("v-flex",{attrs:{"d-flex":"","mt-3":"","mb-4":""}},[n("v-btn",{attrs:{flat:""},on:{click:function(e){t.$refs.form.reset()}}},[t._v("\n      ОЧИСТИТЬ\n    ")]),n("v-btn",{attrs:{color:"blue-grey lighten-4"},on:{click:t.onSubmit}},[n("v-icon",[t._v("format_quote")]),t._v("ОТПРАВИТЬ\n          ")],1)],1)],1)],1)],1),t._v("\n  "+t._s(t.token)+"\n  ")],1)},a=[],i=(n("4917"),n("cadf"),n("551c"),n("097d"),n("2b0e")),c=function(){function t(t,e){this.siteKey=t,this.recaptcha=e}return t.prototype.execute=function(t){var e=this;return new Promise(function(n,r){e.recaptcha.execute(e.siteKey,{action:t}).then(n,r)})},t.prototype.hideBadge=function(){var t=this.findBadges();t.forEach(function(t){t.style.display="none"})},t.prototype.showBadge=function(){var t=this.findBadges();t.forEach(function(t){t.style.display="block"})},t.prototype.findBadges=function(){var t=Array.from(document.getElementsByClassName("grecaptcha-badge"));return t.filter(function(t){return t instanceof HTMLElement}).map(function(t){return t})},t}(),s=function(){function t(){}return t.load=function(e,n){if(void 0===n&&(n={}),"undefined"===typeof document)throw new Error("This is a library for the browser!");if(t.getLoadingState()===r.LOADED)return Promise.resolve(new c(e,grecaptcha));if(t.getLoadingState()===r.LOADING)return new Promise(function(e,n){t.successfulLoadingConsumers.push(function(t){return e(t)}),t.errorLoadingRunnable.push(function(t){return n()})});t.setLoadingState(r.LOADING);var o=new t;return new Promise(function(a,i){o.loadScript(e,n.useRecaptchaNet||!1).then(function(){t.setLoadingState(r.LOADED);var o=new c(e,grecaptcha);t.successfulLoadingConsumers.forEach(function(t){return t(o)}),t.successfulLoadingConsumers=[],n.autoHideBadge&&o.hideBadge(),a(o)}).catch(function(e){t.errorLoadingRunnable.forEach(function(t){return t(e)}),t.errorLoadingRunnable=[],i(e)})})},t.setLoadingState=function(e){document.documentElement.setAttribute(t.stateAttributeName,e)},t.getLoadingState=function(){var e=document.documentElement;if(e.hasAttribute(t.stateAttributeName)){var n=parseInt(e.getAttribute(t.stateAttributeName),10);return isNaN(n)?r.NOT_LOADED:n}return r.NOT_LOADED},t.hasReCaptchaScript=function(){for(var t=document.head.getElementsByTagName("script"),e=0;e<t.length;e++){var n=t[e];if(n.hasAttribute("recaptcha-v3-script"))return!0}return!1},t.prototype.loadScript=function(t,e){var n=this;void 0===e&&(e=!1);var r=document.createElement("script");r.setAttribute("recaptcha-v3-script","");var o="https://www.google.com/recaptcha/api.js";return e&&(o="https://recaptcha.net/recaptcha/api.js"),r.src=o+"?render="+t,new Promise(function(t,e){r.addEventListener("load",n.waitForScriptToLoad(function(){t(r)}),!1),r.onerror=function(t){e(new Error("Something went wrong while loading ReCaptcha. ("+t.toString()+")"))},document.head.appendChild(r)})},t.prototype.waitForScriptToLoad=function(t){var e=this;return function(){void 0===window.grecaptcha?setTimeout(function(){e.waitForScriptToLoad(t)},100):window.grecaptcha.ready(function(){t()})}},t.stateAttributeName="recaptcha-v3-state",t.successfulLoadingConsumers=[],t.errorLoadingRunnable=[],t}();(function(t){t[t["NOT_LOADED"]=0]="NOT_LOADED",t[t["LOADING"]=1]="LOADING",t[t["LOADED"]=2]="LOADED"})(r||(r={}));var u=s.load,l=function(t,e,n,r){return new(n||(n=Promise))(function(o,a){function i(t){try{s(r.next(t))}catch(t){a(t)}}function c(t){try{s(r["throw"](t))}catch(t){a(t)}}function s(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(i,c)}s((r=r.apply(t,e||[])).next())})},f=function(t,e){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(t){return function(e){return s([t,e])}}function s(a){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,r&&(o=2&a[0]?r["return"]:a[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(o=i.trys,!(o=o.length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(t,i)}catch(t){a=[6,t],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}};function d(t,e){var n=new h,r=!1,o=[];t.prototype.$recaptchaLoaded=function(){return new Promise(function(t,e){!0===r?t(!0):o.push(t)})},n.initializeReCaptcha(e).then(function(e){r=!0,t.prototype.$recaptcha=function(t){return e.execute(t)},o.forEach(function(t){return t(!0)})})}var h=function(){function t(){}return t.prototype.initializeReCaptcha=function(t){return l(this,void 0,void 0,function(){return f(this,function(e){switch(e.label){case 0:return[4,u(t.siteKey,t.loaderOptions)];case 1:return[2,e.sent()]}})})},t}(),p=n("bc3a"),v=n.n(p),m=n("a7fe"),g=n.n(m);i["default"].use(g.a,v.a),i["default"].use(d,{siteKey:"6Lc6u4YUAAAAADTNEoyuKUTI1FqjoMB82pStZJ-b",loaderOptions:{useRecaptchaNet:!1}});var b={data:function(){return{token:null,pageTitle:"отзывы",quoteFormatting:"— ",allReviews:[{id:"review5",author:"Edna",stars:5,content:"Some notes about dogs and cats and even more stuff\n                                  about cats and dogs and even their owners,\n                                  so it happens to be the longest review written on\n                                  this site, so here how it looks like."},{id:"review",stars:1,author:"Homer Simpson",content:"Some notes about dogs and cats"},{id:"review2",stars:2,author:"Bart",content:"Some notes about dogs and cats and such"},{id:"review3",stars:3,author:"Mr Flanders",content:"Some notes about dogs and cats and something else"},{id:"review4",stars:4,author:"Apu",content:"Some notes about dogs and cats and even more stuff about cats and dogs"}],agreement:!1,formReviewText:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",dialog:!1,email:void 0,form:!1,isLoading:!1,name:void 0,password:void 0,phone:void 0,rules:{email:function(t){return(t||"").match(/@/)||"Please enter a valid email"},length:function(t){return function(e){return(e||"").length>=t||"Invalid character length, required ".concat(t)}},nameLength:function(t){return function(e){return e&&e.length<=t||"Name must be less than ".concat(t," and longer than 1")}},reviewLength:function(t){return function(e){return e&&e.length<=t||"Review must be less than ".concat(t," and longer than 1")}},nameLengthXp:function(t){return t.length<=20||"Max 20 characters"},password:function(t){return(t||"").match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/)||"Password must contain an upper case letter, a numeric character, and a special character"},required:function(t){return!!t||"This field is required"}}}},methods:{onSubmit:function(){console.log("Submitting");var t="https://www.google.com/recaptcha/api/siteverify",e={secret:"6Lc6u4YUAAAAAL0iiqgzhIEeb9ZPUIINELPeMAgb",response:this.token};console.log("Data is ".concat(e)),v()({method:"post",url:t,data:{dataToSubmit:e}}).then(function(t){return console.log(t)}).catch(function(t){return console.log(t)})}},mounted:function(){this.$nextTick(function(){var t=this;console.log("Reviews page mounted"),this.$recaptcha("login").then(function(e){console.log(e),t.token=e})})}},w=b,y=(n("8f7b"),n("2877")),x=Object(y["a"])(w,o,a,!1,null,"bcf31b68",null);x.options.__file="Reviews.vue";e["default"]=x.exports},4917:function(t,e,n){n("214f")("match",1,function(t,e,n){return[function(n){"use strict";var r=t(this),o=void 0==n?void 0:n[e];return void 0!==o?o.call(n,r):new RegExp(n)[e](String(r))},n]})},"8f7b":function(t,e,n){"use strict";var r=n("aa21"),o=n.n(r);o.a},a7fe:function(t,e,n){"use strict";var r,o,a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(){function n(t,e){if(!n.installed){if(n.installed=!0,!e)return void console.error("You have to install axios");t.axios=e,Object.defineProperties(t.prototype,{axios:{get:function(){return e}},$http:{get:function(){return e}}})}}"object"==a(e)?t.exports=n:(r=[],o=function(){return n}.apply(e,r),void 0===o||(t.exports=o))}()},aa21:function(t,e,n){}}]);
//# sourceMappingURL=reviews.d38673f6.js.map