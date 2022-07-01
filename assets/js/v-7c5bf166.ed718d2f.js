"use strict";(self.webpackChunkctu_course_guide=self.webpackChunkctu_course_guide||[]).push([[6741],{52631:(e,o,n)=>{n.r(o),n.d(o,{data:()=>t});const t=JSON.parse('{"key":"v-7c5bf166","path":"/cookbook/advanced/replace.html","title":"Replacing Theme Components","lang":"en-US","frontmatter":{"title":"Replacing Theme Components","icon":"customize","category":["Advanced"],"tag":["Advanced","Customize"],"summary":"The theme imports components through alias, so you can use it to replace any component of the theme.\\n","head":[["meta",{"property":"og:url","content":"https://ctu.zenfection.com/cookbook/advanced/replace.html"}],["meta",{"property":"og:site_name","content":"vuepress-theme-hope"}],["meta",{"property":"og:title","content":"Replacing Theme Components"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-01T06:47:49.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:tag","content":"Advanced"}],["meta",{"property":"article:tag","content":"Customize"}],["meta",{"property":"article:modified_time","content":"2022-07-01T06:47:49.000Z"}]]},"excerpt":"<p>The theme imports components through <code v-pre>alias</code>, so you can use it to replace any component of the theme.</p>\\n","headers":[{"level":2,"title":"Replace Components","slug":"replace-components","children":[]},{"level":2,"title":"Using Slots","slug":"using-slots","children":[]}],"git":{"createdTime":1656658069000,"updatedTime":1656658069000,"contributors":[{"name":"Zenfection","email":"44715845+Zenfection1412@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":3.9,"words":1169},"copyright":"Copyright by \\nhttps://ctu.zenfection.com/cookbook/advanced/replace.html","filePathRelative":"cookbook/advanced/replace.md","localizedDate":"July 1, 2022"}')},50142:(e,o,n)=>{n.r(o),n.d(o,{default:()=>U});var t=n(66124);const s=(0,t._)("p",null,[(0,t.Uk)("The theme imports components through "),(0,t._)("code",null,"alias"),(0,t.Uk)(", so you can use it to replace any component of the theme.")],-1),a=(0,t._)("h2",{id:"replace-components",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#replace-components","aria-hidden":"true"},"#"),(0,t.Uk)(" Replace Components")],-1),c=(0,t._)("p",null,[(0,t.Uk)("You need to replace the component alias used in the theme with "),(0,t._)("code",null,"alias"),(0,t.Uk)(" option in your own VuePress config file.")],-1),l=(0,t._)("div",{class:"language-typescript ext-ts line-numbers-mode"},[(0,t._)("pre",{class:"language-typescript"},[(0,t._)("code",null,[(0,t._)("span",{class:"token comment"},"// .vuepress/config.ts"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" path "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},'"@vuepress/utils"'),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" defineUserConfig "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},'"vuepress"'),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" hopeTheme "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},'"vuepress-theme-hope"'),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token keyword"},"export"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"default"),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"defineUserConfig"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  theme"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"hopeTheme"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token comment"},"// your theme config here"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n\n  alias"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token comment"},"// Here you can redirect aliases to your own components"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token comment"},"// For example, here we change the theme’s home page component to HomePage.vue under user .vuepress/components"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token string-property property"},'"@theme-hope/components/HomePage"'),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(" path"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"resolve"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("\n      __dirname"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token string"},'"./components/HomePage.vue"'),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n")])]),(0,t._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"})])],-1),i=(0,t._)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,t._)("pre",{class:"language-javascript"},[(0,t._)("code",null,[(0,t._)("span",{class:"token comment"},"// .vuepress/config.js"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" path "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"require"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},'"@vuepress/utils"'),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" hopeTheme "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"require"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},'"vuepress-theme-hope"'),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\nmodule"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("exports "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token literal-property property"},"theme"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"hopeTheme"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token comment"},"// your theme config here"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n\n  "),(0,t._)("span",{class:"token literal-property property"},"alias"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token comment"},"// Here you can redirect aliases to your own components"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token comment"},"// For example, here we change the theme’s home page component to HomePage.vue under user .vuepress/components"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token string-property property"},'"@theme-hope/components/HomePage"'),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(" path"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"resolve"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("\n      __dirname"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token string"},'"./components/HomePage.vue"'),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n")])]),(0,t._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"})])],-1),p=(0,t.uE)('<p>Here are list of aliases.</p><details class="custom-container details"><summary>Theme components alias</summary><p>Components:</p><ul><li><code>@theme-hope/components/AutoLink</code>: basic link</li><li><code>@theme-hope/components/BreadCrumb</code>: breacrumb</li><li><code>@theme-hope/components/CommonWrapper</code>: basic layout integration</li><li><code>@theme-hope/components/HomeFeatures</code>: homepage features</li><li><code>@theme-hope/components/HomeHero</code>: homepage logo and introduction</li><li><code>@theme-hope/components/HomePage</code>: home page</li><li><code>@theme-hope/components/Icon</code>: icon</li><li><code>@theme-hope/components/MarkdownContent</code>: Markdown content</li><li><code>@theme-hope/components/NormalPage</code>: normal page</li><li><code>@theme-hope/components/PageFooter</code>: page footer</li><li><code>@theme-hope/components/PageNav</code>: page navigation</li><li><code>@theme-hope/components/PageTitle</code>: page title</li><li><code>@theme-hope/components/SkipLink</code>: skip to main content</li></ul><p>Miscellaneous:</p><ul><li><code>@theme-hope/components/icons</code>: theme icons</li><li><code>@theme-hope/components/transitions</code>: theme transitions</li><li><code>@theme-hope/composables</code>: theme Composition API</li><li><code>@theme-hope/utils</code>: theme utility functions</li></ul></details><details class="custom-container details"><summary>Navbar component alias</summary><p>Components:</p><ul><li><code>@theme-hope/module/navbar/components/DropdownLink</code>: dropdown list</li><li><code>@theme-hope/module/navbar/components/LanguageDropdown</code>: language dropdown</li><li><code>@theme-hope/module/navbar/components/NavActions</code>: navbar functions</li><li><code>@theme-hope/module/navbar/components/Navbar</code>: navbar</li><li><code>@theme-hope/module/navbar/components/NavbarBrand</code>: navbar brand information</li><li><code>@theme-hope/module/navbar/components/NavbarLinks</code>: navbar links</li><li><code>@theme-hope/module/navbar/components/NavScreen</code>: navigation screen in mobile view</li><li><code>@theme-hope/module/navbar/components/NavScreenDropdown</code>: mobile view navbar dropdown menu</li><li><code>@theme-hope/module/navbar/components/NavScreenLinks</code>: mobile view navbar links</li><li><code>@theme-hope/module/navbar/components/RepoLink</code>: repository link</li><li><code>@theme-hope/module/navbar/components/ToggleNavbarButton</code>: navbar toggle button</li><li><code>@theme-hope/module/navbar/components/ToggleSidebarButton</code>: sidebar toggle button</li></ul><p>Miscellaneous:</p><ul><li><code>@theme-hope/module/navbar/components/icons</code>: navbar icons</li><li><code>@theme-hope/module/navbar/composables</code>: navbar Composition API</li></ul></details><details class="custom-container details"><summary>Sidebar component alias</summary><p>Components:</p><ul><li><code>@theme-hope/module/sidebar/components/Sidebar</code>: sidebar</li><li><code>@theme-hope/module/sidebar/components/SidebarChild</code>: sidebar link item</li><li><code>@theme-hope/module/sidebar/components/SidebarGroup</code>: sidebar grouping links</li><li><code>@theme-hope/module/sidebar/components/SidebarLinks</code>: sidebar links</li></ul><p>Miscellaneous:</p><ul><li><code>@theme-hope/module/sidebar/composables</code>: sidebar Composition API</li><li><code>@theme-hope/module/sidebar/utils</code>: sidebar utility functions</li></ul></details><details class="custom-container details"><summary>Info module component alias</summary><p>Components:</p><ul><li><code>@theme-hope/module/info/components/AuthorInfo</code>: author information</li><li><code>@theme-hope/module/info/components/CategoryInfo</code>: category information</li><li><code>@theme-hope/module/info/components/DateInfo</code>: date information</li><li><code>@theme-hope/module/info/components/OriginalMark</code>: original mark</li><li><code>@theme-hope/module/info/components/PageInfo</code>: page information</li><li><code>@theme-hope/module/info/components/PageMeta</code>: page meta information</li><li><code>@theme-hope/module/info/components/PageViewInfo</code>: page views information</li><li><code>@theme-hope/module/info/components/ReadingTimeInfo</code>: reading time information</li><li><code>@theme-hope/module/info/components/TagInfo</code>: tag information</li><li><code>@theme-hope/module/info/components/TOC</code>: table of contents</li><li><code>@theme-hope/module/info/components/WordInfo</code>: word information</li></ul><p>Miscellaneous:</p><ul><li><code>@theme-hope/module/blog/components/icons</code>: info icons</li><li><code>@theme-hope/module/blog/composables</code>: info Composables API</li><li><code>@theme-hope/module/blog/utils</code>: info utility functions</li></ul></details><details class="custom-container details"><summary>Blog module component alias</summary><p>Components:</p><ul><li><code>@theme-hope/module/blog/components/ArticleItem</code>: article item</li><li><code>@theme-hope/module/blog/components/ArticleList</code>: article list</li><li><code>@theme-hope/module/blog/components/ArticleType</code>: article type</li><li><code>@theme-hope/module/blog/components/BloggerInfo</code>: blogger info</li><li><code>@theme-hope/module/blog/components/BlogHero</code>: blog homepage logo and introduction</li><li><code>@theme-hope/module/blog/components/BlogHome</code>: blog home page</li><li><code>@theme-hope/module/blog/components/BlogPage</code>: normal blog page</li><li><code>@theme-hope/module/blog/components/CategoryList</code>: Category list</li><li><code>@theme-hope/module/blog/components/InfoList</code>: blog info list</li><li><code>@theme-hope/module/blog/components/InfoPanel</code>: blog info panel</li><li><code>@theme-hope/module/blog/components/Pagination</code>: pagination</li><li><code>@theme-hope/module/blog/components/ProjectPanel</code>: blog homepage project panel</li><li><code>@theme-hope/module/blog/components/SocialMedia</code>: social media links</li><li><code>@theme-hope/module/blog/components/TagList</code>: tag list</li><li><code>@theme-hope/module/blog/components/TimelineItems</code>: timeline items</li><li><code>@theme-hope/module/blog/components/TimelineList</code>: timeline List</li></ul><p>Miscellaneous:</p><ul><li><code>@theme-hope/module/blog/components/icons</code>: blog icons</li><li><code>@theme-hope/module/blog/composables</code>: blog Composables API</li></ul></details><details class="custom-container details"><summary>Encryption module component alias</summary><p>Components:</p><ul><li><code>@theme-hope/module/encrypt/components/GlobalEncrypt</code>: gloabl encrypt wrapper</li><li><code>@theme-hope/module/encrypt/components/LocalEncrypt</code>: local encrypt wrapper</li><li><code>@theme-hope/module/encrypt/components/PasswordModal</code>: password input box</li></ul><p>Miscellaneous:</p><ul><li><code>@theme-hope/module/encrypt/composables</code>: encryption Composition API</li><li><code>@theme-hope/module/encrypt/utils</code>: encryption utility functions</li></ul></details><details class="custom-container details"><summary>Appearance module component alias</summary><ul><li><code>@theme-hope/module/outlook/components/AppearanceMode</code>: theme mode</li><li><code>@theme-hope/module/outlook/components/AppearanceSwitch</code>: theme appearance switch</li><li><code>@theme-hope/module/outlook/components/OutlookButton</code>: appearance button</li><li><code>@theme-hope/module/outlook/components/OutlookSettings</code>: appearance settings</li><li><code>@theme-hope/module/outlook/components/ThemeColor</code>: theme color</li><li><code>@theme-hope/module/outlook/components/ThemeColorPicker</code>: theme color picker</li><li><code>@theme-hope/module/outlook/components/ToggleFullScreenButton</code>: fullscreen toggle button</li></ul><p>Miscellaneous:</p><ul><li><code>@theme-hope/module/outlook/components/icons</code>: appearance icons</li><li><code>@theme-hope/module/outlook/composables</code>: appearance Composition API</li></ul></details><h2 id="using-slots" tabindex="-1"><a class="header-anchor" href="#using-slots" aria-hidden="true">#</a> Using Slots</h2><p>Some components provide slots, in this case, you can directly import the original component when overriding the component, and pass in the content you need through the slot.</p><p>For example, if your site has strong social attributes, and you want to display a comment box on the homepage, you can display it like this:</p>',11),m=(0,t._)("div",{class:"language-typescript ext-ts line-numbers-mode"},[(0,t._)("pre",{class:"language-typescript"},[(0,t._)("code",null,[(0,t._)("span",{class:"token comment"},"// .vuepress/config.ts"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" path "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},'"@vuepress/utils"'),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" defineUserConfig "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},'"vuepress"'),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" hopeTheme "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},'"vuepress-theme-hope"'),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token keyword"},"export"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"default"),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"defineUserConfig"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  theme"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"hopeTheme"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token comment"},"// your theme config here"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n\n  alias"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token comment"},"// Here you can direct aliases to your own components"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token comment"},"// For example, here we change the theme’s home page component to HomePage.vue under user .vuepress/components"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token string-property property"},'"@theme-hope/components/HomePage"'),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(" path"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"resolve"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("\n      __dirname"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token string"},'"./components/HomePage.vue"'),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n")])]),(0,t._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"})])],-1),u=(0,t._)("div",{class:"language-vue ext-vue line-numbers-mode"},[(0,t._)("pre",{class:"language-vue"},[(0,t._)("code",null,[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("template")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("HopeHomePage")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token comment"},"\x3c!-- Introduce comment component using bottom slot --\x3e"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("template")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"#bottom"),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("CommentService")]),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"/>")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("template")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("HopeHomePage")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("template")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("script")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"setup"),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"lang"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("ts"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t._)("span",{class:"token script"},[(0,t._)("span",{class:"token language-javascript"},[(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(" HopeHomePage "),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},'"vuepress-theme-hope/lib/client/components/HomePage"'),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n")])]),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("script")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n")])]),(0,t._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"})])],-1),d=(0,t.uE)("<p>Components that provide slots are as follows:</p><p><strong>theme</strong>:</p><ul><li><code>AutoLink</code>: <code>default</code>, <code>before</code>, <code>after</code></li><li><code>CommonWrapper</code>: <code>default</code>, <code>navbarLeftStart</code>, <code>navbarLeftEnd</code>, <code>navbarCenterStart</code>, <code>navbarCenterEnd</code>, <code>navbarRightStart</code>, <code>navbarRightEnd</code>, <code>navScreenTop</code>, <code>navScreenBottom</code>, <code>sidebar</code>, <code>sidebarTop</code>, <code>sidebarBottom</code></li><li><code>HomeHero</code>: <code>heroImage</code>, <code>heroInfo</code></li><li><code>HomePage</code>: <code>top</code>, <code>center</code>, <code>bottom</code></li><li><code>NormalPage</code>: <code>top</code>, <code>contentBefore</code>, <code>contentAfter</code>, <code>bottom</code></li></ul><p><strong>Navigation Bar</strong>:</p><ul><li><code>DropdownLink</code>: <code>title</code></li><li><code>NavActions</code>: <code>before</code>, <code>after</code></li><li><code>Navbar</code>: <code>left</code>, <code>center</code>, <code>right</code></li><li><code>NavbarBrand</code>: <code>default</code></li><li><code>NavScreen</code>: <code>before</code>, <code>after</code></li><li><code>NavScreenDropdown</code>: <code>before</code>, <code>after</code></li></ul><p><strong>Sidebar</strong>:</p><ul><li><code>Sidebar</code>: <code>top</code>, <code>default</code>, <code>bottom</code></li></ul><p><strong>Blog</strong>:</p><ul><li><code>BlogHero</code>: <code>heroImage</code>, <code>heroInfo</code></li></ul>",9),r={class:"custom-container tip"},k=(0,t._)("p",{class:"custom-container-title"},"Tips",-1),h=(0,t.Uk)("For the corresponding location and function of each slot, please refer to "),_={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/tree/main/packages/theme/src/client/",target:"_blank",rel:"noopener noreferrer"},g=(0,t.Uk)("theme source code"),b=(0,t.Uk)("."),v={},U=(0,n(61220).Z)(v,[["render",function(e,o){const n=(0,t.up)("CodeTabs"),v=(0,t.up)("ExternalLinkIcon");return(0,t.wg)(),(0,t.iD)("div",null,[s,(0,t.kq)(" more "),a,c,(0,t.Wm)(n,{data:[{title:"TS"},{title:"JS"}],"tab-id":"language"},{tab0:(0,t.w5)((({title:e,value:o,isActive:n})=>[l])),tab1:(0,t.w5)((({title:e,value:o,isActive:n})=>[i])),_:1}),p,(0,t.Wm)(n,{data:[{title:"config.ts"},{title:"HomePage.vue"}]},{tab0:(0,t.w5)((({title:e,value:o,isActive:n})=>[m])),tab1:(0,t.w5)((({title:e,value:o,isActive:n})=>[u])),_:1},8,["data"]),d,(0,t._)("div",r,[k,(0,t._)("p",null,[h,(0,t._)("a",_,[g,(0,t.Wm)(v)]),b])])])}]])},61220:(e,o)=>{o.Z=(e,o)=>{const n=e.__vccOpts||e;for(const[e,t]of o)n[e]=t;return n}}}]);