### 1. Xoá phần tử trong mảng (Delete element from Array)

```c
#include <stdio.h>
void input_array(int M[],int n);
void delete_array(int M[],int n,int pos);
int main(int argc, char const *argv[]){
    int n,pos;
    printf("Enter the number of elements = ");
    scanf("%d",&n);
    int M[n];
    input_array(M,n);
    printf("Enter number position you want delete : ");
    scanf("%d",&pos);
    delete_array(M,n,pos);
    return 0;
}
void input_array(int M[],int n){
    for (int i = 0; i < n; i++){
        scanf("%d",&M[i]);
    }
}
void delete_array(int M[],int n,int pos){
    if(pos>=n+1)
        printf("Deletion not possible");
    else{
        for (int i = pos-1; i < n-1; i++){
            M[i]=M[i+1];
        }
    }
    printf("Array after delete : ");
    for (int i = 0; i < n-1; i++){
        printf("%d ",M[i]);
    }
}
```

| Input                | Output |
| -------------------- | ------ |
| n=3<br>2 44 5<br>x=5 | 2 44   |

---

### 2.Phần tử lớn nhất và nhỏ nhất trong mảng (Maxium and Minimum number is an Array)

```c
#include <stdio.h>
void input_array(int M[],int n);
int max_array(int M[],int n);
int min_array(int M[],int n);
int main(int argc, char const *argv[]){
    int n;
    printf("Enter the number of elements = ");
    scanf("%d",&n);
    int M[n];
    printf("Enter %d numbers : \n",n);
    input_array(M,n);
    int min=M[0],max=M[0],lo_min,lo_max;
    for (int i = 1; i < n; i++){
        if(max<M[i]){
            max=M[i];
            lo_max=i+1;
        }
        if(min>M[i]){
            min=M[i];
            lo_min=i+1;
        }
    }
    printf("Maximum number at locate %d, it's value = %d\n",lo_max,max);
    printf("Minimum number at locate %d, it's value = %d\n",lo_min,min);
    return 0;
}
void input_array(int M[],int n){
    for (int i = 0; i < n; i++){
        scanf("%d",&M[i]);
    }
}
```

| Input           | Output                                    |
| --------------- | ----------------------------------------- |
| 4<br>4  9 53  6 | Min: locate 1 is 4<br>Max: locate 3 is 53 |

---

### 3.Đảo ngược mảng

```c
#include <stdio.h>
void input_array(int M[],int n);
void reserve_array(int M[],int N[],int n);
int main(int argc, char const *argv[]){
    int n;
    printf("Enter the number of elements = ");
    scanf("%d",&n);
    int M[n],N[n];
    printf("Enter %d numbers : \n",n);
    input_array(M,n);
    reserve_array(M,N,n);
    printf("Reverse array is : ");
    for (int i = 0; i < n; i++){
        printf("%d ",N[i]);
    }
    return 0;
}
void input_array(int M[],int n){
    for (int i = 0; i < n; i++){
        scanf("%d",&M[i]);
    }
}
void reserve_array(int M[],int N[],int n){
    for (int i = 0; i < n; i++){
        N[n-i-1]=M[i];
    }
}
```

| Input      | Output |
| ---------- | ------ |
| 3<br>1 2 3 | 3 2 1  |

---

### 4. Tổng các số âm, tổng các số dương, trung bình các số trong mảng (Sum of negative & positive and Average on Array)

```c
#include <stdio.h>
void input_array(int M[],int n);
int main(int argc, char const *argv[]){
    int n;
    printf("Enter the number of elements = ");
    scanf("%d",&n);
    int M[n];
    printf("Enter %d numbers : \n",n);
    input_array(M,n);
    int sum_negative=0,sum_positive=0;
    for (int i = 0; i < n; i++){
        if(M[i]<0)
            sum_negative+=M[i];
        else
            sum_positive+=M[i];
    }
    float average = (sum_positive+sum_negative)*1.0/n;
    printf("Sum of negative numbers = %d\n",sum_negative);
    printf("Sum of positive numbers = %d\n",sum_positive);
    printf("Average of all input numbers = %f\n",average);
    return 0;
}
void input_array(int M[],int n){
    for (int i = 0; i < n; i++){
        scanf("%d",&M[i]);
    }
}
```

| Input          | Output                                                         |
| -------------- | -------------------------------------------------------------- |
| 4<br>4 -7 -2 6 | sum of negative = -9<br>sum of positive = 10<br>Average = 0.25 |

