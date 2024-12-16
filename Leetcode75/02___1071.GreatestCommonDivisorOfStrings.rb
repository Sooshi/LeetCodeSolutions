# - But close
def gcd_of_strings(str1, str2)
    (0...str1.length).each do |i|
        str1 = str1.sub(str2, "")
    end
    
  str1.empty? ? str2 : ""
end

# 1 From gcb in lengths
def gcd_of_strings(str1, str2)
  return "" if str1 + str2 != str2 + str1

  gcd = gcd(str1.length, str2.length)

  str1[0...gcd]
end

def gcd(a, b)
  return b if a == 0
  return a if b == 0 || a == b

  if (a > b)
      return gcd(a - b, b)
  end

  return gcd(a, b - a)
end

