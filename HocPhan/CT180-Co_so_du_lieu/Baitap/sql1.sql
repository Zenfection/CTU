USE congtrinh
GO

--Câu 1:
--! Result : 5 records
SELECT CongT.TENCT, CongT.DIACHICT
FROM dbo.congtrinh as CongT, dbo.chuthau as ChuT
WHERE CongT.MSCT = ChuT.MSCT
AND ChuT.TENTHAU = 'Hong Xuan Truong'

--Câu 2:
--! Result : 1 record
SELECT ChuT.TENTHAU, ChuT.DIACHITHAU
FROM dbo.congtrinh as CongT, dbo.chuthau as ChuT, dbo.kientrucsu as KTS, dbo.thietke as TK
WHERE TK.MSKTS = KTS.MSKTS
AND TK.STTCT = CongT.STTCT
AND ChuT.MSCT = CongT.MSCT
AND KTS.HOTENKTS = 'Le Kim Dung'
AND CongT.TINHTHANH = 'can tho'

--Câu 3:
--! Result : 2 records
SELECT KTS.HOTENKTS, KTS.NOITN
FROM dbo.kientrucsu as KTS, dbo.thietke as TK, dbo.congtrinh as CongT
WHERE TK.MSKTS = KTS.MSKTS
AND TK.STTCT = CongT.STTCT
AND CongT.TENCT = 'Khach san quoc te'
AND CongT.TINHTHANH = 'can tho'

--Câu 4:
--! Năm vào nghề không có trong record công nhân nên bỏ nha
--! Result : 19 records 
SELECT CN.HOTENCN, CN.NGAYSINH
FROM dbo.congnhan as CN, dbo.congtrinh as CongT, dbo.chuthau as ChuT, dbo.thamgia as TG
WHERE TG.MSCN = CN.MSCN
AND TG.STTCT = CongT.STTCT
AND ChuT.MSCT = CongT.MSCT
AND ChuT.TENTHAU = 'Le Van Son'
AND (CN.CHUYENMON = 'han' OR CN.CHUYENMON = 'dien')

--Câu 5: 
--! Result : 41 record
SELECT CN.HOTENCN, TG.SONGAY
FROM dbo.congtrinh as CongT, dbo.congnhan as CN, dbo.thamgia as TG
WHERE TG.MSCN = CN.MSCN
AND TG.STTCT = CongT.STTCT
AND CongT.TENCT = 'Khach san quoc te'
AND CongT.TINHTHANH = 'can tho'
AND (CongT.NGAYBD BETWEEN '1994-12-15' AND  '1994-12-31')

--Câu 6: Có lỗi
SELECT * 
FROM dbo.congtrinh as CongT, dbo.congnhan as CN, dbo.thamgia as TG
WHERE TG.MSCN = CN.MSCN
AND TG.STTCT = CongT.STTCT
--Chưa giải xong

--Câu 7:
--! Thay đổi CongT.KINHPHI > 400 nếu nó sai nhé
--! Result : 11 records
SELECT *
FROM dbo.kientrucsu as KTS, dbo.congtrinh as CongT, dbo.thietke as TK
WHERE TK.STTCT = CongT.STTCT
AND TK.MSKTS = KTS.MSKTS
AND KTS.NOITN = 'tphcm'
AND CongT.KINHPHI > 400


--Câu 8
--! Result : 116 records
SELECT CN.HOTENCN, CN.CHUYENMON
FROM dbo.congnhan as CN, dbo.congtrinh as CongT, dbo.kientrucsu as KTS, dbo.thamgia as TG, dbo.thietke as TK
WHERE TG.MSCN = CN.MSCN
AND TG.STTCT = CongT.STTCT
AND TK.MSKTS = KTS.MSKTS
AND TK.STTCT = CongT.STTCT
AND KTS.HOTENKTS = 'nguyen anh thu'

--Câu 9
--! Result : 0 record
SELECT ChuN.TENCHU
FROM dbo.chunhan as ChuN, dbo.congtrinh as CongT, dbo.kientrucsu as KTS, dbo.thietke as TK,dbo.chuthau as ChuT
WHERE TK.MSKTS = KTS.MSKTS
AND TK.STTCT = CongT.STTCT
AND ChuN.MSCH = CongT.MSCH
AND ChuT.MSCT = CongT.MSCT
AND KTS.HOTENKTS = 'nguyen anh thu' 
AND ChuT.TENTHAU = 'hoang cong binh'

--Câu 10
--! Result : 13 records
SELECT CongT.TENCT
FROM dbo.congtrinh as CongT, dbo.kientrucsu as KTS, dbo.thietke as TK
WHERE TK.STTCT = CongT.STTCT
AND TK.MSKTS = KTS.MSKTS
AND KTS.NOITN = 'tphcm'
