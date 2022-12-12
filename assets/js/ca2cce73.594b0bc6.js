"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[35873],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(n),d=o,g=h["".concat(s,".").concat(d)]||h[d]||c[d]||r;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},35044:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>u});n(67294);var a=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={title:"Preload fonts with Docusaurus (updated 03/11/2022)",authors:"johnnyreilly",tags:["Docusaurus","preload","webpack","fonts","plugin","configureWebpack","headTags"],image:"./title-image.png",hide_table_of_contents:!1},l=void 0,s={permalink:"/2021/12/29/preload-fonts-with-docusaurus",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2021-12-29-preload-fonts-with-docusaurus/index.md",source:"@site/blog/2021-12-29-preload-fonts-with-docusaurus/index.md",title:"Preload fonts with Docusaurus (updated 03/11/2022)",description:"When we're using custom fonts in our websites, it's good practice to preload the fonts to minimise the flash of unstyled text. This post shows how to achieve this with Docusaurus.",date:"2021-12-29T00:00:00.000Z",formattedDate:"December 29, 2021",tags:[{label:"Docusaurus",permalink:"/tags/docusaurus"},{label:"preload",permalink:"/tags/preload"},{label:"webpack",permalink:"/tags/webpack"},{label:"fonts",permalink:"/tags/fonts"},{label:"plugin",permalink:"/tags/plugin"},{label:"configureWebpack",permalink:"/tags/configure-webpack"},{label:"headTags",permalink:"/tags/head-tags"}],readingTime:4.3,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Preload fonts with Docusaurus (updated 03/11/2022)",authors:"johnnyreilly",tags:["Docusaurus","preload","webpack","fonts","plugin","configureWebpack","headTags"],image:"./title-image.png",hide_table_of_contents:!1},prevItem:{title:"Azure Container Apps: dapr, devcontainer, debug and deploy",permalink:"/2022/01/22/azure-container-apps-dapr-bicep-github-actions-debug-devcontainer"},nextItem:{title:"Query deployment outputs with the Azure CLI",permalink:"/2021/12/28/azure-cli-show-query-output-properties"}},p={image:n(17932).Z,authorsImageUrls:[void 0]},u=[{value:"Preload web fonts with Docusaurus",id:"preload-web-fonts-with-docusaurus",level:2},{value:"Making a plugin",id:"making-a-plugin",level:2},{value:"Using the <code>headTags</code> API",id:"using-the-headtags-api",level:2}],c={toc:u};function h(e){var{components:t}=e,i=r(e,["components"]);return(0,a.kt)("wrapper",o({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When we're using custom fonts in our websites, it's good practice to preload the fonts to minimise the ",(0,a.kt)("a",o({parentName:"p"},{href:"https://css-tricks.com/fout-foit-foft/"}),"flash of unstyled text"),". This post shows how to achieve this with Docusaurus."),(0,a.kt)("p",null,"It does so by building a Docusaurus plugin which makes use of ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/sn-satyendra"}),"Satyendra Singh"),"'s excellent ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/sn-satyendra/webpack-font-preload-plugin"}),(0,a.kt)("inlineCode",{parentName:"a"},"webpack-font-preload-plugin")),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Updated 03/11/2022:")," Subsequently this post demonstrates how to achieve font preloading directly, by using the the ",(0,a.kt)("inlineCode",{parentName:"p"},"headTags")," API."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"title image reading &quot;Preload fonts with Docusaurus&quot; in a ridiculous font with the Docusaurus logo and a screenshot of a preload link HTML element",src:n(17932).Z,width:"800",height:"450"})),(0,a.kt)("h2",o({},{id:"preload-web-fonts-with-docusaurus"}),"Preload web fonts with Docusaurus"),(0,a.kt)("p",null,"To quote the docs of the ",(0,a.kt)("inlineCode",{parentName:"p"},"webpack-font-preload-plugin"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The ",(0,a.kt)("a",o({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content"}),"preload")," value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"<link>")," element's ",(0,a.kt)("inlineCode",{parentName:"p"},"rel")," attribute lets you declare fetch requests in the HTML's ",(0,a.kt)("inlineCode",{parentName:"p"},"<head>"),", specifying resources that your page will need very soon, which you want to start loading early in the page lifecycle, before browsers' main rendering machinery kicks in. This ensures they are available earlier and are less likely to block the page's render, improving performance."),(0,a.kt)("p",{parentName:"blockquote"},"This plugin specifically targets fonts used with the application which are bundled using webpack. The plugin would add ",(0,a.kt)("inlineCode",{parentName:"p"},"<link>")," tags in the begining of ",(0,a.kt)("inlineCode",{parentName:"p"},"<head>")," of your html:"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",o({parentName:"pre"},{className:"language-html"}),'<link rel="preload" href="/font1.woff" as="font" crossorigin />\n<link rel="preload" href="/font2.woff" as="font" crossorigin />\n'))),(0,a.kt)("p",null,"If you want to learn more about preloading web fonts, it's also worth ",(0,a.kt)("a",o({parentName:"p"},{href:"https://web.dev/codelab-preload-web-fonts/"}),"reading this excellent article"),"."),(0,a.kt)("p",null,"The blog you're reading is built with ",(0,a.kt)("a",o({parentName:"p"},{href:"https://docusaurus.io/"}),"Docusaurus"),". Our mission: for the HTML our Docusaurus build pumps out to feature preload ",(0,a.kt)("inlineCode",{parentName:"p"},"link")," elements. Something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-html"}),'<link\n  rel="preload"\n  href="/assets/fonts/Poppins-Regular-8081832fc5cfbf634aa664a9eff0350e.ttf"\n  as="font"\n  crossorigin=""\n/>\n')),(0,a.kt)("p",null,"This ",(0,a.kt)("inlineCode",{parentName:"p"},"link")," element has the ",(0,a.kt)("inlineCode",{parentName:"p"},'rel="preload"')," attribute set, which triggers font preloading."),(0,a.kt)("p",null,"But the thing to take from the above text is that the filename features a hash in the name. This demonstrates that the font is being pumped through the Docusaurus build, which is powered by webpack. So we need some webpack whispering to get font preloading going."),(0,a.kt)("h2",o({},{id:"making-a-plugin"}),"Making a plugin"),(0,a.kt)("p",null,"We're going to make a minimal ",(0,a.kt)("a",o({parentName:"p"},{href:"https://docusaurus.io/docs/using-plugins#creating-plugins"}),"Docusaurus plugin")," using ",(0,a.kt)("inlineCode",{parentName:"p"},"webpack-font-preload-plugin"),". Let's add it to our project:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-shell"}),"yarn add webpack-font-preload-plugin\n")),(0,a.kt)("p",null,"Now in the ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," we can create our minimal plugin:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-js"}),"const FontPreloadPlugin = require('webpack-font-preload-plugin');\n\n//...\n/** @type {import('@docusaurus/types').Config} */\nconst config = {\n  //...\n  plugins: [\n    function preloadFontPlugin(_context, _options) {\n      return {\n        name: 'preload-font-plugin',\n        configureWebpack(_config, _isServer) {\n          return {\n            plugins: [new FontPreloadPlugin()],\n          };\n        },\n      };\n    },\n    // ...\n  ],\n  //...\n};\n")),(0,a.kt)("p",null,"It's a super simple plugin, it does nothing more than ",(0,a.kt)("inlineCode",{parentName:"p"},"new")," up an instance of the webpack plugin, inside the context of the ",(0,a.kt)("inlineCode",{parentName:"p"},"configureWebpack")," method. That's all that's required."),(0,a.kt)("p",null,"With this in place we're now seeing the ",(0,a.kt)("inlineCode",{parentName:"p"},'<link rel="preload" ... />')," elements being included in the HTML pumped out of our Docusaurus build. This means we have font preloading working:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"screenshot of the Chrome devtools featuring link rel=&quot;preload&quot; elements",src:n(96554).Z,width:"1243",height:"65"})),(0,a.kt)("p",null,"Huzzah!"),(0,a.kt)("h2",o({},{id:"using-the-headtags-api"}),"Using the ",(0,a.kt)("inlineCode",{parentName:"h2"},"headTags")," API"),(0,a.kt)("p",null,"If you're using ",(0,a.kt)("a",o({parentName:"p"},{href:"https://docusaurus.io/blog/releases/2.2#config-headtags"}),"Docusaurus 2.2 or greater")," you can use the new ",(0,a.kt)("a",o({parentName:"p"},{href:"https://docusaurus.io/docs/api/docusaurus-config#headTags"}),(0,a.kt)("inlineCode",{parentName:"a"},"headTags")," API")," and bypass using an extra dependency entirely."),(0,a.kt)("p",null,"To make this work, we need to ensure that our fonts live in the ",(0,a.kt)("inlineCode",{parentName:"p"},"static")," directory which is reliably addressable - not hashed by webpack. We can then use the ",(0,a.kt)("inlineCode",{parentName:"p"},"headTags")," API to add the ",(0,a.kt)("inlineCode",{parentName:"p"},"link")," elements to the ",(0,a.kt)("inlineCode",{parentName:"p"},"head")," of the HTML:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  // ...\n  headTags: [\n    // the entry below will make this tag: <link rel=\"preload\" href=\"/fonts/Poppins-Regular.ttf\" as=\"font\" type=\"font/ttf\" crossorigin=\"anonymous\">\n    {\n      tagName: 'link',\n      attributes: {\n        rel: 'preload',\n        href: '/fonts/Poppins-Regular.ttf',\n        as: 'font',\n        type: 'font/ttf',\n        crossorigin: 'anonymous',\n      },\n    },\n    // the entry below will make this tag: <link rel=\"preload\" href=\"/fonts/Poppins-Bold.ttf\" as=\"font\" type=\"font/ttf\" crossorigin=\"anonymous\">\n    {\n      tagName: 'link',\n      attributes: {\n        rel: 'preload',\n        href: '/fonts/Poppins-Bold.ttf',\n        as: 'font',\n        type: 'font/ttf',\n        crossorigin: 'anonymous',\n      },\n    },\n  ],\n  // ...\n};\n")),(0,a.kt)("p",null,"In our ",(0,a.kt)("inlineCode",{parentName:"p"},"custom.css")," we need to add the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-css"}),"@font-face {\n  font-family: 'Poppins';\n  src: url('https://blog.johnnyreilly.com/fonts/Poppins-Regular.ttf');\n  font-weight: 400;\n  font-style: normal;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: 'Poppins';\n  src: url('https://blog.johnnyreilly.com/fonts/Poppins-Bold.ttf');\n  font-weight: 700;\n  font-style: normal;\n  font-display: swap;\n}\n")),(0,a.kt)("p",null,"Note that the urls are fully qualified to prevent webpack from trying to bundle them. Another bonus of using the ",(0,a.kt)("inlineCode",{parentName:"p"},"static")," folder is that we can apply long term caching. I'm using ",(0,a.kt)("a",o({parentName:"p"},{href:"https://azure.microsoft.com/en-us/products/app-service/static/"}),"Azure Static Web Apps")," to run my site and so I'm achieving this with the following in ",(0,a.kt)("inlineCode",{parentName:"p"},"staticwebapp.config.json"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-json"}),'{\n  "trailingSlash": "auto",\n  "routes": [\n    {\n      "route": "/img/*",\n      "headers": {\n        "cache-control": "must-revalidate, max-age=15770000"\n      }\n    },\n    {\n      "route": "/fonts/*",\n      "headers": {\n        "cache-control": "must-revalidate, max-age=15770000"\n      }\n    }\n  ],\n  "globalHeaders": {\n    "content-security-policy": "default-src https: \'unsafe-eval\' \'unsafe-inline\'; object-src \'none\'; script-src \'self\' https://www.googleanalytics.com https://www.google-analytics.com https://www.googleoptimize.com https://www.googletagmanager.com \'unsafe-inline\'; img-src \'self\' data: https: https://blog.johnnyreilly.com https://thankful-sky-0bfc7e803-320.westeurope.1.azurestaticapps.net https://www.google-analytics.com https://www.googletagmanager.com",\n    "X-Clacks-Overhead": "GNU Terry Pratchett",\n    "Access-Control-Allow-Origin": "*"\n  }\n}\n')),(0,a.kt)("p",null,"Things to note from the above:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Access-Control-Allow-Origin")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Vary")," are in place to allow my staging sites to access the fonts from the production site. Without this, the fonts won't load in the staging site."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"img")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"fonts")," directories sit under the ",(0,a.kt)("inlineCode",{parentName:"li"},"static")," directory. For those directories we're going to use ",(0,a.kt)("inlineCode",{parentName:"li"},"cache-control")," set to 6 months for the fonts and static images. They rarely change and so this is an appropriate strategy.")),(0,a.kt)("p",null,"This blog post was migrated to the ",(0,a.kt)("inlineCode",{parentName:"p"},"headTags")," API approach with the release of Docusaurus 2.2.0. ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/johnnyreilly/blog.johnnyreilly.com/pull/321"}),"You can see the PR here"),"."))}h.isMDXComponent=!0},96554:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot-preload-devtools-627f8f6610d2f2df248ee9f37bef04a8.png"},17932:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/title-image-64c2d7d4d97b32cb04d677c3b63f4460.png"}}]);