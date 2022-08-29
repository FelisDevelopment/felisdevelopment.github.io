"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[258],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(c,".").concat(m)]||p[m]||s[m]||i;return n?o.createElement(f,a(a({ref:t},d),{},{components:n})):o.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6371:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],l={title:"Editing colors, icons and etc."},c=void 0,u={unversionedId:"hud/methods",id:"hud/methods",title:"Editing colors, icons and etc.",description:"Edit colors, icon",source:"@site/docs/hud/methods.md",sourceDirName:"hud",slug:"/hud/methods",permalink:"/docs/hud/methods",editUrl:"https://github.com/FelisDevelopment/FelisDevelopment.github.io/tree/main/docs/hud/methods.md",tags:[],version:"current",frontMatter:{title:"Editing colors, icons and etc."},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/hud/"},next:{title:"(optional) Pilot license",permalink:"/docs/hud/pilot"}},d={},s=[{value:"Edit colors, icon",id:"edit-colors-icon",level:2}],p={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"edit-colors-icon"},"Edit colors, icon"),(0,i.kt)("p",null,"HUD is fully dynamic and pretty much nothing is hardcoded, that's why you can do whatever you want, and edit it to your liking. Our UI library is powerful and very optimised."),(0,i.kt)("p",null,"For example, if you want to change hunger filling color, just go to ",(0,i.kt)("inlineCode",{parentName:"p"},"modules/hud/client/basicNeeds.lua"),", open it and find ",(0,i.kt)("inlineCode",{parentName:"p"},"line 22"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"hunger = ui.indicator({\n    icon = 'fa-solid fa-pizza-slice',\n    bg = 'bg-amber-300',\n    position = 4,\n    value = 50\n})\n")),(0,i.kt)("p",null,"As you can see, this defines hunger indicator, it's position, icon, value, and filling background. Indicator class exposes few methods like ",(0,i.kt)("inlineCode",{parentName:"p"},"update"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"show"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"hide"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"getLastValue"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"isShown"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"delete"),". So there's few ways to change color, icon, value, position."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can change current values in indicator creation and forget about it, or if you want to be awesome, do it in more advanced way. For example go to the end of the file and add:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"Citizen.CreateThread(function()\n    hunger.update('bg', 'bg-red-500')\nend)\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Done! More documentation on how indicator class works and what methods it has, will be up soon with our library documentation.")))}m.isMDXComponent=!0}}]);