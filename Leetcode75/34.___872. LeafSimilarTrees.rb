# BFS | doesn't work correctly cause leaves can be at the different levels
def leaf_similar(root1, root2)
    queue = [root1]
    leaves = []
    leaves_2 = []
    depth = 0

    while !queue.empty?
        nodes_amount = queue.size
        nodes_amount.times do
            node = queue.shift
            queue.push(node.left) if node.left
            queue.push(node.right) if node.right

            if !node.left && !node.right
                leaves.push(node.val)
            end
        end

        depth += 1
    end

    queue = [root2]

    while !queue.empty?
        nodes_amount = queue.size
        nodes_amount.times do
            node = queue.shift
            queue.push(node.left) if node.left
            queue.push(node.right) if node.right

            if !node.left && !node.right
                leaves_2.push(node.val)
            end
        end

        depth += 1
    end

    p leaves
    p leaves_2
    
    leaves_2 == leaves
end


# 1
# | Linked List
# | O(n):
#   O(n) - while current != nil
# + O(n) - list.delete_at(middle)
#   Removing an element from an array is difficult O(n) in the worst case, since all subsequent elements of the array after the deleted one are shifted.
# + O(n) - list.reverse_each do |i|
# = O(n) + O(n) + O(n) => still O(n)
# | Runtime: 293ms Beats 8.89%
# | Memory: 239.58MB Beats 31.11%


# 1 
# | DFS 
# | O(n):
#   O(n) find_leaves(root1)
#   + O(m) find_leaves(root2)
# = O(n) + O(m) => O(n + m)
# | Runtime: 0ms Beats 100.00%
# | Memory: 211.76MB Beats 14.58%
def dfc(node, leaves)
    return if !node
    leaves.push(node.val) if !node.left && !node.right

    dfc(node.left, leaves)
    dfc(node.right, leaves)
end

def find_leaves(tree)
    leaves = []
    dfc(tree, leaves)
    leaves
end

def leaf_similar(root1, root2)
    find_leaves(root1) == find_leaves(root2)
end
