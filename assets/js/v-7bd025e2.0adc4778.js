"use strict";(self.webpackChunkctu_course_guide=self.webpackChunkctu_course_guide||[]).push([[3810],{18772:(e,t,i)=>{i.r(t),i.d(t,{data:()=>s});const s=JSON.parse('{"key":"v-7bd025e2","path":"/guide/markdown/tasklist.html","title":"Task list","lang":"en-US","frontmatter":{"title":"Task list","icon":"check","category":["Markdown"],"tag":["Markdown","Task List"],"summary":"Let the Markdown file in your VuePress site support task list.\\n","head":[["meta",{"property":"og:url","content":"https://ctu.zenfection.com/guide/markdown/tasklist.html"}],["meta",{"property":"og:site_name","content":"vuepress-theme-hope"}],["meta",{"property":"og:title","content":"Task list"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-01T06:47:49.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:tag","content":"Markdown"}],["meta",{"property":"article:tag","content":"Task List"}],["meta",{"property":"article:modified_time","content":"2022-07-01T06:47:49.000Z"}]]},"excerpt":"<p>Let the Markdown file in your VuePress site support task list.</p>\\n","headers":[{"level":2,"title":"Config","slug":"config","children":[]},{"level":2,"title":"Syntax","slug":"syntax","children":[]},{"level":2,"title":"Demo","slug":"demo","children":[]}],"git":{"createdTime":1656658069000,"updatedTime":1656658069000,"contributors":[{"name":"Zenfection","email":"44715845+Zenfection1412@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.35,"words":105},"copyright":"Copyright by \\nhttps://ctu.zenfection.com/guide/markdown/tasklist.html","filePathRelative":"guide/markdown/tasklist.md","localizedDate":"July 1, 2022"}')},97582:(e,t,i)=>{i.r(t),i.d(t,{default:()=>o});var s=i(66124);const n=(0,s._)("p",null,"Let the Markdown file in your VuePress site support task list.",-1),l=(0,s._)("h2",{id:"config",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#config","aria-hidden":"true"},"#"),(0,s.Uk)(" Config")],-1),a=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,'// .vuepress/config.ts\nimport { defineUserConfig } from "vuepress";\nimport { hopeTheme } from "vuepress-theme-hope";\n\nexport default defineUserConfig({\n  theme: hopeTheme({\n    plugins: {\n      mdEnhance: {\n        tasklist: true,\n      },\n    },\n  }),\n});\n')]),(0,s._)("div",{class:"highlight-lines"},[(0,s._)("br"),(0,s._)("br"),(0,s._)("br"),(0,s._)("br"),(0,s._)("br"),(0,s._)("br"),(0,s._)("br"),(0,s._)("div",{class:"highlight-line"}," "),(0,s._)("div",{class:"highlight-line"}," "),(0,s._)("div",{class:"highlight-line"}," "),(0,s._)("br"),(0,s._)("br"),(0,s._)("br")]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"})])],-1),r=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,'// .vuepress/config.js\nconst { hopeTheme } = require("vuepress-theme-hope");\n\nmodule.exports = {\n  theme: hopeTheme({\n    plugins: {\n      mdEnhance: {\n        tasklist: true,\n      },\n    },\n  }),\n};\n')]),(0,s._)("div",{class:"highlight-lines"},[(0,s._)("br"),(0,s._)("br"),(0,s._)("br"),(0,s._)("br"),(0,s._)("br"),(0,s._)("br"),(0,s._)("div",{class:"highlight-line"}," "),(0,s._)("div",{class:"highlight-line"}," "),(0,s._)("div",{class:"highlight-line"}," "),(0,s._)("br"),(0,s._)("br"),(0,s._)("br")]),(0,s._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"}),(0,s._)("div",{class:"line-number"})])],-1),c=(0,s.uE)('<h2 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> Syntax</h2><ul><li>Use <code>- [ ] some text</code> to render a unchecked task item.</li><li>Use <code>- [x] some text</code> to render a checked task item. (Capital <code>X</code> is also supported)</li></ul><h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> Demo</h2><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> Plan A</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> Plan B</label></li></ul><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token list punctuation">-</span> [ ] Plan A\n<span class="token list punctuation">-</span> [x] Plan B\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>',5),d={},o=(0,i(61220).Z)(d,[["render",function(e,t){const i=(0,s.up)("CodeTabs");return(0,s.wg)(),(0,s.iD)("div",null,[n,(0,s.kq)(" more "),l,(0,s.Wm)(i,{data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:(0,s.w5)((({title:e,value:t,isActive:i})=>[a])),tab1:(0,s.w5)((({title:e,value:t,isActive:i})=>[r])),_:1}),c])}]])},61220:(e,t)=>{t.Z=(e,t)=>{const i=e.__vccOpts||e;for(const[e,s]of t)i[e]=s;return i}}}]);