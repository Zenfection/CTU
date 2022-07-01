"use strict";(self.webpackChunkctu_course_guide=self.webpackChunkctu_course_guide||[]).push([[4158],{70326:(e,t,r)=>{r.r(t),r.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-c410819c","path":"/cookbook/tutorial/structure.html","title":"Project Structure","lang":"en-US","frontmatter":{"title":"Project Structure","icon":"tree","category":["Cookbook","Tutorial","Get Started"],"tag":["Project Structure"],"summary":"This tutorial will introduce VuePress project structure.\\n","head":[["meta",{"property":"og:url","content":"https://ctu.zenfection.com/cookbook/tutorial/structure.html"}],["meta",{"property":"og:site_name","content":"vuepress-theme-hope"}],["meta",{"property":"og:title","content":"Project Structure"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-01T06:47:49.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:tag","content":"Project Structure"}],["meta",{"property":"article:modified_time","content":"2022-07-01T06:47:49.000Z"}]]},"excerpt":"<p>This tutorial will introduce VuePress project structure.</p>\\n","headers":[{"level":2,"title":"VuePress project structure","slug":"vuepress-project-structure","children":[]}],"git":{"createdTime":1656658069000,"updatedTime":1656658069000,"contributors":[{"name":"Zenfection","email":"44715845+Zenfection1412@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.45,"words":135},"copyright":"Copyright by \\nhttps://ctu.zenfection.com/cookbook/tutorial/structure.html","filePathRelative":"cookbook/tutorial/structure.md","localizedDate":"July 1, 2022"}')},91981:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var i=r(66124);const o=(0,i._)("p",null,"This tutorial will introduce VuePress project structure.",-1),n=(0,i.uE)('<h2 id="vuepress-project-structure" tabindex="-1"><a class="header-anchor" href="#vuepress-project-structure" aria-hidden="true">#</a> VuePress project structure</h2><p>VuePress only controls the files in the VuePress project folder, that is, the parameters in the previous chapter.Other files in project are not used by VuePress.</p><div class="custom-container note"><p class="custom-container-title">Note</p><p>If you used <code>docs</code> as instructed in the previous tutorial, then <code>docs</code> is your VuePress project folder.</p></div><p>A basic project structure is as follows:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.\n├── .github (optional) → GitHub config file storage path\n│     └── workflow → GitHub workflow configuration\n│          └── docs-deploy.yml → Workflow for automatic deployment of documents\n|\n├── docs → project folder specified by you\n│    │\n│    ├── .vuepress (optional) → VuePress config folder\n│    │    │\n│    │    ├── dist (default) → build output directory\n│    │    │\n│    │    ├── public (optional) → static resource directory\n│    │    │\n│    │    ├── styles (optional) → style-related files\n│    │    │\n│    │    ├── config.{js,ts} (optional) → the entry file of the configuration file\n│    │    │\n│    │    └── client.{js,ts} (optional) → client application file\n│    │\n│    ├── ... → Other project documentation\n│    │\n│    └── README.md → Project Homepage\n│\n└── package.json → Nodejs configuration file\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',5),s={},c=(0,r(61220).Z)(s,[["render",function(e,t){return(0,i.wg)(),(0,i.iD)("div",null,[o,(0,i.kq)(" more "),n])}]])},61220:(e,t)=>{t.Z=(e,t)=>{const r=e.__vccOpts||e;for(const[e,i]of t)r[e]=i;return r}}}]);