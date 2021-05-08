# ![Executive Male.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-19-06-19-Executive%20Male.png) Buổi thực hành 2 - Lập trình OOP ![Executive Female.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-19-07-40-Executive%20Female.png)

> ![icons8-questions.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-12-38-09-icons8-questions.png) **Bài 1:** Cài đặt lớp **Diem** (Điểm trong không gian 2 chiều) gồm: 
> 
> | ![icons8-package.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-23-20-42-icons8-package.png) Thuộc tính | ![icons8-data_quality.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-40-34-icons8-data_quality.png) Kiểu dữ liệu |
> | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
> | x                                                                                                                                  | int                                                                                                                                            |
> | y                                                                                                                                  | int                                                                                                                                            |
> 
> | ![icons8-construction.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-36-40-icons8-construction.png) Hàm xây dựng | ![icons8-autograph.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-39-35-icons8-autograph.png) Tên hàm |
> | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
> | + Hàm xây dựng mặc nhiên                                                                                                                       | `Diem()`                                                                                                                            |
> | + Hàm xây dựng có 2 tham số                                                                                                                    | `Diem(int,int)`                                                                                                                     |
> 
> | ![icons8-webhook.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-35-44-icons8-webhook.png) Phương thức | ![icons8-autograph.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-39-35-icons8-autograph.png) Tên Hàm |
> | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
> | + Nhập toạ độ cho điểm từ bàn phím                                                                                                  | `void nhapDiem()`                                                                                                                   |
> | + Hiển thị ra màn hình toạ độ điểm theo dạng **(x,y)**                                                                              | `void hienThi()`                                                                                                                    |
> | + Đời điểm đi độ dời **(dx,dy)**                                                                                                    | `void doiDiem(int dx,int dy)`                                                                                                       |
> | + Lấy ra giá trị hoành độ của điểm                                                                                                  | `int giaTriX()`                                                                                                                     |
> | + Lấy ra giá trị tung độ của điểm                                                                                                   | `int giaTriY()`                                                                                                                     |
> | + Tính khoảng cách từ điểm đó đến gốc toạ độ                                                                                        | `float khoangCach()`                                                                                                                |
> | + Tính khoảng cách từ điểm đến 1 điểm khác                                                                                          | `khoangCach(Diem d)`                                                                                                                |
> 
> ![icons8-hand_with_pen.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-23-26-35-icons8-hand_with_pen.png) Viết lớp `SDDiem` có chứa hàm `main()` khai thác lớp vừa định nghĩa:
> 
> - Tạo ra điểm `A` toạ độ **(3,4)** ➨ Hiển thị toạ độ điểm `A` ra màn hình
> - Tạo ra điểm `B` với giá trị nhập từ `bàn phím` ➨ Hiển thị toạ độ điểm B ra màn hình
> - Tạo ra điểm `C` đối xuống với điểm B qua gốc toạ độ ➨Hiển thị toạ độ điểm `C` ra màn hình 
> - Hiển thị ra màn hình khoảng cách từ điểm `B` tới tâm `O`
> - HIển thị ra màn hình khoảng cách từ điểm `A` tới điểm `B`

