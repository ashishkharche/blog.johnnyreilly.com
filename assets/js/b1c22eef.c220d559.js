"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[23810],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var i=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,l=function(e,t){if(null==e)return{};var a,i,l={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=i.createContext({}),p=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(a),h=l,g=d["".concat(s,".").concat(h)]||d[h]||c[h]||n;return a?i.createElement(g,r(r({ref:t},u),{},{components:a})):i.createElement(g,r({ref:t},u))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,r=new Array(n);r[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var p=2;p<n;p++)r[p]=a[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},38052:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>u});a(67294);var i=a(3905);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},l.apply(this,arguments)}function n(e,t){if(null==e)return{};var a,i,l=function(e,t){if(null==e)return{};var a,i,l={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}const r={title:"Globalize and jQuery Validation",authors:"johnnyreilly",tags:["asp.net mvc","Internationalisation","Globalization","Globalize JS","Localisation","jQuery Validation","jQuery.validate.js"],hide_table_of_contents:!1},o=void 0,s={permalink:"/2012/09/06/globalize-and-jquery-validate",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2012-09-06-globalize-and-jquery-validate/index.md",source:"@site/blog/2012-09-06-globalize-and-jquery-validate/index.md",title:"Globalize and jQuery Validation",description:"Updated 05/10/2015",date:"2012-09-06T00:00:00.000Z",formattedDate:"September 6, 2012",tags:[{label:"asp.net mvc",permalink:"/tags/asp-net-mvc"},{label:"Internationalisation",permalink:"/tags/internationalisation"},{label:"Globalization",permalink:"/tags/globalization"},{label:"Globalize JS",permalink:"/tags/globalize-js"},{label:"Localisation",permalink:"/tags/localisation"},{label:"jQuery Validation",permalink:"/tags/j-query-validation"},{label:"jQuery.validate.js",permalink:"/tags/j-query-validate-js"}],readingTime:3.785,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Globalize and jQuery Validation",authors:"johnnyreilly",tags:["asp.net mvc","Internationalisation","Globalization","Globalize JS","Localisation","jQuery Validation","jQuery.validate.js"],hide_table_of_contents:!1},prevItem:{title:"Giving OData to CRM 4.0",permalink:"/2012/09/24/giving-odata-to-crm-40"},nextItem:{title:"How to attribute encode a PartialView in MVC (Razor)",permalink:"/2012/08/24/how-to-attribute-encode-partialview-in"}},p={authorsImageUrls:[void 0]},u=[{value:"Updated 05/10/2015",id:"updated-05102015",level:2},{value:"Updated 27/08/2013",id:"updated-27082013",level:2},{value:"Background",id:"background",level:2},{value:"jQuery Global is dead... Long live Globalize!",id:"jquery-global-is-dead-long-live-globalize",level:2},{value:"Wait, where&#39;s <code>html lang</code> getting set?",id:"wait-wheres-html-lang-getting-set",level:2},{value:"Serving up the right Globalize culture files",id:"serving-up-the-right-globalize-culture-files",level:2},{value:"Putting it all together",id:"putting-it-all-together",level:2}],c={toc:u};function d(e){var{components:t}=e,a=n(e,["components"]);return(0,i.kt)("wrapper",l({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",l({},{id:"updated-05102015"}),"Updated 05/10/2015"),(0,i.kt)("p",null,"If you're after a version of this that works with Globalize 1.x then take a look ",(0,i.kt)("a",l({parentName:"p"},{href:"/2015/10/05/jquery-validation-globalize-hits-10"}),"here"),"."),(0,i.kt)("h2",l({},{id:"updated-27082013"}),"Updated 27/08/2013"),(0,i.kt)("p",null,"To make it easier for people to use the approach detailed in this post I have created a repository for ",(0,i.kt)("inlineCode",{parentName:"p"},"jquery.validate.globalize.js")," on GitHub ",(0,i.kt)("a",l({parentName:"p"},{href:"https://github.com/johnnyreilly/jquery-validation-globalize"}),"here"),"."),(0,i.kt)("p",null,"This is also available as a nuget package ",(0,i.kt)("a",l({parentName:"p"},{href:"https://www.nuget.org/packages/jQuery.Validation.Globalize/"}),"here"),"."),(0,i.kt)("p",null,"To see a good demo take a look ",(0,i.kt)("a",l({parentName:"p"},{href:"http://jqueryvalidationunobtrusivenative.azurewebsites.net/AdvancedDemo/Globalize"}),"here"),"."),(0,i.kt)("h2",l({},{id:"background"}),"Background"),(0,i.kt)("p",null,(0,i.kt)("a",l({parentName:"p"},{href:"/2012/05/07/globalizejs-number-and-date"}),"I've written before about a great little library called Globalize")," which makes locale specific number / date formatting simple within JavaScript. And I've just stumbled upon an ",(0,i.kt)("a",l({parentName:"p"},{href:"http://www.hanselman.com/blog/GlobalizationInternationalizationAndLocalizationInASPNETMVC3JavaScriptAndJQueryPart1.aspx"}),"old post written by Scott Hanselman about the business of Globalisation / Internationalisation / Localisation within ASP.NET"),". It's a great post and I recommend reading it (I'm using many of the approaches he discusses)."),(0,i.kt)("h2",l({},{id:"jquery-global-is-dead-long-live-globalize"}),"jQuery Global is dead... Long live Globalize!"),(0,i.kt)("p",null,"However, there's one tweak I would make to Scotts suggestions and that's to use Globalize in place of the jQuery Global plugin. The jQuery Global plugin has now effectively been reborn as Globalize (with no dependancy on jQuery). As far as I can tell jQuery Global is now disappearing from the web - certainly the link in Scotts post is dead now at least. I've ",(0,i.kt)("del",{parentName:"p"},"ripped off"),' been inspired by the "Globalized jQuery Unobtrusive Validation" section of Scotts article and made ',(0,i.kt)("inlineCode",{parentName:"p"},"jquery.validate.globalize.js"),"."),(0,i.kt)("p",null,"And for what it's worth ",(0,i.kt)("inlineCode",{parentName:"p"},"jquery.validate.globalize.js")," applies equally to standard jQuery Validation as well as to jQuery Unobtrusive Validation. I say that as the above JavaScript is effectively a monkey patch to the number / date / range / min / max methods of jQuery.validate.js which forces these methods to use Globalize's parsing support instead."),(0,i.kt)("p",null,"Here's the JavaScript:"),(0,i.kt)("script",{src:"https://gist.github.com/3651751.js?file=jquery.validate.globalize.js"}),(0,i.kt)("p",null,"The above script does 2 things. Firstly it monkey patches jquery.validate.js to make use of Globalize.js number and date parsing in place of the defaults. Secondly it initialises Globalize to relevant current culture driven by the ",(0,i.kt)("inlineCode",{parentName:"p"},"html lang")," property. So if the html tag looked like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-html"}),'<html lang="de-DE">\n  ...\n</html>\n')),(0,i.kt)("p",null,'Then Globalize would be initialised with the "de-DE" culture assuming that culture was available and had been served up to the client. (By the way, the Globalize initialisation logic has only been placed in the code above to demonstrate that Globalize needs to be initialised to the culture. It\'s more likely that this initialisation step would sit elsewhere in a "proper" app.)'),(0,i.kt)("h2",l({},{id:"wait-wheres-html-lang-getting-set"}),"Wait, where's ",(0,i.kt)("inlineCode",{parentName:"h2"},"html lang")," getting set?"),(0,i.kt)("p",null,"In Scott's article he created a ",(0,i.kt)("inlineCode",{parentName:"p"},"MetaAcceptLanguage")," helper to generate a META tag like this: ",(0,i.kt)("inlineCode",{parentName:"p"},'&lt;meta name="accept-language" content="en-GB" /&gt;')," which he used to drive Globalizes specified culture."),(0,i.kt)("p",null,"Rather than generating a meta tag I've chosen to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"lang")," attribute of the ",(0,i.kt)("inlineCode",{parentName:"p"},"html")," tag to specify the culture. I've chosen to do this as it's more in line with the ",(0,i.kt)("a",l({parentName:"p"},{href:"http://www.w3.org/TR/i18n-html-tech-lang/#ri20030510.102829377"}),"W3C spec"),". But it should be noted this is just a different way of achieving exactly the same end."),(0,i.kt)("p",null,"So how's it getting set? Well, it's no great shakes; in my ",(0,i.kt)("inlineCode",{parentName:"p"},"_Layout.cshtml")," file my html tag looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-html"}),'<html lang="@System.Globalization.CultureInfo.CurrentUICulture.Name"></html>\n')),(0,i.kt)("p",null,"And in my ",(0,i.kt)("inlineCode",{parentName:"p"},"web.config")," I have following setting set:"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-xml"}),'<configuration>\n  <system.web>\n    <globalization culture="auto" uiCulture="auto" />\n    \x3c!--- Other stuff.... --\x3e\n  </system.web>\n</configuration>\n')),(0,i.kt)("p",null,"With both of these set this means I get ",(0,i.kt)("inlineCode",{parentName:"p"},'&lt;html lang="de-DE"&gt;')," or ",(0,i.kt)("inlineCode",{parentName:"p"},'&lt;html lang="en-GB"&gt;')," etc. depending on a users culture."),(0,i.kt)("h2",l({},{id:"serving-up-the-right-globalize-culture-files"}),"Serving up the right Globalize culture files"),(0,i.kt)("p",null,"In order that I send the correct Globalize culture to the client I've come up with this static class which provides the user with the relevant culture URL (falling back to the en-GB culture if it can't find one based your culture):"),(0,i.kt)("script",{src:"https://gist.github.com/3651751.js?file=GlobalizeUrls.cs"}),(0,i.kt)("h2",l({},{id:"putting-it-all-together"}),"Putting it all together"),(0,i.kt)("p",null,"To make use of all of this together you'll need to have the ",(0,i.kt)("inlineCode",{parentName:"p"},"html lang")," attribute set as described earlier and some scripts output in your layout page like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-html"}),'<script src="@Url.Content("~/Scripts/jquery.js")" type="text/javascript"><\/script>\n<script src="@Url.Content(GlobalizeUrls.Globalize)" type="text/javascript"><\/script>\n<script src="@Url.Content(GlobalizeUrls.GlobalizeCulture)" type="text/javascript"><\/script>\n<script src="@Url.Content("~/Scripts/jquery.validate.js")" type="text/javascript"><\/script>\n<script src="@Url.Content("~/scripts/jquery.validate.globalize.js")" type="text/javascript"><\/script>\n\n@* Only serve the following script if you need it: *@\n<script src="@Url.Content("~/scripts/jquery.validate.unobtrusive.js")" type="text/javascript"><\/script>\n')),(0,i.kt)("p",null,"Which will render something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-html"}),'<script src="/Scripts/jquery.js" type="text/javascript"><\/script>\n<script src="/Scripts/globalize.js" type="text/javascript"><\/script>\n<script\n  src="/scripts/globalize/globalize.culture.en-GB.js"\n  type="text/javascript"\n><\/script>\n<script src="/Scripts/jquery.validate.js" type="text/javascript"><\/script>\n<script\n  src="/Scripts/jquery.validate.globalize.js"\n  type="text/javascript"\n><\/script>\n<script\n  src="/Scripts/jquery.validate.unobtrusive.js"\n  type="text/javascript"\n><\/script>\n')),(0,i.kt)("p",null,"This will load up jQuery, Globalize, your Globalize culture, jQuery Validate, jQuery Validates unobtrusive extensions (which you don't need if you're not using them) and the jQuery Validate Globalize script which will set up culture aware validation."),(0,i.kt)("p",null,"Finally and just to re-iterate, it's highly worthwhile to give ",(0,i.kt)("a",l({parentName:"p"},{href:"http://www.hanselman.com/blog/GlobalizationInternationalizationAndLocalizationInASPNETMVC3JavaScriptAndJQueryPart1.aspx"}),"Scott Hanselman's original article a look"),". Most all the ideas in here were taken wholesale from him!"))}d.isMDXComponent=!0}}]);