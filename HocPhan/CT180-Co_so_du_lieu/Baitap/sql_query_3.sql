USE congtrinh
GO

--Câu 1: 
--! Result : 13 records
SELECT ChuT.TENTHAU, MAX(KINHPHI)
FROM dbo.congtrinh as CongT, dbo.chuthau as ChuT
WHERE ChuT.MSCT = CongT.MSCT
GROUP BY ChuT.TENTHAU
GO

--Câu 2: 
--! Result : 9 records
--Không biết làm


--Câu 3: 
--! Result : 
--Chưa làm xong
SELECT KTS.HOTENKTS, SUM(CONVERT(int, TK.THULAO)) as TongTHULAO
FROM dbo.kientrucsu as KTS, dbo.congtrinh as CongT, dbo.thietke as TK
WHERE TK.STTCT = CongT.STTCT
AND TK.MSKTS = KTS.MSKTS
GROUP BY KTS.HOTENKTS
HAVING SUM(CONVERT(int, TK.THULAO)) > 25
GO

--Câu 4: 
--! Result : 10 records
SELECT CongT.TENCT, COUNT(CongT.TENCT)
FROM dbo.congtrinh as CongT, dbo.congnhan as CN, dbo.thamgia as TG
WHERE TG.MSCN = CN.MSCN
AND TG.STTCT = CongT.STTCT
GROUP BY CongT.TENCT
GO

--Câu 5: 
--! Result : 1 records
CREATE VIEW temp AS 
SELECT CongT.TENCT, COUNT(CN.HOTENCN) as SoCN
FROM dbo.congtrinh as CongT, dbo.congnhan as CN, dbo.thamgia as TG
WHERE TG.STTCT = CongT.STTCT
AND TG.MSCN = CN.MSCN
GROUP BY CongT.TENCT
GO

DECLARE @Max_CN INT
SELECT @Max_CN = MAX(SoCN) FROM temp

SELECT CongT.TENCT, CongT.DIACHICT,COUNT(CN.HOTENCN) as SoCN
FROM dbo.congtrinh as CongT, dbo.congnhan as CN, dbo.thamgia as TG
WHERE TG.STTCT = CongT.STTCT
AND TG.MSCN = CN.MSCN
GROUP BY CongT.TENCT, CongT.DIACHICT
HAVING COUNT(CN.HOTENCN) = @Max_CN
GO

DROP VIEW temp

--Câu 6: 
--! Result : 7 records
SELECT CongT.TINHTHANH, AVG(CONVERT(int, CongT.KINHPHI))
FROM dbo.congtrinh as CongT
GROUP BY CongT.TINHTHANH

--Câu 7: 
--! Result : 5 records
DECLARE @Sum_TG_hongxuantruong INT

SELECT @Sum_TG_hongxuantruong = SUM(CONVERT(int,TG.SONGAY))
FROM dbo.congtrinh as CongT, dbo.congnhan as CN, dbo.thamgia as TG
WHERE TG.MSCN = CN.MSCN
AND CN.HOTENCN = 'Hong Xuan Truong'
AND TG.STTCT = CongT.STTCT 
GROUP BY CN.HOTENCN

SELECT CN.HOTENCN, SUM(CONVERT(int,TG.SONGAY))
FROM dbo.congtrinh as CongT, dbo.congnhan as CN, dbo.thamgia as TG
WHERE TG.MSCN = CN.MSCN
AND TG.STTCT = CongT.STTCT 
GROUP BY CN.HOTENCN
HAVING SUM(CONVERT(int,TG.SONGAY)) > @Sum_TG_hongxuantruong


--Câu 8: 
--! Result : 7 records
SELECT CongT.TINHTHANH, COUNT(CongT.TENCT)
FROM dbo.congtrinh as CongT, dbo.chuthau as ChuT
WHERE ChuT.MSCT = CongT.MSCT
GROUP BY CongT.TINHTHANH

--Câu 9: 
--! Result : 


--Câu 10
--! Result : 10 records
SELECT CongT.TENCT, CongT.NGAYBD
FROM dbo.congtrinh as CongT, dbo.congnhan as CN, dbo.thamgia as TG
WHERE TG.STTCT = CongT.STTCT
AND TG.MSCN = CN.MSCN
AND CN.HOTENCN = 'Nguyen Thi Su'

INTERSECT

SELECT CongT.TENCT, CongT.NGAYBD
FROM dbo.congtrinh as CongT, dbo.congnhan as CN, dbo.thamgia as TG
WHERE TG.STTCT = CongT.STTCT
AND TG.MSCN = CN.MSCN
AND CN.HOTENCN = 'Le Manh Quoc'