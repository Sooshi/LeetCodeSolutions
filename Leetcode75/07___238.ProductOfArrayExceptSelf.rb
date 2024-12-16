# - Hash-map && Brute-Force (Time Limit Exceeded)
def product_except_self(nums)
    map = nums.each_with_index.to_h do |_, i|
        [i, nums.reject.with_index { |_, index| index == i }]
    end

    map.values.map do |arr|
        result = 1
                
        arr.each do |num|
            result *= num
        end

        result
    end
end

# - Shorted previous without Hash map
def product_except_self(nums)
    nums.map.with_index do |_, index|
        nums.reject.with_index { |_, i| i == index }.inject(:*) || 1
    end
end

# 1 With a pre-calculated product
def product_except_self(nums)
    total_product = nums.inject(:*) || 1

    nums.map.with_index { |el, ind| el.zero? ? nums.reject.with_index { |_, index| ind == index }.inject(:*) || 1 : total_product / el }
end

# REWRITE FOR 0 CHECKING