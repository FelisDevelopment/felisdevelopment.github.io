"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8295],{3905:function(e,r,n){n.d(r,{Zo:function(){return c},kt:function(){return p}});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function m(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),s=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},c=function(e){var r=s(e.components);return t.createElement(l.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),u=s(n),p=a,d=u["".concat(l,".").concat(p)]||u[p]||f[p]||o;return n?t.createElement(d,i(i({ref:r},c),{},{components:n})):t.createElement(d,i({ref:r},c))}));function p(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var m={};for(var l in r)hasOwnProperty.call(r,l)&&(m[l]=r[l]);m.originalType=e,m.mdxType="string"==typeof e?e:a,i[1]=m;for(var s=2;s<o;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5724:function(e,r,n){n.r(r),n.d(r,{assets:function(){return c},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return m},metadata:function(){return s},toc:function(){return f}});var t=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],m={title:"Jammers"},l=void 0,s={unversionedId:"fd_radio/jammers",id:"fd_radio/jammers",title:"Jammers",description:"Disable jammers",source:"@site/docs/fd_radio/jammers.md",sourceDirName:"fd_radio",slug:"/fd_radio/jammers",permalink:"/docs/fd_radio/jammers",editUrl:"https://github.com/FelisDevelopment/FelisDevelopment.github.io/tree/main/docs/fd_radio/jammers.md",tags:[],version:"current",frontMatter:{title:"Jammers"},sidebar:"fd_radio",previous:{title:"Getting started",permalink:"/docs/fd_radio/"},next:{title:"Lists",permalink:"/docs/fd_radio/lists"}},c={},f=[{value:"Disable jammers",id:"disable-jammers",level:2},{value:"Config explanation",id:"config-explanation",level:2}],u={toc:f};function p(e){var r=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"disable-jammers"},"Disable jammers"),(0,o.kt)("p",null,"To disable range for everyone, please update config ",(0,o.kt)("inlineCode",{parentName:"p"},"Config.AllowJammers")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"Config.AllowJammers = false\n")),(0,o.kt)("h2",{id:"config-explanation"},"Config explanation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"Config.AllowJammers = false -- Allow jammers to be used\nConfig.JammerRadius = 20\nConfig.JammerPickUpUse = '3d' -- Avaiable: 3d (draws 3d text above jammer), qb-target, qtarget, ox_target\nConfig.PlaceJammerCommand = 'placejammer' -- Command to place jammer, to disable it set it to false (only work with Framework = none)\nConfig.UseJammerItem = false -- Item name to use as jammer, only works with QB or ESX, set false to disable\nConfig.JammerItemName = \"radio_jammer\" -- item name\nConfig.MinimumDistanceBetweenJammers = 100 -- Minimum distance between jammers placement\nConfig.DisableJammerForJobs = { 'police' } -- Only works for QB or ESX\nConfig.DisableJammerForChannels = { -- Disables jammer functionality for specific channels\n    [2] = true\n}\n")))}p.isMDXComponent=!0}}]);