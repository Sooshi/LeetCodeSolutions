// 1 
// | Greedy adlgorithm
// | Runtime: 0ms Beats: 100.00%
// |  Asymptotic complexity: O(n): for ()
// | Memory: 59.63MB Beats: 72.48%
// |  Spatial complexity: O(1): without using data structures that grow with input (using only a single variable)
function canJump(nums: number[]): boolean {
    let currentIndex = nums.length - 1;

    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] >= currentIndex - i) {
            currentIndex = i
        }
    }

    return currentIndex === 0;
};
