import{_ as r,r as d,o as a,c,b as e,a as n,e as t,d as i}from"./app.d72ab51f.js";const v={},o=t('<h1 id="bai-5-cay-nhi-phan" tabindex="-1"><a class="header-anchor" href="#bai-5-cay-nhi-phan" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2020/12/16-23-17-59-icons8-folder_tree.png" width="40"> B\xE0i 5. C\xE2y nh\u1ECB ph\xE2n</h1><h2 id="mo-hinh" tabindex="-1"><a class="header-anchor" href="#mo-hinh" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/08-10-31-59-icons8_handle_with_care_35px.png"> M\xF4 h\xECnh</h2>',2),u={class:"custom-container tip"},m=e("p",{class:"custom-container-title"},"DATA VISUALIZATION",-1),b=i("M\xF4 h\xECnh "),g={href:"https://www.cs.usfca.edu/~galles/visualization/BST.html",target:"_blank",rel:"noopener noreferrer"},h=i("t\u1EA1i \u0111\xE2y"),p={id:"ly-thuyet",tabindex:"-1"},f=e("a",{class:"header-anchor",href:"#ly-thuyet","aria-hidden":"true"},"#",-1),L=i(),N=e("img",{src:"https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/08-10-30-52-icons8_concept_30px.png"},null,-1),_={href:"https://nguyenvanhieu.vn/cay-nhi-phan-binary-tree/",target:"_blank",rel:"noopener noreferrer"},T=i("L\xFD thuy\u1EBFt"),x=e("h2",{id:"source-code",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#source-code","aria-hidden":"true"},"#"),i(),e("img",{src:"https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/08-10-24-29-icons8_google_code_30px.png"}),i(" Source Code")],-1),R={id:"treebst-h",tabindex:"-1"},E=e("a",{class:"header-anchor",href:"#treebst-h","aria-hidden":"true"},"#",-1),U=i(),y={href:"https://github.com/Zenfection/zenctu/blob/main/docs/cosonganh/CT177-Cau_truc_du_lieu/Source/BST/treeBST.h",target:"_blank",rel:"noopener noreferrer"},q=i("treeBST.h"),O=t(`<div class="custom-container tip"><p class="custom-container-title">C\u1EA4U TR\xDAC</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>struct Node{
    int data;
    struct Node *Left;
    struct Node *Right;
};
typedef struct Node *Tree;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">KH\u1EDEI T\u1EA0O R\u1ED8NG TREE</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void makeNullTree(Tree *root){
    (*root) = NULL;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">TH\xCAM NODE V\xC0O TRONG TREE</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void insertNode(int x,Tree *root){
    Tree temp = *root;
    if(temp == NULL){
        temp = (struct Node*)malloc(sizeof(struct Node));
        temp-&gt;data = x;
        temp-&gt;Left = NULL;
        temp-&gt;Right = NULL;
        *root = temp;
    }
    else{
        if(temp-&gt;data == x){
            return;
        }
        else if(temp-&gt;data &gt; x){
            insertNode(x,&amp;temp-&gt;Left);
        }
        else{
            insertNode(x,&amp;temp-&gt;Right);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">T\u1EA0O TREE</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>Tree createTree(){
    Tree root;
    int n;
    scanf(&quot;%d&quot;,&amp;n);
    makeNullTree(&amp;root);
    int x;
    for (int i = 0; i &lt; n; i++){
        scanf(&quot;%d&quot;,&amp;x);
        insertNode(x,&amp;root);
    }
    return root;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">3 C\xC1CH DUY\u1EC6T TREE</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>// duy\u1EC7t ti\u1EC1n t\u1EF1
void NLR(Tree root){
    if(root != NULL){
        printf(&quot;%d &quot;,root-&gt;data);
        NLR(root-&gt;Left);
        NLR(root-&gt;Right);
    }
}
// duy\u1EC7t trung t\u1EF1
void LNR(Tree root){
    if(root != NULL){
        LNR(root-&gt;Left);
        printf(&quot;%d &quot;,root-&gt;data);
        LNR(root-&gt;Right);
    }
}
// duy\u1EC7t h\u1EADu t\u1EF1
void LRN(Tree root){
    if(root != NULL){
        LRN(root-&gt;Left);
        LRN(root-&gt;Right);
        printf(&quot;%d &quot;,root-&gt;data);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">TR\u1EA2 V\u1EC0 NODE L\u1EDAN HO\u1EB6C NH\u1ECE NH\u1EA4T TRONG TREE</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>Tree minNode(Tree root){
    while (root-&gt;Left != NULL){
        root = root-&gt;Left;
    }
    return root;
}
Tree maxNode(Tree root){
    while (root-&gt;Right != NULL){
        root = root-&gt;Right;
    }
    return root;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">TR\u1EA2 V\u1EC0 NODE PH\xCDA TR\u01AF\u1EDAC V\xC0 NODE PH\xCDA SAU NODE X</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>Tree getPrevious(int x,Tree root){
    Tree prevNode = NULL;
    while (root != NULL){
        if(root-&gt;data &gt; x){
            root = root-&gt;Left;
        }
        else if(root-&gt;data &lt; x){
            prevNode = root;
            root = root-&gt;Right;
        }
        else if(root-&gt;Left == NULL){
            return prevNode;
        }
        else{
            return maxNode(root-&gt;Left);
        }
    }
    return NULL;
}

Tree getNext(int x,Tree root){
    int n = 0;
    int M[50];
    int pos;
    LNRtoArray(&amp;n,M,root);
    for (int i = 0; i &lt; n; i++){
        if(x == M[i]){
            pos = i;
            break;
        }
    }
    Tree result = searchNode(M[pos+1],root);
    return result;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">XO\xC1 M\u1ED8T NODE TRONG TREE</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void searchStandFor(Tree *node1,Tree *node2){
    if((*node2)-&gt;Left != NULL){
        searchStandFor(&amp;(*node1),&amp;(*node2)-&gt;Left);
    }
    else{
        (*node1)-&gt;data = (*node2)-&gt;data;
        (*node1) = (*node2);
        (*node2) = (*node2)-&gt;Right;
    }
}
int deleteNode(int x,Tree *root){
    Tree temp = *root;
    if(temp == NULL){
        return 0;
    }
    if(temp-&gt;data &gt; x){
        return deleteNode(x,&amp;temp-&gt;Left);
    }
    else if(temp-&gt;data &lt; x){
        return deleteNode(x,&amp;temp-&gt;Right);
    }
    else{
        Tree p = *root;
        if(temp-&gt;Left == NULL){
            temp = temp-&gt;Right;
        }
        else{
            if(temp-&gt;Right == NULL){
                temp = temp-&gt;Left;
            }
            else{
                searchStandFor(&amp;p,&amp;(*root)-&gt;Right);
            }
        }
        p = NULL;
        *root = temp;
    }
    return 1;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">TR\u1EA2 V\u1EC0 CHI\u1EC0U CAO C\u1EE6A TREE</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>int getHeight(Tree root){
    if(root == NULL){
        return -1;
    }
    else{
        int heightLeft = getHeight(root-&gt;Left);
        int heightRight = getHeight(root-&gt;Right);
        if(heightLeft &gt; heightRight)
            return heightLeft+1;
        else
            return heightRight+1;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">HI\u1EC2N TH\u1ECA \u0110\u01AF\u1EDCNG \u0110I C\u1EE6A TREE</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void printPath(int x,Tree root){
    while (root != NULL){
        if(root-&gt;data &gt; x){
            printf(&quot;%d &quot;,root-&gt;data);
            root = root-&gt;Left;
        }
        else if(root-&gt;data &lt; x){
            printf(&quot;%d &quot;, root-&gt;data);
            root = root-&gt;Right;
        }
        else{
            //root-&gt;data == x
            printf(&quot;%d -&gt; Tim thay&quot;,root-&gt;data);
            return;
        }
    }
    printf(&quot; -&gt; Khong thay&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`,11);function C(H,I){const s=d("ExternalLinkIcon"),l=d("comment");return a(),c("div",null,[o,e("div",u,[m,e("p",null,[b,e("a",g,[h,n(s)])])]),e("h2",p,[f,L,N,e("a",_,[T,n(s)])]),x,e("h3",R,[E,U,e("a",y,[q,n(s)])]),O,n(l)])}var S=r(v,[["render",C],["__file","5.html.vue"]]);export{S as default};
