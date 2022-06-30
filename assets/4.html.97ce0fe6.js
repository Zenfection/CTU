import{_ as n,o as s,c as a,e as p}from"./app.cafd9fae.js";const t={},e=p(`<h1 id="bai-thuc-hanh-4" tabindex="-1"><a class="header-anchor" href="#bai-thuc-hanh-4" aria-hidden="true">#</a> B\xE0i th\u1EF1c h\xE0nh 4</h1><h2 id="xep-hang-\u0111o-thi" tabindex="-1"><a class="header-anchor" href="#xep-hang-\u0111o-thi" aria-hidden="true">#</a> X\u1EBFp h\u1EA1ng \u0111\u1ED3 th\u1ECB</h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>List <span class="token function">ranking</span><span class="token punctuation">(</span>Graph G<span class="token punctuation">)</span><span class="token punctuation">{</span>
    List d<span class="token punctuation">;</span>
    List rank<span class="token punctuation">;</span> 
    <span class="token function">makeNullList</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>rank<span class="token punctuation">)</span><span class="token punctuation">;</span>
    rank<span class="token punctuation">.</span>Size <span class="token operator">=</span> d<span class="token punctuation">.</span>Size <span class="token operator">=</span> G<span class="token punctuation">.</span>n<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> G<span class="token punctuation">.</span>n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// ban \u0111\u1EA7u m\u1ECDi rank l\xE0 0 v\xE0 t\xEDnh b\u1EADc ph\u1EE5 thu\u1ED9c c\u1EE7a c\xE1c \u0111\u1EC9nh</span>
        <span class="token keyword">int</span> depend <span class="token operator">=</span> <span class="token function">degreeDepend</span><span class="token punctuation">(</span>G<span class="token punctuation">,</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        d<span class="token punctuation">.</span>Data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> depend<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    List L1<span class="token punctuation">;</span>
    <span class="token function">makeNullList</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>L1<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> G<span class="token punctuation">.</span>n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span>Data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">insertList</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token operator">&amp;</span>L1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">int</span> k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>L1<span class="token punctuation">.</span>Size <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        List L2<span class="token punctuation">;</span>
        <span class="token function">makeNullList</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>L2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> L1<span class="token punctuation">.</span>Size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">int</span> u <span class="token operator">=</span> L1<span class="token punctuation">.</span>Data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            rank<span class="token punctuation">.</span>Data<span class="token punctuation">[</span>u<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> k<span class="token punctuation">;</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> v <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> v <span class="token operator">&lt;=</span> G<span class="token punctuation">.</span>n<span class="token punctuation">;</span> v<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>G<span class="token punctuation">.</span>A<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">[</span>v<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    d<span class="token punctuation">.</span>Data<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
                    <span class="token function">insertList</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> <span class="token operator">&amp;</span>L2<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token function">copyList</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>L2<span class="token punctuation">,</span> <span class="token operator">&amp;</span>L1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        k<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> rank<span class="token punctuation">;</span>
<span class="token punctuation">}</span>	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="phan-cong-cong-viec" tabindex="-1"><a class="header-anchor" href="#phan-cong-cong-viec" aria-hidden="true">#</a> Ph\xE2n c\xF4ng c\xF4ng vi\u1EC7c</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5),o=[e];function c(i,u){return s(),a("div",null,o)}var k=n(t,[["render",c],["__file","4.html.vue"]]);export{k as default};