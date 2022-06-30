import{_ as l,r as v,o as a,c as t,a as e,d as s,e as d,b as i}from"./app.f9a431a9.js";const c={},r=d('<h1 id="bai-2-danh-sach-lien-ket" tabindex="-1"><a class="header-anchor" href="#bai-2-danh-sach-lien-ket" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2020/12/16-23-16-51-icons8-link.png" width="40"> B\xE0i 2. Danh s\xE1ch li\xEAn k\u1EBFt</h1><h2 id="mo-hinh" tabindex="-1"><a class="header-anchor" href="#mo-hinh" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/08-10-31-59-icons8_handle_with_care_35px.png"> M\xF4 h\xECnh</h2>',2),m={class:"custom-container tip"},u=e("p",{class:"custom-container-title"},"\u{1F4A1} M\u1EB8O",-1),o=i("B\u1EA1n c\xF3 th\u1EC3 tham kh\u1EA3o v\xE0 th\u1EF1c h\xE0nh theo m\xF4 h\xECnh "),b=e("code",null,"Linked List",-1),p=i(),g={href:"https://visualgo.net/en/list",target:"_blank",rel:"noopener noreferrer"},N=i("t\u1EA1i \u0111\xE2y"),L={id:"ly-thuyet",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#ly-thuyet","aria-hidden":"true"},"#",-1),S=i(),x=e("img",{src:"https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/08-10-30-52-icons8_concept_30px.png"},null,-1),_={href:"https://nguyenvanhieu.vn/danh-sach-lien-ket-don/",target:"_blank",rel:"noopener noreferrer"},H=i("L\xFD thuy\u1EBFt"),f=e("h2",{id:"source-code",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#source-code","aria-hidden":"true"},"#"),i(),e("img",{src:"https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/08-10-24-29-icons8_google_code_30px.png"}),i(" Source Code")],-1),w={id:"linkedlist-h",tabindex:"-1"},T=e("a",{class:"header-anchor",href:"#linkedlist-h","aria-hidden":"true"},"#",-1),U=i(),C={href:"https://github.com/Zenfection/zenctu/blob/main/docs/cosonganh/CT177-Cau_truc_du_lieu/Source/LinkedList/linkedList.h",target:"_blank",rel:"noopener noreferrer"},O=i("linkedList.h"),y=d(`<div class="custom-container tip"><p class="custom-container-title">C\u1EA4U TR\xDAC</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>struct NODE{
    int data;
    struct NODE* Next;
};
typedef struct NODE Node;
typedef struct{
    Node *Head;
    Node *Tail;
    int Size;
}List;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">KH\u1EDEI T\u1EA0O R\u1ED6NG</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void makeNullList(List *L){
    L-&gt;Head = NULL;
    L-&gt;Tail = NULL;
    L-&gt;Size = 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">HI\u1EC2N TH\u1ECA DANH S\xC1CH</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void displayList(List L){
    Node *temp = L.Head;
    while(temp != NULL){
        printf(&quot;%d &quot;,temp-&gt;data);
        temp = temp-&gt;Next;
    }
    printf(&quot;\\n&quot;);
    printf(&quot;Size = %d&quot;,L.Size);
    printf(&quot;\\n&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">T\u1EA0O M\u1ED8T NODE V\u1EDAI PH\u1EA6N T\u1EEC</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>Node *createNode(int x){
    Node *newnode = (Node *)malloc(sizeof(Node));
    newnode-&gt;data = x;
    newnode-&gt;Next = NULL;
    return newnode;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">TH\xCAM NODE V\xC0O \u0110\u1EA6U HO\u1EB6C CU\u1ED0I DANH S\xC1CH</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void insertList_Frist(Node *newNode,List *L){
    if(L-&gt;Head == NULL){
        L-&gt;Head = newNode;
        L-&gt;Tail = newNode;
    }
    else{
        newNode-&gt;Next = L-&gt;Head;
        L-&gt;Head = newNode;
    }
    L-&gt;Size++;
}