---

### 5.Xoá số đã cho trong mảng (Delete given number from Array)

```c
#include <stdio.h>
void input_array(int M[],int n);
void delete_array(int M[],int n,int pos);
int main(int argc, char const *argv[]){
    int n,x;
    printf("Enter the number of elements = ");
    scanf("%d",&n);
    int M[n];
    printf("Enter %d numbers : \n",n);
    input_array(M,n);
    printf("Enter number you want delete on Array = ");
    scanf("%d",&x);
    int found=0;
    for (int i = 0; i < n; i++){
        if(M[i]==x){
            found++;
            delete_array(M,n,i);
        }  
    }
    for (int i = 0; i < n-found; i++){
        printf("%d ",M[i]);
    }
    return 0;
}
void input_array(int M[],int n){
    for (int i = 0; i < n; i++){
        scanf("%d",&M[i]);
    }
}
void delete_array(int M[],int n,int pos){
    if(pos>=n+1)
        printf("Deletion not possible");
    else{
        for (int i = pos; i < n-1; i++){
            M[i]=M[i+1];
        }
    }
}
```

| Input               | Output  |
| ------------------- | ------- |
| 5<br>1 7 6 8 4<br>8 | 1 7 6 4 |

---

### 6. Thực hiện bảng hàng đợi dùng mảng (Implement a queue using Array)

```c
#include <stdio.h>
#include <stdlib.h>

int rear=-1;
int front=-1;
int M[1000];

void insert();
void display();
void deleteElement();
int main(int argc, char const *argv[]){
    int choice;
    printf("1.Insert element to queue \n");
    printf("2.Delete element from queue \n");
    printf("3.Display all elements of queue \n");
    printf("4.Quit \n");
    while (1){
        printf("Enter your choice : ");
        scanf("%d",&choice);
        switch (choice){
            case 1:insert();break;
            case 2:deleteElement();break;
            case 3:display();break;
            case 4:exit(1);
            default:
                printf("Wrong choice \n");
        }
    }
    return 0;
}
void insert(){
    int item;
    if (front==-1){
        front=0;
    }
    printf("Enter the number you want insert : ");
    scanf("%d",&item);
    rear+=1;
    M[rear]=item;
}
void deleteElement(){
    if (front == -1 || front > rear){
        printf("Queue Underflow \n");
        return;
    }
    else{
        printf("Element deleted from queue is : %d\n", M[front]);
        front = front + 1;
    }
    printf("Delete Successful!\n");
}
void display(){
    if(front==-1)
        printf("Queue is empty");
    else{
        for (int i = front; i <= rear; i++){
            printf("Number %d = %d\n",i+1,M[i]);
        }
    }
}
```

---

### 7. In phần tử xen kẻ trong mảng (Print Alternate Elements)

```c
#include <stdio.h>
void input_array(int M[],int n);
int main(int argc, char const *argv[]){
    int n;
    printf("Enter the number of elements = ");
    scanf("%d",&n);
    int M[n];
    printf("Enter %d numbers : \n",n);
    input_array(M,n);
    printf("Alternate elements : ");
    for (int i = 0; i < n; i+=2){
        printf("%d ",M[i]);
    }
    return 0;
}
void input_array(int M[],int n){
    for (int i = 0; i < n; i++){
        scanf("%d",&M[i]);
    }
}
```

| Input                            | Output        |
| -------------------------------- | ------------- |
| 10<br>1 4 55 66 22 0 76 11 23 78 | 1 55 22 76 23 |

---

### 8.Sắp xếp tăng dần và  giảm dần trong mảng  (Sort Array in Ascecding&Descending Order)

