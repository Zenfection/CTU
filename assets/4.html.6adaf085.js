import{_ as a,r as d,o as c,c as l,a as e,d as s,e as t,b as i}from"./app.f9a431a9.js";const r={},u=t('<h1 id="bai-4-hang-\u0111oi" tabindex="-1"><a class="header-anchor" href="#bai-4-hang-\u0111oi" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2020/12/16-23-17-32-icons8-joining_queue.png" width="40"> B\xE0i 4. H\xE0ng \u0111\u1EE3i</h1><h2 id="mo-hinh" tabindex="-1"><a class="header-anchor" href="#mo-hinh" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/08-10-31-59-icons8_handle_with_care_35px.png"> M\xF4 h\xECnh</h2>',2),o={class:"custom-container tip"},v=e("p",{class:"custom-container-title"},"G\u1ED2M 2 LO\u1EA0I",-1),m={href:"https://www.cs.usfca.edu/~galles/visualization/QueueArray.html",target:"_blank",rel:"noopener noreferrer"},h=i("Queue-ArrayList"),b=i(" - "),p=e("em",null,"Ng\u0103n x\u1EBFp c\xE0i \u0111\u1EB7t theo danh s\xE1ch \u0111\u1EB7c",-1),g={href:"https://www.cs.usfca.edu/~galles/visualization/QueueLL.html",target:"_blank",rel:"noopener noreferrer"},_=i("Queue-LinkedList"),Q=i(" - "),f=e("em",null,"Ng\u0103n x\u1EBFp c\xE0i \u0111\u1EA1t theo danh s\xE1ch li\xEAn k\u1EBFt",-1),x={id:"ly-thuyet",tabindex:"-1"},N=e("a",{class:"header-anchor",href:"#ly-thuyet","aria-hidden":"true"},"#",-1),R=i(),T=e("img",{src:"https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/08-10-30-52-icons8_concept_30px.png"},null,-1),H={href:"https://nguyenvanhieu.vn/hang-doi-queue/",target:"_blank",rel:"noopener noreferrer"},I=i("L\xFD thuy\u1EBFt"),q=e("h2",{id:"source-code",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#source-code","aria-hidden":"true"},"#"),i(),e("img",{src:"https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/08-10-24-29-icons8_google_code_30px.png"}),i(" Source Code")],-1),y={id:"queue-h",tabindex:"-1"},w=e("a",{class:"header-anchor",href:"#queue-h","aria-hidden":"true"},"#",-1),P=i(),k={href:"https://github.com/Zenfection/zenctu/blob/main/docs/cosonganh/CT177-Cau_truc_du_lieu/Source/Queue/queue.h",target:"_blank",rel:"noopener noreferrer"},V=i("queue.h"),G=t(`<div class="custom-container tip"><p class="custom-container-title">C\u1EA4U TR\xDAC</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>#define Max_length 50
typedef struct{
    int Data[Max_length];
    int Front;
    int Rear;
}Queue;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">KH\u1EDEI T\u1EA0O R\u1ED8NG H\xC0NG \u0110\u1EE2I</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void makeNullQueue(Queue *Q){
    Q-&gt;Front = 0;
    Q-&gt;Rear = 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">HI\u1EC2N TH\u1ECA H\xC0NG \u0110\u1EE2I</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void displayQueue(Queue Q){
    for(int i = Q.Front ; i &lt; Q.Rear ; i++){
        printf(&quot;%d &quot;,Q.Data[i]);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">NH\u1EACP N PH\u1EA6N T\u1EEC V\xC0O H\xC0NG \u0110\u1EE2I</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void inputQueue(int n,Queue *Q){
    for (int i = 0; i &lt; n; i++){
        scanf(&quot;%d&quot;,&amp;Q-&gt;Data[i]);
    }
    Q-&gt;Front = 0;
    Q-&gt;Rear = n;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">CH\xC8N PH\u1EA6N T\u1EEC X V\xC0O V\u1ECA TR\xCD P TRONG H\xC0NG \u0110\u1EE2I</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void insertQueue(int x,int p,Queue *Q){
    if(p &lt; 0 || p &gt; Q-&gt;Rear){
        printf(&quot;Postion Invalid !!!&quot;);
    }
    else if(Q-&gt;Rear == Max_length){
        printf(&quot;Full Queue!!!&quot;);
    }
    else{
        Q-&gt;Data[p] = x;
        Q-&gt;Rear++;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">TR\u1EA2 V V\u1ECA TR\xCD C\u1EE6A PH\u1EA6N T\u1EEC X</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>int locateQueue(int x,Queue *Q){
    for(int i = Q-&gt;Front ; i &lt; Q-&gt;Rear ; i++){
        if(Q-&gt;Data[i] == x){
            return i;
        }
    }
    return -1;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">XO\xC1 PH\u1EA6N T\u1EEC T\u1EA0I V\u1ECA TR\xCD P TRONG H\xC0NG \u0110\u1EE2I</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void deleteQueue_byPos(int p,Queue *Q){
    for(int i = p ; i &lt; Q-&gt;Rear ; i++){
        Q-&gt;Data[i] = Q-&gt;Data[i+1];
    }
    Q-&gt;Rear--;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">XO\xC1 PH\u1EA6N T\u1EEC X TRONG PH\u1EA6N T\u1EEC</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void deleteQueue_byValue(int x,Queue *Q){
    int p = locateQueue(x,Q);
    deleteQueue_byPos(p,Q);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`,8);function L(O,C){const n=d("ExternalLinkIcon");return c(),l("div",null,[u,e("div",o,[v,e("ul",null,[e("li",null,[e("p",null,[e("a",m,[h,s(n)]),b,p])]),e("li",null,[e("p",null,[e("a",g,[_,s(n)]),Q,f])])])]),e("h2",x,[N,R,T,e("a",H,[I,s(n)])]),q,e("h3",y,[w,P,e("a",k,[V,s(n)])]),G])}var F=a(r,[["render",L],["__file","4.html.vue"]]);export{F as default};
