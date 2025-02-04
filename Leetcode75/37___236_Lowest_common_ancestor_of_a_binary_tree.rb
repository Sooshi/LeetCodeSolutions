# 1
# | DFS 
# | O(n): left, right
# | Runtime: 82ms Beats 48.11%
# | Memory: 213.96MB Beats 89.62%
def lowest_common_ancestor(root, p, q)
    return root if root.nil? || root == p || root == q

    left = lowest_common_ancestor(root.left, p, q)
    right = lowest_common_ancestor(root.right, p, q)

    return root if left && right
    left || right
end 
