(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["reviews"],{"11e9":function(t,e,n){var r=n("52a7"),o=n("4630"),i=n("6821"),a=n("6a99"),s=n("69a8"),c=n("c69a"),u=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?u:function(t,e){if(t=i(t),e=a(e,!0),c)try{return u(t,e)}catch(t){}if(s(t,e))return o(!r.f.call(t,e),t[e])}},2621:function(t,e){e.f=Object.getOwnPropertySymbols},27:function(t,e){},"2e51":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"pa-0":""}},[n("v-layout",{attrs:{column:""}},[n("v-flex",{attrs:{"d-flex":"","align-center":""}},[n("h1",[t._v(t._s(t.pageTitle))])]),n("v-layout",{attrs:{"justify-center":""}},[n("v-carousel",{staticClass:"reviews",attrs:{light:"",height:"550px"}},t._l(t.allReviewsXP,function(e){return n("v-carousel-item",{key:e.id,staticClass:"slow"},[n("v-layout",{attrs:{"align-center":"","justify-center":"",column:"","fill-height":""}},[n("v-flex",{staticClass:"text-xs-center",attrs:{"d-flex":"","align-center":""}},[n("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[n("v-flex",{staticClass:"text-xs-left",attrs:{xs9:""}},t._l(e.stars,function(e){return n("v-icon",{key:e,attrs:{color:"orange"}},[t._v("grade")])}),1),n("v-flex",{staticClass:"text-xs-left",attrs:{xs9:""}},[n("i",[t._v(t._s(e.text))])]),n("v-flex",{staticClass:"author-name text-xs-right",attrs:{xs9:""}},[t._v("\r\n                      "+t._s(t.quoteFormatting)+t._s(e.author)+"\r\n                    ")])],1)],1)],1)],1)}),1)],1),n("v-layout",{attrs:{"justify-center":"",wrap:""}},[n("v-flex",{attrs:{xs12:"","mt-4":""}},[n("h3",[t._v("ОСТАВЬТЕ СВОЙ ОТЗЫВ")])]),n("v-flex",{attrs:{xs10:"",sm8:"",md6:""}},[n("v-form",{ref:"form",staticClass:"mt-4",model:{value:t.form,callback:function(e){t.form=e},expression:"form"}},[n("v-text-field",{staticStyle:{"min-height":"96px"},attrs:{rules:[t.rules.nameLength(10)],required:"",box:"",color:"blue-grey",counter:"10",label:"Ваше имя",type:"user-name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),n("v-flex",{attrs:{"mb-3":""}},t._l(5,function(e){return n("v-icon",{key:e,attrs:{id:"ratingStar"},on:{click:t.setRating}},[t._v("grade")])}),1),n("v-textarea",{attrs:{required:"",rules:[t.rules.reviewLength(200)],"auto-grow":"",box:"",counter:"200",color:"blue-grey",label:"Отзыв",rows:"5"},model:{value:t.formReviewText,callback:function(e){t.formReviewText=e},expression:"formReviewText"}})],1)],1),n("v-flex",{attrs:{xs12:"","ma-4":""}},[n("v-btn",{attrs:{color:"blue-grey lighten-4"},on:{click:function(e){t.$refs.form.reset()}}},[t._v("\r\n                ОЧИСТИТЬ\r\n              ")]),n("v-btn",{attrs:{disabled:!this.form,color:"blue-grey lighten-2"},on:{click:t.addReview}},[t._v("отправить")])],1)],1)],1)],1)},o=[],i=(n("ac4d"),n("8a81"),n("ac6a"),n("7f7f"),n("cadf"),n("551c"),n("097d"),n("2b0e")),a=0,s=1,c=2;function u(t){this.state=c,this.value=void 0,this.deferred=[];var e=this;try{t(function(t){e.resolve(t)},function(t){e.reject(t)})}catch(t){e.reject(t)}}u.reject=function(t){return new u(function(e,n){n(t)})},u.resolve=function(t){return new u(function(e,n){e(t)})},u.all=function(t){return new u(function(e,n){var r=0,o=[];function i(n){return function(i){o[n]=i,r+=1,r===t.length&&e(o)}}0===t.length&&e(o);for(var a=0;a<t.length;a+=1)u.resolve(t[a]).then(i(a),n)})},u.race=function(t){return new u(function(e,n){for(var r=0;r<t.length;r+=1)u.resolve(t[r]).then(e,n)})};var f=u.prototype;function l(t,e){t instanceof Promise?this.promise=t:this.promise=new Promise(t.bind(e)),this.context=e}f.resolve=function(t){var e=this;if(e.state===c){if(t===e)throw new TypeError("Promise settled with itself.");var n=!1;try{var r=t&&t["then"];if(null!==t&&"object"===typeof t&&"function"===typeof r)return void r.call(t,function(t){n||e.resolve(t),n=!0},function(t){n||e.reject(t),n=!0})}catch(t){return void(n||e.reject(t))}e.state=a,e.value=t,e.notify()}},f.reject=function(t){var e=this;if(e.state===c){if(t===e)throw new TypeError("Promise settled with itself.");e.state=s,e.value=t,e.notify()}},f.notify=function(){var t=this;S(function(){if(t.state!==c)while(t.deferred.length){var e=t.deferred.shift(),n=e[0],r=e[1],o=e[2],i=e[3];try{t.state===a?o("function"===typeof n?n.call(void 0,t.value):t.value):t.state===s&&("function"===typeof r?o(r.call(void 0,t.value)):i(t.value))}catch(t){i(t)}}})},f.then=function(t,e){var n=this;return new u(function(r,o){n.deferred.push([t,e,r,o]),n.notify()})},f.catch=function(t){return this.then(void 0,t)},"undefined"===typeof Promise&&(window.Promise=u),l.all=function(t,e){return new l(Promise.all(t),e)},l.resolve=function(t,e){return new l(Promise.resolve(t),e)},l.reject=function(t,e){return new l(Promise.reject(t),e)},l.race=function(t,e){return new l(Promise.race(t),e)};var h=l.prototype;h.bind=function(t){return this.context=t,this},h.then=function(t,e){return t&&t.bind&&this.context&&(t=t.bind(this.context)),e&&e.bind&&this.context&&(e=e.bind(this.context)),new l(this.promise.then(t,e),this.context)},h.catch=function(t){return t&&t.bind&&this.context&&(t=t.bind(this.context)),new l(this.promise.catch(t),this.context)},h.finally=function(t){return this.then(function(e){return t.call(this),e},function(e){return t.call(this),Promise.reject(e)})};var p,d={},v=d.hasOwnProperty,m=[],y=m.slice,g=!1,b="undefined"!==typeof window;function w(t){var e=t.config,n=t.nextTick;p=n,g=e.debug||!e.silent}function x(t){"undefined"!==typeof console&&g&&console.warn("[VueResource warn]: "+t)}function T(t){"undefined"!==typeof console&&console.error(t)}function S(t,e){return p(t,e)}function E(t){return t?t.replace(/^\s*|\s*$/g,""):""}function O(t,e){return t&&void 0===e?t.replace(/\s+$/,""):t&&e?t.replace(new RegExp("["+e+"]+$"),""):t}function j(t){return t?t.toLowerCase():""}function P(t){return t?t.toUpperCase():""}var R=Array.isArray;function L(t){return"string"===typeof t}function C(t){return"function"===typeof t}function k(t){return null!==t&&"object"===typeof t}function A(t){return k(t)&&Object.getPrototypeOf(t)==Object.prototype}function $(t){return"undefined"!==typeof Blob&&t instanceof Blob}function _(t){return"undefined"!==typeof FormData&&t instanceof FormData}function I(t,e,n){var r=l.resolve(t);return arguments.length<2?r:r.then(e,n)}function N(t,e,n){return n=n||{},C(n)&&(n=n.call(e)),q(t.bind({$vm:e,$options:n}),t,{$options:n})}function U(t,e){var n,r;if(R(t))for(n=0;n<t.length;n++)e.call(t[n],t[n],n);else if(k(t))for(r in t)v.call(t,r)&&e.call(t[r],t[r],r);return t}var M=Object.assign||F;function q(t){var e=y.call(arguments,1);return e.forEach(function(e){H(t,e,!0)}),t}function D(t){var e=y.call(arguments,1);return e.forEach(function(e){for(var n in e)void 0===t[n]&&(t[n]=e[n])}),t}function F(t){var e=y.call(arguments,1);return e.forEach(function(e){H(t,e)}),t}function H(t,e,n){for(var r in e)n&&(A(e[r])||R(e[r]))?(A(e[r])&&!A(t[r])&&(t[r]={}),R(e[r])&&!R(t[r])&&(t[r]=[]),H(t[r],e[r],n)):void 0!==e[r]&&(t[r]=e[r])}function J(t,e){var n=e(t);return L(t.root)&&!/^(https?:)?\//.test(n)&&(n=O(t.root,"/")+"/"+n),n}function G(t,e){var n=Object.keys(Q.options.params),r={},o=e(t);return U(t.params,function(t,e){-1===n.indexOf(e)&&(r[e]=t)}),r=Q.params(r),r&&(o+=(-1==o.indexOf("?")?"?":"&")+r),o}function B(t,e,n){var r=V(t),o=r.expand(e);return n&&n.push.apply(n,r.vars),o}function V(t){var e=["+","#",".","/",";","?","&"],n=[];return{vars:n,expand:function(r){return t.replace(/\{([^{}]+)\}|([^{}]+)/g,function(t,o,i){if(o){var a=null,s=[];if(-1!==e.indexOf(o.charAt(0))&&(a=o.charAt(0),o=o.substr(1)),o.split(/,/g).forEach(function(t){var e=/([^:*]*)(?::(\d+)|(\*))?/.exec(t);s.push.apply(s,X(r,a,e[1],e[2]||e[3])),n.push(e[1])}),a&&"+"!==a){var c=",";return"?"===a?c="&":"#"!==a&&(c=a),(0!==s.length?a:"")+s.join(c)}return s.join(",")}return K(i)})}}}function X(t,e,n,r){var o=t[n],i=[];if(W(o)&&""!==o)if("string"===typeof o||"number"===typeof o||"boolean"===typeof o)o=o.toString(),r&&"*"!==r&&(o=o.substring(0,parseInt(r,10))),i.push(z(e,o,Y(e)?n:null));else if("*"===r)Array.isArray(o)?o.filter(W).forEach(function(t){i.push(z(e,t,Y(e)?n:null))}):Object.keys(o).forEach(function(t){W(o[t])&&i.push(z(e,o[t],t))});else{var a=[];Array.isArray(o)?o.filter(W).forEach(function(t){a.push(z(e,t))}):Object.keys(o).forEach(function(t){W(o[t])&&(a.push(encodeURIComponent(t)),a.push(z(e,o[t].toString())))}),Y(e)?i.push(encodeURIComponent(n)+"="+a.join(",")):0!==a.length&&i.push(a.join(","))}else";"===e?i.push(encodeURIComponent(n)):""!==o||"&"!==e&&"?"!==e?""===o&&i.push(""):i.push(encodeURIComponent(n)+"=");return i}function W(t){return void 0!==t&&null!==t}function Y(t){return";"===t||"&"===t||"?"===t}function z(t,e,n){return e="+"===t||"#"===t?K(e):encodeURIComponent(e),n?encodeURIComponent(n)+"="+e:e}function K(t){return t.split(/(%[0-9A-Fa-f]{2})/g).map(function(t){return/%[0-9A-Fa-f]/.test(t)||(t=encodeURI(t)),t}).join("")}function Z(t){var e=[],n=B(t.url,t.params,e);return e.forEach(function(e){delete t.params[e]}),n}function Q(t,e){var n,r=this||{},o=t;return L(t)&&(o={url:t,params:e}),o=q({},Q.options,r.$options,o),Q.transforms.forEach(function(t){L(t)&&(t=Q.transform[t]),C(t)&&(n=tt(t,n,r.$vm))}),n(o)}function tt(t,e,n){return function(r){return t.call(n,r,e)}}function et(t,e,n){var r,o=R(e),i=A(e);U(e,function(e,a){r=k(e)||R(e),n&&(a=n+"["+(i||r?a:"")+"]"),!n&&o?t.add(e.name,e.value):r?et(t,e,a):t.add(a,e)})}function nt(t){return new l(function(e){var n=new XDomainRequest,r=function(r){var o=r.type,i=0;"load"===o?i=200:"error"===o&&(i=500),e(t.respondWith(n.responseText,{status:i}))};t.abort=function(){return n.abort()},n.open(t.method,t.getUrl()),t.timeout&&(n.timeout=t.timeout),n.onload=r,n.onabort=r,n.onerror=r,n.ontimeout=r,n.onprogress=function(){},n.send(t.getBody())})}Q.options={url:"",root:null,params:{}},Q.transform={template:Z,query:G,root:J},Q.transforms=["template","query","root"],Q.params=function(t){var e=[],n=encodeURIComponent;return e.add=function(t,e){C(e)&&(e=e()),null===e&&(e=""),this.push(n(t)+"="+n(e))},et(e,t),e.join("&").replace(/%20/g,"+")},Q.parse=function(t){var e=document.createElement("a");return document.documentMode&&(e.href=t,t=e.href),e.href=t,{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",port:e.port,host:e.host,hostname:e.hostname,pathname:"/"===e.pathname.charAt(0)?e.pathname:"/"+e.pathname,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):""}};var rt=b&&"withCredentials"in new XMLHttpRequest;function ot(t){if(b){var e=Q.parse(location.href),n=Q.parse(t.getUrl());n.protocol===e.protocol&&n.host===e.host||(t.crossOrigin=!0,t.emulateHTTP=!1,rt||(t.client=nt))}}function it(t){_(t.body)?t.headers.delete("Content-Type"):k(t.body)&&t.emulateJSON&&(t.body=Q.params(t.body),t.headers.set("Content-Type","application/x-www-form-urlencoded"))}function at(t){var e=t.headers.get("Content-Type")||"";return k(t.body)&&0===e.indexOf("application/json")&&(t.body=JSON.stringify(t.body)),function(t){return t.bodyText?I(t.text(),function(e){var n=t.headers.get("Content-Type")||"";if(0===n.indexOf("application/json")||st(e))try{t.body=JSON.parse(e)}catch(e){t.body=null}else t.body=e;return t}):t}}function st(t){var e=t.match(/^\s*(\[|\{)/),n={"[":/]\s*$/,"{":/}\s*$/};return e&&n[e[1]].test(t)}function ct(t){return new l(function(e){var n,r,o=t.jsonp||"callback",i=t.jsonpCallback||"_jsonp"+Math.random().toString(36).substr(2),a=null;n=function(n){var o=n.type,s=0;"load"===o&&null!==a?s=200:"error"===o&&(s=500),s&&window[i]&&(delete window[i],document.body.removeChild(r)),e(t.respondWith(a,{status:s}))},window[i]=function(t){a=JSON.stringify(t)},t.abort=function(){n({type:"abort"})},t.params[o]=i,t.timeout&&setTimeout(t.abort,t.timeout),r=document.createElement("script"),r.src=t.getUrl(),r.type="text/javascript",r.async=!0,r.onload=n,r.onerror=n,document.body.appendChild(r)})}function ut(t){"JSONP"==t.method&&(t.client=ct)}function ft(t){C(t.before)&&t.before.call(this,t)}function lt(t){t.emulateHTTP&&/^(PUT|PATCH|DELETE)$/i.test(t.method)&&(t.headers.set("X-HTTP-Method-Override",t.method),t.method="POST")}function ht(t){var e=M({},jt.headers.common,t.crossOrigin?{}:jt.headers.custom,jt.headers[j(t.method)]);U(e,function(e,n){t.headers.has(n)||t.headers.set(n,e)})}function pt(t){return new l(function(e){var n=new XMLHttpRequest,r=function(r){var o=t.respondWith("response"in n?n.response:n.responseText,{status:1223===n.status?204:n.status,statusText:1223===n.status?"No Content":E(n.statusText)});U(E(n.getAllResponseHeaders()).split("\n"),function(t){o.headers.append(t.slice(0,t.indexOf(":")),t.slice(t.indexOf(":")+1))}),e(o)};t.abort=function(){return n.abort()},n.open(t.method,t.getUrl(),!0),t.timeout&&(n.timeout=t.timeout),t.responseType&&"responseType"in n&&(n.responseType=t.responseType),(t.withCredentials||t.credentials)&&(n.withCredentials=!0),t.crossOrigin||t.headers.set("X-Requested-With","XMLHttpRequest"),C(t.progress)&&"GET"===t.method&&n.addEventListener("progress",t.progress),C(t.downloadProgress)&&n.addEventListener("progress",t.downloadProgress),C(t.progress)&&/^(POST|PUT)$/i.test(t.method)&&n.upload.addEventListener("progress",t.progress),C(t.uploadProgress)&&n.upload&&n.upload.addEventListener("progress",t.uploadProgress),t.headers.forEach(function(t,e){n.setRequestHeader(e,t)}),n.onload=r,n.onabort=r,n.onerror=r,n.ontimeout=r,n.send(t.getBody())})}function dt(t){var e=n(27);return new l(function(n){var r,o=t.getUrl(),i=t.getBody(),a=t.method,s={};t.headers.forEach(function(t,e){s[e]=t}),e(o,{body:i,method:a,headers:s}).then(r=function(e){var r=t.respondWith(e.body,{status:e.statusCode,statusText:E(e.statusMessage)});U(e.headers,function(t,e){r.headers.set(e,t)}),n(r)},function(t){return r(t.response)})})}function vt(t){var e=[mt],n=[];function r(r){while(e.length){var o=e.pop();if(C(o)){var i=void 0,a=void 0;if(i=o.call(t,r,function(t){return a=t})||a,k(i))return new l(function(e,r){n.forEach(function(e){i=I(i,function(n){return e.call(t,n)||n},r)}),I(i,e,r)},t);C(i)&&n.unshift(i)}else x("Invalid interceptor of type "+typeof o+", must be a function")}}return k(t)||(t=null),r.use=function(t){e.push(t)},r}function mt(t){var e=t.client||(b?pt:dt);return e(t)}var yt=function(t){var e=this;this.map={},U(t,function(t,n){return e.append(n,t)})};function gt(t,e){return Object.keys(t).reduce(function(t,n){return j(e)===j(n)?n:t},null)}function bt(t){if(/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return E(t)}yt.prototype.has=function(t){return null!==gt(this.map,t)},yt.prototype.get=function(t){var e=this.map[gt(this.map,t)];return e?e.join():null},yt.prototype.getAll=function(t){return this.map[gt(this.map,t)]||[]},yt.prototype.set=function(t,e){this.map[bt(gt(this.map,t)||t)]=[E(e)]},yt.prototype.append=function(t,e){var n=this.map[gt(this.map,t)];n?n.push(E(e)):this.set(t,e)},yt.prototype.delete=function(t){delete this.map[gt(this.map,t)]},yt.prototype.deleteAll=function(){this.map={}},yt.prototype.forEach=function(t,e){var n=this;U(this.map,function(r,o){U(r,function(r){return t.call(e,r,o,n)})})};var wt=function(t,e){var n=e.url,r=e.headers,o=e.status,i=e.statusText;this.url=n,this.ok=o>=200&&o<300,this.status=o||0,this.statusText=i||"",this.headers=new yt(r),this.body=t,L(t)?this.bodyText=t:$(t)&&(this.bodyBlob=t,Tt(t)&&(this.bodyText=xt(t)))};function xt(t){return new l(function(e){var n=new FileReader;n.readAsText(t),n.onload=function(){e(n.result)}})}function Tt(t){return 0===t.type.indexOf("text")||-1!==t.type.indexOf("json")}wt.prototype.blob=function(){return I(this.bodyBlob)},wt.prototype.text=function(){return I(this.bodyText)},wt.prototype.json=function(){return I(this.text(),function(t){return JSON.parse(t)})},Object.defineProperty(wt.prototype,"data",{get:function(){return this.body},set:function(t){this.body=t}});var St=function(t){this.body=null,this.params={},M(this,t,{method:P(t.method||"GET")}),this.headers instanceof yt||(this.headers=new yt(this.headers))};St.prototype.getUrl=function(){return Q(this)},St.prototype.getBody=function(){return this.body},St.prototype.respondWith=function(t,e){return new wt(t,M(e||{},{url:this.getUrl()}))};var Et={Accept:"application/json, text/plain, */*"},Ot={"Content-Type":"application/json;charset=utf-8"};function jt(t){var e=this||{},n=vt(e.$vm);return D(t||{},e.$options,jt.options),jt.interceptors.forEach(function(t){L(t)&&(t=jt.interceptor[t]),C(t)&&n.use(t)}),n(new St(t)).then(function(t){return t.ok?t:l.reject(t)},function(t){return t instanceof Error&&T(t),l.reject(t)})}function Pt(t,e,n,r){var o=this||{},i={};return n=M({},Pt.actions,n),U(n,function(n,a){n=q({url:t,params:M({},e)},r,n),i[a]=function(){return(o.$http||jt)(Rt(n,arguments))}}),i}function Rt(t,e){var n,r=M({},t),o={};switch(e.length){case 2:o=e[0],n=e[1];break;case 1:/^(POST|PUT|PATCH)$/i.test(r.method)?n=e[0]:o=e[0];break;case 0:break;default:throw"Expected up to 2 arguments [params, body], got "+e.length+" arguments"}return r.body=n,r.params=M({},r.params,o),r}function Lt(t){Lt.installed||(w(t),t.url=Q,t.http=jt,t.resource=Pt,t.Promise=l,Object.defineProperties(t.prototype,{$url:{get:function(){return N(t.url,this,this.$options.url)}},$http:{get:function(){return N(t.http,this,this.$options.http)}},$resource:{get:function(){return t.resource.bind(this)}},$promise:{get:function(){var e=this;return function(n){return new t.Promise(n,e)}}}}))}jt.options={},jt.headers={put:Ot,post:Ot,patch:Ot,delete:Ot,common:Et,custom:{}},jt.interceptor={before:ft,method:lt,jsonp:ut,json:at,form:it,header:ht,cors:ot},jt.interceptors=["before","method","jsonp","json","form","header","cors"],["get","delete","head","jsonp"].forEach(function(t){jt[t]=function(e,n){return this(M(n||{},{url:e,method:t}))}}),["post","put","patch"].forEach(function(t){jt[t]=function(e,n,r){return this(M(r||{},{url:e,method:t,body:n}))}}),Pt.actions={get:{method:"GET"},save:{method:"POST"},query:{method:"GET"},update:{method:"PUT"},remove:{method:"DELETE"},delete:{method:"DELETE"}},"undefined"!==typeof window&&window.Vue&&window.Vue.use(Lt);var Ct=Lt,kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"g-recaptcha",attrs:{id:"g-recaptcha","data-sitekey":t.sitekey}})},At=[],$t={data:function(){return{sitekey:"6Lc6u4YUAAAAADTNEoyuKUTI1FqjoMB82pStZJ-b",widgetId:0}},methods:{execute:function(){window.grecaptcha.execute(this.widgetId)},reset:function(){window.grecaptcha.reset(this.widgetId)},render:function(){var t=this;window.grecaptcha&&(this.widgetId=window.grecaptcha.render("g-recaptcha",{sitekey:this.sitekey,size:"invisible",callback:function(e){t.$emit("verify",e),t.reset()}}))}},mounted:function(){this.render()}},_t=$t,It=n("2877"),Nt=Object(It["a"])(_t,kt,At,!1,null,null,null);Nt.options.__file="Recaptcha.vue";var Ut=Nt.exports,Mt={recaptchaSecret:"6Lc6u4YUAAAAAL0iiqgzhIEeb9ZPUIINELPeMAgb"},qt=n("deef");i["default"].use(Ct);var Dt={data:function(){return{token:null,pageTitle:"отзывы",quoteFormatting:"— ",allReviewsXP:[],agreement:!1,formReviewText:"Напишите нам что-нибудь хорошее...",starsRating:void 0,userScore:void 0,dialog:!1,email:void 0,form:!1,isLoading:!1,name:void 0,password:void 0,phone:void 0,rules:{nameLength:function(t){return function(e){return e&&e.length<=t||"Name must be less than ".concat(t," and longer than 1")}},reviewLength:function(t){return function(e){return e&&e.length<=t||"Review must be less than ".concat(t," and longer than 1")}},required:function(t){return!!t||"This field is required"}}}},components:{Recaptcha:Ut},methods:{addReview:function(){console.log("Adding review.."),this.form?(console.log("Form is: ".concat(this.form,", adding to database, stars are ").concat(this.starsRating)),this.starsRating||(this.starsRating=1),qt["a"].collection("reviews").add({name:this.name,starsRating:this.starsRating,review:this.formReviewText,approved:!1}).then(function(t){console.log("Document written with ID: ",t.id)}).catch(function(t){console.error("Error adding document: ",t)})):console.log("Check your form it is: ".concat(this.form))},setRating:function(t){var e=t.target,n=e.parentNode,r=Array.prototype.indexOf.call(n.children,e)+1;console.log("Setting rating to ".concat(r)),this.userStarRating=r;var o=n.children,i=!0,a=!1,s=void 0;try{for(var c,u=o[Symbol.iterator]();!(i=(c=u.next()).done);i=!0){var f=c.value;f.style="color: gray;"}}catch(t){a=!0,s=t}finally{try{i||null==u.return||u.return()}finally{if(a)throw s}}this.starsRating=r;while(r)o[r-1].style="color: orange;",r--},getScore:function(t){var e=this;this.$http.post("https://cors-anywhere.herokuapp.com/https://www.google.com/recaptcha/api/siteverify?secret=".concat(Mt.recaptchaSecret,"&response=").concat(t)).then(function(t){e.userScore=t.body.score,console.log("Score is: ".concat(t.body.score))}).then(function(){e.userScore>=.3?(console.log("Adding to database"),e.addReview()):console.log("Your score is too low: ".concat(e.userScore,", try again"))})},check:function(){console.log("Checking")},getReviews:function(){var t=this;console.log("Getting reviews.."),qt["a"].collection("reviews").get().then(function(t){var e=[];return t.forEach(function(t){console.log(t.id," => ",t.data().name);var n={author:t.data().name,text:t.data().review,stars:t.data().starsRating,id:t.id};e.push(n)}),e}).then(function(e){t.allReviewsXP=e,console.log(t.allReviewsXP)}).catch(function(t){console.log("Error getting documents: ",t)})}},mounted:function(){this.$nextTick(function(){console.log("Reviews page mounted"),this.getReviews()})}},Ft=Dt,Ht=(n("a7a2"),Object(It["a"])(Ft,r,o,!1,null,"662495b2",null));Ht.options.__file="Reviews.vue";e["default"]=Ht.exports},"37c8":function(t,e,n){e.f=n("2b4c")},"3a72":function(t,e,n){var r=n("7726"),o=n("8378"),i=n("2d00"),a=n("37c8"),s=n("86cc").f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:a.f(t)})}},"52a7":function(t,e){e.f={}.propertyIsEnumerable},"67ab":function(t,e,n){var r=n("ca5a")("meta"),o=n("d3f4"),i=n("69a8"),a=n("86cc").f,s=0,c=Object.isExtensible||function(){return!0},u=!n("79e5")(function(){return c(Object.preventExtensions({}))}),f=function(t){a(t,r,{value:{i:"O"+ ++s,w:{}}})},l=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!c(t))return"F";if(!e)return"E";f(t)}return t[r].i},h=function(t,e){if(!i(t,r)){if(!c(t))return!0;if(!e)return!1;f(t)}return t[r].w},p=function(t){return u&&d.NEED&&c(t)&&!i(t,r)&&f(t),t},d=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:h,onFreeze:p}},"7bbc":function(t,e,n){var r=n("6821"),o=n("9093").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return o(t)}catch(t){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?s(t):o(r(t))}},"8a81":function(t,e,n){"use strict";var r=n("7726"),o=n("69a8"),i=n("9e1e"),a=n("5ca1"),s=n("2aba"),c=n("67ab").KEY,u=n("79e5"),f=n("5537"),l=n("7f20"),h=n("ca5a"),p=n("2b4c"),d=n("37c8"),v=n("3a72"),m=n("d4c0"),y=n("1169"),g=n("cb7c"),b=n("d3f4"),w=n("6821"),x=n("6a99"),T=n("4630"),S=n("2aeb"),E=n("7bbc"),O=n("11e9"),j=n("86cc"),P=n("0d58"),R=O.f,L=j.f,C=E.f,k=r.Symbol,A=r.JSON,$=A&&A.stringify,_="prototype",I=p("_hidden"),N=p("toPrimitive"),U={}.propertyIsEnumerable,M=f("symbol-registry"),q=f("symbols"),D=f("op-symbols"),F=Object[_],H="function"==typeof k,J=r.QObject,G=!J||!J[_]||!J[_].findChild,B=i&&u(function(){return 7!=S(L({},"a",{get:function(){return L(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=R(F,e);r&&delete F[e],L(t,e,n),r&&t!==F&&L(F,e,r)}:L,V=function(t){var e=q[t]=S(k[_]);return e._k=t,e},X=H&&"symbol"==typeof k.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof k},W=function(t,e,n){return t===F&&W(D,e,n),g(t),e=x(e,!0),g(n),o(q,e)?(n.enumerable?(o(t,I)&&t[I][e]&&(t[I][e]=!1),n=S(n,{enumerable:T(0,!1)})):(o(t,I)||L(t,I,T(1,{})),t[I][e]=!0),B(t,e,n)):L(t,e,n)},Y=function(t,e){g(t);var n,r=m(e=w(e)),o=0,i=r.length;while(i>o)W(t,n=r[o++],e[n]);return t},z=function(t,e){return void 0===e?S(t):Y(S(t),e)},K=function(t){var e=U.call(this,t=x(t,!0));return!(this===F&&o(q,t)&&!o(D,t))&&(!(e||!o(this,t)||!o(q,t)||o(this,I)&&this[I][t])||e)},Z=function(t,e){if(t=w(t),e=x(e,!0),t!==F||!o(q,e)||o(D,e)){var n=R(t,e);return!n||!o(q,e)||o(t,I)&&t[I][e]||(n.enumerable=!0),n}},Q=function(t){var e,n=C(w(t)),r=[],i=0;while(n.length>i)o(q,e=n[i++])||e==I||e==c||r.push(e);return r},tt=function(t){var e,n=t===F,r=C(n?D:w(t)),i=[],a=0;while(r.length>a)!o(q,e=r[a++])||n&&!o(F,e)||i.push(q[e]);return i};H||(k=function(){if(this instanceof k)throw TypeError("Symbol is not a constructor!");var t=h(arguments.length>0?arguments[0]:void 0),e=function(n){this===F&&e.call(D,n),o(this,I)&&o(this[I],t)&&(this[I][t]=!1),B(this,t,T(1,n))};return i&&G&&B(F,t,{configurable:!0,set:e}),V(t)},s(k[_],"toString",function(){return this._k}),O.f=Z,j.f=W,n("9093").f=E.f=Q,n("52a7").f=K,n("2621").f=tt,i&&!n("2d00")&&s(F,"propertyIsEnumerable",K,!0),d.f=function(t){return V(p(t))}),a(a.G+a.W+a.F*!H,{Symbol:k});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)p(et[nt++]);for(var rt=P(p.store),ot=0;rt.length>ot;)v(rt[ot++]);a(a.S+a.F*!H,"Symbol",{for:function(t){return o(M,t+="")?M[t]:M[t]=k(t)},keyFor:function(t){if(!X(t))throw TypeError(t+" is not a symbol!");for(var e in M)if(M[e]===t)return e},useSetter:function(){G=!0},useSimple:function(){G=!1}}),a(a.S+a.F*!H,"Object",{create:z,defineProperty:W,defineProperties:Y,getOwnPropertyDescriptor:Z,getOwnPropertyNames:Q,getOwnPropertySymbols:tt}),A&&a(a.S+a.F*(!H||u(function(){var t=k();return"[null]"!=$([t])||"{}"!=$({a:t})||"{}"!=$(Object(t))})),"JSON",{stringify:function(t){var e,n,r=[t],o=1;while(arguments.length>o)r.push(arguments[o++]);if(n=e=r[1],(b(e)||void 0!==t)&&!X(t))return y(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!X(e))return e}),r[1]=e,$.apply(A,r)}}),k[_][N]||n("32e9")(k[_],N,k[_].valueOf),l(k,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},9093:function(t,e,n){var r=n("ce10"),o=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},a7a2:function(t,e,n){"use strict";var r=n("cf84"),o=n.n(r);o.a},ac4d:function(t,e,n){n("3a72")("asyncIterator")},ac6a:function(t,e,n){for(var r=n("cadf"),o=n("0d58"),i=n("2aba"),a=n("7726"),s=n("32e9"),c=n("84f2"),u=n("2b4c"),f=u("iterator"),l=u("toStringTag"),h=c.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},d=o(p),v=0;v<d.length;v++){var m,y=d[v],g=p[y],b=a[y],w=b&&b.prototype;if(w&&(w[f]||s(w,f,h),w[l]||s(w,l,y),c[y]=h,g))for(m in r)w[m]||i(w,m,r[m],!0)}},cf84:function(t,e,n){},d4c0:function(t,e,n){var r=n("0d58"),o=n("2621"),i=n("52a7");t.exports=function(t){var e=r(t),n=o.f;if(n){var a,s=n(t),c=i.f,u=0;while(s.length>u)c.call(t,a=s[u++])&&e.push(a)}return e}}}]);
//# sourceMappingURL=reviews.36ba692c.js.map