| ![05123526E Learningpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/07-11-21-11-05-12-35-26-E%20Learning.png) Giải |
| ----------------------------------------------------------------------------------------------------------------------------------------- |
| [Diem.java](https://github.com/Zenfection/CTU/blob/main/HocPhan/CT176-Lap_trinh_huong_doi_tuong/SourceCode/Buoi2/BT_1/Diem.java)          |
| [SDDiem.java](https://github.com/Zenfection/CTU/blob/main/HocPhan/CT176-Lap_trinh_huong_doi_tuong/SourceCode/Buoi2/BT_1/SDDiem.java)      |

---

> ![icons8-questions.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-12-38-09-icons8-questions.png) **Bài 2:** Cài đặt lớp `Date` gồm : 
> 
> | ![icons8-package.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-23-20-42-icons8-package.png) Thuộc tính | ![icons8-data_quality.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-40-34-icons8-data_quality.png) Kiểu dữ liệu |
> | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
> | ngay                                                                                                                               | int                                                                                                                                            |
> | thang                                                                                                                              | int                                                                                                                                            |
> | nam                                                                                                                                | int                                                                                                                                            |
> 
> | ![icons8-construction.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-36-40-icons8-construction.png) Hàm xây dựng | ![icons8-autograph.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-39-35-icons8-autograph.png) Tên hàm |
> | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
> | Hàm xây dựng mặc nhiên                                                                                                                         | `Date()`                                                                                                                            |
> | Hàm xây dựng có 3 tham số                                                                                                                      | `Date(int,int,int)`                                                                                                                 |
> 
> | ![icons8-webhook.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-35-44-icons8-webhook.png) Phương thức | ![icons8-autograph.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-39-35-icons8-autograph.png) Tên hàm | ![Learning Material.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-23-05-25-Learning%20Material.png) Ví dụ |
> | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
> | + Hiển thị thông tin `ngày` ra màn hình                                                                                             | `void hienThiNgay()`                                                                                                                |                                                                                                                                       |
> | + Nhập giá trị từ `bàn phím`, nếu không hợp lệ yêu cầu nhập lại                                                                     | `void nhapDate()`                                                                                                                   |                                                                                                                                       |
> | + Kiểm tra xem ngày có **hợp lệ** không                                                                                             | `boolean hopLe()`                                                                                                                   | Ngày `31/06/2000` và `29/2/1999` không hợp lệ                                                                                         |
> | + Tính ra ngày hôm sau là ngày nào                                                                                                  | `Date ngayHomSau()`                                                                                                                 | `30/06/2007` ➨ `01/07/2007`                                                                                                           |
> | + Cộng 1 ngày với số ngày `n` nào đó                                                                                                | `Date congNgay(int n)`                                                                                                              | `15/06/2000` cộng thêm `20` ngày ➨ `05/07/2000`                                                                                       |

| ![05123526E Learningpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/07-11-21-11-05-12-35-26-E%20Learning.png) Giải |
| ----------------------------------------------------------------------------------------------------------------------------------------- |
| [Date.java](https://github.com/Zenfection/CTU/blob/main/HocPhan/CT176-Lap_trinh_huong_doi_tuong/SourceCode/Buoi2/BT_2/Date.java)          |
| [SDDate.java](https://github.com/Zenfection/CTU/blob/main/HocPhan/CT176-Lap_trinh_huong_doi_tuong/SourceCode/Buoi2/BT_2/SDDate.java)      |

---

> ![icons8-questions.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-12-38-09-icons8-questions.png) **Bài 3:** Cài đặt lớp `PhanSo` gồm : 
> 
> ![icons8-package.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-23-20-42-icons8-package.png) Các thuộc tính:  `tuso` và `mauso` kiểu số nguyên.
> 
> ![icons8-construction.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-36-40-icons8-construction.png) Các hàm xây dựng gồm: 
> 
> | Hàm xây dựng                    | Tên hàm                  |
> | ------------------------------- | ------------------------ |
> | + Hàm xây dựng mặc nhiên        | `PhanSo()`               |
> | + Hàm xây dựng gồm nhiều đối số | `PhanSo(int tu,int mau)` |
> 
> ![icons8-webhook.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-35-44-icons8-webhook.png) Các phương thức khác gồm : 
> 
> - Hàm nhập giá trị cho `1` phân số. Nếu phân số vừa nhập có mẫu số `= 0` thì **yêu cầu nhập lại.**
> 
> - Hàm hiển thị phân số theo dạng `tu / mau` hoặc `-tu/mau`.
>   
>   > ![Learning Material.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-23-05-25-Learning%20Material.png) *Yêu cầu:* nếu `tử = 0` ➨ chỉ in ra số `0`, nếu `mẫu =1` thì ➨ in ra `tử số`.
> 
> - Hàm `nghịch đảo` phân số (làm thay đổi giá trị phân số) ➨ `void nghichDao()`
> 
> - Hàm tính ra phân số `nghịch đảo` của 1 phân số (phân số sẽ giữ nguyên nhưng hàm trả ra giá trị là phân số nghịch đảo của nó) ➨ `PhanSo giaTriNghichDao()`
> 
> - Hàm tính ra `giá trị thực` của phân số.
>   
>   > ![Learning Material.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-23-05-25-Learning%20Material.png) *Ví dụ:* `1/2` ➨ `0.5`
> 
> - Hàm so sánh lớn hơn với phân số a ➨ `boolean lonHon(PhanSo a)`
> 
> - Hàm `cộng`, `trừ`, `nhân`, `chia` phân số với 1 `phân số a` (Kết quả của hàm là 1 phân số.)  ➨ `PhanSo cong(PhanSo a)`
> 
> - Hàm `cộng`, `trừ`, `nhân`, `chia` phân số với 1 số nguyên (Kết quả của hàm là 1 phân số.) ➨ `PhanSo cong(int a)`
>   
>   ![icons8-hand_with_pen.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-23-26-35-icons8-hand_with_pen.png) Viết lớp `SDPhanSo` có chứa hàm `main()` sử dụng lớp `PhanSo` : 
> 
> - Tạo phân số `a = 3/7`, `b = 4/9`. Hiển thị giá trị chúng ra màn hình
> 
> - Tạo 2 phân số `x` và `y`. Nhập giá trị cho `x` và `y` từ bàn phím.
> 
> - Hiển thị giá trị `nghịch đảo` của phân số `x` ra màn hình (*không làm thay đổi giá trị của `x`*)
> 
> - Tính tổng `x` và `y` và in kết quả ra màn hình 
> 
> - Nhập vào 1 danh sách gồm `n` phân số (*n : nhập từ bàn phím*)
> 
> - Tính tổng `n` phân số đó
> 
> - Tìm phân số `lớn nhất`  trong danh sách phân số trên.
> 
> - Sắp xếp danh sách phân số theo thứ tự tăng dần

| ![05123526E Learningpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/07-11-21-11-05-12-35-26-E%20Learning.png) Giải |
| ----------------------------------------------------------------------------------------------------------------------------------------- |
| [PhanSo.java](https://github.com/Zenfection/CTU/blob/main/HocPhan/CT176-Lap_trinh_huong_doi_tuong/SourceCode/Buoi2/BT_3/PhanSo.java)      |
| [SDPhanSo.java](https://github.com/Zenfection/CTU/blob/main/HocPhan/CT176-Lap_trinh_huong_doi_tuong/SourceCode/Buoi2/BT_3/SDPhanSo.java)  |
