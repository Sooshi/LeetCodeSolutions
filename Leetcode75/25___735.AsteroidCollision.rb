# Close but if negative asteroids first - wrong
def asteroid_collision(asteroids)
    stack = []    

    asteroids.each do |asteroid|
        stack.push(asteroid) if asteroid > 0

        if asteroid < 0 && stack.last == asteroid.abs
            stack.pop
        end

        if asteroid < 0 && stack.size > 1 && stack.last < asteroid.abs
            stack.reverse_each do |el|
                if el < asteroid.abs
                    stack.pop
                elsif el > asteroid.abs
                    break
                else
                    stack.push(asteroid)
                end
            end            
        end
    end
    
    p stack
end

# 1 | Copied | | Runtime: 6ms Beats 93.85%
def asteroid_collision(asteroids)
    stack = []
  
    asteroids.each do |asteroid|
      if asteroid > 0
        stack << asteroid
      else
        while !stack.empty? && stack.last > 0 && stack.last < asteroid.abs
          stack.pop
        end
  
        if stack.empty? || stack.last < 0
          stack << asteroid
        elsif stack.last == asteroid.abs
          stack.pop
        end
      end
    end
  
    stack
  end
  