let e=document.createElement("style");e.innerHTML=".vben-header-lock-modal__entry{position:relative;height:240px;padding:130px 30px 60px;background:#fff;border-radius:10px}.vben-header-lock-modal__header{position:absolute;top:0;left:calc(50% - 45px);width:auto;text-align:center}.vben-header-lock-modal__header-img{width:70px;border-radius:50%}.vben-header-lock-modal__header-name{margin-top:5px}.vben-header-lock-modal__footer{text-align:center}",document.head.appendChild(e);import{a,u as r,au as t,s,dv as o,g as i,i as d,o as l,j as n,w as c,k as p,n as m,p as f,v as u}from"./index.a952a825.js";import"./xlsx.a48e520c.js";import"./index.041bce66.js";import"./Trigger.6f8f8573.js";import"./omit.1c9bfb01.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.ca2d5869.js";import"./CheckOutlined.44301b28.js";import{s as x}from"./index.a940dab4.js";import"./colors.c19e2bbc.js";import"./RightOutlined.94fd6a59.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.a1c8f40e.js";import"./index.51bebf76.js";import"./index.a172b251.js";import"./index.79d94cfe.js";import"./UpOutlined.f7c9c4e6.js";import"./index.2f405b3a.js";import"./index.a9201ccf.js";import"./index.47d13434.js";import"./index.daaac866.js";import"./CloseOutlined.56cac908.js";import"./FullscreenOutlined.2cf0b23d.js";import"./RightOutlined.07d991df.js";import"./useTimeout.3c09ffad.js";import"./tsxHelper.50b89473.js";import"./index.53160084.js";import"./resizeEvent.167fcdb9.js";import{_ as j}from"./header.0299ae16.js";import"./index.ab19a1be.js";import"./index.d9bface4.js";import{u as b}from"./useForm.9a5c5b7d.js";import{B as h,b as g}from"./index.87e5edf0.js";import"./useWindowSizeFn.03a16a67.js";var _=a({name:"LockModal",components:{BasicModal:h,BasicForm:x},setup(){const{t:e}=r(),{prefixCls:a}=t("header-lock-modal"),d=s((()=>{var e;return null==(e=i.getUserInfoState)?void 0:e.realName})),[l,{closeModal:n}]=g(),[c,{validateFields:p,resetFields:m}]=b({showActionButtonGroup:!1,schemas:[{field:"password",label:e("layout.header.lockScreenPassword"),component:"InputPassword",required:!0}]});return{t:e,prefixCls:a,getRealName:d,register:l,registerForm:c,handleLock:async function(){const e=(await p()).password;n(),o.commitLockInfoState({isLock:!0,pwd:e}),await m()}}}});_.render=function(e,a,r,t,s,o){const i=d("BasicForm"),x=d("a-button"),b=d("BasicModal");return l(),n(b,u({footer:null,title:e.t("layout.header.lockScreen")},e.$attrs,{class:e.prefixCls,onRegister:e.register}),{default:c((()=>[p("div",{class:`${e.prefixCls}__entry`},[p("div",{class:`${e.prefixCls}__header`},[p("img",{src:j,class:`${e.prefixCls}__header-img`},null,2),p("p",{class:`${e.prefixCls}__header-name`},m(e.getRealName),3)],2),p(i,{onRegister:e.registerForm,layout:"vertical"},null,8,["onRegister"]),p("div",{class:`${e.prefixCls}__footer`},[p(x,{type:"primary",block:"",class:"mt-2",onClick:e.handleLock},{default:c((()=>[f(m(e.t("layout.header.lockScreenBtn")),1)])),_:1},8,["onClick"])],2)],2)])),_:1},16,["title","class","onRegister"])};export default _;