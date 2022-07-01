"use strict";(self.webpackChunkctu_course_guide=self.webpackChunkctu_course_guide||[]).push([[1945],{23517:(e,t,n)=>{n.r(t),n.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-ec20f3c6","path":"/cookbook/vuepress/theme.html","title":"Theme Config","lang":"en-US","frontmatter":{"title":"Theme Config","icon":"palette","category":["Cookbook","VuePress"],"tag":["Theme","VuePress"],"summary":"VuePress theme can provide layouts, styles and many other features for you, helping you to focus on writing Markdown content. Default Theme VuePress has a default theme out of the ","head":[["meta",{"property":"og:url","content":"https://ctu.zenfection.com/cookbook/vuepress/theme.html"}],["meta",{"property":"og:site_name","content":"vuepress-theme-hope"}],["meta",{"property":"og:title","content":"Theme Config"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-01T06:47:49.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:tag","content":"Theme"}],["meta",{"property":"article:tag","content":"VuePress"}],["meta",{"property":"article:modified_time","content":"2022-07-01T06:47:49.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Default Theme","slug":"default-theme","children":[]},{"level":2,"title":"Community Theme","slug":"community-theme","children":[]},{"level":2,"title":"Local Theme","slug":"local-theme","children":[]}],"git":{"createdTime":1656658069000,"updatedTime":1656658069000,"contributors":[{"name":"Zenfection","email":"44715845+Zenfection1412@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.83,"words":249},"copyright":"Copyright by \\nhttps://ctu.zenfection.com/cookbook/vuepress/theme.html","filePathRelative":"cookbook/vuepress/theme.md","localizedDate":"July 1, 2022"}')},68880:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});var a=n(66124);const o=(0,a._)("p",null,"VuePress theme can provide layouts, styles and many other features for you, helping you to focus on writing Markdown content.",-1),s=(0,a._)("h2",{id:"default-theme",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#default-theme","aria-hidden":"true"},"#"),(0,a.Uk)(" Default Theme")],-1),r=(0,a._)("p",null,"VuePress has a default theme out of the box, which is applied to our documentation site you are currently browsing.",-1),l=(0,a._)("p",null,"If you don't specify the theme to use, the default theme will be used automatically.",-1),u=(0,a.Uk)("To configure the default theme, you need to import and use it in your config file via the "),p={href:"https://v2.vuepress.vuejs.org/reference/config.html#theme",target:"_blank",rel:"noopener noreferrer"},i=(0,a.Uk)("theme"),c=(0,a.Uk)(" option:"),m=(0,a.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token comment">// default theme config</span>\n    <span class="token literal-property property">navbar</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;Home&quot;</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),h=(0,a.Uk)("The default theme provides basic but useful features for documentation site, you can check out "),d={href:"https://v2.vuepress.vuejs.org/reference/default-theme/config.html",target:"_blank",rel:"noopener noreferrer"},f=(0,a.Uk)("Default Theme Config Reference"),k=(0,a.Uk)(" for a full list of config."),v=(0,a._)("p",null,"However, you might think it is not good enough. Or, you want to build a different type of site, for example, a blog, instead of a documentation. Then, you can try to use a community theme or create a local theme.",-1),y=(0,a._)("h2",{id:"community-theme",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#community-theme","aria-hidden":"true"},"#"),(0,a.Uk)(" Community Theme")],-1),g=(0,a.Uk)("Community users have created lots of theme and published them to "),b={href:"https://www.npmjs.com/search?q=keywords:vuepress-theme",target:"_blank",rel:"noopener noreferrer"},_=(0,a.Uk)("NPM"),w=(0,a.Uk)(". You should check the theme's own documentation for detailed guide."),T=(0,a._)("h2",{id:"local-theme",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#local-theme","aria-hidden":"true"},"#"),(0,a.Uk)(" Local Theme")],-1),U=(0,a.Uk)("If you want to use your own custom theme but don't want to publish it, you can create a local theme. Refer to "),C={href:"https://v2.vuepress.vuejs.org/advanced/theme.html",target:"_blank",rel:"noopener noreferrer"},x=(0,a.Uk)("Advanced > Writing a Theme"),P=(0,a.Uk)(" for how to write your own theme."),q={},j=(0,n(61220).Z)(q,[["render",function(e,t){const n=(0,a.up)("ExternalLinkIcon");return(0,a.wg)(),(0,a.iD)("div",null,[o,s,r,l,(0,a._)("p",null,[u,(0,a._)("a",p,[i,(0,a.Wm)(n)]),c]),m,(0,a._)("p",null,[h,(0,a._)("a",d,[f,(0,a.Wm)(n)]),k]),v,y,(0,a._)("p",null,[g,(0,a._)("a",b,[_,(0,a.Wm)(n)]),w]),T,(0,a._)("p",null,[U,(0,a._)("a",C,[x,(0,a.Wm)(n)]),P])])}]])},61220:(e,t)=>{t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[e,a]of t)n[e]=a;return n}}}]);