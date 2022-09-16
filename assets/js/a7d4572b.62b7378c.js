"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6798],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=u(t),f=o,m=s["".concat(l,".").concat(f)]||s[f]||p[f]||i;return t?r.createElement(m,a(a({ref:n},d),{},{components:t})):r.createElement(m,a({ref:n},d))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=s;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},5442:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],c={title:"Optional"},l=void 0,u={unversionedId:"fd_radio/optional",id:"fd_radio/optional",title:"Optional",description:"Inventory images",source:"@site/docs/fd_radio/optional.md",sourceDirName:"fd_radio",slug:"/fd_radio/optional",permalink:"/docs/fd_radio/optional",editUrl:"https://github.com/FelisDevelopment/FelisDevelopment.github.io/tree/main/docs/fd_radio/optional.md",tags:[],version:"current",frontMatter:{title:"Optional"},sidebar:"fd_radio",previous:{title:"Lists",permalink:"/docs/fd_radio/lists"},next:{title:"Quick radio swap",permalink:"/docs/fd_radio/quickswap"}},d={},p=[{value:"Inventory images",id:"inventory-images",level:2},{value:"Join / Leave sound",id:"join--leave-sound",level:2}],s={toc:p};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"inventory-images"},"Inventory images"),(0,i.kt)("p",null,"We've provided new radio icon. You can find it in ",(0,i.kt)("inlineCode",{parentName:"p"},"optional/inventory icon/radio.png")),(0,i.kt)("h2",{id:"join--leave-sound"},"Join / Leave sound"),(0,i.kt)("p",null,"Under the hood, ",(0,i.kt)("inlineCode",{parentName:"p"},"fd_radio")," utilizies ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/plunkettscott/interact-sound"},"interact-sound"),", where we provided ",(0,i.kt)("inlineCode",{parentName:"p"},"radioclick.ogg")," sound file in ",(0,i.kt)("inlineCode",{parentName:"p"},"optional/join-leave sound/")," directory. If you're using ",(0,i.kt)("strong",{parentName:"p"},"interact-sound"),", please upload sound to its directory."),(0,i.kt)("p",null,"Otherwise, if you don't want to use interact-sound resource, use can override trigger in ",(0,i.kt)("inlineCode",{parentName:"p"},"modules/bridge/client.lua")," by changing trigger."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'function bridge.clickSound()\n    TriggerEvent("InteractSound_CL:PlayOnOne", "radioclick", 0.6)\nend\n')),(0,i.kt)("p",null,"You can also override function in specific framework overrides. Which are found at ",(0,i.kt)("inlineCode",{parentName:"p"},"modules/brige/client/*.lua"),"."))}f.isMDXComponent=!0}}]);