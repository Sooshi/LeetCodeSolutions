# 1 
# | DFS 
# | O(n): O(n) dfs(root)
# | Runtime: 175ms Beats 57.63%
# | Memory: 218.84MB Beats 57.63%
def dfs(node, max_node, path)
    return if node.nil?
    max_node = node if node.val > max_node.val

    if node.val >= max_node.val
        path.push(node)
    end

    dfs(node.left, max_node, path)
    dfs(node.right, max_node, path)
end

def good_nodes(root)
    return 0 if root.nil?

    path = []
    dfs(root, root, path)
    
    path.size
end

# 2
# | BFS
# | O(n): O(n) !queue.empty?
# | Runtime: 181ms Beats 37.29%
# | Memory: 217.57MB Beats 88.14%
def good_nodes(root)
    return 0 if root.nil?

    queue = [[root, root.val]]
    count = 0

    while !queue.empty?
        node, max_val = queue.shift
        
        if node.val >= max_val
            max_val = node.val
            count += 1
        end 

        queue.push([node.left, max_val]) if node.left 
        queue.push([node.right, max_val]) if node.right
    end

    count
end
