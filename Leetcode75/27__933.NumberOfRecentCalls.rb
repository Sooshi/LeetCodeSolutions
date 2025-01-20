# 1
# | Array
# | O(n)
#   while @calls.first < t - 3000
# | Runtime: 36ms Beats 59.52%
class RecentCounter
    def initialize()
        @calls = []
    end

    def ping(t)
        @calls.push(t)

        while @calls.first < t - 3000
            @calls.shift
        end

        @calls.length
    end
end

# 2
# | Deque
# | O(n)
#   while @calls.front < t - 3000
# | Runtime: 27ms Beats 88.09%
class RecentCounter
    def initialize()
        @calls = Deque.new
    end

    def ping(t)
        @calls.push_back(t)

        while !@calls.empty? && @calls.front < t - 3000
            @calls.pop_front
        end

        @calls.length
    end
end
