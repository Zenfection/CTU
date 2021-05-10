# ![icons8gurupng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-12-52-icons8-guru.png) Bài tập Các câu lệnh SQL ![icons8-5_cute.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-17-21-09-icons8-5_cute.png)

## ![icons8-database_view.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-13-17-41-icons8-database_view.png) 1.Ta có bảng danh sách công trình như sau :

| KienTrucSu                                                                                                                       | ChuThau                                                                                                                           | ChuNhan                                                                                                                             | CongNhan                                                                                                                              | CongTrinh                                                                                                                              | ThamGia                                                                                                                                | ThietKe                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| MSKTS ![icons8redsquarepng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-03-33-icons8-red_square.png) | MSCT ![icons8bluesquarepng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-03-59-icons8-blue_square.png) | MSCH ![icons8brownsquarepng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-10-46-icons8-brown_square.png) | MSCN ![icons8yellowsquarepng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-04-23-icons8-yellow_square.png) | STTCT ![icons8purplesquarepng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-10-02-icons8-purple_square.png) | MSCN ![icons8yellowsquarepng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-04-23-icons8-yellow_square.png)  | MSKTS ![icons8redsquarepng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-03-33-icons8-red_square.png)       |
| HoTenKTS                                                                                                                         | TenThau                                                                                                                           | TenChu                                                                                                                              | HoTenCN                                                                                                                               | TenCT                                                                                                                                  | STTCT ![icons8purplesquarepng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-10-02-icons8-purple_square.png) | STTCT ![icons8purplesquarepng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-10-02-icons8-purple_square.png) |
| NamSinhKTS                                                                                                                       | DienThoai                                                                                                                         | DiaChiChu                                                                                                                           | NamSinhCN                                                                                                                             | DiaChiCT                                                                                                                               | NgayTG                                                                                                                                 | ThuLao                                                                                                                                 |
| Phai                                                                                                                             | DiachiThau                                                                                                                        |                                                                                                                                     | NamVaoNghe                                                                                                                            | TinhThanh                                                                                                                              | SoNgay                                                                                                                                 |                                                                                                                                        |
| NoiTN                                                                                                                            |                                                                                                                                   |                                                                                                                                     | ChuyenMon                                                                                                                             | KinhPhi                                                                                                                                |                                                                                                                                        |                                                                                                                                        |
| DiachiKTS                                                                                                                        |                                                                                                                                   |                                                                                                                                     |                                                                                                                                       | MSCH ![icons8brownsquarepng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-10-46-icons8-brown_square.png)    |                                                                                                                                        |                                                                                                                                        |
|                                                                                                                                  |                                                                                                                                   |                                                                                                                                     |                                                                                                                                       | MSCT ![icons8bluesquarepng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-03-59-icons8-blue_square.png)      |                                                                                                                                        |                                                                                                                                        |
|                                                                                                                                  |                                                                                                                                   |                                                                                                                                     |                                                                                                                                       | NgayBD                                                                                                                                 |                                                                                                                                        |                                                                                                                                        |

> ![icons8howquestpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-13-09-24-icons8-how_quest.png) Cách bước chuẩn bị tài nguyên như sau :
> 
> - ![icons8downloadpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-13-00-54-icons8-download.png) **B1**: Download `Database` **công trình** [tại đây](https://github.com/Zenfection/CTU/raw/main/HocPhan/CT180-Co_so_du_lieu/Baitap/2.Cau_lenh_SQL/congtrinh.bak)
> 
> - ![icons8restorepng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-13-01-06-icons8-restore.png) **B2**: Restore file `congtrinh.bak` [như sau](https://www.youtube.com/watch?v=oo4C-As6caI)
> 
> - ![icons8landlordpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-13-01-39-icons8-landlord.png) **B3**: Thiết lập chủ sở hữu cho `database` vừa **Restore** để có thể dùng được tính năng như `Database Diagram` ==> làm [như sau](https://www.youtube.com/watch?v=Xbxu2hrssHk)

---

## <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-15-19-04-icons8-questionnaire.png" alt="icons8-questionnaire.png" width="40"> 2.Danh sách các câu hỏi

| ![icons8googlecode30pxpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/08-10-24-29-icons8_google_code_30px.png) Source Code |
| ------------------------------------------------------------------------------------------------------------------------------------------------- |
| [query_2.sql](https://github.com/Zenfection/CTU/blob/main/HocPhan/CT180-Co_so_du_lieu/Baitap/2.Cau_lenh_SQL/bai1/query_2.sql)                     |

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-59-15-icons8-questions.png) **Câu 1**: Cho biết **mã số**, **họ tên** `công nhân` và **tên** `công trình` mà `công nhân` đó `tham gia` kể cả `công nhân` không có `tham gia` `công trình` nào.

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

```sql

```

⇨  

---

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-59-15-icons8-questions.png) **Câu 2**: Cho biết **mã số**, **họ tên** `công nhân` <u>không</u> `tham gia` `công trình` nào.

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

```sql

```

⇨  

---

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-59-15-icons8-questions.png) **Câu 3**: Cho  biết **số** `công nhân` `tham gia` vào mỗi `c`

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

```sql

```

⇨  

---

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-59-15-icons8-questions.png) **Câu 4**: Cho biết **số** `công trình` mà mỗi `công nhân` `tham gia`, kể cả `công nhân` <u>không có</u> `tham gia` `công trình` nào

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

```sql

```

⇨  

---

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-59-15-icons8-questions.png) **Câu 5**: Cho biết **họ tên** và **nơi  tốt nghiệp** của `kiến trúc sư` <u>không</u> `thiết kế` `công trình` nào

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

```sql

```

⇨  

---

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-59-15-icons8-questions.png) **Câu 6**: Cho biết **tên** `công trình` mà chưa có `kiến trúc sư` nào `thiết kế`

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

```sql

```

⇨  

---

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-59-15-icons8-questions.png) **Câu 7**: Viết **thủ tục** cho biết <u>tổng</u> **kinh phí** các `công trình` theo từng **tỉnh thành**

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

```sql

```

⇨  

---

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-59-15-icons8-questions.png) **Câu 8**: Viết **thủ tục** cho biết **kinh phí** <u>nhỏ nhất</u> của các `công trình` ở **tỉnh thành**, với **tỉnh thành** là <u>tham số</u>

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

```sql

```

⇨  

---

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-59-15-icons8-questions.png) **Câu 9**: Viết **hàm** đếm **số** `kiến trúc sư` đã `thiết kế` `công trình`. In kết quả lên màn hình

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

```sql

```

⇨  

---

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-59-15-icons8-questions.png) **Câu 10**: Viết **hàm** đếm **số** `kiến trúc sư` `thiết kế` `công trình` ở **tỉnh thành**, vởi **tỉnh thành** là <u>tham số</u>. In kết quả lên màn hình

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

```sql

```

⇨  

---

</details>