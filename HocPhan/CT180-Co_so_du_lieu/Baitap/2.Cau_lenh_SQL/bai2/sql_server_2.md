# ![icons8gurupng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-12-52-icons8-guru.png)Bài tập Các câu lệnh SQL ![icons8-2_cute.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-13-46-27-icons8-2_cute.png)

## ![icons8-database_view.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-13-17-41-icons8-database_view.png) 1.Ta có bảng danh sách công trình như sau :

| KienTrucSu                                                                                                                       | ChuThau                                                                                                                           | ChuNhan                                                                                                                             | CongNhan                                                                                                                              | CongTrinh                                                                                                                              | ThamGia                                                                                                                                | ThietKe                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| MSKTS ![icons8redsquarepng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-03-33-icons8-red_square.png) | MSCT ![icons8bluesquarepng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-03-59-icons8-blue_square.png) | MSCH ![icons8brownsquarepng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-10-46-icons8-brown_square.png) | MSCN ![icons8yellowsquarepng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-04-23-icons8-yellow_square.png) | STTCT ![icons8purplesquarepng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-10-02-icons8-purple_square.png) | MSCN ![icons8yellowsquarepng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-04-23-icons8-yellow_square.png)  | MSKTS ![icons8redsquarepng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-03-33-icons8-red_square.png)       |
| HoTenKTS                                                                                                                         | TenThau                                                                                                                           | TenChu                                                                                                                              | HoTenCN                                                                                                                               | TenCT                                                                                                                                  | STTCT ![icons8purplesquarepng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-10-02-icons8-purple_square.png) | STTCT ![icons8purplesquarepng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-10-02-icons8-purple_square.png) |
| NamSinhKTS                                                                                                                       | DienThoai                                                                                                                         | DiaChiChu                                                                                                                           | NamSinhCN                                                                                                                             | DiaChiCT                                                                                                                               | NgayTG                                                                                                                                 | ThuLao                                                                                                                                 |
| Phai                                                                                                                             | DiachiThau                                                                                                                        |                                                                                                                                     | NamVaoNghe                                                                                                                            | TinhThanh                                                                                                                              | SoNgay                                                                                                                                 |                                                                                                                                        |
| NoiTN                                                                                                                            |                                                                                                                                   |                                                                                                                                     | ChuyenMon                                                                                                                             | KinhPhi                                                                                                                                | S                                                                                                                                      |                                                                                                                                        |
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
| [query_2.sql](https://github.com/Zenfection/CTU/blob/main/HocPhan/CT180-Co_so_du_lieu/Baitap/2.Cau_lenh_SQL/bai2/query_2.sql)                     |

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-59-15-icons8-questions.png) **Câu 1**: Cho biết **họ tên** các `kiến trúc sư` vừa `thiết kế` các `công trình` do `chủ thầu` *Hoàng Xuân Bình* thi công, vừa `thiết kế` các `công trình` do `chủ thầu` *Lê Văn Sơn* thi công

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

```sql
SELECT KTS.HOTENKTS
FROM dbo.congtrinh as CongT, dbo.chuthau as ChuT,dbo.kientrucsu as KTS, dbo.thietke as TK
WHERE TK.MSKTS = KTS.MSKTS
AND TK.STTCT = CongT.STTCT
AND ChuT.MSCT = CongT.MSCT
AND ChuT.TENTHAU = 'hoang cong binh'

INTERSECT

SELECT KTS.HOTENKTS
FROM dbo.congtrinh as CongT, dbo.chuthau as ChuT,dbo.kientrucsu as KTS, dbo.thietke as TK
WHERE TK.MSKTS = KTS.MSKTS
AND TK.STTCT = CongT.STTCT
AND ChuT.MSCT = CongT.MSCT
AND ChuT.TENTHAU = 'le van son'
```

⇨  `3` records

---

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-59-15-icons8-questions.png) **Câu 2**: Cho biết **tên** `công trình` có **kinh phí** *cao nhất*

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

```sql
DECLARE @MaxKINHPHI INT

SELECT  @MaxKINHPHI = MAX(KINHPHI) FROM dbo.congtrinh
SELECT TENCT
FROM dbo.congtrinh
WHERE KINHPHI = @MaxKINHPHI
```

⇨  `1` record

---

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-59-15-icons8-questions.png) **Câu 3**: Cho biết **họ tên** các `công nhân` có `tham gia` các `công trình` ở *Cần thơ*, nhưng <u>không có</u> `tham gia` `công trình` ở *Vĩnh Long*

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

```sql
SELECT CN.HOTENCN
FROM dbo.congnhan as CN, dbo.congtrinh as CongT, dbo.thamgia as TG
WHERE TG.STTCT = CongT.STTCT
AND TG.MSCN = CN.MSCN
AND CongT.TINHTHANH = 'can tho'

EXCEPT

SELECT CN.HOTENCN
FROM dbo.congnhan as CN, dbo.congtrinh as CongT, dbo.thamgia as TG
WHERE TG.STTCT = CongT.STTCT
AND TG.MSCN = CN.MSCN
AND CongT.TINHTHANH = 'vinh long'
```

⇨  `11` records

---

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-59-15-icons8-questions.png) **Câu 4**: Cho biết **họ tên** của các `chủ thầu` đã thi công các `công trình` có **kinh phí** <u>lớn hơn tất cả</u> các **kinh phí** của `công trình` do `chủ thầu` là *Hoàng Công Bình* thi công

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

