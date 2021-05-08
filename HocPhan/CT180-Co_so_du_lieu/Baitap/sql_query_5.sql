USE congtrinh
GO

--Câu 1:
--! Reuslt: 


--Câu 2:
--!Result :
SELECT CN.HOTENCN
FROM dbo.congtrinh as CongT, dbo.congnhan as CN, dbo.thamgia as TG
WHERE TG.MSCN = CN.MSCN
AND TG.STTCT = CongT.STTCT

GROUP BY CN.HOTENCN

SELECT distinct HOTENCN FROM congnhan