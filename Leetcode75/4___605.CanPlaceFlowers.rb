# - Not even close
def can_place_flowers(flowerbed, n)
    return true if n == 0
    return false if flowerbed.empty?
  
    if flowerbed[0] == 0 && (flowerbed.length == 1 || flowerbed[1] == 0)
      return can_place_flowers(flowerbed.drop(2), n - 1)
    end
  
    can_place_flowers(flowerbed.drop(1), n)
end

# - Close
def can_place_flowers(flowerbed, n)
    map = {}
    result = n

    flowerbed.each_with_index do |value, i|
        if value == 0
            map[0] ||= 0
            map[0] += 1
            map[1] = 0
        else
            map[1] ||= 0
            map[1] += 1
            map[0] = 0
        end

        puts(map)
        puts(result)

        if map[0] == 2 && map[1] == 0
            result -= 1
            map[0] = 0
        end
    end

    return result <= 0
end

# So fucking close
def can_place_flowers(flowerbed, n)
    return true if flowerbed.length == 1 && flowerbed.first == 0

    map = {}
    counter = 0
    start_value = flowerbed.first

    flowerbed.each_with_index do |value, i|
        if start_value != value 
            start_value = value
            counter += 1
        end

        map[counter] ||= 0
        map[counter] += 1
    end

    if (map.keys.length == 1 && flowerbed.first == 0)
        flowerbed.length % 2 == 0 ? n -= flowerbed.length / 2 : n -= flowerbed.length / 2 + 1 
    else
        map.each do |key, value|
            if value > 2 && value.fdiv(2) > value / 2
                n -= value / 2
            end

            if (key == map.keys.first || key == map.keys.last) && value >= 2
                n -= value / 2
            end
        end
    end

    p map
    p n

    n <= 0
end

# 1 Brute-Force
def can_place_flowers(flowerbed, n)
    flowerbed.each_with_index do |value, index|
        if index == 0 && flowerbed[index] == 0 && flowerbed[index + 1] == 0
            flowerbed[index] = 1
            n -= 1
        end

        if index == flowerbed.length - 1 && flowerbed[flowerbed.length - 1] == 0 && flowerbed[flowerbed.length - 2] == 0
            flowerbed[flowerbed.length - 1] = 1
            n -= 1
        end  

        if flowerbed[index] == 0 && flowerbed[index - 1] == 0 && flowerbed[index + 1] == 0
            flowerbed[index] = 1
            n -= 1
        end
    end

    n <= 0
end

# REWRITE!!!
