"use strict";(self.webpackChunksandbox_laptop=self.webpackChunksandbox_laptop||[]).push([[9870],{39870:(t,e,r)=>{r.r(e),r.d(e,{default:()=>A});var n=r(89526),o=r(92070),a=r(50871),i=r(14931),l=r(51070),c=r(60514),u=r(57931),s=r(3394),p=r(81445),f=r(28756),d=r(74484),h=r(59324),m=r.n(h),v=r(24963),y=r(21447),g=r(89813);function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function E(){E=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function u(t,e,r,o){var a=e&&e.prototype instanceof f?e:f,i=Object.create(a.prototype),l=new P(o||[]);return n(i,"_invoke",{value:Z(t,r,l)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var p={};function f(){}function d(){}function h(){}var m={};c(m,a,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(N([])));y&&y!==e&&r.call(y,a)&&(m=y);var g=h.prototype=f.prototype=Object.create(m);function x(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function o(n,a,i,l){var c=s(t[n],t,a);if("throw"!==c.type){var u=c.arg,p=u.value;return p&&"object"==w(p)&&r.call(p,"__await")?e.resolve(p.__await).then((function(t){o("next",t,i,l)}),(function(t){o("throw",t,i,l)})):e.resolve(p).then((function(t){u.value=t,i(u)}),(function(t){return o("throw",t,i,l)}))}l(c.arg)}var a;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function Z(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return k()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var l=L(i,r);if(l){if(l===p)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=s(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function N(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return d.prototype=h,n(g,"constructor",{value:h,configurable:!0}),n(h,"constructor",{value:d,configurable:!0}),d.displayName=c(h,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c(t,l,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},x(b.prototype),c(b.prototype,i,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new b(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(g),c(g,l,"Generator"),c(g,a,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=N,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(A),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),A(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;A(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}function x(t,e,r,n,o,a,i){try{var l=t[a](i),c=l.value}catch(t){return void r(t)}l.done?e(c):Promise.resolve(c).then(n,o)}function b(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){x(a,n,o,i,l,"next",t)}function l(t){x(a,n,o,i,l,"throw",t)}i(void 0)}))}}function Z(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,l=[],c=!0,u=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(l.push(n.value),l.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return L(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return L(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var S=(0,d.Z)((function(t){return{wrapper:{padding:"20px 10px 20px 20px",height:"100%"},notes:{color:t.palette.text.alt,padding:"8px 16px",whiteSpace:"pre-line","& img":{width:"100%",maxWidth:300}},link:{color:t.palette.text.alt,transition:"color ease-in 0.15s","&:hover":{color:t.palette.primary.main}},officerLink:{color:t.palette.text.alt,transition:"color ease-in 0.15s","&:hover":{color:t.palette.primary.main},"&:not(:last-of-type)":{content:'", "',color:t.palette.text.main}}}}));const A=function(t){var e,r,d=t.onNav,h=t.data,w=S(),x=((0,o.I0)(),(0,g.Gt)()),L=(0,g.VY)(),A=(0,o.v9)((function(t){return t.data.data.onDuty})),P=Z((0,n.useState)(!1),2),N=P[0],k=P[1],I=Z((0,n.useState)(!1),2),_=I[0],C=I[1],R=Z((0,n.useState)(null),2),j=R[0],D=R[1],T=function(){var t=b(E().mark((function t(){return E().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!x("TABLET_MANAGE_RECEIPT",A)){t.next=14;break}return t.prev=1,t.next=4,y.Z.send("BusinessReceiptDelete",{id:j._id});case 4:return t.next=6,t.sent.json();case 6:t.sent?(L("Document Deleted"),d("Search/Receipt")):L("Unable to Delete Receipt"),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),console.log(t.t0),L("Unable to Delete Receipt");case 14:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(){return t.apply(this,arguments)}}(),O=function(){var t=b(E().mark((function t(){var e;return E().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return C(!0),t.prev=1,t.next=4,y.Z.send("BusinessReceiptView",{id:null==h?void 0:h.id});case 4:return t.next=6,t.sent.json();case 6:(e=t.sent)?D(e):L("Unable to Load Receipt"),t.next=15;break;case 10:t.prev=10,t.t0=t.catch(1),console.log(t.t0),L("Unable to Load Receipt"),k(!0);case 15:C(!1);case 16:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(){return t.apply(this,arguments)}}();return(0,n.useEffect)((function(){O()}),[]),n.createElement("div",null,_||!j&&!N?n.createElement("div",{className:w.wrapper,style:{position:"relative"}},n.createElement(v.aN,{static:!0,text:"Loading"})):N?n.createElement(a.ZP,{className:w.wrapper,container:!0},n.createElement(a.ZP,{item:!0,xs:12},n.createElement(i.Z,{variant:"outlined",severity:"error"},"Invalid Document ID"))):n.createElement(n.Fragment,null,n.createElement(a.ZP,{className:w.wrapper,container:!0,spacing:2},n.createElement(a.ZP,{item:!0,xs:12},n.createElement(l.Z,{fullWidth:!0},n.createElement(c.Z,{onClick:O,disabled:_},"Refresh"),n.createElement(c.Z,{disabled:!function(){return x("TABLET_MANAGE_RECEIPT",A)},onClick:function(){d("Create/Receipt",{id:j._id})}},"Edit Document"),x("TABLET_MANAGE_RECEIPT",A)&&n.createElement(c.Z,{onClick:T},"Delete Document"))),n.createElement(a.ZP,{item:!0,xs:12},n.createElement(a.ZP,{container:!0,spacing:2},n.createElement(a.ZP,{item:!0,xs:6},n.createElement(u.Z,{primary:n.createElement("span",null,"Created ",n.createElement(m(),{date:j.time,fromNow:!0})),secondary:n.createElement("span",null,"By ","".concat(j.author.First," ").concat(j.author.Last," (").concat(j.author.SID,")")," on ",n.createElement(m(),{date:j.time,format:"LLL"}))})),n.createElement(a.ZP,{item:!0,xs:6},j.lastUpdated&&n.createElement(u.Z,{primary:n.createElement("span",null,"Last Updated ",n.createElement(m(),{date:null===(e=j.lastUpdated)||void 0===e?void 0:e.Time,fromNow:!0})),secondary:n.createElement("span",null,"By ","".concat(j.lastUpdated.First," ").concat(j.lastUpdated.Last," (").concat(j.lastUpdated.SID,")")," on ",n.createElement(m(),{date:null===(r=j.lastUpdated)||void 0===r?void 0:r.Time,format:"LLL"}))}))),n.createElement(s.Z,{flexItem:!0})),n.createElement(a.ZP,{item:!0,xs:6},n.createElement(p.Z,null,n.createElement(f.ZP,null,n.createElement(u.Z,{primary:"Receipt Type",secondary:j.type})),n.createElement(f.ZP,null,n.createElement(u.Z,{primary:"Customer Name",secondary:j.customerName})),n.createElement(f.ZP,null,n.createElement(u.Z,{primary:"Customer Number",secondary:j.customerNumber})),n.createElement(f.ZP,null,n.createElement(u.Z,{primary:"Payment Charge",secondary:j.paymentAmount})),n.createElement(f.ZP,null,n.createElement(u.Z,{primary:"Payment Paid",secondary:j.paymentPaid})))),n.createElement(a.ZP,{item:!0,xs:6},n.createElement(p.Z,null,n.createElement(f.ZP,null,n.createElement(u.Z,{primary:"Additional Employees",secondary:j.workers&&j.workers.length>0?n.createElement("span",null,j.workers.map((function(t){return n.createElement("span",{key:"assisting-".concat(t.SID)},"".concat(t.First," ").concat(t.Last," (").concat(t.SID,")"),n.createElement("br",null))}))):"No Additional Employees"})),n.createElement(f.ZP,null,n.createElement(u.Z,{primary:"Additional Notes"})),n.createElement("div",{className:w.notes},n.createElement(v.Yr,{wrapperClass:w.notes,content:j.notes})))))))}},3394:(t,e,r)=>{r.d(e,{Z:()=>v});var n=r(71972),o=r(17692),a=r(89526),i=r(23060),l=r(13957),c=r(72945),u=r(23318),s=r(90265),p=r(13272),f=r(67557);const d=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],h=(0,u.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.absolute&&e.absolute,e[r.variant],r.light&&e.light,"vertical"===r.orientation&&e.vertical,r.flexItem&&e.flexItem,r.children&&e.withChildren,r.children&&"vertical"===r.orientation&&e.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&e.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&e.textAlignLeft]}})((({theme:t,ownerState:e})=>(0,o.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},e.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},e.light&&{borderColor:t.vars?`rgba(${t.vars.palette.dividerChannel} / 0.08)`:(0,c.Fq)(t.palette.divider,.08)},"inset"===e.variant&&{marginLeft:72},"middle"===e.variant&&"horizontal"===e.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===e.variant&&"vertical"===e.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===e.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},e.flexItem&&{alignSelf:"stretch",height:"auto"})),(({ownerState:t})=>(0,o.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}})),(({theme:t,ownerState:e})=>(0,o.Z)({},e.children&&"vertical"!==e.orientation&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(t.vars||t).palette.divider}`}})),(({theme:t,ownerState:e})=>(0,o.Z)({},e.children&&"vertical"===e.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(t.vars||t).palette.divider}`}})),(({ownerState:t})=>(0,o.Z)({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),m=(0,u.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.wrapper,"vertical"===r.orientation&&e.wrapperVertical]}})((({theme:t,ownerState:e})=>(0,o.Z)({display:"inline-block",paddingLeft:`calc(${t.spacing(1)} * 1.2)`,paddingRight:`calc(${t.spacing(1)} * 1.2)`},"vertical"===e.orientation&&{paddingTop:`calc(${t.spacing(1)} * 1.2)`,paddingBottom:`calc(${t.spacing(1)} * 1.2)`}))),v=a.forwardRef((function(t,e){const r=(0,s.Z)({props:t,name:"MuiDivider"}),{absolute:a=!1,children:c,className:u,component:v=(c?"div":"hr"),flexItem:y=!1,light:g=!1,orientation:w="horizontal",role:E=("hr"!==v?"separator":void 0),textAlign:x="center",variant:b="fullWidth"}=r,Z=(0,n.Z)(r,d),L=(0,o.Z)({},r,{absolute:a,component:v,flexItem:y,light:g,orientation:w,role:E,textAlign:x,variant:b}),S=(t=>{const{absolute:e,children:r,classes:n,flexItem:o,light:a,orientation:i,textAlign:c,variant:u}=t,s={root:["root",e&&"absolute",u,a&&"light","vertical"===i&&"vertical",o&&"flexItem",r&&"withChildren",r&&"vertical"===i&&"withChildrenVertical","right"===c&&"vertical"!==i&&"textAlignRight","left"===c&&"vertical"!==i&&"textAlignLeft"],wrapper:["wrapper","vertical"===i&&"wrapperVertical"]};return(0,l.Z)(s,p.V,n)})(L);return(0,f.jsx)(h,(0,o.Z)({as:v,className:(0,i.default)(S.root,u),role:E,ref:e,ownerState:L},Z,{children:c?(0,f.jsx)(m,{className:S.wrapper,ownerState:L,children:c}):null}))}))},13272:(t,e,r)=>{r.d(e,{V:()=>a,Z:()=>i});var n=r(67402),o=r(59690);function a(t){return(0,o.Z)("MuiDivider",t)}const i=(0,n.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"])}}]);