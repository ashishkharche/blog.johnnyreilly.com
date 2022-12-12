"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[85308],{3905:(t,e,a)=>{a.d(e,{Zo:()=>l,kt:()=>y});var i=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function n(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,i,o=function(t,e){if(null==t)return{};var a,i,o={},r=Object.keys(t);for(i=0;i<r.length;i++)a=r[i],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)a=r[i],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var c=i.createContext({}),s=function(t){var e=i.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):n(n({},e),t)),a},l=function(t){var e=s(t.components);return i.createElement(c.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},u=i.forwardRef((function(t,e){var a=t.components,o=t.mdxType,r=t.originalType,c=t.parentName,l=p(t,["components","mdxType","originalType","parentName"]),u=s(a),y=o,d=u["".concat(c,".").concat(y)]||u[y]||h[y]||r;return a?i.createElement(d,n(n({ref:e},l),{},{components:a})):i.createElement(d,n({ref:e},l))}));function y(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=a.length,n=new Array(r);n[0]=u;var p={};for(var c in e)hasOwnProperty.call(e,c)&&(p[c]=e[c]);p.originalType=t,p.mdxType="string"==typeof t?t:o,n[1]=p;for(var s=2;s<r;s++)n[s]=a[s];return i.createElement.apply(null,n)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},29820:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>n,metadata:()=>c,toc:()=>l});a(67294);var i=a(3905);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t},o.apply(this,arguments)}function r(t,e){if(null==t)return{};var a,i,o=function(t,e){if(null==t)return{};var a,i,o={},r=Object.keys(t);for(i=0;i<r.length;i++)a=r[i],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)a=r[i],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}const n={title:"TypeScript vs JSDoc JavaScript",authors:"johnnyreilly",tags:["JavaScript","TypeScript","JSDoc"],image:"./title-image.png",hide_table_of_contents:!1},p=void 0,c={permalink:"/2021/11/22/typescript-vs-jsdoc-javascript",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2021-11-22-typescript-vs-jsdoc-javascript/index.md",source:"@site/blog/2021-11-22-typescript-vs-jsdoc-javascript/index.md",title:"TypeScript vs JSDoc JavaScript",description:"There's a debate to be had about whether using JavaScript or TypeScript leads to better outcomes when building a project. The introduction of using JSDoc annotations to type a JavaScript codebase introduces a new dynamic to this discussion. This post will investigate what that looks like, and come to an (opinionated) conclusion.",date:"2021-11-22T00:00:00.000Z",formattedDate:"November 22, 2021",tags:[{label:"JavaScript",permalink:"/tags/java-script"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"JSDoc",permalink:"/tags/js-doc"}],readingTime:5.28,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"TypeScript vs JSDoc JavaScript",authors:"johnnyreilly",tags:["JavaScript","TypeScript","JSDoc"],image:"./title-image.png",hide_table_of_contents:!1},prevItem:{title:"Azure Static Web App Deploy Previews with Azure DevOps",permalink:"/2021/12/05/azure-static-web-app-deploy-previews-with-azure-devops"},nextItem:{title:"Azure standard availability tests with Bicep",permalink:"/2021/11/18/azure-standard-tests-with-bicep"}},s={image:a(61981).Z,authorsImageUrls:[void 0]},l=[{value:"Updated 6th December 2021",id:"updated-6th-december-2021",level:2},{value:"What is JSDoc JavaScript?",id:"what-is-jsdoc-javascript",level:2},{value:"Why use JSDoc JavaScript?",id:"why-use-jsdoc-javascript",level:2},{value:"Why use TypeScript?",id:"why-use-typescript",level:2},{value:"It&#39;s your choice!",id:"its-your-choice",level:2}],h={toc:l};function u(t){var{components:e}=t,n=r(t,["components"]);return(0,i.kt)("wrapper",o({},h,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"There's a debate to be had about whether using JavaScript or TypeScript leads to better outcomes when building a project. The introduction of using JSDoc annotations to type a JavaScript codebase introduces a new dynamic to this discussion. This post will investigate what that looks like, and come to an (opinionated) conclusion."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"title image reading &quot;JSDoc JavaScript vs TypeScript&quot; with a JavaScript logo and TypeScript logo",src:a(61981).Z,width:"1600",height:"900"})),(0,i.kt)("h2",o({},{id:"updated-6th-december-2021"}),"Updated 6th December 2021"),(0,i.kt)("p",null,"This blog evolved to become a talk:"),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/5MZoAcheyE4?start=240",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,i.kt)("p",null,"If you'd talked to me in 2018, I would have solidly recommended using TypeScript, and steering away from JavaScript. The rationale is simple: I'm exceedingly convinced of the value that static typing provides in terms of productivity / avoiding bugs in production. I appreciate this can be a contentious issue, but that is my settled opinion on the subject. Other opinions are available."),(0,i.kt)("p",null,"TypeScript has long had a good static typing story. JavaScript is dynamically typed and so historically has not. Thanks to TypeScript support for JSDoc, JavaScript can now be statically type checked."),(0,i.kt)("h2",o({},{id:"what-is-jsdoc-javascript"}),"What is JSDoc JavaScript?"),(0,i.kt)("p",null,"JSDoc itself actually dates way back to 1999. According to the ",(0,i.kt)("a",o({parentName:"p"},{href:"https://en.wikipedia.org/wiki/JSDoc"}),"Wikipedia entry"),":"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"JSDoc is a markup language used to annotate JavaScript source code files. Using comments containing JSDoc, programmers can add documentation describing the application programming interface of the code they're creating.")),(0,i.kt)("p",null,"The TypeScript team have taken JSDoc support and run with it. You can now use a ",(0,i.kt)("a",o({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html"}),"variant of JSDoc annotations")," to provide type information in JavaScript files."),(0,i.kt)("p",null,"What does this look like? Well, to take a simple example, a TypeScript statement like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"let myString: string;\n")),(0,i.kt)("p",null,"Could become the equivalent JavaScript statement with a JSDoc annotation:"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"/** @type {string} */\nlet myString;\n")),(0,i.kt)("p",null,"This is type enhanced JavaScript which the TypeScript compiler can understand and type check."),(0,i.kt)("h2",o({},{id:"why-use-jsdoc-javascript"}),"Why use JSDoc JavaScript?"),(0,i.kt)("p",null,"Why would you use JSDoc JavaScript instead of TypeScript? Well there's a number of possible use cases."),(0,i.kt)("p",null,"Perhaps you're writing simple node scripts and you'd like a little type safety to avoid mistakes. Or perhaps you want to dip your project's toe in the waters of static type checking but without fully committing. JSDoc allows for that. Or perhaps your team simply prefers not having a compile step."),(0,i.kt)("p",null,"That, in fact, was the rationale of the webpack team. A little bit of history: webpack has always been a JavaScript codebase. As the codebase grew and grew, there was often discussion about using static typing. However, having a compilation step wasn't desired."),(0,i.kt)("p",null,"TypeScript had been quietly adding support for type checking JavaScript with the assistance of JSDoc for some time. Initial support arrived with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--checkJs")," compiler option in ",(0,i.kt)("a",o({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-3.html#errors-in-js-files-with---checkjs"}),"TypeScript 2.3"),"."),(0,i.kt)("p",null,"A community member by the name of ",(0,i.kt)("a",o({parentName:"p"},{href:"https://twitter.com/mohsen____"}),"Mohsen Azimi")," experimentally started out using this approach to type check the webpack codebase. ",(0,i.kt)("a",o({parentName:"p"},{href:"https://github.com/webpack/webpack/pull/6862"}),"His PR")," ended up being a test case that helped improve the type checking of JavaScript by TypeScript. TypeScript v2.9 shipped with a whole host of JSDoc improvements as a consequence of the webpack work. Being such a widely used project this also helped popularise the approach of using JSDoc to type check JavaScript codebases. It demonstrated that this approach could work on a significantly sized codebase."),(0,i.kt)("p",null,"These days, JSDoc type checking with TypeScript is extremely powerful. Whilst not quite on par with TypeScript (not all TypeScript syntax is supported in JSDoc) the gap in functionality is pretty small."),(0,i.kt)("p",null,"It's a completely legitimate choice to build a JavaScript codebase with all the benefits of static typing."),(0,i.kt)("h2",o({},{id:"why-use-typescript"}),"Why use TypeScript?"),(0,i.kt)("p",null,"So if you were starting a project today, and you'd decided you wanted to make use of static typing, how do you choose? TypeScript or JavaScript with JSDoc?"),(0,i.kt)("p",null,"Well, unless you've a compelling need to avoid a compilation step, I'm going to suggest that TypeScript may be the better choice for a number of reasons."),(0,i.kt)("p",null,"Firstly, the tooling support for using TypeScript directly is better than that for JSDoc JavaScript. At the time of writing, things like refactoring tools etc in your editor work more effectively with TypeScript than with JSDoc JavaScript. (Although these are improving as time goes by.)"),(0,i.kt)("p",null,'Secondly, working with JSDoc is distinctly "noisier". It requires far more keystrokes to achieve the same level of type safety. Consider the following TypeScript:'),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"function stringsStringStrings(\n  p1: string,\n  p2?: string,\n  p3?: string,\n  p4 = 'test'\n): string {\n  // ...\n}\n")),(0,i.kt)("p",null,"As compared to the equivalent JSDoc JavaScript:"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-ts"}),'/**\n * @param {string}  p1\n * @param {string=} p2\n * @param {string} [p3]\n * @param {string} [p4="test"]\n * @return {string}\n */\nfunction stringsStringStrings(p1, p2, p3, p4) {\n  // ...\n}\n')),(0,i.kt)("p",null,"It may be my own familiarity with TypeScript speaking, but I find that the TypeScript is easier to read and comprehend as compared to the JSDoc JavaScript alternative. The fact that all JSDoc annotations live in comments, rather than directly in syntax, makes it harder to follow. (It certainly doesn't help that many VS Code themes present comments in a very faint colour.)"),(0,i.kt)("p",null,"My final reason for favouring TypeScript comes down to falling into the ",(0,i.kt)("a",o({parentName:"p"},{href:"https://blog.codinghorror.com/falling-into-the-pit-of-success/"}),'"pit of success"'),". You're cutting ",(0,i.kt)("em",{parentName:"p"},"against")," the grain when it comes to static typing and JavaScript. You can have it, but you have to work that bit harder to ensure that you have statically typed code. On the other hand, you're cutting ",(0,i.kt)("em",{parentName:"p"},"with")," the grain when it comes to static typing and TypeScript. You have to work hard to opt out of static typing. The TypeScript defaults tend towards static typing, whilst the JavaScript defaults tend away."),(0,i.kt)("p",null,"As someone who very much favours static typing, you can imagine how this is compelling to me!"),(0,i.kt)("h2",o({},{id:"its-your-choice"}),"It's your choice!"),(0,i.kt)("p",null,"So in a way, I don't feel super strongly whether people use JavaScript or TypeScript. But having static typing will likely be a benefit to new projects. Bottom line, I'm keen that people fall into the \"pit of success\", so my recommendation for a new project would be TypeScript."),(0,i.kt)("p",null,"I really like JSDoc myself, and will often use it on small projects. It's a fantastic addition to TypeScript's capabilities. For bigger projects, I'll likely go with TypeScript from the get go. But really, this is a choice - and either is great."),(0,i.kt)("p",null,(0,i.kt)("a",o({parentName:"p"},{href:"https://blog.logrocket.com/typescript-vs-jsdoc-javascript/"}),"This post was originally published on LogRocket.")))}u.isMDXComponent=!0},61981:(t,e,a)=>{a.d(e,{Z:()=>i});const i=a.p+"assets/images/title-image-2ec6e22ec68ab3c6e2ba401177bf6015.png"}}]);