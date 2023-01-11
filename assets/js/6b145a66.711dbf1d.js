"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[55266],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>P});var r=a(67294);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var p=r.createContext({}),s=function(e){var n=r.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(a),P=t,h=d["".concat(p,".").concat(P)]||d[P]||u[P]||i;return a?r.createElement(h,o(o({ref:n},c),{},{components:a})):r.createElement(h,o({ref:n},c))}));function P(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},91438:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});a(67294);var r=a(3905);function t(){return t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},t.apply(this,arguments)}function i(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}const o={sidebar_label:"KnownDevices"},l="KnownDevices variable",p={unversionedId:"api/puppeteer.knowndevices",id:"version-19.5.1/api/puppeteer.knowndevices",title:"KnownDevices variable",description:"A list of devices to be used with Page.emulate().",source:"@site/versioned_docs/version-19.5.1/api/puppeteer.knowndevices.md",sourceDirName:"api",slug:"/api/puppeteer.knowndevices",permalink:"/api/puppeteer.knowndevices",draft:!1,tags:[],version:"19.5.1",frontMatter:{sidebar_label:"KnownDevices"},sidebar:"api",previous:{title:"KeyInput",permalink:"/api/puppeteer.keyinput"},next:{title:"launch",permalink:"/api/puppeteer.launch"}},s={},c=[{value:"Signature:",id:"signature",level:4},{value:"Example",id:"example",level:2}],u={toc:c};function d(e){var{components:n}=e,a=i(e,["components"]);return(0,r.kt)("wrapper",t({},u,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",t({},{id:"knowndevices-variable"}),"KnownDevices variable"),(0,r.kt)("p",null,"A list of devices to be used with ",(0,r.kt)("a",t({parentName:"p"},{href:"/api/puppeteer.page.emulate"}),"Page.emulate()"),"."),(0,r.kt)("h4",t({},{id:"signature"}),"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-typescript"}),"KnownDevices: Readonly<\n  Record<\n    | 'Blackberry PlayBook'\n    | 'Blackberry PlayBook landscape'\n    | 'BlackBerry Z30'\n    | 'BlackBerry Z30 landscape'\n    | 'Galaxy Note 3'\n    | 'Galaxy Note 3 landscape'\n    | 'Galaxy Note II'\n    | 'Galaxy Note II landscape'\n    | 'Galaxy S III'\n    | 'Galaxy S III landscape'\n    | 'Galaxy S5'\n    | 'Galaxy S5 landscape'\n    | 'Galaxy S8'\n    | 'Galaxy S8 landscape'\n    | 'Galaxy S9+'\n    | 'Galaxy S9+ landscape'\n    | 'Galaxy Tab S4'\n    | 'Galaxy Tab S4 landscape'\n    | 'iPad'\n    | 'iPad landscape'\n    | 'iPad (gen 6)'\n    | 'iPad (gen 6) landscape'\n    | 'iPad (gen 7)'\n    | 'iPad (gen 7) landscape'\n    | 'iPad Mini'\n    | 'iPad Mini landscape'\n    | 'iPad Pro'\n    | 'iPad Pro landscape'\n    | 'iPad Pro 11'\n    | 'iPad Pro 11 landscape'\n    | 'iPhone 4'\n    | 'iPhone 4 landscape'\n    | 'iPhone 5'\n    | 'iPhone 5 landscape'\n    | 'iPhone 6'\n    | 'iPhone 6 landscape'\n    | 'iPhone 6 Plus'\n    | 'iPhone 6 Plus landscape'\n    | 'iPhone 7'\n    | 'iPhone 7 landscape'\n    | 'iPhone 7 Plus'\n    | 'iPhone 7 Plus landscape'\n    | 'iPhone 8'\n    | 'iPhone 8 landscape'\n    | 'iPhone 8 Plus'\n    | 'iPhone 8 Plus landscape'\n    | 'iPhone SE'\n    | 'iPhone SE landscape'\n    | 'iPhone X'\n    | 'iPhone X landscape'\n    | 'iPhone XR'\n    | 'iPhone XR landscape'\n    | 'iPhone 11'\n    | 'iPhone 11 landscape'\n    | 'iPhone 11 Pro'\n    | 'iPhone 11 Pro landscape'\n    | 'iPhone 11 Pro Max'\n    | 'iPhone 11 Pro Max landscape'\n    | 'iPhone 12'\n    | 'iPhone 12 landscape'\n    | 'iPhone 12 Pro'\n    | 'iPhone 12 Pro landscape'\n    | 'iPhone 12 Pro Max'\n    | 'iPhone 12 Pro Max landscape'\n    | 'iPhone 12 Mini'\n    | 'iPhone 12 Mini landscape'\n    | 'iPhone 13'\n    | 'iPhone 13 landscape'\n    | 'iPhone 13 Pro'\n    | 'iPhone 13 Pro landscape'\n    | 'iPhone 13 Pro Max'\n    | 'iPhone 13 Pro Max landscape'\n    | 'iPhone 13 Mini'\n    | 'iPhone 13 Mini landscape'\n    | 'JioPhone 2'\n    | 'JioPhone 2 landscape'\n    | 'Kindle Fire HDX'\n    | 'Kindle Fire HDX landscape'\n    | 'LG Optimus L70'\n    | 'LG Optimus L70 landscape'\n    | 'Microsoft Lumia 550'\n    | 'Microsoft Lumia 950'\n    | 'Microsoft Lumia 950 landscape'\n    | 'Nexus 10'\n    | 'Nexus 10 landscape'\n    | 'Nexus 4'\n    | 'Nexus 4 landscape'\n    | 'Nexus 5'\n    | 'Nexus 5 landscape'\n    | 'Nexus 5X'\n    | 'Nexus 5X landscape'\n    | 'Nexus 6'\n    | 'Nexus 6 landscape'\n    | 'Nexus 6P'\n    | 'Nexus 6P landscape'\n    | 'Nexus 7'\n    | 'Nexus 7 landscape'\n    | 'Nokia Lumia 520'\n    | 'Nokia Lumia 520 landscape'\n    | 'Nokia N9'\n    | 'Nokia N9 landscape'\n    | 'Pixel 2'\n    | 'Pixel 2 landscape'\n    | 'Pixel 2 XL'\n    | 'Pixel 2 XL landscape'\n    | 'Pixel 3'\n    | 'Pixel 3 landscape'\n    | 'Pixel 4'\n    | 'Pixel 4 landscape'\n    | 'Pixel 4a (5G)'\n    | 'Pixel 4a (5G) landscape'\n    | 'Pixel 5'\n    | 'Pixel 5 landscape'\n    | 'Moto G4'\n    | 'Moto G4 landscape',\n    Device\n  >\n>;\n")),(0,r.kt)("h2",t({},{id:"example"}),"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",t({parentName:"pre"},{className:"language-ts"}),"import {KnownDevices} from 'puppeteer';\nconst iPhone = KnownDevices['iPhone 6'];\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.emulate(iPhone);\n  await page.goto('https://www.google.com');\n  // other actions...\n  await browser.close();\n})();\n")))}d.isMDXComponent=!0}}]);