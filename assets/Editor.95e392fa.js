import{_ as e}from"./index.c1fdb1c2.js";import{a as i}from"./index.763e570f.js";import{d as s,aZ as t,h as o,i as r,o as a,j as n,w as d,k as m}from"./index.871a73d0.js";import{M as p}from"./index.2433074f.js";import{_ as l}from"./index.472abbb9.js";import"./index.38c8e961.js";import"./index.fdcc7c21.js";import"./index.47fbc714.js";import"./index.925fe361.js";import"./index.eae08916.js";import"./index.61099513.js";import"./index.9284d4e4.js";import"./useAttrs.fe97cbc4.js";import"./index.8d91dadc.js";import"./index.f4c035d6.js";import"./uuid.467c825e.js";import"./index.d469528e.js";import"./index.ebf495ed.js";import"./useTimeout.da8cb4b6.js";import"./useWindowSizeFn.78593242.js";import"./FullscreenOutlined.e76c502b.js";import"./index.a45b2b74.js";import"./index.2fc715fb.js";import"./index.673364b0.js";import"./index.643da10c.js";import"./download.2fd06b65.js";import"./domUtils.f6df7058.js";import"./index.3ab8cadf.js";import"./RightOutlined.726ff22e.js";import"./useScrollTo.25bb0b32.js";import"./animation.36cf3c57.js";import"./index.b0611c31.js";import"./index.9fbd6c39.js";import"./usePageContext.8b8441ee.js";const c=[{field:"title",component:"Input",label:"title",defaultValue:"标题",rules:[{required:!0}]},{field:"markdown",component:"Input",label:"markdown",defaultValue:"defaultValue",rules:[{required:!0,trigger:"blur"}],render:({model:e,field:i})=>t(p,{value:e[i],onChange:s=>{e[i]=s}})}];var u=s({components:{BasicForm:e,CollapseContainer:i,PageWrapper:l},setup(){const{createMessage:e}=o();return{schemas:c,handleSubmit:i=>{e.success("click search,values:"+JSON.stringify(i))}}}});u.render=function(e,i,s,t,o,p){const l=r("BasicForm"),c=r("CollapseContainer"),u=r("PageWrapper");return a(),n(u,{title:"MarkDown组件嵌入Form示例"},{default:d((()=>[m(c,{title:"MarkDown表单"},{default:d((()=>[m(l,{labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])])),_:1})])),_:1})};export default u;