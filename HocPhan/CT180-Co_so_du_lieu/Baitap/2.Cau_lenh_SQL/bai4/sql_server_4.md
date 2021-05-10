# ![icons8gurupng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-12-52-icons8-guru.png) Bài tập Các câu lệnh SQL ![icons8-3_cute.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-15-18-29-icons8-3_cute.png)

## ![icons8-database_view.png](https://raw.githubusercontent.com/Zenfection/Image/master/2021/05/10-13-17-41-icons8-database_view.png) 1.Ta có bảng danh sách công trình như sau :

| KienTrucSu                                                                                                                       | ChuThau                                                                                                                           | ChuNhan                                                                                                                             | CongNhan                                                                                                                              | CongTrinh                                                                                                                              | ThamGia                                                                                                                                | ThietKe                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| MSKTS ![icons8redsquarepng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-03-33-icons8-red_square.png) | MSCT ![icons8bluesquarepng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-03-59-icons8-blue_square.png) | MSCH ![icons8brownsquarepng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-10-46-icons8-brown_square.png) | MSCN ![icons8yellowsquarepng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-04-23-icons8-yellow_square.png) | STTCT ![icons8purplesquarepng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-10-02-icons8-purple_square.png) | MSCN ![icons8yellowsquarepng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-04-23-icons8-yellow_square.png)  | MSKTS ![icons8redsquarepng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-03-33-icons8-red_square.png)       |
| HoTenKTS                                                                                                                         | TenThau                                                                                                                           | TenChu                                                                                                                              | HoTenCN                                                                                                                               | TenCT                                                                                                                                  | STTCT ![icons8purplesquarepng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-10-02-icons8-purple_square.png) | STTCT ![icons8purplesquarepng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/21-18-10-02-icons8-purple_square.png) |
| NamSinhKTS                                                                                                                       | DienThoai                                                                                                                         | DiaChiChu                                                                                                                           | NamSinhCN                                                                                                                             | DiaChiCT                                                                                                                               | NgayTG                                                                                                                                 | ThuLao                                                                                                                                 |
| Phai                                                                                                                             | DiachiThau                                                                                                                        |                                                                                                                                     | NamVaoNghe                                                                                                                            | TinhThanh                                                                                                                              | NgayTG                                                                                                                                 |                                                                                                                                        |
| NoiTN                                                                                                                            |                                                                                                                                   |                                                                                                                                     | ChuyenMon                                                                                                                             | KinhPhi                                                                                                                                | SoNgay                                                                                                                                 |                                                                                                                                        |
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
| [query_4.sql](https://github.com/Zenfection/CTU/blob/main/HocPhan/CT180-Co_so_du_lieu/Baitap/2.Cau_lenh_SQL/bai1/query_4.sql)                     |

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-59-15-icons8-questions.png) **Câu 1**: Cho biết **họ tên** và **nơi tốt nghiệp** của các `kiến trúc sư` `thiết kế` các `công trình` ở **tỉnh thành** mà ở đó có `công trình` do *Hoàng Công Bình* làm `chủ thầu`

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

```sql
SELECT KTS.HOTENKTS,KTS.NOITN
FROM dbo.kientrucsu as KTS, dbo.congtrinh as CongT, dbo.chuthau as ChuT, dbo.thietke as TK
WHERE TK.MSKTS = KTS.MSKTS
AND TK.STTCT = CongT.STTCT
AND ChuT.MSCT = CongT.MSCT
AND ChuT.TENTHAU = 'hoang cong binh'
GROUP BY CongT.TINHTHANH,KTS.HOTENKTS,KTS.NOITN
```

⇨  `6` records

---

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-59-15-icons8-questions.png) **Câu 2**: Cho biết **số thự tự** và **kinh phí** của các `công trình` do `kiến trúc sư` <u>lớn tuổi</u> nhất `thiết kế`

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

```sql

```

⇨  

---

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-59-15-icons8-questions.png) **Câu 3**: Cho biết **mã số** và **họ tên** `kiến trúc sư` `thiết kế` các `công trình` mà `chủ nhân` ở số *101 Hai bà Trưng*

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

```sql

```

⇨  

---

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-59-15-icons8-questions.png) **Câu 4**: Cho biết **mã số** và **họ tên** `kiến trúc sư` `thiết kế` các `công trình` mà `chủ thầu` có <u>ít nhất</u> **3** `công trình`

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

```sql
CREATE VIEW temp as 
SELECT ChuT.TENTHAU
FROM dbo.kientrucsu as KTS, dbo.congtrinh as CongT, dbo.chuthau as ChuT, dbo.thietke as TK
WHERE TK.MSKTS = KTS.MSKTS
AND TK.STTCT = CongT.STTCT
AND ChuT.MSCT = CongT.MSCT
GROUP BY ChuT.TENTHAU
HAVING COUNT(CongT.TENCT) > 3
GO

SELECT DISTINCT KTS.MSKTS, KTS.HOTENKTS
FROM dbo.kientrucsu as KTS, dbo.congtrinh as CongT, dbo.chuthau as ChuT, dbo.thietke as TK, dbo.temp as t
WHERE TK.MSKTS = KTS.MSKTS
AND TK.STTCT = CongT.STTCT
AND ChuT.MSCT = CongT.MSCT
AND t.TENTHAU = ChuT.TENTHAU
GO

DROP VIEW temp
```

