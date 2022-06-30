import{_ as t,r as d,o as h,c as i,a as e,d as a,w as l,e as n,b as c}from"./app.f9a431a9.js";const r={},s=n('<h1 id="bai-6-\u0111uong-\u0111i-va-chu-trinh" tabindex="-1"><a class="header-anchor" href="#bai-6-\u0111uong-\u0111i-va-chu-trinh" aria-hidden="true">#</a> B\xE0i 6: \u0110\u01B0\u1EDDng \u0111i v\xE0 Chu tr\xECnh</h1><p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/08/12-16-19-36-icons8-movie_beginning.png" width="30"> Tham kh\u1EA3o <code>Video</code> sau \u0111\xE2y :</p><div class="videoZen"><iframe src="https://drive.google.com/file/d/1S6c5iKpq6I6imAHa3LgfaDG9rZY-jMSU/preview"></iframe></div><h2 id="_1-\u0111inh-nghia" tabindex="-1"><a class="header-anchor" href="#_1-\u0111inh-nghia" aria-hidden="true">#</a> 1.\u0110\u1ECBnh ngh\u0129a</h2><h3 id="\u0111uong-\u0111i" tabindex="-1"><a class="header-anchor" href="#\u0111uong-\u0111i" aria-hidden="true">#</a> \u0110\u01B0\u1EDDng \u0111i</h3><ul><li><p>\u0110\u01B0\u1EDDng \u0111i t\u1EEB <code>u</code> v\u1EDBi <code>v</code> trong m\u1ED9t <code>\u0111\u1ED3 th\u1ECB v\xF4 h\u01B0\u1EDBng</code> l\xE0 m\u1ED9t d\xE3y c\u1EA1nh <code>e\u2081</code>, <code>e\u2082</code>..<code>e\u2099</code> c\u1EE7a \u0111\u1ED3 th\u1ECB sao cho <code>f(e\u2081)</code> = {<code>x\u2080</code>,<code>x\u2081</code>}, <code>f(e\u2082)</code> = {<code>x\u2099\u208B\u2081</code>,<code>x\u2099</code>} v\u1EDBi <code>x\u2080</code> = <code>u</code> v\xE0 <code>x\u2099</code>=<code>v</code></p></li><li><p>Khi \u0111\u1ED3 th\u1ECB l\xE0 \u0111\u01A1n, ta k\xFD hi\u1EC7u \u0111\u01B0\u1EDDng \u0111i n\xE0y b\u1EB1ng d\xE3y <code>x\u2080</code>,<code>x\u2081</code>..<code>x\u2099</code></p></li></ul><h3 id="chu-trinh" tabindex="-1"><a class="header-anchor" href="#chu-trinh" aria-hidden="true">#</a> Chu tr\xECnh</h3><ul><li><p><strong>\u0110\u01B0\u1EDDng \u0111i</strong> \u0111\u01B0\u1EE3c g\u1ECDi l\xE0 <strong>chu tr\xECnh</strong> (<code>cycle/circuit</code>) n\u1EBFu n\xF3 b\u1EAFt \u0111\u1EA7u v\xE0 k\u1EBFt th\xFAc t\u1EA1i m\u1ED9t \u0111\u1EC9nh (<em>ngh\u0129a l\xE0 <code>u</code>=<code>v</code></em>)</p></li><li><p><strong>\u0110\u01B0\u1EDDng \u0111i</strong> hay <strong>chu tr\xECnh</strong> g\u1ECDi l\xE0 \u0111\u01A1n n\u1EBFu n\xF3 kh\xF4ng \u0111i qua cugn2 m\u1ED9t c\u1EA1nh qu\xE1 m\u1ED9t l\u1EA7n</p></li></ul><h3 id="vi-du" tabindex="-1"><a class="header-anchor" href="#vi-du" aria-hidden="true">#</a> V\xED d\u1EE5</h3><blockquote><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/08/30-21-06-03-output-onlinepngtools (1).png" width="150"></blockquote><ul><li><p>{<code>a</code>,<code>b</code>,<code>c</code>,<code>e</code>,<code>d</code>} l\xE0 \u0111\u01B0\u1EDDng \u0111i c\xF3 \u0111\u1ED9 d\xE0i l\xE0 <code>4</code></p><blockquote><p><code>a-b</code>, <code>b-c</code>, <code>c-e</code>, <code>e-d</code> t\u1ED3n t\u1EA1i c\u1EA1nh</p></blockquote></li><li><p>{<code>a</code>,<code>b</code>,<code>e</code>,<code>d</code>} kh\xF4ng l\xE0 <strong>\u0111\u01B0\u1EDDng \u0111i</strong>.</p><blockquote><p><code>b-c</code> kh\xF4ng t\u1ED3n t\u1EA1i c\u1EA1nh</p></blockquote></li><li><p>{<code>a</code>,<code>b</code>,<code>c</code>,<code>e</code>,<code>a</code>} l\xE0 m\u1ED9t <strong>chu tr\xECnh</strong></p><blockquote><p><code>a-b</code>, <code>b-c</code>, <code>c-e</code>, <code>e-a</code> l\xE0 c\u1EA1nh</p><p>\u0111\u1EC9nh <code>a</code> \u0111\u1EA7u cu\u1ED1i gi\u1ED1ng nhau</p></blockquote></li><li><p>{<code>c</code>,<code>e</code>,<code>d</code>,<code>e</code>,<code>c</code>} kh\xF4ng ph\u1EA3i l\xE0 m\u1ED9t <strong>\u0111\u01B0\u1EDDng \u0111i</strong> \u0111\u01A1n</p><blockquote><p>n\xF3 l\xE0 chu tr\xECnh nh\u01B0ng kh\xF4ng ph\u1EA3i \u0111\u01B0\u1EDDng \u0111i \u0111\u01A1n v\xEC :</p><p>=&gt; <code>e-d</code> v\xE0 <code>d-e</code> l\xE0 m\u1ED9t c\u1EA1nh v\xE0 xu\u1EA5t hi\u1EC7n 2 l\u1EA7n</p></blockquote></li></ul><div class="custom-container tip"><p class="custom-container-title">\u{1F4C7} Ki\u1EBFn th\u1EE9c Th\xEAm</p><p>N\u1EBFu <code>2</code> \u0111\u1ED3 th\u1ECB c\xF3 c\xE1c chu tr\xECnh c\xF9ng \u0111\u1ED9 d\xE0i <code>k</code> v\u1EDBi nhau, v\u1EDBi <code>k &gt; 2</code></p><p>=&gt; 2 \u0111\u1ED3 th\u1ECB n\xE0y g\u1ECDi l\xE0 <strong>\u0111\u1EB3ng c\u1EA5u v\u1EDBi nhau</strong></p></div><h3 id="lien-thong" tabindex="-1"><a class="header-anchor" href="#lien-thong" aria-hidden="true">#</a> Li\xEAn th\xF4ng</h3><p>\u0110\u01B0\u1EDDng \u0111i gi\u1EEFa m\u1ECDi c\u1EB7p \u0111\xECnh ph\xE2n bi\u1EC7t c\u1EE7a \u0111\u1ED3 th\u1ECB g\u1ECDi l\xE0 <strong>li\xEAn th\xF4ng</strong> (<code>connected</code>) ng\u01B0\u1EE3c l\u1EA1i th\xEC g\u1ECDi l\xE0 <strong>kh\xF4ng li\xEAn th\xF4ng</strong> (<code>disconnected</code>)</p><blockquote><p>V\xED d\u1EE5 :</p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/08/30-21-25-05-output-onlinepngtools (2).png" width="500px"></blockquote><div class="custom-container tip"><p class="custom-container-title">\u{1F4C7} Ki\u1EBFn th\u1EE9c Th\xEAm</p><p>\u0110\u1ED3 th\u1ECB <strong>kh\xF4ng li\xEAn th\xF4ng</strong> s\u1EBD bao g\u1ED3m nhi\u1EC1u \u0111\u1ED3 th\u1ECB con <strong>li\xEAn th\xF4ng</strong></p><p>C\xE1c \u0111\u1ED3 th\u1ECB con n\xE0y g\u1ECDi l\xE0 <strong>th\xE0nh ph\u1EA7n li\xEAn th\xF4ng</strong> (<code>connected component</code>)</p></div><h2 id="_2-\u0111inh-ly" tabindex="-1"><a class="header-anchor" href="#_2-\u0111inh-ly" aria-hidden="true">#</a> 2. \u0110\u1ECBnh l\xFD</h2><h3 id="\u0111uong-\u0111i-giua-2-\u0111inh-bac-le" tabindex="-1"><a class="header-anchor" href="#\u0111uong-\u0111i-giua-2-\u0111inh-bac-le" aria-hidden="true">#</a> \u0110\u01B0\u1EDDng \u0111i gi\u1EEFa 2 \u0111\u1EC9nh b\u1EADc l\u1EBB</h3><p>N\u1EBFu \u0111\u1ED3 th\u1ECB <code>G</code> (<em>kh\xF4ng quan t\xE2m</em> <strong>li\xEAn th\xF4ng</strong> <em>hay kh\xF4ng</em>) c\xF3 \u0111\xFAng <code>2</code> \u0111\u1EC9nh b\u1EADc l\u1EBB, ch\u1EAFc ch\u1EAFn s\u1EBD c\xF3 \u0111\u01B0\u1EDDng n\xF3i 2 \u0111\u1EC9nh n\xE0y</p>',19),g={class:"custom-container details"},u=e("summary",null,[c("\u{1F4DD} "),e("b",null,"Ch\u1EE9ng minh")],-1),p=e("li",null,[e("p",null,[e("strong",null,"TH1"),c(" : "),e("code",null,"G"),c(" li\xEAn th\xF4ng : r\xF5 r\xE0ng c\xF3 \u0111\u01B0\u1EDDng n\u1ED1i "),e("code",null,"2"),c(" \u0111\u1EC9nh b\u1EADc l\u1EBB n\xE0y")])],-1),m=e("p",null,[e("strong",null,"TH2"),c(" : "),e("code",null,"G"),c(" kh\xF4ng li\xEAn th\xF4ng: c\xE1c th\xE0nh ph\u1EA7n li\xEAn th\xF4ng c\u1EE7a "),e("code",null,"G"),c(" l\xE0 m\u1ED9t \u0111\u1ED3 th\u1ECB.`")],-1),b=c("=> Do \u0111\xF3, theo "),_=c("\u0111\u1ECBnh l\xFD v\u1EC1 s\u1ED1 \u0111\u1EC9nh b\u1EADc l\u1EBB"),v=c(" => 2 \u0111\u1EC9nh n\xE0y ph\u1EA3i thu\u1ED9c v\u1EC1 c\xF9ng m\u1ED9t th\xE0nh ph\u1EA7n li\xEAn th\xF4ng => c\xF3 \u0111\u01B0\u1EDDng n\u1ED1i"),k=n('<h3 id="so-canh-cua-\u0111o-thi" tabindex="-1"><a class="header-anchor" href="#so-canh-cua-\u0111o-thi" aria-hidden="true">#</a> S\u1ED1 c\u1EA1nh c\u1EE7a \u0111\u1ED3 th\u1ECB</h3><p>S\u1ED1 c\u1EA1nh t\u1ED1i \u0111a c\u1EE7a m\u1ED9t \u0111\u1ED3 th\u1ECB kh\xF4ng li\xEAn th\xF4ng <code>G</code> g\u1ED3m <code>n</code> \u0111\u1EC9nh l\xE0</p><div class="custom-container tip"><p class="custom-container-title">\u{1F4A1} GHI NH\u1EDA</p><br><img src="https://render.githubusercontent.com/render/math?math=\\frac{(n-k)(n-k+1)}{2}" width="150"></div><h2 id="_3-tinh-chat" tabindex="-1"><a class="header-anchor" href="#_3-tinh-chat" aria-hidden="true">#</a> 3.T\xEDnh ch\u1EA5t</h2><p>\u0110\u1ED3 th\u1ECB c\xF3 h\u01B0\u1EDBng \u0111\u01B0\u1EE3c g\u1ECDi l\xE0 :</p><table><thead><tr><th>Li\xEAn th\xF4ng m\u1EA1nh</th><th>Li\xEAn th\xF4ng y\u1EBFu</th><th>Li\xEAn th\xF4ng m\u1ED9t ph\u1EA7n</th></tr></thead><tbody><tr><td>\u0111\u01B0\u1EDDng \u0111i t\u1EEB <code>a</code>\xA0t\u1EDBi <code>b</code>\xA0v\xE0 t\u1EEB <code>b</code>\xA0t\u1EDBi <code>a</code>\xA0v\u1EDBi m\u1ECDi c\u1EB7p \u0111\u1EC9nh <code>a</code>\xA0v\xE0 <code>b</code>\xA0c\u1EE7a \u0111\u1ED3 th\u1ECB</td><td>c\xF3 \u0111\u01B0\u1EDDng \u0111i gi\u1EEFa <code>2</code>\xA0\u0111\u1EC9nh b\u1EA5t k\u1EF3 c\u1EE7a \u0111\u1ED3 th\u1ECB v\xF4 h\u01B0\u1EDBng n\u1EC1n</td><td>m\u1ECDi c\u1EB7p \u0111\u1EC9nh <code>a</code>\xA0v\xE0 <code>b</code>\xA0b\u1EA5t k\u1EF3, c\xF3 \xEDt nh\u1EA5t m\u1ED9t \u0111\u1EC9nh \u0111\u1EBFn \u0111\u01B0\u1EE3c \u0111\u1EC9nh c\xF2n l\u1EA1i</td></tr></tbody></table>',6);function f(x,y){const o=d("RouterLink");return h(),i("div",null,[s,e("details",g,[u,e("ul",null,[p,e("li",null,[m,e("p",null,[b,a(o,{to:"/cosonganh/CT175-Ly_thuyet_do_thi/Tailieu/1/3.html#b-dinh-ly-ve-so-dinh-bac-le"},{default:l(()=>[_]),_:1}),v])])])]),k])}var w=t(r,[["render",f],["__file","6.html.vue"]]);export{w as default};
