# 1 Brute-Force (0ms Beats 100.00%)
def is_subsequence(s, t)
    a = 0
    result = true
    s.length.times do
        letter = s.slice!(0)
        if t.index(letter) != nil
            t.slice!(0..t.index(letter))
        else
            result = false
        end
    end

    result
end

# Same in OneLine
def is_subsequence(s, t)
    !!s.length.times.all? { t.index(letter = s.slice!(0)) ? t.slice!(0..t.index(letter)) : false }
end

# Copied (borderline cases!)
def is_subsequence(s, t)
    return false if s.size > t.size
    return true if s.size == 0
    i = 0
    found = false
    t.chars.each do |char|
        if s[i] == char
            if i == s.size - 1
                found = true
                break
            else
                i += 1
            end
        end
    end
    found
end

# Copied (from index)
def is_subsequence(s, t)
    index = 0
    t.each_char do |c|
        if c == s[index]
            index += 1
        end
    end
    index == s.length 
end
