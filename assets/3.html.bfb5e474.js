import{_ as a,r as d,o as l,c as t,b as n,a as c,e as i,d as e}from"./app.bdebb89d.js";const r={},v=i(`<h1 id="bai-thuc-hanh-3" tabindex="-1"><a class="header-anchor" href="#bai-thuc-hanh-3" aria-hidden="true">#</a> B\xE0i th\u1EF1c h\xE0nh 3</h1><p>Trong b\xE0i n\xE0y b\u1EA1n c\u1EA7n n\u1EAFm b\u1EAFt c\xE1c m\u1EE5c nh\u01B0 sau :</p><blockquote><ul><li><p>T\xECm \u0111\u01B0\u1EDDng \u0111i ng\u1EAFn nh\u1EA5t b\u1EB1ng <code>Dijkstra</code> v\xE0 <code>bellman-Ford</code></p></li><li><p>Ki\u1EC3m tra chu tr\xECnh \xE2m v\xE0 \u1EE9ng d\u1EE5ng c\u1EE7a \u0111\u01B0\u1EDDng \u0111i ng\u1EAFn nh\u1EA5t</p></li></ul></blockquote><div class="custom-container tip"><p class="custom-container-title">\u{1F4A1} TH\u01AF VI\u1EC6N</p><p>S\u1EED d\u1EE5ng c\xE1c th\u01B0 vi\u1EC7n sau:</p><div class="language-c ext-c"><pre class="language-c"><code>#include &lt;stdio.h&gt;    // th\u01B0 vi\u1EC7n c\u01A1 b\u1EA3n c\u1EE7a C
#include &lt;stdbool.h&gt;  // h\u1ED7 tr\u1EE3 true/false cho C
#include &quot;list.h&quot;     // th\u01B0 vi\u1EC7n c\xE1 nh\xE2n h\u1ED7 tr\u1EE3 danh s\xE1ch
</code></pre></div></div>`,4),u=e("\u21E3 Download th\u01B0 vi\u1EC7n "),o={href:"https://github.com/Zenfection/zenctu/blob/main/docs/cosonganh/CT175-Ly_thuyet_do_thi/Thuchanh/source/list.h",target:"_blank",rel:"noopener noreferrer"},m=e("list.h"),b=i(`<div class="custom-container warning"><p class="custom-container-title">\u26A0\uFE0F L\u01AFU \xDD</p><p>T\u1EA5t c\u1EA3 c\xE1c \u0111\u1EC9nh trong \u0111\u1ED3 th\u1ECB b\u1EAFt \u0111\u1EA7u t\u1EEB <code>1</code> thay v\xEC <code>0</code>, n\xEAn h\xE3y \u0111\u1EC3 \xFD r\xF5 kh\xF4ng th\xEC sai !!!</p></div><h2 id="thuat-toan-dijkstra" tabindex="-1"><a class="header-anchor" href="#thuat-toan-dijkstra" aria-hidden="true">#</a> Thu\u1EADt to\xE1n <code>Dijkstra</code></h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void dijksta(Graph G, int s, List *parrent, List *cost){
    bool mark[50];
    int u,v;
    for (u = 1; u &lt;= G.n; u++){ //* kh\u1EDFi t\u1EA1o m\u1EA3ng
        cost-&gt;Data[u] = 999;
        mark[u] = false;
        parrent-&gt;Data[u] = 0;
    }
    parrent-&gt;Size = cost-&gt;Size = G.n;

    cost-&gt;Data[s] = 0; //* \u0111i t\u1EEB \u0111\u1EC9nh s, v\u1EC1 \u0111\u1EBFn \u0111\u1EC9nh 
    parrent-&gt;Data[s] = -1; //* \u0111\u1EC9nh b\u1EAFt \u0111\u1EA7u kh\xF4ng c\xF3 parent 

    for (int i = 1; i &lt;= G.n; i++){
        int min_pi = 999;
        for (int j = 1; j &lt;= G.n; j++){
            //* T\xECm \u0111\u1EC9nh ch\u01B0a duy\u1EC7t c\xF3 gi\xE1 tr\u1ECB min_pi
            if(!mark[j] &amp;&amp; cost-&gt;Data[j] &lt; min_pi){
                min_pi = cost-&gt;Data[j];
                u = j;
            }
        }
        mark[u] = 1; //* \u0111\xE1nh d\u1EA5u \u0111\xE3 duy\u1EC7t xong \u0111\u1EC9nh \u0111\xF3
        for (v = 1; v &lt;= G.n; v++){
            if(G.A[u][v] != 0 &amp;&amp; !mark[v]){
                int x = cost-&gt;Data[u] + G.A[u][v];
                if(x &lt; cost-&gt;Data[v]){
                    cost-&gt;Data[v] = x;
                    parrent-&gt;Data[v] = u;
                }
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="thuat-toan-bellman-ford" tabindex="-1"><a class="header-anchor" href="#thuat-toan-bellman-ford" aria-hidden="true">#</a> Thu\u1EADt to\xE1n <code>bellman-Ford</code></h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void bellmanFord(Graph G, int s,List *cost, List *parrent){
    for(int i=1; i&lt;= G.n; i++){ // kh\u1EDFi t\u1EA1o ban \u0111\u1EA7u
        cost-&gt;Data[i] = 999;
        parrent-&gt;Data[i] = 0;
    }

    cost-&gt;Size = parrent-&gt;Size = G.n;
    cost-&gt;Data[s] = 0; //c\xF3 th\u1EC3 thay \u0111\u1ED5i
    parrent-&gt;Data[s] = -1; //c\xF3 th\u1EC3 thay \u0111\u1ED5i

    for(int it = 1; it &lt; G.n; it++){
        for(int k = 1; k &lt;= G.m; k++){
            int u = G.edge[k].u;
            int v = G.edge[k].v;
            int w = G.edge[k].w;
            int x = cost-&gt;Data[u] + w;
            if(x &lt; cost-&gt;Data[v]){
                cost-&gt;Data[v] = x;
                parrent-&gt;Data[v] = u;
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="me-cung-so-nang-cao" tabindex="-1"><a class="header-anchor" href="#me-cung-so-nang-cao" aria-hidden="true">#</a> M\xEA cung s\u1ED1 (<em>n\xE2ng cao</em>)</h2><blockquote><p>V\xCD D\u1EE4</p><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/28-15-19-07-Screen Shot 2018-03-05 at 7.23.34 AM.png" width="200"></blockquote><div class="custom-container tip"><p class="custom-container-title">\u{1F4A1} Y\xCAU C\u1EA6U</p><ul><li><p>Xu\u1EA5t ph\xE1t t\u1EEB g\xF3c tr\xE1i b\xEAn tr\xEAn c\u1EE7a ma tr\u1EADn (<em>c\u1EE5 th\u1EC3 l\xE0 <code>0</code></em>)</p></li><li><p>H\xE3y t\xECm \u0111\u01B0\u1EDDng \u0111i ng\u1EAFn nh\u1EA5t t\u1EEB v\u1ECB tr\xED <strong>xu\u1EA5t ph\xE1t</strong> t\u1EDBi g\xF3c ph\u1EA3i b\xEAn d\u01B0\u1EDBi c\u1EE7a ma tr\u1EADn (<em>c\u1EE5 th\u1EC3 l\xE0 <code>5</code></em>)</p></li></ul><p>==&gt; \u0110\u01B0\u1EDDng \u0111i c\xF3 chi ph\xED th\u1EA5p nh\u1EA5t cho v\xED d\u1EE5 n\xE0y l\xE0 <code>24</code></p></div><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>int main(int argc, char const *argv[]){
    Graph G;
    makeNullGraph(&amp;G);
    //freopen(&quot;dt.txt&quot;,&quot;r&quot;,stdin);
    int row,col;
    scanf(&quot;%d%d&quot;, &amp;row,&amp;col);
    G.n = row * col;
    init_Graph(&amp;G, G.n);
    int M[MAX][MAX];
    for (int i = 0; i &lt; row; i++){
        for (int j = 0; j &lt; col; j++){
            scanf(&quot;%d&quot;,&amp;M[i][j]);
        }
    }
    
    for (int i = 0; i &lt; row; i++){
        for (int j = 0; j &lt; col; j++){
            if(j + 1 == col){
                int x = i * col + j + 1;
                int y = (i+1) * col + j + 1;
                int t = M[i+1][j];
                add_edgeDirectionWeight(&amp;G,x,y,t);
                G.m += 1;
            }
            else if(i + 1 == row){
                int x = i * col + j + 1;
                int y = i * col + (j+1) + 1;
                int t = M[i][j+1];
                add_edgeDirectionWeight(&amp;G,x,y,t);
                G.m += 1;
            }
            else{
                int x = i * col + j + 1;
                int y1 = i * col + (j+1) + 1;
                int y2 = (i+1) * col + j + 1;
                int t1 = M[i][j+1];
                int t2 = M[i+1][j];
                add_edgeDirectionWeight(&amp;G,x,y1,t1);
                add_edgeDirectionWeight(&amp;G,x,y2,t2);
                G.m += 2;
            }            
        }
    }
    List cost; makeNullList(&amp;cost);
    List parrent; makeNullList(&amp;parrent);
    dijkstra(G,1,M[0][0],&amp;parrent,&amp;cost);
    
    printf(&quot;%d&quot;,cost.Data[G.n]);
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function h(p,g){const s=d("ExternalLinkIcon");return l(),t("div",null,[v,n("blockquote",null,[n("p",null,[u,n("a",o,[m,c(s)])])]),b])}const _=a(r,[["render",h],["__file","3.html.vue"]]);export{_ as default};
