import{d as e,r as o,h as s,o as i,i as t,w as r,j as a,a0 as n}from"./index.ab86ea0e.js";import{_ as d}from"./index.a7622831.js";import"./_stringToArray.c6e9c157.js";import"./domUtils.77ddbe1d.js";import"./index.1d647a6e.js";import"./index.09b61073.js";import"./index.6b7fc4eb.js";import{_ as m,a as l}from"./index.86c70840.js";import"./FullscreenOutlined.e3f22a98.js";import"./RightOutlined.a9c21d9a.js";import"./useTimeout.5e8ddc88.js";import"./index.326fea2a.js";import"./animation.55bc8f11.js";import"./useScrollTo.f3400ee7.js";import"./useAttrs.6c248db9.js";import"./useWindowSizeFn.15cac271.js";import"./index.8c6f99a8.js";import"./uuid.a6cec785.js";import"./download.b2f1bf52.js";import{u as p}from"./useForm.6db0bffb.js";const c=[{field:"field1",component:"Input",label:"字段1",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:12}}];var u=e({components:{BasicModal:m,BasicForm:d},setup(){const e=o({}),[s,{}]=p({labelWidth:120,schemas:c,showActionButtonGroup:!1,actionColOptions:{span:24}}),[i]=l((o=>{e.value={field2:o.data,field1:o.info}}));return{register:i,schemas:c,registerForm:s,model:e}}});u.render=function(e,o,d,m,l,p){const c=s("BasicForm"),u=s("BasicModal");return i(),t(u,n(e.$attrs,{onRegister:e.register,title:"Modal Title"}),{default:r((()=>[a(c,{onRegister:e.registerForm,model:e.model},null,8,["onRegister","model"])])),_:1},16,["onRegister"])};export default u;