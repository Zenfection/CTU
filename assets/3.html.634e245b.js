import{_ as d,r as c,o as l,c as t,a as i,d as s,e as a,b as e}from"./app.f9a431a9.js";const r={},v=a('<h1 id="bai-3-ngan-xep" tabindex="-1"><a class="header-anchor" href="#bai-3-ngan-xep" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2020/12/16-23-17-18-icons8-pancake.png" width="40"> B\xE0i 3. Ng\u0103n x\u1EBFp</h1><h2 id="mo-hinh" tabindex="-1"><a class="header-anchor" href="#mo-hinh" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/08-10-31-59-icons8_handle_with_care_35px.png"> M\xF4 h\xECnh</h2>',2),u={class:"custom-container tip"},o=i("p",{class:"custom-container-title"},"G\u1ED2M 2 LO\u1EA0I",-1),m={href:"https://www.cs.usfca.edu/~galles/visualization/StackArray.html",target:"_blank",rel:"noopener noreferrer"},b=e("Stack-ArrayList"),p=e(" - "),g=i("em",null,"Ng\u0103n x\u1EBFp c\xE0i \u0111\u1EB7t theo danh s\xE1ch \u0111\u1EB7c",-1),h={href:"https://www.cs.usfca.edu/~galles/visualization/StackLL.html",target:"_blank",rel:"noopener noreferrer"},S=e("Stack-LinkedList"),_=e(" - "),k=i("em",null,"Ng\u0103n x\u1EBFp c\xE0i \u0111\u1EA1t theo danh s\xE1ch li\xEAn k\u1EBFt",-1),N={id:"ly-thuyet",tabindex:"-1"},x=i("a",{class:"header-anchor",href:"#ly-thuyet","aria-hidden":"true"},"#",-1),T=e(),f=i("img",{src:"https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/08-10-30-52-icons8_concept_30px.png"},null,-1),G={href:"https://nguyenvanhieu.vn/ngan-xep-stack/",target:"_blank",rel:"noopener noreferrer"},P=e("L\xFD thuy\u1EBFt"),X=i("h2",{id:"source-code",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#source-code","aria-hidden":"true"},"#"),e(),i("img",{src:"https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/08-10-24-29-icons8_google_code_30px.png"}),e(" Source Code")],-1),M={id:"stach-h",tabindex:"-1"},j=i("a",{class:"header-anchor",href:"#stach-h","aria-hidden":"true"},"#",-1),D=e(),H={href:"https://github.com/Zenfection/zenctu/blob/main/docs/cosonganh/CT177-Cau_truc_du_lieu/Source/Stack/stack.h",target:"_blank",rel:"noopener noreferrer"},I=e("stach.h"),w=a(`<div class="custom-container tip"><p class="custom-container-title">C\u1EA4U TR\xDAC</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>#define Max_length 50
typedef struct{
    int Data[Max_length];
    int Top;
}Stack;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">KH\u1EDEI T\u1EA0O NG\u0102N X\u1EBEP R\u1ED6NG</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void makeNullStack(Stack *S){
    S-&gt;Top = Max_length;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">HI\u1EC2N TH\u1ECA NG\u0102N X\u1EBEP</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void displayStack(Stack S){
    for(int i = S.Top ; i &lt; Max_length ; i++){
        printf(&quot;%d &quot;,S.Data[i]);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">TH\xCAM N PH\u1EA6N T\u1EEC V\xC0O NG\u0102N X\u1EBEP</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void inputStack(int n,Stack *S){
    for(int i = 0; i &lt; n; i++){
        scanf(&quot;%d&quot;,&amp;S-&gt;Data[S-&gt;Top-1]);
        S-&gt;Top--;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">TH\xCAM X T\u1EA0I V\u1ECA TR\xCD P V\xC0O NG\u0102N X\u1EBEP</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void insertStack(int x,int p,Stack *L){
    L-&gt;Data[p] = x;
    L-&gt;Top--;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">XO\xC1 X T\u1EA0I V\u1ECA TR\xCD P TRONG NG\u0102N X\u1EBEP</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void deleleStack_byPos(int p,Stack *S){
    for(int i = p; i &gt; S-&gt;Top; i--){
        S-&gt;Data[i] = S-&gt;Data[i-1];
    }
    S-&gt;Top++;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">XO\xC1 PH\u1EA6N T\u1EEC X TRONG NG\u0102N X\u1EBEP</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void deleteStack_byValue(int x,Stack *S){
    for(int i = S-&gt;Top ; i &lt; Max_length ; i++){
        if(S-&gt;Data[i] == x){
            deleleStack_byPos(i,S);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">TR\u1EA2 V\u1EC0 V\u1ECA TR\xCD \u0110\u1EA6U TI\xCAN C\u1EE6A X TRONG NG\u0102N X\u1EBEP</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>int locateStack(int x,Stack S){
    for(int i = S.Top ; i &lt; Max_length ; i++){
        if(S.Data[i] == x){
            return i;
        }
    }
    return -1;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">KI\u1EC2M TRA X C\xD3 TRONG NG\u0102N X\u1EBEP</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>int memberStack(int x,Stack S){
    if(locateStack(x,S) != -1){
        return 1;
    }
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">T\u1ED0I \u01AFU NG\u0102N X\u1EBEP (\`1 2 1\` -&gt; \`1 2\`)</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void optimizeStack(Stack *S){
    int i = Max_length - 1;
    int j;
    while(i &gt;= S-&gt;Top){
        j = i - 1;
        while (j &gt;= S-&gt;Top){
            if(S-&gt;Data[i] == S-&gt;Data[j]){
                deleleStack_byPos(j,S);
            }
            else{
                j--;
            }
        }
        i--;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">CHUY\u1EC2N NG\u0102N X\u1EBEP QUA NG\u0102N X\u1EBEP M\u1EDAI</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void changeStack(Stack S1,Stack *S){
    int size = Max_length;
    int i = Max_length - S1.Top;
    while (i &gt; 0){
        insertStack(S1.Data[size - 1],S-&gt;Top - 1,S);
        size--;
        i--;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">G\u1ED8P 2 NG\u0102N X\u1EBEP TH\xC0NH M\u1ED8T</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void mergeList(Stack S1,Stack S2,Stack *S){
    changeStack(S1,S);
    changeStack(S2,S);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">L\u1ECCC PH\u1EA8N T\u1EEC CH\u1EB2N HO\u1EB6C L\u1EBA QUA NG\u0102N X\u1EBEP M\u1EDAI</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void filter_evenNumber(Stack S1,Stack *S){
    int j = S-&gt;Top - 1;
    int size = Max_length - S1.Top;
    for(int i = 0 ; i &lt; size ; i++){
        if(S1.Data[j] % 2 == 0){
            insertStack(S1.Data[j],S-&gt;Top - 1,S);
        }
        j--;
    }
}

void filter_oddNumber(Stack S1,Stack *S){
    int j = S-&gt;Top - 1;
    int size = Max_length - S1.Top;
    for (int i = 0; i &lt; size; i++){
        if(S1.Data[j] % 2 != 0){
            insertStack(S1.Data[j],S-&gt;Top - 1,S);
        }
        j--;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">T\xCDNH TRUNG B\xCCNH C\u1ED8NG PH\u1EA6N T\u1EEC TRONG NG\u0102N X\u1EBEP</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>double averageStack(Stack S){
    int size = Max_length - S.Top;
    double sum = 0;
    double result;
    int j = S.Top;
    for (int i = 0; i &lt; size; i++){
        sum += S.Data[j];
        j++;
    }
    result = sum / size;
    return result;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`,14);function L(y,z){const n=c("ExternalLinkIcon");return l(),t("div",null,[v,i("div",u,[o,i("ul",null,[i("li",null,[i("p",null,[i("a",m,[b,s(n)]),p,g])]),i("li",null,[i("p",null,[i("a",h,[S,s(n)]),_,k])])])]),i("h2",N,[x,T,f,i("a",G,[P,s(n)])]),X,i("h3",M,[j,D,i("a",H,[I,s(n)])]),w])}var R=d(r,[["render",L],["__file","3.html.vue"]]);export{R as default};
