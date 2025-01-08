# Not even close | O(n)
def remove_stars(s)
    chars = s.chars

    indexes = chars.each_with_index.select {|char, index| char == '*' }.map {|_, index| index }
    indexes += indexes.map { |item| item - 1 }

    chars.reject.with_index { |_, index| indexes.include?(index) }.join('')
end

# Memory Limit Exceeded | O(n)
# After new_s.chars.pop new_s doesn't change, cause .chars creates new array, meanwhile .pop changes new array, not the new_s.
# So .chop deletes last symbol from string
def remove_stars(s)
    chars = s.chars
    new_s = ''

    s.chars.map.with_index do |char, i|
        if char == '*'
            new_s = new_s.chop
            next
        end

        new_s << char
    end
    
    new_s
end

# 1 | Backtracking through an array | 3 * O(n) still O(n) | Runtime: 1535ms Beats 6.25%
def remove_stars(s)
    chars = s.chars
    new_s = ''
    counter = 0

    (chars.length - 1).downto(0) do |i|    
        if chars[i] == '*'
            counter += 1
            next
        end

        if counter > 0 && chars[i] != '*'
            counter -= 1
            next
        end

        new_s += chars[i]
    end

    new_s.reverse
end

# Optimizing with stack instead of new_s, .each_char instead of s.chars, check symbol in stack not in s | O(n) | Runtime: 588ms Beats 45.31%
def remove_stars(s)
    stack = []
    
    s.each_char do |char|
        if char == '*'
            stack.pop unless stack.empty?
        else
            stack.push(char)
        end
    end
  
    stack.join
end

# Refactoring with RUBY block | Runtime: 577ms Beats 48.44%
def remove_stars(s)
    stack = []
  
    s.each_char { |char| char == '*' ? stack.pop : stack.push(char) }
    
    stack.join
end

#  Oneline | Refactoring with .each_char.with_object([]) | Runtime: 519ms Beats 73.44%
def remove_stars(s)
    s.each_char.with_object([]) { |char, stack| char == '*' ? stack.pop : stack.push(char) }.join
end
