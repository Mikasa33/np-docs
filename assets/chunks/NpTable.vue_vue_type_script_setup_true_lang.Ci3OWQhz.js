import{d as J,S as ve,e as W,L as V,P as q,Q as R,a8 as L,Y as w,m as ne,l as se,ap as re,f as ce,aq as de,j as fe,ar as oe,as as $e,r as ue,at as he,u as te,M as ie,a6 as ge,F as ye,an as Me,ao as _e,aa as we,N as Se,al as De,R as ke}from"./framework.g0kYGLAL.js";import{g as Ne,h as be,i as Pe,j as Ce,k as Oe,l as xe,z as Fe,m as Te,n as Ye,o as Re,p as Ke,q as Ve,r as He,c as je,s as ze,N as Le,e as Ue,a as Ae,t as Ie,u as We,d as Be,v as qe,w as Je,x as Ee,y as Ge,A as Ze,C as Qe,D as Xe,E as pe,F as et,G as tt,H as nt,b as at,I as rt,J as st}from"./theme.D3-zSUn0.js";const ot=J({__name:"ConfigProvider",setup(S){const{isDark:_}=ve(),u=W(()=>_.value?Ne:null);return(c,K)=>(V(),q(w(Ye),{locale:w(Fe),"date-locale":w(Te),theme:u.value},{default:R(()=>[L(w(be),null,{default:R(()=>[L(w(Pe),null,{default:R(()=>[L(w(Ce),null,{default:R(()=>[L(w(Oe),null,{default:R(()=>[L(w(xe),null,{default:R(()=>[ne(c.$slots,"default")]),_:3})]),_:3})]),_:3})]),_:3})]),_:3})]),_:3},8,["locale","date-locale","theme"]))}}),ut=J({__name:"ComponentDemo",setup(S){return(_,u)=>(V(),q(ot,null,{default:R(()=>[L(w(Re),null,{default:R(()=>[ne(_.$slots,"default")]),_:3})]),_:3}))}});function vt(S){return J({render(){return se(ut,()=>se(S))}})}const it={NAutoComplete:Ke,NCascader:Ve,NColorPicker:He,NDatePicker:je,NDynamicInput:ze,NInput:Le,NInputNumber:Ue,NSelect:Ae,NSlider:Ie,NSwitch:We,NTimePicker:Be,NTreeSelect:qe};function lt(S,_,u){const c=W(()=>{const f=S.defaultValues??{},O={};for(const D of re(u))O[D.path]=D.defaultValue??f[D.path]??null;return O});function K(){for(const f of re(u))_.value[f.path]||(_.value[f.path]=c.value[f.path]??null)}function x(){for(const f of re(u))_.value[f.path]=c.value[f.path]??null}return ce(()=>{K()}),{defaultValues:c,model:_,resetModel:x}}const $t=J({__name:"NpForm",props:de({defaultValues:{},giSpan:{default:24},gridProps:{},items:{default:()=>[]},labelWidth:{},labelAlign:{},labelPlacement:{default:"left"},model:{},rules:{}},{model:{default:fe({})},modelModifiers:{}}),emits:["update:model"],setup(S,{expose:_}){const u=S,c=oe(S,"model"),K=$e(u.items,l=>!Je(l.path)&&!Ee(l.path)),{resetModel:x}=lt(u,c,K),f=ue(),O=he(u,"defaultValues","giSpan","gridProps","items","model");function D(l){return{span:l.span??u.giSpan,...Xe(l,"component","componentProps")}}function F(l){return pe(l.component)?it[l.component]:l.component}function H(){x(),j()}function y(l,U){var $;return($=f.value)==null?void 0:$.validate(l,U)}function j(){var l;return(l=f.value)==null?void 0:l.restoreValidation()}function T(l){return l?c.value[l]:c.value}return _({getModel:T,reset:H,restoreValidation:j,validate:y}),(l,U)=>(V(),q(w(Ze),te({ref_key:"formRef",ref:f},w(O),{model:c.value}),{default:R(()=>[L(w(Ge),Me(_e(l.gridProps)),{default:R(()=>[(V(!0),ie(ye,null,ge(w(K),$=>(V(),q(w(Qe),te({key:$.path,ref_for:!0},D($)),{default:R(()=>[l.$slots[`item-${$.path}`]?ne(l.$slots,`item-${$.path}`,{key:0,props:$,path:$.path,model:c.value}):(V(),q(we(F($)),te({key:1,value:c.value[$.path],"onUpdate:value":E=>c.value[$.path]=E,ref_for:!0},$.componentProps),null,16,["value","onUpdate:value"]))]),_:2},1040))),128))]),_:3},16)]),_:3},16,["model"]))}});var me={exports:{}};(function(S,_){(function(u,c){S.exports=c()})(et,function(){var u=1e3,c=6e4,K=36e5,x="millisecond",f="second",O="minute",D="hour",F="day",H="week",y="month",j="quarter",T="year",l="date",U="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,E=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,ae={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(r){var n=["th","st","nd","rd"],e=r%100;return"["+r+(n[(e-20)%10]||n[e]||n[0])+"]"}},G=function(r,n,e){var a=String(r);return!a||a.length>=n?r:""+Array(n+1-a.length).join(e)+r},m={s:G,z:function(r){var n=-r.utcOffset(),e=Math.abs(n),a=Math.floor(e/60),t=e%60;return(n<=0?"+":"-")+G(a,2,"0")+":"+G(t,2,"0")},m:function r(n,e){if(n.date()<e.date())return-r(e,n);var a=12*(e.year()-n.year())+(e.month()-n.month()),t=n.clone().add(a,y),s=e-t<0,o=n.clone().add(a+(s?-1:1),y);return+(-(a+(e-t)/(s?t-o:o-t))||0)},a:function(r){return r<0?Math.ceil(r)||0:Math.floor(r)},p:function(r){return{M:y,y:T,w:H,d:F,D:l,h:D,m:O,s:f,ms:x,Q:j}[r]||String(r||"").toLowerCase().replace(/s$/,"")},u:function(r){return r===void 0}},h="en",p={};p[h]=ae;var N="$isDayjsObject",b=function(r){return r instanceof X||!(!r||!r[N])},P=function r(n,e,a){var t;if(!n)return h;if(typeof n=="string"){var s=n.toLowerCase();p[s]&&(t=s),e&&(p[s]=e,t=s);var o=n.split("-");if(!t&&o.length>1)return r(o[0])}else{var d=n.name;p[d]=n,t=d}return!a&&t&&(h=t),t||!a&&h},g=function(r,n){if(b(r))return r.clone();var e=typeof n=="object"?n:{};return e.date=r,e.args=arguments,new X(e)},i=m;i.l=P,i.i=b,i.w=function(r,n){return g(r,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var X=function(){function r(e){this.$L=P(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[N]=!0}var n=r.prototype;return n.parse=function(e){this.$d=function(a){var t=a.date,s=a.utc;if(t===null)return new Date(NaN);if(i.u(t))return new Date;if(t instanceof Date)return new Date(t);if(typeof t=="string"&&!/Z$/i.test(t)){var o=t.match($);if(o){var d=o[2]-1||0,v=(o[7]||"0").substring(0,3);return s?new Date(Date.UTC(o[1],d,o[3]||1,o[4]||0,o[5]||0,o[6]||0,v)):new Date(o[1],d,o[3]||1,o[4]||0,o[5]||0,o[6]||0,v)}}return new Date(t)}(e),this.init()},n.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},n.$utils=function(){return i},n.isValid=function(){return this.$d.toString()!==U},n.isSame=function(e,a){var t=g(e);return this.startOf(a)<=t&&t<=this.endOf(a)},n.isAfter=function(e,a){return g(e)<this.startOf(a)},n.isBefore=function(e,a){return this.endOf(a)<g(e)},n.$g=function(e,a,t){return i.u(e)?this[a]:this.set(t,e)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(e,a){var t=this,s=!!i.u(a)||a,o=i.p(e),d=function(I,C){var z=i.w(t.$u?Date.UTC(t.$y,C,I):new Date(t.$y,C,I),t);return s?z:z.endOf(F)},v=function(I,C){return i.w(t.toDate()[I].apply(t.toDate("s"),(s?[0,0,0,0]:[23,59,59,999]).slice(C)),t)},M=this.$W,k=this.$M,Y=this.$D,B="set"+(this.$u?"UTC":"");switch(o){case T:return s?d(1,0):d(31,11);case y:return s?d(1,k):d(0,k+1);case H:var A=this.$locale().weekStart||0,Z=(M<A?M+7:M)-A;return d(s?Y-Z:Y+(6-Z),k);case F:case l:return v(B+"Hours",0);case D:return v(B+"Minutes",1);case O:return v(B+"Seconds",2);case f:return v(B+"Milliseconds",3);default:return this.clone()}},n.endOf=function(e){return this.startOf(e,!1)},n.$set=function(e,a){var t,s=i.p(e),o="set"+(this.$u?"UTC":""),d=(t={},t[F]=o+"Date",t[l]=o+"Date",t[y]=o+"Month",t[T]=o+"FullYear",t[D]=o+"Hours",t[O]=o+"Minutes",t[f]=o+"Seconds",t[x]=o+"Milliseconds",t)[s],v=s===F?this.$D+(a-this.$W):a;if(s===y||s===T){var M=this.clone().set(l,1);M.$d[d](v),M.init(),this.$d=M.set(l,Math.min(this.$D,M.daysInMonth())).$d}else d&&this.$d[d](v);return this.init(),this},n.set=function(e,a){return this.clone().$set(e,a)},n.get=function(e){return this[i.p(e)]()},n.add=function(e,a){var t,s=this;e=Number(e);var o=i.p(a),d=function(k){var Y=g(s);return i.w(Y.date(Y.date()+Math.round(k*e)),s)};if(o===y)return this.set(y,this.$M+e);if(o===T)return this.set(T,this.$y+e);if(o===F)return d(1);if(o===H)return d(7);var v=(t={},t[O]=c,t[D]=K,t[f]=u,t)[o]||1,M=this.$d.getTime()+e*v;return i.w(M,this)},n.subtract=function(e,a){return this.add(-1*e,a)},n.format=function(e){var a=this,t=this.$locale();if(!this.isValid())return t.invalidDate||U;var s=e||"YYYY-MM-DDTHH:mm:ssZ",o=i.z(this),d=this.$H,v=this.$m,M=this.$M,k=t.weekdays,Y=t.months,B=t.meridiem,A=function(C,z,Q,ee){return C&&(C[z]||C(a,s))||Q[z].slice(0,ee)},Z=function(C){return i.s(d%12||12,C,"0")},I=B||function(C,z,Q){var ee=C<12?"AM":"PM";return Q?ee.toLowerCase():ee};return s.replace(E,function(C,z){return z||function(Q){switch(Q){case"YY":return String(a.$y).slice(-2);case"YYYY":return i.s(a.$y,4,"0");case"M":return M+1;case"MM":return i.s(M+1,2,"0");case"MMM":return A(t.monthsShort,M,Y,3);case"MMMM":return A(Y,M);case"D":return a.$D;case"DD":return i.s(a.$D,2,"0");case"d":return String(a.$W);case"dd":return A(t.weekdaysMin,a.$W,k,2);case"ddd":return A(t.weekdaysShort,a.$W,k,3);case"dddd":return k[a.$W];case"H":return String(d);case"HH":return i.s(d,2,"0");case"h":return Z(1);case"hh":return Z(2);case"a":return I(d,v,!0);case"A":return I(d,v,!1);case"m":return String(v);case"mm":return i.s(v,2,"0");case"s":return String(a.$s);case"ss":return i.s(a.$s,2,"0");case"SSS":return i.s(a.$ms,3,"0");case"Z":return o}return null}(C)||o.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(e,a,t){var s,o=this,d=i.p(a),v=g(e),M=(v.utcOffset()-this.utcOffset())*c,k=this-v,Y=function(){return i.m(o,v)};switch(d){case T:s=Y()/12;break;case y:s=Y();break;case j:s=Y()/3;break;case H:s=(k-M)/6048e5;break;case F:s=(k-M)/864e5;break;case D:s=k/K;break;case O:s=k/c;break;case f:s=k/u;break;default:s=k}return t?s:i.a(s)},n.daysInMonth=function(){return this.endOf(y).$D},n.$locale=function(){return p[this.$L]},n.locale=function(e,a){if(!e)return this.$L;var t=this.clone(),s=P(e,a,!0);return s&&(t.$L=s),t},n.clone=function(){return i.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},r}(),le=X.prototype;return g.prototype=le,[["$ms",x],["$s",f],["$m",O],["$H",D],["$W",F],["$M",y],["$y",T],["$D",l]].forEach(function(r){le[r[1]]=function(n){return this.$g(n,r[0],r[1])}}),g.extend=function(r,n){return r.$i||(r(n,X,g),r.$i=!0),g},g.locale=P,g.isDayjs=b,g.unix=function(r){return g(1e3*r)},g.en=p[h],g.Ls=p,g.p={},g})})(me);var ct=me.exports;const dt=tt(ct),ft=J({__name:"NpViewTime",props:{value:{},format:{default:"YYYY-MM-DD HH:mm:ss"}},setup(S){const _=S,u=W(()=>_.value?dt(_.value).format(_.format):null);return(c,K)=>(V(),ie("div",null,Se(u.value),1))}}),ht={NpViewTime:ft},gt=J({__name:"NpTable",props:de({checkedRowKeys:{},columns:{default:()=>[]},dataField:{default:"data"},immediate:{type:Boolean},loading:{type:Boolean},pagination:{type:Boolean,default:!0},rowKey:{},totalField:{default:"total"},onRequest:{}},{loading:{type:Boolean,default:!1},loadingModifiers:{},checkedRowKeys:{default:fe([])},checkedRowKeysModifiers:{}}),emits:["update:loading","update:checkedRowKeys"],setup(S,{expose:_}){const u=S,c=De(),K=W(()=>Object.keys(c).filter(m=>!["header"].includes(m))),x=oe(S,"loading"),f=oe(S,"checkedRowKeys"),O=he(u,"checkedRowKeys","columns","dataField","immediate","loading","pagination","rowKey","totalField","onRequest"),D=ue([]),F=W(()=>{const m=nt(u.columns);for(const h of m){const{key:p,component:N}=h;if(!p)continue;N&&(h.render=P=>H(h,P));const b=`column-${p}`;K.value.includes(b)&&(h.render=(P,g)=>{var i;return(i=c[b])==null?void 0:i.call(c,{key:p,row:P,index:g})})}return m});function H(m,h){const{key:p,component:N,componentProps:b}=m;return se(pe(N)?ht[N]:N,{...b,value:h[p]})}const y=ue({itemCount:0,pageSize:10,page:1}),j=W(()=>{if(!u.pagination)return!1;const{itemCount:m,pageSize:h,page:p}=y.value;return{itemCount:m,pageSizes:[10,20,50,100],pageSize:h,showQuickJumper:!0,showSizePicker:!0,...u.pagination,page:p,onUpdatePage(N){var b,P;(P=(b=u.pagination).onUpdatePage)==null||P.call(b,N),y.value.page=N,$()},onUpdatePageSize(N){var b,P;(P=(b=u.pagination).onUpdatePageSize)==null||P.call(b,N),y.value.pageSize=N,$()}}});function T(m){return u.rowKey?u.rowKey(m):m.id}const l=W(()=>{const{pageSize:m,page:h}=y.value;return{pageSize:m,page:h}});async function U(m){var h;x.value=!0;try{const p=await((h=u.onRequest)==null?void 0:h.call(u,{...l.value,...m}));st(p)?D.value=p:(D.value=p[u.dataField],y.value.itemCount=p[u.totalField])}finally{x.value=!1}}function $(m){U(m)}function E(){return f.value}function ae(){return x.value}function G(){return j.value}return ce(()=>{u.immediate&&$()}),_({getCheckedRowKeys:E,getLoading:ae,getPagination:G,refresh:$}),(m,h)=>(V(),ie("div",null,[c.header?(V(),q(w(at),{key:0,align:"center",justify:"space-between",class:"mb-12px"},{default:R(()=>[ne(m.$slots,"header")]),_:3})):ke("",!0),L(w(rt),te(w(O),{"checked-row-keys":f.value,"onUpdate:checkedRowKeys":h[0]||(h[0]=p=>f.value=p),data:D.value,columns:F.value,loading:x.value,pagination:j.value,remote:"","row-key":T}),null,16,["checked-row-keys","data","columns","loading","pagination"])]))}});export{$t as _,gt as a,ft as b,vt as c};
