# <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2020/11/06-20-21-36-icons8-link.png" title="" alt="icons8-link.png" width="50"> Danh sách Liên kết:

**Danh sách liên kết** là một cấu trúc dữ liệu, trong đó các phần tử không được lưu trữ ở bộ nhớ liên tiếp nhau như bên **danh sách đặc**, các liên kết với nhau được sử dụng bằng con trỏ trong hình vẽ dưới đây : 

![Linkedlist.png](https://raw.githubusercontent.com/Zenfection/Image/master/2020/11/06-20-33-15-Linkedlist.png)

**Lý thuyết:**

- Trong 1 cái `node` gồm `data` và con trỏ `Next`
- `Head` nắm giữ Node đầu tiên (**luôn là vậy**)
- `Tail` nắm giữ Node cuối cùng (**luôn là vậy**)

**Mô hình thực tế:**

<img src="https://raw.githubusercontent.com/Zenfection/Image/master/2020/11/06-20-41-29-depositphotos_81162780-stock-photo-baby-boy-playing-with-toy.jpg" title="" alt="depositphotos_81162780-stock-photo-baby-boy-playing-with-toy.jpg" width="393">

Hãy nhìn ảnh đứa bé này và, tưởng tượng :

- Các `Node` là các toa tàu, `data` là những vật chứa trong toa tàu, con trỏ`Next` là mắc xích nối toa này với tua kia => con trỏ `Next` ở toa toà cuối cùng là **`trống rỗng`**
- Tay trái của đứa bé là `head` nằm cái toa tàu đầu, tai phải của bé là `tail` nắm toa tàu cuối

==> Đó là cách quản lí của **Danh sách liên kết**

**Cách khai báo :**

```c
typedef struct NODE{
    int data;
    struct NODE* next;
};
typedef struct NODE Node; // định nghĩa cho khỏi khai báo struct sau này 
struct LIST{
    Node *head;
    Node *tail;
    int size;
};
typedef struct LIST List; // định nghĩa cho khỏi khai báo struct sau này
```
