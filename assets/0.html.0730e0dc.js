import{_ as i,o as n,c as e,e as s}from"./app.d72ab51f.js";const d={},l=s(`<h1 id="chuan-bi" tabindex="-1"><a class="header-anchor" href="#chuan-bi" aria-hidden="true">#</a> Chu\u1EA9n b\u1ECB</h1><h2 id="nhung-thu-vien-phai-co" tabindex="-1"><a class="header-anchor" href="#nhung-thu-vien-phai-co" aria-hidden="true">#</a> Nh\u1EEFng th\u01B0 vi\u1EC7n ph\u1EA3i c\xF3</h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>#include &lt;stdio.h&gt;   // th\u01B0 vi\u1EC7n c\u01A1 b\u1EA3n c\u1EE7a C
#include &lt;stdbool.h&gt; // h\u1ED7 tr\u1EE3 true/false cho C
#define MAX 50       // c\xF3 th\u1EC3 thay th\u1EBF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="thu-vien-list-h" tabindex="-1"><a class="header-anchor" href="#thu-vien-list-h" aria-hidden="true">#</a> Th\u01B0 vi\u1EC7n <code>list.h</code></h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>typedef struct{ //c\u1EA5u tr\xFAc danh s\xE1chs
    int Data[MAX];
    int Size;
}List;

void makeNullList(List *L){ //t\u1EA1o danh s\xE1ch r\u1ED7ng
    L-&gt;Size = 0;
}
bool emptyList(List L){ //ki\u1EC3m tra danh s\xE1ch r\u1ED7ng
    return L.Size == 0; 
}
void insertList(int x, List *L){ //th\xEAm x v\xE0o trong danh s\xE1ch
    L-&gt;Data[L-&gt;Size] = x;
    L-&gt;Size++;
}
int elementAt(List *L){ //l\u1EA5y t\u1EEB ph\u1EA7n t\u1EED \u0111\u1EA7u ti\xEAn trong danh s\xE1ch 
    int temp = L-&gt;Data[0];
    for (int i = 0; i &lt; L-&gt;Size; i++){
        L-&gt;Data[i] = L-&gt;Data[i+1];
    }
    L-&gt;Size--;
    return temp;
}
bool memberList(int x, List L){ //ki\u1EC3m tra x c\xF3 trong danh s\xE1ch kh\xF4ng
    for (int i = 0; i &lt; L.Size; i++){
        if(L.Data[i] == x)
            return true;
    }
    return false;
}
//ki\u1EC3m tra c\xF3 ph\u1EA7n t\u1EED n\xE0o trong L1 c\xF3 trong L2 kh\xF4ng
bool memberDoubleList(List L1,List L2){ 
    for (int i = 0; i &lt; L1.Size; i++){
        if(memberList(L1.Data[i], L2))
            return true;
    }
    return false;
}
void printPath(List L){ // in danh s\xE1ch ra
    for (int i = 0; i &lt; L.Size; i++)
        printf(&quot;%d &quot;,L.Data[i]);
}
void copyList(List  *L1,  List  *L2){ // copy danh s\xE1ch L1 qua L2
    makeNullList(L2);
    for (int i = 0; i &lt; L1-&gt;Size; i++){
        int x = L1-&gt;Data[i];
        insertList(x,L2);
    }
}	
int getPos(List L,int x){ //tr\u1EA3 v\u1EC1 v\u1ECB tr\xED c\u1EE7a ph\u1EA7n t\u1EED x trong danh s\xE1ch
    for (int i = 0; i &lt; L.Size; i++){
        if(L.Data[i] == x)
            return i;
    }
    return -1; // n\u1EBFu kh\xF4ng c\xF3 tr\u1EA3 v\u1EC1 -1
}
int maxList(List L){ //tr\u1EA3 v\u1EC1 ph\u1EA7n t\u1EED l\u1EDBn nh\u1EA5t trong danh s\xE1ch
    int max = L.Data[0];
    for(int i = 1; i &lt; L.Size; i++){
        if(max &lt; L.Data[i])
            max = L.Data[i];
    }
    return max;
}
int minList(List L){ // tr\u1EA3 v\u1EC1 ph\u1EA7n t\u1EED nh\u1ECF nh\u1EA5t trong danh s\xE1ch
    int min = L.Data[0];
    for(int i = 1; i &lt; L.Size; i++){
        if(min &gt; L.Data[i])
            min = L.Data[i];
    }
    return min;
}
int sumList(List L){ //t\xEDnh t\u1ED5ng c\xE1c ph\u1EA7n t\u1EED trong danh s\xE1ch
    int sum = 0;
    for(int i = 0; i &lt; L.Size; i++){
        sum += L.Data[i];
    }
    return sum;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="thu-vien-stack-h" tabindex="-1"><a class="header-anchor" href="#thu-vien-stack-h" aria-hidden="true">#</a> Th\u01B0 vi\u1EC7n <code>stack.h</code></h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>typedef struct{ //c\u1EA5u tr\xFAc c\u1EE7a ng\u0103n x\u1EBFp
    int Data[MAX];
    int Size;
}Stack;

void makeNullStack(Stack *S){ //t\u1EA1o ng\u0103n x\u1EBFp r\u1ED7ng
    S-&gt;Size = 0;
}
bool emptyStack(Stack S){ //ki\u1EC3m tra ng\u0103n x\u1EBFp r\u1ED7ng kh\xF4ng
    return S.Size == 0;
}
void pushStack(Stack *S, int x){ //th\xEAm x v\xE0o ng\u0103n x\u1EBFp
    S-&gt;Data[S-&gt;Size] = x;
    S-&gt;Size++;
}
int pullStack(Stack *S){ //l\u1EA5y x ra t\u1EEB ng\u0103n x\u1EBFp
    int temp = S-&gt;Data[S-&gt;Size - 1];
    S-&gt;Size--;
    return temp;
}
bool memberStack(int x, Stack S){ //ki\u1EC3m tra x c\xF3 trong ng\u0103n x\u1EBFp kh\xF4ng
    for (int i = 0; i &lt; S.Size; i++){
        if(S.Data[i] == x)
            return true;
    }
    return false;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),a=[l];function t(v,r){return n(),e("div",null,a)}var u=i(d,[["render",t],["__file","0.html.vue"]]);export{u as default};
