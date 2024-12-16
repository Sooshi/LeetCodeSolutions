# Not even close
def remove_stars(s)
    chars = s.chars

    indexes = chars.each_with_index.select {|char, index| char == '*' }.map {|_, index| index }
    indexes += indexes.map { |item| item - 1 }

    chars.reject.with_index { |_, index| indexes.include?(index) }.join('')
end

