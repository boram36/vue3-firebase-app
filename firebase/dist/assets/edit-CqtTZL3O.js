import{P as d,as as g,af as n,D as v,o as y,i as b,q as r,j as o,ak as _,al as Q,a as x,V as P,ag as i,ad as S,am as U,ao as k}from"./index-BDNlv_Je.js";import{Q as T}from"./QPage-BvBQmXlz.js";import{h as w,u as B}from"./post-F3Q2EDJ-.js";import{_ as V}from"./PostForm-DD6YPlhU.js";import{_ as $}from"./BaseCard-KX6_pNxg.js";import{b as u}from"./route-block-B_A1xBdJ.js";import"./QForm-DsXfaSk5.js";import"./QChip-BZLHqyL-.js";import"./QItemLabel-D3sOM9N0.js";import"./QCardActions-C4SI-P8W.js";import"./validate-rules-Cui1dtJC.js";import"./tiptap.scss_vue_type_style_index_0_src_true_lang-C51bjrN8.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const q=()=>({title:"",category:"",content:"",tags:[]}),C={__name:"edit",setup(D){const l=d(),m=g();n(()=>w(l.params.id),{},{onSuccess:s=>{t.value.title=s.title,t.value.category=s.category,t.value.content=s.content,t.value.tags=s.tags}});const{isLoading:p,execute:c}=n(B,null,{immediate:!1,throwError:!0,onSuccess:()=>{m.notify("수정완료")}}),f=async()=>{confirm("수정 하시겠어요?")!==!1&&c(1e3,l.params.id,t.value)},t=v(q());return(s,a)=>(y(),b(T,{padding:""},{default:r(()=>[o($,null,{default:r(()=>[o(_,null,{default:r(()=>[o(Q,null,{default:r(()=>a[4]||(a[4]=[x("글쓰기")])),_:1})]),_:1}),o(V,{title:t.value.title,"onUpdate:title":a[0]||(a[0]=e=>t.value.title=e),category:t.value.category,"onUpdate:category":a[1]||(a[1]=e=>t.value.category=e),content:t.value.content,"onUpdate:content":a[2]||(a[2]=e=>t.value.content=e),tags:t.value.tags,"onUpdate:tags":a[3]||(a[3]=e=>t.value.tags=e),onSubmit:f},{actions:r(()=>[P(o(i,{flat:"",label:"취소"},null,512),[[k]]),o(i,{type:"submit",flat:"",label:"수정",color:"primary",loading:S(p)},null,8,["loading"])]),_:1},8,["title","category","content","tags"]),o(U)]),_:1})]),_:1}))}};typeof u=="function"&&u(C);export{C as default};
