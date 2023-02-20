import{u as b}from"./AdminProducts.7eeb5715.js";import{ax as F,x as V,y as N,z as t,c as e,B as f,aO as U,g as D,u as j,r as L,o as O,q as E,h as C,Q as R,D as o,aw as z,E as S,C as x,aq as B,ay as q,U as M}from"./index.2913e436.js";import{_ as $,u as Q,V as W,n as w}from"./VAvatar.88ab4967.js";import{V as y}from"./VTextField.4e8b55fa.js";import{V as v}from"./VBtn.5cc6e2e8.js";import{V as G}from"./VForm.ea83e6d7.js";import{V as I,b as H,a as J,d as K}from"./VGrid.affd163e.js";import{V as X}from"./VContainer.1bbe47cc.js";import{V as g}from"./VRow.0a665a79.js";import{V as h}from"./VCol.1d429099.js";import{V as Y}from"./VSpacer.bf7ed0da.js";import{m as Z,V as ee,u as te,f as oe,b as ae}from"./VOverlay.155a74ae.js";import{f as le}from"./forwardRefs.54bb1675.js";import{V as re}from"./VMain.7bf2a81f.js";import{V as se}from"./VLayout.a808fe2a.js";import"./index.7ab129c2.js";import"./delay.bab16741.js";import"./lazy.cabcc768.js";import"./layout.ece088cc.js";import"./ssrBoot.5ccb305f.js";const ne={data(){return{todo:""}},methods:{addProductAndClear(a){a.length!==0&&(this.addNewProduct(a),todo.value="")},...F(b,["addNewProduct"])}};function de(a,l,p,c,d,n){return V(),N(G,{onSubmit:l[1]||(l[1]=U(s=>n.addProductAndClear(d.todo),["prevent"]))},{default:t(()=>[e(y,{modelValue:d.todo,"onUpdate:modelValue":l[0]||(l[0]=s=>d.todo=s),type:"text"},null,8,["modelValue"]),e(v,{type:"submit",class:"primary"},{default:t(()=>[f("Add")]),_:1})]),_:1})}const ue=$(ne,[["render",de]]);const ie=D()({name:"VDialog",props:{fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...Z({origin:"center center",scrollStrategy:"block",transition:{component:ee},zIndex:2400})},emits:{"update:modelValue":a=>!0},setup(a,l){let{slots:p}=l;const c=j(a,"modelValue"),{scopeId:d}=te(),n=L();function s(u){var r,i;const _=u.relatedTarget,m=u.target;if(_!==m&&(r=n.value)!=null&&r.contentEl&&(i=n.value)!=null&&i.globalTop&&![document,n.value.contentEl].includes(m)&&!n.value.contentEl.contains(m)){const P=[...n.value.contentEl.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])')].filter(A=>!A.hasAttribute("disabled")&&!A.matches('[tabindex="-1"]'));if(!P.length)return;const k=P[0],T=P[P.length-1];_===k?T.focus():k.focus()}}return O&&E(()=>c.value&&a.retainFocus,u=>{u?document.addEventListener("focusin",s):document.removeEventListener("focusin",s)},{immediate:!0}),E(c,async u=>{if(await R(),u){var r;(r=n.value.contentEl)==null||r.focus({preventScroll:!0})}else{var i;(i=n.value.activatorEl)==null||i.focus({preventScroll:!0})}}),Q(()=>{const[u]=oe(a);return e(ae,C({ref:n,class:["v-dialog",{"v-dialog--fullscreen":a.fullscreen,"v-dialog--scrollable":a.scrollable}]},u,{modelValue:c.value,"onUpdate:modelValue":r=>c.value=r,"aria-role":"dialog","aria-modal":"true",activatorProps:C({"aria-haspopup":"dialog","aria-expanded":String(c.value)},a.activatorProps)},d),{activator:p.activator,default:function(){for(var r,i=arguments.length,_=new Array(i),m=0;m<i;m++)_[m]=arguments[m];return e(W,{root:!0},{default:()=>[(r=p.default)==null?void 0:r.call(p,..._)]})}})}),le({},n)}}),ce={data:()=>({dialog:!1})},me=o("span",{class:"text-h5"},"Product Information",-1),fe=o("h3",{class:"py-2 px-2 text-center"},"Product List",-1),pe={class:"d-inline"},ge=o("h5",null,"Product Name",-1),ve=o("h5",null,"Category",-1);function _e(a,l,p,c,d,n){return V(),N(g,{justify:"center"},{default:t(()=>[e(ie,{modelValue:a.dialog,"onUpdate:modelValue":l[4]||(l[4]=s=>a.dialog=s),persistent:""},{activator:t(({props:s})=>[e(v,C(s,{variant:"text"}),{default:t(()=>[e(w,{size:"15",color:"bg-red",class:"text-green-darken-2 ma-2"},{default:t(()=>[f(" mdi-pencil")]),_:1})]),_:2},1040)]),default:t(()=>[e(I,null,{default:t(()=>[e(H,null,{default:t(()=>[me]),_:1}),e(J,null,{default:t(()=>[e(X,null,{default:t(()=>[e(g,null,{default:t(()=>[e(h,{cols:"12",sm:"6",md:"4"},{default:t(()=>[o("div",null,[fe,o("div",pe,[o("div",null,[ge,e(y,{type:"text",modelValue:a.ProductName,"onUpdate:modelValue":l[0]||(l[0]=s=>a.ProductName=s)},null,8,["modelValue"])]),o("div",null,[ve,e(y,{type:"text",modelValue:a.Category,"onUpdate:modelValue":l[1]||(l[1]=s=>a.Category=s)},null,8,["modelValue"])])])])]),_:1})]),_:1})]),_:1})]),_:1}),e(K,null,{default:t(()=>[e(Y),e(v,{color:"blue-darken-1",variant:"text",onClick:l[2]||(l[2]=s=>a.dialog=!1)},{default:t(()=>[f(" Close ")]),_:1}),e(v,{color:"blue-darken-1",variant:"text",onClick:l[3]||(l[3]=s=>a.dialog=!1)},{default:t(()=>[f(" Save ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}const Ve=$(ce,[["render",_e]]);const ye={data(){return{ProductName:"",Category:""}},components:{AddNewProductForm:ue,AdminEditProduct:Ve},computed:{...z(b,["products"," ProductName"," Category","getProductName","getProducts","getProductsCount"])},created(){this.fetchProducts()},methods:{trucate(a,l=50){return a.length<=l?a:a.substring(0,l)+"..."},AddNewProduct(){const l={id:this.products.length+1,title:this.ProductName,category:this.Category};this.products.push(l),this.ProductName="",this.Category=""},...F(b,["fetchProducts","removeProduct"])}},Pe=o("h1",{class:"page-title"},"Products",-1),xe=o("h3",{class:"py-2 px-2 text-center"},"Product List",-1),he={class:"d-flex justify-center align-center"},be={class:"w-25"},Ce=o("h5",{class:"px-3"},"Product Name",-1),we={class:"w-25"},Ne=o("h5",{class:"px-3"},"Category",-1),$e={class:"pa-2"},ke={class:"w-75 ma-auto pt-8 pb-8"},Ae=o("thead",{align:"center"},[o("tr",null,[o("th",{class:"text-center text-green bg-grey-darken-3"}," Number "),o("th",{class:"text-center text-green bg-grey-darken-3"}," ProductName "),o("th",{class:"text-center text-green bg-grey-darken-3"}," Category "),o("th",{class:"text-center text-green bg-grey-darken-3"}," Action ")])],-1),Ee={align:"left",class:"bg-white"},Se={class:"text-center text-green bg-grey-darken-3"},Be={class:"text-center w-25"},Fe={class:"text-center w-25"},Ie={class:"d-flex jistify-row"};function Te(a,l,p,c,d,n){const s=S("AdminEditProduct"),u=S("v-simple-table");return V(),N(I,null,{default:t(()=>[e(se,null,{default:t(()=>[e(re,{style:{"background-color":"#CFCFCF"}},{default:t(()=>[e(g,{"no-gutters":"",class:"d-flex justify-space-between mt-10 mb-6 pa-4"},{default:t(()=>[Pe]),_:1}),e(g,{justify:"center"},{default:t(()=>[e(h,{cols:"12",align:"left"},{default:t(()=>[o("div",null,[xe,o("div",he,[o("div",be,[Ce,e(y,{type:"text",modelValue:d.ProductName,"onUpdate:modelValue":l[0]||(l[0]=r=>d.ProductName=r),class:"px-3 py-3"},null,8,["modelValue"])]),o("div",we,[Ne,e(y,{type:"text",modelValue:d.Category,"onUpdate:modelValue":l[1]||(l[1]=r=>d.Category=r),class:"px-3 py-3"},null,8,["modelValue"])]),o("div",null,[e(v,{color:"primary",onClick:l[2]||(l[2]=r=>n.AddNewProduct()),class:"px-auto"},{default:t(()=>[e(w,{dark:""},{default:t(()=>[f("mdi-plus")]),_:1}),f("AddProduct ")]),_:1})])])])]),_:1})]),_:1}),e(g,null,{default:t(()=>[e(h,null,{default:t(()=>[o("p",$e,"ProductsCount is : "+x(a.getProductsCount),1)]),_:1})]),_:1}),o("section",ke,[e(g,{justify:"center"},{default:t(()=>[e(h,{align:"center"},{default:t(()=>[e(u,{class:"table"},{default:t(()=>[Ae,o("tbody",Ee,[(V(!0),B(M,null,q(a.products,r=>(V(),B("tr",{key:r.id},[o("td",Se,x(r.id),1),o("td",null,x(r.title),1),o("td",Be,x(r.category),1),o("td",Fe,[o("div",Ie,[e(v,{variant:"text"},{default:t(()=>[e(w,{size:"15",class:"text-red-darken-2 ma-2",onClick:i=>a.removeProduct(r.id)},{default:t(()=>[f("mdi-delete")]),_:2},1032,["onClick"])]),_:2},1024),e(s,{class:"pa-3"})])])]))),128))])]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1})]),_:1})}const ot=$(ye,[["render",Te]]);export{ot as default};
