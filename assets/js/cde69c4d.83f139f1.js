"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[12486],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||a;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},48574:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});n(67294);var o=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={title:"The definitive guide to migrating from Blogger to Docusaurus",authors:"johnnyreilly",tags:["Blogger","Docusaurus","TypeScript"],image:"./title-image.png",slug:"definitive-guide-to-migrating-from-blogger-to-docusaurus",hide_table_of_contents:!1},s=void 0,l={permalink:"/definitive-guide-to-migrating-from-blogger-to-docusaurus",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2021-03-15-from-blogger-to-docusaurus/index.md",source:"@site/blog/2021-03-15-from-blogger-to-docusaurus/index.md",title:"The definitive guide to migrating from Blogger to Docusaurus",description:"This post documents how to migrate a blog from Blogger to Docusaurus.",date:"2021-03-15T00:00:00.000Z",formattedDate:"March 15, 2021",tags:[{label:"Blogger",permalink:"/tags/blogger"},{label:"Docusaurus",permalink:"/tags/docusaurus"},{label:"TypeScript",permalink:"/tags/type-script"}],readingTime:13.54,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"The definitive guide to migrating from Blogger to Docusaurus",authors:"johnnyreilly",tags:["Blogger","Docusaurus","TypeScript"],image:"./title-image.png",slug:"definitive-guide-to-migrating-from-blogger-to-docusaurus",hide_table_of_contents:!1},prevItem:{title:"RSS update; we moved to Docusaurus",permalink:"/2021/03/17/rss-update-we-moved-to-docusaurus"},nextItem:{title:"Managed Identity, Azure SQL and Entity Framework",permalink:"/2021/03/10/managed-identity-azure-sql-entity-framework"}},u={image:n(1428).Z,authorsImageUrls:[void 0]},c=[{value:"Updated 5th November 2022",id:"updated-5th-november-2022",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Blog as code",id:"blog-as-code",level:2},{value:"Downloading your Blogger content",id:"downloading-your-blogger-content",level:2},{value:"From HTML in XML to Markdown",id:"from-html-in-xml-to-markdown",level:2},{value:"Bringing it all together",id:"bringing-it-all-together",level:2},{value:"Redirecting from Blogger URLs to Docusaurus URLs",id:"redirecting-from-blogger-urls-to-docusaurus-urls",level:2},{value:"Comments",id:"comments",level:2},{value:"DNS and RSS",id:"dns-and-rss",level:2},{value:"RSS / Atom feeds",id:"rss--atom-feeds",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:c};function p(e){var{components:t}=e,i=a(e,["components"]);return(0,o.kt)("wrapper",r({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This post documents how to migrate a blog from Blogger to Docusaurus."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"title image reading &quot;The definitive guide to migrating from Blogger to Docusaurus&quot; with the Blogger and Docusaurus logos",src:n(1428).Z,width:"800",height:"450"})),(0,o.kt)("h2",r({},{id:"updated-5th-november-2022"}),"Updated 5th November 2022"),(0,o.kt)("p",null,'This post started out as an investigation into migrating from Blogger to Docusaurus. In the end I very much made the leap, and would recommend doing so to others. I\'ve transformed this post into a "definitive guide" on how to migrate. I intend to maintain this on an ongoing basis for the benefit of the community.'),(0,o.kt)("p",null,'Because I rather like what I originally wrote when I was in "investigation mode", I have largely left it in place. However, there are new sections which have been added in to augment what\'s there.'),(0,o.kt)("h2",r({},{id:"introduction"}),"Introduction"),(0,o.kt)("p",null,(0,o.kt)("a",r({parentName:"p"},{href:"https://v2.docusaurus.io/"}),"Docusaurus")," is, amongst other things, a Markdown powered blogging platform. My blog has lived happily on ",(0,o.kt)("a",r({parentName:"p"},{href:"https://www.blogger.com/"}),"Blogger")," for the past decade. I'm considering moving, but losing my historic content as part of the move was never an option. This post goes through what it would look like to move from Blogger to Docusaurus ",(0,o.kt)("em",{parentName:"p"},"without")," losing your content."),(0,o.kt)("p",null,"It is imperative that the world never forgets what I was doing with jQuery in 2012."),(0,o.kt)("h2",r({},{id:"blog-as-code"}),"Blog as code"),(0,o.kt)("p",null,'Everything is better when it\'s code. Infrastructure as code. Awesome right? So naturally "blog as code" must be better than just a blog. More seriously, ',(0,o.kt)("a",r({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Markdown"}),"Markdown"),' is a tremendous documentation format. Simple, straightforward and, like Goldilocks, "just right". For a long time I\'ve written everything as Markdown. My years of toil down the Open Source mines have preconditioned me to be very MD-disposed.'),(0,o.kt)("p",null,"I started out writing this blog a long time ago as pure HTML. Not the smoothest of writing formats. At some point I got into the habit of spinning up a new repo in GitHub for a new blogpost, writing it in Markdown and piping it through a variety of tools to convert it into HTML for publication on Blogger. As time passed I felt I'd be a lot happier if I wasn't creating a repo each time. What if I did all my blogging in a single repo and used that as the code that represented my blog?"),(0,o.kt)("p",null,"Just having that thought laid the seeds for what was to follow:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"An investigation into importing my content from Blogger into a GitHub repo"),(0,o.kt)("li",{parentName:"ol"},"An experimental port to Docusaurus")),(0,o.kt)("p",null,"We're going to go this now. First, let's create ourselves a Docusaurus site for our blog:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),"npx create-docusaurus@latest blog-website classic\n")),(0,o.kt)("p",null,"This creates a standard Docusaurus site in the ",(0,o.kt)("inlineCode",{parentName:"p"},"blog-website")," directory. In there we'll find a ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file. There's much that can be configured here. It's worth remembering that Docusaurus is a tool for building documentation sites that also happens to feature a blog component. We're going to use it as a blog only. So we'll deactivate the docs component and configure the blog component to be the home page of our site, following the ",(0,o.kt)("a",r({parentName:"p"},{href:"https://docusaurus.io/docs/blog#blog-only-mode"}),"Docusaurus documentation"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  // ...\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      /** @type {import('@docusaurus/preset-classic').Options} */\n      ({\n        docs: false, // Deactivate docs\n        blog: {\n          blogTitle: 'I CAN MAKE THIS WORK',\n          blogDescription: 'The blog of johnnyreilly',\n          blogSidebarCount: 5,\n          postsPerPage: 1,\n          path: './blog',\n          routeBasePath: '/', // Make blog the home page\n          showReadingTime: true,\n          editUrl:\n            'https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/',\n        },\n        theme: {\n          customCss: require.resolve('./src/css/custom.css'),\n        },\n      }),\n    ],\n  ],\n  // ...\n};\n")),(0,o.kt)("h2",r({},{id:"downloading-your-blogger-content"}),"Downloading your Blogger content"),(0,o.kt)("p",null,"In order that we can migrate, we must obtain the blog content. This is a mass of HTML that lived inside Blogger's database. (One assumes they have a database; I haven't actually checked.) There's a ",(0,o.kt)("inlineCode",{parentName:"p"},"Back up content")," option inside Blogger's settings to allow this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Download content from Blogger",src:n(64344).Z,width:"650",height:"630"})),(0,o.kt)("p",null,"It provides you with an XML file with a dispiritingly small size. Ten years blogging? You'll get change out of 4Mb it turns out."),(0,o.kt)("h2",r({},{id:"from-html-in-xml-to-markdown"}),"From HTML in XML to Markdown"),(0,o.kt)("p",null,"We now want to take that XML and:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Extract each blog post (and it's associated metadata; title / tags and whatnot)"),(0,o.kt)("li",{parentName:"ul"},"Convert the HTML content of each blog post from HTML to Markdown, and save it as a Markdown file"),(0,o.kt)("li",{parentName:"ul"},"Download the images used in the blogpost so they can be stored in the repo as well")),(0,o.kt)("p",null,"To do this we're going to whip up a smallish TypeScript console app. Let's initialise it with the packages we're going to need:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),"mkdir from-blogger-to-docusaurus\ncd from-blogger-to-docusaurus\nnpx typescript --init\nyarn init\nyarn add @types/he@^1.1.2 @types/jsdom@^20.0.0 @types/node@^18.11.9 @types/showdown@^2.0.0 axios@^1.1.3 fast-xml-parser@^3.21.1 he@^1.2.0 jsdom@^20.0.2 showdown@^2.1.0 ts-node@^10.9.1 typescript@^4.8.4\n")),(0,o.kt)("p",null,"We're using:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",r({parentName:"li"},{href:"https://github.com/NaturalIntelligence/fast-xml-parser"}),(0,o.kt)("inlineCode",{parentName:"a"},"fast-xml-parser"))," to parse XML"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",r({parentName:"li"},{href:"https://github.com/mathiasbynens/he"}),(0,o.kt)("inlineCode",{parentName:"a"},"he")),", ",(0,o.kt)("a",r({parentName:"li"},{href:"https://github.com/jsdom/jsdom"}),(0,o.kt)("inlineCode",{parentName:"a"},"jsdom"))," and ",(0,o.kt)("a",r({parentName:"li"},{href:"https://github.com/showdownjs/showdown"}),(0,o.kt)("inlineCode",{parentName:"a"},"showdown"))," to convert HTML to Markdown"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",r({parentName:"li"},{href:"https://github.com/axios/axios"}),(0,o.kt)("inlineCode",{parentName:"a"},"axios"))," to download images"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",r({parentName:"li"},{href:"https://github.com/microsoft/TypeScript"}),(0,o.kt)("inlineCode",{parentName:"a"},"typescript"))," to code in and ",(0,o.kt)("a",r({parentName:"li"},{href:"https://github.com/TypeStrong/ts-node"}),(0,o.kt)("inlineCode",{parentName:"a"},"ts-node"))," to make our TypeScript Node.js console app.")),(0,o.kt)("p",null,"Now we have all the packages we need, it's time to write our script."),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"import fs from 'fs';\nimport path from 'path';\nimport showdown from 'showdown';\nimport he from 'he';\nimport jsdom from 'jsdom';\nimport axios from 'axios';\nimport fastXmlParser from 'fast-xml-parser';\n\nconst bloggerXmlPath = './blog-03-17-2021.xml';\nconst docusaurusDirectory = '../blog-website';\nconst notMarkdownable: string[] = [];\n\nconst author = 'johnnyreilly';\nconst author_name = 'John Reilly';\nconst author_url = 'https://twitter.com/johnny_reilly';\nconst author_image_url = 'https://blog.johnnyreilly.com/img/profile.jpg';\n\nasync function makePostsFromXML() {\n  const blogDir = path.resolve(docusaurusDirectory, 'blog');\n\n  await deleteExistingFiles(blogDir);\n\n  await makeAuthorsYml(blogDir);\n\n  const posts = await getPosts();\n\n  for (const post of posts) {\n    await makePostIntoMarkDownAndDownloadImages(post);\n  }\n  if (notMarkdownable.length)\n    console.log(\n      'These blog posts could not be turned into MarkDown - go find out why!',\n      notMarkdownable\n    );\n}\n\nasync function deleteExistingFiles(directory: string) {\n  const filesAndFolders = await fs.promises.readdir(directory);\n  for (const file of filesAndFolders) {\n    try {\n      await fs.promises.unlink(path.join(directory, file));\n    } catch (e) {\n      await fs.promises.rm(path.join(directory, file), {\n        recursive: true,\n        force: true,\n      });\n    }\n  }\n}\n\n/**\n * Make an authors.yml file\n *\n * johnnyreilly:\n *   name: John Reilly\n *   url: https://twitter.com/johnny_reilly\n *   image_url: https://blog.johnnyreilly.com/img/profile.jpg\n */\nasync function makeAuthorsYml(directory: string) {\n  const authorsYml = `${author}:\n  name: ${author_name}\n  url: ${author_url}\n  image_url: ${author_image_url}\n`;\n\n  await fs.promises.writeFile(\n    path.join(directory, 'authors.yml'),\n    authorsYml,\n    'utf-8'\n  );\n}\n\nasync function getPosts(): Promise<Post[]> {\n  const xml = await fs.promises.readFile(bloggerXmlPath, 'utf-8');\n\n  const options = {\n    attributeNamePrefix: '@_',\n    attrNodeName: 'attr', //default is 'false'\n    textNodeName: '#text',\n    ignoreAttributes: false,\n    ignoreNameSpace: false,\n    allowBooleanAttributes: true,\n    parseNodeValue: true,\n    parseAttributeValue: true,\n    trimValues: true,\n    cdataTagName: '__cdata', //default is 'false'\n    cdataPositionChar: '\\\\c',\n    parseTrueNumberOnly: false,\n    arrayMode: true, //\"strict\"\n    attrValueProcessor: (val: string, attrName: string) =>\n      he.decode(val, { isAttributeValue: true }), //default is a=>a\n    tagValueProcessor: (val: string, tagName: string) => he.decode(val), //default is a=>a\n  };\n\n  const traversalObj = fastXmlParser.getTraversalObj(xml, options);\n  const blog = fastXmlParser.convertToJson(traversalObj, options);\n\n  const postsRaw = blog.feed[0].entry.filter(\n    (entry: any) =>\n      entry.category.some(\n        (category: any) =>\n          category.attr['@_term'] ===\n          'http://schemas.google.com/blogger/2008/kind#post'\n      ) &&\n      entry.link.some(\n        (link: any) =>\n          link.attr['@_href'] && link.attr['@_type'] === 'text/html'\n      ) &&\n      entry.published < '2021-03-07'\n  );\n\n  const posts: Post[] = postsRaw.map((entry: any) => {\n    return {\n      title: entry.title[0]['#text'],\n      content: entry.content[0]['#text'],\n      published: entry.published,\n      link: entry.link.find(\n        (link: any) =>\n          link.attr['@_href'] && link.attr['@_type'] === 'text/html'\n      )\n        ? entry.link.find(\n            (link: any) =>\n              link.attr['@_href'] && link.attr['@_type'] === 'text/html'\n          ).attr['@_href']\n        : undefined,\n      tags:\n        Array.isArray(entry.category) &&\n        entry.category.some(\n          (category: any) =>\n            category.attr['@_scheme'] === 'http://www.blogger.com/atom/ns#'\n        )\n          ? entry.category\n              .filter(\n                (category: any) =>\n                  category.attr['@_scheme'] ===\n                    'http://www.blogger.com/atom/ns#' &&\n                  category.attr['@_term'] !== 'constructor'\n              ) // 'constructor' will make docusaurus choke\n              .map((category: any) => category.attr['@_term'])\n          : [],\n    };\n  });\n\n  for (const post of posts) {\n    const { content, ...others } = post;\n    console.log(others, content.length);\n    if (!content || !others.title || !others.published)\n      throw new Error('No content');\n  }\n\n  return posts.filter((post) => post.link);\n}\n\nasync function makePostIntoMarkDownAndDownloadImages(post: Post) {\n  const converter = new showdown.Converter({\n    ghCodeBlocks: true,\n  });\n  const linkSections = post.link.split('/');\n  const linkSlug = linkSections[linkSections.length - 1];\n  const blogdirname =\n    post.published.substring(0, 10) + '-' + linkSlug.replace('.html', '');\n\n  const blogdirPath = path.resolve(docusaurusDirectory, 'blog', blogdirname);\n\n  if (!fs.existsSync(blogdirPath)) {\n    fs.mkdirSync(blogdirPath);\n  }\n\n  const contentProcessed = post.content\n    // remove stray <br /> tags\n    .replace(/<br\\s*\\/?>/gi, '\\n')\n    // translate <code class=\"lang-cs\" into <code class=\"language-cs\"> to be showdown friendly\n    .replace(/code class=\"lang-/gi, 'code class=\"language-')\n    // convert \x3c!-- into \x3c!---\n    .replace(/\x3c!--/gi, '\\n\x3c!---\\n')\n    .replace(/--\x3e/gi, '\\n---\x3e\\n');\n  const images: string[] = [];\n  const dom = new jsdom.JSDOM(contentProcessed);\n  let markdown = '';\n  try {\n    markdown = converter\n      .makeMarkdown(contentProcessed, dom.window.document)\n      // bigger titles\n      .replace(/#### /g, '## ')\n\n      // <div style=\"width:100%;height:0;padding-bottom:56%;position:relative;\"><iframe src=\"https://giphy.com/embed/l7JDTHpsXM26k\" width=\"100%\" height=\"100%\" style=\"position:absolute\" frameborder=\"0\" class=\"giphy-embed\" allowfullscreen=\"\"></iframe></div>\n\n      // The mechanism below extracts the underlying iframe\n      .replace(/<div.*(<iframe.*\">).*<\\/div>/g, (replacer) => {\n        const dom = new jsdom.JSDOM(replacer);\n        const iframe = dom?.window?.document?.querySelector('iframe');\n        return iframe?.outerHTML ?? '';\n      })\n\n      // The mechanism below strips class and style attributes from iframes - react hates them\n      .replace(/<iframe.*<\\/iframe>/g, (replacer) => {\n        const dom = new jsdom.JSDOM(replacer);\n        const iframe = dom?.window?.document?.querySelector('iframe');\n        iframe?.removeAttribute('class');\n        iframe?.removeAttribute('style');\n        return iframe?.outerHTML ?? '';\n      })\n\n      // capitalise appropriately\n      .replace(/frameborder/g, 'frameBorder')\n      .replace(/allowfullscreen/g, 'allowFullScreen')\n      .replace(/charset/g, 'charSet')\n\n      // Deals with these:\n      // [![null](<https://4.bp.blogspot.com/-b9-GrL0IXaY/Xmqj4GRhKXI/AAAAAAAAT5s/ZoceUInSY5EWXeCr2LkGV9Zvea8S6-mUgCPcBGAYYCw/s640/hello_world_idb_keyval.png> =640x484)](<https://4.bp.blogspot.com/-b9-GrL0IXaY/Xmqj4GRhKXI/AAAAAAAAT5s/ZoceUInSY5EWXeCr2LkGV9Zvea8S6-mUgCPcBGAYYCw/s1600/hello_world_idb_keyval.png>)We successfully wrote something into IndexedDB, read it back and printed that value to the console. Amazing!\n      .replace(\n        /\\[!\\[null\\]\\(<(.*?)\\].*?>\\)/g,\n        (match) =>\n          `![](${match.slice(match.indexOf('<') + 1, match.indexOf('>'))})\\n\\n`\n      )\n\n      // Blogger tends to put images in HTML that looks like this:\n      // <div class=\"separator\" style=\"clear: both;\"><a href=\"https://1.bp.blogspot.com/-UwrtZigWg78/YDqN82KbjVI/AAAAAAAAZTE/Umezr1MGQicnxMMr5rQHD4xKINg9fasDACLcBGAsYHQ/s783/traffic-to-app-service.png\" style=\"display: block; padding: 1em 0; text-align: center; \"><img alt=\"traffic to app service\" border=\"0\" width=\"600\" data-original-height=\"753\" data-original-width=\"783\" src=\"https://1.bp.blogspot.com/-UwrtZigWg78/YDqN82KbjVI/AAAAAAAAZTE/Umezr1MGQicnxMMr5rQHD4xKINg9fasDACLcBGAsYHQ/s600/traffic-to-app-service.png\"></a></div>\n\n      // The mechanism below extracts the underlying image path and it's alt text\n      .replace(\n        /(<div.*>)*\\w*(<a .*>)*(<img .*\">)(<\\/a>)*.*(<\\/div>)*/g,\n        (replacer) => {\n          const div = new jsdom.JSDOM(replacer);\n          const img = div?.window?.document?.querySelector('img');\n          const alt = img?.getAttribute('alt') ?? '';\n          const src = img?.getAttribute('src') ?? '';\n\n          if (src) images.push(src);\n\n          return `![${alt}](${src})`;\n        }\n      );\n  } catch (e) {\n    console.log(post.link);\n    console.log(e);\n    notMarkdownable.push(post.link);\n    return;\n  }\n\n  for (const url of images) {\n    try {\n      const localUrl = await downloadImage(url, blogdirPath);\n      markdown = markdown.replace(url, localUrl);\n    } catch (e) {\n      console.error(`Failed to download ${url}`);\n    }\n  }\n\n  const content = `---\ntitle: \"${post.title}\"\nauthors: ${author}\ntags: [${post.tags.join(', ')}]\nhide_table_of_contents: false\n---\n${markdown}\n`;\n\n  await fs.promises.writeFile(\n    path.resolve(docusaurusDirectory, 'blog', blogdirPath, 'index.md'),\n    content\n  );\n}\n\nasync function downloadImage(url: string, directory: string) {\n  console.log(`Downloading ${url}`);\n  const pathParts = new URL(url).pathname.split('/');\n  const filename = decodeURIComponent(pathParts[pathParts.length - 1]);\n\n  const pathTo = path.join(directory, filename);\n\n  const writer = fs.createWriteStream(pathTo);\n\n  const response = await axios({\n    url,\n    method: 'GET',\n    responseType: 'stream',\n  });\n\n  response.data.pipe(writer);\n\n  return new Promise<string>((resolve, reject) => {\n    writer.on('finish', () => resolve(filename));\n    writer.on('error', reject);\n  });\n}\n\ninterface Post {\n  title: string;\n  content: string;\n  published: string;\n  link: string;\n  tags: string[];\n}\n\n// do it!\nmakePostsFromXML();\n")),(0,o.kt)("p",null,"To summarise what the script does, it:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"deletes the default blog posts"),(0,o.kt)("li",{parentName:"ul"},"creates a new ",(0,o.kt)("inlineCode",{parentName:"li"},"authors.yml")," file with my details in"),(0,o.kt)("li",{parentName:"ul"},"parses the blog XML into an array of ",(0,o.kt)("inlineCode",{parentName:"li"},"Post"),"s"),(0,o.kt)("li",{parentName:"ul"},"each post is then converted from HTML into Markdown, a Docusaurus header is created and prepended, then the ",(0,o.kt)("inlineCode",{parentName:"li"},"index.md")," file is saved to the ",(0,o.kt)("inlineCode",{parentName:"li"},"blog-website/blog/{POST_NAME}")," directory"),(0,o.kt)("li",{parentName:"ul"},"the images of each post are downloaded with Axios and saved to the ",(0,o.kt)("inlineCode",{parentName:"li"},"blog-website/blog/{POST_NAME}")," directory")),(0,o.kt)("p",null,(0,o.kt)("a",r({parentName:"p"},{href:"https://github.com/johnnyreilly/blog.johnnyreilly.com/tree/main/from-blogger-to-docusaurus"}),"To see the full code, you can find it on the GitHub repository that now represents the blog.")),(0,o.kt)("p",null,"If you're trying to do this yourself, you'll want to change some of the variable values in the script; such as the author details."),(0,o.kt)("h2",r({},{id:"bringing-it-all-together"}),"Bringing it all together"),(0,o.kt)("p",null,"To run the script, we add the following script to the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-json"}),'  "scripts": {\n    "start": "ts-node index.ts"\n  },\n')),(0,o.kt)("p",null,"And have ourselves a merry little ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn start")," to kick off the process. In a very short period of time, if you crack open the ",(0,o.kt)("inlineCode",{parentName:"p"},"blogs")," directory of your Docusaurus site you'll see a collection of folders, Markdown files and images. These represent your blog and are ready to power Docusaurus:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Markdown files",src:n(49743).Z,width:"774",height:"723"})),(0,o.kt)("p",null,"I have slightly papered over some details here. For my own case I discovered that I hadn't always written perfect HTML when blogging. I had to go in and fix the HTML in a number of historic blogs and re-download, to get cleanish Markdown."),(0,o.kt)("p",null,'I also learned that a number of my blog\'s images had vanished from Blogger at some point. This makes me all the more convinced that storing your blog in a repo is a good idea. Things should not "go missing".'),(0,o.kt)("p",null,"If we now run ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn start")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"blog-website")," directory we can see the blog in action:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Blog in Docusaurus",src:n(62813).Z,width:"1404",height:"904"})),(0,o.kt)("p",null,"Congratulations! We're now the proud owners of a Docusaurus blog site based upon our Blogger content."),(0,o.kt)("p",null,"If you've got some curiously named image files you might encounter some minor issues that need fixing up. This should get you 95% the way there though. Docusaurus does a great job of telling you when there's issues."),(0,o.kt)("h2",r({},{id:"redirecting-from-blogger-urls-to-docusaurus-urls"}),"Redirecting from Blogger URLs to Docusaurus URLs"),(0,o.kt)("p",null,"The final step is to redirect from the old Blogger URLs to the new Docusaurus URLs. Blogger URLs look like this: ",(0,o.kt)("inlineCode",{parentName:"p"},"/2019/10/definitely-typed-movie.html"),". On the other hand, Docusaurus URLs look like this: ",(0,o.kt)("a",r({parentName:"p"},{href:"https://blog.johnnyreilly.com/2019/10/08/definitely-typed-movie"}),(0,o.kt)("inlineCode",{parentName:"a"},"/2019/10/08/definitely-typed-movie")),"."),(0,o.kt)("p",null,"I'll want to redirect from the former to the latter. I'll use the ",(0,o.kt)("inlineCode",{parentName:"p"},"@docusaurus/plugin-client-redirects")," plugin to do this. Inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file, I'll add the following to the ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins")," section:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  // ...\n  plugins: [\n    // ...\n    [\n      'client-redirects',\n      /** @type {import('@docusaurus/plugin-client-redirects').Options} */\n      ({\n        createRedirects: function (existingPath) {\n          if (existingPath.match(urlRegex)) {\n            const [, year, month, date, slug] = existingPath.split('/');\n            const oldUrl = `/${year}/${month}/${slug}.html`;\n\n            // eg redirect from /2019/10/definitely-typed-movie.html -> /2019/10/08/definitely-typed-movie\n            console.log(`redirect from ${oldUrl} -> ${existingPath}`);\n\n            return [oldUrl, `/${year}/${month}/${slug}`];\n          }\n        },\n      }),\n    ],\n    // ...\n  ],\n};\n")),(0,o.kt)("p",null,"The function above will be run during the build process for each URL. And consequently a client side redirect will be created to go from the landing URL to the Docusaurus URL. The ",(0,o.kt)("inlineCode",{parentName:"p"},"console.log")," is there to help me see what's going on. I don't actually need it."),(0,o.kt)("p",null,"Having this in place should protect my SEO when the domain switches from Blogger to Docusaurus. Long term I shouldn't need this approach in place."),(0,o.kt)("h2",r({},{id:"comments"}),"Comments"),(0,o.kt)("p",null,"I'd always had comments on my blog. First with Blogger's in-built functionality and then with ",(0,o.kt)("a",r({parentName:"p"},{href:"https://disqus.com/"}),"Disqus"),". One thing that Docusaurus doesn't support by default is comments for blog posts. ",(0,o.kt)("a",r({parentName:"p"},{href:"https://docusaurus.io/feature-requests/p/comments-in-documents-or-blogs"}),"There's a feature request for it here.")," However, it doesn't exist right now."),(0,o.kt)("p",null,"For a while I considered this a dealbreaker, and wasn't planning to complete the migration. But then I had a discussion with ",(0,o.kt)("a",r({parentName:"p"},{href:"https://twitter.com/JoshuaKGoldberg"}),"Josh Goldberg")," as to the value of comments. Essentially that they are nice, but not essential."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"discussion on Twitter with Josh Goldberg on the topic of the value of comments in blog posts",src:n(88691).Z,width:"1174",height:"1120"})),(0,o.kt)("p",null,"I rather came to agree with the notion that comments were only slightly interesting as I looked back at the comments I'd received on my blog over the years. So I decided to go ahead ",(0,o.kt)("em",{parentName:"p"},"without")," comments. I remain happy with that choice, so thanks Josh!"),(0,o.kt)("p",null,"However, if it's important to you, there are ways to support comments. One example is using ",(0,o.kt)("a",r({parentName:"p"},{href:"https://giscus.app/"}),"Giscus"),"; ",(0,o.kt)("a",r({parentName:"p"},{href:"https://dipakparmar.medium.com/how-to-add-giscus-to-your-docs-site-built-with-docusaurus-d57fa7f8e2f3"}),"here is a guide on how to integrate it"),"."),(0,o.kt)("h2",r({},{id:"dns-and-rss"}),"DNS and RSS"),(0,o.kt)("p",null,"At this point I had a repository that represented my blog. I had a Docusaurus site that represented my blog. When I ran ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn build")," I got a Docusaurus site that looked like my blog. I had a redirect mechanism in place to protect my SEO."),(0,o.kt)("p",null,"I was ready to make the switch."),(0,o.kt)("p",null,"Hosting is a choice. When I initially migrated, I made use of GitHub Pages. I also experimented with Netlify. ",(0,o.kt)("a",r({parentName:"p"},{href:"/2022/02/01/migrating-from-github-pages-to-azure-static-web-apps"}),"Finally I moved to using Azure Static Web Apps to make use of preview environments.")," There are many choices out there - you can pick the one that works best for you."),(0,o.kt)("p",null,"Once your site is up, the last stage of the migration is updating your DNS to point to the Docusaurus site. I use ",(0,o.kt)("a",r({parentName:"p"},{href:"https://www.cloudflare.com/"}),"Cloudflare")," to manage my domain names and so that's where I made the switch."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"screenshot of the DNS settings in Cloudflare",src:n(81242).Z,width:"800",height:"381"})),(0,o.kt)("h2",r({},{id:"rss--atom-feeds"}),"RSS / Atom feeds"),(0,o.kt)("p",null,"If you're like me, you'll want to keep your RSS feed. I didn't want to disrupting people who consumed my RSS feed as I migrated."),(0,o.kt)("p",null,"Happily, ",(0,o.kt)("a",r({parentName:"p"},{href:"https://docusaurus.io/docs/blog#feed"}),"Docusaurus ships with RSS / Atom in the box"),". Even happier still, most of the feed URLs in Blogger match the same URLs in Docusaurus. There was one exception in the form of the ",(0,o.kt)("inlineCode",{parentName:"p"},"/feeds/posts/default")," feed which is an Atom feed. Docusaurus has an ",(0,o.kt)("inlineCode",{parentName:"p"},"atom.xml")," feed but it's not in the same place."),(0,o.kt)("p",null,"This isn't a significant issue as I can create a page rule in Cloudflare to redirect from the old URL (",(0,o.kt)("a",r({parentName:"p"},{href:"https://blog.johnnyreilly.com/feeds/posts/default"}),"https://blog.johnnyreilly.com/feeds/posts/default"),") to the new URL (",(0,o.kt)("a",r({parentName:"p"},{href:"https://blog.johnnyreilly.com/atom.xml"}),"https://blog.johnnyreilly.com/atom.xml"),"):"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"screenshot of the page rule in Cloudflare",src:n(49801).Z,width:"1559",height:"889"})),(0,o.kt)("h2",r({},{id:"conclusion"}),"Conclusion"),(0,o.kt)("p",null,"I've migrated to Docusaurus and have been happily running there for a while now. I'm very happy with the result."),(0,o.kt)("p",null,"This post is intended to be a community resource that helps folk migrate from Blogger to Docusaurus. If you should find issues with the migration, please do let me know and help make this resource even better."))}p.isMDXComponent=!0},49743:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/blogs-as-markdown-d0ae123f276e854e30d80d1cfb718b19.webp"},62813:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/docusaurus-8b2bed4be1119e96fdf8bb904f9b5544.png"},64344:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/screenshot-blogger-back-up-content-1e3143c50e03cdd358fc5799e47206d6.webp"},49801:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/screenshot-cloudflare-atom-page-rule-e714fa217e8c219707c3ddb3045c28d1.png"},81242:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/screenshot-cloudflare-dns-1a04ccc6aa59c857f479478f2f199bf6.webp"},88691:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/screenshot-do-we-need-comments-josh-goldberg-9756ecd1d9860971b2213217602a497e.webp"},1428:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/title-image-31fddaf140ebaed7130acb4c09ee165b.png"}}]);