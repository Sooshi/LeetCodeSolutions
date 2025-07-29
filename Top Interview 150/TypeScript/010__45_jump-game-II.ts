// 1
// | Greedy adlgorithm
// | Runtime: 2ms Beats: 61.41%
// |  Asymptotic complexity: O(n): for ()
// | Memory: 56.70MB Beats: 72.25%
// |  Spatial complexity: O(1): without using data structures that grow with input (using only a single variable)
function jump(nums: number[]): number {
    if (nums.length == 1) {
        return 0;
    }

    let counter = 0;
    let finalIndex = nums.length - 1;
    let coverage = 0;
    let lastReachIndex = 0

    for (let i = 0; i < nums.length; i++) {
        coverage = Math.max(coverage, i + nums[i])

        if (lastReachIndex == i) {
            lastReachIndex = coverage;
            counter++;

            if (coverage >= finalIndex) {
                return counter;
            }
        }
    }

    return counter;
};
