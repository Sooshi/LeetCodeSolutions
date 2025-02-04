# but not O(n)
def odd_even_list(head)
    return nil if head.nil? || head.next.nil?

    current = head
    odd_list = []
    even_list = []
    counter = 0

    while current != nil
        if counter.even?
            even_list.push(current.val)
        else
            odd_list.push(current.val)
        end

        current = current.next
        counter += 1
    end

    even_list + odd_list
end

# 1 | idk ||
def odd_even_list(head)
    odd = head  
    even = head.next
    even_head = even

    while even && even.next
        odd.next = even.next
        odd = odd.next
        even.next = odd.next
        even = even.next
    end
    
    odd.next = even_head
    head
end
