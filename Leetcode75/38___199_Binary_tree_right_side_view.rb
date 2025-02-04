# 1
# | BFS
# | O(n): while !queue.empty?
# | Runtime: 0ms Beats 100.00%
# | Memory: 211.68MB Beats 36.28%
def right_side_view(root)
    return [] unless root

    queue = [root]
    tree_right_side_view = [root.val]

    while !queue.empty?
        level_nodes = queue.size
        level_nodes.times do |n|
            node = queue.shift
            queue.push(node.left) if node.left
            queue.push(node.right) if node.right
        end
        
        tree_right_side_view.push(queue.last.val) if queue.last
    end

    tree_right_side_view
end

# Same with flat_map and until
def right_side_view(root)
    return [] unless root

    queue = [root]
    tree_right_side_view = []

    until queue.empty?
        tree_right_side_view << queue.last.val
        queue = queue.flat_map { |n| [n.left, n.right].compact }
    end

    tree_right_side_view
end
