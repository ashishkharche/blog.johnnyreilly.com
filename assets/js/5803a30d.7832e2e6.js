"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[26439],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=u(n),d=i,g=h["".concat(l,".").concat(d)]||h[d]||c[d]||o;return n?a.createElement(g,r(r({ref:t},p),{},{components:n})):a.createElement(g,r({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},97511:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>p});n(67294);var a=n(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const r={title:"Azure Static Web Apps - a Netlify alternative",authors:"johnnyreilly",tags:["Azure Static Web Apps","GitHub Actions","Docusaurus"],hide_table_of_contents:!1},s=void 0,l={permalink:"/2022/02/08/azure-static-web-apps-a-netlify-alternative",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2022-02-08-azure-static-web-apps-a-netlify-alternative/index.md",source:"@site/blog/2022-02-08-azure-static-web-apps-a-netlify-alternative/index.md",title:"Azure Static Web Apps - a Netlify alternative",description:"Jamstack sites have taken the world by storm. There's currently fierce competition between offerings like Netlify and Cloudflare. A new player in this space is Azure Static Web Apps. This post will look at what working with SWAs is like and will demonstrate deploying one using GitHub Actions.",date:"2022-02-08T00:00:00.000Z",formattedDate:"February 8, 2022",tags:[{label:"Azure Static Web Apps",permalink:"/tags/azure-static-web-apps"},{label:"GitHub Actions",permalink:"/tags/git-hub-actions"},{label:"Docusaurus",permalink:"/tags/docusaurus"}],readingTime:7.65,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Azure Static Web Apps - a Netlify alternative",authors:"johnnyreilly",tags:["Azure Static Web Apps","GitHub Actions","Docusaurus"],hide_table_of_contents:!1},prevItem:{title:"Swashbuckle & inheritance: Give. Me. The. Types",permalink:"/2022/03/06/swashbuckle-inheritance-multiple-return-types"},nextItem:{title:"Lazy loading images with Docusaurus",permalink:"/2022/02/02/lazy-loading-images-with-docusaurus"}},u={authorsImageUrls:[void 0]},p=[{value:"Jamstack and Azure Static Web Apps",id:"jamstack-and-azure-static-web-apps",level:2},{value:"Create our application",id:"create-our-application",level:2},{value:"Creating a Static Web App in Azure",id:"creating-a-static-web-app-in-azure",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Staging Environments",id:"staging-environments",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:p};function h(e){var{components:t}=e,r=o(e,["components"]);return(0,a.kt)("wrapper",i({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Jamstack sites have taken the world by storm. There's currently fierce competition between offerings like ",(0,a.kt)("a",i({parentName:"p"},{href:"https://blog.logrocket.com/netlify-vs-cloudflare-pages/"}),"Netlify and Cloudflare"),". A new player in this space is Azure Static Web Apps. This post will look at what working with SWAs is like and will demonstrate deploying one using GitHub Actions."),(0,a.kt)("h2",i({},{id:"jamstack-and-azure-static-web-apps"}),"Jamstack and Azure Static Web Apps"),(0,a.kt)("p",null,(0,a.kt)("a",i({parentName:"p"},{href:"https://en.m.wikipedia.org/wiki/Jamstack"}),"Jamstack")," stands for JavaScript, API and Markup In Jamstack websites, the application logic typically resides on the client side. Typically these clients are built as ",(0,a.kt)("a",i({parentName:"p"},{href:"https://en.m.wikipedia.org/wiki/Single-page_application"}),"single-page applications")," and often have HTML files statically generated for every possible path to support search engine optimization."),(0,a.kt)("p",null,"Azure Static Web Apps were released for general use in ",(0,a.kt)("a",i({parentName:"p"},{href:"https://azure.microsoft.com/en-us/updates/azure-static-web-apps-is-now-generally-available/"}),"May 2021")," and offer features including:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Globally distributed content for production apps"),(0,a.kt)("li",{parentName:"ul"},"Auto-provisioned preview environments"),(0,a.kt)("li",{parentName:"ul"},"Custom domain configuration and free SSL certificates"),(0,a.kt)("li",{parentName:"ul"},"Built-in access to a variety of authentication providers"),(0,a.kt)("li",{parentName:"ul"},"Route-based authorization"),(0,a.kt)("li",{parentName:"ul"},"Custom routing"),(0,a.kt)("li",{parentName:"ul"},"Integration with serverless APIs powered by Azure Functions"),(0,a.kt)("li",{parentName:"ul"},"A custom Visual Studio Code developer extension")),(0,a.kt)("p",null,"Significantly, ",(0,a.kt)("a",i({parentName:"p"},{href:"https://azure.microsoft.com/en-gb/pricing/details/app-service/static/"}),"these features are available to use for free"),". With Netlify there is also a ",(0,a.kt)("a",i({parentName:"p"},{href:"https://www.netlify.com/pricing/"}),"free tier"),", however it's quite easy to exceed the build limits of the free tier and land yourself with an unexpected bill. By combining Azure Static Web Apps with GitHub Actions we can build comparable experiences and save ourselves money!"),(0,a.kt)("p",null,"So let's build ourselves a simple SWA and deploy it with GitHub Actions."),(0,a.kt)("h2",i({},{id:"create-our-application"}),"Create our application"),(0,a.kt)("p",null,"Inside the root of our repository we're going to create a ",(0,a.kt)("a",i({parentName:"p"},{href:"https://docusaurus.io/"}),"Docusaurus site"),". Docusaurus is a good example of a static site, the kind of which is a natural fit for Jamstack. We could equally use something else like ",(0,a.kt)("a",i({parentName:"p"},{href:"https://gohugo.io/"}),"Hugo")," for instance."),(0,a.kt)("p",null,"At the command line we'll enter:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-shell"}),"npx create-docusaurus@latest website classic\n")),(0,a.kt)("p",null,"And Docusaurus will create a new site in the ",(0,a.kt)("inlineCode",{parentName:"p"},"website")," directory. Let's commit and push this and turn our attention to Azure."),(0,a.kt)("h2",i({},{id:"creating-a-static-web-app-in-azure"}),"Creating a Static Web App in Azure"),(0,a.kt)("p",null,"There's a number of ways to create a Static Web App in Azure. It's possible to use ",(0,a.kt)("a",i({parentName:"p"},{href:"https://blog.johnnyreilly.com/2021/08/15/bicep-azure-static-web-apps-azure-devops#bicep-template"}),"infrastructure as code with a language like Bicep"),". But for this post let's use the ",(0,a.kt)("a",i({parentName:"p"},{href:"https://portal.azure.com"}),"Azure Portal")," instead. If you don't have an account already, you can set one up for free very quickly."),(0,a.kt)("p",null,'Once you\'ve logged in, click "Create a resource" and look up Static Web App:'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Screenshot of the Azure Portal, &quot;Create a resource&quot; Azure Static Web Apps section",src:n(45174).Z,width:"1073",height:"640"})),(0,a.kt)("p",null,'Click on "Create" and you\'ll be take to the creation dialog:'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Screenshot of the Azure Portal, &quot;Create a resource&quot; Azure Static Web Apps dialog",src:n(90714).Z,width:"1213",height:"1404"})),(0,a.kt)("p",null,'You\'ll need to create a resource group for your SWA to live in, give the app a name, the "Free" plan and a deployment source of GitHub.'),(0,a.kt)("p",null,'Click on the "Sign in with GitHub" button and authorize Azure to access your GitHub account for Static Web Apps.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Screenshot of the Azure Portal, &quot;Create a resource&quot; Azure Static Web Apps dialog - repository settings",src:n(10323).Z,width:"1201",height:"1018"})),(0,a.kt)("p",null,"At this point Azure will query GitHub on your behalf and look up the organisations and repositories you have access to. Select the repository that you'd like to deploy to your Static Web App and select the branch you'd like to deploy."),(0,a.kt)("p",null,'You also need to provide Azure with some build details that help it understand how your app is built. We\'ll provide a preset of "Custom". We\'ll set the "App location" (the root of our front end app) to be ',(0,a.kt)("inlineCode",{parentName:"p"},'"/website"')," to tally up with the application we just created. We'll leave \"Api location\" blank and we'll set the output location to be ",(0,a.kt)("inlineCode",{parentName:"p"},'"build"')," - this is the directory under ",(0,a.kt)("inlineCode",{parentName:"p"},"website")," where Docusaurus will create our site."),(0,a.kt)("p",null,'Finally click "Review + create" and then "Create".'),(0,a.kt)("p",null,"Azure will now:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create an Azure Static Web app resource in Azure"),(0,a.kt)("li",{parentName:"ul"},"Update your repository to add a GitHub Actions workflow to deploy your static web app"),(0,a.kt)("li",{parentName:"ul"},"Kick off a first run of the GitHub Actions workflow to deploy your SWA.")),(0,a.kt)("p",null,"Pretty amazing, right?"),(0,a.kt)("p",null,"When you look at the resource in Azure it will look something like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Screenshot of the Azure Portal, your Azure Static Web Apps resource",src:n(17703).Z,width:"1422",height:"657"})),(0,a.kt)("p",null,"If you click on the GitHub Action runs you'll be presented with your GitHub Action:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Screenshot of the GitHub Action",src:n(90668).Z,width:"1420",height:"1079"})),(0,a.kt)("p",null,"And when that finishes running you'll be able to see your deployed Static Web App by clicking on the URL in the Azure Portal:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Screenshot of your Static Web App running in a browser",src:n(76335).Z,width:"1511",height:"676"})),(0,a.kt)("p",null,"We've gone from having nothing, to having a brand new website in Azure, shipped via continous deployment in GitHub Actions in a matter of minutes. This is low friction and high value!"),(0,a.kt)("h2",i({},{id:"authentication"}),"Authentication"),(0,a.kt)("p",null,"Now we've done our initial deployment, let's take it a stage further and add authentication."),(0,a.kt)("p",null,"One of the awesome features of Static Web Apps is the fact that ",(0,a.kt)("a",i({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/static-web-apps/authentication-authorization?tabs=invitations#login"}),"authentication is available straight out of the box"),". We can pick from GitHub, Azure Active Directory and Twitter as identity providers. Let's roll with GitHub and amend our ",(0,a.kt)("inlineCode",{parentName:"p"},"website/src/pages/index.js")," to support authentication:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-jsx"}),"import React, { useState, useEffect } from 'react';\nimport clsx from 'clsx';\nimport Layout from '@theme/Layout';\nimport useDocusaurusContext from '@docusaurus/useDocusaurusContext';\nimport styles from './index.module.css';\n\n/**\n * @typedef {object} UserInfo\n * @prop {\"github\"} identityProvider\n * @prop {string} userId\n * @prop {string} userDetails\n * @prop {string[]} userRoles\n */\n\n/**\n * @return {UserInfo | null}\n */\nfunction useUserInfo() {\n  const [userInfo, setUserInfo] = useState(null);\n\n  useEffect(() => {\n    async function getUserInfo() {\n      const response = await fetch('/.auth/me');\n      const payload = await response.json();\n      const { clientPrincipal } = payload;\n      return clientPrincipal;\n    }\n\n    getUserInfo().then((ui) => setUserInfo(ui));\n  }, []);\n\n  return userInfo;\n}\n\nexport default function Home() {\n  const { siteConfig } = useDocusaurusContext();\n  const userInfo = useUserInfo();\n\n  return (\n    <Layout\n      title={`Hello from ${siteConfig.title}`}\n      description=\"Description will go into a meta tag in <head />\"\n    >\n      <header className={clsx('hero hero--primary', styles.heroBanner)}>\n        <div className=\"container\">\n          <h1 className=\"hero__title\">{siteConfig.title}</h1>\n          <p className=\"hero__subtitle\">{siteConfig.tagline}</p>\n          <div className={styles.buttons}>\n            {userInfo ? (\n              <p>Hello {userInfo.userDetails}</p>\n            ) : (\n              <a\n                className=\"button button--secondary button--lg\"\n                href=\"/.auth/login/github\"\n              >\n                Click here to login\n              </a>\n            )}\n          </div>\n        </div>\n      </header>\n    </Layout>\n  );\n}\n")),(0,a.kt)("p",null,"The above code does the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Implements a React hook named ",(0,a.kt)("inlineCode",{parentName:"li"},"useUserInfo")," which calls the ",(0,a.kt)("inlineCode",{parentName:"li"},"/.auth/me")," endpoint of your SWA. This returns ",(0,a.kt)("inlineCode",{parentName:"li"},"null")," when not authenticated, and the ",(0,a.kt)("inlineCode",{parentName:"li"},"UserInfo")," when authenticated."),(0,a.kt)("li",{parentName:"ul"},"For users who are not authenticated, display a link button which takes people to ",(0,a.kt)("inlineCode",{parentName:"li"},"/.auth/login/github"),", thus triggering the GitHub authentication flow."),(0,a.kt)("li",{parentName:"ul"},"For users who are authenticated, display the users ",(0,a.kt)("inlineCode",{parentName:"li"},"userDetails"),"; the GitHub username.")),(0,a.kt)("p",null,"Let's commit and push this and (when our build has finished running) browse to our Static Web App once again:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Screenshot of Static Web App now featuring a login button",src:n(63038).Z,width:"1940",height:"734"})),(0,a.kt)("p",null,"If we click to login, we're taken through the GitHub authentication flow:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Screenshot of Static Web App now featuring a login button",src:n(69284).Z,width:"1023",height:"1070"})),(0,a.kt)("p",null,"Once you've authorised and granted consent you'll be redirected to your app and see that you're logged in:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Screenshot of Static Web App showing I&#39;m logged in",src:n(74427).Z,width:"1937",height:"740"})),(0,a.kt)("p",null,"If we pop open the devtools of Chrome we'll see what comes back from the ",(0,a.kt)("inlineCode",{parentName:"p"},"/.auth/me")," endpoint:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Screenshot of Chrome devtools displaying a JSON structure",src:n(36114).Z,width:"1611",height:"328"})),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-json"}),'{\n  "clientPrincipal": {\n    "identityProvider": "github",\n    "userId": "1f5b4b7de7d445e29dd6188bcc7ee052",\n    "userDetails": "johnnyreilly",\n    "userRoles": ["anonymous", "authenticated"]\n  }\n}\n')),(0,a.kt)("p",null,"We've now implemented and demonstrated authentication with Azure Static Web Apps with very little effort on our behalf. This is tremendous!"),(0,a.kt)("h2",i({},{id:"staging-environments"}),"Staging Environments"),(0,a.kt)("p",null,"Finally, let's look at a super cool feature that Static Web Apps provides by default. If you take a look at the Environments tab of your SWA you'll see this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Screenshot of the Azure Portal, your Azure Static Web Apps resource - featuring the phrase &quot;Open pull requests against the linked repository to create a staging environment.&quot;",src:n(21626).Z,width:"2900",height:"976"})),(0,a.kt)("blockquote",null,(0,a.kt)("h2",i({parentName:"blockquote"},{id:"staging"}),"Staging"),(0,a.kt)("p",{parentName:"blockquote"},"Open pull requests against the linked repository to create a staging environment.")),(0,a.kt)("p",null,"Let's try that out! We'll create a new branch:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-shell"}),"git checkout -b feat/show-me-staging\n")),(0,a.kt)("p",null,"In our ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js")," we'll add an arbitrary piece of text:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-jsx"}),"<p>I'm a staging environment!</p>\n")),(0,a.kt)("p",null,"Then we'll commit and push our branch to GitHub and create a pull request. This triggers our GitHub Action to run once again. But this time, rather than publishing over our existing Static Web App, it's going to spin up a brand new one with our changes in. Not only that, it's going to put a link for us in our GitHub pull request so we can browse straight to it:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Screenshot of the pull request in GitHub including a comment from the GitHub Actions bot which says: &quot;Azure Static Web Apps: Your stage site is ready! Visit it here: https://ambitious-island-05069ea10-2.centralus.azurestaticapps.net&quot;",src:n(42392).Z,width:"2097",height:"1170"})),(0,a.kt)("p",null,"This is the equivalent of Netlify Deploy Previews, implemented with Azure Static Web Apps and GitHub Actions. Given the allowances for GitHub Actions currently sit at ",(0,a.kt)("a",i({parentName:"p"},{href:"https://docs.github.com/en/billing/managing-billing-for-github-actions/about-billing-for-github-actions"}),"2,000 free minutes per month")," as compared with Netlify's ",(0,a.kt)("a",i({parentName:"p"},{href:"https://www.netlify.com/pricing/"}),"300 free minutes per month"),", you're less likely to receive a bill for using Static Web Apps."),(0,a.kt)("p",null,"This staging environment will last only until the pull request is closed. At that point the environment is torn down by the GitHub Action."),(0,a.kt)("h2",i({},{id:"conclusion"}),"Conclusion"),(0,a.kt)("p",null,"In this post we've deployed a website to a Static Web App using GitHub Actions and implemented authentication. We've also demonstrated Azure's equivalent of Netlify's deploy previews; staging environments."),(0,a.kt)("p",null,(0,a.kt)("a",i({parentName:"p"},{href:"https://blog.logrocket.com/azure-static-web-apps-netlify-alternative/"}),"This post was originally published on LogRocket.")))}h.isMDXComponent=!0},10323:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot-azure-portal-create-a-resource-dialog-repo-a2de23b7816aec676ed4ff67d8ad050b.png"},90714:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot-azure-portal-create-a-resource-dialog-e673221e269c82a9827c07084ae1216b.png"},45174:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot-azure-portal-create-a-resource-c96b4cc01f5980cce0e35108319a9421.png"},21626:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot-azure-portal-static-web-app-resource-environments-1bcff031a37577bd59bbed46f0c27699.png"},17703:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot-azure-portal-static-web-app-resource-aeb5bad8b5e9a499469c9816398670db.png"},90668:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot-github-action-37011d8698869ba4b04a84fc5fe0c3af.png"},42392:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot-github-pull-request-deploy-preview-dc7d94503a04d87d62a4d862937412a9.png"},36114:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot-static-web-app-devtools-me-6697fe8eaf0101940022da23f53ee984.png"},74427:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot-static-web-app-logged-in-e8adf36cea4a79badc437f5c54a137d9.png"},69284:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot-static-web-app-login-github-48c74b198021cce9eaa978d85e85dbb9.png"},63038:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot-static-web-app-login-3000a60604403556485f63c37b6cda49.png"},76335:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot-static-web-app-818eff8dedecdbba13d53408c97b2494.png"}}]);