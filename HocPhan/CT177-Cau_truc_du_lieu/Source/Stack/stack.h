#include <stdio.h>
#define Max_length 50
typedef struct{
    int Elements[Max_length];
    int Top;
}Stack;
void makeNullStack(Stack *S);               //* tạo ngăn xếp rỗng
void displayStack(Stack S);                 //* hiển thị ngăn xếp
void inputStack(int n,Stack *S);            //* thêm n phần tử vào ngăn xếp
void insertStack(int x,int p,Stack *L);     //* thêm x tại vị trí p vào ngăn xếp
void deleleStack_byPos(int p,Stack *S);     //* xoá tại vị trí p trong ngăn xếp
void deleteStack_byValue(int x,Stack *S);      //* xoá phần tử x trong ngăn xếp
int locateStack(int x,Stack S);             //* trả về vị trí đầu tiên của x trong ngăn xếp
int memberStack(int x,Stack S);             //* kiểm tra x có trong ngăn xếp
void optimizeStack(Stack *S);               //* tối ưu ngăn xếp (1 2 1 -> 1 2)
void changeStack(Stack S1,Stack *S);        //* chuyển ngăn xếp qua ngăn xếp mới
void mergeList(Stack S1,Stack S2,Stack *S); //* gộp 2 ngăn xếp thành 1 ngăn xếp   
void filter_evenNumber(Stack S1,Stack *S);  //* lọc phần tử chẳn qua ngăn xếp mới
void filter_oddNumber(Stack S1,Stack *S);   //* lọc phần tử lẻ qua ngăn xếp mới 
double averageStack(Stack S);               //* tính trung bình cộng phần tử trong ngăn xếp

void makeNullStack(Stack *S){
    S->Top = Max_length;
}
void displayStack(Stack S){
    for(int i = S.Top ; i < Max_length ; i++){
        printf("%d ",S.Elements[i]);
    }
}
void inputStack(int n,Stack *S){
    for(int i = 0; i < n; i++){
        scanf("%d",&S->Elements[S->Top-1]);
        S->Top--;
    }
}
void insertStack(int x,int p,Stack *L){
    L->Elements[p] = x;
    L->Top--;
}
void deleleStack_byPos(int p,Stack *S){
    for(int i = p; i > S->Top; i--){
        S->Elements[i] = S->Elements[i-1]; 
    }
    S->Top++;
}
void deleteStack_byValue(int x,Stack *S){
    for(int i = S->Top ; i < Max_length ; i++){
        if(S->Elements[i] == x){
            deleleStack_byPos(i,S);
        }
    }
}
int locateStack(int x,Stack S){
    for(int i = S.Top ; i < Max_length ; i++){
        if(S.Elements[i] == x){
            return i;
        }
    }
    return -1;
}
int memberStack(int x,Stack S){
    if(locateStack(x,S) != -1){
        return 1;
    }
    return 0;
}
void optimizeStack(Stack *S){
    int i = Max_length - 1;
    int j;
    while(i >= S->Top){
        j = i - 1;
        while (j >= S->Top){
            if(S->Elements[i] == S->Elements[j]){
                deleleStack_byPos(j,S);
            }
            else{
                j--;
            }
        }
        i--;
    }
}
void changeStack(Stack S1,Stack *S){
    int size = Max_length;
    int i = Max_length - S1.Top;
    while (i > 0){
        insertStack(S1.Elements[size - 1],S->Top - 1,S);
        size--;
        i--;
    }
}
void mergeList(Stack S1,Stack S2,Stack *S){
    changeStack(S1,S);
    changeStack(S2,S);
}
void filter_evenNumber(Stack S1,Stack *S){
    int j = S->Top - 1;
    int size = Max_length - S1.Top;
    for(int i = 0 ; i < size ; i++){
        if(S1.Elements[j] % 2 == 0){
            insertStack(S1.Elements[j],S->Top - 1,S);
        }
        j--;
    }
   
}
void filter_oddNumber(Stack S1,Stack *S){
    int j = S->Top - 1;
    int size = Max_length - S1.Top;
    for (int i = 0; i < size; i++){
        if(S1.Elements[j] % 2 != 0){
            insertStack(S1.Elements[j],S->Top - 1,S);
        }
        j--;
    }   
}
double averageStack(Stack S){
    int size = Max_length - S.Top;
    double sum = 0;
    double result;
    int j = S.Top;
    for (int i = 0; i < size; i++){
        sum += S.Elements[j];
        j++;
    }
    result = sum / size;
    return result;
}