// 1
// | Two-pointers
// | Runtime: 221ms Beats 5.06%
// |  Asymptotic complexity: O(n·m):
//    O(n): for ()         n = nums.length
//    O(m): window.shift() m = window.length
//    O(n) * O(m) => O(n*m)
// | Memory: 63.53MB Beats 5.19%
// |  Spatial complexity: O(n): window
function minSubArrayLen(target: number, nums: number[]): number {
    let leftBoundary = 0;
    let currentValue = 0;
    let window: number[] = [];
    let result = Infinity;

    for (let i = 0; i < nums.length; i++) {
        currentValue += nums[i];
        window.push(nums[i]);

        while (currentValue >= target) {
            result = Math.min(window.length, result);

            window.shift();
            currentValue -= nums[leftBoundary];
            leftBoundary += 1;
        }
    }
    
    return result == Infinity ? 0 : result;
};
