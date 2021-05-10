USE congtrinh
GO

--Câu 1
--! Result : 3 records
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

--Câu 2
--! Result : 1 record
DECLARE @MaxKINHPHI INT

SELECT  @MaxKINHPHI = MAX(KINHPHI) FROM dbo.congtrinh
SELECT TENCT
FROM dbo.congtrinh
WHERE KINHPHI = @MaxKINHPHI

--Câu 3
--! Result : 11 records
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

--Câu 4:
--! Result : 2 records
--! Dùng CONVERT chuyển sang INT vì CongT.KINHPHI là nvarchar
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

--Câu 5
--! Dùng CONVERT chuyển sang INT vì TK.THULAO là nvarchar
--! Result : 9 records
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

--Câu 6
--! Dùng CONVERT chuyển sang INT vì CongT.KINHPHI là nvarchar
--! Result : 1 record
DECLARE @Min_KINHPHI INT

SELECT @Min_KINHPHI = MIN(CONVERT(int, CongT.KINHPHI))
FROM dbo.congtrinh as CongT, dbo.chuthau as ChuT
WHERE ChuT.MSCT = CongT.MSCT

SELECT ChuT.TENTHAU,ChuT.DIACHITHAU
FROM dbo.congtrinh as CongT, dbo.chuthau as ChuT
WHERE ChuT.MSCT = CongT.MSCT
AND CongT.KINHPHI = @Min_KINHPHI

--Câu 7
--! Result : 59 records
SELECT DISTINCT CN.HOTENCN, CN.CHUYENMON
FROM dbo.kientrucsu as KTS,dbo.congtrinh as CongT, dbo.congnhan as CN, dbo.thietke as TK, dbo.thamgia as TG
WHERE TK.MSKTS = KTS.MSKTS
AND TK.STTCT = CongT.STTCT
AND TG.MSCN = CN.MSCN
AND TG.STTCT = CongT.STTCT
AND KTS.HOTENKTS = 'le thanh tung';
GO

--Câu 8
--! Result : 65 records
CREATE VIEW temp as 
SELECT ChuT.TENTHAU, CongT.TINHTHANH
FROM dbo.congtrinh as CongT, dbo.chuthau as ChuT
WHERE CongT.MSCT = ChuT.MSCT
GO

SELECT DISTINCT a.TENTHAU,b.TENTHAU 
FROM temp as a
INNER JOIN temp as b
ON a.TINHTHANH = b.TINHTHANH
WHERE a.TENTHAU > b.TENTHAU
GO

DROP VIEW temp
GO
--Câu 9
--! Result : 900 records
CREATE VIEW temp AS
SELECT CN.HOTENCN, TG.STTCT
FROM dbo.congnhan as CN, dbo.thamgia as TG
WHERE TG.MSCN = CN.MSCN
GROUP BY CN.HOTENCN,TG.STTCT
GO

SELECT DISTINCT a.HOTENCN, b.HOTENCN 
FROM temp as a
INNER JOIN temp as b
ON a.STTCT = b.STTCT
WHERE a.HOTENCN > b.HOTENCN
GROUP BY a.HOTENCN, b.HOTENCN
HAVING COUNT(a.STTCT) >= 2

DROP VIEW temp
--Câu 10
--! Dùng CONVERT chuyển sang INT vì CongT.KINHPHI là nvarchar
--! Result : 51
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



