import{d as a,s,u}from"./index-BDNlv_Je.js";function o(t){const{isAuthenticated:e}=s(u());return t.matched.some(r=>r.meta.requiresAuth)&&!e.value?(alert("로그인이 필요한 페이지입니다."),"/"):!0}const i=a(async({app:t,router:e})=>{e.beforeEach(o)});export{i as default};
