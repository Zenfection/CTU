import{_ as i,o as n,c as e,e as a}from"./app.bdebb89d.js";const s={},d=a(`<h1 id="bai-thuc-hanh-4" tabindex="-1"><a class="header-anchor" href="#bai-thuc-hanh-4" aria-hidden="true">#</a> B\xE0i th\u1EF1c h\xE0nh 4</h1><h2 id="xep-hang-\u0111o-thi" tabindex="-1"><a class="header-anchor" href="#xep-hang-\u0111o-thi" aria-hidden="true">#</a> X\u1EBFp h\u1EA1ng \u0111\u1ED3 th\u1ECB</h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>List ranking(Graph G){
    List d;
    List rank; 
    makeNullList(&amp;rank);
    rank.Size = d.Size = G.n;
    for (int i = 1; i &lt;= G.n; i++){ // ban \u0111\u1EA7u m\u1ECDi rank l\xE0 0 v\xE0 t\xEDnh b\u1EADc ph\u1EE5 thu\u1ED9c c\u1EE7a c\xE1c \u0111\u1EC9nh
        int depend = degreeDepend(G,i);
        d.Data[i] = depend;
    }


    List L1;
    makeNullList(&amp;L1);

    for(int i = 1; i &lt;= G.n; i++){
        if(d.Data[i] == 0){
            insertList(i, &amp;L1);
        }
    }

    int k = 0;
    while (L1.Size &gt; 0){
        List L2;
        makeNullList(&amp;L2);
        for(int i = 0; i &lt; L1.Size; i++){
            int u = L1.Data[i];
            rank.Data[u-1] = k;
            for(int v = 1; v &lt;= G.n; v++){
                if(G.A[u][v] != 0){
                    d.Data[v]--;
                    insertList(v, &amp;L2);
                }
            }
        }
        copyList(&amp;L2, &amp;L1);
        k++;
    }
    return rank;
}	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="phan-cong-cong-viec" tabindex="-1"><a class="header-anchor" href="#phan-cong-cong-viec" aria-hidden="true">#</a> Ph\xE2n c\xF4ng c\xF4ng vi\u1EC7c</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5),l=[d];function v(r,c){return n(),e("div",null,l)}const u=i(s,[["render",v],["__file","4.html.vue"]]);export{u as default};