⇨  `10` records

---

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-59-15-icons8-questions.png) **Câu 5**: Cho biết **mã số** và **họ tên** `công nhân` `tham gia` `công trình` ở <u>ít nhất</u> **2** `tỉnh thành`

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

```sql
SELECT DISTINCT CN.MSCN,CN.HOTENCN
FROM dbo.congtrinh as CongT, dbo.congnhan as CN, dbo.thamgia as TG
WHERE TG.MSCN = CN.MSCN
AND TG.STTCT = CongT.STTCT
GROUP BY CN.HOTENCN, CN.MSCN
HAVING COUNT(CongT.TINHTHANH) > 2
```

⇨  `85` records

---

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-59-15-icons8-questions.png) **Câu 6**: Cho biết **tỉnh thành** mà số `công nhân` `tham gia` `công trình` ở <u>ít nhất</u> **2 tỉnh thành**

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

```sql
CREATE VIEW temp AS
SELECT CongT.TINHTHANH, COUNT(CN.HOTENCN) as SoCN_TinhThanh
FROM dbo.congtrinh as CongT, dbo.congnhan as CN, dbo.thamgia as TG
WHERE TG.MSCN = CN.MSCN
AND TG.STTCT = CongT.STTCT
GROUP BY CongT.TINHTHANH
GO

DECLARE @Max_SoCN_TinhThanh INT
SELECT @Max_SoCN_TinhThanh = MAX(SoCN_TinhThanh) FROM temp

SELECT TINHTHANH
FROM temp
WHERE SoCN_TinhThanh = @Max_SoCN_TinhThanh
GO

DROP VIEW temp
```

⇨  `1` record

---

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-59-15-icons8-questions.png) **Câu 7**: Cho biết **tỉnh thành** mà `kiến trúc sư` *Lê Kim Dung* có `thiết kế` `công trình` ở đó là <u>nhiều nhất</u> 

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

```sql
DECLARE @Min_ThuLao_lekimdung INT

SELECT @Min_ThuLao_lekimdung = MIN(TK.THULAO)
FROM dbo.kientrucsu as KTS, dbo.congtrinh as CongT, dbo.thietke as TK
WHERE TK.STTCT = CongT.STTCT
AND TK.MSKTS = KTS.MSKTS
AND KTS.HOTENKTS = 'Le Kim Dung'

SELECT CongT.TINHTHANH
FROM dbo.kientrucsu as KTS, dbo.congtrinh as CongT, dbo.thietke as TK
WHERE TK.STTCT = CongT.STTCT
AND TK.MSKTS = KTS.MSKTS
AND KTS.HOTENKTS = 'Le Kim Dung'
AND TK.THULAO = @Min_ThuLao_lekimdung
```

⇨  `1` record

---

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-59-15-icons8-questions.png) **Câu 8**: Cho biết <u>cặp</u> **họ tên** `kiến trúc sư` và **họ tên** `công nhân` mà `kiến trúc sư` `thiết kế`  và `công nhân` `tham gia` <u>cùng</u> **1** `công trình`

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

```sql

```

⇨  

---

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-59-15-icons8-questions.png) **Câu 9**: Cho biết <u>cặp</u> **họ tên** `kiến trúc sư` và **họ tên** `công nhân` mà `kiến trúc sư` `thiết kế` và `công nhân` `tham gia` <u>cùng</u> **1** `công trình` ở **1 tỉnh thành** <u>duy nhất</u>

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

```sql

```

⇨  

---

</details>

> ![icons8questionspng](https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/17-08-59-15-icons8-questions.png) **Câu 10**: Cho biết <u>cặp</u> **họ tên** `kiến trúc sư` và **tên** `công  trình` mà `kiến trúc sư` `thiết kế` `công trình` đó có **thù lao** <u>dưới</u> **5% kinh phí** của `công trình`

<details>
<summary><b><img src="https://raw.githubusercontent.com/Zenfection/Image/master/2021/03/08-16-44-05-icons8-consultation.png" width ="40"> Giải</b></summary>

<br>

```sql
SELECT DISTINCT KTS.HOTENKTS, CongT.TENCT
FROM dbo.kientrucsu as KTS, dbo.congtrinh as CongT, dbo.congnhan as CN, dbo.thamgia as TG, dbo.thietke as TK
WHERE TK.STTCT = CongT.STTCT
AND TK.MSKTS = KTS.MSKTS
AND TG.MSCN = CN.MSCN
AND TG.STTCT = CongT.STTCT
AND TK.THULAO < (CongT.KINHPHI / 100) * 5
```

⇨  `26` records

---

</details>