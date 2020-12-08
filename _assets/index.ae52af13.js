import{a as t,A as n,P as e,X as a,J as i,M as o,bt as r,c2 as c,k as l,ck as s,L as d,Y as u,ch as f,cc as v}from"./index.b140c207.js";import{T as g}from"./index.04005f70.js";function p(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var b=g.TabPane,h=t({name:"ACard",mixins:[n],props:{prefixCls:e.string,title:e.VNodeChild,extra:e.VNodeChild,bordered:e.looseBool.def(!0),bodyStyle:e.style,headStyle:e.style,loading:e.looseBool.def(!1),hoverable:e.looseBool.def(!1),type:e.string,size:e.oneOf(a("default","small")),actions:e.VNodeChild,tabList:{type:Array},tabBarExtraContent:e.VNodeChild,activeTabKey:e.string,defaultActiveTabKey:e.string,cover:e.VNodeChild,onTabChange:{type:Function}},setup:function(){return{configProvider:i("configProvider",o)}},data:function(){return{widerPadding:!1}},methods:{getAction:function(t){return t.map((function(n,e){return r(n)&&!c(n)||!r(n)?l("li",{style:{width:"".concat(100/t.length,"%")},key:"action-".concat(e)},[l("span",null,[n])]):null}))},triggerTabChange:function(t){this.$emit("tabChange",t)},isContainGrid:function(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return n.forEach((function(n){n&&s(n.type)&&n.type.__ANT_CARD_GRID&&(t=!0)})),t}},render:function(){var t,n,e,a=this.$props,i=a.prefixCls,o=a.headStyle,r=void 0===o?{}:o,c=a.bodyStyle,s=void 0===c?{}:c,h=a.loading,C=a.bordered,y=void 0===C||C,m=a.size,x=void 0===m?"default":m,P=a.type,k=a.tabList,A=a.hoverable,T=a.activeTabKey,N=a.defaultActiveTabKey,V=this.$slots,_=d(this),B=(0,this.configProvider.getPrefixCls)("card",i),w=u(this,"tabBarExtraContent"),G=(p(t={},"".concat(B),!0),p(t,"".concat(B,"-loading"),h),p(t,"".concat(B,"-bordered"),y),p(t,"".concat(B,"-hoverable"),!!A),p(t,"".concat(B,"-contain-grid"),this.isContainGrid(_)),p(t,"".concat(B,"-contain-tabs"),k&&k.length),p(t,"".concat(B,"-").concat(x),"default"!==x),p(t,"".concat(B,"-type-").concat(P),!!P),t),K=0===s.padding||"0px"===s.padding?{padding:24}:void 0,j=l("div",{class:"".concat(B,"-loading-content"),style:K},[l(f,{gutter:8},{default:function(){return[l(v,{span:22},{default:function(){return[l("div",{class:"".concat(B,"-loading-block")},null)]}})]}}),l(f,{gutter:8},{default:function(){return[l(v,{span:8},{default:function(){return[l("div",{class:"".concat(B,"-loading-block")},null)]}}),l(v,{span:15},{default:function(){return[l("div",{class:"".concat(B,"-loading-block")},null)]}})]}}),l(f,{gutter:8},{default:function(){return[l(v,{span:6},{default:function(){return[l("div",{class:"".concat(B,"-loading-block")},null)]}}),l(v,{span:18},{default:function(){return[l("div",{class:"".concat(B,"-loading-block")},null)]}})]}}),l(f,{gutter:8},{default:function(){return[l(v,{span:13},{default:function(){return[l("div",{class:"".concat(B,"-loading-block")},null)]}}),l(v,{span:9},{default:function(){return[l("div",{class:"".concat(B,"-loading-block")},null)]}})]}}),l(f,{gutter:8},{default:function(){return[l(v,{span:4},{default:function(){return[l("div",{class:"".concat(B,"-loading-block")},null)]}}),l(v,{span:3},{default:function(){return[l("div",{class:"".concat(B,"-loading-block")},null)]}}),l(v,{span:16},{default:function(){return[l("div",{class:"".concat(B,"-loading-block")},null)]}})]}})]),R=void 0!==T,$=(p(n={size:"large"},R?"activeKey":"defaultActiveKey",R?T:N),p(n,"tabBarExtraContent",w),p(n,"onChange",this.triggerTabChange),p(n,"class","".concat(B,"-head-tabs")),n),D=k&&k.length?l(g,$,{default:function(){return[k.map((function(t){var n=t.tab,e=t.slots,a=null==e?void 0:e.tab,i=void 0!==n?n:V[a]?V[a](t):null;return l(b,{tab:i,key:t.key,disabled:t.disabled},null)}))]}}):null,E=u(this,"title"),O=u(this,"extra");(E||O||D)&&(e=l("div",{class:"".concat(B,"-head"),style:r},[l("div",{class:"".concat(B,"-head-wrapper")},[E&&l("div",{class:"".concat(B,"-head-title")},[E]),O&&l("div",{class:"".concat(B,"-extra")},[O])]),D]));var S=u(this,"cover"),z=S?l("div",{class:"".concat(B,"-cover")},[S]):null,L=l("div",{class:"".concat(B,"-body"),style:s},[h?j:_]),M=u(this,"actions"),I=M&&M.length?l("ul",{class:"".concat(B,"-actions")},[this.getAction(M)]):null;return l("div",{class:G,ref:"cardContainerRef"},[e,z,_?L:null,I])}});var C=t({name:"ACardMeta",props:{prefixCls:e.string,title:e.VNodeChild,description:e.VNodeChild,avatar:e.VNodeChild},setup:function(){return{configProvider:i("configProvider",o)}},render:function(){var t,n,e,a=this.$props.prefixCls,i=(0,this.configProvider.getPrefixCls)("card",a),o=(t={},n="".concat(i,"-meta"),e=!0,n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t),r=u(this,"avatar"),c=u(this,"title"),s=u(this,"description"),d=r?l("div",{class:"".concat(i,"-meta-avatar")},[r]):null,f=c?l("div",{class:"".concat(i,"-meta-title")},[c]):null,v=s?l("div",{class:"".concat(i,"-meta-description")},[s]):null,g=f||v?l("div",{class:"".concat(i,"-meta-detail")},[f,v]):null;return l("div",{class:o},[d,g])}});function y(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var m=t({name:"ACardGrid",__ANT_CARD_GRID:!0,props:{prefixCls:e.string,hoverable:e.looseBool},setup:function(){return{configProvider:i("configProvider",o)}},render:function(){var t,n=this.$props,e=n.prefixCls,a=n.hoverable,i=void 0===a||a,o=(0,this.configProvider.getPrefixCls)("card",e),r=(y(t={},"".concat(o,"-grid"),!0),y(t,"".concat(o,"-grid-hoverable"),i),t);return l("div",{class:r},[d(this)])}});h.Meta=C,h.Grid=m,h.install=function(t){return t.component(h.name,h),t.component(C.name,C),t.component(m.name,m),t};export{h as C};