(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["consultform"],{cf91:function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("v-flex",{attrs:{"my-4":"","py-4":""}},[l("v-layout",{attrs:{"align-center":"","justify-center":"",column:""}},[l("v-flex",[l("h1",[e._v(e._s(e.formTitle))])])],1),l("v-layout",{attrs:{"align-center":"","justify-center":""}},[l("v-flex",{attrs:{xs12:"",sm6:"",md6:"",lg4:"",xl2:""}},[l("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[l("v-text-field",{attrs:{rules:e.nameRules,counter:10,label:"Имя",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),l("v-text-field",{attrs:{rules:e.emailRules,label:"Эл. почта",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),l("v-checkbox",{attrs:{rules:[function(e){return!!e||"You must agree to continue!"}],label:"Прислать рекламу?",required:""},model:{value:e.checkbox,callback:function(t){e.checkbox=t},expression:"checkbox"}}),l("v-btn",{attrs:{disabled:!e.valid},on:{click:e.submit}},[e._v("\n    Отправить\n  ")]),l("v-btn",{on:{click:e.clear}},[e._v("Очистить")])],1)],1)],1)],1)},n=[],i=(l("7f7f"),l("cadf"),l("551c"),l("097d"),l("bc3a")),r=l.n(i),s={data:function(){return{formTitle:"Оставить заявку",valid:!0,name:"",nameRules:[function(e){return!!e||"Name is required"},function(e){return e&&e.length<=10||"Name must be less than 10 characters"}],email:"",emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+/.test(e)||"E-mail must be valid"}],select:null,items:["Item 1","Item 2","Item 3","Item 4"],checkbox:!1}},methods:{submit:function(){this.$refs.form.validate()&&r.a.post("/api/submit",{name:this.name,email:this.email,select:this.select,checkbox:this.checkbox})},clear:function(){this.$refs.form.reset()}}},c=s,u=l("2877"),o=Object(u["a"])(c,a,n,!1,null,null,null);o.options.__file="ConsultForm.vue";t["default"]=o.exports}}]);
//# sourceMappingURL=consultform.3d8fca13.js.map