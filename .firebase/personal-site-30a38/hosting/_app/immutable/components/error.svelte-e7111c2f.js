import{S as C,i as O,d as q,s as R,n as h,x as g,c as z,p as E,q as $,y as w,l as d,f as B,w as S,g as m,K as x,z as y,F as j,L as D,M as F,v as H}from"../chunks/index-6a5361fb.js";import{s as K}from"../chunks/singletons-f8f4b482.js";const L=()=>{const s=K;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},_={subscribe(s){return L().page.subscribe(s)}},k="node_modules/@sveltejs/kit/src/runtime/components/error.svelte";function f(s){var b;let e,i=s[0].status+"",o,l,n,c=((b=s[0].error)==null?void 0:b.message)+"",a;const v={c:function(){e=h("h1"),o=g(i),l=z(),n=h("p"),a=g(c),this.h()},l:function(t){e=E(t,"H1",{});var r=$(e);o=w(r,i),r.forEach(d),l=B(t),n=E(t,"P",{});var p=$(n);a=w(p,c),p.forEach(d),this.h()},h:function(){S(e,k,4,0,57),S(n,k,5,0,81)},m:function(t,r){m(t,e,r),x(e,o),m(t,l,r),m(t,n,r),x(n,a)},p:function(t,[r]){var p;r&1&&i!==(i=t[0].status+"")&&y(o,i),r&1&&c!==(c=((p=t[0].error)==null?void 0:p.message)+"")&&y(a,c)},i:j,o:j,d:function(t){t&&d(e),t&&d(l),t&&d(n)}};return q("SvelteRegisterBlock",{block:v,id:f.name,type:"component",source:"",ctx:s}),v}function M(s,e,i){let o;D(_,"page"),F(s,_,a=>i(0,o=a));let{$$slots:l={},$$scope:n}=e;H("Error",l,[]);const c=[];return Object.keys(e).forEach(a=>{!~c.indexOf(a)&&a.slice(0,2)!=="$$"&&a!=="slot"&&console.warn(`<Error> was created with unknown prop '${a}'`)}),s.$capture_state=()=>({page:_,$page:o}),[o]}let A=class extends C{constructor(e){super(e),O(this,e,M,f,R,{}),q("SvelteRegisterComponent",{component:this,tagName:"Error",options:e,id:f.name})}};export{A as default};
