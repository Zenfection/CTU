# ![Executive Malepng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-19-06-19-Executive%20Male.png) Buổi thực hành 4 - Lập trình OOP ![Executive Femalepng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-19-07-40-Executive%20Female.png)

> ![icons8-questions.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-12-38-09-icons8-questions.png) **Bài 1:** Cài đặt lớp `DiemMau` (*Diểm có màu*) **thừa kế** từ lớp `Diem` (*định nghĩa trong* [buổi 2](https://github.com/Zenfection/HPCTU/blob/main/LTHDT/buoi2.md), bổ sung thêm : 
> 
> | ![icons8-package.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-23-20-42-icons8-package.png) Thuộc tính | ![icons8-data_quality.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-40-34-icons8-data_quality.png) Kiểu dữ liệu |
> | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
> | - màu                                                                                                                              | String                                                                                                                                         |
> 
> | ![icons8-construction.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-36-40-icons8-construction.png) Hàm xây dựng | ![icons8autographpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-39-35-icons8-autograph.png) Tên hàm |
> | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
> | + Mặc nhiên                                                                                                                                    | `DiemMau()`                                                                                                                       |
> | + 3 đối số                                                                                                                                     | `DiemMau(int,int,String)`                                                                                                         |
> 
> | ![icons8-webhook.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-35-44-icons8-webhook.png) Phương thức | ![icons8autographpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-39-35-icons8-autograph.png) Tên hàm |
> | ----------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
> | + Gán giá trị màu cho điểm                                                                                                          | `void ganMau(String mau)`                                                                                                         |
> | + Nhập màu                                                                                                                          | `void nhapMau()`                                                                                                                  |
> | + Hiển thị màu                                                                                                                      | `void hienThiMau()`                                                                                                               |
> | ....                                                                                                                                | ....                                                                                                                              |
> 
> Viết lớp `SDDiemMau` có hàm `main()` thực hiện các công việc sau : 
> 
> - Tạo một điểm màu `A` có toạ độ là `(5,10)` và màu là trắng. Hiển thị thông tin ra màn hình
> - Tạo một điểm màu tổng quát `B`. Nhập giá trị từ bàn phím cho điểm `B`. Dời điểm `B` đi 1 độ dời `10,8`. Hiển thị toạ độ điểm B ra màn hình. Gán màu mới cho điểm `B` là màu `Vàng`.

| ![05123526E Learningpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/07-11-21-11-05-12-35-26-E%20Learning.png) Giải  |
| ------------------------------------------------------------------------------------------------------------------------------------------ |
| [DiemMau.java](https://github.com/Zenfection/CTU/blob/main/HocPhan/CT176-Lap_trinh_huong_doi_tuong/SourceCode/Buoi4/BT_1/DiemMau.java)     |
| [SDDiemMau.java](https://github.com/Zenfection/CTU/blob/main/HocPhan/CT176-Lap_trinh_huong_doi_tuong/SourceCode/Buoi4/BT_1/SDDiemMau.java) |

---

> ![icons8-questions.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-12-38-09-icons8-questions.png) **Bài 2:** Cài đặt lớp `SinhVienCNTT` (*Sinh viên công nghệ thông tin*) **thừa kế** từ lớp `SinhVien` (*đã định nghĩa trong* [buổi 3](https://github.com/Zenfection/HPCTU/blob/main/LTHDT/buoi3.md)), bổ sung thêm :
> 
> | ![icons8-package.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-23-20-42-icons8-package.png) Thuộc tính | ![icons8-data_quality.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-40-34-icons8-data_quality.png) Kiểu dữ liệu |
> | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
> | - taikhoan                                                                                                                         | String                                                                                                                                         |
> | - matkhau                                                                                                                          | String                                                                                                                                         |
> | - email                                                                                                                            | String                                                                                                                                         |
> 
> | ![icons8-construction.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-36-40-icons8-construction.png) Hàm xây dựng | ![icons8autographpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-39-35-icons8-autograph.png) Tên hàm |
> | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
> | + Mặc nhiên                                                                                                                                    | `SinhVienCNTT()`                                                                                                                  |
> | + 4 đối số                                                                                                                                     | `SinhVienCNTT(SinhVien,String,String,String)`                                                                                     |
> 
> | ![icons8-webhook.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-35-44-icons8-webhook.png) Phương thức | ![icons8autographpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-11-39-35-icons8-autograph.png) Tên hàm |
> | ----------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
> | + Nhập thông tin Sinh Viên CNTT                                                                                                     | `void nhapSVCNTT()`                                                                                                               |
> | + Nạp đè phương thức `toString()` để xuất ra thông tin của một sinh viên `CNTT`                                                     | `void hienThiSVCNTT()`                                                                                                            |
> | + Đổi mật khẩu                                                                                                                      | `void doiMatKhau(String newpass)`                                                                                                 |
> | + Lấy ra địa chỉ email của Sinh Viên                                                                                                | `String getEmail()`                                                                                                               |
> 
> Viết lớp `SDSVCNTT` có hàm `main()` thực hiện các công việc sau : 
> 
> - Tạo một danh sách gồm `n` sinh viên CNTT. Nhập thông tin cho danh sách đó.
> - Nhập vào một địa chỉ `email`. Tìm tài khoản  của sinh viên đó có địa chỉ `email` trên. Hiển thị kết quả học tập của Sinh Viên đó.

| ![05123526E Learningpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/07-11-21-11-05-12-35-26-E%20Learning.png) Giải |
| ----------------------------------------------------------------------------------------------------------------------------------------- |
| [SVCNTT.java](https://github.com/Zenfection/CTU/blob/main/HocPhan/CT176-Lap_trinh_huong_doi_tuong/SourceCode/Buoi4/BT_2/SVCNTT.java)      |
| [SDSVCNTT.java](https://github.com/Zenfection/CTU/blob/main/HocPhan/CT176-Lap_trinh_huong_doi_tuong/SourceCode/Buoi4/BT_2/SDSVCNTT.java)  |

---

> ![icons8-questions.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/05-12-38-09-icons8-questions.png) **Bài 3:** Một nông trại có nuôi một số con vật như sau : `bò`,`heo`,`dê`. Tất cả các con vật trên đều có những thông tin chung như : `giống`,`màu lông`,`cân nặng`... nhưng tiếng kêu của các con vật là khác nhau.
> 
> Thiết kế sơ đồ thừa kế gồm các lớp : 
> 
> - Lớp `ConVat` gồm các thông tin chung của các con vật nêu trên và phương thức `Keu()`
> - Các lớp `Bo`,`Heo`,`De` thừa kế từ lớp `ConVat` và nạp đè phương thức `Keu()`.
> 
> Viết lớp `SDConVat` chứa hàm `main()` thực hiện công việc sau : 
> 
> - Tạo ra `n` con vật bất kỳ gồm 3 loại trên. Nhập thông tin cho các con vật.
> - Cho `n` con vật đó kêu.
> 
> Giả sử nông trại bổ sung thêm 1 con vật nuôi khác là `Gà`. Hãy thêm lớp `Ga` vào thiết kế chương trình của mình và thực hiện lại. Quan sát kết quả.

| ![05123526E Learningpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/07-11-21-11-05-12-35-26-E%20Learning.png) Giải |
| ----------------------------------------------------------------------------------------------------------------------------------------- |
| [ConVat.java](https://github.com/Zenfection/CTU/blob/main/HocPhan/CT176-Lap_trinh_huong_doi_tuong/SourceCode/Buoi4/BT_3/ConVat.java)      |
| [ConBo.java](https://github.com/Zenfection/CTU/blob/main/HocPhan/CT176-Lap_trinh_huong_doi_tuong/SourceCode/Buoi4/BT_3/ConBo.java)        |
| [ConHeo.java](https://github.com/Zenfection/CTU/blob/main/HocPhan/CT176-Lap_trinh_huong_doi_tuong/SourceCode/Buoi4/BT_3/ConHeo.java)      |
| [ConDe.java](https://github.com/Zenfection/CTU/blob/main/HocPhan/CT176-Lap_trinh_huong_doi_tuong/SourceCode/Buoi4/BT_3/ConDe.java)        |
| [SDConVat](https://github.com/Zenfection/CTU/blob/main/HocPhan/CT176-Lap_trinh_huong_doi_tuong/SourceCode/Buoi4/BT_3/SDConVat.java)       |
