"use strict";(self.webpackChunkctu_course_guide=self.webpackChunkctu_course_guide||[]).push([[5059],{14770:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-7498a26b","path":"/cookbook/tutorial/config.html","title":"Project Config","lang":"en-US","frontmatter":{"title":"Project Config","icon":"config","category":["Cookbook","Tutorial","Get Started"],"tag":["Project Config"],"summary":"This tutorial guides you on how to configure a VuePress project.\\n","head":[["meta",{"property":"og:url","content":"https://ctu.zenfection.com/cookbook/tutorial/config.html"}],["meta",{"property":"og:site_name","content":"vuepress-theme-hope"}],["meta",{"property":"og:title","content":"Project Config"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://ctu.zenfection.com/"}],["meta",{"property":"og:updated_time","content":"2022-07-01T06:47:49.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Project Config"}],["meta",{"property":"article:tag","content":"Project Config"}],["meta",{"property":"article:modified_time","content":"2022-07-01T06:47:49.000Z"}]]},"excerpt":"<p>This tutorial guides you on how to configure a VuePress project.</p>\\n","headers":[{"level":2,"title":"Configure VuePress","slug":"configure-vuepress","children":[]},{"level":2,"title":"Config File","slug":"config-file","children":[]},{"level":2,"title":"Config Scope","slug":"config-scope","children":[{"level":3,"title":"Site Config","slug":"site-config","children":[]},{"level":3,"title":"Theme Config","slug":"theme-config","children":[]},{"level":3,"title":"More","slug":"more","children":[]}]}],"git":{"createdTime":1656658069000,"updatedTime":1656658069000,"contributors":[{"name":"Zenfection","email":"44715845+Zenfection1412@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.87,"words":561},"copyright":"Copyright by \\nhttps://ctu.zenfection.com/cookbook/tutorial/config.html","filePathRelative":"cookbook/tutorial/config.md","localizedDate":"July 1, 2022"}')},35905:(e,t,o)=>{o.r(t),o.d(t,{default:()=>O});var i=o(66124);const n=o.p+"assets/img/vscode-hint-light.bf35a322.png",s=o.p+"assets/img/vscode-hint-dark.5a7dc971.png",r=o.p+"assets/img/vscode-error-light.7406be3a.png",a=o.p+"assets/img/vscode-error-dark.1e4beb4a.png",l=o.p+"assets/img/vscode-autocomplete-light.3afc2bb7.png",c=o.p+"assets/img/vscode-autocomplete-dark.966cecdf.png",u=(0,i._)("p",null,"This tutorial guides you on how to configure a VuePress project.",-1),d=(0,i.uE)('<h2 id="configure-vuepress" tabindex="-1"><a class="header-anchor" href="#configure-vuepress" aria-hidden="true">#</a> Configure VuePress</h2><p>Without config files, a VuePress project can only achieve limited functionality by default, so to better customize your website, VuePress provides config files.</p><p>VuePress uses <code>.vuepress</code> folder under the project folder to store configuration, and all VuePress related files will be placed here.</p><p>For a VuePress site, <code>.vuepress/config.ts</code> (or <code>.vuepress/config.js</code>) is the necessary config file.</p><div class="custom-container tip"><p class="custom-container-title">Use TS configuration file</p><p>We recommend you to use TypeScript config files for better type hinting, autocompletion and error checking.</p><p>If you are not familiar with TypeScript, you can also use a JavaScript config file, but it is better to use an editor such as VSCode that fully supports TS/JS features to avoid losing the type checking, autocompletion and option hints features mentioned below.</p></div><h2 id="config-file" tabindex="-1"><a class="header-anchor" href="#config-file" aria-hidden="true">#</a> Config File</h2><p>You need to set up a config object in the config file <code>.vuepress/config.ts</code> (or <code>.vuepress/config.js</code>) and export it.</p><p>To get correct hints, importing <code>defineUserConfig</code> from <code>vuepress</code> and wrapping the config object is recommended:</p>',8),p=(0,i._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,i._)("pre",{class:"language-text"},[(0,i._)("code",null,'// .vuepress/config.ts\nimport { defineUserConfig } from "vuepress";\n\nexport default defineUserConfig({\n   // put your config here\n});\n')]),(0,i._)("div",{class:"highlight-lines"},[(0,i._)("br"),(0,i._)("div",{class:"highlight-line"}," "),(0,i._)("br"),(0,i._)("div",{class:"highlight-line"}," "),(0,i._)("br"),(0,i._)("div",{class:"highlight-line"}," ")]),(0,i._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,i._)("div",{class:"line-number"}),(0,i._)("div",{class:"line-number"}),(0,i._)("div",{class:"line-number"}),(0,i._)("div",{class:"line-number"}),(0,i._)("div",{class:"line-number"}),(0,i._)("div",{class:"line-number"})])],-1),g=(0,i._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,i._)("pre",{class:"language-text"},[(0,i._)("code",null,'// .vuepress/config.js\nconst { defineUserConfig } = require("vuepress");\n\nmodule.exports = defineUserConfig({\n   // put your config here\n});\n')]),(0,i._)("div",{class:"highlight-lines"},[(0,i._)("br"),(0,i._)("div",{class:"highlight-line"}," "),(0,i._)("br"),(0,i._)("div",{class:"highlight-line"}," "),(0,i._)("br"),(0,i._)("div",{class:"highlight-line"}," ")]),(0,i._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,i._)("div",{class:"line-number"}),(0,i._)("div",{class:"line-number"}),(0,i._)("div",{class:"line-number"}),(0,i._)("div",{class:"line-number"}),(0,i._)("div",{class:"line-number"}),(0,i._)("div",{class:"line-number"})])],-1),h=(0,i.uE)('<h2 id="config-scope" tabindex="-1"><a class="header-anchor" href="#config-scope" aria-hidden="true">#</a> Config Scope</h2><h3 id="site-config" tabindex="-1"><a class="header-anchor" href="#site-config" aria-hidden="true">#</a> Site Config</h3><p>Config items in the Site Config are directly read by VuePress, have nothing to do with the theme and can take effect in all themes.</p><p>We know that every site should have its <code>lang</code>, <code>title</code> and <code>description</code> properties, so VuePress has built-in support for setting these properties.</p>',4),f={class:"custom-container info"},m=(0,i._)("p",{class:"custom-container-title"},"Site Config",-1),v=(0,i.Uk)("You can go to "),_={href:"https://v2.vuepress.vuejs.org/en/reference/config.html",target:"_blank",rel:"noopener noreferrer"},b=(0,i.Uk)("VuePress2 → Reference → Configuration"),y=(0,i.Uk)(" to see all VuePress configuration."),k=(0,i._)("h3",{id:"theme-config",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#theme-config","aria-hidden":"true"},"#"),(0,i.Uk)(" Theme Config")],-1),C=(0,i._)("p",null,[(0,i.Uk)("Theme config is the object you pass to "),(0,i._)("code",null,"hopeTheme"),(0,i.Uk)(" function, which will be handled by VuePress Theme Hope.")],-1),P=(0,i.Uk)("You can find all the theme config in "),U=(0,i.Uk)("Config → Theme Config"),w=(0,i.Uk)("."),S=(0,i.uE)('<div class="custom-container tip"><p class="custom-container-title">Hints and Checks</p><p>If you are using an editor that supports TS/JS language features (such as VSCode), you can easily get option hints and checks.</p><ul><li><p>You can hover over an option to get hints:</p><p><img src="'+n+'" alt="option hint" data-mode="lightmode-only"><img src="'+s+'" alt="option hint" data-mode="darkmode-only"></p></li><li><p>If you enter wrong option name or invalid value, you will get error message:</p><p><img src="'+r+'" alt="Error message" data-mode="lightmode-only"><img src="'+a+'" alt="Error message" data-mode="darkmode-only"></p></li><li><p>You can get autocompletion while inputting:</p><p><img src="'+l+'" alt="autocomplete" data-mode="lightmode-only"><img src="'+c+'" alt="Autocomplete" data-mode="darkmode-only"></p></li></ul></div><h3 id="more" tabindex="-1"><a class="header-anchor" href="#more" aria-hidden="true">#</a> More</h3>',2),T={class:"custom-container info"},V=(0,i._)("p",{class:"custom-container-title"},"Plugin Config",-1),j=(0,i.Uk)("VuePress Theme Hope bundles some plugins, you can pass plugin options through "),x=(0,i._)("code",null,"plugins.PLUGIN_NAME",-1),W=(0,i.Uk)(" in theme options, see "),E=(0,i.Uk)("Config → Theme Plugin"),F=(0,i.Uk)(" for more details."),I=(0,i.Uk)("If you want to use additional plugins, please import the plugin yourself and pass plugin options, see "),z=(0,i.Uk)("VuePress → plugins"),J=(0,i.Uk)(" for details."),Y={class:"custom-container info"},Z=(0,i.uE)('<p class="custom-container-title">Style Config</p><p>VuePress Theme Hope is using <code>.vuepress/styles</code> folder to store style config like other themes.</p><p>In this folder you can:</p><ul><li>Create <code>index.scss</code> to inject additional CSS styles</li><li>Create <code>config.scss</code> for styling config</li><li>Create <code>palette.scss</code> to set color and layout</li></ul>',4),A=(0,i.Uk)("For more details, see "),M=(0,i.Uk)("Config → Style"),H=(0,i.Uk)("."),L={class:"custom-container info"},N=(0,i._)("p",{class:"custom-container-title"},"Page Config",-1),R=(0,i.Uk)("VuePress supports page scope config of specific page through YAML Frontmatter in Markdown files. For details, see "),q=(0,i.Uk)("Project Content → Frontmatter"),D=(0,i.Uk)(" in the previous chapter."),G={},O=(0,o(61220).Z)(G,[["render",function(e,t){const o=(0,i.up)("CodeTabs"),n=(0,i.up)("ExternalLinkIcon"),s=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[u,(0,i.kq)(" more "),d,(0,i.Wm)(o,{data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:(0,i.w5)((({title:e,value:t,isActive:o})=>[p])),tab1:(0,i.w5)((({title:e,value:t,isActive:o})=>[g])),_:1}),h,(0,i._)("div",f,[m,(0,i._)("p",null,[v,(0,i._)("a",_,[b,(0,i.Wm)(n)]),y])]),k,C,(0,i._)("p",null,[P,(0,i.Wm)(s,{to:"/config/"},{default:(0,i.w5)((()=>[U])),_:1}),w]),S,(0,i._)("div",T,[V,(0,i._)("p",null,[j,x,W,(0,i.Wm)(s,{to:"/config/plugins/"},{default:(0,i.w5)((()=>[E])),_:1}),F]),(0,i._)("p",null,[I,(0,i.Wm)(s,{to:"/cookbook/vuepress/plugin.html"},{default:(0,i.w5)((()=>[z])),_:1}),J])]),(0,i._)("div",Y,[Z,(0,i._)("p",null,[A,(0,i.Wm)(s,{to:"/config/style.html"},{default:(0,i.w5)((()=>[M])),_:1}),H])]),(0,i._)("div",L,[N,(0,i._)("p",null,[R,(0,i.Wm)(s,{to:"/cookbook/tutorial/content.html#frontmatter"},{default:(0,i.w5)((()=>[q])),_:1}),D])])])}]])},61220:(e,t)=>{t.Z=(e,t)=>{const o=e.__vccOpts||e;for(const[e,i]of t)o[e]=i;return o}}}]);