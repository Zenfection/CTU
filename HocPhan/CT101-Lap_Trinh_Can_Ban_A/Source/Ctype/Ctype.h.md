# Ctype.h

## 1. Hàm `isalnum `

Hàm **kiểm tra xem ký tự đã truyền có phải là ký tự - số** hay không.

```c
#include <stdio.h>
#include <ctype.h>
int main(int argc, char const *argv[]){
       char c;
       printf("Enter any key : ");
       c=getchar();
       if (isalnum(c)){
           printf("|%c| is an alphanumeric",c);
       }
       else{
           printf("|%c| is not an alphanumeric",c);
       }
    return 0;
}
```

| Input                   | Output                                                                                                                        |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| <br>2<br>d<br>\t<br>" " | <br>\|2\| is an alphanumeric<br>\|d\| is an alphanumeric<br>\|        \|is not an alphanumeric<br>\| \|is not an alphanumeric |

| [Chạy thử]() |
| ------------ |

---

## 2. hàm `isalpha`

Hàm **void isalnum(int c)** kiểm tra xem ký tự đã truyền có phải là **ký tự** hay không

```c
#include <stdio.h>
#include <ctype.h>
int main(int argc, char const *argv[]){
       char c;
       printf("Enter any key : ");
       c=getchar();
       if (isalnum(c)){
           printf("|%c| is an alphabet",c);
       }
       else{
           printf("|%c| is not an alphabet",c);
       }
    return 0;
}
```

| Input                   | Output                                                                                                          |
| ----------------------- | --------------------------------------------------------------------------------------------------------------- |
| <br>2<br>d<br>\t<br>" " | <br>\|2\| is an alphabet<br>\|d\| is an alphabet<br>\|        \|is not an alphanbet<br>\|  \|is not an alphabet |

| [Chạy thử]() |
| ------------ |

---

## 3. Hàm `iscntrl`

