// 1
// | Unshift solution
// | Runtime: 0ms Beats: 100.00%
// |  Asymptotic complexity: O(n): 
//    O(k): nums.splice(length - k, k)
//    O(n): nums.unshift(...newNums)
//  = O(k + n) = O(n)
// | Memory: 63.82MB Beats: 94.80%
// |  Spatial complexity: O(k): newNums 
function rotate_1(nums: number[], k: number): void {
    const length = nums.length
    k = k % length

    const moved = nums.splice(length - k, k)
    nums.unshift(...moved)
};

// 2
// | 3-time Reverse
// | Runtime: 5ms Beats: 47.69%
// |  Asymptotic complexity: O(n): while (start < end)
// | Memory: 68.30MB Beats: 22.08%
// |  Spatial complexity: O(1): without using data structures that grow with input
function rotate_2(nums: number[], k: number): void {
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

// 3
// | Brute-Force solution 
// | Runtime: 762ms Beats: 23.08%
// |  Asymptotic complexity: O(k*n):
//    O(k): while (i < k)
//    O(n): nums.unshift()
//  = O(k*n) unshift inside while loop
// | Memory: 65.54MB Beats: 78.06%
// |  Spatial complexity: O(1): without using data structures that grow with input
function rotate_3(nums: number[], k: number): void {
    const length = nums.length;
    k = k % length;

    let i = 0;
    while (i < k) {
        nums.unshift(nums.pop()!);
        i++;
    }
};


// Wrong Answer nums = [1,2]
// MORE FASTER
//  for (let j = 0; j < nums.length; j++) {
//      nums[j] = newNums[j];
//  }
// -> 
//  newNums.forEach((value, index) => {
//      nums[index] = value;
//  });
//  ->
//  Object.assign(nums, newNums);
function rotate_4(nums: number[], k: number): void {
    let pointer = 1;
    let newNums = nums;
    
    for (let i = 0; i < nums.length; i++) {
        newNums = [newNums[nums.length - 1], ...newNums.slice(0, nums.length - 1)]

        if (pointer == k) {
            for (let j = 0; j < nums.length; j++) {
                nums[j] = newNums[j];
            }

            return;
        }

        pointer++;
    }
};

// Runtime: 2ms Beats: 67.32%
// Memory: 65.08MB Beats: 75.59%
function rotate(nums: number[], k: number): void {
    let length = nums.length;
    k = k % length;

    let subarray_start = nums.slice(length - k, length);
    let subarray_end = nums.slice(0, length - k);

    let numsCopy = [...subarray_start, ...subarray_end];

    for (let i = 0; i < nums.length; i++) {
        nums[i] = numsCopy[i];
    }
};
