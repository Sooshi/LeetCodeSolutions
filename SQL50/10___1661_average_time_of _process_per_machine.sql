SELECT s.machine_id, ROUND(AVG(e.timestamp - s.timestamp), 3) AS processing_time FROM Activity s
JOIN Activity e ON s.machine_id = e.machine_id AND s.process_id = e.process_id AND s.activity_type != e.activity_type and s.activity_type = "start"
GROUP BY s.machine_id
