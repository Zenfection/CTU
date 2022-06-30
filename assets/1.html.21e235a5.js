import{_ as n,o as i,c as e,e as a}from"./app.f9a431a9.js";const s={},d=a(`<h1 id="bai-thuc-hanh-1" tabindex="-1"><a class="header-anchor" href="#bai-thuc-hanh-1" aria-hidden="true">#</a> B\xE0i th\u1EF1c h\xE0nh 1</h1><p>Trong b\xE0i n\xE0y b\u1EA1n c\u1EA7n n\u1EAFm b\u1EAFt c\xE1c m\u1EE5c nh\u01B0 sau :</p><blockquote><ul><li><p>Khai b\xE1o c\u1EA5u tr\xFAc \u0111\u1ED3 th\u1ECB (ch\u1EE7 y\u1EBFu ma tr\u1EADn \u0111\u1EC9nh cung)</p></li><li><p>C\xE1c h\xE0m c\u01A1 b\u1EA3n \u0111\u1ED3 th\u1ECB nh\u01B0 nh\u1EADp cung</p></li><li><p>T\xEDnh b\u1EADc c\u1EE7a 1 \u0111\u1EC9nh trong \u0111\u1ED3 th\u1ECB</p></li><li><p>Danh s\xE1ch \u0111\u1EC9nh k\u1EC1 c\u1EE7a 1 \u0111\u1EC9nh</p></li></ul></blockquote><div class="custom-container warning"><p class="custom-container-title">\u26A0\uFE0F L\u01AFU \xDD</p><p>T\u1EA5t c\u1EA3 c\xE1c \u0111\u1EC9nh trong \u0111\u1ED3 th\u1ECB b\u1EAFt \u0111\u1EA7u t\u1EEB <code>1</code> thay v\xEC <code>0</code>, n\xEAn h\xE3y \u0111\u1EC3 \xFD r\xF5 kh\xF4ng th\xEC sai !!!</p></div><h2 id="cau-truc-\u0111o-thi" tabindex="-1"><a class="header-anchor" href="#cau-truc-\u0111o-thi" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/08-14-44-57-icons8-tree_structure.png" width="35"> C\u1EA5u tr\xFAc \u0111\u1ED3 th\u1ECB</h2><h3 id="danh-sach-\u0111inh-cung" tabindex="-1"><a class="header-anchor" href="#danh-sach-\u0111inh-cung" aria-hidden="true">#</a> Danh s\xE1ch \u0111\u1EC9nh cung</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>typedef struct{
    int A[MAX][MAX];
    int n; //s\u1ED1 \u0111\u1EC9nh
    int m; //s\u1ED1 cung
}Graph;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="danh-sach-cung" tabindex="-1"><a class="header-anchor" href="#danh-sach-cung" aria-hidden="true">#</a> Danh s\xE1ch cung</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>typedef struct {
    int u, v;
    int w;
} Edge;
typedef struct {
    int n, m;
    Edge edges[MAX];
} Graph;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cac-ham-thao-tac-\u0111o-thi" tabindex="-1"><a class="header-anchor" href="#cac-ham-thao-tac-\u0111o-thi" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/08-14-45-33-icons8-service.png" width="35"> C\xE1c h\xE0m thao t\xE1c \u0111\u1ED3 th\u1ECB</h2><h3 id="ham-nhap-co-ban" tabindex="-1"><a class="header-anchor" href="#ham-nhap-co-ban" aria-hidden="true">#</a> H\xE0m nh\u1EADp c\u01A1 b\u1EA3n</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void makeNullGraph(Graph *G){ //kh\u1EDFi t\u1EA1o \u0111\u1ED3 th\u1ECB r\u1ED7ng
    G-&gt;m = 0;
    G-&gt;n = 0;
}

void initGraph(Graph *G, int n){ //kh\u1EDFi t\u1EA1o \u0111\u1ED3 th\u1ECB v\u1EDBi n \u0111\u1EC9nh
    for (int i = 1; i &lt;= n; i++)
        for (int j = 1; j &lt;= n; j++)
            G-&gt;A[i][j] = 0;
}

void addEdge(Graph *G, int x, int y){ //th\xEAm 1 cung v\xE0o \u0111\u1ED3 th\u1ECB
    if(G-&gt;A[x][y] &gt; 0 &amp;&amp; G-&gt;A[x][y] &gt; 0) //tr\u01B0\u1EDDng h\u1EE3p \u0111a cung
        G-&gt;A[x][y] = G-&gt;A[y][x] += 1;
    else
        G-&gt;A[x][y] = G-&gt;A[y][x] = 1;
}

// th\xEAm 1 cung cho \u0111\u1ED3 th\u1ECB c\xF3 h\u01B0\u1EDBng
void addEdgeDirection(Graph *G, int x,int y){ 
    if(G-&gt;A[x][y] &gt; 0){ //tr\u01B0\u1EDDng h\u1EE3p \u0111a cung
        G-&gt;A[x][y] += 1;
    }
    G-&gt;A[x][y] = 1;
}

void printGraph(Graph G){ // in ma tr\u1EADn \u0111\u1ED3 th\u1ECB 
    for (int i = 1; i &lt;= G.n; i++){
        for (int j = 1; j &lt;= G.n; j++){
            printf(&quot;%d &quot;,G.A[i][j]);
        }
        printf(&quot;\\n&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">\u26A0\uFE0F L\u01AFU \xDD</p><p>H\xE0m th\xEAm cung tu\u1EF3 thu\u1ED9c v\xE0o ho\xE0n c\u1EA3nh b\xE0i to\xE1n m\xE0 b\u1EA1n s\u1EEDa l\u1EA1i cho \u0111\xFAng.</p></div><h3 id="ham-thao-tac-co-ban" tabindex="-1"><a class="header-anchor" href="#ham-thao-tac-co-ban" aria-hidden="true">#</a> H\xE0m thao t\xE1c c\u01A1 b\u1EA3n</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>int inDegree(Graph G, int x){ //t\xEDnh b\u1EADc trong c\u1EE7a \u0111\u1ED3 th\u1ECB
    int count = 0;
    for (int i = 1; i &lt;= G.n; i++){
        if(G.A[x][i] == 1)
            count++;
    }
    return count;
}
int outDegree(Graph G, int x){ //t\xEDnh b\u1EADc ngo\xE0i c\u1EE7a \u0111\u1ED3 th\u1ECB
    int count = 0;
    for(int i = 1; i &lt;= G.n; i++){
        if(G.A[i][x] == 1)
            count++;
    }
    return count;
}
int maxDegree(Graph G){
    int max = inDegree(G,1); //s\u1EED d\u1EE5ng b\u1EADc trong hay ngo\xE0i \u0111\u1EC1u \u0111\u01B0\u1EE3c
    for(int i = 2; i &lt;= G.n; i++){
        int x = inDegree(G,i);
        if(max &lt; x)
            max = x;
    }
    return max;
}
bool multiEdge(Graph G){ //ki\u1EC3m tra c\xF3 ch\u1EE9a \u0111a cung kh\xF4ng
    for (int i = 1; i &lt;= G.n; i++){
        for (int j = 0; j &lt;= G.n; j++)
            if(G.A[i][j] &gt; 1) // ho\u1EB7c == 2 \u0111\u1EC1u \u0111\u01B0\u1EE3c
                return true;
    }
    return false;
}
List neighbors(Graph G, int x){ //tr\u1EA3 v\u1EC1 danh s\xE1ch c\xE1c \u0111\u1EC9nh k\u1EC1
    List L; makeNullList(&amp;L);
    for (int i = 1; i &lt;= G.n; i++){
        if(G.A[x][i] == 1)
            insertList(i,&amp;L);
    }
    return L;
}
List arrayGraph(Graph G){ // tr\u1EA3 v\u1EC1 danh s\xE1ch c\xE1c \u0111\u1EC9nh trong \u0111\u1ED3 th\u1ECB
    List L; makeNullList(&amp;L);
    for (int i = 1; i &lt;= G.n; i++)
        insertList(i,&amp;L);
    return L;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),c=[d];function l(r,t){return i(),e("div",null,c)}var u=n(s,[["render",l],["__file","1.html.vue"]]);export{u as default};
