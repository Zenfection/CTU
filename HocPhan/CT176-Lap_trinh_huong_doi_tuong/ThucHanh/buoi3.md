# ![Executive Male.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-19-06-19-Executive%20Male.png) Buổi thực hành 3 - Lập trình OOP ![Executive Female.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-19-07-40-Executive%20Female.png)

> ![icons8-questions.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-12-38-09-icons8-questions.png) **Bài 1** : cài đặt lớp `Gach` (*gạch lót nền*) như sau : 
> 
> | ![icons8-package.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-23-20-42-icons8-package.png) Thuộc tính | ![icons8-data_quality.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-40-34-icons8-data_quality.png) Kiểu dữ liêu | ![icons8-consultation.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-33-30-icons8-consultation.png) Giải thích |
> | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
> | - maso                                                                                                                             | String                                                                                                                                         | Mã số                                                                                                                                        |
> | - mau                                                                                                                              | String                                                                                                                                         | màu                                                                                                                                          |
> | - soLuong                                                                                                                          | int                                                                                                                                            | số lượng viên gạch trong 1 hộp                                                                                                               |
> | - chieudaiGach                                                                                                                     | int                                                                                                                                            | chiều dài viên gạch (*tính theo `cm`*)                                                                                                       |
> | - chieurongGach                                                                                                                    | int                                                                                                                                            | chiều ngang viên gạch (*tính theo `cm`*)                                                                                                     |
> | - giaBan                                                                                                                           | long                                                                                                                                           | giá bán `1` hộp                                                                                                                              |
> 
> | ![icons8-construction.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-36-40-icons8-construction.png) Hàm xây dựng | ![icons8-autograph.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-39-35-icons8-autograph.png) Tên hàm |
> | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
> | + Mặc nhiên                                                                                                                                    | `Gach()`                                                                                                                            |
> | + Hàm xây dựng 6 tham số                                                                                                                       | `Gach(String,String,int,int,int,long)`                                                                                              |
> 
> | ![icons8-webhook.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-35-44-icons8-webhook.png) Phương thức          | ![icons8-autograph.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-39-35-icons8-autograph.png) Tên hàm |
> | -------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
> | + Nhập thông tin cho 1 hộp gạch                                                                                                              | `void nhapGach()`                                                                                                                   |
> | + Hiển thị thông tin của 1 hộp gạch                                                                                                          | `void hienthiGach()`                                                                                                                |
> | + Tính giá bán lẻ của 1 viên gạch (*biết rằng giá bán lẻ cao hơn bán nguyên hộp là `20%`*)                                                   | `float giaBanLe()`                                                                                                                  |
> | + Tính **diện tích** nền tối đa có thể lót được hộp gạch                                                                                     | `float dienTichNen()`                                                                                                               |
> | + Tính **số lượng** hộp gạch ít nhất cần có khi lót 1 nền có diện tích là `D*N`  (*Quy định lót đúng chiều gạch , không cho xoay viên gạch*) | `int soLuongHop(int D,int N)`                                                                                                       |
> 
> ![icons8-hand_with_pen.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-23-26-35-icons8-hand_with_pen.png) Viết lớp `SDGach` có chứa hàm `main()` thực hiện các công việc sau : 
> 
> - Nhập 1 danh sách gồm `n` gạch lót nền (*với `n` được nhập từ bàn phím*)
> - Hiển thị ra màn hình thông tin các loại gạch vừa nhập
> - Hiển thị ra màn hình loại gạch có chi phí thấp nhất (*giá tiền/đơn vị diện tích*)
> - Tính ra chi phí mua gạch khi ta lót 1 diện tích có chiều ngang là `5m` và chiều dài là `20m`, khi ta dùng từng loại gạch trong danh sách trên.

