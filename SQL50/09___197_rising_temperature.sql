SELECT altw.id FROM Weather w
JOIN Weather altw ON DATEDIFF(altw.recordDate, w.recordDate) = 1
WHERE altw.temperature > w.temperature;
