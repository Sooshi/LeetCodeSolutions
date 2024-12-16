# 1 Brute-Force
def merge_alternately(word1, word2)
    result = ""
 
    length = [word1.length, word2.length].max
 
    (0...length).each do |i|
         result += word1[i] if i < word1.length
         result += word2[i] if i < word2.length
    end
 
    result
 end

 # 2 One line
def merge_alternately(word1, word2)
    Array.new([word1.length, word2.length].max).zip(word1.chars, word2.chars).flatten.join
end

# Recursive
def merge_alternately(word1, word2)
    word1, word2 = word1 || "", word2 || ""
  
    return "" if word1.empty? && word2.empty?
  
    result = ""
  
    result += word1[0] unless word1.empty?
    result += word2[0] unless word2.empty?
  
    result += merge_alternately(word1[1..-1], word2[1..-1])
  
    return result
end
