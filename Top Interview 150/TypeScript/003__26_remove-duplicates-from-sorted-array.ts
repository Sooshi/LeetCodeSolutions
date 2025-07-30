// 1
// | Remove duplicate in place
// | O(n * n): while, splice (cause nums.splice(i, 1), which removes one element and shifts all remaining elements one position left.)
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
// | O(n): for
// | Runtime: 15ms Beats: 16.16%
// | Memory: 61.43MB Beats: 5.15%
function removeDuplicates_2(nums: number[]): number {
    let pointer = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i-1]) {
            nums[pointer] = nums[i];
            pointer++;            
        }
    }

    return pointer;
};

// 3
// | Remove duplicate in place
// | O(n): while
// | Runtime: 0ms Beats: 100.00%
// | Memory: 58.92MB Beats: 53.36%
function removeDuplicates_3(nums: number[]): number {
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

// 4
// | Remove duplicate in place
// | O(n): for
// | Runtime: 0ms Beats: 100.00%
// | Memory: 58.80MB Beats: 53.24%
function removeDuplicates_4(nums: number[]): number {
    let i = 0 // index of last uniq number

    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j]
        }
    }

    return i + 1;
};
