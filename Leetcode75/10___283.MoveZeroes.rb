# 1 Brute-Force (3ms Beats 81.99%)
def move_zeroes(nums)
    counter = 0

    nums.delete_if do |num|
        if (num == 0)
            counter += 1
            true
        else
            false
        end
    end
    
    counter.times do
        nums.push(0)
    end
end

# 2 OneLine (6ms Beats 62.11%)
def move_zeroes(nums)
    counter = 0
    nums.delete_if {|num| num == 0 && (counter += 1)}
    nums.push(*[0] * counter) if counter > 0
end

# 3 Copied (sorting)
def move_zeroes(nums)
    j = 0
    for i in 0...nums.length do
        nums[i],nums[j] = nums[j],nums[i] if nums[i] != 0 && nums[j] == 0
        j += 1 unless nums[j] == 0    
    end
    return nums
end
