import{bq as c,aF as n,aA as o,ax as S,ay as i,az as r,br as u,aC as d,bs as q,bt as g,aB as f,aD as y,bu as w,aE as k,bv as x,bw as h}from"./index-BDNlv_Je.js";async function C(t){const a=await c(n(o,"users",t));if(a.exists()){const s=a.data();return{id:t,...s,createdAt:s.createdAt.toDate()}}return null}async function B(t){return(await S(r(o,"posts"),{...t,readCount:0,likeCount:0,commentCount:0,bookmarkCount:0,createdAt:i()})).id}async function D(t){console.log("### params : ",t);const a=[];t?.category&&a.push(u("category","==",t?.category)),t?.tags&&t?.tags.length>0&&a.push(u("tags","array-contains-any",t?.tags)),t?.sort&&a.push(d(t.sort,"desc")),t?.start&&a.push(q(t.start)),t?.limit&&a.push(g(t.limit));const s=f(r(o,"posts"),...a),e=await y(s),b=e.docs.map(l=>{const p=l.data();return{...p,id:l.id,createdAt:p.createdAt?.toDate()}}),A=e.docs[e.docs.length-1];return{items:b,lastItem:A}}async function m(t){const a=await c(n(o,"posts",t));if(!a.exists())throw new Error("No such document!");const s=a.data();return{id:a.id,...s,createdAt:s.createdAt?.toDate()}}async function P(t){await w(n(o,"posts",t),{readCount:x(1)})}async function $(t){await P(t);const a=await m(t),s=await C(a.uid);return{post:a,postUser:s}}async function R(t,a){await w(n(o,"posts",t),{...a,updatedAt:i()})}async function v(t){await k(n(o,"posts",t))}async function L(t,a){await h(n(o,"post_likes",`${t}_${a}`),{uid:t,postId:a,createdAt:i()})}async function U(t,a){await k(n(o,"post_likes",`${t}_${a}`))}async function z(t,a){return(await c(n(o,"post_likes",`${t}_${a}`))).exists()}async function E(t,a){await h(n(o,"users",t,"bookmarks",a),{createdAt:i()})}async function F(t,a){await k(n(o,"users",t,"bookmarks",a))}async function j(t,a){return(await c(n(o,"users",t,"bookmarks",a))).exists()}async function G(t){const a=f(r(o,"users",t,"bookmarks"),d("createdAt","desc"),g(6)),s=await y(a);return Promise.all(s.docs.map(e=>m(e.id)))}async function I(){const t=f(r(o,"tags"),u("count",">",0),d("count","desc"));return(await y(t)).docs.map(s=>s.data())}export{D as a,G as b,B as c,C as d,$ as e,v as f,I as g,m as h,z as i,L as j,j as k,F as l,E as m,U as r,R as u};
