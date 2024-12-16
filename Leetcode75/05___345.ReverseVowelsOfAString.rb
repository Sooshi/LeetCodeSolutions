# 1 Brute-Force
def reverse_vowels(s)
    chars = s.chars
    vowels =  ['a', 'e', 'i', 'o', 'u']
    map = {}

    chars.each_with_index do |char, index|
        if vowels.include?(char.downcase)
            map[index] = char
        end
    end

    new_values = map.values.reverse
    new_keys = map.keys
    
    new_map = Hash[new_keys.zip(new_values)]

    new_map.each_key do |key|
        chars[key] = new_map[key]
    end

    chars.join
end

# REWRITE!!!