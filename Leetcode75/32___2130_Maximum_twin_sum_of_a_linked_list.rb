# 1
# | Linked List
# | O(n):
#   O(n) - while node
# + O(n/2) - (0...n / 2).each
# = O(n)
# Runtime: 57ms Beats 88.09%
# Memory: 230.40MB Beats 47.62%
def pair_sum(head)
    return unless head

    node = head
    stack = []

    while node
        stack.push(node.val)
        node = node.next
    end

    max_sum = 0
    n = stack.size

    (0...n / 2).each do |i|
        twin_sum = stack[i] + stack[n - 1 - i]
        max_sum = [max_sum, twin_sum].max
    end

    max_sum
end
