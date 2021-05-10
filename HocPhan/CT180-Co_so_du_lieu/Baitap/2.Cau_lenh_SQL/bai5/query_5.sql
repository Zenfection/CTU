USE congtrinh
GO

--Câu 1:
--! Reuslt: 


--Câu 2: 
--!Result : 7 records
SELECT CN.MSCN,CN.HOTENCN
FROM dbo.congnhan as CN

EXCEPT

SELECT CN.MSCN, CN.HOTENCN
FROM dbo.congnhan as CN, dbo.congtrinh as CongT, dbo.thamgia as TG
WHERE TG.STTCT = CongT.STTCT
AND TG.MSCN = CN.MSCN
GO


--Câu 3:
--! Result : 
CREATE VIEW temp AS
SELECT TENCT
FROM dbo.congtrinh 

EXCEPT

SELECT CongT.TENCT
FROM dbo.congnhan as CN, dbo.congtrinh as CongT, dbo.thamgia as TG
WHERE TG.STTCT = CongT.STTCT
AND TG.MSCN = CN.MSCN
GO

SELECT CongT.TENCT, COUNT(*)
FROM dbo.congnhan as CN, dbo.congtrinh as CongT, dbo.thamgia as TG
WHERE TG.STTCT = CongT.STTCT
AND TG.MSCN = CN.MSCN
GROUP BY CongT.TENCT

UNION

SELECT TENCT, 0
FROM temp
GO

DROP VIEW temp
GO

--Câu 4:
--! Result : 52 records
CREATE VIEW temp AS
SELECT DISTINCT CN.HOTENCN
FROM dbo.congnhan as CN

EXCEPT

SELECT DISTINCT CN.HOTENCN
FROM dbo.congnhan as CN, dbo.congtrinh as CongT, dbo.thamgia as TG
WHERE TG.STTCT = CongT.STTCT
AND TG.MSCN = CN.MSCN
GO


SELECT CN.HOTENCN, COUNT(*) as So_CT_TG
FROM dbo.congnhan as CN, dbo.congtrinh as CongT, dbo.thamgia as TG
WHERE TG.STTCT = CongT.STTCT
AND TG.MSCN = CN.MSCN
GROUP BY CN.HOTENCN

UNION

SELECT HOTENCN, 0
FROM temp
GO

DROP VIEW temp

--Câu 5:
--! Result : 10 records
SELECT KTS.HOTENKTS, KTS.NOITN
FROM dbo.kientrucsu as KTS

EXCEPT

SELECT KTS.HOTENKTS, KTS.NOITN
FROM dbo.kientrucsu as KTS, dbo.thietke as TK, dbo.congtrinh as CongT
WHERE TK.MSKTS = KTS.MSKTS
AND TK.STTCT = CongT.STTCT

--Câu 6:
--! Result : 40 records
SELECT CongT.TENCT
FROM dbo.congtrinh as CongT

EXCEPT

SELECT CongT.TENCT
FROM dbo.kientrucsu as KTS, dbo.thietke as TK, dbo.congtrinh as CongT
WHERE TK.MSKTS = KTS.MSKTS
AND TK.STTCT = CongT.STTCT
GO

--Câu 7:
--! Result : 7 records
CREATE PROC sumKINHPHI_for_TINHTHANH
AS
BEGIN
    SELECT CongT.TINHTHANH, SUM(CONVERT(int, CongT.KINHPHI))
    FROM dbo.congtrinh as CongT
    GROUP BY CongT.TINHTHANH
END
GO

EXEC  sumKINHPHI_for_TINHTHANH
GO

DROP PROC sumKINHPHI_for_TINHTHANH
GO

--Câu 8:
--! Result : 1 record
CREATE PROC minKINHPHI_for_TINHTHANH
@tinhthanh NVARCHAR(50)
AS
BEGIN
    SELECT CongT.TINHTHANH, MIN(CONVERT(int, CongT.KINHPHI)) as minKINHPHI
    FROM dbo.congtrinh as CongT
    WHERE CongT.TINHTHANH = @tinhthanh
    GROUP BY CongT.TINHTHANH
END
GO

EXEC minKINHPHI_for_TINHTHANH @tinhthanh = 'can tho'
GO

DROP PROC minKINHPHI_for_TINHTHANH
GO

--Câu 9: 
--! Result : 
CREATE FUNCTION count_KTS_TK()
RETURNS TABLE
AS
    RETURN 
    SELECT KTS.MSKTS
    FROM dbo.kientrucsu as KTS, dbo.congtrinh as CongT, dbo.thietke as TK
    WHERE TK.STTCT = CongT.STTCT
    AND TK.MSKTS = KTS.MSKTS
GO

SELECT COUNT(*) FROM count_KTS_TK()
GO

DROP FUNCTION count_KTS_TK

--Câu 10:
--! Result : 
CREATE FUNCTION countKTS_for_TINHTHANH(@tinhthanh NVARCHAR(50))
RETURNS TABLE
AS
    RETURN
    SELECT KTS.HOTENKTS, CongT.TINHTHANH
    FROM dbo.kientrucsu as KTS, dbo.congtrinh as CongT, dbo.thietke as TK
    WHERE TK.STTCT = CongT.STTCT
    AND TK.MSKTS = KTS.MSKTS
    GROUP BY KTS.HOTENKTS, CongT.TINHTHANH
    HAVING CongT.TINHTHANH = @tinhthanh
GO

SELECT COUNT(*) FROM dbo.countKTS_for_TINHTHANH('can tho');
GO 

DROP FUNCTION countKTS_for_TINHTHANH