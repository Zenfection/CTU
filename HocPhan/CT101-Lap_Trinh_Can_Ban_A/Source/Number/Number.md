# Number

### 1.Số hoàn thiện (Perfect Number)

Số hoàn thiện là một số nguyên dương mà tổng các ước nguyên dương chính thức của nó bằng chính nó

```c
#include <stdio.h>
int main(int argc, char const *argv[]){
    int n;
    int sum=0;
    printf("Enter an integer = ");
    scanf("%d",&n);
    for (int i = 1; i < n; i++){
        if (n%i==0){
            sum+=i;
        }
    }
    if (sum==n)
        printf("%d is a perfect number",n);
    else
        printf("%d not is a perfect number",n);
    return 0;
}
```

| Input | Output                |
| ----- | --------------------- |
| 6     | 6 is a perfect number |

| [Chạy thử](https://repl.it/join/jkowijyw-zenfection) |
| ---------------------------------------------------- |

---

### 2.Dãy Fibonacci (Fibonacci Series)

Dãy Fibonacci là **dãy vô hạn** các **số tự nhiên** bắt đầu bằng 2 phần tử 0 và 1 hoặc 1 và 1, các phần tử sau đó được thiếp lập theo quy tắc mỗi phần tử luôn bằng tổng 2 phần tử trước nó. 

**<u>Công thức truy hồi sau đây:</u>**

<img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2020/07/22-16-14-55-A%CC%89nh%20chu%CC%A3p%20Ma%CC%80n%20hi%CC%80nh%202020-07-22%20lu%CC%81c%2016.13.20.png" alt="Ảnh chụp Màn hình 2020-07-22 lúc 16.13.20.png" width="376">

```c
#include <stdio.h>
int main(int argc, char const *argv[]){
    int a,b,c,n;
    a=0;
    b=1;
    printf("Enter length of the range : ");
    scanf("%d",&n);
    printf("Fibonacci Series : %d %d ",a,b);
    for (int i = 0; i < n; i++){
        c=a+b;
        a=b;
        b=c;
        printf("%d ",c);
    }
    return 0;
}
```

| Input | Output        |
| ----- | ------------- |
| 5     | 0 1 1 2 3 5 8 |

| [Chạy thử](https://repl.it/join/xvvjdxat-zenfection) |
| ---------------------------------------------------- |

---

### 3.Giai thừa của 1 số  (Factorial of a Number)

```c
#include <stdio.h>
int main(int argc, char const *argv[]){
    int n;
    long fact=1;
    printf("Enter an integer : ");
    scanf("%d",&n);
    for (int i = 1; i <= n; i++){
        fact*=i;
    }
    printf("Factorial of %d is %ld",n,fact);
    return 0;
}
```

| Input | Output |
| ----- | ------ |
| 5     | 120    |

| [Chạy thử]() |
| ------------ |

---

### 4.Số tự mãn (Armstrong Number)

**Số tự mãn** cũng được gọi là **số tuyệt hảo bất biến**, là 1 số mà có tổng các chữ số mũ n (n≥2) bằng chính nó.

**Ví dụ**: <img title="" src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20%5Cbg_white%203%5E3+7%5E3+1%5E3%3D371" alt="" width="163">

```c
#include <stdio.h>
#include <math.h>
int count_digit(int n);
int main(int argc, char const *argv[]){
    int a,n,b=0,t;
    printf("Enter an integer : ");
    scanf("%d",&n);
    t=n;
    while(t>0) {
        a=t%10;
        b+=pow(a,count_digit(n));
        t/=10;
    }
    if (b==n)
        printf("%d is an Armstrong number",n);
    else
        printf("%d is not an Armstrong number",n);
    return 0;
}
int count_digit(int n){
    int count=0;
    while(n!=0) {
        n/=10;
        count++;
    }
    return count;
}
```

| Input | Output                     |
| ----- | -------------------------- |
| 153   | 153 is an Armstrong number |

| [Chạy thử](https://repl.it/join/jtepfreg-zenfection) |
| ---------------------------------------------------- |

---

### 5.Đảo ngược của 1 số (Reverse of a number)

```c
#include <stdio.h>
int main(int argc, char const *argv[]){
    int n,t;
    int reverse=0;
    printf("Enter an integer : ");
    scanf("%d",&n);
    t=n;
    while(t!=0) {
        reverse*=10;
        reverse+=(t%10);
        t/=10;
    }
    printf("Reverse of %d is = %d",n,reverse);
    return 0;
}
```

| Input | Output |
| ----- | ------ |
| 12345 | 54321  |

| [Chạy thử](https://repl.it/join/yggtldgc-zenfection) |
| ---------------------------------------------------- |

---

### 6.Tìm số chẵn hoặc lẻ (Find Even or Odd number)

Số chẵn là số chia hết cho 2, còn số lẻ thì không

```c
#include <stdio.h>
int main(int argc, char const *argv[]){
    int n;
    printf("Enter number = ");
    scanf("%d",&n);
    if(n%2==0)
        printf("%d is Even number",n);
    else
        printf("%d is Odd number",n);
    return 0;
}
```

| Input | Output            |
| ----- | ----------------- |
| 10    | 10 is Even number |

| [Chạy thử](https://repl.it/join/kaevvfho-zenfection) |
| ---------------------------------------------------- |

---

### 7. Ước chung lớn nhất và bội chung nhỏ nhất (HCF & LCM)

HCF : (ước chung lớn nhất): Là số nguyên lớn nhất là ước chung của a và b

LCM : (bội chung nhỏ nhất): là số nguyên nhỏ nhất chia hết cho cả a và b

```c
#include <stdio.h>
int main(int argc, char const *argv[]){
    int num1,num2,a,b,t,gcd,lcm;
    printf("Enter number 1 : ");
    scanf("%d",&num1);
    printf("Enter number 2 : ");
    scanf("%d",&num2);
    a=num1;
    b=num2;
    while(b!=0) {
        t=b;
        b=a%b;
        a=t;
    }
    gcd = a;
    lcm = (a*b)/gcd;
    printf("Greatest common divisor of %d and %d = %d\n",num1,num2,gcd);
    printf("Least common multiple of %d and %d = %d\n",num1,num2,lcm);
    return 0;
}
```

| Input | Output               |
| ----- | -------------------- |
| 2 5   | GCD = 1 <br>LCD = 10 |

| [Chạy thử](https://repl.it/join/apigvkfx-zenfection) |
| ---------------------------------------------------- |

---

### 8.Hoán đổi 2 số (Swap two numbers)

```c
#include <stdio.h>
int main(int argc, char const *argv[]){
    int a,b,temp;
    printf("Enter number 1 : ");
    scanf("%d",&a);
    printf("Enter number 2 : ");
    scanf("%d",&b);
    temp=a;
    a = b;
    b = temp;
    printf("Number 1 = %d\n",a);
    printf("Number 2 = %d\n",b);
    return 0;
}
```

| Input | Output |
| ----- | ------ |
| 3 6   | 6 3    |

| [Chạy thử](https://repl.it/join/pkzntgap-zenfection) |
| ---------------------------------------------------- |

---

### 9.Kiểm tra chữ cái là nguyên âm (Check if Alphabet is Vowel)

có 5 chữ nguyên âm là : anh (a), ốm (o), em (e), ú (u), ì (i) và cả chữ viết hoa của chúng.

```c
#include <stdio.h>
int main(int argc, char const *argv[]){
    char ch;
    printf("Enter a character : ");
    scanf("%c",&ch);
    if (ch=='a'||ch=='A'||ch=='O'||ch=='o'||ch=='E'||ch=='e'||ch=='U'||ch=='u'||ch=='I'||ch=='i')
        printf("%c is a Vowel.\n",ch);
    else    
        printf("%c is not a Vowel.\n",ch);    
    return 0;
}
```

| Input | Output        |
| ----- | ------------- |
| a     | a is a Vowel. |

| [Chạy thử](https://repl.it/join/nivbzgmy-zenfection) |
| ---------------------------------------------------- |

---

### 10. Tổng các chữ số của 1 số (Sum Digits of a Number)

```c
#include <stdio.h>
int main(int argc, char const *argv[]){
    int n,t;
    int sum=0;
    printf("Enter an integer : ");
    scanf("%d",&n);
    t=n;
    while(t!=0) {
        sum+=(t%10);
        t/=10;
    }
    printf("Sum of digits of %d is %d",n,sum);
    return 0;
}
```

| Input | Output |
| ----- | ------ |
| 1234  | 10     |

| [Chạy thử](https://repl.it/join/qntwiyke-zenfection) |
| ---------------------------------------------------- |

---

### 11. Tổng các chữ số của 1 số sử dụng Đệ quy (Sum Digits of a number using recursion)

```c
#include <stdio.h>
int sum_digits(int n);
int main(int argc, char const *argv[]){
    int n;
    printf("Enter an integer : ");
    scanf("%d",&n);
    printf("Sum digits of %d is %d",n,sum_digits(n));
    return 0;
}
int sum_digits(int n){
    static int sum=0;
    if(n==0)
        return 0;
    sum=(n%10)+sum_digits(n/10);
    return sum;
}
```

| Input | Output |
| ----- | ------ |
| 123   | 6      |

| [Chạy thử](https://repl.it/join/tnvowqxy-zenfection) |
| ---------------------------------------------------- |

---

### 12. In n số nguyên tố đầu tiên (Print Primes till 'n')

Số nguyên tố là số chia hết cho 1 và chính nó => bắt đầu từ 2

```c
#include <stdio.h>
#include <math.h>
int check_prime(int n);
int main(int argc, char const *argv[]){
    int n;
    printf("Enter number of prime numbers : ");
    scanf("%d",&n);
    int count=0;
    int i=2;
    printf("Frist %d prime numbers are : ",n);
    while(count < n){
        if(check_prime(i)){
            printf("%d ",i);
            count++;
        }
        i++;
    }
    return 0;
}
int check_prime(int n){
    if(n<2)
        return 0;
    else{
        for (int i = 2; i <= sqrt(n); i++)
            if(n%i==0)
                return 0;
    }
    return 1;
}
```

| Input | Output        |
| ----- | ------------- |
| 6     | 2 3 5 7 11 13 |

| [Chạy thử](https://repl.it/join/utpenfoa-zenfection) |
| ---------------------------------------------------- |

---

### 13. Thêm n số và tính tổng nó (Add 'n' numbers and Sum)

```c
#include <stdio.h>
int main(int argc, char const *argv[]){
    int n;
    int sum=0;
    printf("Enter an integer you want add : ");
    scanf("%d",&n);
    printf("Enter %d integers number : ",n);
    for (int i = 1; i <= n; i++){
        int value;
        scanf("%d",&value);
        sum+=value;
    }
    printf("Sum of entered number =  %d",sum);
    return 0;
}
```

| Input        | Output |
| ------------ | ------ |
| 4<br>1 2 3 4 | 10     |

| [Chạy thử](https://repl.it/join/khhuoyog-zenfection) |
| ---------------------------------------------------- |

---

### 14.Thêm n số và tính tổng nó bằng Mảng (Add 'n' numbers and Sum using Array)

```c
#include <stdio.h>
int main(int argc, char const *argv[]){
    int n;
    int sum=0;
    printf("Enter an integer you want add : ");
    scanf("%d",&n);
    int M[n];
    printf("Enter %d integers number : ",n);
    for (int i = 0; i < n; i++){
        scanf("%d",&M[i]);
        sum+=M[i];
    }
    printf("Sum of entered numbers = %d",sum);
    return 0;
}
```

| Input        | Output |
| ------------ | ------ |
| 4<br>5 6 7 8 | 26     |

| [Chạy thử](https://repl.it/join/xvftwnfb-zenfection) |
| ---------------------------------------------------- |

---

### 15. Kiểm tra số nguyên tố (Check prime number)

```c
#include <stdio.h>
#include <math.h>
int check_prime(int n);
int main(int argc, char const *argv[]){
    int n;
    printf("Enter an integer you want check : ");
    scanf("%d",&n);
    if(check_prime(n))
        printf("%d is a prime number",n);
    else
        printf("%d is not a prime number",n);
    return 0;
}
int check_prime(int n){
    if(n<2) return 0;
    else{
        for (int i = 2; i <= sqrt(n); i++){
            if(n%i==0)
                return 0;
        }
    }
    return 1;
}
```

| Input | Output              |
| ----- | ------------------- |
| 7     | 7 is a prime number |

| [Chạy thử](https://repl.it/join/ljpinsbb-zenfection) |
| ---------------------------------------------------- |

---

### 16. Kiểm tra số đối xứng (Check Palinedrome)

**Palindrome** là số mà viết ngược hay xuôi vẫn là nó, hiểu là **số đối xứng** cũng được

```c
#include <stdio.h>
int main(int argc, char const *argv[]){
    int n,temp;
    int reserve=0;
    printf("Enter an integer you want check : ");
    scanf("%d",&n);
    temp=n;
    while(temp!=0) {
        reserve*=10;
        reserve+=(temp%10);
        temp/=10;
    }
    if(reserve==n)
        printf("%d is a palindrome number",n);
    else
        printf("%d is not a palindrome number",n);
    return 0;
}
```

| Input | Output                       |
| ----- | ---------------------------- |
| 12321 | 12321 is a palindrome number |

| [Chạy thử](https://repl.it/join/fxazpwap-zenfection) |
| ---------------------------------------------------- |

---

### 17. Hoán vị 2 số bằng xor (Swap two number using bitwise xor)

```c
#include <stdio.h>
int main(int argc, char const *argv[]){
    long a, b;
    printf("Enter number 1 : ");
    scanf("%ld",&a);
    printf("Enter number 2 : ");
    scanf("%ld",&b);
    a^=b; 
    b^=a; 
    a^=b;
    printf("Number 1 : %ld\n",a);
    printf("Number 2 : %ld\n",b);
    return 0;
}
```

| Input | Output |
| ----- | ------ |
| 5 3   | 3 5    |

| [Chạy thử](https://repl.it/join/detwalcp-zenfection) |
| ---------------------------------------------------- |

---

### 18. In bình phương 1 tới n (Calculate Square till 'n' number)

```c
#include <stdio.h>
#include <math.h>
int main(int argc, char const *argv[]){
    int n;
    printf("Enter the range : ");
    scanf("%d",&n);
    for (int i = 1; i <= n; i++){
        int square=pow(i,2);
        printf("Square of %d is %d\n",i,square);
    }
    return 0;
}
```

| Input | Output      |
| ----- | ----------- |
| 5     | 1 4 9 16 25 |

| [Chạy thử](https://repl.it/join/ivoinzaz-zenfection) |
| ---------------------------------------------------- |

---

### 19. Hệ số của 1 số (Factors of Number)

```c
#include <stdio.h>
int main(int argc, char const *argv[]){
    int n;
    printf("Enter an integer : ");
    scanf("%d",&n);
    printf("Factors of %d are : ",n);
    for (int i = 1; i <= n; i++){
        if(n%i==0){
            printf("%d ",i);
        }
    }
    return 0;
}
```

| Input | Output    |
| ----- | --------- |
| 26    | 1 2 13 26 |

| [Chạy thử](https://repl.it/join/vnjsdpyq-zenfection) |
| ---------------------------------------------------- |

---

### 20.Số neon (Neon number)

**Số neon** là số mà **tổng các chữ số trong bình phương của nó bằng chính nó**:

Ví dụ: $9^2=81 , 8+1=9$

```c
#include <stdio.h>
#include <math.h>
int main(int argc, char const *argv[]){
    int n,sum=0;
    printf("Enter number you want check : ");
    scanf("%d",&n);
    int square = pow(n,2);
    while(square!=0) {
        sum+=(square%10);
        square/=10;
    }
    if(sum==n)
        printf("%d is a neon number",n);
    else
        printf("%d is not a neon number",n);
    return 0;
}
```

| Input | Output           |
| ----- | ---------------- |
| 9     | 9 is neon number |

| [Chạy thử](https://repl.it/join/zmsisbqk-zenfection) |
| ---------------------------------------------------- |

---

### 21. Dãy sin(Sine series)

```c
# include <stdio.h>
# include <math.h>
int main(int argc, char const *argv[]){
    int n;
    float x, val, sum, t;
    printf("Enter the value for x (in degrees): ");
    scanf("%f", &x);
    printf("Enter the value for n : ");
    scanf("%d", &n);
    val = x;
    x = x * 3.14159 / 180;
    t = x;
    sum = x;
    for (int i = 1; i <= n; i++){
        t = (t * pow((double) (-1), (double) (2 * i - 1)) *
             x * x) / (2 * i * (2 * i + 1));
        sum = sum + t;
    }
    printf("Sine value of %f is : %8.4f", val, sum);
    return 0;
}
```

| Input | Output |
| ----- | ------ |
| 45 1  | 0.7047 |

| [Chạy thử](https://repl.it/join/ojnuxkcn-zenfection) |
| ---------------------------------------------------- |

---

### 22. In 5 số tiếp theo (Next 5 successive numbers)

```c
#include <stdio.h>
int main(int argc, char const *argv[]){
    int n;
    printf("Enter an integer : ");
    scanf("%d",&n);
    printf("Successive Numbers from %d: ",n);
    for (int i = n+1; i <= n+5; i++){
        printf("%d ",i);
    }
    return 0;
}
```

| Input | Output     |
| ----- | ---------- |
| 5     | 6 7 8 9 10 |

| [Chạy thử](https://repl.it/join/otytlhta-zenfection) |
| ---------------------------------------------------- |

---

### 23. Tổng của các bình phương tới n (Sum of Squares till 'n')

```c
#include <stdio.h>
#include <math.h>
int main(int argc, char const *argv[]){
    int n,sum=0;
    printf("Enter an integer : ");
    scanf("%d",&n);
    for (int i = 1; i <= n; i++){
        sum+=pow(i,2);
    }
    printf("Sum of Squares till %d : %d",n,sum);
    return 0;
}
```

| Input | Output |
| ----- | ------ |
| 5     | 55     |

| [Chạy thử](https://repl.it/join/rxvatqxh-zenfection) |
| ---------------------------------------------------- |

---

### 24. Số lớn nhất trong 3 số sử dụng toán tử ? (Largest among 3 number using ternary operator)

```c
#include <stdio.h>
int main(int argc, char const *argv[]){
    int a, b, c, big;
    printf("Enter 3 numbers: ");
    scanf("%d %d %d", &a, &b, &c);
    big = (a > b && a > c ? a : b > c ? b : c);
    printf("The biggest number is: %d", big);
    return 0;
}
```

| Input | Output |
| ----- | ------ |
| 5 8 4 | 8      |

| [Chạy thử](https://repl.it/join/uouvjmfn-zenfection) |
| ---------------------------------------------------- |

---

### 25. Hoán vị 2 số sử dụng con trỏ (Swap two number using Pointer)

```c
#include <stdio.h>
int main(int argc, char const *argv[]){
    int a,b;
    printf("Enter number 1 : ");
    scanf("%d",&a);
    printf("Enter number 2 : ");
    scanf("%d",&b);
    int *ptr1,*ptr2,*temp;
    ptr1=&a;
    ptr2=&b;
    temp=ptr1;
    ptr1=ptr2;
    ptr2=temp;
    printf("Number 1 = %d\n",*ptr1);
    printf("Number 2 = %d\n",*ptr2);
    return 0;
}
```

| Input | Output |
| ----- | ------ |
| 3 5   | 5 3    |

| [Chạy thử](https://repl.it/join/kpbekgex-zenfection) |
| ---------------------------------------------------- |

---

### 26. Tính tổng n số (Sum of n number)

```c
#include <stdio.h>
int main(int argc, char const *argv[]){
    int n,sum=0;
    printf("Enter an integer you want add : ");
    scanf("%d",&n);
    int M[n];
    printf("Enter %d numbers : ",n);
    for (int i = 0; i < n; i++){
        scanf("%d",&M[i]);
        sum+=M[i];
    }
    printf("Sum of %d numbers are = %d",n,sum);
    return 0;
}
```

| Input           | Output |
| --------------- | ------ |
| 5 <br>1 6 7 4 2 | 20     |

| [Chạy thử](https://repl.it/join/kpqzegfr-zenfection) |
| ---------------------------------------------------- |

---

### 27. In số Armtrong tới n (Armtrong numbers till 'n')

```c
#include <stdio.h>
#include <math.h>
int count_digit(int n);
int check_armtrong(int n);
int main(int argc, char const *argv[]){
    int n;
    printf("Enter an integer : ");
    scanf("%d",&n);
    printf("Armtrong numbers from 1 to %d : 1 ",n);
    for(int i=100;i<=n;i++){
        if(check_armtrong(i))
            printf("%d ",i);
    }
    return 0;
}
int count_digit(int n){
    int count=0;
    while(n!=0) {
        n/=10;
        count++;
    }
    return count;
}
int check_armtrong(int n){
    int a,b=0,t;
    t=n;
    int count=count_digit(n);
    if(count<2)
        return 0;
    else{
    while(t>0){
        a=t%10;
        b+=pow(a,count_digit(n));
        t/=10;
    }
}
    if(b==n)
        return 1;
    return 0;
}
```

| Input | Output            |
| ----- | ----------------- |
| 500   | 1 153 370 371 407 |

| [Chạy thử](https://repl.it/join/zonrahnf-zenfection) |
| ---------------------------------------------------- |

---

### 28. Kiểm tra 2 số  là số thân thiện (Check whether two numbers are Friendly number )

**Số thân thiện** là số **2 hay nhiều số tự nhiên** nếu chúng có chung tỷ lệ giữa tổng các ước số của một số chia cho chính số đó

**Ví dụ:**

<img title="" src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20%5Cbg_white%20%5Cfrac%7B%5Cphi%2830%29%7D%7B30%7D%3D%5Cfrac%7B1&plus;2&plus;3&plus;5&plus;6&plus;10&plus;15&plus;30%7D%7B30%7D%3D%5Cfrac%7B12%7D%7B5%7D" alt="" width="401">

<img title="" src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B150%7D%20%5Cbg_white%20%5Cfrac%7B%5Cphi%28140%29%7D%7B140%7D%3D%5Cfrac%7B1&plus;2&plus;4&plus;5&plus;7&plus;10&plus;14&plus;20&plus;28&plus;35&plus;70&plus;140%7D%7B140%7D%3D%5Cfrac%7B12%7D%7B5%7D" alt="" width="550">

```c
#include <stdio.h>
double friendly(int n);
int main(int argc, char const *argv[]){
    int num1,num2;
    printf("Enter number 1 : ");
    scanf("%d",&num1);
    printf("Enter number 2: ");
    scanf("%d",&num2);
    if(friendly(num1)==friendly(num2))
        printf("%d and %d are Friendly number",num1,num2);
    else
        printf("%d and %d not are Friendly number",num1,num2);
    return 0;
}
double friendly(int n){
    double sum=0;
    for (int i = 1; i <= n; i++){
        if(n%i==0){
            sum+=i;
        }
    }
    return sum/n;
}
```

| Input  | Output                         |
| ------ | ------------------------------ |
| 30 140 | 30 and 140 are Friendly number |

| [Chạy thử](https://repl.it/join/zvmgxqhs-zenfection) |
| ---------------------------------------------------- |

---

### 29. Kiểm tra 2 số là số bạn bè (Check whether two numbers are Amicable number)

```c
#include <stdio.h>
int amicable(int n);
int main(int argc, char const *argv[]){
    int num1,num2;
    printf("Enter number 1 : ");
    scanf("%d",&num1);
    printf("Enter number 2: ");
    scanf("%d",&num2);
    if(amicable(num1)==num2 && amicable(num2)==num1)
        printf("%d and %d are Amicable number",num1,num2);
    else
        printf("%d and %d are Amicable number",num1,num2);
    return 0;
}
int amicable(int n){
    int sum=0;
    for(int i=1;i<=0;i++){
        if(n%i==0)
            sum+=i;
    }
    return sum;
}
```

| Input   | Output                          |
| ------- | ------------------------------- |
| 220 284 | 220 and 284 are Amicable number |

| [Chạy thử](https://repl.it/join/heiqnhwc-zenfection) |
| ---------------------------------------------------- |

---

### 30. Hoán vị 2 số không dùng biến thứ 3 (Swap two numbers without third variable)

```c
#include <stdio.h>
int main(int argc, char const *argv[]){
    int x,y;
    printf("Enter number 1 : ");
    scanf("%d",&x);
    printf("Enter number 2 : ");
    scanf("%d",&y);
    x=x+y; 
    y=x-y;
    x=x-y;
    printf("Number 1 = %d\n",x);
    printf("Number 2 = %d\n",y);
    return 0;
}
```

| Input | Output |
| ----- | ------ |
| 3 5   | 5 3    |

| [Chạy thử](https://repl.it/join/darlgsmb-zenfection) |
| ---------------------------------------------------- |

---

### 31. Tổng n số nguyên tố đầu tiên (Sum of first n prime number)

```c
#include <stdio.h>
#include <math.h>
int check_prime(int n);
int main(int argc, char const *argv[]){
    int n,sum=0;
    printf("Enter the number of prime number : ");
    scanf("%d",&n);
    printf("First %d prime numbers are : ",n);
    int count=0;
    for(int i=2;n!=count;i++){
        if(check_prime(i)){
            printf("%d ",i);
            sum+=i;
            count++;
        }
    }
    printf("\nSum of firse %d prime numbers = %d",n,sum);
    return 0;
}
int check_prime(int n){
    if(n<2) return 0;
    for (int i = 2; i <= sqrt(n); i++){
        if(n%i==0)
            return 0;
    }
    return 1;
}
```

| Input | Output                               |
| ----- | ------------------------------------ |
| 10    | 2 3 5 7 11 13 17 19 23 29<br>sum=129 |

| [Chạy thử](https://repl.it/join/bwjzncio-zenfection) |
| ---------------------------------------------------- |

---

### 32. Số lớn nhất trong n số (Largest number of 'n' number)

```c
#include <stdio.h>
void input_array(int M[],int n);
int max_array(int M[],int n);
int main(int argc, char const *argv[]){
    int n;
    printf("Enter the range = ");
    scanf("%d",&n);
    int M[n];
    input_array(M,n);
    printf("Largest of %d numbers are : %d",n,max_array(M,n));
    return 0;
}
void input_array(int M[],int n){
    printf("Enter %d numbers : ",n);
    for (int i = 0; i < n; i++){
        scanf("%d",&M[i]);
    }
}
int max_array(int M[],int n){
    int max=M[0];
    for (int i = 1; i < n; i++){
        if(max<M[i])
            max=M[i];
    }
    return max;
}
```

| Input             | Output |
| ----------------- | ------ |
| 5<br>12 56 8 2 34 | 56     |

| [Chạy thử](https://repl.it/join/dxoqrpvc-zenfection) |
| ---------------------------------------------------- |

---

### 33. Trung bình của n số (Average of 'n' numbers)

```c
#include <stdio.h>
void input_array(int M[],int n);
double average_array(int M[],int n);
int main(int argc, char const *argv[]){
    int n;
    printf("Enter the range = ");
    scanf("%d",&n);
    int M[n];
    input_array(M,n);
    printf("Average of %d numbers are = %.2lf",n,average_array(M,n));
    return 0;
}
void input_array(int M[],int n){
    printf("Enter %d numbers : ",n);
    for (int i = 0; i < n; i++){
        scanf("%d",&M[i]);
    }
}
double average_array(int M[],int n){
    double sum=0;
    for (int i = 0; i < n; i++){
        sum+=M[i];
    }
    return sum/n;
}
```

| Input              | Output |
| ------------------ | ------ |
| 5<br>12 10 53 7 39 | 24.20  |

| [Chạy thử](https://repl.it/join/ytupwaoj-zenfection) |
| ---------------------------------------------------- |

---

### 34. Ước chung lớn nhất dùng Euclid (GCD using Euclid)

```c
#include <stdio.h>
int GCD(int a,int b);
int main(int argc, char const *argv[]){
    int a,b;
    printf("Enter 2 numbers : \n");
    scanf("%d %d",&a,&b);
    printf("GCD = %d",GCD(a,b));
    return 0;
}
int GCD(int a,int b){
    if(b==0) return a;
    return GCD(b,a%b);
}
```

| Input | Output |
| ----- | ------ |
| 24 56 | 8      |

| [Chạy thử](https://repl.it/join/zpesjpfm-zenfection) |
| ---------------------------------------------------- |

---

### 35.Tính tổng giai thừa của dãy : n/n! (Sum of factorial Series n/n!)

```c
#include <stdio.h>
int factorial(int n);
int main(int argc, char const *argv[]){
    int n;
    double sum=0;
    printf("Enter the value : ");
    scanf("%d",&n);
    for (int i = 1; i <= n; i++){
        double temp=(double)i/(factorial(i));
        sum+=temp;
    }
    printf("Sum of Factorial Series = %lf",sum);
    return 0;
}
int factorial(int n){
    int fact=1;
    for (int i = 1; i <= n; i++){
        fact*=i;
    }
    return fact;
}
```

| Input | Output   |
| ----- | -------- |
| 5     | 2.708333 |

| [Chạy thử](https://repl.it/join/mwjvzdkd-zenfection) |
| ---------------------------------------------------- |

---

### 36. Căn bậc 2 của 1 số (Square root a number)

```c
#include <stdio.h>
#include <math.h>
int main(int argc, char const *argv[]){
    double n;
    printf("Enter number : ");
    scanf("%lf",&n);
    printf("Square root of %lf = %lf",n,sqrt(n));
    return 0;
}
```

| Input | Output |
| ----- | ------ |
| 25    | 5      |

| [Chạy thử](https://repl.it/join/rrvncwbu-zenfection) |
| ---------------------------------------------------- |

---

### 37. Bảng cưu chương thứ 'n' ('n'th Multiplication Table)

```c
#include <stdio.h>
int main(int argc, char const *argv[]){
    int n;
    printf("Enter the order : ");
    scanf("%d",&n);
    for (int i = 1; i <= 10; i++){
        printf("%d * %d = %d\n",n,i,n*i);
    }
    return 0;
}
```

| Input | Output                                                                                                                                            |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| 7     | 7 * 1 = 7<br/>7 * 2 = 14<br/>7 * 3 = 21<br/>7 * 4 = 28<br/>7 * 5 = 35<br/>7 * 6 = 42<br/>7 * 7 = 49<br/>7 * 8 = 56<br/>7 * 9 = 63<br/>7 * 10 = 70 |

| [Chạy thử](https://repl.it/join/mejbsecy-zenfection) |
| ---------------------------------------------------- |

---

### 38. In các số nguyên tố giữa 2 khoảng (Display Prime numbers between two intervals)

```c
#include <stdio.h>
#include <math.h>
int check_prime(int n);
int main(int argc, char const *argv[]){
    int n1,n2;
    printf("Enter two numbers (intervals) : ");
    scanf("%d %d",&n1,&n2);
    for (int i = n1; i <= n2; i++){
        if(check_prime(i))
            printf("%d ",i);
    }
    return 0;
}
int check_prime(int n){
    if(n<2) return 0;
    for (int i = 2; i <= sqrt(n); i++){
        if(n%i==0) 
            return 0;
    }
    return 1;
}
```

| Input | Output                           |
| ----- | -------------------------------- |
| 10 50 | 11 13 17 19 23 29 31 37 41 43 47 |

| [Chạy thử](https://repl.it/join/swtcbgga-zenfection) |
| ---------------------------------------------------- |

---

### 39.In n số trong dãy Fibonacci (Fibonacci series of n range)

```c
#include <stdio.h>
#include <math.h>
int fibonacci(int n);
int main(int argc, char const *argv[]){
    int n;
    printf("Enter the range : ");
    scanf("%d",&n);
    printf("Frist %d numbers Fibonacci Series : %d ",n,0);
    for (int i = 1; i < n; i++){
        printf("%d ",fibonacci(i));
    }
    return 0;
}
int fibonacci(int n){
    if(n==1||n==2)
        return 1;
    return fibonacci(n-1)+fibonacci(n-2);
}
```

| Input | Output                                           |
| ----- | ------------------------------------------------ |
| 8     | 0 1 1         2       3       5       8       13 |

| [Chạy thử](https://repl.it/join/oetugyiu-zenfection) |
| ---------------------------------------------------- |

---

### 40. Tổng n lần trong dãy Taylor (Sum of n terms Taylor series)

một **chuỗi Taylor** của một [**hàm toán học**](https://vi.wikipedia.org/wiki/H%C3%A0m_s%E1%BB%91 "Hàm số") [**khả vi**](https://vi.wikipedia.org/wiki/Kh%E1%BA%A3_vi "Khả vi") [**thực**](https://vi.wikipedia.org/wiki/S%E1%BB%91_th%E1%BB%B1c "Số thực") hay [**phức**](https://vi.wikipedia.org/wiki/S%E1%BB%91_ph%E1%BB%A9c "Số phức"), *f* định nghĩa trên [**miền xác định**](https://vi.wikipedia.org/wiki/T%E1%BA%ADp_x%C3%A1c_%C4%91%E1%BB%8Bnh "Tập xác định") (*a* − *r*, *a* + *r*) là một [**chuỗi lũy thừa**](https://vi.wikipedia.org/w/index.php?title=Chu%E1%BB%97i_l%C5%A9y_th%E1%BB%ABa&action=edit&redlink=1 "Chuỗi lũy thừa (trang chưa được viết)"):

![Ảnh chụp Màn hình 2020-07-24 lúc 15.48.34.png](https://raw.githubusercontent.com/Zenfection/Image/master/2020/07/24-15-48-57-A%CC%89nh%20chu%CC%A3p%20Ma%CC%80n%20hi%CC%80nh%202020-07-24%20lu%CC%81c%2015.48.34.png)

```c
#include <stdio.h>
#include <math.h>
int main(int argc, char const *argv[]){
    int x,n,fact=1;
    double sum=0;
    printf("Enter the value : ");
    scanf("%d",&x);
    printf("Enter the number of terms in the series : ");
    scanf("%d",&n);
    for (int i = 1; i < n; i++){
        fact=fact*i;
        sum=sum+(pow(x,i)/fact);  
    }
    printf("Sum of %d Taylor Series = %lf",n,sum+1);
    return 0;
}
```

| Input | Output    |
| ----- | --------- |
| 5 6   | 91.416667 |

| [Chạy thử](https://repl.it/join/iuiplrdf-zenfection) |
| ---------------------------------------------------- |

---

### 41. Chuyển số thành dạng La Mã (Convert numbers to roman number)

| Ký tự | Số   |
| ----- | ---- |
| I     | 1    |
| V     | 5    |
| X     | 10   |
| L     | 50   |
| C     | 100  |
| D     | 500  |
| M     | 1000 |

```c
#include <stdio.h>
void predigit(char num1, char num2);
void postdigit(char c, int n);
char romanval[1000];
int i = 0;
int main(int argc, char const *argv[]){
    long n;
    printf("Enter the n : ");
    scanf("%ld", &n);
    if (n <= 0){
        printf("Invalid n");
        return 0;
    }
    while (n != 0){
        if (n >= 1000){
            postdigit('M', n / 1000);
            n = n - (n / 1000) * 1000;
        }
        else if (n >= 500){
            if (n < (500 + 4 * 100)){
                postdigit('D', n / 500);
                n = n - (n / 500) * 500;
            }
            else{
                predigit('C', 'M');
                n = n - (1000 - 100);
            }
        }
        else if (n >= 100){
            if (n < (100 + 3 * 100)){
                postdigit('C', n / 100);
                n = n - (n / 100) * 100;
            }
            else{
                predigit('L', 'D');
                n = n - (500 - 100);
            }
        }
        else if (n >= 50){
            if (n < (50 + 4 * 10)){
                postdigit('L', n / 50);
                n = n - (n / 50) * 50;
            }
            else
            {
                predigit('X', 'C');
                n = n - (100 - 10);
            }
        }
        else if (n >= 10){
            if (n < (10 + 3 * 10)){
                postdigit('X', n / 10);
                n = n - (n / 10) * 10;
            }
            else{
                predigit('X', 'L');
                n = n - (50 - 10);
            }
        }
        else if (n >= 5){
            if (n < (5 + 4 * 1)){
                postdigit('V', n / 5);
                n = n - (n / 5) * 5;
            }
            else{
                predigit('I', 'X');
                n = n - (10 - 1);
            }
        }
        else if (n >= 1){
            if (n < 4){
                postdigit('I', n / 1);
                n = n - (n / 1) * 1;
            }
            else{
                predigit('I', 'V');
                n = n - (5 - 1);
            }
        }
    }
    printf("Roman n is : ");
    for (int j = 0; j < i; j++)
        printf("%c", romanval[j]);
    return 0;
}
void predigit(char num1, char num2){
    romanval[i++] = num1;
    romanval[i++] = num2;
}
void postdigit(char c, int n){
    for (int j = 0; j < n; j++)
        romanval[i++] = c;
}
```

| Input | Output |
| ----- | ------ |
| 66    | LXVI   |

| [Chạy thử](https://repl.it/join/nowpyhvv-zenfection) |
| ---------------------------------------------------- |

----

### 42. Số Niven (Niven number)

Một số chia hết cho tổng các chữ số của nó được gọi là **số niven**

**Ví dụ:** 

<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2020/07/24-16-22-07-HarshadNumber.png" title="" alt="HarshadNumber.png" width="277">

```c
#include <stdio.h>
int sum_digit(int n);
int main(int argc, char const *argv[]){
    int n;
    printf("Enter the number you want check : ");
    scanf("%d",&n);
    if(n%(sum_digit(n))==0)
        printf("%d is a niven number",n);
    else
        printf("%d is not a niven number",n);
    return 0;
}
int sum_digit(int n){
    int t,sum=0;
    while(n!=0){
        t=n%10;
        sum+=t;
        n/=10;
    }
    return sum;
}
```

| Input | Output               |
| ----- | -------------------- |
| 18    | 18 is a niven number |

| [Chạy thử](https://repl.it/join/sznbwfpo-zenfection) |
| ---------------------------------------------------- |

---

### 43.Kiểm tra số nguyên hay số thực (Check number is integer or float)

```c
#include <stdio.h>
int main(int argc, char const *argv[]){
    float n;
    printf("Enter number =  ");
    scanf("%f",&n);
    if(n-(int)n==0)
        printf("n is a integer number");
    else
        printf("n is a float number");
    return 0;
}
```

| Input | Output               |
| ----- | -------------------- |
| 4.25  | 4.25 is float number |

| [Chạy thử](https://repl.it/join/ntfhipwt-zenfection) |
| ---------------------------------------------------- |