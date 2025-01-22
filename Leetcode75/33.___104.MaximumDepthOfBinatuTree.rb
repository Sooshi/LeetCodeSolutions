# 1
# | Binary Tree DFS (Depth-first search) + Recursion
#       3
#      / \
#     9   20
#        /  \
#       15   7
#
#   1 iteration: [3] 1 + ([9], [20])
#   2 iteration: [3] 1 + ([9] 1 + ([nil], [nil]), [20] 1 + ([15], [7]))
#   3 iteration: [3] 1 + ([9] 1 + ([nil], [nil]), [20] 1 + ([15] 1 + ([nil], [nil]), [7] 1 + ([nil], [nil])))
#   => 3
#
# | O(n): n - amount of nodes
# | Runtime: 0ms Beats 100.00%
# | Memory: 212.22MB Beats 12.14%
def max_depth(root)
   return 0 if root.nil?

   return 1 + [max_depth(root.left), max_depth(root.right)].max
end

# Same in OneLine
def max_depth(root)
    return root.nil? ? 0 : 1 + [max_depth(root.left), max_depth(root.right)].max
 end
 
# 2
# | Binary Tree BFS (Breadth-first search) + Recursion
#       3
#      / \
#     9   20
#        /  \
#       15   7
#
#   1 iteration: depth = 0, queue = [3]
#   2 iteration: depth = 1, queue = [9, 20]
#   3 iteration: depth = 2, queue = [15, 7]
#   4 iteration: depth = 3, queue = []

# | O(n): n - amount of nodes
# | Runtime: 0ms Beats 100.00%
# | Memory: 211.80MB Beats 77.67%
def max_depth(root)
    return 0 if root.nil?

    queue = [root]
    depth = 0

    while !queue.empty?
        nodes_amount = queue.size                       # 1             | 2                             | 2                             |
        nodes_amount.times do                           # 1             | 2                             | 2                             |
            node = queue.shift                          # [3], Q: []    | [9], Q: [20]  | [20], Q: []   | [15], Q: [7]  | [7], Q: []    |
            queue.push(node.left) if node.left          # Q: [9]        | Q: [20]       | Q: [15]       | Q: [7]        | Q: []         |
            queue.push(node.right) if node.right        # Q: [9, 20]    | Q: [20]       | Q: [15, 7]    | Q: [7]        | Q: []         |
        end

        depth += 1                                      #             1 |                             2 |                             3 |
    end

    depth
end
 