#include <stdio.h>

#define Max_length 50
typedef struct{
    int Elements[Max_length];
    int Size;
}List;

void makeNullList(List *L);                 //* hàm tạo danh sách rỗng
void displayList(List L);                   //* hàm hiện thị danh sách
void InputList(int n,List *L);              //* hàm thêm n phần tử vào danh sách 
void deleteListbyID(int x, List *L);        //* hàm xoá phần tử x trong danh sách
void deleteListbyPos(int p,List *L);        //* hàm xoá vị trí p trong danh sách
int locateList(int x,List L);               //* hàm trả về vị trí đầu tiên của x trong danh sách
int memberList(int x,List L);               //* hàm kiểm tra x có trong danh sách
void optimizeList(List *L);                 //* hàm tối ưu danh sách (1 2 1 -> 1 2)
void insertList(int x,int p,List *L);       //* hàm thêm x tại vị trí p trong danh sách
void changeList(List L1,List *L);           //* hàm chuyển 1 danh sách qua danh sách mới
void mergeList(List L1,List L2,List *L);    //* gộp 2 danh sách vào 1 danh sách
void filter_evenNumber(List L1, List *L);   //* lọc phần tử chẳn qua 1 danh sách
void filter_oddNumber(List L1, List *L);    //* lọc phần tử lẻ qua 1 danh sách
double averageList(List L);                 //* tính trung bình các phần tử trong danh sách

void makeNullList(List *L){
    L->Size = 0;
}
void displayList(List L){
    for (int i = 0; i < L.Size; i++){
        printf("%d ",L.Elements[i]);
    }
}
void deleteListbyPos(int p,List *L){
    for(int i = p; i < L->Size - 1; i++){
        L->Elements[i] = L->Elements[i+1];
    }
    L->Size--;
}
void deleteListbyID(int x, List *L){
    for(int i = 0; i < L->Size; i++){
        if(L->Elements[i] == x){
            deleteListbyPos(i,L);
        }
    }
}
void InputList(int n,List *L){
    makeNullList(L);
    for(int i = 0; i < n ; i++){
        scanf("%d",&L->Elements[i]);
        L->Size++;
    }
}
int memberList(int x,List L){
    if(locateList(x,L) != 1){
        return 1;
    }
    return 0;
}
int locateList(int x,List L){
    for(int i = 0 ; i < L.Size ; i++){
        if(L.Elements[i] == x){
            return i;
        }
    }
    return -1;
}
void insertList(int x,int p,List *L){
    if(L->Size == Max_length){
        printf("Full List!!!");
    }
    else if(p < 0 || p > L->Size){
        printf("Position Invalid!!!");
    }
    else{
        for(int i = L->Size; i >= p ; i--){
            L->Elements[i]=L->Elements[i-1];
        }
        L->Size++;
        L->Elements[p] = x;
    }
}
void optimizeList(List *L){
    int  i = 0;
    int j;
    while (i != L->Size){
        j = i + 1;
        while (j != L->Size){
            if(L->Elements[i] == L->Elements[j]){
                deleteListbyPos(j,L);
            }
            else{
                j++;
            }
        }
        i++;
    }  
}
void changeList(List L1,List *L){
    for(int i = 0 ; i < L1.Size ; i++){
        insertList(L1.Elements[i],L->Size,L);
    }
}
void mergeList(List L1,List L2,List *L){
    changeList(L1,L);
    changeList(L2,L);
}
void filter_evenNumber(List L1,List *L){
    int k = 0;
    for(int i = 0 ; i < L1.Size; i++){
        if(L1.Elements[i] % 2 == 0){
            insertList(L1.Elements[i],k,L);
            k++;
        }
    }
}
void filter_oddNumber(List L1,List *L){
    int k = 0;
    for (int i = 0; i < L1.Size; i++){
        if(L1.Elements[i] % 2 != 0){
            insertList(L1.Elements[i],k,L);
            k++;
        }
    }
    
}
double averageList(List L){
    double result = 0;
    for (int i = 0; i < L.Size; i++){
        result += L.Elements[i];
    }
    return result/L.Size;
}