# | Time Limit Exceeded | O(n * k)
def find_max_average(nums, k)
    return nums.first if nums.length == 1

    sum_arr = []
    nums.each_cons(k) do |n|
        sum_arr.push(n.reduce(0) { |acc, el| acc += el } / k.to_f)
    end

    sum_arr.max
end

# Optimization | What about [-1]
def find_max_average(nums, k)
    sum = 0
    nums.each_cons(k) do |n|
        q = n.reduce(0) { |acc, el| acc += el }
        sum = q if q > sum
    end

    sum / k.to_f
end

# Optimization | Time Limit Exceeded
def find_max_average(nums, k)
    sum = nums.each_cons(k).map {|n| n.sum }.max
    sum / k.to_f
end

# 1 | SlidingWindow | O(n) | 85ms Beats 25.47%
def find_max_average(nums, k)
    return nums.first if nums.length == 1

    window_sum = nums[0, k].sum
    max_avg = window_sum / k.to_f

    (k..nums.length - 1).each do |i|
        window_sum += nums[i] - nums[i - k]
        max_avg = [max_avg, window_sum / k.to_f].max
    end 

    max_avg
end

# 2 | SlidingWindow (to_f once at rhe end) | O(n) | 67ms Beats 44.34%
def find_max_average(nums, k)
    max_sum = nums[0...k].sum
    window_sum = max_sum

    (k...nums.length - 1).each do |i|
        window_sum = window_sum + nums[i] - nums[i - k]
        max_sum = [max_sum, window_sum].max
    end 

    max_sum.to_f / k
end

#
# def find_max_average(nums, k)
#     window_sum = nums[0...k].sum
#     max_sum = window_sum.to_f / k

#     find_max_average(nums.shift, k)
# end

