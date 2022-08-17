import{_ as i,r as n,o as c,c as a,a as t,e as d}from"./app.d72ab51f.js";const s={},r=d(`<h1 id="thuc-hanh-buoi-3" tabindex="-1"><a class="header-anchor" href="#thuc-hanh-buoi-3" aria-hidden="true">#</a> Th\u1EF1c h\xE0nh bu\u1ED5i 3</h1><div class="custom-container tip"><p class="custom-container-title">\u{1F4DD} \u0110\u1EC0 B\xC0I</p><div class="pdfZen"><iframe src="https://drive.google.com/file/d/12LJKW57xrFUzgI1ZWIl5Vvws4arir3me/preview"></iframe></div></div><h2 id="_1-bai-tap-8" tabindex="-1"><a class="header-anchor" href="#_1-bai-tap-8" aria-hidden="true">#</a> 1. B\xE0i t\u1EADp 8</h2><div class="custom-container tip"><p class="custom-container-title">\u{1F4A1} M\xD4 H\xCCNH</p><p>Cho m\xF4 h\xECnh nh\u01B0 sau :</p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/04-10-01-28-Screen Shot 2021-10-03 at 22.37.55.png" width="500"></div><h3 id="tao-thu-muc-va-cac-file" tabindex="-1"><a class="header-anchor" href="#tao-thu-muc-va-cac-file" aria-hidden="true">#</a> T\u1EA1o th\u01B0 m\u1EE5c v\xE0 c\xE1c file</h3><p>T\u1EA1o c\xE1c file v\xE0 th\u01B0 m\u1EE5c nh\u01B0 h\xECnh b\xEAn d\u01B0\u1EDBi :</p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/04-10-06-00-Screenshot from 2021-10-04 10-04-37.png"><p>B\u1EB1ng c\xE1ch th\u1EF1c hi\u1EC7n c\xE1c l\u1EC7nh sau:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mkdir ~/Desktop/BaiTap8
cd ~/Desktop/BaiTap8
mkdir pc1 pc2 pc3 pc4 switch
touch pc1.startup pc2.startup pc3.startup pc4.startup switch.startup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/04-10-09-06-Screen Shot 2021-10-04 at 10.09.01.png" width="600"></blockquote><h3 id="thiet-lap-cac-file" tabindex="-1"><a class="header-anchor" href="#thiet-lap-cac-file" aria-hidden="true">#</a> Thi\u1EBFt l\u1EADp c\xE1c file</h3><p>:::: tabs</p><p>::: tab lab.conf</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>pc1[0]=A
pc2[0]=B
pc3[0]=C
pc4[0]=D
switch[0]=A
switch[1]=B
switch[2]=C
switch[3]=D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: tab pc1.startup</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>ifconfig eth0 10.0.0.10/24 up
ifconfig eth0 hw ether 00:00:00:00:00:10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: tab pc2.startup</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>ifconfig eth0 10.0.0.20/24 up
ifconfig eth0 hw ether 00:00:00:00:00:20
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: tab pc3.startup</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>ifconfig eth0 10.0.0.30/24 up
ifconfig eth0 hw ether 00:00:00:00:00:30
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: tab pc4.startup</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>ifconfig eth0 10.0.0.40/24 up
ifconfig eth0 hw ether 00:00:00:00:00:40
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: tab switch.startup</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>ifconfig eth0 up
ifconfig eth0 hw ether 00:00:00:00:10:10
ifconfig eth1 up
ifconfig eth1 hw ether 00:00:00:00:20:20
ifconfig eth2 up
ifconfig eth2 hw ether 00:00:00:00:30:30
ifconfig eth3 up
ifconfig eth3 hw ether 00:00:00:00:40:40
brctl addbr br0
brctl addif br0 eth0
brctl addif br0 eth1
brctl addif br0 eth2
brctl addif br0 eth3
brctl stp br0 on
ifconfig br0 up
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: ::::</p><blockquote><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/04-11-06-51-4f3ba542094ec010995f.jpg"></blockquote><div class="custom-container tip"><p class="custom-container-title">\u{1F914} GI\u1EA2I TH\xCDCH</p><ul><li><p>Ch\u1EC9 s\u1ED1 in <mark>m\xE0u v\xE0ng</mark> l\xE0 \u0111\u1ECBa ch\u1EC9 v\u1EADt l\xFD</p></li><li><p><code>hw ether</code> l\xE0 g\u1EAFn \u0111\u1ECBa ch\u1EC9 <code>MAC</code> cho m\u1EA1ng</p></li><li><p>Trong file <code>switch.startup</code> :</p><ol><li><p>T\u1EA1o ra c\u1EA7u n\u1ED1i t\xEAn l\xE0 <code>br0</code> v\xE0 n\u1ED1i \u1EDF c\xE1c nh\xE1nh kh\xE1c nhau</p></li><li><p>L\u1EC7nh <code>addbr</code> : t\u1EA1o ra m\u1ED9t c\u1EA7u n\u1ED1i n\u1ED1i (<code>br0</code>, <code>br1</code>...) \u0111\u1EC3 n\u1ED1i nh\xE1nh <code>A</code>,<code>B</code>,<code>C</code> v\xE0 <code>D</code> l\u1EA1i</p></li><li><p>L\u1EC7nh <code>addif</code> : \u0110\u0103ng k\xFD c\xE1c c\u1ED5ng c\u1EE7a <code>switch</code> \u1EA3o v\xE0 c\u1EA7u n\u1ED1i. C\xE1c c\u1ED5ng thu\u1ED9c chung 1 c\u1EA7u n\u1ED1i th\xEC truy\u1EC1n d\u1EEF li\u1EC7u cho nhau</p></li><li><p>L\u1EC7nh <code>stp &lt;name_of_bridge&gt;</code> : K\xEDch ho\u1EA1t gi\u1EA3i thu\u1EADt <code>STP</code> tr\xEAn m\u1ED9t c\u1EA7u n\u1ED1i c\u1EE7a <code>switch</code> \u1EA3o</p></li><li><p>L\u1EC7nh <code>ifconfig &lt;name_of_bridge&gt;</code> : K\xEDch ho\u1EA1t c\u1EA7u n\u1ED1i (<code>br0</code>, <code>br1</code>...)</p></li></ol></li></ul></div><h3 id="khoi-tao-he-thong-may-ao" tabindex="-1"><a class="header-anchor" href="#khoi-tao-he-thong-may-ao" aria-hidden="true">#</a> Kh\u1EDFi t\u1EA1o h\u1EC7 th\u1ED1ng m\xE1y \u1EA3o</h3><p>S\u1EED d\u1EE5ng l\u1EC7nh <code>Kathara</code> sau :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>kathara lstart pc1 pc2 pc3 pc4 switch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Tr\xEAn thi\u1EBFt b\u1ECB <code>switch</code> s\u1EED d\u1EE5ng <code>MAC Lookup Table</code> b\u1EB1ng l\u1EC7nh sau :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>brctl showmacs br0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/04-10-55-01-Screenshot from 2021-10-04 10-54-32.png"><p>Tr\xEAn m\xE1y \u1EA3o <code>pc1</code>, <code>pc3</code>, <code>switch</code> th\u1EF1c hi\u1EC7n l\u1EC7nh <code>tcpdump</code> nh\u01B0 sau :</p><p>:::: tabs</p><p>::: tab pc1</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>tcpdump -e -q -w /shared/BT8_pc1.pcap
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>:::</p><p>::: tab pc2</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>tcpdump -e -q -w /shared/BT8_pc2.pcap
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>:::</p><p>::: tab switch</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>tcpdump -e -q -w /shared/BT8_switch.pcap
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>::: ::::</p><div class="custom-container tip"><p class="custom-container-title">\u{1F914} GI\u1EA2I TH\xCDCH</p><ul><li><p><code>-e</code> : Thay v\xEC hi\u1EC3n th\u1ECB \u0111\u1ECBa ch\u1EC9 <code>IP</code> s\u1EBD \u0111\u01B0\u1EE3c thay th\u1EBF b\u1EB1ng \u0111\u1ECBa ch\u1EC9 <code>MAC</code></p></li><li><p><code>-q</code> : Hi\u1EC3n th\u1ECB \xEDt th\xF4ng tin h\u01A1n</p></li><li><p><code>-w</code> : Xu\u1EA5t file ra \u0111\u01B0\u1EDDng d\u1EABn c\u1EE5 th\u1EC3</p></li></ul></div><p>T\u1EEB <code>pc2</code> th\u1EF1c hi\u1EC7n ping t\u1EDBi <code>pc3</code> b\u1EB1ng l\u1EC7nh <code>ping 10.0.0.30 -c 10</code></p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/04-11-42-42-Screen Shot 2021-10-04 at 11.42.31.png"><p>Th\u1EF1c hi\u1EC7n g\xF5 l\u1EA1i l\u1EC7nh <code>brctl showmacs br0</code> tr\xEAn <code>switch</code> v\xE0 xem kh\xE1c bi\u1EC7t :</p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/04-11-44-44-Screenshot from 2021-10-04 11-44-00.png"><div class="custom-container tip"><p class="custom-container-title">\u{1F4A1} NH\u1EACN X\xC9T</p><p>Sau khi s\u1EED d\u1EE5ng l\u1EC7nh <code>ping</code> t\u1EEB <code>switch</code> \u0111\xE3 s\xE0n l\u1ECDc l\u1EA1i c\xE1c \u0111\u1ECBa ch\u1EC9 v\u1EADt l\xFD c\u1EE7a c\xE1c m\xE1y hi\u1EC7n c\xF3 v\xE0 c\u1EADp nh\u1EADt n\xF3 v\xE0o trong <code>MAC Lookup Table</code></p></div><h3 id="phan-tich-goi-pcap-tren-wireshark" tabindex="-1"><a class="header-anchor" href="#phan-tich-goi-pcap-tren-wireshark" aria-hidden="true">#</a> Ph\xE2n t\xEDch g\xF3i pcap tr\xEAn WireShark</h3><p>Trong th\u01B0 m\u1EE5c <code>shared</code> \u1EDF <code>BaiTap8</code>, c\xF3 ch\u1EE9a c\xE1c file <code>.pcap</code> \u0111\xE3 \u0111\u01B0\u1EE3c ph\xE2n t\xEDch tr\u01B0\u1EDBc \u0111\xF3</p><h4 id="hay-mo-file-bt8-switch-pcap-bang-wireshark" tabindex="-1"><a class="header-anchor" href="#hay-mo-file-bt8-switch-pcap-bang-wireshark" aria-hidden="true">#</a> H\xE3y m\u1EDF file <code>BT8_switch.pcap</code> b\u1EB1ng <code>WireShark</code>:</h4><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/04-12-55-11-Screenshot from 2021-10-04 12-54-43.png"><h5 id="chon-khung-giao-dien-co-giao-thuc-arp-\u0111en-tu-\u0111ia-chi-mac-00-00-00-00-00-20" tabindex="-1"><a class="header-anchor" href="#chon-khung-giao-dien-co-giao-thuc-arp-\u0111en-tu-\u0111ia-chi-mac-00-00-00-00-00-20" aria-hidden="true">#</a> Ch\u1ECDn khung giao di\u1EC7n c\xF3 giao th\u1EE9c <code>ARP</code> \u0111\u1EBFn t\u1EEB \u0111\u1ECBa ch\u1EC9 <code>MAC</code> : <code>00:00:00:00:00:20</code></h5><blockquote><p>Tr\xEAn h\xECnh l\xE0 khung s\u1ED1 <code>8</code></p></blockquote><div class="custom-container tip"><p class="custom-container-title">\u{1F4A1} NH\u1EACN X\xC9T</p><ul><li><p><code>Switch</code> nh\u1EADn \u0111\u01B0\u1EE3c khung d\u1EEF li\u1EC7u n\xE0y v\xEC <code>pc2</code> \u0111\xE3 <strong>ping</strong> t\u1EDBi <code>pc3</code>. <code>pc2</code> truy\u1EC1n th\xF4ng \u0111i\u1EC7p t\u1EDBi <code>switch</code> \u0111\u1EC3 t\xECm \u0111\u1ECBa ch\u1EC9 <code>MAC</code> c\u1EE7a <code>pc3</code></p></li><li><p>Khung d\u1EEF li\u1EC7u n\xE0y c\xF3 \xFD ngh\u0129a <code>switch</code> \u0111\xE3 nh\u1EADn \u0111\u01B0\u1EE3c y\xEAu c\u1EA7u t\xECm \u0111\u1ECBa ch\u1EC9 v\u1EADt l\xFD c\u1EE7a <code>pc3</code> m\xE0 <code>pc2</code> g\u1EEDi t\u1EDBi</p></li></ul></div><h5 id="chon-khung-giao-dien-co-giao-thuc-arp-\u0111en-tu-\u0111ia-chi-mac-00-00-00-00-00-30" tabindex="-1"><a class="header-anchor" href="#chon-khung-giao-dien-co-giao-thuc-arp-\u0111en-tu-\u0111ia-chi-mac-00-00-00-00-00-30" aria-hidden="true">#</a> Ch\u1ECDn khung giao di\u1EC7n c\xF3 giao th\u1EE9c <code>ARP</code> \u0111\u1EBFn t\u1EEB \u0111\u1ECBa ch\u1EC9 <code>MAC</code> : <code>00:00:00:00:00:30</code></h5><blockquote><p>Tr\xEAn h\xECnh l\xE0 khung s\u1ED1 <code>9</code></p></blockquote><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/04-12-59-03-Screen Shot 2021-10-04 at 12.58.53.png"><div class="custom-container tip"><p class="custom-container-title">\u{1F4A1} NH\u1EACN X\xC9T</p><ul><li><p><code>Switch</code> nh\u1EADn \u0111\u01B0\u1EE3c khung d\u1EEF li\u1EC7u n\xE0y v\xEC \u0111\xE3 t\xECm th\u1EA5y \u0111\u01B0\u1EE3c \u0111\u1ECBa ch\u1EC9 v\u1EADt l\xFD c\u1EE7a <code>pc3</code></p></li><li><p>Khung d\u1EEF li\u1EC7u n\xE0y c\xF3 \xFD ngh\u0129a l\xE0 <code>switch</code> \u0111\xE3 g\u1EEDi \u0111\u1ECBa ch\u1EC9 v\u1EADt l\xFD c\u1EE7a <code>pc3</code> t\u1EDBi <code>pc2</code></p></li></ul></div><h4 id="mo-file-bt8-pc1-pcap-bang-wireshark" tabindex="-1"><a class="header-anchor" href="#mo-file-bt8-pc1-pcap-bang-wireshark" aria-hidden="true">#</a> M\u1EDF file <code>BT8_pc1.pcap</code> b\u1EB1ng <code>WireShark</code></h4><h5 id="chon-khung-du-lieu-co-giao-thuc-arp-\u0111en-tu-\u0111ia-chi-mac-00-00-00-00-00-20" tabindex="-1"><a class="header-anchor" href="#chon-khung-du-lieu-co-giao-thuc-arp-\u0111en-tu-\u0111ia-chi-mac-00-00-00-00-00-20" aria-hidden="true">#</a> Ch\u1ECDn khung d\u1EEF li\u1EC7u c\xF3 giao th\u1EE9c <code>ARP</code> \u0111\u1EBFn t\u1EEB \u0111\u1ECBa ch\u1EC9 MAC <code>00:00:00:00:00:20</code></h5><blockquote><p>Tr\xEAn h\xECnh l\xE0 khung <code>43</code></p></blockquote><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/04-13-03-30-Screen Shot 2021-10-04 at 13.03.25.png"><div class="custom-container tip"><p class="custom-container-title">\u{1F4A1} NH\u1EACN X\xC9T</p><ul><li><p><code>pc1</code> nh\u1EADn \u0111\u01B0\u1EE3c d\u1EEF li\u1EC7u n\xE0y v\xEC <code>switch</code> truy\u1EC1n qu\u1EA3ng b\xE1 khung d\u1EEF li\u1EC7u ra t\u1EA5t c\u1EA3 c\xE1c c\u1ED5ng \u0111\u1EC3 t\xECm \u0111\u01B0\u1EE3c \u0111\u1ECBa ch\u1EC9 v\u1EADt l\xFD c\u1EE7a <code>pc3</code></p></li><li><p>Khung d\u1EEF li\u1EC7u n\xE0y c\xF3 \xFD ngh\u0129a <code>pc1</code> s\u1EBD kh\xF4ng h\u1ED3i \u0111\xE1p v\xEC <code>10.0.0.30</code> kh\xF4ng ph\u1EA3i l\xE0 IP c\u1EE7a <code>pc1</code></p></li></ul></div><h4 id="mo-file-bt8-pc3-pcap-bang-wireshark" tabindex="-1"><a class="header-anchor" href="#mo-file-bt8-pc3-pcap-bang-wireshark" aria-hidden="true">#</a> M\u1EDF file <code>BT8_pc3.pcap</code> b\u1EB1ng <code>WireShark</code></h4><h5 id="chon-khung-du-lieu-co-giao-thuc-arp-\u0111en-tu-\u0111ia-chi-mac-00-00-00-00-00-20-1" tabindex="-1"><a class="header-anchor" href="#chon-khung-du-lieu-co-giao-thuc-arp-\u0111en-tu-\u0111ia-chi-mac-00-00-00-00-00-20-1" aria-hidden="true">#</a> Ch\u1ECDn khung d\u1EEF li\u1EC7u c\xF3 giao th\u1EE9c <code>ARP</code> \u0111\u1EBFn t\u1EEB \u0111\u1ECBa ch\u1EC9 MAC <code>00:00:00:00:00:20</code></h5><blockquote><p>Tr\xEAn h\xECnh l\xE0 khung <code>30</code></p></blockquote><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/04-13-07-25-Screen Shot 2021-10-04 at 13.07.17.png"><div class="custom-container tip"><p class="custom-container-title">\u{1F4A1} NH\u1EACN X\xC9T</p><ul><li><p><code>pc3</code> nh\u1EADn \u0111\u01B0\u1EE3c khung n\xE0y v\xEC <code>switch</code> truy\u1EC1n b\xE1 khung d\u1EEF li\u1EC7u ra t\u1EA5t c\u1EA3 c\xE1c c\u1ED5ng \u0111\u1EC3 t\xECm \u0111\u1ECBa ch\u1EC9 v\u1EADt l\xFD c\u1EE7a <code>pc3</code></p></li><li><p><code>pc3</code> s\u1EBD ph\u1EA3n h\u1ED3i khung n\xE0y, v\xEC \u0111\u1ECBa ch\u1EC9 c\u1EE7a <code>pc3</code> l\xE0 <code>10.0.0.30</code> kh\u1EDBp v\u1EDBi \u0111\u1ECBa ch\u1EC9 <code>switch</code> \u0111ang t\xECm ki\u1EBFm</p></li></ul></div><hr><div class="custom-container tip"><p class="custom-container-title">\u{1F4DD} K\u1EBET LU\u1EACN</p><ul><li><p>Sau khi th\u1EF1c hi\u1EC7n <code>ping</code> gi\u1EEFa 2 m\xE1y \u1EA3o c\xF3 c\xF9ng <code>switch</code> th\xEC <code>switch</code> s\u1EBD truy\u1EC1n d\u1EEF li\u1EC7u t\xECm ki\u1EBFm \u0111\u1EBFn t\u1EA5t c\u1EA3 c\xE1c thi\u1EBFt b\u1ECB \u0111\u01B0\u1EE3c <code>switch</code> n\u1ED1i k\u1EBFt trong c\xF9ng m\u1EA1ng <code>LAN</code></p></li><li><p>Sau \u0111\xF3 <code>switch</code> <strong>h\u1ECDc</strong> \u0111\u01B0\u1EE3c \u0111\u1ECBa ch\u1EC9 v\u1EADt l\xFD c\u1EE7a c\xE1c m\xE1y t\xEDnh \u0111\xF3 v\xE0 c\u1EADp nh\u1EADt v\xE0o trong <code>MAC Lookup Table</code></p></li></ul></div><h3 id="huy-he-thong-may-ao" tabindex="-1"><a class="header-anchor" href="#huy-he-thong-may-ao" aria-hidden="true">#</a> Hu\u1EF7 h\u1EC7 th\u1ED1ng m\xE1y \u1EA3o</h3><p>S\u1EED d\u1EE5ng l\u1EC7nh sau \u0111\u1EC3 hu\u1EF7 h\u1EC7 th\u1ED1ng m\xE1y \u1EA3o v\u1EEBa t\u1EA1o :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>kathara wipe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/04-13-13-37-Screen Shot 2021-10-04 at 13.13.33.png" width="600"></blockquote><h2 id="_2-bai-tap-9" tabindex="-1"><a class="header-anchor" href="#_2-bai-tap-9" aria-hidden="true">#</a> 2. B\xE0i t\u1EADp 9</h2><div class="custom-container tip"><p class="custom-container-title">\u{1F4A1} M\xD4 H\xCCNH</p><p>X\xE2y d\u1EE5ng m\xF4 h\xECnh m\u1EA1ng nh\u01B0 sau :</p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/04-13-14-34-Screen Shot 2021-10-04 at 13.14.27.png"></div><h3 id="tao-thu-muc-va-cac-file-1" tabindex="-1"><a class="header-anchor" href="#tao-thu-muc-va-cac-file-1" aria-hidden="true">#</a> T\u1EA1o th\u01B0 m\u1EE5c v\xE0 c\xE1c file</h3><p>T\u1EA1o c\xE1c th\u01B0 m\u1EE5c theo m\xF4 h\xECnh nh\u01B0 sau :</p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/04-15-08-05-Screenshot from 2021-10-04 15-07-25.png"><p>B\u1EB1ng c\xE1ch s\u1EED d\u1EE5ng c\xE1c l\u1EC7nh sau :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mkdir ~/Desktop/BaiTap9
cd ~/Desktop/BaiTap9
mkdir pc1 pc2 pc3 pc4 pc5 pc6 pc7 pc8 switch1 switch2
touch lab.conf pc1.startup pc2.startup pc3.startup pc4.startup pc5.startup pc6.startup pc7.startup pc8.startup switch1.startup switch2.startup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/04-15-06-38-Screen Shot 2021-10-04 at 15.06.31.png"></blockquote><h3 id="thiet-lap-cac-file-1" tabindex="-1"><a class="header-anchor" href="#thiet-lap-cac-file-1" aria-hidden="true">#</a> Thi\u1EBFt l\u1EADp c\xE1c file</h3><p>:::: tabs</p><p>::: tab lab.conf</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>pc1[0]=A
pc2[0]=B
pc3[0]=C
pc4[0]=D
pc5[0]=E
pc6[0]=F
pc7[0]=G
pc8[0]=H
switch1[0]=A
switch1[1]=B
switch1[2]=C
switch1[3]=D
switch1[4]=K
switch2[0]=E
switch2[1]=F
switch2[2]=G
switch2[3]=H
switch2[4]=K
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: tab pc1.startup</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>ifconfig eth0 10.0.0.10/24 up
ifconfig eth0 hw ether 00:00:00:00:00:10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: tab pc2.startup</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>ifconfig eth0 10.0.0.20/24 up
ifconfig eth0 hw ether 00:00:00:00:00:20
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: tab pc3.startup</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>ifconfig eth0 10.0.0.30/24 up
ifconfig eth0 hw ether 00:00:00:00:00:30
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: tab pc4.startup</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>ifconfig eth0 10.0.0.40/24 up
ifconfig eth0 hw ether 00:00:00:00:00:40
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: tab pc5.startup</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>ifconfig eth0 10.0.0.11/24 up
ifconfig eth0 hw ether 00:00:00:00:77:10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: tab pc6.startup</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>ifconfig eth0 10.0.0.22/24 up
ifconfig eth0 hw ether 00:00:00:00:77:20
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: tab pc7.startup</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>ifconfig eth0 10.0.0.33/24 up
ifconfig eth0 hw ether 00:00:00:00:77:30
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: tab pc8.startup</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>ifconfig eth0 10.0.0.44/24 up
ifconfig eth0 hw ether 00:00:00:00:77:40
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: tab switch1.startup</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>ifconfig eth0 up
ifconfig eth0 hw ether 00:00:00:00:10:10
ifconfig eth1 up
ifconfig eth1 hw ether 00:00:00:00:20:20
ifconfig eth2 up
ifconfig eth2 hw ether 00:00:00:00:30:30
ifconfig eth3 up
ifconfig eth3 hw ether 00:00:00:00:40:40
ifconfig eth4 up
ifconfig eth4 hw ether 00:00:00:00:50:50
brctl addbr br0
brctl addif br0 eth0
brctl addif br0 eth1
brctl addif br0 eth2
brctl addif br0 eth3  
brctl addif br0 eth4
brctl stp br0 on
ifconfig br0 up  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: tab switch2.startup</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>ifconfig eth0 up 
ifconfig eth0 hw ether 00:00:00:00:88:10
ifconfig eth1 up
ifconfig eth1 hw ether 00:00:00:00:88:20
ifconfig eth2 up
ifconfig eth2 hw ether 00:00:00:00:88:30
ifconfig eth3 up
ifconfig eth3 hw ether 00:00:00:00:88:40
ifconfig eth4 up
ifconfig eth4 hw ether 00:00:00:00:88:50
brctl addbr br0
brctl addif br0 eth0
brctl addif br0 eth1
brctl addif br0 eth2
brctl addif br0 eth3
brctl addif br0 eth4
brctl stp br0 on
ifconfig br0 up
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: ::::</p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/04-16-53-04-49186767646fad31f47e.jpg"><h3 id="khoi-tao-he-thong-may-ao-1" tabindex="-1"><a class="header-anchor" href="#khoi-tao-he-thong-may-ao-1" aria-hidden="true">#</a> Kh\u1EDFi t\u1EA1o h\u1EC7 th\u1ED1ng m\xE1y \u1EA3o</h3><p>S\u1EED d\u1EE5ng l\u1EC7nh <code>kathara</code> sau \u0111\u1EC3 kh\u1EDFi th\u1ED9ng h\u1EC7 th\u1ED1ng m\xE1y \u1EA3o</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>kathara lstart pc1 pc2 pc3 pc4 pc5 pc6 pc7 pc8 switch1 switch2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">\u26A0\uFE0F L\u01AFU \xDD</p><p>N\u1EBFu xu\u1EA5t hi\u1EC7n l\u1ED7i g\xEC tr\u01B0\u1EDBc d\xF2ng <code>End Startup Commands Log</code>, th\xEC ki\u1EC3m tra l\u1EA1i file c\u1EA5u h\xECnh c\xF3 \u0111\xFAng kh\xF4ng</p></div><p>Ki\u1EC3m tra <strong>MAC Lookup Table</strong> cho <code>switch1</code> v\xE0 <code>switch2</code> b\u1EB1ng l\u1EC7nh sau:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>brctl showmacs br0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/04-16-58-07-Screenshot from 2021-10-04 16-56-30.png"></th><th><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/04-16-58-09-Screenshot from 2021-10-04 16-56-39.png"></th></tr></thead></table><h4 id="tren-may-ao-switch1-va-switch2-thuc-hien-lenh-tcpdump-nhu-sau" tabindex="-1"><a class="header-anchor" href="#tren-may-ao-switch1-va-switch2-thuc-hien-lenh-tcpdump-nhu-sau" aria-hidden="true">#</a> Tr\xEAn m\xE1y \u1EA3o <code>switch1</code> v\xE0 <code>switch2</code> th\u1EF1c hi\u1EC7n l\u1EC7nh <code>tcpdump</code> nh\u01B0 sau:</h4><p>:::: tabs</p><p>::: tab switch1</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>tcpdump -e -q -w /shared/BT9_switch1.pcap
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>:::</p><p>::: tab switch2</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>tcpdump -e -q -w /shared/BT9_switch2.pcap
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>::: ::::</p><p>Sau \u0111\xF3 d\u1EEBng <code>switch1</code> v\xE0 <code>switch2</code> b\u1EB1ng l\u1EC7nh <code>CTRL+C</code></p><blockquote><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/04-17-35-11-Screen Shot 2021-10-04 at 17.34.55.png"></blockquote><p>S\u1EED d\u1EE5ng l\u1EA1i l\u1EC7nh <code>brctl showmacs br0</code> cho <code>switch1</code> v\xE0 <code>switch2</code> \u0111\u1EC3 xem s\u1EF1 kh\xE1c bi\u1EC7t</p><blockquote><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/04-17-49-07-9aa686093201fb5fa210.jpg"></blockquote><div class="custom-container tip"><p class="custom-container-title">\u{1F4A1} NH\u1EACN X\xC9T</p><ul><li><p><code>switch1</code> h\u1ECDc \u0111\u1ECBa ch\u1EC9 c\u1EE7a <code>pc1</code> v\xE0 <code>pc4</code></p></li><li><p><code>switch2</code> ch\u1EC9 h\u1ECDc \u0111\u01B0\u1EE3c \u0111\u1ECBa ch\u1EC9 c\u1EE7a <code>pc1</code>, (v\xEC <code>pc1</code> ping t\u1EDBi <code>pc4</code>), \u0111\u01B0\u1EDDng \u0111i n\xE0y kh\xF4ng qua n\u1ED1i k\u1EBFt \u0111\u1EBFn <code>LAN</code> trong <code>switch2</code></p></li><li><p><code>pc5</code>, <code>pc6</code>, <code>pc7</code>, <code>pc8</code> c\xF3 nh\u1EADn \u0111\u01B0\u1EE3c g\xF3i tin <code>ICMP</code> \u0111\u1EBFn t\u1EEB <code>pc1</code></p></li></ul></div><h4 id="tren-may-ao-switch1-va-switch2-thuc-hien-lenh-tcpdump-nhu-sau-1" tabindex="-1"><a class="header-anchor" href="#tren-may-ao-switch1-va-switch2-thuc-hien-lenh-tcpdump-nhu-sau-1" aria-hidden="true">#</a> Tr\xEAn m\xE1y \u1EA3o <code>switch1</code> v\xE0 <code>switch2</code> th\u1EF1c hi\u1EC7n l\u1EC7nh <code>tcpdump</code> nh\u01B0 sau:</h4><p>:::: tabs</p><p>::: tab switch1</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>tcpdump -e -q -w /shared/BT9_switch1_B.pcap
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>:::</p><p>::: tab switch2</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>tcpdump -e -q -w /shared/BT9_switch2_B.pcap
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>::: ::::</p><p>T\u1EEB <code>pc2</code> ping t\u1EDBi <code>pc7</code> b\u1EB1ng l\u1EC7nh sau :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ping 10.0.0.33 -c 10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/04-18-07-54-Screen Shot 2021-10-04 at 18.07.44.png"></blockquote><p>G\xF5 l\u1EA1i l\u1EC7nh <code>brctl showmacs br0</code> cho thi\u1EBFt b\u1ECB <code>switch1</code> v\xE0 <code>switch2</code></p><blockquote><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/04-18-09-36-Screen Shot 2021-10-04 at 18.09.25.png"></blockquote><div class="custom-container tip"><p class="custom-container-title">\u{1F4A1} NH\u1EACN X\xC9T</p><ul><li><p><code>switch1</code> ch\u1EC9 h\u1ECDc \u0111\u01B0\u1EE3c \u0111\u1ECBa ch\u1EC9 c\u1EE7a m\xE1y <code>pc2</code>,<code>pc7</code></p></li><li><p><code>switch2</code> ch\u1EC9 h\u1ECDc \u0111\u01B0\u1EE3c \u0111\u1ECBa ch\u1EC9 c\u1EE7a m\xE1y <code>pc2</code>, <code>pc2</code></p></li><li><p><code>pc5</code>, <code>pc6</code>, <code>pc7</code>, <code>pc8</code> c\xF3 nh\u1EADn \u0111\u01B0\u1EE3c g\xF3i tin t\u1EEB <code>pc2</code></p></li></ul></div><hr><div class="custom-container tip"><p class="custom-container-title">\u{1F4DD} K\u1EBET LU\u1EACN</p><ul><li><p>N\u1EBFu ping gi\u1EEFa 2 m\xE1y kh\xE1c nhau kh\xE1c nh\xE1nh m\u1EA1ng <code>LAN</code></p></li><li><p><code>Switch</code> nh\u1EADn \u0111\u01B0\u1EE3c \u0111\u1ECBa ch\u1EC9 v\u1EADt l\xFD c\u1EE7a m\xE1y t\xEDnh thu\u1ED9c c\xF9ng nh\xE1nh m\u1EA1ng \u0111\xF3 ho\u1EB7c kh\xE1c nh\xE1nh</p></li></ul></div><h3 id="huy-he-thong-may-ao-1" tabindex="-1"><a class="header-anchor" href="#huy-he-thong-may-ao-1" aria-hidden="true">#</a> Hu\u1EF7 h\u1EC7 th\u1ED1ng m\xE1y \u1EA3o</h3><p>S\u1EED d\u1EE5ng l\u1EC7nh sau \u0111\u1EC3 hu\u1EF7 h\u1EC7 th\u1ED1ng m\xE1y \u1EA3o v\u1EEBa t\u1EA1o :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>kathara wipe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/04-18-16-09-Screen Shot 2021-10-04 at 18.16.02.png" width="600"></blockquote><h2 id="_3-bai-tap-10" tabindex="-1"><a class="header-anchor" href="#_3-bai-tap-10" aria-hidden="true">#</a> 3. B\xE0i t\u1EADp 10</h2><div class="custom-container tip"><p class="custom-container-title">\u{1F4A1} M\xD4 H\xCCNH</p><p>X\xE2y d\u1EF1ng m\xF4 h\xECnh sau :</p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/04-18-19-00-Screen Shot 2021-10-04 at 18.18.54.png" width="500"></div><h3 id="tao-thu-muc-va-cac-file-2" tabindex="-1"><a class="header-anchor" href="#tao-thu-muc-va-cac-file-2" aria-hidden="true">#</a> T\u1EA1o th\u01B0 m\u1EE5c v\xE0 c\xE1c file</h3><p>T\u1EA1o c\xE1c th\u01B0 m\u1EE5c theo m\xF4 h\xECnh nh\u01B0 sau :</p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/05-11-22-52-Screenshot from 2021-10-05 11-21-29.png"><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mkdir ~/Desktop/BaiTap10
cd ~/Desktop/BaiTap10
mkdir pc1 pc2 pc3 pc4 switch1 switch2 router
touch lab.conf pc1.startup pc2.startup pc3.startup pc4.startup switch1.startup switch2.startup router.startup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/05-11-21-10-Screen Shot 2021-10-05 at 11.21.00.png" width="600"></blockquote><h3 id="thiet-lap-cac-file-2" tabindex="-1"><a class="header-anchor" href="#thiet-lap-cac-file-2" aria-hidden="true">#</a> Thi\u1EBFt l\u1EADp c\xE1c file</h3><div class="custom-container warning"><p class="custom-container-title">\u26A0\uFE0F L\u01AFU \xDD</p><p>V\xEC m\xF4 h\xECnh kh\xF4ng c\xF3 IP t\u0129nh v\xE0 c\xE1c t\xEAn nh\xE1nh m\u1EA1ng s\u1EB5n n\xEAn ta ph\u1EA3i t\u1EF1 \u0111i\u1EC1n, tham kh\u1EA3o nh\u01B0 sau :</p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/05-11-44-10-Screen Shot 2021-10-05 at 11.39.10.png" width="500"></div><p>:::: tabs</p><p>::: tab lab.conf</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>pc1[0]=A
pc2[0]=B
pc3[0]=D
pc4[0]=E
switch1[0]=A
switch1[1]=B
switch1[2]=C
switch2[0]=D
switch2[1]=E
switch2[2]=F
router[0]=C
router[1]=F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: tab pc1.startup</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>ifconfig eth0 192.168.10.10/24 up
route add default gw 192.168.10.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: tab pc2.startup</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>ifconfig eth0 192.168.10.11/24 up
route add default gw 192.168.10.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: tab pc3.startup</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>ifconfig eth0 192.168.11.10/24 up
route add default gw 192.168.11.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: tab pc4.startup</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>ifconfig eth0 192.168.11.11/24 up
route add default gw 192.168.11.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: tab switch1.startup</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>ifconfig eth0 up
ifconfig eth1 up
ifconfig eth2 up
brctl addbr br0
brctl addif br0 eth0
brctl addif br0 eth1
brctl addif br0 eth2
brctl stp br0 on
ifconfig br0 up
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: tab switch2.startup</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>ifconfig eth0 up
ifconfig eth1 up
ifconfig eth2 up
brctl addbr br0
brctl addif br0 eth0
brctl addif br0 eth1
brctl addif br0 eth2
brctl stp br0 on
ifconfig br0 up
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: tab router.startup</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>ifconfig eth0 192.168.10.1/24 up
ifconfig eth1 192.168.11.1/24 up
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>::: ::::</p><blockquote><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/05-12-36-05-Screen Shot 2021-10-05 at 12.35.57.png"></blockquote><h3 id="khoi-tao-he-thong-may-ao-2" tabindex="-1"><a class="header-anchor" href="#khoi-tao-he-thong-may-ao-2" aria-hidden="true">#</a> Kh\u1EDFi t\u1EA1o h\u1EC7 th\u1ED1ng m\xE1y \u1EA3o</h3><p>S\u1EED d\u1EE5ng l\u1EC7nh <code>kathara</code> sau \u0111\u1EC3 kh\u1EDFi ch\u1EA1y thi\u1EBFt b\u1ECB m\xE1y \u1EA3o v\u1EEBa t\u1EA1o :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>kathara lstart pc1 pc2 pc3 pc4 router switch1 switch2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u{1F4A1} M\u1EB8O</p><p>H\xE3y ch\u1EAFc r\u1EB1ng c\xE1c thi\u1EBFt b\u1ECB c\u1EE7a b\u1EA1n \u0111\u1EC1u ch\xEDnh x\xE1c, h\xE3y ki\u1EC3m tra <code>Startup Commands Log</code> tr\xEAn t\u1EEBng thi\u1EBFt b\u1ECB xem c\xF3 c\xE1i n\xE0y b\u1ECB l\u1ED7i hay kh\xF4ng</p></div><p>S\u1EED d\u1EE5ng l\u1EC7nh <code>brctl showmacs br0</code> cho <code>switch1</code> v\xE0 <code>switch2</code></p><blockquote><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/05-12-37-21-Screen Shot 2021-10-05 at 12.37.12.png"></blockquote><p>S\u1EED d\u1EE5ng l\u1EC7nh <code>tcpdump</code> sau l\u1EA7n l\u01B0\u1EE3t cho <code>switch1</code> v\xE0 <code>switch2</code> nh\u01B0 sau :</p><p>:::: tabs</p><p>::: tab switch1</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>tcpdump -e -q -w /shared/BT10_swtich1.pcap
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>:::</p><p>::: tab switch2</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>tcpdump -e -q -w /shared/BT10_switch2.pcap
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>::: ::::</p><p>Sau \u0111\xF3 t\u1EEB <code>pc1</code> s\u1EED d\u1EE5ng l\u1EC7nh ping t\u1EDBi <code>pc2</code>, <code>pc3</code> v\xE0 <code>pc4</code> nh\u01B0 sau:</p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/05-12-41-00-Screen Shot 2021-10-05 at 12.40.19.png"><p>S\u1EED d\u1EE5ng l\u1EA1i l\u1EC7nh <code>brctl showmacs br0</code> cho <code>switch1</code> v\xE0 <code>switch2</code> \u0111\u1EC3 xem l\u1EA1i c\u1EADp nh\u1EADt <strong>MAC Lookup Table</strong></p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/05-12-42-28-Screen Shot 2021-10-05 at 12.42.20.png"><blockquote><p>C\xE1c \u0111\u1ECBa ch\u1EC9 v\u1EADt l\xFD <code>ip</code> c\u1EE7a nhi\u1EC1u thi\u1EBFt b\u1ECB \u0111\xE3 \u0111\u01B0\u1EE3c c\xE1c <code>switch</code> h\u1ECDc khi s\u1EED d\u1EE5ng <code>ping</code> t\u1EDBi t\u1EEBng thi\u1EBFt b\u1ECB</p></blockquote><h3 id="huy-he-thong-may-ao-2" tabindex="-1"><a class="header-anchor" href="#huy-he-thong-may-ao-2" aria-hidden="true">#</a> Hu\u1EF7 h\u1EC7 th\u1ED1ng m\xE1y \u1EA3o</h3><p>S\u1EED d\u1EE5ng l\u1EC7nh sau \u0111\u1EC3 hu\u1EF7 h\u1EC7 th\u1ED1ng m\xE1y \u1EA3o :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>kathara wipe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/05-12-44-56-Screen Shot 2021-10-05 at 12.44.43.png" width="600"></blockquote><h2 id="_4-bai-tap-11" tabindex="-1"><a class="header-anchor" href="#_4-bai-tap-11" aria-hidden="true">#</a> 4. B\xE0i t\u1EADp 11</h2><div class="custom-container tip"><p class="custom-container-title">\u{1F4A1} M\xD4 H\xCCNH</p><p>X\xE2y d\u1EF1ng m\xF4 h\xECnh nh\u01B0 sau :</p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/05-12-57-15-Screen Shot 2021-10-05 at 12.57.06.png"></div><h3 id="tao-thu-muc-va-cac-file-3" tabindex="-1"><a class="header-anchor" href="#tao-thu-muc-va-cac-file-3" aria-hidden="true">#</a> T\u1EA1o th\u01B0 m\u1EE5c v\xE0 c\xE1c file</h3><p>T\u1EA1o c\xE1c file v\xE0 th\u01B0 m\u1EE5c theo m\xF4 h\xECnh sau :</p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/05-14-04-44-Screenshot from 2021-10-05 13-01-17.png"><p>B\u1EB1ng c\xE1ch s\u1EED d\u1EE5ng c\xE1c l\u1EC7nh sau :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mkdir ~/Desktop/BaiTap10
cd ~/Desktop/BaiTap10
mkdir pc1 pc2 pc3 pc4 pc5 pc6 pc7 pc8 switch1 switch2 switch3 switch4 router1 router2
touch lab.conf pc1.startup pc2.startup pc3.startup pc4.startup pc5.startup pc6.startup pc7.startup pc8.startup switch1.startup switch2.startup switch3.statup switch4.startup router1.startup router2.startup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/05-13-01-00-Screen Shot 2021-10-05 at 13.00.53.png" width="600"></blockquote><h3 id="thiet-lap-cac-file-3" tabindex="-1"><a class="header-anchor" href="#thiet-lap-cac-file-3" aria-hidden="true">#</a> Thi\u1EBFt l\u1EADp c\xE1c file</h3><div class="custom-container warning"><p class="custom-container-title">\u26A0\uFE0F L\u01AFU \xDD</p><p>Tr\u01B0\u1EDBc h\u1EBFt ta ph\u1EA3i l\u1EADp ra t\xEAn c\xE1c nh\xE1nh m\u1EA1ng nh\u01B0 sau :</p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/05-14-39-05-Screen Shot 2021-10-05 at 14.11.19.png"></div><p>S\u1EED d\u1EE5ng <code>gedit</code> \u0111\u1EC3 thi\u1EBFt l\u1EADp c\xE1c file nh\u01B0 sau :</p><blockquote><p>lab.conf</p></blockquote><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>pc1[0]=A
pc2[0]=B
pc3[0]=C
pc4[0]=D
pc5[0]=G
pc6[0]=H
pc7[0]=I
pc8[0]=J

switch1[0]=A
switch1[1]=B
switch1[2]=E

switch2[0]=C
switch2[1]=D
switch2[2]=F

switch3[0]=G
switch3[1]=H
switch3[2]=K

switch4[0]=I
switch4[1]=J
switch4[2]=O

router1[0]=E
router1[1]=F
router1[2]=M

router2[0]=O
router2[1]=K
router2[2]=M
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::: tabs</p><p>::: tab pc1.startup</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>ifconfig eth0 192.168.10.10/24 up
ifconfig eth0 hw ether 00:00:00:00:00:10
route add default gw 192.168.10.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: tab pc2.startup</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>ifconfig eth0 192.168.10.11/24 up
ifconfig eth0 hw ether 00:00:00:00:00:20
route add default gw 192.168.10.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: tab pc3.startup</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>ifconfig eth0 192.168.11.10/24 up
ifconfig eth0 hw ether 00:00:00:00:11:10
route add default gw 192.168.11.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: tab pc4.startup</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>ifconfig eth0 192.168.11.11/24 up
ifconfig eth0 hw ether 00:00:00:00:10:20
route add default gw 192.168.11.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: tab pc5.startup</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>ifconfig eth0 192.168.20.10/24 up
ifconfig eth0 hw ether 00:00:00:00:22:10
route add default gw 192.168.20.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: tab pc6.startup</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>ifconfig eth0 192.168.20.11/24 up
ifconfig eth0 hw ether 00:00:00:00:22:20
route add default gw 192.168.20.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: tab pc7.startup</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>ifconfig eth0 192.168.21.10/24 up
ifconfig eth0 hw ether 00:00:00:00:33:10
route add default gw 192.168.21.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: tab pc8.startup</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>ifconfig eth0 192.168.21.10/24 up
ifconfig eth0 hw ether 00:00:00:00:33:20
route add default gw 192.168.21.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: ::::</p><p>:::: tabs</p><p>::: tab switch1.startup</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>ifconfig eth0 up
ifconfig eth0 hw ether 00:00:00:00:10:10
ifconfig eth1 up
ifconfig eth1 hw ether 00:00:00:00:10:20
ifconfig eth2 up
ifconfig eth2 hw ether 00:00:00:00:10:30

brctl addbr br0
brctl addif br0 eth0
brctl addif br0 eth1
brctl addif br0 eth2
brctl stp br0 on
ifconfig br0 up
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: tab switch2.startup</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>ifconfig eth0 up
ifconfig eth0 hw ether 00:00:00:00:88:10
ifconfig eth1 up
ifconfig eth1 hw ether 00:00:00:00:88:20
ifconfig eth2 up
ifconfig eth2 hw ether 00:00:00:00:88:30

brctl addbr br0
brctl addif br0 eth0
brctl addif br0 eth1
brctl addif br0 eth2
brctl stp br0 on
ifconfig br0 up
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: tab switch3.startup</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>ifconfig eth0 up
ifconfig eth0 hw ether 00:00:00:00:20:10
ifconfig eth1 up
ifconfig eth1 hw ether 00:00:00:00:20:20
ifconfig eth2 up
ifconfig eth2 hw ether 00:00:00:00:20:30

brctl addbr br0
brctl addif br0 eth0
brctl addif br0 eth1
brctl addif br0 eth2
brctl stp br0 on
ifconfig br0 up
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: tab switch4.startup</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>ifconfig eth0 up
ifconfig eth0 hw ether 00:00:00:00:44:10
ifconfig eth1 up
ifconfig eth1 hw ether 00:00:00:00:44:20
ifconfig eth2 up
ifconfig eth2 hw ether 00:00:00:00:44:30

brctl addbr br0
brctl addif br0 eth0
brctl addif br0 eth1
brctl addif br0 eth2
brctl stp br0 on
ifconfig br0 up
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: tab router1.startup</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>ifconfig eth0 192.168.10.1/24 up
ifconfig eth1 192.168.11.1/24 up
ifconfig eth2 10.0.0.1/30 up
route add -net 192.168.20.0/24 gw 10.0.0.2
route add -net 192.168.21.0/24 gw 10.0.0.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: tab router2.startup</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>ifconfig eth0 192.168.21.1/24 up
ifconfig eth1 192.168.20.1/24 up
ifconfig eth2 10.0.0.2/30 up
route add -net 192.168.10.0/24 gw 10.0.0.1
route add -net 192.168.11.0/24 gw 10.0.0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: ::::</p><blockquote><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/05-15-04-01-Screen Shot 2021-10-05 at 15.03.54.png"><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/05-15-07-58-Screen Shot 2021-10-05 at 15.07.54.png"></blockquote><h3 id="khoi-tao-he-thong-may-ao-3" tabindex="-1"><a class="header-anchor" href="#khoi-tao-he-thong-may-ao-3" aria-hidden="true">#</a> Kh\u1EDFi t\u1EA1o h\u1EC7 th\u1ED1ng m\xE1y \u1EA3o</h3><p>S\u1EED d\u1EE5ng l\u1EC7nh <code>kathara</code> sau d\u1EC3 kh\u1EDFi t\u1EA1o m\xE1y \u1EA3o :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>kathara lstart pc1 pc2 pc3 pc4 pc5 pc6 pc7 pc8 switch1 switch2 switch3 switch4 router1 router2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u{1F4A1} M\u1EB8O</p><p>H\xE3y ch\u1EAFc r\u1EB1ng c\xE1c thi\u1EBFt b\u1ECB c\u1EE7a b\u1EA1n \u0111\u1EC1u ch\xEDnh x\xE1c, h\xE3y ki\u1EC3m tra <code>Startup Commands Log</code> tr\xEAn t\u1EEBng thi\u1EBFt b\u1ECB xem c\xF3 c\xE1i n\xE0y b\u1ECB l\u1ED7i hay kh\xF4ng</p></div><blockquote><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/05-15-27-18-Screen Shot 2021-10-05 at 15.27.03.png"></blockquote><h3 id="huy-he-thong-may-ao-3" tabindex="-1"><a class="header-anchor" href="#huy-he-thong-may-ao-3" aria-hidden="true">#</a> Hu\u1EF7 h\u1EC7 th\u1ED1ng m\xE1y \u1EA3o</h3><p>S\u1EED d\u1EE5ng l\u1EC7nh sau \u0111\u1EC3 hu\u1EF7 m\xE1y \u1EA3o :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>kathara wipe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/05-15-22-09-Screen Shot 2021-10-05 at 15.22.05.png" width="600"></blockquote>`,291);function l(h,o){const e=n("comment");return c(),a("div",null,[r,t(e)])}var p=i(s,[["render",l],["__file","3.html.vue"]]);export{p as default};
