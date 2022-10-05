import{_ as t,o as n,c as i,b as e,d as o,e as c}from"./app.82bbadf3.js";const d={},a=e("h1",{id:"lab3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#lab3","aria-hidden":"true"},"#"),o(" Lab3")],-1),r=e("h2",{id:"_1-cau-hinh-vlan",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-cau-hinh-vlan","aria-hidden":"true"},"#"),o(" 1. C\u1EA5u h\xECnh VLAN")],-1),h=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"\u{1F4A1} GUIDE"),e("div",{class:"videoZen"},[e("iframe",{src:"https://www.youtube.com/embed/-tq7f3xtyLQ?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})])],-1),s=c('<blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png" width="35"> S\u1EED d\u1EE5ng file <code>Lab03-01-VLANs.pkt</code>, th\u1EF1c hi\u1EC7n:</p><ul><li><p>C\u1EA5u h\xECnh \u0111\u1ECBa ch\u1EC9 <code>IP</code> v\xE0 m\u1EB7t n\u1EA1 m\u1EA1ng cho c\xE1c PC. \u0110\u1EB7t <code>gateway</code> l\xE0 \u0111\u1ECBa ch\xED kh\u1EA3 d\u1EE5ng cu\u1ED1i c\xF9ng c\u1EE7a <code>subnet</code></p></li><li><p>Ta\u0323o 3 n\xF4\u0301i k\xEA\u0301t gi\u01B0\u0303a <code>R1</code> v\xE0 <code>SW1</code>. C\xE2\u0301u h\xECnh m\xF4\u0303i <code>interface</code> cu\u0309a <code>R1</code> l\xE0 <code>gateway</code> cu\u0309a 1 <code>VLAN</code> (\u0111i\u0323a chi\u0309 <code>IP</code> cu\u0309a <code>interface</code> l\xE0 \u0111i\u0323a chi\u0309 <code>gateway</code> cu\u0309a <code>subnet</code>)</p></li><li><p>C\xE2\u0301u h\xECnh <code>VLAN</code> cho c\xE1c <code>interface</code> cu\u0309a <code>SW1</code> ph\xF9 h\u01A1\u0323p so\u031B \u0111\xF4\u0300 ma\u0323ng, k\xEA\u0309 ca\u0309 <code>interface</code> n\xF4\u0301i k\xEA\u0301t t\u01A1\u0301i <code>R1</code>. \u0110\u1EA1\u0306t t\xEAn cho c\xE1c <code>VLAN</code> (<code>Engineering</code>, <code>HR</code>, <code>Sales</code>).</p></li><li><p>Ping gi\u01B0\u0303a c\xE1c PC \u0111\xEA\u0309 ki\xEA\u0309m tra n\xF4\u0301i k\xEA\u0301t (<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/02/15-13-33-44-icons8-screenshot.png" width="30"> <em>Ch\u1EE5p h\xECnh minh ho\u1EA1</em>)</p></li><li><p>Hi\xEA\u0309n thi\u0323 running-configuration cu\u0309a SW1 v\xE0 R1 (<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/02/15-13-33-44-icons8-screenshot.png" width="30"> <em>Ch\u1EE5p h\xECnh minh ho\u1EA1</em>)</p></li></ul></blockquote><h2 id="_2-roas" tabindex="-1"><a class="header-anchor" href="#_2-roas" aria-hidden="true">#</a> 2. ROAS</h2>',2),u=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"\u{1F4A1} GUIDE"),e("div",{class:"videoZen"},[e("iframe",{src:"https://www.youtube.com/embed/iRkFE_lpYgc?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})])],-1),l=c('<blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png" width="35"> S\u01B0\u0309 du\u0323ng file <code>Lab03-02 - ROAS.pkt</code>, th\u01B0\u0323c hi\u1EB9\u0302n:</p><ul><li><p>C\xE2\u0301u h\xECnh <code>VLAN</code> cho c\xE1c <code>interface</code> cu\u0309a c\xE1c switch <code>SW1</code>, <code>SW2</code> ph\xF9 h\u01A1\u0323p v\u01A1\u0301i so\u031B \u0111\xF4\u0300 ma\u0323ng.</p></li><li><p>C\xE2\u0301u h\xECnh n\xF4\u0301i k\xEA\u0301t gi\u01B0\u0303a <code>SW1</code> v\xE0 <code>SW2</code> h\xF4\u0303 tr\u01A1\u0323 <code>trunking</code> cho c\xE1c <code>VLAN</code> c\xE2\u0300n thi\xEA\u0301t. C\xE2\u0301u h\xECnh c\xE1c <code>VLAN</code> kh\xF4ng d\xF9ng l\xE0 <code>native VLAN</code>. \u0110a\u0309m ba\u0309o l\xE0 c\xE1c <code>VLAN</code> c\xE2\u0300n thi\xEA\u0301t \u0111\xEA\u0300u \u0111u\u031B\u01A1\u0323c c\xE2\u0301u h\xECnh.</p></li><li><p>C\xE2\u0301u h\xECnh n\xF4\u0301i k\xEA\u0301t gi\u01B0\u0303a <code>SW2</code> v\xE0 <code>R1</code> s\u01B0\u0309 du\u0323ng router on a stick (<code>ROAS</code>). G\xE1n \u0111i\u0323a chi\u0309 kha\u0309 du\u0323ng cu\xF4\u0301i c\xF9ng cu\u0309a m\xF4\u0303i <code>subnet</code> cho c\xE1c <code>subinterface</code> cu\u0309a<code>R1</code>.</p></li><li><p>Ki\xEA\u0309m tra n\xF4\u0301i k\xEA\u0301t gi\u01B0\u0303a c\xE1c <code>PC</code> b\u0103\u0300ng l\u1EB9\u0302nh <code>ping</code> (chu\u0323p h\xECnh minh ho\u0323a) (<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/02/15-13-33-44-icons8-screenshot.png" width="30"> <em>Ch\u1EE5p h\xECnh minh ho\u1EA1</em>)</p></li><li><p>Hi\xEA\u0309n thi\u0323 <strong>running-configuration</strong> cu\u0309a <code>SW1</code> v\xE0 <code>R1</code> (chu\u0323p h\xECnh minh ho\u0323a) (<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/02/15-13-33-44-icons8-screenshot.png" width="30"> <em>Ch\u1EE5p h\xECnh minh ho\u1EA1</em>)</p></li></ul></blockquote><h2 id="_3-multiplayer-switching" tabindex="-1"><a class="header-anchor" href="#_3-multiplayer-switching" aria-hidden="true">#</a> 3. Multiplayer Switching</h2>',2),p=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"\u{1F4A1} GUIDE"),e("div",{class:"videoZen"},[e("iframe",{src:"https://www.youtube.com/embed/MQcCr3QW1vE",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})])],-1),g=c('<blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png" width="35"> S\u01B0\u0309 du\u0323ng file <code>Lab03-03 - Multilayer Switching.pkt</code>, th\u01B0\u0323c hi\u1EB9\u0302n:</p><ul><li><p>C\xE2\u0301u thi\xEA\u0301t trong so\u031B \u0111\xF4\u0300 ma\u0323ng \u0111\xE3 \u0111u\u031B\u01A1\u0323c c\xE2\u0301u h\xECnh gi\xF4\u0301ng nhu\u031B <strong>C\xE2u 2</strong> trong b\xE0i th\u01B0\u0323c h\xE0nh. Trong \u0111\xF3 c\xE1c PC \u0111\xE3 \u0111u\u031B\u01A1\u0323c c\xE2\u0301u h\xECnh <code>VLAN</code> ph\xF9 h\u01A1\u0323p, n\xF4\u0301i k\xEA\u0301t gi\u01B0\u0303a <code>SW1</code> v\xE0 <code>SW2</code> \u0111\xE3 \u0111u\u031B\u01A1\u0323c trunking ph\xF9 h\u01A1\u0323p. <code>R1</code> v\xE0 <code>SW2</code> \u0111u\u031B\u01A1\u0323c n\xF4\u0301i k\xEA\u0301t s\u01B0\u0309 du\u0323ng <code>ROAS</code>.</p></li><li><p>Thay th\xEA\u0301 c\xE2\u0301u h\xECnh <code>ROAS</code> cu\u0309a n\xF4\u0301i k\xEA\u0301t <code>R1-SW2</code> th\xE0nh n\xF4\u0301i k\xEA\u0301t <code>point-to-point</code> <strong>layer 3</strong>. C\xE2\u0301u h\xECnh <strong>default route</strong> cho <code>SW2</code> v\u01A1\u0301i <strong>next-hop</strong> l\xE0 <strong>interface</strong> <code>G0/0</code> cu\u0309a <code>R1</code>.</p></li><li><p>C\xE2\u0301u h\xECnh c\xE1c <code>SVI</code> cho m\xF4\u0303i <code>VLAN</code> tr\xEAn <code>SW2</code>. G\xE1n \u0111i\u0323a chi\u0309 <code>IP</code> kha\u0309 du\u0323ng cu\xF4\u0301i c\xF9ng cu\u0309a subnet cho m\xF4\u0303i <code>SVI</code>.</p></li><li><p>Ki\xEA\u0309m tra n\xF4\u0301i k\xEA\u0301t gi\u01B0\u0303a c\xE1c <code>PC</code> \u01A1\u0309 c\xE1c <code>VLAN</code> b\u0103\u0300ng l\u1EB9\u0302nh <code>ping</code> (<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/02/15-13-33-44-icons8-screenshot.png" width="30"> <em>Ch\u1EE5p h\xECnh minh ho\u1EA1</em>)</p></li><li><p>C\xE2\u0301u h\xECnh sao cho c\xE1c PC c\xF3 th\xEA\u0309 ping t\u01A1\u0301i Internet (\u0111i\u0323a chi\u0309 <code>1.1.1.1</code>) (<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/02/15-13-33-44-icons8-screenshot.png" width="30"> <em>Ch\u1EE5p h\xECnh minh ho\u1EA1</em>)</p></li><li><p>Hi\xEA\u0309n thi\u0323 running-configuration <code>SW2</code> v\xE0 <code>R1</code> (<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/02/15-13-33-44-icons8-screenshot.png" width="30"> <em>Ch\u1EE5p h\xECnh minh ho\u1EA1</em>)</p></li></ul></blockquote><h2 id="_4-vach-\u0111uong-\u0111ong-tu-su-dung-giao-thuc-ospf" tabindex="-1"><a class="header-anchor" href="#_4-vach-\u0111uong-\u0111ong-tu-su-dung-giao-thuc-ospf" aria-hidden="true">#</a> 4. V\u1EA1ch \u0111\u01B0\u1EDDng \u0111\u1ED9ng t\u1EEB s\u1EED d\u1EE5ng giao th\u1EE9c OSPF</h2>',2),m=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"\u{1F4A1} GUIDE"),e("div",{class:"videoZen"},[e("iframe",{src:"https://www.youtube.com/embed/LeLRWjfylcs?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})])],-1),b=c('<blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png" width="35"> S\u01B0\u0309 du\u0323ng file <code>Lab03-04 - OSPF Part 1.pkt</code>, th\u01B0\u0323c hi\u1EB9\u0302n:</p><ul><li><p>C\xE2\u0301u h\xECnh <code>hostname</code> v\xE0 \u0111i\u0323a chi\u0309 <code>IP</code> cho m\xF4\u0303i thi\xEA\u0301t bi\u0323 trong so\u031B \u0111\xF4\u0300 ma\u0323ng. B\u1EA1\u0302t c\xE1c interface cu\u0309a c\xE1c router l\xEAn. (Kh\xF4ng c\xE2\u0300n c\xE2\u0301u h\xECnh router <code>ISPR1</code>)</p></li><li><p>C\xE2\u0301u h\xECnh 1 <code>loopback</code> interface tr\xEAn m\xF4\u0303i <code>router</code> (<code>1.1.1.1/32</code> cho <code>R1</code>, <code>2.2.2.2/32</code> cho <code>R2</code> ...)</p></li><li><p>C\xE2\u0301u h\xECnh <code>OSPF</code> tr\xEAn m\xF4\u0303i <code>router</code>:</p><ul><li><p>B\u1EA1\u0302t <code>OSPF</code> tr\xEAn m\xF4\u0303i interface (bao g\xF4\u0300m ca\u0309 <strong>loopback interface</strong>), kh\xF4ng c\xE2\u0300n c\xE2\u0301u h\xECnh <code>OSPF</code> cho n\xF4\u0301i k\xEA\u0301t t\u01B0\u0300 <code>R1</code> \u0111\xEA\u0301n <code>ISPR1</code>.</p></li><li><p>C\xE2\u0301u h\xECnh <strong>passive interface</strong> ph\xF9 h\u01A1\u0323p (bao g\xF4\u0300m ca\u0309 <strong>loopback interface</strong>)</p></li></ul></li><li><p>C\xE2\u0301u h\xECnh <code>R1</code> l\xE0 (<code>ASBR</code> Autonomous System Boundary Router) \u0111\xEA\u0309 qua\u0309ng b\xE1 <code>default route</code> t\u01A1\u0301i c\xE1c <code>router</code> kh\xE1c.</p></li><li><p>Hi\xEA\u0309n thi\u0323 <code>routing table</code> cu\u0309a c\xE1c <code>router</code> (<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/02/15-13-33-44-icons8-screenshot.png" width="30"> <em>Ch\u1EE5p h\xECnh minh ho\u1EA1</em>)</p></li></ul></blockquote><h2 id="_5-vach-\u0111uong-\u0111ong-su-dung-giao-thuc-eigrp" tabindex="-1"><a class="header-anchor" href="#_5-vach-\u0111uong-\u0111ong-su-dung-giao-thuc-eigrp" aria-hidden="true">#</a> 5. V\u1EA1ch \u0111\u01B0\u1EDDng \u0111\u1ED9ng s\u1EED d\u1EE5ng giao th\u1EE9c EIGRP</h2>',2),f=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"\u{1F4A1} GUIDE"),e("div",{class:"videoZen"},[e("iframe",{src:"https://www.youtube.com/embed/ffnJ5oBIObY?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})])],-1),w=c('<blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/07-22-36-06-icons8-questions.png" width="35"> S\u01B0\u0309 du\u0323ng file <code>Lab03-05 - EIGRP Configuration.pkt</code>, th\u01B0\u0323c hi\u1EB9\u0302n:</p><ul><li><p>C\xE2\u0301u h\xECnh <code>hostname</code> v\xE0 \u0111i\u0323a chi\u0309 <code>IP</code> cho m\xF4\u0303i thi\xEA\u0301t bi\u0323 trong so\u031B \u0111\xF4\u0300 ma\u0323ng. B\u1EA1\u0302t c\xE1c <code>interface</code> cu\u0309a c\xE1c <code>router</code> l\xEAn.</p></li><li><p>C\xE2\u0301u h\xECnh 1 <strong>loopback interface</strong> tr\xEAn m\xF4\u0303i <code>router</code> (<code>1.1.1.1/32</code> cho <code>R1</code>, <code>2.2.2.2/32</code> cho <code>R2</code>.....)</p></li><li><p>C\xE2\u0301u h\xECnh <code>EIGRP</code> tr\xEAn m\xF4\u0303i router:</p><ul><li><p>T\u0103\u0301t ch\u01B0\u0301c na\u0306ng <strong>auto-summary</strong></p></li><li><p>B\u1EA1\u0302t <code>EIGR</code>P tr\xEAn m\xF4\u0303i <strong>interface</strong> (bao g\xF4\u0300m ca\u0309 <strong>loopback interface</strong>)</p></li><li><p>C\xE2\u0301u h\xECnh <strong>passive interface</strong> ph\xF9 h\u01A1\u0323p (bao g\xF4\u0300m ca\u0309 <strong>loopback interface</strong>)</p></li></ul></li><li><p><strong>KH\xD4NG C\xC2\u0300N</strong> c\xE2\u0301u h\xECnh <code>R1</code> h\xF4\u0303 tr\u01A1\u0323 <strong>unequal-cost</strong> <strong>load-balancing</strong> khi g\u01B0\u0309i d\u01B0\u0303 li\u1EB9\u0302u t\u01A1\u0301i \u0111i\u0323a chi\u0309 <code>192.168.4.0/24</code></p></li><li><p>Hi\xEA\u0309n thi\u0323 <strong>routing table</strong> cu\u0309a c\xE1c <strong>router</strong> (<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2022/02/15-13-33-44-icons8-screenshot.png" width="30"> <em>Ch\u1EE5p h\xECnh minh ho\u1EA1</em>)</p></li></ul></blockquote>',1),k=[a,r,h,s,u,l,p,g,m,b,f,w];function _(v,S){return n(),i("div",null,k)}const y=t(d,[["render",_],["__file","3.html.vue"]]);export{y as default};
