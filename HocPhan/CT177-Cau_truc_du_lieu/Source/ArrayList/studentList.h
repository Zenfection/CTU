#include <stdio.h>
#include <string.h>

#define Max_length 50
typedef struct{
    char ID[10], Name[50];
    float Point_LT;
    float Point_TH1;
    float Point_TH2;
}Student;
typedef struct{
    Student A[Max_length];
    int Size;
}List;

void makeNullList(List *L);                 //* khởi tạo danh sách rỗng
int findID(char x[10],List L);              //* Tìm vị trí Sinh Viên bằng ID
void add_EndList(Student s,List *L);        //* thêm Sinh Viên vào cuối danh sách
void inputList(int n,List *L);              //* nhập n sinh viên vào danh sách
void displayList(List L);                   //* hiển thị danh sách Sinh Viên
void makeNullList(List *L){
    for (int i = 0 ; i < 10 ; i++) {
        L->A[i].ID[9] = '\0';
    }
    for (int i = 0; i < 50; i++) {
        L->A[i].Name[49] = '\0';
    }
    L->A->Point_LT = 0;
    L->A->Point_TH1 = 0;
    L->A->Point_TH2 = 0;
    L->Size = 0;
}
void displayList(List L){
    //B1806972 - Hoang Minh - 5.00 - 2.50 - 2.00 - 9.50
    for(int i=0 ; i < L.Size ; i++){
        printf("%s - %s - %.2f - %.2f - %.2f\n",L.A[i].ID, L.A[i].Name, L.A[i].Point_LT, L.A[i].Point_TH1, L.A[i].Point_TH2);
    }
}
int findID(char x[10],List L){
    int i = 1;
    while (i <= L.Size){
        if(strcmp(L.A[i-1].ID,x) == 0){
            return i-1;
        }
        i++;
    }
    return -1;
}
void add_EndList(Student s, List *L){
    if (L->Size == 40) {
        printf("Error! Full List!!!");
        return;
    }
    int c = L->Size;
    int i = 0;
    while ((s.ID[i] != '\0') && (s.Name[i]!='\0')){
        L->A[c].ID[i] = s.ID[i];
        L->A[c].Name[i] = s.Name[i];
        i++;
    }
    L->A[c].Point_LT = s.Point_LT;
    L->A[c].Point_TH1 = s.Point_TH1;
    L->A[c].Point_TH2 = s.Point_TH2;
    
    L->Size++;
}
void inputList(int n,List *L){
    makeNullList(L);
    for (int i = 0; i < n; i++){
        printf("Enter ID%d : ",i); scanf("%s",&L->A[i].ID); fflush(stdin);
        printf("Enter Name%d : ",i); fgets(L->A[i].Name , 50 , stdin);
        int len1 = strlen(L->A[i].ID);
        int len2 = strlen(L->A[i].Name);
        L->A[i].ID[len1] = '\0';
        L->A[i].Name[len2 - 1] = '\0';
        printf("Enter Point LT : "); scanf("%f",&L->A[i].Point_LT);
        printf("Enter Point TH1 : "); scanf("%f",&L->A[i].Point_TH1);
        printf("Enter Point TH2 : "); scanf("%f",&L->A[i].Point_TH2);
        char id[10];
        strcpy(id,L->A[i].ID);
        if(findID(id,*L) == -1){
            add_EndList(L->A[i],L);
        }
    }
}
