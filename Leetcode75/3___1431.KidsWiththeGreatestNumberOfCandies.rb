# 1 Brute-Force
def kids_with_candies(candies, extra_candies)
    candies.map do |i|
        check = true

        candies.each do |j|
            if i + extra_candies < j
                check = false
            end
        end

        i = check
    end
end

# 2 Easy
def kids_with_candies(candies, extra_candies)
    max = candies.max
    candies.map do |i|
        i + extra_candies >= max 
    end
end