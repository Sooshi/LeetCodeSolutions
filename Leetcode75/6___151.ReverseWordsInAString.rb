# 1 Easy one line
def reverse_words(s)
    s.split(" ").each_with_index.to_h  { |word, index| [index, word]  }.reverse_each.to_h.values.join(" ")        
end

# 2 ...
def reverse_words(s)
    s.split(" ").reverse.join(" ")
end
