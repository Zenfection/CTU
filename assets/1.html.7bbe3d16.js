import{_ as l,r as a,o as t,c,a as i,d as s,e as d,b as n}from"./app.f9a431a9.js";const v={},r=d('<h1 id="bai-1-danh-sach-\u0111ac" tabindex="-1"><a class="header-anchor" href="#bai-1-danh-sach-\u0111ac" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2020/12/16-23-16-31-icons8-list.png" width="40"> B\xE0i 1. Danh s\xE1ch \u0111\u1EB7c</h1><h2 id="mo-hinh" tabindex="-1"><a class="header-anchor" href="#mo-hinh" aria-hidden="true">#</a> <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/08-10-31-59-icons8_handle_with_care_35px.png"> M\xF4 h\xECnh</h2>',2),u=i("div",{class:"videoZen"},[i("iframe",{width:"704",height:"396",src:"https://www.youtube.com/embed/tuujlJ19IK4",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})],-1),m={id:"ly-thuyet",tabindex:"-1"},o=i("a",{class:"header-anchor",href:"#ly-thuyet","aria-hidden":"true"},"#",-1),b=n(),g=i("img",{src:"https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/08-10-30-52-icons8_concept_30px.png"},null,-1),p={href:"https://nguyenvanhieu.vn/mang-1-chieu-trong-c/",target:"_blank",rel:"noopener noreferrer"},L=n("L\xFD thuy\u1EBFt"),h=i("h2",{id:"source-code",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#source-code","aria-hidden":"true"},"#"),n(),i("img",{src:"https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/08-10-24-29-icons8_google_code_30px.png"}),n(" Source Code")],-1),f={id:"arraylist-h",tabindex:"-1"},_=i("a",{class:"header-anchor",href:"#arraylist-h","aria-hidden":"true"},"#",-1),S=n(),x={href:"https://github.com/Zenfection/zenctu/blob/main/docs/cosonganh/CT177-Cau_truc_du_lieu/Source/ArrayList/arrayList.h",target:"_blank",rel:"noopener noreferrer"},D=n("arrayList.h"),N=d(`<div class="custom-container tip"><p class="custom-container-title">KH\u1EDEI T\u1EA0O</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>#define Max_length 50
typedef struct{
    int Data[Max_length];
    int Size;
}List;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">KH\u1EDEI T\u1EA0O R\u1ED6NG</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void makeNullList(List *L){
    L-&gt;Size = 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">HI\u1EC2N TH\u1ECA DANH S\xC1CH</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void displayList(List L){
    for (int i = 0; i &lt; L.Size; i++){
        printf(&quot;%d &quot;,L.Data[i]);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">TH\xCAM <code>N</code> PH\u1EA6N T\u1EEC TRONG <code>LIST</code></p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void InputList(int n,List *L){
    makeNullList(L);
    for(int i = 0; i &lt; n ; i++){
        scanf(&quot;%d&quot;,&amp;L-&gt;Data[i]);
        L-&gt;Size++;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">XO\xC1 PH\u1EA6N T\u1EEC T\u1EA0I V\u1ECA TR\xCD <code>P</code> TRONG <code>LIST</code></p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void deleteListbyPos(int p,List *L){
    for(int i = p; i &lt; L-&gt;Size - 1; i++){
        L-&gt;Data[i] = L-&gt;Data[i+1];
    }
    L-&gt;Size--;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">XO\xC1 PH\u1EA6N T\u1EEC <code>X</code> TRONG <code>LIST</code></p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void deleteListbyID(int x, List *L){
    for(int i = 0; i &lt; L-&gt;Size; i++){
        if(L-&gt;Data[i] == x){
            deleteListbyPos(i,L);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">TR\u1EA2 V\u1EC0 V\u1ECA TR\xCD \u0110\u1EA6U TI\xCAN C\u1EE6A <code>X</code> TRONG <code>LIST</code></p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>int locateList(int x,List L){
    for(int i = 0 ; i &lt; L.Size ; i++){
        if(L.Data[i] == x){
            return i;
        }
    }
    return -1;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">KI\u1EC2M TRA <code>X</code> TRONG <code>LIST</code></p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>int memberList(int x,List L){
    if(locateList(x,L) != 1){
        return 1;
    }
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">T\u1ED0I \u01AFU DANH S\xC1CH (\`1 2 3\` -&gt; \`1 2\`)</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void optimizeList(List *L){
    int  i = 0;
    int j;
    while (i != L-&gt;Size){
        j = i + 1;
        while (j != L-&gt;Size){
            if(L-&gt;Data[i] == L-&gt;Data[j]){
                deleteListbyPos(j,L);
            }
            else{
                j++;
            }
        }
        i++;
    }  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">TH\xCAM <code>X</code> T\u1EA0I V\u1ECA TR\xCD <code>P</code> TRONG <code>LIST</code></p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void insertList(int x,int p,List *L){
    if(L-&gt;Size == Max_length){
        printf(&quot;Full List!!!&quot;);
    }
    else if(p &lt; 0 || p &gt; L-&gt;Size){
        printf(&quot;Position Invalid!!!&quot;);
    }
    else{
        for(int i = L-&gt;Size; i &gt;= p ; i--){
            L-&gt;Data[i]=L-&gt;Data[i-1];
        }
        L-&gt;Size++;
        L-&gt;Data[p] = x;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">CHUY\u1EC2N DANH S\xC1CH QUA DANH S\xC1CH M\u1EDAI</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void changeList(List L1,List *L){
    for(int i = 0 ; i &lt; L1.Size ; i++){
        insertList(L1.Data[i],L-&gt;Size,L);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">G\u1ED8P 2 DANH S\xC1CH V\xC0O M\u1ED8T</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void mergeList(List L1,List L2,List *L){
    changeList(L1,L);
    changeList(L2,L);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">L\u1ECCC PH\u1EA6N T\u1EEC CH\u1EB2N HO\u1EB6C L\u1EBA QUA M\u1ED8T DANH S\xC1CH</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void filter_evenNumber(List L1,List *L){
    int k = 0;
    for(int i = 0 ; i &lt; L1.Size; i++){
        if(L1.Data[i] % 2 == 0){
            insertList(L1.Data[i],k,L);
            k++;
        }
    }
}

void filter_oddNumber(List L1,List *L){
    int k = 0;
    for (int i = 0; i &lt; L1.Size; i++){
        if(L1.Data[i] % 2 != 0){
            insertList(L1.Data[i],k,L);
            k++;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">T\xCDNH TRUNG B\xCCNH C\xC1C PH\u1EA6N T\u1EEC TRONG DANH S\xC1CH</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>double averageList(List L){
    double result = 0;
    for (int i = 0; i &lt; L.Size; i++){
        result += L.Data[i];
    }
    return result/L.Size;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`,14),T={id:"searchlist-h",tabindex:"-1"},H=i("a",{class:"header-anchor",href:"#searchlist-h","aria-hidden":"true"},"#",-1),z=n(),j={href:"https://github.com/Zenfection/zenctu/blob/main/docs/cosonganh/CT177-Cau_truc_du_lieu/Source/ArrayList/searchList.h",target:"_blank",rel:"noopener noreferrer"},w=n("searchList.h"),P=d(`<div class="custom-container tip"><p class="custom-container-title">T\xCCM KI\u1EBEM TUY\u1EBEN T\xCDNH</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>// kh\xF4ng c\u1EA7n s\u1EAFp x\u1EBFp
int linearSearch(int x,List L){
    for (int i = 0; i &lt; L.Size; i++){
        if(L.Data[i] == x){
            return i;
        }
    }
    return 1;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">T\xCCM KI\u1EBEM NH\u1ECA PH\xC2N</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>// c\u1EA7n s\u1EAFp x\u1EBFp
int binarySearch(int x,List L){
    int left = 0;
    int right = L.Size - 1;
    int mid;
    while(right &gt;= left){
        mid = left + ((right - left) / 2);
        if(L.Data[mid] == x){
            return mid;
        }
        else if(L.Data[mid] &gt; x){
            right = mid - 1;
        }
        else{
            left = mid + 1;
        }
    }
    return -1;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`,2),y={id:"sortlist-h",tabindex:"-1"},I=i("a",{class:"header-anchor",href:"#sortlist-h","aria-hidden":"true"},"#",-1),k=n(),C={href:"https://github.com/Zenfection/zenctu/blob/main/docs/cosonganh/CT177-Cau_truc_du_lieu/Source/ArrayList/sortList.h",target:"_blank",rel:"noopener noreferrer"},M=n("sortList.h"),R=d(`<div class="custom-container tip"><p class="custom-container-title">HO\xC1N \u0110\u1ED4I 2 S\u1ED0</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void swap(int *a,int *b){
  int temp = *a;
  *a = *b;
  *b = temp;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">S\u1EAEP X\u1EBEP TR\u1EF0C TUY\u1EBEN</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void interchangeSort(List *L){
  for (int i = 0; i &lt; L-&gt;Size - 1; i++){
    for (int j = i + 1; j &lt; L-&gt;Size; j++){
      if(L-&gt;Data[i] &gt; L-&gt;Data[j]){
        swap(&amp;L-&gt;Data[i],&amp;L-&gt;Data[j]);
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">S\u1EAEP X\u1EBEP CH\u1ECCN</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void selectionSort(List *L){
  for(int i = 0 ; i &lt; L-&gt;Size - 1; i++){
    int min = i;
    for (int j = i + 1; j &lt; L-&gt;Size; j++){
      if(L-&gt;Data[min] &gt; L-&gt;Data[j]){
        min = j;
      }
    }
    if(min != i){
      swap(&amp;L-&gt;Data[min],&amp;L-&gt;Data[i]);
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">S\u1EAEP X\u1EBEP N\u1ED4I B\u1ECCT</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void bubbleSort(List *L){
  for (int i = 0; i &lt; L-&gt;Size; i++){
    for (int j = L-&gt;Size - 1; j &gt;= 0; j--){
      if(j &gt; i){
        if(L-&gt;Data[j] &lt; L-&gt;Data[j-1]){
          swap(&amp;L-&gt;Data[j],&amp;L-&gt;Data[j-1]);
        }
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">S\u1EAEP X\u1EBEP CH\xC8N</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void insertionSort(List *L){
  int x;
  int pos;
  for (int i = 1; i &lt; L-&gt;Size; i++){
    pos = i - 1;
    x = L-&gt;Data[i];
    while (pos &gt;= 0 &amp;&amp; L-&gt;Data[pos] &gt; x){
      L-&gt;Data[pos + 1] = L-&gt;Data[pos];
      pos--;
    }
    L-&gt;Data[pos+1] = x;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">S\u1EAEP X\u1EBEP C\xC2Y NH\u1ECA PH\xC2N</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void heaplify(int i,int n,List *L){
  while (i &lt;= (n / 2) - 1){
    int left = (2 * i) + 1;
    int right = (2 * i) + 2;
    int max = left;
    if(right &lt; n &amp;&amp; L-&gt;Data[right] &gt; L-&gt;Data[max]){
      max = right;
    }
    if(L-&gt;Data[i] &lt; L-&gt;Data[max]){
      swap(&amp;L-&gt;Data[i],&amp;L-&gt;Data[max]);
    }
    i = max;
  }
}

void heapSort(List *L){
  for(int i = (L-&gt;Size - 1) / 2; i &gt;= 0 ; i--){
      heaplify(i,L-&gt;Size,L);
  }
  for(int i = L-&gt;Size - 1 ; i &gt;= 0 ; i--){
    swap(&amp;L-&gt;Data[0],&amp;L-&gt;Data[i]);
    heaplify(0,i,L);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">S\u1EAEP X\u1EBEP SHELL</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void shellSort(List *L){
  int x,pos;
  int divide = 2; // c\xF3 th\u1EC3 thay \u0111\u1ED5i v\xE1ch chia
  for(int h = L-&gt;Size / divide; h &gt; 0 ; h /= divide){
    for(int i = h ; i &lt; L-&gt;Size ; i++){
      x = L-&gt;Data[i];
      pos = i - h;
      while (pos &gt;= 0 &amp;&amp; L-&gt;Data[pos] &gt; x){
        L-&gt;Data[pos + h] = L-&gt;Data[pos];
        pos -= h;
      }
        L-&gt;Data[pos+h] = x;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">S\u1EAEP X\u1EBEP NHANH</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void quickSort(List *L,int start,int end){
  int pivot = L-&gt;Data[(start + end) / 2]; // tu\u1EF3 ch\u1ECDn pivot
  int left = start;
  int right = end;
  while(left &lt;= right){
    while(L-&gt;Data[left] &lt; pivot){
      left++;
    }
    while(L-&gt;Data[right] &gt; pivot){
      right--;
    }
    if(left &lt;= right){
      swap(&amp;L-&gt;Data[left],&amp;L-&gt;Data[right]);
      left++;
      right--;
    }
  }
  if(right &gt; start){
    quickSort(L,start,right);
  }
  if(left &lt; end){
    quickSort(L,left,end);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">S\u1EAEP X\u1EBEP G\u1ED8P</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>void merge(List *L,int left,int mid,int right){
  int n1 = mid - left + 1;
  int n2 = right - mid;
  int M1[n1],M2[n2];
  for (int i = 0; i &lt; n1; i++){
    M1[i] = L-&gt;Data[left + i];
  }
  for (int i = 0; i &lt; n2; i++){
    M2[i] = L-&gt;Data[mid + 1 + i];
  }
  int i = 0;// m\u1EA3ng R
  int j = 0;// m\u1EA3ng Q
  int k = left;
  while (i &lt; n1 &amp;&amp; j &lt; n2){
    if (M1[i] &lt;= M2[j]){
      L-&gt;Data[k] = M1[i];
      i++;
    }
    else{
      L-&gt;Data[k] = M2[j];
      j++;
      k++;
    }
  }
  while (i &lt; n1){
    L-&gt;Data[k] = M1[i];
    i++;
    k++;
  }
  while (j &lt; n2){
    L-&gt;Data[k] = M2[j];
    j++;
    k++;
  }
}

void mergeSort(List *L,int start,int end){
  if(start &lt; end){
    int half = start + ((end - start) / 2);
    mergeSort(L,start,half);
    mergeSort(L,half + 1,end);
    merge(L,start,half,end);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`,9);function A(O,X){const e=a("ExternalLinkIcon");return t(),c("div",null,[r,u,i("h2",m,[o,b,g,i("a",p,[L,s(e)])]),h,i("h3",f,[_,S,i("a",x,[D,s(e)])]),N,i("h3",T,[H,z,i("a",j,[w,s(e)])]),P,i("h3",y,[I,k,i("a",C,[M,s(e)])]),R])}var G=l(v,[["render",A],["__file","1.html.vue"]]);export{G as default};
