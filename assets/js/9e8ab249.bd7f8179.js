"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[21006],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),g=c(n),u=o,p=g["".concat(l,".").concat(u)]||g[u]||h[u]||r;return n?a.createElement(p,i(i({ref:t},d),{},{components:n})):a.createElement(p,i({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},31301:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>d});n(67294);var a=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={title:"Unit Testing an Angular Controller with Jasmine",authors:"johnnyreilly",tags:["Jasmine","Controllers","promises","Unit tests","AngularJS"],hide_table_of_contents:!1},s=void 0,l={permalink:"/2014/09/10/unit-testing-angular-controller-with",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2014-09-10-unit-testing-angular-controller-with/index.md",source:"@site/blog/2014-09-10-unit-testing-angular-controller-with/index.md",title:"Unit Testing an Angular Controller with Jasmine",description:"Anyone who reads my blog will know that I have been long in the habit of writing unit tests for my C# code. I'm cool like that. However, it took me a while to get up and running writing unit tests for my JavaScript code. I finally got there using a combination of Jasmine 2.0 and Chutzpah. (Jasmine being my test framework and Chutzpah being my test runner.)",date:"2014-09-10T00:00:00.000Z",formattedDate:"September 10, 2014",tags:[{label:"Jasmine",permalink:"/tags/jasmine"},{label:"Controllers",permalink:"/tags/controllers"},{label:"promises",permalink:"/tags/promises"},{label:"Unit tests",permalink:"/tags/unit-tests"},{label:"AngularJS",permalink:"/tags/angular-js"}],readingTime:7.705,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Unit Testing an Angular Controller with Jasmine",authors:"johnnyreilly",tags:["Jasmine","Controllers","promises","Unit tests","AngularJS"],hide_table_of_contents:!1},prevItem:{title:"Journalling the Migration of Jasmine Tests to TypeScript",permalink:"/2014/09/13/migrating-jasmine-tests-to-typescript"},nextItem:{title:"Running JavaScript Unit Tests in AppVeyor",permalink:"/2014/09/06/running-javascript-unit-tests-in-appveyor"}},c={authorsImageUrls:[void 0]},d=[{value:"What I&#39;m Testing",id:"what-im-testing",level:2},{value:"sagesDetail.ts",id:"sagesdetailts",level:3},{value:"sageDetail.js",id:"sagedetailjs",level:3},{value:"Now for the Tests",id:"now-for-the-tests",level:2},{value:"Jasmine tests for sageDetail.js",id:"jasmine-tests-for-sagedetailjs",level:3}],h={toc:d};function g(e){var{components:t}=e,i=r(e,["components"]);return(0,a.kt)("wrapper",o({},h,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Anyone who reads my blog will know that I have been long in the habit of writing unit tests for my C# code. I'm cool like that. However, it took me a while to get up and running writing unit tests for my JavaScript code. I finally ",(0,a.kt)("a",o({parentName:"p"},{href:"/2014/03/17/the-surprisingly-happy-tale-of-visual"}),"got there")," using a combination of Jasmine 2.0 and Chutzpah. (Jasmine being my test framework and Chutzpah being my test runner.)"),(0,a.kt)("p",null,"I'm getting properly into the habit of testing my JavaScript. I won't pretend it's been particularly fun but I firmly believe it will end up being useful... That's what I tell myself during the long dark tea-times of the soul anyway."),(0,a.kt)("p",null,"I have a side project called ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/johnnyreilly/Proverb"}),"Proverb"),". It doesn't do anything in particular - for the most part it's a simple application that displays the collected wise sayings of a team that I used to be part of. There's not much to it - a bit of CRUD, a dashboard. Not much more. Because of the project's simplicity it's ideal to use Proverb's underlying idea when trying out new technologies / frameworks. ",(0,a.kt)("a",o({parentName:"p"},{href:"http://en.wikipedia.org/wiki/Paul_Halmos"}),"The best way to learn is to do"),'. So if I want to learn "X", then building Proverb using "X" is a good way to go.'),(0,a.kt)("p",null,"I digress already. I had a version of Proverb built using a combination of ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/johnnyreilly/Proverb/tree/master/AngularTypeScript"}),"AngularJS and TypeScript"),". I had written the Angular side of Proverb without any tests. Now I was able to write JavaScript tests for my Angular code that's just what I set out to do. It should prove something of a of ",(0,a.kt)("a",o({parentName:"p"},{href:"http://en.wikipedia.org/wiki/Kata_(programming)"}),"Code Kata")," too."),(0,a.kt)("p",null,"Whilst I'm at it I thought it might prove helpful if I wrote up how I approached writing unit tests for a single Angular controller. So here goes."),(0,a.kt)("h2",o({},{id:"what-im-testing"}),"What I'm Testing"),(0,a.kt)("p",null,"I have an Angular controller called ",(0,a.kt)("inlineCode",{parentName:"p"},"sagesDetail"),". It powers this screen:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(57726).Z,width:"640",height:"319"})),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sagesDetail")," is a very simple controller. It does these things:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'Load the "sage" (think of it as just a "user") and make it available on the controller so it can be bound to the view.'),(0,a.kt)("li",{parentName:"ol"},"Set the view title."),(0,a.kt)("li",{parentName:"ol"},"Log view activation."),(0,a.kt)("li",{parentName:"ol"},"Expose a ",(0,a.kt)("inlineCode",{parentName:"li"},"gotoEdit")," method which, when called, redirects the user to the edit screen.")),(0,a.kt)("p",null,"The controller is written in TypeScript and looks like this:"),(0,a.kt)("h3",o({},{id:"sagesdetailts"}),"sagesDetail.ts"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"module controllers {\n  'use strict';\n\n  var controllerId = 'sageDetail';\n\n  interface sageDetailRouteParams extends ng.route.IRouteParamsService {\n    id: string;\n  }\n\n  class SageDetail {\n    log: loggerFunction;\n    sage: sage;\n    title: string;\n\n    static $inject = ['$location', '$routeParams', 'common', 'datacontext'];\n    constructor(\n      private $location: ng.ILocationService,\n      private $routeParams: sageDetailRouteParams,\n      private common: common,\n      private datacontext: datacontext\n    ) {\n      this.sage = undefined;\n      this.title = 'Sage Details';\n\n      this.log = common.logger.getLogFn(controllerId);\n\n      this.activate();\n    }\n\n    // Prototype methods\n\n    activate() {\n      var id = parseInt(this.$routeParams.id, 10);\n      var dataPromises: ng.IPromise<any>[] = [\n        this.datacontext.sage\n          .getById(id, true)\n          .then((data) => (this.sage = data)),\n      ];\n\n      this.common\n        .activateController(dataPromises, controllerId, this.title)\n        .then(() => {\n          this.log('Activated Sage Details View');\n          this.title = 'Sage Details: ' + this.sage.name;\n        });\n    }\n\n    gotoEdit() {\n      this.$location.path('/sages/edit/' + this.sage.id);\n    }\n  }\n\n  angular.module('app').controller(controllerId, SageDetail);\n}\n")),(0,a.kt)("p",null,"When compiled to JavaScript it looks like this:"),(0,a.kt)("h3",o({},{id:"sagedetailjs"}),"sageDetail.js"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-js"}),"var controllers;\n(function (controllers) {\n  'use strict';\n\n  var controllerId = 'sageDetail';\n\n  var SageDetail = (function () {\n    function SageDetail($location, $routeParams, common, datacontext) {\n      this.$location = $location;\n      this.$routeParams = $routeParams;\n      this.common = common;\n      this.datacontext = datacontext;\n      this.sage = undefined;\n      this.title = 'Sage Details';\n\n      this.log = common.logger.getLogFn(controllerId);\n\n      this.activate();\n    }\n    // Prototype methods\n    SageDetail.prototype.activate = function () {\n      var _this = this;\n      var id = parseInt(this.$routeParams.id, 10);\n      var dataPromises = [\n        this.datacontext.sage.getById(id, true).then(function (data) {\n          return (_this.sage = data);\n        }),\n      ];\n\n      this.common\n        .activateController(dataPromises, controllerId, this.title)\n        .then(function () {\n          _this.log('Activated Sage Details View');\n          _this.title = 'Sage Details: ' + _this.sage.name;\n        });\n    };\n\n    SageDetail.prototype.gotoEdit = function () {\n      this.$location.path('/sages/edit/' + this.sage.id);\n    };\n    SageDetail.$inject = ['$location', '$routeParams', 'common', 'datacontext'];\n    return SageDetail;\n  })();\n\n  angular.module('app').controller(controllerId, SageDetail);\n})(controllers || (controllers = {}));\n//# sourceMappingURL=sageDetail.js.map\n")),(0,a.kt)("h2",o({},{id:"now-for-the-tests"}),"Now for the Tests"),(0,a.kt)("p",null,"I haven't yet made the move of switching over my Jasmine tests from JavaScript to TypeScript. (It's on my list but there's only so many things you can do at once...) For that reason the tests you'll see here are straight JavaScript. Below you will see the tests for the ",(0,a.kt)("inlineCode",{parentName:"p"},"sageDetail")," controller."),(0,a.kt)("p",null,"I have put very comments in the test code to make clear the intent to you, dear reader. Annotated the life out of them. Naturally I wouldn't expect a test to be so heavily annotated in a typical test suite - and you can be sure mine normally aren't!"),(0,a.kt)("h3",o({},{id:"jasmine-tests-for-sagedetailjs"}),"Jasmine tests for sageDetail.js"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-js"}),"describe('Proverb.Web -> app-> controllers ->', function () {\n  // Before each test runs we're going to need ourselves an Angular App to test - go fetch!\n  beforeEach(function () {\n    module('app'); // module is an alias for <a href=\"https://docs.angularjs.org/api/ngMock/function/angular.mock.module\">angular.mock.module</a>\n  });\n\n  // Tests for the sageDetail controller\n  describe('sageDetail ->', function () {\n    // Declare describe-scoped variables\n    var $rootScope,\n      getById_deferred, // deferred used for promises\n      $location,\n      $routeParams_stub,\n      common,\n      datacontext, // controller dependencies\n      sageDetailController; // the controller\n\n    // Before each test runs set up the controller using inject - an alias for <a href=\"https://docs.angularjs.org/api/ngMock/function/angular.mock.inject\">angular.mock.inject</a>\n    beforeEach(inject(function (\n      _$controller_,\n      _$rootScope_,\n      _$q_,\n      _$location_,\n      _common_,\n      _datacontext_\n    ) {\n      // Note how each parameter is prefixed and suffixed with \"_\" - this an Angular nicety\n      // which allows you to have variables in your tests with the original reference name.\n      // So here we assign the injected parameters to the describe-scoped variables:\n      $rootScope = _$rootScope_;\n      $q = _$q_;\n      $location = _$location_;\n      common = _common_;\n      datacontext = _datacontext_;\n\n      // Our controller has a dependency on an \"id\" property passed on the $routeParams\n      // We're going to stub this out with a JavaScript object literal\n      $routeParams_stub = { id: '10' };\n\n      // Our controller depends on a promise returned from this function: datacontext.sage.getById\n      // Well strictly speaking it also uses a promise for activateController but since the activateController\n      // promise just wraps the getById promise it will be resolved when the getById promise is.\n      // Here we create a deferred representing the getById promise which we can resolve as we need to\n      getById_deferred = $q.defer();\n\n      // set up a spy on datacontext.sage.getById and set it to return the promise of getById_deferred\n      // this allows us to #1 detect that getById has been called\n      // and #2 resolve / reject our promise as our test requires using getById_deferred\n      spyOn(datacontext.sage, 'getById').and.returnValue(\n        getById_deferred.promise\n      );\n\n      // set up a spy on common.activateController and set it to call through\n      // this allows us to detect that activateController has been called whilst\n      // maintaining existing controller functionality\n      spyOn(common, 'activateController').and.callThrough();\n\n      // set up spys on common.logger.getLogFn and $location.path so we can detect they have been called\n      spyOn(common.logger, 'getLogFn').and.returnValue(\n        jasmine.createSpy('log')\n      );\n      spyOn($location, 'path').and.returnValue(jasmine.createSpy('path'));\n\n      // create a sageDetail controller and inject the dependencies we have set up\n      sageDetailController = _$controller_('sageDetail', {\n        $location: $location,\n        $routeParams: $routeParams_stub,\n        common: common,\n        datacontext: datacontext,\n      });\n    }));\n\n    // Tests for the controller state at the point of the sageDetail controller's creation\n    // ie before the getById / activateController promises have been resolved\n    // So this tests the constructor (function) and the activate function up to the point\n    // of the promise calls\n    describe('on creation ->', function () {\n      it(\"controller should have a title of 'Sage Details'\", function () {\n        // tests this code has executed:\n        // this.title = \"Sage Details\";\n        expect(sageDetailController.title).toBe('Sage Details');\n      });\n\n      it('controller should have no sage', function () {\n        // tests this code has executed:\n        // this.sage = undefined;\n        expect(sageDetailController.sage).toBeUndefined();\n      });\n\n      it('datacontext.sage.getById should be called', function () {\n        // tests this code has executed:\n        // this.datacontext.sage.getById(id, true)\n        expect(datacontext.sage.getById).toHaveBeenCalledWith(10, true);\n      });\n    });\n\n    // Tests for the controller state at the point of the resolution of the getById promise\n    // ie after the getById / activateController promises have been resolved\n    // So this tests the constructor (function) and the activate function after the point\n    // of the promise calls\n    describe('activateController ->', function () {\n      var sage_stub;\n      beforeEach(function () {\n        // Create a sage stub which will be used when resolving the getById promise\n        sage_stub = { name: 'John' };\n      });\n\n      it('should set sages to be the resolved promise values', function () {\n        // Resolve the getById promise with the sage stub\n        getById_deferred.resolve(sage_stub);\n        $rootScope.$digest(); // So Angular processes the resolved promise\n\n        // tests this code has executed:\n        // this.sage = data\n        expect(sageDetailController.sage).toBe(sage_stub);\n      });\n\n      it(\"should log 'Activated Sage Details View' and set title with name\", function () {\n        // Resolve the getById promise with the sage stub\n        getById_deferred.resolve(sage_stub);\n        $rootScope.$digest(); // So Angular processes the resolved promise\n\n        // tests this code has executed:\n        // this.log(\"Activated Sage Details View\");\n        // this.title = \"Sage Details: \" + this.sage.name;\n        expect(sageDetailController.log).toHaveBeenCalledWith(\n          'Activated Sage Details View'\n        );\n        expect(sageDetailController.title).toBe(\n          'Sage Details: ' + sage_stub.name\n        );\n      });\n    });\n\n    // Tests for the gotoEdit function on the controller\n    // Note that this will only be called *after* a controller has been created\n    // and it depends upon a sage having first been loaded\n    describe('gotoEdit ->', function () {\n      var sage_stub;\n      beforeEach(function () {\n        // Create a sage stub which will be used when resolving the getById promise\n        sage_stub = { id: 20 };\n      });\n\n      it('should set $location.path to edit URL', function () {\n        // Resolve the getById promise with the sage stub\n        getById_deferred.resolve(sage_stub);\n        $rootScope.$digest(); // So Angular processes the resolved promise\n\n        sageDetailController.gotoEdit();\n\n        // tests this code has executed:\n        // this.$location.path(\"/sages/edit/\" + this.sage.id);\n        expect($location.path).toHaveBeenCalledWith(\n          '/sages/edit/' + sage_stub.id\n        );\n      });\n    });\n  });\n});\n")))}g.isMDXComponent=!0},57726:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/webp;base64,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"}}]);