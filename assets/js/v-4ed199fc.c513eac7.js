"use strict";(self.webpackChunkctu_course_guide=self.webpackChunkctu_course_guide||[]).push([[3195],{63106:(e,t,a)=>{a.r(t),a.d(t,{data:()=>n});const n=JSON.parse('{"key":"v-4ed199fc","path":"/guide/blog/category-and-tags.html","title":"Category and tags","lang":"en-US","frontmatter":{"title":"Category and tags","icon":"tag","order":4,"category":["Blog"],"tag":["Blog","Category","Tag"],"summary":"You can configure category and tags for articles through frontmatter to make them appear in specific categories and tags pages.\\n","head":[["meta",{"property":"og:url","content":"https://ctu.zenfection.com/guide/blog/category-and-tags.html"}],["meta",{"property":"og:site_name","content":"vuepress-theme-hope"}],["meta",{"property":"og:title","content":"Category and tags"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://ctu.zenfection.com/"}],["meta",{"property":"og:updated_time","content":"2022-07-01T06:47:49.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Category and tags"}],["meta",{"property":"article:tag","content":"Blog"}],["meta",{"property":"article:tag","content":"Category"}],["meta",{"property":"article:tag","content":"Tag"}],["meta",{"property":"article:modified_time","content":"2022-07-01T06:47:49.000Z"}]]},"excerpt":"<p>You can configure category and tags for articles through frontmatter to make them appear in specific categories and tags pages.</p>\\n","headers":[{"level":2,"title":"Category Settings","slug":"category-settings","children":[]},{"level":2,"title":"Tags","slug":"tags","children":[]},{"level":2,"title":"View list","slug":"view-list","children":[]}],"git":{"createdTime":1656658069000,"updatedTime":1656658069000,"contributors":[{"name":"Zenfection","email":"44715845+Zenfection1412@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.79,"words":238},"copyright":"Copyright by \\nhttps://ctu.zenfection.com/guide/blog/category-and-tags.html","filePathRelative":"guide/blog/category-and-tags.md","localizedDate":"July 1, 2022"}')},43127:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var n=a(66124);const o=a.p+"assets/img/category-light.9b3fb123.png",s=a.p+"assets/img/category-dark.26b55a79.png",i=a.p+"assets/img/tag-light.1078f993.png",r=a.p+"assets/img/tag-dark.f7c43d4a.png",c=a.p+"assets/img/info.b70cb1a2.png",l=a.p+"assets/img/sidebar.9311fe8a.png",g=(0,n._)("p",null,"You can configure category and tags for articles through frontmatter to make them appear in specific categories and tags pages.",-1),d=(0,n.uE)('<h2 id="category-settings" tabindex="-1"><a class="header-anchor" href="#category-settings" aria-hidden="true">#</a> Category Settings</h2><p>Just add category array to <code>category</code> in page frontmatter, the article will be automatically rendered in the list of the<code>/category/&lt;category name&gt;/</code> category page.</p><p>For example, add this to a certain page:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>\n<span class="token front-matter yaml language-yaml"><span class="token key atrule">category</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> HTML\n  <span class="token punctuation">-</span> Web</span>\n<span class="token punctuation">---</span></span>\n\nPage content...\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then you can find it under the <code>/category/html</code> page.</p><p><img src="'+o+'" alt="Category" data-mode="lightmode-only"><img src="'+s+'" alt="Category" data-mode="darkmode-only"></p><h2 id="tags" tabindex="-1"><a class="header-anchor" href="#tags" aria-hidden="true">#</a> Tags</h2><p>Just set <code>tag</code> option in page frontmatter , and set value to one or more tags, then the article will be automatically rendered in the list of the <code>/tag/&lt;tag name&gt;/</code> tag page.</p><p>For example, after adding this in frontmatter:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>\n<span class="token front-matter yaml language-yaml"><span class="token key atrule">tag</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> HTML\n  <span class="token punctuation">-</span> Web</span>\n<span class="token punctuation">---</span></span>\n\nPage content...\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then you can find it under the <code>/tag/html</code> and <code>/tag/web</code> pages.</p><p><img src="'+i+'" alt="Tag" data-mode="lightmode-only"><img src="'+r+'" alt="Tag" data-mode="darkmode-only"></p><h2 id="view-list" tabindex="-1"><a class="header-anchor" href="#view-list" aria-hidden="true">#</a> View list</h2><p>Besides directly accessing the corresponding link, the category and tag name will be displayed at the article information at the top of the article. You can click on it to navigate to the corresponding list to view the articles of the same category or tag.</p><p><img src="'+c+'" alt="Article Information"></p><p>You can also select the category or tag tab in the sidebar of the blog homepage and select the corresponding item to enter the list.</p><p><img src="'+l+'" alt="Sidebar Tab"></p>',17),p={},m=(0,a(61220).Z)(p,[["render",function(e,t){return(0,n.wg)(),(0,n.iD)("div",null,[g,(0,n.kq)(" more "),d])}]])},61220:(e,t)=>{t.Z=(e,t)=>{const a=e.__vccOpts||e;for(const[e,n]of t)a[e]=n;return a}}}]);