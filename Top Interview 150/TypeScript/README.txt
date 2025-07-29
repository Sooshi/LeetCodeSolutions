✅ 1) What is a DP (Dynamic Programming) algorithm for an array?

🔹 Definition:
Dynamic Programming is an algorithmic technique for solving problems
by breaking them down into overlapping subproblems, solving each once,
and storing their results (memoization or tabulation) to avoid repeated work.

🔹 It’s useful when:
The solution depends on previous decisions
You have optimal substructure (solution to the problem can be built from solutions to subproblems)

Looks at:           Entire future via recursion/memoization
Stores memory?:     ✅ Yes (memo or tabulation)
Guarantees optimal?	✅ Yes (if applicable)	
Common in:          Scheduling, interval problems, money, graphs

🔸 Example (Fibonacci)
🔸 Example (Leetcode 121)
🔸 Example (Maximum subarray sum = Kadane's algorithm)

✅ 2) What is a Greedy algorithm for an array?

🔹 Definition:
A Greedy algorithm builds up a solution step by step, always choosing the best option available 
at the moment, without worrying about future consequences.

🔹 It’s useful when:
Local optimum = global optimum
There's a clear greedy rule or choice

🔸 Example (Minimum number of coins for a value)
🔸 Example (Leetcode 122)

Looks at:           Only local best (now)
Stores memory?	    ❌ No
Guarantees optimal?	❌ Only if local = global optimum
Common in:         	Scheduling, interval problems, money, graphs
