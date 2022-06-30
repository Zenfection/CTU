import{_ as n,o as s,c as a,e as t}from"./app.df04e054.js";const p={},o=t(`<h1 id="bai-thuc-hanh-2" tabindex="-1"><a class="header-anchor" href="#bai-thuc-hanh-2" aria-hidden="true">#</a> B\xE0i th\u1EF1c h\xE0nh 2</h1><p>Trong b\xE0i n\xE0y b\u1EA1n c\u1EA7n n\u1EAFm b\u1EAFt c\xE1c m\u1EE5c nh\u01B0 sau :</p><blockquote><ul><li><p>Duy\u1EC7t \u0111\u1ED3 th\u1ECB theo chi\u1EC1u <code>s\xE2u</code> v\xE0 <code>r\u1ED9ng</code></p></li><li><p>Ki\u1EC3m tra t\xEDnh li\xEAn th\xF4ng v\xE0 li\xEAn th\xF4ng m\u1EA1nh c\u1EE7a \u0111\u1ED3 th\u1ECB</p></li><li><p>Ki\u1EC3m tra \u0111\u1ED3 th\u1ECB c\xF3 chu tr\xECnh kh\xF4ng</p></li></ul></blockquote><div class="custom-container warning"><p class="custom-container-title">\u26A0\uFE0F L\u01AFU \xDD</p><p>T\u1EA5t c\u1EA3 c\xE1c \u0111\u1EC9nh trong \u0111\u1ED3 th\u1ECB b\u1EAFt \u0111\u1EA7u t\u1EEB <code>1</code> thay v\xEC <code>0</code>, n\xEAn h\xE3y \u0111\u1EC3 \xFD r\xF5 kh\xF4ng th\xEC sai !!!</p></div><h2 id="duyet-\u0111o-thi-theo-chieu-sau" tabindex="-1"><a class="header-anchor" href="#duyet-\u0111o-thi-theo-chieu-sau" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/08-14-49-35-icons8-depth.png" width="40"> Duy\u1EC7t \u0111\u1ED3 th\u1ECB theo chi\u1EC1u s\xE2u</h2><h3 id="phuong-phap-ngan-xep" tabindex="-1"><a class="header-anchor" href="#phuong-phap-ngan-xep" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/08-14-50-21-icons8-pancake.png" width="30"> Ph\u01B0\u01A1ng ph\xE1p ng\u0103n x\u1EBFp</h3><blockquote><p>Tr\u1EA3 v\u1EC1 danh s\xE1ch duy\u1EC7t \u0111\u1ED3 th\u1ECB theo chi\u1EC1u s\xE2u d\xF9ng <code>ng\u0103n x\u1EBFp</code></p></blockquote><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">subDFS</span><span class="token punctuation">(</span>Graph G<span class="token punctuation">,</span> Stack stack<span class="token punctuation">,</span> List <span class="token operator">*</span>L<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">emptyStack</span><span class="token punctuation">(</span>stack<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> u <span class="token operator">=</span> <span class="token function">pullStack</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>stack<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">memberList</span><span class="token punctuation">(</span>u<span class="token punctuation">,</span> <span class="token operator">*</span>L<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span>
        <span class="token function">insertList</span><span class="token punctuation">(</span>u<span class="token punctuation">,</span> L<span class="token punctuation">)</span><span class="token punctuation">;</span>
        List temp <span class="token operator">=</span> <span class="token function">neighbors</span><span class="token punctuation">(</span>G<span class="token punctuation">,</span>u<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> temp<span class="token punctuation">.</span>Size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">int</span> v <span class="token operator">=</span> temp<span class="token punctuation">.</span>Data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">memberList</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> <span class="token operator">*</span>L<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">pushStack</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>stack<span class="token punctuation">,</span> v<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
List <span class="token function">DFS</span><span class="token punctuation">(</span>Graph G<span class="token punctuation">,</span> <span class="token keyword">int</span> x<span class="token punctuation">)</span><span class="token punctuation">{</span>
    List L<span class="token punctuation">;</span>
    <span class="token function">makeNullList</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span>
    List array <span class="token operator">=</span> <span class="token function">arrayGraph</span><span class="token punctuation">(</span>G<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>L<span class="token punctuation">.</span>Size <span class="token operator">!=</span> G<span class="token punctuation">.</span>n<span class="token punctuation">)</span><span class="token punctuation">{</span>
        Stack stack<span class="token punctuation">;</span>
        <span class="token function">makeNullStack</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>stack<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">pushStack</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>stack<span class="token punctuation">,</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">subDFS</span><span class="token punctuation">(</span>G<span class="token punctuation">,</span>stack<span class="token punctuation">,</span><span class="token operator">&amp;</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span>
        x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> array<span class="token punctuation">.</span>Size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">memberList</span><span class="token punctuation">(</span>array<span class="token punctuation">.</span>Data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>L<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                x <span class="token operator">=</span> array<span class="token punctuation">.</span>Data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> L<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">\u26A0\uFE0F CH\xDA \xDD</p><p>H\xE0m tr\u1EA3 v\u1EC1 \u0111\u1EA7y \u0111\u1EE7 c\xE1c \u0111\u1EC9nh k\u1EC3 c\u1EA3 khi \u0111\u1ED3 th\u1ECB <code>kh\xF4ng li\xEAn th\xF4ng</code>, n\xEAn n\u1EBFu b\u1EA1n c\xF3 nhu c\u1EA7u kh\xE1c h\xE3y s\u1EED t\u1EEB d\xF2ng <code>27</code> t\u1EDBi <code>32</code></p></div><h3 id="su-dung-\u0111e-quy" tabindex="-1"><a class="header-anchor" href="#su-dung-\u0111e-quy" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/08-14-51-03-icons8-reset.png" width="30"> S\u1EED d\u1EE5ng \u0111\u1EC7 quy</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">DFS_Re</span><span class="token punctuation">(</span>Graph G<span class="token punctuation">,</span> <span class="token keyword">int</span> v<span class="token punctuation">,</span> bool visited<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    visited<span class="token punctuation">[</span>v<span class="token punctuation">]</span> <span class="token operator">=</span> true<span class="token punctuation">;</span>

    List temp <span class="token operator">=</span> <span class="token function">neighbors</span><span class="token punctuation">(</span>G<span class="token punctuation">,</span> v<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> temp<span class="token punctuation">.</span>Size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> u <span class="token operator">=</span> temp<span class="token punctuation">.</span>Data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>visited<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">DFS_Re</span><span class="token punctuation">(</span>G<span class="token punctuation">,</span> u<span class="token punctuation">,</span> visited<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">\u26A0\uFE0F L\u01AFU \xDD</p><p>S\u1EEDa h\xE0m n\xE0y theo nhu c\u1EA7u c\u1EE7a b\u1EA1n</p></div><h2 id="duyet-\u0111o-thi-theo-chieu-rong" tabindex="-1"><a class="header-anchor" href="#duyet-\u0111o-thi-theo-chieu-rong" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/08-14-49-40-icons8-surface.png" width="35"> Duy\u1EC7t \u0111\u1ED3 th\u1ECB theo chi\u1EC1u r\u1ED9ng</h2><blockquote><p>S\u1EED d\u1EE5ng danh s\xE1ch (t\u01B0\u01A1ng \u0111\u01B0\u01A1ng h\xE0ng \u0111\u1EE3i)</p></blockquote><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">subBFS</span><span class="token punctuation">(</span>Graph G<span class="token punctuation">,</span> List queue<span class="token punctuation">,</span> List <span class="token operator">*</span>L<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">emptyList</span><span class="token punctuation">(</span>queue<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> u <span class="token operator">=</span> <span class="token function">elementAt</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>queue<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">memberList</span><span class="token punctuation">(</span>u<span class="token punctuation">,</span> <span class="token operator">*</span>L<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span>
        <span class="token function">insertList</span><span class="token punctuation">(</span>u<span class="token punctuation">,</span> L<span class="token punctuation">)</span><span class="token punctuation">;</span>
        List temp <span class="token operator">=</span> <span class="token function">neighbors</span><span class="token punctuation">(</span>G<span class="token punctuation">,</span>u<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> temp<span class="token punctuation">.</span>Size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">int</span> v <span class="token operator">=</span> temp<span class="token punctuation">.</span>Data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">memberList</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> <span class="token operator">*</span>L<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">memberList</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> queue<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">insertList</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> <span class="token operator">&amp;</span>queue<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
List <span class="token function">BFS</span><span class="token punctuation">(</span>Graph G<span class="token punctuation">,</span> <span class="token keyword">int</span> x<span class="token punctuation">)</span><span class="token punctuation">{</span>    
    List L<span class="token punctuation">;</span>
    <span class="token function">makeNullList</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span>
    List array <span class="token operator">=</span> <span class="token function">arrayGraph</span><span class="token punctuation">(</span>G<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>L<span class="token punctuation">.</span>Size <span class="token operator">!=</span> G<span class="token punctuation">.</span>n<span class="token punctuation">)</span><span class="token punctuation">{</span>
        List queue<span class="token punctuation">;</span>
        <span class="token function">makeNullList</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>queue<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">insertList</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span><span class="token operator">&amp;</span>queue<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">subBFS</span><span class="token punctuation">(</span>G<span class="token punctuation">,</span>queue<span class="token punctuation">,</span><span class="token operator">&amp;</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span>
        x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> array<span class="token punctuation">.</span>Size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">memberList</span><span class="token punctuation">(</span>array<span class="token punctuation">.</span>Data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> L<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                x <span class="token operator">=</span> array<span class="token punctuation">.</span>Data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> L<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">\u26A0\uFE0F CH\xDA \xDD</p><p>H\xE0m tr\u1EA3 v\u1EC1 \u0111\u1EA7y \u0111\u1EE7 c\xE1c \u0111\u1EC9nh k\u1EC3 c\u1EA3 khi \u0111\u1ED3 th\u1ECB <code>kh\xF4ng li\xEAn th\xF4ng</code>, n\xEAn n\u1EBFu b\u1EA1n c\xF3 nhu c\u1EA7u kh\xE1c h\xE3y s\u1EED t\u1EEB d\xF2ng <code>26</code> t\u1EDBi <code>31</code></p></div><h2 id="tinh-lien-thong-cua-\u0111o-thi" tabindex="-1"><a class="header-anchor" href="#tinh-lien-thong-cua-\u0111o-thi" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/08-15-42-29-icons8-connect.png" width="35">T\xEDnh Li\xEAn th\xF4ng c\u1EE7a \u0111\u1ED3 th\u1ECB</h2><p>L\xE0 \u0111\u1ED3 th\u1ECB khi m\u1ED9t \u0111\u1EC9nh b\u1EA5t k\u1EF3 c\xF3 th\u1EC3 \u0111i t\u1EDBi t\u1EA5t c\u1EA3 c\xE1c \u0111\u1EC9nh c\xF2n l\u1EA1i trong \u0111\u1ED3 th\u1ECB</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">//ki\u1EC3m tra \u0111\u1ED3 th\u1ECB li\xEAn th\xF4ng</span>
<span class="token keyword">int</span> <span class="token function">connectedGraph</span><span class="token punctuation">(</span>Graph G<span class="token punctuation">)</span><span class="token punctuation">{</span>
    bool visited<span class="token punctuation">[</span>G<span class="token punctuation">.</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// b\u1EAFt \u0111\u1EA7u t\u1EEB \u0111\u1EC9nh 1 thay v\xEC 0</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> G<span class="token punctuation">.</span>n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// kh\u1EDFi t\u1EA1o ban \u0111\u1EA7u l\xE0 false</span>
        visited<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> false<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">DFS_Re</span><span class="token punctuation">(</span>G<span class="token punctuation">,</span>x<span class="token punctuation">,</span>visited<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> G<span class="token punctuation">.</span>n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>visited<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> false<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> true<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//ki\u1EC3m tra \u0111\u1ED3 th\u1ECB li\xEAn th\xF4ng m\u1EA1nh</span>
bool <span class="token function">connectedStrongGraph</span><span class="token punctuation">(</span>Graph G<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> G<span class="token punctuation">.</span>n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">connectedGraph</span><span class="token punctuation">(</span>G<span class="token punctuation">,</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> false<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> true<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u0111\u1EBFm s\u1ED1 \u0111\u1ED3 th\u1ECB li\xEAn th\xF4ng m\u1EA1nh</span>
<span class="token keyword">int</span> <span class="token function">countSubConnectedGraph</span><span class="token punctuation">(</span>Graph G<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">connectedStrongGraph</span><span class="token punctuation">(</span>G<span class="token punctuation">)</span><span class="token punctuation">)</span> 
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    
    <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> G<span class="token punctuation">.</span>n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">connectedGraph</span><span class="token punctuation">(</span>G<span class="token punctuation">,</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>
            count<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> count<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),c=[o];function e(i,u){return s(),a("div",null,c)}var k=n(p,[["render",e],["__file","2.html.vue"]]);export{k as default};