```sql
DECLARE @MaxKINHPHI_hoangcongbinh INT

SELECT @MaxKINHPHI_hoangcongbinh = MAX(CONVERT(int, CongT.KINHPHI))
FROM dbo.congtrinh as CongT, dbo.chuthau as ChuT,dbo.thamgia as TG
WHERE TG.STTCT = CongT.STTCT
AND ChuT.MSCT = CongT.MSCT
AND ChuT.TENTHAU = 'hoang cong binh'

SELECT DISTINCT ChuT.TENTHAU
FROM dbo.congtrinh as CongT, dbo.chuthau as ChuT,dbo.thamgia as TG
WHERE TG.STTCT = CongT.STTCT
AND ChuT.MSCT = CongT.MSCT
AND CongT.KINHPHI > @MaxKINHPHI_hoangcongbinh
```

> 💡 Dùng `CONVERT` chuyển sang `int` vì `CongT.KINHPHI` là `nvarchar`

⇨  `2` records

---

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-59-15-icons8-questions.png) **Câu 5**: Cho biết **họ tên** các `kiến trúc sư` có **thù lao** `thiết kế` cho một `công trình` nao đó <u>dưới <strong>thù lao</strong> trung bình</u> của <u>tất cả</u> các `công trình`

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

```sql
DECLARE @AVG_THULAO INT

SELECT @AVG_THULAO = AVG(CONVERT(int, THULAO))
FROM dbo.thietke as TK,dbo.kientrucsu as KTS,dbo.congtrinh as CongT
WHERE TK.MSKTS = KTS.MSKTS
AND TK.STTCT = CongT.STTCT

SELECT DISTINCT KTS.HOTENKTS
FROM dbo.thietke as TK,dbo.kientrucsu as KTS,dbo.congtrinh as CongT
WHERE TK.MSKTS = KTS.MSKTS
AND TK.STTCT = CongT.STTCT
AND TK.THULAO < @AVG_THULAO
```

> 💡 Dùng `CONVERT` chuyển sang `int` vì `TK.THULAO` là `nvarchar`

⇨  `9` records

---

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-59-15-icons8-questions.png) **Câu 6**: Cho biết **họ tên** và **địa chỉ** những `chủ thầu` là `chủ thầu` của các `công trình` có **kinh phí** <u>thấp nhất</u>.

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

```sql
DECLARE @Min_KINHPHI INT

SELECT @Min_KINHPHI = MIN(CONVERT(int, CongT.KINHPHI))
FROM dbo.congtrinh as CongT, dbo.chuthau as ChuT
WHERE ChuT.MSCT = CongT.MSCT

SELECT ChuT.TENTHAU,ChuT.DIACHITHAU
FROM dbo.congtrinh as CongT, dbo.chuthau as ChuT
WHERE ChuT.MSCT = CongT.MSCT
AND CongT.KINHPHI = @Min_KINHPHI
```

⇨  `1` records

---

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-59-15-icons8-questions.png) **Câu 7**: Cho biết **họ tên** và **chuyên môn** của các `công nhân` `tham gia` các `công trình` do `kiến trúc sư` *Lê Thanh Tùng* `thiết kế`

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

```sql
SELECT DISTINCT CN.HOTENCN, CN.CHUYENMON
FROM dbo.kientrucsu as KTS,dbo.congtrinh as CongT, dbo.congnhan as CN, dbo.thietke as TK, dbo.thamgia as TG
WHERE TK.MSKTS = KTS.MSKTS
AND TK.STTCT = CongT.STTCT
AND TG.MSCN = CN.MSCN
AND TG.STTCT = CongT.STTCT
AND KTS.HOTENKTS = 'le thanh tung';
```

⇨  `59` records

---

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-59-15-icons8-questions.png) **Câu 8**: Cho biết các <u>cặp</u> **họ tên** của các `chủ thầu` là `chủ thầu` của các `công trình` tại cùng một **tỉnh thành** nào đó. 

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

```sql

```

⇨  

---

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-59-15-icons8-questions.png) **Câu 9**: Cho biết các <u>cặp</u> **họ tên** của các `công nhân` có `tham gia` chung với nhau <u>ít nhất</u> **2** `công trình`

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

```sql

```

⇨  

---

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-59-15-icons8-questions.png) **Câu 10**: Cho biết **họ tên** `công nhân` `tham gia` các `công trình` có **kinh phí** <u>lớn hơn</u> **kinh phí** <u>trung bình</u> của các `công trình`

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

```sql
DECLARE @AVG_KINHPHI INT

SELECT @AVG_KINHPHI = AVG(CONVERT(int, CongT.KINHPHI))
FROM dbo.congtrinh as CongT, dbo.congnhan as CN, dbo.thamgia as TG
WHERE TG.MSCN = CN.MSCN
AND TG.STTCT = CongT.STTCT

SELECT DISTINCT CN.HOTENCN
FROM dbo.congtrinh as CongT, dbo.congnhan as CN, dbo.thamgia as TG
WHERE TG.MSCN = CN.MSCN
AND TG.STTCT = CongT.STTCT
AND CongT.KINHPHI > @AVG_KINHPHI
```

> 💡 Dùng `CONVERT` chuyển sang `int` vì `CongT.KINHPHI` là `nvarchar`

⇨ `51` records

---

</details> 
