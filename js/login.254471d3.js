(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{a55b:function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"text-xs-right"},[s("v-btn",{attrs:{fab:"",flat:"",large:"",color:"grey darken-1",to:"/register"}},[s("v-icon",[e._v("vpn_key")])],1)],1),s("v-flex",{attrs:{xs12:""}},[s("h1",[e._v("Логін")])])],1)],1),s("v-flex",{attrs:{"d-flex":""}},[s("v-form",{ref:"loginForm",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[s("v-container",[s("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[s("v-flex",{attrs:{xs10:"",sm3:""}},[s("v-text-field",{attrs:{rules:e.emailRules,label:"Електронна пошта",autocomplete:"email",color:"dark-grey",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),s("v-flex",{attrs:{xs10:"",sm3:""}},[s("v-text-field",{attrs:{rules:e.passwordRules,type:"password",label:"Пароль",autocomplete:"off",required:"",color:"dark-grey"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),s("v-flex",{attrs:{xs12:"",sm3:"","my-4":""}},[s("v-btn",{on:{click:e.login}},[s("v-icon",[e._v("done")]),e._v("\r\n                  логін\r\n              ")],1),s("v-btn",{on:{click:e.clear}},[e._v("\r\n                очистити\r\n              ")])],1)],1)],1)],1)],1)],1)},n=[],r=s("c93e"),a=(s("cadf"),s("551c"),s("097d"),s("59ca")),i=s.n(a),l=(s("ea7b"),s("2f62")),u={data:function(){return{valid:!1,logginIn:!1,errorMessage:null,email:"",emailRules:[function(e){return!!e||"Потрібна електронна пошта"},function(e){return/.+@.+/.test(e)||"Електронна пошта повинна бути дійсною"}],password:"",passwordRules:[function(e){return!!e||"Потрібен пароль"},function(e){return e&&e.length<=12||"Пароль повинен містити менше 12 символів"}]}},computed:Object(r["a"])({},Object(l["b"])(["getUserState"])),mounted:function(){this.$nextTick(function(){console.log("Login page mounted."),this.getUserState.isAuthenticated&&(console.log("User is authenticated, loading editor"),this.$router.push("cms"))})},methods:{setLoginLoadingState:function(){return this.logginIn=!this.logginIn,!0},login:function(){var e=this;if(this.errorMessage=void 0,this.email&&this.password)return this.setLoginLoadingState(),i.a.auth().signInWithEmailAndPassword(this.email,this.password).then(function(t){console.log("You are logged in as"),console.log(t.user.email),console.log(t.user.uid);var s={isAuthenticated:!0,uid:t.user.uid};e.$store.commit("setUser",s),e.$router.push("/cms")},function(t){console.log(t.message),e.errorMessage=t.message,e.setLoginLoadingState()}),!0},clear:function(){this.$refs.loginForm.reset()}}},c=u,d=s("2877"),g=Object(d["a"])(c,o,n,!1,null,null,null);g.options.__file="Login.vue";t["default"]=g.exports}}]);
//# sourceMappingURL=login.254471d3.js.map