# 1
# | BFS
# | O(n):
#   O(n) - while !queue.empty?
# + O(L) - sum_on_level.values.max
# = O(n)
# | Runtime: 41ms Beats 32.14%
# | Memory: 215.44MB Beats 25.00%
def max_level_sum(root)
    queue = [root]
    level = 0
    sum_on_level = {}

    while !queue.empty?
        level_size = queue.size
        level += 1
        level_sum = 0

        level_size.times do
            node = queue.shift
            queue.push(node.left) if node.left
            queue.push(node.right) if node.right
            level_sum += node.val 
        end

        sum_on_level[level] = level_sum 
    end

    sum_on_level.key(sum_on_level.values.max)
end

# Optimization:
# 1) The Flat_map method creates a new array, which increases memory costs.
#    Instead, I can use Simple Each and Array#concat to modify them in place.
# 2) Find level with max sum without saving all levels and sums
# O(n): queue.each
# Runtime: 32ms Beats 67.86%
# Memory: 215.26MB Beats 60.71%
def max_level_sum(root)
    queue = [root]
    level = 0
    max_sum = -Float::INFINITY
    max_level = 0

    until queue.empty?
        level += 1
        level_sum = 0
        next_queue = []

        queue.each do |node|
            level_sum += node.val
            next_queue << node.left if node.left
            next_queue << node.right if node.right
        end

        if level_sum > max_sum
            max_sum = level_sum
            max_level = level
        end

        queue = next_queue
    end

    max_level
end
