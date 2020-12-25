import{a as e,i as l,o,j as i,k as a,w as s,p as t}from"./index.a952a825.js";import"./xlsx.a48e520c.js";import"./index.041bce66.js";import"./Trigger.6f8f8573.js";import"./omit.1c9bfb01.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.ca2d5869.js";import"./CheckOutlined.44301b28.js";import{s as n}from"./index.a940dab4.js";import"./colors.c19e2bbc.js";import"./RightOutlined.94fd6a59.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.a1c8f40e.js";import"./index.51bebf76.js";import"./index.a172b251.js";import"./index.79d94cfe.js";import"./UpOutlined.f7c9c4e6.js";import"./index.2f405b3a.js";import"./index.a9201ccf.js";import"./index.47d13434.js";import"./index.daaac866.js";import{a as p}from"./index.1619f591.js";import"./RightOutlined.07d991df.js";import"./useTimeout.3c09ffad.js";import"./tsxHelper.50b89473.js";import"./index.ea7d8d45.js";import"./domUtils.ad06f69d.js";import"./index.53160084.js";import"./resizeEvent.167fcdb9.js";import"./animation.581865d4.js";import"./useScrollTo.3b50ae2e.js";import"./index.ab19a1be.js";import"./index.d9bface4.js";import{u as d}from"./useForm.9a5c5b7d.js";const c=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},show:({values:e})=>!!e.field5},{field:"field2",component:"Input",label:"字段2",colProps:{span:8},ifShow:({values:e})=>!!e.field6},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8},dynamicDisabled:({values:e})=>!!e.field7},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},dynamicRules:({values:e})=>e.field8?[{required:!0,message:"字段4必填"}]:[],componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field11",component:"DatePicker",label:"字段11",colProps:{span:8}},{field:"field5",component:"Switch",label:"是否显示字段1(css控制)",colProps:{span:8},labelWidth:200},{field:"field6",component:"Switch",label:"是否显示字段2(dom控制)",colProps:{span:8},labelWidth:200},{field:"field7",component:"Switch",label:"是否禁用字段3",colProps:{span:8},labelWidth:200},{field:"field8",component:"Switch",label:"字段4是否必填",colProps:{span:8},labelWidth:200}],r=[{field:"f1",component:"Input",label:"F1",colProps:{span:12},labelWidth:200,componentProps:({formModel:e})=>({placeholder:"同步f2的值为f1",onChange:l=>{e.f2=l.target.value}})},{field:"f2",component:"Input",label:"F2",colProps:{span:12},labelWidth:200,componentProps:{disabled:!0}},{field:"f3",component:"Input",label:"F3",colProps:{span:12},labelWidth:200,componentProps:({formActionType:e,tableAction:l})=>({placeholder:"值改变时执行查询,查看控制台",onChange:async()=>{const{validate:l}=e;await l()}})}];var m=e({components:{BasicForm:n,CollapseContainer:p},setup(){const[e,{setProps:l,updateSchema:o,appendSchemaByField:i,removeSchemaByFiled:a}]=d({labelWidth:120,schemas:c,actionColOptions:{span:24}}),[s]=d({labelWidth:120,schemas:r,actionColOptions:{span:24}});return{register:e,register1:s,schemas:c,setProps:l,changeLabel3:function(){o({field:"field3",label:"字段3 New"})},changeLabel34:function(){o([{field:"field3",label:"字段3 New++"},{field:"field4",label:"字段4 New++"}])},appendField:function(){i({field:"field10",label:"字段10",component:"Input",colProps:{span:8}},"field3")},deleteField:function(){a("field11")}}}});const f={class:"m-4"},b={class:"mb-4"},u=t("更改字段3label"),j=t("同时更改字段3,4label"),h=t("往字段3后面插入字段10"),P=t("删除字段11");m.render=function(e,t,n,p,d,c){const r=l("a-button"),m=l("BasicForm"),g=l("CollapseContainer");return o(),i("div",f,[a("div",b,[a(r,{onClick:e.changeLabel3,class:"mr-2"},{default:s((()=>[u])),_:1},8,["onClick"]),a(r,{onClick:e.changeLabel34,class:"mr-2"},{default:s((()=>[j])),_:1},8,["onClick"]),a(r,{onClick:e.appendField,class:"mr-2"},{default:s((()=>[h])),_:1},8,["onClick"]),a(r,{onClick:e.deleteField,class:"mr-2"},{default:s((()=>[P])),_:1},8,["onClick"])]),a(g,{title:"动态表单示例,动态根据表单内其他值改变"},{default:s((()=>[a(m,{onRegister:e.register},null,8,["onRegister"])])),_:1}),a(g,{class:"mt-5",title:"componentProps动态改变"},{default:s((()=>[a(m,{onRegister:e.register1},null,8,["onRegister"])])),_:1})])};export default m;