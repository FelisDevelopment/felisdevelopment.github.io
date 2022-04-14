"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[237],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return p}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),p=a,g=d["".concat(s,".").concat(p)]||d[p]||m[p]||i;return t?r.createElement(g,o(o({ref:n},c),{},{components:t})):r.createElement(g,o({ref:n},c))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(7294);function a(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(7462),a=t(7294),i=t(2389),o=t(7556),l=t(6010),s="tabItem_LplD";function u(e){var n,t,i,u=e.lazy,c=e.block,m=e.defaultValue,d=e.values,p=e.groupId,g=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),h=(0,o.lx)(b,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(n=null!=m?m:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(i=f[0])?void 0:i.props.value;if(null!==k&&!b.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,o.UB)(),y=v.tabGroupChoices,w=v.setTabGroupChoices,x=(0,a.useState)(k),C=x[0],N=x[1],I=[],T=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var _=y[p];null!=_&&_!==C&&b.some((function(e){return e.value===_}))&&N(_)}var q=function(e){var n=e.currentTarget,t=I.indexOf(n),r=b[t].value;r!==C&&(T(n),N(r),null!=p&&w(p,r))},E=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=I.indexOf(e.currentTarget)+1;t=I[r]||I[0];break;case"ArrowLeft":var a=I.indexOf(e.currentTarget)-1;t=I[a]||I[I.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},g)},b.map((function(e){var n=e.value,t=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,key:n,ref:function(e){return I.push(e)},onKeyDown:E,onFocus:q,onClick:q},i,{className:(0,l.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":C===n})}),null!=t?t:n)}))),u?(0,a.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==C})}))))}function c(e){var n=(0,i.Z)();return a.createElement(u,(0,r.Z)({key:String(n)},e))}},4586:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return p}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=t(9877),l=t(8215),s=["components"],u={title:"Installation"},c=void 0,m={unversionedId:"storage/index",id:"storage/index",title:"Installation",description:"Please carefully read installation process, otherwise fd_storage resource will not work.",source:"@site/docs/storage/index.md",sourceDirName:"storage",slug:"/storage/",permalink:"/docs/storage/",editUrl:"https://github.com/FelisDevelopment/FelisDevelopment.github.io/tree/main/docs/storage/index.md",tags:[],version:"current",frontMatter:{title:"Installation"},sidebar:"docs",previous:{title:"Config",permalink:"/docs/storage/config"}},d={},p=[{value:"Dependecies",id:"dependecies",level:2},{value:"Global dependencies",id:"global-dependencies",level:3},{value:"Framework Specific",id:"framework-specific",level:3},{value:"Config",id:"config",level:2},{value:"Items",id:"items",level:2},{value:"Icons",id:"icons",level:3},{value:"Items",id:"items-1",level:3},{value:"Start",id:"start",level:2},{value:"Common Issues",id:"common-issues",level:2},{value:"Questions",id:"questions",level:3}],g={toc:p};function f(e){var n=e.components,t=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Please carefully read installation process, otherwise ",(0,i.kt)("inlineCode",{parentName:"p"},"fd_storage")," resource will not work."))),(0,i.kt)("h2",{id:"dependecies"},"Dependecies"),(0,i.kt)("h3",{id:"global-dependencies"},"Global dependencies"),(0,i.kt)("p",null,"We've tried to include to make resource as standalone or framework depended as possible, so you won't need to that many dependencies. For this resource to work, you'll need to install"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/HiHowdy/howdy-hackminigame"},"Howdy Hackminigame")," ","[mandatory for hacking containers]")),(0,i.kt)("p",null,"and other framework specific dependencies."),(0,i.kt)("h3",{id:"framework-specific"},"Framework Specific"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"qbcore",label:"QBCore",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"Resource should be compatible with older and newest QBCore versions, you can get it at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/qbcore-framework"},"QBCore Framework Repository"),". However, it's tested only with newest version."),(0,i.kt)("p",null,"Additionally you'll need:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/BerkieBb/qb-target"},"qb-target"))),(0,i.kt)("p",null,"Please make sure to ensure it before ",(0,i.kt)("inlineCode",{parentName:"p"},"fd_storage")," resource, and don't forget to set your framework and core resource in ",(0,i.kt)("inlineCode",{parentName:"p"},"shared/config.lua"),".")),(0,i.kt)(l.Z,{value:"esx",label:"ESX",mdxType:"TabItem"},(0,i.kt)("p",null,"Use a compatible version of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/esx-framework/esx-legacy"},"ESX Legacy")," (1.6.0+).\nAdditionally you'll need:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/overextended/ox_inventory"},"ox_inventory")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/overextended/qtarget"},"qtarget"))),(0,i.kt)("p",null,"Please make sure to ensure them before ",(0,i.kt)("inlineCode",{parentName:"p"},"fd_storage")," resource, and don't forget to set your framework and core resource in ",(0,i.kt)("inlineCode",{parentName:"p"},"shared/config.lua"),"."))),(0,i.kt)("h2",{id:"config"},"Config"),(0,i.kt)("p",null,"Depending on your framework please set appropriate framework configuration in ",(0,i.kt)("inlineCode",{parentName:"p"},"shared/config.lua"),"."),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"qbcore",label:"QBCore",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"core = {\n    framework = 'qbcore', -- available: qbcore, esx\n    resource = 'qb-core' -- for qbcore usually: qb-core, for esx usually: es_extended\n},\n"))),(0,i.kt)(l.Z,{value:"esx",label:"ESX",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"core = {\n    framework = 'esx', -- available: qbcore, esx\n    resource = 'es_extended' -- for qbcore usually: qb-core, for esx usually: es_extended\n},\n")))),(0,i.kt)("h2",{id:"items"},"Items"),(0,i.kt)("h3",{id:"icons"},"Icons"),(0,i.kt)("p",null,"First of all, please move icons from ",(0,i.kt)("inlineCode",{parentName:"p"},"images/")," folder to your inventory resource and add items to inventory config as specified below."),(0,i.kt)("h3",{id:"items-1"},"Items"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"qbcore",label:"QBCore",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"Add items to ",(0,i.kt)("inlineCode",{parentName:"p"},"shared/items.lua")," or where your ",(0,i.kt)("inlineCode",{parentName:"p"},"QBShared.Items")," is."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'    ["smallcrate"] = {\n        ["name"] = "smallcrate",\n        ["label"] = "Small Crate",\n        ["weight"] = 0,\n        ["type"] = "item",\n        ["image"] = "smallcrate.png",\n        ["unique"] = true,\n        ["useable"] = true,\n        ["shouldClose"] = true,\n        ["combinable"] = nil,\n        ["description"] = "Is there something in it?"\n    },\n    ["mediumcrate"] = {\n        ["name"] = "mediumcrate",\n        ["label"] = "Medium Crate",\n        ["weight"] = 0,\n        ["type"] = "item",\n        ["image"] = "mediumcrate.png",\n        ["unique"] = true,\n        ["useable"] = true,\n        ["shouldClose"] = true,\n        ["combinable"] = nil,\n        ["description"] = "Is there something in it?"\n    },\n    ["bigcrate"] = {\n        ["name"] = "bigcrate",\n        ["label"] = "Big Crate",\n        ["weight"] = 0,\n        ["type"] = "item",\n        ["image"] = "bigcrate.png",\n        ["unique"] = true,\n        ["useable"] = true,\n        ["shouldClose"] = true,\n        ["combinable"] = nil,\n        ["description"] = "Is there something in it?"\n    },\n    ["smallcontainer"] = {\n        ["name"] = "smallcontainer",\n        ["label"] = "Small Container",\n        ["weight"] = 0,\n        ["type"] = "item",\n        ["image"] = "smallcontainer.png",\n        ["unique"] = true,\n        ["useable"] = true,\n        ["shouldClose"] = true,\n        ["combinable"] = nil,\n        ["description"] = "Is there something in it?"\n    },\n    ["mediumcontainer"] = {\n        ["name"] = "mediumcontainer",\n        ["label"] = "Medium Container",\n        ["weight"] = 0,\n        ["type"] = "item",\n        ["image"] = "mediumcontainer.png",\n        ["unique"] = true,\n        ["useable"] = true,\n        ["shouldClose"] = true,\n        ["combinable"] = nil,\n        ["description"] = "Is there something in it?"\n    },\n    ["bigcontainer"] = {\n        ["name"] = "bigcontainer",\n        ["label"] = "Big Container",\n        ["weight"] = 0,\n        ["type"] = "item",\n        ["image"] = "bigcontainer.png",\n        ["unique"] = true,\n        ["useable"] = true,\n        ["shouldClose"] = true,\n        ["combinable"] = nil,\n        ["description"] = "Is there something in it?"\n    },\n    ["smalltrapcrate"] = {\n        ["name"] = "smalltrapcrate",\n        ["label"] = "Small Fake Crate",\n        ["weight"] = 0,\n        ["type"] = "item",\n        ["image"] = "smalltrapcrate.png",\n        ["unique"] = true,\n        ["useable"] = true,\n        ["shouldClose"] = true,\n        ["combinable"] = nil,\n        ["description"] = "Is there something in it?"\n    },\n    ["trapcrate"] = {\n        ["name"] = "trapcrate",\n        ["label"] = "Medium Fake Crate",\n        ["weight"] = 0,\n        ["type"] = "item",\n        ["image"] = "trapcrate.png",\n        ["unique"] = true,\n        ["useable"] = true,\n        ["shouldClose"] = true,\n        ["combinable"] = nil,\n        ["description"] = "Is there something in it?"\n    },\n    ["bigtrapcrate"] = {\n        ["name"] = "bigtrapcrate",\n        ["label"] = "Big Fake Crate",\n        ["weight"] = 0,\n        ["type"] = "item",\n        ["image"] = "bigtrapcrate.png",\n        ["unique"] = true,\n        ["useable"] = true,\n        ["shouldClose"] = true,\n        ["combinable"] = nil,\n        ["description"] = "Is there something in it?"\n    },\n\n    ["portablefridge"] = {\n        ["name"] = "portablefridge",\n        ["label"] = "Portable Fridge",\n        ["weight"] = 0,\n        ["type"] = "item",\n        ["image"] = "portablefridge.png",\n        ["unique"] = true,\n        ["useable"] = true,\n        ["shouldClose"] = true,\n        ["combinable"] = nil,\n        ["description"] = "Is there something in it?"\n    },\n    ["craterepairkit"] = {\n        ["name"] = "craterepairkit",\n        ["label"] = "Container repairkit",\n        ["weight"] = 0,\n        ["type"] = "item",\n        ["image"] = "craterepairkit.png",\n        ["unique"] = false,\n        ["useable"] = false,\n        ["shouldClose"] = true,\n        ["combinable"] = nil,\n        ["description"] = "Extend that lifetime?"\n    },\n    ["cratehackingdevice"] = {\n        ["name"] = "cratehackingdevice",\n        ["label"] = "Container hacking device",\n        ["weight"] = 0,\n        ["type"] = "item",\n        ["image"] = "cratehackingdevice.png",\n        ["unique"] = false,\n        ["useable"] = false,\n        ["shouldClose"] = true,\n        ["combinable"] = nil,\n        ["description"] = "Unlock that god damn container..."\n    },\n    ["cratepadlock"] = {\n        ["name"] = "cratepadlock",\n        ["label"] = "Container padlock",\n        ["weight"] = 0,\n        ["type"] = "item",\n        ["image"] = "cratepadlock.png",\n        ["unique"] = false,\n        ["useable"] = false,\n        ["shouldClose"] = true,\n        ["combinable"] = nil,\n        ["description"] = "Let\'s make that container safe..."\n    },\n'))),(0,i.kt)(l.Z,{value:"esx",label:"ESX",mdxType:"TabItem"},(0,i.kt)("p",null,"Add items to ",(0,i.kt)("inlineCode",{parentName:"p"},"ox_inventory/data/items.lua"),";"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"    ['smallcrate'] = {\n        label = 'Small Crate',\n        weight = 1,\n        stack = false,\n        close = true,\n        description = 'Is there something in it?',\n        client = {\n            usetime = 2500,\n            export = 'fd_storage.smallcrate'\n        },\n        server = {\n            export = 'fd_storage.smallcrate'\n        }\n    },\n    ['mediumcrate'] = {\n        label = 'Medium Crate',\n        weight = 1,\n        stack = false,\n        close = true,\n        description = 'Is there something in it?',\n        client = {\n            usetime = 2500,\n            export = 'fd_storage.mediumcrate'\n        },\n        server = {\n            export = 'fd_storage.mediumcrate'\n        }\n    },\n    ['bigcrate'] = {\n        label = 'Big Crate',\n        weight = 1,\n        stack = false,\n        close = true,\n        description = 'Is there something in it?',\n        client = {\n            usetime = 2500,\n            export = 'fd_storage.bigcrate'\n        },\n        server = {\n            export = 'fd_storage.bigcrate'\n        }\n    },\n\n    ['smallcontainer'] = {\n        label = 'Small Container',\n        weight = 1,\n        stack = false,\n        close = true,\n        description = 'Is there something in it?',\n        client = {\n            usetime = 2500,\n            export = 'fd_storage.smallcontainer'\n        },\n        server = {\n            export = 'fd_storage.smallcontainer'\n        }\n    },\n    ['mediumcontainer'] = {\n        label = 'Medium Container',\n        weight = 1,\n        stack = false,\n        close = true,\n        description = 'Is there something in it?',\n        client = {\n            usetime = 2500,\n            export = 'fd_storage.mediumcontainer'\n        },\n        server = {\n            export = 'fd_storage.mediumcontainer'\n        }\n    },\n    ['bigcontainer'] = {\n        label = 'Big Container',\n        weight = 1,\n        stack = false,\n        close = true,\n        description = 'Is there something in it?',\n        client = {\n            usetime = 2500,\n            export = 'fd_storage.bigcontainer'\n        },\n        server = {\n            export = 'fd_storage.bigcontainer'\n        }\n    },\n\n    ['smalltrapcrate'] = {\n        label = 'Small Fake Crate',\n        weight = 1,\n        stack = false,\n        close = true,\n        description = 'Is there something in it?',\n        client = {\n            usetime = 2500,\n            export = 'fd_storage.smalltrapcrate'\n        },\n        server = {\n            export = 'fd_storage.smalltrapcrate'\n        }\n    },\n    ['trapcrate'] = {\n        label = 'Medium Fake Crate',\n        weight = 1,\n        stack = false,\n        close = true,\n        description = 'Is there something in it?',\n        client = {\n            usetime = 2500,\n            export = 'fd_storage.trapcrate'\n        },\n        server = {\n            export = 'fd_storage.trapcrate'\n        }\n    },\n    ['bigtrapcrate'] = {\n        label = 'Big Fake Crate',\n        weight = 1,\n        stack = false,\n        close = true,\n        description = 'Is there something in it?',\n        client = {\n            usetime = 2500,\n            export = 'fd_storage.bigtrapcrate'\n        },\n        server = {\n            export = 'fd_storage.bigtrapcrate'\n        }\n    },\n\n    ['portablefridge'] = {\n        label = 'Portable Fridge',\n        weight = 1,\n        stack = false,\n        close = true,\n        description = 'Is there something in it?',\n        client = {\n            usetime = 2500,\n            export = 'fd_storage.portablefridge'\n        },\n        server = {\n            export = 'fd_storage.portablefridge'\n        }\n    },\n\n    ['craterepairkit'] = {\n        label = 'Container repairkit',\n        weight = 1,\n        stack = false,\n        close = true,\n        description = 'Extend that lifetime?'\n    },\n    ['cratepadlock'] = {\n        label = 'Container padloc',\n        weight = 1,\n        stack = false,\n        close = true,\n        description = 'Let\\'s make that container safe...'\n    },\n    ['cratehackingdevice'] = {\n        label = 'Container hacking device',\n        weight = 1,\n        stack = false,\n        close = true,\n        description = 'Unlock that god damn container...'\n    },\n")))),(0,i.kt)("h2",{id:"start"},"Start"),(0,i.kt)("p",null,"If you did everything as described above, please start your server and enjoy new portable / additional storages!"),(0,i.kt)("h2",{id:"common-issues"},"Common Issues"),(0,i.kt)("h3",{id:"questions"},"Questions"),(0,i.kt)("p",null,"If you have an issue or questions, please open an issue in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FelisDevelopment/fd_storage_support/issues"},"fd_storage support repo"),"."))}f.isMDXComponent=!0}}]);