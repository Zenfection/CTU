#include <stdio.h>
#include <stdlib.h>
struct NODE{
    int data;
    struct NODE* Next;
};
typedef struct NODE Node;
typedef struct{
    Node *Head;
    Node *Tail;
    int Size;
}List;

void makeNullList(List *L);                            //* tạo danh sách rỗng
void displayList(List L);                              //* hiển thị danh sách
Node *createNode(int data);                            //* tạo một node với phần tử 
void insertList_Frist(Node *newNode,List *L);          //* thêm một node vào đầu danh sách
void insertList_End(Node *newNode,List *L);            //* thêm một node vào cuối danh sách
void insertList_byPos(int p,Node *newNode,List *L);    //* chèn một node vào vị trí p trong danh sách
void inputList(int n,List *L);                         //* hàm thêm n node vào trong danh sách
int memberList(int x,List L);                          //* kiểm tra x có trong danh sách 
int locateList(int x,List L);                          //* tìm vị trí node chứa x         
void deleteList_byValue(int x,List *L);                //* xoá node chứa x trong danh sách
void deleteList_byPos(int p,List *L);                  //* xoá node vị trí  p trong danh sách
void deleteList_byNode(Node* newNode,List *L);         //* xoá một node trong danh sách
void optimizeList(List *L);                            //* tối ưu danh sách (1 2 1 -> 1 2)
int Find_Max(List L);                                  //* tìm số nhỏ nhất trong danh sách
int Find_Min(List L);                                  //* tìm số lớn nhất trong danh sách
void filter_evenNumber(List L1, List *L);              //* lọc chẳn qua danh sách mới
void filter_oddNumber(List L1, List *L);               //* lọc lẻ qua danh sách mới
double averageList(List L);                            //* tính trung bình các phần tử trong DS
void changeList(List L1,List *L);                      //* chuyển danh sách 1 qua danh sách 2
void mergeList(List L1,List L2,List *L);               //* gộp 2 danh sách thành 1 danh sách

void makeNullList(List *L){
    L->Head = NULL;
    L->Tail = NULL;
    L->Size = 0;
}
void displayList(List L){
    Node *temp = L.Head;
    while(temp != NULL){
        printf("%d ",temp->data);
        temp = temp->Next;
    }
    printf("\n");
    printf("Size = %d",L.Size);
    printf("\n");
}
Node *createNode(int x){
    Node *newnode = (Node *)malloc(sizeof(Node));
    newnode->data = x;
    newnode->Next = NULL;
    return newnode;
}
void insertList_Frist(Node *newNode,List *L){
    if(L->Head == NULL){
        L->Head = newNode;
        L->Tail = newNode;
    }
    else{
        newNode->Next = L->Head;
        L->Head = newNode;
    }
    L->Size++;
}
void insertList_End(Node *newNode,List *L){
    if(L->Head == NULL){
        L->Head = newNode;
        L->Tail = newNode;
    }
    else{
        L->Tail->Next = newNode;
        L->Tail=newNode;
        newNode->Next = NULL;
    }
    L->Size++;
}
void insertList_byPos(int p,Node *newNode,List *L){
    if(p < 1 || L->Head == NULL){
        insertList_Frist(newNode,L);
    }
    else if(p >= L->Size){
        insertList_End(newNode,L);
    }
    else{
        Node *temp = L->Head;
        int i = 0;
        while(temp != NULL){
            if(p - 1 == i){
                newNode->Next = temp->Next;
                temp->Next = newNode;
                L->Size++;
                return;
            }
            i++;
            temp = temp->Next;
        }
    }
}
int memberList(int x,List L){
    Node *temp = L.Head;
    while (temp != NULL){
        if(temp->data == x){
            return 1;
        }
        temp = temp->Next;
    } 
    return 0;
}
int locateList(int x,List L){
    Node *temp = L.Head;
    int i = 0;
    while (temp != NULL){
        if(temp->data = x){
            free(temp);
            return i;
        }
        else{
            i++;
        }
        temp = temp->Next;
    }
    free(temp);
    return -1;
}
void inputList(int n,List *L){
    int x;
    Node *temp;
    for (int i = 0; i < n; i++){
        scanf("%d",&x);
        temp = createNode(x);
        insertList_byPos(i,temp,L);
    }
}
void deleteList_byValue(int x,List *L){
    Node *temp = L->Head;
    int i = 0;
    while (temp != NULL){
        if(temp->data == x){
            deleteList_byPos(i,L);
        }
        else{
            i++;
        }
        temp = temp->Next;
    }  
}
void deleteList_byNode(Node* newNode,List *L){
    int i = 0;
    Node *temp = L->Head;
    while (temp != NULL){
        if(newNode == temp){
            deleteList_byPos(i,L);
        }
        else{
            i++;
        }
        temp = temp->Next;
    }
}
void deleteList_byPos(int p,List *L){
    Node *temp = L->Head;
    Node *prev = NULL;
    int i = 0;
    while (temp != NULL) {
        if(p == i){
            if (prev==NULL) {
                L->Head=temp->Next;
            }
            else{
                prev->Next=temp->Next;
            }
            L->Size--;
            return;
        }
        else{
            i++;
        }
        prev = temp;
        temp = temp->Next;
    }   
}
void optimizeList(List *L){
    Node *temp1 = L->Head;
    Node *temp2 = NULL;
    while (temp1->Next != NULL){
        temp2 = temp1->Next;
        while (temp2 != NULL){
            if(temp1->data == temp2->data){
                deleteList_byNode(temp2,L);
            }
            temp2 = temp2->Next;
        }
        temp1 = temp1->Next;
    }
}
int Find_Max(List L){
    Node *temp=L.Head;
    int max=temp->data;
    while (temp!=NULL) {
        if(max<temp->data){
            max=temp->data;
        }
        temp=temp->Next;
    }
    free(temp);
    return max;
}
int Find_Min(List L){
    Node *temp=L.Head;
    int min=temp->data;
    while (temp!=NULL) {
        if(min>temp->data){
            min=temp->data;
        }
        temp=temp->Next;
    }
    free(temp);
    return min;
}
void filter_evenNumber(List L1, List *L){
    Node *temp = L1.Head;
    int i = L->Size;
    while (temp != NULL){
        if(temp->data % 2 == 0){
            insertList_byPos(i,createNode(temp->data),L);
        }
        i++;
        temp = temp->Next;
    }
}
void filter_oddNumber(List L1, List *L){
    Node *temp = L1.Head;
    int i = L->Size;
    while (temp != NULL){
        if(temp->data % 2 != 0){
            insertList_byPos(i,createNode(temp->data),L);
        }
        i++;
        temp = temp->Next;
    }
}
double averageList(List L){
    Node *temp = L.Head;
    double result = 0;
    while (temp != NULL){
        result += temp->data;
        temp = temp->Next;
    }
    return result/L.Size; 
}
void changeList(List L1,List *L){
    Node *temp = L1.Head;
    int i = L->Size;
    while (temp != NULL){
        insertList_byPos(i,createNode(temp->data),L);
        i++;
        temp = temp->Next;
    }
    
}
void mergeList(List L1,List L2,List *L){
    changeList(L1,L);
    changeList(L2,L);
}