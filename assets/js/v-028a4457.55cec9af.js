"use strict";(self.webpackChunkctu_course_guide=self.webpackChunkctu_course_guide||[]).push([[4431],{32190:(e,n,s)=>{s.r(n),s.d(n,{data:()=>a});const a=JSON.parse('{"key":"v-028a4457","path":"/cookbook/advanced/extend.html","title":"Theme Extending","lang":"en-US","frontmatter":{"title":"Theme Extending","icon":"extend","category":["Advanced"],"tag":["Advanced","Customize"],"summary":"vuepress-theme-hope supports extending just like @vuepress/theme-default. You can create your own theme based on vuepress-theme-hope and use it locally or publish it according to y","head":[["meta",{"property":"og:url","content":"https://ctu.zenfection.com/cookbook/advanced/extend.html"}],["meta",{"property":"og:site_name","content":"vuepress-theme-hope"}],["meta",{"property":"og:title","content":"Theme Extending"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-01T06:47:49.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:tag","content":"Advanced"}],["meta",{"property":"article:tag","content":"Customize"}],["meta",{"property":"article:modified_time","content":"2022-07-01T06:47:49.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Theme extending","slug":"theme-extending","children":[]}],"git":{"createdTime":1656658069000,"updatedTime":1656658069000,"contributors":[{"name":"Zenfection","email":"44715845+Zenfection1412@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.18,"words":355},"copyright":"Copyright by \\nhttps://ctu.zenfection.com/cookbook/advanced/extend.html","filePathRelative":"cookbook/advanced/extend.md","localizedDate":"July 1, 2022"}')},58787:(e,n,s)=>{s.r(n),s.d(n,{default:()=>l});var a=s(66124);const t=(0,a.uE)('<p><code>vuepress-theme-hope</code> supports extending just like <code>@vuepress/theme-default</code>.</p><p>You can create your own theme based on <code>vuepress-theme-hope</code> and use it locally or publish it according to your needs.</p><h2 id="theme-extending" tabindex="-1"><a class="header-anchor" href="#theme-extending" aria-hidden="true">#</a> Theme extending</h2><p>You need to create an entry file for your theme and import <code>hopeTheme</code> from <code>vuepress-theme-hope</code>.</p><p>In your entry file, set <code>extends: hopeTheme(options)</code> to extend the <code>vuepress-theme-hope</code> theme.</p><p>The aliases of the same name (<code>alias</code>) and layouts (<code>layouts</code>) of your own newly created theme has higher priority over the extended theme <code>vuepress-theme-hope</code>, which means that you can override <code>vuepress-theme-hope</code> components via <code>alias</code> and add or override layout provided by <code>vuepress-theme-hope</code> via <code>layouts</code>.</p>',6),o=(0,a._)("div",{class:"language-typescript ext-ts line-numbers-mode"},[(0,a._)("pre",{class:"language-typescript"},[(0,a._)("code",null,[(0,a._)("span",{class:"token comment"},"// .vuepress/theme/index.ts"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token keyword"},"import"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)(" path "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)(),(0,a._)("span",{class:"token keyword"},"from"),(0,a.Uk)(),(0,a._)("span",{class:"token string"},'"@vuepress/utils"'),(0,a._)("span",{class:"token punctuation"},";"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token keyword"},"import"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)(" hopeTheme "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)(),(0,a._)("span",{class:"token keyword"},"from"),(0,a.Uk)(),(0,a._)("span",{class:"token string"},'"vuepress-theme-hope"'),(0,a._)("span",{class:"token punctuation"},";"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token keyword"},"import"),(0,a.Uk)(),(0,a._)("span",{class:"token keyword"},"type"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)(" HopeThemeOptions "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)(),(0,a._)("span",{class:"token keyword"},"from"),(0,a.Uk)(),(0,a._)("span",{class:"token string"},'"vuepress-theme-hope"'),(0,a._)("span",{class:"token punctuation"},";"),(0,a.Uk)("\n\n"),(0,a._)("span",{class:"token keyword"},"export"),(0,a.Uk)(),(0,a._)("span",{class:"token keyword"},"const"),(0,a.Uk)(),(0,a._)("span",{class:"token function-variable function"},"localTheme"),(0,a.Uk)(),(0,a._)("span",{class:"token operator"},"="),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"("),(0,a.Uk)("options"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(" HopeThemeOptions"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)(),(0,a._)("span",{class:"token operator"},"=>"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n  name"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token string"},'"vuepress-theme-local"'),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n\n  "),(0,a._)("span",{class:"token keyword"},"extends"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token function"},"hopeTheme"),(0,a._)("span",{class:"token punctuation"},"("),(0,a.Uk)("options"),(0,a._)("span",{class:"token punctuation"},")"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n\n  alias"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token comment"},"// You can override or add aliases here"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token comment"},"// For example, here we change the vuepress-theme-hope HomePage component to components/HomePage.vue under our own theme"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token string-property property"},'"@theme-hope/components/HomePage"'),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(" path"),(0,a._)("span",{class:"token punctuation"},"."),(0,a._)("span",{class:"token function"},"resolve"),(0,a._)("span",{class:"token punctuation"},"("),(0,a.Uk)("\n      __dirname"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n      "),(0,a._)("span",{class:"token string"},'"./components/HomePage.vue"'),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token punctuation"},")"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n\n  layouts"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token comment"},"// You can override or add layouts here"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token comment"},"// For example, here we change the default layout of vuepress-theme-hope to layouts/Layout.vue under our own theme"),(0,a.Uk)("\n    Layout"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(" path"),(0,a._)("span",{class:"token punctuation"},"."),(0,a._)("span",{class:"token function"},"resolve"),(0,a._)("span",{class:"token punctuation"},"("),(0,a.Uk)("__dirname"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(),(0,a._)("span",{class:"token string"},'"layouts/Layout.vue"'),(0,a._)("span",{class:"token punctuation"},")"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token comment"},"// Also we added a Changelog layout"),(0,a.Uk)("\n    Changelog"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(" path"),(0,a._)("span",{class:"token punctuation"},"."),(0,a._)("span",{class:"token function"},"resolve"),(0,a._)("span",{class:"token punctuation"},"("),(0,a.Uk)("__dirname"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(),(0,a._)("span",{class:"token string"},'"layouts/Changelog.vue"'),(0,a._)("span",{class:"token punctuation"},")"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"}"),(0,a._)("span",{class:"token punctuation"},")"),(0,a._)("span",{class:"token punctuation"},";"),(0,a.Uk)("\n")])]),(0,a._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"})])],-1),c=(0,a._)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,a._)("pre",{class:"language-javascript"},[(0,a._)("code",null,[(0,a._)("span",{class:"token comment"},"// .vuepress/them/index.js"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token keyword"},"const"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)(" path "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)(),(0,a._)("span",{class:"token operator"},"="),(0,a.Uk)(),(0,a._)("span",{class:"token function"},"require"),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token string"},'"@vuepress/utils"'),(0,a._)("span",{class:"token punctuation"},")"),(0,a._)("span",{class:"token punctuation"},";"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token keyword"},"const"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)(" hopeTheme "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)(),(0,a._)("span",{class:"token operator"},"="),(0,a.Uk)(),(0,a._)("span",{class:"token function"},"require"),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token string"},'"vuepress-theme-hope"'),(0,a._)("span",{class:"token punctuation"},")"),(0,a._)("span",{class:"token punctuation"},";"),(0,a.Uk)("\n\nmodule"),(0,a._)("span",{class:"token punctuation"},"."),(0,a._)("span",{class:"token function-variable function"},"exports"),(0,a.Uk)(),(0,a._)("span",{class:"token operator"},"="),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token parameter"},"options"),(0,a._)("span",{class:"token punctuation"},")"),(0,a.Uk)(),(0,a._)("span",{class:"token operator"},"=>"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token literal-property property"},"name"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token string"},'"vuepress-theme-local"'),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n\n  "),(0,a._)("span",{class:"token keyword"},"extends"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token function"},"hopeTheme"),(0,a._)("span",{class:"token punctuation"},"("),(0,a.Uk)("options"),(0,a._)("span",{class:"token punctuation"},")"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n\n  "),(0,a._)("span",{class:"token literal-property property"},"alias"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token comment"},"// You can override or add aliases here"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token comment"},"// For example, here we change the vuepress-theme-hope HomePage component to components/HomePage.vue under our own theme"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token string-property property"},'"@theme-hope/components/HomePage"'),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(" path"),(0,a._)("span",{class:"token punctuation"},"."),(0,a._)("span",{class:"token function"},"resolve"),(0,a._)("span",{class:"token punctuation"},"("),(0,a.Uk)("\n      __dirname"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n      "),(0,a._)("span",{class:"token string"},'"./components/HomePage.vue"'),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token punctuation"},")"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n\n  "),(0,a._)("span",{class:"token literal-property property"},"layouts"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token comment"},"// You can override or add layouts here"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token comment"},"// For example, here we change the default layout of vuepress-theme-hope to layouts/Layout.vue under our own theme"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token literal-property property"},"Layout"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(" path"),(0,a._)("span",{class:"token punctuation"},"."),(0,a._)("span",{class:"token function"},"resolve"),(0,a._)("span",{class:"token punctuation"},"("),(0,a.Uk)("__dirname"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(),(0,a._)("span",{class:"token string"},'"layouts/Layout.vue"'),(0,a._)("span",{class:"token punctuation"},")"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token comment"},"// Also we added a Changelog layout"),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token literal-property property"},"Changelog"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(" path"),(0,a._)("span",{class:"token punctuation"},"."),(0,a._)("span",{class:"token function"},"resolve"),(0,a._)("span",{class:"token punctuation"},"("),(0,a.Uk)("__dirname"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)(),(0,a._)("span",{class:"token string"},'"layouts/Changelog.vue"'),(0,a._)("span",{class:"token punctuation"},")"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"}"),(0,a._)("span",{class:"token punctuation"},")"),(0,a._)("span",{class:"token punctuation"},";"),(0,a.Uk)("\n")])]),(0,a._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"})])],-1),p={},l=(0,s(61220).Z)(p,[["render",function(e,n){const s=(0,a.up)("CodeTabs");return(0,a.wg)(),(0,a.iD)("div",null,[t,(0,a.Wm)(s,{data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:(0,a.w5)((({title:e,value:n,isActive:s})=>[o])),tab1:(0,a.w5)((({title:e,value:n,isActive:s})=>[c])),_:1})])}]])},61220:(e,n)=>{n.Z=(e,n)=>{const s=e.__vccOpts||e;for(const[e,a]of n)s[e]=a;return s}}}]);