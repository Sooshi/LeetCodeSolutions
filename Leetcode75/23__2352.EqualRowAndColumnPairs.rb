# 1 | NestedLoops | 𝑂(𝑛 * n * n) | Runtime: 101ms Beats 36.84%
def equal_pairs(grid)
    columns = Array.new(grid.length) { [] } 
    counter = 0

    grid.each do |row|
        row.each_with_index {|num, a| columns[a].push(num)}
    end
    
    grid.each do |row|
        counter += columns.count(row)
    end

    counter
end

# Refactoring with RUBY .transpose and .sum | O(n * n * n) | Runtime: 75ms Beats 50.00%
def equal_pairs(grid)
    grid.transpose.sum {|column| grid.count(column)}
end
