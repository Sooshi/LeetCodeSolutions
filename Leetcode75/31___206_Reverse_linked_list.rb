# 1
# | Linked List
# | O(n):
#   O(n) - while current
# + O(n) - list.reverse
# = O(n) + O(n) => still O(n)
# Runtime: 0ms Beats 100.00%
# Memory: 211.82MB Beats 20.61%
def reverse_list(head)
    return nil if head.nil?

    current = head
    reverse_list = []

    while current
        reverse_list.push(current.val)
        current = current.next
    end

    reverse_list.reverse
end

# 2
# | Linked List
    # 1  ->  2  ->  3  ->  4  ->  5
    # [1] -> [2] -> [3] -> [4] -> [5]

    # 1,       nil
    # current, next

    #  2  ->  3  ->  4  ->  5
    # [1] -> [2] -> [3] -> [4]

    # 2,       [1, nil]
    # current, next

    #  3  ->  4  ->  5
    # [1] -> [2] -> [3]

    # 3,       [2, 1, nil]
    # current, next
# | O(n):
#   O(n) - while current
# = O(n)
# Runtime: 4ms Beats 4.82%
# Memory: 212.02MB Beats 14.47%
def reverse_list(head)
    next_node = nil
   
    until head.nil?
        next_node = ListNode.new(head.val,next_node)
        head = head.next
    end

    next_node
end

# 3
# | Linked List
# | O(n):
#   O(n) - while current
# = O(n)
# Runtime: 0ms Beats 100.00%
# Memory: 211.54MB Beats 65.35%
def reverse_list(head)
    prev = nil
    current = head

    while current 
        next_node = current.next #|  2       |  3  |  4  |  5  |  nil
        current.next = prev      #|  nil     |  1  |  2  |  3  |  4
        prev = current           #|  1, nil  |  2, 1, nil  |  3, 2, 1, nil  |  4, 3, 2, 1, nil  |  5, 4, 3, 2, 1, nil  |
        current = next_node      #|  2  |  3  |  4  |  5  |  nil
    end

    prev
end