```c
#include <stdio.h>
void input_array(int M[],int n);
void outout_array(int M[],int n);
void sort_ascending(int M[],int n);
void sort_descending(int M[],int n);
int main(int argc, char const *argv[]){
    int n;
    printf("Enter the number of elements : ");
    scanf("%d",&n);
    int M[n];
    printf("Enter %d numbers : \n",n);
    input_array(M,n);
    printf("Sort Ascending Array : ");
    sort_ascending(M,n);outout_array(M,n);
    printf("\n");
    printf("Sort Descending Array : ");
    sort_descending(M,n);outout_array(M,n);
    return 0;
}
void input_array(int M[],int n){
    for (int i = 0; i < n; i++){
        scanf("%d",&M[i]);
    }
}
void outout_array(int M[],int n){
    for (int i = 0; i < n; i++){
        printf("%d ",M[i]);
    }
}
void sort_ascending(int M[],int n){
    for (int i = 0; i < n; i++){
        for (int j = i+1; j < n; j++){
            if(M[i]>M[j]){
                M[i]^=M[j];
                M[j]^=M[i];
                M[i]^=M[j];
            }                
        }    
    }
}
void sort_descending(int M[],int n){
    for (int i = 0; i < n; i++){
        for (int j = i+1; j < n; j++){
            if(M[i]<M[j]){
                M[i]^=M[j];
                M[j]^=M[i];
                M[i]^=M[j];
            }
        }
    }
}
```

| Input        | Output                                      |
| ------------ | ------------------------------------------- |
| 4<br>4 5 7 1 | ascending : 1 4 5 7<br>descending : 7 5 4 1 |

---

### 9.Sắp xếp theo chữ cái (Sort name Alphabetically)

```c
#include <stdio.h>
#include <string.h>
void sort_alphabet(char name[100][100],int n);
int main(int argc, char const *argv[]){
    int n;
    printf("Enter the number of names : ");
    scanf("%d",&n);
    char name[100][100];
    printf("Enter %d names : \n",n);
    for (int i = 0; i < n; i++){
        scanf("%s",&name[i][0]);
    }
    sort_alphabet(name,n);
    printf("Sort names Alphabetically : ");
    for (int i = 0; i < n; i++){
        printf("%s ",name[i]);
    }
    return 0;
}
void sort_alphabet(char name[100][100],int n){
    char temp[n];
    for (int i = 0; i < n; i++){
        for (int j = i+1; j < n; j++){
               if(strcmp(name[i], name[j])>0){
                    strcpy(temp,name[i]);
                    strcpy(name[i],name[j]);
                    strcpy(name[j],temp);
               }
           }   
    }
}
```

| Input          | Output         |
| -------------- | -------------- |
| mark luke john | john luke mark |

---

### 10. Tìm một phần tử trong mảng (Search an Element in Array)

```c
#include <stdio.h>
void input_array(int M[],int n);
int find_locate_array(int M[],int n,int x);
int main(int argc, char const *argv[]){
    int n,x;
    printf("Enter the number of elements : ");
    scanf("%d",&n);
    int M[n];
    printf("Enter %d numbers : \n",n);
    input_array(M,n);
    printf("Enter the number you want find : ");
    scanf("%d",&x);
    if(find_locate_array(M,n,x)==0)
        printf("%d doesn't exist in Array",x);
    else
        printf("Number found at the locate : %d",find_locate_array(M,n,x));
    return 0;
}
void input_array(int M[],int n){
    for (int i = 0; i < n; i++){
        scanf("%d",&M[i]);
    }
}
int find_locate_array(int M[],int n,int x){
    int locate;
    for (int i = 0; i < n; i++){
        if(M[i]==x)
            locate=i;
    }
    return locate+1;
}
```

| Input          | Output           |
| -------------- | ---------------- |
| 4<br>4 5 12 80 | 80<br>locate : 4 |

---

### 11.Phép nhân ma trận (Matrix Multiplication)

```c

```

| Input                                                                                    | Output                        |
| ---------------------------------------------------------------------------------------- | ----------------------------- |
| Matrix 1: 3 3<br>1 2 0<br>0 1 1<br>2 0 1<br>Matrix 2: 3 3<br>1 1 2<br>2 1 1<br>1 2 1<br> | 5  3  4<br>3  3  2<br>3  4  5 |

---

### 12.Kiểm tra ma trận thưa (Check matrix is sqarse matrix)

**Ma trận thưa** (Sparse **Matrix**) **là ma trận** có số phần tử bằng 0 nhiều hơn số phần tử khác 0

