import{_ as d,r,o as l,c,b as e,a as n,e as a,d as i}from"./app.d72ab51f.js";const v={},o=a('<h1 id="bai-6-cay-nhi-phan-avl" tabindex="-1"><a class="header-anchor" href="#bai-6-cay-nhi-phan-avl" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2020/12/16-23-18-13-icons8-tree_structure.png" width="40"> B\xE0i 6. C\xE2y nh\u1ECB ph\xE2n AVL</h1><h2 id="mo-hinh" tabindex="-1"><a class="header-anchor" href="#mo-hinh" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/08-10-31-59-icons8_handle_with_care_35px.png"> M\xF4 h\xECnh</h2>',2),u={class:"custom-container tip"},b=e("p",{class:"custom-container-title"},"DATA VISUALIZATION",-1),m=i("M\xF4 h\xECnh "),g={href:"https://www.cs.usfca.edu/~galles/visualization/AVLtree.html",target:"_blank",rel:"noopener noreferrer"},h=i("t\u1EA1i \u0111\xE2y"),T={id:"ly-thuyet",tabindex:"-1"},L=e("a",{class:"header-anchor",href:"#ly-thuyet","aria-hidden":"true"},"#",-1),p=i(),_=e("img",{src:"https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/08-10-30-52-icons8_concept_30px.png"},null,-1),f={href:"https://vietjack.com/cau-truc-du-lieu-va-giai-thuat/giai-thuat-cay-avl.jsp",target:"_blank",rel:"noopener noreferrer"},R=i("L\xFD thuy\u1EBFt"),V=e("h2",{id:"source-code",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#source-code","aria-hidden":"true"},"#"),i(),e("img",{src:"https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/08-10-24-29-icons8_google_code_30px.png"}),i(" Source Code")],-1),A={id:"treeavl-h",tabindex:"-1"},H=e("a",{class:"header-anchor",href:"#treeavl-h","aria-hidden":"true"},"#",-1),N=i(),E={href:"https://github.com/Zenfection/zenctu/blob/main/docs/cosonganh/CT177-Cau_truc_du_lieu/Source/AVL/treeAVL.h",target:"_blank",rel:"noopener noreferrer"},F=i("treeAVL.h"),k=a(`<div class="custom-container tip"><p class="custom-container-title">C\u1EA4U TR\xDAC</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>#define LH -1   //? C\xE2y con tr\xE1i cao h\u01A1n
#define EH 0    //? Hai c\xE2y con b\u1EB1ng nhau
#define RH 1    //? C\xE2y con ph\u1EA3i cao h\u01A1n
struct AVLNode{
    char balFactor; //! ch\u1EC9 s\u1ED1 c\u0103n b\u1EB1ng
    int data;
    struct AVLNode *Left;
    struct AVLNode *Right;
};
typedef struct AVLNode *AVLTree;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">T\u1EA0O R\u1ED8NG TREE AVL</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void makeNullAVLTree(AVLTree *root){
    (*root) = NULL;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">CH\xC8N AVLNODE V\xC0O AVLTREE</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>int insertAVLNode(int x,AVLTree *root){
    AVLTree T = (*root);
    int res;
    if(T != NULL){
        if(T-&gt;data == x)
            return 0;
        else if(T-&gt;data &gt; x){
            res = insertAVLNode(x,&amp;(*root)-&gt;Left);
            if(res &lt; 2)
                return res;
            switch (T-&gt;balFactor){
                case RH: T-&gt;balFactor = RH;     return 1; break;
                case EH: T-&gt;balFactor = LH;     return 2; break;
                case LH: balanceLeft(&amp;(*root)); return 1; break;
            }
        }
        else{
            res = insertAVLNode(x,&amp;(*root)-&gt;Right);
            if(res &lt; 2)
                return res;
            switch (T-&gt;balFactor){
                case LH: T-&gt;balFactor = EH;      return 1; break;
                case EH: T-&gt;balFactor = RH;      return 2; break;
                case RH: balanceRight(&amp;(*root)); return 1; break;
            }
        }
    }
    else{
        (*root) = (struct AVLNode*)malloc(sizeof(struct AVLNode));
        if((*root) == NULL){
            return -1;
        }
        (*root)-&gt;data = x;
        (*root)-&gt;balFactor = EH;
        (*root)-&gt;Left = (*root)-&gt;Right = NULL;
        return 2;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">T\u1EA0O TREE AVL</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>AVLTree createAVLTree(){
    AVLTree root;
    int n;
    scanf(&quot;%d&quot;,&amp;n);
    makeNullAVLTree(&amp;root);
    int x;
    for (int i = 0; i &lt; n; i++){
        scanf(&quot;%d&quot;,&amp;x);
        insertAVLNode(x,&amp;root);
    }
    return root;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">3 KI\u1EC2U DUY\u1EC6T TREE AVL</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>// duy\u1EC7t ti\u1EC1n t\u1EF1
void NLR(AVLTree root){
    if(root != NULL){
        printf(&quot;%d &quot;,root-&gt;data);
        NLR(root-&gt;Left);
        NLR(root-&gt;Right);
    }
}
// duy\u1EC7t trung t\u1EF1
void LNR(AVLTree root){
    if(root != NULL){
        LNR(root-&gt;Left);
        printf(&quot;%d &quot;,root-&gt;data);
        LNR(root-&gt;Right);
    }
}
// duy\u1EC7t h\u1EADu t\u1EF1
void LRN(AVLTree root){
    if(root != NULL){
        LRN(root-&gt;Left);
        LRN(root-&gt;Right);
        printf(&quot;%d &quot;,root-&gt;data);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">4 KI\u1EC2U C\xC2N B\u1EB0NG</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>// c\u0103n b\u1EB1ng tr\xE1i tr\xE1i
void rorateLL(AVLTree *root){
    //* Left-Left =&gt; quay ph\u1EA3i
    AVLTree T = *root;
    AVLTree T1 = T-&gt;Right;

    T-&gt;Left = T1-&gt;Right;
    T1-&gt;Right = T;

    switch (T1-&gt;balFactor){
        case LH: T-&gt;balFactor = EH; T1-&gt;balFactor = EH; break;
        case EH: T-&gt;balFactor = LH; T1-&gt;balFactor = RH; break;
    }
    (*root) = T1;
}
// c\u0103n b\u1EB1ng tr\xE1i ph\u1EA3i
void rorateLR(AVLTree *root){
    AVLTree T = *root;
    AVLTree T1 = T-&gt;Left;
    AVLTree T2 = T1-&gt;Right;

    T-&gt;Left = T2-&gt;Right;
    T2-&gt;Right = T;
    T1-&gt;Right = T2-&gt;Left;
    T2-&gt;Left = T1;

    switch (T2-&gt;balFactor){
        case LH: T-&gt;balFactor = RH; T1-&gt;balFactor = EH; break;
        case EH: T-&gt;balFactor = EH; T1-&gt;balFactor = EH; break;
        case RH: T-&gt;balFactor = EH; T1-&gt;balFactor = LH; break;
    }
    T2-&gt;balFactor = EH;
    (*root) = T2;
}
// c\u0103n b\u1EB1ng ph\u1EA3i ph\u1EA3i
void rorateRR(AVLTree *root){
    //* Right-Right =&gt; quay tr\xE1i
    AVLTree T = *root;
    AVLTree T1 = T-&gt;Right;

    T-&gt;Right = T1-&gt;Left;
    T1-&gt;Left = T;

    switch (T1-&gt;balFactor){
        case RH: T-&gt;balFactor = EH; T1-&gt;balFactor = EH; break;
        case EH: T-&gt;balFactor = RH; T1-&gt;balFactor = LH; break;
    }
    (*root) = T1;
}
// c\u0103n b\u1EB1ng ph\u1EA3i tr\xE1i
void rorateRL(AVLTree *root){
    AVLTree T = *root;
    AVLTree T1 = T-&gt;Right;
    AVLTree T2 = T1-&gt;Left;

    T-&gt;Right = T2-&gt;Left;
    T2-&gt;Left = T;
    T1-&gt;Left = T2-&gt;Right;
    T2-&gt;Right = T1;

    switch (T2-&gt;balFactor){
        case RH: T-&gt;balFactor = LH; T1-&gt;balFactor = EH; break;
        case EH: T-&gt;balFactor = EH; T1-&gt;balFactor = EH; break;
        case LH: T-&gt;balFactor = EH; T1-&gt;balFactor = RH; break;
    }
    T2-&gt;balFactor = EH;
    (*root) = T2;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">2 KI\u1EC2U C\u0102N B\u1EB0NG T\u1EF0 \u0110\u1ED8NG</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>// c\xE2n b\u1EB1ng t\u1EF1 \u0111\u1ED9ng tr\xE1i
int balanceLeft(AVLTree *root){
    AVLTree T = *root;
    AVLTree T1 = T-&gt;Left;

    switch (T1-&gt;balFactor){
        case LH: rorateLL(&amp;(*root)); return 2; break;
        case EH: rorateLL(&amp;(*root)); return 1; break;
        case RH: rorateLR(&amp;(*root)); return 2; break;
    }
    return 0;
}
// c\xE2n b\u1EB1ng t\u1EF1 \u0111\u1ED9ng ph\u1EA3i
int balanceRight(AVLTree *root){
    AVLTree T = *root;
    AVLTree T1 = T-&gt;Right;

    switch (T1-&gt;balFactor){
        case LH: rorateRL(&amp;(*root)); return 2; break;
        case EH: rorateRR(&amp;(*root)); return 1; break;
        case RH: rorateRR(&amp;(*root)); return 2; break;
    }
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`,7);function x(y,w){const s=r("ExternalLinkIcon"),t=r("comment");return l(),c("div",null,[o,e("div",u,[b,e("p",null,[m,e("a",g,[h,n(s)])])]),e("h2",T,[L,p,_,e("a",f,[R,n(s)])]),V,e("h3",A,[H,N,e("a",E,[F,n(s)])]),k,n(t)])}var q=d(v,[["render",x],["__file","6.html.vue"]]);export{q as default};
