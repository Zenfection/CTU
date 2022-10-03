import{_ as i,o as n,c as e,e as s}from"./app.84db144e.js";const d={},l=s(`<h1 id="bai-thuc-hanh-5" tabindex="-1"><a class="header-anchor" href="#bai-thuc-hanh-5" aria-hidden="true">#</a> B\xE0i th\u1EF1c h\xE0nh 5</h1><h2 id="giai-thuat-prim" tabindex="-1"><a class="header-anchor" href="#giai-thuat-prim" aria-hidden="true">#</a> Gi\u1EA3i thu\u1EADt <code>Prim</code></h2><div class="custom-container warning"><p class="custom-container-title">\u26A0\uFE0F L\u01AFU \xDD</p><p>S\u1EED d\u1EE5ng cho <code>danh s\xE1ch \u0111\u1EC9nh \u0111\u1EC9nh</code></p></div><p>:::</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>int prim(Graph G, Graph *T){
    int cost[MAX], parrent[MAX];
    bool mark[MAX];

    init_Graph(T, G.n);
    int sumW = 0;
    for(int i = 1; i &lt;= G.n; i++){
        cost[i] = 999;
        mark[i] = false;
        if(G.A[1][i]){
            cost[i] = G.A[1][i];
            parrent[i] = 1;
        }
    }

    cost[1] = 0; // c\xF3 th\u1EC3 thay \u0111\u1ED5i
    mark[1] = true;

    for(int i = 1; i &lt; G.n; i++){
        int min_dist = 999;
        int min_u;
        for(int j = 1; j &lt;= G.n; j++){
            if(!mark[j]){
                if(min_dist &gt; cost[j]){
                    min_dist = cost[j];
                    min_u = j;
                }
            }
        }
        int u = min_u; //\u0111\xE1nh d\u1EA5u pi[u] nh\u1ECF nh\u1EA5t
        mark[min_u] = true;
        add_edgeDirection(T, parrent[min_u], min_u, min_dist);
        sumW += min_dist;

        // c\u1EADp nh\u1EADt l\u1EA1i pi v\xE0 p c\u1EE7a \u0111\u1EC9nh k\u1EC1 v\u1EDBi u
        for(int v = 1; v &lt;= G.n; v++){
            if(!mark[v]){
                if(G.A[u][v])
                    if(cost[v] &gt; G.A[u][v]){
                        cost[v] = G.A[u][v];
                        parrent[v] = u;
                    }
            }
        }
    }
    return sumW;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="giai-thuat-kruskal" tabindex="-1"><a class="header-anchor" href="#giai-thuat-kruskal" aria-hidden="true">#</a> Gi\u1EA3i thu\u1EADt <code>Kruskal</code></h2><div class="custom-container warning"><p class="custom-container-title">\u26A0\uFE0F L\u01AFU \xDD</p><p>S\u1EED d\u1EE5ng cho <code>danh s\xE1ch cung</code></p></div><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void swap(Edge *a, Edge *b){
    Edge temp = *a;
    *a = *b;
    *b = temp;
}
void bubbleSort(Graph *G){
    int n = G-&gt;m;
    for(int i = 0; i &lt; n - 1; i++){
        for(int j = n - 1; j &gt;= i + 1; j--){
            if(G-&gt;edges[j].w &lt; G-&gt;edges[j-1].w)
                swap(&amp;G-&gt;edges[j], &amp;G-&gt;edges[j-1]);
        }
    }
}

int kruskal(Graph G, Graph *T){
    int parent[MAX];
    int sumW = 0;
    
    initGraph(T, G.n);
    bubbleSort(&amp;G);

    for(int i = 1; i &lt;= G.n; i++){
        parent[i] = i;
    }
    
    for(int e = 0; e &lt; G.m; e++){
        int u = G.edges[e].u;
        int v = G.edges[e].v;
        int w = G.edges[e].w;

        int rootU = parrent[u];
        int rootV = parrent[v];
        if(rootU != rootV){
            addEdge(T, u,v,w);
            parent[rootV] = rootU;
            sumW += w;
        }
    }
    return sumW;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),v=[l];function a(r,c){return n(),e("div",null,v)}const t=i(d,[["render",a],["__file","5.html.vue"]]);export{t as default};