```c
#include <stdio.h>
void input_matrix(int M[100][100],int row,int col);
int squares_matrix(int M[100][100],int row,int col);
int main(int argc, char const *argv[]){
    int row,col;
    printf("Enter the number of rows and columns : ");
    scanf("%d %d",&row,&col);
    int M[100][100];
    printf("Enter matrix : \n");
    input_matrix(M,row,col);
    if(squares_matrix(M,row,col))
        printf("The given matrix is sparse matrix");
    else
        printf("The given matrix is not a sparse matrix");
    return 0;
}
void input_matrix(int M[100][100],int row,int col){
    for (int i = 0; i < row; i++){
        for (int j = 0; j < col; j++){
            scanf("%d",&M[i][j]);
        }
        printf("\n");
    }
}
int squares_matrix(int M[100][100],int row,int col){
    int count=0;
    for (int i = 0; i < row; i++){
        for (int j = 0; j < col; j++){
        if(M[i][j]==0)
            count++;
        }
    }
    printf("There are %d number of zeros\n", count);
    if(count>(row*col)/2)
        return 1;
    else
        return 0;
}
```

| Input                          | Output                                                           |
| ------------------------------ | ---------------------------------------------------------------- |
| 3 3<br>4 8 0<br>0 0 3<br>0 0 1 | There are 5 number of zeros<br>The given matrix is sparse matrix |

---

### 13. Đổi ma trận tam giác (Change to triange matrix)

```c

```

| Input | Output |
| ----- | ------ |
|       |        |

---

### 14. Tính định thức ma trận (Determinant of matrix)

```c

```

| Input                          | Output    |
| ------------------------------ | --------- |
| n=3<br>1 5 9<br>7 3 5<br>2 4 8 | det = -28 |

---

### 15. Kiểm tra ma trận đơn vị (Check if Identity Matrix)

```c

```

| Input                          | Output                |
| ------------------------------ | --------------------- |
| 3 3<br>1 0 0<br>0 1 0<br>0 0 1 | It is identity matrix |

---

### 16. Mô phỏng Stack sử dụng mảng (Simulation Stack using Array)

```c

```

---

### 17. Chèn một phần tử trong mảng (Insert an element in an array)

```c

```

| Input                                     | Output       |
| ----------------------------------------- | ------------ |
| n=5<br>2 4 7 9 7<br>pos=3<br>value=45<br> | 2 4 45 7 9 7 |

---

### 18. Nghịch đảo của một ma trận (Inverse of a Matrix)

```c

```

| Input                           | Output                                                                             |
| ------------------------------- | ---------------------------------------------------------------------------------- |
| n=3<br>3 5 2 <br>1 5 8<br>3 9 2 | 0.705    -0.091    -0.341<br>-0.250   -0.000    0.250<br>0.680     0.136    -0.114 |

---

### 19. Ma trận kỳ ảo (Magic matrix)

```c

```

| Input                    | Output                                 |
| ------------------------ | -------------------------------------- |
| Enter Odd number : 3<br> | 08  01  06<br>03  05  07<br>04  09  02 |

---

### 20. Ma trận chuyển vị (Matrix Transpose)

```c

```

| Input                          | Output                        |
| ------------------------------ | ----------------------------- |
| 3 3<br>1 2 3<br>4 5 6<br>7 8 9 | 1  4  7<br>2  5  8<br>3  6  9 |

---

### 21. Chuẩn và vết của ma trận (Norm and Trace of Matrix)

```c

```

| Input                                 | Output                                           |
| ------------------------------------- | ------------------------------------------------ |
| 3  3<br>1  2  3<br>5  6  0<br>4  7  8 | normal of matrix = 14.28<br>trace of matrix = 15 |

---

### 22. In tất cả số không trùng nhau trong mảng số nguyên (Print all Distinct/Unique elements of an integer array)

```c

```

| Input                                     | Output           |
| ----------------------------------------- | ---------------- |
| size = 10<br>1  5  5  1  4  6  2  1  6  7 | 1  5  4  6  2  7 |

---

### 23. Loại bỏ số trong mảng trùng nhau (Remove Duplicate from Array)

```c

```

| Input                 | Output     |
| --------------------- | ---------- |
| 6<br>3  5  7  5  3  2 | 3  5  7  2 |

---

### 24. Kiểm tra ma trận vuông đối xứng (Check if square matrix is Symmetric)

```c

```

| Input                                | Output              |
| ------------------------------------ | ------------------- |
| 3<br>1  7  3<br>7  4  -5<br>3  -5  6 | Matrix is symmetric |

---

### 25. Tổng từng dòng trên Matrix

```c

```

| Input                                 | Output                                                     |
| ------------------------------------- | ---------------------------------------------------------- |
| 3 3<br>1  4  8<br>2  6  0<br>3  9  -2 | Sum of 1 row = 13<br>Sum of 2 row = 8<br>Sum of 3 row = 10 |
