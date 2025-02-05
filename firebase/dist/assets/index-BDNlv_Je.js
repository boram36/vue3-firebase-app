const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-ClvlYmty.js","assets/QPage-BvBQmXlz.js","assets/post-F3Q2EDJ-.js","assets/PostList-DT19oVOD.js","assets/PostItem-B9PiSo2E.js","assets/QChip-BZLHqyL-.js","assets/useBookmark-E5C6u951.js","assets/QForm-DsXfaSk5.js","assets/PostForm-DD6YPlhU.js","assets/QItemLabel-D3sOM9N0.js","assets/QCardActions-C4SI-P8W.js","assets/validate-rules-Cui1dtJC.js","assets/tiptap.scss_vue_type_style_index_0_src_true_lang-C51bjrN8.js","assets/tiptap-C3m3wOrP.css","assets/_plugin-vue_export-helper-DlAUqK2U.js","assets/PostForm-6hFgFpOQ.css","assets/index-CNc-bjd2.css","assets/about-C_9lou5n.js","assets/route-block-B_A1xBdJ.js","assets/admin-BvFA4ubD.js","assets/index-CcJ2HSMA.js","assets/dashboard-CgDm8eLQ.js","assets/index-CUaFMza9.js","assets/home-CvhKDYHY.js","assets/IndexPage-BP56ZA5E.js","assets/mypage-Bse0FJqJ.js","assets/BaseCard-KX6_pNxg.js","assets/bookmark-D5CJhXtM.js","assets/password-BKftbvl5.js","assets/error-message-RP1Uco7u.js","assets/profile-Bqtc2uP2.js","assets/index-CWbzFFRg.js","assets/edit-CqtTZL3O.js","assets/index-Q7JMi-c4.js","assets/index-CD5DZYGa.css","assets/index-DPt_fYMW.js","assets/SignInForm-CBvmMvj_.js","assets/SignUpForm-DYhddrb1.js","assets/FindPasswordForm-DvZfYQXW.js","assets/admin-BMIBqHwu.js","assets/MainLayout-D9V5kzVm.js","assets/error-handler-Dcrl8fDR.js"])))=>i.map(i=>d[i]);
const gT=function(){const e=typeof document<"u"&&document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),mT=function(t){return"/"+t},sp={},ke=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");r=Promise.allSettled(n.map(l=>{if(l=mT(l),l in sp)return;sp[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":gT,c||(h.as="script"),h.crossOrigin="",h.href=l,a&&h.setAttribute("nonce",a),document.head.appendChild(h),c)return new Promise((f,d)=>{h.addEventListener("load",f),h.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function af(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Re={},Fr=[],An=()=>{},vT=()=>!1,$l=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),lf=t=>t.startsWith("onUpdate:"),nt=Object.assign,cf=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},yT=Object.prototype.hasOwnProperty,Se=(t,e)=>yT.call(t,e),re=Array.isArray,Ur=t=>Fl(t)==="[object Map]",Ov=t=>Fl(t)==="[object Set]",se=t=>typeof t=="function",Ue=t=>typeof t=="string",ti=t=>typeof t=="symbol",Ne=t=>t!==null&&typeof t=="object",Nv=t=>(Ne(t)||se(t))&&se(t.then)&&se(t.catch),Lv=Object.prototype.toString,Fl=t=>Lv.call(t),wT=t=>Fl(t).slice(8,-1),Mv=t=>Fl(t)==="[object Object]",uf=t=>Ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Fs=af(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ul=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},_T=/-(\w)/g,en=Ul(t=>t.replace(_T,(e,n)=>n?n.toUpperCase():"")),bT=/\B([A-Z])/g,ki=Ul(t=>t.replace(bT,"-$1").toLowerCase()),Vl=Ul(t=>t.charAt(0).toUpperCase()+t.slice(1)),Kc=Ul(t=>t?`on${Vl(t)}`:""),wi=(t,e)=>!Object.is(t,e),Wc=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},$v=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},ET=t=>{const e=parseFloat(t);return isNaN(e)?t:e},TT=t=>{const e=Ue(t)?Number(t):NaN;return isNaN(e)?t:e};let op;const Bl=()=>op||(op=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Po(t){if(re(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Ue(i)?AT(i):Po(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Ue(t)||Ne(t))return t}const IT=/;(?![^(]*\))/g,ST=/:([^]+)/,CT=/\/\*[^]*?\*\//g;function AT(t){const e={};return t.replace(CT,"").split(IT).forEach(n=>{if(n){const i=n.split(ST);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ql(t){let e="";if(Ue(t))e=t;else if(re(t))for(let n=0;n<t.length;n++){const i=ql(t[n]);i&&(e+=i+" ")}else if(Ne(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function qF(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Ue(e)&&(t.class=ql(e)),n&&(t.style=Po(n)),t}const kT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",RT=af(kT);function Fv(t){return!!t||t===""}const Uv=t=>!!(t&&t.__v_isRef===!0),xT=t=>Ue(t)?t:t==null?"":re(t)||Ne(t)&&(t.toString===Lv||!se(t.toString))?Uv(t)?xT(t.value):JSON.stringify(t,Vv,2):String(t),Vv=(t,e)=>Uv(e)?Vv(t,e.value):Ur(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[Gc(i,s)+" =>"]=r,n),{})}:Ov(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Gc(n))}:ti(e)?Gc(e):Ne(e)&&!re(e)&&!Mv(e)?String(e):e,Gc=(t,e="")=>{var n;return ti(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let It;class Bv{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=It,!e&&It&&(this.index=(It.scopes||(It.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=It;try{return It=this,e()}finally{It=n}}}on(){It=this}off(){It=this.parent}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function qv(t){return new Bv(t)}function hf(){return It}function jv(t,e=!1){It&&It.cleanups.push(t)}let De;const Qc=new WeakSet;class Hv{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,It&&It.active&&It.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Qc.has(this)&&(Qc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Kv(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ap(this),Wv(this);const e=De,n=un;De=this,un=!0;try{return this.fn()}finally{Gv(this),De=e,un=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)pf(e);this.deps=this.depsTail=void 0,ap(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Qc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ju(this)&&this.run()}get dirty(){return Ju(this)}}let zv=0,Us,Vs;function Kv(t,e=!1){if(t.flags|=8,e){t.next=Vs,Vs=t;return}t.next=Us,Us=t}function ff(){zv++}function df(){if(--zv>0)return;if(Vs){let e=Vs;for(Vs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Us;){let e=Us;for(Us=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Wv(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Gv(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),pf(i),PT(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function Ju(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Qv(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Qv(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===eo))return;t.globalVersion=eo;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Ju(t)){t.flags&=-3;return}const n=De,i=un;De=t,un=!0;try{Wv(t);const r=t.fn(t._value);(e.version===0||wi(r,t._value))&&(t._value=r,e.version++)}catch(r){throw e.version++,r}finally{De=n,un=i,Gv(t),t.flags&=-3}}function pf(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)pf(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function PT(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let un=!0;const Yv=[];function Ri(){Yv.push(un),un=!1}function xi(){const t=Yv.pop();un=t===void 0?!0:t}function ap(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=De;De=void 0;try{e()}finally{De=n}}}let eo=0;class DT{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class jl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!De||!un||De===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==De)n=this.activeLink=new DT(De,this),De.deps?(n.prevDep=De.depsTail,De.depsTail.nextDep=n,De.depsTail=n):De.deps=De.depsTail=n,Jv(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=De.depsTail,n.nextDep=void 0,De.depsTail.nextDep=n,De.depsTail=n,De.deps===n&&(De.deps=i)}return n}trigger(e){this.version++,eo++,this.notify(e)}notify(e){ff();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{df()}}}function Jv(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Jv(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const za=new WeakMap,Yi=Symbol(""),Xu=Symbol(""),to=Symbol("");function dt(t,e,n){if(un&&De){let i=za.get(t);i||za.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new jl),r.map=i,r.key=n),r.track()}}function Bn(t,e,n,i,r,s){const o=za.get(t);if(!o){eo++;return}const a=l=>{l&&l.trigger()};if(ff(),e==="clear")o.forEach(a);else{const l=re(t),c=l&&uf(n);if(l&&n==="length"){const u=Number(i);o.forEach((h,f)=>{(f==="length"||f===to||!ti(f)&&f>=u)&&a(h)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(to)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Yi)),Ur(t)&&a(o.get(Xu)));break;case"delete":l||(a(o.get(Yi)),Ur(t)&&a(o.get(Xu)));break;case"set":Ur(t)&&a(o.get(Yi));break}}df()}function OT(t,e){const n=za.get(t);return n&&n.get(e)}function Sr(t){const e=ye(t);return e===t?e:(dt(e,"iterate",to),Xt(t)?e:e.map(pt))}function Hl(t){return dt(t=ye(t),"iterate",to),t}const NT={__proto__:null,[Symbol.iterator](){return Yc(this,Symbol.iterator,pt)},concat(...t){return Sr(this).concat(...t.map(e=>re(e)?Sr(e):e))},entries(){return Yc(this,"entries",t=>(t[1]=pt(t[1]),t))},every(t,e){return Mn(this,"every",t,e,void 0,arguments)},filter(t,e){return Mn(this,"filter",t,e,n=>n.map(pt),arguments)},find(t,e){return Mn(this,"find",t,e,pt,arguments)},findIndex(t,e){return Mn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Mn(this,"findLast",t,e,pt,arguments)},findLastIndex(t,e){return Mn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Mn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Jc(this,"includes",t)},indexOf(...t){return Jc(this,"indexOf",t)},join(t){return Sr(this).join(t)},lastIndexOf(...t){return Jc(this,"lastIndexOf",t)},map(t,e){return Mn(this,"map",t,e,void 0,arguments)},pop(){return bs(this,"pop")},push(...t){return bs(this,"push",t)},reduce(t,...e){return lp(this,"reduce",t,e)},reduceRight(t,...e){return lp(this,"reduceRight",t,e)},shift(){return bs(this,"shift")},some(t,e){return Mn(this,"some",t,e,void 0,arguments)},splice(...t){return bs(this,"splice",t)},toReversed(){return Sr(this).toReversed()},toSorted(t){return Sr(this).toSorted(t)},toSpliced(...t){return Sr(this).toSpliced(...t)},unshift(...t){return bs(this,"unshift",t)},values(){return Yc(this,"values",pt)}};function Yc(t,e,n){const i=Hl(t),r=i[e]();return i!==t&&!Xt(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=n(s.value)),s}),r}const LT=Array.prototype;function Mn(t,e,n,i,r,s){const o=Hl(t),a=o!==t&&!Xt(t),l=o[e];if(l!==LT[e]){const h=l.apply(t,s);return a?pt(h):h}let c=n;o!==t&&(a?c=function(h,f){return n.call(this,pt(h),f,t)}:n.length>2&&(c=function(h,f){return n.call(this,h,f,t)}));const u=l.call(o,c,i);return a&&r?r(u):u}function lp(t,e,n,i){const r=Hl(t);let s=n;return r!==t&&(Xt(t)?n.length>3&&(s=function(o,a,l){return n.call(this,o,a,l,t)}):s=function(o,a,l){return n.call(this,o,pt(a),l,t)}),r[e](s,...i)}function Jc(t,e,n){const i=ye(t);dt(i,"iterate",to);const r=i[e](...n);return(r===-1||r===!1)&&vf(n[0])?(n[0]=ye(n[0]),i[e](...n)):r}function bs(t,e,n=[]){Ri(),ff();const i=ye(t)[e].apply(t,n);return df(),xi(),i}const MT=af("__proto__,__v_isRef,__isVue"),Xv=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ti));function $T(t){ti(t)||(t=String(t));const e=ye(this);return dt(e,"has",t),e.hasOwnProperty(t)}class Zv{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?WT:iy:s?ny:ty).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=re(e);if(!r){let l;if(o&&(l=NT[n]))return l;if(n==="hasOwnProperty")return $T}const a=Reflect.get(e,n,Fe(e)?e:i);return(ti(n)?Xv.has(n):MT(n))||(r||dt(e,"get",n),s)?a:Fe(a)?o&&uf(n)?a:a.value:Ne(a)?r?zl(a):an(a):a}}class ey extends Zv{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];if(!this._isShallow){const l=rr(s);if(!Xt(i)&&!rr(i)&&(s=ye(s),i=ye(i)),!re(e)&&Fe(s)&&!Fe(i))return l?!1:(s.value=i,!0)}const o=re(e)&&uf(n)?Number(n)<e.length:Se(e,n),a=Reflect.set(e,n,i,Fe(e)?e:r);return e===ye(r)&&(o?wi(i,s)&&Bn(e,"set",n,i):Bn(e,"add",n,i)),a}deleteProperty(e,n){const i=Se(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&Bn(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!ti(n)||!Xv.has(n))&&dt(e,"has",n),i}ownKeys(e){return dt(e,"iterate",re(e)?"length":Yi),Reflect.ownKeys(e)}}class FT extends Zv{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const UT=new ey,VT=new FT,BT=new ey(!0);const Zu=t=>t,oa=t=>Reflect.getPrototypeOf(t);function qT(t,e,n){return function(...i){const r=this.__v_raw,s=ye(r),o=Ur(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?Zu:e?eh:pt;return!e&&dt(s,"iterate",l?Xu:Yi),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function aa(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function jT(t,e){const n={get(r){const s=this.__v_raw,o=ye(s),a=ye(r);t||(wi(r,a)&&dt(o,"get",r),dt(o,"get",a));const{has:l}=oa(o),c=e?Zu:t?eh:pt;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!t&&dt(ye(r),"iterate",Yi),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=ye(s),a=ye(r);return t||(wi(r,a)&&dt(o,"has",r),dt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=ye(a),c=e?Zu:t?eh:pt;return!t&&dt(l,"iterate",Yi),a.forEach((u,h)=>r.call(s,c(u),c(h),o))}};return nt(n,t?{add:aa("add"),set:aa("set"),delete:aa("delete"),clear:aa("clear")}:{add(r){!e&&!Xt(r)&&!rr(r)&&(r=ye(r));const s=ye(this);return oa(s).has.call(s,r)||(s.add(r),Bn(s,"add",r,r)),this},set(r,s){!e&&!Xt(s)&&!rr(s)&&(s=ye(s));const o=ye(this),{has:a,get:l}=oa(o);let c=a.call(o,r);c||(r=ye(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?wi(s,u)&&Bn(o,"set",r,s):Bn(o,"add",r,s),this},delete(r){const s=ye(this),{has:o,get:a}=oa(s);let l=o.call(s,r);l||(r=ye(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Bn(s,"delete",r,void 0),c},clear(){const r=ye(this),s=r.size!==0,o=r.clear();return s&&Bn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=qT(r,t,e)}),n}function gf(t,e){const n=jT(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(Se(n,r)&&r in i?n:i,r,s)}const HT={get:gf(!1,!1)},zT={get:gf(!1,!0)},KT={get:gf(!0,!1)};const ty=new WeakMap,ny=new WeakMap,iy=new WeakMap,WT=new WeakMap;function GT(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function QT(t){return t.__v_skip||!Object.isExtensible(t)?0:GT(wT(t))}function an(t){return rr(t)?t:mf(t,!1,UT,HT,ty)}function ry(t){return mf(t,!1,BT,zT,ny)}function zl(t){return mf(t,!0,VT,KT,iy)}function mf(t,e,n,i,r){if(!Ne(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=QT(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function Wn(t){return rr(t)?Wn(t.__v_raw):!!(t&&t.__v_isReactive)}function rr(t){return!!(t&&t.__v_isReadonly)}function Xt(t){return!!(t&&t.__v_isShallow)}function vf(t){return t?!!t.__v_raw:!1}function ye(t){const e=t&&t.__v_raw;return e?ye(e):t}function mr(t){return!Se(t,"__v_skip")&&Object.isExtensible(t)&&$v(t,"__v_skip",!0),t}const pt=t=>Ne(t)?an(t):t,eh=t=>Ne(t)?zl(t):t;function Fe(t){return t?t.__v_isRef===!0:!1}function de(t){return sy(t,!1)}function Ka(t){return sy(t,!0)}function sy(t,e){return Fe(t)?t:new YT(t,e)}class YT{constructor(e,n){this.dep=new jl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ye(e),this._value=n?e:pt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||Xt(e)||rr(e);e=i?e:ye(e),wi(e,n)&&(this._rawValue=e,this._value=i?e:pt(e),this.dep.trigger())}}function Nt(t){return Fe(t)?t.value:t}function pi(t){return se(t)?t():Nt(t)}const JT={get:(t,e,n)=>e==="__v_raw"?t:Nt(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Fe(r)&&!Fe(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function oy(t){return Wn(t)?t:new Proxy(t,JT)}class XT{constructor(e){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new jl,{get:i,set:r}=e(n.track.bind(n),n.trigger.bind(n));this._get=i,this._set=r}get value(){return this._value=this._get()}set value(e){this._set(e)}}function ZT(t){return new XT(t)}function eI(t){const e=re(t)?new Array(t.length):{};for(const n in t)e[n]=ly(t,n);return e}class tI{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return OT(ye(this._object),this._key)}}class nI{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function ay(t,e,n){return Fe(t)?t:se(t)?new nI(t):Ne(t)&&arguments.length>1?ly(t,e,n):de(t)}function ly(t,e,n){const i=t[e];return Fe(i)?i:new tI(t,e,n)}class iI{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new jl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=eo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&De!==this)return Kv(this,!0),!0}get value(){const e=this.dep.track();return Qv(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function rI(t,e,n=!1){let i,r;return se(t)?i=t:(i=t.get,r=t.set),new iI(i,r,n)}const la={},Wa=new WeakMap;let Bi;function sI(t,e=!1,n=Bi){if(n){let i=Wa.get(n);i||Wa.set(n,i=[]),i.push(t)}}function oI(t,e,n=Re){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=n,c=E=>r?E:Xt(E)||r===!1||r===0?qn(E,1):qn(E);let u,h,f,d,p=!1,m=!1;if(Fe(t)?(h=()=>t.value,p=Xt(t)):Wn(t)?(h=()=>c(t),p=!0):re(t)?(m=!0,p=t.some(E=>Wn(E)||Xt(E)),h=()=>t.map(E=>{if(Fe(E))return E.value;if(Wn(E))return c(E);if(se(E))return l?l(E,2):E()})):se(t)?e?h=l?()=>l(t,2):t:h=()=>{if(f){Ri();try{f()}finally{xi()}}const E=Bi;Bi=u;try{return l?l(t,3,[d]):t(d)}finally{Bi=E}}:h=An,e&&r){const E=h,I=r===!0?1/0:r;h=()=>qn(E(),I)}const w=hf(),b=()=>{u.stop(),w&&w.active&&cf(w.effects,u)};if(s&&e){const E=e;e=(...I)=>{E(...I),b()}}let y=m?new Array(t.length).fill(la):la;const _=E=>{if(!(!(u.flags&1)||!u.dirty&&!E))if(e){const I=u.run();if(r||p||(m?I.some(($,L)=>wi($,y[L])):wi(I,y))){f&&f();const $=Bi;Bi=u;try{const L=[I,y===la?void 0:m&&y[0]===la?[]:y,d];l?l(e,3,L):e(...L),y=I}finally{Bi=$}}}else u.run()};return a&&a(_),u=new Hv(h),u.scheduler=o?()=>o(_,!1):_,d=E=>sI(E,!1,u),f=u.onStop=()=>{const E=Wa.get(u);if(E){if(l)l(E,4);else for(const I of E)I();Wa.delete(u)}},e?i?_(!0):y=u.run():o?o(_.bind(null,!0),!0):u.run(),b.pause=u.pause.bind(u),b.resume=u.resume.bind(u),b.stop=b,b}function qn(t,e=1/0,n){if(e<=0||!Ne(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Fe(t))qn(t.value,e,n);else if(re(t))for(let i=0;i<t.length;i++)qn(t[i],e,n);else if(Ov(t)||Ur(t))t.forEach(i=>{qn(i,e,n)});else if(Mv(t)){for(const i in t)qn(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&qn(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Do(t,e,n,i){try{return i?t(...i):t()}catch(r){Oo(r,e,n)}}function hn(t,e,n,i){if(se(t)){const r=Do(t,e,n,i);return r&&Nv(r)&&r.catch(s=>{Oo(s,e,n)}),r}if(re(t)){const r=[];for(let s=0;s<t.length;s++)r.push(hn(t[s],e,n,i));return r}}function Oo(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Re;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,l,c)===!1)return}a=a.parent}if(s){Ri(),Do(s,null,10,[t,l,c]),xi();return}}aI(t,n,r,i,o)}function aI(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const St=[];let En=-1;const Vr=[];let ci=null,Pr=0;const cy=Promise.resolve();let Ga=null;function Ht(t){const e=Ga||cy;return t?e.then(this?t.bind(this):t):e}function lI(t){let e=En+1,n=St.length;for(;e<n;){const i=e+n>>>1,r=St[i],s=no(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function yf(t){if(!(t.flags&1)){const e=no(t),n=St[St.length-1];!n||!(t.flags&2)&&e>=no(n)?St.push(t):St.splice(lI(e),0,t),t.flags|=1,uy()}}function uy(){Ga||(Ga=cy.then(fy))}function cI(t){re(t)?Vr.push(...t):ci&&t.id===-1?ci.splice(Pr+1,0,t):t.flags&1||(Vr.push(t),t.flags|=1),uy()}function cp(t,e,n=En+1){for(;n<St.length;n++){const i=St[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;St.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function hy(t){if(Vr.length){const e=[...new Set(Vr)].sort((n,i)=>no(n)-no(i));if(Vr.length=0,ci){ci.push(...e);return}for(ci=e,Pr=0;Pr<ci.length;Pr++){const n=ci[Pr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}ci=null,Pr=0}}const no=t=>t.id==null?t.flags&2?-1:1/0:t.id;function fy(t){try{for(En=0;En<St.length;En++){const e=St[En];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Do(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;En<St.length;En++){const e=St[En];e&&(e.flags&=-2)}En=-1,St.length=0,hy(),Ga=null,(St.length||Vr.length)&&fy()}}let Ze=null,dy=null;function Qa(t){const e=Ze;return Ze=t,dy=t&&t.type.__scopeId||null,e}function He(t,e=Ze,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Ip(-1);const s=Qa(e);let o;try{o=t(...r)}finally{Qa(s),i._d&&Ip(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Br(t,e){if(Ze===null)return t;const n=Jl(Ze),i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=Re]=e[r];s&&(se(s)&&(s={mounted:s,updated:s}),s.deep&&qn(o),i.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function $i(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Ri(),hn(l,n,8,[t.el,a,t,e]),xi())}}const py=Symbol("_vte"),gy=t=>t.__isTeleport,Bs=t=>t&&(t.disabled||t.disabled===""),up=t=>t&&(t.defer||t.defer===""),hp=t=>typeof SVGElement<"u"&&t instanceof SVGElement,fp=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,th=(t,e)=>{const n=t&&t.to;return Ue(n)?e?e(n):null:n},my={name:"Teleport",__isTeleport:!0,process(t,e,n,i,r,s,o,a,l,c){const{mc:u,pc:h,pbc:f,o:{insert:d,querySelector:p,createText:m,createComment:w}}=c,b=Bs(e.props);let{shapeFlag:y,children:_,dynamicChildren:E}=e;if(t==null){const I=e.el=m(""),$=e.anchor=m("");d(I,n,i),d($,n,i);const L=(C,N)=>{y&16&&(r&&r.isCE&&(r.ce._teleportTarget=C),u(_,C,N,r,s,o,a,l))},x=()=>{const C=e.target=th(e.props,p),N=vy(C,e,m,d);C&&(o!=="svg"&&hp(C)?o="svg":o!=="mathml"&&fp(C)&&(o="mathml"),b||(L(C,N),ka(e,!1)))};b&&(L(n,$),ka(e,!0)),up(e.props)?Tt(()=>{x(),e.el.__isMounted=!0},s):x()}else{if(up(e.props)&&!t.el.__isMounted){Tt(()=>{my.process(t,e,n,i,r,s,o,a,l,c),delete t.el.__isMounted},s);return}e.el=t.el,e.targetStart=t.targetStart;const I=e.anchor=t.anchor,$=e.target=t.target,L=e.targetAnchor=t.targetAnchor,x=Bs(t.props),C=x?n:$,N=x?I:L;if(o==="svg"||hp($)?o="svg":(o==="mathml"||fp($))&&(o="mathml"),E?(f(t.dynamicChildren,E,C,r,s,o,a),Tf(t,e,!0)):l||h(t,e,C,N,r,s,o,a,!1),b)x?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):ca(e,n,I,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const K=e.target=th(e.props,p);K&&ca(e,K,null,c,0)}else x&&ca(e,$,L,c,1);ka(e,b)}},remove(t,e,n,{um:i,o:{remove:r}},s){const{shapeFlag:o,children:a,anchor:l,targetStart:c,targetAnchor:u,target:h,props:f}=t;if(h&&(r(c),r(u)),s&&r(l),o&16){const d=s||!Bs(f);for(let p=0;p<a.length;p++){const m=a[p];i(m,e,n,d,!!m.dynamicChildren)}}},move:ca,hydrate:uI};function ca(t,e,n,{o:{insert:i},m:r},s=2){s===0&&i(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,h=s===2;if(h&&i(o,e,n),(!h||Bs(u))&&l&16)for(let f=0;f<c.length;f++)r(c[f],e,n,2);h&&i(a,e,n)}function uI(t,e,n,i,r,s,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:c,createText:u}},h){const f=e.target=th(e.props,l);if(f){const d=Bs(e.props),p=f._lpa||f.firstChild;if(e.shapeFlag&16)if(d)e.anchor=h(o(t),e,a(t),n,i,r,s),e.targetStart=p,e.targetAnchor=p&&o(p);else{e.anchor=o(t);let m=p;for(;m;){if(m&&m.nodeType===8){if(m.data==="teleport start anchor")e.targetStart=m;else if(m.data==="teleport anchor"){e.targetAnchor=m,f._lpa=e.targetAnchor&&o(e.targetAnchor);break}}m=o(m)}e.targetAnchor||vy(f,e,u,c),h(p&&o(p),e,f,n,i,r,s)}ka(e,d)}return e.anchor&&o(e.anchor)}const hI=my;function ka(t,e){const n=t.ctx;if(n&&n.ut){let i,r;for(e?(i=t.el,r=t.anchor):(i=t.targetStart,r=t.targetAnchor);i&&i!==r;)i.nodeType===1&&i.setAttribute("data-v-owner",n.uid),i=i.nextSibling;n.ut()}}function vy(t,e,n,i){const r=e.targetStart=n(""),s=e.targetAnchor=n("");return r[py]=s,t&&(i(r,t),i(s,t)),s}const ui=Symbol("_leaveCb"),ua=Symbol("_enterCb");function yy(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Pn(()=>{t.isMounted=!0}),xt(()=>{t.isUnmounting=!0}),t}const Wt=[Function,Array],wy={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Wt,onEnter:Wt,onAfterEnter:Wt,onEnterCancelled:Wt,onBeforeLeave:Wt,onLeave:Wt,onAfterLeave:Wt,onLeaveCancelled:Wt,onBeforeAppear:Wt,onAppear:Wt,onAfterAppear:Wt,onAppearCancelled:Wt},_y=t=>{const e=t.subTree;return e.component?_y(e.component):e},fI={name:"BaseTransition",props:wy,setup(t,{slots:e}){const n=Ke(),i=yy();return()=>{const r=e.default&&wf(e.default(),!0);if(!r||!r.length)return;const s=by(r),o=ye(t),{mode:a}=o;if(i.isLeaving)return Xc(s);const l=dp(s);if(!l)return Xc(s);let c=io(l,o,i,n,h=>c=h);l.type!==Ct&&sr(l,c);let u=n.subTree&&dp(n.subTree);if(u&&u.type!==Ct&&!ji(l,u)&&_y(n).type!==Ct){let h=io(u,o,i,n);if(sr(u,h),a==="out-in"&&l.type!==Ct)return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete h.afterLeave,u=void 0},Xc(s);a==="in-out"&&l.type!==Ct?h.delayLeave=(f,d,p)=>{const m=Ey(i,u);m[String(u.key)]=u,f[ui]=()=>{d(),f[ui]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{p(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function by(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Ct){e=n;break}}return e}const dI=fI;function Ey(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function io(t,e,n,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:f,onLeave:d,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:w,onAppear:b,onAfterAppear:y,onAppearCancelled:_}=e,E=String(t.key),I=Ey(n,t),$=(C,N)=>{C&&hn(C,i,9,N)},L=(C,N)=>{const K=N[1];$(C,N),re(C)?C.every(M=>M.length<=1)&&K():C.length<=1&&K()},x={mode:o,persisted:a,beforeEnter(C){let N=l;if(!n.isMounted)if(s)N=w||l;else return;C[ui]&&C[ui](!0);const K=I[E];K&&ji(t,K)&&K.el[ui]&&K.el[ui](),$(N,[C])},enter(C){let N=c,K=u,M=h;if(!n.isMounted)if(s)N=b||c,K=y||u,M=_||h;else return;let ee=!1;const V=C[ua]=oe=>{ee||(ee=!0,oe?$(M,[C]):$(K,[C]),x.delayedLeave&&x.delayedLeave(),C[ua]=void 0)};N?L(N,[C,V]):V()},leave(C,N){const K=String(t.key);if(C[ua]&&C[ua](!0),n.isUnmounting)return N();$(f,[C]);let M=!1;const ee=C[ui]=V=>{M||(M=!0,N(),V?$(m,[C]):$(p,[C]),C[ui]=void 0,I[K]===t&&delete I[K])};I[K]=t,d?L(d,[C,ee]):ee()},clone(C){const N=io(C,e,n,i,r);return r&&r(N),N}};return x}function Xc(t){if(No(t))return t=Ii(t),t.children=null,t}function dp(t){if(!No(t))return gy(t.type)&&t.children?by(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&se(n.default))return n.default()}}function sr(t,e){t.shapeFlag&6&&t.component?(t.transition=e,sr(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function wf(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===Lt?(o.patchFlag&128&&r++,i=i.concat(wf(o.children,e,a))):(e||o.type!==Ct)&&i.push(a!=null?Ii(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function Kl(t,e){return se(t)?nt({name:t.name},e,{setup:t}):t}function _f(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ya(t,e,n,i,r=!1){if(re(t)){t.forEach((p,m)=>Ya(p,e&&(re(e)?e[m]:e),n,i,r));return}if(qr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ya(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?Jl(i.component):i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Re?a.refs={}:a.refs,h=a.setupState,f=ye(h),d=h===Re?()=>!1:p=>Se(f,p);if(c!=null&&c!==l&&(Ue(c)?(u[c]=null,d(c)&&(h[c]=null)):Fe(c)&&(c.value=null)),se(l))Do(l,a,12,[o,u]);else{const p=Ue(l),m=Fe(l);if(p||m){const w=()=>{if(t.f){const b=p?d(l)?h[l]:u[l]:l.value;r?re(b)&&cf(b,s):re(b)?b.includes(s)||b.push(s):p?(u[l]=[s],d(l)&&(h[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else p?(u[l]=o,d(l)&&(h[l]=o)):m&&(l.value=o,t.k&&(u[t.k]=o))};o?(w.id=-1,Tt(w,n)):w()}}}const pp=t=>t.nodeType===8;Bl().requestIdleCallback;Bl().cancelIdleCallback;function pI(t,e){if(pp(t)&&t.data==="["){let n=1,i=t.nextSibling;for(;i;){if(i.nodeType===1){if(e(i)===!1)break}else if(pp(i))if(i.data==="]"){if(--n===0)break}else i.data==="["&&n++;i=i.nextSibling}}else e(t)}const qr=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function Zc(t){se(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:i,delay:r=200,hydrate:s,timeout:o,suspensible:a=!0,onError:l}=t;let c=null,u,h=0;const f=()=>(h++,c=null,d()),d=()=>{let p;return c||(p=c=e().catch(m=>{if(m=m instanceof Error?m:new Error(String(m)),l)return new Promise((w,b)=>{l(m,()=>w(f()),()=>b(m),h+1)});throw m}).then(m=>p!==c&&c?c:(m&&(m.__esModule||m[Symbol.toStringTag]==="Module")&&(m=m.default),u=m,m)))};return Kl({name:"AsyncComponentWrapper",__asyncLoader:d,__asyncHydrate(p,m,w){const b=s?()=>{const y=s(w,_=>pI(p,_));y&&(m.bum||(m.bum=[])).push(y)}:w;u?b():d().then(()=>!m.isUnmounted&&b())},get __asyncResolved(){return u},setup(){const p=Xe;if(_f(p),u)return()=>eu(u,p);const m=_=>{c=null,Oo(_,p,13,!i)};if(a&&p.suspense||Xr)return d().then(_=>()=>eu(_,p)).catch(_=>(m(_),()=>i?ue(i,{error:_}):null));const w=de(!1),b=de(),y=de(!!r);return r&&setTimeout(()=>{y.value=!1},r),o!=null&&setTimeout(()=>{if(!w.value&&!b.value){const _=new Error(`Async component timed out after ${o}ms.`);m(_),b.value=_}},o),d().then(()=>{w.value=!0,p.parent&&No(p.parent.vnode)&&p.parent.update()}).catch(_=>{m(_),b.value=_}),()=>{if(w.value&&u)return eu(u,p);if(b.value&&i)return ue(i,{error:b.value});if(n&&!y.value)return ue(n)}}})}function eu(t,e){const{ref:n,props:i,children:r,ce:s}=e.vnode,o=ue(t,i,r);return o.ref=n,o.ce=s,delete e.vnode.ce,o}const No=t=>t.type.__isKeepAlive;function gI(t,e){Ty(t,"a",e)}function bf(t,e){Ty(t,"da",e)}function Ty(t,e,n=Xe){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Wl(e,i,n),n){let r=n.parent;for(;r&&r.parent;)No(r.parent.vnode)&&mI(i,e,n,r),r=r.parent}}function mI(t,e,n,i){const r=Wl(e,t,i,!0);Gl(()=>{cf(i[e],r)},n)}function Wl(t,e,n=Xe,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{Ri();const a=Lo(n),l=hn(e,n,t,o);return a(),xi(),l});return i?r.unshift(s):r.push(s),s}}const ni=t=>(e,n=Xe)=>{(!Xr||t==="sp")&&Wl(t,(...i)=>e(...i),n)},vI=ni("bm"),Pn=ni("m"),yI=ni("bu"),Iy=ni("u"),xt=ni("bum"),Gl=ni("um"),wI=ni("sp"),_I=ni("rtg"),bI=ni("rtc");function Sy(t,e=Xe){Wl("ec",t,e)}const Cy="components";function Ay(t,e){return Ry(Cy,t,!0,e)||t}const ky=Symbol.for("v-ndc");function EI(t){return Ue(t)?Ry(Cy,t,!1)||t:t||ky}function Ry(t,e,n=!0,i=!1){const r=Ze||Xe;if(r){const s=r.type;{const a=cS(s,!1);if(a&&(a===e||a===en(e)||a===Vl(en(e))))return s}const o=gp(r[t]||s[t],e)||gp(r.appContext[t],e);return!o&&i?s:o}}function gp(t,e){return t&&(t[e]||t[en(e)]||t[Vl(en(e))])}function jF(t,e,n,i){let r;const s=n,o=re(t);if(o||Ue(t)){const a=o&&Wn(t);let l=!1;a&&(l=!Xt(t),t=Hl(t)),r=new Array(t.length);for(let c=0,u=t.length;c<u;c++)r[c]=e(l?pt(t[c]):t[c],c,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,s)}else if(Ne(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(t[u],u,l,s)}}else r=[];return r}function HF(t,e){for(let n=0;n<e.length;n++){const i=e[n];if(re(i))for(let r=0;r<i.length;r++)t[i[r].name]=i[r].fn;else i&&(t[i.name]=i.key?(...r)=>{const s=i.fn(...r);return s&&(s.key=i.key),s}:i.fn)}return t}function zF(t,e,n={},i,r){if(Ze.ce||Ze.parent&&qr(Ze.parent)&&Ze.parent.ce)return e!=="default"&&(n.name=e),Qt(),Yt(Lt,null,[ue("slot",n,i&&i())],64);let s=t[e];s&&s._c&&(s._d=!1),Qt();const o=s&&xy(s(n)),a=n.key||o&&o.key,l=Yt(Lt,{key:(a&&!ti(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||(i?i():[]),o&&t._===1?64:-2);return!r&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),s&&s._c&&(s._d=!0),l}function xy(t){return t.some(e=>so(e)?!(e.type===Ct||e.type===Lt&&!xy(e.children)):!0)?t:null}const nh=t=>t?Qy(t)?Jl(t):nh(t.parent):null,qs=nt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>nh(t.parent),$root:t=>nh(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Dy(t),$forceUpdate:t=>t.f||(t.f=()=>{yf(t.update)}),$nextTick:t=>t.n||(t.n=Ht.bind(t.proxy)),$watch:t=>HI.bind(t)}),tu=(t,e)=>t!==Re&&!t.__isScriptSetup&&Se(t,e),TI={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(tu(i,e))return o[e]=1,i[e];if(r!==Re&&Se(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&Se(c,e))return o[e]=3,s[e];if(n!==Re&&Se(n,e))return o[e]=4,n[e];ih&&(o[e]=0)}}const u=qs[e];let h,f;if(u)return e==="$attrs"&&dt(t.attrs,"get",""),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Re&&Se(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,Se(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return tu(r,e)?(r[e]=n,!0):i!==Re&&Se(i,e)?(i[e]=n,!0):Se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==Re&&Se(t,o)||tu(e,o)||(a=s[0])&&Se(a,o)||Se(i,o)||Se(qs,o)||Se(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function mp(t){return re(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ih=!0;function II(t){const e=Dy(t),n=t.proxy,i=t.ctx;ih=!1,e.beforeCreate&&vp(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:p,activated:m,deactivated:w,beforeDestroy:b,beforeUnmount:y,destroyed:_,unmounted:E,render:I,renderTracked:$,renderTriggered:L,errorCaptured:x,serverPrefetch:C,expose:N,inheritAttrs:K,components:M,directives:ee,filters:V}=e;if(c&&SI(c,i,null),o)for(const Z in o){const pe=o[Z];se(pe)&&(i[Z]=pe.bind(n))}if(r){const Z=r.call(n,n);Ne(Z)&&(t.data=an(Z))}if(ih=!0,s)for(const Z in s){const pe=s[Z],Ve=se(pe)?pe.bind(n,n):se(pe.get)?pe.get.bind(n,n):An,ct=!se(pe)&&se(pe.set)?pe.set.bind(n):An,Je=O({get:Ve,set:ct});Object.defineProperty(i,Z,{enumerable:!0,configurable:!0,get:()=>Je.value,set:je=>Je.value=je})}if(a)for(const Z in a)Py(a[Z],i,n,Z);if(l){const Z=se(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(pe=>{jr(pe,Z[pe])})}u&&vp(u,t,"c");function ge(Z,pe){re(pe)?pe.forEach(Ve=>Z(Ve.bind(n))):pe&&Z(pe.bind(n))}if(ge(vI,h),ge(Pn,f),ge(yI,d),ge(Iy,p),ge(gI,m),ge(bf,w),ge(Sy,x),ge(bI,$),ge(_I,L),ge(xt,y),ge(Gl,E),ge(wI,C),re(N))if(N.length){const Z=t.exposed||(t.exposed={});N.forEach(pe=>{Object.defineProperty(Z,pe,{get:()=>n[pe],set:Ve=>n[pe]=Ve})})}else t.exposed||(t.exposed={});I&&t.render===An&&(t.render=I),K!=null&&(t.inheritAttrs=K),M&&(t.components=M),ee&&(t.directives=ee),C&&_f(t)}function SI(t,e,n=An){re(t)&&(t=rh(t));for(const i in t){const r=t[i];let s;Ne(r)?"default"in r?s=kt(r.from||i,r.default,!0):s=kt(r.from||i):s=kt(r),Fe(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function vp(t,e,n){hn(re(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Py(t,e,n,i){let r=i.includes(".")?Hy(n,i):()=>n[i];if(Ue(t)){const s=e[t];se(s)&&xe(r,s)}else if(se(t))xe(r,t.bind(n));else if(Ne(t))if(re(t))t.forEach(s=>Py(s,e,n,i));else{const s=se(t.handler)?t.handler.bind(n):e[t.handler];se(s)&&xe(r,s,t)}}function Dy(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Ja(l,c,o,!0)),Ja(l,e,o)),Ne(e)&&s.set(e,l),l}function Ja(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Ja(t,s,n,!0),r&&r.forEach(o=>Ja(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=CI[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const CI={data:yp,props:wp,emits:wp,methods:ks,computed:ks,beforeCreate:Et,created:Et,beforeMount:Et,mounted:Et,beforeUpdate:Et,updated:Et,beforeDestroy:Et,beforeUnmount:Et,destroyed:Et,unmounted:Et,activated:Et,deactivated:Et,errorCaptured:Et,serverPrefetch:Et,components:ks,directives:ks,watch:kI,provide:yp,inject:AI};function yp(t,e){return e?t?function(){return nt(se(t)?t.call(this,this):t,se(e)?e.call(this,this):e)}:e:t}function AI(t,e){return ks(rh(t),rh(e))}function rh(t){if(re(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Et(t,e){return t?[...new Set([].concat(t,e))]:e}function ks(t,e){return t?nt(Object.create(null),t,e):e}function wp(t,e){return t?re(t)&&re(e)?[...new Set([...t,...e])]:nt(Object.create(null),mp(t),mp(e??{})):e}function kI(t,e){if(!t)return e;if(!e)return t;const n=nt(Object.create(null),t);for(const i in e)n[i]=Et(t[i],e[i]);return n}function Oy(){return{app:null,config:{isNativeTag:vT,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let RI=0;function xI(t,e){return function(i,r=null){se(i)||(i=nt({},i)),r!=null&&!Ne(r)&&(r=null);const s=Oy(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:RI++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:hS,get config(){return s.config},set config(u){},use(u,...h){return o.has(u)||(u&&se(u.install)?(o.add(u),u.install(c,...h)):se(u)&&(o.add(u),u(c,...h))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,h){return h?(s.components[u]=h,c):s.components[u]},directive(u,h){return h?(s.directives[u]=h,c):s.directives[u]},mount(u,h,f){if(!l){const d=c._ceVNode||ue(i,r);return d.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),t(d,u,f),l=!0,c._container=u,u.__vue_app__=c,Jl(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(hn(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,h){return s.provides[u]=h,c},runWithContext(u){const h=Ji;Ji=c;try{return u()}finally{Ji=h}}};return c}}let Ji=null;function jr(t,e){if(Xe){let n=Xe.provides;const i=Xe.parent&&Xe.parent.provides;i===n&&(n=Xe.provides=Object.create(i)),n[t]=e}}function kt(t,e,n=!1){const i=Xe||Ze;if(i||Ji){const r=Ji?Ji._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&se(e)?e.call(i&&i.proxy):e}}function PI(){return!!(Xe||Ze||Ji)}const Ny={},Ly=()=>Object.create(Ny),My=t=>Object.getPrototypeOf(t)===Ny;function DI(t,e,n,i=!1){const r={},s=Ly();t.propsDefaults=Object.create(null),$y(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:ry(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function OI(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=ye(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Ql(t.emitsOptions,f))continue;const d=e[f];if(l)if(Se(s,f))d!==s[f]&&(s[f]=d,c=!0);else{const p=en(f);r[p]=sh(l,a,p,d,t,!1)}else d!==s[f]&&(s[f]=d,c=!0)}}}else{$y(t,e,r,s)&&(c=!0);let u;for(const h in a)(!e||!Se(e,h)&&((u=ki(h))===h||!Se(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=sh(l,a,h,void 0,t,!0)):delete r[h]);if(s!==a)for(const h in s)(!e||!Se(e,h))&&(delete s[h],c=!0)}c&&Bn(t.attrs,"set","")}function $y(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Fs(l))continue;const c=e[l];let u;r&&Se(r,u=en(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:Ql(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=ye(n),c=a||Re;for(let u=0;u<s.length;u++){const h=s[u];n[h]=sh(r,l,h,c[h],t,!Se(c,h))}}return o}function sh(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=Se(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&se(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=Lo(r);i=c[n]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(n,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===ki(n))&&(i=!0))}return i}const NI=new WeakMap;function Fy(t,e,n=!1){const i=n?NI:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!se(t)){const u=h=>{l=!0;const[f,d]=Fy(h,e,!0);nt(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return Ne(t)&&i.set(t,Fr),Fr;if(re(s))for(let u=0;u<s.length;u++){const h=en(s[u]);_p(h)&&(o[h]=Re)}else if(s)for(const u in s){const h=en(u);if(_p(h)){const f=s[u],d=o[h]=re(f)||se(f)?{type:f}:nt({},f),p=d.type;let m=!1,w=!0;if(re(p))for(let b=0;b<p.length;++b){const y=p[b],_=se(y)&&y.name;if(_==="Boolean"){m=!0;break}else _==="String"&&(w=!1)}else m=se(p)&&p.name==="Boolean";d[0]=m,d[1]=w,(m||Se(d,"default"))&&a.push(h)}}const c=[o,a];return Ne(t)&&i.set(t,c),c}function _p(t){return t[0]!=="$"&&!Fs(t)}const Uy=t=>t[0]==="_"||t==="$stable",Ef=t=>re(t)?t.map(Tn):[Tn(t)],LI=(t,e,n)=>{if(e._n)return e;const i=He((...r)=>Ef(e(...r)),n);return i._c=!1,i},Vy=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Uy(r))continue;const s=t[r];if(se(s))e[r]=LI(r,s,i);else if(s!=null){const o=Ef(s);e[r]=()=>o}}},By=(t,e)=>{const n=Ef(e);t.slots.default=()=>n},qy=(t,e,n)=>{for(const i in e)(n||i!=="_")&&(t[i]=e[i])},MI=(t,e,n)=>{const i=t.slots=Ly();if(t.vnode.shapeFlag&32){const r=e._;r?(qy(i,e,n),n&&$v(i,"_",r,!0)):Vy(e,i)}else e&&By(t,e)},$I=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=Re;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:qy(r,e,n):(s=!e.$stable,Vy(e,r)),o=e}else e&&(By(t,e),o={default:1});if(s)for(const a in r)!Uy(a)&&o[a]==null&&delete r[a]},Tt=JI;function FI(t){return UI(t)}function UI(t,e){const n=Bl();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=An,insertStaticContent:p}=t,m=(g,v,T,R=null,D=null,P=null,G=void 0,H=null,B=!!v.dynamicChildren)=>{if(g===v)return;g&&!ji(g,v)&&(R=S(g),je(g,D,P,!0),g=null),v.patchFlag===-2&&(B=!1,v.dynamicChildren=null);const{type:F,ref:ie,shapeFlag:Q}=v;switch(F){case Yl:w(g,v,T,R);break;case Ct:b(g,v,T,R);break;case Ra:g==null&&y(v,T,R,G);break;case Lt:M(g,v,T,R,D,P,G,H,B);break;default:Q&1?I(g,v,T,R,D,P,G,H,B):Q&6?ee(g,v,T,R,D,P,G,H,B):(Q&64||Q&128)&&F.process(g,v,T,R,D,P,G,H,B,Y)}ie!=null&&D&&Ya(ie,g&&g.ref,P,v||g,!v)},w=(g,v,T,R)=>{if(g==null)i(v.el=a(v.children),T,R);else{const D=v.el=g.el;v.children!==g.children&&c(D,v.children)}},b=(g,v,T,R)=>{g==null?i(v.el=l(v.children||""),T,R):v.el=g.el},y=(g,v,T,R)=>{[g.el,g.anchor]=p(g.children,v,T,R,g.el,g.anchor)},_=({el:g,anchor:v},T,R)=>{let D;for(;g&&g!==v;)D=f(g),i(g,T,R),g=D;i(v,T,R)},E=({el:g,anchor:v})=>{let T;for(;g&&g!==v;)T=f(g),r(g),g=T;r(v)},I=(g,v,T,R,D,P,G,H,B)=>{v.type==="svg"?G="svg":v.type==="math"&&(G="mathml"),g==null?$(v,T,R,D,P,G,H,B):C(g,v,D,P,G,H,B)},$=(g,v,T,R,D,P,G,H)=>{let B,F;const{props:ie,shapeFlag:Q,transition:te,dirs:ce}=g;if(B=g.el=o(g.type,P,ie&&ie.is,ie),Q&8?u(B,g.children):Q&16&&x(g.children,B,null,R,D,nu(g,P),G,H),ce&&$i(g,null,R,"created"),L(B,g,g.scopeId,G,R),ie){for(const Pe in ie)Pe!=="value"&&!Fs(Pe)&&s(B,Pe,null,ie[Pe],P,R);"value"in ie&&s(B,"value",null,ie.value,P),(F=ie.onVnodeBeforeMount)&&_n(F,R,g)}ce&&$i(g,null,R,"beforeMount");const we=VI(D,te);we&&te.beforeEnter(B),i(B,v,T),((F=ie&&ie.onVnodeMounted)||we||ce)&&Tt(()=>{F&&_n(F,R,g),we&&te.enter(B),ce&&$i(g,null,R,"mounted")},D)},L=(g,v,T,R,D)=>{if(T&&d(g,T),R)for(let P=0;P<R.length;P++)d(g,R[P]);if(D){let P=D.subTree;if(v===P||Ky(P.type)&&(P.ssContent===v||P.ssFallback===v)){const G=D.vnode;L(g,G,G.scopeId,G.slotScopeIds,D.parent)}}},x=(g,v,T,R,D,P,G,H,B=0)=>{for(let F=B;F<g.length;F++){const ie=g[F]=H?hi(g[F]):Tn(g[F]);m(null,ie,v,T,R,D,P,G,H)}},C=(g,v,T,R,D,P,G)=>{const H=v.el=g.el;let{patchFlag:B,dynamicChildren:F,dirs:ie}=v;B|=g.patchFlag&16;const Q=g.props||Re,te=v.props||Re;let ce;if(T&&Fi(T,!1),(ce=te.onVnodeBeforeUpdate)&&_n(ce,T,v,g),ie&&$i(v,g,T,"beforeUpdate"),T&&Fi(T,!0),(Q.innerHTML&&te.innerHTML==null||Q.textContent&&te.textContent==null)&&u(H,""),F?N(g.dynamicChildren,F,H,T,R,nu(v,D),P):G||pe(g,v,H,null,T,R,nu(v,D),P,!1),B>0){if(B&16)K(H,Q,te,T,D);else if(B&2&&Q.class!==te.class&&s(H,"class",null,te.class,D),B&4&&s(H,"style",Q.style,te.style,D),B&8){const we=v.dynamicProps;for(let Pe=0;Pe<we.length;Pe++){const Ce=we[Pe],Ut=Q[Ce],Ot=te[Ce];(Ot!==Ut||Ce==="value")&&s(H,Ce,Ut,Ot,D,T)}}B&1&&g.children!==v.children&&u(H,v.children)}else!G&&F==null&&K(H,Q,te,T,D);((ce=te.onVnodeUpdated)||ie)&&Tt(()=>{ce&&_n(ce,T,v,g),ie&&$i(v,g,T,"updated")},R)},N=(g,v,T,R,D,P,G)=>{for(let H=0;H<v.length;H++){const B=g[H],F=v[H],ie=B.el&&(B.type===Lt||!ji(B,F)||B.shapeFlag&70)?h(B.el):T;m(B,F,ie,null,R,D,P,G,!0)}},K=(g,v,T,R,D)=>{if(v!==T){if(v!==Re)for(const P in v)!Fs(P)&&!(P in T)&&s(g,P,v[P],null,D,R);for(const P in T){if(Fs(P))continue;const G=T[P],H=v[P];G!==H&&P!=="value"&&s(g,P,H,G,D,R)}"value"in T&&s(g,"value",v.value,T.value,D)}},M=(g,v,T,R,D,P,G,H,B)=>{const F=v.el=g?g.el:a(""),ie=v.anchor=g?g.anchor:a("");let{patchFlag:Q,dynamicChildren:te,slotScopeIds:ce}=v;ce&&(H=H?H.concat(ce):ce),g==null?(i(F,T,R),i(ie,T,R),x(v.children||[],T,ie,D,P,G,H,B)):Q>0&&Q&64&&te&&g.dynamicChildren?(N(g.dynamicChildren,te,T,D,P,G,H),(v.key!=null||D&&v===D.subTree)&&Tf(g,v,!0)):pe(g,v,T,ie,D,P,G,H,B)},ee=(g,v,T,R,D,P,G,H,B)=>{v.slotScopeIds=H,g==null?v.shapeFlag&512?D.ctx.activate(v,T,R,G,B):V(v,T,R,D,P,G,B):oe(g,v,B)},V=(g,v,T,R,D,P,G)=>{const H=g.component=rS(g,R,D);if(No(g)&&(H.ctx.renderer=Y),sS(H,!1,G),H.asyncDep){if(D&&D.registerDep(H,ge,G),!g.el){const B=H.subTree=ue(Ct);b(null,B,v,T)}}else ge(H,g,v,T,D,P,G)},oe=(g,v,T)=>{const R=v.component=g.component;if(QI(g,v,T))if(R.asyncDep&&!R.asyncResolved){Z(R,v,T);return}else R.next=v,R.update();else v.el=g.el,R.vnode=v},ge=(g,v,T,R,D,P,G)=>{const H=()=>{if(g.isMounted){let{next:Q,bu:te,u:ce,parent:we,vnode:Pe}=g;{const yn=jy(g);if(yn){Q&&(Q.el=Pe.el,Z(g,Q,G)),yn.asyncDep.then(()=>{g.isUnmounted||H()});return}}let Ce=Q,Ut;Fi(g,!1),Q?(Q.el=Pe.el,Z(g,Q,G)):Q=Pe,te&&Wc(te),(Ut=Q.props&&Q.props.onVnodeBeforeUpdate)&&_n(Ut,we,Q,Pe),Fi(g,!0);const Ot=Ep(g),vn=g.subTree;g.subTree=Ot,m(vn,Ot,h(vn.el),S(vn),g,D,P),Q.el=Ot.el,Ce===null&&YI(g,Ot.el),ce&&Tt(ce,D),(Ut=Q.props&&Q.props.onVnodeUpdated)&&Tt(()=>_n(Ut,we,Q,Pe),D)}else{let Q;const{el:te,props:ce}=v,{bm:we,m:Pe,parent:Ce,root:Ut,type:Ot}=g,vn=qr(v);Fi(g,!1),we&&Wc(we),!vn&&(Q=ce&&ce.onVnodeBeforeMount)&&_n(Q,Ce,v),Fi(g,!0);{Ut.ce&&Ut.ce._injectChildStyle(Ot);const yn=g.subTree=Ep(g);m(null,yn,T,R,g,D,P),v.el=yn.el}if(Pe&&Tt(Pe,D),!vn&&(Q=ce&&ce.onVnodeMounted)){const yn=v;Tt(()=>_n(Q,Ce,yn),D)}(v.shapeFlag&256||Ce&&qr(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&g.a&&Tt(g.a,D),g.isMounted=!0,v=T=R=null}};g.scope.on();const B=g.effect=new Hv(H);g.scope.off();const F=g.update=B.run.bind(B),ie=g.job=B.runIfDirty.bind(B);ie.i=g,ie.id=g.uid,B.scheduler=()=>yf(ie),Fi(g,!0),F()},Z=(g,v,T)=>{v.component=g;const R=g.vnode.props;g.vnode=v,g.next=null,OI(g,v.props,R,T),$I(g,v.children,T),Ri(),cp(g),xi()},pe=(g,v,T,R,D,P,G,H,B=!1)=>{const F=g&&g.children,ie=g?g.shapeFlag:0,Q=v.children,{patchFlag:te,shapeFlag:ce}=v;if(te>0){if(te&128){ct(F,Q,T,R,D,P,G,H,B);return}else if(te&256){Ve(F,Q,T,R,D,P,G,H,B);return}}ce&8?(ie&16&&ne(F,D,P),Q!==F&&u(T,Q)):ie&16?ce&16?ct(F,Q,T,R,D,P,G,H,B):ne(F,D,P,!0):(ie&8&&u(T,""),ce&16&&x(Q,T,R,D,P,G,H,B))},Ve=(g,v,T,R,D,P,G,H,B)=>{g=g||Fr,v=v||Fr;const F=g.length,ie=v.length,Q=Math.min(F,ie);let te;for(te=0;te<Q;te++){const ce=v[te]=B?hi(v[te]):Tn(v[te]);m(g[te],ce,T,null,D,P,G,H,B)}F>ie?ne(g,D,P,!0,!1,Q):x(v,T,R,D,P,G,H,B,Q)},ct=(g,v,T,R,D,P,G,H,B)=>{let F=0;const ie=v.length;let Q=g.length-1,te=ie-1;for(;F<=Q&&F<=te;){const ce=g[F],we=v[F]=B?hi(v[F]):Tn(v[F]);if(ji(ce,we))m(ce,we,T,null,D,P,G,H,B);else break;F++}for(;F<=Q&&F<=te;){const ce=g[Q],we=v[te]=B?hi(v[te]):Tn(v[te]);if(ji(ce,we))m(ce,we,T,null,D,P,G,H,B);else break;Q--,te--}if(F>Q){if(F<=te){const ce=te+1,we=ce<ie?v[ce].el:R;for(;F<=te;)m(null,v[F]=B?hi(v[F]):Tn(v[F]),T,we,D,P,G,H,B),F++}}else if(F>te)for(;F<=Q;)je(g[F],D,P,!0),F++;else{const ce=F,we=F,Pe=new Map;for(F=we;F<=te;F++){const Vt=v[F]=B?hi(v[F]):Tn(v[F]);Vt.key!=null&&Pe.set(Vt.key,F)}let Ce,Ut=0;const Ot=te-we+1;let vn=!1,yn=0;const _s=new Array(Ot);for(F=0;F<Ot;F++)_s[F]=0;for(F=ce;F<=Q;F++){const Vt=g[F];if(Ut>=Ot){je(Vt,D,P,!0);continue}let wn;if(Vt.key!=null)wn=Pe.get(Vt.key);else for(Ce=we;Ce<=te;Ce++)if(_s[Ce-we]===0&&ji(Vt,v[Ce])){wn=Ce;break}wn===void 0?je(Vt,D,P,!0):(_s[wn-we]=F+1,wn>=yn?yn=wn:vn=!0,m(Vt,v[wn],T,null,D,P,G,H,B),Ut++)}const ip=vn?BI(_s):Fr;for(Ce=ip.length-1,F=Ot-1;F>=0;F--){const Vt=we+F,wn=v[Vt],rp=Vt+1<ie?v[Vt+1].el:R;_s[F]===0?m(null,wn,T,rp,D,P,G,H,B):vn&&(Ce<0||F!==ip[Ce]?Je(wn,T,rp,2):Ce--)}}},Je=(g,v,T,R,D=null)=>{const{el:P,type:G,transition:H,children:B,shapeFlag:F}=g;if(F&6){Je(g.component.subTree,v,T,R);return}if(F&128){g.suspense.move(v,T,R);return}if(F&64){G.move(g,v,T,Y);return}if(G===Lt){i(P,v,T);for(let Q=0;Q<B.length;Q++)Je(B[Q],v,T,R);i(g.anchor,v,T);return}if(G===Ra){_(g,v,T);return}if(R!==2&&F&1&&H)if(R===0)H.beforeEnter(P),i(P,v,T),Tt(()=>H.enter(P),D);else{const{leave:Q,delayLeave:te,afterLeave:ce}=H,we=()=>i(P,v,T),Pe=()=>{Q(P,()=>{we(),ce&&ce()})};te?te(P,we,Pe):Pe()}else i(P,v,T)},je=(g,v,T,R=!1,D=!1)=>{const{type:P,props:G,ref:H,children:B,dynamicChildren:F,shapeFlag:ie,patchFlag:Q,dirs:te,cacheIndex:ce}=g;if(Q===-2&&(D=!1),H!=null&&Ya(H,null,T,g,!0),ce!=null&&(v.renderCache[ce]=void 0),ie&256){v.ctx.deactivate(g);return}const we=ie&1&&te,Pe=!qr(g);let Ce;if(Pe&&(Ce=G&&G.onVnodeBeforeUnmount)&&_n(Ce,v,g),ie&6)sn(g.component,T,R);else{if(ie&128){g.suspense.unmount(T,R);return}we&&$i(g,null,v,"beforeUnmount"),ie&64?g.type.remove(g,v,T,Y,R):F&&!F.hasOnce&&(P!==Lt||Q>0&&Q&64)?ne(F,v,T,!1,!0):(P===Lt&&Q&384||!D&&ie&16)&&ne(B,v,T),R&&Pt(g)}(Pe&&(Ce=G&&G.onVnodeUnmounted)||we)&&Tt(()=>{Ce&&_n(Ce,v,g),we&&$i(g,null,v,"unmounted")},T)},Pt=g=>{const{type:v,el:T,anchor:R,transition:D}=g;if(v===Lt){Dt(T,R);return}if(v===Ra){E(g);return}const P=()=>{r(T),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(g.shapeFlag&1&&D&&!D.persisted){const{leave:G,delayLeave:H}=D,B=()=>G(T,P);H?H(g.el,P,B):B()}else P()},Dt=(g,v)=>{let T;for(;g!==v;)T=f(g),r(g),g=T;r(v)},sn=(g,v,T)=>{const{bum:R,scope:D,job:P,subTree:G,um:H,m:B,a:F}=g;bp(B),bp(F),R&&Wc(R),D.stop(),P&&(P.flags|=8,je(G,g,v,T)),H&&Tt(H,v),Tt(()=>{g.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},ne=(g,v,T,R=!1,D=!1,P=0)=>{for(let G=P;G<g.length;G++)je(g[G],v,T,R,D)},S=g=>{if(g.shapeFlag&6)return S(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const v=f(g.anchor||g.el),T=v&&v[py];return T?f(T):v};let q=!1;const k=(g,v,T)=>{g==null?v._vnode&&je(v._vnode,null,null,!0):m(v._vnode||null,g,v,null,null,null,T),v._vnode=g,q||(q=!0,cp(),hy(),q=!1)},Y={p:m,um:je,m:Je,r:Pt,mt:V,mc:x,pc:pe,pbc:N,n:S,o:t};return{render:k,hydrate:void 0,createApp:xI(k)}}function nu({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Fi({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function VI(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Tf(t,e,n=!1){const i=t.children,r=e.children;if(re(i)&&re(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=hi(r[s]),a.el=o.el),!n&&a.patchFlag!==-2&&Tf(o,a)),a.type===Yl&&(a.el=o.el)}}function BI(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function jy(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:jy(e)}function bp(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const qI=Symbol.for("v-scx"),jI=()=>kt(qI);function KF(t,e){return If(t,null,e)}function xe(t,e,n){return If(t,e,n)}function If(t,e,n=Re){const{immediate:i,deep:r,flush:s,once:o}=n,a=nt({},n),l=e&&i||!e&&s!=="post";let c;if(Xr){if(s==="sync"){const d=jI();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=An,d.resume=An,d.pause=An,d}}const u=Xe;a.call=(d,p,m)=>hn(d,u,p,m);let h=!1;s==="post"?a.scheduler=d=>{Tt(d,u&&u.suspense)}:s!=="sync"&&(h=!0,a.scheduler=(d,p)=>{p?d():yf(d)}),a.augmentJob=d=>{e&&(d.flags|=4),h&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const f=oI(t,e,a);return Xr&&(c?c.push(f):l&&f()),f}function HI(t,e,n){const i=this.proxy,r=Ue(t)?t.includes(".")?Hy(i,t):()=>i[t]:t.bind(i,i);let s;se(e)?s=e:(s=e.handler,n=e);const o=Lo(this),a=If(r,s.bind(i),n);return o(),a}function Hy(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const zI=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${en(e)}Modifiers`]||t[`${ki(e)}Modifiers`];function KI(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Re;let r=n;const s=e.startsWith("update:"),o=s&&zI(i,e.slice(7));o&&(o.trim&&(r=n.map(u=>Ue(u)?u.trim():u)),o.number&&(r=n.map(ET)));let a,l=i[a=Kc(e)]||i[a=Kc(en(e))];!l&&s&&(l=i[a=Kc(ki(e))]),l&&hn(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,hn(c,t,6,r)}}function zy(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!se(t)){const l=c=>{const u=zy(c,e,!0);u&&(a=!0,nt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(Ne(t)&&i.set(t,null),null):(re(s)?s.forEach(l=>o[l]=null):nt(o,s),Ne(t)&&i.set(t,o),o)}function Ql(t,e){return!t||!$l(e)?!1:(e=e.slice(2).replace(/Once$/,""),Se(t,e[0].toLowerCase()+e.slice(1))||Se(t,ki(e))||Se(t,e))}function Ep(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:d,ctx:p,inheritAttrs:m}=t,w=Qa(t);let b,y;try{if(n.shapeFlag&4){const E=r||i,I=E;b=Tn(c.call(I,E,u,h,d,f,p)),y=a}else{const E=e;b=Tn(E.length>1?E(h,{attrs:a,slots:o,emit:l}):E(h,null)),y=e.props?a:WI(a)}}catch(E){js.length=0,Oo(E,t,1),b=ue(Ct)}let _=b;if(y&&m!==!1){const E=Object.keys(y),{shapeFlag:I}=_;E.length&&I&7&&(s&&E.some(lf)&&(y=GI(y,s)),_=Ii(_,y,!1,!0))}return n.dirs&&(_=Ii(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&sr(_,n.transition),b=_,Qa(w),b}const WI=t=>{let e;for(const n in t)(n==="class"||n==="style"||$l(n))&&((e||(e={}))[n]=t[n]);return e},GI=(t,e)=>{const n={};for(const i in t)(!lf(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function QI(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Tp(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!Ql(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Tp(i,o,c):!0:!!o;return!1}function Tp(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!Ql(n,s))return!0}return!1}function YI({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Ky=t=>t.__isSuspense;function JI(t,e){e&&e.pendingBranch?re(t)?e.effects.push(...t):e.effects.push(t):cI(t)}const Lt=Symbol.for("v-fgt"),Yl=Symbol.for("v-txt"),Ct=Symbol.for("v-cmt"),Ra=Symbol.for("v-stc"),js=[];let Bt=null;function Qt(t=!1){js.push(Bt=t?null:[])}function XI(){js.pop(),Bt=js[js.length-1]||null}let ro=1;function Ip(t,e=!1){ro+=t,t<0&&Bt&&e&&(Bt.hasOnce=!0)}function Wy(t){return t.dynamicChildren=ro>0?Bt||Fr:null,XI(),ro>0&&Bt&&Bt.push(t),t}function WF(t,e,n,i,r,s){return Wy(Xa(t,e,n,i,r,s,!0))}function Yt(t,e,n,i,r){return Wy(ue(t,e,n,i,r,!0))}function so(t){return t?t.__v_isVNode===!0:!1}function ji(t,e){return t.type===e.type&&t.key===e.key}const Gy=({key:t})=>t??null,xa=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ue(t)||Fe(t)||se(t)?{i:Ze,r:t,k:e,f:!!n}:t:null);function Xa(t,e=null,n=null,i=0,r=null,s=t===Lt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Gy(e),ref:e&&xa(e),scopeId:dy,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ze};return a?(Sf(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Ue(n)?8:16),ro>0&&!o&&Bt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Bt.push(l),l}const ue=ZI;function ZI(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===ky)&&(t=Ct),so(t)){const a=Ii(t,e,!0);return n&&Sf(a,n),ro>0&&!s&&Bt&&(a.shapeFlag&6?Bt[Bt.indexOf(t)]=a:Bt.push(a)),a.patchFlag=-2,a}if(uS(t)&&(t=t.__vccOpts),e){e=eS(e);let{class:a,style:l}=e;a&&!Ue(a)&&(e.class=ql(a)),Ne(l)&&(vf(l)&&!re(l)&&(l=nt({},l)),e.style=Po(l))}const o=Ue(t)?1:Ky(t)?128:gy(t)?64:Ne(t)?4:se(t)?2:0;return Xa(t,e,n,i,r,o,s,!0)}function eS(t){return t?vf(t)||My(t)?nt({},t):t:null}function Ii(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=t,c=e?tS(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Gy(c),ref:e&&e.ref?n&&s?re(s)?s.concat(xa(e)):[s,xa(e)]:xa(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Lt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ii(t.ssContent),ssFallback:t.ssFallback&&Ii(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&sr(u,l.clone(u)),u}function Rs(t=" ",e=0){return ue(Yl,null,t,e)}function GF(t,e){const n=ue(Ra,null,t);return n.staticCount=e,n}function Sp(t="",e=!1){return e?(Qt(),Yt(Ct,null,t)):ue(Ct,null,t)}function Tn(t){return t==null||typeof t=="boolean"?ue(Ct):re(t)?ue(Lt,null,t.slice()):so(t)?hi(t):ue(Yl,null,String(t))}function hi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ii(t)}function Sf(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(re(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Sf(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!My(e)?e._ctx=Ze:r===3&&Ze&&(Ze.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else se(e)?(e={default:e,_ctx:Ze},n=32):(e=String(e),i&64?(n=16,e=[Rs(e)]):n=8);t.children=e,t.shapeFlag|=n}function tS(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=ql([e.class,i.class]));else if(r==="style")e.style=Po([e.style,i.style]);else if($l(r)){const s=e[r],o=i[r];o&&s!==o&&!(re(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function _n(t,e,n,i=null){hn(t,e,7,[n,i])}const nS=Oy();let iS=0;function rS(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||nS,s={uid:iS++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Bv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Fy(i,r),emitsOptions:zy(i,r),emit:null,emitted:null,propsDefaults:Re,inheritAttrs:i.inheritAttrs,ctx:Re,data:Re,props:Re,attrs:Re,slots:Re,refs:Re,setupState:Re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=KI.bind(null,s),t.ce&&t.ce(s),s}let Xe=null;const Ke=()=>Xe||Ze;let Za,oh;{const t=Bl(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Za=e("__VUE_INSTANCE_SETTERS__",n=>Xe=n),oh=e("__VUE_SSR_SETTERS__",n=>Xr=n)}const Lo=t=>{const e=Xe;return Za(t),t.scope.on(),()=>{t.scope.off(),Za(e)}},Cp=()=>{Xe&&Xe.scope.off(),Za(null)};function Qy(t){return t.vnode.shapeFlag&4}let Xr=!1;function sS(t,e=!1,n=!1){e&&oh(e);const{props:i,children:r}=t.vnode,s=Qy(t);DI(t,i,s,e),MI(t,r,n);const o=s?oS(t,e):void 0;return e&&oh(!1),o}function oS(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,TI);const{setup:i}=n;if(i){Ri();const r=t.setupContext=i.length>1?lS(t):null,s=Lo(t),o=Do(i,t,0,[t.props,r]),a=Nv(o);if(xi(),s(),(a||t.sp)&&!qr(t)&&_f(t),a){if(o.then(Cp,Cp),e)return o.then(l=>{Ap(t,l)}).catch(l=>{Oo(l,t,0)});t.asyncDep=o}else Ap(t,o)}else Yy(t)}function Ap(t,e,n){se(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ne(e)&&(t.setupState=oy(e)),Yy(t)}function Yy(t,e,n){const i=t.type;t.render||(t.render=i.render||An);{const r=Lo(t);Ri();try{II(t)}finally{xi(),r()}}}const aS={get(t,e){return dt(t,"get",""),t[e]}};function lS(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,aS),slots:t.slots,emit:t.emit,expose:e}}function Jl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(oy(mr(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in qs)return qs[n](t)},has(e,n){return n in e||n in qs}})):t.proxy}function cS(t,e=!0){return se(t)?t.displayName||t.name:t.name||e&&t.__name}function uS(t){return se(t)&&"__vccOpts"in t}const O=(t,e)=>rI(t,e,Xr);function j(t,e,n){const i=arguments.length;return i===2?Ne(e)&&!re(e)?so(e)?ue(t,null,[e]):ue(t,e):ue(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&so(n)&&(n=[n]),ue(t,e,n))}const hS="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ah;const kp=typeof window<"u"&&window.trustedTypes;if(kp)try{ah=kp.createPolicy("vue",{createHTML:t=>t})}catch{}const Jy=ah?t=>ah.createHTML(t):t=>t,fS="http://www.w3.org/2000/svg",dS="http://www.w3.org/1998/Math/MathML",Fn=typeof document<"u"?document:null,Rp=Fn&&Fn.createElement("template"),pS={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?Fn.createElementNS(fS,t):e==="mathml"?Fn.createElementNS(dS,t):n?Fn.createElement(t,{is:n}):Fn.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Fn.createTextNode(t),createComment:t=>Fn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Fn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Rp.innerHTML=Jy(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=Rp.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ri="transition",Es="animation",Zr=Symbol("_vtc"),Xy={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Zy=nt({},wy,Xy),gS=t=>(t.displayName="Transition",t.props=Zy,t),el=gS((t,{slots:e})=>j(dI,ew(t),e)),Ui=(t,e=[])=>{re(t)?t.forEach(n=>n(...e)):t&&t(...e)},xp=t=>t?re(t)?t.some(e=>e.length>1):t.length>1:!1;function ew(t){const e={};for(const M in t)M in Xy||(e[M]=t[M]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=t,p=mS(r),m=p&&p[0],w=p&&p[1],{onBeforeEnter:b,onEnter:y,onEnterCancelled:_,onLeave:E,onLeaveCancelled:I,onBeforeAppear:$=b,onAppear:L=y,onAppearCancelled:x=_}=e,C=(M,ee,V,oe)=>{M._enterCancelled=oe,ai(M,ee?u:a),ai(M,ee?c:o),V&&V()},N=(M,ee)=>{M._isLeaving=!1,ai(M,h),ai(M,d),ai(M,f),ee&&ee()},K=M=>(ee,V)=>{const oe=M?L:y,ge=()=>C(ee,M,V);Ui(oe,[ee,ge]),Pp(()=>{ai(ee,M?l:s),bn(ee,M?u:a),xp(oe)||Dp(ee,i,m,ge)})};return nt(e,{onBeforeEnter(M){Ui(b,[M]),bn(M,s),bn(M,o)},onBeforeAppear(M){Ui($,[M]),bn(M,l),bn(M,c)},onEnter:K(!1),onAppear:K(!0),onLeave(M,ee){M._isLeaving=!0;const V=()=>N(M,ee);bn(M,h),M._enterCancelled?(bn(M,f),lh()):(lh(),bn(M,f)),Pp(()=>{M._isLeaving&&(ai(M,h),bn(M,d),xp(E)||Dp(M,i,w,V))}),Ui(E,[M,V])},onEnterCancelled(M){C(M,!1,void 0,!0),Ui(_,[M])},onAppearCancelled(M){C(M,!0,void 0,!0),Ui(x,[M])},onLeaveCancelled(M){N(M),Ui(I,[M])}})}function mS(t){if(t==null)return null;if(Ne(t))return[iu(t.enter),iu(t.leave)];{const e=iu(t);return[e,e]}}function iu(t){return TT(t)}function bn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Zr]||(t[Zr]=new Set)).add(e)}function ai(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[Zr];n&&(n.delete(e),n.size||(t[Zr]=void 0))}function Pp(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let vS=0;function Dp(t,e,n,i){const r=t._endId=++vS,s=()=>{r===t._endId&&i()};if(n!=null)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=tw(t,e);if(!o)return i();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,f),s()},f=d=>{d.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,f)}function tw(t,e){const n=window.getComputedStyle(t),i=p=>(n[p]||"").split(", "),r=i(`${ri}Delay`),s=i(`${ri}Duration`),o=Op(r,s),a=i(`${Es}Delay`),l=i(`${Es}Duration`),c=Op(a,l);let u=null,h=0,f=0;e===ri?o>0&&(u=ri,h=o,f=s.length):e===Es?c>0&&(u=Es,h=c,f=l.length):(h=Math.max(o,c),u=h>0?o>c?ri:Es:null,f=u?u===ri?s.length:l.length:0);const d=u===ri&&/\b(transform|all)(,|$)/.test(i(`${ri}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:d}}function Op(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Np(n)+Np(t[i])))}function Np(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function lh(){return document.body.offsetHeight}function yS(t,e,n){const i=t[Zr];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Lp=Symbol("_vod"),wS=Symbol("_vsh"),_S=Symbol(""),bS=/(^|;)\s*display\s*:/;function ES(t,e,n){const i=t.style,r=Ue(n);let s=!1;if(n&&!r){if(e)if(Ue(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Pa(i,a,"")}else for(const o in e)n[o]==null&&Pa(i,o,"");for(const o in n)o==="display"&&(s=!0),Pa(i,o,n[o])}else if(r){if(e!==n){const o=i[_S];o&&(n+=";"+o),i.cssText=n,s=bS.test(n)}}else e&&t.removeAttribute("style");Lp in t&&(t[Lp]=s?i.display:"",t[wS]&&(i.display="none"))}const Mp=/\s*!important$/;function Pa(t,e,n){if(re(n))n.forEach(i=>Pa(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=TS(t,e);Mp.test(n)?t.setProperty(ki(i),n.replace(Mp,""),"important"):t[i]=n}}const $p=["Webkit","Moz","ms"],ru={};function TS(t,e){const n=ru[e];if(n)return n;let i=en(e);if(i!=="filter"&&i in t)return ru[e]=i;i=Vl(i);for(let r=0;r<$p.length;r++){const s=$p[r]+i;if(s in t)return ru[e]=s}return e}const Fp="http://www.w3.org/1999/xlink";function Up(t,e,n,i,r,s=RT(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Fp,e.slice(6,e.length)):t.setAttributeNS(Fp,e,n):n==null||s&&!Fv(n)?t.removeAttribute(e):t.setAttribute(e,s?"":ti(n)?String(n):n)}function Vp(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Jy(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Fv(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function IS(t,e,n,i){t.addEventListener(e,n,i)}function SS(t,e,n,i){t.removeEventListener(e,n,i)}const Bp=Symbol("_vei");function CS(t,e,n,i,r=null){const s=t[Bp]||(t[Bp]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=AS(e);if(i){const c=s[e]=xS(i,r);IS(t,a,c,l)}else o&&(SS(t,a,o,l),s[e]=void 0)}}const qp=/(?:Once|Passive|Capture)$/;function AS(t){let e;if(qp.test(t)){e={};let i;for(;i=t.match(qp);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ki(t.slice(2)),e]}let su=0;const kS=Promise.resolve(),RS=()=>su||(kS.then(()=>su=0),su=Date.now());function xS(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;hn(PS(i,n.value),e,5,[i])};return n.value=t,n.attached=RS(),n}function PS(t,e){if(re(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const jp=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,DS=(t,e,n,i,r,s)=>{const o=r==="svg";e==="class"?yS(t,i,o):e==="style"?ES(t,n,i):$l(e)?lf(e)||CS(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):OS(t,e,i,o))?(Vp(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Up(t,e,i,o,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ue(i))?Vp(t,en(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Up(t,e,i,o))};function OS(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&jp(e)&&se(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return jp(e)&&Ue(n)?!1:e in t}const nw=new WeakMap,iw=new WeakMap,tl=Symbol("_moveCb"),Hp=Symbol("_enterCb"),NS=t=>(delete t.props.mode,t),LS=NS({name:"TransitionGroup",props:nt({},Zy,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Ke(),i=yy();let r,s;return Iy(()=>{if(!r.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!VS(r[0].el,n.vnode.el,o))return;r.forEach($S),r.forEach(FS);const a=r.filter(US);lh(),a.forEach(l=>{const c=l.el,u=c.style;bn(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=c[tl]=f=>{f&&f.target!==c||(!f||/transform$/.test(f.propertyName))&&(c.removeEventListener("transitionend",h),c[tl]=null,ai(c,o))};c.addEventListener("transitionend",h)})}),()=>{const o=ye(t),a=ew(o);let l=o.tag||Lt;if(r=[],s)for(let c=0;c<s.length;c++){const u=s[c];u.el&&u.el instanceof Element&&(r.push(u),sr(u,io(u,a,i,n)),nw.set(u,u.el.getBoundingClientRect()))}s=e.default?wf(e.default()):[];for(let c=0;c<s.length;c++){const u=s[c];u.key!=null&&sr(u,io(u,a,i,n))}return ue(l,null,s)}}}),MS=LS;function $S(t){const e=t.el;e[tl]&&e[tl](),e[Hp]&&e[Hp]()}function FS(t){iw.set(t,t.el.getBoundingClientRect())}function US(t){const e=nw.get(t),n=iw.get(t),i=e.left-n.left,r=e.top-n.top;if(i||r){const s=t.el.style;return s.transform=s.webkitTransform=`translate(${i}px,${r}px)`,s.transitionDuration="0s",t}}function VS(t,e,n){const i=t.cloneNode(),r=t[Zr];r&&r.forEach(a=>{a.split(/\s+/).forEach(l=>l&&i.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&i.classList.add(a)),i.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(i);const{hasTransform:o}=tw(i);return s.removeChild(i),o}const BS=["ctrl","shift","alt","meta"],qS={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>BS.some(n=>t[`${n}Key`]&&!e.includes(n))},QF=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(r,...s)=>{for(let o=0;o<e.length;o++){const a=qS[e[o]];if(a&&a(r,e))return}return t(r,...s)})},jS={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},YF=(t,e)=>{const n=t._withKeys||(t._withKeys={}),i=e.join(".");return n[i]||(n[i]=r=>{if(!("key"in r))return;const s=ki(r.key);if(e.some(o=>o===s||jS[o]===s))return t(r)})},HS=nt({patchProp:DS},pS);let zp;function zS(){return zp||(zp=FI(HS))}const rw=(...t)=>{const e=zS().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=WS(i);if(!r)return;const s=e._component;!se(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,KS(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function KS(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function WS(t){return Ue(t)?document.querySelector(t):t}function Xl(t,e,n,i){return Object.defineProperty(t,e,{get:n,set:i,enumerable:!0}),t}const Qn=de(!1);let ch;function GS(t,e){const n=/(edg|edge|edga|edgios)\/([\w.]+)/.exec(t)||/(opr)[\/]([\w.]+)/.exec(t)||/(vivaldi)[\/]([\w.]+)/.exec(t)||/(chrome|crios)[\/]([\w.]+)/.exec(t)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(t)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(t)||/(firefox|fxios)[\/]([\w.]+)/.exec(t)||/(webkit)[\/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(t)||[];return{browser:n[5]||n[3]||n[1]||"",version:n[4]||n[2]||"0",platform:e[0]||""}}function QS(t){return/(ipad)/.exec(t)||/(ipod)/.exec(t)||/(windows phone)/.exec(t)||/(iphone)/.exec(t)||/(kindle)/.exec(t)||/(silk)/.exec(t)||/(android)/.exec(t)||/(win)/.exec(t)||/(mac)/.exec(t)||/(linux)/.exec(t)||/(cros)/.exec(t)||/(playbook)/.exec(t)||/(bb)/.exec(t)||/(blackberry)/.exec(t)||[]}const sw="ontouchstart"in window||window.navigator.maxTouchPoints>0;function YS(t){const e=t.toLowerCase(),n=QS(e),i=GS(e,n),r={mobile:!1,desktop:!1,cordova:!1,capacitor:!1,nativeMobile:!1,electron:!1,bex:!1,linux:!1,mac:!1,win:!1,cros:!1,chrome:!1,firefox:!1,opera:!1,safari:!1,vivaldi:!1,edge:!1,edgeChromium:!1,ie:!1,webkit:!1,android:!1,ios:!1,ipad:!1,iphone:!1,ipod:!1,kindle:!1,winphone:!1,blackberry:!1,playbook:!1,silk:!1};i.browser&&(r[i.browser]=!0,r.version=i.version,r.versionNumber=parseInt(i.version,10)),i.platform&&(r[i.platform]=!0);const s=r.android||r.ios||r.bb||r.blackberry||r.ipad||r.iphone||r.ipod||r.kindle||r.playbook||r.silk||r["windows phone"];if(s===!0||e.indexOf("mobile")!==-1?r.mobile=!0:r.desktop=!0,r["windows phone"]&&(r.winphone=!0,delete r["windows phone"]),r.edga||r.edgios||r.edg?(r.edge=!0,i.browser="edge"):r.crios?(r.chrome=!0,i.browser="chrome"):r.fxios&&(r.firefox=!0,i.browser="firefox"),(r.ipod||r.ipad||r.iphone)&&(r.ios=!0),r.vivaldi&&(i.browser="vivaldi",r.vivaldi=!0),(r.chrome||r.opr||r.safari||r.vivaldi||r.mobile===!0&&r.ios!==!0&&s!==!0)&&(r.webkit=!0),r.opr&&(i.browser="opera",r.opera=!0),r.safari&&(r.blackberry||r.bb?(i.browser="blackberry",r.blackberry=!0):r.playbook?(i.browser="playbook",r.playbook=!0):r.android?(i.browser="android",r.android=!0):r.kindle?(i.browser="kindle",r.kindle=!0):r.silk&&(i.browser="silk",r.silk=!0)),r.name=i.browser,r.platform=i.platform,e.indexOf("electron")!==-1)r.electron=!0;else if(document.location.href.indexOf("-extension://")!==-1)r.bex=!0;else{if(window.Capacitor!==void 0?(r.capacitor=!0,r.nativeMobile=!0,r.nativeMobileWrapper="capacitor"):(window._cordovaNative!==void 0||window.cordova!==void 0)&&(r.cordova=!0,r.nativeMobile=!0,r.nativeMobileWrapper="cordova"),Qn.value===!0&&(ch={is:{...r}}),sw===!0&&r.mac===!0&&(r.desktop===!0&&r.safari===!0||r.nativeMobile===!0&&r.android!==!0&&r.ios!==!0&&r.ipad!==!0)){delete r.mac,delete r.desktop;const o=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(r,{mobile:!0,ios:!0,platform:o,[o]:!0})}r.mobile!==!0&&window.navigator.userAgentData&&window.navigator.userAgentData.mobile&&(delete r.desktop,r.mobile=!0)}return r}const Kp=navigator.userAgent||navigator.vendor||window.opera,JS={has:{touch:!1,webStorage:!1},within:{iframe:!1}},et={userAgent:Kp,is:YS(Kp),has:{touch:sw},within:{iframe:window.self!==window.top}},nl={install(t){const{$q:e}=t;Qn.value===!0?(t.onSSRHydrated.push(()=>{Object.assign(e.platform,et),Qn.value=!1}),e.platform=an(this)):e.platform=this}};{let t;Xl(et.has,"webStorage",()=>{if(t!==void 0)return t;try{if(window.localStorage)return t=!0,!0}catch{}return t=!1,!1}),Object.assign(nl,et),Qn.value===!0&&(Object.assign(nl,ch,JS),ch=null)}function qe(t){return mr(Kl(t))}function ow(t){return mr(t)}const Mo=(t,e)=>{const n=an(t);for(const i in t)Xl(e,i,()=>n[i],r=>{n[i]=r});return e},Qe={hasPassive:!1,passiveCapture:!0,notPassiveCapture:!0};try{const t=Object.defineProperty({},"passive",{get(){Object.assign(Qe,{hasPassive:!0,passive:{passive:!0},notPassive:{passive:!1},passiveCapture:{passive:!0,capture:!0},notPassiveCapture:{passive:!1,capture:!0}})}});window.addEventListener("qtest",null,t),window.removeEventListener("qtest",null,t)}catch{}function ln(){}function JF(t){return t.button===0}function aw(t){return t.touches&&t.touches[0]?t=t.touches[0]:t.changedTouches&&t.changedTouches[0]?t=t.changedTouches[0]:t.targetTouches&&t.targetTouches[0]&&(t=t.targetTouches[0]),{top:t.clientY,left:t.clientX}}function XS(t){if(t.path)return t.path;if(t.composedPath)return t.composedPath();const e=[];let n=t.target;for(;n;){if(e.push(n),n.tagName==="HTML")return e.push(document),e.push(window),e;n=n.parentElement}}function lw(t){t.stopPropagation()}function oo(t){t.cancelable!==!1&&t.preventDefault()}function Vn(t){t.cancelable!==!1&&t.preventDefault(),t.stopPropagation()}function XF(t,e){if(t===void 0||e===!0&&t.__dragPrevented===!0)return;const n=e===!0?i=>{i.__dragPrevented=!0,i.addEventListener("dragstart",oo,Qe.notPassiveCapture)}:i=>{delete i.__dragPrevented,i.removeEventListener("dragstart",oo,Qe.notPassiveCapture)};t.querySelectorAll("a, img").forEach(n)}function uh(t,e,n){const i=`__q_${e}_evt`;t[i]=t[i]!==void 0?t[i].concat(n):n,n.forEach(r=>{r[0].addEventListener(r[1],t[r[2]],Qe[r[3]])})}function cw(t,e){const n=`__q_${e}_evt`;t[n]!==void 0&&(t[n].forEach(i=>{i[0].removeEventListener(i[1],t[i[2]],Qe[i[3]])}),t[n]=void 0)}function ZS(t,e=250,n){let i=null;function r(){const s=arguments,o=()=>{i=null,t.apply(this,s)};i!==null&&clearTimeout(i),i=setTimeout(o,e)}return r.cancel=()=>{i!==null&&clearTimeout(i)},r}const ou=["sm","md","lg","xl"],{passive:Wp}=Qe,eC=Mo({width:0,height:0,name:"xs",sizes:{sm:600,md:1024,lg:1440,xl:1920},lt:{sm:!0,md:!0,lg:!0,xl:!0},gt:{xs:!1,sm:!1,md:!1,lg:!1},xs:!0,sm:!1,md:!1,lg:!1,xl:!1},{setSizes:ln,setDebounce:ln,install({$q:t,onSSRHydrated:e}){if(t.screen=this,this.__installed===!0){t.config.screen!==void 0&&(t.config.screen.bodyClasses===!1?document.body.classList.remove(`screen--${this.name}`):this.__update(!0));return}const{visualViewport:n}=window,i=n||window,r=document.scrollingElement||document.documentElement,s=n===void 0||et.is.mobile===!0?()=>[Math.max(window.innerWidth,r.clientWidth),Math.max(window.innerHeight,r.clientHeight)]:()=>[n.width*n.scale+window.innerWidth-r.clientWidth,n.height*n.scale+window.innerHeight-r.clientHeight],o=t.config.screen!==void 0&&t.config.screen.bodyClasses===!0;this.__update=h=>{const[f,d]=s();if(d!==this.height&&(this.height=d),f!==this.width)this.width=f;else if(h!==!0)return;let p=this.sizes;this.gt.xs=f>=p.sm,this.gt.sm=f>=p.md,this.gt.md=f>=p.lg,this.gt.lg=f>=p.xl,this.lt.sm=f<p.sm,this.lt.md=f<p.md,this.lt.lg=f<p.lg,this.lt.xl=f<p.xl,this.xs=this.lt.sm,this.sm=this.gt.xs===!0&&this.lt.md===!0,this.md=this.gt.sm===!0&&this.lt.lg===!0,this.lg=this.gt.md===!0&&this.lt.xl===!0,this.xl=this.gt.lg,p=this.xs===!0&&"xs"||this.sm===!0&&"sm"||this.md===!0&&"md"||this.lg===!0&&"lg"||"xl",p!==this.name&&(o===!0&&(document.body.classList.remove(`screen--${this.name}`),document.body.classList.add(`screen--${p}`)),this.name=p)};let a,l={},c=16;this.setSizes=h=>{ou.forEach(f=>{h[f]!==void 0&&(l[f]=h[f])})},this.setDebounce=h=>{c=h};const u=()=>{const h=getComputedStyle(document.body);h.getPropertyValue("--q-size-sm")&&ou.forEach(f=>{this.sizes[f]=parseInt(h.getPropertyValue(`--q-size-${f}`),10)}),this.setSizes=f=>{ou.forEach(d=>{f[d]&&(this.sizes[d]=f[d])}),this.__update(!0)},this.setDebounce=f=>{a!==void 0&&i.removeEventListener("resize",a,Wp),a=f>0?ZS(this.__update,f):this.__update,i.addEventListener("resize",a,Wp)},this.setDebounce(c),Object.keys(l).length!==0?(this.setSizes(l),l=void 0):this.__update(),o===!0&&this.name==="xs"&&document.body.classList.add("screen--xs")};Qn.value===!0?e.push(u):u()}}),ht=Mo({isActive:!1,mode:!1},{__media:void 0,set(t){ht.mode=t,t==="auto"?(ht.__media===void 0&&(ht.__media=window.matchMedia("(prefers-color-scheme: dark)"),ht.__updateMedia=()=>{ht.set("auto")},ht.__media.addListener(ht.__updateMedia)),t=ht.__media.matches):ht.__media!==void 0&&(ht.__media.removeListener(ht.__updateMedia),ht.__media=void 0),ht.isActive=t===!0,document.body.classList.remove(`body--${t===!0?"light":"dark"}`),document.body.classList.add(`body--${t===!0?"dark":"light"}`)},toggle(){ht.set(ht.isActive===!1)},install({$q:t,ssrContext:e}){const{dark:n}=t.config;t.dark=this,this.__installed!==!0&&this.set(n!==void 0?n:!1)}});function tC(t,e,n=document.body){if(typeof t!="string")throw new TypeError("Expected a string as propName");if(typeof e!="string")throw new TypeError("Expected a string as value");if(!(n instanceof Element))throw new TypeError("Expected a DOM element");n.style.setProperty(`--q-${t}`,e)}let uw=!1;function nC(t){uw=t.isComposing===!0}function iC(t){return uw===!0||t!==Object(t)||t.isComposing===!0||t.qKeyEvent===!0}function or(t,e){return iC(t)===!0?!1:[].concat(e).includes(t.keyCode)}function hw(t){if(t.ios===!0)return"ios";if(t.android===!0)return"android"}function rC({is:t,has:e,within:n},i){const r=[t.desktop===!0?"desktop":"mobile",`${e.touch===!1?"no-":""}touch`];if(t.mobile===!0){const s=hw(t);s!==void 0&&r.push("platform-"+s)}if(t.nativeMobile===!0){const s=t.nativeMobileWrapper;r.push(s),r.push("native-mobile"),t.ios===!0&&(i[s]===void 0||i[s].iosStatusBarPadding!==!1)&&r.push("q-ios-padding")}else t.electron===!0?r.push("electron"):t.bex===!0&&r.push("bex");return n.iframe===!0&&r.push("within-iframe"),r}function sC(){const{is:t}=et,e=document.body.className,n=new Set(e.replace(/ {2}/g," ").split(" "));if(t.nativeMobile!==!0&&t.electron!==!0&&t.bex!==!0){if(t.desktop===!0)n.delete("mobile"),n.delete("platform-ios"),n.delete("platform-android"),n.add("desktop");else if(t.mobile===!0){n.delete("desktop"),n.add("mobile"),n.delete("platform-ios"),n.delete("platform-android");const r=hw(t);r!==void 0&&n.add(`platform-${r}`)}}et.has.touch===!0&&(n.delete("no-touch"),n.add("touch")),et.within.iframe===!0&&n.add("within-iframe");const i=Array.from(n).join(" ");e!==i&&(document.body.className=i)}function oC(t){for(const e in t)tC(e,t[e])}const aC={install(t){if(this.__installed!==!0){if(Qn.value===!0)sC();else{const{$q:e}=t;e.config.brand!==void 0&&oC(e.config.brand);const n=rC(et,e.config);document.body.classList.add.apply(document.body.classList,n)}et.is.ios===!0&&document.body.addEventListener("touchstart",ln),window.addEventListener("keydown",nC,!0)}}},fw=()=>!0;function lC(t){return typeof t=="string"&&t!==""&&t!=="/"&&t!=="#/"}function cC(t){return t.startsWith("#")===!0&&(t=t.substring(1)),t.startsWith("/")===!1&&(t="/"+t),t.endsWith("/")===!0&&(t=t.substring(0,t.length-1)),"#"+t}function uC(t){if(t.backButtonExit===!1)return()=>!1;if(t.backButtonExit==="*")return fw;const e=["#/"];return Array.isArray(t.backButtonExit)===!0&&e.push(...t.backButtonExit.filter(lC).map(cC)),()=>e.includes(window.location.hash)}const hh={__history:[],add:ln,remove:ln,install({$q:t}){if(this.__installed===!0)return;const{cordova:e,capacitor:n}=et.is;if(e!==!0&&n!==!0)return;const i=t.config[e===!0?"cordova":"capacitor"];if(i!==void 0&&i.backButton===!1||n===!0&&(window.Capacitor===void 0||window.Capacitor.Plugins.App===void 0))return;this.add=o=>{o.condition===void 0&&(o.condition=fw),this.__history.push(o)},this.remove=o=>{const a=this.__history.indexOf(o);a>=0&&this.__history.splice(a,1)};const r=uC(Object.assign({backButtonExit:!0},i)),s=()=>{if(this.__history.length){const o=this.__history[this.__history.length-1];o.condition()===!0&&(this.__history.pop(),o.handler())}else r()===!0?navigator.app.exitApp():window.history.back()};e===!0?document.addEventListener("deviceready",()=>{document.addEventListener("backbutton",s,!1)}):window.Capacitor.Plugins.App.addListener("backButton",s)}},Gp={isoName:"en-US",nativeName:"English (US)",label:{clear:"Clear",ok:"OK",cancel:"Cancel",close:"Close",set:"Set",select:"Select",reset:"Reset",remove:"Remove",update:"Update",create:"Create",search:"Search",filter:"Filter",refresh:"Refresh",expand:t=>t?`Expand "${t}"`:"Expand",collapse:t=>t?`Collapse "${t}"`:"Collapse"},date:{days:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),daysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),firstDayOfWeek:0,format24h:!1,pluralDay:"days"},table:{noData:"No data available",noResults:"No matching records found",loading:"Loading...",selectedRecords:t=>t===1?"1 record selected.":(t===0?"No":t)+" records selected.",recordsPerPage:"Records per page:",allRows:"All",pagination:(t,e,n)=>t+"-"+e+" of "+n,columns:"Columns"},editor:{url:"URL",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",unorderedList:"Unordered List",orderedList:"Ordered List",subscript:"Subscript",superscript:"Superscript",hyperlink:"Hyperlink",toggleFullscreen:"Toggle Fullscreen",quote:"Quote",left:"Left align",center:"Center align",right:"Right align",justify:"Justify align",print:"Print",outdent:"Decrease indentation",indent:"Increase indentation",removeFormat:"Remove formatting",formatting:"Formatting",fontSize:"Font Size",align:"Align",hr:"Insert Horizontal Rule",undo:"Undo",redo:"Redo",heading1:"Heading 1",heading2:"Heading 2",heading3:"Heading 3",heading4:"Heading 4",heading5:"Heading 5",heading6:"Heading 6",paragraph:"Paragraph",code:"Code",size1:"Very small",size2:"A bit small",size3:"Normal",size4:"Medium-large",size5:"Big",size6:"Very big",size7:"Maximum",defaultFont:"Default Font",viewSource:"View Source"},tree:{noNodes:"No nodes available",noResults:"No matching nodes found"}};function Qp(){const t=Array.isArray(navigator.languages)===!0&&navigator.languages.length!==0?navigator.languages[0]:navigator.language;if(typeof t=="string")return t.split(/[-_]/).map((e,n)=>n===0?e.toLowerCase():n>1||e.length<4?e.toUpperCase():e[0].toUpperCase()+e.slice(1).toLowerCase()).join("-")}const fi=Mo({__qLang:{}},{getLocale:Qp,set(t=Gp,e){const n={...t,rtl:t.rtl===!0,getLocale:Qp};{if(n.set=fi.set,fi.__langConfig===void 0||fi.__langConfig.noHtmlAttrs!==!0){const i=document.documentElement;i.setAttribute("dir",n.rtl===!0?"rtl":"ltr"),i.setAttribute("lang",n.isoName)}Object.assign(fi.__qLang,n)}},install({$q:t,lang:e,ssrContext:n}){t.lang=fi.__qLang,fi.__langConfig=t.config.lang,this.__installed===!0?e!==void 0&&this.set(e):(this.props=new Proxy(this.__qLang,{get(){return Reflect.get(...arguments)},ownKeys(i){return Reflect.ownKeys(i).filter(r=>r!=="set"&&r!=="getLocale")}}),this.set(e||Gp))}}),hC={name:"material-icons",type:{positive:"check_circle",negative:"warning",info:"info",warning:"priority_high"},arrow:{up:"arrow_upward",right:"arrow_forward",down:"arrow_downward",left:"arrow_back",dropdown:"arrow_drop_down"},chevron:{left:"chevron_left",right:"chevron_right"},colorPicker:{spectrum:"gradient",tune:"tune",palette:"style"},pullToRefresh:{icon:"refresh"},carousel:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down",navigationIcon:"lens"},chip:{remove:"cancel",selected:"check"},datetime:{arrowLeft:"chevron_left",arrowRight:"chevron_right",now:"access_time",today:"today"},editor:{bold:"format_bold",italic:"format_italic",strikethrough:"strikethrough_s",underline:"format_underlined",unorderedList:"format_list_bulleted",orderedList:"format_list_numbered",subscript:"vertical_align_bottom",superscript:"vertical_align_top",hyperlink:"link",toggleFullscreen:"fullscreen",quote:"format_quote",left:"format_align_left",center:"format_align_center",right:"format_align_right",justify:"format_align_justify",print:"print",outdent:"format_indent_decrease",indent:"format_indent_increase",removeFormat:"format_clear",formatting:"text_format",fontSize:"format_size",align:"format_align_left",hr:"remove",undo:"undo",redo:"redo",heading:"format_size",code:"code",size:"format_size",font:"font_download",viewSource:"code"},expansionItem:{icon:"keyboard_arrow_down",denseIcon:"arrow_drop_down"},fab:{icon:"add",activeIcon:"close"},field:{clear:"cancel",error:"error"},pagination:{first:"first_page",prev:"keyboard_arrow_left",next:"keyboard_arrow_right",last:"last_page"},rating:{icon:"grade"},stepper:{done:"check",active:"edit",error:"warning"},tabs:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down"},table:{arrowUp:"arrow_upward",warning:"warning",firstPage:"first_page",prevPage:"chevron_left",nextPage:"chevron_right",lastPage:"last_page"},tree:{icon:"play_arrow"},uploader:{done:"done",clear:"clear",add:"add_box",upload:"cloud_upload",removeQueue:"clear_all",removeUploaded:"done_all"}},il=Mo({iconMapFn:null,__qIconSet:{}},{set(t,e){const n={...t};n.set=il.set,Object.assign(il.__qIconSet,n)},install({$q:t,iconSet:e,ssrContext:n}){t.config.iconMapFn!==void 0&&(this.iconMapFn=t.config.iconMapFn),t.iconSet=this.__qIconSet,Xl(t,"iconMapFn",()=>this.iconMapFn,i=>{this.iconMapFn=i}),this.__installed===!0?e!==void 0&&this.set(e):(this.props=new Proxy(this.__qIconSet,{get(){return Reflect.get(...arguments)},ownKeys(i){return Reflect.ownKeys(i).filter(r=>r!=="set")}}),this.set(e||hC))}}),dw="_q_",Cf="_q_l_",fC="_q_pc_",ZF="_q_fo_",eU="_q_tabs_";function Hr(){}const rl={};let pw=!1;function dC(){pw=!0}function au(t,e){if(t===e)return!0;if(t!==null&&e!==null&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;let n,i;if(t.constructor===Array){if(n=t.length,n!==e.length)return!1;for(i=n;i--!==0;)if(au(t[i],e[i])!==!0)return!1;return!0}if(t.constructor===Map){if(t.size!==e.size)return!1;let s=t.entries();for(i=s.next();i.done!==!0;){if(e.has(i.value[0])!==!0)return!1;i=s.next()}for(s=t.entries(),i=s.next();i.done!==!0;){if(au(i.value[1],e.get(i.value[0]))!==!0)return!1;i=s.next()}return!0}if(t.constructor===Set){if(t.size!==e.size)return!1;const s=t.entries();for(i=s.next();i.done!==!0;){if(e.has(i.value[0])!==!0)return!1;i=s.next()}return!0}if(t.buffer!=null&&t.buffer.constructor===ArrayBuffer){if(n=t.length,n!==e.length)return!1;for(i=n;i--!==0;)if(t[i]!==e[i])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();const r=Object.keys(t).filter(s=>t[s]!==void 0);if(n=r.length,n!==Object.keys(e).filter(s=>e[s]!==void 0).length)return!1;for(i=n;i--!==0;){const s=r[i];if(au(t[s],e[s])!==!0)return!1}return!0}return t!==t&&e!==e}function es(t){return t!==null&&typeof t=="object"&&Array.isArray(t)!==!0}function tU(t){return Object.prototype.toString.call(t)==="[object Date]"}const Yp=[nl,aC,ht,eC,hh,fi,il];function gw(t,e){const n=rw(t);n.config.globalProperties=e.config.globalProperties;const{reload:i,...r}=e._context;return Object.assign(n._context,r),n}function Jp(t,e){e.forEach(n=>{n.install(t),n.__installed=!0})}function pC(t,e,n){t.config.globalProperties.$q=n.$q,t.provide(dw,n.$q),Jp(n,Yp),e.components!==void 0&&Object.values(e.components).forEach(i=>{es(i)===!0&&i.name!==void 0&&t.component(i.name,i)}),e.directives!==void 0&&Object.values(e.directives).forEach(i=>{es(i)===!0&&i.name!==void 0&&t.directive(i.name,i)}),e.plugins!==void 0&&Jp(n,Object.values(e.plugins).filter(i=>typeof i.install=="function"&&Yp.includes(i)===!1)),Qn.value===!0&&(n.$q.onSSRHydrated=()=>{n.onSSRHydrated.forEach(i=>{i()}),n.$q.onSSRHydrated=()=>{}})}const gC=function(t,e={}){const n={version:"2.17.5"};pw===!1?(e.config!==void 0&&Object.assign(rl,e.config),n.config={...rl},dC()):n.config=e.config||{},pC(t,e,{parentApp:t,$q:n,lang:e.lang,iconSet:e.iconSet,onSSRHydrated:[]})},mC={name:"Quasar",version:"2.17.5",install:gC,lang:fi,iconSet:il},vC={__name:"App",setup(t){return Sy(e=>{console.log("### ###"),console.log("err:",e)}),(e,n)=>{const i=Ay("router-view");return Qt(),Yt(i)}}};function nU(t){return t}var yC=!1;/*!
 * pinia v2.3.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let mw;const Zl=t=>mw=t,vw=Symbol();function fh(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Hs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Hs||(Hs={}));function wC(){const t=qv(!0),e=t.run(()=>de({}));let n=[],i=[];const r=mr({install(s){Zl(r),r._a=s,s.provide(vw,r),s.config.globalProperties.$pinia=r,i.forEach(o=>n.push(o)),i=[]},use(s){return!this._a&&!yC?i.push(s):n.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const yw=()=>{};function Xp(t,e,n,i=yw){t.push(e);const r=()=>{const s=t.indexOf(e);s>-1&&(t.splice(s,1),i())};return!n&&hf()&&jv(r),r}function Cr(t,...e){t.slice().forEach(n=>{n(...e)})}const _C=t=>t(),Zp=Symbol(),lu=Symbol();function dh(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,i)=>t.set(i,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],r=t[n];fh(r)&&fh(i)&&t.hasOwnProperty(n)&&!Fe(i)&&!Wn(i)?t[n]=dh(r,i):t[n]=i}return t}const bC=Symbol();function EC(t){return!fh(t)||!t.hasOwnProperty(bC)}const{assign:li}=Object;function TC(t){return!!(Fe(t)&&t.effect)}function IC(t,e,n,i){const{state:r,actions:s,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=r?r():{});const u=eI(n.state.value[t]);return li(u,s,Object.keys(o||{}).reduce((h,f)=>(h[f]=mr(O(()=>{Zl(n);const d=n._s.get(t);return o[f].call(d,d)})),h),{}))}return l=ww(t,c,e,n,i,!0),l}function ww(t,e,n={},i,r,s){let o;const a=li({actions:{}},n),l={deep:!0};let c,u,h=[],f=[],d;const p=i.state.value[t];!s&&!p&&(i.state.value[t]={}),de({});let m;function w(x){let C;c=u=!1,typeof x=="function"?(x(i.state.value[t]),C={type:Hs.patchFunction,storeId:t,events:d}):(dh(i.state.value[t],x),C={type:Hs.patchObject,payload:x,storeId:t,events:d});const N=m=Symbol();Ht().then(()=>{m===N&&(c=!0)}),u=!0,Cr(h,C,i.state.value[t])}const b=s?function(){const{state:C}=n,N=C?C():{};this.$patch(K=>{li(K,N)})}:yw;function y(){o.stop(),h=[],f=[],i._s.delete(t)}const _=(x,C="")=>{if(Zp in x)return x[lu]=C,x;const N=function(){Zl(i);const K=Array.from(arguments),M=[],ee=[];function V(Z){M.push(Z)}function oe(Z){ee.push(Z)}Cr(f,{args:K,name:N[lu],store:I,after:V,onError:oe});let ge;try{ge=x.apply(this&&this.$id===t?this:I,K)}catch(Z){throw Cr(ee,Z),Z}return ge instanceof Promise?ge.then(Z=>(Cr(M,Z),Z)).catch(Z=>(Cr(ee,Z),Promise.reject(Z))):(Cr(M,ge),ge)};return N[Zp]=!0,N[lu]=C,N},E={_p:i,$id:t,$onAction:Xp.bind(null,f),$patch:w,$reset:b,$subscribe(x,C={}){const N=Xp(h,x,C.detached,()=>K()),K=o.run(()=>xe(()=>i.state.value[t],M=>{(C.flush==="sync"?u:c)&&x({storeId:t,type:Hs.direct,events:d},M)},li({},l,C)));return N},$dispose:y},I=an(E);i._s.set(t,I);const L=(i._a&&i._a.runWithContext||_C)(()=>i._e.run(()=>(o=qv()).run(()=>e({action:_}))));for(const x in L){const C=L[x];if(Fe(C)&&!TC(C)||Wn(C))s||(p&&EC(C)&&(Fe(C)?C.value=p[x]:dh(C,p[x])),i.state.value[t][x]=C);else if(typeof C=="function"){const N=_(C,x);L[x]=N,a.actions[x]=C}}return li(I,L),li(ye(I),L),Object.defineProperty(I,"$state",{get:()=>i.state.value[t],set:x=>{w(C=>{li(C,x)})}}),i._p.forEach(x=>{li(I,o.run(()=>x({store:I,app:i._a,pinia:i,options:a})))}),p&&s&&n.hydrate&&n.hydrate(I.$state,p),c=!0,u=!0,I}/*! #__NO_SIDE_EFFECTS__ */function SC(t,e,n){let i,r;const s=typeof e=="function";i=t,r=s?n:e;function o(a,l){const c=PI();return a=a||(c?kt(vw,null):null),a&&Zl(a),a=mw,a._s.has(i)||(s?ww(i,e,r,a):IC(i,r,a)),a._s.get(i)}return o.$id=i,o}function iU(t){{const e=ye(t),n={};for(const i in e){const r=e[i];r.effect?n[i]=O({get:()=>t[i],set(s){t[i]=s}}):(Fe(r)||Wn(r))&&(n[i]=ay(t,i))}return n}}const cu=()=>wC(),_w=t=>t,CC=_w,AC=_w;/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Dr=typeof document<"u";function bw(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function kC(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&bw(t.default)}const Ie=Object.assign;function uu(t,e){const n={};for(const i in e){const r=e[i];n[i]=fn(r)?r.map(t):t(r)}return n}const zs=()=>{},fn=Array.isArray,Ew=/#/g,RC=/&/g,xC=/\//g,PC=/=/g,DC=/\?/g,Tw=/\+/g,OC=/%5B/g,NC=/%5D/g,Iw=/%5E/g,LC=/%60/g,Sw=/%7B/g,MC=/%7C/g,Cw=/%7D/g,$C=/%20/g;function Af(t){return encodeURI(""+t).replace(MC,"|").replace(OC,"[").replace(NC,"]")}function FC(t){return Af(t).replace(Sw,"{").replace(Cw,"}").replace(Iw,"^")}function ph(t){return Af(t).replace(Tw,"%2B").replace($C,"+").replace(Ew,"%23").replace(RC,"%26").replace(LC,"`").replace(Sw,"{").replace(Cw,"}").replace(Iw,"^")}function UC(t){return ph(t).replace(PC,"%3D")}function VC(t){return Af(t).replace(Ew,"%23").replace(DC,"%3F")}function BC(t){return t==null?"":VC(t).replace(xC,"%2F")}function ao(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const qC=/\/$/,jC=t=>t.replace(qC,"");function hu(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=t(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=WC(i??e,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:ao(o)}}function HC(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function eg(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function zC(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&ts(e.matched[i],n.matched[r])&&Aw(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ts(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Aw(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!KC(t[n],e[n]))return!1;return!0}function KC(t,e){return fn(t)?tg(t,e):fn(e)?tg(e,t):t===e}function tg(t,e){return fn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function WC(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const si={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var lo;(function(t){t.pop="pop",t.push="push"})(lo||(lo={}));var Ks;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ks||(Ks={}));function GC(t){if(!t)if(Dr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),jC(t)}const QC=/^[^#]+#/;function YC(t,e){return t.replace(QC,"#")+e}function JC(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const ec=()=>({left:window.scrollX,top:window.scrollY});function XC(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=JC(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function ng(t,e){return(history.state?history.state.position-e:-1)+t}const gh=new Map;function ZC(t,e){gh.set(t,e)}function eA(t){const e=gh.get(t);return gh.delete(t),e}let tA=()=>location.protocol+"//"+location.host;function kw(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let a=r.includes(t.slice(s))?t.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),eg(l,"")}return eg(n,t)+i+r}function nA(t,e,n,i){let r=[],s=[],o=null;const a=({state:f})=>{const d=kw(t,location),p=n.value,m=e.value;let w=0;if(f){if(n.value=d,e.value=f,o&&o===p){o=null;return}w=m?f.position-m.position:0}else i(d);r.forEach(b=>{b(n.value,p,{delta:w,type:lo.pop,direction:w?w>0?Ks.forward:Ks.back:Ks.unknown})})};function l(){o=n.value}function c(f){r.push(f);const d=()=>{const p=r.indexOf(f);p>-1&&r.splice(p,1)};return s.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(Ie({},f.state,{scroll:ec()}),"")}function h(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function ig(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?ec():null}}function iA(t){const{history:e,location:n}=window,i={value:kw(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:tA()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),r.value=c}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(l,c){const u=Ie({},e.state,ig(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=Ie({},r.value,e.state,{forward:l,scroll:ec()});s(u.current,u,!0);const h=Ie({},ig(i.value,l,null),{position:u.position+1},c);s(l,h,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function rA(t){t=GC(t);const e=iA(t),n=nA(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=Ie({location:"",base:t,go:i,createHref:YC.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function sA(t){return typeof t=="string"||t&&typeof t=="object"}function Rw(t){return typeof t=="string"||typeof t=="symbol"}const xw=Symbol("");var rg;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(rg||(rg={}));function ns(t,e){return Ie(new Error,{type:t,[xw]:!0},e)}function $n(t,e){return t instanceof Error&&xw in t&&(e==null||!!(t.type&e))}const sg="[^/]+?",oA={sensitive:!1,strict:!1,start:!0,end:!0},aA=/[.+*?^${}()[\]/\\]/g;function lA(t,e){const n=Ie({},oA,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(aA,"\\$&"),d+=40;else if(f.type===1){const{value:p,repeatable:m,optional:w,regexp:b}=f;s.push({name:p,repeatable:m,optional:w});const y=b||sg;if(y!==sg){d+=10;try{new RegExp(`(${y})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${p}" (${y}): `+E.message)}}let _=m?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;h||(_=w&&c.length<2?`(?:/${_})`:"/"+_),w&&(_+="?"),r+=_,d+=20,w&&(d+=-8),m&&(d+=-20),y===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",p=s[f-1];h[p.name]=d&&p.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:p,repeatable:m,optional:w}=d,b=p in c?c[p]:"";if(fn(b)&&!m)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const y=fn(b)?b.join("/"):b;if(!y)if(w)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${p}"`);u+=y}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function cA(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Pw(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=cA(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(og(i))return 1;if(og(r))return-1}return r.length-i.length}function og(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const uA={type:0,value:""},hA=/[a-zA-Z0-9_]/;function fA(t){if(!t)return[[]];if(t==="/")return[[uA]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${c}": ${d}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function h(){c&&(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):f();break;case 4:f(),n=i;break;case 1:l==="("?n=2:hA.test(l)?f():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),r}function dA(t,e,n){const i=lA(fA(t.path),n),r=Ie(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function pA(t,e){const n=[],i=new Map;e=ug({strict:!1,end:!0,sensitive:!1},e);function r(h){return i.get(h)}function s(h,f,d){const p=!d,m=lg(h);m.aliasOf=d&&d.record;const w=ug(e,h),b=[m];if("alias"in h){const E=typeof h.alias=="string"?[h.alias]:h.alias;for(const I of E)b.push(lg(Ie({},m,{components:d?d.record.components:m.components,path:I,aliasOf:d?d.record:m})))}let y,_;for(const E of b){const{path:I}=E;if(f&&I[0]!=="/"){const $=f.record.path,L=$[$.length-1]==="/"?"":"/";E.path=f.record.path+(I&&L+I)}if(y=dA(E,f,w),d?d.alias.push(y):(_=_||y,_!==y&&_.alias.push(y),p&&h.name&&!cg(y)&&o(h.name)),Dw(y)&&l(y),m.children){const $=m.children;for(let L=0;L<$.length;L++)s($[L],y,d&&d.children[L])}d=d||y}return _?()=>{o(_)}:zs}function o(h){if(Rw(h)){const f=i.get(h);f&&(i.delete(h),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(h);f>-1&&(n.splice(f,1),h.record.name&&i.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return n}function l(h){const f=vA(h,n);n.splice(f,0,h),h.record.name&&!cg(h)&&i.set(h.record.name,h)}function c(h,f){let d,p={},m,w;if("name"in h&&h.name){if(d=i.get(h.name),!d)throw ns(1,{location:h});w=d.record.name,p=Ie(ag(f.params,d.keys.filter(_=>!_.optional).concat(d.parent?d.parent.keys.filter(_=>_.optional):[]).map(_=>_.name)),h.params&&ag(h.params,d.keys.map(_=>_.name))),m=d.stringify(p)}else if(h.path!=null)m=h.path,d=n.find(_=>_.re.test(m)),d&&(p=d.parse(m),w=d.record.name);else{if(d=f.name?i.get(f.name):n.find(_=>_.re.test(f.path)),!d)throw ns(1,{location:h,currentLocation:f});w=d.record.name,p=Ie({},f.params,h.params),m=d.stringify(p)}const b=[];let y=d;for(;y;)b.unshift(y.record),y=y.parent;return{name:w,path:m,params:p,matched:b,meta:mA(b)}}t.forEach(h=>s(h));function u(){n.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function ag(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function lg(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:gA(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function gA(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function cg(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function mA(t){return t.reduce((e,n)=>Ie(e,n.meta),{})}function ug(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function vA(t,e){let n=0,i=e.length;for(;n!==i;){const s=n+i>>1;Pw(t,e[s])<0?i=s:n=s+1}const r=yA(t);return r&&(i=e.lastIndexOf(r,i-1)),i}function yA(t){let e=t;for(;e=e.parent;)if(Dw(e)&&Pw(t,e)===0)return e}function Dw({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function wA(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(Tw," "),o=s.indexOf("="),a=ao(o<0?s:s.slice(0,o)),l=o<0?null:ao(s.slice(o+1));if(a in e){let c=e[a];fn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function hg(t){let e="";for(let n in t){const i=t[n];if(n=UC(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(fn(i)?i.map(s=>s&&ph(s)):[i&&ph(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function _A(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=fn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const bA=Symbol(""),fg=Symbol(""),tc=Symbol(""),kf=Symbol(""),mh=Symbol("");function Ts(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function di(t,e,n,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(ns(4,{from:n,to:e})):f instanceof Error?l(f):sA(f)?l(ns(2,{from:e,to:f})):(o&&i.enterCallbacks[r]===o&&typeof f=="function"&&o.push(f),a())},u=s(()=>t.call(i&&i.instances[r],e,n,c));let h=Promise.resolve(u);t.length<3&&(h=h.then(c)),h.catch(f=>l(f))})}function fu(t,e,n,i,r=s=>s()){const s=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(bw(l)){const u=(l.__vccOpts||l)[e];u&&s.push(di(u,n,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const h=kC(u)?u.default:u;o.mods[a]=u,o.components[a]=h;const d=(h.__vccOpts||h)[e];return d&&di(d,n,i,o,a,r)()}))}}return s}function dg(t){const e=kt(tc),n=kt(kf),i=O(()=>{const l=Nt(t.to);return e.resolve(l)}),r=O(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(ts.bind(null,u));if(f>-1)return f;const d=pg(l[c-2]);return c>1&&pg(u)===d&&h[h.length-1].path!==d?h.findIndex(ts.bind(null,l[c-2])):f}),s=O(()=>r.value>-1&&CA(n.params,i.value.params)),o=O(()=>r.value>-1&&r.value===n.matched.length-1&&Aw(n.params,i.value.params));function a(l={}){if(SA(l)){const c=e[Nt(t.replace)?"replace":"push"](Nt(t.to)).catch(zs);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:O(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function EA(t){return t.length===1?t[0]:t}const TA=Kl({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:dg,setup(t,{slots:e}){const n=an(dg(t)),{options:i}=kt(tc),r=O(()=>({[gg(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[gg(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&EA(e.default(n));return t.custom?s:j("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),IA=TA;function SA(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function CA(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!fn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function pg(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const gg=(t,e,n)=>t??e??n,AA=Kl({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=kt(mh),r=O(()=>t.route||i.value),s=kt(fg,0),o=O(()=>{let c=Nt(s);const{matched:u}=r.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=O(()=>r.value.matched[o.value]);jr(fg,O(()=>o.value+1)),jr(bA,a),jr(mh,r);const l=de();return xe(()=>[l.value,a.value,t.name],([c,u,h],[f,d,p])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!ts(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return mg(n.default,{Component:f,route:c});const d=h.props[u],p=d?d===!0?c.params:typeof d=="function"?d(c):d:null,w=j(f,Ie({},p,e,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return mg(n.default,{Component:w,route:c})||w}}});function mg(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const kA=AA;function RA(t){const e=pA(t.routes,t),n=t.parseQuery||wA,i=t.stringifyQuery||hg,r=t.history,s=Ts(),o=Ts(),a=Ts(),l=Ka(si);let c=si;Dr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=uu.bind(null,S=>""+S),h=uu.bind(null,BC),f=uu.bind(null,ao);function d(S,q){let k,Y;return Rw(S)?(k=e.getRecordMatcher(S),Y=q):Y=S,e.addRoute(Y,k)}function p(S){const q=e.getRecordMatcher(S);q&&e.removeRoute(q)}function m(){return e.getRoutes().map(S=>S.record)}function w(S){return!!e.getRecordMatcher(S)}function b(S,q){if(q=Ie({},q||l.value),typeof S=="string"){const T=hu(n,S,q.path),R=e.resolve({path:T.path},q),D=r.createHref(T.fullPath);return Ie(T,R,{params:f(R.params),hash:ao(T.hash),redirectedFrom:void 0,href:D})}let k;if(S.path!=null)k=Ie({},S,{path:hu(n,S.path,q.path).path});else{const T=Ie({},S.params);for(const R in T)T[R]==null&&delete T[R];k=Ie({},S,{params:h(T)}),q.params=h(q.params)}const Y=e.resolve(k,q),be=S.hash||"";Y.params=u(f(Y.params));const g=HC(i,Ie({},S,{hash:FC(be),path:Y.path})),v=r.createHref(g);return Ie({fullPath:g,hash:be,query:i===hg?_A(S.query):S.query||{}},Y,{redirectedFrom:void 0,href:v})}function y(S){return typeof S=="string"?hu(n,S,l.value.path):Ie({},S)}function _(S,q){if(c!==S)return ns(8,{from:q,to:S})}function E(S){return L(S)}function I(S){return E(Ie(y(S),{replace:!0}))}function $(S){const q=S.matched[S.matched.length-1];if(q&&q.redirect){const{redirect:k}=q;let Y=typeof k=="function"?k(S):k;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=y(Y):{path:Y},Y.params={}),Ie({query:S.query,hash:S.hash,params:Y.path!=null?{}:S.params},Y)}}function L(S,q){const k=c=b(S),Y=l.value,be=S.state,g=S.force,v=S.replace===!0,T=$(k);if(T)return L(Ie(y(T),{state:typeof T=="object"?Ie({},be,T.state):be,force:g,replace:v}),q||k);const R=k;R.redirectedFrom=q;let D;return!g&&zC(i,Y,k)&&(D=ns(16,{to:R,from:Y}),Je(Y,Y,!0,!1)),(D?Promise.resolve(D):N(R,Y)).catch(P=>$n(P)?$n(P,2)?P:ct(P):pe(P,R,Y)).then(P=>{if(P){if($n(P,2))return L(Ie({replace:v},y(P.to),{state:typeof P.to=="object"?Ie({},be,P.to.state):be,force:g}),q||R)}else P=M(R,Y,!0,v,be);return K(R,Y,P),P})}function x(S,q){const k=_(S,q);return k?Promise.reject(k):Promise.resolve()}function C(S){const q=Dt.values().next().value;return q&&typeof q.runWithContext=="function"?q.runWithContext(S):S()}function N(S,q){let k;const[Y,be,g]=xA(S,q);k=fu(Y.reverse(),"beforeRouteLeave",S,q);for(const T of Y)T.leaveGuards.forEach(R=>{k.push(di(R,S,q))});const v=x.bind(null,S,q);return k.push(v),ne(k).then(()=>{k=[];for(const T of s.list())k.push(di(T,S,q));return k.push(v),ne(k)}).then(()=>{k=fu(be,"beforeRouteUpdate",S,q);for(const T of be)T.updateGuards.forEach(R=>{k.push(di(R,S,q))});return k.push(v),ne(k)}).then(()=>{k=[];for(const T of g)if(T.beforeEnter)if(fn(T.beforeEnter))for(const R of T.beforeEnter)k.push(di(R,S,q));else k.push(di(T.beforeEnter,S,q));return k.push(v),ne(k)}).then(()=>(S.matched.forEach(T=>T.enterCallbacks={}),k=fu(g,"beforeRouteEnter",S,q,C),k.push(v),ne(k))).then(()=>{k=[];for(const T of o.list())k.push(di(T,S,q));return k.push(v),ne(k)}).catch(T=>$n(T,8)?T:Promise.reject(T))}function K(S,q,k){a.list().forEach(Y=>C(()=>Y(S,q,k)))}function M(S,q,k,Y,be){const g=_(S,q);if(g)return g;const v=q===si,T=Dr?history.state:{};k&&(Y||v?r.replace(S.fullPath,Ie({scroll:v&&T&&T.scroll},be)):r.push(S.fullPath,be)),l.value=S,Je(S,q,k,v),ct()}let ee;function V(){ee||(ee=r.listen((S,q,k)=>{if(!sn.listening)return;const Y=b(S),be=$(Y);if(be){L(Ie(be,{replace:!0,force:!0}),Y).catch(zs);return}c=Y;const g=l.value;Dr&&ZC(ng(g.fullPath,k.delta),ec()),N(Y,g).catch(v=>$n(v,12)?v:$n(v,2)?(L(Ie(y(v.to),{force:!0}),Y).then(T=>{$n(T,20)&&!k.delta&&k.type===lo.pop&&r.go(-1,!1)}).catch(zs),Promise.reject()):(k.delta&&r.go(-k.delta,!1),pe(v,Y,g))).then(v=>{v=v||M(Y,g,!1),v&&(k.delta&&!$n(v,8)?r.go(-k.delta,!1):k.type===lo.pop&&$n(v,20)&&r.go(-1,!1)),K(Y,g,v)}).catch(zs)}))}let oe=Ts(),ge=Ts(),Z;function pe(S,q,k){ct(S);const Y=ge.list();return Y.length?Y.forEach(be=>be(S,q,k)):console.error(S),Promise.reject(S)}function Ve(){return Z&&l.value!==si?Promise.resolve():new Promise((S,q)=>{oe.add([S,q])})}function ct(S){return Z||(Z=!S,V(),oe.list().forEach(([q,k])=>S?k(S):q()),oe.reset()),S}function Je(S,q,k,Y){const{scrollBehavior:be}=t;if(!Dr||!be)return Promise.resolve();const g=!k&&eA(ng(S.fullPath,0))||(Y||!k)&&history.state&&history.state.scroll||null;return Ht().then(()=>be(S,q,g)).then(v=>v&&XC(v)).catch(v=>pe(v,S,q))}const je=S=>r.go(S);let Pt;const Dt=new Set,sn={currentRoute:l,listening:!0,addRoute:d,removeRoute:p,clearRoutes:e.clearRoutes,hasRoute:w,getRoutes:m,resolve:b,options:t,push:E,replace:I,go:je,back:()=>je(-1),forward:()=>je(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:ge.add,isReady:Ve,install(S){const q=this;S.component("RouterLink",IA),S.component("RouterView",kA),S.config.globalProperties.$router=q,Object.defineProperty(S.config.globalProperties,"$route",{enumerable:!0,get:()=>Nt(l)}),Dr&&!Pt&&l.value===si&&(Pt=!0,E(r.location).catch(be=>{}));const k={};for(const be in si)Object.defineProperty(k,be,{get:()=>l.value[be],enumerable:!0});S.provide(tc,q),S.provide(kf,ry(k)),S.provide(mh,l);const Y=S.unmount;Dt.add(S),S.unmount=function(){Dt.delete(S),Dt.size<1&&(c=si,ee&&ee(),ee=null,l.value=si,Pt=!1,Z=!1),Y()}}};function ne(S){return S.reduce((q,k)=>q.then(()=>C(k)),Promise.resolve())}return sn}function xA(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>ts(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>ts(c,l))||r.push(l))}return[n,i,r]}function rU(){return kt(tc)}function PA(t){return kt(kf)}function DA(t){const{extendRoutes:e,routes:n}=t;return e&&console.warn('"extendRoutes()" is deprecated, please modify the routes directly. See https://uvr.esm.is/guide/extending-routes.html#extending-routes-at-runtime for an alternative.'),RA(Object.assign(t,{routes:typeof e=="function"&&e(n)||n}))}const OA=[{path:"/",name:"/",component:()=>ke(()=>import("./index-ClvlYmty.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]))},{path:"/:path(.*)",name:"/[...path]",component:()=>ke(()=>import("./_...path_-DuIhlFgw.js"),[])},{path:"/about",name:"/about",component:()=>ke(()=>import("./about-C_9lou5n.js"),__vite__mapDeps([17,18,14])),meta:{layout:"admin"}},{path:"/admin",name:"/admin",component:()=>ke(()=>import("./admin-BvFA4ubD.js"),__vite__mapDeps([19,18,14])),children:[{path:"",name:"/admin/",component:()=>ke(()=>import("./index-CcJ2HSMA.js"),__vite__mapDeps([20,14]))},{path:"dashboard",name:"/admin/dashboard",component:()=>ke(()=>import("./dashboard-CgDm8eLQ.js"),__vite__mapDeps([21,14]))}],meta:{layout:"admin"}},{path:"/docs",children:[{path:"",name:"/docs/",component:()=>ke(()=>import("./index-CUaFMza9.js"),__vite__mapDeps([22,14]))}]},{path:"/ErrorNotFound",name:"/ErrorNotFound",component:()=>ke(()=>import("./ErrorNotFound-bhC4nFOt.js"),[])},{path:"/home",name:"home-page",component:()=>ke(()=>import("./home-CvhKDYHY.js"),__vite__mapDeps([23,1,18,14])),meta:{requiresAuth:!0,width:"600px"}},{path:"/IndexPage",name:"/IndexPage",component:()=>ke(()=>import("./IndexPage-BP56ZA5E.js"),__vite__mapDeps([24,1]))},{path:"/mypage",name:"/mypage",component:()=>ke(()=>import("./mypage-Bse0FJqJ.js"),__vite__mapDeps([25,1,26,18])),children:[{path:"bookmark",name:"/mypage/bookmark",component:()=>ke(()=>import("./bookmark-D5CJhXtM.js"),__vite__mapDeps([27,2,3,4,5,6]))},{path:"password",name:"/mypage/password",component:()=>ke(()=>import("./password-BKftbvl5.js"),__vite__mapDeps([28,7,10,26,29]))},{path:"profile",name:"/mypage/profile",component:()=>ke(()=>import("./profile-Bqtc2uP2.js"),__vite__mapDeps([30,7,10,26,29]))}],meta:{requiresAuth:!0}},{path:"/posts",children:[{path:":id",children:[{path:"",name:"/posts/[id]/",component:()=>ke(()=>import("./index-CWbzFFRg.js"),__vite__mapDeps([31,1,7,26,2,11,6,12,13,18]))},{path:"edit",name:"/posts/[id]/edit",component:()=>ke(()=>import("./edit-CqtTZL3O.js"),__vite__mapDeps([32,1,2,8,7,5,9,10,11,12,13,14,15,26,18]))}]}]},{path:"/search",children:[{path:"",name:"/search/",component:()=>ke(()=>import("./index-Q7JMi-c4.js"),__vite__mapDeps([33,1,4,5,6,2,34]))}]},{path:"/vueuse",children:[{path:"",name:"/vueuse/",component:()=>ke(()=>import("./index-DPt_fYMW.js"),__vite__mapDeps([35,1]))}]}],vh={xs:18,sm:24,md:32,lg:38,xl:46},Rf={size:String};function xf(t,e=vh){return O(()=>t.size!==void 0?{fontSize:t.size in e?`${e[t.size]}px`:t.size}:null)}function Nn(t,e){return t!==void 0&&t()||e}function Ow(t,e){if(t!==void 0){const n=t();if(n!=null)return n.slice()}return e}function Mr(t,e){return t!==void 0?e.concat(t()):e}function NA(t,e){return t===void 0?e:e!==void 0?e.concat(t()):t()}function sU(t,e,n,i,r,s){e.key=i+r;const o=j(t,e,n);return r===!0?Br(o,s()):o}const vg="0 0 24 24",yg=t=>t,du=t=>`ionicons ${t}`,Nw={"mdi-":t=>`mdi ${t}`,"icon-":yg,"bt-":t=>`bt ${t}`,"eva-":t=>`eva ${t}`,"ion-md":du,"ion-ios":du,"ion-logo":du,"iconfont ":yg,"ti-":t=>`themify-icon ${t}`,"bi-":t=>`bootstrap-icons ${t}`},Lw={o_:"-outlined",r_:"-round",s_:"-sharp"},Mw={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},LA=new RegExp("^("+Object.keys(Nw).join("|")+")"),MA=new RegExp("^("+Object.keys(Lw).join("|")+")"),wg=new RegExp("^("+Object.keys(Mw).join("|")+")"),$A=/^[Mm]\s?[-+]?\.?\d/,FA=/^img:/,UA=/^svguse:/,VA=/^ion-/,BA=/^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /,sl=qe({name:"QIcon",props:{...Rf,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(t,{slots:e}){const{proxy:{$q:n}}=Ke(),i=xf(t),r=O(()=>"q-icon"+(t.left===!0?" on-left":"")+(t.right===!0?" on-right":"")+(t.color!==void 0?` text-${t.color}`:"")),s=O(()=>{let o,a=t.name;if(a==="none"||!a)return{none:!0};if(n.iconMapFn!==null){const u=n.iconMapFn(a);if(u!==void 0)if(u.icon!==void 0){if(a=u.icon,a==="none"||!a)return{none:!0}}else return{cls:u.cls,content:u.content!==void 0?u.content:" "}}if($A.test(a)===!0){const[u,h=vg]=a.split("|");return{svg:!0,viewBox:h,nodes:u.split("&&").map(f=>{const[d,p,m]=f.split("@@");return j("path",{style:p,d,transform:m})})}}if(FA.test(a)===!0)return{img:!0,src:a.substring(4)};if(UA.test(a)===!0){const[u,h=vg]=a.split("|");return{svguse:!0,src:u.substring(7),viewBox:h}}let l=" ";const c=a.match(LA);if(c!==null)o=Nw[c[1]](a);else if(BA.test(a)===!0)o=a;else if(VA.test(a)===!0)o=`ionicons ion-${n.platform.is.ios===!0?"ios":"md"}${a.substring(3)}`;else if(wg.test(a)===!0){o="notranslate material-symbols";const u=a.match(wg);u!==null&&(a=a.substring(6),o+=Mw[u[1]]),l=a}else{o="notranslate material-icons";const u=a.match(MA);u!==null&&(a=a.substring(2),o+=Lw[u[1]]),l=a}return{cls:o,content:l}});return()=>{const o={class:r.value,style:i.value,"aria-hidden":"true",role:"presentation"};return s.value.none===!0?j(t.tag,o,Nn(e.default)):s.value.img===!0?j(t.tag,o,Mr(e.default,[j("img",{src:s.value.src})])):s.value.svg===!0?j(t.tag,o,Mr(e.default,[j("svg",{viewBox:s.value.viewBox||"0 0 24 24"},s.value.nodes)])):s.value.svguse===!0?j(t.tag,o,Mr(e.default,[j("svg",{viewBox:s.value.viewBox},[j("use",{"xlink:href":s.value.src})])])):(s.value.cls!==void 0&&(o.class+=" "+s.value.cls),j(t.tag,o,Mr(e.default,[s.value.content])))}}}),yh=qe({name:"QAvatar",props:{...Rf,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(t,{slots:e}){const n=xf(t),i=O(()=>"q-avatar"+(t.color?` bg-${t.color}`:"")+(t.textColor?` text-${t.textColor} q-chip--colored`:"")+(t.square===!0?" q-avatar--square":t.rounded===!0?" rounded-borders":"")),r=O(()=>t.fontSize?{fontSize:t.fontSize}:null);return()=>{const s=t.icon!==void 0?[j(sl,{name:t.icon})]:void 0;return j("div",{class:i.value,style:n.value},[j("div",{class:"q-avatar__content row flex-center overflow-hidden",style:r.value},NA(e.default,s))])}}}),qA=qe({name:"QToolbarTitle",props:{shrink:Boolean},setup(t,{slots:e}){const n=O(()=>"q-toolbar__title ellipsis"+(t.shrink===!0?" col-shrink":""));return()=>j("div",{class:n.value},Nn(e.default))}}),jA={size:{type:[String,Number],default:"1em"},color:String};function HA(t){return{cSize:O(()=>t.size in vh?`${vh[t.size]}px`:t.size),classes:O(()=>"q-spinner"+(t.color?` text-${t.color}`:""))}}const $w=qe({name:"QSpinner",props:{...jA,thickness:{type:Number,default:5}},setup(t){const{cSize:e,classes:n}=HA(t);return()=>j("svg",{class:n.value+" q-spinner-mat",width:e.value,height:e.value,viewBox:"25 25 50 50"},[j("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":t.thickness,"stroke-miterlimit":"10"})])}});function wh(t,e){const n=t.style;for(const i in e)n[i]=e[i]}function zA(t){if(t==null)return;if(typeof t=="string")try{return document.querySelector(t)||void 0}catch{return}const e=Nt(t);if(e)return e.$el||e}function Fw(t,e){if(t==null||t.contains(e)===!0)return!0;for(let n=t.nextElementSibling;n!==null;n=n.nextElementSibling)if(n.contains(e))return!0;return!1}function KA(t,e=250){let n=!1,i;return function(){return n===!1&&(n=!0,setTimeout(()=>{n=!1},e),i=t.apply(this,arguments)),i}}function _g(t,e,n,i){n.modifiers.stop===!0&&lw(t);const r=n.modifiers.color;let s=n.modifiers.center;s=s===!0||i===!0;const o=document.createElement("span"),a=document.createElement("span"),l=aw(t),{left:c,top:u,width:h,height:f}=e.getBoundingClientRect(),d=Math.sqrt(h*h+f*f),p=d/2,m=`${(h-d)/2}px`,w=s?m:`${l.left-c-p}px`,b=`${(f-d)/2}px`,y=s?b:`${l.top-u-p}px`;a.className="q-ripple__inner",wh(a,{height:`${d}px`,width:`${d}px`,transform:`translate3d(${w},${y},0) scale3d(.2,.2,1)`,opacity:0}),o.className=`q-ripple${r?" text-"+r:""}`,o.setAttribute("dir","ltr"),o.appendChild(a),e.appendChild(o);const _=()=>{o.remove(),clearTimeout(E)};n.abort.push(_);let E=setTimeout(()=>{a.classList.add("q-ripple__inner--enter"),a.style.transform=`translate3d(${m},${b},0) scale3d(1,1,1)`,a.style.opacity=.2,E=setTimeout(()=>{a.classList.remove("q-ripple__inner--enter"),a.classList.add("q-ripple__inner--leave"),a.style.opacity=0,E=setTimeout(()=>{o.remove(),n.abort.splice(n.abort.indexOf(_),1)},275)},250)},50)}function bg(t,{modifiers:e,value:n,arg:i}){const r=Object.assign({},t.cfg.ripple,e,n);t.modifiers={early:r.early===!0,stop:r.stop===!0,center:r.center===!0,color:r.color||i,keyCodes:[].concat(r.keyCodes||13)}}const WA=ow({name:"ripple",beforeMount(t,e){const n=e.instance.$.appContext.config.globalProperties.$q.config||{};if(n.ripple===!1)return;const i={cfg:n,enabled:e.value!==!1,modifiers:{},abort:[],start(r){i.enabled===!0&&r.qSkipRipple!==!0&&r.type===(i.modifiers.early===!0?"pointerdown":"click")&&_g(r,t,i,r.qKeyEvent===!0)},keystart:KA(r=>{i.enabled===!0&&r.qSkipRipple!==!0&&or(r,i.modifiers.keyCodes)===!0&&r.type===`key${i.modifiers.early===!0?"down":"up"}`&&_g(r,t,i,!0)},300)};bg(i,e),t.__qripple=i,uh(i,"main",[[t,"pointerdown","start","passive"],[t,"click","start","passive"],[t,"keydown","keystart","passive"],[t,"keyup","keystart","passive"]])},updated(t,e){if(e.oldValue!==e.value){const n=t.__qripple;n!==void 0&&(n.enabled=e.value!==!1,n.enabled===!0&&Object(e.value)===e.value&&bg(n,e))}},beforeUnmount(t){const e=t.__qripple;e!==void 0&&(e.abort.forEach(n=>{n()}),cw(e,"main"),delete t._qripple)}}),Uw={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},GA=Object.keys(Uw),QA={align:{type:String,validator:t=>GA.includes(t)}};function YA(t){return O(()=>{const e=t.align===void 0?t.vertical===!0?"stretch":"left":t.align;return`${t.vertical===!0?"items":"justify"}-${Uw[e]}`})}function Da(t){if(Object(t.$parent)===t.$parent)return t.$parent;let{parent:e}=t.$;for(;Object(e)===e;){if(Object(e.proxy)===e.proxy)return e.proxy;e=e.parent}}function Vw(t){return t.appContext.config.globalProperties.$router!==void 0}function Bw(t){return t.isUnmounted===!0||t.isDeactivated===!0}function Eg(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}function Tg(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function JA(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(Array.isArray(r)===!1||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function Ig(t,e){return Array.isArray(e)===!0?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function XA(t,e){return Array.isArray(t)===!0?Ig(t,e):Array.isArray(e)===!0?Ig(e,t):t===e}function ZA(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(XA(t[n],e[n])===!1)return!1;return!0}const qw={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean},ek={...qw,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"}};function jw({fallbackTag:t,useDisableForRouterLinkProps:e=!0}={}){const n=Ke(),{props:i,proxy:r,emit:s}=n,o=Vw(n),a=O(()=>i.disable!==!0&&i.href!==void 0),l=O(e===!0?()=>o===!0&&i.disable!==!0&&a.value!==!0&&i.to!==void 0&&i.to!==null&&i.to!=="":()=>o===!0&&a.value!==!0&&i.to!==void 0&&i.to!==null&&i.to!==""),c=O(()=>l.value===!0?y(i.to):null),u=O(()=>c.value!==null),h=O(()=>a.value===!0||u.value===!0),f=O(()=>i.type==="a"||h.value===!0?"a":i.tag||t||"div"),d=O(()=>a.value===!0?{href:i.href,target:i.target}:u.value===!0?{href:c.value.href,target:i.target}:{}),p=O(()=>{if(u.value===!1)return-1;const{matched:I}=c.value,{length:$}=I,L=I[$-1];if(L===void 0)return-1;const x=r.$route.matched;if(x.length===0)return-1;const C=x.findIndex(Tg.bind(null,L));if(C!==-1)return C;const N=Eg(I[$-2]);return $>1&&Eg(L)===N&&x[x.length-1].path!==N?x.findIndex(Tg.bind(null,I[$-2])):C}),m=O(()=>u.value===!0&&p.value!==-1&&JA(r.$route.params,c.value.params)),w=O(()=>m.value===!0&&p.value===r.$route.matched.length-1&&ZA(r.$route.params,c.value.params)),b=O(()=>u.value===!0?w.value===!0?` ${i.exactActiveClass} ${i.activeClass}`:i.exact===!0?"":m.value===!0?` ${i.activeClass}`:"":"");function y(I){try{return r.$router.resolve(I)}catch{}return null}function _(I,{returnRouterError:$,to:L=i.to,replace:x=i.replace}={}){if(i.disable===!0)return I.preventDefault(),Promise.resolve(!1);if(I.metaKey||I.altKey||I.ctrlKey||I.shiftKey||I.button!==void 0&&I.button!==0||i.target==="_blank")return Promise.resolve(!1);I.preventDefault();const C=r.$router[x===!0?"replace":"push"](L);return $===!0?C:C.then(()=>{}).catch(()=>{})}function E(I){if(u.value===!0){const $=L=>_(I,L);s("click",I,$),I.defaultPrevented!==!0&&$()}else s("click",I)}return{hasRouterLink:u,hasHrefLink:a,hasLink:h,linkTag:f,resolvedLink:c,linkIsActive:m,linkIsExactActive:w,linkClass:b,linkAttrs:d,getLink:y,navigateToRouterLink:_,navigateOnClick:E}}const Sg={none:0,xs:4,sm:8,md:16,lg:24,xl:32},tk={xs:8,sm:10,md:14,lg:20,xl:24},nk=["button","submit","reset"],ik=/[^\s]\/[^\s]/,rk=["flat","outline","push","unelevated"];function sk(t,e){return t.flat===!0?"flat":t.outline===!0?"outline":t.push===!0?"push":t.unelevated===!0?"unelevated":e}const ok={...Rf,...qw,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...rk.reduce((t,e)=>(t[e]=Boolean)&&t,{}),square:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...QA.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean},ak={...ok,round:Boolean};function lk(t){const e=xf(t,tk),n=YA(t),{hasRouterLink:i,hasLink:r,linkTag:s,linkAttrs:o,navigateOnClick:a}=jw({fallbackTag:"button"}),l=O(()=>{const w=t.fab===!1&&t.fabMini===!1?e.value:{};return t.padding!==void 0?Object.assign({},w,{padding:t.padding.split(/\s+/).map(b=>b in Sg?Sg[b]+"px":b).join(" "),minWidth:"0",minHeight:"0"}):w}),c=O(()=>t.rounded===!0||t.fab===!0||t.fabMini===!0),u=O(()=>t.disable!==!0&&t.loading!==!0),h=O(()=>u.value===!0?t.tabindex||0:-1),f=O(()=>sk(t,"standard")),d=O(()=>{const w={tabindex:h.value};return r.value===!0?Object.assign(w,o.value):nk.includes(t.type)===!0&&(w.type=t.type),s.value==="a"?(t.disable===!0?w["aria-disabled"]="true":w.href===void 0&&(w.role="button"),i.value!==!0&&ik.test(t.type)===!0&&(w.type=t.type)):t.disable===!0&&(w.disabled="",w["aria-disabled"]="true"),t.loading===!0&&t.percentage!==void 0&&Object.assign(w,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":t.percentage}),w}),p=O(()=>{let w;t.color!==void 0?t.flat===!0||t.outline===!0?w=`text-${t.textColor||t.color}`:w=`bg-${t.color} text-${t.textColor||"white"}`:t.textColor&&(w=`text-${t.textColor}`);const b=t.round===!0?"round":`rectangle${c.value===!0?" q-btn--rounded":t.square===!0?" q-btn--square":""}`;return`q-btn--${f.value} q-btn--${b}`+(w!==void 0?" "+w:"")+(u.value===!0?" q-btn--actionable q-focusable q-hoverable":t.disable===!0?" disabled":"")+(t.fab===!0?" q-btn--fab":t.fabMini===!0?" q-btn--fab-mini":"")+(t.noCaps===!0?" q-btn--no-uppercase":"")+(t.dense===!0?" q-btn--dense":"")+(t.stretch===!0?" no-border-radius self-stretch":"")+(t.glossy===!0?" glossy":"")+(t.square?" q-btn--square":"")}),m=O(()=>n.value+(t.stack===!0?" column":" row")+(t.noWrap===!0?" no-wrap text-no-wrap":"")+(t.loading===!0?" q-btn__content--hidden":""));return{classes:p,style:l,innerClasses:m,attributes:d,hasLink:r,linkTag:s,navigateOnClick:a,isActionable:u}}const{passiveCapture:Gt}=Qe;let Ar=null,kr=null,Rr=null;const Un=qe({name:"QBtn",props:{...ak,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(t,{slots:e,emit:n}){const{proxy:i}=Ke(),{classes:r,style:s,innerClasses:o,attributes:a,hasLink:l,linkTag:c,navigateOnClick:u,isActionable:h}=lk(t),f=de(null),d=de(null);let p=null,m,w=null;const b=O(()=>t.label!==void 0&&t.label!==null&&t.label!==""),y=O(()=>t.disable===!0||t.ripple===!1?!1:{keyCodes:l.value===!0?[13,32]:[13],...t.ripple===!0?{}:t.ripple}),_=O(()=>({center:t.round})),E=O(()=>{const V=Math.max(0,Math.min(100,t.percentage));return V>0?{transition:"transform 0.6s",transform:`translateX(${V-100}%)`}:{}}),I=O(()=>{if(t.loading===!0)return{onMousedown:ee,onTouchstart:ee,onClick:ee,onKeydown:ee,onKeyup:ee};if(h.value===!0){const V={onClick:L,onKeydown:x,onMousedown:N};if(i.$q.platform.has.touch===!0){const oe=t.onTouchstart!==void 0?"":"Passive";V[`onTouchstart${oe}`]=C}return V}return{onClick:Vn}}),$=O(()=>({ref:f,class:"q-btn q-btn-item non-selectable no-outline "+r.value,style:s.value,...a.value,...I.value}));function L(V){if(f.value!==null){if(V!==void 0){if(V.defaultPrevented===!0)return;const oe=document.activeElement;if(t.type==="submit"&&oe!==document.body&&f.value.contains(oe)===!1&&oe.contains(f.value)===!1){f.value.focus();const ge=()=>{document.removeEventListener("keydown",Vn,!0),document.removeEventListener("keyup",ge,Gt),f.value!==null&&f.value.removeEventListener("blur",ge,Gt)};document.addEventListener("keydown",Vn,!0),document.addEventListener("keyup",ge,Gt),f.value.addEventListener("blur",ge,Gt)}}u(V)}}function x(V){f.value!==null&&(n("keydown",V),or(V,[13,32])===!0&&kr!==f.value&&(kr!==null&&M(),V.defaultPrevented!==!0&&(f.value.focus(),kr=f.value,f.value.classList.add("q-btn--active"),document.addEventListener("keyup",K,!0),f.value.addEventListener("blur",K,Gt)),Vn(V)))}function C(V){f.value!==null&&(n("touchstart",V),V.defaultPrevented!==!0&&(Ar!==f.value&&(Ar!==null&&M(),Ar=f.value,p=V.target,p.addEventListener("touchcancel",K,Gt),p.addEventListener("touchend",K,Gt)),m=!0,w!==null&&clearTimeout(w),w=setTimeout(()=>{w=null,m=!1},200)))}function N(V){f.value!==null&&(V.qSkipRipple=m===!0,n("mousedown",V),V.defaultPrevented!==!0&&Rr!==f.value&&(Rr!==null&&M(),Rr=f.value,f.value.classList.add("q-btn--active"),document.addEventListener("mouseup",K,Gt)))}function K(V){if(f.value!==null&&!(V!==void 0&&V.type==="blur"&&document.activeElement===f.value)){if(V!==void 0&&V.type==="keyup"){if(kr===f.value&&or(V,[13,32])===!0){const oe=new MouseEvent("click",V);oe.qKeyEvent=!0,V.defaultPrevented===!0&&oo(oe),V.cancelBubble===!0&&lw(oe),f.value.dispatchEvent(oe),Vn(V),V.qKeyEvent=!0}n("keyup",V)}M()}}function M(V){const oe=d.value;V!==!0&&(Ar===f.value||Rr===f.value)&&oe!==null&&oe!==document.activeElement&&(oe.setAttribute("tabindex",-1),oe.focus()),Ar===f.value&&(p!==null&&(p.removeEventListener("touchcancel",K,Gt),p.removeEventListener("touchend",K,Gt)),Ar=p=null),Rr===f.value&&(document.removeEventListener("mouseup",K,Gt),Rr=null),kr===f.value&&(document.removeEventListener("keyup",K,!0),f.value!==null&&f.value.removeEventListener("blur",K,Gt),kr=null),f.value!==null&&f.value.classList.remove("q-btn--active")}function ee(V){Vn(V),V.qSkipRipple=!0}return xt(()=>{M(!0)}),Object.assign(i,{click:V=>{h.value===!0&&L(V)}}),()=>{let V=[];t.icon!==void 0&&V.push(j(sl,{name:t.icon,left:t.stack!==!0&&b.value===!0,role:"img"})),b.value===!0&&V.push(j("span",{class:"block"},[t.label])),V=Mr(e.default,V),t.iconRight!==void 0&&t.round===!1&&V.push(j(sl,{name:t.iconRight,right:t.stack!==!0&&b.value===!0,role:"img"}));const oe=[j("span",{class:"q-focus-helper",ref:d})];return t.loading===!0&&t.percentage!==void 0&&oe.push(j("span",{class:"q-btn__progress absolute-full overflow-hidden"+(t.darkPercentage===!0?" q-btn__progress--dark":"")},[j("span",{class:"q-btn__progress-indicator fit block",style:E.value})])),oe.push(j("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+o.value},V)),t.loading!==null&&oe.push(j(el,{name:"q-transition--fade"},()=>t.loading===!0?[j("span",{key:"loading",class:"absolute-full flex flex-center"},e.loading!==void 0?e.loading():[j($w)])]:null)),Br(j(c.value,$.value,oe),[[WA,y.value,void 0,_.value]])}}}),Hw=qe({name:"QSpace",setup(){const t=j("div",{class:"q-space"});return()=>t}}),$o={dark:{type:Boolean,default:null}};function Fo(t,e){return O(()=>t.dark===null?e.dark.isActive:t.dark)}const ck={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},pu={xs:2,sm:4,md:8,lg:16,xl:24},uk=qe({name:"QSeparator",props:{...$o,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(t){const e=Ke(),n=Fo(t,e.proxy.$q),i=O(()=>t.vertical===!0?"vertical":"horizontal"),r=O(()=>` q-separator--${i.value}`),s=O(()=>t.inset!==!1?`${r.value}-${ck[t.inset]}`:""),o=O(()=>`q-separator${r.value}${s.value}`+(t.color!==void 0?` bg-${t.color}`:"")+(n.value===!0?" q-separator--dark":"")),a=O(()=>{const l={};if(t.size!==void 0&&(l[t.vertical===!0?"width":"height"]=t.size),t.spaced!==!1){const c=t.spaced===!0?`${pu.md}px`:t.spaced in pu?`${pu[t.spaced]}px`:t.spaced,u=t.vertical===!0?["Left","Right"]:["Top","Bottom"];l[`margin${u[0]}`]=l[`margin${u[1]}`]=c}return l});return()=>j("hr",{class:o.value,style:a.value,"aria-orientation":i.value})}}),gu=qe({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(t,{slots:e}){const n=O(()=>`q-item__section column q-item__section--${t.avatar===!0||t.side===!0||t.thumbnail===!0?"side":"main"}`+(t.top===!0?" q-item__section--top justify-start":" justify-center")+(t.avatar===!0?" q-item__section--avatar":"")+(t.thumbnail===!0?" q-item__section--thumbnail":"")+(t.noWrap===!0?" q-item__section--nowrap":""));return()=>j("div",{class:n.value},Nn(e.default))}}),mu=qe({name:"QItem",props:{...$o,...ek,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(t,{slots:e,emit:n}){const{proxy:{$q:i}}=Ke(),r=Fo(t,i),{hasLink:s,linkAttrs:o,linkClass:a,linkTag:l,navigateOnClick:c}=jw(),u=de(null),h=de(null),f=O(()=>t.clickable===!0||s.value===!0||t.tag==="label"),d=O(()=>t.disable!==!0&&f.value===!0),p=O(()=>"q-item q-item-type row no-wrap"+(t.dense===!0?" q-item--dense":"")+(r.value===!0?" q-item--dark":"")+(s.value===!0&&t.active===null?a.value:t.active===!0?` q-item--active${t.activeClass!==void 0?` ${t.activeClass}`:""}`:"")+(t.disable===!0?" disabled":"")+(d.value===!0?" q-item--clickable q-link cursor-pointer "+(t.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(t.focused===!0?" q-manual-focusable--focused":""):"")),m=O(()=>t.insetLevel===void 0?null:{["padding"+(i.lang.rtl===!0?"Right":"Left")]:16+t.insetLevel*56+"px"});function w(_){d.value===!0&&(h.value!==null&&(_.qKeyEvent!==!0&&document.activeElement===u.value?h.value.focus():document.activeElement===h.value&&u.value.focus()),c(_))}function b(_){if(d.value===!0&&or(_,[13,32])===!0){Vn(_),_.qKeyEvent=!0;const E=new MouseEvent("click",_);E.qKeyEvent=!0,u.value.dispatchEvent(E)}n("keyup",_)}function y(){const _=Ow(e.default,[]);return d.value===!0&&_.unshift(j("div",{class:"q-focus-helper",tabindex:-1,ref:h})),_}return()=>{const _={ref:u,class:p.value,style:m.value,role:"listitem",onClick:w,onKeyup:b};return d.value===!0?(_.tabindex=t.tabindex||"0",Object.assign(_,o.value)):f.value===!0&&(_["aria-disabled"]="true"),j(l.value,_,y())}}}),hk=["ul","ol"],fk=qe({name:"QList",props:{...$o,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(t,{slots:e}){const n=Ke(),i=Fo(t,n.proxy.$q),r=O(()=>hk.includes(t.tag)?null:"list"),s=O(()=>"q-list"+(t.bordered===!0?" q-list--bordered":"")+(t.dense===!0?" q-list--dense":"")+(t.separator===!0?" q-list--separator":"")+(i.value===!0?" q-list--dark":"")+(t.padding===!0?" q-list--padding":""));return()=>j(t.tag,{class:s.value,role:r.value},Nn(e.default))}});function dk(){if(window.getSelection!==void 0){const t=window.getSelection();t.empty!==void 0?t.empty():t.removeAllRanges!==void 0&&(t.removeAllRanges(),nl.is.mobile!==!0&&t.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const pk={target:{type:[Boolean,String,Element],default:!0},noParentEvent:Boolean},gk={...pk,contextMenu:Boolean};function mk({showing:t,avoidEmit:e,configureAnchorEl:n}){const{props:i,proxy:r,emit:s}=Ke(),o=de(null);let a=null;function l(d){return o.value===null?!1:d===void 0||d.touches===void 0||d.touches.length<=1}const c={};n===void 0&&(Object.assign(c,{hide(d){r.hide(d)},toggle(d){r.toggle(d),d.qAnchorHandled=!0},toggleKey(d){or(d,13)===!0&&c.toggle(d)},contextClick(d){r.hide(d),oo(d),Ht(()=>{r.show(d),d.qAnchorHandled=!0})},prevent:oo,mobileTouch(d){if(c.mobileCleanup(d),l(d)!==!0)return;r.hide(d),o.value.classList.add("non-selectable");const p=d.target;uh(c,"anchor",[[p,"touchmove","mobileCleanup","passive"],[p,"touchend","mobileCleanup","passive"],[p,"touchcancel","mobileCleanup","passive"],[o.value,"contextmenu","prevent","notPassive"]]),a=setTimeout(()=>{a=null,r.show(d),d.qAnchorHandled=!0},300)},mobileCleanup(d){o.value.classList.remove("non-selectable"),a!==null&&(clearTimeout(a),a=null),t.value===!0&&d!==void 0&&dk()}}),n=function(d=i.contextMenu){if(i.noParentEvent===!0||o.value===null)return;let p;d===!0?r.$q.platform.is.mobile===!0?p=[[o.value,"touchstart","mobileTouch","passive"]]:p=[[o.value,"mousedown","hide","passive"],[o.value,"contextmenu","contextClick","notPassive"]]:p=[[o.value,"click","toggle","passive"],[o.value,"keyup","toggleKey","passive"]],uh(c,"anchor",p)});function u(){cw(c,"anchor")}function h(d){for(o.value=d;o.value.classList.contains("q-anchor--skip");)o.value=o.value.parentNode;n()}function f(){if(i.target===!1||i.target===""||r.$el.parentNode===null)o.value=null;else if(i.target===!0)h(r.$el.parentNode);else{let d=i.target;if(typeof i.target=="string")try{d=document.querySelector(i.target)}catch{d=void 0}d!=null?(o.value=d.$el||d,n()):(o.value=null,console.error(`Anchor: target "${i.target}" not found`))}}return xe(()=>i.contextMenu,d=>{o.value!==null&&(u(),n(d))}),xe(()=>i.target,()=>{o.value!==null&&u(),f()}),xe(()=>i.noParentEvent,d=>{o.value!==null&&(d===!0?u():n())}),Pn(()=>{f(),e!==!0&&i.modelValue===!0&&o.value===null&&s("update:modelValue",!1)}),xt(()=>{a!==null&&clearTimeout(a),u()}),{anchorEl:o,canShow:l,anchorEvents:c}}function vk(t,e){const n=de(null);let i;function r(a,l){const c=`${l!==void 0?"add":"remove"}EventListener`,u=l!==void 0?l:i;a!==window&&a[c]("scroll",u,Qe.passive),window[c]("scroll",u,Qe.passive),i=l}function s(){n.value!==null&&(r(n.value),n.value=null)}const o=xe(()=>t.noParentEvent,()=>{n.value!==null&&(s(),e())});return xt(o),{localScrollTarget:n,unconfigureScrollTarget:s,changeScrollEvent:r}}const zw={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Kw=["beforeShow","show","beforeHide","hide"];function Ww({showing:t,canShow:e,hideOnRouteChange:n,handleShow:i,handleHide:r,processOnMount:s}){const o=Ke(),{props:a,emit:l,proxy:c}=o;let u;function h(y){t.value===!0?p(y):f(y)}function f(y){if(a.disable===!0||y!==void 0&&y.qAnchorHandled===!0||e!==void 0&&e(y)!==!0)return;const _=a["onUpdate:modelValue"]!==void 0;_===!0&&(l("update:modelValue",!0),u=y,Ht(()=>{u===y&&(u=void 0)})),(a.modelValue===null||_===!1)&&d(y)}function d(y){t.value!==!0&&(t.value=!0,l("beforeShow",y),i!==void 0?i(y):l("show",y))}function p(y){if(a.disable===!0)return;const _=a["onUpdate:modelValue"]!==void 0;_===!0&&(l("update:modelValue",!1),u=y,Ht(()=>{u===y&&(u=void 0)})),(a.modelValue===null||_===!1)&&m(y)}function m(y){t.value!==!1&&(t.value=!1,l("beforeHide",y),r!==void 0?r(y):l("hide",y))}function w(y){a.disable===!0&&y===!0?a["onUpdate:modelValue"]!==void 0&&l("update:modelValue",!1):y===!0!==t.value&&(y===!0?d:m)(u)}xe(()=>a.modelValue,w),n!==void 0&&Vw(o)===!0&&xe(()=>c.$route.fullPath,()=>{n.value===!0&&t.value===!0&&p()}),s===!0&&Pn(()=>{w(a.modelValue)});const b={show:f,hide:p,toggle:h};return Object.assign(c,b),b}let Hi=[],co=[];function Gw(t){co=co.filter(e=>e!==t)}function yk(t){Gw(t),co.push(t)}function Cg(t){Gw(t),co.length===0&&Hi.length!==0&&(Hi[Hi.length-1](),Hi=[])}function Qw(t){co.length===0?t():Hi.push(t)}function oU(t){Hi=Hi.filter(e=>e!==t)}let wk=1,_k=document.body;function Pf(t,e){const n=document.createElement("div");if(n.id=e!==void 0?`q-portal--${e}--${wk++}`:t,rl.globalNodes!==void 0){const i=rl.globalNodes.class;i!==void 0&&(n.className=i)}return _k.appendChild(n),n}function bk(t){t.remove()}const zr=[];function Ek(t){return zr.find(e=>e.contentEl!==null&&e.contentEl.contains(t))}function Yw(t,e){do{if(t.$options.name==="QMenu"){if(t.hide(e),t.$props.separateClosePopup===!0)return Da(t)}else if(t.__qPortal===!0){const n=Da(t);return n!==void 0&&n.$options.name==="QPopupProxy"?(t.hide(e),n):t}t=Da(t)}while(t!=null)}function Tk(t,e,n){for(;n!==0&&t!==void 0&&t!==null;){if(t.__qPortal===!0){if(n--,t.$options.name==="QMenu"){t=Yw(t,e);continue}t.hide(e)}t=Da(t)}}const Ik=qe({name:"QPortal",setup(t,{slots:e}){return()=>e.default()}});function Sk(t){for(t=t.parent;t!=null;){if(t.type.name==="QGlobalDialog")return!0;if(t.type.name==="QDialog"||t.type.name==="QMenu")return!1;t=t.parent}return!1}function Jw(t,e,n,i){const r=de(!1),s=de(!1);let o=null;const a={},l=i==="dialog"&&Sk(t);function c(h){if(h===!0){Cg(a),s.value=!0;return}s.value=!1,r.value===!1&&(l===!1&&o===null&&(o=Pf(!1,i)),r.value=!0,zr.push(t.proxy),yk(a))}function u(h){if(s.value=!1,h!==!0)return;Cg(a),r.value=!1;const f=zr.indexOf(t.proxy);f!==-1&&zr.splice(f,1),o!==null&&(bk(o),o=null)}return Gl(()=>{u(!0)}),t.proxy.__qPortal=!0,Xl(t.proxy,"contentEl",()=>e.value),{showPortal:c,hidePortal:u,portalIsActive:r,portalIsAccessible:s,renderPortal:()=>l===!0?n():r.value===!0?[j(hI,{to:o},j(Ik,n))]:void 0}}const Xw={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Zw(t,e=()=>{},n=()=>{}){return{transitionProps:O(()=>{const i=`q-transition--${t.transitionShow||e()}`,r=`q-transition--${t.transitionHide||n()}`;return{appear:!0,enterFromClass:`${i}-enter-from`,enterActiveClass:`${i}-enter-active`,enterToClass:`${i}-enter-to`,leaveFromClass:`${r}-leave-from`,leaveActiveClass:`${r}-leave-active`,leaveToClass:`${r}-leave-to`}}),transitionStyle:O(()=>`--q-transition-duration: ${t.transitionDuration}ms`)}}function e_(){let t;const e=Ke();function n(){t=void 0}return bf(n),xt(n),{removeTick:n,registerTick(i){t=i,Ht(()=>{t===i&&(Bw(e)===!1&&t(),t=void 0)})}}}function t_(){let t=null;const e=Ke();function n(){t!==null&&(clearTimeout(t),t=null)}return bf(n),xt(n),{removeTimeout:n,registerTimeout(i,r){n(),Bw(e)===!1&&(t=setTimeout(()=>{t=null,i()},r))}}}const n_=[Element,String],Ck=[null,document,document.body,document.scrollingElement,document.documentElement];function i_(t,e){let n=zA(e);if(n===void 0){if(t==null)return window;n=t.closest(".scroll,.scroll-y,.overflow-auto")}return Ck.includes(n)?window:n}function r_(t){return t===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:t.scrollTop}function s_(t){return t===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:t.scrollLeft}let ha;function Oa(){if(ha!==void 0)return ha;const t=document.createElement("p"),e=document.createElement("div");wh(t,{width:"100%",height:"200px"}),wh(e,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),e.appendChild(t),document.body.appendChild(e);const n=t.offsetWidth;e.style.overflow="scroll";let i=t.offsetWidth;return n===i&&(i=e.clientWidth),e.remove(),ha=n-i,ha}function Ak(t,e=!0){return!t||t.nodeType!==Node.ELEMENT_NODE?!1:e?t.scrollHeight>t.clientHeight&&(t.classList.contains("scroll")||t.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(t)["overflow-y"])):t.scrollWidth>t.clientWidth&&(t.classList.contains("scroll")||t.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(t)["overflow-x"]))}const Xi=[];let is;function kk(t){is=t.keyCode===27}function Rk(){is===!0&&(is=!1)}function xk(t){is===!0&&(is=!1,or(t,27)===!0&&Xi[Xi.length-1](t))}function o_(t){window[t]("keydown",kk),window[t]("blur",Rk),window[t]("keyup",xk),is=!1}function a_(t){et.is.desktop===!0&&(Xi.push(t),Xi.length===1&&o_("addEventListener"))}function ol(t){const e=Xi.indexOf(t);e!==-1&&(Xi.splice(e,1),Xi.length===0&&o_("removeEventListener"))}const Zi=[];function l_(t){Zi[Zi.length-1](t)}function c_(t){et.is.desktop===!0&&(Zi.push(t),Zi.length===1&&document.body.addEventListener("focusin",l_))}function _h(t){const e=Zi.indexOf(t);e!==-1&&(Zi.splice(e,1),Zi.length===0&&document.body.removeEventListener("focusin",l_))}const{notPassiveCapture:al}=Qe,er=[];function ll(t){const e=t.target;if(e===void 0||e.nodeType===8||e.classList.contains("no-pointer-events")===!0)return;let n=zr.length-1;for(;n>=0;){const i=zr[n].$;if(i.type.name==="QTooltip"){n--;continue}if(i.type.name!=="QDialog")break;if(i.props.seamless!==!0)return;n--}for(let i=er.length-1;i>=0;i--){const r=er[i];if((r.anchorEl.value===null||r.anchorEl.value.contains(e)===!1)&&(e===document.body||r.innerRef.value!==null&&r.innerRef.value.contains(e)===!1))t.qClickOutside=!0,r.onClickOutside(t);else return}}function Pk(t){er.push(t),er.length===1&&(document.addEventListener("mousedown",ll,al),document.addEventListener("touchstart",ll,al))}function Ag(t){const e=er.findIndex(n=>n===t);e!==-1&&(er.splice(e,1),er.length===0&&(document.removeEventListener("mousedown",ll,al),document.removeEventListener("touchstart",ll,al)))}let kg,Rg;function xg(t){const e=t.split(" ");return e.length!==2?!1:["top","center","bottom"].includes(e[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(e[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Dk(t){return t?!(t.length!==2||typeof t[0]!="number"||typeof t[1]!="number"):!0}const bh={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(t=>{bh[`${t}#ltr`]=t,bh[`${t}#rtl`]=t});function Pg(t,e){const n=t.split(" ");return{vertical:n[0],horizontal:bh[`${n[1]}#${e===!0?"rtl":"ltr"}`]}}function Ok(t,e){let{top:n,left:i,right:r,bottom:s,width:o,height:a}=t.getBoundingClientRect();return e!==void 0&&(n-=e[1],i-=e[0],s+=e[1],r+=e[0],o+=e[0],a+=e[1]),{top:n,bottom:s,height:a,left:i,right:r,width:o,middle:i+(r-i)/2,center:n+(s-n)/2}}function Nk(t,e,n){let{top:i,left:r}=t.getBoundingClientRect();return i+=e.top,r+=e.left,n!==void 0&&(i+=n[1],r+=n[0]),{top:i,bottom:i+1,height:1,left:r,right:r+1,width:1,middle:r,center:i}}function Lk(t,e){return{top:0,center:e/2,bottom:e,left:0,middle:t/2,right:t}}function Dg(t,e,n,i){return{top:t[n.vertical]-e[i.vertical],left:t[n.horizontal]-e[i.horizontal]}}function u_(t,e=0){if(t.targetEl===null||t.anchorEl===null||e>5)return;if(t.targetEl.offsetHeight===0||t.targetEl.offsetWidth===0){setTimeout(()=>{u_(t,e+1)},10);return}const{targetEl:n,offset:i,anchorEl:r,anchorOrigin:s,selfOrigin:o,absoluteOffset:a,fit:l,cover:c,maxHeight:u,maxWidth:h}=t;if(et.is.ios===!0&&window.visualViewport!==void 0){const $=document.body.style,{offsetLeft:L,offsetTop:x}=window.visualViewport;L!==kg&&($.setProperty("--q-pe-left",L+"px"),kg=L),x!==Rg&&($.setProperty("--q-pe-top",x+"px"),Rg=x)}const{scrollLeft:f,scrollTop:d}=n,p=a===void 0?Ok(r,c===!0?[0,0]:i):Nk(r,a,i);Object.assign(n.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:h,maxHeight:u,visibility:"visible"});const{offsetWidth:m,offsetHeight:w}=n,{elWidth:b,elHeight:y}=l===!0||c===!0?{elWidth:Math.max(p.width,m),elHeight:c===!0?Math.max(p.height,w):w}:{elWidth:m,elHeight:w};let _={maxWidth:h,maxHeight:u};(l===!0||c===!0)&&(_.minWidth=p.width+"px",c===!0&&(_.minHeight=p.height+"px")),Object.assign(n.style,_);const E=Lk(b,y);let I=Dg(p,E,s,o);if(a===void 0||i===void 0)vu(I,p,E,s,o);else{const{top:$,left:L}=I;vu(I,p,E,s,o);let x=!1;if(I.top!==$){x=!0;const C=2*i[1];p.center=p.top-=C,p.bottom-=C+2}if(I.left!==L){x=!0;const C=2*i[0];p.middle=p.left-=C,p.right-=C+2}x===!0&&(I=Dg(p,E,s,o),vu(I,p,E,s,o))}_={top:I.top+"px",left:I.left+"px"},I.maxHeight!==void 0&&(_.maxHeight=I.maxHeight+"px",p.height>I.maxHeight&&(_.minHeight=_.maxHeight)),I.maxWidth!==void 0&&(_.maxWidth=I.maxWidth+"px",p.width>I.maxWidth&&(_.minWidth=_.maxWidth)),Object.assign(n.style,_),n.scrollTop!==d&&(n.scrollTop=d),n.scrollLeft!==f&&(n.scrollLeft=f)}function vu(t,e,n,i,r){const s=n.bottom,o=n.right,a=Oa(),l=window.innerHeight-a,c=document.body.clientWidth;if(t.top<0||t.top+s>l)if(r.vertical==="center")t.top=e[i.vertical]>l/2?Math.max(0,l-s):0,t.maxHeight=Math.min(s,l);else if(e[i.vertical]>l/2){const u=Math.min(l,i.vertical==="center"?e.center:i.vertical===r.vertical?e.bottom:e.top);t.maxHeight=Math.min(s,u),t.top=Math.max(0,u-s)}else t.top=Math.max(0,i.vertical==="center"?e.center:i.vertical===r.vertical?e.top:e.bottom),t.maxHeight=Math.min(s,l-t.top);if(t.left<0||t.left+o>c)if(t.maxWidth=Math.min(o,c),r.horizontal==="middle")t.left=e[i.horizontal]>c/2?Math.max(0,c-o):0;else if(e[i.horizontal]>c/2){const u=Math.min(c,i.horizontal==="middle"?e.middle:i.horizontal===r.horizontal?e.right:e.left);t.maxWidth=Math.min(o,u),t.left=Math.max(0,u-t.maxWidth)}else t.left=Math.max(0,i.horizontal==="middle"?e.middle:i.horizontal===r.horizontal?e.left:e.right),t.maxWidth=Math.min(o,c-t.left)}const Mk=qe({name:"QMenu",inheritAttrs:!1,props:{...gk,...zw,...$o,...Xw,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:xg},self:{type:String,validator:xg},offset:{type:Array,validator:Dk},scrollTarget:n_,touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Kw,"click","escapeKey"],setup(t,{slots:e,emit:n,attrs:i}){let r=null,s,o,a;const l=Ke(),{proxy:c}=l,{$q:u}=c,h=de(null),f=de(!1),d=O(()=>t.persistent!==!0&&t.noRouteDismiss!==!0),p=Fo(t,u),{registerTick:m,removeTick:w}=e_(),{registerTimeout:b}=t_(),{transitionProps:y,transitionStyle:_}=Zw(t),{localScrollTarget:E,changeScrollEvent:I,unconfigureScrollTarget:$}=vk(t,Pt),{anchorEl:L,canShow:x}=mk({showing:f}),{hide:C}=Ww({showing:f,canShow:x,handleShow:ct,handleHide:Je,hideOnRouteChange:d,processOnMount:!0}),{showPortal:N,hidePortal:K,renderPortal:M}=Jw(l,h,q,"menu"),ee={anchorEl:L,innerRef:h,onClickOutside(k){if(t.persistent!==!0&&f.value===!0)return C(k),(k.type==="touchstart"||k.target.classList.contains("q-dialog__backdrop"))&&Vn(k),!0}},V=O(()=>Pg(t.anchor||(t.cover===!0?"center middle":"bottom start"),u.lang.rtl)),oe=O(()=>t.cover===!0?V.value:Pg(t.self||"top start",u.lang.rtl)),ge=O(()=>(t.square===!0?" q-menu--square":"")+(p.value===!0?" q-menu--dark q-dark":"")),Z=O(()=>t.autoClose===!0?{onClick:Dt}:{}),pe=O(()=>f.value===!0&&t.persistent!==!0);xe(pe,k=>{k===!0?(a_(ne),Pk(ee)):(ol(ne),Ag(ee))});function Ve(){Qw(()=>{let k=h.value;k&&k.contains(document.activeElement)!==!0&&(k=k.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||k.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||k.querySelector("[autofocus], [data-autofocus]")||k,k.focus({preventScroll:!0}))})}function ct(k){if(r=t.noRefocus===!1?document.activeElement:null,c_(sn),N(),Pt(),s=void 0,k!==void 0&&(t.touchPosition||t.contextMenu)){const Y=aw(k);if(Y.left!==void 0){const{top:be,left:g}=L.value.getBoundingClientRect();s={left:Y.left-g,top:Y.top-be}}}o===void 0&&(o=xe(()=>u.screen.width+"|"+u.screen.height+"|"+t.self+"|"+t.anchor+"|"+u.lang.rtl,S)),t.noFocus!==!0&&document.activeElement.blur(),m(()=>{S(),t.noFocus!==!0&&Ve()}),b(()=>{u.platform.is.ios===!0&&(a=t.autoClose,h.value.click()),S(),N(!0),n("show",k)},t.transitionDuration)}function Je(k){w(),K(),je(!0),r!==null&&(k===void 0||k.qClickOutside!==!0)&&(((k&&k.type.indexOf("key")===0?r.closest('[tabindex]:not([tabindex^="-"])'):void 0)||r).focus(),r=null),b(()=>{K(!0),n("hide",k)},t.transitionDuration)}function je(k){s=void 0,o!==void 0&&(o(),o=void 0),(k===!0||f.value===!0)&&(_h(sn),$(),Ag(ee),ol(ne)),k!==!0&&(r=null)}function Pt(){(L.value!==null||t.scrollTarget!==void 0)&&(E.value=i_(L.value,t.scrollTarget),I(E.value,S))}function Dt(k){a!==!0?(Yw(c,k),n("click",k)):a=!1}function sn(k){pe.value===!0&&t.noFocus!==!0&&Fw(h.value,k.target)!==!0&&Ve()}function ne(k){n("escapeKey"),C(k)}function S(){u_({targetEl:h.value,offset:t.offset,anchorEl:L.value,anchorOrigin:V.value,selfOrigin:oe.value,absoluteOffset:s,fit:t.fit,cover:t.cover,maxHeight:t.maxHeight,maxWidth:t.maxWidth})}function q(){return j(el,y.value,()=>f.value===!0?j("div",{role:"menu",...i,ref:h,tabindex:-1,class:["q-menu q-position-engine scroll"+ge.value,i.class],style:[i.style,_.value],...Z.value},Nn(e.default)):null)}return xt(je),Object.assign(c,{focus:Ve,updatePosition:S}),M}}),$k=qe({name:"QToolbar",props:{inset:Boolean},setup(t,{slots:e}){const n=O(()=>"q-toolbar row no-wrap items-center"+(t.inset===!0?" q-toolbar--inset":""));return()=>j("div",{class:n.value,role:"toolbar"},Nn(e.default))}});function Fk(){const t=de(!Qn.value);return t.value===!1&&Pn(()=>{t.value=!0}),{isHydrated:t}}const h_=typeof ResizeObserver<"u",Og=h_===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},Eh=qe({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(t,{emit:e}){let n=null,i,r={width:-1,height:-1};function s(l){l===!0||t.debounce===0||t.debounce==="0"?o():n===null&&(n=setTimeout(o,t.debounce))}function o(){if(n!==null&&(clearTimeout(n),n=null),i){const{offsetWidth:l,offsetHeight:c}=i;(l!==r.width||c!==r.height)&&(r={width:l,height:c},e("resize",r))}}const{proxy:a}=Ke();if(a.trigger=s,h_===!0){let l;const c=u=>{i=a.$el.parentNode,i?(l=new ResizeObserver(s),l.observe(i),o()):u!==!0&&Ht(()=>{c(!0)})};return Pn(()=>{c()}),xt(()=>{n!==null&&clearTimeout(n),l!==void 0&&(l.disconnect!==void 0?l.disconnect():i&&l.unobserve(i))}),ln}else{let l=function(){n!==null&&(clearTimeout(n),n=null),h!==void 0&&(h.removeEventListener!==void 0&&h.removeEventListener("resize",s,Qe.passive),h=void 0)},c=function(){l(),i&&i.contentDocument&&(h=i.contentDocument.defaultView,h.addEventListener("resize",s,Qe.passive),o())};const{isHydrated:u}=Fk();let h;return Pn(()=>{Ht(()=>{i=a.$el,i&&c()})}),xt(l),()=>{if(u.value===!0)return j("object",{class:"q--avoid-card-border",style:Og.style,tabindex:-1,type:"text/html",data:Og.url,"aria-hidden":"true",onLoad:c})}}}}),Uk=qe({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:e,emit:n}){const{proxy:{$q:i}}=Ke(),r=kt(Cf,Hr);if(r===Hr)return console.error("QHeader needs to be child of QLayout"),Hr;const s=de(parseInt(t.heightHint,10)),o=de(!0),a=O(()=>t.reveal===!0||r.view.value.indexOf("H")!==-1||i.platform.is.ios&&r.isContainer.value===!0),l=O(()=>{if(t.modelValue!==!0)return 0;if(a.value===!0)return o.value===!0?s.value:0;const y=s.value-r.scroll.value.position;return y>0?y:0}),c=O(()=>t.modelValue!==!0||a.value===!0&&o.value!==!0),u=O(()=>t.modelValue===!0&&c.value===!0&&t.reveal===!0),h=O(()=>"q-header q-layout__section--marginal "+(a.value===!0?"fixed":"absolute")+"-top"+(t.bordered===!0?" q-header--bordered":"")+(c.value===!0?" q-header--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus":"")),f=O(()=>{const y=r.rows.value.top,_={};return y[0]==="l"&&r.left.space===!0&&(_[i.lang.rtl===!0?"right":"left"]=`${r.left.size}px`),y[2]==="r"&&r.right.space===!0&&(_[i.lang.rtl===!0?"left":"right"]=`${r.right.size}px`),_});function d(y,_){r.update("header",y,_)}function p(y,_){y.value!==_&&(y.value=_)}function m({height:y}){p(s,y),d("size",y)}function w(y){u.value===!0&&p(o,!0),n("focusin",y)}xe(()=>t.modelValue,y=>{d("space",y),p(o,!0),r.animate()}),xe(l,y=>{d("offset",y)}),xe(()=>t.reveal,y=>{y===!1&&p(o,t.modelValue)}),xe(o,y=>{r.animate(),n("reveal",y)}),xe(r.scroll,y=>{t.reveal===!0&&p(o,y.direction==="up"||y.position<=t.revealOffset||y.position-y.inflectionPoint<100)});const b={};return r.instances.header=b,t.modelValue===!0&&d("size",s.value),d("space",t.modelValue),d("offset",l.value),xt(()=>{r.instances.header===b&&(r.instances.header=void 0,d("size",0),d("offset",0),d("space",!1))}),()=>{const y=Ow(e.default,[]);return t.elevated===!0&&y.push(j("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),y.push(j(Eh,{debounce:0,onResize:m})),j("header",{class:h.value,style:f.value,onFocusin:w},y)}}}),Vk=qe({name:"QPageContainer",setup(t,{slots:e}){const{proxy:{$q:n}}=Ke(),i=kt(Cf,Hr);if(i===Hr)return console.error("QPageContainer needs to be child of QLayout"),Hr;jr(fC,!0);const r=O(()=>{const s={};return i.header.space===!0&&(s.paddingTop=`${i.header.size}px`),i.right.space===!0&&(s[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${i.right.size}px`),i.footer.space===!0&&(s.paddingBottom=`${i.footer.size}px`),i.left.space===!0&&(s[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${i.left.size}px`),s});return()=>j("div",{class:"q-page-container",style:r.value},Nn(e.default))}}),{passive:Ng}=Qe,Bk=["both","horizontal","vertical"],qk=qe({name:"QScrollObserver",props:{axis:{type:String,validator:t=>Bk.includes(t),default:"vertical"},debounce:[String,Number],scrollTarget:n_},emits:["scroll"],setup(t,{emit:e}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let i=null,r,s;xe(()=>t.scrollTarget,()=>{l(),a()});function o(){i!==null&&i();const h=Math.max(0,r_(r)),f=s_(r),d={top:h-n.position.top,left:f-n.position.left};if(t.axis==="vertical"&&d.top===0||t.axis==="horizontal"&&d.left===0)return;const p=Math.abs(d.top)>=Math.abs(d.left)?d.top<0?"up":"down":d.left<0?"left":"right";n.position={top:h,left:f},n.directionChanged=n.direction!==p,n.delta=d,n.directionChanged===!0&&(n.direction=p,n.inflectionPoint=n.position),e("scroll",{...n})}function a(){r=i_(s,t.scrollTarget),r.addEventListener("scroll",c,Ng),c(!0)}function l(){r!==void 0&&(r.removeEventListener("scroll",c,Ng),r=void 0)}function c(h){if(h===!0||t.debounce===0||t.debounce==="0")o();else if(i===null){const[f,d]=t.debounce?[setTimeout(o,t.debounce),clearTimeout]:[requestAnimationFrame(o),cancelAnimationFrame];i=()=>{d(f),i=null}}}const{proxy:u}=Ke();return xe(()=>u.$q.lang.rtl,o),Pn(()=>{s=u.$el.parentNode,a()}),xt(()=>{i!==null&&i(),l()}),Object.assign(u,{trigger:c,getPosition:()=>n}),ln}}),jk=qe({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:t=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(t.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(t,{slots:e,emit:n}){const{proxy:{$q:i}}=Ke(),r=de(null),s=de(i.screen.height),o=de(t.container===!0?0:i.screen.width),a=de({position:0,direction:"down",inflectionPoint:0}),l=de(0),c=de(Qn.value===!0?0:Oa()),u=O(()=>"q-layout q-layout--"+(t.container===!0?"containerized":"standard")),h=O(()=>t.container===!1?{minHeight:i.screen.height+"px"}:null),f=O(()=>c.value!==0?{[i.lang.rtl===!0?"left":"right"]:`${c.value}px`}:null),d=O(()=>c.value!==0?{[i.lang.rtl===!0?"right":"left"]:0,[i.lang.rtl===!0?"left":"right"]:`-${c.value}px`,width:`calc(100% + ${c.value}px)`}:null);function p(E){if(t.container===!0||document.qScrollPrevented!==!0){const I={position:E.position.top,direction:E.direction,directionChanged:E.directionChanged,inflectionPoint:E.inflectionPoint.top,delta:E.delta.top};a.value=I,t.onScroll!==void 0&&n("scroll",I)}}function m(E){const{height:I,width:$}=E;let L=!1;s.value!==I&&(L=!0,s.value=I,t.onScrollHeight!==void 0&&n("scrollHeight",I),b()),o.value!==$&&(L=!0,o.value=$),L===!0&&t.onResize!==void 0&&n("resize",E)}function w({height:E}){l.value!==E&&(l.value=E,b())}function b(){if(t.container===!0){const E=s.value>l.value?Oa():0;c.value!==E&&(c.value=E)}}let y=null;const _={instances:{},view:O(()=>t.view),isContainer:O(()=>t.container),rootRef:r,height:s,containerHeight:l,scrollbarWidth:c,totalWidth:O(()=>o.value+c.value),rows:O(()=>{const E=t.view.toLowerCase().split(" ");return{top:E[0].split(""),middle:E[1].split(""),bottom:E[2].split("")}}),header:an({size:0,offset:0,space:!1}),right:an({size:300,offset:0,space:!1}),footer:an({size:0,offset:0,space:!1}),left:an({size:300,offset:0,space:!1}),scroll:a,animate(){y!==null?clearTimeout(y):document.body.classList.add("q-body--layout-animate"),y=setTimeout(()=>{y=null,document.body.classList.remove("q-body--layout-animate")},155)},update(E,I,$){_[E][I]=$}};if(jr(Cf,_),Oa()>0){let E=function(){L=null,x.classList.remove("hide-scrollbar")},I=function(){if(L===null){if(x.scrollHeight>i.screen.height)return;x.classList.add("hide-scrollbar")}else clearTimeout(L);L=setTimeout(E,300)},$=function(C){L!==null&&C==="remove"&&(clearTimeout(L),E()),window[`${C}EventListener`]("resize",I)},L=null;const x=document.body;xe(()=>t.container!==!0?"add":"remove",$),t.container!==!0&&$("add"),Gl(()=>{$("remove")})}return()=>{const E=Mr(e.default,[j(qk,{onScroll:p}),j(Eh,{onResize:m})]),I=j("div",{class:u.value,style:h.value,ref:t.container===!0?void 0:r,tabindex:-1},E);return t.container===!0?j("div",{class:"q-layout-container overflow-hidden",ref:r},[j(Eh,{onResize:w}),j("div",{class:"absolute-full",style:f.value},[j("div",{class:"scroll",style:d.value},[I])])]):I}}});function Lg(t){if(t===!1)return 0;if(t===!0||t===void 0)return 1;const e=parseInt(t,10);return isNaN(e)?0:e}const Na=ow({name:"close-popup",beforeMount(t,{value:e}){const n={depth:Lg(e),handler(i){n.depth!==0&&setTimeout(()=>{const r=Ek(t);r!==void 0&&Tk(r,i,n.depth)})},handlerKey(i){or(i,13)===!0&&n.handler(i)}};t.__qclosepopup=n,t.addEventListener("click",n.handler),t.addEventListener("keyup",n.handlerKey)},updated(t,{value:e,oldValue:n}){e!==n&&(t.__qclosepopup.depth=Lg(e))},beforeUnmount(t){const e=t.__qclosepopup;t.removeEventListener("click",e.handler),t.removeEventListener("keyup",e.handlerKey),delete t.__qclosepopup}});function Hk(){return kt(dw)}const Mg=qe({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(t,{slots:e}){const n=O(()=>`q-card__section q-card__section--${t.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>j(t.tag,{class:n.value},Nn(e.default))}}),zk=qe({name:"QCard",props:{...$o,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(t,{slots:e}){const{proxy:{$q:n}}=Ke(),i=Fo(t,n),r=O(()=>"q-card"+(i.value===!0?" q-card--dark q-dark":"")+(t.bordered===!0?" q-card--bordered":"")+(t.square===!0?" q-card--square no-border-radius":"")+(t.flat===!0?" q-card--flat no-shadow":""));return()=>j(t.tag,{class:r.value},Nn(e.default))}});function Kk(t,e,n){let i;function r(){i!==void 0&&(hh.remove(i),i=void 0)}return xt(()=>{t.value===!0&&r()}),{removeFromHistory:r,addToHistory(){i={condition:()=>n.value===!0,handler:e},hh.add(i)}}}let Is=0,yu,wu,xs,_u=!1,$g,Fg,Ug,Vi=null;function Wk(t){Gk(t)&&Vn(t)}function Gk(t){if(t.target===document.body||t.target.classList.contains("q-layout__backdrop"))return!0;const e=XS(t),n=t.shiftKey&&!t.deltaX,i=!n&&Math.abs(t.deltaX)<=Math.abs(t.deltaY),r=n||i?t.deltaY:t.deltaX;for(let s=0;s<e.length;s++){const o=e[s];if(Ak(o,i))return i?r<0&&o.scrollTop===0?!0:r>0&&o.scrollTop+o.clientHeight===o.scrollHeight:r<0&&o.scrollLeft===0?!0:r>0&&o.scrollLeft+o.clientWidth===o.scrollWidth}return!0}function Vg(t){t.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function fa(t){_u!==!0&&(_u=!0,requestAnimationFrame(()=>{_u=!1;const{height:e}=t.target,{clientHeight:n,scrollTop:i}=document.scrollingElement;(xs===void 0||e!==window.innerHeight)&&(xs=n-e,document.scrollingElement.scrollTop=i),i>xs&&(document.scrollingElement.scrollTop-=Math.ceil((i-xs)/8))}))}function Bg(t){const e=document.body,n=window.visualViewport!==void 0;if(t==="add"){const{overflowY:i,overflowX:r}=window.getComputedStyle(e);yu=s_(window),wu=r_(window),$g=e.style.left,Fg=e.style.top,Ug=window.location.href,e.style.left=`-${yu}px`,e.style.top=`-${wu}px`,r!=="hidden"&&(r==="scroll"||e.scrollWidth>window.innerWidth)&&e.classList.add("q-body--force-scrollbar-x"),i!=="hidden"&&(i==="scroll"||e.scrollHeight>window.innerHeight)&&e.classList.add("q-body--force-scrollbar-y"),e.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,et.is.ios===!0&&(n===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",fa,Qe.passiveCapture),window.visualViewport.addEventListener("scroll",fa,Qe.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Vg,Qe.passiveCapture))}et.is.desktop===!0&&et.is.mac===!0&&window[`${t}EventListener`]("wheel",Wk,Qe.notPassive),t==="remove"&&(et.is.ios===!0&&(n===!0?(window.visualViewport.removeEventListener("resize",fa,Qe.passiveCapture),window.visualViewport.removeEventListener("scroll",fa,Qe.passiveCapture)):window.removeEventListener("scroll",Vg,Qe.passiveCapture)),e.classList.remove("q-body--prevent-scroll"),e.classList.remove("q-body--force-scrollbar-x"),e.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,e.style.left=$g,e.style.top=Fg,window.location.href===Ug&&window.scrollTo(yu,wu),xs=void 0)}function Qk(t){let e="add";if(t===!0){if(Is++,Vi!==null){clearTimeout(Vi),Vi=null;return}if(Is>1)return}else{if(Is===0||(Is--,Is>0))return;if(e="remove",et.is.ios===!0&&et.is.nativeMobile===!0){Vi!==null&&clearTimeout(Vi),Vi=setTimeout(()=>{Bg(e),Vi=null},100);return}}Bg(e)}function Yk(){let t;return{preventBodyScroll(e){e!==t&&(t!==void 0||e===!0)&&(t=e,Qk(e))}}}let da=0;const Jk={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},qg={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]},Xk=qe({name:"QDialog",inheritAttrs:!1,props:{...zw,...Xw,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,backdropFilter:String,position:{type:String,default:"standard",validator:t=>["standard","top","bottom","left","right"].includes(t)}},emits:[...Kw,"shake","click","escapeKey"],setup(t,{slots:e,emit:n,attrs:i}){const r=Ke(),s=de(null),o=de(!1),a=de(!1);let l=null,c=null,u,h;const f=O(()=>t.persistent!==!0&&t.noRouteDismiss!==!0&&t.seamless!==!0),{preventBodyScroll:d}=Yk(),{registerTimeout:p}=t_(),{registerTick:m,removeTick:w}=e_(),{transitionProps:b,transitionStyle:y}=Zw(t,()=>qg[t.position][0],()=>qg[t.position][1]),_=O(()=>y.value+(t.backdropFilter!==void 0?`;backdrop-filter:${t.backdropFilter};-webkit-backdrop-filter:${t.backdropFilter}`:"")),{showPortal:E,hidePortal:I,portalIsAccessible:$,renderPortal:L}=Jw(r,s,sn,"dialog"),{hide:x}=Ww({showing:o,hideOnRouteChange:f,handleShow:oe,handleHide:ge,processOnMount:!0}),{addToHistory:C,removeFromHistory:N}=Kk(o,x,f),K=O(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${t.maximized===!0?"maximized":"minimized"} q-dialog__inner--${t.position} ${Jk[t.position]}`+(a.value===!0?" q-dialog__inner--animating":"")+(t.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(t.fullHeight===!0?" q-dialog__inner--fullheight":"")+(t.square===!0?" q-dialog__inner--square":"")),M=O(()=>o.value===!0&&t.seamless!==!0),ee=O(()=>t.autoClose===!0?{onClick:je}:{}),V=O(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${M.value===!0?"modal":"seamless"}`,i.class]);xe(()=>t.maximized,ne=>{o.value===!0&&Je(ne)}),xe(M,ne=>{d(ne),ne===!0?(c_(Dt),a_(Ve)):(_h(Dt),ol(Ve))});function oe(ne){C(),c=t.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,Je(t.maximized),E(),a.value=!0,t.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),m(Z)):w(),p(()=>{if(r.proxy.$q.platform.is.ios===!0){if(t.seamless!==!0&&document.activeElement){const{top:S,bottom:q}=document.activeElement.getBoundingClientRect(),{innerHeight:k}=window,Y=window.visualViewport!==void 0?window.visualViewport.height:k;S>0&&q>Y/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-Y,q>=k?1/0:Math.ceil(document.scrollingElement.scrollTop+q-Y/2))),document.activeElement.scrollIntoView()}h=!0,s.value.click(),h=!1}E(!0),a.value=!1,n("show",ne)},t.transitionDuration)}function ge(ne){w(),N(),ct(!0),a.value=!0,I(),c!==null&&(((ne&&ne.type.indexOf("key")===0?c.closest('[tabindex]:not([tabindex^="-"])'):void 0)||c).focus(),c=null),p(()=>{I(!0),a.value=!1,n("hide",ne)},t.transitionDuration)}function Z(ne){Qw(()=>{let S=s.value;if(S!==null){if(ne!==void 0){const q=S.querySelector(ne);if(q!==null){q.focus({preventScroll:!0});return}}S.contains(document.activeElement)!==!0&&(S=S.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||S.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||S.querySelector("[autofocus], [data-autofocus]")||S,S.focus({preventScroll:!0}))}})}function pe(ne){ne&&typeof ne.focus=="function"?ne.focus({preventScroll:!0}):Z(),n("shake");const S=s.value;S!==null&&(S.classList.remove("q-animate--scale"),S.classList.add("q-animate--scale"),l!==null&&clearTimeout(l),l=setTimeout(()=>{l=null,s.value!==null&&(S.classList.remove("q-animate--scale"),Z())},170))}function Ve(){t.seamless!==!0&&(t.persistent===!0||t.noEscDismiss===!0?t.maximized!==!0&&t.noShake!==!0&&pe():(n("escapeKey"),x()))}function ct(ne){l!==null&&(clearTimeout(l),l=null),(ne===!0||o.value===!0)&&(Je(!1),t.seamless!==!0&&(d(!1),_h(Dt),ol(Ve))),ne!==!0&&(c=null)}function Je(ne){ne===!0?u!==!0&&(da<1&&document.body.classList.add("q-body--dialog"),da++,u=!0):u===!0&&(da<2&&document.body.classList.remove("q-body--dialog"),da--,u=!1)}function je(ne){h!==!0&&(x(ne),n("click",ne))}function Pt(ne){t.persistent!==!0&&t.noBackdropDismiss!==!0?x(ne):t.noShake!==!0&&pe()}function Dt(ne){t.allowFocusOutside!==!0&&$.value===!0&&Fw(s.value,ne.target)!==!0&&Z('[tabindex]:not([tabindex="-1"])')}Object.assign(r.proxy,{focus:Z,shake:pe,__updateRefocusTarget(ne){c=ne||null}}),xt(ct);function sn(){return j("div",{role:"dialog","aria-modal":M.value===!0?"true":"false",...i,class:V.value},[j(el,{name:"q-transition--fade",appear:!0},()=>M.value===!0?j("div",{class:"q-dialog__backdrop fixed-full",style:_.value,"aria-hidden":"true",tabindex:-1,onClick:Pt}):null),j(el,b.value,()=>o.value===!0?j("div",{ref:s,class:K.value,style:y.value,tabindex:-1,...ee.value},Nn(e.default)):null)])}return L}}),Zk={__name:"AuthDialog",props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,{emit:e}){const n=e,i=de("SignInForm"),r=a=>i.value=a,s={SignInForm:Zc(()=>ke(()=>import("./SignInForm-CBvmMvj_.js"),__vite__mapDeps([36,7,29]))),SignUpForm:Zc(()=>ke(()=>import("./SignUpForm-DYhddrb1.js"),__vite__mapDeps([37,7,11,29]))),FindPasswordForm:Zc(()=>ke(()=>import("./FindPasswordForm-DvZfYQXW.js"),__vite__mapDeps([38,7])))},o=()=>{n("update:modelValue",!1)};return(a,l)=>(Qt(),Yt(Xk,{"model-value":t.modelValue,"onUpdate:modelValue":l[0]||(l[0]=c=>a.$emit("update:modelValue",c)),"transition-show":"none","transition-hide":"none",onHide:l[1]||(l[1]=c=>r("SignInForm"))},{default:He(()=>[ue(zk,{style:{width:"400px"}},{default:He(()=>[ue(Mg,{class:"flex"},{default:He(()=>[ue(Hw),Br(ue(Un,{icon:"close",flat:"",round:"",dense:""},null,512),[[Na]])]),_:1}),ue(Mg,{class:"q-px-xl q-pb-xl"},{default:He(()=>[(Qt(),Yt(EI(s[i.value]),{onChangeView:r,onCloseDialog:o},null,32))]),_:1})]),_:1})]),_:1},8,["model-value"]))}};var jg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f_=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},eR=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},d_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,d=c&63;l||(d=64,o||(f=64)),i.push(n[u],n[h],n[f],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(f_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):eR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||c==null||h==null)throw new tR;const f=s<<2|a>>4;if(i.push(f),c!==64){const d=a<<4&240|c>>2;if(i.push(d),h!==64){const p=c<<6&192|h;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class tR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nR=function(t){const e=f_(t);return d_.encodeByteArray(e,!0)},cl=function(t){return nR(t).replace(/\./g,"")},p_=function(t){try{return d_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR=()=>iR().__FIREBASE_DEFAULTS__,sR=()=>{if(typeof process>"u"||typeof jg>"u")return;const t=jg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},oR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&p_(t[1]);return e&&JSON.parse(e)},Df=()=>{try{return rR()||sR()||oR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},g_=t=>{var e,n;return(n=(e=Df())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},m_=t=>{const e=g_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},v_=()=>{var t;return(t=Df())===null||t===void 0?void 0:t.config},y_=t=>{var e;return(e=Df())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[cl(JSON.stringify(n)),cl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_t())}function __(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function cR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uR(){const t=_t();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function b_(){try{return typeof indexedDB=="object"}catch{return!1}}function E_(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function hR(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fR="FirebaseError";class rn extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=fR,Object.setPrototypeOf(this,rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vr.prototype.create)}}class vr{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?dR(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new rn(r,a,i)}}function dR(t,e){return t.replace(pR,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const pR=/\{\$([^}]+)}/g;function gR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function uo(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(Hg(s)&&Hg(o)){if(!uo(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function Hg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Ps(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,s]=i.split("=");e[decodeURIComponent(r)]=decodeURIComponent(s)}}),e}function Ds(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function mR(t,e){const n=new vR(t,e);return n.subscribe.bind(n)}class vR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");yR(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=bu),r.error===void 0&&(r.error=bu),r.complete===void 0&&(r.complete=bu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function bu(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wR=1e3,_R=2,bR=4*60*60*1e3,ER=.5;function zg(t,e=wR,n=_R){const i=e*Math.pow(n,t),r=Math.round(ER*i*(Math.random()-.5)*2);return Math.min(bR,i+r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(t){return t&&t._delegate?t._delegate:t}class tn{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new aR;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e?.identifier),r=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(SR(e))try{this.getOrInitializeService({instanceIdentifier:qi})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=qi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qi){return this.instances.has(e)}getOptions(e=qi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:IR(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=qi){return this.component?this.component.multipleInstances?e:qi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function IR(t){return t===qi?void 0:t}function SR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new TR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const AR={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},kR=Ee.INFO,RR={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},xR=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=RR[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class nc{constructor(e){this.name=e,this._logLevel=kR,this._logHandler=xR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?AR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const PR=(t,e)=>e.some(n=>t instanceof n);let Kg,Wg;function DR(){return Kg||(Kg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function OR(){return Wg||(Wg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const T_=new WeakMap,Th=new WeakMap,I_=new WeakMap,Eu=new WeakMap,Of=new WeakMap;function NR(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(_i(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&T_.set(n,t)}).catch(()=>{}),Of.set(e,t),e}function LR(t){if(Th.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Th.set(t,e)}let Ih={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Th.get(t);if(e==="objectStoreNames")return t.objectStoreNames||I_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _i(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function MR(t){Ih=t(Ih)}function $R(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Tu(this),e,...n);return I_.set(i,e.sort?e.sort():[e]),_i(i)}:OR().includes(t)?function(...e){return t.apply(Tu(this),e),_i(T_.get(this))}:function(...e){return _i(t.apply(Tu(this),e))}}function FR(t){return typeof t=="function"?$R(t):(t instanceof IDBTransaction&&LR(t),PR(t,DR())?new Proxy(t,Ih):t)}function _i(t){if(t instanceof IDBRequest)return NR(t);if(Eu.has(t))return Eu.get(t);const e=FR(t);return e!==t&&(Eu.set(t,e),Of.set(e,t)),e}const Tu=t=>Of.get(t);function UR(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=_i(o);return i&&o.addEventListener("upgradeneeded",l=>{i(_i(o.result),l.oldVersion,l.newVersion,_i(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const VR=["get","getKey","getAll","getAllKeys","count"],BR=["put","add","delete","clear"],Iu=new Map;function Gg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Iu.get(e))return Iu.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=BR.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||VR.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return Iu.set(e,s),s}MR(t=>({...t,get:(e,n,i)=>Gg(e,n)||t.get(e,n,i),has:(e,n)=>!!Gg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(jR(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function jR(t){const e=t.getComponent();return e?.type==="VERSION"}const Sh="@firebase/app",Qg="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar=new nc("@firebase/app"),HR="@firebase/app-compat",zR="@firebase/analytics-compat",KR="@firebase/analytics",WR="@firebase/app-check-compat",GR="@firebase/app-check",QR="@firebase/auth",YR="@firebase/auth-compat",JR="@firebase/database",XR="@firebase/database-compat",ZR="@firebase/functions",e1="@firebase/functions-compat",t1="@firebase/installations",n1="@firebase/installations-compat",i1="@firebase/messaging",r1="@firebase/messaging-compat",s1="@firebase/performance",o1="@firebase/performance-compat",a1="@firebase/remote-config",l1="@firebase/remote-config-compat",c1="@firebase/storage",u1="@firebase/storage-compat",h1="@firebase/firestore",f1="@firebase/firestore-compat",d1="firebase",p1="9.23.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch="[DEFAULT]",g1={[Sh]:"fire-core",[HR]:"fire-core-compat",[KR]:"fire-analytics",[zR]:"fire-analytics-compat",[GR]:"fire-app-check",[WR]:"fire-app-check-compat",[QR]:"fire-auth",[YR]:"fire-auth-compat",[JR]:"fire-rtdb",[XR]:"fire-rtdb-compat",[ZR]:"fire-fn",[e1]:"fire-fn-compat",[t1]:"fire-iid",[n1]:"fire-iid-compat",[i1]:"fire-fcm",[r1]:"fire-fcm-compat",[s1]:"fire-perf",[o1]:"fire-perf-compat",[a1]:"fire-rc",[l1]:"fire-rc-compat",[c1]:"fire-gcs",[u1]:"fire-gcs-compat",[h1]:"fire-fst",[f1]:"fire-fst-compat","fire-js":"fire-js",[d1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul=new Map,Ah=new Map;function m1(t,e){try{t.container.addComponent(e)}catch(n){ar.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function dn(t){const e=t.name;if(Ah.has(e))return ar.debug(`There were multiple attempts to register component ${e}.`),!1;Ah.set(e,t);for(const n of ul.values())m1(n,t);return!0}function Pi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},bi=new vr("app","Firebase",v1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr=p1;function S_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Ch,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw bi.create("bad-app-name",{appName:String(r)});if(n||(n=v_()),!n)throw bi.create("no-options");const s=ul.get(r);if(s){if(uo(n,s.options)&&uo(i,s.config))return s;throw bi.create("duplicate-app",{appName:r})}const o=new CR(r);for(const l of Ah.values())o.addComponent(l);const a=new y1(n,i,o);return ul.set(r,a),a}function ic(t=Ch){const e=ul.get(t);if(!e&&t===Ch&&v_())return S_();if(!e)throw bi.create("no-app",{appName:t});return e}function $t(t,e,n){var i;let r=(i=g1[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ar.warn(a.join(" "));return}dn(new tn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w1="firebase-heartbeat-database",_1=1,ho="firebase-heartbeat-store";let Su=null;function C_(){return Su||(Su=UR(w1,_1,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ho)}}}).catch(t=>{throw bi.create("idb-open",{originalErrorMessage:t.message})})),Su}async function b1(t){try{return await(await C_()).transaction(ho).objectStore(ho).get(A_(t))}catch(e){if(e instanceof rn)ar.warn(e.message);else{const n=bi.create("idb-get",{originalErrorMessage:e?.message});ar.warn(n.message)}}}async function Yg(t,e){try{const i=(await C_()).transaction(ho,"readwrite");await i.objectStore(ho).put(e,A_(t)),await i.done}catch(n){if(n instanceof rn)ar.warn(n.message);else{const i=bi.create("idb-set",{originalErrorMessage:n?.message});ar.warn(i.message)}}}function A_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E1=1024,T1=30*24*60*60*1e3;class I1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new C1(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Jg();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=T1}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Jg(),{heartbeatsToSend:n,unsentEntries:i}=S1(this._heartbeatsCache.heartbeats),r=cl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Jg(){return new Date().toISOString().substring(0,10)}function S1(t,e=E1){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),Xg(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Xg(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class C1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return b_()?E_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await b1(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Yg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Yg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Xg(t){return cl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A1(t){dn(new tn("platform-logger",e=>new qR(e),"PRIVATE")),dn(new tn("heartbeat",e=>new I1(e),"PRIVATE")),$t(Sh,Qg,t),$t(Sh,Qg,"esm2017"),$t("fire-js","")}A1("");function Nf(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function k_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const k1=k_,R_=new vr("auth","Firebase",k_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl=new nc("@firebase/auth");function R1(t,...e){hl.logLevel<=Ee.WARN&&hl.warn(`Auth (${yr}): ${t}`,...e)}function La(t,...e){hl.logLevel<=Ee.ERROR&&hl.error(`Auth (${yr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(t,...e){throw Lf(t,...e)}function kn(t,...e){return Lf(t,...e)}function x_(t,e,n){const i=Object.assign(Object.assign({},k1()),{[e]:n});return new vr("auth","Firebase",i).create(e,{appName:t.name})}function x1(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&nn(t,"argument-error"),x_(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Lf(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return R_.create(t,...e)}function ae(t,e,...n){if(!t)throw Lf(e,...n)}function Hn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw La(e),new Error(e)}function Yn(t,e){t||Hn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function P1(){return Zg()==="http:"||Zg()==="https:"}function Zg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(P1()||__()||"connection"in navigator)?navigator.onLine:!0}function O1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Yn(n>e,"Short delay should be less than long delay!"),this.isMobile=lR()||cR()}get(){return D1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mf(t,e){Yn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Hn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Hn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Hn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L1=new Vo(3e4,6e4);function wr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Di(t,e,n,i,r={}){return D_(t,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=Uo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),P_.fetch()(O_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function D_(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},N1),e);try{const r=new M1(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw pa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw pa(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw pa(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw pa(t,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw x_(t,u,c);nn(t,u)}}catch(r){if(r instanceof rn)throw r;nn(t,"network-request-failed",{message:String(r)})}}async function Bo(t,e,n,i,r={}){const s=await Di(t,e,n,i,r);return"mfaPendingCredential"in s&&nn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function O_(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?Mf(t.config,r):`${t.config.apiScheme}://${r}`}class M1{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(kn(this.auth,"network-request-failed")),L1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function pa(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=kn(t,e,i);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $1(t,e){return Di(t,"POST","/v1/accounts:delete",e)}async function F1(t,e){return Di(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function U1(t,e=!1){const n=Le(t),i=await n.getIdToken(e),r=$f(i);ae(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s?.sign_in_provider;return{claims:r,token:i,authTime:Ws(Cu(r.auth_time)),issuedAtTime:Ws(Cu(r.iat)),expirationTime:Ws(Cu(r.exp)),signInProvider:o||null,signInSecondFactor:s?.sign_in_second_factor||null}}function Cu(t){return Number(t)*1e3}function $f(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return La("JWT malformed, contained fewer than 3 sections"),null;try{const r=p_(n);return r?JSON.parse(r):(La("Failed to decode base64 JWT payload"),null)}catch(r){return La("Caught error parsing JWT payload as JSON",r?.toString()),null}}function V1(t){const e=$f(t);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lr(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof rn&&B1(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function B1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ws(this.lastLoginAt),this.creationTime=Ws(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fl(t){var e;const n=t.auth,i=await t.getIdToken(),r=await lr(t,F1(n,{idToken:i}));ae(r?.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?z1(s.providerUserInfo):[],a=H1(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!a?.length,u=l?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new N_(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function j1(t){const e=Le(t);await fl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function H1(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function z1(t){return t.map(e=>{var{providerId:n}=e,i=Nf(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K1(t,e){const n=await D_(t,{},async()=>{const i=Uo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=O_(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",P_.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):V1(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ae(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await K1(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new fo;return i&&(ae(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(ae(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(ae(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fo,this.toJSON())}_performRefresh(){return Hn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(t,e){ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class tr{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,s=Nf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new q1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new N_(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await lr(this,this.stsTokenManager.getToken(this.auth,e));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return U1(this,e)}reload(){return j1(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new tr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await fl(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await lr(this,$1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,s,o,a,l,c,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,d=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,b=(c=n.createdAt)!==null&&c!==void 0?c:void 0,y=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:_,emailVerified:E,isAnonymous:I,providerData:$,stsTokenManager:L}=n;ae(_&&L,e,"internal-error");const x=fo.fromJSON(this.name,L);ae(typeof _=="string",e,"internal-error"),oi(h,e.name),oi(f,e.name),ae(typeof E=="boolean",e,"internal-error"),ae(typeof I=="boolean",e,"internal-error"),oi(d,e.name),oi(p,e.name),oi(m,e.name),oi(w,e.name),oi(b,e.name),oi(y,e.name);const C=new tr({uid:_,auth:e,email:f,emailVerified:E,displayName:h,isAnonymous:I,photoURL:p,phoneNumber:d,tenantId:m,stsTokenManager:x,createdAt:b,lastLoginAt:y});return $&&Array.isArray($)&&(C.providerData=$.map(N=>Object.assign({},N))),w&&(C._redirectEventId=w),C}static async _fromIdTokenResponse(e,n,i=!1){const r=new fo;r.updateFromServerResponse(n);const s=new tr({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await fl(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em=new Map;function zn(t){Yn(t instanceof Function,"Expected a class definition");let e=em.get(t);return e?(Yn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,em.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}L_.type="NONE";const tm=L_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(t,e,n){return`firebase:${t}:${e}:${n}`}class Kr{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=Ma(this.userKey,r.apiKey,s),this.fullPersistenceKey=Ma("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?tr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Kr(zn(tm),e,i);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=r[0]||zn(tm);const o=Ma(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=tr._fromJSON(e,u);c!==s&&(a=h),s=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Kr(s,e,i):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Kr(s,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(F_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(M_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(V_(e))return"Blackberry";if(B_(e))return"Webos";if(Ff(e))return"Safari";if((e.includes("chrome/")||$_(e))&&!e.includes("edge/"))return"Chrome";if(U_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if(i?.length===2)return i[1]}return"Other"}function M_(t=_t()){return/firefox\//i.test(t)}function Ff(t=_t()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $_(t=_t()){return/crios\//i.test(t)}function F_(t=_t()){return/iemobile/i.test(t)}function U_(t=_t()){return/android/i.test(t)}function V_(t=_t()){return/blackberry/i.test(t)}function B_(t=_t()){return/webos/i.test(t)}function rc(t=_t()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function W1(t=_t()){var e;return rc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function G1(){return uR()&&document.documentMode===10}function q_(t=_t()){return rc(t)||U_(t)||B_(t)||V_(t)||/windows phone/i.test(t)||F_(t)}function Q1(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j_(t,e=[]){let n;switch(t){case"Browser":n=nm(_t());break;case"Worker":n=`${nm(_t())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${yr}/${i}`}async function H_(t,e){return Di(t,"GET","/v2/recaptchaConfig",wr(t,e))}function im(t){return t!==void 0&&t.enterprise!==void 0}class z_{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function K_(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=kn("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",Y1().appendChild(i)})}function J1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const X1="https://www.google.com/recaptcha/enterprise.js?render=",Z1="recaptcha-enterprise",ex="NO_RECAPTCHA";class W_{constructor(e){this.type=Z1,this.auth=Oi(e)}async verify(e="verify",n=!1){async function i(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{H_(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new z_(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function r(s,o,a){const l=window.grecaptcha;im(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(ex)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{i(this.auth).then(a=>{if(!n&&im(window.grecaptcha))r(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}K_(X1+a).then(()=>{r(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function rs(t,e,n,i=!1){const r=new W_(t);let s;try{s=await r.verify(n)}catch{s=await r.verify(n,!0)}const o=Object.assign({},e);return i?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rm(this),this.idTokenSubscription=new rm(this),this.beforeStateQueue=new tx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=R_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=zn(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await Kr.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r?._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&l?.user&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await fl(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=O1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Le(e):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(zn(e))})}async initializeRecaptchaConfig(){const e=await H_(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new z_(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new W_(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new vr("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&zn(e)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await Kr.create(this,[zn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ae(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,i,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=j_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n?.error&&R1(`Error while retrieving App Check token: ${n.error}`),n?.token}}function Oi(t){return Le(t)}class rm{constructor(e){this.auth=e,this.observer=null,this.addObserver=mR(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ix(t,e){const n=Pi(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(uo(s,e??{}))return r;nn(r,"already-initialized")}return n.initialize({options:e})}function rx(t,e){const n=e?.persistence||[],i=(Array.isArray(n)?n:[n]).map(zn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e?.popupRedirectResolver)}function sx(t,e,n){const i=Oi(t);ae(i._canInitEmulator,i,"emulator-config-failed"),ae(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!1,s=G_(e),{host:o,port:a}=ox(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${s}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),ax()}function G_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ox(t){const e=G_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:sm(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:sm(o)}}}function sm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ax(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Hn("not implemented")}_getIdTokenResponse(e){return Hn("not implemented")}_linkToIdToken(e,n){return Hn("not implemented")}_getReauthenticationResolver(e){return Hn("not implemented")}}async function Q_(t,e){return Di(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Au(t,e){return Bo(t,"POST","/v1/accounts:signInWithPassword",wr(t,e))}async function Y_(t,e){return Di(t,"POST","/v1/accounts:sendOobCode",wr(t,e))}async function lx(t,e){return Y_(t,e)}async function ku(t,e){return Y_(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cx(t,e){return Bo(t,"POST","/v1/accounts:signInWithEmailLink",wr(t,e))}async function ux(t,e){return Bo(t,"POST","/v1/accounts:signInWithEmailLink",wr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po extends Uf{constructor(e,n,i,r=null){super("password",i),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new po(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new po(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const r=await rs(e,i,"signInWithPassword");return Au(e,r)}else return Au(e,i).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await rs(e,i,"signInWithPassword");return Au(e,s)}else return Promise.reject(r)});case"emailLink":return cx(e,{email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Q_(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ux(e,{idToken:n,email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wr(t,e){return Bo(t,"POST","/v1/accounts:signInWithIdp",wr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hx="http://localhost";class cr extends Uf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new cr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):nn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,s=Nf(n,["providerId","signInMethod"]);if(!i||!r)return null;const o=new cr(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Wr(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Wr(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Wr(e,n)}buildRequest(){const e={requestUri:hx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Uo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fx(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function dx(t){const e=Ps(Ds(t)).link,n=e?Ps(Ds(e)).deep_link_id:null,i=Ps(Ds(t)).deep_link_id;return(i?Ps(Ds(i)).link:null)||i||n||e||t}class Vf{constructor(e){var n,i,r,s,o,a;const l=Ps(Ds(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(i=l.oobCode)!==null&&i!==void 0?i:null,h=fx((r=l.mode)!==null&&r!==void 0?r:null);ae(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=dx(e);try{return new Vf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(){this.providerId=ps.PROVIDER_ID}static credential(e,n){return po._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=Vf.parseLink(n);return ae(i,"argument-error"),po._fromEmailAndCode(e,i.code,i.tenantId)}}ps.PROVIDER_ID="password";ps.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ps.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo extends Bf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi extends qo{constructor(){super("facebook.com")}static credential(e){return cr._fromParams({providerId:gi.PROVIDER_ID,signInMethod:gi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gi.credentialFromTaggedObject(e)}static credentialFromError(e){return gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gi.credential(e.oauthAccessToken)}catch{return null}}}gi.FACEBOOK_SIGN_IN_METHOD="facebook.com";gi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends qo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return cr._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return jn.credential(n,i)}catch{return null}}}jn.GOOGLE_SIGN_IN_METHOD="google.com";jn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi extends qo{constructor(){super("github.com")}static credential(e){return cr._fromParams({providerId:mi.PROVIDER_ID,signInMethod:mi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mi.credentialFromTaggedObject(e)}static credentialFromError(e){return mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mi.credential(e.oauthAccessToken)}catch{return null}}}mi.GITHUB_SIGN_IN_METHOD="github.com";mi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi extends qo{constructor(){super("twitter.com")}static credential(e,n){return cr._fromParams({providerId:vi.PROVIDER_ID,signInMethod:vi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return vi.credentialFromTaggedObject(e)}static credentialFromError(e){return vi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return vi.credential(n,i)}catch{return null}}}vi.TWITTER_SIGN_IN_METHOD="twitter.com";vi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ru(t,e){return Bo(t,"POST","/v1/accounts:signUp",wr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await tr._fromIdTokenResponse(e,i,r),o=om(i);return new ur({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=om(i);return new ur({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function om(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl extends rn{constructor(e,n,i,r){var s;super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,dl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new dl(e,n,i,r)}}function J_(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?dl._fromErrorAndOperation(t,s,e,i):s})}async function px(t,e,n=!1){const i=await lr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ur._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gx(t,e,n=!1){const{auth:i}=t,r="reauthenticate";try{const s=await lr(t,J_(i,r,e,t),n);ae(s.idToken,i,"internal-error");const o=$f(s.idToken);ae(o,i,"internal-error");const{sub:a}=o;return ae(t.uid===a,i,"user-mismatch"),ur._forOperation(t,r,s)}catch(s){throw s?.code==="auth/user-not-found"&&nn(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X_(t,e,n=!1){const i="signIn",r=await J_(t,i,e),s=await ur._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}async function mx(t,e){return X_(Oi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vx(t,e,n){var i;const r=Oi(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((i=r._getRecaptchaConfig())===null||i===void 0)&&i.emailPasswordEnabled){const o=await rs(r,s,"getOobCode",!0);await ku(r,o)}else await ku(r,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await rs(r,s,"getOobCode",!0);await ku(r,a)}else return Promise.reject(o)})}async function yx(t,e,n){var i;const r=Oi(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((i=r._getRecaptchaConfig())===null||i===void 0)&&i.emailPasswordEnabled){const c=await rs(r,s,"signUpPassword");o=Ru(r,c)}else o=Ru(r,s).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await rs(r,s,"signUpPassword");return Ru(r,u)}else return Promise.reject(c)});const a=await o.catch(c=>Promise.reject(c)),l=await ur._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function wx(t,e,n){return mx(Le(t),ps.credential(e,n))}async function _x(t,e){const n=Le(t),r={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()},{email:s}=await lx(n.auth,r);s!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bx(t,e){return Di(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z_(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const i=Le(t),s={idToken:await i.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await lr(i,bx(i.auth,s));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const a=i.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function Ex(t,e){return eb(Le(t),e,null)}function Tx(t,e){return eb(Le(t),null,e)}async function eb(t,e,n){const{auth:i}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await lr(t,Q_(i,s));await t._updateTokensIfNecessary(o,!0)}function Ix(t,e,n,i){return Le(t).onIdTokenChanged(e,n,i)}function Sx(t,e,n){return Le(t).beforeAuthStateChanged(e,n)}function Cx(t,e,n,i){return Le(t).onAuthStateChanged(e,n,i)}function Ax(t){return Le(t).signOut()}const pl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(pl,"1"),this.storage.removeItem(pl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kx(){const t=_t();return Ff(t)||rc(t)}const Rx=1e3,xx=10;class nb extends tb{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=kx()&&Q1(),this.fallbackToPolling=q_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);G1()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,xx):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},Rx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}nb.type="LOCAL";const Px=nb;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib extends tb{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ib.type="SESSION";const rb=ib;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dx(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new sc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await Dx(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}sc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qf(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=qf("",20);r.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(){return window}function Nx(t){Rn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sb(){return typeof Rn().WorkerGlobalScope<"u"&&typeof Rn().importScripts=="function"}async function Lx(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Mx(){var t;return((t=navigator?.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function $x(){return sb()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob="firebaseLocalStorageDb",Fx=1,gl="firebaseLocalStorage",ab="fbase_key";class jo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function oc(t,e){return t.transaction([gl],e?"readwrite":"readonly").objectStore(gl)}function Ux(){const t=indexedDB.deleteDatabase(ob);return new jo(t).toPromise()}function Rh(){const t=indexedDB.open(ob,Fx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(gl,{keyPath:ab})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(gl)?e(i):(i.close(),await Ux(),e(await Rh()))})})}async function am(t,e,n){const i=oc(t,!0).put({[ab]:e,value:n});return new jo(i).toPromise()}async function Vx(t,e){const n=oc(t,!1).get(e),i=await new jo(n).toPromise();return i===void 0?null:i.value}function lm(t,e){const n=oc(t,!0).delete(e);return new jo(n).toPromise()}const Bx=800,qx=3;class lb{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Rh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>qx)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sb()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=sc._getInstance($x()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Lx(),!this.activeServiceWorker)return;this.sender=new Ox(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Mx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Rh();return await am(e,pl,"1"),await lm(e,pl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>am(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>Vx(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>lm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=oc(r,!1).getAll();return new jo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Bx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}lb.type="LOCAL";const jx=lb;new Vo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cb(t,e){return e?zn(e):(ae(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf extends Uf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Wr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Wr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Hx(t){return X_(t.auth,new jf(t),t.bypassAuthState)}function zx(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),gx(n,new jf(t),t.bypassAuthState)}async function Kx(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),px(n,new jf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Hx;case"linkViaPopup":case"linkViaRedirect":return Kx;case"reauthViaPopup":case"reauthViaRedirect":return zx;default:nn(this.auth,"internal-error")}}resolve(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wx=new Vo(2e3,1e4);async function Gx(t,e,n){const i=Oi(t);x1(t,e,Bf);const r=cb(i,n);return new zi(i,"signInViaPopup",e,r).executeNotNull()}class zi extends ub{constructor(e,n,i,r,s){super(e,n,r,s),this.provider=i,this.authWindow=null,this.pollId=null,zi.currentPopupAction&&zi.currentPopupAction.cancel(),zi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){Yn(this.filter.length===1,"Popup operations only handle one event");const e=qf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(kn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(kn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(kn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Wx.get())};e()}}zi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qx="pendingRedirect",$a=new Map;class Yx extends ub{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=$a.get(this.auth._key());if(!e){try{const i=await Jx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}$a.set(this.auth._key(),e)}return this.bypassAuthState||$a.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Jx(t,e){const n=eP(e),i=Zx(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function Xx(t,e){$a.set(t._key(),e)}function Zx(t){return zn(t._redirectPersistence)}function eP(t){return Ma(Qx,t.config.apiKey,t.name)}async function tP(t,e,n=!1){const i=Oi(t),r=cb(i,e),o=await new Yx(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nP=10*60*1e3;class iP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!hb(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(kn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=nP&&this.cachedEventUids.clear(),this.cachedEventUids.has(cm(e))}saveEventToCache(e){this.cachedEventUids.add(cm(e)),this.lastProcessedEventTime=Date.now()}}function cm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function hb({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function rP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hb(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sP(t,e={}){return Di(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,aP=/^https?/;async function lP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await sP(t);for(const n of e)try{if(cP(n))return}catch{}nn(t,"unauthorized-domain")}function cP(t){const e=kh(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!aP.test(n))return!1;if(oP.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uP=new Vo(3e4,6e4);function um(){const t=Rn().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function hP(t){return new Promise((e,n)=>{var i,r,s;function o(){um(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{um(),n(kn(t,"network-request-failed"))},timeout:uP.get()})}if(!((r=(i=Rn().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=Rn().gapi)===null||s===void 0)&&s.load)o();else{const a=J1("iframefcb");return Rn()[a]=()=>{gapi.load?o():n(kn(t,"network-request-failed"))},K_(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Fa=null,e})}let Fa=null;function fP(t){return Fa=Fa||hP(t),Fa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dP=new Vo(5e3,15e3),pP="__/auth/iframe",gP="emulator/auth/iframe",mP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yP(t){const e=t.config;ae(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Mf(e,gP):`https://${t.config.authDomain}/${pP}`,i={apiKey:e.apiKey,appName:t.name,v:yr},r=vP.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${Uo(i).slice(1)}`}async function wP(t){const e=await fP(t),n=Rn().gapi;return ae(n,t,"internal-error"),e.open({where:document.body,url:yP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mP,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=kn(t,"network-request-failed"),a=Rn().setTimeout(()=>{s(o)},dP.get());function l(){Rn().clearTimeout(a),r(i)}i.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _P={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bP=500,EP=600,TP="_blank",IP="http://localhost";class hm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function SP(t,e,n,i=bP,r=EP){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},_P),{width:i.toString(),height:r.toString(),top:s,left:o}),c=_t().toLowerCase();n&&(a=$_(c)?TP:n),M_(c)&&(e=e||IP,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[d,p])=>`${f}${d}=${p},`,"");if(W1(c)&&a!=="_self")return CP(e||"",a),new hm(null);const h=window.open(e||"",a,u);ae(h,t,"popup-blocked");try{h.focus()}catch{}return new hm(h)}function CP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AP="__/auth/handler",kP="emulator/auth/handler",RP=encodeURIComponent("fac");async function fm(t,e,n,i,r,s){ae(t.config.authDomain,t,"auth-domain-config-required"),ae(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:yr,eventId:r};if(e instanceof Bf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",gR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof qo){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${RP}=${encodeURIComponent(l)}`:"";return`${xP(t)}?${Uo(a).slice(1)}${c}`}function xP({config:t}){return t.emulator?Mf(t,kP):`https://${t.authDomain}/${AP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu="webStorageSupport";class PP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rb,this._completeRedirectFn=tP,this._overrideRedirectResult=Xx}async _openPopup(e,n,i,r){var s;Yn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await fm(e,n,i,kh(),r);return SP(e,o,qf())}async _openRedirect(e,n,i,r){await this._originValidation(e);const s=await fm(e,n,i,kh(),r);return Nx(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(Yn(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await wP(e),i=new iP(e);return n.register("authEvent",r=>(ae(r?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xu,{type:xu},r=>{var s;const o=(s=r?.[0])===null||s===void 0?void 0:s[xu];o!==void 0&&n(!!o),nn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=lP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return q_()||Ff()||rc()}}const DP=PP;var dm="@firebase/auth",pm="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function LP(t){dn(new tn("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;ae(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:j_(t)},c=new nx(i,r,s,l);return rx(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),dn(new tn("auth-internal",e=>{const n=Oi(e.getProvider("auth").getImmediate());return(i=>new OP(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),$t(dm,pm,NP(t)),$t(dm,pm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MP=5*60,$P=y_("authIdTokenMaxAge")||MP;let gm=null;const FP=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>$P)return;const r=n?.token;gm!==r&&(gm=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function UP(t=ic()){const e=Pi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ix(t,{popupRedirectResolver:DP,persistence:[jx,Px,rb]}),i=y_("authTokenSyncURL");if(i){const s=FP(i);Sx(n,s,()=>s(n.currentUser)),Ix(n,o=>s(o))}const r=g_("auth");return r&&sx(n,`http://${r}`),n}LP("Browser");var VP=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},W,Hf=Hf||{},he=VP||self;function ac(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function lc(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function BP(t,e,n){return t.call.apply(t.bind,arguments)}function qP(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,i),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function vt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?vt=BP:vt=qP,vt.apply(null,arguments)}function ga(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function st(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(i,r,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(i,o)}}function Ni(){this.s=this.s,this.o=this.o}var jP=0;Ni.prototype.s=!1;Ni.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),jP!=0)};Ni.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const fb=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function zf(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function mm(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(ac(i)){const r=t.length||0,s=i.length||0;t.length=r+s;for(let o=0;o<s;o++)t[r+o]=i[o]}else t.push(i)}}function yt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}yt.prototype.h=function(){this.defaultPrevented=!0};var HP=function(){if(!he.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{he.addEventListener("test",()=>{},e),he.removeEventListener("test",()=>{},e)}catch{}return t}();function go(t){return/^[\s\xa0]*$/.test(t)}function cc(){var t=he.navigator;return t&&(t=t.userAgent)?t:""}function In(t){return cc().indexOf(t)!=-1}function Kf(t){return Kf[" "](t),t}Kf[" "]=function(){};function zP(t,e){var n=FD;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var KP=In("Opera"),ss=In("Trident")||In("MSIE"),db=In("Edge"),xh=db||ss,pb=In("Gecko")&&!(cc().toLowerCase().indexOf("webkit")!=-1&&!In("Edge"))&&!(In("Trident")||In("MSIE"))&&!In("Edge"),WP=cc().toLowerCase().indexOf("webkit")!=-1&&!In("Edge");function gb(){var t=he.document;return t?t.documentMode:void 0}var Ph;e:{var Pu="",Du=function(){var t=cc();if(pb)return/rv:([^\);]+)(\)|;)/.exec(t);if(db)return/Edge\/([\d\.]+)/.exec(t);if(ss)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(WP)return/WebKit\/(\S+)/.exec(t);if(KP)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Du&&(Pu=Du?Du[1]:""),ss){var Ou=gb();if(Ou!=null&&Ou>parseFloat(Pu)){Ph=String(Ou);break e}}Ph=Pu}var Dh;if(he.document&&ss){var vm=gb();Dh=vm||parseInt(Ph,10)||void 0}else Dh=void 0;var GP=Dh;function mo(t,e){if(yt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(pb){e:{try{Kf(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:QP[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&mo.$.h.call(this)}}st(mo,yt);var QP={2:"touch",3:"pen",4:"mouse"};mo.prototype.h=function(){mo.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var uc="closure_listenable_"+(1e6*Math.random()|0),YP=0;function JP(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=r,this.key=++YP,this.fa=this.ia=!1}function hc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Wf(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function XP(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function mb(t){const e={};for(const n in t)e[n]=t[n];return e}const ym="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function vb(t,e){let n,i;for(let r=1;r<arguments.length;r++){i=arguments[r];for(n in i)t[n]=i[n];for(let s=0;s<ym.length;s++)n=ym[s],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function fc(t){this.src=t,this.g={},this.h=0}fc.prototype.add=function(t,e,n,i,r){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Nh(t,e,i,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new JP(e,this.src,s,!!i,r),e.ia=n,t.push(e)),e};function Oh(t,e){var n=e.type;if(n in t.g){var i=t.g[n],r=fb(i,e),s;(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(hc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Nh(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==i)return r}return-1}var Gf="closure_lm_"+(1e6*Math.random()|0),Nu={};function yb(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)yb(t,e[s],n,i,r);return null}return n=bb(n),t&&t[uc]?t.O(e,n,lc(i)?!!i.capture:!!i,r):ZP(t,e,n,!1,i,r)}function ZP(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=lc(r)?!!r.capture:!!r,a=Yf(t);if(a||(t[Gf]=a=new fc(t)),n=a.add(e,n,i,o,s),n.proxy)return n;if(i=eD(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)HP||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(_b(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function eD(){function t(n){return e.call(t.src,t.listener,n)}const e=tD;return t}function wb(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)wb(t,e[s],n,i,r);else i=lc(i)?!!i.capture:!!i,n=bb(n),t&&t[uc]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Nh(s,n,i,r),-1<n&&(hc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Yf(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Nh(e,n,i,r)),(n=-1<t?e[t]:null)&&Qf(n))}function Qf(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[uc])Oh(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(_b(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Yf(e))?(Oh(n,t),n.h==0&&(n.src=null,e[Gf]=null)):hc(t)}}}function _b(t){return t in Nu?Nu[t]:Nu[t]="on"+t}function tD(t,e){if(t.fa)t=!0;else{e=new mo(e,this);var n=t.listener,i=t.la||t.src;t.ia&&Qf(t),t=n.call(i,e)}return t}function Yf(t){return t=t[Gf],t instanceof fc?t:null}var Lu="__closure_events_fn_"+(1e9*Math.random()>>>0);function bb(t){return typeof t=="function"?t:(t[Lu]||(t[Lu]=function(e){return t.handleEvent(e)}),t[Lu])}function rt(){Ni.call(this),this.i=new fc(this),this.S=this,this.J=null}st(rt,Ni);rt.prototype[uc]=!0;rt.prototype.removeEventListener=function(t,e,n,i){wb(this,t,e,n,i)};function lt(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,typeof e=="string")e=new yt(e,t);else if(e instanceof yt)e.target=e.target||t;else{var r=e;e=new yt(i,t),vb(e,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=ma(o,i,!0,e)&&r}if(o=e.g=t,r=ma(o,i,!0,e)&&r,r=ma(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)o=e.g=n[s],r=ma(o,i,!1,e)&&r}rt.prototype.N=function(){if(rt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)hc(n[i]);delete t.g[e],t.h--}}this.J=null};rt.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};rt.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function ma(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Oh(t.i,o),r=a.call(l,i)!==!1&&r}}return r&&!i.defaultPrevented}var Jf=he.JSON.stringify;class nD{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function iD(){var t=Xf;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class rD{constructor(){this.h=this.g=null}add(e,n){const i=Eb.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var Eb=new nD(()=>new sD,t=>t.reset());class sD{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function oD(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function aD(t){he.setTimeout(()=>{throw t},0)}let vo,yo=!1,Xf=new rD,Tb=()=>{const t=he.Promise.resolve(void 0);vo=()=>{t.then(lD)}};var lD=()=>{for(var t;t=iD();){try{t.h.call(t.g)}catch(n){aD(n)}var e=Eb;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}yo=!1};function dc(t,e){rt.call(this),this.h=t||1,this.g=e||he,this.j=vt(this.qb,this),this.l=Date.now()}st(dc,rt);W=dc.prototype;W.ga=!1;W.T=null;W.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),lt(this,"tick"),this.ga&&(Zf(this),this.start()))}};W.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Zf(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}W.N=function(){dc.$.N.call(this),Zf(this),delete this.g};function ed(t,e,n){if(typeof t=="function")n&&(t=vt(t,n));else if(t&&typeof t.handleEvent=="function")t=vt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:he.setTimeout(t,e||0)}function Ib(t){t.g=ed(()=>{t.g=null,t.i&&(t.i=!1,Ib(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class cD extends Ni{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ib(this)}N(){super.N(),this.g&&(he.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wo(t){Ni.call(this),this.h=t,this.g={}}st(wo,Ni);var wm=[];function Sb(t,e,n,i){Array.isArray(n)||(n&&(wm[0]=n.toString()),n=wm);for(var r=0;r<n.length;r++){var s=yb(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Cb(t){Wf(t.g,function(e,n){this.g.hasOwnProperty(n)&&Qf(e)},t),t.g={}}wo.prototype.N=function(){wo.$.N.call(this),Cb(this)};wo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function pc(){this.g=!0}pc.prototype.Ea=function(){this.g=!1};function uD(t,e,n,i,r,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function hD(t,e,n,i,r,s,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+`
`+n+`
`+s+" "+o})}function $r(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+dD(t,n)+(i?" "+i:"")})}function fD(t,e){t.info(function(){return"TIMEOUT: "+e})}pc.prototype.info=function(){};function dD(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Jf(n)}catch{return e}}var _r={},_m=null;function gc(){return _m=_m||new rt}_r.Ta="serverreachability";function Ab(t){yt.call(this,_r.Ta,t)}st(Ab,yt);function _o(t){const e=gc();lt(e,new Ab(e))}_r.STAT_EVENT="statevent";function kb(t,e){yt.call(this,_r.STAT_EVENT,t),this.stat=e}st(kb,yt);function At(t){const e=gc();lt(e,new kb(e,t))}_r.Ua="timingevent";function Rb(t,e){yt.call(this,_r.Ua,t),this.size=e}st(Rb,yt);function Ho(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return he.setTimeout(function(){t()},e)}var mc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},xb={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function td(){}td.prototype.h=null;function bm(t){return t.h||(t.h=t.i())}function Pb(){}var zo={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function nd(){yt.call(this,"d")}st(nd,yt);function id(){yt.call(this,"c")}st(id,yt);var Lh;function vc(){}st(vc,td);vc.prototype.g=function(){return new XMLHttpRequest};vc.prototype.i=function(){return{}};Lh=new vc;function Ko(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new wo(this),this.P=pD,t=xh?125:void 0,this.V=new dc(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Db}function Db(){this.i=null,this.g="",this.h=!1}var pD=45e3,Mh={},ml={};W=Ko.prototype;W.setTimeout=function(t){this.P=t};function $h(t,e,n){t.L=1,t.v=wc(Jn(e)),t.s=n,t.S=!0,Ob(t,null)}function Ob(t,e){t.G=Date.now(),Wo(t),t.A=Jn(t.v);var n=t.A,i=t.W;Array.isArray(i)||(i=[String(i)]),Bb(n.i,"t",i),t.C=0,n=t.l.J,t.h=new Db,t.g=l0(t.l,n?e:null,!t.s),0<t.O&&(t.M=new cD(vt(t.Pa,t,t.g),t.O)),Sb(t.U,t.g,"readystatechange",t.nb),e=t.I?mb(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),_o(),uD(t.j,t.u,t.A,t.m,t.W,t.s)}W.nb=function(t){t=t.target;const e=this.M;e&&Sn(t)==3?e.l():this.Pa(t)};W.Pa=function(t){try{if(t==this.g)e:{const u=Sn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||xh||this.g&&(this.h.h||this.g.ja()||Sm(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?_o(3):_o(2)),yc(this);var n=this.g.da();this.ca=n;t:if(Nb(this)){var i=Sm(this.g);t="";var r=i.length,s=Sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ki(this),Gs(this);var o="";break t}this.h.i=new he.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,hD(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!go(a)){var c=a;break t}}c=null}if(n=c)$r(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fh(this,n);else{this.i=!1,this.o=3,At(12),Ki(this),Gs(this);break e}}this.S?(Lb(this,u,o),xh&&this.i&&u==3&&(Sb(this.U,this.V,"tick",this.mb),this.V.start())):($r(this.j,this.m,o,null),Fh(this,o)),u==4&&Ki(this),this.i&&!this.J&&(u==4?r0(this.l,this):(this.i=!1,Wo(this)))}else LD(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,At(12)):(this.o=0,At(13)),Ki(this),Gs(this)}}}catch{}finally{}};function Nb(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Lb(t,e,n){let i=!0,r;for(;!t.J&&t.C<n.length;)if(r=gD(t,n),r==ml){e==4&&(t.o=4,At(14),i=!1),$r(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Mh){t.o=4,At(15),$r(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else $r(t.j,t.m,r,null),Fh(t,r);Nb(t)&&r!=ml&&r!=Mh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,At(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),cd(e),e.M=!0,At(11))):($r(t.j,t.m,n,"[Invalid Chunked Response]"),Ki(t),Gs(t))}W.mb=function(){if(this.g){var t=Sn(this.g),e=this.g.ja();this.C<e.length&&(yc(this),Lb(this,t,e),this.i&&t!=4&&Wo(this))}};function gD(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?ml:(n=Number(e.substring(n,i)),isNaN(n)?Mh:(i+=1,i+n>e.length?ml:(e=e.slice(i,i+n),t.C=i+n,e)))}W.cancel=function(){this.J=!0,Ki(this)};function Wo(t){t.Y=Date.now()+t.P,Mb(t,t.P)}function Mb(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ho(vt(t.lb,t),e)}function yc(t){t.B&&(he.clearTimeout(t.B),t.B=null)}W.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(fD(this.j,this.A),this.L!=2&&(_o(),At(17)),Ki(this),this.o=2,Gs(this)):Mb(this,this.Y-t)};function Gs(t){t.l.H==0||t.J||r0(t.l,t)}function Ki(t){yc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Zf(t.V),Cb(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Fh(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Uh(n.i,t))){if(!t.K&&Uh(n.i,t)&&n.H==3){try{var i=n.Ja.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var r=i;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)wl(n),Ec(n);else break e;ld(n),At(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ho(vt(n.ib,n),6e3));if(1>=Hb(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Wi(n,11)}else if((t.K||n.g==t)&&wl(n),!go(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(i=1.5*f,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const d=t.g;if(d){const p=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var s=i.i;s.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(rd(s,s.h),s.h=null))}if(i.F){const m=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(i.Da=m,Me(i.I,i.F,m))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),i=n;var o=t;if(i.wa=a0(i,i.J?i.pa:null,i.Y),o.K){zb(i.i,o);var a=o,l=i.L;l&&a.setTimeout(l),a.B&&(yc(a),Wo(a)),i.g=o}else n0(i);0<n.j.length&&Tc(n)}else c[0]!="stop"&&c[0]!="close"||Wi(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Wi(n,7):ad(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}_o(4)}catch{}}function mD(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ac(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function vD(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ac(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function $b(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ac(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=vD(t),i=mD(t),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}var Fb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function yD(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function nr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof nr){this.h=t.h,vl(this,t.j),this.s=t.s,this.g=t.g,yl(this,t.m),this.l=t.l;var e=t.i,n=new bo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Em(this,n),this.o=t.o}else t&&(e=String(t).match(Fb))?(this.h=!1,vl(this,e[1]||"",!0),this.s=Os(e[2]||""),this.g=Os(e[3]||"",!0),yl(this,e[4]),this.l=Os(e[5]||"",!0),Em(this,e[6]||"",!0),this.o=Os(e[7]||"")):(this.h=!1,this.i=new bo(null,this.h))}nr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ns(e,Tm,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ns(e,Tm,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ns(n,n.charAt(0)=="/"?bD:_D,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ns(n,TD)),t.join("")};function Jn(t){return new nr(t)}function vl(t,e,n){t.j=n?Os(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function yl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Em(t,e,n){e instanceof bo?(t.i=e,ID(t.i,t.h)):(n||(e=Ns(e,ED)),t.i=new bo(e,t.h))}function Me(t,e,n){t.i.set(e,n)}function wc(t){return Me(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Os(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ns(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,wD),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function wD(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Tm=/[#\/\?@]/g,_D=/[#\?:]/g,bD=/[#\?]/g,ED=/[#\?@]/g,TD=/#/g;function bo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Li(t){t.g||(t.g=new Map,t.h=0,t.i&&yD(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}W=bo.prototype;W.add=function(t,e){Li(this),this.i=null,t=gs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Ub(t,e){Li(t),e=gs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Vb(t,e){return Li(t),e=gs(t,e),t.g.has(e)}W.forEach=function(t,e){Li(this),this.g.forEach(function(n,i){n.forEach(function(r){t.call(e,r,i,this)},this)},this)};W.ta=function(){Li(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const r=t[i];for(let s=0;s<r.length;s++)n.push(e[i])}return n};W.Z=function(t){Li(this);let e=[];if(typeof t=="string")Vb(this,t)&&(e=e.concat(this.g.get(gs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};W.set=function(t,e){return Li(this),this.i=null,t=gs(this,t),Vb(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};W.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Bb(t,e,n){Ub(t,e),0<n.length&&(t.i=null,t.g.set(gs(t,e),zf(n)),t.h+=n.length)}W.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const s=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var r=s;o[i]!==""&&(r+="="+encodeURIComponent(String(o[i]))),t.push(r)}}return this.i=t.join("&")};function gs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ID(t,e){e&&!t.j&&(Li(t),t.i=null,t.g.forEach(function(n,i){var r=i.toLowerCase();i!=r&&(Ub(this,i),Bb(this,r,n))},t)),t.j=e}var SD=class{constructor(t,e){this.g=t,this.map=e}};function qb(t){this.l=t||CD,he.PerformanceNavigationTiming?(t=he.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(he.g&&he.g.Ka&&he.g.Ka()&&he.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var CD=10;function jb(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Hb(t){return t.h?1:t.g?t.g.size:0}function Uh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function rd(t,e){t.g?t.g.add(e):t.h=e}function zb(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}qb.prototype.cancel=function(){if(this.i=Kb(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Kb(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return zf(t.i)}var AD=class{stringify(t){return he.JSON.stringify(t,void 0)}parse(t){return he.JSON.parse(t,void 0)}};function kD(){this.g=new AD}function RD(t,e,n){const i=n||"";try{$b(t,function(r,s){let o=r;lc(r)&&(o=Jf(r)),e.push(i+s+"="+encodeURIComponent(o))})}catch(r){throw e.push(i+"type="+encodeURIComponent("_badmap")),r}}function xD(t,e){const n=new pc;if(he.Image){const i=new Image;i.onload=ga(va,n,i,"TestLoadImage: loaded",!0,e),i.onerror=ga(va,n,i,"TestLoadImage: error",!1,e),i.onabort=ga(va,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=ga(va,n,i,"TestLoadImage: timeout",!1,e),he.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function va(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch{}}function Go(t){this.l=t.fc||null,this.j=t.ob||!1}st(Go,td);Go.prototype.g=function(){return new _c(this.l,this.j)};Go.prototype.i=function(t){return function(){return t}}({});function _c(t,e){rt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=sd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}st(_c,rt);var sd=0;W=_c.prototype;W.open=function(t,e){if(this.readyState!=sd)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Eo(this)};W.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||he).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};W.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Qo(this)),this.readyState=sd};W.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Eo(this)),this.g&&(this.readyState=3,Eo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof he.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Wb(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Wb(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}W.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Qo(this):Eo(this),this.readyState==3&&Wb(this)}};W.Za=function(t){this.g&&(this.response=this.responseText=t,Qo(this))};W.Ya=function(t){this.g&&(this.response=t,Qo(this))};W.ka=function(){this.g&&Qo(this)};function Qo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Eo(t)}W.setRequestHeader=function(t,e){this.v.append(t,e)};W.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};W.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Eo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(_c.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var PD=he.JSON.parse;function ze(t){rt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Gb,this.L=this.M=!1}st(ze,rt);var Gb="",DD=/^https?$/i,OD=["POST","PUT"];W=ze.prototype;W.Oa=function(t){this.M=t};W.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Lh.g(),this.C=this.u?bm(this.u):bm(Lh),this.g.onreadystatechange=vt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Im(this,s);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const s of i.keys())n.set(s,i.get(s));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),r=he.FormData&&t instanceof he.FormData,!(0<=fb(OD,e))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Jb(this),0<this.B&&((this.L=ND(this.g))?(this.g.timeout=this.B,this.g.ontimeout=vt(this.ua,this)):this.A=ed(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Im(this,s)}};function ND(t){return ss&&typeof t.timeout=="number"&&t.ontimeout!==void 0}W.ua=function(){typeof Hf<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,lt(this,"timeout"),this.abort(8))};function Im(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Qb(t),bc(t)}function Qb(t){t.F||(t.F=!0,lt(t,"complete"),lt(t,"error"))}W.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,lt(this,"complete"),lt(this,"abort"),bc(this))};W.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),bc(this,!0)),ze.$.N.call(this)};W.La=function(){this.s||(this.G||this.v||this.l?Yb(this):this.kb())};W.kb=function(){Yb(this)};function Yb(t){if(t.h&&typeof Hf<"u"&&(!t.C[1]||Sn(t)!=4||t.da()!=2)){if(t.v&&Sn(t)==4)ed(t.La,0,t);else if(lt(t,"readystatechange"),Sn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=o===0){var r=String(t.I).match(Fb)[1]||null;!r&&he.self&&he.self.location&&(r=he.self.location.protocol.slice(0,-1)),i=!DD.test(r?r.toLowerCase():"")}n=i}if(n)lt(t,"complete"),lt(t,"success");else{t.m=6;try{var s=2<Sn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",Qb(t)}}finally{bc(t)}}}}function bc(t,e){if(t.g){Jb(t);const n=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||lt(t,"ready");try{n.onreadystatechange=i}catch{}}}function Jb(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(he.clearTimeout(t.A),t.A=null)}W.isActive=function(){return!!this.g};function Sn(t){return t.g?t.g.readyState:0}W.da=function(){try{return 2<Sn(this)?this.g.status:-1}catch{return-1}};W.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};W.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),PD(e)}};function Sm(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Gb:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function LD(t){const e={};t=(t.g&&2<=Sn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let i=0;i<t.length;i++){if(go(t[i]))continue;var n=oD(t[i]);const r=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[r]||[];e[r]=s,s.push(n)}XP(e,function(i){return i.join(", ")})}W.Ia=function(){return this.m};W.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Xb(t){let e="";return Wf(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function od(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=Xb(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Me(t,e,n))}function Ss(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Zb(t){this.Ga=0,this.j=[],this.l=new pc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ss("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ss("baseRetryDelayMs",5e3,t),this.hb=Ss("retryDelaySeedMs",1e4,t),this.eb=Ss("forwardChannelMaxRetries",2,t),this.xa=Ss("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new qb(t&&t.concurrentRequestLimit),this.Ja=new kD,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}W=Zb.prototype;W.ra=8;W.H=1;function ad(t){if(e0(t),t.H==3){var e=t.W++,n=Jn(t.I);if(Me(n,"SID",t.K),Me(n,"RID",e),Me(n,"TYPE","terminate"),Yo(t,n),e=new Ko(t,t.l,e),e.L=2,e.v=wc(Jn(n)),n=!1,he.navigator&&he.navigator.sendBeacon)try{n=he.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&he.Image&&(new Image().src=e.v,n=!0),n||(e.g=l0(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Wo(e)}o0(t)}function Ec(t){t.g&&(cd(t),t.g.cancel(),t.g=null)}function e0(t){Ec(t),t.u&&(he.clearTimeout(t.u),t.u=null),wl(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&he.clearTimeout(t.m),t.m=null)}function Tc(t){if(!jb(t.i)&&!t.m){t.m=!0;var e=t.Na;vo||Tb(),yo||(vo(),yo=!0),Xf.add(e,t),t.C=0}}function MD(t,e){return Hb(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Ho(vt(t.Na,t,e),s0(t,t.C)),t.C++,!0)}W.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new Ko(this,this.l,t);let s=this.s;if(this.U&&(s?(s=mb(s),vb(s,this.U)):s=this.U),this.o!==null||this.O||(r.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var i=this.j[n];if("__data__"in i.map&&(i=i.map.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=t0(this,r,e),n=Jn(this.I),Me(n,"RID",t),Me(n,"CVER",22),this.F&&Me(n,"X-HTTP-Session-Id",this.F),Yo(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(Xb(s)))+"&"+e:this.o&&od(n,this.o,s)),rd(this.i,r),this.bb&&Me(n,"TYPE","init"),this.P?(Me(n,"$req",e),Me(n,"SID","null"),r.aa=!0,$h(r,n,null)):$h(r,n,e),this.H=2}}else this.H==3&&(t?Cm(this,t):this.j.length==0||jb(this.i)||Cm(this))};function Cm(t,e){var n;e?n=e.m:n=t.W++;const i=Jn(t.I);Me(i,"SID",t.K),Me(i,"RID",n),Me(i,"AID",t.V),Yo(t,i),t.o&&t.s&&od(i,t.o,t.s),n=new Ko(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=t0(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),rd(t.i,n),$h(n,i,e)}function Yo(t,e){t.na&&Wf(t.na,function(n,i){Me(e,i,n)}),t.h&&$b({},function(n,i){Me(e,i,n)})}function t0(t,e,n){n=Math.min(t.j.length,n);var i=t.h?vt(t.h.Va,t.h,t):null;e:{var r=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=r[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let c=r[l].g;const u=r[l].map;if(c-=s,0>c)s=Math.max(0,r[l].g-100),a=!1;else try{RD(u,o,"req"+c+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,i}function n0(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;vo||Tb(),yo||(vo(),yo=!0),Xf.add(e,t),t.A=0}}function ld(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Ho(vt(t.Ma,t),s0(t,t.A)),t.A++,!0)}W.Ma=function(){if(this.u=null,i0(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Ho(vt(this.jb,this),t)}};W.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,At(10),Ec(this),i0(this))};function cd(t){t.B!=null&&(he.clearTimeout(t.B),t.B=null)}function i0(t){t.g=new Ko(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Jn(t.wa);Me(e,"RID","rpc"),Me(e,"SID",t.K),Me(e,"AID",t.V),Me(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Me(e,"TO",t.qa),Me(e,"TYPE","xmlhttp"),Yo(t,e),t.o&&t.s&&od(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=wc(Jn(e)),n.s=null,n.S=!0,Ob(n,t)}W.ib=function(){this.v!=null&&(this.v=null,Ec(this),ld(this),At(19))};function wl(t){t.v!=null&&(he.clearTimeout(t.v),t.v=null)}function r0(t,e){var n=null;if(t.g==e){wl(t),cd(t),t.g=null;var i=2}else if(Uh(t.i,e))n=e.F,zb(t.i,e),i=1;else return;if(t.H!=0){if(e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;i=gc(),lt(i,new Rb(i,n)),Tc(t)}else n0(t);else if(r=e.o,r==3||r==0&&0<e.ca||!(i==1&&MD(t,e)||i==2&&ld(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Wi(t,5);break;case 4:Wi(t,10);break;case 3:Wi(t,6);break;default:Wi(t,2)}}}function s0(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Wi(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var i=vt(t.pb,t);n||(n=new nr("//www.google.com/images/cleardot.gif"),he.location&&he.location.protocol=="http"||vl(n,"https"),wc(n)),xD(n.toString(),i)}else At(2);t.H=0,t.h&&t.h.za(e),o0(t),e0(t)}W.pb=function(t){t?(this.l.info("Successfully pinged google.com"),At(2)):(this.l.info("Failed to ping google.com"),At(1))};function o0(t){if(t.H=0,t.ma=[],t.h){const e=Kb(t.i);(e.length!=0||t.j.length!=0)&&(mm(t.ma,e),mm(t.ma,t.j),t.i.i.length=0,zf(t.j),t.j.length=0),t.h.ya()}}function a0(t,e,n){var i=n instanceof nr?Jn(n):new nr(n);if(i.g!="")e&&(i.g=e+"."+i.g),yl(i,i.m);else{var r=he.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new nr(null);i&&vl(s,i),e&&(s.g=e),r&&yl(s,r),n&&(s.l=n),i=s}return n=t.F,e=t.Da,n&&e&&Me(i,n,e),Me(i,"VER",t.ra),Yo(t,i),i}function l0(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new ze(new Go({ob:!0})):new ze(t.va),e.Oa(t.J),e}W.isActive=function(){return!!this.h&&this.h.isActive(this)};function c0(){}W=c0.prototype;W.Ba=function(){};W.Aa=function(){};W.za=function(){};W.ya=function(){};W.isActive=function(){return!0};W.Va=function(){};function _l(){if(ss&&!(10<=Number(GP)))throw Error("Environmental error: no available transport.")}_l.prototype.g=function(t,e){return new zt(t,e)};function zt(t,e){rt.call(this),this.g=new Zb(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!go(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!go(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ms(this)}st(zt,rt);zt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;At(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=a0(t,null,t.Y),Tc(t)};zt.prototype.close=function(){ad(this.g)};zt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Jf(t),t=n);e.j.push(new SD(e.fb++,t)),e.H==3&&Tc(e)};zt.prototype.N=function(){this.g.h=null,delete this.j,ad(this.g),delete this.g,zt.$.N.call(this)};function u0(t){nd.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}st(u0,nd);function h0(){id.call(this),this.status=1}st(h0,id);function ms(t){this.g=t}st(ms,c0);ms.prototype.Ba=function(){lt(this.g,"a")};ms.prototype.Aa=function(t){lt(this.g,new u0(t))};ms.prototype.za=function(t){lt(this.g,new h0)};ms.prototype.ya=function(){lt(this.g,"b")};function $D(){this.blockSize=-1}function pn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}st(pn,$D);pn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Mu(t,e,n){n||(n=0);var i=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)i[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)i[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var s=t.g[3],o=e+(s^n&(r^s))+i[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[2]+606105819&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[6]+2821735955&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[10]+4294925233&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[14]+2792965006&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^s&(n^r))+i[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[11]+643717713&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[15]+3634488961&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[3]+4107603335&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[7]+1735328473&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^s)+i[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[11]+1839030562&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[7]+4139469664&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[3]+3572445317&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[15]+530742520&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~s))+i[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[14]+2878612391&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[10]+4293915773&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[6]+2734768916&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[2]+718787259&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+s&4294967295}pn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,i=this.m,r=this.h,s=0;s<e;){if(r==0)for(;s<=n;)Mu(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(i[r++]=t.charCodeAt(s++),r==this.blockSize){Mu(this,i),r=0;break}}else for(;s<e;)if(i[r++]=t[s++],r==this.blockSize){Mu(this,i),r=0;break}}this.h=r,this.i+=e};pn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};function Ae(t,e){this.h=e;for(var n=[],i=!0,r=t.length-1;0<=r;r--){var s=t[r]|0;i&&s==e||(n[r]=s,i=!1)}this.g=n}var FD={};function ud(t){return-128<=t&&128>t?zP(t,function(e){return new Ae([e|0],0>e?-1:0)}):new Ae([t|0],0>t?-1:0)}function Cn(t){if(isNaN(t)||!isFinite(t))return Gr;if(0>t)return at(Cn(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=Vh;return new Ae(e,0)}function f0(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return at(f0(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Cn(Math.pow(e,8)),i=Gr,r=0;r<t.length;r+=8){var s=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+s),e);8>s?(s=Cn(Math.pow(e,s)),i=i.R(s).add(Cn(o))):(i=i.R(n),i=i.add(Cn(o)))}return i}var Vh=4294967296,Gr=ud(0),Bh=ud(1),Am=ud(16777216);W=Ae.prototype;W.ea=function(){if(Jt(this))return-at(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:Vh+i)*e,e*=Vh}return t};W.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Kn(this))return"0";if(Jt(this))return"-"+at(this).toString(t);for(var e=Cn(Math.pow(t,6)),n=this,i="";;){var r=El(n,e).g;n=bl(n,r.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,Kn(n))return s+i;for(;6>s.length;)s="0"+s;i=s+i}};W.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Kn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Jt(t){return t.h==-1}W.X=function(t){return t=bl(this,t),Jt(t)?-1:Kn(t)?0:1};function at(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new Ae(n,~t.h).add(Bh)}W.abs=function(){return Jt(this)?at(this):this};W.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,r=0;r<=e;r++){var s=i+(this.D(r)&65535)+(t.D(r)&65535),o=(s>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);i=o>>>16,s&=65535,o&=65535,n[r]=o<<16|s}return new Ae(n,n[n.length-1]&-2147483648?-1:0)};function bl(t,e){return t.add(at(e))}W.R=function(t){if(Kn(this)||Kn(t))return Gr;if(Jt(this))return Jt(t)?at(this).R(at(t)):at(at(this).R(t));if(Jt(t))return at(this.R(at(t)));if(0>this.X(Am)&&0>t.X(Am))return Cn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var r=0;r<t.g.length;r++){var s=this.D(i)>>>16,o=this.D(i)&65535,a=t.D(r)>>>16,l=t.D(r)&65535;n[2*i+2*r]+=o*l,ya(n,2*i+2*r),n[2*i+2*r+1]+=s*l,ya(n,2*i+2*r+1),n[2*i+2*r+1]+=o*a,ya(n,2*i+2*r+1),n[2*i+2*r+2]+=s*a,ya(n,2*i+2*r+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new Ae(n,0)};function ya(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Cs(t,e){this.g=t,this.h=e}function El(t,e){if(Kn(e))throw Error("division by zero");if(Kn(t))return new Cs(Gr,Gr);if(Jt(t))return e=El(at(t),e),new Cs(at(e.g),at(e.h));if(Jt(e))return e=El(t,at(e)),new Cs(at(e.g),e.h);if(30<t.g.length){if(Jt(t)||Jt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Bh,i=e;0>=i.X(t);)n=km(n),i=km(i);var r=xr(n,1),s=xr(i,1);for(i=xr(i,2),n=xr(n,2);!Kn(i);){var o=s.add(i);0>=o.X(t)&&(r=r.add(n),s=o),i=xr(i,1),n=xr(n,1)}return e=bl(t,r.R(e)),new Cs(r,e)}for(r=Gr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),s=Cn(n),o=s.R(e);Jt(o)||0<o.X(t);)n-=i,s=Cn(n),o=s.R(e);Kn(s)&&(s=Bh),r=r.add(s),t=bl(t,o)}return new Cs(r,t)}W.gb=function(t){return El(this,t).h};W.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new Ae(n,this.h&t.h)};W.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new Ae(n,this.h|t.h)};W.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new Ae(n,this.h^t.h)};function km(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new Ae(n,t.h)}function xr(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,r=[],s=0;s<i;s++)r[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Ae(r,t.h)}_l.prototype.createWebChannel=_l.prototype.g;zt.prototype.send=zt.prototype.u;zt.prototype.open=zt.prototype.m;zt.prototype.close=zt.prototype.close;mc.NO_ERROR=0;mc.TIMEOUT=8;mc.HTTP_ERROR=6;xb.COMPLETE="complete";Pb.EventType=zo;zo.OPEN="a";zo.CLOSE="b";zo.ERROR="c";zo.MESSAGE="d";rt.prototype.listen=rt.prototype.O;ze.prototype.listenOnce=ze.prototype.P;ze.prototype.getLastError=ze.prototype.Sa;ze.prototype.getLastErrorCode=ze.prototype.Ia;ze.prototype.getStatus=ze.prototype.da;ze.prototype.getResponseJson=ze.prototype.Wa;ze.prototype.getResponseText=ze.prototype.ja;ze.prototype.send=ze.prototype.ha;ze.prototype.setWithCredentials=ze.prototype.Oa;pn.prototype.digest=pn.prototype.l;pn.prototype.reset=pn.prototype.reset;pn.prototype.update=pn.prototype.j;Ae.prototype.add=Ae.prototype.add;Ae.prototype.multiply=Ae.prototype.R;Ae.prototype.modulo=Ae.prototype.gb;Ae.prototype.compare=Ae.prototype.X;Ae.prototype.toNumber=Ae.prototype.ea;Ae.prototype.toString=Ae.prototype.toString;Ae.prototype.getBits=Ae.prototype.D;Ae.fromNumber=Cn;Ae.fromString=f0;var UD=function(){return new _l},VD=function(){return gc()},$u=mc,BD=xb,qD=_r,Rm={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},jD=Go,wa=Pb,HD=ze,zD=pn,Qr=Ae;const xm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vs="9.23.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr=new nc("@firebase/firestore");function Pm(){return hr.logLevel}function J(t,...e){if(hr.logLevel<=Ee.DEBUG){const n=e.map(hd);hr.debug(`Firestore (${vs}): ${t}`,...n)}}function Xn(t,...e){if(hr.logLevel<=Ee.ERROR){const n=e.map(hd);hr.error(`Firestore (${vs}): ${t}`,...n)}}function os(t,...e){if(hr.logLevel<=Ee.WARN){const n=e.map(hd);hr.warn(`Firestore (${vs}): ${t}`,...n)}}function hd(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(t="Unexpected state"){const e=`FIRESTORE (${vs}) INTERNAL ASSERTION FAILED: `+t;throw Xn(e),new Error(e)}function $e(t,e){t||le()}function me(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends rn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class KD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ft.UNAUTHENTICATED))}shutdown(){}}class WD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class GD{constructor(e){this.t=e,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const r=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let s=new Gn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Gn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Gn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?($e(typeof i.accessToken=="string"),new d0(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return $e(e===null||typeof e=="string"),new ft(e)}}class QD{constructor(e,n,i){this.h=e,this.l=n,this.m=i,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class YD{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new QD(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class JD{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class XD{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const i=s=>{s.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,J("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>i(s))};const r=s=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?r(s):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?($e(typeof n.token=="string"),this.T=n.token,new JD(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const r=ZD(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<n&&(i+=e.charAt(r[s]%e.length))}return i}}function Te(t,e){return t<e?-1:t>e?1:0}function as(t,e,n){return t.length===e.length&&t.every((i,r)=>n(i,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new z(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return tt.fromMillis(Date.now())}static fromDate(e){return tt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new tt(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Te(this.nanoseconds,e.nanoseconds):Te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new fe(e)}static min(){return new fe(new tt(0,0))}static max(){return new fe(new tt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,n,i){n===void 0?n=0:n>e.length&&le(),i===void 0?i=e.length-n:i>e.length-n&&le(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return To.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof To?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let r=0;r<i;r++){const s=e.get(r),o=n.get(r);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Oe extends To{construct(e,n,i){return new Oe(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new z(A.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(r=>r.length>0))}return new Oe(n)}static emptyPath(){return new Oe([])}}const eO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class mt extends To{construct(e,n,i){return new mt(e,n,i)}static isValidIdentifier(e){return eO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),mt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new mt(["__name__"])}static fromServerFormat(e){const n=[];let i="",r=0;const s=()=>{if(i.length===0)throw new z(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new z(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new z(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(i+=a,r++):(s(),r++)}if(s(),o)throw new z(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new mt(n)}static emptyPath(){return new mt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Oe.fromString(e))}static fromName(e){return new X(Oe.fromString(e).popFirst(5))}static empty(){return new X(Oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Oe(e.slice()))}}function tO(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,r=fe.fromTimestamp(i===1e9?new tt(n+1,0):new tt(n,i));return new Si(r,X.empty(),e)}function nO(t){return new Si(t.readTime,t.key,-1)}class Si{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new Si(fe.min(),X.empty(),-1)}static max(){return new Si(fe.max(),X.empty(),-1)}}function iO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:Te(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jo(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==rO)throw t;J("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&le(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((i,r)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(i,r)},this.catchCallback=s=>{this.wrapFailure(n,s).next(i,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,i)=>{n(e)})}static reject(e){return new U((n,i)=>{i(e)})}static waitFor(e){return new U((n,i)=>{let r=0,s=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++s,o&&s===r&&n()},l=>i(l))}),o=!0,s===r&&n()})}static or(e){let n=U.resolve(!1);for(const i of e)n=n.next(r=>r?U.resolve(r):i());return n}static forEach(e,n){const i=[];return e.forEach((r,s)=>{i.push(n.call(this,r,s))}),this.waitFor(i)}static mapArray(e,n){return new U((i,r)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===s&&i(o)},u=>r(u))}})}static doWhile(e,n){return new U((i,r)=>{const s=()=>{e()===!0?n().next(()=>{s()},r):i()};s()})}}function Xo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.ot(i),this.ut=i=>n.writeSequenceNumber(i))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}fd.ct=-1;function Ic(t){return t==null}function Tl(t){return t===0&&1/t==-1/0}function oO(t){return typeof t=="number"&&Number.isInteger(t)&&!Tl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function br(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function g0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n){this.comparator=e,this.root=n||ot.EMPTY}insert(e,n){return new Be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(e){return new Be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ot.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(e,i.key);if(r===0)return n+i.left.size;r<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _a(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _a(this.root,e,this.comparator,!1)}getReverseIterator(){return new _a(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _a(this.root,e,this.comparator,!0)}}class _a{constructor(e,n,i,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?i(e.key,n):1,n&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ot{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i??ot.RED,this.left=r??ot.EMPTY,this.right=s??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,r,s){return new ot(e??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return ot.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw le();const e=this.left.check();if(e!==this.right.check())throw le();return e+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw le()}get value(){throw le()}get color(){throw le()}get left(){throw le()}get right(){throw le()}copy(t,e,n,i,r){return this}insert(t,e,n){return new ot(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.comparator=e,this.data=new Be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Om(this.data.getIterator())}getIteratorFrom(e){return new Om(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof wt)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new wt(this.comparator);return n.data=e,n}}class Om{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.fields=e,e.sort(mt.comparator)}static empty(){return new qt([])}unionWith(e){let n=new wt(mt.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new qt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return as(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new m0("Invalid base64 string: "+r):r}}(e);return new bt(n)}static fromUint8Array(e){const n=function(i){let r="";for(let s=0;s<i.length;++s)r+=String.fromCharCode(i[s]);return r}(e);return new bt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}bt.EMPTY_BYTE_STRING=new bt("");const aO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ci(t){if($e(!!t),typeof t=="string"){let e=0;const n=aO.exec(t);if($e(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Ge(t.seconds),nanos:Ge(t.nanos)}}function Ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function fr(t){return typeof t=="string"?bt.fromBase64String(t):bt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(t){var e,n;return((n=(((e=t?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function dd(t){const e=t.mapValue.fields.__previous_value__;return Sc(e)?dd(e):e}function Io(t){const e=Ci(t.mapValue.fields.__local_write_time__.timestampValue);return new tt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lO{constructor(e,n,i,r,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class So{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new So("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof So&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function dr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Sc(t)?4:cO(t)?9007199254740991:10:le()}function Dn(t,e){if(t===e)return!0;const n=dr(t);if(n!==dr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Io(t).isEqual(Io(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const s=Ci(i.timestampValue),o=Ci(r.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,r){return fr(i.bytesValue).isEqual(fr(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,r){return Ge(i.geoPointValue.latitude)===Ge(r.geoPointValue.latitude)&&Ge(i.geoPointValue.longitude)===Ge(r.geoPointValue.longitude)}(t,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return Ge(i.integerValue)===Ge(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const s=Ge(i.doubleValue),o=Ge(r.doubleValue);return s===o?Tl(s)===Tl(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return as(t.arrayValue.values||[],e.arrayValue.values||[],Dn);case 10:return function(i,r){const s=i.mapValue.fields||{},o=r.mapValue.fields||{};if(Dm(s)!==Dm(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Dn(s[a],o[a])))return!1;return!0}(t,e);default:return le()}}function Co(t,e){return(t.values||[]).find(n=>Dn(n,e))!==void 0}function ls(t,e){if(t===e)return 0;const n=dr(t),i=dr(e);if(n!==i)return Te(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return Te(t.booleanValue,e.booleanValue);case 2:return function(r,s){const o=Ge(r.integerValue||r.doubleValue),a=Ge(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Nm(t.timestampValue,e.timestampValue);case 4:return Nm(Io(t),Io(e));case 5:return Te(t.stringValue,e.stringValue);case 6:return function(r,s){const o=fr(r),a=fr(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,s){const o=r.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=Te(o[l],a[l]);if(c!==0)return c}return Te(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,s){const o=Te(Ge(r.latitude),Ge(s.latitude));return o!==0?o:Te(Ge(r.longitude),Ge(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,s){const o=r.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=ls(o[l],a[l]);if(c)return c}return Te(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,s){if(r===ba.mapValue&&s===ba.mapValue)return 0;if(r===ba.mapValue)return 1;if(s===ba.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),l=s.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=Te(a[u],c[u]);if(h!==0)return h;const f=ls(o[a[u]],l[c[u]]);if(f!==0)return f}return Te(a.length,c.length)}(t.mapValue,e.mapValue);default:throw le()}}function Nm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Te(t,e);const n=Ci(t),i=Ci(e),r=Te(n.seconds,i.seconds);return r!==0?r:Te(n.nanos,i.nanos)}function cs(t){return qh(t)}function qh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(i){const r=Ci(i);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?fr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,X.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(i){let r="[",s=!0;for(const o of i.values||[])s?s=!1:r+=",",r+=qh(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(i){const r=Object.keys(i.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${qh(i.fields[a])}`;return s+"}"}(t.mapValue):le();var e,n}function Il(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function jh(t){return!!t&&"integerValue"in t}function pd(t){return!!t&&"arrayValue"in t}function Lm(t){return!!t&&"nullValue"in t}function Mm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ua(t){return!!t&&"mapValue"in t}function Qs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return br(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=Qs(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Qs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function cO(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.value=e}static empty(){return new Mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!Ua(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qs(n)}setAll(e){let n=mt.emptyPath(),i={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,r),i={},r=[],n=a.popLast()}o?i[a.lastSegment()]=Qs(o):r.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,i,r)}delete(e){const n=this.field(e.popLast());Ua(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let r=n.mapValue.fields[e.get(i)];Ua(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,i){br(n,(r,s)=>e[r]=s);for(const r of i)delete e[r]}clone(){return new Mt(Qs(this.value))}}function v0(t){const e=[];return br(t.fields,(n,i)=>{const r=new mt([n]);if(Ua(i)){const s=v0(i.mapValue).fields;if(s.length===0)e.push(r);else for(const o of s)e.push(r.child(o))}else e.push(r)}),new qt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,n,i,r,s,o,a){this.key=e,this.documentType=n,this.version=i,this.readTime=r,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new gt(e,0,fe.min(),fe.min(),fe.min(),Mt.empty(),0)}static newFoundDocument(e,n,i,r){return new gt(e,1,n,fe.min(),i,r,0)}static newNoDocument(e,n){return new gt(e,2,n,fe.min(),fe.min(),Mt.empty(),0)}static newUnknownDocument(e,n){return new gt(e,3,n,fe.min(),fe.min(),Mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(fe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=fe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,n){this.position=e,this.inclusive=n}}function $m(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(s.field.isKeyField()?i=X.comparator(X.fromName(o.referenceValue),n.key):i=ls(o,n.data.field(s.field)),s.dir==="desc"&&(i*=-1),i!==0)break}return i}function Fm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Dn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,n="asc"){this.field=e,this.dir=n}}function uO(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{}class Ye extends y0{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new fO(e,n,i):n==="array-contains"?new gO(e,i):n==="in"?new mO(e,i):n==="not-in"?new vO(e,i):n==="array-contains-any"?new yO(e,i):new Ye(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new dO(e,i):new pO(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ls(n,this.value)):n!==null&&dr(this.value)===dr(n)&&this.matchesComparison(ls(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return le()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class gn extends y0{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new gn(e,n)}matches(e){return w0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function w0(t){return t.op==="and"}function _0(t){return hO(t)&&w0(t)}function hO(t){for(const e of t.filters)if(e instanceof gn)return!1;return!0}function Hh(t){if(t instanceof Ye)return t.field.canonicalString()+t.op.toString()+cs(t.value);if(_0(t))return t.filters.map(e=>Hh(e)).join(",");{const e=t.filters.map(n=>Hh(n)).join(",");return`${t.op}(${e})`}}function b0(t,e){return t instanceof Ye?function(n,i){return i instanceof Ye&&n.op===i.op&&n.field.isEqual(i.field)&&Dn(n.value,i.value)}(t,e):t instanceof gn?function(n,i){return i instanceof gn&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((r,s,o)=>r&&b0(s,i.filters[o]),!0):!1}(t,e):void le()}function E0(t){return t instanceof Ye?function(e){return`${e.field.canonicalString()} ${e.op} ${cs(e.value)}`}(t):t instanceof gn?function(e){return e.op.toString()+" {"+e.getFilters().map(E0).join(" ,")+"}"}(t):"Filter"}class fO extends Ye{constructor(e,n,i){super(e,n,i),this.key=X.fromName(i.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class dO extends Ye{constructor(e,n){super(e,"in",n),this.keys=T0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class pO extends Ye{constructor(e,n){super(e,"not-in",n),this.keys=T0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function T0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>X.fromName(i.referenceValue))}class gO extends Ye{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return pd(n)&&Co(n.arrayValue,this.value)}}class mO extends Ye{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Co(this.value.arrayValue,n)}}class vO extends Ye{constructor(e,n){super(e,"not-in",n)}matches(e){if(Co(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Co(this.value.arrayValue,n)}}class yO extends Ye{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!pd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Co(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wO{constructor(e,n=null,i=[],r=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=r,this.limit=s,this.startAt=o,this.endAt=a,this.dt=null}}function Um(t,e=null,n=[],i=[],r=null,s=null,o=null){return new wO(t,e,n,i,r,s,o)}function gd(t){const e=me(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>Hh(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),Ic(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>cs(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>cs(i)).join(",")),e.dt=n}return e.dt}function md(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!uO(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!b0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Fm(t.startAt,e.startAt)&&Fm(t.endAt,e.endAt)}function zh(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,n=null,i=[],r=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function _O(t,e,n,i,r,s,o,a){return new Er(t,e,n,i,r,s,o,a)}function vd(t){return new Er(t)}function Vm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function yd(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Cc(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function wd(t){return t.collectionGroup!==null}function ir(t){const e=me(t);if(e.wt===null){e.wt=[];const n=Cc(e),i=yd(e);if(n!==null&&i===null)n.isKeyField()||e.wt.push(new Yr(n)),e.wt.push(new Yr(mt.keyField(),"asc"));else{let r=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(r=!0);if(!r){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Yr(mt.keyField(),s))}}}return e.wt}function Zn(t){const e=me(t);if(!e._t)if(e.limitType==="F")e._t=Um(e.path,e.collectionGroup,ir(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of ir(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Yr(s.field,o))}const i=e.endAt?new us(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new us(e.startAt.position,e.startAt.inclusive):null;e._t=Um(e.path,e.collectionGroup,n,e.filters,e.limit,i,r)}return e._t}function Kh(t,e){e.getFirstInequalityField(),Cc(t);const n=t.filters.concat([e]);return new Er(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Sl(t,e,n){return new Er(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ac(t,e){return md(Zn(t),Zn(e))&&t.limitType===e.limitType}function I0(t){return`${gd(Zn(t))}|lt:${t.limitType}`}function Wh(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>E0(i)).join(", ")}]`),Ic(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>cs(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>cs(i)).join(",")),`Target(${n})`}(Zn(t))}; limitType=${t.limitType})`}function kc(t,e){return e.isFoundDocument()&&function(n,i){const r=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):X.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,i){for(const r of ir(n))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,i){for(const r of n.filters)if(!r.matches(i))return!1;return!0}(t,e)&&function(n,i){return!(n.startAt&&!function(r,s,o){const a=$m(r,s,o);return r.inclusive?a<=0:a<0}(n.startAt,ir(n),i)||n.endAt&&!function(r,s,o){const a=$m(r,s,o);return r.inclusive?a>=0:a>0}(n.endAt,ir(n),i))}(t,e)}function bO(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function S0(t){return(e,n)=>{let i=!1;for(const r of ir(t)){const s=EO(r,e,n);if(s!==0)return s;i=i||r.field.isKeyField()}return 0}}function EO(t,e,n){const i=t.field.isKeyField()?X.comparator(e.key,n.key):function(r,s,o){const a=s.data.field(r),l=o.data.field(r);return a!==null&&l!==null?ls(a,l):le()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return le()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[r,s]of i)if(this.equalsFn(r,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),r=this.inner[i];if(r===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return i.length===1?delete this.inner[n]:i.splice(r,1),this.innerSize--,!0;return!1}forEach(e){br(this.inner,(n,i)=>{for(const[r,s]of i)e(r,s)})}isEmpty(){return g0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TO=new Be(X.comparator);function ei(){return TO}const C0=new Be(X.comparator);function Ls(...t){let e=C0;for(const n of t)e=e.insert(n.key,n);return e}function A0(t){let e=C0;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function Gi(){return Ys()}function k0(){return Ys()}function Ys(){return new ys(t=>t.toString(),(t,e)=>t.isEqual(e))}const IO=new Be(X.comparator),SO=new wt(X.comparator);function ve(...t){let e=SO;for(const n of t)e=e.add(n);return e}const CO=new wt(Te);function AO(){return CO}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R0(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Tl(e)?"-0":e}}function x0(t){return{integerValue:""+t}}function P0(t,e){return oO(e)?x0(e):R0(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(){this._=void 0}}function kO(t,e,n){return t instanceof Ao?function(i,r){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&Sc(r)&&(r=dd(r)),r&&(s.fields.__previous_value__=r),{mapValue:s}}(n,e):t instanceof ko?O0(t,e):t instanceof Ro?N0(t,e):function(i,r){const s=D0(i,r),o=Bm(s)+Bm(i.gt);return jh(s)&&jh(i.gt)?x0(o):R0(i.serializer,o)}(t,e)}function RO(t,e,n){return t instanceof ko?O0(t,e):t instanceof Ro?N0(t,e):n}function D0(t,e){return t instanceof xo?jh(n=e)||function(i){return!!i&&"doubleValue"in i}(n)?e:{integerValue:0}:null;var n}class Ao extends Rc{}class ko extends Rc{constructor(e){super(),this.elements=e}}function O0(t,e){const n=L0(e);for(const i of t.elements)n.some(r=>Dn(r,i))||n.push(i);return{arrayValue:{values:n}}}class Ro extends Rc{constructor(e){super(),this.elements=e}}function N0(t,e){let n=L0(e);for(const i of t.elements)n=n.filter(r=>!Dn(r,i));return{arrayValue:{values:n}}}class xo extends Rc{constructor(e,n){super(),this.serializer=e,this.gt=n}}function Bm(t){return Ge(t.integerValue||t.doubleValue)}function L0(t){return pd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(e,n){this.field=e,this.transform=n}}function xO(t,e){return t.field.isEqual(e.field)&&function(n,i){return n instanceof ko&&i instanceof ko||n instanceof Ro&&i instanceof Ro?as(n.elements,i.elements,Dn):n instanceof xo&&i instanceof xo?Dn(n.gt,i.gt):n instanceof Ao&&i instanceof Ao}(t.transform,e.transform)}class PO{constructor(e,n){this.version=e,this.transformResults=n}}class Zt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Zt}static exists(e){return new Zt(void 0,e)}static updateTime(e){return new Zt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Va(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class xc{}function $0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new _d(t.key,Zt.none()):new Zo(t.key,t.data,Zt.none());{const n=t.data,i=Mt.empty();let r=new wt(mt.comparator);for(let s of e.fields)if(!r.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?i.delete(s):i.set(s,o),r=r.add(s)}return new Mi(t.key,i,new qt(r.toArray()),Zt.none())}}function DO(t,e,n){t instanceof Zo?function(i,r,s){const o=i.value.clone(),a=jm(i.fieldTransforms,r,s.transformResults);o.setAll(a),r.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Mi?function(i,r,s){if(!Va(i.precondition,r))return void r.convertToUnknownDocument(s.version);const o=jm(i.fieldTransforms,r,s.transformResults),a=r.data;a.setAll(F0(i)),a.setAll(o),r.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(i,r,s){r.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Js(t,e,n,i){return t instanceof Zo?function(r,s,o,a){if(!Va(r.precondition,s))return o;const l=r.value.clone(),c=Hm(r.fieldTransforms,a,s);return l.setAll(c),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,i):t instanceof Mi?function(r,s,o,a){if(!Va(r.precondition,s))return o;const l=Hm(r.fieldTransforms,a,s),c=s.data;return c.setAll(F0(r)),c.setAll(l),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,i):function(r,s,o){return Va(r.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function OO(t,e){let n=null;for(const i of t.fieldTransforms){const r=e.data.field(i.field),s=D0(i.transform,r||null);s!=null&&(n===null&&(n=Mt.empty()),n.set(i.field,s))}return n||null}function qm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&as(n,i,(r,s)=>xO(r,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Zo extends xc{constructor(e,n,i,r=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Mi extends xc{constructor(e,n,i,r,s=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function F0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function jm(t,e,n){const i=new Map;$e(t.length===n.length);for(let r=0;r<n.length;r++){const s=t[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,RO(o,a,n[r]))}return i}function Hm(t,e,n){const i=new Map;for(const r of t){const s=r.transform,o=n.data.field(r.field);i.set(r.field,kO(s,o,e))}return i}class _d extends xc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class NO extends xc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LO{constructor(e,n,i,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=r}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(e.key)&&DO(s,e,i[r])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=Js(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=Js(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=k0();return this.mutations.forEach(r=>{const s=e.get(r.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(r.key)?null:a;const l=$0(o,a);l!==null&&i.set(r.key,l),o.isValidDocument()||o.convertToNoDocument(fe.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ve())}isEqual(e){return this.batchId===e.batchId&&as(this.mutations,e.mutations,(n,i)=>qm(n,i))&&as(this.baseMutations,e.baseMutations,(n,i)=>qm(n,i))}}class bd{constructor(e,n,i,r){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=r}static from(e,n,i){$e(e.mutations.length===i.length);let r=IO;const s=e.mutations;for(let o=0;o<s.length;o++)r=r.insert(s[o].key,i[o].version);return new bd(e,n,i,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var We,_e;function FO(t){switch(t){default:return le();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function U0(t){if(t===void 0)return Xn("GRPC error has no .code"),A.UNKNOWN;switch(t){case We.OK:return A.OK;case We.CANCELLED:return A.CANCELLED;case We.UNKNOWN:return A.UNKNOWN;case We.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case We.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case We.INTERNAL:return A.INTERNAL;case We.UNAVAILABLE:return A.UNAVAILABLE;case We.UNAUTHENTICATED:return A.UNAUTHENTICATED;case We.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case We.NOT_FOUND:return A.NOT_FOUND;case We.ALREADY_EXISTS:return A.ALREADY_EXISTS;case We.PERMISSION_DENIED:return A.PERMISSION_DENIED;case We.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case We.ABORTED:return A.ABORTED;case We.OUT_OF_RANGE:return A.OUT_OF_RANGE;case We.UNIMPLEMENTED:return A.UNIMPLEMENTED;case We.DATA_LOSS:return A.DATA_LOSS;default:return le()}}(_e=We||(We={}))[_e.OK=0]="OK",_e[_e.CANCELLED=1]="CANCELLED",_e[_e.UNKNOWN=2]="UNKNOWN",_e[_e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_e[_e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_e[_e.NOT_FOUND=5]="NOT_FOUND",_e[_e.ALREADY_EXISTS=6]="ALREADY_EXISTS",_e[_e.PERMISSION_DENIED=7]="PERMISSION_DENIED",_e[_e.UNAUTHENTICATED=16]="UNAUTHENTICATED",_e[_e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_e[_e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_e[_e.ABORTED=10]="ABORTED",_e[_e.OUT_OF_RANGE=11]="OUT_OF_RANGE",_e[_e.UNIMPLEMENTED=12]="UNIMPLEMENTED",_e[_e.INTERNAL=13]="INTERNAL",_e[_e.UNAVAILABLE=14]="UNAVAILABLE",_e[_e.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ea}static getOrCreateInstance(){return Ea===null&&(Ea=new Ed),Ea}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Ea=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UO(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VO=new Qr([4294967295,4294967295],0);function zm(t){const e=UO().encode(t),n=new zD;return n.update(e),new Uint8Array(n.digest())}function Km(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),r=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Qr([n,i],0),new Qr([r,s],0)]}class Td{constructor(e,n,i){if(this.bitmap=e,this.padding=n,this.hashCount=i,n<0||n>=8)throw new Ms(`Invalid padding: ${n}`);if(i<0)throw new Ms(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Ms(`Invalid hash count: ${i}`);if(e.length===0&&n!==0)throw new Ms(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=Qr.fromNumber(this.It)}Et(e,n,i){let r=e.add(n.multiply(Qr.fromNumber(i)));return r.compare(VO)===1&&(r=new Qr([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=zm(e),[i,r]=Km(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(i,r,s);if(!this.At(o))return!1}return!0}static create(e,n,i){const r=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Td(s,r,n);return i.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=zm(e),[i,r]=Km(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(i,r,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),i=e%8;this.bitmap[n]|=1<<i}}class Ms extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,n,i,r,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const r=new Map;return r.set(e,ea.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new Pc(fe.min(),r,new Be(Te),ei(),ve())}}class ea{constructor(e,n,i,r,s){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new ea(i,n,ve(),ve(),ve())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,n,i,r){this.Pt=e,this.removedTargetIds=n,this.key=i,this.bt=r}}class V0{constructor(e,n){this.targetId=e,this.Vt=n}}class B0{constructor(e,n,i=bt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=r}}class Wm{constructor(){this.St=0,this.Dt=Qm(),this.Ct=bt.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=ve(),n=ve(),i=ve();return this.Dt.forEach((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:i=i.add(r);break;default:le()}}),new ea(this.Ct,this.xt,e,n,i)}Ft(){this.Nt=!1,this.Dt=Qm()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class BO{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=ei(),this.zt=Gm(),this.Wt=new Be(Te)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const i=this.Zt(n);switch(e.state){case 0:this.te(n)&&i.$t(e.resumeToken);break;case 1:i.Ut(),i.kt||i.Ft(),i.$t(e.resumeToken);break;case 2:i.Ut(),i.kt||this.removeTarget(n);break;case 3:this.te(n)&&(i.Kt(),i.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),i.$t(e.resumeToken));break;default:le()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((i,r)=>{this.te(r)&&n(r)})}ne(e){var n;const i=e.targetId,r=e.Vt.count,s=this.se(i);if(s){const o=s.target;if(zh(o))if(r===0){const a=new X(o.path);this.Yt(i,a,gt.newNoDocument(a,fe.min()))}else $e(r===1);else{const a=this.ie(i);if(a!==r){const l=this.re(e,a);if(l!==0){this.ee(i);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(i,c)}(n=Ed.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(c,u,h){var f,d,p,m,w,b;const y={localCacheCount:u,existenceFilterCount:h.count},_=h.unchangedNames;return _&&(y.bloomFilter={applied:c===0,hashCount:(f=_?.hashCount)!==null&&f!==void 0?f:0,bitmapLength:(m=(p=(d=_?.bits)===null||d===void 0?void 0:d.bitmap)===null||p===void 0?void 0:p.length)!==null&&m!==void 0?m:0,padding:(b=(w=_?.bits)===null||w===void 0?void 0:w.padding)!==null&&b!==void 0?b:0}),y}(l,a,e.Vt))}}}}re(e,n){const{unchangedNames:i,count:r}=e.Vt;if(!i||!i.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=i;let l,c;try{l=fr(s).toUint8Array()}catch(u){if(u instanceof m0)return os("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{c=new Td(l,o,a)}catch(u){return os(u instanceof Ms?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return c.It===0?1:r!==n-this.oe(e.targetId,c)?2:0}oe(e,n){const i=this.Gt.getRemoteKeysForTarget(e);let r=0;return i.forEach(s=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.vt(a)||(this.Yt(e,s,null),r++)}),r}ce(e){const n=new Map;this.Qt.forEach((s,o)=>{const a=this.se(o);if(a){if(s.current&&zh(a.target)){const l=new X(a.target.path);this.jt.get(l)!==null||this.ae(o,l)||this.Yt(o,l,gt.newNoDocument(l,e))}s.Mt&&(n.set(o,s.Ot()),s.Ft())}});let i=ve();this.zt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.se(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(i=i.add(s))}),this.jt.forEach((s,o)=>o.setReadTime(e));const r=new Pc(e,n,this.Wt,this.jt,i);return this.jt=ei(),this.zt=Gm(),this.Wt=new Be(Te),r}Jt(e,n){if(!this.te(e))return;const i=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,i),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,i){if(!this.te(e))return;const r=this.Zt(e);this.ae(e,n)?r.Bt(n,1):r.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),i&&(this.jt=this.jt.insert(n,i))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new Wm,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new wt(Te),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||J("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Wm),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function Gm(){return new Be(X.comparator)}function Qm(){return new Be(X.comparator)}const qO={asc:"ASCENDING",desc:"DESCENDING"},jO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},HO={and:"AND",or:"OR"};class zO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Gh(t,e){return t.useProto3Json||Ic(e)?e:{value:e}}function Cl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function q0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function KO(t,e){return Cl(t,e.toTimestamp())}function xn(t){return $e(!!t),fe.fromTimestamp(function(e){const n=Ci(e);return new tt(n.seconds,n.nanos)}(t))}function Id(t,e){return function(n){return new Oe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function j0(t){const e=Oe.fromString(t);return $e(W0(e)),e}function Qh(t,e){return Id(t.databaseId,e.path)}function Fu(t,e){const n=j0(e);if(n.get(1)!==t.databaseId.projectId)throw new z(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X(H0(n))}function Yh(t,e){return Id(t.databaseId,e)}function WO(t){const e=j0(t);return e.length===4?Oe.emptyPath():H0(e)}function Jh(t){return new Oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function H0(t){return $e(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ym(t,e,n){return{name:Qh(t,e),fields:n.value.mapValue.fields}}function GO(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:le()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],s=function(l,c){return l.useProto3Json?($e(c===void 0||typeof c=="string"),bt.fromBase64String(c||"")):($e(c===void 0||c instanceof Uint8Array),bt.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?A.UNKNOWN:U0(l.code);return new z(c,l.message||"")}(o);n=new B0(i,r,s,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const r=Fu(t,i.document.name),s=xn(i.document.updateTime),o=i.document.createTime?xn(i.document.createTime):fe.min(),a=new Mt({mapValue:{fields:i.document.fields}}),l=gt.newFoundDocument(r,s,o,a),c=i.targetIds||[],u=i.removedTargetIds||[];n=new Ba(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const r=Fu(t,i.document),s=i.readTime?xn(i.readTime):fe.min(),o=gt.newNoDocument(r,s),a=i.removedTargetIds||[];n=new Ba([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const r=Fu(t,i.document),s=i.removedTargetIds||[];n=new Ba([],s,r,null)}else{if(!("filter"in e))return le();{e.filter;const i=e.filter;i.targetId;const{count:r=0,unchangedNames:s}=i,o=new $O(r,s),a=i.targetId;n=new V0(a,o)}}return n}function QO(t,e){let n;if(e instanceof Zo)n={update:Ym(t,e.key,e.value)};else if(e instanceof _d)n={delete:Qh(t,e.key)};else if(e instanceof Mi)n={update:Ym(t,e.key,e.data),updateMask:rN(e.fieldMask)};else{if(!(e instanceof NO))return le();n={verify:Qh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(r,s){const o=s.transform;if(o instanceof Ao)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ko)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ro)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof xo)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw le()}(0,i))),e.precondition.isNone||(n.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:KO(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:le()}(t,e.precondition)),n}function YO(t,e){return t&&t.length>0?($e(e!==void 0),t.map(n=>function(i,r){let s=i.updateTime?xn(i.updateTime):xn(r);return s.isEqual(fe.min())&&(s=xn(r)),new PO(s,i.transformResults||[])}(n,e))):[]}function JO(t,e){return{documents:[Yh(t,e.path)]}}function XO(t,e){const n={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(n.parent=Yh(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Yh(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(l){if(l.length!==0)return K0(gn.create(l,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const s=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:Or(u.field),direction:tN(u.dir)}}(c))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Gh(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function ZO(t){let e=WO(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){$e(i===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let s=[];n.where&&(s=function(u){const h=z0(u);return h instanceof gn&&_0(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Yr(Nr(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Ic(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,f=u.values||[];return new us(f,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,f=u.values||[];return new us(f,h)}(n.endAt)),_O(e,r,o,s,a,"F",l,c)}function eN(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return le()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function z0(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Nr(e.unaryFilter.field);return Ye.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=Nr(e.unaryFilter.field);return Ye.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Nr(e.unaryFilter.field);return Ye.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Nr(e.unaryFilter.field);return Ye.create(s,"!=",{nullValue:"NULL_VALUE"});default:return le()}}(t):t.fieldFilter!==void 0?function(e){return Ye.create(Nr(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return le()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return gn.create(e.compositeFilter.filters.map(n=>z0(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return le()}}(e.compositeFilter.op))}(t):le()}function tN(t){return qO[t]}function nN(t){return jO[t]}function iN(t){return HO[t]}function Or(t){return{fieldPath:t.canonicalString()}}function Nr(t){return mt.fromServerFormat(t.fieldPath)}function K0(t){return t instanceof Ye?function(e){if(e.op==="=="){if(Mm(e.value))return{unaryFilter:{field:Or(e.field),op:"IS_NAN"}};if(Lm(e.value))return{unaryFilter:{field:Or(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Mm(e.value))return{unaryFilter:{field:Or(e.field),op:"IS_NOT_NAN"}};if(Lm(e.value))return{unaryFilter:{field:Or(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Or(e.field),op:nN(e.op),value:e.value}}}(t):t instanceof gn?function(e){const n=e.getFilters().map(i=>K0(i));return n.length===1?n[0]:{compositeFilter:{op:iN(e.op),filters:n}}}(t):le()}function rN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function W0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,n,i,r,s=fe.min(),o=fe.min(),a=bt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new yi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new yi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new yi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new yi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(e){this.fe=e}}function oN(t){const e=ZO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Sl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(){this.rn=new lN}addToCollectionParentIndex(e,n){return this.rn.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(Si.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(Si.min())}updateCollectionGroup(e,n,i){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class lN{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),r=this.index[n]||new wt(Oe.comparator),s=!r.has(i);return this.index[n]=r.add(i),s}has(e){const n=e.lastSegment(),i=e.popLast(),r=this.index[n];return r&&r.has(i)}getEntries(e){return(this.index[e]||new wt(Oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new hs(0)}static Mn(){return new hs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{constructor(){this.changes=new ys(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,gt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?U.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hN{constructor(e,n,i,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=r}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(i=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(i!==null&&Js(i.mutation,r,qt.empty(),tt.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,ve()).next(()=>i))}getLocalViewOfDocuments(e,n,i=ve()){const r=Gi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,i).next(s=>{let o=Ls();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const i=Gi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,ve()))}populateOverlays(e,n,i){const r=[];return i.forEach(s=>{n.has(s)||r.push(s)}),this.documentOverlayCache.getOverlays(e,r).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,i,r){let s=ei();const o=Ys(),a=Ys();return n.forEach((l,c)=>{const u=i.get(c.key);r.has(c.key)&&(u===void 0||u.mutation instanceof Mi)?s=s.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Js(u.mutation,c,u.mutation.getFieldMask(),tt.now())):o.set(c.key,qt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new uN(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const i=Ys();let r=new Be((o,a)=>o-a),s=ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=i.get(l)||qt.empty();u=a.applyToLocalView(c,u),i.set(l,u);const h=(r.get(a.batchId)||ve()).add(l);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=k0();u.forEach(f=>{if(!s.has(f)){const d=$0(n.get(f),i.get(f));d!==null&&h.set(f,d),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return U.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i){return function(r){return X.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):wd(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i):this.getDocumentsMatchingCollectionQuery(e,n,i)}getNextDocuments(e,n,i,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,r).next(s=>{const o=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,r-s.size):U.resolve(Gi());let a=-1,l=s;return o.next(c=>U.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?U.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,ve())).next(u=>({batchId:a,changes:A0(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next(i=>{let r=Ls();return i.isFoundDocument()&&(r=r.insert(i.key,i)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,i){const r=n.collectionGroup;let s=Ls();return this.indexManager.getCollectionParents(e,r).next(o=>U.forEach(o,a=>{const l=function(c,u){return new Er(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,l,i).next(c=>{c.forEach((u,h)=>{s=s.insert(u,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(s=>(r=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,r))).next(s=>{r.forEach((a,l)=>{const c=l.getKey();s.get(c)===null&&(s=s.insert(c,gt.newInvalidDocument(c)))});let o=Ls();return s.forEach((a,l)=>{const c=r.get(a);c!==void 0&&Js(c.mutation,l,qt.empty(),tt.now()),kc(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return U.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var i;return this.cs.set(n.id,{id:(i=n).id,version:i.version,createTime:xn(i.createTime)}),U.resolve()}getNamedQuery(e,n){return U.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(i){return{name:i.name,query:oN(i.bundledQuery),readTime:xn(i.readTime)}}(n)),U.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(){this.overlays=new Be(X.comparator),this.ls=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const i=Gi();return U.forEach(n,r=>this.getOverlay(e,r).next(s=>{s!==null&&i.set(r,s)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((r,s)=>{this.we(e,n,s)}),U.resolve()}removeOverlaysForBatchId(e,n,i){const r=this.ls.get(i);return r!==void 0&&(r.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(i)),U.resolve()}getOverlaysForCollection(e,n,i){const r=Gi(),s=n.length+1,o=new X(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>i&&r.set(l.getKey(),l)}return U.resolve(r)}getOverlaysForCollectionGroup(e,n,i,r){let s=new Be((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>i){let u=s.get(c.largestBatchId);u===null&&(u=Gi(),s=s.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Gi(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=r)););return U.resolve(a)}we(e,n,i){const r=this.overlays.get(i.key);if(r!==null){const o=this.ls.get(r.largestBatchId).delete(i.key);this.ls.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new MO(n,i));let s=this.ls.get(n);s===void 0&&(s=ve(),this.ls.set(n,s)),this.ls.set(n,s.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(){this.fs=new wt(it.ds),this.ws=new wt(it._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const i=new it(e,n);this.fs=this.fs.add(i),this.ws=this.ws.add(i)}gs(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.ys(new it(e,n))}ps(e,n){e.forEach(i=>this.removeReference(i,n))}Is(e){const n=new X(new Oe([])),i=new it(n,e),r=new it(n,e+1),s=[];return this.ws.forEachInRange([i,r],o=>{this.ys(o),s.push(o.key)}),s}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new X(new Oe([])),i=new it(n,e),r=new it(n,e+1);let s=ve();return this.ws.forEachInRange([i,r],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new it(e,0),i=this.fs.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class it{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return X.comparator(e.key,n.key)||Te(e.As,n.As)}static _s(e,n){return Te(e.As,n.As)||X.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new wt(it.ds)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,r){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new LO(s,n,i,r);this.mutationQueue.push(o);for(const a of r)this.Rs=this.Rs.add(new it(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,r=this.bs(i),s=r<0?0:r;return U.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new it(n,0),r=new it(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([i,r],o=>{const a=this.Ps(o.As);s.push(a)}),U.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new wt(Te);return n.forEach(r=>{const s=new it(r,0),o=new it(r,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{i=i.add(a.As)})}),U.resolve(this.Vs(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,r=i.length+1;let s=i;X.isDocumentKey(s)||(s=s.child(""));const o=new it(new X(s),0);let a=new wt(Te);return this.Rs.forEachWhile(l=>{const c=l.key.path;return!!i.isPrefixOf(c)&&(c.length===r&&(a=a.add(l.As)),!0)},o),U.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(i=>{const r=this.Ps(i);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){$e(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this.Rs;return U.forEach(n.mutations,r=>{const s=new it(r.key,n.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Rs=i})}Cn(e){}containsKey(e,n){const i=new it(n,0),r=this.Rs.firstAfterOrEqual(i);return U.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gN{constructor(e){this.Ds=e,this.docs=new Be(X.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,r=this.docs.get(i),s=r?r.size:0,o=this.Ds(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return U.resolve(i?i.document.mutableCopy():gt.newInvalidDocument(n))}getEntries(e,n){let i=ei();return n.forEach(r=>{const s=this.docs.get(r);i=i.insert(r,s?s.document.mutableCopy():gt.newInvalidDocument(r))}),U.resolve(i)}getDocumentsMatchingQuery(e,n,i,r){let s=ei();const o=n.path,a=new X(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||iO(nO(u),i)<=0||(r.has(u.key)||kc(n,u))&&(s=s.insert(u.key,u.mutableCopy()))}return U.resolve(s)}getAllFromCollectionGroup(e,n,i,r){le()}Cs(e,n){return U.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new mN(this)}getSize(e){return U.resolve(this.size)}}class mN extends cN{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((i,r)=>{r.isValidDocument()?n.push(this.os.addEntry(e,r)):this.os.removeEntry(i)}),U.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vN{constructor(e){this.persistence=e,this.xs=new ys(n=>gd(n),md),this.lastRemoteSnapshotVersion=fe.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Sd,this.targetCount=0,this.Ms=hs.kn()}forEachTarget(e,n){return this.xs.forEach((i,r)=>n(r)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Ns&&(this.Ns=n),U.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new hs(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.Fn(n),U.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,i){let r=0;const s=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),U.waitFor(s).next(()=>r)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const i=this.xs.get(n)||null;return U.resolve(i)}addMatchingKeys(e,n,i){return this.ks.gs(n,i),U.resolve()}removeMatchingKeys(e,n,i){this.ks.ps(n,i);const r=this.persistence.referenceDelegate,s=[];return r&&n.forEach(o=>{s.push(r.markPotentiallyOrphaned(e,o))}),U.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),U.resolve()}getMatchingKeysForTargetId(e,n){const i=this.ks.Es(n);return U.resolve(i)}containsKey(e,n){return U.resolve(this.ks.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(e,n){this.$s={},this.overlays={},this.Os=new fd(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new vN(this),this.indexManager=new aN,this.remoteDocumentCache=function(i){return new gN(i)}(i=>this.referenceDelegate.Ls(i)),this.serializer=new sN(n),this.qs=new fN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new dN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.$s[e.toKey()];return i||(i=new pN(n,this.referenceDelegate),this.$s[e.toKey()]=i),i}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,i){J("MemoryPersistence","Starting transaction:",e);const r=new wN(this.Os.next());return this.referenceDelegate.Us(),i(r).next(s=>this.referenceDelegate.Ks(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}Gs(e,n){return U.or(Object.values(this.$s).map(i=>()=>i.containsKey(e,n)))}}class wN extends sO{constructor(e){super(),this.currentSequenceNumber=e}}class Cd{constructor(e){this.persistence=e,this.Qs=new Sd,this.js=null}static zs(e){return new Cd(e)}get Ws(){if(this.js)return this.js;throw le()}addReference(e,n,i){return this.Qs.addReference(i,n),this.Ws.delete(i.toString()),U.resolve()}removeReference(e,n,i){return this.Qs.removeReference(i,n),this.Ws.add(i.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),U.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(r=>this.Ws.add(r.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(s=>this.Ws.add(s.toString()))}).next(()=>i.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Ws,i=>{const r=X.fromPath(i);return this.Hs(e,r).next(s=>{s||n.removeEntry(r,fe.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(i=>{i?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return U.or([()=>U.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e,n,i,r){this.targetId=e,this.fromCache=n,this.Fi=i,this.Bi=r}static Li(e,n){let i=ve(),r=ve();for(const s of n.docChanges)switch(s.type){case 0:i=i.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new Ad(e,n.fromCache,i,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,i,r){return this.Ki(e,n).next(s=>s||this.Gi(e,n,r,i)).next(s=>s||this.Qi(e,n))}Ki(e,n){if(Vm(n))return U.resolve(null);let i=Zn(n);return this.indexManager.getIndexType(e,i).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Sl(n,null,"F"),i=Zn(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(s=>{const o=ve(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(l=>{const c=this.ji(n,a);return this.zi(n,c,o,l.readTime)?this.Ki(e,Sl(n,null,"F")):this.Wi(e,c,n,l)}))})))}Gi(e,n,i,r){return Vm(n)||r.isEqual(fe.min())?this.Qi(e,n):this.Ui.getDocuments(e,i).next(s=>{const o=this.ji(n,s);return this.zi(n,o,i,r)?this.Qi(e,n):(Pm()<=Ee.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Wh(n)),this.Wi(e,o,n,tO(r,-1)))})}ji(e,n){let i=new wt(S0(e));return n.forEach((r,s)=>{kc(e,s)&&(i=i.add(s))}),i}zi(e,n,i,r){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Qi(e,n){return Pm()<=Ee.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",Wh(n)),this.Ui.getDocumentsMatchingQuery(e,n,Si.min())}Wi(e,n,i,r){return this.Ui.getDocumentsMatchingQuery(e,i,r).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(e,n,i,r){this.persistence=e,this.Hi=n,this.serializer=r,this.Ji=new Be(Te),this.Yi=new ys(s=>gd(s),md),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(i)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new hN(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function EN(t,e,n,i){return new bN(t,e,n,i)}async function G0(t,e){const n=me(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let r;return n.mutationQueue.getAllMutationBatches(i).next(s=>(r=s,n.tr(e),n.mutationQueue.getAllMutationBatches(i))).next(s=>{const o=[],a=[];let l=ve();for(const c of r){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of s){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(i,l).next(c=>({er:c,removedBatchIds:o,addedBatchIds:a}))})})}function TN(t,e){const n=me(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const r=e.batch.keys(),s=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let f=U.resolve();return h.forEach(d=>{f=f.next(()=>c.getEntry(a,d)).next(p=>{const m=l.docVersions.get(d);$e(m!==null),p.version.compareTo(m)<0&&(u.applyToRemoteDocument(p,l),p.isValidDocument()&&(p.setReadTime(l.commitVersion),c.addEntry(p)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,i,e,s).next(()=>s.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(o){let a=ve();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(i,r))})}function Q0(t){const e=me(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function IN(t,e){const n=me(t),i=e.snapshotVersion;let r=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});r=n.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const f=r.get(h);if(!f)return;a.push(n.Bs.removeMatchingKeys(s,u.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(s,u.addedDocuments,h)));let d=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?d=d.withResumeToken(bt.EMPTY_BYTE_STRING,fe.min()).withLastLimboFreeSnapshotVersion(fe.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,i)),r=r.insert(h,d),function(p,m,w){return p.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(f,d,u)&&a.push(n.Bs.updateTargetData(s,d))});let l=ei(),c=ve();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(SN(s,o,e.documentUpdates).next(u=>{l=u.nr,c=u.sr})),!i.isEqual(fe.min())){const u=n.Bs.getLastRemoteSnapshotVersion(s).next(h=>n.Bs.setTargetsMetadata(s,s.currentSequenceNumber,i));a.push(u)}return U.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.Ji=r,s))}function SN(t,e,n){let i=ve(),r=ve();return n.forEach(s=>i=i.add(s)),e.getEntries(t,i).next(s=>{let o=ei();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(r=r.add(a)),l.isNoDocument()&&l.version.isEqual(fe.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):J("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{nr:o,sr:r}})}function CN(t,e){const n=me(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function AN(t,e){const n=me(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let r;return n.Bs.getTargetData(i,e).next(s=>s?(r=s,U.resolve(r)):n.Bs.allocateTargetId(i).next(o=>(r=new yi(e,o,"TargetPurposeListen",i.currentSequenceNumber),n.Bs.addTargetData(i,r).next(()=>r))))}).then(i=>{const r=n.Ji.get(i.targetId);return(r===null||i.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(i.targetId,i),n.Yi.set(e,i.targetId)),i})}async function Xh(t,e,n){const i=me(t),r=i.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,o=>i.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Xo(o))throw o;J("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.Ji=i.Ji.remove(e),i.Yi.delete(r.target)}function Jm(t,e,n){const i=me(t);let r=fe.min(),s=ve();return i.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=me(a),h=u.Yi.get(c);return h!==void 0?U.resolve(u.Ji.get(h)):u.Bs.getTargetData(l,c)}(i,o,Zn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,i.Bs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>i.Hi.getDocumentsMatchingQuery(o,e,n?r:fe.min(),n?s:ve())).next(a=>(kN(i,bO(e),a),{documents:a,ir:s})))}function kN(t,e,n){let i=t.Xi.get(e)||fe.min();n.forEach((r,s)=>{s.readTime.compareTo(i)>0&&(i=s.readTime)}),t.Xi.set(e,i)}class Xm{constructor(){this.activeTargetIds=AO()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class RN{constructor(){this.Hr=new Xm,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,i){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Xm,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{Yr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){J("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){J("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ta=null;function Uu(){return Ta===null?Ta=268435456+Math.round(2147483648*Math.random()):Ta++,"0x"+Ta.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut="WebChannelConnection";class ON extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,i,r,s){const o=Uu(),a=this.To(e,n);J("RestConnection",`Sending RPC '${e}' ${o}:`,a,i);const l={};return this.Eo(l,r,s),this.Ao(e,a,l,i).then(c=>(J("RestConnection",`Received RPC '${e}' ${o}: `,c),c),c=>{throw os("RestConnection",`RPC '${e}' ${o} failed with error: `,c,"url: ",a,"request:",i),c})}vo(e,n,i,r,s,o){return this.Io(e,n,i,r,s)}Eo(e,n,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+vs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,s)=>e[s]=r),i&&i.headers.forEach((r,s)=>e[s]=r)}To(e,n){const i=PN[e];return`${this.mo}/v1/${n}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,i,r){const s=Uu();return new Promise((o,a)=>{const l=new HD;l.setWithCredentials(!0),l.listenOnce(BD.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case $u.NO_ERROR:const u=l.getResponseJson();J(ut,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(u)),o(u);break;case $u.TIMEOUT:J(ut,`RPC '${e}' ${s} timed out`),a(new z(A.DEADLINE_EXCEEDED,"Request time out"));break;case $u.HTTP_ERROR:const h=l.getStatus();if(J(ut,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f?.error;if(d&&d.status&&d.message){const p=function(m){const w=m.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(w)>=0?w:A.UNKNOWN}(d.status);a(new z(p,d.message))}else a(new z(A.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new z(A.UNAVAILABLE,"Connection failed."));break;default:le()}}finally{J(ut,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(r);J(ut,`RPC '${e}' ${s} sending request:`,r),l.send(n,"POST",c,i,15)})}Ro(e,n,i){const r=Uu(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=UD(),a=VD(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new jD({})),this.Eo(l.initMessageHeaders,n,i),l.encodeInitMessageHeaders=!0;const u=s.join("");J(ut,`Creating RPC '${e}' stream ${r}: ${u}`,l);const h=o.createWebChannel(u,l);let f=!1,d=!1;const p=new DN({ro:w=>{d?J(ut,`Not sending because RPC '${e}' stream ${r} is closed:`,w):(f||(J(ut,`Opening RPC '${e}' stream ${r} transport.`),h.open(),f=!0),J(ut,`RPC '${e}' stream ${r} sending:`,w),h.send(w))},oo:()=>h.close()}),m=(w,b,y)=>{w.listen(b,_=>{try{y(_)}catch(E){setTimeout(()=>{throw E},0)}})};return m(h,wa.EventType.OPEN,()=>{d||J(ut,`RPC '${e}' stream ${r} transport opened.`)}),m(h,wa.EventType.CLOSE,()=>{d||(d=!0,J(ut,`RPC '${e}' stream ${r} transport closed`),p.wo())}),m(h,wa.EventType.ERROR,w=>{d||(d=!0,os(ut,`RPC '${e}' stream ${r} transport errored:`,w),p.wo(new z(A.UNAVAILABLE,"The operation could not be completed")))}),m(h,wa.EventType.MESSAGE,w=>{var b;if(!d){const y=w.data[0];$e(!!y);const _=y,E=_.error||((b=_[0])===null||b===void 0?void 0:b.error);if(E){J(ut,`RPC '${e}' stream ${r} received error:`,E);const I=E.status;let $=function(x){const C=We[x];if(C!==void 0)return U0(C)}(I),L=E.message;$===void 0&&($=A.INTERNAL,L="Unknown error status: "+I+" with message "+E.message),d=!0,p.wo(new z($,L)),h.close()}else J(ut,`RPC '${e}' stream ${r} received:`,y),p._o(y)}}),m(a,qD.STAT_EVENT,w=>{w.stat===Rm.PROXY?J(ut,`RPC '${e}' stream ${r} detected buffering proxy`):w.stat===Rm.NOPROXY&&J(ut,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{p.fo()},0),p}}function Vu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(t){return new zO(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(e,n,i=1e3,r=1.5,s=6e4){this.ii=e,this.timerId=n,this.Po=i,this.bo=r,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),i=Math.max(0,Date.now()-this.Co),r=Math.max(0,n-i);r>0&&J("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(e,n,i,r,s,o,a,l){this.ii=e,this.$o=i,this.Oo=r,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Y0(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(Xn(n.toString()),Xn("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,r])=>{this.Fo===n&&this.Zo(i,r)},i=>{e(()=>{const r=new z(A.UNKNOWN,"Fetching auth token failed: "+i.message);return this.tu(r)})})}Zo(e,n){const i=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{i(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(r=>{i(()=>this.tu(r))}),this.stream.onMessage(r=>{i(()=>this.onMessage(r))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return J("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(J("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class NN extends J0{constructor(e,n,i,r,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,r,o),this.serializer=s}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=GO(this.serializer,e),i=function(r){if(!("targetChange"in r))return fe.min();const s=r.targetChange;return s.targetIds&&s.targetIds.length?fe.min():s.readTime?xn(s.readTime):fe.min()}(e);return this.listener.nu(n,i)}su(e){const n={};n.database=Jh(this.serializer),n.addTarget=function(r,s){let o;const a=s.target;if(o=zh(a)?{documents:JO(r,a)}:{query:XO(r,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=q0(r,s.resumeToken);const l=Gh(r,s.expectedCount);l!==null&&(o.expectedCount=l)}else if(s.snapshotVersion.compareTo(fe.min())>0){o.readTime=Cl(r,s.snapshotVersion.toTimestamp());const l=Gh(r,s.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const i=eN(this.serializer,e);i&&(n.labels=i),this.Wo(n)}iu(e){const n={};n.database=Jh(this.serializer),n.removeTarget=e,this.Wo(n)}}class LN extends J0{constructor(e,n,i,r,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,r,o),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if($e(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=YO(e.writeResults,e.commitTime),i=xn(e.commitTime);return this.listener.cu(i,n)}return $e(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Jh(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>QO(this.serializer,i))};this.Wo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN extends class{}{constructor(e,n,i,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=r,this.lu=!1}fu(){if(this.lu)throw new z(A.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.connection.Io(e,n,i,r,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new z(A.UNKNOWN,r.toString())})}vo(e,n,i,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,n,i,s,o,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(A.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class $N{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Xn(n),this.mu=!1):J("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN{constructor(e,n,i,r,s){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(o=>{i.enqueueAndForget(async()=>{Tr(this)&&(J("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=me(a);l.vu.add(4),await ta(l),l.bu.set("Unknown"),l.vu.delete(4),await Oc(l)}(this))})}),this.bu=new $N(i,r)}}async function Oc(t){if(Tr(t))for(const e of t.Ru)await e(!0)}async function ta(t){for(const e of t.Ru)await e(!1)}function X0(t,e){const n=me(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),xd(n)?Rd(n):ws(n).Ko()&&kd(n,e))}function Z0(t,e){const n=me(t),i=ws(n);n.Au.delete(e),i.Ko()&&eE(n,e),n.Au.size===0&&(i.Ko()?i.jo():Tr(n)&&n.bu.set("Unknown"))}function kd(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(fe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ws(t).su(e)}function eE(t,e){t.Vu.qt(e),ws(t).iu(e)}function Rd(t){t.Vu=new BO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),ws(t).start(),t.bu.gu()}function xd(t){return Tr(t)&&!ws(t).Uo()&&t.Au.size>0}function Tr(t){return me(t).vu.size===0}function tE(t){t.Vu=void 0}async function UN(t){t.Au.forEach((e,n)=>{kd(t,e)})}async function VN(t,e){tE(t),xd(t)?(t.bu.Iu(e),Rd(t)):t.bu.set("Unknown")}async function BN(t,e,n){if(t.bu.set("Online"),e instanceof B0&&e.state===2&&e.cause)try{await async function(i,r){const s=r.cause;for(const o of r.targetIds)i.Au.has(o)&&(await i.remoteSyncer.rejectListen(o,s),i.Au.delete(o),i.Vu.removeTarget(o))}(t,e)}catch(i){J("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Al(t,i)}else if(e instanceof Ba?t.Vu.Ht(e):e instanceof V0?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(fe.min()))try{const i=await Q0(t.localStore);n.compareTo(i)>=0&&await function(r,s){const o=r.Vu.ce(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=r.Au.get(l);c&&r.Au.set(l,c.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,l)=>{const c=r.Au.get(a);if(!c)return;r.Au.set(a,c.withResumeToken(bt.EMPTY_BYTE_STRING,c.snapshotVersion)),eE(r,a);const u=new yi(c.target,a,l,c.sequenceNumber);kd(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(i){J("RemoteStore","Failed to raise snapshot:",i),await Al(t,i)}}async function Al(t,e,n){if(!Xo(e))throw e;t.vu.add(1),await ta(t),t.bu.set("Offline"),n||(n=()=>Q0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{J("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await Oc(t)})}function nE(t,e){return e().catch(n=>Al(t,n,e))}async function Nc(t){const e=me(t),n=Ai(e);let i=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;qN(e);)try{const r=await CN(e.localStore,i);if(r===null){e.Eu.length===0&&n.jo();break}i=r.batchId,jN(e,r)}catch(r){await Al(e,r)}iE(e)&&rE(e)}function qN(t){return Tr(t)&&t.Eu.length<10}function jN(t,e){t.Eu.push(e);const n=Ai(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function iE(t){return Tr(t)&&!Ai(t).Uo()&&t.Eu.length>0}function rE(t){Ai(t).start()}async function HN(t){Ai(t).hu()}async function zN(t){const e=Ai(t);for(const n of t.Eu)e.uu(n.mutations)}async function KN(t,e,n){const i=t.Eu.shift(),r=bd.from(i,e,n);await nE(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Nc(t)}async function WN(t,e){e&&Ai(t).ou&&await async function(n,i){if(r=i.code,FO(r)&&r!==A.ABORTED){const s=n.Eu.shift();Ai(n).Qo(),await nE(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Nc(n)}var r}(t,e),iE(t)&&rE(t)}async function ev(t,e){const n=me(t);n.asyncQueue.verifyOperationInProgress(),J("RemoteStore","RemoteStore received new credentials");const i=Tr(n);n.vu.add(3),await ta(n),i&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await Oc(n)}async function GN(t,e){const n=me(t);e?(n.vu.delete(2),await Oc(n)):e||(n.vu.add(2),await ta(n),n.bu.set("Unknown"))}function ws(t){return t.Su||(t.Su=function(e,n,i){const r=me(e);return r.fu(),new NN(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{uo:UN.bind(null,t),ao:VN.bind(null,t),nu:BN.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),xd(t)?Rd(t):t.bu.set("Unknown")):(await t.Su.stop(),tE(t))})),t.Su}function Ai(t){return t.Du||(t.Du=function(e,n,i){const r=me(e);return r.fu(),new LN(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{uo:HN.bind(null,t),ao:WN.bind(null,t),au:zN.bind(null,t),cu:KN.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await Nc(t)):(await t.Du.stop(),t.Eu.length>0&&(J("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(e,n,i,r,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new Gn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,r,s){const o=Date.now()+i,a=new Pd(e,n,o,r,s);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Dd(t,e){if(Xn("AsyncQueue",`${e}: ${t}`),Xo(t))return new z(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e){this.comparator=e?(n,i)=>e(n,i)||X.comparator(n.key,i.key):(n,i)=>X.comparator(n.key,i.key),this.keyedMap=Ls(),this.sortedSet=new Be(this.comparator)}static emptySet(e){return new Jr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Jr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(!r.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new Jr;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(){this.Cu=new Be(X.comparator)}track(e){const n=e.doc.key,i=this.Cu.get(n);i?e.type!==0&&i.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&i.type!==1?this.Cu=this.Cu.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Cu=this.Cu.remove(n):e.type===1&&i.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):le():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,i)=>{e.push(i)}),e}}class fs{constructor(e,n,i,r,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=r,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,i,r,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new fs(e,n,Jr.emptySet(n),o,i,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ac(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==i[r].type||!n[r].doc.isEqual(i[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(){this.Nu=void 0,this.listeners=[]}}class YN{constructor(){this.queries=new ys(e=>I0(e),Ac),this.onlineState="Unknown",this.ku=new Set}}async function sE(t,e){const n=me(t),i=e.query;let r=!1,s=n.queries.get(i);if(s||(r=!0,s=new QN),r)try{s.Nu=await n.onListen(i)}catch(o){const a=Dd(o,`Initialization of query '${Wh(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.listeners.push(e),e.Mu(n.onlineState),s.Nu&&e.$u(s.Nu)&&Od(n)}async function oE(t,e){const n=me(t),i=e.query;let r=!1;const s=n.queries.get(i);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),r=s.listeners.length===0)}if(r)return n.queries.delete(i),n.onUnlisten(i)}function JN(t,e){const n=me(t);let i=!1;for(const r of e){const s=r.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.$u(r)&&(i=!0);o.Nu=r}}i&&Od(n)}function XN(t,e,n){const i=me(t),r=i.queries.get(e);if(r)for(const s of r.listeners)s.onError(n);i.queries.delete(e)}function Od(t){t.ku.forEach(e=>{e.next()})}class aE{constructor(e,n,i){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=i||{}}$u(e){if(!this.options.includeMetadataChanges){const i=[];for(const r of e.docChanges)r.type!==3&&i.push(r);e=new fs(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const i=n!=="Offline";return(!this.options.Ku||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=fs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e){this.key=e}}class cE{constructor(e){this.key=e}}class ZN{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=ve(),this.mutatedKeys=ve(),this.tc=S0(e),this.ec=new Jr(this.tc)}get nc(){return this.Yu}sc(e,n){const i=n?n.ic:new tv,r=n?n.ec:this.ec;let s=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const l=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,c=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const f=r.get(u),d=kc(this.query,h)?h:null,p=!!f&&this.mutatedKeys.has(f.key),m=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let w=!1;f&&d?f.data.isEqual(d.data)?p!==m&&(i.track({type:3,doc:d}),w=!0):this.rc(f,d)||(i.track({type:2,doc:d}),w=!0,(l&&this.tc(d,l)>0||c&&this.tc(d,c)<0)&&(a=!0)):!f&&d?(i.track({type:0,doc:d}),w=!0):f&&!d&&(i.track({type:1,doc:f}),w=!0,(l||c)&&(a=!0)),w&&(d?(o=o.add(d),s=m?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),i.track({type:1,doc:u})}return{ec:o,ic:i,zi:a,mutatedKeys:s}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i){const r=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort((c,u)=>function(h,f){const d=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return le()}};return d(h)-d(f)}(c.type,u.type)||this.tc(c.doc,u.doc)),this.oc(i);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,l=a!==this.Xu;return this.Xu=a,s.length!==0||l?{snapshot:new fs(this.query,e.ec,r,s,e.mutatedKeys,a===0,l,!1,!!i&&i.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new tv,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=ve(),this.ec.forEach(i=>{this.ac(i.key)&&(this.Zu=this.Zu.add(i.key))});const n=[];return e.forEach(i=>{this.Zu.has(i)||n.push(new cE(i))}),this.Zu.forEach(i=>{e.has(i)||n.push(new lE(i))}),n}hc(e){this.Yu=e.ir,this.Zu=ve();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return fs.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class eL{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class tL{constructor(e){this.key=e,this.fc=!1}}class nL{constructor(e,n,i,r,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new ys(a=>I0(a),Ac),this._c=new Map,this.mc=new Set,this.gc=new Be(X.comparator),this.yc=new Map,this.Ic=new Sd,this.Tc={},this.Ec=new Map,this.Ac=hs.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function iL(t,e){const n=dL(t);let i,r;const s=n.wc.get(e);if(s)i=s.targetId,n.sharedClientState.addLocalQueryTarget(i),r=s.view.lc();else{const o=await AN(n.localStore,Zn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,r=await rL(n,e,i,a==="current",o.resumeToken),n.isPrimaryClient&&X0(n.remoteStore,o)}return r}async function rL(t,e,n,i,r){t.Rc=(h,f,d)=>async function(p,m,w,b){let y=m.view.sc(w);y.zi&&(y=await Jm(p.localStore,m.query,!1).then(({documents:I})=>m.view.sc(I,y)));const _=b&&b.targetChanges.get(m.targetId),E=m.view.applyChanges(y,p.isPrimaryClient,_);return iv(p,m.targetId,E.cc),E.snapshot}(t,h,f,d);const s=await Jm(t.localStore,e,!0),o=new ZN(e,s.ir),a=o.sc(s.documents),l=ea.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",r),c=o.applyChanges(a,t.isPrimaryClient,l);iv(t,n,c.cc);const u=new eL(e,n,o);return t.wc.set(e,u),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),c.snapshot}async function sL(t,e){const n=me(t),i=n.wc.get(e),r=n._c.get(i.targetId);if(r.length>1)return n._c.set(i.targetId,r.filter(s=>!Ac(s,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Xh(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),Z0(n.remoteStore,i.targetId),Zh(n,i.targetId)}).catch(Jo)):(Zh(n,i.targetId),await Xh(n.localStore,i.targetId,!0))}async function oL(t,e,n){const i=pL(t);try{const r=await function(s,o){const a=me(s),l=tt.now(),c=o.reduce((f,d)=>f.add(d.key),ve());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let d=ei(),p=ve();return a.Zi.getEntries(f,c).next(m=>{d=m,d.forEach((w,b)=>{b.isValidDocument()||(p=p.add(w))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,d)).next(m=>{u=m;const w=[];for(const b of o){const y=OO(b,u.get(b.key).overlayedDocument);y!=null&&w.push(new Mi(b.key,y,v0(y.value.mapValue),Zt.exists(!0)))}return a.mutationQueue.addMutationBatch(f,l,w,o)}).next(m=>{h=m;const w=m.applyToLocalDocumentSet(u,p);return a.documentOverlayCache.saveOverlays(f,m.batchId,w)})}).then(()=>({batchId:h.batchId,changes:A0(u)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(r.batchId),function(s,o,a){let l=s.Tc[s.currentUser.toKey()];l||(l=new Be(Te)),l=l.insert(o,a),s.Tc[s.currentUser.toKey()]=l}(i,r.batchId,n),await na(i,r.changes),await Nc(i.remoteStore)}catch(r){const s=Dd(r,"Failed to persist write");n.reject(s)}}async function uE(t,e){const n=me(t);try{const i=await IN(n.localStore,e);e.targetChanges.forEach((r,s)=>{const o=n.yc.get(s);o&&($e(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.fc=!0:r.modifiedDocuments.size>0?$e(o.fc):r.removedDocuments.size>0&&($e(o.fc),o.fc=!1))}),await na(n,i,e)}catch(i){await Jo(i)}}function nv(t,e,n){const i=me(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const r=[];i.wc.forEach((s,o)=>{const a=o.view.Mu(e);a.snapshot&&r.push(a.snapshot)}),function(s,o){const a=me(s);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.Mu(o)&&(l=!0)}),l&&Od(a)}(i.eventManager,e),r.length&&i.dc.nu(r),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function aL(t,e,n){const i=me(t);i.sharedClientState.updateQueryState(e,"rejected",n);const r=i.yc.get(e),s=r&&r.key;if(s){let o=new Be(X.comparator);o=o.insert(s,gt.newNoDocument(s,fe.min()));const a=ve().add(s),l=new Pc(fe.min(),new Map,new Be(Te),o,a);await uE(i,l),i.gc=i.gc.remove(s),i.yc.delete(e),Nd(i)}else await Xh(i.localStore,e,!1).then(()=>Zh(i,e,n)).catch(Jo)}async function lL(t,e){const n=me(t),i=e.batch.batchId;try{const r=await TN(n.localStore,e);fE(n,i,null),hE(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await na(n,r)}catch(r){await Jo(r)}}async function cL(t,e,n){const i=me(t);try{const r=await function(s,o){const a=me(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>($e(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(i.localStore,e);fE(i,e,n),hE(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await na(i,r)}catch(r){await Jo(r)}}function hE(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function fE(t,e,n){const i=me(t);let r=i.Tc[i.currentUser.toKey()];if(r){const s=r.get(e);s&&(n?s.reject(n):s.resolve(),r=r.remove(e)),i.Tc[i.currentUser.toKey()]=r}}function Zh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t._c.get(e))t.wc.delete(i),n&&t.dc.Pc(i,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(i=>{t.Ic.containsKey(i)||dE(t,i)})}function dE(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(Z0(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),Nd(t))}function iv(t,e,n){for(const i of n)i instanceof lE?(t.Ic.addReference(i.key,e),uL(t,i)):i instanceof cE?(J("SyncEngine","Document no longer in limbo: "+i.key),t.Ic.removeReference(i.key,e),t.Ic.containsKey(i.key)||dE(t,i.key)):le()}function uL(t,e){const n=e.key,i=n.path.canonicalString();t.gc.get(n)||t.mc.has(i)||(J("SyncEngine","New document in limbo: "+n),t.mc.add(i),Nd(t))}function Nd(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new X(Oe.fromString(e)),i=t.Ac.next();t.yc.set(i,new tL(n)),t.gc=t.gc.insert(n,i),X0(t.remoteStore,new yi(Zn(vd(n.path)),i,"TargetPurposeLimboResolution",fd.ct))}}async function na(t,e,n){const i=me(t),r=[],s=[],o=[];i.wc.isEmpty()||(i.wc.forEach((a,l)=>{o.push(i.Rc(l,e,n).then(c=>{if((c||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(l.targetId,c?.fromCache?"not-current":"current"),c){r.push(c);const u=Ad.Li(l.targetId,c);s.push(u)}}))}),await Promise.all(o),i.dc.nu(r),await async function(a,l){const c=me(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>U.forEach(l,h=>U.forEach(h.Fi,f=>c.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>U.forEach(h.Bi,f=>c.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!Xo(u))throw u;J("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const f=c.Ji.get(h),d=f.snapshotVersion,p=f.withLastLimboFreeSnapshotVersion(d);c.Ji=c.Ji.insert(h,p)}}}(i.localStore,s))}async function hL(t,e){const n=me(t);if(!n.currentUser.isEqual(e)){J("SyncEngine","User change. New user:",e.toKey());const i=await G0(n.localStore,e);n.currentUser=e,function(r,s){r.Ec.forEach(o=>{o.forEach(a=>{a.reject(new z(A.CANCELLED,s))})}),r.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await na(n,i.er)}}function fL(t,e){const n=me(t),i=n.yc.get(e);if(i&&i.fc)return ve().add(i.key);{let r=ve();const s=n._c.get(e);if(!s)return r;for(const o of s){const a=n.wc.get(o);r=r.unionWith(a.view.nc)}return r}}function dL(t){const e=me(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=uE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=fL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=aL.bind(null,e),e.dc.nu=JN.bind(null,e.eventManager),e.dc.Pc=XN.bind(null,e.eventManager),e}function pL(t){const e=me(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=lL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=cL.bind(null,e),e}class rv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Dc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return EN(this.persistence,new _N,e.initialUser,this.serializer)}createPersistence(e){return new yN(Cd.zs,this.serializer)}createSharedClientState(e){return new RN}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class gL{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>nv(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=hL.bind(null,this.syncEngine),await GN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new YN}createDatastore(e){const n=Dc(e.databaseInfo.databaseId),i=(r=e.databaseInfo,new ON(r));var r;return function(s,o,a,l){return new MN(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return n=this.localStore,i=this.datastore,r=e.asyncQueue,s=a=>nv(this.syncEngine,a,0),o=Zm.D()?new Zm:new xN,new FN(n,i,r,s,o);var n,i,r,s,o}createSyncEngine(e,n){return function(i,r,s,o,a,l,c){const u=new nL(i,r,s,o,a,l);return c&&(u.vc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=me(e);J("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await ta(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):Xn("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mL{constructor(e,n,i,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=r,this.user=ft.UNAUTHENTICATED,this.clientId=p0.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async s=>{J("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(i,s=>(J("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new z(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Gn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=Dd(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Bu(t,e){t.asyncQueue.verifyOperationInProgress(),J("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async r=>{i.isEqual(r)||(await G0(e.localStore,r),i=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function sv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await yL(t);J("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(r=>ev(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>ev(e.remoteStore,s)),t._onlineComponents=e}function vL(t){return t.name==="FirebaseError"?t.code===A.FAILED_PRECONDITION||t.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function yL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){J("FirestoreClient","Using user provided OfflineComponentProvider");try{await Bu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!vL(n))throw n;os("Error using user provided cache. Falling back to memory cache: "+n),await Bu(t,new rv)}}else J("FirestoreClient","Using default OfflineComponentProvider"),await Bu(t,new rv);return t._offlineComponents}async function gE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(J("FirestoreClient","Using user provided OnlineComponentProvider"),await sv(t,t._uninitializedComponentsProvider._online)):(J("FirestoreClient","Using default OnlineComponentProvider"),await sv(t,new gL))),t._onlineComponents}function wL(t){return gE(t).then(e=>e.syncEngine)}async function mE(t){const e=await gE(t),n=e.eventManager;return n.onListen=iL.bind(null,e.syncEngine),n.onUnlisten=sL.bind(null,e.syncEngine),n}function _L(t,e,n={}){const i=new Gn;return t.asyncQueue.enqueueAndForget(async()=>function(r,s,o,a,l){const c=new pE({next:h=>{s.enqueueAndForget(()=>oE(r,u));const f=h.docs.has(o);!f&&h.fromCache?l.reject(new z(A.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?l.reject(new z(A.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new aE(vd(o.path),c,{includeMetadataChanges:!0,Ku:!0});return sE(r,u)}(await mE(t),t.asyncQueue,e,n,i)),i.promise}function bL(t,e,n={}){const i=new Gn;return t.asyncQueue.enqueueAndForget(async()=>function(r,s,o,a,l){const c=new pE({next:h=>{s.enqueueAndForget(()=>oE(r,u)),h.fromCache&&a.source==="server"?l.reject(new z(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new aE(o,c,{includeMetadataChanges:!0,Ku:!0});return sE(r,u)}(await mE(t),t.asyncQueue,e,n,i)),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yE(t,e,n){if(!n)throw new z(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function EL(t,e,n,i){if(e===!0&&i===!0)throw new z(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function av(t){if(!X.isDocumentKey(t))throw new z(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function lv(t){if(X.isDocumentKey(t))throw new z(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Lc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":le()}function mn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Lc(t);throw new z(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function TL(t,e){if(e<=0)throw new z(A.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new z(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}EL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=vE((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new z(A.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new z(A.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new z(A.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,i=e.experimentalLongPollingOptions,n.timeoutSeconds===i.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,i}}class Mc{constructor(e,n,i,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new z(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new z(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cv(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new KD;switch(n.type){case"firstParty":return new YD(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new z(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ov.get(e);n&&(J("ComponentProvider","Removing Datastore"),ov.delete(e),n.terminate())}(this),Promise.resolve()}}function IL(t,e,n,i={}){var r;const s=(t=mn(t,Mc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&os("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),i.mockUserToken){let a,l;if(typeof i.mockUserToken=="string")a=i.mockUserToken,l=ft.MOCK_USER;else{a=w_(i.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=i.mockUserToken.sub||i.mockUserToken.user_id;if(!c)throw new z(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ft(c)}t._authCredentials=new WD(new d0(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ei(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Rt(this.firestore,e,this._key)}}class ii{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new ii(this.firestore,e,this._query)}}class Ei extends ii{constructor(e,n,i){super(e,n,vd(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Rt(this.firestore,null,new X(e))}withConverter(e){return new Ei(this.firestore,e,this._path)}}function aU(t,e,...n){if(t=Le(t),yE("collection","path",e),t instanceof Mc){const i=Oe.fromString(e,...n);return lv(i),new Ei(t,null,i)}{if(!(t instanceof Rt||t instanceof Ei))throw new z(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Oe.fromString(e,...n));return lv(i),new Ei(t.firestore,null,i)}}function Ld(t,e,...n){if(t=Le(t),arguments.length===1&&(e=p0.A()),yE("doc","path",e),t instanceof Mc){const i=Oe.fromString(e,...n);return av(i),new Rt(t,null,new X(i))}{if(!(t instanceof Rt||t instanceof Ei))throw new z(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Oe.fromString(e,...n));return av(i),new Rt(t.firestore,t instanceof Ei?t.converter:null,new X(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SL{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Y0(this,"async_queue_retry"),this.Xc=()=>{const n=Vu();n&&J("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=Vu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=Vu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new Gn;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Xo(e))throw e;J("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(i=>{this.Wc=i,this.Hc=!1;const r=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(i);throw Xn("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.Hc=!1,i))));return this.Gc=n,n}enqueueAfterDelay(e,n,i){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const r=Pd.createAndSchedule(this,e,n,i,s=>this.na(s));return this.zc.push(r),r}Zc(){this.Wc&&le()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}class Ir extends Mc{constructor(e,n,i,r){super(e,n,i,r),this.type="firestore",this._queue=new SL,this._persistenceKey=r?.name||"[DEFAULT]"}_terminate(){return this._firestoreClient||wE(this),this._firestoreClient.terminate()}}function CL(t,e){const n=typeof t=="object"?t:ic(),i=typeof t=="string"?t:"(default)",r=Pi(n,"firestore").getImmediate({identifier:i});if(!r._initialized){const s=m_("firestore");s&&IL(r,...s)}return r}function Md(t){return t._firestoreClient||wE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function wE(t){var e,n,i;const r=t._freezeSettings(),s=function(o,a,l,c){return new lO(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,vE(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new mL(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=r.cache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ds(bt.fromBase64String(e))}catch(n){throw new z(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ds(bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new mt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Te(this._lat,e._lat)||Te(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AL=/^__.*__$/;class kL{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new Mi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Zo(e,this.data,n,this.fieldTransforms)}}class _E{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new Mi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function bE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw le()}}class Fd{constructor(e,n,i,r,s,o){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=r,s===void 0&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Fd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.aa({path:i,la:!1});return r.fa(e),r}da(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.aa({path:i,la:!1});return r.ua(),r}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return kl(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(bE(this.ca)&&AL.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class RL{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||Dc(e)}ya(e,n,i,r=!1){return new Fd({ca:e,methodName:n,ga:i,path:mt.emptyPath(),la:!1,ma:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ra(t){const e=t._freezeSettings(),n=Dc(t._databaseId);return new RL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function EE(t,e,n,i,r,s={}){const o=t.ya(s.merge||s.mergeFields?2:0,e,n,r);Vd("Data must be an object, but it was:",o,i);const a=IE(i,o);let l,c;if(s.merge)l=new qt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const h of s.mergeFields){const f=ef(e,h,n);if(!o.contains(f))throw new z(A.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);CE(u,f)||u.push(f)}l=new qt(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new kL(new Mt(a),l,c)}class Fc extends ia{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Fc}}class Ud extends ia{_toFieldTransform(e){return new M0(e.path,new Ao)}isEqual(e){return e instanceof Ud}}class xL extends ia{constructor(e,n){super(e),this.Ia=n}_toFieldTransform(e){const n=new xo(e.serializer,P0(e.serializer,this.Ia));return new M0(e.path,n)}isEqual(e){return this===e}}function PL(t,e,n,i){const r=t.ya(1,e,n);Vd("Data must be an object, but it was:",r,i);const s=[],o=Mt.empty();br(i,(l,c)=>{const u=Bd(e,l,n);c=Le(c);const h=r.da(u);if(c instanceof Fc)s.push(u);else{const f=sa(c,h);f!=null&&(s.push(u),o.set(u,f))}});const a=new qt(s);return new _E(o,a,r.fieldTransforms)}function DL(t,e,n,i,r,s){const o=t.ya(1,e,n),a=[ef(e,i,n)],l=[r];if(s.length%2!=0)throw new z(A.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(ef(e,s[f])),l.push(s[f+1]);const c=[],u=Mt.empty();for(let f=a.length-1;f>=0;--f)if(!CE(c,a[f])){const d=a[f];let p=l[f];p=Le(p);const m=o.da(d);if(p instanceof Fc)c.push(d);else{const w=sa(p,m);w!=null&&(c.push(d),u.set(d,w))}}const h=new qt(c);return new _E(u,h,o.fieldTransforms)}function TE(t,e,n,i=!1){return sa(n,t.ya(i?4:3,e))}function sa(t,e){if(SE(t=Le(t)))return Vd("Unsupported field value:",e,t),IE(t,e);if(t instanceof ia)return function(n,i){if(!bE(i.ca))throw i._a(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i._a(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,i){const r=[];let s=0;for(const o of n){let a=sa(o,i.wa(s));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),s++}return{arrayValue:{values:r}}}(t,e)}return function(n,i){if((n=Le(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return P0(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=tt.fromDate(n);return{timestampValue:Cl(i.serializer,r)}}if(n instanceof tt){const r=new tt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Cl(i.serializer,r)}}if(n instanceof $d)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ds)return{bytesValue:q0(i.serializer,n._byteString)};if(n instanceof Rt){const r=i.databaseId,s=n.firestore._databaseId;if(!s.isEqual(r))throw i._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Id(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i._a(`Unsupported field value: ${Lc(n)}`)}(t,e)}function IE(t,e){const n={};return g0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):br(t,(i,r)=>{const s=sa(r,e.ha(i));s!=null&&(n[i]=s)}),{mapValue:{fields:n}}}function SE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof tt||t instanceof $d||t instanceof ds||t instanceof Rt||t instanceof ia)}function Vd(t,e,n){if(!SE(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const i=Lc(n);throw i==="an object"?e._a(t+" a custom object"):e._a(t+" "+i)}}function ef(t,e,n){if((e=Le(e))instanceof $c)return e._internalPath;if(typeof e=="string")return Bd(t,e);throw kl("Field path arguments must be of type string or ",t,!1,void 0,n)}const OL=new RegExp("[~\\*/\\[\\]]");function Bd(t,e,n){if(e.search(OL)>=0)throw kl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new $c(...e.split("."))._internalPath}catch{throw kl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function kl(t,e,n,i,r){const s=i&&!i.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${i}`),o&&(l+=` in document ${r}`),l+=")"),new z(A.INVALID_ARGUMENT,a+t+l)}function CE(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e,n,i,r,s){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new NL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Uc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class NL extends qd{data(){return super.data()}}function Uc(t,e){return typeof e=="string"?Bd(t,e):e instanceof $c?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LL(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class jd{}class Vc extends jd{}function lU(t,e,...n){let i=[];e instanceof jd&&i.push(e),i=i.concat(n),function(r){const s=r.filter(a=>a instanceof Hd).length,o=r.filter(a=>a instanceof Bc).length;if(s>1||s>0&&o>0)throw new z(A.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const r of i)t=r._apply(t);return t}class Bc extends Vc{constructor(e,n,i){super(),this._field=e,this._op=n,this._value=i,this.type="where"}static _create(e,n,i){return new Bc(e,n,i)}_apply(e){const n=this._parse(e);return AE(e._query,n),new ii(e.firestore,e.converter,Kh(e._query,n))}_parse(e){const n=ra(e.firestore);return function(r,s,o,a,l,c,u){let h;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new z(A.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){hv(u,c);const f=[];for(const d of u)f.push(uv(a,r,d));h={arrayValue:{values:f}}}else h=uv(a,r,u)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||hv(u,c),h=TE(o,s,u,c==="in"||c==="not-in");return Ye.create(l,c,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function cU(t,e,n){const i=e,r=Uc("where",t);return Bc._create(r,i,n)}class Hd extends jd{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Hd(e,n)}_parse(e){const n=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return n.length===1?n[0]:gn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,r){let s=i;const o=r.getFlattenedFilters();for(const a of o)AE(s,a),s=Kh(s,a)}(e._query,n),new ii(e.firestore,e.converter,Kh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class zd extends Vc{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new zd(e,n)}_apply(e){const n=function(i,r,s){if(i.startAt!==null)throw new z(A.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new z(A.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Yr(r,s);return function(a,l){if(yd(a)===null){const c=Cc(a);c!==null&&kE(a,c,l.field)}}(i,o),o}(e._query,this._field,this._direction);return new ii(e.firestore,e.converter,function(i,r){const s=i.explicitOrderBy.concat([r]);return new Er(i.path,i.collectionGroup,s,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function uU(t,e="asc"){const n=e,i=Uc("orderBy",t);return zd._create(i,n)}class Kd extends Vc{constructor(e,n,i){super(),this.type=e,this._limit=n,this._limitType=i}static _create(e,n,i){return new Kd(e,n,i)}_apply(e){return new ii(e.firestore,e.converter,Sl(e._query,this._limit,this._limitType))}}function hU(t){return TL("limit",t),Kd._create("limit",t,"F")}class Wd extends Vc{constructor(e,n,i){super(),this.type=e,this._docOrFields=n,this._inclusive=i}static _create(e,n,i){return new Wd(e,n,i)}_apply(e){const n=ML(e,this.type,this._docOrFields,this._inclusive);return new ii(e.firestore,e.converter,function(i,r){return new Er(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,r,i.endAt)}(e._query,n))}}function fU(...t){return Wd._create("startAfter",t,!1)}function ML(t,e,n,i){if(n[0]=Le(n[0]),n[0]instanceof qd)return function(r,s,o,a,l){if(!a)throw new z(A.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const c=[];for(const u of ir(r))if(u.field.isKeyField())c.push(Il(s,a.key));else{const h=a.data.field(u.field);if(Sc(h))throw new z(A.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+u.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const f=u.field.canonicalString();throw new z(A.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}c.push(h)}return new us(c,l)}(t._query,t.firestore._databaseId,e,n[0]._document,i);{const r=ra(t.firestore);return function(s,o,a,l,c,u){const h=s.explicitOrderBy;if(c.length>h.length)throw new z(A.INVALID_ARGUMENT,`Too many arguments provided to ${l}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let d=0;d<c.length;d++){const p=c[d];if(h[d].field.isKeyField()){if(typeof p!="string")throw new z(A.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${l}(), but got a ${typeof p}`);if(!wd(s)&&p.indexOf("/")!==-1)throw new z(A.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${l}() must be a plain document ID, but '${p}' contains a slash.`);const m=s.path.child(Oe.fromString(p));if(!X.isDocumentKey(m))throw new z(A.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${l}() must result in a valid document path, but '${m}' is not because it contains an odd number of segments.`);const w=new X(m);f.push(Il(o,w))}else{const m=TE(a,l,p);f.push(m)}}return new us(f,u)}(t._query,t.firestore._databaseId,r,e,n,i)}}function uv(t,e,n){if(typeof(n=Le(n))=="string"){if(n==="")throw new z(A.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!wd(e)&&n.indexOf("/")!==-1)throw new z(A.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=e.path.child(Oe.fromString(n));if(!X.isDocumentKey(i))throw new z(A.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Il(t,new X(i))}if(n instanceof Rt)return Il(t,n._key);throw new z(A.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Lc(n)}.`)}function hv(t,e){if(!Array.isArray(t)||t.length===0)throw new z(A.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function AE(t,e){if(e.isInequality()){const i=Cc(t),r=e.field;if(i!==null&&!i.isEqual(r))throw new z(A.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${i.toString()}' and '${r.toString()}'`);const s=yd(t);s!==null&&kE(t,r,s)}const n=function(i,r){for(const s of i)for(const o of s.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new z(A.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(A.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function kE(t,e,n){if(!n.isEqual(e))throw new z(A.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class $L{convertValue(e,n="none"){switch(dr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(fr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw le()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const i={};return br(e,(r,s)=>{i[r]=this.convertValue(s,n)}),i}convertGeoPoint(e){return new $d(Ge(e.latitude),Ge(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=dd(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(Io(e));default:return null}}convertTimestamp(e){const n=Ci(e);return new tt(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=Oe.fromString(e);$e(W0(i));const r=new So(i.get(1),i.get(3)),s=new X(i.popFirst(5));return r.isEqual(n)||Xn(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RE(t,e,n){let i;return i=t?t.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class xE extends qd{constructor(e,n,i,r,s,o){super(e,n,i,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new qa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(Uc("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class qa extends xE{data(e={}){return super.data(e)}}class FL{constructor(e,n,i,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new $s(r.hasPendingWrites,r.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new qa(this._firestore,this._userDataWriter,i.key,i,new $s(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let s=0;return i._snapshot.docChanges.map(o=>{const a=new qa(i._firestore,i._userDataWriter,o.doc.key,o.doc,new $s(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new qa(i._firestore,i._userDataWriter,o.doc.key,o.doc,new $s(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,c=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),c=s.indexOf(o.doc.key)),{type:UL(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function UL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return le()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dU(t){t=mn(t,Rt);const e=mn(t.firestore,Ir);return _L(Md(e),t._key).then(n=>VL(e,t,n))}class PE extends $L{constructor(e){super(),this.firestore=e}convertBytes(e){return new ds(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Rt(this.firestore,null,n)}}function pU(t){t=mn(t,ii);const e=mn(t.firestore,Ir),n=Md(e),i=new PE(e);return LL(t._query),bL(n,t._query).then(r=>new FL(e,i,t,r))}function gU(t,e,n){t=mn(t,Rt);const i=mn(t.firestore,Ir),r=RE(t.converter,e);return qc(i,[EE(ra(i),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Zt.none())])}function DE(t,e,n,...i){t=mn(t,Rt);const r=mn(t.firestore,Ir),s=ra(r);let o;return o=typeof(e=Le(e))=="string"||e instanceof $c?DL(s,"updateDoc",t._key,e,n,i):PL(s,"updateDoc",t._key,e),qc(r,[o.toMutation(t._key,Zt.exists(!0))])}function mU(t){return qc(mn(t.firestore,Ir),[new _d(t._key,Zt.none())])}function vU(t,e){const n=mn(t.firestore,Ir),i=Ld(t),r=RE(t.converter,e);return qc(n,[EE(ra(t.firestore),"addDoc",i._key,r,t.converter!==null,{}).toMutation(i._key,Zt.exists(!1))]).then(()=>i)}function qc(t,e){return function(n,i){const r=new Gn;return n.asyncQueue.enqueueAndForget(async()=>oL(await wL(n),i,r)),r.promise}(Md(t),e)}function VL(t,e,n){const i=n.docs.get(e._key),r=new PE(t);return new xE(t,r,e._key,i,new $s(n.hasPendingWrites,n.fromCache),e.converter)}function yU(){return new Ud("serverTimestamp")}function wU(t){return new xL("increment",t)}(function(t,e=!0){(function(n){vs=n})(yr),dn(new tn("firestore",(n,{instanceIdentifier:i,options:r})=>{const s=n.getProvider("app").getImmediate(),o=new Ir(new GD(n.getProvider("auth-internal")),new XD(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new z(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new So(a.options.projectId,l)}(s,i),s);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),$t(xm,"3.13.0",t),$t(xm,"3.13.0","esm2017")})();var BL="firebase",qL="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$t(BL,qL,"app");const jL=(t,e)=>e.some(n=>t instanceof n);let fv,dv;function HL(){return fv||(fv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zL(){return dv||(dv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const OE=new WeakMap,tf=new WeakMap,NE=new WeakMap,qu=new WeakMap,Gd=new WeakMap;function KL(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ti(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&OE.set(n,t)}).catch(()=>{}),Gd.set(e,t),e}function WL(t){if(tf.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});tf.set(t,e)}let nf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return tf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||NE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ti(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function GL(t){nf=t(nf)}function QL(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(ju(this),e,...n);return NE.set(i,e.sort?e.sort():[e]),Ti(i)}:zL().includes(t)?function(...e){return t.apply(ju(this),e),Ti(OE.get(this))}:function(...e){return Ti(t.apply(ju(this),e))}}function YL(t){return typeof t=="function"?QL(t):(t instanceof IDBTransaction&&WL(t),jL(t,HL())?new Proxy(t,nf):t)}function Ti(t){if(t instanceof IDBRequest)return KL(t);if(qu.has(t))return qu.get(t);const e=YL(t);return e!==t&&(qu.set(t,e),Gd.set(e,t)),e}const ju=t=>Gd.get(t);function JL(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=Ti(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Ti(o.result),l.oldVersion,l.newVersion,Ti(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const XL=["get","getKey","getAll","getAllKeys","count"],ZL=["put","add","delete","clear"],Hu=new Map;function pv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Hu.get(e))return Hu.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=ZL.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||XL.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return Hu.set(e,s),s}GL(t=>({...t,get:(e,n,i)=>pv(e,n)||t.get(e,n,i),has:(e,n)=>!!pv(e,n)||t.has(e,n)}));const LE="@firebase/installations",Qd="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME=1e4,$E=`w:${Qd}`,FE="FIS_v2",eM="https://firebaseinstallations.googleapis.com/v1",tM=60*60*1e3,nM="installations",iM="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rM={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},pr=new vr(nM,iM,rM);function UE(t){return t instanceof rn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VE({projectId:t}){return`${eM}/projects/${t}/installations`}function BE(t){return{token:t.token,requestStatus:2,expiresIn:oM(t.expiresIn),creationTime:Date.now()}}async function qE(t,e){const i=(await e.json()).error;return pr.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function jE({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function sM(t,{refreshToken:e}){const n=jE(t);return n.append("Authorization",aM(e)),n}async function HE(t){const e=await t();return e.status>=500&&e.status<600?t():e}function oM(t){return Number(t.replace("s","000"))}function aM(t){return`${FE} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lM({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=VE(t),r=jE(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&r.append("x-firebase-client",c)}const o={fid:n,authVersion:FE,appId:t.appId,sdkVersion:$E},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await HE(()=>fetch(i,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:BE(c.authToken)}}else throw await qE("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zE(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cM(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uM=/^[cdef][\w-]{21}$/,rf="";function hM(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=fM(t);return uM.test(n)?n:rf}catch{return rf}}function fM(t){return cM(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE=new Map;function WE(t,e){const n=jc(t);GE(n,e),dM(n,e)}function GE(t,e){const n=KE.get(t);if(n)for(const i of n)i(e)}function dM(t,e){const n=pM();n&&n.postMessage({key:t,fid:e}),gM()}let Qi=null;function pM(){return!Qi&&"BroadcastChannel"in self&&(Qi=new BroadcastChannel("[Firebase] FID Change"),Qi.onmessage=t=>{GE(t.data.key,t.data.fid)}),Qi}function gM(){KE.size===0&&Qi&&(Qi.close(),Qi=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mM="firebase-installations-database",vM=1,gr="firebase-installations-store";let zu=null;function Yd(){return zu||(zu=JL(mM,vM,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(gr)}}})),zu}async function Rl(t,e){const n=jc(t),r=(await Yd()).transaction(gr,"readwrite"),s=r.objectStore(gr),o=await s.get(n);return await s.put(e,n),await r.done,(!o||o.fid!==e.fid)&&WE(t,e.fid),e}async function QE(t){const e=jc(t),i=(await Yd()).transaction(gr,"readwrite");await i.objectStore(gr).delete(e),await i.done}async function Hc(t,e){const n=jc(t),r=(await Yd()).transaction(gr,"readwrite"),s=r.objectStore(gr),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&WE(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jd(t){let e;const n=await Hc(t.appConfig,i=>{const r=yM(i),s=wM(t,r);return e=s.registrationPromise,s.installationEntry});return n.fid===rf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function yM(t){const e=t||{fid:hM(),registrationStatus:0};return YE(e)}function wM(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(pr.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=_M(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:bM(t)}:{installationEntry:e}}async function _M(t,e){try{const n=await lM(t,e);return Rl(t.appConfig,n)}catch(n){throw UE(n)&&n.customData.serverCode===409?await QE(t.appConfig):await Rl(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function bM(t){let e=await gv(t.appConfig);for(;e.registrationStatus===1;)await zE(100),e=await gv(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await Jd(t);return i||n}return e}function gv(t){return Hc(t,e=>{if(!e)throw pr.create("installation-not-found");return YE(e)})}function YE(t){return EM(t)?{fid:t.fid,registrationStatus:0}:t}function EM(t){return t.registrationStatus===1&&t.registrationTime+ME<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TM({appConfig:t,heartbeatServiceProvider:e},n){const i=IM(t,n),r=sM(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&r.append("x-firebase-client",c)}const o={installation:{sdkVersion:$E,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await HE(()=>fetch(i,a));if(l.ok){const c=await l.json();return BE(c)}else throw await qE("Generate Auth Token",l)}function IM(t,{fid:e}){return`${VE(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xd(t,e=!1){let n;const i=await Hc(t.appConfig,s=>{if(!JE(s))throw pr.create("not-registered");const o=s.authToken;if(!e&&AM(o))return s;if(o.requestStatus===1)return n=SM(t,e),s;{if(!navigator.onLine)throw pr.create("app-offline");const a=RM(s);return n=CM(t,a),a}});return n?await n:i.authToken}async function SM(t,e){let n=await mv(t.appConfig);for(;n.authToken.requestStatus===1;)await zE(100),n=await mv(t.appConfig);const i=n.authToken;return i.requestStatus===0?Xd(t,e):i}function mv(t){return Hc(t,e=>{if(!JE(e))throw pr.create("not-registered");const n=e.authToken;return xM(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function CM(t,e){try{const n=await TM(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await Rl(t.appConfig,i),n}catch(n){if(UE(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await QE(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Rl(t.appConfig,i)}throw n}}function JE(t){return t!==void 0&&t.registrationStatus===2}function AM(t){return t.requestStatus===2&&!kM(t)}function kM(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+tM}function RM(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function xM(t){return t.requestStatus===1&&t.requestTime+ME<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PM(t){const e=t,{installationEntry:n,registrationPromise:i}=await Jd(e);return i?i.catch(console.error):Xd(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DM(t,e=!1){const n=t;return await OM(n),(await Xd(n,e)).token}async function OM(t){const{registrationPromise:e}=await Jd(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NM(t){if(!t||!t.options)throw Ku("App Configuration");if(!t.name)throw Ku("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ku(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ku(t){return pr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE="installations",LM="installations-internal",MM=t=>{const e=t.getProvider("app").getImmediate(),n=NM(e),i=Pi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},$M=t=>{const e=t.getProvider("app").getImmediate(),n=Pi(e,XE).getImmediate();return{getId:()=>PM(n),getToken:r=>DM(n,r)}};function FM(){dn(new tn(XE,MM,"PUBLIC")),dn(new tn(LM,$M,"PRIVATE"))}FM();$t(LE,Qd);$t(LE,Qd,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl="analytics",UM="firebase_id",VM="origin",BM=60*1e3,qM="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Zd="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft=new nc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jM={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},jt=new vr("analytics","Analytics",jM);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HM(t){if(!t.startsWith(Zd)){const e=jt.create("invalid-gtag-resource",{gtagURL:t});return Ft.warn(e.message),""}return t}function ZE(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function zM(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function KM(t,e){const n=zM("firebase-js-sdk-policy",{createScriptURL:HM}),i=document.createElement("script"),r=`${Zd}?l=${t}&id=${e}`;i.src=n?n?.createScriptURL(r):r,i.async=!0,document.head.appendChild(i)}function WM(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function GM(t,e,n,i,r,s){const o=i[r];try{if(o)await e[o];else{const l=(await ZE(n)).find(c=>c.measurementId===r);l&&await e[l.appId]}}catch(a){Ft.error(a)}t("config",r,s)}async function QM(t,e,n,i,r){try{let s=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await ZE(n);for(const l of o){const c=a.find(h=>h.measurementId===l),u=c&&e[c.appId];if(u)s.push(u);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",i,r||{})}catch(s){Ft.error(s)}}function YM(t,e,n,i){async function r(s,...o){try{if(s==="event"){const[a,l]=o;await QM(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await GM(t,e,n,i,a,l)}else if(s==="consent"){const[a]=o;t("consent","update",a)}else if(s==="get"){const[a,l,c]=o;t("get",a,l,c)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){Ft.error(a)}}return r}function JM(t,e,n,i,r){let s=function(...o){window[i].push(arguments)};return window[r]&&typeof window[r]=="function"&&(s=window[r]),window[r]=YM(s,t,e,n),{gtagCore:s,wrappedGtag:window[r]}}function XM(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Zd)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZM=30,e$=1e3;class t${constructor(e={},n=e$){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const eT=new t$;function n$(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function i$(t){var e;const{appId:n,apiKey:i}=t,r={method:"GET",headers:n$(i)},s=qM.replace("{app-id}",n),o=await fetch(s,r);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw jt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function r$(t,e=eT,n){const{appId:i,apiKey:r,measurementId:s}=t.options;if(!i)throw jt.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:i};throw jt.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new a$;return setTimeout(async()=>{a.abort()},BM),tT({appId:i,apiKey:r,measurementId:s},o,a,e)}async function tT(t,{throttleEndTimeMillis:e,backoffCount:n},i,r=eT){var s;const{appId:o,measurementId:a}=t;try{await s$(i,e)}catch(l){if(a)return Ft.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:o,measurementId:a};throw l}try{const l=await i$(t);return r.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!o$(c)){if(r.deleteThrottleMetadata(o),a)return Ft.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:o,measurementId:a};throw l}const u=Number((s=c?.customData)===null||s===void 0?void 0:s.httpStatus)===503?zg(n,r.intervalMillis,ZM):zg(n,r.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return r.setThrottleMetadata(o,h),Ft.debug(`Calling attemptFetch again in ${u} millis`),tT(t,h,i,r)}}function s$(t,e){return new Promise((n,i)=>{const r=Math.max(e-Date.now(),0),s=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(s),i(jt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function o$(t){if(!(t instanceof rn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class a${constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function l$(t,e,n,i,r){if(r&&r.global){t("event",n,i);return}else{const s=await e,o=Object.assign(Object.assign({},i),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c$(){if(b_())try{await E_()}catch(t){return Ft.warn(jt.create("indexeddb-unavailable",{errorInfo:t?.toString()}).message),!1}else return Ft.warn(jt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function u$(t,e,n,i,r,s,o){var a;const l=r$(t);l.then(d=>{n[d.measurementId]=d.appId,t.options.measurementId&&d.measurementId!==t.options.measurementId&&Ft.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${d.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(d=>Ft.error(d)),e.push(l);const c=c$().then(d=>{if(d)return i.getId()}),[u,h]=await Promise.all([l,c]);XM(s)||KM(s,u.measurementId),r("js",new Date);const f=(a=o?.config)!==null&&a!==void 0?a:{};return f[VM]="firebase",f.update=!0,h!=null&&(f[UM]=h),r("config",u.measurementId,f),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h${constructor(e){this.app=e}_delete(){return delete Xs[this.app.options.appId],Promise.resolve()}}let Xs={},vv=[];const yv={};let Wu="dataLayer",f$="gtag",wv,nT,_v=!1;function d$(){const t=[];if(__()&&t.push("This is a browser extension environment."),hR()||t.push("Cookies are not available."),t.length>0){const e=t.map((i,r)=>`(${r+1}) ${i}`).join(" "),n=jt.create("invalid-analytics-context",{errorInfo:e});Ft.warn(n.message)}}function p$(t,e,n){d$();const i=t.options.appId;if(!i)throw jt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ft.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw jt.create("no-api-key");if(Xs[i]!=null)throw jt.create("already-exists",{id:i});if(!_v){WM(Wu);const{wrappedGtag:s,gtagCore:o}=JM(Xs,vv,yv,Wu,f$);nT=s,wv=o,_v=!0}return Xs[i]=u$(t,vv,yv,e,wv,Wu,n),new h$(t)}function g$(t=ic()){t=Le(t);const e=Pi(t,xl);return e.isInitialized()?e.getImmediate():m$(t)}function m$(t,e={}){const n=Pi(t,xl);if(n.isInitialized()){const r=n.getImmediate();if(uo(e,n.getOptions()))return r;throw jt.create("already-initialized")}return n.initialize({options:e})}function v$(t,e,n,i){t=Le(t),l$(nT,Xs[t.app.options.appId],e,n,i).catch(r=>Ft.error(r))}const bv="@firebase/analytics",Ev="0.10.0";function y$(){dn(new tn(xl,(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return p$(i,r,n)},"PUBLIC")),dn(new tn("analytics-internal",t,"PRIVATE")),$t(bv,Ev),$t(bv,Ev,"esm2017");function t(e){try{const n=e.getProvider(xl).getImmediate();return{logEvent:(i,r,s)=>v$(n,i,r,s)}}catch(n){throw jt.create("interop-component-reg-failed",{reason:n})}}}y$();function w$(t){return hf()?(jv(t),!0):!1}const iT=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const _U=t=>t!=null,_$=Object.prototype.toString,b$=t=>_$.call(t)==="[object Object]",Pl=()=>{},bU=E$();function E$(){var t,e;return iT&&((t=window?.navigator)==null?void 0:t.userAgent)&&(/iP(?:ad|hone|od)/.test(window.navigator.userAgent)||((e=window?.navigator)==null?void 0:e.maxTouchPoints)>2&&/iPad|Macintosh/.test(window?.navigator.userAgent))}function T$(t,e){function n(...i){return new Promise((r,s)=>{Promise.resolve(t(()=>e.apply(this,i),{fn:e,thisArg:this,args:i})).then(r).catch(s)})}return n}const rT=t=>t();function I$(t=rT){const e=de(!0);function n(){e.value=!1}function i(){e.value=!0}const r=(...s)=>{e.value&&t(...s)};return{isActive:zl(e),pause:n,resume:i,eventFilter:r}}function sf(t,e=!1,n="Timeout"){return new Promise((i,r)=>{setTimeout(e?()=>r(n):i,t)})}function S$(t){return Ke()}function Tv(t){return Array.isArray(t)?t:[t]}function EU(...t){if(t.length!==1)return ay(...t);const e=t[0];return typeof e=="function"?zl(ZT(()=>({get:e,set:Pl}))):de(e)}function C$(t,e,n={}){const{eventFilter:i=rT,...r}=n;return xe(t,T$(i,e),r)}function A$(t,e,n={}){const{eventFilter:i,...r}=n,{eventFilter:s,pause:o,resume:a,isActive:l}=I$(i);return{stop:C$(t,e,{...r,eventFilter:s}),pause:o,resume:a,isActive:l}}function k$(t,e=!0,n){S$()?Pn(t,n):e?t():Ht(t)}function of(t,e=!1){function n(h,{flush:f="sync",deep:d=!1,timeout:p,throwOnTimeout:m}={}){let w=null;const y=[new Promise(_=>{w=xe(t,E=>{h(E)!==e&&(w?w():Ht(()=>w?.()),_(E))},{flush:f,deep:d,immediate:!0})})];return p!=null&&y.push(sf(p,m).then(()=>pi(t)).finally(()=>w?.())),Promise.race(y)}function i(h,f){if(!Fe(h))return n(E=>E===h,f);const{flush:d="sync",deep:p=!1,timeout:m,throwOnTimeout:w}=f??{};let b=null;const _=[new Promise(E=>{b=xe([t,h],([I,$])=>{e!==(I===$)&&(b?b():Ht(()=>b?.()),E(I))},{flush:d,deep:p,immediate:!0})})];return m!=null&&_.push(sf(m,w).then(()=>pi(t)).finally(()=>(b?.(),pi(t)))),Promise.race(_)}function r(h){return n(f=>!!f,h)}function s(h){return i(null,h)}function o(h){return i(void 0,h)}function a(h){return n(Number.isNaN,h)}function l(h,f){return n(d=>{const p=Array.from(d);return p.includes(h)||p.includes(pi(h))},f)}function c(h){return u(1,h)}function u(h=1,f){let d=-1;return n(()=>(d+=1,d>=h),f)}return Array.isArray(pi(t))?{toMatch:n,toContains:l,changed:c,changedTimes:u,get not(){return of(t,!e)}}:{toMatch:n,toBe:i,toBeTruthy:r,toBeNull:s,toBeNaN:a,toBeUndefined:o,changed:c,changedTimes:u,get not(){return of(t,!e)}}}function R$(t){return of(t)}const Dl=iT?window:void 0;function x$(t){var e;const n=pi(t);return(e=n?.$el)!=null?e:n}function Iv(...t){let e,n,i,r;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,i,r]=t,e=Dl):[e,n,i,r]=t,!e)return Pl;n=Tv(n),i=Tv(i);const s=[],o=()=>{s.forEach(u=>u()),s.length=0},a=(u,h,f,d)=>(u.addEventListener(h,f,d),()=>u.removeEventListener(h,f,d)),l=xe(()=>[x$(e),pi(r)],([u,h])=>{if(o(),!u)return;const f=b$(h)?{...h}:h;s.push(...n.flatMap(d=>i.map(p=>a(u,d,p,f))))},{immediate:!0,flush:"post"}),c=()=>{l(),o()};return w$(c),c}function TU(t,e,n){const{immediate:i=!0,delay:r=0,onError:s=Pl,onSuccess:o=Pl,resetOnExecute:a=!0,shallow:l=!0,throwError:c}=n??{},u=l?Ka(e):de(e),h=de(!1),f=de(!1),d=Ka(void 0);async function p(b=0,...y){a&&(u.value=e),d.value=void 0,h.value=!1,f.value=!0,b>0&&await sf(b);const _=typeof t=="function"?t(...y):t;try{const E=await _;u.value=E,h.value=!0,o(E)}catch(E){if(d.value=E,s(E),c)throw E}finally{f.value=!1}return u.value}i&&p(r);const m={state:u,isReady:h,isLoading:f,error:d,execute:p};function w(){return new Promise((b,y)=>{R$(f).toBe(!1).then(()=>b(m)).catch(y)})}return{...m,then(b,y){return w().then(b,y)}}}const Ia=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Sa="__vueuse_ssr_handlers__",P$=D$();function D$(){return Sa in Ia||(Ia[Sa]=Ia[Sa]||{}),Ia[Sa]}function O$(t,e){return P$[t]||e}function N$(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}const sT={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},Sv="vueuse-storage";function L$(t,e,n,i={}){var r;const{flush:s="pre",deep:o=!0,listenToStorageChanges:a=!0,writeDefaults:l=!0,mergeDefaults:c=!1,shallow:u,window:h=Dl,eventFilter:f,onError:d=N=>{console.error(N)},initOnMounted:p}=i,m=(u?Ka:de)(e);if(!n)try{n=O$("getDefaultStorage",()=>{var N;return(N=Dl)==null?void 0:N.localStorage})()}catch(N){d(N)}if(!n)return m;const w=pi(e),b=N$(w),y=(r=i.serializer)!=null?r:sT[b],{pause:_,resume:E}=A$(m,()=>$(m.value),{flush:s,deep:o,eventFilter:f});h&&a&&k$(()=>{n instanceof Storage?Iv(h,"storage",x):Iv(h,Sv,C),p&&x()}),p||x();function I(N,K){if(h){const M={key:t,oldValue:N,newValue:K,storageArea:n};h.dispatchEvent(n instanceof Storage?new StorageEvent("storage",M):new CustomEvent(Sv,{detail:M}))}}function $(N){try{const K=n.getItem(t);if(N==null)I(K,null),n.removeItem(t);else{const M=y.write(N);K!==M&&(n.setItem(t,M),I(K,M))}}catch(K){d(K)}}function L(N){const K=N?N.newValue:n.getItem(t);if(K==null)return l&&w!=null&&n.setItem(t,y.write(w)),w;if(!N&&c){const M=y.read(K);return typeof c=="function"?c(M,w):b==="object"&&!Array.isArray(M)?{...w,...M}:M}else return typeof K!="string"?K:y.read(K)}function x(N){if(!(N&&N.storageArea!==n)){if(N&&N.key==null){m.value=w;return}if(!(N&&N.key!==t)){_();try{N?.newValue!==y.write(m.value)&&(m.value=L(N))}catch(K){d(K)}finally{N?Ht(E):E()}}}}function C(N){x(N.detail)}return m}function M$(t,e,n={}){const{window:i=Dl}=n;return L$(t,e,i?.localStorage,n)}const oT=SC("auth",()=>{const t=M$("auth/user",null,{serializer:sT.object}),e=O(()=>!!t.value),n=O(()=>t.value?.uid||null);return{user:t,isAuthenticated:e,uid:n,setUser:s=>{console.log("userData: ",s),t.value=s,s?t.value={uid:s.uid,photoURL:s.photoURL,displayName:s.displayName,email:s.email,emailVerified:s.emailVerified}:t.value=null},hasOwnContent:s=>e.value?n.value===s:!1}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT="firebasestorage.googleapis.com",$$="storageBucket",F$=2*60*1e3,U$=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends rn{constructor(e,n,i=0){super(Gu(e),`Firebase Storage: ${n} (${Gu(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ln.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Gu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var On;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(On||(On={}));function Gu(t){return"storage/"+t}function V$(){const t="An unknown error occurred, please check the error payload for server response.";return new Ln(On.UNKNOWN,t)}function B$(){return new Ln(On.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function q$(){return new Ln(On.CANCELED,"User canceled the upload/download.")}function j$(t){return new Ln(On.INVALID_URL,"Invalid URL '"+t+"'.")}function H$(t){return new Ln(On.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Cv(t){return new Ln(On.INVALID_ARGUMENT,t)}function lT(){return new Ln(On.APP_DELETED,"The Firebase app was deleted.")}function z$(t){return new Ln(On.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=cn.makeFromUrl(e,n)}catch{return new cn(e,"")}if(i.path==="")return i;throw H$(e)}static makeFromUrl(e,n){let i=null;const r="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),l={bucket:1,path:3};function c(E){E.path_=decodeURIComponent(E.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${u}/b/${r}/o${f}`,"i"),p={bucket:1,path:3},m=n===aT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",b=new RegExp(`^https?://${m}/${r}/${w}`,"i"),_=[{regex:a,indices:l,postModify:s},{regex:d,indices:p,postModify:c},{regex:b,indices:{bucket:1,path:2},postModify:c}];for(let E=0;E<_.length;E++){const I=_[E],$=I.regex.exec(e);if($){const L=$[I.indices.bucket];let x=$[I.indices.path];x||(x=""),i=new cn(L,x),I.postModify(i);break}}if(i==null)throw j$(e);return i}}class K${constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W$(t,e,n){let i=1,r=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...w){c||(c=!0,e.apply(null,w))}function h(w){r=setTimeout(()=>{r=null,t(d,l())},w)}function f(){s&&clearTimeout(s)}function d(w,...b){if(c){f();return}if(w){f(),u.call(null,w,...b);return}if(l()||o){f(),u.call(null,w,...b);return}i<64&&(i*=2);let _;a===1?(a=2,_=0):_=(i+Math.random())*1e3,h(_)}let p=!1;function m(w){p||(p=!0,f(),!c&&(r!==null?(w||(a=2),clearTimeout(r),h(0)):w||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,m(!0)},n),m}function G$(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q$(t){return t!==void 0}function Av(t,e,n,i){if(i<e)throw Cv(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw Cv(`Invalid value for '${t}'. Expected ${n} or less.`)}function Y$(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const r=e(i)+"="+e(t[i]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ol;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ol||(Ol={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J$(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||r||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X${constructor(e,n,i,r,s,o,a,l,c,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=r,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,p)=>{this.resolve_=d,this.reject_=p,this.start_()})}start_(){const e=(i,r)=>{if(r){i(!1,new Ca(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Ol.NO_ERROR,l=s.getStatus();if(!a||J$(l,this.additionalRetryCodes_)&&this.retry){const u=s.getErrorCode()===Ol.ABORT;i(!1,new Ca(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;i(!0,new Ca(c,s))})},n=(i,r)=>{const s=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());Q$(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=V$();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(r.canceled){const l=this.appDelete_?lT():q$();o(l)}else{const l=B$();o(l)}};this.canceled_?n(!1,new Ca(!1,null,!0)):this.backoffId_=W$(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&G$(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ca{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function Z$(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function eF(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function tF(t,e){e&&(t["X-Firebase-GMPID"]=e)}function nF(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function iF(t,e,n,i,r,s,o=!0){const a=Y$(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return tF(c,e),Z$(c,n),eF(c,s),nF(c,i),new X$(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rF(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function sF(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n){this._service=e,n instanceof cn?this._location=n:this._location=cn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Nl(e,n)}get root(){const e=new cn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return sF(this._location.path)}get storage(){return this._service}get parent(){const e=rF(this._location.path);if(e===null)return null;const n=new cn(this._location.bucket,e);return new Nl(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw z$(e)}}function kv(t,e){const n=e?.[$$];return n==null?null:cn.makeFromBucketSpec(n,t)}function oF(t,e,n,i={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=i;r&&(t._overrideAuthToken=typeof r=="string"?r:w_(r,t.app.options.projectId))}class aF{constructor(e,n,i,r,s){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host=aT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=F$,this._maxUploadRetryTime=U$,this._requests=new Set,r!=null?this._bucket=cn.makeFromBucketSpec(r,this._host):this._bucket=kv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=cn.makeFromBucketSpec(this._url,e):this._bucket=kv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Av("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Av("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Nl(this,e)}_makeRequest(e,n,i,r,s=!0){if(this._deleted)return new K$(lT());{const o=iF(e,this._appId,i,r,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,r).getPromise()}}const Rv="@firebase/storage",xv="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cT="storage";function lF(t=ic(),e){t=Le(t);const i=Pi(t,cT).getImmediate({identifier:e}),r=m_("storage");return r&&cF(i,...r),i}function cF(t,e,n,i={}){oF(t,e,n,i)}function uF(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new aF(n,i,r,e,yr)}function hF(){dn(new tn(cT,uF,"PUBLIC").setMultipleInstances(!0)),$t(Rv,xv,""),$t(Rv,xv,"esm2017")}hF();const fF={apiKey:"AIzaSyDJaQtpJ26OtQQ3SIZFSDvjRZesDCloUNY",authDomain:"boram-vue3-firebase-app.firebaseapp.com",projectId:"boram-vue3-firebase-app",storageBucket:"boram-vue3-firebase-app.firebasestorage.app",messagingSenderId:"281361866731",appId:"1:281361866731:web:c8f84581c4e3876e76c3ae",measurementId:"G-NEFWN62CYR"},zc=S_(fF);g$(zc);const Kt=UP(zc),ep=CL(zc),dF=lF(zc),pF=CC(async()=>{const t=oT();Cx(Kt,e=>{console.log("### user:",e),t.setUser(e)})}),gF=Object.freeze(Object.defineProperty({__proto__:null,auth:Kt,db:ep,default:pF,storage:dF},Symbol.toStringTag,{value:"Module"})),mF="https://api.dicebear.com/9.x/glass/svg?seed=";async function IU(){const t=new jn,{user:e}=await Gx(Kt,t);return e}async function vF(){await Ax(Kt)}async function SU({email:t,password:e}){const{user:n}=await yx(Kt,t,e);await Z_(n,{displayName:t.split("@")[0],photoURL:uT(n.uid)})}function uT(t){return`${mF}${t}`}async function CU({email:t,password:e}){const{user:n}=await wx(Kt,t,e);return n}async function AU(t){await vx(Kt,t)}async function kU(t){await Tx(Kt.currentUser,t)}async function yF(){await _x(Kt.currentUser)}async function RU(t){await Z_(Kt.currentUser,{displayName:t}),await DE(Ld(ep,"users",Kt.currentUser.uid),{displayName:t})}async function xU(t){await Ex(Kt.currentUser,t),await DE(Ld(ep,"users",Kt.currentUser.uid),{email:t})}var Qu={exports:{}},Pv;function wF(){return Pv||(Pv=1,function(t,e){(function(n,i){t.exports=i()})(self,()=>(()=>{var n={d:(h,f)=>{for(var d in f)n.o(f,d)&&!n.o(h,d)&&Object.defineProperty(h,d,{enumerable:!0,get:f[d]})},o:(h,f)=>Object.prototype.hasOwnProperty.call(h,f),r:h=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(h,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(h,"__esModule",{value:!0})}},i={};function r(){return document.createElement("canvas")}function s(h){for(var f=atob(h.split(",")[1]),d=h.split(",")[0].split(":")[1].split(";")[0],p=new ArrayBuffer(f.length),m=new Uint8Array(p),w=0;w<f.length;w++)m[w]=f.charCodeAt(w);return new Blob([p],{type:d})}function o(h,f){var d=f.width/f.height,p=Math.min(f.width,h.maxWidth,d*h.maxHeight);return h.maxSize>0&&h.maxSize<f.width*f.height/1e3&&(p=Math.min(p,Math.floor(1e3*h.maxSize/f.height))),h.scaleRatio&&(p=Math.min(p,Math.floor(h.scaleRatio*f.width))),h.debug&&(console.log("browser-image-resizer: original image size = "+f.width+" px (width) X "+f.height+" px (height)"),console.log("browser-image-resizer: scaled image size = "+p+" px (width) X "+Math.floor(p/d)+" px (height)")),p<=0&&(p=1,console.warn("browser-image-resizer: image size is too small")),p}function a(h,f){var d=document.createElement("canvas"),p=f.outputWidth/h.width;d.width=h.width*p,d.height=h.height*p;var m=h.getContext("2d").getImageData(0,0,h.width,h.height),w=d.getContext("2d").createImageData(d.width,d.height);return function(b,y,_){function E(Dt,sn,ne,S,q,k){var Y=1-q,be=1-k;return Dt*Y*be+sn*q*be+ne*Y*k+S*q*k}var I,$,L,x,C,N,K,M,ee,V,oe,ge,Z,pe,Ve,ct,Je,je,Pt;for(I=0;I<y.height;++I)for(L=I/_,x=Math.floor(L),C=Math.ceil(L)>b.height-1?b.height-1:Math.ceil(L),$=0;$<y.width;++$)N=$/_,K=Math.floor(N),M=Math.ceil(N)>b.width-1?b.width-1:Math.ceil(N),ee=4*($+y.width*I),V=4*(K+b.width*x),oe=4*(M+b.width*x),ge=4*(K+b.width*C),Z=4*(M+b.width*C),pe=N-K,Ve=L-x,ct=E(b.data[V],b.data[oe],b.data[ge],b.data[Z],pe,Ve),y.data[ee]=ct,Je=E(b.data[V+1],b.data[oe+1],b.data[ge+1],b.data[Z+1],pe,Ve),y.data[ee+1]=Je,je=E(b.data[V+2],b.data[oe+2],b.data[ge+2],b.data[Z+2],pe,Ve),y.data[ee+2]=je,Pt=E(b.data[V+3],b.data[oe+3],b.data[ge+3],b.data[Z+3],pe,Ve),y.data[ee+3]=Pt}(m,w,p),d.getContext("2d").putImageData(w,0,0),d}function l(h){var f=document.createElement("canvas");return f.width=h.width/2,f.height=h.height/2,f.getContext("2d").drawImage(h,0,0,f.width,f.height),f}n.r(i),n.d(i,{readAndCompressImage:()=>u});var c={quality:.5,maxWidth:800,maxHeight:600,autoRotate:!0,debug:!1,mimeType:"image/jpeg"};function u(h,f){return new Promise(function(d,p){var m=document.createElement("img"),w=new FileReader,b=Object.assign({},c,f);w.onload=function(y){m.onerror=function(){p("cannot load image.")},m.onload=function(){var _={img:m,config:b};try{var E=function(){var I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},$=I.img,L=I.config,x=(I.orientation,r());x.width=$.width,x.height=$.height;var C=x.getContext("2d");L.mimeType==="image/jpeg"&&(C.fillStyle="#ffffff",C.fillRect(0,0,x.width,x.height),C.save()),C.drawImage($,0,0),C.restore();for(var N=o(L,x);x.width>=2*N;)x=l(x);x.width>N&&(x=a(x,Object.assign(L,{outputWidth:N})));var K=x.toDataURL(L.mimeType,L.quality);return typeof L.onScale=="function"&&L.onScale(K),s(K)}(_);d(E)}catch(I){p(I)}},m.src=y.target.result};try{w.onerror=function(){p("cannot read image file.")},w.readAsDataURL(h)}catch(y){p(y)}})}return i})())}(Qu)),Qu.exports}wF();const _F=["src"],bF={__name:"default",setup(t){const e=Hk(),n=oT(),i=PA(),r=O(()=>({maxWidth:i.meta?.width||"1080px",margin:"0 auto"})),s=de(!1),o=()=>s.value=!0,a=async()=>{await vF(),e.notify("로그아웃 되었습니다.")},l=async()=>{await yF(),e.notify("이메일을 확인해주세요")};return(c,u)=>{const h=Ay("router-view");return Qt(),Yt(jk,{view:"lHh Lpr lff",class:"bg-grey-2"},{default:He(()=>[ue(Uk,{bordered:"",class:"bg-white text-grey-9"},{default:He(()=>[ue($k,null,{default:He(()=>[ue(Un,{flat:"",dense:"",to:"/"},{default:He(()=>[ue(qA,null,{default:He(()=>[ue(yh,{square:""},{default:He(()=>u[2]||(u[2]=[Xa("img",{src:"/logo.png"},null,-1)])),_:1}),u[3]||(u[3]=Rs(" Boram "))]),_:1})]),_:1}),ue(Hw),ue(Un,{stretch:"",flat:"",label:"Home",to:"/home"}),ue(Un,{stretch:"",flat:"",label:"수강하기",href:"https://google.com",target:"_blank"}),ue(Un,{stretch:"",flat:"",label:"온라인 강의",href:"https://google.com",target:"_blank"}),ue(Un,{stretch:"",flat:"",label:"유튜브",href:"https://google.com",target:"_blank"}),ue(uk,{class:"q-my-md q-mr-md",vertical:""}),Nt(n).isAuthenticated?Sp("",!0):(Qt(),Yt(Un,{key:0,unelevated:"",rounded:"",color:"primary",label:"로그인 / 회원가입",onClick:o})),Nt(n).isAuthenticated?(Qt(),Yt(Un,{key:1,round:"",flat:""},{default:He(()=>[ue(yh,null,{default:He(()=>[Xa("img",{src:Nt(n).user.photoURL||Nt(uT)(Nt(n).user.uid)},null,8,_F)]),_:1}),ue(Mk,null,{default:He(()=>[ue(fk,{style:{"min-width":"140px"}},{default:He(()=>[Nt(n).user.emailVerified?Br((Qt(),Yt(mu,{key:0,clickable:"",to:"/mypage/profile"},{default:He(()=>[ue(gu,null,{default:He(()=>u[4]||(u[4]=[Rs("프로필")])),_:1})]),_:1})),[[Na]]):Br((Qt(),Yt(mu,{key:1,clickable:""},{default:He(()=>[ue(gu,{class:"text-red",onClick:l},{default:He(()=>u[5]||(u[5]=[Rs("이메일을 인증해주세요.")])),_:1})]),_:1})),[[Na]]),Br((Qt(),Yt(mu,{onClick:u[0]||(u[0]=f=>a()),clickable:""},{default:He(()=>[ue(gu,null,{default:He(()=>u[6]||(u[6]=[Rs("로그아웃")])),_:1})]),_:1})),[[Na]])]),_:1})]),_:1})]),_:1})):Sp("",!0)]),_:1})]),_:1}),ue(Vk,{style:Po(r.value)},{default:He(()=>[ue(h)]),_:1},8,["style"]),ue(Zk,{modelValue:s.value,"onUpdate:modelValue":u[1]||(u[1]=f=>s.value=f)},null,8,["modelValue"])]),_:1})}}},EF={admin:()=>ke(()=>import("./admin-BMIBqHwu.js"),__vite__mapDeps([39,14])),default:bF,MainLayout:()=>ke(()=>import("./MainLayout-D9V5kzVm.js"),__vite__mapDeps([40,9,14]))};function TF(t){return t.map(e=>({path:e.path,meta:e.meta,component:EF[e.meta?.layout||"default"],children:e.path==="/"?[e]:[{...e,path:""}]}))}function PU(t){return t.charAt(0).toUpperCase()+t.slice(1)}function IF(t,e,n){return n<=e?e:Math.min(n,Math.max(e,t))}function DU(t,e,n){if(n<=e)return e;const i=n-e+1;let r=e+(t-e)%i;return r<e&&(r=i+r),r===0?0:r}function OU(t,e=2,n="0"){if(t==null)return t;const i=""+t;return i.length>=e?i:new Array(e-i.length+1).join(n)+i}const tp=XMLHttpRequest,hT=tp.prototype.open,SF=["top","right","bottom","left"];let Ll=[],Zs=0;function CF({p:t,pos:e,active:n,horiz:i,reverse:r,dir:s}){let o=1,a=1;return i===!0?(r===!0&&(o=-1),e==="bottom"&&(a=-1),{transform:`translate3d(${o*(t-100)}%,${n?0:a*-200}%,0)`}):(r===!0&&(a=-1),e==="right"&&(o=-1),{transform:`translate3d(${n?0:s*o*-200}%,${a*(t-100)}%,0)`})}function AF(t,e){return typeof e!="number"&&(t<25?e=Math.random()*3+3:t<65?e=Math.random()*3:t<85?e=Math.random()*2:t<99?e=.6:e=0),IF(t+e,0,100)}function kF(t){Zs++,Ll.push(t),!(Zs>1)&&(tp.prototype.open=function(e,n){const i=[],r=()=>{Ll.forEach(o=>{(o.hijackFilter.value===null||o.hijackFilter.value(n)===!0)&&(o.start(),i.push(o.stop))})},s=()=>{i.forEach(o=>{o()})};this.addEventListener("loadstart",r,{once:!0}),this.addEventListener("loadend",s,{once:!0}),hT.apply(this,arguments)})}function RF(t){Ll=Ll.filter(e=>e.start!==t),Zs=Math.max(0,Zs-1),Zs===0&&(tp.prototype.open=hT)}const xF=qe({name:"QAjaxBar",props:{position:{type:String,default:"top",validator:t=>SF.includes(t)},size:{type:String,default:"2px"},color:String,skipHijack:Boolean,reverse:Boolean,hijackFilter:Function},emits:["start","stop"],setup(t,{emit:e}){const{proxy:n}=Ke(),i=de(0),r=de(!1),s=de(!0);let o=0,a=null,l;const c=O(()=>`q-loading-bar q-loading-bar--${t.position}`+(t.color!==void 0?` bg-${t.color}`:"")+(s.value===!0?"":" no-transition")),u=O(()=>t.position==="top"||t.position==="bottom"),h=O(()=>u.value===!0?"height":"width"),f=O(()=>{const _=r.value,E=CF({p:i.value,pos:t.position,active:_,horiz:u.value,reverse:n.$q.lang.rtl===!0&&["top","bottom"].includes(t.position)?t.reverse===!1:t.reverse,dir:n.$q.lang.rtl===!0?-1:1});return E[h.value]=t.size,E.opacity=_?1:0,E}),d=O(()=>r.value===!0?{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":i.value}:{"aria-hidden":"true"});function p(_=300){const E=l;return l=Math.max(0,_)||0,o++,o>1?(E===0&&_>0?b():a!==null&&E>0&&_<=0&&(clearTimeout(a),a=null),o):(a!==null&&clearTimeout(a),e("start"),i.value=0,a=setTimeout(()=>{a=null,s.value=!0,_>0&&b()},r._value===!0?500:1),r._value!==!0&&(r.value=!0,s.value=!1),o)}function m(_){return o>0&&(i.value=AF(i.value,_)),o}function w(){if(o=Math.max(0,o-1),o>0)return o;a!==null&&(clearTimeout(a),a=null),e("stop");const _=()=>{s.value=!0,i.value=100,a=setTimeout(()=>{a=null,r.value=!1},1e3)};return i.value===0?a=setTimeout(_,1):_(),o}function b(){i.value<100&&(a=setTimeout(()=>{a=null,m(),b()},l))}let y;return Pn(()=>{t.skipHijack!==!0&&(y=!0,kF({start:p,stop:w,hijackFilter:O(()=>t.hijackFilter||null)}))}),xt(()=>{a!==null&&clearTimeout(a),y===!0&&RF(p)}),Object.assign(n,{start:p,stop:w,increment:m}),()=>j("div",{class:c.value,style:f.value,...d.value})}}),Aa=de(null),Ml=Mo({isActive:!1},{start:ln,stop:ln,increment:ln,setDefaults:ln,install({$q:t,parentApp:e}){if(t.loadingBar=this,this.__installed===!0){t.config.loadingBar!==void 0&&this.setDefaults(t.config.loadingBar);return}const n=de(t.config.loadingBar!==void 0?{...t.config.loadingBar}:{});function i(){Ml.isActive=!0}function r(){Ml.isActive=!1}const s=Pf("q-loading-bar");gw({name:"LoadingBar",devtools:{hide:!0},setup:()=>()=>j(xF,{...n.value,onStart:i,onStop:r,ref:Aa})},e).mount(s),Object.assign(this,{start(o){Aa.value.start(o)},stop(){Aa.value.stop()},increment(){Aa.value.increment.apply(null,arguments)},setDefaults(o){es(o)===!0&&Object.assign(n.value,o)}})}}),Yu=AC(function(){const t=rA,e=DA({scrollBehavior:()=>({left:0,top:0}),routes:TF(OA),history:t("/")});return e.beforeEach(()=>{Ml.start()}),e.afterEach(()=>{Ml.stop()}),e});async function PF(t,e){const n=t(vC);n.use(mC,e);const i=typeof cu=="function"?await cu({}):cu;n.use(i);const r=mr(typeof Yu=="function"?await Yu({store:i}):Yu);return i.use(({store:s})=>{s.router=r}),{app:n,store:i,router:r}}let DF=0;const ja={},Ha={},on={},fT={},OF=/^\s*$/,dT=[],NF=[void 0,null,!0,!1,""],np=["top-left","top-right","bottom-left","bottom-right","top","bottom","left","right","center"],LF=["top-left","top-right","bottom-left","bottom-right"],Lr={positive:{icon:t=>t.iconSet.type.positive,color:"positive"},negative:{icon:t=>t.iconSet.type.negative,color:"negative"},warning:{icon:t=>t.iconSet.type.warning,color:"warning",textColor:"dark"},info:{icon:t=>t.iconSet.type.info,color:"info"},ongoing:{group:!1,timeout:0,spinner:!0,color:"grey-8"}};function pT(t,e,n){if(!t)return As("parameter required");let i;const r={textColor:"white"};if(t.ignoreDefaults!==!0&&Object.assign(r,ja),es(t)===!1&&(r.type&&Object.assign(r,Lr[r.type]),t={message:t}),Object.assign(r,Lr[t.type||r.type],t),typeof r.icon=="function"&&(r.icon=r.icon(e)),r.spinner?(r.spinner===!0&&(r.spinner=$w),r.spinner=mr(r.spinner)):r.spinner=!1,r.meta={hasMedia:!!(r.spinner!==!1||r.icon||r.avatar),hasText:Dv(r.message)||Dv(r.caption)},r.position){if(np.includes(r.position)===!1)return As("wrong position",t)}else r.position="bottom";if(NF.includes(r.timeout)===!0)r.timeout=5e3;else{const l=Number(r.timeout);if(isNaN(l)||l<0)return As("wrong timeout",t);r.timeout=Number.isFinite(l)?l:0}r.timeout===0?r.progress=!1:r.progress===!0&&(r.meta.progressClass="q-notification__progress"+(r.progressClass?` ${r.progressClass}`:""),r.meta.progressStyle={animationDuration:`${r.timeout+1e3}ms`});const s=(Array.isArray(t.actions)===!0?t.actions:[]).concat(t.ignoreDefaults!==!0&&Array.isArray(ja.actions)===!0?ja.actions:[]).concat(Lr[t.type]!==void 0&&Array.isArray(Lr[t.type].actions)===!0?Lr[t.type].actions:[]),{closeBtn:o}=r;if(o&&s.push({label:typeof o=="string"?o:e.lang.label.close}),r.actions=s.map(({handler:l,noDismiss:c,...u})=>({flat:!0,...u,onClick:typeof l=="function"?()=>{l(),c!==!0&&a()}:()=>{a()}})),r.multiLine===void 0&&(r.multiLine=r.actions.length>1),Object.assign(r.meta,{class:`q-notification row items-stretch q-notification--${r.multiLine===!0?"multi-line":"standard"}`+(r.color!==void 0?` bg-${r.color}`:"")+(r.textColor!==void 0?` text-${r.textColor}`:"")+(r.classes!==void 0?` ${r.classes}`:""),wrapperClass:"q-notification__wrapper col relative-position border-radius-inherit "+(r.multiLine===!0?"column no-wrap justify-center":"row items-center"),contentClass:"q-notification__content row items-center"+(r.multiLine===!0?"":" col"),leftClass:r.meta.hasText===!0?"additional":"single",attrs:{role:"alert",...r.attrs}}),r.group===!1?(r.group=void 0,r.meta.group=void 0):((r.group===void 0||r.group===!0)&&(r.group=[r.message,r.caption,r.multiline].concat(r.actions.map(l=>`${l.label}*${l.icon}`)).join("|")),r.meta.group=r.group+"|"+r.position),r.actions.length===0?r.actions=void 0:r.meta.actionsClass="q-notification__actions row items-center "+(r.multiLine===!0?"justify-end":"col-auto")+(r.meta.hasMedia===!0?" q-notification__actions--with-media":""),n!==void 0){n.notif.meta.timer&&(clearTimeout(n.notif.meta.timer),n.notif.meta.timer=void 0),r.meta.uid=n.notif.meta.uid;const l=on[r.position].value.indexOf(n.notif);on[r.position].value[l]=r}else{const l=Ha[r.meta.group];if(l===void 0){if(r.meta.uid=DF++,r.meta.badge=1,["left","right","center"].indexOf(r.position)!==-1)on[r.position].value.splice(Math.floor(on[r.position].value.length/2),0,r);else{const c=r.position.indexOf("top")!==-1?"unshift":"push";on[r.position].value[c](r)}r.group!==void 0&&(Ha[r.meta.group]=r)}else{if(l.meta.timer&&(clearTimeout(l.meta.timer),l.meta.timer=void 0),r.badgePosition!==void 0){if(LF.includes(r.badgePosition)===!1)return As("wrong badgePosition",t)}else r.badgePosition=`top-${r.position.indexOf("left")!==-1?"right":"left"}`;r.meta.uid=l.meta.uid,r.meta.badge=l.meta.badge+1,r.meta.badgeClass=`q-notification__badge q-notification__badge--${r.badgePosition}`+(r.badgeColor!==void 0?` bg-${r.badgeColor}`:"")+(r.badgeTextColor!==void 0?` text-${r.badgeTextColor}`:"")+(r.badgeClass?` ${r.badgeClass}`:"");const c=on[r.position].value.indexOf(l);on[r.position].value[c]=Ha[r.meta.group]=r}}const a=()=>{MF(r),i=void 0};if(r.timeout>0&&(r.meta.timer=setTimeout(()=>{r.meta.timer=void 0,a()},r.timeout+1e3)),r.group!==void 0)return l=>{l!==void 0?As("trying to update a grouped one which is forbidden",t):a()};if(i={dismiss:a,config:t,notif:r},n!==void 0){Object.assign(n,i);return}return l=>{if(i!==void 0)if(l===void 0)i.dismiss();else{const c=Object.assign({},i.config,l,{group:!1,position:r.position});pT(c,e,i)}}}function MF(t){t.meta.timer&&(clearTimeout(t.meta.timer),t.meta.timer=void 0);const e=on[t.position].value.indexOf(t);if(e!==-1){t.group!==void 0&&delete Ha[t.meta.group];const n=dT[""+t.meta.uid];if(n){const{width:i,height:r}=getComputedStyle(n);n.style.left=`${n.offsetLeft}px`,n.style.width=i,n.style.height=r}on[t.position].value.splice(e,1),typeof t.onDismiss=="function"&&t.onDismiss()}}function Dv(t){return t!=null&&OF.test(t)!==!0}function As(t,e){return console.error(`Notify: ${t}`,e),!1}function $F(){return qe({name:"QNotifications",devtools:{hide:!0},setup(){return()=>j("div",{class:"q-notifications"},np.map(t=>j(MS,{key:t,class:fT[t],tag:"div",name:`q-notification--${t}`},()=>on[t].value.map(e=>{const n=e.meta,i=[];if(n.hasMedia===!0&&(e.spinner!==!1?i.push(j(e.spinner,{class:"q-notification__spinner q-notification__spinner--"+n.leftClass,color:e.spinnerColor,size:e.spinnerSize})):e.icon?i.push(j(sl,{class:"q-notification__icon q-notification__icon--"+n.leftClass,name:e.icon,color:e.iconColor,size:e.iconSize,role:"img"})):e.avatar&&i.push(j(yh,{class:"q-notification__avatar q-notification__avatar--"+n.leftClass},()=>j("img",{src:e.avatar,"aria-hidden":"true"})))),n.hasText===!0){let s;const o={class:"q-notification__message col"};if(e.html===!0)o.innerHTML=e.caption?`<div>${e.message}</div><div class="q-notification__caption">${e.caption}</div>`:e.message;else{const a=[e.message];s=e.caption?[j("div",a),j("div",{class:"q-notification__caption"},[e.caption])]:a}i.push(j("div",o,s))}const r=[j("div",{class:n.contentClass},i)];return e.progress===!0&&r.push(j("div",{key:`${n.uid}|p|${n.badge}`,class:n.progressClass,style:n.progressStyle})),e.actions!==void 0&&r.push(j("div",{class:n.actionsClass},e.actions.map(s=>j(Un,s)))),n.badge>1&&r.push(j("div",{key:`${n.uid}|${n.badge}`,class:e.meta.badgeClass,style:e.badgeStyle},[n.badge])),j("div",{ref:s=>{dT[""+n.uid]=s},key:n.uid,class:n.class,...n.attrs},[j("div",{class:n.wrapperClass},r)])}))))}})}const FF={setDefaults(t){es(t)===!0&&Object.assign(ja,t)},registerType(t,e){es(e)===!0&&(Lr[t]=e)},install({$q:t,parentApp:e}){if(t.notify=this.create=n=>pT(n,t),t.notify.setDefaults=this.setDefaults,t.notify.registerType=this.registerType,t.config.notify!==void 0&&this.setDefaults(t.config.notify),this.__installed!==!0){np.forEach(i=>{on[i]=de([]);const r=["left","center","right"].includes(i)===!0?"center":i.indexOf("top")!==-1?"top":"bottom",s=i.indexOf("left")!==-1?"start":i.indexOf("right")!==-1?"end":"center",o=["left","right"].includes(i)?`items-${i==="left"?"start":"end"} justify-center`:i==="center"?"flex-center":`items-${s}`;fT[i]=`q-notifications__list q-notifications__list--${r} fixed column no-wrap ${o}`});const n=Pf("q-notify");gw($F(),e).mount(n)}}},UF={config:{notify:{position:"top"}},plugins:{Notify:FF}},VF="/";async function BF({app:t,router:e,store:n},i){let r=!1;const s=l=>{try{return e.resolve(l).href}catch{}return Object(l)===l?null:l},o=l=>{if(r=!0,typeof l=="string"&&/^https?:\/\//.test(l)){window.location.href=l;return}const c=s(l);c!==null&&(window.location.href=c)},a=window.location.href.replace(window.location.origin,"");for(let l=0;r===!1&&l<i.length;l++)try{await i[l]({app:t,router:e,store:n,ssrContext:null,redirect:o,urlPath:a,publicPath:VF})}catch(c){if(c&&c.url){o(c.url);return}console.error("[Quasar] boot error:",c);return}r!==!0&&(t.use(e),t.mount("#q-app"))}PF(rw,UF).then(t=>{const[e,n]=Promise.allSettled!==void 0?["allSettled",i=>i.map(r=>{if(r.status==="rejected"){console.error("[Quasar] boot error:",r.reason);return}return r.value.default})]:["all",i=>i.map(r=>r.default)];return Promise[e]([ke(()=>Promise.resolve().then(()=>gF),void 0),ke(()=>import("./error-handler-Dcrl8fDR.js"),__vite__mapDeps([41,29])),ke(()=>import("./navigation-guards-zaf81rh_.js"),[]),ke(()=>import("./algoliasearch-DpyOGosh.js"),[])]).then(i=>{const r=n(i).filter(s=>typeof s=="function");BF(t,r)})});export{Mr as $,pi as A,Tv as B,_U as C,de as D,xe as E,Lt as F,Pl as G,w$ as H,EU as I,iT as J,Pn as K,bU as L,b$ as M,FF as N,Ke as O,PA as P,rU as Q,kt as R,Hr as S,eU as T,xt as U,Br as V,WA as W,or as X,iC as Y,Vn as Z,sl as _,Rs as a,ZT as a$,qe as a0,e_ as a1,t_ as a2,jr as a3,bf as a4,gI as a5,Eh as a6,Nn as a7,Hw as a8,zk as a9,ep as aA,lU as aB,uU as aC,pU as aD,mU as aE,Ld as aF,fi as aG,OU as aH,tU as aI,Gp as aJ,PU as aK,Mk as aL,ln as aM,Ht as aN,ZS as aO,vI as aP,au as aQ,yI as aR,Iy as aS,oo as aT,lw as aU,DU as aV,QA as aW,YA as aX,Kl as aY,Ka as aZ,mr as a_,fk as aa,mu as ab,gu as ac,Nt as ad,ay as ae,TU as af,Un as ag,yh as ah,Mg as ai,YF as aj,$k as ak,qA as al,uk as am,Xk as an,Na as ao,$o as ap,Fo as aq,Fe as ar,Hk as as,kU as at,KF as au,RU as av,xU as aw,vU as ax,yU as ay,aU as az,WF as b,pk as b0,zw as b1,Xw as b2,xg as b3,Dk as b4,n_ as b5,Kw as b6,Pg as b7,Zw as b8,vk as b9,et as bA,JF as bB,XF as bC,aw as bD,Kk as bE,IF as bF,Yk as bG,jk as bH,Uk as bI,Vk as bJ,CU as bK,IU as bL,SU as bM,AU as bN,Qn as bO,ZF as bP,Xl as bQ,Qw as bR,oU as bS,$w as bT,Bw as bU,mk as ba,Ww as bb,Jw as bc,Ag as bd,cw as be,u_ as bf,dk as bg,uh as bh,i_ as bi,el as bj,Pk as bk,zl as bl,Rf as bm,xf as bn,sU as bo,NA as bp,dU as bq,cU as br,fU as bs,hU as bt,DE as bu,wU as bv,gU as bw,Cf as bx,fC as by,ow as bz,Xa as c,CC as d,Sp as e,jF as f,Ay as g,j as h,Yt as i,ue as j,GF as k,qF as l,eS as m,ql as n,Qt as o,HF as p,He as q,zF as r,iU as s,xT as t,oT as u,hS as v,QF as w,tS as x,nU as y,O as z};
