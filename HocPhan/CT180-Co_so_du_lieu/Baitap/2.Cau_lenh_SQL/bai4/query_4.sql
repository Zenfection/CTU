USE congtrinh
GO

--Câu 1:
--! Result : 6 records
SELECT KTS.HOTENKTS,KTS.NOITN
FROM dbo.kientrucsu as KTS, dbo.congtrinh as CongT, dbo.chuthau as ChuT, dbo.thietke as TK
WHERE TK.MSKTS = KTS.MSKTS
AND TK.STTCT = CongT.STTCT
AND ChuT.MSCT = CongT.MSCT
AND ChuT.TENTHAU = 'hoang cong binh'
GROUP BY CongT.TINHTHANH,KTS.HOTENKTS,KTS.NOITN


--Câu 2:
--! Result :  
DECLARE @max_tuoi_KTS INT

SELECT @max_tuoi_KTS = MAX(YEAR(GETDATE()) - YEAR(KTS.Ngaysinh))
FROM dbo.congtrinh as CongT, dbo.kientrucsu as KTS, dbo.thietke as TK
WHERE TK.MSKTS = KTS.MSKTS
AND TK.STTCT = CongT.STTCT

SELECT CongT.STTCT, CongT.KINHPHI
FROM dbo.congtrinh as CongT, dbo.kientrucsu as KTS, dbo.thietke as TK
WHERE TK.MSKTS = KTS.MSKTS
AND TK.STTCT = CongT.STTCT
AND YEAR(GETDATE()) - YEAR(KTS.Ngaysinh) = @max_tuoi_KTS


--Câu 3: Đề sai
--! Result :  
SELECT *
FROM dbo.kientrucsu as KTS, dbo.congtrinh as CongT, dbo.thietke as TK, dbo.chunhan as ChuN
WHERE TK.MSKTS = KTS.MSKTS
AND TK.STTCT = CongT.STTCT
AND ChuN.MSCH = CongT.MSCH
AND ChuN.DIACHICHU = ''
GO

--Câu 4: 
--! Result : 10 records
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

--Câu 5:
--! Result : 85 records
SELECT DISTINCT CN.MSCN,CN.HOTENCN
FROM dbo.congtrinh as CongT, dbo.congnhan as CN, dbo.thamgia as TG
WHERE TG.MSCN = CN.MSCN
AND TG.STTCT = CongT.STTCT
GROUP BY CN.HOTENCN, CN.MSCN
HAVING COUNT(CongT.TINHTHANH) > 2
GO

--Câu 6:
--! Result : 1 record
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


--Câu 7:
--! Result : 1 record
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


--Câu 8:
--! Result :  
--Chưa làm được


--Câu 9:
--! Result :  
--Chưa làm được


--Câu 10:
--! Result :  26 records
SELECT DISTINCT KTS.HOTENKTS, CongT.TENCT
FROM dbo.kientrucsu as KTS, dbo.congtrinh as CongT, dbo.congnhan as CN, dbo.thamgia as TG, dbo.thietke as TK
WHERE TK.STTCT = CongT.STTCT
AND TK.MSKTS = KTS.MSKTS
AND TG.MSCN = CN.MSCN
AND TG.STTCT = CongT.STTCT
AND TK.THULAO < (CongT.KINHPHI / 100) * 5