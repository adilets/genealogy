webpackJsonp([60],{"/Nkn":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"CardControl"}},"02GH":function(t,e,n){var s=n("VU/8")(n("bIv0"),n("GLCp"),!1,function(t){n("1scV")},"data-v-41d96d68",null);t.exports=s.exports},"1scV":function(t,e,n){var s=n("TdTz");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n("rjj0")("ffb38a6a",s,!0,{})},GLCp:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[t.header?n("header",{staticClass:"card-header"},[n("p",{staticClass:"card-header-title"},[t.icon?n("span",{staticClass:"icon is-small has-margin-right-small"},[n("fa",{attrs:{icon:t.icon}})],1):t._e(),t._v(" "),!t.fixed&&t.title?n("span",{staticClass:"is-clickable",on:{click:function(e){t.toggle()}}},[t._v("\n                "+t._s(t.title)+"\n            ")]):t.title?n("span",[t._v(t._s(t.title))]):t._e()]),t._v(" "),t.search?n("div",{staticClass:"has-vertically-centered-content"},[n("p",{staticClass:"control has-icons-left"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"input is-small",attrs:{type:"search"},domProps:{value:t.query},on:{input:[function(e){e.target.composing||(t.query=e.target.value)},function(e){t.$emit("query-update",t.query)}]}}),t._v(" "),n("span",{staticClass:"icon is-small is-left"},[n("fa",{attrs:{icon:"search"}})],1)])]):t._e(),t._v(" "),t._l(t.controls,function(e){return t._t("control-"+e)}),t._v(" "),null!==t.badge?n("card-control",[n("span",{staticClass:"tag is-link"},[t._v("\n                "+t._s(t.badge)+"\n            ")])]):t._e(),t._v(" "),t.refresh?n("card-control",{on:{click:function(e){t.$emit("refresh")}}},[n("span",{staticClass:"icon is-small"},[n("fa",{attrs:{icon:"sync"}})],1)]):t._e(),t._v(" "),t.fixed?t._e():n("card-control",{on:{click:function(e){t.toggle()}}},[n("span",{staticClass:"icon angle",attrs:{"aria-hidden":!t.expanded}},[n("fa",{attrs:{icon:"angle-down"}})],1)]),t._v(" "),t.removable?n("card-control",{on:{click:function(e){t.destroy()}}},[n("a",{staticClass:"delete is-small"})]):t._e()],2):t._e(),t._v(" "),n("div",{staticClass:"card-content is-paddingless",style:t.contentStyle},[t._t("default")],2),t._v(" "),t._t("footer"),t._v(" "),t.overlay?n("overlay",{attrs:{size:"medium"}}):t._e()],2)},staticRenderFns:[]}},"Gl/G":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("QxPg"),a=n("EQBe"),i=n("02GH"),o=n.n(i),r=n("zhSu"),l=n.n(r),c=n("pnAl"),d=n.n(c),u=n("2kJi");s.a.library.add(a._17,a.J,a.v,a._20),e.default={components:{Card:o.a,CardControl:l.a,Popover:d.a},data:function(){return{logs:[]}},computed:{icon:function(){return a._17}},created:function(){var t=this;axios.get(route("system.logs.index")).then(function(e){var n=e.data;t.logs=n}).catch(function(e){return t.handleError(e)})},methods:{empty:function(t){var e=this;axios.delete(route("system.logs.destroy",t.name)).then(function(n){var s=n.data,a=e.logs.findIndex(function(e){return t.name===e.name});e.logs.splice(a,1,s.log),e.$toastr.success(s.message)}).catch(function(t){return e.handleError(t)})},getDownloadLink:function(t){return route("system.logs.download",t)},timeFromNow:function(t){return Object(u.a)(t)}}}},QWXC:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-popover",{ref:"dialog",attrs:{open:t.open,trigger:t.trigger,placement:t.placement},on:{show:function(e){t.$emit("show")},hide:function(e){t.$emit("hide")}}},[t._t("default"),t._v(" "),n("template",{slot:"popover"},[n("button",{staticClass:"button is-small is-success has-margin-right-medium",on:{click:function(e){t.$refs.dialog.hide(),t.$emit("confirm")}}},[n("span",{staticClass:"icon is-small"},[n("fa",{attrs:{icon:"check"}})],1)]),t._v(" "),n("button",{staticClass:"button is-small is-danger",on:{click:function(e){t.$refs.dialog.hide(),t.$emit("cancel")}}},[n("span",{staticClass:"icon is-small"},[n("fa",{attrs:{icon:"times"}})],1)])])],2)},staticRenderFns:[]}},TdTz:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".card-header-title[data-v-41d96d68]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.card-content[data-v-41d96d68]{-webkit-transition:max-height .4s ease;transition:max-height .4s ease}.icon.angle[aria-hidden=true][data-v-41d96d68]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.icon.angle[data-v-41d96d68]{-webkit-transition:-webkit-transform .3s ease;transition:-webkit-transform .3s ease;transition:transform .3s ease;transition:transform .3s ease,-webkit-transform .3s ease}",""])},Tutp:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("VN6J"),a=n("QxPg"),i=n("EQBe");a.a.library.add(i.q,i._18);var o=["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"],r=["hover","click","focus","manual"];e.default={name:"Popover",components:{VPopover:s.a},props:{placement:{type:String,default:"bottom",validator:function(t){return o.includes(t)}},trigger:{type:String,default:"click",validator:function(t){return 0===t.split(" ").filter(function(t){return!r.includes(t)}).length}},open:{type:Boolean,default:!1}}}},bIv0:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("QxPg"),a=n("EQBe"),i=n("zhSu"),o=n.n(i),r=n("zXii"),l=n.n(r);s.a.library.add(a._6,a._13,a.d),e.default={name:"Card",components:{CardControl:o.a,Overlay:l.a},props:{nested:{type:Boolean,default:!1},collapsed:{type:Boolean,default:!1},icon:{type:[Object,Array,String],default:null},title:{type:String,default:null},search:{type:Boolean,default:!1},badge:{type:Number,default:null},refresh:{type:Boolean,default:!1},fixed:{type:Boolean,default:!1},removable:{type:Boolean,default:!1},controls:{type:Number,default:0},overlay:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1}},data:function(){return{query:null,expanded:!this.collapsed}},computed:{searchInput:function(){return this.search?this.$el.querySelector("input[type=search]"):null},header:function(){return this.icon||this.title||this.search||this.badge||this.refresh||!this.fixed||this.removable||this.controls},content:function(){return this.$el.querySelector(".card-content")},maxHeight:function(){return this.collapsed?{"max-height":0}:{}},overflowY:function(){return this.scrollable||!this.expanded?{"overflow-y":"hidden"}:{}},contentStyle:function(){return Object.assign({},this.maxHeight,this.overflowY)}},methods:{toggle:function(){this.$emit("toggle"),this.expanded?this.collapse():this.expand()},expand:function(){var t=this;this.nested&&this.$emit("extend",this.content.scrollHeight),this.$emit("expand"),this.content.style["max-height"]=this.content.scrollHeight+"px",setTimeout(function(){t.expanded=!0},400)},collapse:function(){var t=this;this.content.style["max-height"]||(this.content.style["max-height"]=this.content.scrollHeight+"px"),this.nested&&this.$emit("shrink",this.content.scrollHeight),this.$emit("collapse"),setTimeout(function(){t.content.style["max-height"]=0},1),this.expanded=!1},resize:function(){var t=this;if(this.expanded){var e=parseInt(this.content.style["max-height"],10);this.$nextTick(function(){t.nested&&t.$emit("extend",t.content.scrollHeight-e),t.content.style["max-height"]=t.content.scrollHeight+"px"})}},shrink:function(t){return this.content.style["max-height"]=parseInt(this.content.style["max-height"],10)-t+"px",this.$emit("shrink",t)},extend:function(t){return this.content.style["max-height"]=parseInt(this.content.style["max-height"],10)+t+"px",this.$emit("extend",t)},focus:function(){this.searchInput.focus()},clearQuery:function(){this.query=null},destroy:function(){this.$emit("remove"),this.$el.parentNode.removeChild(this.$el),this.$destroy()}}}},cQ0e:function(t,e){t.exports={render:function(){var t=this.$createElement;return(this._self._c||t)("a",this._g({staticClass:"card-header-icon"},this.$listeners),[this._t("default")],2)},staticRenderFns:[]}},pnAl:function(t,e,n){var s=n("VU/8")(n("Tutp"),n("QWXC"),!1,null,null,null);t.exports=s.exports},upRG:function(t,e,n){var s=n("VU/8")(n("Gl/G"),n("zD81"),!1,null,null,null);t.exports=s.exports},zD81:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"columns is-multiline"},t._l(t.logs,function(e,s){return n("div",{key:s,staticClass:"column is-one-third-widescreen is-half-desktop is-full-tablet"},[n("card",{attrs:{icon:t.icon,title:e.name,controls:3}},[e.canBeSeen?n("card-control",{attrs:{slot:"control-1"},slot:"control-1"},[n("span",{staticClass:"icon is-small has-text-success",on:{click:function(n){t.$router.push({name:"system.logs.show",params:{id:e.name}})}}},[n("fa",{attrs:{icon:"eye"}})],1)]):t._e(),t._v(" "),n("card-control",{attrs:{slot:"control-2"},slot:"control-2"},[n("a",{staticClass:"icon is-small has-text-info",attrs:{href:t.getDownloadLink(e.name)}},[n("fa",{attrs:{icon:"cloud-download-alt"}})],1)]),t._v(" "),n("card-control",{attrs:{slot:"control-3"},slot:"control-3"},[n("popover",{attrs:{placement:"bottom"},on:{confirm:function(n){t.empty(e)}}},[n("span",{staticClass:"icon is-small has-text-danger"},[n("fa",{attrs:{icon:"trash-alt"}})],1)])],1),t._v(" "),n("div",{staticClass:"has-padding-large"},[n("p",[n("span",[t._v(t._s(t.__("Last updated")))]),t._v(" "),n("span",{staticClass:"is-pulled-right"},[t._v(t._s(t.timeFromNow(e.modified.date)))])]),t._v(" "),n("p",[n("span",[t._v(t._s(t.__("Size")))]),t._v(" "),n("span",{staticClass:"is-pulled-right"},[t._v(t._s(e.size)+" "+t._s(t.__("MB")))])])])],1)],1)}))},staticRenderFns:[]}},zhSu:function(t,e,n){var s=n("VU/8")(n("/Nkn"),n("cQ0e"),!1,null,null,null);t.exports=s.exports}});
//# sourceMappingURL=60.js.map