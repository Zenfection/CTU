import{_ as i,o as n,c as e,e as s}from"./app.f9a431a9.js";const d={},a=s(`<h1 id="bai-thuc-hanh-2" tabindex="-1"><a class="header-anchor" href="#bai-thuc-hanh-2" aria-hidden="true">#</a> B\xE0i th\u1EF1c h\xE0nh 2</h1><p>Trong b\xE0i n\xE0y b\u1EA1n c\u1EA7n n\u1EAFm b\u1EAFt c\xE1c m\u1EE5c nh\u01B0 sau :</p><blockquote><ul><li><p>Duy\u1EC7t \u0111\u1ED3 th\u1ECB theo chi\u1EC1u <code>s\xE2u</code> v\xE0 <code>r\u1ED9ng</code></p></li><li><p>Ki\u1EC3m tra t\xEDnh li\xEAn th\xF4ng v\xE0 li\xEAn th\xF4ng m\u1EA1nh c\u1EE7a \u0111\u1ED3 th\u1ECB</p></li><li><p>Ki\u1EC3m tra \u0111\u1ED3 th\u1ECB c\xF3 chu tr\xECnh kh\xF4ng</p></li></ul></blockquote><div class="custom-container warning"><p class="custom-container-title">\u26A0\uFE0F L\u01AFU \xDD</p><p>T\u1EA5t c\u1EA3 c\xE1c \u0111\u1EC9nh trong \u0111\u1ED3 th\u1ECB b\u1EAFt \u0111\u1EA7u t\u1EEB <code>1</code> thay v\xEC <code>0</code>, n\xEAn h\xE3y \u0111\u1EC3 \xFD r\xF5 kh\xF4ng th\xEC sai !!!</p></div><h2 id="duyet-\u0111o-thi-theo-chieu-sau" tabindex="-1"><a class="header-anchor" href="#duyet-\u0111o-thi-theo-chieu-sau" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/08-14-49-35-icons8-depth.png" width="40"> Duy\u1EC7t \u0111\u1ED3 th\u1ECB theo chi\u1EC1u s\xE2u</h2><h3 id="phuong-phap-ngan-xep" tabindex="-1"><a class="header-anchor" href="#phuong-phap-ngan-xep" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/08-14-50-21-icons8-pancake.png" width="30"> Ph\u01B0\u01A1ng ph\xE1p ng\u0103n x\u1EBFp</h3><blockquote><p>Tr\u1EA3 v\u1EC1 danh s\xE1ch duy\u1EC7t \u0111\u1ED3 th\u1ECB theo chi\u1EC1u s\xE2u d\xF9ng <code>ng\u0103n x\u1EBFp</code></p></blockquote><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void subDFS(Graph G, Stack stack, List *L){
    while (!emptyStack(stack)){
        int u = pullStack(&amp;stack);
        if(memberList(u, *L)) continue;
        insertList(u, L);
        List temp = neighbors(G,u);
        for (int i = 0; i &lt; temp.Size; i++){
            int v = temp.Data[i];
            if(!memberList(v, *L)){
                pushStack(&amp;stack, v);
            }
        }
    }
}
List DFS(Graph G, int x){
    List L;
    makeNullList(&amp;L);
    List array = arrayGraph(G);

    while (L.Size != G.n){
        Stack stack;
        makeNullStack(&amp;stack);
        pushStack(&amp;stack,x);

        subDFS(G,stack,&amp;L);
        x = 0;
        for (int i = 0; i &lt; array.Size; i++){
            if(!memberList(array.Data[i],L)){
                x = array.Data[i];
                break;
            }
        }
    }
    return L;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">\u26A0\uFE0F CH\xDA \xDD</p><p>H\xE0m tr\u1EA3 v\u1EC1 \u0111\u1EA7y \u0111\u1EE7 c\xE1c \u0111\u1EC9nh k\u1EC3 c\u1EA3 khi \u0111\u1ED3 th\u1ECB <code>kh\xF4ng li\xEAn th\xF4ng</code>, n\xEAn n\u1EBFu b\u1EA1n c\xF3 nhu c\u1EA7u kh\xE1c h\xE3y s\u1EED t\u1EEB d\xF2ng <code>27</code> t\u1EDBi <code>32</code></p></div><h3 id="su-dung-\u0111e-quy" tabindex="-1"><a class="header-anchor" href="#su-dung-\u0111e-quy" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/08-14-51-03-icons8-reset.png" width="30"> S\u1EED d\u1EE5ng \u0111\u1EC7 quy</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void DFS_Re(Graph G, int v, bool visited[]){
    visited[v] = true;

    List temp = neighbors(G, v);
    for (int i = 0; i &lt; temp.Size; i++){
        int u = temp.Data[i];
        if(!visited[u]){
            DFS_Re(G, u, visited);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">\u26A0\uFE0F L\u01AFU \xDD</p><p>S\u1EEDa h\xE0m n\xE0y theo nhu c\u1EA7u c\u1EE7a b\u1EA1n</p></div><h2 id="duyet-\u0111o-thi-theo-chieu-rong" tabindex="-1"><a class="header-anchor" href="#duyet-\u0111o-thi-theo-chieu-rong" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/08-14-49-40-icons8-surface.png" width="35"> Duy\u1EC7t \u0111\u1ED3 th\u1ECB theo chi\u1EC1u r\u1ED9ng</h2><blockquote><p>S\u1EED d\u1EE5ng danh s\xE1ch (t\u01B0\u01A1ng \u0111\u01B0\u01A1ng h\xE0ng \u0111\u1EE3i)</p></blockquote><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void subBFS(Graph G, List queue, List *L){
    while (!emptyList(queue)){
        int u = elementAt(&amp;queue);
        if(memberList(u, *L)) continue;
        insertList(u, L);
        List temp = neighbors(G,u);
        for(int i = 0; i &lt; temp.Size; i++){
            int v = temp.Data[i];
            if(!memberList(v, *L) &amp;&amp; !memberList(v, queue)){
                insertList(v, &amp;queue);
            }
        }
    }
}
List BFS(Graph G, int x){    
    List L;
    makeNullList(&amp;L);
    List array = arrayGraph(G);
    while (L.Size != G.n){
        List queue;
        makeNullList(&amp;queue);
        insertList(x,&amp;queue);

        subBFS(G,queue,&amp;L);
        x = 0;
        for(int i = 0; i &lt; array.Size; i++){
            if(!memberList(array.Data[i], L)){
                x = array.Data[i];
                break;
            }
        }
    }
    return L;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">\u26A0\uFE0F CH\xDA \xDD</p><p>H\xE0m tr\u1EA3 v\u1EC1 \u0111\u1EA7y \u0111\u1EE7 c\xE1c \u0111\u1EC9nh k\u1EC3 c\u1EA3 khi \u0111\u1ED3 th\u1ECB <code>kh\xF4ng li\xEAn th\xF4ng</code>, n\xEAn n\u1EBFu b\u1EA1n c\xF3 nhu c\u1EA7u kh\xE1c h\xE3y s\u1EED t\u1EEB d\xF2ng <code>26</code> t\u1EDBi <code>31</code></p></div><h2 id="tinh-lien-thong-cua-\u0111o-thi" tabindex="-1"><a class="header-anchor" href="#tinh-lien-thong-cua-\u0111o-thi" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/10/08-15-42-29-icons8-connect.png" width="35">T\xEDnh Li\xEAn th\xF4ng c\u1EE7a \u0111\u1ED3 th\u1ECB</h2><p>L\xE0 \u0111\u1ED3 th\u1ECB khi m\u1ED9t \u0111\u1EC9nh b\u1EA5t k\u1EF3 c\xF3 th\u1EC3 \u0111i t\u1EDBi t\u1EA5t c\u1EA3 c\xE1c \u0111\u1EC9nh c\xF2n l\u1EA1i trong \u0111\u1ED3 th\u1ECB</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>//ki\u1EC3m tra \u0111\u1ED3 th\u1ECB li\xEAn th\xF4ng
int connectedGraph(Graph G){
    bool visited[G.n + 1]; // b\u1EAFt \u0111\u1EA7u t\u1EEB \u0111\u1EC9nh 1 thay v\xEC 0
    for (int i = 1; i &lt;= G.n; i++){ // kh\u1EDFi t\u1EA1o ban \u0111\u1EA7u l\xE0 false
        visited[i] = false;
    }
    DFS_Re(G,x,visited);
    for(int i = 1; i &lt;= G.n; i++){
        if(!visited[i])
            return false;
    }
    return true;
}

//ki\u1EC3m tra \u0111\u1ED3 th\u1ECB li\xEAn th\xF4ng m\u1EA1nh
bool connectedStrongGraph(Graph G){
    for (int i = 1; i &lt;= G.n; i++){
        if(!connectedGraph(G,i))
            return false;
    }
    return true;
}

//\u0111\u1EBFm s\u1ED1 \u0111\u1ED3 th\u1ECB li\xEAn th\xF4ng m\u1EA1nh
int countSubConnectedGraph(Graph G){
    if(connectedStrongGraph(G)) 
        return 1;
    
    int count = 0;
    for(int i = 1; i &lt;= G.n; i++){
        if (!connectedGraph(G,i))
            count++;
    }
    return count;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),l=[a];function c(t,r){return n(),e("div",null,l)}var u=i(d,[["render",c],["__file","2.html.vue"]]);export{u as default};
