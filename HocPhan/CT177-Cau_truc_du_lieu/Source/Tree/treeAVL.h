#include <stdio.h>
#include <stdlib.h>

#define LH -1   //? Cây con trái cao hơn
#define EH 0    //? Hai cây con bằng nhau
#define RH 1    //? Cây con phải cao hơn
struct AVLNode{
    char balFactor; //! chỉ số căn bằng
    int data;
    struct AVLNode *Left;
    struct AVLNode *Right;
};
typedef struct AVLNode *AVLTree;

void makeNullAVLTree(AVLTree *root);              //* tạo rỗng AVLTree
int insertAVLNode(int x,AVLTree *root);          //* chèn AVLNode vào AVLTree
AVLTree createAVLTree();                          //* tạo AVLTree
void NLR(AVLTree root);                           //* duyệt tiền tự
void LNR(AVLTree root);                           //* duyệt trung tự
void LRN(AVLTree root);                           //* duyệt hậu tự

void rorateLL(AVLTree *root);                     //* cân bằng Left-Left
void rorateLR(AVLTree *root);                     //* cân bằng Left-Right
void rorateRR(AVLTree *root);                     //* cân bằng Right-Right
void rorateRL(AVLTree *root);                     //* cân bằng Right-Left
int balanceLeft(AVLTree *root);                   //* cân bằng tự động trái
int balanceRight(AVLTree *root);                  //* cân bằng tự động phải

void makeNullAVLTree(AVLTree *root){
    (*root) = NULL;
}
int insertAVLNode(int x,AVLTree *root){
    AVLTree T = (*root);
    int res;
    if(T != NULL){
        if(T->data == x)
            return 0;
        else if(T->data > x){
            res = insertAVLNode(x,&(*root)->Left);
            if(res < 2)
                return res;
            switch (T->balFactor){
                case RH: T->balFactor = RH;     return 1; break;
                case EH: T->balFactor = LH;     return 2; break;
                case LH: balanceLeft(&(*root)); return 1; break;
            }
        }
        else{
            res = insertAVLNode(x,&(*root)->Right);
            if(res < 2)
                return res;
            switch (T->balFactor){
                case LH: T->balFactor = EH;      return 1; break;
                case EH: T->balFactor = RH;      return 2; break;
                case RH: balanceRight(&(*root)); return 1; break;
            }
        }
    }
    else{
        (*root) = (struct AVLNode*)malloc(sizeof(struct AVLNode));
        if((*root) == NULL){
            return -1;
        }
        (*root)->data = x;
        (*root)->balFactor = EH;
        (*root)->Left = (*root)->Right = NULL;
        return 2;
    }
}
AVLTree createAVLTree(){
    AVLTree root;
    int n;
    scanf("%d",&n);
    makeNullAVLTree(&root);
    int x;
    for (int i = 0; i < n; i++){
        scanf("%d",&x);
        insertAVLNode(x,&root);
    }
    return root;
}
void NLR(AVLTree root){
    if(root != NULL){
        printf("%d ",root->data);
        NLR(root->Left);
        NLR(root->Right);
    }
}
void LNR(AVLTree root){
    if(root != NULL){
        LNR(root->Left);
        printf("%d ",root->data);
        LNR(root->Right);
    }
}
void LRN(AVLTree root){
    if(root != NULL){
        LRN(root->Left);
        LRN(root->Right);
        printf("%d ",root->data);
    }
}

void rorateLL(AVLTree *root){
    //* Left-Left => quay phải
    AVLTree T = *root;
    AVLTree T1 = T->Right;
    
    T->Left = T1->Right;
    T1->Right = T;

    switch (T1->balFactor){
        case LH: T->balFactor = EH; T1->balFactor = EH; break;
        case EH: T->balFactor = LH; T1->balFactor = RH; break;
    }
    (*root) = T1;
}
void rorateLR(AVLTree *root){
    AVLTree T = *root;
    AVLTree T1 = T->Left;
    AVLTree T2 = T1->Right;

    T->Left = T2->Right;
    T2->Right = T;
    T1->Right = T2->Left;
    T2->Left = T1;

    switch (T2->balFactor){
        case LH: T->balFactor = RH; T1->balFactor = EH; break;
        case EH: T->balFactor = EH; T1->balFactor = EH; break;
        case RH: T->balFactor = EH; T1->balFactor = LH; break;
    }
    T2->balFactor = EH;
    (*root) = T2;
}
void rorateRR(AVLTree *root){
    //* Right-Right => quay trái 
    AVLTree T = *root;
    AVLTree T1 = T->Right;
    
    T->Right = T1->Left;
    T1->Left = T;

    switch (T1->balFactor){
        case RH: T->balFactor = EH; T1->balFactor = EH; break;
        case EH: T->balFactor = RH; T1->balFactor = LH; break;
    }
    (*root) = T1;
}
void rorateRL(AVLTree *root){
    AVLTree T = *root;
    AVLTree T1 = T->Right;
    AVLTree T2 = T1->Left;

    T->Right = T2->Left;
    T2->Left = T;
    T1->Left = T2->Right;
    T2->Right = T1;

    switch (T2->balFactor){
        case RH: T->balFactor = LH; T1->balFactor = EH; break;
        case EH: T->balFactor = EH; T1->balFactor = EH; break;
        case LH: T->balFactor = EH; T1->balFactor = RH; break;
    }
    T2->balFactor = EH;
    (*root) = T2;
}
int balanceLeft(AVLTree *root){
    AVLTree T = *root;
    AVLTree T1 = T->Left;
    
    switch (T1->balFactor){
        case LH: rorateLL(&(*root)); return 2; break;
        case EH: rorateLL(&(*root)); return 1; break;
        case RH: rorateLR(&(*root)); return 2; break;
    }
    return 0;
}
int balanceRight(AVLTree *root){
    AVLTree T = *root;
    AVLTree T1 = T->Right;

    switch (T1->balFactor){
        case LH: rorateRL(&(*root)); return 2; break;
        case EH: rorateRR(&(*root)); return 1; break;
        case RH: rorateRR(&(*root)); return 2; break;
    }
    return 0;
}