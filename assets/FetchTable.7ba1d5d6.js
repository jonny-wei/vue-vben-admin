import{d as e,h as t,o as i,i as o,j as r,w as s,m as a}from"./index.ab86ea0e.js";import"./index.a7622831.js";import"./_stringToArray.c6e9c157.js";import"./domUtils.77ddbe1d.js";import"./index.1d647a6e.js";import"./index.09b61073.js";import"./index.6b7fc4eb.js";import"./CheckOutlined.04c29d08.js";import"./index.86c70840.js";import{_ as n}from"./index.c5ff829d.js";import"./FullscreenOutlined.e3f22a98.js";import"./RightOutlined.a9c21d9a.js";import"./SettingOutlined.3a48cdd9.js";import"./useTimeout.5e8ddc88.js";import"./index.326fea2a.js";import"./animation.55bc8f11.js";import"./useScrollTo.f3400ee7.js";import"./useAttrs.6c248db9.js";import"./useWindowSizeFn.15cac271.js";import"./index.8c6f99a8.js";import"./uuid.a6cec785.js";import"./download.b2f1bf52.js";import"./useForm.6db0bffb.js";import"./useSortable.25942234.js";import"./useExpose.34c51c0a.js";import{u as d}from"./useTable.fd923f8f.js";import{getBasicColumns as m}from"./tableData.7aa0192c.js";import{d as p}from"./table.a670c0e8.js";var c=e({components:{BasicTable:n},setup(){const[e,{reload:t}]=d({title:"远程加载示例",api:p,columns:m()});return{registerTable:e,handleReloadCurrent:function(){t()},handleReload:function(){t({page:1})}}}});const l={class:"p-4"},u=a(" 刷新当前页 "),j=a(" 刷新并返回第一页 ");c.render=function(e,a,n,d,m,p){const c=t("a-button"),f=t("BasicTable");return i(),o("div",l,[r(f,{onRegister:e.registerTable},{toolbar:s((()=>[r(c,{type:"primary",onClick:e.handleReloadCurrent},{default:s((()=>[u])),_:1},8,["onClick"]),r(c,{type:"primary",onClick:e.handleReload},{default:s((()=>[j])),_:1},8,["onClick"])])),_:1},8,["onRegister"])])};export default c;