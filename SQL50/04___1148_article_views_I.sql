-- Table: Views
-- +---------------+---------+
-- | Column Name   | Type    |
-- +---------------+---------+
-- | article_id    | int     |
-- | author_id     | int     |
-- | viewer_id     | int     |
-- | view_date     | date    |
-- +---------------+---------+

-- Input:

-- Views table:
-- +------------+-----------+-----------+------------+
-- | article_id | author_id | viewer_id | view_date  |
-- +------------+-----------+-----------+------------+
-- | 1          | 3         | 5         | 2019-08-01 |
-- | 1          | 3         | 6         | 2019-08-02 |
-- | 2          | 7         | 7         | 2019-08-01 |
-- | 2          | 7         | 6         | 2019-08-02 |
-- | 4          | 7         | 1         | 2019-07-22 |
-- | 3          | 4         | 4         | 2019-07-21 |
-- | 3          | 4         | 4         | 2019-07-21 |
-- +------------+-----------+-----------+------------+

-- Output:

-- +------+
-- | id   |
-- +------+
-- | 4    |
-- | 7    |
-- +------+

--   1
--   | Runtime: 401ms
--   | Beats: 98.13%
SELECT author_id AS id FROM Views WHERE author_id = viewer_id GROUP BY author_id ORDER BY id ASC;

--   2
--   | Runtime: 413ms
--   | Beats: 96.58%
SELECT DISTINCT author_id AS id FROM Views WHERE author_id = viewer_id ORDER BY id ASC
