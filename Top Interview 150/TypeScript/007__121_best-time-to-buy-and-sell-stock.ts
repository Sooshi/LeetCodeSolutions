// 1
// | Kadane's DP algorithm (max subarray sum)
// | Runtime: 2ms Beats: 77.54%
// |  Asymptotic complexity: O(n): for ()
// | Memory: 65.84MB Beats: 54.27%
// |  Spatial complexity: O(1): without using data structures that grow with input
function maxProfit1(prices: number[]): number {
    let current = 0;
    let max = 0;

    for (let i = 1; i < prices.length; i++) {
        const diff = prices[i] - prices[i - 1];
        current = Math.max(0, current + diff);
        max = Math.max(max, current)
    }

    return max;
}

// 2
// | Greedy algorithm
// | Runtime: 1ms Beats: 95.41%
// |  Asymptotic complexity: O(n): for ()
// | Memory: 66.18MB Beats: 34.34%
// |  Spatial complexity: O(1): without using data structures that grow with input
function maxProfit2(prices: number[]): number {
    let minPrice = prices[0];
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
            continue; // If today is the miniest price - no sense to find profit => shall continue and skip iteration ending
        }

        if (prices[i] - minPrice > profit) {
            profit = prices[i] - minPrice;
        }
    }

    return profit;
}
