"use strict";(self.webpackChunksandbox_laptop=self.webpackChunksandbox_laptop||[]).push([[9514],{99514:(e,t,a)=>{a.d(t,{Z:()=>j});var o=a(17692),r=a(71972),i=a(89526),n=a(23060),s=a(13957),l=a(90265),d=a(67402),c=a(59690);function p(e){return(0,c.Z)("MuiPagination",e)}(0,d.Z)("MuiPagination",["root","ul","outlined","text"]);var u=a(82376);const g=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];var v=a(72945);function m(e){return(0,c.Z)("MuiPaginationItem",e)}const h=(0,d.Z)("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon"]);var b=a(18051),x=a(98592),y=a(88623),f=a(4228),Z=a(67557);const C=(0,f.Z)((0,Z.jsx)("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),$=(0,f.Z)((0,Z.jsx)("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),z=(0,f.Z)((0,Z.jsx)("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),P=(0,f.Z)((0,Z.jsx)("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");var k=a(23318);const w=["className","color","component","components","disabled","page","selected","shape","size","slots","type","variant"],N=(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],t[`size${(0,y.Z)(a.size)}`],"text"===a.variant&&t[`text${(0,y.Z)(a.color)}`],"outlined"===a.variant&&t[`outlined${(0,y.Z)(a.color)}`],"rounded"===a.shape&&t.rounded,"page"===a.type&&t.page,("start-ellipsis"===a.type||"end-ellipsis"===a.type)&&t.ellipsis,("previous"===a.type||"next"===a.type)&&t.previousNext,("first"===a.type||"last"===a.type)&&t.firstLast]},B=(0,k.ZP)("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:N})((({theme:e,ownerState:t})=>(0,o.Z)({},e.typography.body2,{borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(e.vars||e).palette.text.primary,height:"auto",[`&.${h.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},"small"===t.size&&{minWidth:26,borderRadius:13,margin:"0 1px",padding:"0 4px"},"large"===t.size&&{minWidth:40,borderRadius:20,padding:"0 10px",fontSize:e.typography.pxToRem(15)}))),M=(0,k.ZP)(x.Z,{name:"MuiPaginationItem",slot:"Root",overridesResolver:N})((({theme:e,ownerState:t})=>(0,o.Z)({},e.typography.body2,{borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(e.vars||e).palette.text.primary,[`&.${h.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${h.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},transition:e.transitions.create(["color","background-color"],{duration:e.transitions.duration.short}),"&:hover":{backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${h.selected}`]:{backgroundColor:(e.vars||e).palette.action.selected,"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selected} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,v.Fq)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(e.vars||e).palette.action.selected}},[`&.${h.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selected} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,v.Fq)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)},[`&.${h.disabled}`]:{opacity:1,color:(e.vars||e).palette.action.disabled,backgroundColor:(e.vars||e).palette.action.selected}}},"small"===t.size&&{minWidth:26,height:26,borderRadius:13,margin:"0 1px",padding:"0 4px"},"large"===t.size&&{minWidth:40,height:40,borderRadius:20,padding:"0 10px",fontSize:e.typography.pxToRem(15)},"rounded"===t.shape&&{borderRadius:(e.vars||e).shape.borderRadius})),(({theme:e,ownerState:t})=>(0,o.Z)({},"text"===t.variant&&{[`&.${h.selected}`]:(0,o.Z)({},"standard"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main,"&:hover":{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}},[`&.${h.focusVisible}`]:{backgroundColor:(e.vars||e).palette[t.color].dark}},{[`&.${h.disabled}`]:{color:(e.vars||e).palette.action.disabled}})},"outlined"===t.variant&&{border:e.vars?`1px solid rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:"1px solid "+("light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),[`&.${h.selected}`]:(0,o.Z)({},"standard"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:`1px solid ${e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:(0,v.Fq)(e.palette[t.color].main,.5)}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.activatedOpacity})`:(0,v.Fq)(e.palette[t.color].main,e.palette.action.activatedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / calc(${e.vars.palette.action.activatedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,v.Fq)(e.palette[t.color].main,e.palette.action.activatedOpacity+e.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${h.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / calc(${e.vars.palette.action.activatedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,v.Fq)(e.palette[t.color].main,e.palette.action.activatedOpacity+e.palette.action.focusOpacity)}},{[`&.${h.disabled}`]:{borderColor:(e.vars||e).palette.action.disabledBackground,color:(e.vars||e).palette.action.disabled}})}))),R=(0,k.ZP)("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:(e,t)=>t.icon})((({theme:e,ownerState:t})=>(0,o.Z)({fontSize:e.typography.pxToRem(20),margin:"0 -8px"},"small"===t.size&&{fontSize:e.typography.pxToRem(18)},"large"===t.size&&{fontSize:e.typography.pxToRem(22)}))),L=i.forwardRef((function(e,t){const a=(0,l.Z)({props:e,name:"MuiPaginationItem"}),{className:i,color:d="standard",component:c,components:p={},disabled:u=!1,page:g,selected:v=!1,shape:h="circular",size:x="medium",slots:f={},type:k="page",variant:N="text"}=a,L=(0,r.Z)(a,w),S=(0,o.Z)({},a,{color:d,disabled:u,selected:v,shape:h,size:x,type:k,variant:N}),O=(0,b.Z)(),I=(e=>{const{classes:t,color:a,disabled:o,selected:r,size:i,shape:n,type:l,variant:d}=e,c={root:["root",`size${(0,y.Z)(i)}`,d,n,"standard"!==a&&`${d}${(0,y.Z)(a)}`,o&&"disabled",r&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[l]],icon:["icon"]};return(0,s.Z)(c,m,t)})(S),F=("rtl"===O.direction?{previous:f.next||p.next||P,next:f.previous||p.previous||z,last:f.first||p.first||C,first:f.last||p.last||$}:{previous:f.previous||p.previous||z,next:f.next||p.next||P,first:f.first||p.first||C,last:f.last||p.last||$})[k];return"start-ellipsis"===k||"end-ellipsis"===k?(0,Z.jsx)(B,{ref:t,ownerState:S,className:(0,n.default)(I.root,i),children:"…"}):(0,Z.jsxs)(M,(0,o.Z)({ref:t,ownerState:S,component:c,disabled:u,className:(0,n.default)(I.root,i)},L,{children:["page"===k&&g,F?(0,Z.jsx)(R,{as:F,ownerState:S,className:I.icon}):null]}))})),S=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],O=(0,k.ZP)("nav",{name:"MuiPagination",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant]]}})({}),I=(0,k.ZP)("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:(e,t)=>t.ul})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function F(e,t,a){return"page"===e?`${a?"":"Go to "}page ${t}`:`Go to ${e} page`}const j=i.forwardRef((function(e,t){const a=(0,l.Z)({props:e,name:"MuiPagination"}),{boundaryCount:i=1,className:d,color:c="standard",count:v=1,defaultPage:m=1,disabled:h=!1,getItemAriaLabel:b=F,hideNextButton:x=!1,hidePrevButton:y=!1,renderItem:f=(e=>(0,Z.jsx)(L,(0,o.Z)({},e))),shape:C="circular",showFirstButton:$=!1,showLastButton:z=!1,siblingCount:P=1,size:k="medium",variant:w="text"}=a,N=(0,r.Z)(a,S),{items:B}=function(e={}){const{boundaryCount:t=1,componentName:a="usePagination",count:i=1,defaultPage:n=1,disabled:s=!1,hideNextButton:l=!1,hidePrevButton:d=!1,onChange:c,page:p,showFirstButton:v=!1,showLastButton:m=!1,siblingCount:h=1}=e,b=(0,r.Z)(e,g),[x,y]=(0,u.Z)({controlled:p,default:n,name:a,state:"page"}),f=(e,t)=>{p||y(t),c&&c(e,t)},Z=(e,t)=>{const a=t-e+1;return Array.from({length:a},((t,a)=>e+a))},C=Z(1,Math.min(t,i)),$=Z(Math.max(i-t+1,t+1),i),z=Math.max(Math.min(x-h,i-t-2*h-1),t+2),P=Math.min(Math.max(x+h,t+2*h+2),$.length>0?$[0]-2:i-1),k=[...v?["first"]:[],...d?[]:["previous"],...C,...z>t+2?["start-ellipsis"]:t+1<i-t?[t+1]:[],...Z(z,P),...P<i-t-1?["end-ellipsis"]:i-t>t?[i-t]:[],...$,...l?[]:["next"],...m?["last"]:[]],w=e=>{switch(e){case"first":return 1;case"previous":return x-1;case"next":return x+1;case"last":return i;default:return null}},N=k.map((e=>"number"==typeof e?{onClick:t=>{f(t,e)},type:"page",page:e,selected:e===x,disabled:s,"aria-current":e===x?"true":void 0}:{onClick:t=>{f(t,w(e))},type:e,page:w(e),selected:!1,disabled:s||-1===e.indexOf("ellipsis")&&("next"===e||"last"===e?x>=i:x<=1)}));return(0,o.Z)({items:N},b)}((0,o.Z)({},a,{componentName:"Pagination"})),M=(0,o.Z)({},a,{boundaryCount:i,color:c,count:v,defaultPage:m,disabled:h,getItemAriaLabel:b,hideNextButton:x,hidePrevButton:y,renderItem:f,shape:C,showFirstButton:$,showLastButton:z,siblingCount:P,size:k,variant:w}),R=(e=>{const{classes:t,variant:a}=e,o={root:["root",a],ul:["ul"]};return(0,s.Z)(o,p,t)})(M);return(0,Z.jsx)(O,(0,o.Z)({"aria-label":"pagination navigation",className:(0,n.default)(R.root,d),ownerState:M,ref:t},N,{children:(0,Z.jsx)(I,{className:R.ul,ownerState:M,children:B.map(((e,t)=>(0,Z.jsx)("li",{children:f((0,o.Z)({},e,{color:c,"aria-label":b(e.type,e.page,e.selected),shape:C,size:k,variant:w}))},t)))})}))}))}}]);