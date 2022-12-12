"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[95852],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(h,p(p({ref:t},u),{},{components:n})):a.createElement(h,p({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var l=2;l<i;l++)p[l]=n[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99994:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>p,metadata:()=>s,toc:()=>u});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={title:"Bicep meet Azure Pipelines",authors:"johnnyreilly",tags:["Bicep","ARM templates","Azure Pipelines","Azure CLI"],image:"./bicep-meet-azure-pipelines.webp",hide_table_of_contents:!1},o=void 0,s={permalink:"/2021/03/20/bicep-meet-azure-pipelines",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2021-03-20-bicep-meet-azure-pipelines/index.md",source:"@site/blog/2021-03-20-bicep-meet-azure-pipelines/index.md",title:"Bicep meet Azure Pipelines",description:"Bicep is a terser and more readable alternative language to ARM templates. Running ARM templates in Azure Pipelines is straightforward. However, there isn't yet a first class experience for running Bicep in Azure Pipelines. This post demonstrates an approach that can be used until a Bicep task is available.",date:"2021-03-20T00:00:00.000Z",formattedDate:"March 20, 2021",tags:[{label:"Bicep",permalink:"/tags/bicep"},{label:"ARM templates",permalink:"/tags/arm-templates"},{label:"Azure Pipelines",permalink:"/tags/azure-pipelines"},{label:"Azure CLI",permalink:"/tags/azure-cli"}],readingTime:4.9,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Bicep meet Azure Pipelines",authors:"johnnyreilly",tags:["Bicep","ARM templates","Azure Pipelines","Azure CLI"],image:"./bicep-meet-azure-pipelines.webp",hide_table_of_contents:!1},prevItem:{title:"Bicep meet Azure Pipelines 2",permalink:"/2021/03/23/bicep-meet-azure-pipelines-2"},nextItem:{title:"RSS update; we moved to Docusaurus",permalink:"/2021/03/17/rss-update-we-moved-to-docusaurus"}},l={image:n(36599).Z,authorsImageUrls:[void 0]},u=[{value:"Bicep: mostly ARMless",id:"bicep-mostly-armless",level:2},{value:"App Service with Bicep",id:"app-service-with-bicep",level:2},{value:"Bicep in <code>azure-pipelines.yml</code>",id:"bicep-in-azure-pipelinesyml",level:2},{value:"Update: an even simpler alternative",id:"update-an-even-simpler-alternative",level:2}],c={toc:u};function m(e){var{components:t}=e,p=i(e,["components"]);return(0,a.kt)("wrapper",r({},c,p,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/Azure/bicep"}),"Bicep")," is a terser and more readable alternative language to ARM templates. Running ARM templates in Azure Pipelines is straightforward. However, there isn't yet a first class experience for running Bicep in Azure Pipelines. This post demonstrates an approach that can be used until a Bicep task is available."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Bicep meet Azure Pipelines",src:n(36599).Z,width:"504",height:"252"})),(0,a.kt)("h2",r({},{id:"bicep-mostly-armless"}),"Bicep: mostly ARMless"),(0,a.kt)("p",null,"If you've been working with Azure and infrastructure as code, you'll likely have encountered ",(0,a.kt)("a",r({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/overview"}),"ARM templates"),". They're a domain specific language that lives inside JSON, used to define the infrastructure that is deployed to Azure; App Services, Key Vaults and the like."),(0,a.kt)("p",null,"ARM templates are quite verbose and not the easiest thing to read. This is a consequence of being effectively a language nestled inside another language. Bicep is an alternative language which is far more readable. Bicep transpiles down to ARM templates, in the same way that TypeScript transpiles down to JavaScript."),(0,a.kt)("p",null,"Bicep is quite new, but already it enjoys feature parity with ARM templates (as of ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/Azure/bicep/releases/tag/v0.3.1"}),"v0.3"),") and ships as part of the ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/MicrosoftDocs/azure-docs-cli/blob/master/docs-ref-conceptual/release-notes-azure-cli/index.md#arm-1"}),"Azure CLI"),". However, as Bicep is new, it doesn't yet have a dedicated Azure Pipelines task for deployment. This should exist in future, perhaps as soon as the ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/Azure/bicep/issues/1341"}),"v0.4 release"),". In the meantime there's an alternative way to achieve this which we'll go through."),(0,a.kt)("h2",r({},{id:"app-service-with-bicep"}),"App Service with Bicep"),(0,a.kt)("p",null,"Let's take a simple Bicep file, ",(0,a.kt)("inlineCode",{parentName:"p"},"azuredeploy.bicep"),", which is designed to deploy an App Service resource to Azure. It looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-bicep"}),"@description('Tags that our resources need')\nparam tags object = {\n  costCenter: 'todo: replace'\n  environment: 'todo: replace'\n  application: 'todo: replace with app name'\n  description: 'todo: replace'\n  managedBy: 'ARM'\n}\n\n@minLength(2)\n@description('Base name of the resource such as web app name and app service plan')\nparam applicationName string\n\n@description('Location for all resources.')\nparam location string = resourceGroup().location\n\n@description('The SKU of App Service Plan')\nparam sku string\n\nvar appServicePlanName_var = 'plan-${applicationName}-${tags.environment}'\nvar linuxFxVersion = 'DOTNETCORE|5.0'\nvar fullApplicationName_var = 'app-${applicationName}-${uniqueString(applicationName)}'\n\nresource appServicePlanName 'Microsoft.Web/serverfarms@2019-08-01' = {\n  name: appServicePlanName_var\n  location: location\n  sku: {\n    name: sku\n  }\n  kind: 'linux'\n  tags: {\n    CostCenter: tags.costCenter\n    Environment: tags.environment\n    Description: tags.description\n    ManagedBy: tags.managedBy\n  }\n  properties: {\n    reserved: true\n  }\n}\n\nresource fullApplicationName 'Microsoft.Web/sites@2018-11-01' = {\n  name: fullApplicationName_var\n  location: location\n  kind: 'app'\n  tags: {\n    CostCenter: tags.costCenter\n    Environment: tags.environment\n    Description: tags.description\n    ManagedBy: tags.managedBy\n  }\n  properties: {\n    serverFarmId: appServicePlanName.id\n    clientAffinityEnabled: true\n    siteConfig: {\n      appSettings: []\n      linuxFxVersion: linuxFxVersion\n      alwaysOn: false\n      ftpsState: 'Disabled'\n      http20Enabled: true\n      minTlsVersion: '1.2'\n      remoteDebuggingEnabled: false\n    }\n    httpsOnly: true\n  }\n  identity: {\n    type: 'SystemAssigned'\n  }\n}\n\noutput fullApplicationName string = fullApplicationName_var\n")),(0,a.kt)("p",null,"When transpiled down to an ARM template, this Bicep file more than doubles in size:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"azuredeploy.bicep")," - 1782 bytes"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"azuredeploy.json")," - 3863 bytes")),(0,a.kt)("p",null,"This tells you something of the advantage of Bicep. The template comes with an associated ",(0,a.kt)("inlineCode",{parentName:"p"},"azuredeploy.parameters.json")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-json"}),'{\n  "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentParameters.json#",\n  "contentVersion": "1.0.0.0",\n  "parameters": {\n    "tags": {\n      "value": {\n        "costCenter": "8888",\n        "environment": "stg",\n        "application": "hello-azure",\n        "description": "App Service for hello-azure",\n        "managedBy": "ARM"\n      }\n    },\n    "sku": {\n      "value": "B1"\n    }\n  }\n}\n')),(0,a.kt)("p",null,"It's worth remembering that you can use the same parameters files with Bicep that you can use with ARM templates. This is great for minimising friction when it comes to migrating."),(0,a.kt)("h2",r({},{id:"bicep-in-azure-pipelinesyml"}),"Bicep in ",(0,a.kt)("inlineCode",{parentName:"h2"},"azure-pipelines.yml")),(0,a.kt)("p",null,"Now we have our Bicep file, we want to execute it from the context of an Azure Pipeline. If we were working directly with the ARM template we'd likely have something like this in place:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-yml"}),"- task: AzureResourceManagerTemplateDeployment@3\n  displayName: 'Deploy Hello Azure ARM'\n  inputs:\n    azureResourceManagerConnection: '$(azureSubscription)'\n    action: Create Or Update Resource Group\n    resourceGroupName: '$(resourceGroupName)'\n    location: 'North Europe'\n    templateLocation: Linked artifact\n    csmFile: 'infra/app-service/azuredeploy.json'\n    csmParametersFile: 'infra/app-service/azuredeploy.parameters.json'\n    deploymentMode: Incremental\n    deploymentOutputs: resourceGroupDeploymentOutputs\n    overrideParameters: -applicationName $(Build.Repository.Name)\n\n- pwsh: |\n    $outputs = ConvertFrom-Json '$(resourceGroupDeploymentOutputs)'\n    foreach ($output in $outputs.PSObject.Properties) {\n        Write-Host \"##vso[task.setvariable variable=RGDO_$($output.Name)]$($output.Value.value)\"\n    }\n  displayName: 'Turn ARM outputs into variables'\n")),(0,a.kt)("p",null,"There's two tasks above. The first is the native task for ARM deployments which takes our ARM template and our parameters and deploys them. The second task takes the output variables from the first task and converts them into Azure Pipeline variables such that they can be referenced later in the pipeline. In this case this variablifies our ",(0,a.kt)("inlineCode",{parentName:"p"},"fullApplicationName")," output."),(0,a.kt)("p",null,"There is, as yet, no ",(0,a.kt)("inlineCode",{parentName:"p"},"BicepTemplateDeployment@1"),". ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/Azure/bicep/issues/1341"}),"Though it's coming"),". In the meantime, the marvellous ",(0,a.kt)("a",r({parentName:"p"},{href:"https://twitter.com/adotfrank"}),"Alex Frankel")," ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/Azure/bicep/issues/1341#issuecomment-802010110"}),"advised"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"I'd recommend using the ",(0,a.kt)("a",r({parentName:"p"},{href:"https://docs.microsoft.com/azure/devops/pipelines/tasks/deploy/azure-cli?view=azure-devops"}),"Azure CLI task")," to deploy. As long as that task is updated to Az CLI version 2.20 or later, it will automatically install the bicep CLI when calling ",(0,a.kt)("inlineCode",{parentName:"p"},"az deployment group create -f main.bicep"),".")),(0,a.kt)("p",null,"Let's give it a go!"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-yml"}),"- task: AzureCLI@2\n  displayName: 'Deploy Hello Azure Bicep'\n  inputs:\n    azureSubscription: '$(azureSubscription)'\n    scriptType: bash\n    scriptLocation: inlineScript\n    inlineScript: |\n      az --version\n\n      echo \"az deployment group create --resource-group '$(resourceGroupName)' --name appservicedeploy\"\n      az deployment group create --resource-group '$(resourceGroupName)' --name appservicedeploy \\\n        --template-file infra/app-service/azuredeploy.bicep \\\n        --parameters infra/app-service/azuredeploy.parameters.json \\\n        --parameters applicationName='$(Build.Repository.Name)'\n\n      echo \"az deployment group show --resource-group '$(resourceGroupName)' --name appservicedeploy\"\n      deploymentoutputs=$(az deployment group show --resource-group '$(resourceGroupName)' --name appservicedeploy \\\n        --query properties.outputs)\n\n      echo 'convert outputs to variables'\n      echo $deploymentoutputs | jq -c '. | to_entries[] | [.key, .value.value]' |\n        while IFS=$\"\\n\" read -r c; do\n          outputname=$(echo \"$c\" | jq -r '.[0]')\n          outputvalue=$(echo \"$c\" | jq -r '.[1]')\n          echo \"setting variable RGDO_$outputname=$outputvalue\"\n          echo \"##vso[task.setvariable variable=RGDO_$outputname]$outputvalue\"\n        done\n")),(0,a.kt)("p",null,"The above is just a single Azure CLI task (as advised). It invokes ",(0,a.kt)("inlineCode",{parentName:"p"},"az deployment group create")," passing the relevant parameters. It then acquires the output properties using ",(0,a.kt)("inlineCode",{parentName:"p"},"az deployment group show"),". Finally it once again converts these outputs to Azure Pipeline variables with some ",(0,a.kt)("a",r({parentName:"p"},{href:"https://stedolan.github.io/jq/"}),(0,a.kt)("inlineCode",{parentName:"a"},"jq"))," smarts."),(0,a.kt)("p",null,"This works right now, and running it results in something like the output below. So if you're excited about Bicep and don't want to wait for 0.4 to start moving on this, then this can get you going. To track the progress of the custom task, ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/Azure/bicep/issues/1341"}),"keep an eye on this issue"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Bicep in an Azure Pipeline",src:n(24934).Z,width:"1184",height:"1680"})),(0,a.kt)("h2",r({},{id:"update-an-even-simpler-alternative"}),"Update: an even simpler alternative"),(0,a.kt)("p",null,"There is even a simpler way to do this which I discovered subsequent to writing this. ",(0,a.kt)("a",r({parentName:"p"},{href:"/2021/03/23/bicep-meet-azure-pipelines-2"}),"Have a read"),"."))}m.isMDXComponent=!0},24934:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/bicep-in-a-pipeline-9d105c451a17132adcaf8403e587857b.png"},36599:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/webp;base64,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"}}]);