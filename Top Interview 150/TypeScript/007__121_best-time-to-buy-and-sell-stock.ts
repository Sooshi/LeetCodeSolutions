//
// Brute force
// Time Limit Exceeded: O(n²):
//   O(n): for ()
//   O(n - i): prices.slice in for
//   O(n - i): Math.max(...arr)
//   = O(n²)
function maxProfit(prices: number[]): number {
    let profit = 0;

    for (let i = 0; i < prices.length; i++) {
        const current = prices[i];
        const arr = prices.slice(i + 1, prices.length);
        
        const diff = Math.max(...arr) - current;
        if (profit < diff) {
            profit = diff;
        }
    }

    return profit;
};

// 1
// | Kadane's DP algorithm (max subarray sum)
// | Runtime: 2ms Beats: 77.54%
// |  Asymptotic complexity: O(n): for ()
// | Memory: 65.84MB Beats: 54.27%
// |  Spatial complexity: O(1): without using data structures that grow with input
function maxProfit1(prices: number[]): number {
    let maxPrice = 0;
    let profit = 0;

    for (let i = prices.length - 1; i >= 0; i--) {
        maxPrice = Math.max(maxPrice, prices[i]);
        profit = Math.max(profit, maxPrice - prices[i])
    }

    return profit;
}

// Same alternative
function maxProfit2(prices: number[]): number {
    let minPrice = Infinity;
    let profit = 0;

    for (let price of prices) {
        minPrice = Math.min(minPrice, price);
        profit = Math.max(profit, price - minPrice);
    }

    return profit;
}

// Same with conditions block
function maxProfit3(prices: number[]): number {
    let minPrice = Infinity;
    let profit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i]
        }
        if (prices[i] - minPrice > profit) {
            profit = prices[i] - minPrice
        }
    }

    return profit;
}
