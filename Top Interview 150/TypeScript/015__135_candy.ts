// 1
// | Prefix-Suffix technique - Greedy
// | Runtime: 4ms Beats: 81.94%
// |  Asymptotic complexity: O(n):
//    O(n): for()
//    O(n): for()
//    O(n): reduce()
//  = O(n) + O(n) + O(n) => still O(n)
// | Memory: 59.86MB Beats: 59.38%
// |  Spatial complexity: O(n): new Array(n).fill(1)
function candy(ratings: number[]): number {
    const n = ratings.length;
    const result = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            result[i] = result[i - 1] + 1;
        }
    }

    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            result[i] = Math.max(result[i], result[i + 1] + 1);
        }
    }

    return result.reduce((acc, v) => acc + v);
};
