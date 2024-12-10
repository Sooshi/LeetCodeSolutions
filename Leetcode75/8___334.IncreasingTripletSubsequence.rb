# - Brute-Force (close)
def increasing_triplet(nums)
    hash = nums.map.with_index { |value, index| [index, value] }.to_h

    keys = []
    result = false

    hash.each do |num|
        if num[0] + 2 < hash.keys.length && num[1] < hash[num[0] + 1] && num[1] < hash[num[0] + 2]
            keys << num[0] << num[0] + 1 << num[0] + 2
            
            if hash[keys[0]] < hash[keys[1]] && hash[keys[1]] < hash[keys[2]]
                result = true
            end

            keys = []
        end
    end

    result
end

# - IDK
def increasing_triplet(nums)
    hash = nums.map.with_index { |value, index| [index, value] }.to_h

    first_pair = hash.shift
    second_pair = nil
    third_pair = nil

    hash.each do |pair|
        if first_pair[1] < pair[1]
            second_pair = pair
        end

        if second_pair
            new_hash = hash.select {|key, _| key > second_pair[0] }

            p new_hash

            new_hash.each do |new_pair|
                if second_pair[1] < new_pair[1]
                    third_pair = new_pair
                end
            end             
        end
    end

    nums.shift

    if nums.empty? 
        false
    else 
        second_pair && third_pair && !nums.empty? ? true : false
    end
end

# - Recursion Time Limit Exceeded
def increasing_triplet(nums)
    return false if nums.empty?

    hash = nums.map.with_index { |value, index| [index, value] }.to_h
    
    first_pair = hash.shift
    second_pairs = []
    third_pairs = []

    hash.each do |k, v|
        if k > first_pair[0] && v > first_pair[1]
            second_pairs << [k, v]
        end
    end

    second_pairs.each do |second_pair|
        hash.each do |k, v|
            if k > second_pair[0] && v > second_pair[1]
                third_pairs << [k, v]
            end
        end
    end
    
    !second_pairs.empty? && !third_pairs.empty? ? true : increasing_triplet(nums.drop(1))
end

# 1 From solutions
def increasing_triplet(nums)
    first, second = nums.max, nums.max

    nums.each do |num|
        if num <= first
            first = num
        elsif num <= second
            second = num
        else
            return true
        end
    end

    false
end
