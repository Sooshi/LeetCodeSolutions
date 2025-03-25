-- Table: Tweets
-- +----------------+---------+
-- | Column Name    | Type    |
-- +----------------+---------+
-- | tweet_id       | int     |
-- | content        | varchar |
-- +----------------+---------+

-- Input:

-- Tweets table:
-- +----------+-----------------------------------+
-- | tweet_id | content                           |
-- +----------+-----------------------------------+
-- | 1        | Let us Code                       |
-- | 2        | More than fifteen chars are here! |
-- +----------+-----------------------------------+

-- Output:

-- +----------+
-- | tweet_id |
-- +----------+
-- | 2        |
-- +----------+

--   1
--   | Runtime: 853ms
--   | Beats: 82.08%
SELECT tweet_id FROM Tweets WHERE CHAR_LENGTH(content) > 15;
