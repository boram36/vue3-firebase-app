import{bO as Fe,D as N,K as ee,E as U,z as w,aR as Ve,O as W,R as Ae,bP as Ce,U as ae,aO as Ee,bQ as we,bR as fe,Z as ie,aN as Y,a4 as Se,a5 as Me,h as q,aT as J,aq as _e,bS as Be,_ as ce,bT as Oe,a7 as X,bj as $e,ap as Pe,Y as Ie,bA as Te,a0 as Re,aU as ve,a3 as De,bU as je}from"./index-BDNlv_Je.js";let re,te=0;const z=new Array(256);for(let e=0;e<256;e++)z[e]=(e+256).toString(16).substring(1);const ze=(()=>{const e=typeof crypto<"u"?crypto:typeof window<"u"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const r=new Uint8Array(t);return e.getRandomValues(r),r}}return t=>{const r=[];for(let u=t;u>0;u--)r.push(Math.floor(Math.random()*256));return r}})(),me=4096;function se(){(re===void 0||te+16>me)&&(te=0,re=ze(me));const e=Array.prototype.slice.call(re,te,te+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,z[e[0]]+z[e[1]]+z[e[2]]+z[e[3]]+"-"+z[e[4]]+z[e[5]]+"-"+z[e[6]]+z[e[7]]+"-"+z[e[8]]+z[e[9]]+"-"+z[e[10]]+z[e[11]]+z[e[12]]+z[e[13]]+z[e[14]]+z[e[15]]}function Ne(e){return e??null}function ge(e,t){return e??(t===!0?`f_${se()}`:null)}function Ke({getValue:e,required:t=!0}={}){if(Fe.value===!0){const r=e!==void 0?N(Ne(e())):N(null);return t===!0&&r.value===null&&ee(()=>{r.value=`f_${se()}`}),e!==void 0&&U(e,u=>{r.value=ge(u,t)}),r}return e!==void 0?w(()=>ge(e(),t)):N(`f_${se()}`)}const he=/^on[A-Z]/;function Le(){const{attrs:e,vnode:t}=W(),r={listeners:N({}),attributes:N({})};function u(){const f={},d={};for(const c in e)c!=="class"&&c!=="style"&&he.test(c)===!1&&(f[c]=e[c]);for(const c in t.props)he.test(c)===!0&&(d[c]=t.props[c]);r.attributes.value=f,r.listeners.value=d}return Ve(u),u(),r}function Ue({validate:e,resetValidation:t,requiresQForm:r}){const u=Ae(Ce,!1);if(u!==!1){const{props:f,proxy:d}=W();Object.assign(d,{validate:e,resetValidation:t}),U(()=>f.disable,c=>{c===!0?(typeof t=="function"&&t(),u.unbindComponent(d)):u.bindComponent(d)}),ee(()=>{f.disable!==!0&&u.bindComponent(d)}),ae(()=>{f.disable!==!0&&u.unbindComponent(d)})}else r===!0&&console.error("Parent QForm not found on useFormChild()!")}const be=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,pe=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,ye=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,ne=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,oe=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,ue={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>be.test(e),hexaColor:e=>pe.test(e),hexOrHexaColor:e=>ye.test(e),rgbColor:e=>ne.test(e),rgbaColor:e=>oe.test(e),rgbOrRgbaColor:e=>ne.test(e)||oe.test(e),hexOrRgbColor:e=>be.test(e)||ne.test(e),hexaOrRgbaColor:e=>pe.test(e)||oe.test(e),anyColor:e=>ye.test(e)||ne.test(e)||oe.test(e)},Ze=[!0,!1,"ondemand"],He={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],default:!1,validator:e=>Ze.includes(e)}};function Qe(e,t){const{props:r,proxy:u}=W(),f=N(!1),d=N(null),c=N(!1);Ue({validate:T,resetValidation:A});let k=0,$;const R=w(()=>r.rules!==void 0&&r.rules!==null&&r.rules.length!==0),x=w(()=>r.disable!==!0&&R.value===!0&&t.value===!1),m=w(()=>r.error===!0||f.value===!0),H=w(()=>typeof r.errorMessage=="string"&&r.errorMessage.length!==0?r.errorMessage:d.value);U(()=>r.modelValue,()=>{c.value=!0,x.value===!0&&r.lazyRules===!1&&D()});function v(){r.lazyRules!=="ondemand"&&x.value===!0&&c.value===!0&&D()}U(()=>r.reactiveRules,K=>{K===!0?$===void 0&&($=U(()=>r.rules,v,{immediate:!0,deep:!0})):$!==void 0&&($(),$=void 0)},{immediate:!0}),U(()=>r.lazyRules,v),U(e,K=>{K===!0?c.value=!0:x.value===!0&&r.lazyRules!=="ondemand"&&D()});function A(){k++,t.value=!1,c.value=!1,f.value=!1,d.value=null,D.cancel()}function T(K=r.modelValue){if(r.disable===!0||R.value===!1)return!0;const P=++k,F=t.value!==!0?()=>{c.value=!0}:()=>{},V=(S,C)=>{S===!0&&F(),f.value=S,d.value=C||null,t.value=!1},E=[];for(let S=0;S<r.rules.length;S++){const C=r.rules[S];let j;if(typeof C=="function"?j=C(K,ue):typeof C=="string"&&ue[C]!==void 0&&(j=ue[C](K)),j===!1||typeof j=="string")return V(!0,j),!1;j!==!0&&j!==void 0&&E.push(j)}return E.length===0?(V(!1),!0):(t.value=!0,Promise.all(E).then(S=>{if(S===void 0||Array.isArray(S)===!1||S.length===0)return P===k&&V(!1),!0;const C=S.find(j=>j===!1||typeof j=="string");return P===k&&V(C!==void 0,C),C===void 0},S=>(P===k&&(console.error(S),V(!0)),!1)))}const D=Ee(T,0);return ae(()=>{$!==void 0&&$(),D.cancel()}),Object.assign(u,{resetValidation:A,validate:T}),we(u,"hasError",()=>m.value),{isDirtyModel:c,hasRules:R,hasError:m,errorMessage:H,validate:T,resetValidation:A}}function de(e){return e!=null&&(""+e).length!==0}const Ye={...Pe,...He,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String},We={...Ye,maxlength:[Number,String]},Ge=["update:modelValue","clear","focus","blur"];function Je({requiredForAttr:e=!0,tagProp:t,changeEvent:r=!1}={}){const{props:u,proxy:f}=W(),d=_e(u,f.$q),c=Ke({required:e,getValue:()=>u.for});return{requiredForAttr:e,changeEvent:r,tag:t===!0?w(()=>u.tag):{value:"label"},isDark:d,editable:w(()=>u.disable!==!0&&u.readonly!==!0),innerLoading:N(!1),focused:N(!1),hasPopupOpen:!1,splitAttrs:Le(),targetUid:c,rootRef:N(null),targetRef:N(null),controlRef:N(null)}}function Xe(e){const{props:t,emit:r,slots:u,attrs:f,proxy:d}=W(),{$q:c}=d;let k=null;e.hasValue===void 0&&(e.hasValue=w(()=>de(t.modelValue))),e.emitValue===void 0&&(e.emitValue=i=>{r("update:modelValue",i)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:l,onFocusout:o}),Object.assign(e,{clearValue:s,onControlFocusin:l,onControlFocusout:o,focus:C}),e.computedCounter===void 0&&(e.computedCounter=w(()=>{if(t.counter!==!1){const i=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,g=t.maxlength!==void 0?t.maxlength:t.maxValues;return i+(g!==void 0?" / "+g:"")}}));const{isDirtyModel:$,hasRules:R,hasError:x,errorMessage:m,resetValidation:H}=Qe(e.focused,e.innerLoading),v=e.floatingLabel!==void 0?w(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):w(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),A=w(()=>t.bottomSlots===!0||t.hint!==void 0||R.value===!0||t.counter===!0||t.error!==null),T=w(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),D=w(()=>`q-field row no-wrap items-start q-field--${T.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(v.value===!0?" q-field--float":"")+(P.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(x.value===!0?" q-field--error":"")+(x.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&A.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),K=w(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(x.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),P=w(()=>t.labelSlot===!0||t.label!==void 0),F=w(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&x.value!==!0?` text-${t.labelColor}`:"")),V=w(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:v.value,modelValue:t.modelValue,emitValue:e.emitValue})),E=w(()=>{const i={};return e.targetUid.value&&(i.for=e.targetUid.value),t.disable===!0&&(i["aria-disabled"]="true"),i});function S(){const i=document.activeElement;let g=e.targetRef!==void 0&&e.targetRef.value;g&&(i===null||i.id!==e.targetUid.value)&&(g.hasAttribute("tabindex")===!0||(g=g.querySelector("[tabindex]")),g&&g!==i&&g.focus({preventScroll:!0}))}function C(){fe(S)}function j(){Be(S);const i=document.activeElement;i!==null&&e.rootRef.value.contains(i)&&i.blur()}function l(i){k!==null&&(clearTimeout(k),k=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,r("focus",i))}function o(i,g){k!==null&&clearTimeout(k),k=setTimeout(()=>{k=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,r("blur",i)),g!==void 0&&g())})}function s(i){ie(i),c.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),r("update:modelValue",null),e.changeEvent===!0&&r("change",null),r("clear",t.modelValue),Y(()=>{const g=$.value;H(),$.value=g})}function a(i){[13,32].includes(i.keyCode)&&s(i)}function p(){const i=[];return u.prepend!==void 0&&i.push(q("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:J},u.prepend())),i.push(q("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},h())),x.value===!0&&t.noErrorIcon===!1&&i.push(b("error",[q(ce,{name:c.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?i.push(b("inner-loading-append",u.loading!==void 0?u.loading():[q(Oe,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&i.push(b("inner-clearable-append",[q(ce,{class:"q-field__focusable-action",name:t.clearIcon||c.iconSet.field.clear,tabindex:0,role:"button","aria-hidden":"false","aria-label":c.lang.label.clear,onKeyup:a,onClick:s})])),u.append!==void 0&&i.push(q("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:J},u.append())),e.getInnerAppend!==void 0&&i.push(b("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&i.push(e.getControlChild()),i}function h(){const i=[];return t.prefix!==void 0&&t.prefix!==null&&i.push(q("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&i.push(e.getShadowControl()),e.getControl!==void 0?i.push(e.getControl()):u.rawControl!==void 0?i.push(u.rawControl()):u.control!==void 0&&i.push(q("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},u.control(V.value))),P.value===!0&&i.push(q("div",{class:F.value},X(u.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&i.push(q("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),i.concat(X(u.default))}function _(){let i,g;x.value===!0?m.value!==null?(i=[q("div",{role:"alert"},m.value)],g=`q--slot-error-${m.value}`):(i=X(u.error),g="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(i=[q("div",t.hint)],g=`q--slot-hint-${t.hint}`):(i=X(u.hint),g="q--slot-hint"));const M=t.counter===!0||u.counter!==void 0;if(t.hideBottomSpace===!0&&M===!1&&i===void 0)return;const B=q("div",{key:g,class:"q-field__messages col"},i);return q("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:J},[t.hideBottomSpace===!0?B:q($e,{name:"q-transition--field-message"},()=>B),M===!0?q("div",{class:"q-field__counter"},u.counter!==void 0?u.counter():e.computedCounter.value):null])}function b(i,g){return g===null?null:q("div",{key:i,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},g)}let y=!1;return Se(()=>{y=!0}),Me(()=>{y===!0&&t.autofocus===!0&&d.focus()}),t.autofocus===!0&&ee(()=>{d.focus()}),ae(()=>{k!==null&&clearTimeout(k)}),Object.assign(d,{focus:C,blur:j}),function(){const g=e.getControl===void 0&&u.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...E.value}:E.value;return q(e.tag.value,{ref:e.rootRef,class:[D.value,f.class],style:f.style,...g},[u.before!==void 0?q("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:J},u.before()):null,q("div",{class:"q-field__inner relative-position col self-stretch"},[q("div",{ref:e.controlRef,class:K.value,tabindex:-1,...e.controlEvents},p()),A.value===!0?_():null]),u.after!==void 0?q("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:J},u.after()):null])}}const ke={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},le={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},qe=Object.keys(le);qe.forEach(e=>{le[e].regex=new RegExp(le[e].pattern)});const et=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+qe.join("")+"])|(.)","g"),xe=/[.*+?^${}()|[\]\\]/g,I="",tt={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function nt(e,t,r,u){let f,d,c,k,$,R;const x=N(null),m=N(v());function H(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}U(()=>e.type+e.autogrow,T),U(()=>e.mask,l=>{if(l!==void 0)D(m.value,!0);else{const o=C(m.value);T(),e.modelValue!==o&&t("update:modelValue",o)}}),U(()=>e.fillMask+e.reverseFillMask,()=>{x.value===!0&&D(m.value,!0)}),U(()=>e.unmaskedValue,()=>{x.value===!0&&D(m.value)});function v(){if(T(),x.value===!0){const l=E(C(e.modelValue));return e.fillMask!==!1?j(l):l}return e.modelValue}function A(l){if(l<f.length)return f.slice(-l);let o="",s=f;const a=s.indexOf(I);if(a!==-1){for(let p=l-s.length;p>0;p--)o+=I;s=s.slice(0,a)+o+s.slice(a)}return s}function T(){if(x.value=e.mask!==void 0&&e.mask.length!==0&&H(),x.value===!1){k=void 0,f="",d="";return}const l=ke[e.mask]===void 0?e.mask:ke[e.mask],o=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",s=o.replace(xe,"\\$&"),a=[],p=[],h=[];let _=e.reverseFillMask===!0,b="",y="";l.replace(et,(B,n,O,Q,Z)=>{if(Q!==void 0){const L=le[Q];h.push(L),y=L.negate,_===!0&&(p.push("(?:"+y+"+)?("+L.pattern+"+)?(?:"+y+"+)?("+L.pattern+"+)?"),_=!1),p.push("(?:"+y+"+)?("+L.pattern+")?")}else if(O!==void 0)b="\\"+(O==="\\"?"":O),h.push(O),a.push("([^"+b+"]+)?"+b+"?");else{const L=n!==void 0?n:Z;b=L==="\\"?"\\\\\\\\":L.replace(xe,"\\\\$&"),h.push(L),a.push("([^"+b+"]+)?"+b+"?")}});const i=new RegExp("^"+a.join("")+"("+(b===""?".":"[^"+b+"]")+"+)?"+(b===""?"":"["+b+"]*")+"$"),g=p.length-1,M=p.map((B,n)=>n===0&&e.reverseFillMask===!0?new RegExp("^"+s+"*"+B):n===g?new RegExp("^"+B+"("+(y===""?".":y)+"+)?"+(e.reverseFillMask===!0?"$":s+"*")):new RegExp("^"+B));c=h,k=B=>{const n=i.exec(e.reverseFillMask===!0?B:B.slice(0,h.length+1));n!==null&&(B=n.slice(1).join(""));const O=[],Q=M.length;for(let Z=0,L=B;Z<Q;Z++){const G=M[Z].exec(L);if(G===null)break;L=L.slice(G.shift().length),O.push(...G)}return O.length!==0?O.join(""):B},f=h.map(B=>typeof B=="string"?B:I).join(""),d=f.split(I).join(o)}function D(l,o,s){const a=u.value,p=a.selectionEnd,h=a.value.length-p,_=C(l);o===!0&&T();const b=E(_),y=e.fillMask!==!1?j(b):b,i=m.value!==y;a.value!==y&&(a.value=y),i===!0&&(m.value=y),document.activeElement===a&&Y(()=>{if(y===d){const M=e.reverseFillMask===!0?d.length:0;a.setSelectionRange(M,M,"forward");return}if(s==="insertFromPaste"&&e.reverseFillMask!==!0){const M=a.selectionEnd;let B=p-1;for(let n=$;n<=B&&n<M;n++)f[n]!==I&&B++;P.right(a,B);return}if(["deleteContentBackward","deleteContentForward"].indexOf(s)!==-1){const M=e.reverseFillMask===!0?p===0?y.length>b.length?1:0:Math.max(0,y.length-(y===d?0:Math.min(b.length,h)+1))+1:p;a.setSelectionRange(M,M,"forward");return}if(e.reverseFillMask===!0)if(i===!0){const M=Math.max(0,y.length-(y===d?0:Math.min(b.length,h+1)));M===1&&p===1?a.setSelectionRange(M,M,"forward"):P.rightReverse(a,M)}else{const M=y.length-h;a.setSelectionRange(M,M,"backward")}else if(i===!0){const M=Math.max(0,f.indexOf(I),Math.min(b.length,p)-1);P.right(a,M)}else{const M=p-1;P.right(a,M)}});const g=e.unmaskedValue===!0?C(y):y;String(e.modelValue)!==g&&(e.modelValue!==null||g!=="")&&r(g,!0)}function K(l,o,s){const a=E(C(l.value));o=Math.max(0,f.indexOf(I),Math.min(a.length,o)),$=o,l.setSelectionRange(o,s,"forward")}const P={left(l,o){const s=f.slice(o-1).indexOf(I)===-1;let a=Math.max(0,o-1);for(;a>=0;a--)if(f[a]===I){o=a,s===!0&&o++;break}if(a<0&&f[o]!==void 0&&f[o]!==I)return P.right(l,0);o>=0&&l.setSelectionRange(o,o,"backward")},right(l,o){const s=l.value.length;let a=Math.min(s,o+1);for(;a<=s;a++)if(f[a]===I){o=a;break}else f[a-1]===I&&(o=a);if(a>s&&f[o-1]!==void 0&&f[o-1]!==I)return P.left(l,s);l.setSelectionRange(o,o,"forward")},leftReverse(l,o){const s=A(l.value.length);let a=Math.max(0,o-1);for(;a>=0;a--)if(s[a-1]===I){o=a;break}else if(s[a]===I&&(o=a,a===0))break;if(a<0&&s[o]!==void 0&&s[o]!==I)return P.rightReverse(l,0);o>=0&&l.setSelectionRange(o,o,"backward")},rightReverse(l,o){const s=l.value.length,a=A(s),p=a.slice(0,o+1).indexOf(I)===-1;let h=Math.min(s,o+1);for(;h<=s;h++)if(a[h-1]===I){o=h,o>0&&p===!0&&o--;break}if(h>s&&a[o-1]!==void 0&&a[o-1]!==I)return P.leftReverse(l,s);l.setSelectionRange(o,o,"forward")}};function F(l){t("click",l),R=void 0}function V(l){if(t("keydown",l),Ie(l)===!0||l.altKey===!0)return;const o=u.value,s=o.selectionStart,a=o.selectionEnd;if(l.shiftKey||(R=void 0),l.keyCode===37||l.keyCode===39){l.shiftKey&&R===void 0&&(R=o.selectionDirection==="forward"?s:a);const p=P[(l.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(l.preventDefault(),p(o,R===s?a:s),l.shiftKey){const h=o.selectionStart;o.setSelectionRange(Math.min(R,h),Math.max(R,h),"forward")}}else l.keyCode===8&&e.reverseFillMask!==!0&&s===a?(P.left(o,s),o.setSelectionRange(o.selectionStart,a,"backward")):l.keyCode===46&&e.reverseFillMask===!0&&s===a&&(P.rightReverse(o,a),o.setSelectionRange(s,o.selectionEnd,"forward"))}function E(l){if(l==null||l==="")return"";if(e.reverseFillMask===!0)return S(l);const o=c;let s=0,a="";for(let p=0;p<o.length;p++){const h=l[s],_=o[p];if(typeof _=="string")a+=_,h===_&&s++;else if(h!==void 0&&_.regex.test(h))a+=_.transform!==void 0?_.transform(h):h,s++;else return a}return a}function S(l){const o=c,s=f.indexOf(I);let a=l.length-1,p="";for(let h=o.length-1;h>=0&&a!==-1;h--){const _=o[h];let b=l[a];if(typeof _=="string")p=_+p,b===_&&a--;else if(b!==void 0&&_.regex.test(b))do p=(_.transform!==void 0?_.transform(b):b)+p,a--,b=l[a];while(s===h&&b!==void 0&&_.regex.test(b));else return p}return p}function C(l){return typeof l!="string"||k===void 0?typeof l=="number"?k(""+l):l:k(l)}function j(l){return d.length-l.length<=0?l:e.reverseFillMask===!0&&l.length!==0?d.slice(0,-l.length)+l:l+d.slice(l.length)}return{innerValue:m,hasMask:x,moveCursorForPaste:K,updateMaskValue:D,onMaskedKeydown:V,onMaskedClick:F}}const ot={name:String};function lt(e){return w(()=>e.name||e.for)}function at(e,t){function r(){const u=e.modelValue;try{const f="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(u)===u&&("length"in u?Array.from(u):[u]).forEach(d=>{f.items.add(d)}),{files:f.files}}catch{return{files:void 0}}}return w(()=>{if(e.type==="file")return r()})}const rt=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,ut=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,it=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,st=/[a-z0-9_ -]$/i;function dt(e){return function(r){if(r.type==="compositionend"||r.type==="change"){if(r.target.qComposing!==!0)return;r.target.qComposing=!1,e(r)}else r.type==="compositionupdate"&&r.target.qComposing!==!0&&typeof r.data=="string"&&(Te.is.firefox===!0?st.test(r.data)===!1:rt.test(r.data)===!0||ut.test(r.data)===!0||it.test(r.data)===!0)===!0&&(r.target.qComposing=!0)}}const ct=Re({name:"QInput",inheritAttrs:!1,props:{...We,...tt,...ot,modelValue:[String,Number,FileList],shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Ge,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:r}){const{proxy:u}=W(),{$q:f}=u,d={};let c=NaN,k,$,R=null,x;const m=N(null),H=lt(e),{innerValue:v,hasMask:A,moveCursorForPaste:T,updateMaskValue:D,onMaskedKeydown:K,onMaskedClick:P}=nt(e,t,b,m),F=at(e),V=w(()=>de(v.value)),E=dt(h),S=Je({changeEvent:!0}),C=w(()=>e.type==="textarea"||e.autogrow===!0),j=w(()=>C.value===!0||["text","search","url","tel","password"].includes(e.type)),l=w(()=>{const n={...S.splitAttrs.listeners.value,onInput:h,onPaste:p,onChange:i,onBlur:g,onFocus:ve};return n.onCompositionstart=n.onCompositionupdate=n.onCompositionend=E,A.value===!0&&(n.onKeydown=K,n.onClick=P),e.autogrow===!0&&(n.onAnimationend=_),n}),o=w(()=>{const n={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:H.value,...S.splitAttrs.attributes.value,id:S.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return C.value===!1&&(n.type=e.type),e.autogrow===!0&&(n.rows=1),n});U(()=>e.type,()=>{m.value&&(m.value.value=e.modelValue)}),U(()=>e.modelValue,n=>{if(A.value===!0){if($===!0&&($=!1,String(n)===c))return;D(n)}else v.value!==n&&(v.value=n,e.type==="number"&&d.hasOwnProperty("value")===!0&&(k===!0?k=!1:delete d.value));e.autogrow===!0&&Y(y)}),U(()=>e.autogrow,n=>{n===!0?Y(y):m.value!==null&&r.rows>0&&(m.value.style.height="auto")}),U(()=>e.dense,()=>{e.autogrow===!0&&Y(y)});function s(){fe(()=>{const n=document.activeElement;m.value!==null&&m.value!==n&&(n===null||n.id!==S.targetUid.value)&&m.value.focus({preventScroll:!0})})}function a(){m.value!==null&&m.value.select()}function p(n){if(A.value===!0&&e.reverseFillMask!==!0){const O=n.target;T(O,O.selectionStart,O.selectionEnd)}t("paste",n)}function h(n){if(!n||!n.target)return;if(e.type==="file"){t("update:modelValue",n.target.files);return}const O=n.target.value;if(n.target.qComposing===!0){d.value=O;return}if(A.value===!0)D(O,!1,n.inputType);else if(b(O),j.value===!0&&n.target===document.activeElement){const{selectionStart:Q,selectionEnd:Z}=n.target;Q!==void 0&&Z!==void 0&&Y(()=>{n.target===document.activeElement&&O.indexOf(n.target.value)===0&&n.target.setSelectionRange(Q,Z)})}e.autogrow===!0&&y()}function _(n){t("animationend",n),y()}function b(n,O){x=()=>{R=null,e.type!=="number"&&d.hasOwnProperty("value")===!0&&delete d.value,e.modelValue!==n&&c!==n&&(c=n,O===!0&&($=!0),t("update:modelValue",n),Y(()=>{c===n&&(c=NaN)})),x=void 0},e.type==="number"&&(k=!0,d.value=n),e.debounce!==void 0?(R!==null&&clearTimeout(R),d.value=n,R=setTimeout(x,e.debounce)):x()}function y(){requestAnimationFrame(()=>{const n=m.value;if(n!==null){const O=n.parentNode.style,{scrollTop:Q}=n,{overflowY:Z,maxHeight:L}=f.platform.is.firefox===!0?{}:window.getComputedStyle(n),G=Z!==void 0&&Z!=="scroll";G===!0&&(n.style.overflowY="hidden"),O.marginBottom=n.scrollHeight-1+"px",n.style.height="1px",n.style.height=n.scrollHeight+"px",G===!0&&(n.style.overflowY=parseInt(L,10)<n.scrollHeight?"auto":"hidden"),O.marginBottom="",n.scrollTop=Q}})}function i(n){E(n),R!==null&&(clearTimeout(R),R=null),x!==void 0&&x(),t("change",n.target.value)}function g(n){n!==void 0&&ve(n),R!==null&&(clearTimeout(R),R=null),x!==void 0&&x(),k=!1,$=!1,delete d.value,e.type!=="file"&&setTimeout(()=>{m.value!==null&&(m.value.value=v.value!==void 0?v.value:"")})}function M(){return d.hasOwnProperty("value")===!0?d.value:v.value!==void 0?v.value:""}ae(()=>{g()}),ee(()=>{e.autogrow===!0&&y()}),Object.assign(S,{innerValue:v,fieldClass:w(()=>`q-${C.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:w(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:m,emitValue:b,hasValue:V,floatingLabel:w(()=>V.value===!0&&(e.type!=="number"||isNaN(v.value)===!1)||de(e.displayValue)),getControl:()=>q(C.value===!0?"textarea":"input",{ref:m,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...o.value,...l.value,...e.type!=="file"?{value:M()}:F.value}),getShadowControl:()=>q("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(C.value===!0?"":" text-no-wrap")},[q("span",{class:"invisible"},M()),q("span",e.shadowText)])});const B=Xe(S);return Object.assign(u,{focus:s,select:a,getNativeElement:()=>m.value}),we(u,"nativeEl",()=>m.value),B}}),vt=Re({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(e,{slots:t,emit:r}){const u=W(),f=N(null);let d=0;const c=[];function k(v){const A=typeof v=="boolean"?v:e.noErrorFocus!==!0,T=++d,D=(F,V)=>{r(`validation${F===!0?"Success":"Error"}`,V)},K=F=>{const V=F.validate();return typeof V.then=="function"?V.then(E=>({valid:E,comp:F}),E=>({valid:!1,comp:F,err:E})):Promise.resolve({valid:V,comp:F})};return(e.greedy===!0?Promise.all(c.map(K)).then(F=>F.filter(V=>V.valid!==!0)):c.reduce((F,V)=>F.then(()=>K(V).then(E=>{if(E.valid===!1)return Promise.reject(E)})),Promise.resolve()).catch(F=>[F])).then(F=>{if(F===void 0||F.length===0)return T===d&&D(!0),!0;if(T===d){const{comp:V,err:E}=F[0];if(E!==void 0&&console.error(E),D(!1,V),A===!0){const S=F.find(({comp:C})=>typeof C.focus=="function"&&je(C.$)===!1);S!==void 0&&S.comp.focus()}}return!1})}function $(){d++,c.forEach(v=>{typeof v.resetValidation=="function"&&v.resetValidation()})}function R(v){v!==void 0&&ie(v);const A=d+1;k().then(T=>{A===d&&T===!0&&(e.onSubmit!==void 0?r("submit",v):v!==void 0&&v.target!==void 0&&typeof v.target.submit=="function"&&v.target.submit())})}function x(v){v!==void 0&&ie(v),r("reset"),Y(()=>{$(),e.autofocus===!0&&e.noResetFocus!==!0&&m()})}function m(){fe(()=>{if(f.value===null)return;const v=f.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||f.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||f.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(f.value.querySelectorAll("[tabindex]"),A=>A.tabIndex!==-1);v?.focus({preventScroll:!0})})}De(Ce,{bindComponent(v){c.push(v)},unbindComponent(v){const A=c.indexOf(v);A!==-1&&c.splice(A,1)}});let H=!1;return Se(()=>{H=!0}),Me(()=>{H===!0&&e.autofocus===!0&&m()}),ee(()=>{e.autofocus===!0&&m()}),Object.assign(u.proxy,{validate:k,resetValidation:$,submit:R,reset:x,focus:m,getValidationComponents:()=>c}),()=>q("form",{class:"q-form",ref:f,onSubmit:R,onReset:x},X(t.default))}});export{ct as Q,vt as a,Ge as b,Xe as c,Je as d,ot as e,lt as f,de as g,dt as h,We as u};
