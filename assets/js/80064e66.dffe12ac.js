"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[24206],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(a),h=r,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},71288:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});a(67294);var n=a(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const i={title:"You Might Not Need thread-loader",authors:"johnnyreilly",tags:["HappyPack","thread-loader","fork-ts-checker-webpack-plugin","ts-loader","Webpack","fast builds"],hide_table_of_contents:!1},l=void 0,p={permalink:"/2018/12/22/you-might-not-need-thread-loader",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2018-12-22-you-might-not-need-thread-loader/index.md",source:"@site/blog/2018-12-22-you-might-not-need-thread-loader/index.md",title:"You Might Not Need thread-loader",description:"It all started with a GitHub issue. Ernst Ammann reported:",date:"2018-12-22T00:00:00.000Z",formattedDate:"December 22, 2018",tags:[{label:"HappyPack",permalink:"/tags/happy-pack"},{label:"thread-loader",permalink:"/tags/thread-loader"},{label:"fork-ts-checker-webpack-plugin",permalink:"/tags/fork-ts-checker-webpack-plugin"},{label:"ts-loader",permalink:"/tags/ts-loader"},{label:"Webpack",permalink:"/tags/webpack"},{label:"fast builds",permalink:"/tags/fast-builds"}],readingTime:3.675,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"You Might Not Need thread-loader",authors:"johnnyreilly",tags:["HappyPack","thread-loader","fork-ts-checker-webpack-plugin","ts-loader","Webpack","fast builds"],hide_table_of_contents:!1},prevItem:{title:"GitHub Actions and Yarn",permalink:"/2019/01/05/github-actions-and-yarn"},nextItem:{title:"Cache Rules Everything Around Me",permalink:"/2018/12/10/cache-rules-everything-around-me"}},s={authorsImageUrls:[void 0]},c=[{value:"All I Want For Christmas is Faster Builds",id:"all-i-want-for-christmas-is-faster-builds",level:2},{value:"<code>thread-loader</code>: Infinity War",id:"thread-loader-infinity-war",level:2},{value:"&quot;Maybe You&#39;ve Thread Enough&quot;",id:"maybe-youve-thread-enough",level:2}],d={toc:c};function u(e){var{components:t}=e,i=o(e,["components"]);return(0,n.kt)("wrapper",r({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"It all started with a GitHub issue. ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/namics/webpack-config-plugins/issues/24"}),"Ernst Ammann reported"),":"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Without the thread-loader, compilation takes three to four times less time on changes. We could remove it.")),(0,n.kt)("p",null,"If you're not aware of the ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/namics/webpack-config-plugins"}),(0,n.kt)("inlineCode",{parentName:"a"},"webpack-config-plugins"))," project then I commend it to you. Famously, webpack configuration can prove tricky. ",(0,n.kt)("inlineCode",{parentName:"p"},"webpack-config-plugins")," borrows the idea of presets from Babel. It provides a number of pluggable webpack configurations which give a best practice setup for different webpack use cases. So if you're no expert with webpack and you want a good setup for building your TypeScript / Sass / JavaScript then ",(0,n.kt)("inlineCode",{parentName:"p"},"webpack-config-plugins")," has got your back."),(0,n.kt)("p",null,"One of the people behind the project is the very excellent ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/jantimon"}),"Jan Nicklas")," who is well known for his work on the ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/jantimon/html-webpack-plugin"}),(0,n.kt)("inlineCode",{parentName:"a"},"html-webpack-plugin")),"."),(0,n.kt)("p",null,"It was Jan who responded to Ernst's issue and decided to look into it."),(0,n.kt)("h2",r({},{id:"all-i-want-for-christmas-is-faster-builds"}),"All I Want For Christmas is Faster Builds"),(0,n.kt)("p",null,"Everyone wants fast builds. I do. You do. We all do. ",(0,n.kt)("inlineCode",{parentName:"p"},"webpack-config-plugins")," is about giving these to the user in a precooked package."),(0,n.kt)("p",null,"There's a webpack loader called ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/webpack-contrib/thread-loader"}),(0,n.kt)("inlineCode",{parentName:"a"},"thread-loader"))," which spawns multiple processes and splits up work between them. It was originally inspired by the work in the happypack project which does a similar thing."),(0,n.kt)("p",null,"I wrote ",(0,n.kt)("a",r({parentName:"p"},{href:"https://medium.com/p/83cc568dea79"}),"a blog post")," some time ago which gave details about ways to speed up your TypeScript builds by combining the ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/TypeStrong/ts-loader"}),(0,n.kt)("inlineCode",{parentName:"a"},"ts-loader"))," project (which I manage) with the ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/Realytics/fork-ts-checker-webpack-plugin"}),(0,n.kt)("inlineCode",{parentName:"a"},"fork-ts-checker-webpack-plugin"))," project (which I'm heavily involved with)."),(0,n.kt)("p",null,"That post was written back in the days of webpack 2 / 3. It advocated use of both ",(0,n.kt)("inlineCode",{parentName:"p"},"happypack")," / ",(0,n.kt)("inlineCode",{parentName:"p"},"thread-loader")," to drop your build times even further. As you'll see, now that we're well into the world of webpack 4 (with webpack 5 waiting in the wings) the advantage of ",(0,n.kt)("inlineCode",{parentName:"p"},"happypack")," / ",(0,n.kt)("inlineCode",{parentName:"p"},"thread-loader")," are no longer so profound."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"webpack-config-plugins")," follows the advice I set out in my post; it uses ",(0,n.kt)("inlineCode",{parentName:"p"},"thread-loader")," in its pluggable configurations. Now, back to Ernst's issue."),(0,n.kt)("h2",r({},{id:"thread-loader-infinity-war"}),(0,n.kt)("inlineCode",{parentName:"h2"},"thread-loader"),": Infinity War"),(0,n.kt)("p",null,"Jan quickly identified the problem. He did that rarest of things; he read the documentation which said:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-js"}),"// timeout for killing the worker processes when idle\n      // defaults to 500 (ms)\n      // can be set to Infinity for watching builds to keep workers alive\n      poolTimeout: 2000,\n")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"webpack-config-plugins")," configurations (running in watch mode) were subject to the thread loaders being killed after 500ms. They got resurrected when they were next needed; but that's not as instant as you might hope. Jan then did a test:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-sh"}),"(default pool - 30 runs - 1000 components ) average: 2.668068965517241\n(no thread-loader - 30 runs - 1000 components ) average: 1.2674137931034484\n(Infinity pool - 30 runs - 1000 components ) average: 1.371827586206896\n")),(0,n.kt)("p",null,"This demonstrates that using ",(0,n.kt)("inlineCode",{parentName:"p"},"thread-loader")," in watch mode with ",(0,n.kt)("inlineCode",{parentName:"p"},"poolTimeout: Infinity")," performs significantly better than when it defaults to 500ms. But perhaps more significantly, not using ",(0,n.kt)("inlineCode",{parentName:"p"},"thread-loader")," performs even better still."),(0,n.kt)("h2",r({},{id:"maybe-youve-thread-enough"}),'"Maybe You\'ve Thread Enough"'),(0,n.kt)("p",null,"When I tested using ",(0,n.kt)("inlineCode",{parentName:"p"},"thread-loader")," in watch mode with ",(0,n.kt)("inlineCode",{parentName:"p"},"poolTimeout: Infinity")," on my own builds I got the same benefit Jan had. I also got ",(0,n.kt)("em",{parentName:"p"},"even")," more benefit from dropping ",(0,n.kt)("inlineCode",{parentName:"p"},"thread-loader")," entirely."),(0,n.kt)("p",null,"A likely reason for this benefit is that typically when you're developing, you're working on one file at a time. Hence you only transpile one file at a time:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(88695).Z,width:"640",height:"173"})),(0,n.kt)("p",null,"So there's not a great deal of value that ",(0,n.kt)("inlineCode",{parentName:"p"},"thread-loader")," can add here; mostly it's twiddling thumbs and adding an overhead. ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/webpack-contrib/thread-loader/blob/master/README/index.md#usage"}),"To quote the docs:")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Each worker is a separate node.js process, which has an overhead of ","~","600ms. There is also an overhead of inter-process communication."),(0,n.kt)("p",{parentName:"blockquote"},"Use this loader only for expensive operations!")),(0,n.kt)("p",null,"Now, my build is not your build. I can't guarantee that you'll get the same results as Jan and I experienced; but I would encourage you to investigate if you're using ",(0,n.kt)("inlineCode",{parentName:"p"},"thread-loader")," correctly and whether it's actually helping you. In these days of webpack 4+ perhaps it isn't."),(0,n.kt)("p",null,"There are still scenarios where ",(0,n.kt)("inlineCode",{parentName:"p"},"thread-loader")," still provides an advantage. It can speed up production builds. It can speed up the initial startup of watch mode. ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/webpack-contrib/thread-loader/pull/52"}),"In fact Jan has subsequently actually improved the ",(0,n.kt)("inlineCode",{parentName:"a"},"thread-loader")," to that specific end.")," Yay Jan!"),(0,n.kt)("p",null,"If this is all too much for you, and you want to hand off the concern to someone else then perhaps all of this serves as a motivation to just sit back, put your feet up and start using ",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/namics/webpack-config-plugins"}),(0,n.kt)("inlineCode",{parentName:"a"},"webpack-config-plugins"))," instead of doing your own configuration."))}u.isMDXComponent=!0},88695:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ts-profile2-4c5d8cf4610f69e36465d4ec955ae94a.webp"}}]);