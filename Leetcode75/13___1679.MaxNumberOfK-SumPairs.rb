# Time Limit Exceeded
def max_operations(nums, k)
    counter = 0

    nums.length.times do
        a = nums.shift()
        b = nums.find {|n| n + a == k}

        if b
            nums.delete_at(nums.index(b))
            counter += 1
        end
    end

    counter
end

# Time Limit Exceeded
def max_operations(nums, k)
    counter = 0

    nums.length.times do
        a = nums.shift()
        if nums.empty? || a > k
            next
        end

        b = nums.find {|n| n + a == k}

        if b
            nums.delete_at(nums.index(b))

            counter += 1
        end
    end

    counter
end