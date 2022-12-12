"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[39487],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),h=o,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},57569:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={title:"ts-loader Project References: First Blood",authors:"johnnyreilly",tags:["TypeScript","project references","ts-loader","Webpack"],hide_table_of_contents:!1},l=void 0,s={permalink:"/2018/09/23/ts-loader-project-references-first-blood",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2018-09-23-ts-loader-project-references-first-blood/index.md",source:"@site/blog/2018-09-23-ts-loader-project-references-first-blood/index.md",title:"ts-loader Project References: First Blood",description:"So project references eh? They shipped with TypeScript 3. We've just shipped initial support for project references in ts-loader v5.2.0. All the hard work was done by the amazing Andrew Branch. In fact I'd recommend taking a gander at the PR. Yay Andrew!",date:"2018-09-23T00:00:00.000Z",formattedDate:"September 23, 2018",tags:[{label:"TypeScript",permalink:"/tags/type-script"},{label:"project references",permalink:"/tags/project-references"},{label:"ts-loader",permalink:"/tags/ts-loader"},{label:"Webpack",permalink:"/tags/webpack"}],readingTime:3.385,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"ts-loader Project References: First Blood",authors:"johnnyreilly",tags:["TypeScript","project references","ts-loader","Webpack"],hide_table_of_contents:!1},prevItem:{title:"Brand New Fonting Awesomeness",permalink:"/2018/10/07/font-awesome-brand-icons-react"},nextItem:{title:"Semantic Versioning and Definitely Typed",permalink:"/2018/09/15/semantic-versioning-and-definitely-typed"}},p={authorsImageUrls:[void 0]},c=[{value:"TL;DR",id:"tldr",level:2},{value:"Like <code>tsc</code>, but <em>not</em> like <code>tsc --build</code>",id:"like-tsc-but-not-like-tsc---build",level:2},{value:"\u201cHey, don\u2019t you think that sounds kind of useless and terrible?\u201d",id:"hey-dont-you-think-that-sounds-kind-of-useless-and-terrible",level:2},{value:"<code>outDir</code> Windows problemo.",id:"outdir-windows-problemo",level:2}],d={toc:c};function u(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"So ",(0,n.kt)("a",o({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/project-references.html"}),"project references")," eh? They shipped with ",(0,n.kt)("a",o({parentName:"p"},{href:"https://blogs.msdn.microsoft.com/typescript/2018/07/30/announcing-typescript-3-0/#project-references"}),"TypeScript 3"),". We've just shipped initial support for project references in ",(0,n.kt)("a",o({parentName:"p"},{href:"https://github.com/TypeStrong/ts-loader/releases/tag/v5.2.0"}),(0,n.kt)("inlineCode",{parentName:"a"},"ts-loader v5.2.0")),". All the hard work was done by the amazing ",(0,n.kt)("a",o({parentName:"p"},{href:"https://twitter.com/atcb"}),"Andrew Branch"),". In fact I'd recommend taking a gander at ",(0,n.kt)("a",o({parentName:"p"},{href:"https://github.com/TypeStrong/ts-loader/pull/817"}),"the PR"),". Yay Andrew!"),(0,n.kt)("p",null,"This post will take us through the nature of the support for project references in ts-loader now and what we hope the future will bring. It ",(0,n.kt)("strike",null,"rips off shamelessly")),(0,n.kt)("p",null,"borrows from the ",(0,n.kt)("a",o({parentName:"p"},{href:"https://github.com/TypeStrong/ts-loader#projectreferences-boolean-defaultfalse"}),(0,n.kt)("inlineCode",{parentName:"a"},"README/index.md"))," documentation that Andrew wrote as part of the PR. Because I am not above stealing."),(0,n.kt)("h2",o({},{id:"tldr"}),"TL;DR"),(0,n.kt)("p",null,"Using project references currently requires building referenced projects outside of ts-loader. We don\u2019t want to keep it that way, but we\u2019re releasing what we\u2019ve got now. To try it out, you\u2019ll need to pass ",(0,n.kt)("inlineCode",{parentName:"p"},"projectReferences: true")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"loaderOptions"),"."),(0,n.kt)("h2",o({},{id:"like-tsc-but-not-like-tsc---build"}),"Like ",(0,n.kt)("inlineCode",{parentName:"h2"},"tsc"),", but ",(0,n.kt)("em",{parentName:"h2"},"not")," like ",(0,n.kt)("inlineCode",{parentName:"h2"},"tsc --build")),(0,n.kt)("p",null,"ts-loader has partial support for ",(0,n.kt)("a",o({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/project-references.html"}),"project references")," in that it will ",(0,n.kt)("em",{parentName:"p"},"load")," dependent composite projects that are already built, but will not currently ",(0,n.kt)("em",{parentName:"p"},"build/rebuild")," those upstream projects. The best way to explain exactly what this means is through an example. Say you have a project with a project reference pointing to the ",(0,n.kt)("inlineCode",{parentName:"p"},"lib/")," directory:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-sh"}),"tsconfig.json\napp.ts\nlib/\n  tsconfig.json\n  niftyUtil.ts\n")),(0,n.kt)("p",null,"And we\u2019ll assume that the root ",(0,n.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," has ",(0,n.kt)("inlineCode",{parentName:"p"},'{ "references": { "path": "lib" } }'),", which means that any import of a file that\u2019s part of the ",(0,n.kt)("inlineCode",{parentName:"p"},"lib")," sub-project is treated as a reference to another project, not just a reference to a TypeScript file. Before discussing how ts-loader handles this, it\u2019s helpful to review at a really basic level what ",(0,n.kt)("inlineCode",{parentName:"p"},"tsc")," itself does here. If you were to run ",(0,n.kt)("inlineCode",{parentName:"p"},"tsc")," on this tiny example project, the build would fail with the error:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-sh"}),"error TS6305: Output file 'lib/niftyUtil.d.ts' has not been built from source file 'lib/niftyUtil.ts'.\n")),(0,n.kt)("p",null,"Using project references actually instructs ",(0,n.kt)("inlineCode",{parentName:"p"},"tsc"),(0,n.kt)("em",{parentName:"p"},"not")," to build anything that\u2019s part of another project from source, but rather to look for any ",(0,n.kt)("inlineCode",{parentName:"p"},".d.ts")," and ",(0,n.kt)("inlineCode",{parentName:"p"},".js")," files that have already been generated from a previous build. Since we\u2019ve never built the project in ",(0,n.kt)("inlineCode",{parentName:"p"},"lib")," before, those files don\u2019t exist, so building the root project fails. Still just thinking about how ",(0,n.kt)("inlineCode",{parentName:"p"},"tsc")," works, there are two options to make the build succeed: either run ",(0,n.kt)("inlineCode",{parentName:"p"},"tsc -p lib/tsconfig.json"),(0,n.kt)("em",{parentName:"p"},"first"),", or simply run ",(0,n.kt)("inlineCode",{parentName:"p"},"tsc --build"),", which will figure out that ",(0,n.kt)("inlineCode",{parentName:"p"},"lib")," hasn\u2019t been built and build it first for you."),(0,n.kt)("p",null,"Ok, so how is that relevant to ts-loader? Because the best way to think about what ts-loader does with project references is that it acts like ",(0,n.kt)("inlineCode",{parentName:"p"},"tsc"),", but ",(0,n.kt)("em",{parentName:"p"},"not")," like ",(0,n.kt)("inlineCode",{parentName:"p"},"tsc --build"),". If you run ts-loader on a project that\u2019s using project references, and any upstream project hasn\u2019t been built, you\u2019ll get the exact same ",(0,n.kt)("inlineCode",{parentName:"p"},"error TS6305")," that you would get with ",(0,n.kt)("inlineCode",{parentName:"p"},"tsc"),". If you modify a source file in an upstream project and don\u2019t rebuild that project, ",(0,n.kt)("inlineCode",{parentName:"p"},"ts-loader")," won\u2019t have any idea that you\u2019ve changed anything\u2014it will still be looking at the output from the last time you ",(0,n.kt)("em",{parentName:"p"},"built")," that file."),(0,n.kt)("h2",o({},{id:"hey-dont-you-think-that-sounds-kind-of-useless-and-terrible"}),"\u201cHey, don\u2019t you think that sounds kind of useless and terrible?\u201d"),(0,n.kt)("p",null,"Well, sort of. You can consider it a work-in-progress. It\u2019s true that on its own, as of today, ts-loader doesn\u2019t have everything you need to take advantage of project references in webpack. In practice, though, ",(0,n.kt)("em",{parentName:"p"},"consuming")," upstream projects and ",(0,n.kt)("em",{parentName:"p"},"building")," upstream projects are somewhat separate concerns. Building them will likely come in a future release. For background, see the ",(0,n.kt)("a",o({parentName:"p"},{href:"https://github.com/TypeStrong/ts-loader/issues/815"}),"original issue"),"."),(0,n.kt)("h2",o({},{id:"outdir-windows-problemo"}),(0,n.kt)("inlineCode",{parentName:"h2"},"outDir")," Windows problemo."),(0,n.kt)("p",null,"At the moment, composite projects built using the ",(0,n.kt)("a",o({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/compiler-options.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"outDir")," compiler option"),' cannot be consumed using ts-loader on Windows. If you try to, ts-loader throws a "',(0,n.kt)("inlineCode",{parentName:"p"},"has not been built from source file"),'" error. ',(0,n.kt)("a",o({parentName:"p"},{href:"https://github.com/TypeStrong/ts-loader/pull/817#issuecomment-422245998"}),"You can see Andrew and I puzzling over it in the PR.")," We don't know why yet; it's possible there's a bug in ",(0,n.kt)("inlineCode",{parentName:"p"},"tsc"),". It's more likely there's a bug in ",(0,n.kt)("inlineCode",{parentName:"p"},"ts-loader"),". Hopefully it's going to get solved at some point. (Hey, maybe you're the one to solve it!) Either way, we didn't want to hold back from releasing. So if you're building on Windows then avoid building ",(0,n.kt)("inlineCode",{parentName:"p"},"composite")," projects using ",(0,n.kt)("inlineCode",{parentName:"p"},"outDir"),"."))}u.isMDXComponent=!0}}]);