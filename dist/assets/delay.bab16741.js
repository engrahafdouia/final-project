import{p as u,o as y}from"./index.2913e436.js";function D(e){for(;e;){if(s(e))return e;e=e.parentElement}return document.scrollingElement}function d(e,o){const n=[];if(o&&e&&!o.contains(e))return n;for(;e&&(s(e)&&n.push(e),e!==o);)e=e.parentElement;return n}function s(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const o=window.getComputedStyle(e);return o.overflowY==="scroll"||o.overflowY==="auto"&&e.scrollHeight>e.clientHeight}const f=u({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function p(e,o){const n={},t=r=>()=>{if(!y)return Promise.resolve(!0);const a=r==="openDelay";return n.closeDelay&&window.clearTimeout(n.closeDelay),delete n.closeDelay,n.openDelay&&window.clearTimeout(n.openDelay),delete n.openDelay,new Promise(i=>{var l;const c=parseInt((l=e[r])!=null?l:0,10);n[r]=window.setTimeout(()=>{o==null||o(a),i(a)},c)})};return{runCloseDelay:t("closeDelay"),runOpenDelay:t("openDelay")}}export{D as a,d as g,s as h,f as m,p as u};