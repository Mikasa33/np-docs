import{U as o,ay as p,az as u,aA as l,aB as c,aC as f,aD as d,aE as m,aF as h,aG as A,aH as g,d as y,u as P,y as v,x as C,aI as w,aJ as R,aK as E,ac as b}from"./chunks/framework.BHvXDMMV.js";import{R as S}from"./chunks/theme.OWVDUQjl.js";function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=i(S),T=y({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=P();return v(()=>{C(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&w(),R(),E(),s.setup&&s.setup(),()=>b(s.Layout)}});async function _(){globalThis.__VITEPRESS__=!0;const e=x(),a=D();a.provide(u,e);const t=l(e.route);return a.provide(c,t),a.component("Content",f),a.component("ClientOnly",d),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:m}),{app:a,router:e,data:t}}function D(){return h(T)}function x(){let e=o,a;return A(t=>{let n=g(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=import(n)),o&&(e=!1),r},s.NotFound)}o&&_().then(({app:e,router:a,data:t})=>{a.go().then(()=>{p(a.route,t.site),e.mount("#app")})});export{_ as createApp};
