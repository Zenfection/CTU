import{_ as t,r as c,o as a,c as r,b as e,a as s,e as i,d as n}from"./app.d72ab51f.js";const o={},l=i(`<h1 id="on-tap-mang-may-tinh" tabindex="-1"><a class="header-anchor" href="#on-tap-mang-may-tinh" aria-hidden="true">#</a> \xD4n t\u1EADp M\u1EA1ng m\xE1y t\xEDnh</h1><div class="custom-container warning"><p class="custom-container-title">\u26A0\uFE0F L\u01AFU \xDD</p><p>Ch\u1EC9 tham kh\u1EA3o v\xEC m\u1ED7i h\u1ECDc k\u1EF3 s\u1EBD m\u1ED7i kh\xE1c n\xEAn \u0111\xE2y l\xE0 b\xE0i tham kh\u1EA3o c\u1EE7a n\u0103m <code>h\u1ECDc k\u1EF3 I-2021</code> c\u1EE7a <code>\u0111\u1EA1i h\u1ECDc C\u1EA7n Th\u01A1</code></p></div><h2 id="cau-so-1" tabindex="-1"><a class="header-anchor" href="#cau-so-1" aria-hidden="true">#</a> C\xE2u s\u1ED1 1</h2><div class="custom-container tip"><p class="custom-container-title">\u2753 C\xC2U H\u1ECEI</p><p>H\xE3y tr\xECnh b\xE0y m\u1ECDi hi\u1EC3u bi\u1EBFt v\u1EC1 giao th\u1EE9c <code>RIP</code> v\xE0 <code>OSFP</code> trong \u0111\u1ECBnh tuy\u1EBFn n\u1ED9i mi\u1EC1n</p></div><h2 id="cau-so-2" tabindex="-1"><a class="header-anchor" href="#cau-so-2" aria-hidden="true">#</a> C\xE2u s\u1ED1 2</h2><div class="custom-container tip"><p class="custom-container-title">\u2753 C\xC2U H\u1ECEI</p><p>Cho s\u01A1 \u0111\u1ED3 m\u1EA1ng \u0111\u01B0\u1EE3c thi\u1EBFt k\u1EBF nh\u01B0 sau:</p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/11/06-16-21-34-Screen Shot 2021-11-06 at 16.21.27.png"><ul><li><p>H\xE3y \u0111\u1EC1 xu\u1EA5t c\xE1c \u0111\u1ECBa ch\u1EC9 m\u1EA1ng, \u0111\u1ECBa ch\u1EC9 IP ph\xF9 h\u1EE3p cho c\xE1c LAN v\xE0 c\xE1c thi\u1EBFt b\u1ECB trong s\u01A1 \u0111\u1ED3 m\u1EA1ng</p></li><li><p>S\u1EED d\u1EE5ng Kathara \u0111\u1EC3 x\xE2y d\u1EF1ng m\xF4 h\xECnh m\u1EA1ng</p></li></ul></div><h3 id="tao-thu-muc-va-cac-file" tabindex="-1"><a class="header-anchor" href="#tao-thu-muc-va-cac-file" aria-hidden="true">#</a> T\u1EA1o th\u01B0 m\u1EE5c v\xE0 c\xE1c file</h3><p>T\u1EA1o c\xE1c th\u01B0 m\u1EE5c theo m\xF4 h\xECnh nh\u01B0 sau:</p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/11/13-13-52-10-Screenshot from 2021-11-13 13-50-18.png"><p>B\u1EB1ng c\xE1c d\xF2ng l\u1EC7nh d\u01B0\u1EDBi \u0111\xE2y :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mkdir ~/Desktop/OnTap
cd ~/Desktop/OnTap
mkdir webserver pc1 pc2 switch1 router0 router1 router2 router3 router4 router5 router6
touch webserver.startup pc1.startup pc2.startup switch1.startup
touch router0.startup router1.startup router2.startup router3.startup router4.startup router5.startup router6.startup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="thiet-lap-cac-file" tabindex="-1"><a class="header-anchor" href="#thiet-lap-cac-file" aria-hidden="true">#</a> Thi\u1EBFt l\u1EADp c\xE1c file</h3><h4 id="mo-hinh-lai-bai-toan" tabindex="-1"><a class="header-anchor" href="#mo-hinh-lai-bai-toan" aria-hidden="true">#</a> M\xF4 h\xECnh l\u1EA1i b\xE0i to\xE1n</h4><div class="custom-container warning"><p class="custom-container-title">\u26A0\uFE0F L\u01AFU \xDD</p><p>V\xEC m\xF4 h\xECnh tr\xEAn \u0111\u1EC1 b\xE0i kh\xF4ng c\xF3 c\xE1c nh\xE1nh m\u1EA1ng n\xEAn ta ph\u1EA3i t\u1EF1 m\xF4 h\xECnh c\xE1 nh\xE2n nh\u01B0 sau:</p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/11/12-22-24-34-06-16-21-34-Screen Shot 2021-11-06 at 16.21.27.png"><p>T\u1ED1t nh\u1EA5t l\xE0 b\u1EA1n n\xEAn l\xE0m theo <code>quy t\u1EAFc</code> th\u1EE9 t\u1EF1 <strong>ch\u1EEF c\xE1i</strong> v\xE0 <strong>s\u1ED1</strong></p></div><h4 id="cau-hinh-file-lab-conf" tabindex="-1"><a class="header-anchor" href="#cau-hinh-file-lab-conf" aria-hidden="true">#</a> C\u1EA5u h\xECnh file <code>lab.conf</code></h4><p>Nh\xECn theo m\xF4 h\xECnh v\xE0 ta c\u1EA5u h\xECnh file <code>lab.conf</code> nh\u01B0 sau:</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>webserver[0]=A
pc1[0]=F
pc2[0]=G

switch1[0]=F
switch1[1]=G
switch1[2]=H

router0[0]=C
router0[1]=D
router0[2]=I
router0[3]=J

router1[0]=B  
router1[1]=C

router2[0]=A
router2[1]=B
router2[2]=E

router3[0]=D
router3[1]=E

router4[0]=J
router4[1]=K

router5[0]=K
router5[1]=M

router6[0]=H
router6[1]=I
router6[2]=M
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="cau-hinh-cac-thiet-bi" tabindex="-1"><a class="header-anchor" href="#cau-hinh-cac-thiet-bi" aria-hidden="true">#</a> C\u1EA5u h\xECnh c\xE1c thi\u1EBFt b\u1ECB</h4><p>Nh\xECn tr\xEAn m\xF4 h\xECnh ta s\u1EBD c\xF3 c\xE1c thi\u1EBFt b\u1ECB nh\u01B0: <code>webserver</code>, <code>pc1</code>, <code>pc2</code>, <code>switch1</code></p><p>:::: tabs</p><p>::: tab webserver.startup</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>ifconfig eth0 12.18.10.139/25 up
route add default gw 12.18.10.140
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: tab pc1.startup</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>ifconfig eth0 192.168.10.10/24 up
route add default gw 192.168.10.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: tab pc2.startup</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>ifconfig eth0 192.168.10.11/24
route add default gw 192.168.10.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: tab switch1.startup</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>ifconfig eth0 up
ifconfig eth1 up
ifconfig eth2 up 
brctl addbr br0

brctl addif br0 eth0
brctl addif br0 eth1
brctl addif br0 eth2

brctl stp br0 on
ifconfig br0 up
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: ::::</p><div class="custom-container warning"><p class="custom-container-title">\u26A0\uFE0F L\u01AFU \xDD</p><ul><li><p><code>webserver</code> k\u1EBFt n\u1ED1i t\u1EDBi <code>eth0</code> c\u1EE7a <code>router2</code>, ta cho <code>12.18.10.140</code></p><p>th\xEC ta b\u1EAFt bu\u1ED9c ph\u1EA3i c\u1EA5u h\xECnh <code>eth0</code> c\u1EE7a <code>router2</code> y v\u1EADy</p></li><li><p><code>pc1</code> v\xE0 <code>pc2</code> k\u1EBFt n\u1ED1i v\u1EDBi <code>eth0</code> c\u1EE7a <code>router6</code>, ta cho <code>192.168.10.1</code></p><p>th\xEC ta b\u1EAFt bu\u1ED9c ph\u1EA3i c\u1EA5u h\xECnh <code>eth0</code> c\u1EE7a <code>router6</code> y v\u1EADy</p></li></ul></div><h4 id="cau-hinh-cac-router" tabindex="-1"><a class="header-anchor" href="#cau-hinh-cac-router" aria-hidden="true">#</a> C\u1EA5u h\xECnh c\xE1c <code>router</code></h4><div class="custom-container tip"><p class="custom-container-title">\u{1F4A1} NH\u1EACN X\xC9T</p><ul><li><p><code>router1</code>, <code>router2</code>, <code>router3</code> theo nh\xE1nh m\u1EA1ng <code>110.178.29.192/27</code> v\xE0 s\u1EED d\u1EE5ng gi\u1EA3i thu\u1EADt <code>OSPF</code></p></li><li><p><code>router4</code>, <code>router5</code>, <code>router6</code> theo nh\xE1nh m\u1EA1ng <code>110.84.59.0/25</code> v\xE0 s\u1EED d\u1EE5ng gi\u1EA3i thu\u1EADt <code>RIP</code></p></li><li><p><code>router0</code> theo c\u1EA3 2 nh\xE1nh m\u1EA1ng tr\xEAn v\xE0 s\u1EED d\u1EE5ng \u0111\u1ED3ng th\u1EDDi <code>OSPF</code> v\xE0 <code>RIP</code></p></li></ul></div><h4 id="chia-nhanh-mang-con" tabindex="-1"><a class="header-anchor" href="#chia-nhanh-mang-con" aria-hidden="true">#</a> Chia nh\xE1nh m\u1EA1ng con</h4><p>Ch\xFAng ta ph\u1EA3i th\u1EF1c hi\u1EC7n chia nh\xE1ng m\u1EA1ng con, g\u1ED3m 2 <code>nh\xE1nh</code> m\u1ED7i nh\xE1nh chia 4 m\u1EA1ng con</p><p>==&gt; Ch\xFAng ta ph\u1EA3i chia cho <code>8</code> nh\xE1nh v\xEC <code>4</code> nh\xE1nh nh\u01B0ng ch\u1EC9 s\u1EED d\u1EE5ng \u0111\u01B0\u1EE3c <code>2</code> nh\xE1nh m\u1EA1ng con</p>`,38),u={class:"custom-container tip"},h=e("p",{class:"custom-container-title"},"\u{1F4A1} M\u1EB8O",-1),v=n("\u0110\u1EC3 m\u1ECDi th\u1EE9 \u0111\u01B0\u1EE3c d\u1EC5 d\xE0ng h\u01A1n, s\u1EED d\u1EE5ng c\xF4ng c\u1EE5 "),p={href:"https://github.com/BrunoBonacci/easy-subnet",target:"_blank",rel:"noopener noreferrer"},m=n("easy-subnet"),b=n(" \u0111\u1EC3 chia nh\xE1nh m\u1EA1ng con t\u1EF1 \u0111\u1ED9ng"),g=i(`<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/11/12-15-43-17-Screen Shot 2021-11-12 at 15.43.09.png"><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/11/12-15-44-30-Screen Shot 2021-11-12 at 15.44.22.png"><div class="custom-container warning"><p class="custom-container-title">\u26A0\uFE0F L\u01AFU \xDD</p><p>Nh\u01B0 tr\xEAn h\xECnh, ch\xFAng ta kh\xF4ng s\u1EED d\u1EE5ng nh\xE1nh m\u1EA1ng <code>net1</code> v\xEC n\xF3 tr\xF9ng v\u1EDBi m\u1EA1ng g\u1ED1c v\xE0 kh\xF4ng s\u1EED d\u1EE5ng <code>net8</code> v\xEC n\xF3 tr\xF9ng v\u1EDBi <code>boardcast</code> m\u1EA1ng g\u1ED1c</p><p>==&gt; Ch\xFAng ta s\u1EED d\u1EE5ng t\u1EEB <code>net2</code> \u2192 <code>net5</code></p><p>V\xE0 t\u1EEB c\xE1c nh\xE1nh m\u1EA1ng, h\xE3y l\u1EADp ra danh s\xE1ch c\xE1c <code>router</code> k\u1EBFt n\u1ED1i v\u1EDBi n\xF3 v\xE0 \u0111\u1EB7t <code>IP</code> theo t\u1EE9 t\u1EF1 t\u0103ng d\u1EA7n</p></div><table><thead><tr><th>Nh\xE1nh</th><th>M\u1EA1ng</th><th>Router</th></tr></thead><tbody><tr><td>B</td><td>110.178.29.196/30</td><td>router1 (<code>197</code>)<br>router2 (<code>198</code>)</td></tr><tr><td>C</td><td>110.178.29.200/30</td><td>router0 (<code>201</code>)<br>router1 (<code>202</code>)</td></tr><tr><td>D</td><td>110.178.29.204/30</td><td>router0 (<code>205</code>)<br>router3 (<code>206</code>)</td></tr><tr><td>E</td><td>110.178.29.208/30</td><td>router2 (<code>209</code>)<br>router3 (<code>210</code>)</td></tr></tbody></table><table><thead><tr><th>Nh\xE1nh</th><th>M\u1EA1ng</th><th>Router</th></tr></thead><tbody><tr><td>I</td><td>110.84.59.16/28</td><td>router0 (<code>17</code>)<br>router6 (<code>18</code>)</td></tr><tr><td>J</td><td>110.84.59.32/28</td><td>router0 (<code>33</code>)<br>router4 (<code>34</code>)</td></tr><tr><td>K</td><td>110.84.59.48/28</td><td>router4 (<code>49</code>)<br>router5 (<code>50</code>)</td></tr><tr><td>M</td><td>110.84.59.64/28</td><td>router5 (<code>65</code>)<br>router6 (<code>66</code>)</td></tr></tbody></table><div class="custom-container tip"><p class="custom-container-title">\u{1F4A1} M\u1EB8O</p><p>N\u1EBFu m\xF4 h\xECnh theo th\u1EE9 t\u1EF1 v\xE0 c\xF3 quy t\u1EAFc, s\u1EBD kh\xF4ng c\u1EA7n ph\u1EA3i nh\xECn m\xF4 h\xECnh m\xE0 nh\xECn th\u1EB3ng b\u1EA3ng tr\xEAn</p></div><p>T\u1EEB b\u1EA3ng tr\xEAn ta c\u1EA5u h\xECnh c\xE1c <code>router</code> nh\u01B0 sau:</p><p>:::: tabs</p><p>::: tab router0.startup</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>ifconfig eth0 110.178.29.201/30 up
ifconfig eth1 110.178.29.205/30 up
ifconfig eth2 110.84.59.17/28 up
ifconfig eth3 110.84.59.33/28 up
/etc/init.d/quagga start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: tab router1.startup</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>ifconfig eth0 110.178.29.197/30 up
ifconfig eth1 110.178.29.202/30 up
/etc/init.d/quagga start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: tab router2.startup</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>ifconfig eth0 12.18.10.140/25 up
ifconfig eth1 110.178.29.198/30 up
ifconfig eth2 110.178.29.209/30 up
/etc/init.d/quagga start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: tab router3.startup</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>ifconfig eth0 110.178.29.206/30 up
ifconfig eth1 110.178.29.210/30 up
/etc/init.d/quagga start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: tab router4.startup</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>ifconfig eth0 110.84.59.34/28 up
ifconfig eth1 110.84.59.49/28 up
/etc/init.d/quagga start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: tab router5.startup</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>ifconfig eth0 110.84.59.50/28 up
ifconfig eth1 110.84.59.65/28 up
/etc/init.d/quagga start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: tab router6.startup</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>ifconfig eth0 192.168.10.1/24 up
ifconfig eth1 110.84.59.18/28 up
ifconfig eth2 110.84.59.66/28 up
/etc/init.d/quagga start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: ::::</p><blockquote><p><code>/etc/init.d/quagga start</code> l\xE0 \u0111\u1EC3 kh\u1EDFi \u0111\u1ED9ng d\u1ECBch v\u1EE5 \u0111\u1ECBnh tuy\u1EBFn n\u1ED9i mi\u1EC1n t\u1EF1 \u0111\u1ED9ng, thay cho l\u1EC7nh <code>route add -net</code> (<em>\u0111\xE2y l\xE0 \u0111\u1ECBnh tuy\u1EBFn th\u1EE7 c\xF4ng</em>)</p></blockquote><h3 id="cau-hinh-dich-vu-quagga" tabindex="-1"><a class="header-anchor" href="#cau-hinh-dich-vu-quagga" aria-hidden="true">#</a> C\u1EA5u h\xECnh d\u1ECBch v\u1EE5 <code>Quagga</code></h3><div class="custom-container tip"><p class="custom-container-title">\u{1F4A1} NH\u1EACN X\xC9T</p><p>Ta ph\xE2n ra <code>3</code> ph\u1EA7n c\u1EA5u h\xECnh nh\u01B0 sau :</p><ul><li><p><code>router4</code>, <code>router5</code>, <code>router6</code> s\u1EED d\u1EE5ng gi\u1EA3i thu\u1EADt <code>RIP</code> (<em>n\xEAn l\xE0m tr\u01B0\u1EDBc</em>)</p></li><li><p><code>router1</code>, <code>router2</code>, <code>router3</code> s\u1EED d\u1EE5ng gi\u1EA3i thu\u1EADt <code>OSPF</code></p></li><li><p><code>router0</code> s\u1EED d\u1EE5ng c\u1EA3 2 gi\u1EA3i thu\u1EADt tr\xEAn</p></li></ul></div><h4 id="cau-hinh-cho-router-su-dung-rip" tabindex="-1"><a class="header-anchor" href="#cau-hinh-cho-router-su-dung-rip" aria-hidden="true">#</a> C\u1EA9u h\xECnh cho <code>router</code> s\u1EED d\u1EE5ng <code>RIP</code></h4><blockquote><p>C\u1EE5 th\u1EC3 l\xE0 <code>router4</code>, <code>router5</code>, <code>router6</code></p></blockquote><p>T\u1EEB <code>router4</code> h\xE3y t\u1EA1o th\u01B0 m\u1EE5c v\xE0 c\xE1c file nh\u01B0 sau:</p><blockquote><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/11/13-14-13-28-Screen Shot 2021-11-13 at 14.13.24.png"></blockquote><p>:::: tabs</p><p>::: tab daemons</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>zebra=yes
ripd=yes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: tab zebra.conf</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>hostname zebra
password zebra
enable password zebra
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: tab rip.conf</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>hostname ripd
password zebra
enable password zebra

router rip
network 110.84.59.0/25
redistribute connected
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: ::::</p><div class="custom-container tip"><p class="custom-container-title">\u{1F4A1} M\u1EB8O</p><p>H\xE3y copy file t\u1EEB <code>router4</code> qua <code>router5</code> v\xE0 <code>router6</code> nh\u01B0 sau:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cp -r router4/etc router5
cp -r router4/etc router6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div><h4 id="cau-hinh-cho-router-su-dung-ospf" tabindex="-1"><a class="header-anchor" href="#cau-hinh-cho-router-su-dung-ospf" aria-hidden="true">#</a> C\u1EA5u h\xECnh cho <code>router</code> s\u1EED d\u1EE5ng <code>OSPF</code></h4><blockquote><p>C\u1EE5 th\u1EC3 l\xE0 <code>router1</code>, <code>router2</code>, <code>router3</code></p></blockquote><p>T\u1EEB <code>router1</code> h\xE3y t\u1EA1o th\u01B0 m\u1EE5c v\xE0 c\xE1c file nh\u01B0 sau:</p><blockquote><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/11/13-14-18-59-Screen Shot 2021-11-13 at 14.18.55.png"></blockquote><p>:::: tabs</p><p>::: tab daemons</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>zebra=yes
ospfd=yes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: tab zebra.conf</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>hostname zebra
password zebra
enable password zebra
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: ::::</p><p>:::: tabs</p><p>::: tab ospfd.conf (router1)</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>hostname ospfd
password zebra
enable password zebra

interface eth0
interface eth1
ospf cost 20

router ospf
network 110.178.29.192/27 area 0.0.0.0
redistribute connected
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: tab ospfd.conf (router2)</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>hostname ospfd
password zebra
enable password zebra

interface eth1
interface eth2
ospf cost 40

router ospf
network 110.178.29.192/27 area 0.0.0.0
redistribute connected
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: tab ospfd.conf (router3)</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>hostname ospfd
password zebra
enable password zebra

interface eth0
interface eth1
ospf cost 60

router ospf
network 110.178.29.192/27 area 0.0.0.0
redistribute connected
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: ::::</p><div class="custom-container danger"><p class="custom-container-title">\u{1F6A8} CH\xDA \xDD</p><p>M\u1ED7i <code>router</code> c\u1EA5u h\xECnh <code>OSPF</code> s\u1EBD m\u1ED7i kh\xE1c</p><p>H\xE3y \u0111\u1EC3 \xFD <code>interface</code> v\xE0 <code>cost</code> c\u1EE7a ch\xFAng</p></div><blockquote><p>B\u1EA1n c\u0169ng c\xF3 th\u1EC3 s\u1EED d\u1EE5ng l\u1EC7nh <code>cp</code> nh\u01B0 tr\xEAn \u0111\u1EC3 l\xE0m nhanh qu\xE1 tr\xECnh</p></blockquote><h4 id="cau-hinh-cho-router0" tabindex="-1"><a class="header-anchor" href="#cau-hinh-cho-router0" aria-hidden="true">#</a> C\u1EA5u h\xECnh cho <code>router0</code></h4><p>\u0110\xE2y l\xE0 <code>router</code> \u0111\u1EB7c bi\u1EC7t n\xEAn ta ph\u1EA3i c\u1EA5u h\xECnh nh\u01B0 sau:</p><p>:::: tabs</p><p>::: tab daemons</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>zebra=yes
ospfd=yes
ripd=yes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: tab zebra.conf</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>hostname zebra
password zebra
enable password zebra
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: tab ripd.conf</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>hostname ripd
password zebra
enable password zebra

router rip
network 110.84.59.0/25
redistribute connected

redistribute ospf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: tab ospfd.conf</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>hostname ospfd
password zebra
enable password zebra

interface eth0
interface eth1
ospf cost 15

router ospf
network 110.178.29.192/27 area 0.0.0.0
redistribute connected

redistribute rip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: ::::</p><div class="custom-container danger"><p class="custom-container-title">\u{1F6A8} CH\xDA \xDD</p><ul><li><p>\u1EDE <code>daemons</code> ta kh\u1EDFi \u0111\u1ED9ng c\u1EA3 2 gi\u1EA3i thu\u1EADt <code>ripd</code> v\xE0 <code>ospfd</code></p></li><li><p>\u1EDE <code>ripd.conf</code> ta th\xEAm d\xF2ng <code>redistribute ospf</code> \u0111\u1EC3 ph\xE2n ph\u1ED1i c\xF9ng v\u1EDBi gi\u1EA3i thu\u1EADt <code>OSPF</code></p></li><li><p>\u1EDE <code>ospfd.conf</code> ta th\xEAm d\xF2ng <code>redistribute rip</code> \u0111\u1EC3 ph\xE2n ph\u1ED1i c\xF9ng v\u1EDBi gi\u1EA3i thu\u1EADt <code>RIP</code> v\xE0 cost l\xE0 <code>15</code></p></li></ul></div><h3 id="khoi-\u0111ong-he-thong-may-ao" tabindex="-1"><a class="header-anchor" href="#khoi-\u0111ong-he-thong-may-ao" aria-hidden="true">#</a> Kh\u1EDFi \u0111\u1ED9ng h\u1EC7 th\u1ED1ng m\xE1y \u1EA3o</h3><p>S\u1EED d\u1EE5ng l\u1EC7nh <code>kathara lstart</code> \u0111\u1EC3 kh\u1EDFi \u0111\u1ED9ng h\u1EC7 th\u1ED1ng m\xE1y \u1EA3o</p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/11/13-14-55-29-Screen Shot 2021-11-13 at 14.55.21.png"><div class="custom-container tip"><p class="custom-container-title">\u{1F4A1} M\u1EB8O</p><ul><li><p>H\xE3y xem tr\xEAn m\u1ED7i thi\u1EBFt b\u1ECB c\xF3 c\xE1i n\xE0o b\xE1o l\u1ED7i c\u1EA5u h\xECnh network sai =&gt; n\u1EBFu c\xF3 ta h\xE3y s\u1EEDa n\xF3</p></li><li><p>H\xE3y ki\u1EC3m tra d\u1ECBch v\u1EE5 <code>quagga</code> tr\xEAn c\xE1c <code>router</code> b\u1EB1ng l\u1EC7nh sau:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>/etc/init.d/quagga status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><p>==&gt; Khi \u0111\xE3 s\u1EEDa c\xE1c sai s\xF3t h\xE3y g\xF5 l\u1EC7nh <code>kathara lrestart</code> \u0111\u1EC3 kh\u1EDFi \u0111\u1ED9ng l\u1EA1i h\u1EC7 th\u1ED1ng m\xE1y \u1EA3o</p></div><h4 id="kiem-tra-lien-thong-cua-cac-thiet-bi" tabindex="-1"><a class="header-anchor" href="#kiem-tra-lien-thong-cua-cac-thiet-bi" aria-hidden="true">#</a> Ki\u1EC3m tra li\xEAn th\xF4ng c\u1EE7a c\xE1c thi\u1EC7t b\u1ECB</h4><p>Ta kh\xF4ng c\u1EA7n thi\u1EBFt ph\u1EA3i ki\u1EC3m tra h\u1EBFt thi\u1EBFt b\u1ECB, h\xE3y l\u1EA5y ng\u1EABu nhi\xEAn 2 c\xE1i b\u1EA1n th\xEDch</p><blockquote><p>M\xECnh s\u1EBD l\u1EA5y <code>router1</code> v\xE0 <code>router4</code></p></blockquote><p>T\u1EEB 2 thi\u1EBFt b\u1ECB n\xE0y h\xE3y g\xF5 l\u1EC7nh <code>route</code> nh\u01B0 sau v\xE0 quan s\xE1t b\u1EA3ng v\u1EA1ch \u0111\u01B0\u1EDDng</p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/11/13-15-05-05-Screen Shot 2021-11-13 at 15.04.09.png"><div class="custom-container tip"><p class="custom-container-title">\u{1F4A1} NH\u1EACN X\xC9T</p><ul><li><p>Khung m\xE0u <code>cam</code> cho th\u1EA5y c\xF3 th\u1EC3 <code>ping</code> t\u1EDBi <code>webserver</code></p></li><li><p>Khung m\xE0u <code>\u0111\u1ECF</code> cho th\u1EA5y c\xF3 th\u1EC3 <code>ping</code> t\u1EDBi <code>router0</code>, <code>router4</code>, <code>router5</code>, <code>router6</code></p></li><li><p>Khung m\xE0u <code>xanh</code> cho th\u1EA5y c\xF3 th\u1EC3 <code>ping</code> t\u1EDBi <code>router0</code>, <code>router1</code>, <code>router2</code>, <code>router3</code></p></li><li><p>Khung m\xE0u <code>t\xEDm</code> cho th\u1EA5y c\xF3 th\u1EC3 <code>ping</code> t\u1EDBi <code>pc1</code>, <code>pc2</code>, <code>switch1</code></p></li></ul><p>==&gt; Ta kh\xF4ng c\u1EA7n ph\u1EA3i ki\u1EC3m tra l\u1EC7nh <code>ping</code> n\u1EBFu b\u1EA3ng v\u1EA1ch \u0111\u01B0\u1EDDng, nh\u01B0ng b\u1EA1n ho\xE0n to\xE0n c\xF3 th\u1EC3 \u0111\u1EC3 ch\u1EAFc ch\u1EAFn</p></div><h3 id="khoi-\u0111ong-dich-vu-webserver" tabindex="-1"><a class="header-anchor" href="#khoi-\u0111ong-dich-vu-webserver" aria-hidden="true">#</a> Kh\u1EDFi \u0111\u1ED9ng d\u1ECBch v\u1EE5 <code>webserver</code></h3><p>T\u1EEB <code>webserver</code> h\xE3y g\xF5 l\u1EC7nh sau \u0111\u1EC3 kh\u1EDFi \u0111\u1ED9ng d\u1ECBch v\u1EE5 <code>apache2</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>/etc/init.d/apache2 start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Sau \u0111\xF3 t\u1EEB <code>pc1</code> v\xE0 <code>pc2</code> g\xF5 l\u1EC7nh <code>links</code> v\xE0 k\u1EBFt n\u1ED1i \u0111\u1EBFn <code>12.18.10.139</code> (<em>ip c\u1EE7a <code>webserver</code></em>)</p><blockquote><p>G\xF5 <code>F10</code> \u0111\u1EC3 ra <code>Menubar</code></p></blockquote><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/11/13-15-12-49-Screen Shot 2021-11-13 at 15.12.35.png"><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/11/13-15-12-52-Screen Shot 2021-11-13 at 15.12.44.png"><h3 id="huy-he-thong-may-ao" tabindex="-1"><a class="header-anchor" href="#huy-he-thong-may-ao" aria-hidden="true">#</a> H\u1EE7y h\u1EC7 th\u1ED1ng m\xE1y \u1EA3o</h3><p>S\u1EED d\u1EE5ng l\u1EC7nh <code>kathara lclean</code> \u0111\u1EC3 h\u1EE7y h\u1EC7 th\u1ED1ng m\xE1y \u1EA3o</p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/11/13-15-13-46-Screen Shot 2021-11-13 at 15.13.38.png" width="600"><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,107);function f(x,k){const d=c("ExternalLinkIcon");return a(),r("div",null,[l,e("div",u,[h,e("p",null,[v,e("a",p,[m,s(d)]),b])]),g])}var w=t(o,[["render",f],["__file","7.html.vue"]]);export{w as default};
