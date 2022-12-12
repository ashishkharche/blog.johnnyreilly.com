"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[74155],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),y=p(n),m=a,g=y["".concat(s,".").concat(m)]||y[m]||u[m]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},50892:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>s,toc:()=>c});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={title:"Creating an ES2015 Map from an Array in TypeScript",authors:"johnnyreilly",tags:["TypeScript","ES6","Array","ES2015","Map"],hide_table_of_contents:!1},l=void 0,s={permalink:"/2016/06/02/create-es2015-map-from-array-in-typescript",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2016-06-02-create-es2015-map-from-array-in-typescript/index.md",source:"@site/blog/2016-06-02-create-es2015-map-from-array-in-typescript/index.md",title:"Creating an ES2015 Map from an Array in TypeScript",description:"I'm a great lover of ES2015's Map. However, just recently I tumbled over something I find a touch inconvenient about how you initialise a new Map from the contents of an Array in TypeScript.",date:"2016-06-02T00:00:00.000Z",formattedDate:"June 2, 2016",tags:[{label:"TypeScript",permalink:"/tags/type-script"},{label:"ES6",permalink:"/tags/es-6"},{label:"Array",permalink:"/tags/array"},{label:"ES2015",permalink:"/tags/es-2015"},{label:"Map",permalink:"/tags/map"}],readingTime:2.1,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Creating an ES2015 Map from an Array in TypeScript",authors:"johnnyreilly",tags:["TypeScript","ES6","Array","ES2015","Map"],hide_table_of_contents:!1},prevItem:{title:"Understanding Webpack's DefinePlugin (and using with TypeScript)",permalink:"/2016/07/23/using-webpacks-defineplugin-with-typescript"},nextItem:{title:"The Mysterious Case of Webpack, Angular and jQuery",permalink:"/2016/05/24/the-mysterious-case-of-webpack-angular-and-jquery"}},p={authorsImageUrls:[void 0]},c=[{value:"This Doesn&#39;t Work",id:"this-doesnt-work",level:2},{value:"This Does",id:"this-does",level:2}],u={toc:c};function y(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"I'm a great lover of ES2015's ",(0,r.kt)("a",a({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map"}),(0,r.kt)("inlineCode",{parentName:"a"},"Map")),". However, just recently I tumbled over something I find a touch inconvenient about how you initialise a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Map")," from the contents of an ",(0,r.kt)("inlineCode",{parentName:"p"},"Array")," in TypeScript."),(0,r.kt)("h2",a({},{id:"this-doesnt-work"}),"This Doesn't Work"),(0,r.kt)("p",null,"We're going try to something like this: (pilfered from the MDN docs)"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"var kvArray = [\n  ['key1', 'value1'],\n  ['key2', 'value2'],\n];\n\n// Use the regular Map constructor to transform a 2D key-value Array into a map\nvar myMap = new Map(kvArray);\n")),(0,r.kt)("p",null,"Simple enough right? Well I'd rather assumed that I should be able to do something like this in TypeScript:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),'const iAmAnArray [\n  { value: "value1", text: "hello" }\n  { value: "value2", text: "map" }\n];\n\nconst iAmAMap = new Map<string, string>(\n  iAmAnArray.map(x => [x.value, x.text])\n);\n')),(0,r.kt)("p",null,"However, to my surprise this errored out with:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"[ts] Argument of type 'string[][]' is not assignable to parameter of type 'Iterable<[string, string]>'.\n  Types of property '[Symbol.iterator]' are incompatible.\n    Type '() => IterableIterator<string[]>' is not assignable to type '() => Iterator<[string, string]>'.\n      Type 'IterableIterator<string[]>' is not assignable to type 'Iterator<[string, string]>'.\n        Types of property 'next' are incompatible.\n          Type '(value?: any) => IteratorResult<string[]>' is not assignable to type '(value?: any) => IteratorResult<[string, string]>'.\n            Type 'IteratorResult<string[]>' is not assignable to type 'IteratorResult<[string, string]>'.\n              Type 'string[]' is not assignable to type '[string, string]'.\n                Property '0' is missing in type 'string[]'.\n")),(0,r.kt)("p",null,"Disappointing right? It's expecting ",(0,r.kt)("inlineCode",{parentName:"p"},"Iterable&lt;[string, string]&gt;")," and an ",(0,r.kt)("inlineCode",{parentName:"p"},"Array")," with 2 elements that are strings is ",(0,r.kt)("em",{parentName:"p"},"not")," inferred to be that."),(0,r.kt)("h2",a({},{id:"this-does"}),"This Does"),(0,r.kt)("p",null,"It emerges that there is a way to do this though; you just need to give the compiler a clue. You need to include a type assertion of ",(0,r.kt)("inlineCode",{parentName:"p"}," as [string, string]")," which tells the compiler that what you've just declared is a ",(0,r.kt)("inlineCode",{parentName:"p"},"Tuple")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),". (Please note that ",(0,r.kt)("inlineCode",{parentName:"p"},"[string, string]")," corresponds to the types of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Key")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Value")," of your ",(0,r.kt)("inlineCode",{parentName:"p"},"Map")," and should be set accordingly.)"),(0,r.kt)("p",null,"So a working version of the code looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),'const iAmAnArray [\n  { value: "value1", text: "hello" }\n  { value: "value2", text: "map" }\n];\n\nconst iAmAMap = new Map<string, string>(\n  iAmAnArray.map(x => [x.value, x.text] as [string, string])\n);\n')),(0,r.kt)("p",null,"Or, to be terser, this:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),'const iAmAnArray [\n  { value: "value1", text: "hello" }\n  { value: "value2", text: "map" }\n];\n\nconst iAmAMap = new Map( // Look Ma!  No type annotations\n  iAmAnArray.map(x => [x.value, x.text] as [string, string])\n);\n')),(0,r.kt)("p",null,"I've raised this as an issue with the TypeScript team; you can find details ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/Microsoft/TypeScript/issues/8936"}),"here"),"."))}y.isMDXComponent=!0}}]);