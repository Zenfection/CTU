import{_ as t,o as n,c as i,b as e,d as o,e as c}from"./app.82bbadf3.js";const s={},h=e("h1",{id:"lab4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#lab4","aria-hidden":"true"},"#"),o(" Lab4")],-1),r=e("h2",{id:"_1-cau-hinh-ipv6-phan-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-cau-hinh-ipv6-phan-1","aria-hidden":"true"},"#"),o(" 1. C\u1EA5u h\xECnh IPv6 - Ph\u1EA7n 1")],-1),a=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"\u{1F4A1} GUIDE"),e("div",{class:"videoZen"},[e("iframe",{src:"https://www.youtube.com/embed/BdsIahtrWIA?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})])],-1),d=c('<blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png" width="35"> S\u1EED d\u1EE5ng file <code>Lab04-01-IPv6 Configuration Part 1.pkt</code>, th\u1EF1c hi\u1EC7n:</p><p><code>IPv4</code> \u0111\u01B0\u1EE3c c\u1EA5u h\xECnh th\xE0nh c\xF4ng tr\xEAn c\xE1c thi\u1EBFt b\u1ECB. Th\u1EF1c hi\u1EC7n c\u1EA5u h\xECnh <code>IPv6</code> \u0111\u1EC3 h\u1ED7 tr\u1EE3 song song <code>IPv4</code> v\xE0 <code>IPv6</code></p><ul><li><p>B\u1EADt <code>IPv6</code> routing tr\xEAn <code>R1</code>.</p></li><li><p>C\u1EA5u h\xECnh \u0111\u1ECBa ch\u1EC9 <code>IPv6</code> ph\xF9 h\u1EE3p cho <code>R1</code>. Hi\u1EC3n th\u1ECB <code>running-configuration</code> c\u1EE7a <code>R1</code> (<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/02/15-13-33-44-icons8-screenshot.png" width="30"> <em>Ch\u1EE5p h\xECnh minh ho\u1EA1</em>)</p></li><li><p>C\u1EA5u h\xECnh \u0111\u1ECBa ch\u1EC9 <code>IPv6</code> c\u1EE7a c\xE1c <code>PC</code></p><div class="custom-container warning"><p class="custom-container-title">\u26A0\uFE0F L\u01AFU \xDD</p><p>C\u1EA5u h\xECnh \u0111\u1ECBa ch\u1EC9 <code>default gateway</code> ph\xF9 h\u1EE3p</p></div></li><li><p>Ki\u1EC3m tra n\u1ED1i k\u1EBFt m\u1EA1ng gi\u1EEFa c\xE1c <code>PC</code> (<code>IPv4</code> v\xE0 <code>IPv6</code>) b\u1EB1ng l\u1EC7nh <code>ping</code> (<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/02/15-13-33-44-icons8-screenshot.png" width="30"> <em>Ch\u1EE5p h\xECnh minh ho\u1EA1</em>)</p></li></ul></blockquote><h2 id="_2-cau-hinh-ipv6-phan-2" tabindex="-1"><a class="header-anchor" href="#_2-cau-hinh-ipv6-phan-2" aria-hidden="true">#</a> 2. C\u1EA5u h\xECnh IPv6 - Ph\u1EA7n 2</h2>',2),l=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"\u{1F4A1} GUIDE"),e("div",{class:"videoZen"},[e("iframe",{src:"https://www.youtube.com/embed/Zfhpd7dl6QI?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})])],-1),p=c('<blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png" width="35"> S\u1EED d\u1EE5ng file <code>Lab04-02-IPv6 Configuration Part 2.pkt</code>, th\u1EF1c hi\u1EC7n:</p><ul><li><p>S\u1EED d\u1EE5ng <code>EUI-64</code> \u0111\u1EC3 c\u1EA5u h\xECnh \u0111\u1ECBa ch\u1EC9 <code>IPv6 </code>cho <strong>interface G0/1</strong> c\u1EE7a router <code>R1/R2</code>.</p></li><li><p>C\u1EA5u h\xECnh \u0111\u1ECBa ch\u1EC9 <code>IPv6</code> cho c\xE1c <code>PC</code>, l\u01B0u \xFD c\u1EA5u h\xECnh \u0111\u1ECBa ch\u1EC9 <code>default gateway</code> ph\xF9 h\u1EE3p.</p></li><li><p>B\u1EADt <code>IPv6</code> cho <strong>interface G0/0</strong> c\u1EE7a router <code>R1/R2</code> m\xE0 kh\xF4ng c\u1EA7n c\u1EA5u h\xECnh \u0111\u1ECBa ch\u1EC9 c\u1EE5 th\u1EC3. Hi\u1EC3n th\u1ECB <code>running-configuration</code> c\u1EE7a <code>R1</code> v\xE0 <code>R2</code> (<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/02/15-13-33-44-icons8-screenshot.png" width="30"> <em>Ch\u1EE5p h\xECnh minh ho\u1EA1</em>)</p></li><li><p>C\u1EA5u h\xECnh v\u1EA1ch \u0111\u01B0\u1EDDng t\u0129nh cho router <code>R1/R2</code> cho <code>PC1</code> ping <code>PC2</code> (<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/02/15-13-33-44-icons8-screenshot.png" width="30"> <em>Ch\u1EE5p h\xECnh minh ho\u1EA1</em>)</p></li></ul></blockquote><h2 id="_3-xem-vach-\u0111uong-tinh-ipv6" tabindex="-1"><a class="header-anchor" href="#_3-xem-vach-\u0111uong-tinh-ipv6" aria-hidden="true">#</a> 3. Xem v\u1EA1ch \u0111\u01B0\u1EDDng t\u0129nh IPv6</h2>',2),u=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"\u{1F4A1} GUIDE"),e("div",{class:"videoZen"},[e("iframe",{src:"https://www.youtube.com/embed/WSBEVFANMmc?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})])],-1),m=c('<blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png" width="35"> S\u1EED d\u1EE5ng file <code>Lab04-03-IPv6 Static Routes.pkt</code>, th\u1EF1c hi\u1EC7n:</p><p><code>IPv6</code> \u0111\xE3 \u0111\u01B0\u1EE3c c\u1EA5u h\xECnh th\xE0nh c\xF4ng tr\xEAn c\xE1c <strong>routers</strong>. C\xE1c n\u1ED1i k\u1EBFt <strong>serial</strong> ch\u1EC9 s\u1EED d\u1EE5ng \u0111\u1ECBa ch\u1EC9 <code>link-local</code>.</p><ul><li><p>B\u1EADt <code>IPv6 routing</code> tr\xEAn c\xE1c <strong>router</strong>.</p></li><li><p>S\u1EED d\u1EE5ng <code>SLAAC</code> \u0111\u1EC3 c\u1EA5u h\xECnh \u0111\u1ECBa ch\u1EC9 <code>IPv6</code> cho c\xE1c <code>PC</code>. \u0110\u1ECBa ch\u1EC9 n\xE0o \u0111\xE3 \u0111\u01B0\u1EE3c s\u1EED d\u1EE5ng? (<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/02/15-13-33-44-icons8-screenshot.png" width="30"> <em>Ch\u1EE5p h\xECnh minh ho\u1EA1</em>)</p></li><li><p>C\u1EA5u h\xECnh v\u1EA1ch \u0111\u01B0\u1EDDng t\u0129nh cho c\xE1c <strong>router</strong> \u0111\u1EC3 <code>PC1</code> <strong>ping</strong> t\u1EDBi \u0111\u01B0\u1EE3c <code>PC2</code> (<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/02/15-13-33-44-icons8-screenshot.png" width="30"> <em>Ch\u1EE5p h\xECnh minh ho\u1EA1</em>)</p><div class="custom-container warning"><p class="custom-container-title">\u26A0\uFE0F L\u01AFU \xDD</p><p>\u0110\u01B0\u1EDDng m\u1EA1ng qua R2 \u0111\u01B0\u1EE3c s\u1EED d\u1EE5ng nh\u01B0 \u0111\u01B0\u1EDDng d\u1EF1 ph\xF2ng.</p></div></li><li><p>Hi\u1EC3n th\u1ECB <code>running-configuration</code> c\u1EE7a c\xE1c <strong>router</strong> (<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/02/15-13-33-44-icons8-screenshot.png" width="30"> <em>Ch\u1EE5p h\xECnh minh ho\u1EA1</em>)</p></li></ul></blockquote><h2 id="_4-wireless-lan" tabindex="-1"><a class="header-anchor" href="#_4-wireless-lan" aria-hidden="true">#</a> 4. Wireless LAN</h2>',2),g=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"\u{1F4A1} GUIDE"),e("div",{class:"videoZen"},[e("iframe",{src:"https://www.youtube.com/embed/Il8ev78fcqw?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})])],-1),v=c(`<blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png" width="35"> S\u1EED d\u1EE5ng file <code>Lab04-04-Wireless LANs.pkt,</code>, th\u1EF1c hi\u1EC7n:</p><ul><li><p>S\u1EED d\u1EE5ng tr\xECnh duy\u1EC7t web tr\xEAn <code>PC1</code> truy c\u1EADp (<code>HTTPS</code>) v\xE0o <code>GUI</code> c\u1EE7a <code>WLC1</code></p><div class="language-textile ext-textile line-numbers-mode"><pre class="language-textile"><code>Username: admin
Password: Cisco123
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>L\xE0m quen v\u1EDBi giao di\u1EC7n <code>GUI</code> c\u1EE7a <code>WLC</code></p></li><li><p>C\u1EA5u h\xECnh d<strong>ynamic interface</strong> cho <strong>Internal &amp; Guest WLANs</strong> (<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/02/15-13-33-44-icons8-screenshot.png" width="30"> <em>Ch\u1EE5p h\xECnh minh ho\u1EA1</em>)</p></li><li><p>T\u1EA1o <strong>Internal &amp; Guest WLANs</strong> s\u1EED d\u1EE5ng <code>WPA2+PSK</code> (<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/02/15-13-33-44-icons8-screenshot.png" width="30"> <em>Ch\u1EE5p h\xECnh minh ho\u1EA1</em>)</p></li><li><p>Th\xEAm 1 thi\u1EBFt b\u1ECB <strong>wireless client</strong> v\xE0 k\u1EBFt n\u1ED1i v\u1EDBi <strong>AP</strong>. Thi\u1EBFt b\u1ECB c\xF3 th\u1EC3 <code>ping</code> t\u1EDBi <code>PC1</code> kh\xF4ng ? (<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/02/15-13-33-44-icons8-screenshot.png" width="30"> <em>Ch\u1EE5p h\xECnh minh ho\u1EA1</em>)</p></li></ul></blockquote>`,1),b=[h,r,a,d,l,p,u,m,g,v];function w(f,I){return n(),i("div",null,b)}const _=t(s,[["render",w],["__file","4.html.vue"]]);export{_ as default};
