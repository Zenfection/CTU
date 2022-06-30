import{_ as c,r as o,o as i,c as r,a as e,d as a,e as t,b as n}from"./app.cafd9fae.js";const d={},h=t('<h1 id="buoi-4-cau-hinh-mang-va-cai-\u0111at-ssh-ftp-web-server" tabindex="-1"><a class="header-anchor" href="#buoi-4-cau-hinh-mang-va-cai-\u0111at-ssh-ftp-web-server" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/26-12-06-18-NETWORK.png"> Bu\u1ED5i 4 - C\u1EA5u h\xECnh m\u1EA1ng v\xE0 c\xE0i \u0111\u1EB7t <code>SSH</code>,<code>FTP</code>,<code>Web Server</code></h1><div class="custom-container tip"><p class="custom-container-title">\u{1F4DD} \u0110\u1EC0 B\xC0I</p><div class="pdfZen"><iframe src="https://drive.google.com/file/d/1Jkro8ZLSjCcYqEGPtAXjjgEygxOOF92R/preview"></iframe></div></div><h2 id="_1-cai-\u0111at-centos" tabindex="-1"><a class="header-anchor" href="#_1-cai-\u0111at-centos" aria-hidden="true">#</a> 1. C\xE0i \u0111\u1EB7t CentOS</h2><h3 id="cau-1-1" tabindex="-1"><a class="header-anchor" href="#cau-1-1" aria-hidden="true">#</a> C\xE2u 1.1</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> Th\u1EF1c hi\u1EC7n c\xE0i \u0111\u1EB7t <code>CentOS 6</code> (<em>ho\u1EB7c <code>CentOS 7</code>, <code>8</code></em>) v\xE0o m\xE1y t\xEDnh c\xE1 nh\xE2n (<em>ho\u1EB7c m\xE1y \u1EA3o</em>) c\u1EE7a b\u1EA1n v\xE0 th\u1EF1c hi\u1EC7n l\u1EC7nh <code>ifconfig -a</code> \u0111\u1EC3 xem c\u1EA5u h\xECnh m\u1EA1ng hi\u1EC7n t\u1EA1i c\u1EE7a m\xE1y (<em>Ch\u1EE5p m\xE0n h\xECnh minh ho\u1EA1</em><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png" alt="icons8screenshotpng">)</p></blockquote>',5),p=n("Link file ISO "),l={href:"https://www.centos.org/download/",target:"_blank",rel:"noopener noreferrer"},u=n("CentOS 8"),m=t(`<p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-22-26-45-Screenshot from 2021-05-03 17-24-28.png" alt="Screenshot from 2021-05-03 17-24-28.png"></p><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-22-27-08-Screenshot from 2021-05-03 17-24-37.png" alt="Screenshot from 2021-05-03 17-24-37.png"></p><h2 id="_2-cau-hinh-mang" tabindex="-1"><a class="header-anchor" href="#_2-cau-hinh-mang" aria-hidden="true">#</a> 2.C\u1EA5u h\xECnh m\u1EA1ng</h2><div class="custom-container tip"><p class="custom-container-title">\u{1F4A1} FACT</p><p>M\u1ED9t m\xE1y t\xEDnh \u0111\u01B0\u1EE3c k\u1EBFt n\u1ED1i t\u1EDBi m\u1EA1ng c\u1EA7n ph\u1EA3i \u0111\u01B0\u1EE3c thi\u1EBFt l\u1EADp c\xE1c th\xF4ng s\u1ED1 cho ph\xF9 h\u1EE3p. C\xE1c th\xF4ng s\u1ED1 n\xE0y \u0111\u01B0\u1EE3c l\u01B0u l\u1EA1i trong file c\u1EA5u h\xECnh trong <code>Linux</code>.</p></div><p>Th\u1EF1c hi\u1EC7n c\xE1c c\xF4ng vi\u1EC7c sau (<em>Ch\u1EE5p m\xE0n h\xECnh minh ho\u1EA1</em><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png" alt="icons8screenshotpng">)</p><h3 id="cau-2-1" tabindex="-1"><a class="header-anchor" href="#cau-2-1" aria-hidden="true">#</a> C\xE2u 2.1</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> \u0110\u1ED5i c\u1EA5u h\xECnh <code>card m\u1EA1ng</code> c\u1EE7a m\xE1y \u1EA3o sang <code>Bridged Adapter</code></p><ul><li><p>Kh\u1EAFc ph\u1EE5c l\u1ED7i <code>card m\u1EA1ng</code> ch\u1EC9 hi\u1EC3n th\u1ECB <code>&quot;not selected&quot;</code> + <code>&quot;no bridged network adapter is current selected&quot;</code>.</p><p>Click chu\u1ED9t ph\u1EA3i v\xE0o <code>card m\u1EA1ng</code> c\u1EE7a m\xE1y <code>Window 10</code> \u21E8 ch\u1ECDn <code>&quot;Open NetWork and Internet Settings&quot;</code> \u21E8<code>&quot;Change adapter options&quot;</code> \u21E8 Click chu\u1ED9t ph\u1EA3i v\xE0o <code>card m\u1EA1ng</code> \u21E8 <code>Properties</code> \u21E8 Click ch\u1ECDn <code>Vitural NDIS6 Bridged Networking</code> \u21E8 Ch\u1ECDn <code>&quot;OK&quot;</code></p><img src="https://lh5.googleusercontent.com/fG-BULssU2BjjHpdtCNQ2CJMxp2LKr556uvdybQ7FK-XwSSLjfjuRakjMgRXNCsc3_L2fbgsxC7ZSsN3fQXu0m2GG1nWxKSSAxU89mUyLqHIbPdQzv5PdoJ0jdYN_Af9jSJ7T8i8" title="" alt="" width="332"></li></ul></blockquote><p>==&gt; S\u1EED d\u1EE5ng m\xE1y th\u1EADt n\xEAn kh\xF4ng l\xE0m c\xE2u n\xE0y.</p><h3 id="cau-2-2" tabindex="-1"><a class="header-anchor" href="#cau-2-2" aria-hidden="true">#</a> C\xE2u 2.2</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> C\u1EA7u h\xECnh k\u1EBFt n\u1ED1i <code>Ethernet</code> (<em>IP,net mask...</em>)</p><p><code>nano /etc/sysconfig/network-scripts/ifcfg-XXX</code></p><p>(<em>XXX l\xE0 t\xEAn giao ti\u1EBFp m\u1EA1ng, v\xED d\u1EE5: <code>eth0</code></em>)</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">DEVICE</span><span class="token operator">=</span><span class="token operator">&lt;</span>t\xEAn card m\u1EA1ng<span class="token operator">&gt;</span>
<span class="token assign-left variable">IPADDR</span><span class="token operator">=</span><span class="token operator">&lt;</span>\u0111\u1ECBa ch\u1EC9 IP<span class="token operator">&gt;</span>
<span class="token assign-left variable">NETMASK</span><span class="token operator">=</span><span class="token operator">&lt;</span>m\u1EB7t n\u1EA1 m\u1EA1ng<span class="token operator">&gt;</span>
<span class="token assign-left variable">GATEWAY</span><span class="token operator">=</span><span class="token operator">&lt;</span>\u0111\u1ECBa ch\u1EC9 c\u1EE7a GATEWAY<span class="token operator">&gt;</span>
<span class="token assign-left variable">DNS1</span><span class="token operator">=</span><span class="token operator">&lt;</span>\u0111\u1ECBa ch\u1EC9 DNS server <span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>
<span class="token assign-left variable">DNS2</span><span class="token operator">=</span><span class="token operator">&lt;</span>\u0111\u1ECBa ch\u1EC9 DNS server <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>
<span class="token assign-left variable">ONBOOT</span><span class="token operator">=</span>yes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><code>Ethernet</code> \u0111ang s\u1EED d\u1EE5ng c\xF3 device l\xE0 <code>eno1</code> g\xF5 l\u1EC7nh :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">nano</span> /etc/sysconfig/network-scripts/ifcfg-eno1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-22-30-54-Screenshot from 2021-05-03 17-36-52.png" width="600"><div class="custom-container tip"><p class="custom-container-title">\u{1F4A1} KI\u1EBEN TH\u1EE8C</p><ul><li><p>T\xECm <code>IP</code> \u0111ang s\u1EED d\u1EE5ng ==&gt; S\u1EED d\u1EE5ng l\u1EC7nh <code>curl ifconfig.me</code></p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-22-32-57-Screenshot from 2021-05-03 17-40-18.png" title="" alt="Screenshot from 2021-05-03 17-40-18.png" width="297"></li><li><p>T\xECm <code>Default Gateway</code> \u0111ang s\u1EED d\u1EE5ng ==&gt; G\xF5 l\u1EC7nh <code>route -n</code></p><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-22-43-12-Screenshot from 2021-05-03 17-40-39.png" alt="Screenshot from 2021-05-03 17-40-39.png"></p></li></ul></div><h3 id="cau-2-3" tabindex="-1"><a class="header-anchor" href="#cau-2-3" aria-hidden="true">#</a> C\xE2u 2.3</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> \u0110\u1EC3 kh\u1EDFi \u0111\u1ED9ng l\u1EA1i d\u1ECBch v\u1EE5 m\u1EA1ng, th\u1EF1c hi\u1EC7n l\u1EC7nh:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">service</span> network restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-22-27-43-Screenshot from 2021-05-03 17-42-36.png" alt="Screenshot from 2021-05-03 17-42-36.png"></p><h3 id="cau-2-4" tabindex="-1"><a class="header-anchor" href="#cau-2-4" aria-hidden="true">#</a> C\xE2u 2.4</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> \u0110\u1EC3 ki\u1EC3m tra k\u1EBFt n\u1ED1i m\u1EA1ng, s\u1EED d\u1EE5ng l\u1EC7nh:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ping</span> <span class="token operator">&lt;</span>IP c\u1EE7a m\xE1y v\u1EADt l\xFD<span class="token operator">&gt;</span>
<span class="token function">ping</span> google.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-03-34-Screenshot from 2021-05-03 17-44-33.png" width="525"><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-03-37-Screenshot from 2021-05-03 17-48-46.png" alt="Screenshot from 2021-05-03 17-48-46.png"></p><h2 id="_3-thong-tin-ket-noi-mang" tabindex="-1"><a class="header-anchor" href="#_3-thong-tin-ket-noi-mang" aria-hidden="true">#</a> 3.Th\xF4ng tin k\u1EBFt n\u1ED1i m\u1EA1ng</h2><div class="custom-container tip"><p class="custom-container-title">\u{1F4A1} KI\u1EBEN TH\u1EE8C</p><p>Th\u1EF1c hi\u1EC7n l\u1EC7nh <code>ifconfig -a</code> (<em>Ch\u1EE5p m\xE0n h\xECnh minh ho\u1EA1</em><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-16-22-icons8-screenshot.png" alt="icons8screenshotpng">), quan s\xE1t v\xE0 t\xECm hi\u1EC3u \xFD ngh\u0129a c\xE1c th\xF4ng tin c\xF3 trong k\u1EBFt qu\u1EA3 tr\u1EA3 v\u1EC1. Tr\u1EA3 l\u1EDDi c\xE1c c\xE2u h\u1ECFi</p></div><h3 id="cau-3-1" tabindex="-1"><a class="header-anchor" href="#cau-3-1" aria-hidden="true">#</a> C\xE2u 3.1</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> \u0110\u1ECBa ch\u1EC9 <code>MAC</code>, \u0111\u1ECBa ch\u1EC9 <code>IP</code>, \u0111\u1ECBa ch\u1EC9 m\u1EA1ng, \u0111\u1ECBa ch\u1EC9 <code>boardcast</code> c\u1EE7a k\u1EBFt n\u1ED1i <code>eth0</code></p></blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-04-09-Screenshot from 2021-05-03 18-37-12.png" alt="Screenshot from 2021-05-03 18-37-12.png"></p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-04-37-Screenshot from 2021-05-03 18-37-32.png" title="" alt="Screenshot from 2021-05-03 18-37-32.png" width="632"><h3 id="cau-3-2" tabindex="-1"><a class="header-anchor" href="#cau-3-2" aria-hidden="true">#</a> C\xE2u 3.2</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> N\u1ED1i k\u1EBFt <code>eth0</code> \u0111\xE3 g\u1EEDi v\xE0 nh\u1EADn bao nhi\xEAu g\xF3i tin ?</p></blockquote><p>Do m\xE1y c\xE1 nh\xE2n s\u1EED d\u1EE5ng <code>card wifi</code> n\xEAn device l\xE0 <code>wlp1s0</code></p><ul><li><p><code>TX</code> (Transmit) : \u0111\xE3 g\u1EEDi \u0111i <code>11.4MB</code> d\u1EEF li\u1EC7u <code>packets</code></p></li><li><p><code>RX</code> (Receiver) : \u0111\xE3 nh\u1EADn <code>367.5MB</code> d\u1EEF li\u1EC7u <code>packets</code></p></li></ul><h2 id="_4-\u0111ieu-khien-tu-xa-voi-ssh" tabindex="-1"><a class="header-anchor" href="#_4-\u0111ieu-khien-tu-xa-voi-ssh" aria-hidden="true">#</a> 4.\u0110i\u1EC1u khi\u1EC3n t\u1EEB xa v\u1EDBi SSH</h2><div class="custom-container tip"><p class="custom-container-title">\u{1F4A1} KI\u1EBEN TH\u1EE8C</p><p><code>SSH</code> (<em>Secure Shell</em>) l\xE0 m\u1ED9t giao th\u1EE9c m\u1EA1ng c\xF3 <strong>m\xE3 ho\xE1</strong> \u0111\u01B0\u1EE3c d\xF9ng \u0111\u1EC3 th\u1EF1c hi\u1EC7n c\xE1c giao d\u1ECBch <strong>an to\xE0n</strong> gi\u1EEFa <code>client</code> v\xE0 <code>server</code> tr\xEAn n\u1EC1n t\u1EA3ng <strong>kh\xF4ng an to\xE0n</strong>. Trong th\u1EF1c t\u1EBF, ng\u01B0\u1EDDi qu\u1EA3n tr\u1ECB h\u1EC7 th\u1ED1ng th\u01B0\u1EDDng \u0111i\u1EC1u khi\u1EC3n c\xE1c <code>server Linux</code> t\u1EEB xa th\xF4ng qua k\u1EBFt n\u1ED1i <code>SSH</code>.</p><p>C\xF3 th\u1EC3 ch\u1ECDn m\u1ED9t thi\u1EBFp l\u1EADp <code>SSH</code> trong hai l\u1EF1a ch\u1ECDn sau:</p><ul><li><p><code>Vitrual Machine</code> (<em>M\xE1y \u1EA3o</em>) : l\xE0 m\xE1y b\u1ECB \u0111i\u1EC1u khi\u1EC3n. M\xE1y n\xE0y c\u1EA7n \u0111\u01B0\u1EE3c c\xE0i <code>SSH Server</code> nh\u01B0 <code>OpenSSH</code>, v\xE0 ch\u1EA1y d\u1ECBch v\u1EE5 t\u01B0\u01A1ng \u1EE9ng \u1EDF c\u1ED5ng n\xE0o \u0111\xF3 (<em>Th\xF4ng th\u01B0\u1EDDng l\xE0 c\u1ED5ng <code>22</code></em>) \u0111\u1EC3 <strong>l\u1EAFng nghe</strong> c\xE1c <strong>y\xEAu c\u1EA7u k\u1EBFt n\u1ED1i</strong>.</p></li><li><p><code>Physical Machine</code> (<em>M\xE1y th\u1EADt</em>) : L\xE0 m\xE1y ra l\u1EC7nh \u0111i\u1EC1u khi\u1EC3n. \u0110\u1ED1i v\u1EDBi <code>Linux</code> h\u1EC7 th\u1ED1ng c\xF3 s\u1EB5n m\u1ED9t l\u1EC7nh <code>ssh</code> \u0111\u1EC3 th\u1EF1c hi\u1EC7n k\u1EBFt n\u1ED1i. \u0110\u1ED1i v\u1EDBi <code>Windows</code>, ta c\u1EA7n c\xE0i th\xEAm <code>SSH Client</code> nh\u01B0 <code>PuTTY</code> hay <code>Mobaxterm</code>.</p></li></ul></div><h3 id="cau-4-1" tabindex="-1"><a class="header-anchor" href="#cau-4-1" aria-hidden="true">#</a> C\xE2u 4.1</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> C\xE0i \u0111\u1EB7t <code>SSH Server</code></p><p>Thi\u1EBFt l\u1EADp m\u1EA1ng v\xE0 ghi l\u1EA1i c\xE1c \u0111\u1ECBa ch\u1EC9 <code>IP</code>. \u0110\u1EA3m b\u1EA3o r\u1EB1ng b\u1EA1n c\xF3 th\u1EC3 truy c\u1EADp Internet t\u1EEB m\xE1y \u1EA3o :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ yum <span class="token function">install</span> openssh-server <span class="token comment"># c\xE0i \u0111\u1EB7t openssh</span>
$ <span class="token function">service</span> sshd start         <span class="token comment"># ch\u1EA1y ssh server </span>
$ <span class="token function">service</span> sshd status        <span class="token comment"># ki\u1EC3m tra ssh server ch\u1EA1y ch\u01B0a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-10-08-Screenshot from 2021-05-03 18-44-45.png" width="442"><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-11-40-Screenshot from 2021-05-03 18-45-06.png" alt="Screenshot from 2021-05-03 18-45-06.png"></p><h3 id="cau-4-2" tabindex="-1"><a class="header-anchor" href="#cau-4-2" aria-hidden="true">#</a> C\xE2u 4.2</h3>`,38),g=e("p",null,[e("img",{src:"https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png",width:"30"}),n(" C\xE0i \u0111\u1EB7t "),e("code",null,"SSH Server"),n(" tr\xEAn "),e("strong",null,"m\xE1y v\u1EADt l\xFD")],-1),b=n("N\u1EBFu s\u1EED d\u1EE5ng "),v=e("img",{src:"https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/26-12-36-59-icons8-windows8.png",alt:"icons8-windows8.png"},null,-1),k=n(),f=e("code",null,"Window 10",-1),w=n(" : C\xE0i \u0111\u1EB7t "),_={href:"https://putty.org/",target:"_blank",rel:"noopener noreferrer"},S=e("strong",null,"PuTTY",-1),y=n(", nh\u1EADp c\xE1c th\xF4ng s\u1ED1 v\xE0 th\u1EF1c hi\u1EC7n "),q=e("strong",null,"k\u1EBFt n\u1ED1i",-1),I=t(`<li><p>N\u1EBFu s\u1EED d\u1EE5ng <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/26-12-37-07-icons8-linux.png" alt="icons8-linux.png"> <code>Linux</code> :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">ssh</span> <span class="token operator">&lt;</span>username<span class="token operator">&gt;</span>@<span class="token operator">&lt;</span>serveraddress<span class="token operator">&gt;</span> <span class="token comment"># k\u1EBFt n\u1ED1i ssh server</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>==&gt; S\u1EED d\u1EE5ng l\u1EC7nh <code>ifconfig -a</code> \u0111\u1EC3 ki\u1EC3m tra v\xE0 qu\u1EA3n s\xE1t.</p></li>`,1),x=t(`<p>T\xE0i kho\u1EA3n \u0111ang s\u1EED d\u1EE5ng l\xE0 <code>b19909935</code> v\xE0 \u0111\u1ECBa ch\u1EC9 <code>server</code></p><div class="custom-container tip"><p class="custom-container-title">\u{1F4A1} FACT</p><p>L\u1EA5y \u0111\u1ECBa ch\u1EC9 <code>server</code> \u1EDF l\u1EC7nh <code>ifconfig -a</code></p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-17-35-Screen Shot 2021-05-03 at 23.16.23.png" width="600"><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-17-51-Screenshot from 2021-05-03 18-47-49.png" width="600"></div><h2 id="_5-cai-\u0111at-va-cau-hinh-dich-vu-ftp" tabindex="-1"><a class="header-anchor" href="#_5-cai-\u0111at-va-cau-hinh-dich-vu-ftp" aria-hidden="true">#</a> 5. C\xE0i \u0111\u1EB7t v\xE0 c\u1EA5u h\xECnh d\u1ECBch v\u1EE5 FTP</h2><h3 id="cau-5-1" tabindex="-1"><a class="header-anchor" href="#cau-5-1" aria-hidden="true">#</a> C\xE2u 5.1</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> C\xE0i \u0111\u1EB7t d\u1ECBch v\u1EE5 <code>FTP</code> tr\xEAn m\xE1y <code>CentOS</code> b\u1EB1ng l\u1EC7nh</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ yum <span class="token function">install</span> vsftpd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-28-30-Screenshot from 2021-05-03 19-14-23.png" alt="Screenshot from 2021-05-03 19-14-23.png"></p><h3 id="cau-5-2" tabindex="-1"><a class="header-anchor" href="#cau-5-2" aria-hidden="true">#</a> C\xE2u 5.2</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> Th\u1EF1c hi\u1EC7n l\u1EC7nh sau cho ph\xE9p ng\u01B0\u1EDDi d\xF9ng k\u1EBFt n\u1ED1i v\xE0o d\u1ECBch v\u1EE5 <code>FTP</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ setsebool -P ftp_home_dir on
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><div class="custom-container warning"><p class="custom-container-title">\u26A0\uFE0F L\u01AFU \xDD</p><p>N\u1EBFu x\u1EA3y ra l\u1ED7i <code>Boolean ftp_home_dir is not defined</code></p><p>==&gt; H\xE3y s\u1EED d\u1EE5ng l\u1EC7nh sau \u0111\xE2y :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ setsebool -P tftp_home_dir on
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><h3 id="cau-5-3" tabindex="-1"><a class="header-anchor" href="#cau-5-3" aria-hidden="true">#</a> C\xE2u 5.3</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> C\u1EA5u h\xECnh d\u1ECBch v\u1EE5 <code>FTP</code> nh\u01B0 sau :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">nano</span> /etc/vsftpd/vsftpd.conf 
$ <span class="token assign-left variable">anonymous_enable</span><span class="token operator">=</span>NO
$ <span class="token assign-left variable">local_enable</span><span class="token operator">=</span>YES <span class="token comment"># \u0111\xE3 \u0111\u01B0\u1EE3c b\u1EADt s\u1EB5n trong file c\u1EA5u h\xECnh</span>
$ <span class="token assign-left variable">chroot_local_user</span><span class="token operator">=</span>YES
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-29-46-Screenshot from 2021-05-03 19-18-50.png" alt="Screenshot from 2021-05-03 19-18-50.png"></p><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-29-49-Screenshot from 2021-05-03 19-19-25.png" alt="Screenshot from 2021-05-03 19-19-25.png"></p><h3 id="cau-5-4" tabindex="-1"><a class="header-anchor" href="#cau-5-4" aria-hidden="true">#</a> C\xE2u 5.4</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> Kh\u1EDFi \u0111\u1ED9ng l\u1EA1i d\u1ECBch v\u1EE5 <code>FTP</code> b\u1EB1ng l\u1EC7nh sau :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">service</span> vsftpd start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p>Sau khi ch\u1EA1y <code>vsftpd</code> s\u1EED d\u1EE5ng l\u1EC7nh <code>service vsftpd status</code> \u0111\u1EC3 ki\u1EC3m tra</p><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-32-42-Screenshot from 2021-05-03 19-30-50.png" alt="Screenshot from 2021-05-03 19-30-50.png"></p><h3 id="cau-5-5" tabindex="-1"><a class="header-anchor" href="#cau-5-5" aria-hidden="true">#</a> C\xE2u 5.5</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> T\u1EAFt t\u01B0\u1EDDng l\u1EEDa b\u1EB1ng l\u1EC7nh nh\u01B0 sau :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">service</span> iptables stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p>C\xE0i <code>iptables</code> b\u1EB1ng l\u1EC7nh <code>yum install iptables-services</code></p><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-32-08-Screenshot from 2021-05-03 19-32-04.png" alt="Screenshot from 2021-05-03 19-32-04.png"></p><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-33-43-Screenshot from 2021-05-03 19-32-18.png" alt="Screenshot from 2021-05-03 19-32-18.png"></p><div class="custom-container tip"><p class="custom-container-title">\u{1F4A1} FACT</p><p>S\u1EED d\u1EE5ng l\u1EC7nh <code>service iptables status</code> \u0111\u1EC3 ki\u1EC3m tra:</p><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-35-43-Screenshot from 2021-05-03 20-35-25.png" alt="Screenshot from 2021-05-03 20-35-25.png"></p></div><h3 id="cau-5-6" tabindex="-1"><a class="header-anchor" href="#cau-5-6" aria-hidden="true">#</a> C\xE2u 5.6</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> Tr\xEAn m\xE1y v\u1EADt l\xFD th\u1EF1c hi\u1EC7n t\u1EA1o file <code>index.html</code> v\u1EDBi n\u1ED9i dung sau :</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">doctype</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>T\u1ED5ng c\xF4ng ty b\xE1nh k\u1EB9o L\u01B0\u01A1ng S\u01A1n B\u1EA1c<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>H1</span><span class="token punctuation">&gt;</span></span>Welcome!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>H1</span><span class="token punctuation">&gt;</span></span> 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>marquee</span><span class="token punctuation">&gt;</span></span>Designed by B1234567<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>marquee</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>S\u1EED d\u1EE5ng l\xEAnh <code>gedit</code> \u0111\u1EC3 t\u1EA1o file (<em>th\u1EF1c thi \u1EDF t\xE0i kho\u1EA3n root</em>)</p><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-34-46-Screenshot from 2021-05-03 20-34-32.png" alt="Screenshot from 2021-05-03 20-34-32.png"></p><h3 id="cau-5-7" tabindex="-1"><a class="header-anchor" href="#cau-5-7" aria-hidden="true">#</a> C\xE2u 5.7</h3>`,28),C=e("img",{src:"https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png",width:"30"},null,-1),Z=n(" T\u1EA3i v\xE0 th\u1EF1c thi m\u1ED9t ph\u1EA7n m\u1EC1m "),T=e("code",null,"FTP client",-1),P=n(" ("),N=e("em",null,"V\xED d\u1EE5:",-1),L=n(),$=e("img",{src:"https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/26-12-49-19-icons8-filezilla.png",title:"",alt:"icons8-filezilla.png",width:"30"},null,-1),A=n(),H={href:"https://filezilla-project.org/",target:"_blank",rel:"noopener noreferrer"},O=n("FileZilla"),F=n(" ho\u1EB7c "),B=e("img",{src:"https://raw.githubusercontent.com/Zenfection/Image/master/2021/04/26-12-49-39-WinSCP_Logo.png",title:"",alt:"WinSCP_Logo.png",width:"30"},null,-1),E=n(),M={href:"https://winscp.net/eng/download.php",target:"_blank",rel:"noopener noreferrer"},W=n("WinSCP"),D=n(" ) \u0111\u1EC3 k\u1EBFt n\u1ED1i \u0111\u1EBFn d\u1ECBch v\u1EE5 "),K=e("code",null,"FTP",-1),X=n(" tr\xEAn m\xE1y "),j=e("code",null,"CentOS",-1),G=n(". Sau \u0111\xF3 "),R=e("strong",null,"upload file",-1),V=n(),Y=e("code",null,"index.html",-1),U=n(" l\xEAn m\xE1y "),z=e("code",null,"CentOS",-1),J=t(`<p>C\xE0i <code>FileZilla</code> b\u1EB1ng l\u1EC7nh <code>yum install filezilla</code></p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-40-11-Screenshot from 2021-05-03 20-36-44.png" width="700"><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-40-47-Screenshot from 2021-05-03 20-38-49.png" width="600"><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-41-45-Screenshot from 2021-05-03 20-39-01.png" width="700"><h2 id="_6-cai-\u0111at-apache-web-server" tabindex="-1"><a class="header-anchor" href="#_6-cai-\u0111at-apache-web-server" aria-hidden="true">#</a> 6. C\xE0i \u0111\u1EB7t Apache web server</h2><div class="custom-container tip"><p class="custom-container-title">\u{1F4A1} KI\u1EBEN TH\u1EE8C</p><p>M\u1ED9t m\xE1y ch\u1EE7 <code>web</code> (<em>web server</em>) l\xE0 m\u1ED9t ch\u01B0\u01A1ng tr\xECnh ch\u1EDD \u0111\u1EE3i c\xE1c y\xEAu c\u1EA7u truy c\u1EADp t\xE0i nguy\xEAn t\u1EEB m\u1ED9t <code>web client</code> (<em>tr\xECnh duy\u1EC7t web</em>). Th\xF4ng th\u01B0\u1EDDng. n\xF3 s\u1EBD l\u1EAFng nghe \u1EDF c\u1ED5ng <code>80</code>, nh\u01B0ng c\u0169ng c\xF3 th\u1EC3 c\u1ED5ng <strong>kh\xE1c</strong> (\u0111\xF3 l\xE0 l\xFD do t\u1EA1i sao m\u1ED9t s\u1ED1 <code>URL</code> bao g\u1ED3m s\u1ED1 hi\u1EC7u c\u1ED5ng). \u0110\u1EC3 c\xF3 th\u1EC3 sinh ra \u0111\u01B0\u1EE3c c\xE1c trang web v\u1EDBi n\u1ED9i dung \u0111\u1ED9ng, b\u1EA1n c\u1EA7n c\xF3 c\xE1c ch\u01B0\u01A1ng tr\xECnh ho\u1EB7c c\xE1c d\u1ECBch v\u1EE5 kh\xE1c c\xE0i \u0111\u1EB7t v\xE0o m\xE1y ch\u1EE7 <code>web</code>. <code>Apache</code> l\xE0 m\u1ED9t trong nh\u1EEFng c\xF4ng ngh\u1EC7 m\xE1y ch\u1EE7 <code>web</code> ph\u1ED5 bi\u1EBFn nh\u1EA5t, c\xE1c t\u1EADp tin c\u1EA5u h\xECnh c\u1EE7a <code>Apache</code> n\u1EB1m trong th\u01B0 m\u1EE5c <code>/etc/httpd/conf</code>.</p></div><h3 id="cau-6-1" tabindex="-1"><a class="header-anchor" href="#cau-6-1" aria-hidden="true">#</a> C\xE2u 6.1</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> C\xE0i \u0111\u1EB7t <code>Apache web server</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ yum <span class="token function">install</span> httpd     <span class="token comment"># c\xE0i \u0111\u1EB7t Apache</span>
$ <span class="token function">service</span> httpd start   <span class="token comment"># ch\u1EA1y Apache</span>
$ <span class="token function">service</span> iptables stop <span class="token comment"># t\u1EAFt t\u01B0\u1EDDng l\u1EEDa</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Tr\xEAn <strong>m\xE1y v\u1EADt l\xFD</strong>, m\u1EDF tr\xECnh duy\u1EC7t web v\xE0 truy c\u1EADp v\xE0o \u0111\u1ECBa ch\u1EC9 <code>http://&lt;\u0110\u1ECBa ch\u1EC9 IP CentOS&gt;</code> \u0111\u1EC3 ki\u1EC3m ch\u1EE9ng trang web v\u1EEBa t\u1EA1o.</p></blockquote><p>Sau khi c\xE0i \u0111\u1EB7t v\xE0 ch\u1EA1y <code>httpd</code>, s\u1EED d\u1EE5ng l\u1EC7nh <code>service httpd status</code> \u0111\u1EC3 ki\u1EC3m tra :</p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-43-12-Screenshot from 2021-05-03 20-41-55.png" width="600"><div class="custom-container warning"><p class="custom-container-title">\u26A0\uFE0F L\u01AFU \xDD</p><p>H\xE3y b\u1EA3o \u0111\u1EA3m r\u1EB1ng b\u1EA1n \u0111\xE3 <code>t\u1EAFt t\u01B0\u1EDDng l\u1EEDa</code> b\u1EB1ng l\u1EC7nh sau :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">service</span> iptables stop   <span class="token comment">#\u0111\u1EC3 t\u1EAFt t\u01B0\u1EDDng l\u1EEDa</span>
$ <span class="token function">service</span> iptables status <span class="token comment">#ki\u1EC3m tra tr\u1EA1ng th\xE0i </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div><p>Truy c\u1EADp v\xE0o <code>Firefox</code> v\u1EDBi \u0111\u01B0\u1EDDng link <code>http://192.168.2.176</code></p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-49-28-Screenshot from 2021-05-03 20-43-13.png" width="700"><h3 id="cau-6-2" tabindex="-1"><a class="header-anchor" href="#cau-6-2" aria-hidden="true">#</a> C\xE2u 6.2</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> N\u1EBFu b\u1EA1n mu\u1ED1n t\u1EA1o m\u1ED9t trang <code>web</code> c\u1EE7a ri\xEAng m\xECnh, \u0111\u1EA7u ti\xEAn b\u1EA1n c\u1EA7n ph\u1EA3i \u0111\u1EB7t ch\xFAng v\xE0o th\u01B0 m\u1EE5c <code>/var/www/html</code>, \u0111\xE2y l\xE0 n\u01A1i ch\u1EE9a c\xE1c t\xE0i nguy\xEAn m\xE1y do m\xE1y ch\u1EE7 <code>web</code> qu\u1EA3n l\xFD v\xE0 cho ph\xE9p <code>web client</code> truy c\u1EADp v\xE0o. T\u1EA1o th\u01B0 m\u1EE5c <code>/var/www/html/myweb</code>, sao ch\xE9p file <code>index.html</code> \u1EDF c\xE2u <code>5.7</code> v\xE0o th\u01B0 m\u1EE5c <code>/var/www/html/myweb</code></p></blockquote><p>S\u1EED d\u1EE5ng l\u1EC7nh sau \u0111\u1EC3 t\u1EA1o th\u01B0 m\u1EE5c <code>myweb</code> \u1EDF <code>/var/www/html/</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">mkdir</span> /var/www/html/myweb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>S\u1EED d\u1EE7ng l\xEAnh <code>cp</code> \u0111\u1EC3 copy file <code>index.html</code> qua <code>/var/www/html/myweb/</code></p><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-50-45-Screenshot from 2021-05-03 20-49-56.png" alt="Screenshot from 2021-05-03 20-49-56.png"></p><h3 id="cau-6-3" tabindex="-1"><a class="header-anchor" href="#cau-6-3" aria-hidden="true">#</a> C\xE2u 6.3</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> <strong>Tr\xEAn m\xE1y v\u1EADt l\xFD</strong>, m\u1EDF tr\xECnh duy\u1EC7t <code>web</code> v\xE0 truy c\u1EADp v\xE0o \u0111\u1ECBa ch\u1EC9 <code>http://&lt;\u0110\u1ECBa ch\u1EC9 IP m\xE1y CentOS&gt;/myweb</code> \u0111\u1EC3 ki\u1EC3m ch\u1EE9ng trang web v\u1EEBa t\u1EA1o.</p></blockquote><p>D\xF9ng <code>Firefox</code> truy c\u1EADp v\xE0o \u0111\u01B0\u1EDDng link <code>http://192.168.2.176/myweb</code>, file <code>index.html</code> s\u1EBD load</p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/03-23-55-04-Screenshot from 2021-05-03 20-50-42.png" width="700">`,23);function Q(ee,ne){const s=o("ExternalLinkIcon");return i(),r("div",null,[h,e("p",null,[p,e("a",l,[u,a(s)])]),m,e("blockquote",null,[g,e("ul",null,[e("li",null,[e("p",null,[b,v,k,f,w,e("a",_,[S,a(s)]),y,q])]),I])]),x,e("blockquote",null,[e("p",null,[C,Z,T,P,N,L,$,A,e("a",H,[O,a(s)]),F,B,E,e("a",M,[W,a(s)]),D,K,X,j,G,R,V,Y,U,z])]),J])}var se=c(d,[["render",Q],["__file","4.html.vue"]]);export{se as default};