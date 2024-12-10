# Brute-Force | O(n2) | (Time Limit Exceeded)
def max_area(height)
    result = 0

    (0...height.length).each do |l|
        ((l + 1)...height.length).each do |r|
            area = (r - l) * [height[l], height[r]].min
            result = [max_area, area].max
        end
    end

    result
end

# 1 | TwoPointers | O(n) |
def max_area(height)
    result = 0
    left_pointer, right_pointer = 0, height.length - 1

    while left_pointer < right_pointer do
        area = (right_pointer - left_pointer) * [height[left_pointer], height[right_pointer]].min
        result = [result, area].max

        if height[left_pointer] < height[right_pointer]
            left_pointer += 1
        elsif height[left_pointer] >= height[right_pointer]
            right_pointer -= 1
        end
    end

    result
end
