// 1
// | Prefix-Suffix technique - Greedy
// | Runtime: 15ms Beats: 21.18%
// |  Asymptotic complexity: O(n):
//    O(n): for()
//    O(n): for()
//    O(n): for()
//    O(n): reduce()
//  = O(n) + O(n) + O(n) + O(n) => still O(n)
// | Memory: 59.86MB Beats: 59.38%
// |  Spatial complexity: O(n):
//    O(n): new Array(n).fill(0)
//    O(n): new Array(n).fill(0)
//    O(n): new Array(n).fill(0)
//  = O(n) + O(n) + O(n) + O(n) => still O(n)
function trap(height: number[]): number {
    const n = height.length;

    const leftMaxes = new Array(n).fill(0);
    let leftMax = 0;
    for (let i = 0; i < n; i++) {
        leftMaxes[i] = leftMax;
        leftMax = Math.max(leftMax, height[i]);
    }

    const rightMaxes = new Array(n).fill(0);
    let rightMax = 0;
    for (let i = n - 1; i >= 0; i--) {
        rightMaxes[i] = rightMax;
        rightMax = Math.max(rightMax, height[i]);
    }

    const hollows = new Array(n).fill(0);
    for (let i = 1; i < n; i++) {
        const current = Math.min(leftMaxes[i], rightMaxes[i]) - height[i];
        hollows[i] = Math.max(current, 0);
    }

    return hollows.reduce((acc, v) => acc + v)
};
