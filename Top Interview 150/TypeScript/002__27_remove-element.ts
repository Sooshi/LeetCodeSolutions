// 1
// | Deleting in-place
// | O(n * n) while, splice (cause nums.splice(i, 1), which removes one element and shifts all remaining elements one position left.)
// | Runtime: 0ms Beats: 100.00%
// | Memory: 55.21MB Beats: 72.52%
function removeElement_1(nums: number[], val: number): number {
    for (let i = 0; i < nums.length;) {
        if (nums[i] === val) {
            nums.splice(i, 1);
        } else {
            i++;
        }
    }

    return nums.length;
};

// Same with while
// | Deleting in-place
// | O(n * n) while, splice (cause nums.splice(i, 1), which removes one element and shifts all remaining elements one position left.)
// | Runtime: 0ms Beats: 100.00%
// | Memory: 54.24MB Beats: 91.28%
function removeElement_2(nums: number[], val: number): number {
    let i = 0;

    while (i < nums.length) {
        if (nums[i] === val) {
            nums.splice(i, 1);
        } else {
            i++;
        }
    }

    return nums.length;
};

// 2
// | Modify original array nums in place
// | O(n) while
// | Runtime: 0ms Beats: 100.00%
// | Memory: 54.24MB Beats: 91.28%
function removeElement_3(nums: number[], val: number): number {
    let j = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[j++] = nums[i];
        }
    }

    return j;
};
