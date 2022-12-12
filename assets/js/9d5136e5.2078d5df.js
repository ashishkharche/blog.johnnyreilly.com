"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[91790],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(n),d=o,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||r;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},59272:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});n(67294);var a=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={title:"From create-react-app to PWA",authors:"johnnyreilly",tags:["create-react-app","PWA"],hide_table_of_contents:!1},l=void 0,s={permalink:"/2020/01/31/from-create-react-app-to-pwa",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2020-01-31-from-create-react-app-to-pwa/index.md",source:"@site/blog/2020-01-31-from-create-react-app-to-pwa/index.md",title:"From create-react-app to PWA",description:"Progressive Web Apps are a (terribly named) wonderful idea. You can build an app once using web technologies which serves all devices and form factors. It can be accessible over the web, but also surface on the home screen of your Android / iOS device. That app can work offline, have a splash screen when it launches and have notifications too.",date:"2020-01-31T00:00:00.000Z",formattedDate:"January 31, 2020",tags:[{label:"create-react-app",permalink:"/tags/create-react-app"},{label:"PWA",permalink:"/tags/pwa"}],readingTime:10.595,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"From create-react-app to PWA",authors:"johnnyreilly",tags:["create-react-app","PWA"],hide_table_of_contents:!1},prevItem:{title:"Web Workers, comlink, TypeScript and React",permalink:"/2020/02/21/web-workers-comlink-typescript-and-react"},nextItem:{title:"LICENSE to kill your PWA",permalink:"/2020/01/21/license-to-kill-your-pwa"}},p={authorsImageUrls:[void 0]},c=[{value:"From console to web app",id:"from-console-to-web-app",level:2},{value:"From web app to PWA",id:"from-web-app-to-pwa",level:2},{value:"Icons and splash screens and A2HS, oh my!",id:"icons-and-splash-screens-and-a2hs-oh-my",level:2},{value:"Where are we?",id:"where-are-we",level:2},{value:"Code splitting",id:"code-splitting",level:2},{value:"Deploy your PWA",id:"deploy-your-pwa",level:2}],u={toc:c};function h(e){var{components:t}=e,i=r(e,["components"]);return(0,a.kt)("wrapper",o({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Progressive Web Apps are a (terribly named) wonderful idea. You can build an app ",(0,a.kt)("em",{parentName:"p"},"once")," using web technologies which serves all devices and form factors. It can be accessible over the web, but also surface on the home screen of your Android / iOS device. That app can work offline, have a splash screen when it launches and have notifications too."),(0,a.kt)("p",null,"PWAs can be a money saver for your business. The alternative, should you want an app experience for your users, is building the same application using three different technologies (one for web, one for Android and one for iOS). When you take this path it's hard to avoid a multiplication of cost and complexity. It often leads to dividing up the team as each works on a different stack. It's common to lose a certain amount of focus as a consequence. PWAs can help here; they are a compelling alternative, not just from a developers standpoint, but from a resourcing one too."),(0,a.kt)("p",null,"However, the downside of PWAs is that they are more complicated than normal web apps. Writing one from scratch is just less straightforward than a classic web app. There are easy onramps to building a PWA that help you fall into the pit of success. This post will highlight one of these. How you can travel from zero to a PWA of your very own using React and TypeScript."),(0,a.kt)("p",null,"This post presumes knowledge of:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"React"),(0,a.kt)("li",{parentName:"ul"},"TypeScript"),(0,a.kt)("li",{parentName:"ul"},"Node")),(0,a.kt)("h2",o({},{id:"from-console-to-web-app"}),"From console to web app"),(0,a.kt)("p",null,"To create our PWA we're going to use ",(0,a.kt)("a",o({parentName:"p"},{href:"https://create-react-app.dev/"}),(0,a.kt)("inlineCode",{parentName:"a"},"create-react-app")),". This excellent project has long had inbuilt support for making PWAs. In recent months that support has matured to a very satisfactory level. To create ourselves a TypeScript React app using ",(0,a.kt)("inlineCode",{parentName:"p"},"create-react-app")," enter this ",(0,a.kt)("inlineCode",{parentName:"p"},"npx")," command at the console:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-shell"}),"npx create-react-app pwa-react-typescript --template typescript\n")),(0,a.kt)("p",null,"This builds you a react web app built with TypeScript; it can be tested locally with:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-shell"}),"cd pwa-react-typescript\nyarn start\n")),(0,a.kt)("h2",o({},{id:"from-web-app-to-pwa"}),"From web app to PWA"),(0,a.kt)("p",null,"From web app to PWA is incredibly simple; it\u2019s just a question of opting in to offline behaviour. If you open up the ",(0,a.kt)("inlineCode",{parentName:"p"},"index.tsx")," file in your newly created project you'll find this code:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"// If you want your app to work offline and load faster, you can change\n// unregister() to register() below. Note this comes with some pitfalls.\n// Learn more about service workers: https://bit.ly/CRA-PWA\nserviceWorker.unregister();\n")),(0,a.kt)("p",null,"As the hint suggests, swap ",(0,a.kt)("inlineCode",{parentName:"p"},"serviceWorker.unregister()")," for ",(0,a.kt)("inlineCode",{parentName:"p"},"serviceWorker.register()")," and you now have a PWA. Amazing! What does this mean? Well to ",(0,a.kt)("a",o({parentName:"p"},{href:"https://create-react-app.dev/docs/making-a-progressive-web-app/#why-opt-in"}),"quote the docs"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"All static site assets are cached so that your page loads fast on subsequent visits, regardless of network connectivity (such as 2G or 3G). Updates are downloaded in the background."),(0,a.kt)("li",{parentName:"ul"},"Your app will work regardless of network state, even if offline. This means your users will be able to use your app at 10,000 feet and on the subway.")),(0,a.kt)("p",{parentName:"blockquote"},"... it will take care of generating a service worker file that will automatically precache all of your local assets and keep them up to date as you deploy updates. The service worker will use a ",(0,a.kt)("a",o({parentName:"p"},{href:"https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-falling-back-to-network"}),"cache-first strategy"),"for handling all requests for local assets, including ",(0,a.kt)("a",o({parentName:"p"},{href:"https://developers.google.com/web/fundamentals/primers/service-workers/high-performance-loading#first_what_are_navigation_requests"}),"navigation requests")," for your HTML, ensuring that your web app is consistently fast, even on a slow or unreliable network.")),(0,a.kt)("p",null,"Under the bonnet, ",(0,a.kt)("inlineCode",{parentName:"p"},"create-react-app")," is achieving this through the use of technology called ",(0,a.kt)("a",o({parentName:"p"},{href:"https://developers.google.com/web/tools/workbox"}),'"Workbox"'),". Workbox describes itself as:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"a set of libraries and Node modules that make it easy to cache assets and take full advantage of features used to build ",(0,a.kt)("a",o({parentName:"p"},{href:"https://developers.google.com/web/progressive-web-apps/"}),"Progressive Web Apps"),".")),(0,a.kt)("p",null,"The good folks of Google are aware that writing your own PWA can be tricky. There's much new behaviour to configure and be aware of; it's easy to make mistakes. Workbox is there to help ease the way forward by implementing default strategies for caching / offline behaviour which can be controlled through configuration."),(0,a.kt)("p",null,"A downside of the usage of ",(0,a.kt)("inlineCode",{parentName:"p"},"Workbox")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"create-react-app")," is that (as with most things ",(0,a.kt)("inlineCode",{parentName:"p"},"create-react-app"),") there's little scope for configuration of your own if the defaults don't serve your purpose. This may change in the future, indeed ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/facebook/create-react-app/pull/5369"}),"there's an open PR that adds this support"),"."),(0,a.kt)("h2",o({},{id:"icons-and-splash-screens-and-a2hs-oh-my"}),"Icons and splash screens and A2HS, oh my!"),(0,a.kt)("p",null,"But it's not just an offline experience that makes this a PWA. Other important factors are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'That the app can be added to your home screen (A2HS AKA "installed").'),(0,a.kt)("li",{parentName:"ul"},"That the app has a name and an icon which can be customised."),(0,a.kt)("li",{parentName:"ul"},"That there's a splash screen displayed to the user as the app starts up.")),(0,a.kt)("p",null,'All of the above is "in the box" with ',(0,a.kt)("inlineCode",{parentName:"p"},"create-react-app"),". Let's start customizing these."),(0,a.kt)("p",null,"First of all, we'll give our app a name. Fire up ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html")," and replace ",(0,a.kt)("inlineCode",{parentName:"p"},"&lt;title&gt;React App&lt;/title&gt;")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"&lt;title&gt;My PWA&lt;/title&gt;"),". (Feel free to concoct a more imaginative name than the one I've suggested.) Next open up ",(0,a.kt)("inlineCode",{parentName:"p"},"manifest.json")," and replace:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-json"}),'"short_name": "React App",\n  "name": "Create React App Sample",\n')),(0,a.kt)("p",null,"with:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-json"}),'"short_name": "My PWA",\n  "name": "My PWA",\n')),(0,a.kt)("p",null,"Your app now has a name. The question you might be asking is: what is this ",(0,a.kt)("inlineCode",{parentName:"p"},"manifest.json")," file? Well to ",(0,a.kt)("a",o({parentName:"p"},{href:"https://developers.google.com/web/fundamentals/web-app-manifest"}),"quote the good folks of Google"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The ",(0,a.kt)("a",o({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/Manifest"}),"web app manifest")," is a simple JSON file that tells the browser about your web application and how it should behave when 'installed' on the user's mobile device or desktop. Having a manifest is required by Chrome to show the ",(0,a.kt)("a",o({parentName:"p"},{href:"https://developers.google.com/web/fundamentals/app-install-banners/"}),"Add to Home Screen prompt"),"."),(0,a.kt)("p",{parentName:"blockquote"},"A typical manifest file includes information about the app name, icons it should use, the start_url it should start at when launched, and more.")),(0,a.kt)("p",null,"So the ",(0,a.kt)("inlineCode",{parentName:"p"},"manifest.json")," is essentially metadata about your app. Here's what it should look like right now:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-json"}),'{\n  "short_name": "My PWA",\n  "name": "My PWA",\n  "icons": [\n    {\n      "src": "favicon.ico",\n      "sizes": "64x64 32x32 24x24 16x16",\n      "type": "image/x-icon"\n    },\n    {\n      "src": "logo192.png",\n      "type": "image/png",\n      "sizes": "192x192"\n    },\n    {\n      "src": "logo512.png",\n      "type": "image/png",\n      "sizes": "512x512"\n    }\n  ],\n  "start_url": ".",\n  "display": "standalone",\n  "theme_color": "#000000",\n  "background_color": "#ffffff"\n}\n')),(0,a.kt)("p",null,"You can use the above properties (and others not yet configured) to control how your app behaves. For instance, if you want to replace icons your app uses then it's a simple matter of:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"placing new logo files in the ",(0,a.kt)("inlineCode",{parentName:"li"},"public")," folder"),(0,a.kt)("li",{parentName:"ul"},"updating references to them in the ",(0,a.kt)("inlineCode",{parentName:"li"},"manifest.json")),(0,a.kt)("li",{parentName:"ul"},"finally, for older Apple devices, updating the ",(0,a.kt)("inlineCode",{parentName:"li"},'&lt;link rel="apple-touch-icon" ... /&gt;')," in the ",(0,a.kt)("inlineCode",{parentName:"li"},"index.html"),".")),(0,a.kt)("h2",o({},{id:"where-are-we"}),"Where are we?"),(0,a.kt)("p",null,"So far, we have a basic PWA in place. It's installable. You can run it locally and develop it with ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn start"),". You can build it for deployment with ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn build"),"."),(0,a.kt)("p",null,"What this isn't, is recognisably a web app. In the sense that it doesn't have support for different pages / URLs. We're typically going to want to break up our application this way. Let's do that now. We're going to use ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/ReactTraining/react-router"}),(0,a.kt)("inlineCode",{parentName:"a"},"react-router")),"; the de facto routing solution for React. To add it to our project (and the required type definitions for TypeScript) we use:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{}),"yarn add react-router-dom @types/react-router-dom\n")),(0,a.kt)("p",null,"Now let's split up our app into a couple of pages. We'll replace the existing ",(0,a.kt)("inlineCode",{parentName:"p"},"App.tsx")," with this:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"import React from 'react';\nimport { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';\nimport About from './About';\nimport Home from './Home';\n\nconst App: React.FC = () => (\n  <Router>\n    <nav>\n      <ul>\n        <li>\n          <Link to=\"/\">Home</Link>\n        </li>\n        <li>\n          <Link to=\"/about\">About</Link>\n        </li>\n      </ul>\n    </nav>\n    <Switch>\n      <Route path=\"/about\">\n        <About />\n      </Route>\n      <Route path=\"/\">\n        <Home />\n      </Route>\n    </Switch>\n  </Router>\n);\n\nexport default App;\n")),(0,a.kt)("p",null,"This will be our root page. It has the responsiblity of using ",(0,a.kt)("inlineCode",{parentName:"p"},"react-router")," to render the pages we want to serve, and also to provide the links that allow users to navigate to those pages. In making our changes we'll have broken our test (which checked for a link we've now deleted), so we'll fix it like so:"),(0,a.kt)("p",null,"Replace the ",(0,a.kt)("inlineCode",{parentName:"p"},"App.test.tsx")," with this:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"import React from 'react';\nimport { render } from '@testing-library/react';\nimport App from './App';\n\ntest('renders about link', () => {\n  const { getByText } = render(<App />);\n  const linkElement = getByText(/about/i);\n  expect(linkElement).toBeInTheDocument();\n});\n")),(0,a.kt)("p",null,"You'll have noticed that in our new ",(0,a.kt)("inlineCode",{parentName:"p"},"App.tsx")," we import two new components (or pages); ",(0,a.kt)("inlineCode",{parentName:"p"},"About")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Home"),". Let's create those. First ",(0,a.kt)("inlineCode",{parentName:"p"},"About.tsx"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"import React from 'react';\n\nconst About: React.FC = () => <h1>This is a PWA</h1>;\n\nexport default About;\n")),(0,a.kt)("p",null,"Then ",(0,a.kt)("inlineCode",{parentName:"p"},"Home.tsx"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"import React from 'react';\n\nconst Home: React.FC = () => <h1>Welcome to your PWA!</h1>;\n\nexport default Home;\n")),(0,a.kt)("h2",o({},{id:"code-splitting"}),"Code splitting"),(0,a.kt)("p",null,"Now we've split up our app into multiple sections, we're going to split the code too. A good way to improve loading times for PWAs is to ensure that the code is not built into big files. At the moment our app builds a ",(0,a.kt)("inlineCode",{parentName:"p"},"single-file.js"),". If you run ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn build")," you'll see what this looks like:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{}),"47.88 KB  build/static/js/2.89bc6648.chunk.js\n  784 B     build/static/js/runtime-main.9c116153.js\n  555 B     build/static/js/main.bc740179.chunk.js\n  269 B     build/static/css/main.5ecd60fb.chunk.css\n")),(0,a.kt)("p",null,"Notice the ",(0,a.kt)("inlineCode",{parentName:"p"},"build/static/js/main.bc740179.chunk.js")," file. This is our ",(0,a.kt)("inlineCode",{parentName:"p"},"single-file.js"),". It represents the compiled output of building the TypeScript files that make up our app. It will grow and grow as our app grows, eventually becoming problematic from a user loading speed perspective."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"create-react-app")," is built upon webpack. There is excellent support for code splitting in webpack and hence ",(0,a.kt)("a",o({parentName:"p"},{href:"https://reactjs.org/docs/code-splitting.html#code-splitting"}),"create-react-app supports it by default"),". Let's apply it to our app. Again we're going to change ",(0,a.kt)("inlineCode",{parentName:"p"},"App.tsx"),"."),(0,a.kt)("p",null,"Where we previously had:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"import About from './About';\nimport Home from './Home';\n")),(0,a.kt)("p",null,"Let's replace with:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"const About = lazy(() => import('./About'));\nconst Home = lazy(() => import('./Home'));\n")),(0,a.kt)("p",null,"This is the syntax to lazily load components in React. You'll note that it internally uses the ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/tc39/proposal-dynamic-import"}),"dynamic ",(0,a.kt)("inlineCode",{parentName:"a"},"import()")," syntax"),' which webpack uses as a "split point".'),(0,a.kt)("p",null,"Let's also give React something to render whilst it waits for the dynamic imports to be resolved. Just inside our ",(0,a.kt)("inlineCode",{parentName:"p"},"&lt;Router&gt;")," component we'll add a ",(0,a.kt)("inlineCode",{parentName:"p"},"&lt;Suspense&gt;")," component too:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"<Router>\n  <Suspense fallback={<div>Loading...</div>}>{/*...*/}</Suspense>\n</Router>\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"&lt;Suspense&gt;")," component will render the ",(0,a.kt)("inlineCode",{parentName:"p"},"&lt;div&gt;Loading...&lt;/div&gt;")," whilst it waits for a routes code to be dynamically loaded. So our final ",(0,a.kt)("inlineCode",{parentName:"p"},"App.tsx")," component ends up looking like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"import React, { lazy, Suspense } from 'react';\nimport { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';\nconst About = lazy(() => import('./About'));\nconst Home = lazy(() => import('./Home'));\n\nconst App: React.FC = () => (\n  <Router>\n    <Suspense fallback={<div>Loading...</div>}>\n      <nav>\n        <ul>\n          <li>\n            <Link to=\"/\">Home</Link>\n          </li>\n          <li>\n            <Link to=\"/about\">About</Link>\n          </li>\n        </ul>\n      </nav>\n      <Switch>\n        <Route path=\"/about\">\n          <About />\n        </Route>\n        <Route path=\"/\">\n          <Home />\n        </Route>\n      </Switch>\n    </Suspense>\n  </Router>\n);\n\nexport default App;\n")),(0,a.kt)("p",null,"This is now a code split application. How can we tell? If we run ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn build")," again we'll see something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{}),"47.88 KB          build/static/js/2.89bc6648.chunk.js\n  1.18 KB (+428 B)  build/static/js/runtime-main.415ab5ea.js\n  596 B (+41 B)     build/static/js/main.e60948bb.chunk.js\n  269 B             build/static/css/main.5ecd60fb.chunk.css\n  233 B             build/static/js/4.0c85e1cb.chunk.js\n  228 B             build/static/js/3.eed49094.chunk.js\n")),(0,a.kt)("p",null,"Note that we now have multiple ",(0,a.kt)("inlineCode",{parentName:"p"},"*.chunk.js")," files. Our initial ",(0,a.kt)("inlineCode",{parentName:"p"},"main.*.chunk.js")," and then ",(0,a.kt)("inlineCode",{parentName:"p"},"3.*.chunk.js")," representing ",(0,a.kt)("inlineCode",{parentName:"p"},"Home.tsx")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"4.*.chunk.js")," representing ",(0,a.kt)("inlineCode",{parentName:"p"},"About.tsx"),"."),(0,a.kt)("p",null,"As we continue to build out our app from this point we'll have a great approach in place to ensure that users load files as they need to and that those files should not be too large. Great performance which will scale."),(0,a.kt)("h2",o({},{id:"deploy-your-pwa"}),"Deploy your PWA"),(0,a.kt)("p",null,"Now that we have our basic PWA in place, let's deploy it so the outside world can appreciate it. We're going to use ",(0,a.kt)("a",o({parentName:"p"},{href:"https://www.netlify.com/"}),"Netlify")," for this."),(0,a.kt)("p",null,"The source code of our PWA lives on GitHub here: ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/johnnyreilly/pwa-react-typescript"}),"https://github.com/johnnyreilly/pwa-react-typescript")),(0,a.kt)("p",null,"We're going to log into Netlify, click on the \"Create a new site\" option and select GitHub as the provider. We'll need to authorize Netlify to access our GitHub."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(50413).Z,width:"1144",height:"1511"})),(0,a.kt)("p",null,'You may need to click the "Configure Netlify on GitHub" button to grant permissions for Netlify to access your repo like so:'),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(29128).Z,width:"1167",height:"1577"})),(0,a.kt)("p",null,"Then you can select your repo from within Netlify. All of the default settings that Netlify provides should work for our use case:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8791).Z,width:"1361",height:"1377"})),(0,a.kt)("p",null,"Let's hit the magic \"Deploy site\" button! In a matter of minutes you'll find that Netlify has deployed your PWA."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(11079).Z,width:"1411",height:"471"})),(0,a.kt)("p",null,"If we browse to the URL provided by Netlify we'll be able to see the deployed PWA in action. (You also have the opportunity to set up a custom domain name that you would typically want outside of a simple demo such as this.) Importantly this will be served over HTTPS which will allow our Service Worker to operate."),(0,a.kt)("p",null,"Now that we know it's there, let's see how what we've built holds up according to the professionals. We're going to run the Google Chrome Developer Tools Audit against our PWA:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(7012).Z,width:"3060",height:"601"})),(0,a.kt)("p",null,"That is a good start for our PWA!"),(0,a.kt)("p",null,(0,a.kt)("a",o({parentName:"p"},{href:"https://blog.logrocket.com/from-create-react-app-to-pwa/"}),"This post was originally published on LogRocket.")),(0,a.kt)("p",null,(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/johnnyreilly/pwa-react-typescript"}),"The source code for this project can be found here.")))}h.isMDXComponent=!0},50413:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/netlify-auth-ebb38ba8e4c2406c18a9b6c9c0916850.webp"},8791:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/netlify-deploy-settings-b216b60069104b1f2d0a2bde1eae9bf2.png"},11079:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/netlify-deployed-0cc133e3e018c3459313b421df49bd3d.webp"},29128:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/netlify-repo-permissions-a7b98bace45f710db8a6a4750c1f5fdc.webp"},7012:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pwa-audit-7f7fc3c4f706cae6533e3519a65040f6.png"}}]);