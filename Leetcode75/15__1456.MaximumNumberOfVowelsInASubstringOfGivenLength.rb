# | SlidingWindow | O(n * k) | Time Limit Exceeded
def max_vowels(s, k)
    vowels = ['a', 'e', 'i', 'o', 'u']
    main_counter = 0

    s.split('').each_cons(k).each do |con|
        counter = con.count { |c| vowels.include?(c) }
        main_counter = [main_counter, counter].max
    end

    main_counter
end

# 1 | SlidingWindow with counter update | O(n) | 184ms Beats 60.00%
def max_vowels(s, k)
    vowels = ['a', 'e', 'i', 'o', 'u']
    max_count = 0
    current_count = 0

    s[0...k].split('').each do |c|
        current_count += 1 if vowels.include?(c)
    end

    (k...s.length).each do |c|
        current_count += 1 if vowels.include?(s[c])
        current_count -= 1 if vowels.include?(s[c - k])
        max_count = [max_count, current_count].max
    end

    max_count
end
