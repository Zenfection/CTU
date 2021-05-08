#include <stdlib.h>
#include <string.h>
#include <ctype.h>
struct NODE{
    char Word;
    struct NODE *Next;
};
typedef struct NODE Node;
typedef struct{
    Node *Head;
    Node *Tail;
    int Size;
}Sentence;

void makeNullSentence(Sentence *S);                         //* tạo rỗng câu
void displaySentence(Sentence S);                           //* hiển thị câu
Node *createNode(char c);                                   //* tạo một node với word
void insertSentence_Frist(Node *newNode,Sentence *S);       //* thêm một node vào đầu danh sách
void insertSentence_End(Node *newNode,Sentence *S);         //* thêm một node vào cuối danh sách
void insertSentence_byPos(int p,Node *newNode,Sentence *S); //* chèn một node vào vị trí p trong danh sách
void inputSentence(Sentence *S);                            //* hàm thêm n node vào trong danh sách
int memberSentence(char x,Sentence S);                      //* kiểm tra x có trong danh sách 
int locateSentence(char x,Sentence S);                      //* tìm vị trí node chứa x         
void deleteSentence_byValue(char x,Sentence *S);            //* xoá node chứa x trong danh sách
void deleteSentence_byPos(int p,Sentence *S);               //* xoá node vị trí  p trong danh sách
void deleteSentence_byNode(Node *newNode,Sentence *S);      //* xoá một node trong danh sách
void deleteWhiteSpace(Sentence *S);                         //* xoá khoảng trắng dư thừa
void normalizeSentence(Sentence *S);                        //* chuẩn hoá câu


void makeNullSentence(Sentence *S){
    S->Head = NULL;
    S->Tail = NULL;
    S->Size = 0;
}
void displaySentence(Sentence S){
    Node *temp = S.Head;
    while(temp != NULL){
        printf("%c",temp->Word);
        temp = temp->Next;
    }
    printf("Size = %d",S.Size);
    printf("\n");
}
Node *createNode(char c){
    Node *newNode = (Node *)malloc(sizeof(Node));
    newNode->Word = c;
    newNode->Next = NULL;
    return newNode;
}
void insertSentence_Frist(Node *newNode,Sentence *S){
    if(S->Head == NULL){
        S->Head = newNode;
        S->Tail = newNode;
    }
    else{
        newNode->Next = S->Head;
        S->Head = newNode;
    }
    S->Size++;
}
void insertSentence_End(Node *newNode,Sentence *S){
    if(S->Head == NULL){
        S->Head = newNode;
        S->Tail = newNode;
    }
    else{
        S->Tail->Next = newNode;
        S->Tail=newNode;
        newNode->Next = NULL;
    }
    S->Size++;
}
void insertSentence_byPos(int p,Node *newNode,Sentence *S){
    if(p < 1 || S->Head == NULL){
        insertSentence_Frist(newNode,S);
    }
    else if(p >= S->Size){
        insertSentence_End(newNode,S);
    }
    else{
        Node *temp = S->Head;
        int i = 0;
        while(temp != NULL){
            if(p - 1 == i){
                newNode->Next = temp->Next;
                temp->Next = newNode;
                S->Size++;
                return;
            }
            i++;
            temp = temp->Next;
        }
    }
}
void inputSentence(Sentence *S){
    char c[100];
    fgets(c,100,stdin);
    int len = strlen(c);
    Node *temp;
    for(int i = 0 ; i < strlen(c) ; i++){
        temp = createNode(c[i]);
        insertSentence_byPos(i,temp,S);
    }
}                               
int memberSentence(char x,Sentence S){
    Node *temp = S.Head;
    while (temp != NULL){
        if(temp->Word == x){
            return 1;
        }
        temp = temp->Next;
    }
    return 0;
}                             
int locateSentence(char x,Sentence S){
    Node *temp = S.Head;
    int i = 0;
    while (temp != NULL){
        if(temp->Word == x){
            return i;
        }
        else{
            i++;
        }
        temp = temp->Next;
    }
    return -1;
}
void deleteSentence_byPos(int p,Sentence *S){
    Node *temp = S->Head;
    Node *prev = NULL;
    int i = 0;
    while (temp != NULL) {
        if(p == i){
            if (prev==NULL) {
                S->Head=temp->Next;
            }
            else{
                prev->Next=temp->Next;
            }
            S->Size--;
            return;
        }
        else{
            i++;
        }
        prev = temp;
        temp = temp->Next;
    }     
}                                 
void deleteSentence_byValue(char x,Sentence *S){
    Node *temp = S->Head;
    int i = 0;
    while (temp != NULL){
        if(temp->Word == x){
            deleteSentence_byPos(i,S);
        }
        else{
            i++;
        }
        temp = temp->Next;
    }
}                                 
void deleteSentence_byNode(Node *newNode,Sentence *S){
    int i = 0;
    Node *temp = S->Head;
    while (temp != NULL){
        if(newNode == temp){
            deleteSentence_byPos(i,S);
        }
        else{
            i++;
        }
        temp = temp->Next;
    }
}
void deleteWhiteSpace(Sentence *S){
    Node *temp = S->Head;
    while(isspace(temp->Word)){
        deleteSentence_byNode(temp,S);
        temp = temp->Next;
    }
    while(temp != NULL){
        if(isspace(temp->Word) && temp->Next != NULL){
            if(isspace(temp->Next->Word)){
                deleteSentence_byNode(temp,S);
            }
        }
        temp = temp->Next;
    }
}      
void normalizeSentence(Sentence *S){
    deleteWhiteSpace(S);
    Node *temp = S->Head;
    if(islower(temp->Word)){
        temp->Word -= 32;
    }
    temp = temp->Next;
    while (temp != NULL){
        while(!isspace(temp->Word)){
            if(isupper(temp->Word)){
                temp->Word += 32;
            }
            temp = temp->Next;
        }
        if(isspace(temp->Word) && temp->Next != NULL){
            temp = temp->Next;
            if(islower(temp->Word)){
                temp->Word -= 32;
            }
        }
        temp = temp->Next;
    }
}