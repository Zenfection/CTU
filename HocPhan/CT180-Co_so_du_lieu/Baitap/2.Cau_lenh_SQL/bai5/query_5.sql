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