| ![05123526E Learningpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/07-11-21-11-05-12-35-26-E%20Learning.png) Giải |
| ----------------------------------------------------------------------------------------------------------------------------------------- |
| [Gach.java](https://github.com/Zenfection/CTU/blob/main/HocPhan/CT176-Lap_trinh_huong_doi_tuong/SourceCode/Buoi3/BT_1/Gach.java)          |
| [SDGach.java](https://github.com/Zenfection/CTU/blob/main/HocPhan/CT176-Lap_trinh_huong_doi_tuong/SourceCode/Buoi3/BT_1/SDGach.java)      |

---

> ![icons8-questions.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-12-38-09-icons8-questions.png) **Bài 2:** Cài đặt lớp `DoanThang` (*đoạn thẳng*) gồm :
> 
> | ![icons8-package.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-23-20-42-icons8-package.png) Thuộc tính | ![icons8-data_quality.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-40-34-icons8-data_quality.png)Kiểu dữ liệu |
> | ---------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
> | - d1                                                                                                                               | int                                                                                                                                           |
> | - d2                                                                                                                               | int                                                                                                                                           |
> 
> | ![icons8-construction.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-36-40-icons8-construction.png) Hàm xây dựng | ![icons8-autograph.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-39-35-icons8-autograph.png) Tên hàm |
> | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
> | + Mặc nhiên                                                                                                                                    | `DoanThang()`                                                                                                                       |
> | + 2 tham số                                                                                                                                    | `DoanThang(Diem,Diem)`                                                                                                              |
> | + 4 tham số                                                                                                                                    | `DoanThang(int ax,int ay,int bx,int by)`                                                                                            |
> 
> | ![icons8-webhook.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-35-44-icons8-webhook.png) Phương thức | ![icons8-autograph.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-39-35-icons8-autograph.png) Tên hàm |
> | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
> | + Nhập toạ độ của đoạn thẳng                                                                                                        | `void nhapDoanThang()`                                                                                                              |
> | + Hiển thị giá trị 2 đầu mút của đoạn thẳng                                                                                         | `void hienThiDoanThang()`                                                                                                           |
> | + Tịnh tiến đoạn thẳng đi 1 độ dời (*dx,dy*) nào đó                                                                                 | `void tinhTien(int dx,int dy)`                                                                                                      |
> | + Tính độ dài đoạn thẳng.                                                                                                           | `float doDaiDoanThang()`                                                                                                            |
> | + Tính góc của đoạn thẳng với trục hoành                                                                                            | `double gocDoanThang()`                                                                                                             |
> 
> ![icons8-hand_with_pen.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-23-26-35-icons8-hand_with_pen.png) Viết lớp `SDDoanThang` có chứa hàm `main()` thực hiện các công việc sau : 
> 
> - Tạo 2 điểm là `A(2,5)` , `B(20,35)`. Tạo đoạn thẳng `AB`. Tịnh tiến `AB` đi đoạn `(5,3)`
> - Tạo một đoạn thẳng bất kỳ `CD`. Nhập giá trị cho đoạn `CD` đó.
> - Hiển thị ra màn hình độ dài `CD`, góc `CD` với trục hoành

| ![05123526E Learningpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/07-11-21-11-05-12-35-26-E%20Learning.png) Giải      |
| ---------------------------------------------------------------------------------------------------------------------------------------------- |
| [DoanThang.java](https://github.com/Zenfection/CTU/blob/main/HocPhan/CT176-Lap_trinh_huong_doi_tuong/SourceCode/Buoi3/BT_2/DoanThang.java)     |
| [SDDoanThang.java](https://github.com/Zenfection/CTU/blob/main/HocPhan/CT176-Lap_trinh_huong_doi_tuong/SourceCode/Buoi3/BT_2/SDDoanThang.java) |

---

> ![icons8-questions.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-12-38-09-icons8-questions.png) **Bài 3:** Cài đặt lớp `SinhVien` (*sinh viên*) gồm : 
> 
> | ![icons8-package.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-23-20-42-icons8-package.png) Thuộc tính | ![icons8-data_quality.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-40-34-icons8-data_quality.png) Kiễu dữ liệu | ![icons8-consultation.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-33-30-icons8-consultation.png) Giải thích |
> | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
> | - maSV                                                                                                                             | String                                                                                                                                         | Mã số Sinh Viên                                                                                                                              |
> | - hoTen                                                                                                                            | String                                                                                                                                         | Họ tên                                                                                                                                       |
> | - ngaySinh                                                                                                                         | Date                                                                                                                                           | Ngày Sinh                                                                                                                                    |
> | - hpDangKy                                                                                                                         | int                                                                                                                                            | số lượng HP đăng ký                                                                                                                          |
> | - tenHPDangKy                                                                                                                      | mảng String                                                                                                                                    | tên các học phần đăng ký                                                                                                                     |
> | - diemHP                                                                                                                           | mảng String                                                                                                                                    | điểm của các học phần                                                                                                                        |
> 
> | ![icons8-construction.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-36-40-icons8-construction.png) Hàm xây dựng | ![icons8-autograph.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-39-35-icons8-autograph.png) Tên hàm |
> | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
> | + Mặc nhiên                                                                                                                                    | `SinhVien()`                                                                                                                        |
> | + 6 tham số                                                                                                                                    | `SinhVien(String,String,Date,int,String,String[])`                                                                                  |
> 
> | ![icons8-webhook.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-35-44-icons8-webhook.png) Phương thức | ![icons8-autograph.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-39-35-icons8-autograph.png) Tên hàm |
> | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
> | + Nhập thông tin cơ bản của Sinh Viên                                                                                               | `void nhapSV()`                                                                                                                     |
> | + Nhập điểm cho các học phần của sinh viên                                                                                          | `void nhapDiemHP()`                                                                                                                 |
> | + Xuất ra chuỗi là thông tin sinh viên (*dùng `toString()`*)                                                                        | `void inThongTinSV()`                                                                                                               |
> | + Tính ra điểm trung bình của sinh viên theo thang điểm `4`                                                                         | `float diemHP()`                                                                                                                    |
> | + Đăng ký thêm 1 học phần cho sinh viên                                                                                             | `void dangKyHP()`                                                                                                                   |
> | + Xoá 1 học phần của sinh viên                                                                                                      | `void xoaHP`                                                                                                                        |
> 
> ![icons8-hand_with_pen.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-23-26-35-icons8-hand_with_pen.png) Viết lớp `SDSinhVien` có chứa hàm `main()` gồm : 
> 
> - Tạo sinh viên `a`. Nhập thông tin sinh viên `a`. Đăng ký thêm cho sinh viên `a` 1 học phần là `LTHDT`. Hiển thị thông tin của `a`.
> - Tạo một danh sách sinh viên, nhập thông tin cho danh sách trên
> - Tìm các sinh viên bị cảnh cáo học vụ
> - Tìm sinh viên có điểm trung bình cao nhất lớp.
> - Hiển thị danh sách sinh viên theo thứ tự `Alphabet` của Tên

| ![05123526E Learningpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/07-11-21-11-05-12-35-26-E%20Learning.png) Giải    |
| -------------------------------------------------------------------------------------------------------------------------------------------- |
| [SinhVien.java](https://github.com/Zenfection/CTU/blob/main/HocPhan/CT176-Lap_trinh_huong_doi_tuong/SourceCode/Buoi3/BT_3/SinhVien.java)     |
| [SDSinhVien.java](https://github.com/Zenfection/CTU/blob/main/HocPhan/CT176-Lap_trinh_huong_doi_tuong/SourceCode/Buoi3/BT_3/SDSinhVien.java) |