let s=document.createElement("style");s.innerHTML=".flow-analysis{width:100%;background:#fff}.flow-analysis__left{padding:10px 20px!important;border-right:1px solid rgba(0,0,0,.06);border-radius:0}.flow-analysis__score{margin-top:20px;font-size:30px;line-height:38px;color:rgba(0,0,0,.85)}.flow-analysis__score span{font-size:20px;line-height:28px;color:rgba(0,0,0,.85)}.flow-analysis__rank{margin:16px 0;font-size:12px;line-height:20px;color:#7c8087}.flow-analysis__rank span{display:inline-block;margin-left:10px;color:#1c1d21}.flow-analysis__rs li{display:flex;line-height:28px;justify-content:space-between}.flow-analysis__rs li span:nth-child(1){font-size:14px;color:#1c1d21}.flow-analysis__rs li span:nth-child(2){font-size:16px;color:#1c1d21}",document.head.appendChild(s);import{a as l,W as a,bF as i,ad as n,bG as e}from"./index.46d6012c.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.211ac153.js";import"./CheckOutlined.6cb39299.js";import"./RightOutlined.20ea3258.js";import"./types.3d31dfe9.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.4de47bd7.js";import{T as t}from"./index.491d83d6.js";import"./UpOutlined.21cc6fac.js";import"./LeftOutlined.f8e3b6ba.js";import{D as o}from"./index.74af370d.js";import{P as r}from"./index.53fd9e8f.js";import{a as p}from"./index.5dad729e.js";import"./RightOutlined.252275e0.js";import"./useTimeout.3355995f.js";import"./useECharts.74b57699.js";import"./props.c31746e0.js";import"./tsxHelper.31dccd68.js";import"./index.104cb9e3.js";import"./domUtils.fabff8c2.js";import"./index.7ca758f2.js";import"./animation.e9fae4fd.js";import"./useScrollTo.d52fcb20.js";import d from"./TrendLine.668b8a59.js";const c="flow-analysis";var f=l({name:"AnalysisFLow",setup(){const s=()=>a(i,null,(()=>a(n,null,a(e,{md:24,lg:8},(()=>a(p,{title:"整体流量评分",canExpan:!1,class:`${c}__left`},(()=>a("div",null,a("div",{class:`${c}__score`},"86.2",a("span",null,"分")),a("div",{class:`${c}__rank`},"排名",a("span",null,"前20%")),a(r,{percent:70,showInfo:!1,status:"active"}),a(o,null),a("ul",{class:`${c}__rs`},a("li",null,a("span",null,"平均分"),a("span",null,"77.5")),a("li",null,a("span",null,"最高分"),a("span",null,"99.5")),a("li",null,a("span",null,"最低分"),a("span",null,"56.5")))))))),a(e,{md:24,lg:16},(()=>a(p,{title:"整体流量趋势",canExpan:!1},(()=>a(d,null))))))));return()=>a(t,{class:c,"default-active-key":"1"},(()=>[a(t.TabPane,{key:"1",tab:"产品一"},(()=>s())),a(t.TabPane,{key:"2",tab:"产品二"},(()=>s())),a(t.TabPane,{key:"3",tab:"产品三"},(()=>s()))]))}});export default f;