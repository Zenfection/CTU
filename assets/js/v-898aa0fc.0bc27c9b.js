"use strict";(self.webpackChunkctu_course_guide=self.webpackChunkctu_course_guide||[]).push([[1700],{92454:(e,n,i)=>{i.r(n),i.d(n,{data:()=>a});const a=JSON.parse('{"key":"v-898aa0fc","path":"/config/plugins/pwa.html","title":"PWA Plugin Config","lang":"en-US","frontmatter":{"title":"PWA Plugin Config","icon":"app","order":7,"category":["Config"],"tag":["PWA","Plugin Config","Theme Config"],"summary":"Intro The vuepress-plugin-pwa2 plugin provides progressive web app support. vuepress-theme-hope passes plugins.pwa in theme options as plugin options to vuepress-plugin-pwa2 plugin","head":[["meta",{"property":"og:url","content":"https://ctu.zenfection.com/config/plugins/pwa.html"}],["meta",{"property":"og:site_name","content":"vuepress-theme-hope"}],["meta",{"property":"og:title","content":"PWA Plugin Config"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-01T06:47:49.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:tag","content":"PWA"}],["meta",{"property":"article:tag","content":"Plugin Config"}],["meta",{"property":"article:tag","content":"Theme Config"}],["meta",{"property":"article:modified_time","content":"2022-07-01T06:47:49.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Intro","slug":"intro","children":[]},{"level":2,"title":"Plugin Options","slug":"plugin-options","children":[{"level":3,"title":"showInstall","slug":"showinstall","children":[]},{"level":3,"title":"manifest","slug":"manifest","children":[]},{"level":3,"title":"favicon","slug":"favicon","children":[]},{"level":3,"title":"themeColor","slug":"themecolor","children":[]},{"level":3,"title":"maxSize","slug":"maxsize","children":[]},{"level":3,"title":"cacheHTML","slug":"cachehtml","children":[]},{"level":3,"title":"cachePic","slug":"cachepic","children":[]},{"level":3,"title":"maxPicSize","slug":"maxpicsize","children":[]},{"level":3,"title":"update","slug":"update","children":[]},{"level":3,"title":"apple","slug":"apple","children":[]},{"level":3,"title":"msTile","slug":"mstile","children":[]},{"level":3,"title":"hintComponent","slug":"hintcomponent","children":[]},{"level":3,"title":"updateComponent","slug":"updatecomponent","children":[]},{"level":3,"title":"appendBase","slug":"appendbase","children":[]},{"level":3,"title":"generateSwConfig","slug":"generateswconfig","children":[]},{"level":3,"title":"locales","slug":"locales","children":[]}]}],"git":{"createdTime":1656658069000,"updatedTime":1656658069000,"contributors":[{"name":"Zenfection","email":"44715845+Zenfection1412@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.46,"words":738},"copyright":"Copyright by \\nhttps://ctu.zenfection.com/config/plugins/pwa.html","filePathRelative":"config/plugins/pwa.md","localizedDate":"July 1, 2022"}')},81828:(e,n,i)=>{i.r(n),i.d(n,{default:()=>z});var a=i(66124);const t=(0,a._)("h2",{id:"intro",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#intro","aria-hidden":"true"},"#"),(0,a.Uk)(" Intro")],-1),l=(0,a._)("p",null,[(0,a.Uk)("The "),(0,a._)("code",null,"vuepress-plugin-pwa2"),(0,a.Uk)(" plugin provides progressive web app support.")],-1),s=(0,a._)("p",null,[(0,a._)("code",null,"vuepress-theme-hope"),(0,a.Uk)(" passes "),(0,a._)("code",null,"plugins.pwa"),(0,a.Uk)(" in theme options as plugin options to "),(0,a._)("code",null,"vuepress-plugin-pwa2"),(0,a.Uk)(" plugin.")],-1),o={class:"custom-container tip"},c=(0,a._)("p",{class:"custom-container-title"},"Quick Enable",-1),r=(0,a.Uk)("To simply enable this feature, you can set "),p=(0,a._)("code",null,"pwa: true",-1),d=(0,a.Uk)(". "),u={class:"custom-container info"},h=(0,a._)("p",{class:"custom-container-title"},"Info",-1),m=(0,a.Uk)("See the "),v={href:"https://vuepress-theme-hope.github.io/v2/pwa/config.html",target:"_blank",rel:"noopener noreferrer"},g=(0,a.Uk)("pwa2 plugin documentation"),b=(0,a.Uk)(" for more details."),f=(0,a.uE)('<h2 id="plugin-options" tabindex="-1"><a class="header-anchor" href="#plugin-options" aria-hidden="true">#</a> Plugin Options</h2><h3 id="showinstall" tabindex="-1"><a class="header-anchor" href="#showinstall" aria-hidden="true">#</a> showInstall</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li></ul><p>Whether display install button when Service Worker is first registered successfully.</p><h3 id="manifest" tabindex="-1"><a class="header-anchor" href="#manifest" aria-hidden="true">#</a> manifest</h3><ul><li>Type: <code>ManifestOption</code></li><li>Required: No</li></ul><p>You can fill with an object which will be parsed to manifest.webmanifest.</p><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>Some options have their fallback if you do not set them.</p><ul><li><p>name: <code>siteConfig.title</code> || <code>siteConfig.locales[&#39;/&#39;].title</code> || <code>&quot;Site&quot;</code></p></li><li><p>short_name: <code>siteConfig.title</code> || <code>siteConfig.locales[&#39;/&#39;].title</code> || <code>&quot;Site&quot;</code></p></li><li><p>description: <code>siteConfig.description</code> || <code>siteConfig.locales[&#39;/&#39;].description</code> || <code>&quot;A site built with vuepress&quot;</code></p></li><li><p>lang: <code>siteConfig.locales[&#39;/&#39;].lang</code> || <code>&quot;en-US&quot;</code></p></li><li><p>start_url: <code>context.base</code></p></li><li><p>scope: <code>context.base</code></p></li><li><p>display: <code>&quot;standalone&quot;</code></p></li><li><p>theme_color: <code>&quot;#46bd87&quot;</code></p></li><li><p>background_color: <code>&quot;#ffffff&quot;</code></p></li><li><p>orientation: <code>&quot;portrait-primary&quot;</code></p></li><li><p>prefer_related_applications: <code>false</code></p></li></ul></div>',8),k={class:"custom-container info"},w=(0,a._)("p",{class:"custom-container-title"},"More",-1),y=(0,a.Uk)("For docs of Manifest, please see "),x={href:"https://w3c.github.io/manifest/",target:"_blank",rel:"noopener noreferrer"},q=(0,a.Uk)("W3C Manifest"),T=(0,a.uE)('<h3 id="favicon" tabindex="-1"><a class="header-anchor" href="#favicon" aria-hidden="true">#</a> favicon</h3><ul><li>Type: <code>string</code></li><li>Required: No</li></ul><p>Path of favico.ico with absolute path.</p><div class="custom-container warning"><p class="custom-container-title">Note</p><p>We recommend you to set favicon for your site</p></div><h3 id="themecolor" tabindex="-1"><a class="header-anchor" href="#themecolor" aria-hidden="true">#</a> themeColor</h3><ul><li>类型: <code>string</code></li><li>默认值: <code>&quot;#46bd87&quot;</code></li></ul><p>Theme Color, default is theme green</p><h3 id="maxsize" tabindex="-1"><a class="header-anchor" href="#maxsize" aria-hidden="true">#</a> maxSize</h3><ul><li>Type: <code>number</code></li><li>Default: <code>2048</code></li></ul><p>Max size which allows to cache, with KB unit</p><div class="custom-container warning"><p class="custom-container-title">Note</p><p>This option has the highest priority, and any files exceeding this value will be excluded.</p><p>So if you generate very large HTML or JS files, please consider increasing this value, otherwise your PWA may not work normally in offline mode.</p></div><h3 id="cachehtml" tabindex="-1"><a class="header-anchor" href="#cachehtml" aria-hidden="true">#</a> cacheHTML</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether cache HTML files besides home page and 404 page.</p><h3 id="cachepic" tabindex="-1"><a class="header-anchor" href="#cachepic" aria-hidden="true">#</a> cachePic</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether cache pictures</p><h3 id="maxpicsize" tabindex="-1"><a class="header-anchor" href="#maxpicsize" aria-hidden="true">#</a> maxPicSize</h3><ul><li>Type: <code>number</code></li><li>Default: <code>1024</code></li></ul><p>Max picture size which allows to cache, with KB unit</p><h3 id="update" tabindex="-1"><a class="header-anchor" href="#update" aria-hidden="true">#</a> update</h3><ul><li>Type: <code>&quot;disabled&quot; | &quot;available&quot; | &quot;hint&quot; | &quot;force&quot;</code></li><li>Default: <code>&quot;available&quot;</code></li></ul><p>Control logic when new content is found.</p><ul><li><p><code>&quot;disabled&quot;</code>: Do nothing even when new service worker is available. After new service work succeeds installing and starts waiting, it will control page and provide new content in next visit.</p></li><li><p><code>&quot;available&quot;</code>: Only display update popup when the new service worker is available</p></li><li><p><code>&quot;hint&quot;</code>: Display a hint to let user choose to refresh immediately</p><p>This is helpful when you want users to see new docs immediately.</p><div class="custom-container note"><p class="custom-container-title">Note</p><p>If users choose to refresh, the current service worker will be unregistered, and request will start coming to web. Later the new service worker will start installing and control current page after installed.</p></div></li><li><p><code>&quot;force&quot;</code>: unregister current service worker immediately then refresh to get new content</p><div class="custom-container danger"><p class="custom-container-title">Warning</p><p>Though this ensures users are visiting the newest content, but this may affect visiting experiences.</p></div></li></ul><div class="custom-container warning"><p class="custom-container-title">Note</p><p>How docs are updated is controlled by a previous version, so the current option only effect next update from this version.</p></div><h3 id="apple" tabindex="-1"><a class="header-anchor" href="#apple" aria-hidden="true">#</a> apple</h3><p>Special settings for Apple</p><blockquote><p>If you don’t want to make detailed settings, you can safely ignore it; if you don’t want your site compatible with safari on apple, please set it to <code>false</code>.</p></blockquote><h4 id="apple-icon" tabindex="-1"><a class="header-anchor" href="#apple-icon" aria-hidden="true">#</a> apple.icon</h4><ul><li>Type: <code>string</code></li><li>Required: No</li></ul><p>Fill in the icon address used by Apple, the recommended size is 152×152</p><h4 id="apple-statusbarcolor" tabindex="-1"><a class="header-anchor" href="#apple-statusbarcolor" aria-hidden="true">#</a> apple.statusBarColor</h4><ul><li>Type: <code>&quot;black&quot; | &quot;white&quot;</code></li><li>Default: <code>&quot;black&quot;</code></li></ul><p>Apple’s status bar color</p><h4 id="apple-maskicon" tabindex="-1"><a class="header-anchor" href="#apple-maskicon" aria-hidden="true">#</a> apple.maskIcon</h4><ul><li>Type: <code>string</code></li><li>Required: No</li></ul><p>Safari mask icon</p><h3 id="mstile" tabindex="-1"><a class="header-anchor" href="#mstile" aria-hidden="true">#</a> msTile</h3><p>Special settings for Microsoft tiles</p><blockquote><p>If you don’t want to make detailed settings, you can safely ignore it; if you don’t want your site compatible with windows, please set it to <code>false</code>.</p></blockquote><h4 id="mstile-image" tabindex="-1"><a class="header-anchor" href="#mstile-image" aria-hidden="true">#</a> msTile.image</h4><ul><li>Type: <code>string</code></li><li>Required: No</li></ul><p>Tile icon</p><h4 id="mstile-color" tabindex="-1"><a class="header-anchor" href="#mstile-color" aria-hidden="true">#</a> msTile.color</h4><ul><li>Type: <code>string</code></li><li>Default value: <code>themeColor</code></li></ul><p>The tile color will automatically fall back to themeColor if you don’t set it.</p><h3 id="hintcomponent" tabindex="-1"><a class="header-anchor" href="#hintcomponent" aria-hidden="true">#</a> hintComponent</h3><ul><li>Type: <code>string</code></li><li>Default: <code>&quot;SWHintPopup&quot;</code></li></ul><p>You can fill in the custom hint popup component path.</p><h3 id="updatecomponent" tabindex="-1"><a class="header-anchor" href="#updatecomponent" aria-hidden="true">#</a> updateComponent</h3><ul><li>Type: <code>string</code></li><li>Default: <code>&quot;SWUpdatePopup&quot;</code></li></ul><p>You can fill in the custom update popup component path.</p><h3 id="appendbase" tabindex="-1"><a class="header-anchor" href="#appendbase" aria-hidden="true">#</a> appendBase</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether append base to all absolute links.</p><h3 id="generateswconfig" tabindex="-1"><a class="header-anchor" href="#generateswconfig" aria-hidden="true">#</a> generateSwConfig</h3>',56),_=(0,a.Uk)("Options passed to "),C=(0,a._)("code",null,"workbox-build",-1),P=(0,a.Uk)(", for details, see "),W={href:"https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-build#.generateSW",target:"_blank",rel:"noopener noreferrer"},S=(0,a.Uk)("Workbox documentation"),U=(0,a.uE)('<h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h3><ul><li><p>Type: <code>PWALocaleConfig</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">PWALocaleData</span> <span class="token punctuation">{</span>\n  <span class="token doc-comment comment">/**\n   * Install button text\n   */</span>\n  install<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n\n  <span class="token doc-comment comment">/**\n   * iOS install hint text\n   */</span>\n  iOSInstall<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n\n  <span class="token doc-comment comment">/**\n   * Cancel button text\n   */</span>\n  cancel<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n\n  <span class="token doc-comment comment">/**\n   * Close button text\n   */</span>\n  close<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n\n  <span class="token doc-comment comment">/**\n   * Previous image text\n   */</span>\n  prevImage<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n\n  <span class="token doc-comment comment">/**\n   * Next image text\n   */</span>\n  nextImage<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n\n  <span class="token doc-comment comment">/**\n   * Install explain text\n   */</span>\n  explain<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n\n  <span class="token doc-comment comment">/**\n   * Description label text\n   */</span>\n  desc<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n\n  <span class="token doc-comment comment">/**\n   * Feature label text\n   */</span>\n  feature<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n\n  <span class="token doc-comment comment">/**\n   * Update hint text\n   */</span>\n  hint<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n\n  <span class="token doc-comment comment">/**\n   * Update available text\n   */</span>\n  update<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">interface</span> <span class="token class-name">PWALocaleConfig</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">[</span>localePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> PWALocaleData<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Required: No</p></li></ul><p>Locales config for pwa plugin.</p>',3),D={},z=(0,i(61220).Z)(D,[["render",function(e,n){const i=(0,a.up)("Badge"),D=(0,a.up)("ExternalLinkIcon");return(0,a.wg)(),(0,a.iD)("div",null,[t,l,s,(0,a._)("div",o,[c,(0,a._)("p",null,[r,p,d,(0,a.Wm)(i,{text:"Quick Enable Not recommended",type:"warning"})])]),(0,a._)("div",u,[h,(0,a._)("p",null,[m,(0,a._)("a",v,[g,(0,a.Wm)(D)]),b])]),f,(0,a._)("div",k,[w,(0,a._)("p",null,[y,(0,a._)("a",x,[q,(0,a.Wm)(D)])])]),T,(0,a._)("p",null,[_,C,P,(0,a._)("a",W,[S,(0,a.Wm)(D)])]),U])}]])},61220:(e,n)=>{n.Z=(e,n)=>{const i=e.__vccOpts||e;for(const[e,a]of n)i[e]=a;return i}}}]);