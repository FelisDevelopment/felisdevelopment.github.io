"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5135],{3905:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},f=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,m=p["".concat(a,".").concat(d)]||p[d]||s[d]||i;return n?r.createElement(m,u(u({ref:t},f),{},{components:n})):r.createElement(m,u({ref:t},f))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,u=new Array(i);u[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[p]="string"==typeof e?e:o,u[1]=l;for(var c=2;c<i;c++)u[c]=n[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6064:function(e,t,n){n.r(t),n.d(t,{assets:function(){return a},contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var r=n(3117),o=(n(7294),n(3905));const i={title:"Fuel"},u=void 0,l={unversionedId:"fd_hud_esx/Optional/fuel",id:"fd_hud_esx/Optional/fuel",title:"Fuel",description:"Fuel",source:"@site/docs/fd_hud_esx/Optional/fuel.md",sourceDirName:"fd_hud_esx/Optional",slug:"/fd_hud_esx/Optional/fuel",permalink:"/docs/fd_hud_esx/Optional/fuel",draft:!1,editUrl:"https://github.com/FelisDevelopment/FelisDevelopment.github.io/tree/main/docs/fd_hud_esx/Optional/fuel.md",tags:[],version:"current",frontMatter:{title:"Fuel"},sidebar:"fd_hud_esx",previous:{title:"First Persom shooting from vehicle",permalink:"/docs/fd_hud_esx/Optional/firstPersonAim"},next:{title:"Reticle",permalink:"/docs/fd_hud_esx/Optional/reticle"}},a={},c=[{value:"Fuel",id:"fuel",level:3}],f={toc:c},p="wrapper";function s(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"fuel"},"Fuel"),(0,o.kt)("p",null,"At the moment, this HUD supports only ",(0,o.kt)("inlineCode",{parentName:"p"},"LegacyFuel"),", to show fuel near vehicle speed indicator. If you want, you can turn it off in the config."),(0,o.kt)("p",null,"Please update ",(0,o.kt)("inlineCode",{parentName:"p"},"Config.UseFuel")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),", to disable fuel indicator and restart your server."))}s.isMDXComponent=!0}}]);