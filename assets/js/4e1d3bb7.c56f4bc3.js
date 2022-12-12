"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[41106],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=u(n),d=a,g=h["".concat(s,".").concat(d)]||h[d]||c[d]||o;return n?i.createElement(g,r(r({ref:t},p),{},{components:n})):i.createElement(g,r({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},26529:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>p});n(67294);var i=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const r={title:"Deep linking with Azure Static Web Apps and Easy Auth",authors:"johnnyreilly",tags:["Authorization","Easy Auth","deep link","Static Web Apps","Azure AD"],image:"./title-image.png",hide_table_of_contents:!1},l=void 0,s={permalink:"/2022/12/04/azure-static-web-apps-easyauth-deeplink",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2022-12-04-azure-static-web-apps-easyauth-deeplink/index.md",source:"@site/blog/2022-12-04-azure-static-web-apps-easyauth-deeplink/index.md",title:"Deep linking with Azure Static Web Apps and Easy Auth",description:"Azure Static Web Apps doesn't support deep linking with authentication. The post login redirect parameter of postloginredirect_uri does not support query string parameters. This post describes how to work around this limitation.",date:"2022-12-04T00:00:00.000Z",formattedDate:"December 4, 2022",tags:[{label:"Authorization",permalink:"/tags/authorization"},{label:"Easy Auth",permalink:"/tags/easy-auth"},{label:"deep link",permalink:"/tags/deep-link"},{label:"Static Web Apps",permalink:"/tags/static-web-apps"},{label:"Azure AD",permalink:"/tags/azure-ad"}],readingTime:5.7,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Deep linking with Azure Static Web Apps and Easy Auth",authors:"johnnyreilly",tags:["Authorization","Easy Auth","deep link","Static Web Apps","Azure AD"],image:"./title-image.png",hide_table_of_contents:!1},prevItem:{title:"Publishing Docusaurus to dev.to with the dev.to API",permalink:"/2022/12/11/publishing-docusaurus-to-devto-with-devto-api"},nextItem:{title:"Docusaurus: Using fontaine to reduce custom font cumulative layout shift",permalink:"/2022/12/01/docusaurus-using-fontaine-to-reduce-custom-font-cumulative-layout-shift"}},u={image:n(50297).Z,authorsImageUrls:[void 0]},p=[{value:"Deep linking",id:"deep-linking",level:2},{value:"The workaround",id:"the-workaround",level:2},{value:"The implementation",id:"the-implementation",level:2},{value:"Announcing <code>easyauth-deeplink</code>",id:"announcing-easyauth-deeplink",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:p};function h(e){var{components:t}=e,r=o(e,["components"]);return(0,i.kt)("wrapper",a({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Azure Static Web Apps doesn't support deep linking with authentication. The ",(0,i.kt)("a",a({parentName:"p"},{href:"https://learn.microsoft.com/en-us/azure/static-web-apps/authentication-authorization?tabs=invitations#post-login-redirect"}),"post login redirect")," parameter of ",(0,i.kt)("inlineCode",{parentName:"p"},"post_login_redirect_uri")," does not support query string parameters. This post describes how to work around this limitation."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"title image reading &quot;Deep linking with Azure Static Web Apps and Easy Auth&quot; with Azure AD and Static Web App logos",src:n(50297).Z,width:"800",height:"450"})),(0,i.kt)("h2",a({},{id:"deep-linking"}),"Deep linking"),(0,i.kt)("p",null,"Imagine the situation: your colleague sends you ",(0,i.kt)("inlineCode",{parentName:"p"},"https://our-app.com/pages/important-page?someId=theId"),". You click the link and you're presented with a login screen. You login and you're presented with a page, but not the one your colleague meant you to see. What do you do now? If you realise what's happened, you'll likely paste the URL into the address bar again so you end up where you hope to. But what if you don't realise what's happened? Answer: confusion and frustration."),(0,i.kt)("p",null,"If you're using Azure Static Web Apps, you're likely to have this problem. ",(0,i.kt)("a",a({parentName:"p"},{href:"https://github.com/Azure/static-web-apps/issues/435"}),"Azure Static Web Apps doesn't support deep linking with authentication"),". When you get redirected you'll find you are (at best) missing the query parameters. If you take a look at the link here you'll see a suggested workaround. We're going to develop that idea in this post."),(0,i.kt)("h2",a({},{id:"the-workaround"}),"The workaround"),(0,i.kt)("p",null,"The idea of the workaround is this:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"at the start of the authentication process, store the URL you're trying to get to in local storage"),(0,i.kt)("li",{parentName:"ul"},"when the authentication process completes, redirect to the URL you stored in local storage")),(0,i.kt)("p",null,"The post suggested a React specific approach. We'd like something that is framework agnostic. So if you're running with Svelte, Vue, Angular or something else, you can use this approach too."),(0,i.kt)("h2",a({},{id:"the-implementation"}),"The implementation"),(0,i.kt)("p",null,"We're going to need to make sure our ",(0,i.kt)("a",a({parentName:"p"},{href:"https://learn.microsoft.com/en-us/azure/static-web-apps/configuration"}),(0,i.kt)("inlineCode",{parentName:"a"},"staticwebapp.config.json"))," is set up to support our goal:"),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-json"}),'{\n  "auth": {\n    "identityProviders": {\n      "azureActiveDirectory": {\n        "registration": {\n          "openIdIssuer": "https://login.microsoftonline.com/AAD_TENANT_ID/v2.0",\n          "clientIdSettingName": "AAD_CLIENT_ID",\n          "clientSecretSettingName": "AAD_CLIENT_SECRET"\n        }\n      }\n    }\n  },\n  "navigationFallback": {\n    "rewrite": "index.html"\n  },\n  "routes": [\n    {\n      "route": "/login",\n      "rewrite": "/.auth/login/aad",\n      "allowedRoles": ["anonymous", "authenticated"]\n    },\n    {\n      "route": "/.auth/login/github",\n      "statusCode": 404\n    },\n    {\n      "route": "/.auth/login/twitter",\n      "statusCode": 404\n    },\n    {\n      "route": "/logout",\n      "redirect": "/.auth/logout",\n      "allowedRoles": ["anonymous", "authenticated"]\n    },\n    {\n      "route": "/*.json",\n      "allowedRoles": ["authenticated"]\n    }\n  ],\n  "responseOverrides": {\n    "401": {\n      "redirect": "/login",\n      "statusCode": 302\n    }\n  },\n  "globalHeaders": {\n    "content-security-policy": "default-src https: \'unsafe-eval\' \'unsafe-inline\'; object-src \'none\'"\n  },\n  "mimeTypes": {\n    ".json": "text/json",\n    ".md": "text/markdown",\n    ".xml": "application/xml"\n  }\n}\n')),(0,i.kt)("p",null,"There's a number of things to note here:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"we're using Azure Active Directory as our identity provider (and disabling others) - the approach in this post will work with any identity provider; this is just the one I'm using. Easy Auth supports ",(0,i.kt)("a",a({parentName:"li"},{href:"https://learn.microsoft.com/en-us/azure/app-service/overview-authentication-authorization#identity-providers"}),"a number of identity providers")),(0,i.kt)("li",{parentName:"ul"},"we're creating a ",(0,i.kt)("inlineCode",{parentName:"li"},"/login")," route to redirect to the Azure AD login page - you don't have to do this, but it's a nice touch."),(0,i.kt)("li",{parentName:"ul"},"we're protecting the ",(0,i.kt)("inlineCode",{parentName:"li"},"*.json")," files with authentication - this is because our JSON files actually contain secure information. If we were using say an API instead, we'd protect that with authentication instead. Crucially, access to HTML / JS / CSS is ",(0,i.kt)("em",{parentName:"li"},"not")," protected. This is important, because we need to be able to access our ",(0,i.kt)("inlineCode",{parentName:"li"},"index.html")," file and associated JavaScript to store the URL we're trying to get to in local storage.")),(0,i.kt)("p",null,"With this in place, we can implement our workaround. Let's create a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"deeplink.ts"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"const deeplinkPathAndQueryKey = 'deeplink:pathAndQuery';\n\n/**\n * If authenticated, redirect to the path and query string stored in local storage.\n * If not authenticated, store the current path and query string in local storage and redirect to the login page.\n *\n * @param loginUrl The URL to redirect to if the user is not authenticated\n */\nexport async function deeplink(loginUrl: string) {\n  if (!loginUrl) {\n    throw new Error('loginUrl is required');\n  }\n\n  const pathAndQuery = location.pathname + location.search;\n  console.log(`deeplink: URL before: ${pathAndQuery}`);\n\n  const deeplinkPathAndQuery = localStorage.getItem(deeplinkPathAndQueryKey);\n\n  const isAuth = await isAuthenticated();\n\n  if (isAuth) {\n    if (deeplinkPathAndQuery && pathAndQuery === '/') {\n      console.log(`deeplink: Redirecting to ${deeplinkPathAndQuery}`);\n      localStorage.removeItem(deeplinkPathAndQueryKey);\n      history.replaceState(null, '', deeplinkPathAndQuery);\n    }\n  } else if (!deeplinkPathAndQuery) {\n    if (pathAndQuery !== '/' && pathAndQuery !== loginUrl) {\n      console.log(\n        `deeplink: Storing redirect URL of ${pathAndQuery} and redirecting to ${loginUrl}`\n      );\n      localStorage.setItem(deeplinkPathAndQueryKey, pathAndQuery);\n      location.href = loginUrl;\n    } else {\n      console.log(`deeplink: Redirecting to ${loginUrl}`);\n      location.href = loginUrl;\n    }\n  }\n}\n\nasync function isAuthenticated() {\n  try {\n    const response = await fetch('/.auth/me');\n    const authMe = (await response.json()) as AuthMe;\n    const isAuth = authMe.clientPrincipal !== null;\n    return isAuth;\n  } catch (error) {\n    console.error('Failed to fetch /.auth/me', error);\n    return false;\n  }\n}\n\ninterface AuthMe {\n  clientPrincipal: null | {\n    claims: {\n      typ: string;\n      val: string;\n    }[];\n    identityProvider: string;\n    userDetails: string;\n    userId: string;\n    userRoles: string[];\n  };\n}\n")),(0,i.kt)("p",null,"The code above implements our workaround. It does the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"it checks whether a user is authenticated by hitting the ",(0,i.kt)("inlineCode",{parentName:"li"},"/.auth/me")," endpoint that is provided by the Easy Auth / Static Web Apps authentication system"),(0,i.kt)("li",{parentName:"ul"},"if users are not authenticated, it:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"stores the path and query string in localStorage and"),(0,i.kt)("li",{parentName:"ul"},"redirects them to the login page"))),(0,i.kt)("li",{parentName:"ul"},"when they return post-authentication it retrieves the path and query string from localStorage and sets the URL to that")),(0,i.kt)("p",null,"What does usage look like? Well let's take the root of a simple React app:"),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"import { StrictMode } from 'react';\nimport { BrowserRouter } from 'react-router-dom';\nimport { createRoot } from 'react-dom/client';\nimport App from './App';\nimport { deeplink } from 'easyauth-deeplink';\n\nfunction main() {\n  const container = document.getElementById('root');\n  if (container) {\n    const root = createRoot(container);\n    root.render(\n      <StrictMode>\n        <BrowserRouter>\n          <App />\n        </BrowserRouter>\n      </StrictMode>\n    );\n  }\n}\n\ndeeplink('/login').then(main);\n// or\ndeeplink('/.auth/login/aad').then(main);\n// or\ndeeplink('/.auth/login/github').then(main);\n// or\ndeeplink('/.auth/login/twitter').then(main);\n// or\ndeeplink('/.auth/login/google').then(main);\n// etc\n")),(0,i.kt)("p",null,"You can see here that the first thing we do is call ",(0,i.kt)("inlineCode",{parentName:"p"},"deeplink")," with the URL of the login page (you can see I've provided a number of options). This will redirect the user to the login page if they're not authenticated, and will redirect them to the URL they were trying to access if they are authenticated. Once that's done, we render our app."),(0,i.kt)("p",null,"You should be able to apply this regardless of your framework. The important thing is that you call ",(0,i.kt)("inlineCode",{parentName:"p"},"deeplink")," before you render your app."),(0,i.kt)("h2",a({},{id:"announcing-easyauth-deeplink"}),"Announcing ",(0,i.kt)("inlineCode",{parentName:"h2"},"easyauth-deeplink")),(0,i.kt)("p",null,"I've created a package called ",(0,i.kt)("a",a({parentName:"p"},{href:"https://github.com/johnnyreilly/easyauth-deeplink"}),(0,i.kt)("inlineCode",{parentName:"a"},"easyauth-deeplink"))," that implements the workaround above. You can install it with ",(0,i.kt)("inlineCode",{parentName:"p"},"npm install easyauth-deeplink")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn add easyauth-deeplink"),". It's a single file, so you can just copy and paste it into your project if you prefer."),(0,i.kt)("h2",a({},{id:"conclusion"}),"Conclusion"),(0,i.kt)("p",null,"It would be tremendous if this became a feature that was built into Azure Static Web Apps. Maybe one day it will be. In the meantime, I hope this workaround helps you."),(0,i.kt)("p",null,"It should be said that whilst we've described usage in this post with Static Web Apps, the same approach should work with any Azure Service that has Easy Auth enabled; App Service / Function Apps etc. I've not tried it, but I'd be surprised if it didn't work."))}h.isMDXComponent=!0},50297:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/title-image-16c274872bbe952c01d84fb9f277865b.png"}}]);