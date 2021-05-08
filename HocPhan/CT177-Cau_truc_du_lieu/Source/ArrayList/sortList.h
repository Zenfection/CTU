void swap(int *a,int *b);                             //* hoán vị 2 số
void interchangeSort(List *L);                        //* Sắp xếp trực tiếp
void selectionSort(List *L);                          //* Sắp xếp chọn
void bubbleSort(List *L);                             //* Sắp xếp nổi bọt
void insertionSort(List *L);                          //* Sắp xếp chèn
void heaplify(int i,int n,List *L);                   //* Biến mảng thành cây nhị phân heap
void heapSort(List *L);                               //* Sắp xếp cây nhị phân
void shellSort(List *L);                              //* Sắp xếp shell (cải tiến sắp xếp chèn)
void quickSort(List *L,int start,int end);            //* Sắp xếp nhanh
void merge(List *L,int left,int mid,int right);       //* gộp mảng cho sắp xếp gộp
void mergeSort(List *L,int start,int end);            //* Sắp xếp gộp


void swap(int *a,int *b){
    int temp = *a;
    *a = *b;
    *b = temp;
}
void interchangeSort(List *L){
    for (int i = 0; i < L->Size - 1; i++){    
        for (int j = i + 1; j < L->Size; j++){
            if(L->Elements[i] > L->Elements[j]){
                swap(&L->Elements[i],&L->Elements[j]);
            }
        }
        
    }   
}
void selectionSort(List *L){ 
    for(int i = 0 ; i < L->Size - 1; i++){
        int min = i;
        for (int j = i + 1; j < L->Size; j++){
            if(L->Elements[min] > L->Elements[j]){
                min = j;
            }
        }
        if(min != i){
            swap(&L->Elements[min],&L->Elements[i]);
        }
    } 
}
void bubbleSort(List *L){
    for (int i = 0; i < L->Size; i++){
        for (int j = L->Size - 1; j >= 0; j--){
            if(j > i){
                if(L->Elements[j] < L->Elements[j-1]){
                    swap(&L->Elements[j],&L->Elements[j-1]);
                }
            }
        }
    }
}
void insertionSort(List *L){
    int x;
    int pos;
    for (int i = 1; i < L->Size; i++){
        pos = i - 1;
        x = L->Elements[i];
        while (pos >= 0 && L->Elements[pos] > x){
            L->Elements[pos + 1] = L->Elements[pos];
            pos--;
        }
        L->Elements[pos+1] = x;
    }
}
void heaplify(int i,int n,List *L){
    while (i <= (n / 2) - 1){
        int left = (2 * i) + 1;
        int right = (2 * i) + 2;
        int max = left;
        if(right < n && L->Elements[right] > L->Elements[max]){
            max = right;
        }
        if(L->Elements[i] < L->Elements[max]){
            swap(&L->Elements[i],&L->Elements[max]);
        }
        i = max;
    }   
}
void heapSort(List *L){
    for(int i = (L->Size - 1) / 2; i >= 0 ; i--){
        heaplify(i,L->Size,L);
    } 
    for(int i = L->Size - 1 ; i >= 0 ; i--){
        swap(&L->Elements[0],&L->Elements[i]);
        heaplify(0,i,L);
    }
}
void shellSort(List *L){
    int x,pos;
    int divide = 2; // có thể thay đổi vách chia
    for(int h = L->Size / divide; h > 0 ; h /= divide){
        for(int i = h ; i < L->Size ; i++){
            x = L->Elements[i];
            pos = i - h;
            while (pos >= 0 && L->Elements[pos] > x){
                L->Elements[pos + h] = L->Elements[pos];
                pos -= h;
            }
            L->Elements[pos+h] = x;
        }
    }
}
void quickSort(List *L,int start,int end){
    int pivot = L->Elements[(start + end) / 2]; // tuỳ chọn pivot
    int left = start;
    int right = end;
    while(left <= right){
        while(L->Elements[left] < pivot){
            left++;
        }
        while(L->Elements[right] > pivot){
            right--;
        }
        if(left <= right){
            swap(&L->Elements[left],&L->Elements[right]);
            left++;
            right--;
        }
    }
    if(right > start){
        quickSort(L,start,right);
    }
    if(left < end){
        quickSort(L,left,end);
    }
}
void merge(List *L,int left,int mid,int right){
    int n1 = mid - left + 1;
    int n2 = right - mid;
    int M1[n1],M2[n2];
    for (int i = 0; i < n1; i++){
        M1[i] = L->Elements[left + i];
    }
    for (int i = 0; i < n2; i++){
        M2[i] = L->Elements[mid + 1 + i];
    }
    int i = 0;// mảng R
    int j = 0;// mảng Q
    int k = left;
    while (i < n1 && j < n2){
        if (M1[i] <= M2[j]){
            L->Elements[k] = M1[i];
            i++;
        }
        else{
            L->Elements[k] = M2[j];
            j++;
        }
        k++;
    }
    while (i < n1){
        L->Elements[k] = M1[i];
        i++;
        k++;
    }
    while (j < n2){
        L->Elements[k] = M2[j];
        j++;
        k++;
    }
}
void mergeSort(List *L,int start,int end){
    if(start < end){
        int half = start + ((end - start) / 2);
        mergeSort(L,start,half);
        mergeSort(L,half + 1,end);
        merge(L,start,half,end);
    }
}