void insertList_End(Node *newNode,List *L){
    if(L-&gt;Head == NULL){
        L-&gt;Head = newNode;
        L-&gt;Tail = newNode;
    }
    else{
        L-&gt;Tail-&gt;Next = newNode;
        L-&gt;Tail=newNode;
        newNode-&gt;Next = NULL;
    }
    L-&gt;Size++;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">TH\xCAM NODE V\xC0O V\u1ECA TR\xCD P TRONG DANH S\xC1CH</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void insertList_byPos(int p,Node *newNode,List *L){
    if(p &lt; 1 || L-&gt;Head == NULL){
        insertList_Frist(newNode,L);
    }
    else if(p &gt;= L-&gt;Size){
        insertList_End(newNode,L);
    }
    else{
        Node *temp = L-&gt;Head;
        int i = 0;
        while(temp != NULL){
            if(p - 1 == i){
                newNode-&gt;Next = temp-&gt;Next;
                temp-&gt;Next = newNode;
                L-&gt;Size++;
                return;
            }
            i++;
            temp = temp-&gt;Next;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">TH\xCAM N NODE V\xC0O DANH S\xC1CH</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void inputList(int n,List *L){
    int x;
    Node *temp;
    for (int i = 0; i &lt; n; i++){
        scanf(&quot;%d&quot;,&amp;x);
        temp = createNode(x);
        insertList_byPos(i,temp,L);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">KI\u1EC2M TRA X TRONG DANH S\xC1CH</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>int memberList(int x,List L){
    Node *temp = L.Head;
    while (temp != NULL){
        if(temp-&gt;data == x){
            return 1;
        }
        temp = temp-&gt;Next;
    }
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">T\xCCM V\u1ECA TR\xCD NODE CH\u1EE8A X</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>int locateList(int x,List L){
    Node *temp = L.Head;
    int i = 0;
    while (temp != NULL){
        if(temp-&gt;data = x){
            free(temp);
            return i;
        }
        else{
            i++;
        }
        temp = temp-&gt;Next;
    }
    free(temp);
    return -1;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">XO\xC1 NODE C\xD3 V\u1ECA TR\xCD P TRONG DANH S\xC1CH</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void deleteList_byPos(int p,List *L){
    Node *temp = L-&gt;Head;
    Node *prev = NULL;
    int i = 0;
    while (temp != NULL) {
        if(p == i){
            if (prev==NULL) {
                L-&gt;Head=temp-&gt;Next;
            }
            else{
                prev-&gt;Next=temp-&gt;Next;
            }
            L-&gt;Size--;
            return;
        }
        else{
            i++;
        }
        prev = temp;
        temp = temp-&gt;Next;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">XO\xC1 NODE TRONG DANH S\xC1CH</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void deleteList_byNode(Node* newNode,List *L){
    int i = 0;
    Node *temp = L-&gt;Head;
    while (temp != NULL){
        if(newNode == temp){
            deleteList_byPos(i,L);
        }
        else{
            i++;
        }
        temp = temp-&gt;Next;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">XO\xC1 NODE C\xD3 PH\u1EA6N T\u1EEC X TRONG DANH S\xC1CH</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void deleteList_byValue(int x,List *L){
    Node *temp = L-&gt;Head;
    int i = 0;
    while (temp != NULL){
        if(temp-&gt;data == x){
            deleteList_byPos(i,L);
        }
        else{
            i++;
        }
        temp = temp-&gt;Next;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">T\u1ED0I \u01AFU DANH S\xC1CH (\`1 2 1\` -&gt; \`1 2\`)</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void optimizeList(List *L){
    Node *temp1 = L-&gt;Head;
    Node *temp2 = NULL;
    while (temp1-&gt;Next != NULL){
        temp2 = temp1-&gt;Next;
        while (temp2 != NULL){
            if(temp1-&gt;data == temp2-&gt;data){
                deleteList_byNode(temp2,L);
            }
            temp2 = temp2-&gt;Next;
        }
        temp1 = temp1-&gt;Next;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">T\xCCM NODE C\xD3 PH\u1EA6N T\u1EEC L\u1EDAN NH\u1EA4T HO\u1EB6C NH\u1ECE NH\u1EA4T</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>int Find_Max(List L){
    Node *temp=L.Head;
    int max=temp-&gt;data;
    while (temp!=NULL) {
        if(max&lt;temp-&gt;data){
            max=temp-&gt;data;
        }
        temp=temp-&gt;Next;
    }
    free(temp);
    return max;
}

int Find_Min(List L){
    Node *temp=L.Head;
    int min=temp-&gt;data;
    while (temp!=NULL) {
        if(min&gt;temp-&gt;data){
            min=temp-&gt;data;
        }
        temp=temp-&gt;Next;
    }
    free(temp);
    return min;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">CHUY\u1EC2N SANG DANH S\xC1CH KH\xC1C</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void changeList(List L1,List *L){
    Node *temp = L1.Head;
    int i = L-&gt;Size;
    while (temp != NULL){
        insertList_byPos(i,createNode(temp-&gt;data),L);
        i++;
        temp = temp-&gt;Next;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">G\u1ED8P 2 DANH S\xC1CH TH\xC0NH 1 DANH S\xC1CH</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void mergeList(List L1,List L2,List *L){
    changeList(L1,L);
    changeList(L2,L);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">L\u1ECCC S\u1ED0 CH\u1EB4N HO\u1EB6C L\u1EBA QUA DANH S\xC1CH KH\xC1C</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void filter_evenNumber(List L1, List *L){
    Node *temp = L1.Head;
    int i = L-&gt;Size;
    while (temp != NULL){
        if(temp-&gt;data % 2 == 0){
            insertList_byPos(i,createNode(temp-&gt;data),L);
        }
        i++;
        temp = temp-&gt;Next;
    }
}

void filter_oddNumber(List L1, List *L){
    Node *temp = L1.Head;
    int i = L-&gt;Size;
    while (temp != NULL){
        if(temp-&gt;data % 2 != 0){
            insertList_byPos(i,createNode(temp-&gt;data),L);
        }
        i++;
        temp = temp-&gt;Next;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">T\xCDNH T\u1ED4NG TRUNG B\xCCNH PH\u1EA6N T\u1EEC TRONG DANH S\xC1CH</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>double averageList(List L){
    Node *temp = L.Head;
    double result = 0;
    while (temp != NULL){
        result += temp-&gt;data;
        temp = temp-&gt;Next;
    }
    return result/L.Size;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`,18),D={id:"sentencelist-h",tabindex:"-1"},z=e("a",{class:"header-anchor",href:"#sentencelist-h","aria-hidden":"true"},"#",-1),R=i(),E={href:"https://github.com/Zenfection/zenctu/blob/main/docs/cosonganh/CT177-Cau_truc_du_lieu/Source/LinkedList/sentenceList.h",target:"_blank",rel:"noopener noreferrer"},k=i("sentenceList.h"),P=d(`<div class="custom-container tip"><p class="custom-container-title">C\u1EA4U TR\xDAC</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>struct NODE{
    char Word;
    struct NODE *Next;
};
typedef struct NODE Node;
typedef struct{
    Node *Head;
    Node *Tail;
    int Size;
}Sentence;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">T\u1EA0O R\u1ED6NG C\xC2U</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void makeNullSentence(Sentence *S){
    S-&gt;Head = NULL;
    S-&gt;Tail = NULL;
    S-&gt;Size = 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">HI\u1EC2N TH\u1ECA C\xC2U</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void displaySentence(Sentence S){
    Node *temp = S.Head;
    while(temp != NULL){
        printf(&quot;%c&quot;,temp-&gt;Word);
        temp = temp-&gt;Next;
    }
    printf(&quot;Size = %d&quot;,S.Size);
    printf(&quot;\\n&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">T\u1EA0O M\u1ED8T NODE X L\xC0 T\u1EEA</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>Node *createNode(char c){
    Node *newNode = (Node *)malloc(sizeof(Node));
    newNode-&gt;Word = c;
    newNode-&gt;Next = NULL;
    return newNode;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">CH\xC8N M\u1ED8T T\u1EEA V\xC0O \u0110\u1EA6U HO\u1EB6C CU\u1ED0I C\xC2U</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void insertSentence_Frist(Node *newNode,Sentence *S){
    if(S-&gt;Head == NULL){
        S-&gt;Head = newNode;
        S-&gt;Tail = newNode;
    }
    else{
        newNode-&gt;Next = S-&gt;Head;
        S-&gt;Head = newNode;
    }
    S-&gt;Size++;
}
void insertSentence_End(Node *newNode,Sentence *S){
    if(S-&gt;Head == NULL){
        S-&gt;Head = newNode;
        S-&gt;Tail = newNode;
    }
    else{
        S-&gt;Tail-&gt;Next = newNode;
        S-&gt;Tail=newNode;
        newNode-&gt;Next = NULL;
    }
    S-&gt;Size++;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">CH\xC8N T\u1EEA V\u1ECA TR\xCD P TRONG C\xC2U</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void insertSentence_byPos(int p,Node *newNode,Sentence *S){
    if(p &lt; 1 || S-&gt;Head == NULL){
        insertSentence_Frist(newNode,S);
    }
    else if(p &gt;= S-&gt;Size){
        insertSentence_End(newNode,S);
    }
    else{
        Node *temp = S-&gt;Head;
        int i = 0;
        while(temp != NULL){
            if(p - 1 == i){
                newNode-&gt;Next = temp-&gt;Next;
                temp-&gt;Next = newNode;
                S-&gt;Size++;
                return;
            }
            i++;
            temp = temp-&gt;Next;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">NH\u1EACP C\xC2U</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void inputSentence(Sentence *S){
    char c[100];
    fgets(c,100,stdin);
    int len = strlen(c);
    Node *temp;
    for(int i = 0 ; i &lt; strlen(c) ; i++){
        temp = createNode(c[i]);
        insertSentence_byPos(i,temp,S);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">KI\u1EC2M TRA T\u1EEA X C\xD3 TRONG C\xC2U</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>int memberSentence(char x,Sentence S){
    Node *temp = S.Head;
    while (temp != NULL){
        if(temp-&gt;Word == x){
            return 1;
        }
        temp = temp-&gt;Next;
    }
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">T\xCCM V\u1ECA TR\xCD T\u1EEA X TRONG C\xC2U</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>int locateSentence(char x,Sentence S){
    Node *temp = S.Head;
    int i = 0;
    while (temp != NULL){
        if(temp-&gt;Word == x){
            return i;
        }
        else{
            i++;
        }
        temp = temp-&gt;Next;
    }
    return -1;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">XO\xC1 T\u1EEA V\u1ECA TR\xCD P TRONG C\xC2U</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void deleteSentence_byPos(int p,Sentence *S){
    Node *temp = S-&gt;Head;
    Node *prev = NULL;
    int i = 0;
    while (temp != NULL) {
        if(p == i){
            if (prev==NULL) {
                S-&gt;Head=temp-&gt;Next;
            }
            else{
                prev-&gt;Next=temp-&gt;Next;
            }
            S-&gt;Size--;
            return;
        }
        else{
            i++;
        }
        prev = temp;
        temp = temp-&gt;Next;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">XO\xC1 T\u1EEA X TRONG C\xC2U</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void deleteSentence_byValue(char x,Sentence *S){
    Node *temp = S-&gt;Head;
    int i = 0;
    while (temp != NULL){
        if(temp-&gt;Word == x){
            deleteSentence_byPos(i,S);
        }
        else{
            i++;
        }
        temp = temp-&gt;Next;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">XO\xC1 M\u1ED8T NODE TRONG C\xC2U</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void deleteSentence_byNode(Node *newNode,Sentence *S){
    int i = 0;
    Node *temp = S-&gt;Head;
    while (temp != NULL){
        if(newNode == temp){
            deleteSentence_byPos(i,S);
        }
        else{
            i++;
        }
        temp = temp-&gt;Next;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">XO\xC1 KHO\u1EA2NG TR\u1EAENG D\u01AF TH\u1EEAA</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void deleteWhiteSpace(Sentence *S){
    Node *temp = S-&gt;Head;
    while(isspace(temp-&gt;Word)){
        deleteSentence_byNode(temp,S);
        temp = temp-&gt;Next;
    }
    while(temp != NULL){
        if(isspace(temp-&gt;Word) &amp;&amp; temp-&gt;Next != NULL){
            if(isspace(temp-&gt;Next-&gt;Word)){
                deleteSentence_byNode(temp,S);
            }
        }
        temp = temp-&gt;Next;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">CHU\u1EA8N HO\xC1 C\xC2U</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void normalizeSentence(Sentence *S){
    deleteWhiteSpace(S);
    Node *temp = S-&gt;Head;
    if(islower(temp-&gt;Word)){
        temp-&gt;Word -= 32;
    }
    temp = temp-&gt;Next;
    while (temp != NULL){
        while(!isspace(temp-&gt;Word)){
            if(isupper(temp-&gt;Word)){
                temp-&gt;Word += 32;
            }
            temp = temp-&gt;Next;
        }
        if(isspace(temp-&gt;Word) &amp;&amp; temp-&gt;Next != NULL){
            temp = temp-&gt;Next;
            if(islower(temp-&gt;Word)){
                temp-&gt;Word -= 32;
            }
        }
        temp = temp-&gt;Next;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`,14);function A(G,W){const n=v("ExternalLinkIcon");return a(),t("div",null,[r,e("div",m,[u,e("p",null,[o,b,p,e("a",g,[N,s(n)])])]),e("h2",L,[h,S,x,e("a",_,[H,s(n)])]),f,e("h3",w,[T,U,e("a",C,[O,s(n)])]),y,e("h3",D,[z,R,e("a",E,[k,s(n)])]),P])}var q=l(c,[["render",A],["__file","2.html.vue"]]);export{q as default};
