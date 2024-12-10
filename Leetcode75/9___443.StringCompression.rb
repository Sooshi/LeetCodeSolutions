# Close
def compress(chars)
    return chars.length if chars.length == 1

    result = []
    count = 1

    chars.each_with_index do |char, index|
        if chars[index] == chars[index + 1]
            count += 1
        else
            result << char
            result << count.to_s if count > 1
            count = 1
        end
    end

    chars.replace(result)
    p chars

    puts chars.inspect
end

# 1 Copied
def compress(chars)
    chars << " "
    size = chars.size
    answer = []
    cnt = 1
    (1...size).each{ |i|
        if chars[i]==chars[i-1]
            cnt+=1
        else
            answer+= (cnt==1 ? [chars[i-1]] : [chars[i-1]]+cnt.to_s.chars)
            cnt=1
        end
    }
    l = answer.size
    chars[...l]=answer
    return l
end
