"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[405],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(7294);function a(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(7462),a=t(7294),o=t(2389),i=t(7556),l=t(6010),u="tabItem_LplD";function s(e){var n,t,o,s=e.lazy,c=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),h=(0,i.lx)(b,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(n=null!=p?p:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=v[0])?void 0:o.props.value;if(null!==k&&!b.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,i.UB)(),y=g.tabGroupChoices,w=g.setTabGroupChoices,N=(0,a.useState)(k),C=N[0],_=N[1],T=[],O=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var x=y[m];null!=x&&x!==C&&b.some((function(e){return e.value===x}))&&_(x)}var q=function(e){var n=e.currentTarget,t=T.indexOf(n),r=b[t].value;r!==C&&(O(n),_(r),null!=m&&w(m,r))},I=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;t=T[r]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;t=T[a]||T[T.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},f)},b.map((function(e){var n=e.value,t=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,key:n,ref:function(e){return T.push(e)},onKeyDown:I,onFocus:q,onClick:q},o,{className:(0,l.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":C===n})}),null!=t?t:n)}))),s?(0,a.cloneElement)(v.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==C})}))))}function c(e){var n=(0,o.Z)();return a.createElement(s,(0,r.Z)({key:String(n)},e))}},3690:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=t(9877),l=t(8215),u=["components"],s={title:"Installation"},c=void 0,p={unversionedId:"rc_qb/index",id:"rc_qb/index",title:"Installation",description:"Please carefully read installation process, otherwise fd_rc resource will not work.",source:"@site/docs/rc_qb/index.md",sourceDirName:"rc_qb",slug:"/rc_qb/",permalink:"/docs/rc_qb/",editUrl:"https://github.com/FelisDevelopment/FelisDevelopment.github.io/tree/main/docs/rc_qb/index.md",tags:[],version:"current",frontMatter:{title:"Installation"},sidebar:"docs",previous:{title:"Config",permalink:"/docs/rc_qb/config"},next:{title:"Config",permalink:"/docs/rc_esx/config"}},d={},m=[{value:"Dependecies",id:"dependecies",level:2},{value:"Framework Specific",id:"framework-specific",level:3},{value:"Config",id:"config",level:2},{value:"Items",id:"items",level:2},{value:"Icons",id:"icons",level:3},{value:"Items",id:"items-1",level:3},{value:"Start",id:"start",level:2},{value:"Common Issues",id:"common-issues",level:2},{value:"Questions",id:"questions",level:3}],f={toc:m};function v(e){var n=e.components,t=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please carefully read installation process, otherwise ",(0,o.kt)("inlineCode",{parentName:"p"},"fd_rc")," resource will not work."))),(0,o.kt)("h2",{id:"dependecies"},"Dependecies"),(0,o.kt)("h3",{id:"framework-specific"},"Framework Specific"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"qbcore",label:"QBCore",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"Resource is compatible with QBCore, you can get it at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/qbcore-framework"},"QBCore Framework Repository"),". However, it's tested only with newest version."),(0,o.kt)("p",null,"Additionally you'll need:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/BerkieBb/qb-target"},"qb-target")," ","[mandatory]"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/qbcore-framework/qb-menu"},"qb-menu")," ","[mandatory]")),(0,o.kt)("p",null,"Please make sure to ensure it before ",(0,o.kt)("inlineCode",{parentName:"p"},"fd_rc")," resource, and don't forget to set your core resource in ",(0,o.kt)("inlineCode",{parentName:"p"},"shared/config.lua"),"."))),(0,o.kt)("h2",{id:"config"},"Config"),(0,o.kt)("p",null,"Depending on your framework please set appropriate framework core resource configuration in ",(0,o.kt)("inlineCode",{parentName:"p"},"shared/config.lua"),"."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"qbcore",label:"QBCore",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"    core_resource = 'qb-core'\n")))),(0,o.kt)("h2",{id:"items"},"Items"),(0,o.kt)("h3",{id:"icons"},"Icons"),(0,o.kt)("p",null,"First of all, please move icons from ",(0,o.kt)("inlineCode",{parentName:"p"},"images/")," folder to your inventory resource and add items to inventory config as specified below."),(0,o.kt)("h3",{id:"items-1"},"Items"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"qbcore",label:"QBCore",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"Add items to ",(0,o.kt)("inlineCode",{parentName:"p"},"shared/items.lua")," or where your ",(0,o.kt)("inlineCode",{parentName:"p"},"QBShared.Items")," is."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'    ["drone"] = {\n        ["name"] = "drone",\n        ["label"] = "Drone",\n        ["weight"] = 0,\n        ["type"] = "item",\n        ["image"] = "drone.png",\n        ["unique"] = true,\n        ["useable"] = true,\n        ["shouldClose"] = true,\n        ["combinable"] = nil,\n        ["description"] = "Lets have some fun."\n    },\n\n    ["rc_car"] = {\n        ["name"] = "rc_car",\n        ["label"] = "Remote Control Car",\n        ["weight"] = 0,\n        ["type"] = "item",\n        ["image"] = "rc_car.png",\n        ["unique"] = true,\n        ["useable"] = true,\n        ["shouldClose"] = true,\n        ["combinable"] = nil,\n        ["description"] = "It\'s not for kids."\n    },\n\n    ["rc_controller"] = {\n        ["name"] = "rc_controller",\n        ["label"] = "Remote Controller",\n        ["weight"] = 0,\n        ["type"] = "item",\n        ["image"] = "rc_controller.png",\n        ["unique"] = true,\n        ["useable"] = true,\n        ["shouldClose"] = true,\n        ["combinable"] = nil,\n        ["description"] = "It\'s not for kids."\n    },\n\n    ["rc_batteries"] = {\n        ["name"] = "rc_batteries",\n        ["label"] = "RC Batteries",\n        ["weight"] = 0,\n        ["type"] = "item",\n        ["image"] = "rc_batteries.png",\n        ["unique"] = false,\n        ["useable"] = false,\n        ["shouldClose"] = true,\n        ["combinable"] = nil,\n        ["description"] = "Recharge your drone or car."\n    },\n\n    ["rc_repair_kit"] = {\n        ["name"] = "rc_repair_kit",\n        ["label"] = "RC Repair Kit",\n        ["weight"] = 0,\n        ["type"] = "item",\n        ["image"] = "rc_repair_kit.png",\n        ["unique"] = false,\n        ["useable"] = false,\n        ["shouldClose"] = true,\n        ["combinable"] = nil,\n        ["description"] = "Repair your RC."\n    },\n')))),(0,o.kt)("h2",{id:"start"},"Start"),(0,o.kt)("p",null,"If you did everything as described above, please start your server and enjoy remote control vehicles!"),(0,o.kt)("h2",{id:"common-issues"},"Common Issues"),(0,o.kt)("h3",{id:"questions"},"Questions"),(0,o.kt)("p",null,"If you have an issue or questions, please open an issue in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/FelisDevelopment/fd_rc_support/issues"},"fd_rc support repo"),"."))}v.isMDXComponent=!0}}]);