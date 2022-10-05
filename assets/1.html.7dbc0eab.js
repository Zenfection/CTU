import{_ as c,o as e,c as t,e as n}from"./app.82bbadf3.js";const o={},h=n('<h1 id="bai-10-\u0111o-thi-euler" tabindex="-1"><a class="header-anchor" href="#bai-10-\u0111o-thi-euler" aria-hidden="true">#</a> B\xE0i 10: \u0110\u1ED3 th\u1ECB <code>Euler</code></h1><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/08/12-16-19-36-icons8-movie_beginning.png" width="30"> Tham kh\u1EA3o <code>Video</code> sau \u0111\xE2y :</p><div class="videoZen"><iframe src="https://drive.google.com/file/d/1M7upbVV7muYnsqUlRUGuhC3Bc8-R60cA/preview"></iframe></div><h2 id="_1-\u0111inh-nghia" tabindex="-1"><a class="header-anchor" href="#_1-\u0111inh-nghia" aria-hidden="true">#</a> 1.\u0110\u1ECBnh ngh\u0129a</h2><ul><li><p>Chu tr\xECnh \u0111\u01A1n ch\u1EE9a t\u1EA5t c\u1EA3 c\xE1c c\u1EA1nh c\u1EE7a \u0111\u1ED3 th\u1ECB <code>G</code> \u0111\u01B0\u1EE3c g\u1ECDi l\xE0 chu tr\xECnh <code>Euler</code></p></li><li><p>\u0110\u01B0\u1EDDng \u0111i <code>Euler</code> trong <code>G</code> l\xE0 \u0111\u01B0\u1EDDng \u0111i \u0111\u01A1n ch\u1EE9a m\u1ECDi c\u1EA1nh c\u1EE7a <code>G</code></p></li></ul><div class="custom-container tip"><p class="custom-container-title">\u{1F4A1} GHI NH\u1EDA</p><ul><li><p>\u0110\u1ED3 th\u1ECB c\xF3 chu tr\xECnh <code>Euler</code> \u0111\u01B0\u1EE3c g\u1ECDi l\xE0 <code>\u0111\u1ED3 th\u1ECB Euler</code></p></li><li><p>\u0110\u1ED3 th\u1ECB c\xF3 \u0111\u01B0\u1EDDng \u0111i <code>Euler</code> \u0111\u01B0\u1EE3c g\u1ECDi l\xE0 <code>\u0111\u1ED3 th\u1ECB n\u1EEDa Euler</code></p></li></ul><p>==&gt; M\u1ED9t \u0111a \u0111\u1ED3 th\u1ECB li\xEAn th\xF4ng c\xF3 chu tr\xECnh li\xEAn th\xF4ng khi v\xE0 ch\u1EC9 khi m\u1ED7i \u0111\u1EC9nh c\u1EE7a n\xF3 \u0111\u1EC1u c\xF3 b\u1EADc ch\u1EB5n</p></div><div class="custom-container tip"><p class="custom-container-title">\u{1F4A1} H\u1EC6 QU\u1EA2</p><p>\u0110\u1ED3 th\u1ECB v\xF4 h\u01B0\u1EDBng li\xEAn th\xF4ng <code>G</code> l\xE0 n\u1EEDa <code>Euler</code> &lt;=&gt; n\xF3 c\xF3 kh\xF4ng qu\xE1 <code>2</code> \u0111\u1EC9nh b\u1EADc l\u1EBB</p></div><h2 id="_2-thuat-toan" tabindex="-1"><a class="header-anchor" href="#_2-thuat-toan" aria-hidden="true">#</a> 2.Thu\u1EADt to\xE1n</h2><div class="custom-container tip"><p class="custom-container-title">B\u01AF\u1EDAC KH\u1EDEI T\u1EA0O</p><ul><li><p>T\xECm chu tr\xECnh <code>C</code> b\u1EA5t k\u1EF3 trong <code>G</code></p></li><li><p>Lo\u1EA1i kh\u1ECFi <code>G</code> c\xE1c c\u1EA1nh trong chu tr\xECnh <code>C</code></p></li></ul></div><div class="custom-container tip"><p class="custom-container-title">B\u01AF\u1EDAC L\u1EB6P</p><p>Trong khi <code>G</code> kh\xE1c r\u1ED7ng th\u1EF1c hi\u1EC7n c\xE1c b\u01B0\u1EDBc sau:</p><ul><li><p><strong>B\u01B0\u1EDBc 1</strong>: T\xECm chu tr\xECnh <code>C&#39;</code> trong <code>G c\xF3 \u0111\u1EC9nh b\u1EAFt \u0111\u1EA7u thu\u1ED9c </code>C`</p></li><li><p><strong>B\u01B0\u1EDBc 2</strong>: Lo\u1EA1i b\u1ECF kh\u1ECFi <code>G</code> c\xE1c \u0111\u1EC9nh c\xF4 l\u1EADp v\xE0 c\xE1c c\u1EA1nh c\u1EE7a <code>C&#39;</code></p></li><li><p><strong>B\u01B0\u1EDBc 3</strong>: Ch\xE8n v\xE0o <code>C</code> chu tr\xECnh <code>C&#39;</code> \u1EDF v\u1ECB tr\xED th\xEDch h\u1EE3p</p></li></ul><p>K\u1EBFt th\xFAc thu\u1EADt to\xE1n, ta c\xF3 <code>C</code> l\xE0 chu tr\xECnh <code>Euler</code> c\u1EA7n t\xECm</p></div><h2 id="_3-\u0111inh-ly" tabindex="-1"><a class="header-anchor" href="#_3-\u0111inh-ly" aria-hidden="true">#</a> 3.\u0110\u1ECBnh l\xFD</h2><p>\u0110a \u0111\u1ED3 th\u1ECB li\xEAn th\xF4ng c\xF3 \u0111\u01B0\u1EDDng \u0111i <code>Euler</code> nh\u01B0ng kh\xF4ng c\xF3 chu tr\xECnh <code>Euler</code> &lt;=&gt; n\xF3 c\xF3 \u0111\xFAng <code>2</code> \u0111\u1EC9nh b\u1EADc l\u1EBB</p><p><strong>Thu\u1EADt to\xE1n <code>Fleury</code> t\xECm chu tr\xECnh <code>Euler</code>:</strong></p><blockquote><p><strong>B\u01B0\u1EDBc 1</strong>: Ch\u1ECDn 1 \u0111\u1EC9nh <code>u</code> tu\u1EF3 \xFD \u0111\u1EC3 b\u1EAFt \u0111\u1EA7u</p><p><strong>B\u01B0\u1EDBc 2</strong>: Ch\u1ECDn m\u1ED9t c\u1EA1nh \u0111\u1EC3 \u0111i ti\u1EBFp, <strong>ch\u1EC9 ch\u1ECDn c\u1EA1nh c\u1EA7u khi n\xE0o kh\xF4ng c\xF3 s\u1EF1 l\u1EF1a ch\u1ECDn kh\xE1c</strong></p><p><strong>B\u01B0\u1EDBc 3</strong>: \u0110\xE1nh d\u1EA5u c\u1EA1nh \u0111\xE3 \u0111i qua cho bi\u1EBFt ta kh\xF4ng th\u1EC3 quay l\u1EA1i c\u1EA1nh \u0111\xF3</p><p><strong>B\u01B0\u1EDBc 4</strong>: \u0110i theo c\u1EA1nh \u0111\xF3 \u0111\u1EBFn \u0111\u1EC9nh ti\u1EBFp theo</p><p><strong>B\u01B0\u1EDBc 5</strong>: L\u1EB7p l\u1EA1i b\u01B0\u1EDBc 2 cho \u0111\u1EBFn khi n\xE0o m\u1ECDi c\u1EA1nh \u0111\xEAu2 \u0111\xE3 \u0111\u01B0\u1EE3c duy\u1EC7t</p></blockquote><h2 id="_4-bai-tap" tabindex="-1"><a class="header-anchor" href="#_4-bai-tap" aria-hidden="true">#</a> 4.B\xE0i t\u1EADp</h2><div class="videoZen"><iframe src="https://drive.google.com/file/d/1qJRCHM72GQaX93cz4xqym75THyVk-y-3/preview"></iframe></div>',16),i=[h];function d(r,a){return e(),t("div",null,i)}const s=c(o,[["render",d],["__file","1.html.vue"]]);export{s as default};