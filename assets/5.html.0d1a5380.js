import{_ as d,r as s,o as r,c as h,b as e,a as t,w as l,e as c,d as n}from"./app.d72ab51f.js";const u={},m=c('<h1 id="buoi-5-samba-dns-va-firewall" tabindex="-1"><a class="header-anchor" href="#buoi-5-samba-dns-va-firewall" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/07-12-46-11-icons8-dns.png"> Bu\u1ED5i 5 - <code>SAMBA</code>, <code>DNS</code> v\xE0 <code>Firewall</code></h1><div class="custom-container tip"><p class="custom-container-title">\u{1F4DD} \u0110\u1EC0 B\xC0I</p><div class="pdfZen"><iframe src="https://drive.google.com/file/d/1gUtlIRYJ2q3Nl9u9Yotd3aakMnxLSHns/preview"></iframe></div></div><h2 id="_1-cai-\u0111at-centos" tabindex="-1"><a class="header-anchor" href="#_1-cai-\u0111at-centos" aria-hidden="true">#</a> 1. C\xE0i \u0111\u1EB7t CentOS</h2><h3 id="cau-1-1" tabindex="-1"><a class="header-anchor" href="#cau-1-1" aria-hidden="true">#</a> C\xE2u 1.1</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> Th\u1EF1c hi\u1EC7n c\xE0i \u0111\u1EB7t <code>CentOS 6</code> (<em>ho\u1EB7c <code>CentOS 7</code>, <code>8</code></em>) v\xE0o m\xE1y t\xEDnh c\xE1 nh\xE2n (<em>ho\u1EB7c m\xE1y \u1EA3o</em>)</p></blockquote>',5),g=n("Link file ISO "),p={href:"https://www.centos.org/download/",target:"_blank",rel:"noopener noreferrer"},b=n("CentOS 8"),v=e("h3",{id:"cau-1-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#cau-1-2","aria-hidden":"true"},"#"),n(" C\xE2u 1.2")],-1),f=e("blockquote",null,[e("p",null,[e("img",{src:"https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png",width:"30"}),n(" C\xE0i \u0111\u1EB7t d\u1ECBch v\u1EE5 "),e("code",null,"Web Server"),n(" tr\xEAn m\xE1y \u1EA3o. T\u1EA1o m\u1ED9t trang web \u0111\u01A1n gi\u1EA3n "),e("code",null,"index.html"),n(" l\u01B0u v\xE0o th\u01B0 m\u1EE5c "),e("code",null,"/var/www/html/myweb")])],-1),w=n("\u0110\xE3 l\xE0m trong b\xE0i th\u1EF1c h\xE0nh "),_=n("Bu\u1ED5i 4"),S=c(`<h2 id="_2-cai-\u0111at-va-cau-hinh-samba" tabindex="-1"><a class="header-anchor" href="#_2-cai-\u0111at-va-cau-hinh-samba" aria-hidden="true">#</a> 2. C\xE0i \u0111\u1EB7t v\xE0 c\u1EA5u h\xECnh <code>SAMBA</code></h2><div class="custom-container tip"><p class="custom-container-title">\u{1F4A1} KI\u1EBEN TH\u1EE8C</p><p><code>Samba</code> l\xE0 d\u1ECBch v\u1EE5 chia s\u1EBB <code>file</code> gi\u1EEFa c\xE1c n\u1EC1n t\u1EA3ng kh\xE1c nhau nh\u01B0 <code>Windows</code> v\xE0 <code>Linux</code> b\u1EB1ng c\xE1ch s\u1EED d\u1EE5ng giao th\u1EE9c <code>SMB/CIFS</code>.</p></div><h3 id="cau-2-1" tabindex="-1"><a class="header-anchor" href="#cau-2-1" aria-hidden="true">#</a> C\xE2u 2.1</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> C\xE0i \u0111\u1EB7t d\u1ECBch v\u1EE5 <code>Samba</code> b\u1EB1ng l\u1EC7nh :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ yum install samba
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-18-18-16-Screenshot from 2021-05-09 11-04-12.png" alt="Screenshot from 2021-05-09 11-04-12.png"></p><p>==&gt; B\u1EA1n c\xF3 th\u1EC3 g\xF5 <code>samba --version</code> \u0111\u1EC3 ki\u1EC3m tra \u0111\xE3 c\xE0i \u0111\u1EB7t ch\u01B0a.</p><h3 id="cau-2-2" tabindex="-1"><a class="header-anchor" href="#cau-2-2" aria-hidden="true">#</a> C\xE2u 2.2</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> T\u1EA1o ng\u01B0\u1EDDi d\xF9ng v\xE0 nh\xF3m ng\u01B0\u1EDDi d\xF9ng chia s\u1EBB d\u1EEF li\u1EC7u:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ adduser tuanthai
$ passwd tuanthai
$ groupadd lecturers
$ usermod -aG lecturers tuanthai
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-18-04-43-Screenshot from 2021-05-09 11-06-34.png" alt="Screenshot from 2021-05-09 11-06-34.png"></p><h3 id="cau-2-3" tabindex="-1"><a class="header-anchor" href="#cau-2-3" aria-hidden="true">#</a> C\xE2u 2.3</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> T\u1EA1o th\u01B0 m\u1EE5c c\u1EA7n chia s\u1EBB v\xE0 ph\xE2n quy\u1EC1n :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ mkdir /data
$ chgrp lecturers /data
$ chmod -R 775 /data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-18-06-02-Screenshot from 2021-05-09 11-12-45.png" width="600"><h3 id="cau-2-4" tabindex="-1"><a class="header-anchor" href="#cau-2-4" aria-hidden="true">#</a> C\xE2u 2.4</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> C\u1EA5u h\xECnh d\u1ECBch v\u1EE5 <code>SAMBA</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ cp /etc/samba/smb.conf /etc/samba/smb.conf.orig
$ nano /etc/samba/smb.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-textile ext-textile line-numbers-mode"><pre class="language-textile"><code>...
[data]
    comment = Shared folder for lecturers
    path = /data
    browsable = yes
    writable = yes
    read only = no
    valid users = @lecturers
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-18-06-49-Screenshot from 2021-05-09 11-16-49.png" width="600">`,15),I={class:"custom-container tip"},k=c('<p class="custom-container-title">\u{1F4A1} GI\u1EA2I TH\xCDCH</p><ul><li><p><code>comment</code> : ch\xFA th\xEDch</p></li><li><p><code>path</code> : \u0111\u01B0\u1EDDng d\u1EABn \u0111\u1EBFn th\u01B0 m\u1EE5c c\u1EA7n k\u1EBFt n\u1ED1i <code>Samba</code></p></li><li><p><code>browsafe</code> : ki\u1EC3m so\xE1t vi\u1EC7c chia s\u1EBB file c\xF3 \u0111\u01B0\u1EE3c nh\xECn th\u1EA5y trong ch\u1EBF \u0111\u1ED9 th\u1EF1c</p></li><li><p><code>writable</code> : Cho ph\xE9p ghi file (<em>\u0111\u1EA3o ng\u01B0\u1EE3c v\u1EDBi <code>read only</code></em>)</p></li><li><p><code>read only</code> : Ch\u1EC9 cho ph\xE9p \u0111\u1ECDc (<em>\u0111\u1EA3o ng\u01B0\u1EE3c v\u1EDBi <code>read only</code></em>)</p></li><li><p><code>valid users</code> : ng\u01B0\u1EDDi d\xF9ng c\xF3 hi\u1EC7u l\u1EF1c</p></li></ul>',2),q=n("==> Tham kh\u1EA3o c\xE1ch "),x=e("code",null,"config",-1),C=n(),y={href:"https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html",target:"_blank",rel:"noopener noreferrer"},Z=n("t\u1EA1i \u0111\xE2y"),T=c(`<h3 id="cau-2-5" tabindex="-1"><a class="header-anchor" href="#cau-2-5" aria-hidden="true">#</a> C\xE2u 2.5</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> Th\xEAm ng\u01B0\u1EDDi d\xF9ng cho d\u1ECBch v\u1EE5 <code>SAMBA</code> b\u1EB1ng l\u1EC7nh :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ smbpasswd -a tuanthai
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-18-07-42-Screenshot from 2021-05-09 11-17-34.png" alt="Screenshot from 2021-05-09 11-17-34.png"></p><h3 id="cau-2-6" tabindex="-1"><a class="header-anchor" href="#cau-2-6" aria-hidden="true">#</a> C\xE2u 2.6</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> C\u1EA5u h\xECnh <code>SELINUX</code> cho ph\xE9p <code>Samba</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ setsebool -P samba_export_all_rw on
$ setsebool -P samba_enable_home_dirs on
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><ul><li><p><code>samba_export_all_rw</code> : cho ph\xE9p xu\u1EA5t b\u1EA5t k\u1EF3 <code>files</code> hay <code>diretories</code> n\xE0o, cho ph\xE9p quy\u1EC1n <strong>\u0111\u1ECDc</strong> v\xE0 <strong>ghi</strong></p></li><li><p><code>samba_enable_home_dirs on</code> : cho ph\xE9p chia s\u1EBB th\u01B0 m\u1EE5c ch\xEDnh c\u1EE7a ng\u01B0\u1EDDi d\xF9ng</p></li></ul>`,6),N=n("==> Tham kh\u1EA3o "),$={href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/6/html/managing_confined_services/sect-managing_confined_services-samba-booleans",target:"_blank",rel:"noopener noreferrer"},A=n("t\u1EA1i \u0111\xE2y"),P=c(`<h3 id="cau-2-7" tabindex="-1"><a class="header-anchor" href="#cau-2-7" aria-hidden="true">#</a> C\xE2u 2.7</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> T\u1EAFt t\u01B0\u1EDDng l\u1EEDa</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ service iptables stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-18-10-12-Screenshot from 2021-05-09 11-19-36.png" alt="Screenshot from 2021-05-09 11-19-36.png"></p><h3 id="cau-2-8" tabindex="-1"><a class="header-anchor" href="#cau-2-8" aria-hidden="true">#</a> C\xE2u 2.8</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> Kh\u1EDFi \u0111\u1ED9ng l\u1EA1i d\u1ECBch v\u1EE5 <code>Samba</code> :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ service smb start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-18-10-55-Screenshot from 2021-05-09 11-20-05.png" width="600"><h3 id="cau-2-9" tabindex="-1"><a class="header-anchor" href="#cau-2-9" aria-hidden="true">#</a> C\xE2u 2.9</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> Tr\xEAn m\xE1y <code>Windows</code>, b\u1EADt t\xEDnh n\u0103ng h\u1ED7 tr\u1EE3 <code>SMB1</code> :</p><p>M\u1EDF <code>Control Panel</code> \u279E <code>Programs</code> \u279E <code>Turn Windows feature on or off</code> \u279E <code>SMB 1.0/CIFS FIle Sharing Support</code> \u279E Ch\u1ECDn <code>SMB 1.0/CIFS Client</code></p><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/07-13-07-32-Screen Shot 2021-05-07 at 13.07.25.png" alt="Screen Shot 2021-05-07 at 13.07.25.png"></p></blockquote><p>==&gt; C\xE0i <code>CentOS</code> tr\xEAn \u1ED5 c\u1EE9ng, kh\xF4ng s\u1EED d\u1EE5ng m\xE1y \u1EA3o, n\xEAn kh\xF4ng l\xE0m b\u01B0\u1EDBc n\xE0y</p><h3 id="cau-2-10" tabindex="-1"><a class="header-anchor" href="#cau-2-10" aria-hidden="true">#</a> C\xE2u 2.10</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> Tr\xEAn <code>File Exployer</code>, ch\u1ECDn t\xEDnh n\u0103ng <code>Add a network location</code> \u0111\u1EC3 k\u1EBFt n\u1ED1i t\u1EDBi <code>Samba server</code> s\u1EED d\u1EE5ng \u0111\u1ECBa ch\u1EC9 <code>\\\\&lt;IP m\xE1y CentOS&gt;\\data</code></p></blockquote><p>Th\u1EF1c hi\u1EC7n c\xE1c b\u01B0\u1EDBc sau \u0111\u1EC3 k\u1EBFt n\u1ED1i giao th\u1EE9c <code>Samba</code> tr\xEAn <code>CentOS</code> :</p><ul><li><p><strong>B1</strong>: V\xE0o <code>Nautilus</code> (<em>hay c\xF2n g\u1ECDi l\xE0 Finder</em>) \u21E8 Ch\u1ECDn <code>Other Locations</code> \u21E8 \u0110i\u1EC1n <code>IP</code> c\u1EE7a m\xE1y ch\u1EA1y <code>Samba</code> \u21E8 Ch\u1ECDn <code>Connect</code></p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-18-12-52-Screenshot from 2021-05-09 12-03-12.png" width="600"></li><li><p><strong>B2</strong>: Ch\u1ECDn <code>Registerd User</code> v\xE0 \u0111i\u1EC1n <em>t\xE0i kho\u1EA3n</em> v\xE0 <em>m\u1EADt kh\u1EA9u</em> \u0111\u0103ng k\xFD <code>Samba</code> \u1EDF tr\xEAn \u21E8 Ch\u1ECDn <code>Connect</code></p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-18-14-31-Screenshot from 2021-05-09 12-24-39.png" width="344"></li><li><p><strong>B3</strong>: B\u1EA1n c\xF3 th\u1EC3 t\u1EA1o <code>file</code> (<em>v\xED d\u1EE5 t\u1EA1o <code>file1</code> nh\u01B0 sau</em>)</p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-18-16-48-Screenshot from 2021-05-09 12-19-10.png" width="500"><div class="custom-container tip"><p class="custom-container-title">\u{1F4A1} FACT</p><p>V\xE0o m\xE1y k\u1EBFt n\u1ED1i <code>Samba</code> ki\u1EC3m tra nh\u01B0 sau :</p><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-18-17-11-Screenshot from 2021-05-09 12-19-36.png" alt="Screenshot from 2021-05-09 12-19-36.png"></p><p>==&gt; Nh\u01B0 \u0111\xE3 th\u1EA5y <code>file1</code> \u0111\xE3 xu\u1EA5t hi\u1EC7n</p></div></li></ul><h2 id="_3-cai-\u0111at-va-cau-hinh-dich-vu-dns" tabindex="-1"><a class="header-anchor" href="#_3-cai-\u0111at-va-cau-hinh-dich-vu-dns" aria-hidden="true">#</a> 3. C\xE0i \u0111\u1EB7t v\xE0 c\u1EA5u h\xECnh d\u1ECBch v\u1EE5 <code>DNS</code></h2><div class="custom-container tip"><p class="custom-container-title">\u{1F4A1} KI\u1EBEN TH\u1EE8C</p><p><code>DNS</code> (<em>Domain Name System</em>) l\xE0 gi\u1EA3i ph\xE1p d\xF9ng t\xEAn mi\u1EC1n thay cho \u0111\u1ECBa ch\u1EC9 <code>IP</code> kh\xF3 nh\u1EDB khi s\u1EED d\u1EE5ng c\xE1c d\u1ECBch v\u1EE5 m\u1EA1ng. Truy c\u1EADp \u0111\u1EBFn <code>website</code> c\u1EE7a <code>Khoa CNTT-\u0110H C\u1EA7n Th\u01A1</code> b\u1EB1ng \u0111\u1ECBa ch\u1EC9 n\xE0o d\u1EC5 h\u01A1n ?</p><table><thead><tr><th>http://203.162.36.146</th><th>http://cit.ctu.edu.vn</th></tr></thead></table><p>B\u1EA1n c\u1EA7n ph\u1EA3i c\xE0i \u0111\u1EB7t ph\u1EA7n m\u1EC1m <code>BIND</code> tr\xEAn <code>CentOS</code> \u0111\u1EC3 ph\xE2n gi\u1EA3i t\xEAn mi\u1EC1n <code>qtht.com.vn</code></p></div><h3 id="cau-3-1" tabindex="-1"><a class="header-anchor" href="#cau-3-1" aria-hidden="true">#</a> C\xE2u 3.1</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> C\xE0i \u0111\u1EB7t <code>BIND</code> v\xE0 c\xE1c c\xF4ng c\u1EE5 c\u1EA7n thi\u1EBFt :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ yum install bind bind-utils
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-23-04-46-Screenshot from 2021-05-09 12-33-54.png" alt="Screenshot from 2021-05-09 12-33-54.png"></p><p>==&gt; B\u1EA1n c\xF3 th\u1EC3 g\xF5 <code>named -v</code> \u0111\u1EC3 ki\u1EC3m tra <code>bind-utils</code> \u0111\xE3 c\xE0i ch\u01B0a.</p><h3 id="cau-3-2" tabindex="-1"><a class="header-anchor" href="#cau-3-2" aria-hidden="true">#</a> C\xE2u 3.2</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> C\xE0i h\xECnh <code>DNS server</code> :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ nano /etc/named.conf 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-textile ext-textile line-numbers-mode"><pre class="language-textile"><code>...
option {
    listen-on port 53 { 127.0.0.1; any;};
    ...
    allow-query    { localhost; any;};
    recursion yes;
    ...
};

loggin {
    ...
    };
};

