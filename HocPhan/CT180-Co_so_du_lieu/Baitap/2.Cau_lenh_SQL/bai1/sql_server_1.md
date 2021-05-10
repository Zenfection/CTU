# ![icons8gurupng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-12-52-icons8-guru.png)Bài tập Các câu lệnh SQL ![icons8-1_cute.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-13-18-59-icons8-1_cute.png)

## ![icons8-database_view.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-13-17-41-icons8-database_view.png)1.Ta có bảng danh sách công trình như sau :

| KienTrucSu                                                                                                                                                            | ChuThau                                                                                                                                                                | ChuNhan                                                                                                                                                                  | CongNhan                                                                                                                                                                   | CongTrinh                                                                                                                                                                   | ThamGia                                                                                                                                                                     | ThietKe                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MSKTS <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-03-33-icons8-red_square.png" alt="icons8-red_square.png" width="15"> | MSCT <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-03-59-icons8-blue_square.png" alt="icons8-blue_square.png" width="15"> | MSCH <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-10-46-icons8-brown_square.png" alt="icons8-brown_square.png" width="15"> | MSCN <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-04-23-icons8-yellow_square.png" alt="icons8-yellow_square.png" width="15"> | STTCT <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-10-02-icons8-purple_square.png" title="" alt="icons8-purple_square.png" width="15"> | MSCN <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-04-23-icons8-yellow_square.png" alt="icons8-yellow_square.png" width="15">  | MSKTS <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-03-33-icons8-red_square.png" alt="icons8-red_square.png" width="15">       |
| HoTenKTS                                                                                                                                                              | TenThau                                                                                                                                                                | TenChu                                                                                                                                                                   | HoTenCN                                                                                                                                                                    | TenCT                                                                                                                                                                       | STTCT <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-10-02-icons8-purple_square.png" title="" alt="icons8-purple_square.png" width="15"> | STTCT <img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-10-02-icons8-purple_square.png" title="" alt="icons8-purple_square.png" width="15"> |
| NamSinhKTS                                                                                                                                                            | DienThoai                                                                                                                                                              | DiaChiChu                                                                                                                                                                | NamSinhCN                                                                                                                                                                  | DiaChiCT                                                                                                                                                                    | NgayTG                                                                                                                                                                      | ThuLao                                                                                                                                                                      |
| Phai                                                                                                                                                                  | DiachiThau                                                                                                                                                             |                                                                                                                                                                          | NamVaoNghe                                                                                                                                                                 | TinhThanh                                                                                                                                                                   | SoNgay                                                                                                                                                                      |                                                                                                                                                                             |
| NoiTN                                                                                                                                                                 |                                                                                                                                                                        |                                                                                                                                                                          | ChuyenMon                                                                                                                                                                  | KinhPhi                                                                                                                                                                     |                                                                                                                                                                             |                                                                                                                                                                             |
| DiachiKTS                                                                                                                                                             |                                                                                                                                                                        |                                                                                                                                                                          |                                                                                                                                                                            | MSCH <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-10-46-icons8-brown_square.png" alt="icons8-brown_square.png" width="15">    |                                                                                                                                                                             |                                                                                                                                                                             |
|                                                                                                                                                                       |                                                                                                                                                                        |                                                                                                                                                                          |                                                                                                                                                                            | MSCT <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-03-59-icons8-blue_square.png" alt="icons8-blue_square.png" width="15">      |                                                                                                                                                                             |                                                                                                                                                                             |
|                                                                                                                                                                       |                                                                                                                                                                        |                                                                                                                                                                          |                                                                                                                                                                            | NgayBD                                                                                                                                                                      |                                                                                                                                                                             |                                                                                                                                                                             |

