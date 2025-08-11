// 1
// | Two-Pass Product Algorithm
// | Runtime: 4ms Beats: 87.45%
// |  Asymptotic complexity: O(n):
//    O(n): for()
//    O(n): for()
//  = O(n) + O(n) => still O(n)
// | Memory: 69.80MB Beats: 75.90%
// |  Spatial complexity: O(n): new Array(nums.length)
function productExceptSelf(nums: number[]): number[] {
    const result = new Array(nums.length).fill(1);

    let current = 1;
    for (let i = 0; i < nums.length; i++) {
        result[i] *= current;
        current *= nums[i];
    } 

    let newCurrent = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= newCurrent;
        newCurrent *= nums[i];
    } 

    return result;
};
