// 1
// | Greedy algorithm
// | Runtime: 1ms Beats: 69.08%
// |  Asymptotic complexity: O(n): for ()
// | Memory: 56.36MB Beats: 43.50%
// |  Spatial complexity: O(1): without using data structures that grow with input (using only a single variable)
function maxProfit(prices: number[]): number {
    let totalProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < prices[i + 1]) {
            totalProfit -= prices[i];
            totalProfit += prices[i + 1];
        }
    }

    return totalProfit;
};
