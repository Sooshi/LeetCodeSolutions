// 1
// | One array iteration
// | Runtime: 1ms Beats: 69.08%
// |  Asymptotic complexity: O(n): for ()
// | Memory: 56.36MB Beats: 43.50%
// |  Spatial complexity: O(1): without using data structures that grow with input (using only a single variable)
function maxProfit4(prices: number[]): number {
    let totalProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        const currentPrice = prices[i];

        if (currentPrice > prices[i - 1]) {
           totalProfit += currentPrice - prices[i - 1];
        }
    }

    return totalProfit;
};
