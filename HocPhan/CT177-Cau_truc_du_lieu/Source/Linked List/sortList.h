void swap(int *a,int *b);                             //* hoán vị 2 số
void bubbleSort(List *L);                             //* Sắp xếp nổi bọt
void selectionSort(List *L);                          //* Sắp xếp chọn
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
void bubbleSort(List *L){
    Node *temp1  = L->Head;
    Node *temp2 = NULL;
    while (temp1 != NULL){
        temp2 = temp1->Next;
        while (temp2 != NULL){
            if(temp1->data > temp2->data){
                swap(&temp1->data,&temp2->data);
            }
            else{
                temp2 = temp2->Next;
            }
        }
        temp1 = temp1->Next;
    }
}
void selectionSort(List *L){
    Node *i = L->Head;
    Node *j;
    Node *min;
    while (i != NULL){
        min = i;
        j = i->Next;
        while (j != NULL){
            if(min->data > j->data){
                min = j;
            }
            j = j->Next;
        }
        if(min != i){
            swap(&min->data,&i->data);
        }
        i = i->Next;
    }
}
