"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[44842],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?o.createElement(m,a(a({ref:t},c),{},{components:n})):o.createElement(m,a({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72105:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});n(67294);var o=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const a={title:"Azure Static Web Apps: Node.js 16 / 18 and Oryx",authors:"johnnyreilly",tags:["Azure Static Web Apps","GitHub Actions","Docusaurus","Node.js","Oryx"],image:"./title-image.png",hide_table_of_contents:!1},s=void 0,l={permalink:"/2022/05/28/azure-static-web-apps-node-16-oryx",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2022-05-28-azure-static-web-apps-node-16-oryx/index.md",source:"@site/blog/2022-05-28-azure-static-web-apps-node-16-oryx/index.md",title:"Azure Static Web Apps: Node.js 16 / 18 and Oryx",description:"Azure Static Web Apps presently fixes to Node.js 14 when building. If you require a different version of Node to build, this can be a problem. This post outlines a workaround.",date:"2022-05-28T00:00:00.000Z",formattedDate:"May 28, 2022",tags:[{label:"Azure Static Web Apps",permalink:"/tags/azure-static-web-apps"},{label:"GitHub Actions",permalink:"/tags/git-hub-actions"},{label:"Docusaurus",permalink:"/tags/docusaurus"},{label:"Node.js",permalink:"/tags/node-js"},{label:"Oryx",permalink:"/tags/oryx"}],readingTime:2.06,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Azure Static Web Apps: Node.js 16 / 18 and Oryx",authors:"johnnyreilly",tags:["Azure Static Web Apps","GitHub Actions","Docusaurus","Node.js","Oryx"],image:"./title-image.png",hide_table_of_contents:!1},prevItem:{title:"TypeScript 4.7 and ECMAScript Module Support",permalink:"/2022/06/07/typescript-4-7-and-ecmascript-module-support"},nextItem:{title:"Azure Static Web Apps: named preview environments with Azure DevOps",permalink:"/2022/05/07/static-web-apps-azure-devops-named-preview-environments"}},p={image:n(52718).Z,authorsImageUrls:[void 0]},c=[{value:"The engine &quot;node&quot; is incompatible",id:"the-engine-node-is-incompatible",level:2},{value:"Solution 1: <code>engines</code> to the rescue!",id:"solution-1-engines-to-the-rescue",level:2},{value:"Solution 2: Environment variables for the win!",id:"solution-2-environment-variables-for-the-win",level:2}],u={toc:c};function d(e){var{components:t}=e,a=i(e,["components"]);return(0,o.kt)("wrapper",r({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Azure Static Web Apps presently fixes to Node.js 14 when building. If you require a different version of Node to build, this can be a problem. This post outlines a workaround."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"title image reading &quot;Azure Static Web Apps: Node.js 16 and Oryx&quot; with Azure and Node.js logos",src:n(52718).Z,width:"1600",height:"900"})),(0,o.kt)("h2",r({},{id:"the-engine-node-is-incompatible"}),'The engine "node" is incompatible'),(0,o.kt)("p",null,"As I was upgrading this blog to ",(0,o.kt)("a",r({parentName:"p"},{href:"https://github.com/facebook/docusaurus/releases/tag/v2.0.0-beta.21"}),"Docusaurus v2.0.0-beta.21")," I noticed this error in my build:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-shell"}),'error @docusaurus/core@2.0.0-beta.21: The engine "node" is incompatible with this module. Expected version ">=16.14". Got "14.19.1"\nerror Found incompatible module.\n\n\n---End of Oryx build logs---\nOryx has failed to build the solution.\n')),(0,o.kt)("p",null,(0,o.kt)("a",r({parentName:"p"},{href:"https://github.com/microsoft/Oryx"}),"Oryx"),", which performs the build for Static Web Apps, is fixed to Node 14 for the default LTS version (for now, this will definitely change sometime in 2023). You can check for the constant ",(0,o.kt)("inlineCode",{parentName:"p"},"NodeLtsVersion")," ",(0,o.kt)("a",r({parentName:"p"},{href:"https://github.com/microsoft/Oryx/blob/main/src/BuildScriptGenerator/Node/NodeConstants.cs"}),"here")," to check which version of Node Oryx is using as the ",(0,o.kt)("inlineCode",{parentName:"p"},"DEFAULT_NODE_VERSION"),". To override this default, can either use an ",(0,o.kt)("inlineCode",{parentName:"p"},"engines")," setting in ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),", or use an environment setting in the The GitHub Action. "),(0,o.kt)("h2",r({},{id:"solution-1-engines-to-the-rescue"}),"Solution 1: ",(0,o.kt)("inlineCode",{parentName:"h2"},"engines")," to the rescue!"),(0,o.kt)("p",null,"You can specify the node version you require in your ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," with the ",(0,o.kt)("a",r({parentName:"p"},{href:"https://docs.npmjs.com/cli/v7/configuring-npm/package-json#engines"}),(0,o.kt)("inlineCode",{parentName:"a"},"engines"))," property. This means you can do something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-json"}),'  "engines": {\n    "node": ">=16"\n  }\n')),(0,o.kt)("p",null,"And have the version of Node.js you require installed by Oryx."),(0,o.kt)("p",null,"Thanks to ",(0,o.kt)("a",r({parentName:"p"},{href:"https://github.com/cormacpayne"}),"Cormac McCarthy")," for his ",(0,o.kt)("a",r({parentName:"p"},{href:"https://github.com/Azure/static-web-apps/issues/694#issuecomment-1137492562"}),"comment")," which lead me to try this approach out."),(0,o.kt)("p",null,(0,o.kt)("a",r({parentName:"p"},{href:"https://github.com/johnnyreilly/blog.johnnyreilly.com/pull/228"}),"You can see the PR where I made this change for my blog here.")),(0,o.kt)("h2",r({},{id:"solution-2-environment-variables-for-the-win"}),"Solution 2: Environment variables for the win!"),(0,o.kt)("p",null,"You can change the version for the build step using an environnment variable. This is documented in the ",(0,o.kt)("a",r({parentName:"p"},{href:"https://learn.microsoft.com/en-us/azure/developer/javascript/how-to/with-web-app/static-web-app-with-swa-cli/create-static-web-app"}),"Microsoft Docs")),(0,o.kt)("p",null,"Modify the workflow file, from the ",(0,o.kt)("inlineCode",{parentName:"p"},"./github/workflows")," directory. Just add these last two lines:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-yaml"}),"     - name: Build And Deploy\n        id: builddeploy\n        uses: Azure/static-web-apps-deploy@v1\n        with:\n          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN_SAMPLE }}\n          repo_token: ${{ secrets.GITHUB_TOKEN }} # Used for Github integrations (i.e. PR comments)\n          action: 'upload'\n          app_location: '/' # App source code path\n          api_location: 'api' # Api source code path - optional\n          output_location: 'public' # Built app content directory - optional\n        env:  # Put a node version on the following line\n          NODE_VERSION: 18.12.0 \n")),(0,o.kt)("p",null,"You can use a specific node version (18.12.0 or 16.18.0) or a major node version (18 or 16). The latter approach installs the latest minor version."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," The Oryx image is updated quarterly.  You can get a list of the supported node versions ",(0,o.kt)("a",r({parentName:"p"},{href:"https://github.com/microsoft/Oryx/blob/main/doc/supportedPlatformVersions.md"}),"here"),"."),(0,o.kt)("p",null,"Thanks to Eric C\xf4t\xe9 from ",(0,o.kt)("a",r({parentName:"p"},{href:"https://reactAcademy.live"}),"React Academy")," for the information."))}d.isMDXComponent=!0},52718:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/title-image-b683e623552cedc511247615df08535b.png"}}]);