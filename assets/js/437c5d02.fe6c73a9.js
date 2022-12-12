"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[89161],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>y});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),y=o,m=u["".concat(l,".").concat(y)]||u[y]||g[y]||a;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},95708:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});t(67294);var r=t(3905);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const i={title:"Google Analytics API and ASP.Net Core",authors:"johnnyreilly",tags:["asp net core","google analytics"],hide_table_of_contents:!1},s=void 0,l={permalink:"/2019/03/22/google-analytics-api-and-aspnet-core",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2019-03-22-google-analytics-api-and-aspnet-core/index.md",source:"@site/blog/2019-03-22-google-analytics-api-and-aspnet-core/index.md",title:"Google Analytics API and ASP.Net Core",description:"I recently had need to be able to access the API for Google Analytics from ASP.Net Core. Getting this up and running turned out to be surprisingly tough because of an absence of good examples. So here it is; an example of how you can access a simple page access stat using the API:",date:"2019-03-22T00:00:00.000Z",formattedDate:"March 22, 2019",tags:[{label:"asp net core",permalink:"/tags/asp-net-core"},{label:"google analytics",permalink:"/tags/google-analytics"}],readingTime:1.885,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Google Analytics API and ASP.Net Core",authors:"johnnyreilly",tags:["asp net core","google analytics"],hide_table_of_contents:!1},prevItem:{title:"Template Tricks for a Dainty DOM",permalink:"/2019/03/24/template-tricks-for-dainty-dom"},nextItem:{title:"fork-ts-checker-webpack-plugin v1.0",permalink:"/2019/03/06/fork-ts-checker-webpack-plugin-v1"}},c={authorsImageUrls:[void 0]},p=[],g={toc:p};function u(e){var{components:n}=e,t=a(e,["components"]);return(0,r.kt)("wrapper",o({},g,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"I recently had need to be able to access the API for Google Analytics from ASP.Net Core. Getting this up and running turned out to be surprisingly tough because of an absence of good examples. So here it is; an example of how you can access a simple page access stat using ",(0,r.kt)("a",o({parentName:"p"},{href:"https://www.nuget.org/packages/Google.Apis.AnalyticsReporting.v4/"}),"the API"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-cs"}),'async Task<SomeKindOfDataStructure[]> GetUsageFromGoogleAnalytics(DateTime startAtThisDate, DateTime endAtThisDate)\n{\n    // Create the DateRange object. Here we want data from last week.\n    var dateRange = new DateRange\n    {\n        StartDate = startAtThisDate.ToString("yyyy-MM-dd"),\n        EndDate = endAtThisDate.ToString("yyyy-MM-dd")\n    };\n    // Create the Metrics and dimensions object.\n    // var metrics = new List<Metric> { new Metric { Expression = "ga:sessions", Alias = "Sessions" } };\n    // var dimensions = new List<Dimension> { new Dimension { Name = "ga:pageTitle" } };\n    var metrics = new List<Metric> { new Metric { Expression = "ga:uniquePageviews" } };\n    var dimensions = new List<Dimension> {\n        new Dimension { Name = "ga:date" },\n        new Dimension { Name = "ga:dimension1" }\n    };\n\n    // Get required View Id from configuration\n    var viewId = $"ga:{"[VIEWID]"}";\n\n    // Create the Request object.\n    var reportRequest = new ReportRequest\n    {\n        DateRanges = new List<DateRange> { dateRange },\n        Metrics = metrics,\n        Dimensions = dimensions,\n        FiltersExpression = "ga:pagePath==/index.html",\n        ViewId = viewId\n    };\n\n    var getReportsRequest = new GetReportsRequest {\n        ReportRequests = new List<ReportRequest> { reportRequest }\n    };\n\n    //Invoke Google Analytics API call and get report\n    var analyticsService = GetAnalyticsReportingServiceInstance();\n    var response = await (analyticsService.Reports.BatchGet(getReportsRequest)).ExecuteAsync();\n\n    var logins = response.Reports[0].Data.Rows.Select(row => new SomeKindOfDataStructure {\n        Date = new DateTime(\n            year: Convert.ToInt32(row.Dimensions[0].Substring(0, 4)),\n            month: Convert.ToInt32(row.Dimensions[0].Substring(4, 2)),\n            day: Convert.ToInt32(row.Dimensions[0].Substring(6, 2))),\n        NumberOfLogins = Convert.ToInt32(row.Metrics[0].Values[0])\n    })\n    .OrderByDescending(login => login.Date)\n    .ToArray();\n\n    return logins;\n}\n\n/// <summary>\n/// Intializes and returns Analytics Reporting Service Instance\n/// </summary>\nAnalyticsReportingService GetAnalyticsReportingServiceInstance() {\n    var googleAuthFlow = new GoogleAuthorizationCodeFlow(new GoogleAuthorizationCodeFlow.Initializer {\n        ClientSecrets = new ClientSecrets {\n            ClientId = "[CLIENTID]",\n            ClientSecret = "[CLIENTSECRET]"\n        }\n    });\n\n    var responseToken = new TokenResponse {\n        AccessToken = "[ANALYTICSTOKEN]",\n        RefreshToken = "[REFRESHTOKEN]",\n        Scope = AnalyticsReportingService.Scope.AnalyticsReadonly, //Read-only access to Google Analytics,\n        TokenType = "Bearer",\n    };\n\n    var credential = new UserCredential(googleAuthFlow, "", responseToken);\n\n    // Create the  Analytics service.\n    return new AnalyticsReportingService(new BaseClientService.Initializer {\n        HttpClientInitializer = credential,\n        ApplicationName = "my-super-applicatio",\n    });\n}\n')),(0,r.kt)("p",null,"You can see above that you need various credentials to be able to use the API. You can acquire these by logging into GA. Enjoy!"))}u.isMDXComponent=!0}}]);