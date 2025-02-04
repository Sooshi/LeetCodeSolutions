# Close | Time Limit Exceeded
def max_zig_zag(node, direction, max_zig_zag_path, max_zig_zag_result)
    return unless node

    max_zig_zag_result[0] = [max_zig_zag_result[0], max_zig_zag_path].max

    if direction == 'left'
        if node.left
            max_zig_zag(node.left, 'right', max_zig_zag_path + 1, max_zig_zag_result)
        end

        if node.right
            max_zig_zag(node.right, 'left', 0, max_zig_zag_result)
            max_zig_zag(node.right, 'right', 0, max_zig_zag_result)        
        end
    end

    if direction == 'right'
        if node.right
            max_zig_zag(node.right, 'left', max_zig_zag_path + 1, max_zig_zag_result)
        end

        if node.left
            max_zig_zag(node.left, 'left', 0, max_zig_zag_result)
            max_zig_zag(node.left, 'right', 0, max_zig_zag_result)
        end
    end
end

def longest_zig_zag(root)
    max_zig_zag_result = [0]

    max_zig_zag(root, 'right', 0, max_zig_zag_result)
    max_zig_zag(root, 'left', 0, max_zig_zag_result)

    return max_zig_zag_result[0]
end

# 1 |
# Runtime: 133ms Beats 9.52%
# Memory: 223.10MB Beats 14.29%
def max_zig_zag(node, direction, max_zig_zag_path, max_zig_zag_result)
    return unless node

    max_zig_zag_result[0] = [max_zig_zag_result[0], max_zig_zag_path].max

    if direction == 'left'
        if node.left
            max_zig_zag(node.left, 'right', max_zig_zag_path + 1, max_zig_zag_result)
        end

        if node.right
            max_zig_zag(node.right, 'left', 0, max_zig_zag_result)
            max_zig_zag(node.right, 'right', 0, max_zig_zag_result)        
        end
    end

    if direction == 'right'
        if node.right
            max_zig_zag(node.right, 'left', max_zig_zag_path + 1, max_zig_zag_result)
        end

        if node.left
            max_zig_zag(node.left, 'left', 0, max_zig_zag_result)
            max_zig_zag(node.left, 'right', 0, max_zig_zag_result)
        end
    end
end

def longest_zig_zag(root)
    max_zig_zag_result = [0]

    max_zig_zag(root, 'right', 0, max_zig_zag_result)
    max_zig_zag(root, 'left', 0, max_zig_zag_result)

    return max_zig_zag_result[0]
end
