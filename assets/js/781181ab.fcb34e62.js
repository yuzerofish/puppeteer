"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[26284],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},i=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),d=c(r),h=a,m=d["".concat(o,".").concat(h)]||d[h]||s[h]||l;return r?n.createElement(m,p(p({ref:t},i),{},{components:r})):n.createElement(m,p({ref:t},i))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,p=new Array(l);p[0]=d;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,p[1]=u;for(var c=2;c<l;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},771:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>d,frontMatter:()=>p,metadata:()=>o,toc:()=>i});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const p={sidebar_label:"ProductLauncher.executablePath"},u="ProductLauncher.executablePath() method",o={unversionedId:"api/puppeteer.productlauncher.executablepath",id:"version-19.5.1/api/puppeteer.productlauncher.executablepath",title:"ProductLauncher.executablePath() method",description:"Signature:",source:"@site/versioned_docs/version-19.5.1/api/puppeteer.productlauncher.executablepath.md",sourceDirName:"api",slug:"/api/puppeteer.productlauncher.executablepath",permalink:"/api/puppeteer.productlauncher.executablepath",draft:!1,tags:[],version:"19.5.1",frontMatter:{sidebar_label:"ProductLauncher.executablePath"},sidebar:"api",previous:{title:"ProductLauncher.defaultArgs",permalink:"/api/puppeteer.productlauncher.defaultargs"},next:{title:"ProductLauncher.launch",permalink:"/api/puppeteer.productlauncher.launch"}},c={},i=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}],s={toc:i};function d(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)("wrapper",a({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"productlauncherexecutablepath-method"}),"ProductLauncher.executablePath() method"),(0,n.kt)("h4",a({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"class ProductLauncher {\n  executablePath(channel?: ChromeReleaseChannel): string;\n}\n")),(0,n.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"channel"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.chromereleasechannel"}),"ChromeReleaseChannel")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("i",null,"(Optional)"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"string"))}d.isMDXComponent=!0}}]);