zone &quot;.&quot; IN {
    ...
};

zone &quot;&lt;t\xEAn mi\u1EC1n&gt;&quot; IN {
    type master;
    file &quot;forward.qtht&quot;;
    allow-update { none; };
};

zone &quot;&lt;24bit m\u1EA1ng \u0111\u1EA3o chi\u1EC1u&gt;.in-addr.arpa&quot; IN {
    type master;
    file &quot;reverse.qtht&quot;;
    allow-update { none; };
};
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-23-10-02-Screenshot from 2021-05-09 12-36-20.png" width="600"><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-23-28-17-Screenshot from 2021-05-09 13-17-02.png" width="600"><h3 id="cau-3-3" tabindex="-1"><a class="header-anchor" href="#cau-3-3" aria-hidden="true">#</a> C\xE2u 3.3</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> T\u1EA1o t\u1EADp tin c\u1EA5u h\xECnh ph\xE2n gi\u1EA3i xu\xF4i:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ cp /var/named/named.localhost /var/named/forward.qtht
$ chgrp named /var/named/forward.qtht
$ nano /var/named/forward.qtht
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-textile ext-textile line-numbers-mode"><pre class="language-textile"><code>$TTL 1D
@   IN  SOA @ &lt;t\xEAn mi\u1EC1n&gt;. (
0     ;Serial
1D    ;Refresh
1H    ;Retry
1W    ;Expire
3H    ;Minimum TTL
)
@    IN    NS    dns.qtht.com.vn.
dns  IN    A    &lt;IP m\xE1y&gt;
www  IN    A    &lt;IP m\xE1y&gt;
htql IN    A    8.8.8.8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-23-26-57-Screenshot from 2021-05-09 08-35-44.png" alt="Screenshot from 2021-05-09 08-35-44.png"></p><h3 id="cau-3-4" tabindex="-1"><a class="header-anchor" href="#cau-3-4" aria-hidden="true">#</a> C\xE2u 3.4</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> T\u1EA1o t\u1EADp tin c\u1EA5u h\xECnh ph\xE2n gi\u1EA3i ng\u01B0\u1EE3c :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ cp /var/named/forward.qtht /var/named/reverse.qtht
$ chgrp named /var/named/reverse.qtht
$ nano /var/named/reverse.qtht
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-textile ext-textile line-numbers-mode"><pre class="language-textile"><code>$TTL 1D
@   IN  SOA @ qtht.com.vn. (
0    ;Serial
1D    ;Refresh
1H    ;Retry
1W    ;Expire
3H    ;Minimum TTL
)
@    IN   NS   dns.qtht.com.vn.
dns  IN   A    &lt;IP m\xE1y&gt;
245  IN   PTR  www.qtht.com.vn.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-23-38-46-Screenshot from 2021-05-09 08-36-00.png" alt="Screenshot from 2021-05-09 08-36-00.png"></p><h3 id="cau-3-5" tabindex="-1"><a class="header-anchor" href="#cau-3-5" aria-hidden="true">#</a> C\xE2u 3.5</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> T\u1EAFt t\u01B0\u1EDDng l\u1EEDa</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ service iptables stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-18-10-12-Screenshot from 2021-05-09 11-19-36.png" alt="Screenshot from 2021-05-09 11-19-36.png"></p><h3 id="cau-3-6" tabindex="-1"><a class="header-anchor" href="#cau-3-6" aria-hidden="true">#</a> C\xE2u 3.6</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> Kh\u1EDFi \u0111\u1ED9ng d\u1ECBch v\u1EE5 <code>DNS</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ service named start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-23-40-08-Screenshot from 2021-05-09 13-09-56.png" alt="Screenshot from 2021-05-09 13-09-56.png"></p><h3 id="cau-3-7" tabindex="-1"><a class="header-anchor" href="#cau-3-7" aria-hidden="true">#</a> C\xE2u 3.7</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> Ki\u1EC3m tra k\u1EBFt qu\u1EA3</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ nslookup www.qtht.com.vn &lt;\u0111\u1ECBa ch\u1EC9 IP m\xE1y&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><ul><li><p>Ph\xE2n gi\u1EA3i xu\xF4i</p><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-23-40-53-Screenshot from 2021-05-09 08-38-46.png" alt="Screenshot from 2021-05-09 08-38-46.png"></p></li><li><p>Ph\xE2n gi\u1EA3i ng\u01B0\u1EE3c</p><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-23-41-47-Screenshot from 2021-05-09 08-38-37.png" alt="Screenshot from 2021-05-09 08-38-37.png"></p></li></ul><h3 id="cau-3-8" tabindex="-1"><a class="header-anchor" href="#cau-3-8" aria-hidden="true">#</a> C\xE2u 3.8</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> Tr\xEAn m\xE1y v\u1EADt l\xFD, c\u1EA5u h\xECnh <code>DNS Server</code> l\xE0 <code>IP</code> c\u1EE7a m\xE1y \u1EA3o <code>CentOS</code>. Sau \u0111\xF3 m\u1EDF tr\xECnh duy\u1EC7t <code>web</code> v\xE0 truy c\u1EADp v\xE0o \u0111\u1ECBa ch\u1EC9 <code>http://www.qtht.com.vn/myweb</code></p></blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-23-42-52-Screenshot from 2021-05-09 08-33-53.png" alt="Screenshot from 2021-05-09 08-33-53.png"></p><div class="custom-container tip"><p class="custom-container-title">\u{1F4A1} FACT</p><p>C\u0169ng c\xF3 th\u1EC3 d\xF9ng \u0111i\u1EC7n tho\u1EA1i \u0111\u1EC3 k\u1EBFt n\u1ED1i (<em>Y\xEAu c\u1EA7u x\xE0i chung <code>Wifi</code> v\xE0 thi\u1EBFt l\u1EADp <code>DNS custom</code></em> )</p><p><img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-23-47-58-a4d2f03b003ff561ac2e.png" alt="a4d2f03b003ff561ac2e.png" width="250"> <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-23-48-19-8f08fed60ed2fb8ca2c3.png" alt="8f08fed60ed2fb8ca2c3.png" width="250"></p></div><h2 id="_4-cau-hinh-tuong-lua-iptables" tabindex="-1"><a class="header-anchor" href="#_4-cau-hinh-tuong-lua-iptables" aria-hidden="true">#</a> 4. C\u1EA5u h\xECnh t\u01B0\u1EDDng l\u1EEDa <code>iptables</code></h2><div class="custom-container tip"><p class="custom-container-title">\u{1F4A1} KI\u1EBEN TH\u1EE8C</p><p><code>iptables</code> l\xE0 m\u1ED9t b\u1ED9 c\xF4ng c\u1EE5 \u0111\u01B0\u1EE3c t\xEDch h\u1EE3p tr\xEAn h\u1EC7 \u0111i\u1EC1u h\xE0nh <code>Linux</code> \u0111\u1EC3 th\u1EF1c hi\u1EC7n ch\u1EE9c n\u0103ng t\u01B0\u1EDDng l\u1EEDa theo c\u01A1 ch\u1EBF l\u1ECDc g\xF3i tin (<code>package filtering</code>). <code>Iptables</code> theo d\xF5i l\u01B0u l\u01B0\u1EE3ng m\u1EA1ng <strong>\u0111\u1EBFn</strong> v\xE0 <strong>\u0111i</strong> c\u1EE7a m\u1ED9t m\xE1y t\xEDnh v\xE0 l\u1ECDc n\xF3 d\u1EF1a tr\xEAn c\xE1c lu\u1EADt (<code>rules</code>) do ng\u01B0\u1EDDi d\xF9ng t\u1EF1 \u0111\u1ECBnh ngh\u0129a tr\u01B0\u1EDBc \u0111\xF3.</p></div><h3 id="cau-4-1" tabindex="-1"><a class="header-anchor" href="#cau-4-1" aria-hidden="true">#</a> C\xE2u 4.1</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> Th\u1EF1c thi t\u01B0\u1EDDng l\u1EEDa</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ service iptables start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-23-55-08-Screenshot from 2021-05-09 09-13-04.png" alt="Screenshot from 2021-05-09 09-13-04.png"></p><h3 id="cau-4-2" tabindex="-1"><a class="header-anchor" href="#cau-4-2" aria-hidden="true">#</a> C\xE2u 4.2</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> Hi\u1EC3n th\u1ECB c\xE1c <code>rules</code> hi\u1EC7n c\xF3 tr\xEAn <code>iptables</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ iptables -v -L --line-numbers
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-23-56-01-Screenshot from 2021-05-09 09-18-28.png" alt="Screenshot from 2021-05-09 09-18-28.png"></p><div class="custom-container tip"><p class="custom-container-title">\u{1F4A1} GI\u1EA2I TH\xCDCH</p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-23-57-56-iptables_filter.png" title="" alt="iptables_filter.png" width="525"><table><thead><tr><th>Gi\u1EA3i th\xEDch</th><th>INPUT</th><th>FORWARD</th><th>OUTPUT</th></tr></thead><tbody><tr><td>Tr\u1EEBu t\u01B0\u1EE3ng</td><td>Ki\u1EC3m so\xE1t c\xE1c g\xF3i \u0111\u1EBFn t\u1EEB <code>route</code> \u0111\u1EBFn <code>server</code> c\u1EE7a b\u1EA1n</td><td>Ki\u1EC3m so\xE1t c\xE1c g\xF3i b\u1EAFt ngu\u1ED3n t\u1EEB <code>server</code> c\u1EE7a b\u1EA1n \u0111\u1EBFn <code>nh\xE0 m\u1EA1ng</code></td><td>Ki\u1EC3m so\xE1t c\xE1c g\xF3i \u0111\u01B0\u1EE3c chuy\u1EC3n ti\u1EBFp b\u1EDFi <code>server</code> c\u1EE7a b\u1EA1n</td></tr><tr><td>D\u1EC5 hi\u1EC3u</td><td>L\u1ECDc c\xE1c g\xF3i d\xE0nh cho <code>server</code> c\u1EE7 b\u1EA1n</td><td>L\u1ECDc c\xE1c g\xF3i \u0111\u1EBFn <code>server</code> c\u1EE7a b\u1EA1n m\xE0 <code>card wifi</code> kh\xE1c c\xF3 th\u1EC3 truy c\u1EADp</td><td>L\u1ECDc c\xE1c g\xF3i c\xF3 ngu\u1ED3n g\u1ED1c t\u1EEB <code>server</code> c\u1EE7a b\u1EA1n</td></tr></tbody></table></div><h3 id="cau-4-3" tabindex="-1"><a class="header-anchor" href="#cau-4-3" aria-hidden="true">#</a> C\xE2u 4.3</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> T\u1EA1o <code>rules</code> cho ph\xE9p c\xE1c m\xE1y kh\xE1c truy c\u1EADp t\u1EDBi d\u1ECBch v\u1EE5 <code>Web</code> tr\xEAn <code>server</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ iptables -A INPUT -p tcp --dport 80 -j ACCEPT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote>`,53),B=n("Tham kh\u1EA3o c\xE1ch d\xF9ng "),L=e("code",null,"iptables",-1),O=n(" c\u0103n b\u1EA3n "),D={href:"https://hocvps.com/iptables/",target:"_blank",rel:"noopener noreferrer"},H=n("t\u1EA1i \u0111\xE2y"),U=c(`<ul><li><p><strong>Tr\u01B0\u1EDBc</strong> khi cho m\xE1y kh\xE1c truy c\u1EADp v\u1EDBi d\u1ECBch v\u1EE5 <code>Web Server</code> :</p><img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-00-22-49-33363b9e5d9fa8c1f18e.png" alt="33363b9e5d9fa8c1f18e.png" width="229"></li><li><p><strong>Sau</strong> khi cho m\xE1y kh\xE1c truy c\u1EADp t\u1EDBi d\u1ECBch v\u1EE5 <code>Web Server</code> b\u1EB1ng l\u1EC7nh tr\xEAn :</p><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-00-24-12-Screenshot from 2021-05-09 09-50-53.png" alt="Screenshot from 2021-05-09 09-50-53.png"></p><img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/09-23-47-58-a4d2f03b003ff561ac2e.png" alt="a4d2f03b003ff561ac2e.png" width="227"></li></ul><h3 id="cau-4-4" tabindex="-1"><a class="header-anchor" href="#cau-4-4" aria-hidden="true">#</a> C\xE2u 4.4</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> T\u1EA1o <code>rules</code> \u0111\u1EC3 cho m\xE1y v\u1EADt l\xFD c\xF3 th\u1EC3 <code>ping</code> t\u1EDBi <code>server</code>, c\xE1c m\xE1y kh\xE1c <strong>KH\xD4NG</strong> <code>ping</code> \u0111\u01B0\u1EE3c</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ iptables -I INPUT 2 -p icmp -s &lt;IP cho ph\xE9p&gt; -j ACCEPT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote>`,3),K=n("S\u1EED d\u1EE5ng "),R=e("img",{src:"https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-00-26-32-1406098-200.png",title:"",alt:"1406098-200.png",width:"35"},null,-1),M=n(),W={href:"https://termux.com/",target:"_blank",rel:"noopener noreferrer"},E=n("Termux"),F=n(" c\u1EE7a "),V=e("code",null,"Android",-1),G=n(" \u0111\u1EC3 thao t\xE1c c\xE1c l\u1EC7nh"),j=c(`<div class="custom-container warning"><p class="custom-container-title">\u{1F914} L\u01AFU \xDD</p><p><code>Android</code> \u0111ang s\u1EED d\u1EE5ng chung m\u1EA1ng <code>Wifi</code> c\u1EE7a m\xE1y d\xF9ng <code>iptables</code> v\xE0 c\xF3 IP nh\u01B0 sau : <code>192.168.10.101</code> (<em>ri\xEAng m\xE1y n\xE0y th\xF4i !</em>)</p></div><ul><li><p>Tr\u01B0\u1EDBc khi thi\u1EBFt l\u1EADp <code>rules</code> ch\u1EB7n <code>ping</code> :</p><ul><li><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-00-31-23-icons8-android.png" alt="icons8-android.png"><code>Android</code> s\u1EED d\u1EE5ng <code>ping</code></p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-00-29-10-bd39e9ee27ead2b48bfb.jpeg" width="600"></li><li><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-00-31-36-icons8-centos.png" alt="icons8-centos.png"> <code>CentOS</code> s\u1EED d\u1EE5ng <code>ping</code></p><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-00-30-42-Screenshot from 2021-05-09 09-54-50.png" alt="Screenshot from 2021-05-09 09-54-50.png"></p></li></ul><p>==&gt; C\u1EA3 hai v\u1EABn <code>ping</code> \u0111\u01B0\u1EE3c</p></li><li><p><strong>Sau</strong> khi thi\u1EBFt l\u1EADp <code>rules</code> ch\u1EB7n <code>ping</code> b\u1EB1ng l\u1EC7nh tr\xEAn :</p><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-00-35-55-Screenshot from 2021-05-09 09-58-15.png" alt="Screenshot from 2021-05-09 09-58-15.png"></p><div class="custom-container warning"><p class="custom-container-title">\u{1F914} L\u01AFU \xDD</p><p><code>qtht.com.vn</code> t\u01B0\u01A1ng \u0111\u01B0\u01A1ng <code>192.168.10.135</code> v\xEC \u0111\xE3 c\u1EA5u h\xECnh <code>DNS</code> b\xEAn tr\xEAn</p></div><ul><li><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-00-31-23-icons8-android.png" alt="icons8androidpng"><code>Android</code> s\u1EED d\u1EE5ng <code>ping</code></p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-00-34-38-3924f2fe3cfac9a490eb.png" width="600"></li><li><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-00-31-36-icons8-centos.png" alt="icons8centospng"> <code>CentOS</code> s\u1EED d\u1EE5ng <code>ping</code></p><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-00-30-42-Screenshot from 2021-05-09 09-54-50.png" alt="Screenshot from 2021-05-09 09-54-50.png"></p></li></ul></li></ul><p>==&gt; Sau khi thi\u1EBFt l\u1EADp <code>rules</code> ch\u1EC9 c\xF3 m\xE1y c\xF3 <code>IP:192.168.10.135</code> l\xE0 <code>ping</code> \u0111\u01B0\u1EE3c \u0111\u1EBFn <code>server</code>.</p><h3 id="cau-4-5" tabindex="-1"><a class="header-anchor" href="#cau-4-5" aria-hidden="true">#</a> C\xE2u 4.5</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> T\u1EA1o <code>rules</code> \u0111\u1EC3 <strong>KH\xD4NG</strong> cho ng\u01B0\u1EDDi d\xF9ng tr\xEAn m\xE1y <code>CentOS</code> truy c\u1EADp t\u1EDBi \u0111\u1ECBa ch\u1EC9 <code>facebook.com</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ iptables -A OUTPUT -p tcp -m string --string facebook --algo kmp -j REJECT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p>S\u1EED d\u1EE5ng l\u1EC7nh tr\xEAn \u0111\u1EC3 g\u1EEDi g\xF3i truy c\u1EADp \u0111\u1EBFn <code>server</code> c\u1EE7a <code>Facebook</code> :</p><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-10-32-04-Screenshot from 2021-05-09 10-13-39.png" alt="Screenshot from 2021-05-09 10-13-39.png"></p><p>==&gt; Sau khi \u0111\xE3 \xE1p d\u1EE5ng <code>rules</code> th\xEC ch\xFAng ta kh\xF4ng th\u1EC3 truy c\u1EADp <code>facebook</code> \u0111\u01B0\u1EE3c n\u1EEFa :</p><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-10-34-18-Screenshot from 2021-05-09 10-16-54.png" alt="Screenshot from 2021-05-09 10-16-54.png"></p><h3 id="cau-4-6" tabindex="-1"><a class="header-anchor" href="#cau-4-6" aria-hidden="true">#</a> C\xE2u 4.6</h3><blockquote><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-20-06-29-icons8-questions.png" width="30"> L\u01B0u v\xE0 ph\u1EE5c h\u1ED3i c\xE1c <code>rules</code> c\u1EE7a <code>iptables</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ cp /etc/sysconfig/iptables /etc/sysconfig/iptables.orig
$ iptables-save &gt; /etc/sysconfig/iptables
$ iptables-restore &lt; /etc/sysconfig/iptables
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>Tr\u01B0\u1EDBc khi t\u1EAFt <code>iptables</code>, ta n\xEAn <strong>sao l\u01B0u</strong> (<em>backup</em>) l\u1EA1i <code>rules</code> b\u1EB1ng l\u1EC7nh :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ iptables-save &gt; /etc/sysconfig/iptables
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">\u{1F914} L\u01AFU \xDD</p><p>V\xEC sau khi <strong>t\u1EAFt</strong> <code>iptables</code> v\xE0 <strong>kh\u1EDFi \u0111\u1ED9ng</strong> l\u1EA1i, c\xE1c <code>rules</code> thi\u1EBFt l\u1EADp tr\u01B0\u1EDBc \u0111\xF3 s\u1EBD reset nh\u01B0 sau :</p><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-10-37-00-Screenshot from 2021-05-09 10-20-30.png" alt="Screenshot from 2021-05-09 10-20-30.png"></p></div><p>==&gt; Khi \u0111\xF3 ta c\xF3 th\u1EC3 <strong>kh\xF4i ph\u1EE5c</strong> (<em>restore</em>) l\u1EA1i <code>rules</code> \u0111\xE3 <strong>sao l\u01B0u</strong> (<em>backup</em>) b\u1EB1ng l\u1EC7nh sau:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ iptables-restore &lt; /etc/sysconfig/iptables
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u{1F9DA} K\u1EBET QU\u1EA2</p><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-10-39-11-Screenshot from 2021-05-09 10-20-59.png" alt="Screenshot from 2021-05-09 10-20-59.png"></p><p>(<em>V\xEC m\xECnh \u0111\xE3 xo\xE1 <code>rules</code> ch\u1EB7n <code>facebook</code> tr\u01B0\u1EDBc \u0111\xF3 n\xEAn kh\xF4ng c\xF2n \u1EDF OUTPUT n\u1EEFa</em>)</p></div>`,17);function z(Y,J){const i=s("ExternalLinkIcon"),a=s("RouterLink"),o=s("comment");return r(),h("div",null,[m,e("p",null,[g,e("a",p,[b,t(i)])]),v,f,e("p",null,[w,t(a,{to:"/nhapmon/CT179-Quan_tri_he_thong/Thuchanh/4.html"},{default:l(()=>[_]),_:1})]),S,e("div",I,[k,e("p",null,[q,x,C,e("a",y,[Z,t(i)])])]),T,e("p",null,[N,e("a",$,[A,t(i)])]),P,e("p",null,[B,L,O,e("a",D,[H,t(i)])]),U,e("p",null,[K,R,M,e("a",W,[E,t(i)]),F,V,G]),j,t(o)])}var X=d(u,[["render",z],["__file","5.html.vue"]]);export{X as default};
