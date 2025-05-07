// 1
// | Remove duplicate in place
// | O(n * n) while, splice (cause nums.splice(i, 1), which removes one element and shifts all remaining elements one position left.)
// | Runtime: 60ms Beats: 6.75%
// | Memory: 58.75MB Beats: 68.20%
function removeDuplicates_1(nums: number[]): number {
    let i = 0;

    while (i < nums.length) {
        let n = nums[i];

        if (n === nums[i + 1]) {
            nums.splice(i, 1);
        } else {
            i++;
        }
    }

    return nums.length;
};

// 2
// | Remove duplicate in place
// | O(n) while, splice (cause nums.splice(i, 1), which removes one element and shifts all remaining elements one position left.)
// | Runtime: 0ms Beats: 100.00%
// | Memory: 58.92MB Beats: 53.36%
function removeDuplicates_2(nums: number[]): number {
    let i = 1;
    let j = 1;

    while (i < nums.length) {
        if (nums[i - 1] !== nums[i]) {
            nums[j] = nums[i];
            j++;
        }

        i++;
    }

    return j;
};