> ![icons8-how_quest.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-13-09-24-icons8-how_quest.png) Cách bước chuẩn bị tài nguyên như sau : 
> 
> - ![icons8-download.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-13-00-54-icons8-download.png) **B1**: Download `Database` **công trình** [tại đây](https://github.com/Zenfection/CTU/raw/main/HocPhan/CT180-Co_so_du_lieu/Baitap/2.Cau_lenh_SQL/congtrinh.bak)
> 
> - ![icons8-restore.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-13-01-06-icons8-restore.png) **B2**: Restore file `congtrinh.bak`  [như sau](https://www.youtube.com/watch?v=oo4C-As6caI)
> 
> - ![icons8-landlord.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-13-01-39-icons8-landlord.png) **B3**: Thiết lập chủ sở hữu cho `database` vừa **Restore** để có thể dùng được tính năng như `Database Diagram` ==> làm [như sau ](https://www.youtube.com/watch?v=Xbxu2hrssHk)

---

## <img title="" src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-15-19-04-icons8-questionnaire.png" alt="icons8-questionnaire.png" width="40"> 2.Danh sách các câu hỏi

| ![icons8googlecode30pxpng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/08-10-24-29-icons8_google_code_30px.png) Source Code |
| ------------------------------------------------------------------------------------------------------------------------------------------------- |
| [query_1.sql](https://github.com/Zenfection/CTU/blob/main/HocPhan/CT180-Co_so_du_lieu/Baitap/2.Cau_lenh_SQL/bai1/query_1.sql)                     |

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-59-15-icons8-questions.png) **Câu 1**. Cho biết **tên** và **địa chỉ** các `công trình` do `chủ thầu` *Hồng Xuân Trường* thi công

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

```sql
SELECT CongT.TENCT, CongT.DIACHICT
FROM dbo.congtrinh as CongT, dbo.chuthau as ChuT
WHERE CongT.MSCT = ChuT.MSCT
AND ChuT.TENTHAU = 'Hong Xuan Truong'
```

⇨ `5` records

---

</details>

> **Câu 2**.  Cho biết biết **tên** và **địa chỉ** liên lạc của các `chủ thầu` thi công `công trình` ở *Cần Thơ* cho `kiến trúc sư` *Lê Kim Dung* `thiết kết`

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

```sql
SELECT ChuT.TENTHAU, ChuT.DIACHITHAU
FROM dbo.congtrinh as CongT, dbo.chuthau as ChuT, dbo.kientrucsu as KTS, dbo.thietke as TK
WHERE TK.MSKTS = KTS.MSKTS
AND TK.STTCT = CongT.STTCT
AND ChuT.MSCT = CongT.MSCT
AND KTS.HOTENKTS = 'Le Kim Dung'
AND CongT.TINHTHANH = 'can tho'
```

⇨ `1` record

---

</details>

> **Câu 3**. Cho biết **họ tên** và **nơi tốt nghiệp** của các `kiến trúc sư` đã `thiết kế` `công trình` *Khách Sạn Quốc Tế* ở *Cần Thơ*

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

```sql
SELECT KTS.HOTENKTS, KTS.NOITN
FROM dbo.kientrucsu as KTS, dbo.thietke as TK, dbo.congtrinh as CongT
WHERE TK.MSKTS = KTS.MSKTS
AND TK.STTCT = CongT.STTCT
AND CongT.TENCT = 'Khach san quoc te'
AND CongT.TINHTHANH = 'can tho'
```

⇨ `2` records

---

</details>

> **Câu 4**. Cho biết **họ tên**, **năm sinh**, **năm vào nghề** của các `công nhân` có **chuyên môn** *hàn* hoặc *điện* đã `tham gia` các `công trình`mà *Lê Văn Sơn* là `chủ thầu`

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

```sql
SELECT CN.HOTENCN, CN.NGAYSINH
FROM dbo.congnhan as CN, dbo.congtrinh as CongT, dbo.chuthau as ChuT, dbo.thamgia as TG
WHERE TG.MSCN = CN.MSCN
AND TG.STTCT = CongT.STTCT
AND ChuT.MSCT = CongT.MSCT
AND ChuT.TENTHAU = 'Le Van Son'
AND (CN.CHUYENMON = 'han' OR CN.CHUYENMON = 'dien')
```

> 🔥 **Năm vào nghề** không có trong record `công nhân` nên **bỏ nha**

⇨ `19` records

---

</details>

> **Câu 5**. Cho biết **họ tên** `công nhân` `tham gia` `công trình` *Khách sạn Quốc Tế* ở *Cần Thơ* trong giai đoạn từ *ngày <u>15/12/1994</u> đến ngày <u>31/12/1994</u>* và *số ngày tham gia* tương ứng là bao nhiêu

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

```sql
SELECT CN.HOTENCN, TG.SONGAY
FROM dbo.congtrinh as CongT, dbo.congnhan as CN, dbo.thamgia as TG
WHERE TG.MSCN = CN.MSCN
AND TG.STTCT = CongT.STTCT
AND CongT.TENCT = 'Khach san quoc te'
AND CongT.TINHTHANH = 'can tho'
AND (CongT.NGAYBD BETWEEN '1994-12-15' AND  '1994-12-31')
```

⇨ `41` records

---

</details>

> **Câu 6**. Cho biết **tên** và **địa chỉ** của `công trình` mà `công nhân` *Nguyễn Hồng Gấm* có `tham gia` vào ngày <u>18/12/1994</u>

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

```sql
SELECT * 
FROM dbo.congtrinh as CongT, dbo.congnhan as CN, dbo.thamgia as TG
WHERE TG.MSCN = CN.MSCN
AND TG.STTCT = CongT.STTCT
AND CN.HOTENCN = 'Nguyen Hong Gam'
```

⇨ `3` records

---

</details>

> **Câu 7**.  Cho biết **họ tên** và **năm sinh** của các `kiến trúc sư` đã **tốt nghiệp** ở *thành phố Hồ Chí Minh* và đã `thiết kế` `công trình` có **kinh phí** trên <u>400 triệu đồng</u>

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

```sql
SELECT *
FROM dbo.kientrucsu as KTS, dbo.congtrinh as CongT, dbo.thietke as TK
WHERE TK.STTCT = CongT.STTCT
AND TK.MSKTS = KTS.MSKTS
AND KTS.NOITN = 'tphcm'
AND CongT.KINHPHI > 400
```

> ⚠️ **Thay đổi** `CongT.KINHPHI > 400` nếu nó sai nhé

⇨ `11` records

---

</details>

> **Câu 8**. Cho biết **họ tên** và **chuyên môn** của các `công nhân` `tham gia` vào các `công trình` do `kiến trúc sư` *Nguyễn Anh Thư* thiết kế

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

```sql
SELECT CN.HOTENCN, CN.CHUYENMON
FROM dbo.congnhan as CN, dbo.congtrinh as CongT, dbo.kientrucsu as KTS, dbo.thamgia as TG, dbo.thietke as TK
WHERE TG.MSCN = CN.MSCN
AND TG.STTCT = CongT.STTCT
AND TK.MSKTS = KTS.MSKTS
AND TK.STTCT = CongT.STTCT
AND KTS.HOTENKTS = 'nguyen anh thu'
```

⇨ `116` records

---

</details>

> **Câu 9**. Cho biết **họ tên** `chủ nhân` của các `công trình` do `kiến trúc sư` *Nguyễn Anh Thư* `thiết kế` và `chủ thầu` là *Hoàng Công Bình*

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

```sql
SELECT ChuN.TENCHU
FROM dbo.chunhan as ChuN, dbo.congtrinh as CongT, dbo.kientrucsu as KTS, dbo.thietke as TK,dbo.chuthau as ChuT
WHERE TK.MSKTS = KTS.MSKTS
AND TK.STTCT = CongT.STTCT
AND ChuN.MSCH = CongT.MSCH
AND ChuT.MSCT = CongT.MSCT
AND KTS.HOTENKTS = 'nguyen anh thu' 
AND ChuT.TENTHAU = 'hoang cong binh'
```

⇨ `0` records

---

</details>

> **Câu 10**. Cho biết tên các `công trình` do các `kiến trúc sư` **tốt nghiệp** ở *thành phố Hồ Chí Minh* `thiết kế`

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

```sql
SELECT CongT.TENCT
FROM dbo.congtrinh as CongT, dbo.kientrucsu as KTS, dbo.thietke as TK
WHERE TK.STTCT = CongT.STTCT
AND TK.MSKTS = KTS.MSKTS
AND KTS.NOITN = 'tphcm'
```

⇨ `13` records

---

</details>
