(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["cms"],{"0768":function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return this.getUserState.isAuthenticated?i("v-container",{attrs:{"fill-height":"",fluid:"","pa-0":""}},[i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[i("h1",{staticClass:"py-2"},[e._v(e._s(e.header))]),i("v-expansion-panel",[i("v-expansion-panel-content",[i("div",{staticClass:"title",attrs:{slot:"header"},slot:"header"},[e._v("\r\n              Ціни\r\n            ")]),i("hr",{staticClass:"divider"}),i("v-card",[i("v-card-text",{staticClass:"blue-grey--text"},[e._v("Поточні значення:")]),e._l(e.getPrices,function(t){return i("v-flex",{key:t.id,attrs:{xs12:""}},[i("v-layout",{attrs:{wrap:""}},[i("v-flex",{staticClass:"text-xs-left",attrs:{xs12:"","pl-2":""}},[i("v-layout",[i("v-flex",{staticClass:"py-4 pl-2",attrs:{xs6:"","d-flex":"","align-center":""}},[i("h4",{staticClass:"orange--text subheading"},[e._v(e._s(t.header))])]),i("v-flex",{staticClass:"text-xs-right py-4 pr-1",attrs:{xs6:""}},[i("v-btn",{attrs:{icon:"",small:""},on:{click:function(i){e.handleEditServiceItemName(t.id,t.header)}}},[i("v-icon",{attrs:{color:"green"}},[e._v("create")])],1),i("v-btn",{attrs:{icon:"",small:""},on:{click:function(i){e.moveItem(t.id,"up")}}},[i("v-icon",{attrs:{color:"blue darken-1"}},[e._v("arrow_upward")])],1),i("v-btn",{attrs:{icon:"",small:""},on:{click:function(i){e.moveItem(t.id,"down")}}},[i("v-icon",{attrs:{color:"blue darken-1"}},[e._v("arrow_downward")])],1),i("v-btn",{attrs:{icon:"",small:""},on:{click:function(i){e.handleDeleteServiceItem(t.id,t.header)}}},[i("v-icon",{attrs:{color:"red"}},[e._v("delete")])],1)],1)],1)],1),e._l(t.services,function(r,o){return i("v-flex",{key:o,attrs:{xs12:""}},[i("v-layout",{attrs:{row:"","align-center":""}},[i("v-flex",{staticClass:"text-xs-right"},[i("v-btn",{attrs:{icon:"",small:"",fab:""},on:{click:function(i){e.editPrice(r,o,t.id,t.header)}}},[i("v-icon",{attrs:{small:"",color:"green"}},[e._v("create")])],1)],1),i("v-flex",{staticClass:"body-2",attrs:{xs9:""}},[e._v("\r\n                            "+e._s(r)+"\r\n                          ")]),i("v-flex",{staticClass:"text-xs-right",attrs:{xs2:""}},[i("v-btn",{attrs:{icon:"",small:"",fab:""},on:{click:function(i){e.handlePriceDelete(t.id,r)}}},[i("v-icon",{attrs:{small:"",color:"red"}},[e._v("delete")])],1)],1)],1)],1)}),i("v-flex",{staticClass:"text-xs-right",attrs:{xs12:""}},[i("v-btn",{attrs:{small:"",color:"blue-grey lighten-4"},on:{click:function(i){e.handleAddServiceItem(t.id,t.header)}}},[i("v-icon",{attrs:{medium:"",color:"orange"}},[e._v("add")]),e._v("\r\n                            Додаті\r\n                        ")],1)],1)],2)],1)}),i("v-layout",[i("v-flex",{attrs:{"align-center":"","d-flex":"","py-4":""}},[i("v-btn",{attrs:{color:"blue-grey lighten-4"},on:{click:e.handleAddCategory}},[e._v("додати категорію")])],1)],1)],2)],1)],1),i("v-expansion-panel",[i("v-expansion-panel-content",[i("div",{staticClass:"title",attrs:{slot:"header"},slot:"header"},[e._v("\r\n              Коментарі\r\n            ")]),i("v-card",[i("v-card-text",{staticClass:"subheading grey--text"},[e._v("Видаляти або затверджувати коментарі:")]),e._l(e.getReviews,function(t){return i("v-flex",{key:t.id,attrs:{"pa-3":""}},[i("v-layout",{attrs:{wrap:""}},[i("v-flex",{attrs:{xs6:"","py-1":""}},[e._v("\r\n                      Ім'я: "+e._s(t.name)+"\r\n                      "),t.approved?i("v-btn",{attrs:{small:"",icon:"",fab:""},on:{click:function(i){e.disapproveComment(t.id)}}},[i("v-icon",{attrs:{small:"",color:"orange"}},[e._v("verified_user")])],1):e._e()],1),i("v-flex",{staticClass:"text-xs-right",attrs:{xs6:""}},e._l(t.starsRating,function(t,r){return i("v-icon",{key:r,attrs:{small:"",color:"orange"}},[e._v("grade")])}),1),i("v-flex",{attrs:{xs12:""}},[e._v("\r\n                      Коментар: "+e._s(t.review)+"\r\n                    ")]),i("v-flex",{staticClass:"text-xs-right",attrs:{xs12:""}},[t.approved?e._e():i("v-btn",{attrs:{small:"",icon:"",fab:""},on:{click:function(i){e.approveComment(t.id)}}},[i("v-icon",{attrs:{medium:"",color:"green"}},[e._v("verified_user")])],1),i("v-btn",{attrs:{small:"",icon:"",fab:""},on:{click:function(i){e.handleDeleteComment(t.id)}}},[i("v-icon",{attrs:{medium:"",color:"red"}},[e._v("delete")])],1)],1),i("v-flex",{attrs:{xs12:""}},[i("hr",{staticClass:"divider"})])],1)],1)})],2)],1)],1)],1),i("v-flex",{staticClass:"text-xs-center"},[i("v-dialog",{attrs:{width:"500"},model:{value:e.editPriceDialog,callback:function(t){e.editPriceDialog=t},expression:"editPriceDialog"}},[i("v-card",[i("v-card-title",{staticClass:"blue darken-1"},[i("h4",{staticClass:"white--text"},[e._v(e._s(e.buffer.docHeader))])]),i("v-card-text",[i("v-form",{ref:"priceEditingForm",model:{value:e.priceEditingFormValid,callback:function(t){e.priceEditingFormValid=t},expression:"priceEditingFormValid"}},[i("v-text-field",{attrs:{rules:e.priceStringRules,type:"text",autocomplete:"off",required:"","append-icon":"create",label:e.buffer.valueForLabel},model:{value:e.buffer.priceValue,callback:function(t){e.$set(e.buffer,"priceValue",t)},expression:"buffer.priceValue"}})],1)],1),i("v-divider"),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue",outline:"",flat:""},on:{click:function(t){e.editPriceDialog=!1}}},[e._v("\r\n                скасувати\r\n              ")]),i("v-btn",{attrs:{color:"orange",outline:"",flat:""},on:{click:e.saveEdit}},[e._v("\r\n                зберегти\r\n              ")])],1)],1)],1)],1),i("v-flex",{staticClass:"text-xs-center"},[i("v-dialog",{attrs:{persistent:"",lazy:"",width:"500"},model:{value:e.deleteWarningDialog,callback:function(t){e.deleteWarningDialog=t},expression:"deleteWarningDialog"}},[i("v-card",[i("v-card-title",{staticClass:"red accent-4"},[i("h3",{staticClass:"white--text"},[e._v("Увага")])]),i("v-card-text",{staticClass:"text-xs-left"},[e._v("\r\n              Дійсно видалити цю позицію? "),i("br"),i("span",{staticClass:"orange--text"},[e._v(e._s(e.buffer.priceValue))])]),i("v-divider"),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"red",flat:"",outline:""},on:{click:e.handlePriceDelete}},[e._v("\r\n                видалити\r\n              ")]),i("v-btn",{attrs:{color:"primary",flat:"",outline:""},on:{click:e.toggleSafeCheck}},[e._v("\r\n                скасувати\r\n              ")])],1)],1)],1)],1),i("v-flex",{staticClass:"text-xs-center"},[i("v-dialog",{attrs:{width:"500"},model:{value:e.addCategoryDialog,callback:function(t){e.addCategoryDialog=t},expression:"addCategoryDialog"}},[i("v-card",[i("v-card-title",{staticClass:"blue darken-1"},[i("h3",{staticClass:"white--text"},[e._v("Додати категорію")])]),i("v-card-text",[i("v-form",{ref:"addCategoryDialogForm",model:{value:e.addCategoryFormValid,callback:function(t){e.addCategoryFormValid=t},expression:"addCategoryFormValid"}},[i("v-text-field",{attrs:{rules:e.headerRules,type:"text",autocomplete:"off",required:"","append-icon":"create",label:"Назва"},model:{value:e.buffer.header,callback:function(t){e.$set(e.buffer,"header",t)},expression:"buffer.header"}})],1)],1),i("v-divider"),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",outline:"",flat:""},on:{click:e.addCategoryToDb}},[e._v("\r\n                додати\r\n              ")]),i("v-btn",{attrs:{color:"grey",outline:"",flat:""},on:{click:function(t){e.addCategoryDialog=!1}}},[e._v("\r\n                скасувати\r\n              ")])],1)],1)],1)],1),i("v-flex",{staticClass:"text-xs-center"},[i("v-dialog",{attrs:{width:"500"},model:{value:e.addServiceItemDialog,callback:function(t){e.addServiceItemDialog=t},expression:"addServiceItemDialog"}},[i("v-card",[i("v-card-title",{staticClass:"blue darken-1"},[i("h4",{staticClass:"white--text"},[e._v("Додати позицію в прайс")])]),i("v-card-text",[i("v-form",{ref:"addServiceItemDialogForm",model:{value:e.addServiceItemFormValid,callback:function(t){e.addServiceItemFormValid=t},expression:"addServiceItemFormValid"}},[i("v-text-field",{attrs:{rules:e.serviceItemRules,type:"text",autocomplete:"off",required:"","append-icon":"create",label:"Назва позіції"},model:{value:e.buffer.priceValue,callback:function(t){e.$set(e.buffer,"priceValue",t)},expression:"buffer.priceValue"}})],1)],1),i("v-divider"),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",outline:"",flat:""},on:{click:function(t){e.addServiceItemDialog=!1}}},[e._v("\r\n                скасувати\r\n              ")]),i("v-btn",{attrs:{color:"orange",outline:"",flat:""},on:{click:e.addServiceItemToDb}},[e._v("\r\n                додаті\r\n              ")])],1)],1)],1)],1),i("v-flex",{staticClass:"text-xs-center"},[i("v-dialog",{attrs:{width:"500"},model:{value:e.deleteServiceItemDialog,callback:function(t){e.deleteServiceItemDialog=t},expression:"deleteServiceItemDialog"}},[i("v-card",[i("v-card-title",{staticClass:"red accent-4"},[i("h3",{staticClass:"white--text"},[e._v("Видалити категорію")])]),i("v-card-text",{staticClass:"text-xs-left"},[e._v("\r\n              Дійсно видалити цю позицію? "),i("br"),i("span",{staticClass:"orange--text"},[e._v(e._s(this.buffer.docHeader))])]),i("v-divider"),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"red",outline:"",flat:""},on:{click:e.handleDeleteServiceItem}},[e._v("\r\n                видалити\r\n              ")]),i("v-btn",{attrs:{color:"primary",outline:"",flat:""},on:{click:function(t){e.deleteServiceItemDialog=!1,e.safeToDelete=!1}}},[e._v("\r\n                скасувати\r\n              ")])],1)],1)],1)],1),i("v-flex",{staticClass:"text-xs-center"},[i("v-dialog",{attrs:{width:"500"},model:{value:e.deleteCommentDialog,callback:function(t){e.deleteCommentDialog=t},expression:"deleteCommentDialog"}},[i("v-card",[i("v-card-title",{staticClass:"red accent-4"},[i("h3",{staticClass:"white--text"},[e._v("Видалити коментар")])]),i("v-card-text",{staticClass:"text-xs-left"},[e._v("\r\n              Дійсно видаліть цей коментар? "),i("br")]),i("v-divider"),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"red",outline:"",flat:""},on:{click:e.handleDeleteComment}},[e._v("\r\n                видалити\r\n              ")]),i("v-btn",{attrs:{color:"primary",outline:"",flat:""},on:{click:function(t){e.deleteCommentDialog=!1,e.safeToDelete=!1}}},[e._v("\r\n                скасувати\r\n              ")])],1)],1)],1)],1),i("v-flex",{staticClass:"text-xs-center"},[i("v-dialog",{attrs:{width:"500"},model:{value:e.genericDialog,callback:function(t){e.genericDialog=t},expression:"genericDialog"}},[i("v-card",[i("v-card-title",{staticClass:"blue darken-1"},[i("h4",{staticClass:"white--text"},[e._v(e._s(e.genericDialogData.title))])]),i("v-card-text",[i("v-form",{ref:"generic-edit-input",model:{value:e.priceEditingFormValid,callback:function(t){e.priceEditingFormValid=t},expression:"priceEditingFormValid"}},[i("v-text-field",{attrs:{rules:e.priceStringRules,type:"text",autocomplete:"off",required:"","append-icon":"create",label:e.genericDialogData.inputFieldLabel},model:{value:e.genericDialogData.inputFieldValue,callback:function(t){e.$set(e.genericDialogData,"inputFieldValue",t)},expression:"genericDialogData.inputFieldValue"}})],1)],1),i("v-divider"),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue",outline:"",flat:""},on:{click:function(t){e.genericDialog=!1}}},[e._v("\r\n                скасувати\r\n              ")]),i("v-btn",{attrs:{loading:e.buttonLoadingState,disabled:e.buttonLoadingState,color:"orange",outline:"",flat:""},on:{click:e.editServiceItemName}},[e._v("\r\n                зберегти\r\n              ")])],1)],1)],1)],1)],1)],1):e._e()},o=[],n=(i("7f7f"),i("55dd"),i("ac4d"),i("8a81"),i("ac6a"),i("7514"),i("c93e")),a=(i("cadf"),i("551c"),i("097d"),i("2f62")),c=i("59ca"),l=i.n(c),s=i("deef"),d={data:function(){return{header:"Редагувати",buttonLoadingState:!1,genericDialog:!1,genericDialogData:{type:"",title:"",inputFieldValue:"",id:null,inputFieldLabel:""},buffer:{docHeader:"",priceValue:"",valueForLabel:"",header:"",index:null,docID:null,currentServiceItemOrder:null},editingChoices:[{choiceName:"Ціни"},{choiceName:"Коментарі"}],priceEditingFormValid:!1,priceStringRules:[function(e){return!!e||"Необхідно ввести назву та ціну"},function(e){return e&&e.length<=70||"Позиція повинна бути менше 70 символів"}],headerRules:[function(e){return!!e||"Необхідно ввести назву"},function(e){return e&&e.length<=30||"Назва повинна бути менше 30 символів"}],serviceItemRules:[function(e){return!!e||"Необхідно ввести назву"},function(e){return e&&e.length<=70||"Назва повинна бути менше 70 символів"}],editPriceDialog:!1,addServiceItemDialog:!1,addServiceItemFormValid:!1,deleteServiceItemFormValid:!1,deleteServiceItemDialog:!1,deleteWarningDialog:!1,deleteCommentDialog:!1,addCategoryDialog:!1,addCategoryFormValid:!1,safeToDelete:!1,serviceItemsRef:s["a"].collection("services"),reviewsItemsRef:s["a"].collection("reviews"),serviceItemsFromDB:[],serviceItemsDisplayOrder:[],reviewsItemsFromDB:[]}},mounted:function(){this.$nextTick(function(){console.log("Kind of cms mounted."),this.getUserState.isAuthenticated?(console.log("Loading prices"),this.loadPrices(),this.loadReviews()):(console.log("Login first or GTFO"),this.$router.push("login"))})},computed:Object(n["a"])({},Object(a["b"])(["getPrices","getReviews","getUserState","getItemsWhichOrderHasChanged"])),methods:{changeServiceItemOrder:function(){console.log("Changing order")},clearBuffer:function(){this.buffer={docHeader:"",priceValue:"",valueForLabel:"",header:"",index:null,docID:null,currentServiceItemOrder:null}},approveComment:function(e){console.log("Setting 'approved' to comment with id: ".concat(e)),s["a"].collection("reviews").doc(e).update({approved:!0}),this.$store.commit("toggleReviewApproved",e)},disapproveComment:function(e){console.log("Setting 'disapproved' to comment with id: ".concat(e)),s["a"].collection("reviews").doc(e).update({approved:!1}),this.$store.commit("toggleReviewApproved",e)},moveItem:function(e,t){console.log("Moving item with id ".concat(e," up."));var i={id:e,direction:t};this.$store.commit("changePriceItemsOrder",i),this.sortServiceItemsArray(),this.syncOrderOfItemsInDB()},addServiceItem:function(){var e=this;return new Promise(function(t){console.log("Adding service item ".concat(e.buffer.priceValue));var i={id:e.buffer.docID,value:"Some string"};e.$store.commit("addServiceItem",i),t()})},handleDeleteComment:function(e){!this.safeToDelete&&e?(console.log("Dialog..."),console.log("Deleting comment with id ".concat(e)),this.safeToDelete=!this.safeToDelete,this.buffer.docID=e,this.deleteCommentDialog=!this.deleteCommentDialog):(console.log("Deleting comment with id ".concat(this.buffer.docID)),s["a"].collection("reviews").doc(this.buffer.docID).delete().then(function(){console.log("Document successfully deleted!")}).catch(function(e){console.error("Error removing document: ",e)}),this.$store.commit("deleteReview",this.buffer.docID),this.deleteCommentDialog=!this.deleteCommentDialog,this.safeToDelete=!this.safeToDelete,this.clearBuffer())},handleDeleteServiceItem:function(e,t){var i=this;!this.safeToDelete&&e?(console.log("Deleting doc with id ".concat(e,".")),this.safeToDelete=!this.safeToDelete,console.log("Setting safe to delete to ".concat(this.safeToDelete)),this.deleteServiceItemDialog=!this.deleteServiceItemDialog,console.log("Setting delete service item dialog to ".concat(this.deleteServiceItemDialog)),console.log("Setting buffer doc id to ".concat(e)),this.buffer.docID=e,this.buffer.docHeader=t):(console.log("Its safe to delete buffer id is ".concat(this.buffer.docID)),this.serviceItemsRef.doc(this.buffer.docID).delete().then(function(){console.log("Document successfully deleted");var e={id:i.buffer.docID};i.$store.commit("deleteCategory",e),i.safeToDelete=!i.safeToDelete,i.deleteServiceItemDialog=!i.deleteServiceItemDialog}).catch(function(e){console.log("Error removing document ".concat(e))}))},handlePriceDelete:function(e,t){if(!this.safeToDelete)return console.log("Check if is it safe with id ".concat(e)),this.deleteWarningDialog=!this.deleteWarningDialog,this.buffer.priceValue=t,this.buffer.docID=e,this.toggleSafeCheck(),this.deleteWarningDialog=!0,!0;console.log("All set, deleting from store."),this.deletePriceFromStore().then(function(){}).catch(function(e){console.log("Error is ".concat(e))}),this.toggleSafeCheck()},toggleSafeCheck:function(){this.safeToDelete=!this.safeToDelete,this.deleteWarningDialog=!this.deleteWarningDialog},deletePriceFromStore:function(){var e=this;return new Promise(function(t){console.log("Deleting price from store ".concat(e.buffer.priceValue));var i=e.serviceItemsFromDB.find(function(t){return t.id===e.buffer.docID}),r={id:e.buffer.docID,priceValue:e.buffer.priceValue};e.$store.commit("deletePrice",r),e.syncPricesInDB(e.buffer.docID,i),t()})},saveEdit:function(){var e=this;return new Promise(function(t,i){if(console.log("Saving data."),e.priceEditingFormValid){var r=e.serviceItemsFromDB.find(function(t){return t.id===e.buffer.docID});console.log("Item to update is ".concat(r.services[e.buffer.index])),console.log("Data to save is ".concat(e.buffer.priceValue)),r.services[e.buffer.index]=e.buffer.priceValue,console.log("This was sent to store ->"),console.log(r),e.$store.commit("updatePrices",r,e.buffer.docID),e.editPriceDialog=!e.editPriceDialog,e.syncPricesInDB(e.buffer.docID,r),t()}else{console.log("Nothing to update");var o="Nothing to update";i(o)}})},handleAddServiceItem:function(e){this.buffer.docID=e,this.addServiceItemDialog=!this.addServiceItemDialog},handleEditServiceItemName:function(e,t){console.log("Displaying service item name edit dialog. Doc id is ".concat(e));var i={type:"save",title:"Змінити назву категорії",inputFieldValue:t,id:e,inputFieldLabel:t};this.genericDialogData=i,this.genericDialog=!this.genericDialog},editServiceItemName:function(){var e=this;console.log("Renaming service item. Doc id is ".concat(this.genericDialogData.id)),this.buttonLoadingState=!this.buttonLoadingState,console.log("Saving this header: ".concat(this.genericDialogData.inputFieldValue));var t=s["a"].collection("services").doc(this.genericDialogData.id);return t.update({header:this.genericDialogData.inputFieldValue}).then(function(){console.log("Document successfully updated!"),e.buttonLoadingState=!e.buttonLoadingState,e.genericDialog=!e.genericDialog;var t={id:e.genericDialogData.id,header:e.genericDialogData.inputFieldValue};e.$store.commit("updateServiceItemName",t)}).catch(function(e){console.error("Error updating document: ",e)})},addServiceItemToDb:function(){var e=this;console.log("Adding service item to db"),this.addServiceItemFormValid?(console.log("Adding to firebase..."),console.log("Adding to doc with id ".concat(this.buffer.docID)),console.log("Adding with value of ".concat(this.buffer.priceValue)),this.serviceItemsRef.doc(this.buffer.docID).update({services:l.a.firestore.FieldValue.arrayUnion(this.buffer.priceValue)}).then(function(){console.log("Document successfully written!"),e.addServiceItemDialog=!1;var t={id:e.buffer.docID,value:e.buffer.priceValue};e.$store.commit("addServiceItem",t),e.buffer.priceValue=""}).catch(function(e){console.error("Error writing document: ",e)})):console.log("Check input.")},handleAddCategory:function(){console.log("Adding category"),this.addCategoryDialog=!0},addCategoryToDb:function(){var e=this;if(console.log("Adding category to fb"),this.addCategoryFormValid){var t=this.serviceItemsFromDB.length,i=[];this.serviceItemsRef.add({header:this.buffer.header,order:t,services:i}).then(function(r){console.log("Document successfully written! id is ".concat(r.id)),e.buffer.docID=r.id,console.log("Buffer id set to ".concat(e.buffer.docID));var o={header:e.buffer.header,order:t,services:i,id:r.id};e.$store.commit("addCategory",o),e.addCategoryDialog=!1}).catch(function(e){console.error("Error writing document: ",e)})}},editPrice:function(e,t,i,r){console.log("Editing price with index ".concat(t," and id ").concat(i)),this.editPriceDialog=!this.editPriceDialog,console.dir(e),this.buffer={docHeader:r,priceValue:e,valueForLabel:e,index:t,docID:i},console.log("Id in buffer supposed to be ".concat(this.buffer.docID))},syncPricesInDB:function(e,t){console.log("Syncing db document id is ".concat(e," ").concat(t)),this.serviceItemsRef.doc(e).set(t).then(function(){console.log("Document successfully written!")}).catch(function(e){console.error("Error writing document: ",e)})},syncOrderOfItemsInDB:function(){console.log("Syncing order of prices in db."),console.dir(this.getItemsWhichOrderHasChanged);var e=!0,t=!1,i=void 0;try{for(var r,o=this.getItemsWhichOrderHasChanged[Symbol.iterator]();!(e=(r=o.next()).done);e=!0){var n=r.value;this.serviceItemsRef.doc(n.id).update({order:n.order}).then(function(){console.log("Document successfully written!")}).catch(function(e){console.error("Error writing document: ",e)})}}catch(e){t=!0,i=e}finally{try{e||null==o.return||o.return()}finally{if(t)throw i}}},sortServiceItemsArray:function(){console.log("Sorting service items array"),this.serviceItemsFromDB=this.serviceItemsFromDB.sort(function(e,t){return e.order>t.order?1:t.order>e.order?-1:0})},loadPrices:function(){var e=this;console.log("Loading prices.."),this.serviceItemsRef.get().then(function(t){return t.forEach(function(t){e.serviceItemsFromDB.push({id:t.id,order:t.data().order,header:t.data().header,services:t.data().services})}),e.sortServiceItemsArray(),!0}).then(function(){e.$store.commit("setPrices",e.serviceItemsFromDB)}).catch(function(e){console.log("Error getting documents: ",e)})},loadReviews:function(){var e=this;console.log("Loading comments.."),this.reviewsItemsRef.get().then(function(t){return t.forEach(function(t){e.reviewsItemsFromDB.push({id:t.id,approved:t.data().approved,name:t.data().name,review:t.data().review,starsRating:t.data().starsRating})}),!0}).then(function(){e.$store.commit("setReviews",e.reviewsItemsFromDB)}).catch(function(e){console.log("Error getting documents: ",e)})}}},u=d,f=i("2877"),v=Object(f["a"])(u,r,o,!1,null,null,null);v.options.__file="Cms.vue";t["default"]=v.exports},"11e9":function(e,t,i){var r=i("52a7"),o=i("4630"),n=i("6821"),a=i("6a99"),c=i("69a8"),l=i("c69a"),s=Object.getOwnPropertyDescriptor;t.f=i("9e1e")?s:function(e,t){if(e=n(e),t=a(t,!0),l)try{return s(e,t)}catch(e){}if(c(e,t))return o(!r.f.call(e,t),e[t])}},2621:function(e,t){t.f=Object.getOwnPropertySymbols},"2f21":function(e,t,i){"use strict";var r=i("79e5");e.exports=function(e,t){return!!e&&r(function(){t?e.call(null,function(){},1):e.call(null)})}},"37c8":function(e,t,i){t.f=i("2b4c")},"3a72":function(e,t,i){var r=i("7726"),o=i("8378"),n=i("2d00"),a=i("37c8"),c=i("86cc").f;e.exports=function(e){var t=o.Symbol||(o.Symbol=n?{}:r.Symbol||{});"_"==e.charAt(0)||e in t||c(t,e,{value:a.f(e)})}},"52a7":function(e,t){t.f={}.propertyIsEnumerable},"55dd":function(e,t,i){"use strict";var r=i("5ca1"),o=i("d8e8"),n=i("4bf8"),a=i("79e5"),c=[].sort,l=[1,2,3];r(r.P+r.F*(a(function(){l.sort(void 0)})||!a(function(){l.sort(null)})||!i("2f21")(c)),"Array",{sort:function(e){return void 0===e?c.call(n(this)):c.call(n(this),o(e))}})},"67ab":function(e,t,i){var r=i("ca5a")("meta"),o=i("d3f4"),n=i("69a8"),a=i("86cc").f,c=0,l=Object.isExtensible||function(){return!0},s=!i("79e5")(function(){return l(Object.preventExtensions({}))}),d=function(e){a(e,r,{value:{i:"O"+ ++c,w:{}}})},u=function(e,t){if(!o(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!n(e,r)){if(!l(e))return"F";if(!t)return"E";d(e)}return e[r].i},f=function(e,t){if(!n(e,r)){if(!l(e))return!0;if(!t)return!1;d(e)}return e[r].w},v=function(e){return s&&g.NEED&&l(e)&&!n(e,r)&&d(e),e},g=e.exports={KEY:r,NEED:!1,fastKey:u,getWeak:f,onFreeze:v}},"7bbc":function(e,t,i){var r=i("6821"),o=i("9093").f,n={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(e){try{return o(e)}catch(e){return a.slice()}};e.exports.f=function(e){return a&&"[object Window]"==n.call(e)?c(e):o(r(e))}},"8a81":function(e,t,i){"use strict";var r=i("7726"),o=i("69a8"),n=i("9e1e"),a=i("5ca1"),c=i("2aba"),l=i("67ab").KEY,s=i("79e5"),d=i("5537"),u=i("7f20"),f=i("ca5a"),v=i("2b4c"),g=i("37c8"),m=i("3a72"),h=i("d4c0"),p=i("1169"),b=i("cb7c"),D=i("d3f4"),x=i("6821"),y=i("6a99"),S=i("4630"),I=i("2aeb"),C=i("7bbc"),w=i("11e9"),_=i("86cc"),k=i("0d58"),F=w.f,V=_.f,P=C.f,L=r.Symbol,O=r.JSON,E=O&&O.stringify,T="prototype",R=v("_hidden"),A=v("toPrimitive"),N={}.propertyIsEnumerable,B=d("symbol-registry"),$=d("symbols"),j=d("op-symbols"),W=Object[T],H="function"==typeof L,M=r.QObject,G=!M||!M[T]||!M[T].findChild,J=n&&s(function(){return 7!=I(V({},"a",{get:function(){return V(this,"a",{value:7}).a}})).a})?function(e,t,i){var r=F(W,t);r&&delete W[t],V(e,t,i),r&&e!==W&&V(W,t,r)}:V,q=function(e){var t=$[e]=I(L[T]);return t._k=e,t},K=H&&"symbol"==typeof L.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof L},U=function(e,t,i){return e===W&&U(j,t,i),b(e),t=y(t,!0),b(i),o($,t)?(i.enumerable?(o(e,R)&&e[R][t]&&(e[R][t]=!1),i=I(i,{enumerable:S(0,!1)})):(o(e,R)||V(e,R,S(1,{})),e[R][t]=!0),J(e,t,i)):V(e,t,i)},z=function(e,t){b(e);var i,r=h(t=x(t)),o=0,n=r.length;while(n>o)U(e,i=r[o++],t[i]);return e},Y=function(e,t){return void 0===t?I(e):z(I(e),t)},Q=function(e){var t=N.call(this,e=y(e,!0));return!(this===W&&o($,e)&&!o(j,e))&&(!(t||!o(this,e)||!o($,e)||o(this,R)&&this[R][e])||t)},X=function(e,t){if(e=x(e),t=y(t,!0),e!==W||!o($,t)||o(j,t)){var i=F(e,t);return!i||!o($,t)||o(e,R)&&e[R][t]||(i.enumerable=!0),i}},Z=function(e){var t,i=P(x(e)),r=[],n=0;while(i.length>n)o($,t=i[n++])||t==R||t==l||r.push(t);return r},ee=function(e){var t,i=e===W,r=P(i?j:x(e)),n=[],a=0;while(r.length>a)!o($,t=r[a++])||i&&!o(W,t)||n.push($[t]);return n};H||(L=function(){if(this instanceof L)throw TypeError("Symbol is not a constructor!");var e=f(arguments.length>0?arguments[0]:void 0),t=function(i){this===W&&t.call(j,i),o(this,R)&&o(this[R],e)&&(this[R][e]=!1),J(this,e,S(1,i))};return n&&G&&J(W,e,{configurable:!0,set:t}),q(e)},c(L[T],"toString",function(){return this._k}),w.f=X,_.f=U,i("9093").f=C.f=Z,i("52a7").f=Q,i("2621").f=ee,n&&!i("2d00")&&c(W,"propertyIsEnumerable",Q,!0),g.f=function(e){return q(v(e))}),a(a.G+a.W+a.F*!H,{Symbol:L});for(var te="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ie=0;te.length>ie;)v(te[ie++]);for(var re=k(v.store),oe=0;re.length>oe;)m(re[oe++]);a(a.S+a.F*!H,"Symbol",{for:function(e){return o(B,e+="")?B[e]:B[e]=L(e)},keyFor:function(e){if(!K(e))throw TypeError(e+" is not a symbol!");for(var t in B)if(B[t]===e)return t},useSetter:function(){G=!0},useSimple:function(){G=!1}}),a(a.S+a.F*!H,"Object",{create:Y,defineProperty:U,defineProperties:z,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:ee}),O&&a(a.S+a.F*(!H||s(function(){var e=L();return"[null]"!=E([e])||"{}"!=E({a:e})||"{}"!=E(Object(e))})),"JSON",{stringify:function(e){var t,i,r=[e],o=1;while(arguments.length>o)r.push(arguments[o++]);if(i=t=r[1],(D(t)||void 0!==e)&&!K(e))return p(t)||(t=function(e,t){if("function"==typeof i&&(t=i.call(this,e,t)),!K(t))return t}),r[1]=t,E.apply(O,r)}}),L[T][A]||i("32e9")(L[T],A,L[T].valueOf),u(L,"Symbol"),u(Math,"Math",!0),u(r.JSON,"JSON",!0)},9093:function(e,t,i){var r=i("ce10"),o=i("e11e").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},ac4d:function(e,t,i){i("3a72")("asyncIterator")},ac6a:function(e,t,i){for(var r=i("cadf"),o=i("0d58"),n=i("2aba"),a=i("7726"),c=i("32e9"),l=i("84f2"),s=i("2b4c"),d=s("iterator"),u=s("toStringTag"),f=l.Array,v={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},g=o(v),m=0;m<g.length;m++){var h,p=g[m],b=v[p],D=a[p],x=D&&D.prototype;if(x&&(x[d]||c(x,d,f),x[u]||c(x,u,p),l[p]=f,b))for(h in r)x[h]||n(x,h,r[h],!0)}},d4c0:function(e,t,i){var r=i("0d58"),o=i("2621"),n=i("52a7");e.exports=function(e){var t=r(e),i=o.f;if(i){var a,c=i(e),l=n.f,s=0;while(c.length>s)l.call(e,a=c[s++])&&t.push(a)}return t}}}]);
//# sourceMappingURL=cms.1253a934.js.map