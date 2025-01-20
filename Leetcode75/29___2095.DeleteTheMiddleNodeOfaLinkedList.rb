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
def delete_middle(head)
    return nil if head.nil? || head.next.nil?

    current = head
    list = []
    
    while current != nil
        list.push(current.val)
        current = current.next
    end
    
    middle = (list.size / 2)
    
    list.delete_at(middle)
    
    new_list = nil

    list.reverse_each do |i|
        new_list = ListNode.new(i, new_list)
    end

    new_list
end
