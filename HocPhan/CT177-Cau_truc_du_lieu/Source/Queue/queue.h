#include <stdio.h>
#define Max_length 50
typedef struct{
    int Elements[Max_length];
    int Front;
    int Rear;
}Queue;
void makeNullQueue(Queue *Q);                   //* tạo rỗng hàng đợi
void displayQueue(Queue Q);                    //* hiển thị hàng đợi
void inputQueue(int n,Queue *Q);                //* nhập n phần tử vào hàng đợi
void insertQueue(int x,int p,Queue *Q);         //* thêm x tại vị trí p vào hàng đợi
void deleteQueue_byPos(int p,Queue *Q);         //* xoá 1 phần tử bằng vị trí của hàng đợi
void deleteQueue_byValue(int x,Queue *Q);       //* xoá 1 phần tử bằng giá trị của hàng đợi
int locateQueue(int x,Queue *Q);                //* trả về vị trí x đầu trên trong hàng đợi

void makeNullQueue(Queue *Q){
    Q->Front = 0;
    Q->Rear = 0;
}
void displayQueue(Queue Q){
    for(int i = Q.Front ; i < Q.Rear ; i++){
        printf("%d ",Q.Elements[i]);
    }
}
void inputQueue(int n,Queue *Q){
    for (int i = 0; i < n; i++){
        scanf("%d",&Q->Elements[i]);
    }
    Q->Front = 0;
    Q->Rear = n;
}
void insertQueue(int x,int p,Queue *Q){
    if(p < 0 || p > Q->Rear){
        printf("Postion Invalid !!!");
    }
    else if(Q->Rear == Max_length){
        printf("Full Queue!!!");
    }
    else{
        Q->Elements[p] = x;
        Q->Rear++;
    }
}
int locateQueue(int x,Queue *Q){
    for(int i = Q->Front ; i < Q->Rear ; i++){
        if(Q->Elements[i] == x){
            return i;
        }
    }
    return -1;
}
void deleteQueue_byPos(int p,Queue *Q){
    for(int i = p ; i < Q->Rear ; i++){
        Q->Elements[i] = Q->Elements[i+1];
    }
    Q->Rear--;
}
void deleteQueue_byValue(int x,Queue *Q){
    int p = locateQueue(x,Q);
    deleteQueue_byPos(p,Q);
}
