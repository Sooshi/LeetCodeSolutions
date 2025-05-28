// 1, 2, 3, 4, 5, 6, 7
// 0  1  2  3  4  5  6
// ->
// 7, 1, 2, 3, 4, 5, 6
// 0  1  2  3  4  5  6
// - - - - - - - - - -
// 6  0  1  2  3  4  5
// Time Limit Exceeded
function rotate(nums: number[], k: number): void {
    for (let j = 0; j < k; j++) {
        const last = nums[nums.length - 1]
        for (let i = nums.length; i > 0; i--) {
            if (i < 2) {
                nums[i - 1] = last;            
            } else {
                nums[i - 1] = nums[i - 2];
            }
        }
    }
};

// 1
// | Out of box solution
// | Runtime: 0ms Beats: 100.00%
// |  Asymptotic complexity: O(n): 
//    O(k): nums.splice(length - k, k)
//    O(n): nums.unshift(...newNums)
//  = O(k + n) = O(n)
// | Memory: 63.82MB Beats: 94.80%
// |  Spatial complexity: O(k): newNums 
function rotate1(nums: number[], k: number): void {
    const length = nums.length;
    const normalizeK = k % length

    const newNums = nums.splice(length - normalizeK, length);

    nums.unshift(...newNums);
};

// 2
// | 3-time Reverse
// | Runtime: 5ms Beats: 47.69%
// |  Asymptotic complexity: O(n): while (start < end)
// | Memory: 68.30MB Beats: 22.08%
// |  Spatial complexity: O(1): without using data structures that grow with input
function rotate2(nums: number[], k: number): void {
    const n = nums.length;
    k = k % n;

    reverse(nums, 0, n - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, n - 1);
};

function reverse(arr: number[], start: number, end: number) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]
        start++;
        end--;
    }
} 