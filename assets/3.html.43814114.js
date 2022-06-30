import{_ as t,r as o,o as e,c,a as n,d as l,e as s,b as a}from"./app.cafd9fae.js";const u={},i=s(`<h1 id="bai-thuc-hanh-3" tabindex="-1"><a class="header-anchor" href="#bai-thuc-hanh-3" aria-hidden="true">#</a> B\xE0i th\u1EF1c h\xE0nh 3</h1><p>Trong b\xE0i n\xE0y b\u1EA1n c\u1EA7n n\u1EAFm b\u1EAFt c\xE1c m\u1EE5c nh\u01B0 sau :</p><blockquote><ul><li><p>T\xECm \u0111\u01B0\u1EDDng \u0111i ng\u1EAFn nh\u1EA5t b\u1EB1ng <code>Dijkstra</code> v\xE0 <code>bellman-Ford</code></p></li><li><p>Ki\u1EC3m tra chu tr\xECnh \xE2m v\xE0 \u1EE9ng d\u1EE5ng c\u1EE7a \u0111\u01B0\u1EDDng \u0111i ng\u1EAFn nh\u1EA5t</p></li></ul></blockquote><div class="custom-container tip"><p class="custom-container-title">\u{1F4A1} TH\u01AF VI\u1EC6N</p><p>S\u1EED d\u1EE5ng c\xE1c th\u01B0 vi\u1EC7n sau:</p><div class="language-c ext-c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span>    <span class="token comment">// th\u01B0 vi\u1EC7n c\u01A1 b\u1EA3n c\u1EE7a C</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdbool.h&gt;</span>  <span class="token comment">// h\u1ED7 tr\u1EE3 true/false cho C</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;list.h&quot;</span>     <span class="token comment">// th\u01B0 vi\u1EC7n c\xE1 nh\xE2n h\u1ED7 tr\u1EE3 danh s\xE1ch</span></span>
</code></pre></div></div>`,4),k=a("\u21E3 Download th\u01B0 vi\u1EC7n "),r={href:"https://github.com/Zenfection/zenctu/blob/main/docs/cosonganh/CT175-Ly_thuyet_do_thi/Thuchanh/source/list.h",target:"_blank",rel:"noopener noreferrer"},d=a("list.h"),v=s(`<div class="custom-container warning"><p class="custom-container-title">\u26A0\uFE0F L\u01AFU \xDD</p><p>T\u1EA5t c\u1EA3 c\xE1c \u0111\u1EC9nh trong \u0111\u1ED3 th\u1ECB b\u1EAFt \u0111\u1EA7u t\u1EEB <code>1</code> thay v\xEC <code>0</code>, n\xEAn h\xE3y \u0111\u1EC3 \xFD r\xF5 kh\xF4ng th\xEC sai !!!</p></div><h2 id="thuat-toan-dijkstra" tabindex="-1"><a class="header-anchor" href="#thuat-toan-dijkstra" aria-hidden="true">#</a> Thu\u1EADt to\xE1n <code>Dijkstra</code></h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">dijksta</span><span class="token punctuation">(</span>Graph G<span class="token punctuation">,</span> <span class="token keyword">int</span> s<span class="token punctuation">,</span> List <span class="token operator">*</span>parrent<span class="token punctuation">,</span> List <span class="token operator">*</span>cost<span class="token punctuation">)</span><span class="token punctuation">{</span>
    bool mark<span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> u<span class="token punctuation">,</span>v<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>u <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> u <span class="token operator">&lt;=</span> G<span class="token punctuation">.</span>n<span class="token punctuation">;</span> u<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//* kh\u1EDFi t\u1EA1o m\u1EA3ng</span>
        cost<span class="token operator">-&gt;</span>Data<span class="token punctuation">[</span>u<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">999</span><span class="token punctuation">;</span>
        mark<span class="token punctuation">[</span>u<span class="token punctuation">]</span> <span class="token operator">=</span> false<span class="token punctuation">;</span>
        parrent<span class="token operator">-&gt;</span>Data<span class="token punctuation">[</span>u<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    parrent<span class="token operator">-&gt;</span>Size <span class="token operator">=</span> cost<span class="token operator">-&gt;</span>Size <span class="token operator">=</span> G<span class="token punctuation">.</span>n<span class="token punctuation">;</span>

    cost<span class="token operator">-&gt;</span>Data<span class="token punctuation">[</span>s<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">//* \u0111i t\u1EEB \u0111\u1EC9nh s, v\u1EC1 \u0111\u1EBFn \u0111\u1EC9nh </span>
    parrent<span class="token operator">-&gt;</span>Data<span class="token punctuation">[</span>s<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">//* \u0111\u1EC9nh b\u1EAFt \u0111\u1EA7u kh\xF4ng c\xF3 parent </span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> G<span class="token punctuation">.</span>n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> min_pi <span class="token operator">=</span> <span class="token number">999</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> G<span class="token punctuation">.</span>n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//* T\xECm \u0111\u1EC9nh ch\u01B0a duy\u1EC7t c\xF3 gi\xE1 tr\u1ECB min_pi</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>mark<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> cost<span class="token operator">-&gt;</span>Data<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;</span> min_pi<span class="token punctuation">)</span><span class="token punctuation">{</span>
                min_pi <span class="token operator">=</span> cost<span class="token operator">-&gt;</span>Data<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
                u <span class="token operator">=</span> j<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        mark<span class="token punctuation">[</span>u<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">//* \u0111\xE1nh d\u1EA5u \u0111\xE3 duy\u1EC7t xong \u0111\u1EC9nh \u0111\xF3</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span>v <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> v <span class="token operator">&lt;=</span> G<span class="token punctuation">.</span>n<span class="token punctuation">;</span> v<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>G<span class="token punctuation">.</span>A<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">[</span>v<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>mark<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">int</span> x <span class="token operator">=</span> cost<span class="token operator">-&gt;</span>Data<span class="token punctuation">[</span>u<span class="token punctuation">]</span> <span class="token operator">+</span> G<span class="token punctuation">.</span>A<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>x <span class="token operator">&lt;</span> cost<span class="token operator">-&gt;</span>Data<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    cost<span class="token operator">-&gt;</span>Data<span class="token punctuation">[</span>v<span class="token punctuation">]</span> <span class="token operator">=</span> x<span class="token punctuation">;</span>
                    parrent<span class="token operator">-&gt;</span>Data<span class="token punctuation">[</span>v<span class="token punctuation">]</span> <span class="token operator">=</span> u<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="thuat-toan-bellman-ford" tabindex="-1"><a class="header-anchor" href="#thuat-toan-bellman-ford" aria-hidden="true">#</a> Thu\u1EADt to\xE1n <code>bellman-Ford</code></h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">bellmanFord</span><span class="token punctuation">(</span>Graph G<span class="token punctuation">,</span> <span class="token keyword">int</span> s<span class="token punctuation">,</span>List <span class="token operator">*</span>cost<span class="token punctuation">,</span> List <span class="token operator">*</span>parrent<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">&lt;=</span> G<span class="token punctuation">.</span>n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// kh\u1EDFi t\u1EA1o ban \u0111\u1EA7u</span>
        cost<span class="token operator">-&gt;</span>Data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">999</span><span class="token punctuation">;</span>
        parrent<span class="token operator">-&gt;</span>Data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    cost<span class="token operator">-&gt;</span>Size <span class="token operator">=</span> parrent<span class="token operator">-&gt;</span>Size <span class="token operator">=</span> G<span class="token punctuation">.</span>n<span class="token punctuation">;</span>
    cost<span class="token operator">-&gt;</span>Data<span class="token punctuation">[</span>s<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">//c\xF3 th\u1EC3 thay \u0111\u1ED5i</span>
    parrent<span class="token operator">-&gt;</span>Data<span class="token punctuation">[</span>s<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">//c\xF3 th\u1EC3 thay \u0111\u1ED5i</span>

    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> it <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> it <span class="token operator">&lt;</span> G<span class="token punctuation">.</span>n<span class="token punctuation">;</span> it<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> k <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> k <span class="token operator">&lt;=</span> G<span class="token punctuation">.</span>m<span class="token punctuation">;</span> k<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">int</span> u <span class="token operator">=</span> G<span class="token punctuation">.</span>edge<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">.</span>u<span class="token punctuation">;</span>
            <span class="token keyword">int</span> v <span class="token operator">=</span> G<span class="token punctuation">.</span>edge<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">.</span>v<span class="token punctuation">;</span>
            <span class="token keyword">int</span> w <span class="token operator">=</span> G<span class="token punctuation">.</span>edge<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">.</span>w<span class="token punctuation">;</span>
            <span class="token keyword">int</span> x <span class="token operator">=</span> cost<span class="token operator">-&gt;</span>Data<span class="token punctuation">[</span>u<span class="token punctuation">]</span> <span class="token operator">+</span> w<span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>x <span class="token operator">&lt;</span> cost<span class="token operator">-&gt;</span>Data<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                cost<span class="token operator">-&gt;</span>Data<span class="token punctuation">[</span>v<span class="token punctuation">]</span> <span class="token operator">=</span> x<span class="token punctuation">;</span>
                parrent<span class="token operator">-&gt;</span>Data<span class="token punctuation">[</span>v<span class="token punctuation">]</span> <span class="token operator">=</span> u<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="me-cung-so-nang-cao" tabindex="-1"><a class="header-anchor" href="#me-cung-so-nang-cao" aria-hidden="true">#</a> M\xEA cung s\u1ED1 (<em>n\xE2ng cao</em>)</h2><blockquote><p>V\xCD D\u1EE4</p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/28-15-19-07-Screen Shot 2018-03-05 at 7.23.34 AM.png" width="200"></blockquote><div class="custom-container tip"><p class="custom-container-title">\u{1F4A1} Y\xCAU C\u1EA6U</p><ul><li><p>Xu\u1EA5t ph\xE1t t\u1EEB g\xF3c tr\xE1i b\xEAn tr\xEAn c\u1EE7a ma tr\u1EADn (<em>c\u1EE5 th\u1EC3 l\xE0 <code>0</code></em>)</p></li><li><p>H\xE3y t\xECm \u0111\u01B0\u1EDDng \u0111i ng\u1EAFn nh\u1EA5t t\u1EEB v\u1ECB tr\xED <strong>xu\u1EA5t ph\xE1t</strong> t\u1EDBi g\xF3c ph\u1EA3i b\xEAn d\u01B0\u1EDBi c\u1EE7a ma tr\u1EADn (<em>c\u1EE5 th\u1EC3 l\xE0 <code>5</code></em>)</p></li></ul><p>==&gt; \u0110\u01B0\u1EDDng \u0111i c\xF3 chi ph\xED th\u1EA5p nh\u1EA5t cho v\xED d\u1EE5 n\xE0y l\xE0 <code>24</code></p></div><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    Graph G<span class="token punctuation">;</span>
    <span class="token function">makeNullGraph</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>G<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//freopen(&quot;dt.txt&quot;,&quot;r&quot;,stdin);</span>
    <span class="token keyword">int</span> row<span class="token punctuation">,</span>col<span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>row<span class="token punctuation">,</span><span class="token operator">&amp;</span>col<span class="token punctuation">)</span><span class="token punctuation">;</span>
    G<span class="token punctuation">.</span>n <span class="token operator">=</span> row <span class="token operator">*</span> col<span class="token punctuation">;</span>
    <span class="token function">init_Graph</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>G<span class="token punctuation">,</span> G<span class="token punctuation">.</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> M<span class="token punctuation">[</span>MAX<span class="token punctuation">]</span><span class="token punctuation">[</span>MAX<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> row<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> col<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>M<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> row<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> col<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>j <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">==</span> col<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">int</span> x <span class="token operator">=</span> i <span class="token operator">*</span> col <span class="token operator">+</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token keyword">int</span> y <span class="token operator">=</span> <span class="token punctuation">(</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> col <span class="token operator">+</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token keyword">int</span> t <span class="token operator">=</span> M<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token function">add_edgeDirectionWeight</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>G<span class="token punctuation">,</span>x<span class="token punctuation">,</span>y<span class="token punctuation">,</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span>
                G<span class="token punctuation">.</span>m <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">==</span> row<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">int</span> x <span class="token operator">=</span> i <span class="token operator">*</span> col <span class="token operator">+</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token keyword">int</span> y <span class="token operator">=</span> i <span class="token operator">*</span> col <span class="token operator">+</span> <span class="token punctuation">(</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token keyword">int</span> t <span class="token operator">=</span> M<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token function">add_edgeDirectionWeight</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>G<span class="token punctuation">,</span>x<span class="token punctuation">,</span>y<span class="token punctuation">,</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span>
                G<span class="token punctuation">.</span>m <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">else</span><span class="token punctuation">{</span>
                <span class="token keyword">int</span> x <span class="token operator">=</span> i <span class="token operator">*</span> col <span class="token operator">+</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token keyword">int</span> y1 <span class="token operator">=</span> i <span class="token operator">*</span> col <span class="token operator">+</span> <span class="token punctuation">(</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token keyword">int</span> y2 <span class="token operator">=</span> <span class="token punctuation">(</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> col <span class="token operator">+</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token keyword">int</span> t1 <span class="token operator">=</span> M<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">int</span> t2 <span class="token operator">=</span> M<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token function">add_edgeDirectionWeight</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>G<span class="token punctuation">,</span>x<span class="token punctuation">,</span>y1<span class="token punctuation">,</span>t1<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token function">add_edgeDirectionWeight</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>G<span class="token punctuation">,</span>x<span class="token punctuation">,</span>y2<span class="token punctuation">,</span>t2<span class="token punctuation">)</span><span class="token punctuation">;</span>
                G<span class="token punctuation">.</span>m <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>            
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    List cost<span class="token punctuation">;</span> <span class="token function">makeNullList</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>cost<span class="token punctuation">)</span><span class="token punctuation">;</span>
    List parrent<span class="token punctuation">;</span> <span class="token function">makeNullList</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>parrent<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">dijkstra</span><span class="token punctuation">(</span>G<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span>M<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>parrent<span class="token punctuation">,</span><span class="token operator">&amp;</span>cost<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span>cost<span class="token punctuation">.</span>Data<span class="token punctuation">[</span>G<span class="token punctuation">.</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function m(b,h){const p=o("ExternalLinkIcon");return e(),c("div",null,[i,n("blockquote",null,[n("p",null,[k,n("a",r,[d,l(p)])])]),v])}var y=t(u,[["render",m],["__file","3.html.vue"]]);export{y as default};