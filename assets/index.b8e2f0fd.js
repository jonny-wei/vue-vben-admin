import{d as a,ag as e,q as r,e as t,h as s,o as n,i as o,w as p,m as u,l,j as m}from"./index.ab86ea0e.js";import{_ as i}from"./index.354d0644.js";import"./usePageContext.201ece62.js";var c=a({name:"TestTab",components:{PageWrapper:i},setup(){const{currentRoute:a}=e();return{params:r((()=>t(a).params))}}});const d=m("br",null,null,-1),f=u(" Keep Alive "),b=m("input",null,null,-1);c.render=function(a,e,r,t,m,i){const c=s("PageWrapper");return n(),o(c,{title:"带参数标签页",content:"支持带参数多tab缓存"},{default:p((()=>[u(" Current Param : "+l(a.params)+" ",1),d,f,b])),_:1})};export default c;