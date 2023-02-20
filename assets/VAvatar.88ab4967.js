import{F as W,i as T,G as Ve,H as Oe,J as ce,K as de,r as $,o as ve,L as me,q as z,M as Ae,N as He,O as We,d as De,p as y,b as c,e as f,c as o,S as U,h as Fe,T as fe,P as je,Q as ge,w as ee,R as Me,U as he,v as Xe,V as w,W as P,X as pe,Y as te,Z as ne,I as _e,m as K,_ as Ye,a as G,$ as qe,t as ye,a0 as Ue,a1 as ae,u as Ke,l as be,a2 as Ge,a3 as se,a4 as Je}from"./index.2913e436.js";const Se=["top","bottom"],Qe=["start","end","left","right"];function Ze(e,t){let[n,a]=e.split(" ");return a||(a=W(Se,n)?"start":W(Qe,n)?"top":"center"),{side:re(n,t),align:re(a,t)}}function re(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function Tt(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function Rt(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function zt(e){return{side:e.align,align:e.side}}function Bt(e){return W(Se,e.side)?"y":"x"}function Nt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return T({name:n!=null?n:Ve(Oe(e.replace(/__/g,"-"))),props:{tag:{type:String,default:t}},setup(a,r){let{slots:s}=r;return()=>{var i;return ce(a.tag,{class:e},(i=s.default)==null?void 0:i.call(s))}}})}function I(e){const t=de("useRender");t.render=e}function Pt(e){const t=$(),n=$();if(ve){const a=new ResizeObserver(r=>{e==null||e(r,a),r.length&&(n.value=r[0].contentRect)});me(()=>{a.disconnect()}),z(t,(r,s)=>{s&&(a.unobserve(s),n.value=void 0),r&&a.observe(r)},{flush:"post"})}return{resizeRef:t,contentRect:Ae(n)}}const It=(e,t)=>{const n=e.__vccOpts||e;for(const[a,r]of t)n[a]=r;return n},Vt=He({name:"VDefaultsProvider",props:{defaults:Object,reset:[Number,String],root:Boolean,scoped:Boolean},setup(e,t){let{slots:n}=t;const{defaults:a,reset:r,root:s,scoped:i}=We(e);return De(a,{reset:r,root:s,scoped:i}),()=>{var l;return(l=n.default)==null?void 0:l.call(n)}}});const et=y({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function tt(e){return{dimensionStyles:c(()=>({height:f(e.height),maxHeight:f(e.maxHeight),maxWidth:f(e.maxWidth),minHeight:f(e.minHeight),minWidth:f(e.minWidth),width:f(e.width)}))}}function nt(e){return{aspectStyles:c(()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0})}}const at=T({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...et()},setup(e,t){let{slots:n}=t;const{aspectStyles:a}=nt(e),{dimensionStyles:r}=tt(e);return I(()=>{var s;return o("div",{class:"v-responsive",style:r.value},[o("div",{class:"v-responsive__sizer",style:a.value},null),(s=n.additional)==null?void 0:s.call(n),n.default&&o("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}});function st(e,t){if(!U)return;const n=t.modifiers||{},a=t.value,{handler:r,options:s}=typeof a=="object"?a:{handler:a,options:{}},i=new IntersectionObserver(function(){var l;let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],d=arguments.length>1?arguments[1]:void 0;const m=(l=e._observe)==null?void 0:l[t.instance.$.uid];if(!m)return;const g=u.some(p=>p.isIntersecting);r&&(!n.quiet||m.init)&&(!n.once||g||m.init)&&r(g,u,d),g&&n.once?Ce(e,t):m.init=!0},s);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:i},i.observe(e)}function Ce(e,t){var n;const a=(n=e._observe)==null?void 0:n[t.instance.$.uid];!a||(a.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const rt={mounted:st,unmounted:Ce},it=rt,lt=y({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),H=(e,t)=>{let{slots:n}=t;const{transition:a,...r}=e,{component:s=fe,...i}=typeof a=="object"?a:{};return ce(s,Fe(typeof a=="string"?{name:a}:i,r),n)},ot=T({name:"VImg",directives:{intersect:it},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...lt()},emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,t){let{emit:n,slots:a}=t;const r=$(""),s=$(),i=$(e.eager?"loading":"idle"),l=$(),u=$(),d=c(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),m=c(()=>d.value.aspect||l.value/u.value||0);z(()=>e.src,()=>{g(i.value!=="idle")}),z(m,(v,h)=>{!v&&h&&s.value&&C(s.value)}),je(()=>g());function g(v){if(!(e.eager&&v)&&!(U&&!v&&!e.eager)){if(i.value="loading",d.value.lazySrc){const h=new Image;h.src=d.value.lazySrc,C(h,null)}!d.value.src||ge(()=>{var h,S;if(n("loadstart",((h=s.value)==null?void 0:h.currentSrc)||d.value.src),(S=s.value)!=null&&S.complete){if(s.value.naturalWidth||_(),i.value==="error")return;m.value||C(s.value,null),p()}else m.value||C(s.value),V()})}}function p(){var v;V(),i.value="loaded",n("load",((v=s.value)==null?void 0:v.currentSrc)||d.value.src)}function _(){var v;i.value="error",n("error",((v=s.value)==null?void 0:v.currentSrc)||d.value.src)}function V(){const v=s.value;v&&(r.value=v.currentSrc||v.src)}let L=-1;function C(v){let h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const S=()=>{clearTimeout(L);const{naturalHeight:A,naturalWidth:Z}=v;A||Z?(l.value=Z,u.value=A):!v.complete&&i.value==="loading"&&h!=null?L=window.setTimeout(S,h):(v.currentSrc.endsWith(".svg")||v.currentSrc.startsWith("data:image/svg+xml"))&&(l.value=1,u.value=1)};S()}const x=c(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),R=()=>{var v;if(!d.value.src||i.value==="idle")return null;const h=o("img",{class:["v-img__img",x.value],src:d.value.src,srcset:d.value.srcset,alt:"",sizes:e.sizes,ref:s,onLoad:p,onError:_},null),S=(v=a.sources)==null?void 0:v.call(a);return o(H,{transition:e.transition,appear:!0},{default:()=>[ee(S?o("picture",{class:"v-img__picture"},[S,h]):h,[[Xe,i.value==="loaded"]])]})},E=()=>o(H,{transition:e.transition},{default:()=>[d.value.lazySrc&&i.value!=="loaded"&&o("img",{class:["v-img__img","v-img__img--preload",x.value],src:d.value.lazySrc,alt:""},null)]}),F=()=>a.placeholder?o(H,{transition:e.transition,appear:!0},{default:()=>[(i.value==="loading"||i.value==="error"&&!a.error)&&o("div",{class:"v-img__placeholder"},[a.placeholder()])]}):null,O=()=>a.error?o(H,{transition:e.transition,appear:!0},{default:()=>[i.value==="error"&&o("div",{class:"v-img__error"},[a.error()])]}):null,j=()=>e.gradient?o("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,k=$(!1);{const v=z(m,h=>{h&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{k.value=!0})}),v())})}return I(()=>ee(o(at,{class:["v-img",{"v-img--booting":!k.value}],style:{width:f(e.width==="auto"?l.value:e.width)},aspectRatio:m.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>o(he,null,[o(R,null,null),o(E,null,null),o(j,null,null),o(F,null,null),o(O,null,null)]),default:a.default}),[[Me("intersect"),{handler:g,options:e.options},null,{once:!0}]])),{currentSrc:r,image:s,state:i,naturalWidth:l,naturalHeight:u}}}),J=y({tag:{type:String,default:"div"}},"tag"),Ot=y({border:[Boolean,Number,String]},"border");function At(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:w();return{borderClasses:c(()=>{const a=P(e)?e.value:e.border,r=[];if(a===!0||a==="")r.push(`${t}--border`);else if(typeof a=="string"||a===0)for(const s of String(a).split(" "))r.push(`border-${s}`);return r})}}const Ht=y({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function Wt(e){return{elevationClasses:c(()=>{const n=P(e)?e.value:e.elevation,a=[];return n==null||a.push(`elevation-${n}`),a})}}const $e=y({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function ke(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:w();return{roundedClasses:c(()=>{const a=P(e)?e.value:e.rounded,r=[];if(a===!0||a==="")r.push(`${t}--rounded`);else if(typeof a=="string"||a===0)for(const s of String(a).split(" "))r.push(`rounded-${s}`);return r})}}function Q(e){return pe(()=>{const t=[],n={};return e.value.background&&(te(e.value.background)?n.backgroundColor=e.value.background:t.push(`bg-${e.value.background}`)),e.value.text&&(te(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:n}})}function we(e,t){const n=c(()=>({text:P(e)?e.value:t?e[t]:null})),{colorClasses:a,colorStyles:r}=Q(n);return{textColorClasses:a,textColorStyles:r}}function ie(e,t){const n=c(()=>({background:P(e)?e.value:t?e[t]:null})),{colorClasses:a,colorStyles:r}=Q(n);return{backgroundColorClasses:a,backgroundColorStyles:r}}const ut=[null,"default","comfortable","compact"],ct=y({density:{type:String,default:"default",validator:e=>ut.includes(e)}},"density");function dt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:w();return{densityClasses:c(()=>`${t}--density-${e.density}`)}}const vt=["elevated","flat","tonal","outlined","text","plain"];function mt(e,t){return o(he,null,[e&&o("span",{key:"overlay",class:`${t}__overlay`},null),o("span",{key:"underlay",class:`${t}__underlay`},null)])}const ft=y({color:String,variant:{type:String,default:"elevated",validator:e=>vt.includes(e)}},"variant");function gt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:w();const n=c(()=>{const{variant:s}=ne(e);return`${t}--variant-${s}`}),{colorClasses:a,colorStyles:r}=Q(c(()=>{const{variant:s,color:i}=ne(e);return{[["elevated","flat"].includes(s)?"background":"text"]:i}}));return{colorClasses:a,colorStyles:r,variantClasses:n}}const ht=["x-small","small","default","large","x-large"],Le=y({size:{type:[String,Number],default:"default"}},"size");function xe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:w();return pe(()=>{let n,a;return W(ht,e.size)?n=`${t}--size-${e.size}`:e.size&&(a={width:f(e.size),height:f(e.size)}),{sizeClasses:n,sizeStyles:a}})}const pt=y({color:String,start:Boolean,end:Boolean,icon:_e,...Le(),...J({tag:"i"}),...K()},"v-icon"),_t=T({name:"VIcon",props:pt(),setup(e,t){let{attrs:n,slots:a}=t,r;a.default&&(r=c(()=>{var m,g;const p=(m=a.default)==null?void 0:m.call(a);if(!!p)return(g=Ye(p).filter(_=>_.children&&typeof _.children=="string")[0])==null?void 0:g.children}));const{themeClasses:s}=G(e),{iconData:i}=qe(r||e),{sizeClasses:l}=xe(e),{textColorClasses:u,textColorStyles:d}=we(ye(e,"color"));return I(()=>o(i.value.component,{tag:e.tag,icon:i.value.icon,class:["v-icon","notranslate",s.value,l.value,u.value,{"v-icon--clickable":!!n.onClick,"v-icon--start":e.start,"v-icon--end":e.end}],style:[l.value?void 0:{fontSize:f(e.size),height:f(e.size),width:f(e.size)},d.value],role:n.onClick?"button":void 0,"aria-hidden":!n.onClick},null)),{}}});function yt(e){const t=$(),n=$(!1);if(U){const a=new IntersectionObserver(r=>{e==null||e(r,a),n.value=!!r.find(s=>s.isIntersecting)});me(()=>{a.disconnect()}),z(t,(r,s)=>{s&&(a.unobserve(s),n.value=!1),r&&a.observe(r)},{flush:"post"})}return{intersectionRef:t,isIntersecting:n}}const Y=Symbol("rippleStop"),bt=80;function le(e,t){e.style.transform=t,e.style.webkitTransform=t}function M(e,t){e.style.opacity=`calc(${t} * var(--v-theme-overlay-multiplier))`}function q(e){return e.constructor.name==="TouchEvent"}function Ee(e){return e.constructor.name==="KeyboardEvent"}const St=function(e,t){var n;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=0,s=0;if(!Ee(e)){const p=t.getBoundingClientRect(),_=q(e)?e.touches[e.touches.length-1]:e;r=_.clientX-p.left,s=_.clientY-p.top}let i=0,l=.3;(n=t._ripple)!=null&&n.circle?(l=.15,i=t.clientWidth/2,i=a.center?i:i+Math.sqrt((r-i)**2+(s-i)**2)/4):i=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const u=`${(t.clientWidth-i*2)/2}px`,d=`${(t.clientHeight-i*2)/2}px`,m=a.center?u:`${r-i}px`,g=a.center?d:`${s-i}px`;return{radius:i,scale:l,x:m,y:g,centerX:u,centerY:d}},D={show(e,t){var n;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!(t!=null&&(n=t._ripple)!=null&&n.enabled))return;const r=document.createElement("span"),s=document.createElement("span");r.appendChild(s),r.className="v-ripple__container",a.class&&(r.className+=` ${a.class}`);const{radius:i,scale:l,x:u,y:d,centerX:m,centerY:g}=St(e,t,a),p=`${i*2}px`;s.className="v-ripple__animation",s.style.width=p,s.style.height=p,t.appendChild(r);const _=window.getComputedStyle(t);_&&_.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),le(s,`translate(${u}, ${d}) scale3d(${l},${l},${l})`),M(s,0),s.dataset.activated=String(performance.now()),setTimeout(()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),le(s,`translate(${m}, ${g}) scale3d(1,1,1)`),M(s,.08)},0)},hide(e){var t;if(!(e!=null&&(t=e._ripple)!=null&&t.enabled))return;const n=e.getElementsByClassName("v-ripple__animation");if(n.length===0)return;const a=n[n.length-1];if(a.dataset.isHiding)return;a.dataset.isHiding="true";const r=performance.now()-Number(a.dataset.activated),s=Math.max(250-r,0);setTimeout(()=>{a.classList.remove("v-ripple__animation--in"),a.classList.add("v-ripple__animation--out"),M(a,0),setTimeout(()=>{e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),a.parentNode&&e.removeChild(a.parentNode)},300)},s)}};function Te(e){return typeof e>"u"||!!e}function B(e){const t={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[Y])){if(e[Y]=!0,q(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||Ee(e),n._ripple.class&&(t.class=n._ripple.class),q(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{D.show(e,n,t)},n._ripple.showTimer=window.setTimeout(()=>{var a;n!=null&&(a=n._ripple)!=null&&a.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},bt)}else D.show(e,n,t)}}function oe(e){e[Y]=!0}function b(e){const t=e.currentTarget;if(!(!t||!t._ripple)){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{b(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),D.hide(t)}}function Re(e){const t=e.currentTarget;!t||!t._ripple||(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let N=!1;function ze(e){!N&&(e.keyCode===ae.enter||e.keyCode===ae.space)&&(N=!0,B(e))}function Be(e){N=!1,b(e)}function Ne(e){N&&(N=!1,b(e))}function Pe(e,t,n){var i;const{value:a,modifiers:r}=t,s=Te(a);if(s||D.hide(e),e._ripple=(i=e._ripple)!=null?i:{},e._ripple.enabled=s,e._ripple.centered=r.center,e._ripple.circle=r.circle,Ue(a)&&a.class&&(e._ripple.class=a.class),s&&!n){if(r.stop){e.addEventListener("touchstart",oe,{passive:!0}),e.addEventListener("mousedown",oe);return}e.addEventListener("touchstart",B,{passive:!0}),e.addEventListener("touchend",b,{passive:!0}),e.addEventListener("touchmove",Re,{passive:!0}),e.addEventListener("touchcancel",b),e.addEventListener("mousedown",B),e.addEventListener("mouseup",b),e.addEventListener("mouseleave",b),e.addEventListener("keydown",ze),e.addEventListener("keyup",Be),e.addEventListener("blur",Ne),e.addEventListener("dragstart",b,{passive:!0})}else!s&&n&&Ie(e)}function Ie(e){e.removeEventListener("mousedown",B),e.removeEventListener("touchstart",B),e.removeEventListener("touchend",b),e.removeEventListener("touchmove",Re),e.removeEventListener("touchcancel",b),e.removeEventListener("mouseup",b),e.removeEventListener("mouseleave",b),e.removeEventListener("keydown",ze),e.removeEventListener("keyup",Be),e.removeEventListener("dragstart",b),e.removeEventListener("blur",Ne)}function Ct(e,t){Pe(e,t,!1)}function $t(e){delete e._ripple,Ie(e)}function kt(e,t){if(t.value===t.oldValue)return;const n=Te(t.oldValue);Pe(e,t,n)}const Dt={mounted:Ct,unmounted:$t,updated:kt};const wt=T({name:"VProgressLinear",props:{active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...$e(),...J(),...K()},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const a=Ke(e,"modelValue"),{isRtl:r}=be(),{themeClasses:s}=G(e),{textColorClasses:i,textColorStyles:l}=we(e,"color"),{backgroundColorClasses:u,backgroundColorStyles:d}=ie(c(()=>e.bgColor||e.color)),{backgroundColorClasses:m,backgroundColorStyles:g}=ie(e,"color"),{roundedClasses:p}=ke(e),{intersectionRef:_,isIntersecting:V}=yt(),L=c(()=>parseInt(e.max,10)),C=c(()=>parseInt(e.height,10)),x=c(()=>parseFloat(e.bufferValue)/L.value*100),R=c(()=>parseFloat(a.value)/L.value*100),E=c(()=>r.value!==e.reverse),F=c(()=>e.indeterminate?"fade-transition":"slide-x-transition"),O=c(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function j(k){if(!_.value)return;const{left:v,right:h,width:S}=_.value.getBoundingClientRect(),A=E.value?S-k.clientX+(h-S):k.clientX-v;a.value=Math.round(A/S*L.value)}return I(()=>o(e.tag,{ref:_,class:["v-progress-linear",{"v-progress-linear--active":e.active&&V.value,"v-progress-linear--reverse":E.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},p.value,s.value],style:{height:e.active?f(C.value):0,"--v-progress-linear-height":f(C.value)},role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:R.value,onClick:e.clickable&&j},{default:()=>[e.stream&&o("div",{key:"stream",class:["v-progress-linear__stream",i.value],style:{...l.value,[E.value?"left":"right"]:f(-C.value),borderTop:`${f(C.value/2)} dotted`,opacity:O.value,top:`calc(50% - ${f(C.value/4)})`,width:f(100-x.value,"%"),"--v-progress-linear-stream-to":f(C.value*(E.value?1:-1))}},null),o("div",{class:["v-progress-linear__background",u.value],style:[d.value,{opacity:O.value,width:f(e.stream?x.value:100,"%")}]},null),o(fe,{name:F.value},{default:()=>[e.indeterminate?o("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(k=>o("div",{key:k,class:["v-progress-linear__indeterminate",k,m.value],style:g.value},null))]):o("div",{class:["v-progress-linear__determinate",m.value],style:[g.value,{width:f(R.value,"%")}]},null)]}),n.default&&o("div",{class:"v-progress-linear__content"},[n.default({value:R.value,buffer:x.value})])]})),{}}}),Ft=y({loading:[Boolean,String]},"loader");function jt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:w();return{loaderClasses:c(()=>({[`${t}--loading`]:e.loading}))}}function Mt(e,t){var n;let{slots:a}=t;return o("div",{class:`${e.name}__loader`},[((n=a.default)==null?void 0:n.call(a,{color:e.color,isActive:e.active}))||o(wt,{active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const ue={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Xt=y({location:String},"location");function Yt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:a}=be();return{locationStyles:c(()=>{if(!e.location)return{};const{side:s,align:i}=Ze(e.location.split(" ").length>1?e.location:`${e.location} center`,a.value);function l(d){return n?n(d):0}const u={};return s!=="center"&&(t?u[ue[s]]=`calc(100% - ${l(s)}px)`:u[s]=0),i!=="center"?t?u[ue[i]]=`calc(100% - ${l(i)}px)`:u[i]=0:(s==="center"?u.top=u.left="50%":u[{top:"left",bottom:"left",left:"top",right:"top"}[s]]="50%",u.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[s]),u})}}const Lt=["static","relative","fixed","absolute","sticky"],qt=y({position:{type:String,validator:e=>Lt.includes(e)}},"position");function Ut(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:w();return{positionClasses:c(()=>e.position?`${t}--${e.position}`:void 0)}}function Kt(){var e,t;return(e=de("useRouter"))==null||(t=e.proxy)==null?void 0:t.$router}function Gt(e,t){const n=Ge("RouterLink"),a=c(()=>!!(e.href||e.to)),r=c(()=>(a==null?void 0:a.value)||se(t,"click")||se(e,"click"));if(typeof n=="string")return{isLink:a,isClickable:r,href:ye(e,"href")};const s=e.to?n.useLink(e):void 0;return{isLink:a,isClickable:r,route:s==null?void 0:s.route,navigate:s==null?void 0:s.navigate,isActive:s&&c(()=>{var i,l;return e.exact?(i=s.isExactActive)==null?void 0:i.value:(l=s.isActive)==null?void 0:l.value}),href:c(()=>e.to?s==null?void 0:s.route.value.href:e.href)}}const Jt=y({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let X=!1;function Qt(e,t){let n=!1,a,r;ve&&(ge(()=>{window.addEventListener("popstate",s),a=e==null?void 0:e.beforeEach((i,l,u)=>{X?n?t(u):u():setTimeout(()=>n?t(u):u()),X=!0}),r=e==null?void 0:e.afterEach(()=>{X=!1})}),Je(()=>{var i,l;window.removeEventListener("popstate",s),(i=a)==null||i(),(l=r)==null||l()}));function s(i){var l;(l=i.state)!=null&&l.replaced||(n=!0,setTimeout(()=>n=!1))}}const xt=y({start:Boolean,end:Boolean,icon:_e,image:String,...ct(),...$e(),...Le(),...J(),...K(),...ft({variant:"flat"})},"v-avatar"),Zt=T({name:"VAvatar",props:xt(),setup(e,t){let{slots:n}=t;const{themeClasses:a}=G(e),{colorClasses:r,colorStyles:s,variantClasses:i}=gt(e),{densityClasses:l}=dt(e),{roundedClasses:u}=ke(e),{sizeClasses:d,sizeStyles:m}=xe(e);return I(()=>{var g;return o(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,r.value,l.value,u.value,d.value,i.value],style:[s.value,m.value]},{default:()=>[e.image?o(ot,{key:"image",src:e.image,alt:""},null):e.icon?o(_t,{key:"icon",icon:e.icon},null):(g=n.default)==null?void 0:g.call(n),mt(!1,"v-avatar")]})}),{}}});export{gt as A,tt as B,jt as C,Ut as D,Gt as E,mt as F,Nt as G,Zt as H,Ze as I,Tt as J,Rt as K,Mt as L,H as M,zt as N,Bt as O,Kt as P,Qt as Q,Dt as R,it as S,wt as T,re as U,Vt as V,It as _,Ot as a,Ht as b,$e as c,ie as d,At as e,Wt as f,ke as g,ot as h,Xt as i,lt as j,we as k,Yt as l,J as m,_t as n,Pt as o,Jt as p,ct as q,dt as r,ft as s,Le as t,I as u,xe as v,yt as w,et as x,Ft as y,qt as z};
