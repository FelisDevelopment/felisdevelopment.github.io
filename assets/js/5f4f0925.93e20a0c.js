"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3866],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=i(n),p=o,h=d["".concat(l,".").concat(p)]||d[p]||f[p]||a;return n?r.createElement(h,u(u({ref:t},c),{},{components:n})):r.createElement(h,u({ref:t},c))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,u=new Array(a);u[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,u[1]=s;for(var i=2;i<a;i++)u[i]=n[i];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6702:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return f}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),u=["components"],s={title:"HUD defaults"},l=void 0,i={unversionedId:"fd_hud/Config/defaults",id:"fd_hud/Config/defaults",title:"HUD defaults",description:"Current defaults",source:"@site/docs/fd_hud/Config/defaults.md",sourceDirName:"fd_hud/Config",slug:"/fd_hud/Config/defaults",permalink:"/docs/fd_hud/Config/defaults",editUrl:"https://github.com/FelisDevelopment/FelisDevelopment.github.io/tree/main/docs/fd_hud/Config/defaults.md",tags:[],version:"current",frontMatter:{title:"HUD defaults"},sidebar:"fd_hud",previous:{title:"Config",permalink:"/docs/fd_hud/Config/current"},next:{title:"Editing colors, icons and etc.",permalink:"/docs/fd_hud/Design/methods"}},c={},f=[{value:"Current defaults",id:"current-defaults",level:2}],d={toc:f};function p(e){var t=e.components,n=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"current-defaults"},"Current defaults"),(0,a.kt)("p",null,"HUD preset default values can be found at: ",(0,a.kt)("inlineCode",{parentName:"p"},"modules/hud/shared/defaults.lua"),", changing those will affect new preset creation, and new users will get those default settings."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"config.DefaultSettings = {\n    map = 'square', -- square or circle\n    theme = 'reign', -- any theme\n    delayed = true, -- is general hud thread delayed or not, might increase FPS for low end users\n    showHealthAlways = true,\n    showHealthLowerThan = 50,\n    showArmorAlways = true,\n    showArmorLowerThan = 50,\n    showStressAlways = false,\n    showStressHigherThan = 10,\n    showHungerAlways = true,\n    showHungerLowerThan = 50,\n    showThirstAlways = true,\n    showThirstLowerThan = 50,\n    showOxygenAlways = false,\n    showOxygenLowerThan = 50,\n    showSprintAlways = false,\n    showSprintLowerThan = 50,\n    compassFollowCam = true,\n    compassDelayed = true,\n    vehicleHudDelayed = true,\n    showFuelAlways = true,\n    showFuelLowerThan = 50,\n    notifyLowFuel = true,\n    cinematicEnabled = false,\n    cinematicBarsHeight = 10\n}\n\n")))}p.isMDXComponent=!0}}]);