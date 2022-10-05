import{_ as r,r as h,o as a,c as s,b as t,a as c,w as i,e,d as n}from"./app.82bbadf3.js";const l={},g=e(`<h1 id="on-tap-cu-the" tabindex="-1"><a class="header-anchor" href="#on-tap-cu-the" aria-hidden="true">#</a> \xD4n t\u1EADp c\u1EE5 th\u1EC3</h1><h2 id="cau-1" tabindex="-1"><a class="header-anchor" href="#cau-1" aria-hidden="true">#</a> C\xE2u 1</h2><blockquote><p>Trong m\u1ED9t l\u1EDBp h\u1ECDc c\xF3 <code>n</code> sinh vi\xEAn (<em>gi\u1EA3 s\u1EED \u0111\u01B0\u1EE3c \u0111\xE1nh s\u1ED1 t\u1EEB <code>1</code> t\u1EDBi <code>n</code></em>). M\u1ED7i sinh vi\xEAn \u0111\u1EC1u \u0111\u01B0\u1EE3c c\u1EA5p m\u1ED9t t\xE0i kho\u1EA3n n\xEAn c\xF3 th\u1EC3 s\u1EED d\u1EE5ng t\xE0i kho\u1EA3n n\xE0y \u0111\u1EC3 \u0111\u0103ng nh\u1EADp h\u1EC7 th\u1ED1ng <code>email</code> c\u1EE7a Google \u0111\u1EC3 g\u1EEDi email cho nhau.</p><p>Gi\u1EA3 s\u1EED kh\xF4ng c\xF3 ai t\u1EF1 g\u1EEDi email cho ch\xEDnh m\xECnh v\xE0 ng\u01B0\u1EDDi <code>A</code> c\xF3 th\u1EC3 g\u1EEDi cho ng\u01B0\u1EDDi <code>B</code> v\xE0 nhi\u1EC1u <code>email</code> kh\xE1c</p><p>H\xE3y t\xECm ng\u01B0\u1EDDi \u0111\xE3 nh\u1EADn nhi\u1EC1u email nh\u1EA5t.</p></blockquote><div class="custom-container tip"><p class="custom-container-title">\u{1F4A1} GI\u1EA2I TH\xCDCH</p><p>Cho v\xED d\u1EE5 sau:</p><div class="language-txt ext-txt"><pre class="language-txt"><code>3
0 1 0
1 0 1 
1 2 0
</code></pre></div><p><strong>\u0110\u1EA7u v\xE0o</strong>: C\xF3 ngh\u0129a l\xE0 c\xF3 <code>3</code> sinh vi\xEAn.</p><ul><li><p><code>0 1 0</code>: <strong>SV1</strong> g\u1EEDi cho <strong>SV2</strong> <code>1</code> email</p></li><li><p><code>1 0 1</code>: <strong>SV2</strong> g\u1EEDi cho <strong>SV1</strong>, <strong>SV3</strong> <code>1</code> email</p></li><li><p><code>1 2 0</code>: <strong>SV3</strong> g\u1EEDi 1 <code>email</code> cho <strong>SV1</strong> v\xE0 g\u1EEDi <code>2</code> email cho <strong>SV2</strong></p></li></ul><p><strong>\u0110\u1EA7u ra</strong>:</p><p>In ra m\xE0n h\xECnh ng\u01B0\u1EDDi \u0111\xE3 nh\u1EADn nhi\u1EC1u email nh\u1EA5t d\u1EA1ng sau: <code>x has received y email(s).</code></p><table><thead><tr><th>Input</th><th>Result</th></tr></thead><tbody><tr><td>3<br>0 1 0<br>1 0 1<br>1 2 0</td><td>2 has received 3\xA0email(s).</td></tr><tr><td>7<br>0 0 0 0 0 1 1<br>0 0 1 0 0 0 0<br>0 0 0 0 0 0 0<br>0 0 1 0 0 0 0 <br>0 0 0 0 0 0 1<br>0 0 0 0 0 0 0<br>0 0 0 0 0 0 0</td><td>3 has received 2 email(s)</td></tr><tr><td>4<br>0 2 0 0<br>0 0 1 1<br>1 1 0 0<br>1 0 0 0</td><td>2 has received 3 email(s)</td></tr></tbody></table></div><h3 id="phan-tich" tabindex="-1"><a class="header-anchor" href="#phan-tich" aria-hidden="true">#</a> Ph\xE2n t\xEDch</h3><p>\u0110\xE2y l\xE0 1 \u0111\u01A1n \u0111\u1ED3 th\u1ECB c\xF3 h\u01B0\u1EDBng v\xE0 kh\xF4ng c\xF3 khuy\xEAn</p><div class="custom-container danger"><p class="custom-container-title">\u{1F6A8} CH\xDA \xDD</p><p>C\xE1c b\u1EA1n c\xF3 th\u1EC3 l\xE0m d\u1EC5 d\xE0ng b\u1EB1ng c\xE1ch \u0111\u1EB7t bi\u1EBFn m\u1EA3ng, nh\u01B0ng l\u1EADp tr\xECnh l\xE0 ch\xFAng ta ph\u1EA3i hi\u1EC3u lu\xF4n c\u1EA3 v\u1EA5n \u0111\u1EC1 s\xE2u c\u1EE7a n\xF3 nh\xE9</p></div><div class="custom-container tip"><p class="custom-container-title">\u{1F4A1} M\u1EB8O</p><p>C\xF4ng vi\u1EC7c c\u1EE7a ta ngay l\xFAc n\xE0y ch\xEDnh l\xE0 chuy\u1EC3n ma tr\u1EADn b\u1EB1ng h\xE0m nh\u01B0 sau:</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>int n;
scanf(&quot;%d&quot;,&amp;n);
for(int i = 1; i &lt;= n; i++){
    for (int j = 1; j &lt;= n; j++){
        int x; 
        scanf(&quot;%d&quot;,&amp;x);
        if(x != 0)
            add_edgeDirection(&amp;G,i,j,x);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>Ma tr\u1EADn</th><th>\u0110\u1ED3 th\u1ECB</th></tr></thead><tbody><tr><td>0 1 0<br>1 0 1<br>1 2 0</td><td>1 2 1<br>2 1 1<br>2 3 1<br>3 1 1 <br>3 2 2</td></tr></tbody></table><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/11/22-20-06-26-Screen Shot 2021-11-22 at 20.06.18.png"><p>==&gt; Nh\xECn l\xEAn h\xECnh v\xE0 ta c\u0169ng c\xF3 th\u1EC3 \u0111\xF3n nhanh \u0111\u01B0\u1EE3c, s\u1ED1 2 nh\u1EADn 3 email v\xE0 l\xE0 n\xFAt nh\u1EADn nhi\u1EC1u nh\u1EA5t.</p><p>Tham kh\u1EA3o h\xE0m sau:</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>int received(Graph G,int x){
    int sum = 0;
    for(int i = 1; i &lt;= G.n; i++){
        if(G.A[i][x] &gt; 0){
            sum += G.A[i][x];
        }
    }
    return sum;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`,8),u={id:"loi-giai",tabindex:"-1"},p=t("a",{class:"header-anchor",href:"#loi-giai","aria-hidden":"true"},"#",-1),b=n(),m=t("img",{src:"https://raw.githubusercontent.com/Zenfection/Image/master/2021/08/02-22-18-48-tenor.gif",width:"40"},null,-1),v=n(),_={href:"https://replit.com/@Zenfection/cau1LTDT",target:"_blank",rel:"noopener noreferrer"},y=n("L\u1EDDi gi\u1EA3i"),k=e('<h2 id="cau-2" tabindex="-1"><a class="header-anchor" href="#cau-2" aria-hidden="true">#</a> C\xE2u 2</h2><blockquote><p>C\xF4ng ty ABC c\xF3 m\u1ED9t d\u1EF1 \xE1n g\u1ED3m <code>n</code> c\xF4ng vi\u1EC7c (<em>gi\u1EA3 s\u1EED \u0111\u01B0\u1EE3c \u0111\xE1nh s\u1ED1 t\u1EEB <code>1</code> t\u1EDBi <code>n</code></em>). M\u1ED9t c\xF4ng vi\u1EC7c th\u1EE9 <code>j</code> c\xF3 th\u1EC3 ph\u1EE5 thu\u1ED9c v\xE0o c\xF4ng vi\u1EC7c kh\xE1c, c\xF4ng vi\u1EC7c th\u1EE9 <code>i</code>. Khi \u0111\xF3, c\xF4ng vi\u1EC7c th\u1EE9 <code>i</code> ho\xE0n th\xE0nh th\xEC m\u1EDBi th\u1EF1c hi\u1EC7n \u0111\u01B0\u1EE3c c\xF4ng vi\u1EC7c th\u1EE9 <code>j</code>.</p><p>H\xE3y vi\u1EBFt ch\u01B0\u01A1ng tr\xECnh in ra m\xE0n h\xECnh s\u1ED1 l\u01B0\u1EE3ng c\xF4ng vi\u1EC7c ph\u1EE5 thu\u1ED9c c\u1EE7a m\u1ED9t c\xF4ng vi\u1EC7c <code>x</code> n\xE0o \u0111\xF3.</p></blockquote><div class="custom-container tip"><p class="custom-container-title">\u{1F4A1} GI\u1EA2I TH\xCDCH</p><p><strong>\u0110\u1EA7u v\xE0o:</strong></p><ol><li><p>D\xF2ng \u0111\u1EA7u ti\xEAn ch\u1EE9a 2 s\u1ED1, t\u01B0\u01A1ng \u1EE9ng v\u1EDBi s\u1ED1 l\u01B0\u1EE3ng c\xF4ng vi\u1EC7c v\xE0 s\u1ED1 l\u01B0\u1EE3ng m\u1ED1i quan h\u1EC7 gi\u1EEFa c\xE1c c\xF4ng vi\u1EC7c</p></li><li><p>C\xE1c d\xF2ng ti\u1EBFp theo, m\u1ED7i d\xF9ng ch\u1EE9a <code>u</code>, <code>v</code> n\xF3i r\u1EB1ng: c\xF4ng vi\u1EC7c <code>v</code> ph\u1EE5 thu\u1ED9c c\xF4ng vi\u1EC7c <code>u</code></p></li><li><p>D\xF2ng cu\u1ED1i s\u1EBD ch\u1EE9a c\xF4ng vi\u1EC7c <code>x</code> c\u1EA7n t\xECm s\u1ED1 c\xF4ng vi\u1EC7c ph\u1EE5 thu\u1ED9c</p></li></ol><table><thead><tr><th>Input</th><th>Result</th></tr></thead><tbody><tr><td>3 2<br>1 2<br>2 3<br>2</td><td>2:1</td></tr><tr><td>3 2<br>1 2<br>2 3<br>1</td><td>1:0</td></tr><tr><td>5 7<br>1 4<br>1 2<br>1 3<br>1 5<br>2 3<br>3 5<br>4 5<br>2</td><td>2:1</td></tr><tr><td>5 7<br>1 4<br>1 2<br>1 3<br>1 5<br>2 3<br>3 5<br>4 5<br>5</td><td>5:3</td></tr></tbody></table></div><h3 id="phan-tich-1" tabindex="-1"><a class="header-anchor" href="#phan-tich-1" aria-hidden="true">#</a> Ph\xE2n t\xEDch</h3><div class="custom-container tip"><p class="custom-container-title">\u{1F4A1} M\u1EB8O</p><p>Nh\xECn s\u01A1 qua kh\xF4ng kh\xE1c g\xEC b\xE0i 1, ch\xFAng ta ho\xE0n to\xE0n c\xF3 th\u1EC3 s\u1EED d\u1EE5ng l\u1EA1i:</p><p>V\xED d\u1EE5 m\xF4 h\xECnh <code>3</code> v\xE0 <code>4</code>:</p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/11/23-10-29-39-Screen Shot 2021-11-23 at 10.29.32.png"><blockquote><p>\u1EDF n\xFAt s\u1ED1 2 c\xF3 1 ph\u1EE5 thu\u1ED9c ==&gt; <code>2:1</code></p><p>\u1EDF n\xFAt s\u1ED1 5 c\xF3 3 ph\u1EE5 thu\u1ED9c ==&gt; <code>5:3</code></p></blockquote></div>',5),f={id:"loi-giai-1",tabindex:"-1"},x=t("a",{class:"header-anchor",href:"#loi-giai-1","aria-hidden":"true"},"#",-1),I=n(),q=t("img",{src:"https://raw.githubusercontent.com/Zenfection/Image/master/2021/08/02-22-18-48-tenor.gif",width:"40"},null,-1),S=n(),C={href:"https://replit.com/@Zenfection/cau2LTDT",target:"_blank",rel:"noopener noreferrer"},w=n("L\u1EDDi gi\u1EA3i"),N=e('<h2 id="cau-3" tabindex="-1"><a class="header-anchor" href="#cau-3" aria-hidden="true">#</a> C\xE2u 3</h2><blockquote><p>Trang tr\u1EA1i v\u1EEBa nh\u1EADp v\u1EC1 <code>n</code> con g\xE0 m\u1EDBi v\xE0 \u0111ang chu\u1EA9n b\u1ECB ph\xE2n b\u1ED5 v\xE0o 2 chu\u1ED3ng g\xE0 tr\u1ED1ng. Tuy nhi\xEAn, m\u1ED9t s\u1ED1 con g\xE0 l\u1EA1i kh\xF4ng th\xEDch \u1EDF chung v\u1EDBi nhau. N\u1EBFu th\u1EA3 ch\xFAng v\xE0o chung m\u1ED9t chu\u1ED3ng th\xEC ch\xFAng s\u1EBD m\u1ED5 nhau.</p><p>H\xE3y vi\u1EBFt ch\u01B0\u01A1ng tr\xECnh xem c\xF3 th\u1EC3 ph\xE2n chia c\xE1c con g\xE0 v\xE0o 2 chu\u1ED3ng g\xE0 kh\xF4ng, v\xE0 m\u1ED7i chu\u1ED3ng g\xE0 c\xF3 bao nhi\xEAu con.</p></blockquote><div class="custom-container tip"><p class="custom-container-title">\u{1F4A1} GI\u1EA2I TH\xCDCH</p><p><strong>\u0110\u1EA7u v\xE0o</strong>:</p><ol><li><p>D\xF2ng \u0111\u1EA7u ti\xEAn ch\u1EE9a 2 s\u1ED1 t\u01B0\u01A1ng \u1EE9ng v\u1EDBi <code>s\u1ED1 con g\xE0</code> v\xE0 <code>c\u1EB7p g\xE0 kh\xF4ng th\xEDch nhau</code></p></li><li><p>C\xE1c d\xF2ng ti\u1EBFp theo, m\u1ED7i d\xF2ng ch\u1EE9a g\xE0 <code>a</code> v\xE0 <code>b</code> s\u1EBD c\u1EAFn nhau theo chung m\u1ED9t chu\u1ED3ng</p></li></ol><p><strong>\u0110\u1EA7u ra</strong>:</p><ol><li><p><code>x</code> l\xE0 s\u1ED1 con g\xE0 trong chu\u1ED3ng <code>A</code></p></li><li><p><code>y</code> l\xE0 s\u1ED1 con g\xE0 trong chu\u1ED3ng <code>B</code></p></li></ol><table><thead><tr><th>Input</th><th>Result</th></tr></thead><tbody><tr><td>5 5<br>1 3<br>2 3<br>2 4<br>3 5<br>4 5</td><td>3 2</td></tr><tr><td>5 4<br>1 4<br>5 2<br>3 2<br>1 2</td><td>3 2</td></tr><tr><td>3 3<br>1 2<br>2 3<br>3 1</td><td>-1 -1</td></tr></tbody></table></div><div class="custom-container warning"><p class="custom-container-title">\u26A0\uFE0F L\u01AFU \xDD</p><p>N\u1EBFu kh\xF4ng th\u1EC3 ph\xE2n chia th\xEC in ra <code>-1 -1</code></p></div><h3 id="phan-tich-2" tabindex="-1"><a class="header-anchor" href="#phan-tich-2" aria-hidden="true">#</a> Ph\xE2n t\xEDch</h3><p>\u0110\u1EA7u ti\xEAn ch\xFAng ta c\u1EA7n x\xE1c \u0111\u1ECBnh b\u1EB1ng c\xE1ch l\u1EA5y m\u1ED9t v\xED d\u1EE5 kh\xF4ng qu\xE1 d\u1EC5 c\u0169ng kh\xF4ng qu\xE1 kh\xF3 \u0111\u1EC3 v\u1EBD ra m\u1ED9t m\xF4 h\xECnh:</p><blockquote><p>M\xECnh s\u1EBD l\u1EA5y v\xED d\u1EE5 <code>1</code>:</p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/11/23-10-59-58-Screen Shot 2021-11-23 at 10.59.29.png" width="300"><p>==&gt; Nh\xECn s\u01A1 ta c\u0169ng bi\u1EBFn \u0111\xE1p \xE1n l\xE0:</p><table><thead><tr><th>Chu\u1ED3ng A</th><th>Chu\u1ED3ng B</th></tr></thead><tbody><tr><td>1<br>2<br>5</td><td>3<br>4</td></tr></tbody></table></blockquote><div class="custom-container tip"><p class="custom-container-title">\u{1F4A1} M\u1EB8O</p><p>V\u1EADy th\xEC m\xECnh th\u1EED s\u1EED d\u1EE5ng <code>BFS</code> \u0111\u1EC3 duy\u1EC7t tu\u1EA7n t\u1EF1: <code>1 3 2 5 4</code></p><ul><li><p><strong>B1:</strong> T\u1EA1o ra 2 danh s\xE1ch <code>A</code> v\xE0 <code>B</code></p></li><li><p><strong>B2:</strong> b\u1ECF s\u1ED1 1 v\xE0o danh s\xE1ch <code>A</code></p></li><li><p><strong>B3:</strong> Duy\u1EC7t t\u1EEB s\u1ED1 ti\u1EBFp theo t\u1EDBi cu\u1ED1i</p></li><li><p><strong>B4:</strong> V\xED d\u1EE5 l\xE0 <code>3</code>, s\u1EBD ki\u1EC3m tra c\xE1c \u0111\u1EC9nh k\u1EC1 c\u1EE7a <code>3</code> c\xF3 n\u1EB1m trong danh s\xE1ch <code>A</code> kh\xF4ng ?</p><ol><li><p>N\u1EBFu v\u1EEBa c\xF3 trong <code>A</code> v\xE0 <code>B</code> th\xEC in ra <code>-1 -1</code> v\xE0 <strong>k\u1EBFt th\xFAc</strong></p></li><li><p>N\u1EBFu c\xF3 trong danh s\xE1ch <code>A</code> th\xEC h\xE3y th\xEAm v\xE0o danh s\xE1ch <code>B</code></p></li><li><p>n\u1EBFu kh\xF4ng c\xF3 trong danh s\xE1ch <code>A</code> th\xEC h\xE3y th\xEAm v\xE0o danh s\xE1ch <code>A</code></p></li></ol></li><li><p><strong>B5:</strong> S\u1ED1 ph\u1EA7n t\u1EED trong 2 danh s\xE1ch <code>A</code> v\xE0 <code>B</code> l\xE0 <strong>k\u1EBFt qu\u1EA3</strong></p></li></ul></div>',8),T={id:"loi-giai-2",tabindex:"-1"},B=t("a",{class:"header-anchor",href:"#loi-giai-2","aria-hidden":"true"},"#",-1),D=n(),L=t("img",{src:"https://raw.githubusercontent.com/Zenfection/Image/master/2021/08/02-22-18-48-tenor.gif",width:"40"},null,-1),A=n(),G={href:"https://replit.com/@Zenfection/cau3LTDT",target:"_blank",rel:"noopener noreferrer"},H=n("L\u1EDDi gi\u1EA3i"),Z=e('<h2 id="cau-4" tabindex="-1"><a class="header-anchor" href="#cau-4" aria-hidden="true">#</a> C\xE2u 4</h2><blockquote><p>Qu\u1ED1c gia Peaceful v\xE0 Savage \u0111ang chi\u1EBFn tranh. Qu\xE2n \u0111\u1ED9i c\u1EE7a Peaceful t\u1EA1i th\xE0nh ph\u1ED1 <code>1</code> c\u1EA7n ph\u1EA3i v\u1EADn chuy\u1EC3n v\u0169 kh\xED qua th\xE0nh ph\u1ED1 <code>n</code> c\u1EA7n \u0111\u01B0\u1EE3c b\u1EA3o v\u1EC7. C\xE1c tuy\u1EBFn \u0111\u01B0\u1EDDng \u0111i qua th\xE0nh ph\u1ED1 ph\u1EA3i \u0111i qua nh\u1EEFng tuy\u1EBFn \u0111\u01B0\u1EDDng trung gian, h\u01A1n n\u1EEFa m\u1ED7i tuy\u1EBFn \u0111\u01B0\u1EDDng \u0111\u1EC1u c\xF3 tr\u1ECDng t\u1EA3i t\u1ED1i \u0111a kh\xE1c nhau.</p><p>H\xE3y vi\u1EBFt ch\u01B0\u01A1ng tr\xECnh ki\u1EC3m tra sau \u0111\xF3 v\u1EADn chuy\u1EC3n v\u0169 kh\xED t\u1EEB th\xE0nh ph\u1ED1 <code>1</code> sang th\xE0nh ph\u1ED1 <code>n</code> c\xF3 ph\xF9 h\u1EE3p hay kh\xF4ng</p></blockquote><div class="custom-container tip"><p class="custom-container-title">\u{1F4A1} GI\u1EA2I TH\xCDCH</p><p><strong>\u0110\u1EA7u v\xE0o:</strong></p><ul><li><p>D\xF2ng d\xF2ng \u0111\u1EA7u ti\xEAn ch\u1EE9a <code>n</code> th\xE0nh ph\u1ED1 v\xE0 <code>m</code> tuy\u1EBFn \u0111\u01B0\u1EDDng</p></li><li><p><code>m</code> d\xF2ng ti\u1EBFp theo l\xE0 danh s\xE1ch c\xE1c tuy\u1EBFn \u0111\u01B0\u1EDDng g\u1ED3m : <code>u</code>, <code>v</code>, <code>x</code>, <code>y</code>, cho bi\u1EBFt tuy\u1EBFn \u0111\u01B0\u1EDDng t\u1EEB <code>u</code> \u0111\u1EBFn <code>v</code>, tr\u1ECDng t\u1EA3i cho ph\xE9p l\xE0 <code>x</code> v\xE0 tr\u1ECDng t\u1EA3i th\u1EF1c t\u1EBF l\xE0 <code>y</code></p></li></ul><p><strong>\u0110\u1EA7u ra:</strong></p><ul><li><p>N\u1EBFu tr\u1ECDng l\u01B0\u1EE3ng th\u1EF1c t\u1EBF v\u1EADn chuy\u1EC3n \u0111\u01B0\u1EDDng h\u1EE3p l\xFD v\xE0 kh\xF4ng b\u1ECB m\u1EA5t h\xE0ng th\xEC in <code>good plan</code></p></li><li><p>N\u1EBFu tr\u1ECDng l\u01B0\u1EE3ng th\u1EF1c t\u1EBF v\u1EADn chuy\u1EC3n \u0111\u01B0\u1EDDng kh\xF4ng h\u1EE3p l\xFD ho\u1EB7c b\u1ECB m\u1EA5t h\xE0ng th\xEC in <code>bad plan</code></p></li></ul><p><strong>V\xCD D\u1EE4</strong>:</p><table><thead><tr><th>Input</th><th>Output</th></tr></thead><tbody><tr><td>7 10<br>1 2 9 3<br>1 3 4 4<br>1 4 8 2<br>2 3 4 1<br>2 6 3 3<br>3 7 7 4<br>4 5 5 2<br>5 3 3 0<br>5 7 2 2<br>6 7 6 3</td><td>bad plan</td></tr><tr><td>7 10<br>1 2 9 5<br>1 3 4 4<br>1 4 8 2<br>2 3 4 0<br>2 6 3 3<br>3 7 7 4<br>4 5 5 2<br>5 3 3 0<br>5 7 2 2<br>6 7 6 3</td><td>bad plan</td></tr><tr><td>7 10<br>1 2 9 3<br>1 3 4 4<br>1 4 8 2<br>2 3 0 4<br>2 6 3 3<br>3 7 7 4<br>4 5 5 2<br>5 3 3 0<br>5 7 2 2<br>6 7 6 3</td><td>bad plan</td></tr><tr><td>7 10<br>1 2 9 3<br>1 3 4 4<br>1 4 8 2<br>2 3 4 0<br>2 6 3 3<br>3 7 7 4<br>4 5 5 2<br>5 3 3 0<br>5 7 2 2<br>6 7 6 3</td><td>good plan</td></tr></tbody></table></div><h3 id="phan-tich-3" tabindex="-1"><a class="header-anchor" href="#phan-tich-3" aria-hidden="true">#</a> Ph\xE2n t\xEDch</h3><p>Ch\xFAng ta s\u1EBD l\u1EA5y v\xED d\u1EE5 <code>\u0111\xFAng</code> v\xE0 <code>sai</code> (<em>c\u1EE5 th\u1EC3 l\xE0 v\xED d\u1EE5 l\xE0 <code>1</code> v\xE0 <code>4</code></em>)</p><table><thead><tr><th>M\xF4 h\xECnh 1</th><th>M\xF4 h\xECnh 4</th></tr></thead><tbody><tr><td><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/11/30-21-35-29-Screen Shot 2021-11-30 at 21.35.23.png" width="375"></td><td><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/11/30-21-34-33-Screen Shot 2021-11-30 at 21.34.25.png" width="400"></td></tr></tbody></table><div class="custom-container warning"><p class="custom-container-title">\u26A0\uFE0F L\u01AFU \xDD</p><p>H\xE3y nh\xECn m\xF4 h\xECnh <code>1</code> \u1EDF n\xFAt s\u1ED1 <code>2</code> : v\xE0o <code>3</code> nh\u01B0ng l\u1EA1i ra <code>3+1</code> = <code>4</code> ==&gt; Sai (<em>check c\xE1c tr\u01B0\u1EDDng h\u1EE3p c\xF2n l\u1EA1i</em>)</p><p>\u1EDE m\xF4 h\xECnh <code>4</code> t\u1ED5ng v\xE0o v\xE0 t\u1ED5ng ra \u0111\u1EC1u l\xE0 <code>2+4+3</code> v\xE0 c\xE1c n\xFAt c\xF2n l\u1EA1i c\u0169ng lu\u1ED3ng ra v\xE0 lu\u1ED3ng v\xE0o nh\u01B0 sau</p></div><div class="custom-container tip"><p class="custom-container-title">\u{1F4A1} M\u1EB8O</p><ul><li><p><strong>B1</strong>: Nh\u1EADp cung nh\u01B0ng ki\u1EC3m tra tr\u1ECDng t\u1EA3i</p><blockquote><p>N\u1EBFu sai th\xEC in ra <code>bad plan</code> v\xE0 <code>return 0</code></p></blockquote></li><li><p><strong>B2</strong>: Ki\u1EC3m tra lu\u1ED3ng v\xE0o c\u1EE7a n\xFAt <code>n</code> v\xE0 lu\u1ED3ng ra c\u1EE7a n\xFAt <code>1</code></p><blockquote><p>N\u1EBFu kh\xF4ng b\u1EB1ng nhau th\xEC in ra <code>bad plan</code> v\xE0 <code>return 0</code></p></blockquote></li><li><p><strong>B3</strong>: Ki\u1EC3m tra lu\u1ED3ng v\xE0o v\xE0 ra c\u1EE7a c\xE1c n\xFAt c\xF2n l\u1EA1i</p><blockquote><p>N\u1EBFu c\xF3 n\xFAt n\xE0o lu\u1ED3ng v\xE0o v\xE0 ra kh\xF4ng b\u1EB1ng nhau th\xEC in ra <code>bad plan</code> v\xE0 <code>return 0</code></p></blockquote></li><li><p><strong>B4</strong>: In ra <code>good plan</code> khi c\xE1c tr\u01B0\u1EDDng h\u1EE3p tr\xEAn sai</p></li></ul></div>',8),V={id:"loi-giai-3",tabindex:"-1"},O=t("a",{class:"header-anchor",href:"#loi-giai-3","aria-hidden":"true"},"#",-1),M=n(),F=t("img",{src:"https://raw.githubusercontent.com/Zenfection/Image/master/2021/08/02-22-18-48-tenor.gif",width:"40"},null,-1),$=n(),j={href:"https://replit.com/@Zenfection/cau4LTDT",target:"_blank",rel:"noopener noreferrer"},P=n("L\u1EDDi gi\u1EA3i"),K=e('<h2 id="cau-5" tabindex="-1"><a class="header-anchor" href="#cau-5" aria-hidden="true">#</a> C\xE2u 5</h2><blockquote><p>John l\xE0 l\u1EADp tr\xECnh vi\xEAn s\u1ED1ng t\u1EA1i San Francisco. Hi\u1EC7n t\u1EA1i trong nh\xF3m ph\xE1t tri\u1EC3n ph\u1EA7n m\u1EC1m v\u1EDBi 2 c\xF4ng ty <code>A</code> v\xE0 <code>B</code>. V\xEC l\xFD do \u0111\u1EB7c bi\u1EC7t n\xEAn h\xE0ng th\xE1ng <code>John</code> ph\u1EA3i \u0111i qua l\u1EA1i c\xF4ng ty <code>A</code> v\xE0 <code>B</code>.</p><p>Bi\u1EBFt r\u1EB1ng t\u1EA1i n\u01A1i <code>John</code> s\u1ED1ng c\xF3 th\u1EC3 \u0111i \u0111\u1EBFn c\xF4ng ty <code>A</code> v\xE0 <code>B</code> th\xF4ng qua h\u1EC7 th\u1ED1ng c\xE1c chuy\u1EBFn bay nh\u01B0 sau:</p><table><thead><tr><th>STT</th><th>Chuy\u1EBFn bay</th><th>Gi\xE1 v\xE9</th></tr></thead><tbody><tr><td>1</td><td>San Francisco &lt;=&gt; Detroit</td><td>$329</td></tr><tr><td>2</td><td>San Francisco\xA0&lt;=&gt; New York</td><td>$359</td></tr><tr><td>3</td><td>San Francisco &lt;=&gt; Denver</td><td>$279</td></tr><tr><td>4</td><td>San Francisco\xA0&lt;=&gt; Los Angeles</td><td>$69</td></tr><tr><td>5</td><td>Denver\xA0&lt;=&gt; Los\xA0Angeles</td><td>$209</td></tr><tr><td>6</td><td>Denver\xA0&lt;=&gt;\xA0Detroit</td><td>$129</td></tr><tr><td>7</td><td>Denver\xA0&lt;=&gt; New York</td><td>$279</td></tr><tr><td>8</td><td>Los Angeles\xA0&lt;=&gt; New York</td><td>$379</td></tr><tr><td>9</td><td>Los Angeles\xA0&lt;=&gt;\xA0Detroit</td><td>$349</td></tr><tr><td>10</td><td>Detroit &lt;=&gt;\xA0New York</td><td>$89</td></tr></tbody></table><p>V\xED d\u1EE5 v\xE9 s\u1ED1 <code>1</code> l\xE0 t\u1EEB San <code>Francisco</code> t\u1EDBi <code>Detroit</code> v\xE0 <code>Detroit</code> t\u1EDBi <code>Francisco</code> \u0111\u1EC1 c\xF3 gi\xE1 v\xE9 l\xE0 <code>$329</code></p><p>\u0110\u1EC3 \u0111\u01A1n gi\u1EA3n ta s\u1EBD \u0111\xE1nh c\xE1c th\xE0nh ph\u1ED1 theo s\u1ED1 sau:</p><table><thead><tr><th>San Francisco</th><th>Detroit</th><th>New York</th><th>Los Angeles</th><th>Denver</th></tr></thead><tbody><tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr></tbody></table><p>Th\xF4ng th\u01B0\u1EDDng th\xEC chuy\u1EBFn bay c\u1EE7a <code>John</code> s\u1EBD \u0111\u1EBFn g\u1EB7p c\xF4ng ty <code>A</code> v\xE0 <code>B</code> di\u1EC5n ra trong <code>3</code> ng\xE0y:</p><ul><li><p>Ng\xE0y <code>1</code>: \u0110i t\u1EEB nh\xE0 (<em>San Francisco</em>) t\u1EDBi c\xF4ng ty <code>A</code> (<em>Denver</em>)</p></li><li><p>Ng\xE0y <code>2</code>: \u0110i t\u1EEB c\xF4ng ty <code>A</code> (<em>Denver</em>) t\u1EDBi c\xF4ng ty <code>B</code> (<em>New York</em>)</p></li><li><p>Ng\xE0y <code>3</code>: \u0110i t\u1EEB c\xF4ng ty <code>B</code> (<em>New York</em>) v\u1EC1 nh\xE0 (<em>San Francisco</em>)</p></li></ul><p>Vi\u1EBFt ch\u01B0\u01A1ng tr\xECnh gi\xFAp <code>John</code> ch\u1ECDn chuy\u1EBFn bay sau cho chi ph\xED ph\u1EA3i tr\u1EA3 l\xE0 th\u1EA5p nh\u1EA5t</p></blockquote><div class="custom-container tip"><p class="custom-container-title">\u{1F4A1} GI\u1EA2I TH\xCDCH</p><p><strong>\u0110\u1EA7u v\xE0o</strong>:</p><ul><li><p>D\xF2ng \u0111\u1EA7u ti\xEAn ch\u1EE9a <code>s\u1ED1 th\xE0nh ph\u1ED1</code> v\xE0 <code>s\u1ED1 chuy\u1EBFn bay gi\u1EEFa 2 th\xE0nh ph\u1ED1</code></p></li><li><p>C\xE1c D\xF2ng ti\u1EBFp theo ch\u1EE9a 3 s\u1ED1 <code>u</code>,<code>v</code>,<code>w</code>: chuy\u1EBFn bay t\u1EEB <code>u</code> t\u1EDBi <code>v</code> c\xF3 gi\xE1 <code>w</code></p></li><li><p>D\xF2ng cu\u1ED1i ch\u1EE9a <code>x</code> v\xE0 <code>y</code> l\xE0 hai th\xE0nh ph\u1ED1 v\xE0 <code>John</code> mu\u1ED1n t\xECm \u0111\u01B0\u1EDDng \u0111i c\xF4ng t\xE1c v\u1EDBi s\u1ED1 ti\u1EC1n th\u1EA5p nh\u1EA5t</p></li></ul><table><thead><tr><th>Input</th><th>Result</th></tr></thead><tbody><tr><td>5 10<br>1 2 329<br>1 3 359<br>1 5 279<br>1 4 69<br>5 4 209<br>5 2 129<br>5 3 279<br>4 3 379<br>4 2 349<br>2 3 89<br>1 5</td><td>278<br>1 4 5</td></tr><tr><td>5 10<br>1 2 329<br>1 3 359<br>1 5 279<br>1 4 69<br>5 4 209<br>5 2 129<br>5 3 279<br>4 3 379<br>4 2 349<br>2 3 89<br>5 3</td><td>218<br>5 2 3</td></tr></tbody></table></div><h3 id="phan-tich-4" tabindex="-1"><a class="header-anchor" href="#phan-tich-4" aria-hidden="true">#</a> Ph\xE2n t\xEDch</h3><p>T\u1EEB v\xED d\u1EE5 tr\xEAn ta s\u1EBD c\xF3 m\xF4 h\xECnh nh\u01B0 sau:</p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/11/24-16-36-39-Screen Shot 2021-11-24 at 16.36.21.png"><p>T\u1EEB \u0111\xE2y ch\xFAng ta c\xF3 th\u1EC3 nh\xECn \u0111\u01A1n gi\u1EA3n r\u1EB1ng :</p><ul><li><p>Con \u0111\u01B0\u1EDDng \u0111i t\u1EEB <code>1</code> t\u1EDBi <code>5</code> l\xE0 : <code>1-4-5</code> v\xE0 c\xF3 gi\xE1 tr\u1ECB l\xE0 <code>278</code></p></li><li><p>Con \u0111\u01B0\u1EDDng \u0111i t\u1EEB <code>5</code> t\u1EDBi <code>3</code> l\xE0 : <code>5-2-3</code> v\xE0 c\xF3 gi\xE1 tr\u1ECB l\xE0 <code>218</code></p></li></ul>',8),R={class:"custom-container tip"},Y=t("p",{class:"custom-container-title"},"\u{1F4A1} M\u1EB8O",-1),J=n("S\u1EED d\u1EE5ng gi\u1EA3i thu\u1EADt "),E=n("Dijstra"),z=n(" \u0111\u1EC3 t\xECm ra \u0111\u01B0\u1EDDng \u0111i ng\u1EAFn nh\u1EA5t"),Q={id:"loi-giai-4",tabindex:"-1"},U=t("a",{class:"header-anchor",href:"#loi-giai-4","aria-hidden":"true"},"#",-1),W=n(),X=t("img",{src:"https://raw.githubusercontent.com/Zenfection/Image/master/2021/08/02-22-18-48-tenor.gif",width:"40"},null,-1),tt=n(),nt={href:"https://replit.com/@Zenfection/cau5LTDT",target:"_blank",rel:"noopener noreferrer"},ct=n("L\u1EDDi gi\u1EA3i"),et=e('<h2 id="cau-6" tabindex="-1"><a class="header-anchor" href="#cau-6" aria-hidden="true">#</a> C\xE2u 6</h2><p>M\u1ED9t ng\u01B0\u1EDDi n\xF4ng d\xE2n tr\u1ED3ng thanh long c\u1EA7n l\u1EAFp \u0111\xE8n chi\u1EBFu s\xE1ng v\xE0o ban \u0111\xEAm \u0111\xE3 c\u1EAFm <code>n</code> c\u1ECDc l\u1EAFp \u0111\xE8n chi\u1EBFu s\xE1ng (<em>\u0111\u01B0\u1EE3c \u0111\xE1nh s\u1ED1 t\u1EEB <code>1</code> t\u1EDBi <code>n</code></em>) v\xE0 b\xE1c \u0111\xE3 k\xE9o d\xE2y \u0111i\u1EC7n t\u1EEB nh\xE0 c\u1EE7a b\xE1c t\u1EDBi c\u1ECDc s\u1ED1 <code>1</code>.</p><p>Tr\xEAn m\u1ED7i c\u1ECDc n\xE0y, t\u1EEB m\u1ED9t b\xF3ng \u0111\xE8n s\u1EBD n\u1ED1i d\xE2y \u0111i\u1EC7n cho t\u1EA5t c\u1EA3 b\xF3ng \u0111\xE8n \u1EDF nh\u1EEFng c\u1ECDc c\xF2n l\u1EA1i. N\u1EBFu m\u1ED9t c\u1ECDc \u0111\u01B0\u1EE3c c\u1EA5p \u0111i\u1EC7n th\xEC t\u1EA5t c\u1EA3 c\xE1c c\u1ECDc kh\xE1c n\u1ED1i v\u1EDBi n\xF3 c\u0169ng \u0111\u01B0\u1EE3c c\u1EA5p \u0111i\u1EC7n, c\xE1c \u0111i\u1EC3m n\u1ED1i ph\u1EA3i n\u1EB1m tr\xEAn c\u1ECDc n\xE0o \u0111\xF3 (<em>kh\xF4ng n\u1EB1m \u1EDF l\u01B0ng ch\u1EEBng gi\u1EEFa 2 c\u1ECDc</em>).</p><p>B\xE1c n\xF4ng d\xE2n \u0111\xE3 th\u1EA5y c\xF3 <code>m</code> c\u1EB7p c\u1ECDc c\xF3 th\u1EC3 \u0111\u01B0\u1EE3c n\u1ED1i v\u1EDBi nhau v\xE0 \u0111\xE3 ghi l\u1EA1i chi\u1EC1u d\xE0i d\xE2y \u0111i\u1EC7n c\u1EA7n thi\u1EBFt \u0111\u1EC3 n\u1ED1i (<em>m\u1ED7i d\xE2y k\u1EBFt n\u1ED1i c\xF3 gi\xE1 ti\u1EC1n kh\xE1c nhau</em>).</p><p>H\xE3y vi\u1EBFt ch\u01B0\u01A1ng tr\xECnh gi\xFAp n\xF4ng d\xE2n t\xEDnh s\u1ED1 ti\u1EC1n t\u1ED1i thi\u1EC3u c\u1EA7n \u0111\u1EC3 mua d\u1EADy \u0111i\u1EC7n th\u1EAFp s\xE1ng m\u1EA3nh v\u01B0\u1EDDn thanh long.</p><div class="custom-container tip"><p class="custom-container-title">\u{1F4A1} GI\u1EA2I TH\xCDCH</p><p><strong>\u0110\u1EA7u v\xE0o</strong>:</p><ul><li><p>D\xF2ng \u0111\u1EA7u ti\xEAn ch\u1EE9a <code>s\u1ED1 c\u1ECDc l\u1EAFp \u0111\xE8n</code> v\xE0 <code>s\u1ED1 c\u1EB7p c\u1ECDc c\xF3 th\u1EC3 n\u1ED1i v\u1EDBi nhau b\u1EB1ng d\xE2y \u0111i\u1EC7n</code></p></li><li><p>C\xE1c d\xF2ng ti\u1EBFp theo m\u1ED7i d\xF2ng s\u1EBD ch\u1EE9a 4 s\u1ED1 <code>u</code>, <code>v</code>, <code>x</code>, <code>y</code> n\xF3i r\u1EB1ng : c\u1ECDc <code>u</code> v\u1EDBi c\u1ECDc <code>v</code>, c\u1EA7n mua <code>x</code> m\xE9t d\xE2y m\u1ED7i m\xE9t c\xF3 gi\xE1 <code>y</code> ngh\xECn VND/m</p></li></ul><p><strong>\u0110\u1EA7u ra</strong>:</p><ul><li>In ra m\xE0n h\xECnh s\u1ED1 ti\u1EC1n th\u1EA5p nh\u1EA5t \u0111\u1EC3 mua \u0111\xE8n th\u1EAFp s\xE1ng c\u1EA3 v\u01B0\u1EDDn thanh long</li></ul><blockquote><p>\u26A0\uFE0F N\u1EBFu b\xE0i to\xE1n kh\xF4ng c\xF3 l\u1EDDi gi\u1EA3i h\xE3y in ra: &quot;KHONG CO LOI GIAI&quot;</p></blockquote><table><thead><tr><th>Input</th><th>Result</th></tr></thead><tbody><tr><td>7 10<br>1 3 5 2<br>1 2 2 3<br>1 4 7 2<br>3 2 2 2<br>3 5 8 1<br>2 4 1 3<br>2 6 9 4<br>4 7 10 2<br>5 6 6 5<br>6 7 15 2</td><td>71</td></tr><tr><td>7 7 <br>1 3 5 4<br>1 2 2 2<br>1 4 7 2<br>3 2 2 5<br>2 4 1 4<br>2 6 9 5<br>5 7 8 6</td><td>KHONG CO LOI GIAI</td></tr><tr><td>5 8<br>1 2 7 2<br>1 3 10 3<br>2 3 8 2<br>2 4 2 3<br>2 5 9 2<br>3 4 6 3<br>3 5 15 2<br>4 5 7 3</td><td>54</td></tr></tbody></table></div><h3 id="phan-tich-5" tabindex="-1"><a class="header-anchor" href="#phan-tich-5" aria-hidden="true">#</a> Ph\xE2n t\xEDch</h3><p>\u0110\u1EA7u ti\xEAn v\u1EC1 ph\u1EA7n nh\u1EADp gi\xE1 tr\u1ECB: <code>2</code> th\xF4ng s\u1ED1 <code>x</code> v\xE0 <code>y</code> th\u1EF1c ch\u1EA5t ta c\xF3 th\u1EC3 g\u1ED9p l\u1EA1i b\u1EB1ng ph\xE9p nh\xE2n nh\u01B0 sau:</p><table><thead><tr><th>Ban \u0111\u1EA7u</th><th>G\u1ED9p l\u1EA1i</th><th>M\xF4 h\xECnh</th></tr></thead><tbody><tr><td>1 3 5 2<br>1 2 2 3<br>1 4 7 2<br>3 2 2 2<br>3 5 8 1<br>2 4 1 3<br>2 6 9 4<br>4 7 10 2<br>5 6 6 5<br>6 7 15 2</td><td>1 3 10<br>1 2 6<br>1 4 14<br>3 2 4<br>3 5 8<br>2 4 3<br>2 6 36<br>4 7 20<br>5 6 30<br>6 7 30</td><td><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/11/25-16-32-20-Screen Shot 2021-11-25 at 16.31.31.png" width="300"></td></tr><tr><td>1 3 5 4<br>1 2 2 2<br>1 4 7 2<br>3 2 2 5<br>2 4 1 4<br>2 6 9 5<br>5 7 8 6</td><td>1 3 20<br>1 2 4<br>1 4 14<br>3 2 10<br>2 4 4<br>2 6 45<br>5 7 48</td><td><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/11/25-16-32-25-Screen Shot 2021-11-25 at 16.32.00.png" width="300"></td></tr><tr><td>1 2 7 2<br>1 3 10 3<br>2 3 8 2<br>2 4 2 3<br>2 5 9 2<br>3 4 6 3<br>3 5 15 2<br>4 5 7 3<br></td><td>1 2 14<br>1 3 13<br>2 3 16<br>2 4 6<br>2 5 18<br>3 4 18<br>3 5 30<br>4 5 21<br></td><td><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/11/25-16-32-29-Screen Shot 2021-11-25 at 16.32.11.png" width="230"></td></tr></tbody></table><div class="custom-container danger"><p class="custom-container-title">\u{1F6A8} CH\xDA \xDD</p><p>B\u1EA1n h\xE3y ch\xFA \xFD m\xF4 h\xECnh s\u1ED1 <code>2</code>, nh\xE1nh <code>5-7</code> n\xF3 n\u1EB1m ngo\xE0i ch\u1EE9ng t\u1ECF n\xF3 kh\xF4ng li\xEAn th\xF4ng, n\xEAn ch\xFAng ta kh\xF4ng c\xF3 l\u1EDDi gi\u1EA3i</p></div>',10),ot={class:"custom-container tip"},dt=t("p",{class:"custom-container-title"},"C\xC1C B\u01AF\u1EDAC L\xC0M",-1),it=e(`<li><p>B\u01B0\u1EDBc 1: Nh\u1EADp v\xE0o \u0111\u1ED3 th\u1ECB c\xF3 tr\u1ECDng s\u1ED1</p><blockquote><p>S\u1EED d\u1EE5ng \u0111\u1ED3 th\u1ECB <code>danh s\xE1ch cung</code></p></blockquote><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>int n,m;
scanf(&quot;%d%d&quot;,&amp;n,&amp;m);
initGraph(&amp;G, n);
for(int i = 0; i &lt; m; i++){
    int x,y,a,b;
    scanf(&quot;%d%d%d%d&quot;,&amp;x,&amp;y,&amp;a,&amp;b);
    int z = a * b;
    addEdge(&amp;G,x,y,z);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),ht=n("B\u01B0\u1EDBc 2: S\u1EED d\u1EE5ng h\xE0m t\xEDnh c\xE2y khung nh\u1ECF nh\u1EA5t "),rt=n("kruskal"),at=n(" \u0111\u1EC3 t\xECm ra gi\xE1 tr\u1ECB c\xE2y khung nh\u1ECF nh\u1EA5t c\xF3 tr\u1ECDng s\u1ED1"),st=n("B\u01B0\u1EDBc 3: Ki\u1EC3m tra \u0111\u1ED3 th\u1ECB c\xF3 li\xEAn th\xF4ng kh\xF4ng ? "),lt=t("em",null,"tham kh\u1EA3o",-1),gt=t("ol",null,[t("li",null,[t("p",null,[n("N\u1EBFu "),t("strong",null,"c\xF3"),n(": in ra k\u1EBFt qu\u1EA3")])]),t("li",null,[t("p",null,[n("N\u1EBFu "),t("strong",null,"kh\xF4ng"),n(": in "),t("code",null,"KHONG CO LOI GIAI")])])],-1),ut={id:"loi-giai-5",tabindex:"-1"},pt=t("a",{class:"header-anchor",href:"#loi-giai-5","aria-hidden":"true"},"#",-1),bt=n(),mt=t("img",{src:"https://raw.githubusercontent.com/Zenfection/Image/master/2021/08/02-22-18-48-tenor.gif",width:"40"},null,-1),vt=n(),_t={href:"https://replit.com/@Zenfection/cau6LTDT",target:"_blank",rel:"noopener noreferrer"},yt=n("L\u1EDDi gi\u1EA3i");function kt(ft,xt){const o=h("ExternalLinkIcon"),d=h("RouterLink");return a(),s("div",null,[g,t("h3",u,[p,b,m,v,t("a",_,[y,c(o)])]),k,t("h3",f,[x,I,q,S,t("a",C,[w,c(o)])]),N,t("h3",T,[B,D,L,A,t("a",G,[H,c(o)])]),Z,t("h3",V,[O,M,F,$,t("a",j,[P,c(o)])]),K,t("div",R,[Y,t("p",null,[J,c(d,{to:"/cosonganh/CT175-Ly_thuyet_do_thi/Thuchanh/3.html#thuat-toan-dijkstra"},{default:i(()=>[E]),_:1}),z])]),t("h3",Q,[U,W,X,tt,t("a",nt,[ct,c(o)])]),et,t("div",ot,[dt,t("ul",null,[it,t("li",null,[t("p",null,[ht,c(d,{to:"/cosonganh/CT175-Ly_thuyet_do_thi/Thuchanh/5.html#giai-thuat-kruskal"},{default:i(()=>[rt]),_:1}),at])]),t("li",null,[t("p",null,[st,c(d,{to:"/cosonganh/CT175-Ly_thuyet_do_thi/Thuchanh/2.html#tinh-lien-thong-cua-%C4%91o-thi"},{default:i(()=>[lt]),_:1})]),gt])])]),t("h3",ut,[pt,bt,mt,vt,t("a",_t,[yt,c(o)])])])}const qt=r(l,[["render",kt],["__file","6.html.vue"]]);export{qt as default};
