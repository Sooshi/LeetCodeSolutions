# 1 | SlidingWindow *COPIED* | O(n) (while right < nums.length and while zero_count > 1) | Runtime: 46ms Beats 66.67%
def longest_subarray(nums)
    left, right, zero_count, max_length = 0, 0, 0, 0

    while right < nums.length
        if nums[right] == 0
            zero_count += 1
        end

        while zero_count > 1
            if nums[left] == 0
                zero_count -= 1
            end

            left += 1
        end

        max_length = [max_length, right - left].max
        
        right += 1
    end

    max_length
end
