import{G as F,R as ce,a as de,q as ve,x as fe,b as ge,c as me,p as pe,m as ye,s as Se,E as he,e as ke,A as we,r as be,B as Ae,f as Pe,g as Ve,u as Ce,F as Ie,V as G,H as R,n as T}from"./VAvatar.88ab4967.js";import{a7 as P,r as y,a8 as V,p as Me,u as x,b as f,L as H,K as Oe,a6 as Le,g as _e,I as E,az as j,m as Be,q as $e,a as De,w as Ne,R as Ge,c as m}from"./index.2913e436.js";const M=Symbol.for("vuetify:list");function Je(){const e=P(M,{hasPrepend:y(!1),updateHasPrepend:()=>null}),r={hasPrepend:y(!1),updateHasPrepend:a=>{a&&(r.hasPrepend.value=a)}};return V(M,r),e}function Re(){return P(M,null)}const Te={open:e=>{let{id:r,value:a,opened:n,parents:l}=e;if(a){const t=new Set;t.add(r);let s=l.get(r);for(;s!=null;)t.add(s),s=l.get(s);return t}else return n.delete(r),n},select:()=>null},K={open:e=>{let{id:r,value:a,opened:n,parents:l}=e;if(a){let t=l.get(r);for(n.add(r);t!=null&&t!==r;)n.add(t),t=l.get(t);return n}else n.delete(r);return n},select:()=>null},xe={open:K.open,select:e=>{let{id:r,value:a,opened:n,parents:l}=e;if(!a)return n;const t=[];let s=l.get(r);for(;s!=null;)t.push(s),s=l.get(s);return new Set(t)}},O=e=>{const r={select:a=>{let{id:n,value:l,selected:t}=a;if(e&&!l){const s=Array.from(t.entries()).reduce((v,p)=>{let[S,g]=p;return g==="on"?[...v,S]:v},[]);if(s.length===1&&s[0]===n)return t}return t.set(n,l?"on":"off"),t},in:(a,n,l)=>{let t=new Map;for(const s of a||[])t=r.select({id:s,value:!0,selected:new Map(t),children:n,parents:l});return t},out:a=>{const n=[];for(const[l,t]of a.entries())t==="on"&&n.push(l);return n}};return r},U=e=>{const r=O(e);return{select:n=>{let{selected:l,id:t,...s}=n;const v=l.has(t)?new Map([[t,l.get(t)]]):new Map;return r.select({...s,id:t,selected:v})},in:(n,l,t)=>{let s=new Map;return n!=null&&n.length&&(s=r.in(n.slice(0,1),l,t)),s},out:(n,l,t)=>r.out(n,l,t)}},Ee=e=>{const r=O(e);return{select:n=>{let{id:l,selected:t,children:s,...v}=n;return s.has(l)?t:r.select({id:l,selected:t,children:s,...v})},in:r.in,out:r.out}},je=e=>{const r=U(e);return{select:n=>{let{id:l,selected:t,children:s,...v}=n;return s.has(l)?t:r.select({id:l,selected:t,children:s,...v})},in:r.in,out:r.out}},Fe=e=>{const r={select:a=>{let{id:n,value:l,selected:t,children:s,parents:v}=a;const p=new Map(t),S=[n];for(;S.length;){const i=S.shift();t.set(i,l?"on":"off"),s.has(i)&&S.push(...s.get(i))}let g=v.get(n);for(;g;){const i=s.get(g),u=i.every(d=>t.get(d)==="on"),c=i.every(d=>!t.has(d)||t.get(d)==="off");t.set(g,u?"on":c?"off":"indeterminate"),g=v.get(g)}return e&&!l&&Array.from(t.entries()).reduce((u,c)=>{let[d,h]=c;return h==="on"?[...u,d]:u},[]).length===0?p:t},in:(a,n,l)=>{let t=new Map;for(const s of a||[])t=r.select({id:s,value:!0,selected:new Map(t),children:n,parents:l});return t},out:(a,n)=>{const l=[];for(const[t,s]of a.entries())s==="on"&&!n.has(t)&&l.push(t);return l}};return r},A=Symbol.for("vuetify:nested"),q={id:y(),root:{register:()=>null,unregister:()=>null,parents:y(new Map),children:y(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:y(new Set),selected:y(new Map),selectedValues:y([])}},Qe=Me({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),We=e=>{let r=!1;const a=y(new Map),n=y(new Map),l=x(e,"opened",e.opened,i=>new Set(i),i=>[...i.values()]),t=f(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return je(e.mandatory);case"leaf":return Ee(e.mandatory);case"independent":return O(e.mandatory);case"single-independent":return U(e.mandatory);case"classic":default:return Fe(e.mandatory)}}),s=f(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return xe;case"single":return Te;case"multiple":default:return K}}),v=x(e,"selected",e.selected,i=>t.value.in(i,a.value,n.value),i=>t.value.out(i,a.value,n.value));H(()=>{r=!0});function p(i){const u=[];let c=i;for(;c!=null;)u.unshift(c),c=n.value.get(c);return u}const S=Oe("nested"),g={id:y(),root:{opened:l,selected:v,selectedValues:f(()=>{const i=[];for(const[u,c]of v.value.entries())c==="on"&&i.push(u);return i}),register:(i,u,c)=>{u&&i!==u&&n.value.set(i,u),c&&a.value.set(i,[]),u!=null&&a.value.set(u,[...a.value.get(u)||[],i])},unregister:i=>{var c;if(r)return;a.value.delete(i);const u=n.value.get(i);if(u){const d=(c=a.value.get(u))!=null?c:[];a.value.set(u,d.filter(h=>h!==i))}n.value.delete(i),l.value.delete(i)},open:(i,u,c)=>{S.emit("click:open",{id:i,value:u,path:p(i),event:c});const d=s.value.open({id:i,value:u,opened:new Set(l.value),children:a.value,parents:n.value,event:c});d&&(l.value=d)},openOnSelect:(i,u,c)=>{const d=s.value.select({id:i,value:u,selected:new Map(v.value),opened:new Set(l.value),children:a.value,parents:n.value,event:c});d&&(l.value=d)},select:(i,u,c)=>{S.emit("click:select",{id:i,value:u,path:p(i),event:c});const d=t.value.select({id:i,value:u,selected:new Map(v.value),children:a.value,parents:n.value,event:c});d&&(v.value=d),g.root.openOnSelect(i,u,c)},children:a,parents:n}};return V(A,g),g.root},He=(e,r)=>{const a=P(A,q),n=f(()=>{var t;return(t=e.value)!=null?t:Symbol(Le())}),l={...a,id:n,open:(t,s)=>a.root.open(n.value,t,s),openOnSelect:(t,s)=>a.root.openOnSelect(n.value,t,s),isOpen:f(()=>a.root.opened.value.has(n.value)),parent:f(()=>a.root.parents.value.get(n.value)),select:(t,s)=>a.root.select(n.value,t,s),isSelected:f(()=>a.root.selected.value.get(n.value)==="on"),isIndeterminate:f(()=>a.root.selected.value.get(n.value)==="indeterminate"),isLeaf:f(()=>!a.root.children.value.get(n.value)),isGroupActivator:a.isGroupActivator};return!a.isGroupActivator&&a.root.register(n.value,a.id.value,r),H(()=>{!a.isGroupActivator&&a.root.unregister(n.value)}),r&&V(A,l),l},Xe=()=>{const e=P(A,q);V(A,{...e,isGroupActivator:!0})};const Ke=F("v-list-item-subtitle"),Ue=F("v-list-item-title"),Ye=_e()({name:"VListItem",directives:{Ripple:ce},props:{active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:E,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:E,subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,onClick:j,onClickOnce:j,...de(),...ve(),...fe(),...ge(),...me(),...pe(),...ye(),...Be(),...Se({variant:"text"})},emits:{click:e=>!0},setup(e,r){let{attrs:a,slots:n,emit:l}=r;const t=he(e,a),s=f(()=>{var o;return(o=e.value)!=null?o:t.href.value}),{select:v,isSelected:p,isIndeterminate:S,isGroupActivator:g,root:i,parent:u,openOnSelect:c}=He(s,!1),d=Re(),h=f(()=>{var o;return e.active!==!1&&(e.active||((o=t.isActive)==null?void 0:o.value)||p.value)}),L=f(()=>e.link!==!1&&t.isLink.value),k=f(()=>!e.disabled&&e.link!==!1&&(e.link||t.isClickable.value||e.value!=null&&!!d)),z=f(()=>e.rounded||e.nav),J=f(()=>{var o;return{color:h.value&&(o=e.activeColor)!=null?o:e.color,variant:e.variant}});$e(()=>{var o;return(o=t.isActive)==null?void 0:o.value},o=>{o&&u.value!=null&&i.open(u.value,!0),o&&c(o)},{immediate:!0});const{themeClasses:Q}=De(e),{borderClasses:W}=ke(e),{colorClasses:X,colorStyles:Y,variantClasses:Z}=we(J),{densityClasses:ee}=be(e),{dimensionStyles:te}=Ae(e),{elevationClasses:ne}=Pe(e),{roundedClasses:ae}=Ve(z),le=f(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),C=f(()=>({isActive:h.value,select:v,isSelected:p.value,isIndeterminate:S.value}));function _(o){var w;l("click",o),!(g||!k.value)&&((w=t.navigate)==null||w.call(t,o),e.value!=null&&v(!p.value,o))}function se(o){(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),_(o))}return Ce(()=>{var o,w,B,$,D;const ie=L.value?"a":e.tag,N=!d||p.value||h.value,re=n.title||e.title,ue=n.subtitle||e.subtitle,oe=!!(n.append||e.appendAvatar||e.appendIcon),I=!!(n.prepend||e.prependAvatar||e.prependIcon);return d==null||d.updateHasPrepend(I),Ne(m(ie,{class:["v-list-item",{"v-list-item--active":h.value,"v-list-item--disabled":e.disabled,"v-list-item--link":k.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!I&&(d==null?void 0:d.hasPrepend.value),[`${e.activeClass}`]:e.activeClass&&h.value},Q.value,W.value,N?X.value:void 0,ee.value,ne.value,le.value,ae.value,Z.value],style:[N?Y.value:void 0,te.value],href:t.href.value,tabindex:k.value?0:void 0,onClick:_,onKeydown:k.value&&!L.value&&se},{default:()=>[Ie(k.value||h.value,"v-list-item"),I&&m(G,{key:"prepend",defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>[m("div",{class:"v-list-item__prepend"},[e.prependAvatar&&m(R,{key:"prepend-avatar"},null),e.prependIcon&&m(T,{key:"prepend-icon"},null),(o=n.prepend)==null?void 0:o.call(n,C.value)])]}),m("div",{class:"v-list-item__content","data-no-activator":""},[re&&m(Ue,{key:"title"},{default:()=>{var b;return[(b=(w=n.title)==null?void 0:w.call(n,{title:e.title}))!=null?b:e.title]}}),ue&&m(Ke,{key:"subtitle"},{default:()=>{var b;return[(b=(B=n.subtitle)==null?void 0:B.call(n,{subtitle:e.subtitle}))!=null?b:e.subtitle]}}),($=n.default)==null?void 0:$.call(n,C.value)]),oe&&m(G,{key:"append",defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>[m("div",{class:"v-list-item__append"},[(D=n.append)==null?void 0:D.call(n,C.value),e.appendIcon&&m(T,{key:"append-icon"},null),e.appendAvatar&&m(R,{key:"append-avatar"},null)])]})]}),[[Ge("ripple"),k.value]])}),{}}});export{Ye as V,He as a,Re as b,Je as c,We as d,Ue as e,Qe as m,Xe as u};