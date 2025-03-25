-- Table: Customer
-- +-------------+---------+
-- | Column Name | Type    |
-- +-------------+---------+
-- | id          | int     |
-- | name        | varchar |
-- | referee_id  | int     |
-- +-------------+---------+

-- Input:

-- Customer table:
-- +----+------+------------+
-- | id | name | referee_id |
-- +----+------+------------+
-- | 1  | Will | null       |
-- | 2  | Jane | null       |
-- | 3  | Alex | 2          |
-- | 4  | Bill | null       |
-- | 5  | Zack | 1          |
-- | 6  | Mark | 2          |
-- +----+------+------------+

-- Output:

-- +------+
-- | name |
-- +------+
-- | Will |
-- | Jane |
-- | Bill |
-- | Zack |
-- +------+

--   1 
--   | Runtime: 629ms
--   | Beats: 86.91%
SELECT name FROM Customer WHERE referee_id != 2 OR referee_id IS NULL

--   2 
--   | Runtime: 2354ms
--   | Beats 5.00%
SELECT name FROM Customer WHERE COALESCE(referee_id, 0) != 2