Hàm **trả về giá trị khác 0** nếu *đối số* là một [**ký tự điều khiển**](https://daynhauhoc.com/t/wiki-cac-ky-tu-dieu-khien-va-ky-tu-dac-biet-trong-c-c/2295). Nếu không, **hàm trả về 0**

```c
#include <stdio.h>
#include <ctype.h>
int main(int argc, char const *argv[]){
   int i = 0, j = 0;
   char str1[] = "Learn \a code \t programing";
   char str2[] = "by \n Zen";
   // in chuỗi tới khi gặp ký tự \a
   while(!iscntrl(str1[i])) {
      putchar(str1[i]);
      i++;
   }
   // in chuỗi cho tới khi gặp ký tự \n
   while(!iscntrl(str2[j])) {
      putchar(str2[j]);
      j++;
   }
   return 0;
}
```

| Input | Output   |
| ----- | -------- |
| none  | Learn by |

| [Chạy thử]() |
| ------------ |

---

## 4. Hàm `isdigit`

Hàm này **kiểm tra** xem ký tự đã truyền có phải là **chữ số thập phân** không

```c
#include <stdio.h>
#include <ctype.h>
int main(int argc, char const *argv[]){
   char c1;
   printf("Enter the character : ");
   c1=getchar();
   if (isdigit(c1))
      printf("|%c| is digit",c1);
   else
      printf("|%c| is not digit",c1);
   return 0;
}
```

| Input      | Output                                   |
| ---------- | ---------------------------------------- |
| <br>h<br>2 | <br>\|h\| is not digit<br>\|2\| is digit |

| [Chạy thử]() |
| ------------ |

---

## 5. Hàm `isgraph`

Hàm **kiểm tra ký tự graphical** hay không

```c
#include <stdio.h>
#include <ctype.h>
int main(int argc, char const *argv[]){
   int var;
   printf("Enter the character : ");
   var=getchar();
   if (isgraph(var))
      printf("|%c| can be printed",var);
   else
      printf("|%c| can't be printed",var);
   return 0;
}
```

| Input              | Output                                                                      |
| ------------------ | --------------------------------------------------------------------------- |
| <br>3<br>h<br>'  ' | <br>\|3\| can be printed<br>\|h\| can be printed<br>\|  \| can't be printed |

| [Chạy thử]() |
| ------------ |

---

## 6. Hàm `islower`

Hàm **kiểm tra ký tự thường** hay không

```c
#include <stdio.h>
#include <ctype.h>
int main(int argc, char const *argv[]){
   char var;
   printf("Enter the character : ");
   var=getchar();
   if (islower(var))
      printf("|%c| is lowercase character",var);
   else
      printf("|%c| is not lowercase character",var);
   return 0;
}
```

| Input           | Output                                                                                                   |
| --------------- | -------------------------------------------------------------------------------------------------------- |
| <br>a<br>Q<br>3 | <br>\|a\| is lowercase character<br>\|Q\| is not lowercase character<br>\|3\| is not lowercase character |

| [Chạy thử]() |
| ------------ |

---

## 7. Hàm `isprint`

Hàm kiểm tra *đối số* là **ký tự có thể in được** hay không. 

```c
#include<stdio.h>
#include <ctype.h>
int main(int argc, char const *argv[]){
   char var;
   printf("Enter the character : ");
   var=getchar();
   if(isprint(var))
      printf("|%c| can be printed",var);
   else
      printf("|%c| can't be printed",var);
   return 0;
}
```

| Input                     | Output                                                                                                     |
| ------------------------- | ---------------------------------------------------------------------------------------------------------- |
| <br>3<br>k<br>' '<br>'\t' | <br>\|3\| can be printed<br>\|k\| can be printed<br>\|  \| can be printed<br>\|        \| can't be printed |

| [Chạy thử]() |
| ------------ |

---

## 8. Hàm `ispunct`

Hàm Kiểm **tra ký tự [punctuation](https://www.rung.vn/dict/en_vn/Punctuation_character)** 

```c
#include<stdio.h>
#include <ctype.h>
int main(int argc, char const *argv[]){
   char var;
   printf("Enter the character : ");
   var=getchar();
   if(ispunct(var))
      printf("|%c| is a punctuation character",var);
   else
      printf("|%c| is not a punctuation character",var);
   return 0;
}
```

| Input                    | Output                                                                                                                                                   |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <br>t<br>1<br>!<br>.<br> | <br>\|t\| is not a punctuation character<br>\|1\| is not a punctuation character<br>\|!\| is a punctuation character<br>\|.\| is a punctuation character |

| [Chạy thử]() |
| ------------ |

---

## 9. Hàm `isspace`

Hàm **kiểm tra ký tự có phải là khoảng trắng** *(white-space)* hay không

```c
#include<stdio.h>
#include <ctype.h>
int main(int argc, char const *argv[]){
   char var;
   printf("Enter the character : ");
   var=getchar();
   if(isspace(var))
      printf("|%c| is a white-space character",var);
   else
      printf("|%c| is not a white-space character",var);
   return 0;
}
```

| Input                    | Output                                                                                                                                                           |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <br>1<br>t<br>\t<br>'  ' | <br>\|1\| is not a white-space character<br>\|t\| is not a white-space character<br>\|        \| is a white-space character<br>\|  \| is a white-space character |

| [Chạy thử]() |
| ------------ |

---

## 10. Hàm `isupper`

Hàm **kiểm tra ký tự phải in hoa** hay không

```c
#include<stdio.h>
#include <ctype.h>
int main(int argc, char const *argv[]){
   char var;
   printf("Enter the character : ");
   var=getchar();
   if(isupper(var))
      printf("|%c| is upperCase character",var);
   else
      printf("|%c| is not upperCase character",var);
   return 0;
}
```

| Input           | Output                                                                                                   |
| --------------- | -------------------------------------------------------------------------------------------------------- |
| <br>4<br>Q<br>t | <br>\|4\| is not upperCase character<br>\|Q\| is upperCase character<br>\|t\| is not upperCase character |

| [Chạy thử]() |
| ------------ |

---

## 11. Hàm `isxdigit`

Hàm **Kiểm tra ký tự có phải thập lục phân** hay không

```c
#include<stdio.h>
#include <ctype.h>
int main(int argc, char const *argv[]){
   char var[10];
   printf("Enter the character : ");
   fgets(var,sizeof(var),stdin);
   if(isxdigit(var[0])){
      printf("%sis hexadecimal character",var);
   }
   else
      printf("%sis not hexadecimal character",var);
   return 0;
}
```

| Input      | Output                                                               |
| ---------- | -------------------------------------------------------------------- |
| 0xE<br>zen | "0xE" is hexadecimal character<br>"zen" is not hexadecimal character |

| [Chạy thử]() |
| ------------ |

---

## 12. Hàm `tolower`

Hàm **chuyển đổi các chữ cái thành chữ in thường**

```c
#include<stdio.h>
#include <ctype.h>
int main(int argc, char const *argv[]){
   char var[50];
   printf("Enter the string : ");
   fgets(var,sizeof(var),stdin);
   int i=0;
   while(var[i]) {
      putchar(tolower(var[i]));
      i++;
   }
   return 0;
}
```

| Input      | Output     |
| ---------- | ---------- |
| ZENfection | zenfection |

| [Chạy thử]() |
| ------------ |

---

## 13. Hàm `toupper`

Hàm **chuyển đổi các chữ cái thành chữ in hoa**

```c
#include<stdio.h>
#include <ctype.h>
int main(int argc, char const *argv[]){
   char var[50];
   printf("Enter the string : ");
   fgets(var,sizeof(var),stdin);
   int i=0;
   while(var[i]) {
      putchar(toupper(var[i]));
      i++;
   }
   return 0;
}
```

| Input      | Output     |
| ---------- | ---------- |
| ZENfection | ZENFECTION |

| [Chạy thử]() |
| ------------ |