// 1
// | With Result 
// | O(m + n) while
// | Runtime: 82ms Beats 48.11%
// | Memory: 213.96MB Beats 89.62%
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let nums1Pointer: number = 0;
    let nums2Pointer: number = 0;
    let result: number[] = [];

    while (nums1Pointer < m && nums2Pointer < n) {
        if (nums1[nums1Pointer] < nums2[nums2Pointer]) {
            result.push(nums1[nums1Pointer]);
            nums1Pointer++;
        } else {
            result.push(nums2[nums2Pointer]);
            nums2Pointer++;
        }
    }

    while (nums1Pointer < m) {
        result.push(nums1[nums1Pointer]);
        nums1Pointer++;
    }

    while (nums2Pointer < n) {
        result.push(nums2[nums2Pointer]);
        nums2Pointer++;
    }

    for (let i = 0; i < m + n; i++) {
        nums1[i] = result[i];
    }
}

// 2
// | In-place 
// | O(m + n): while
// | Runtime: 0ms Beats 100.00%
function merge1(nums1: number[], m: number, nums2: number[], n: number): void {
    let nums1Pointer = m - 1;
    let nums2Pointer = n - 1;
    let insertPointer = m + n - 1;

    while (nums2Pointer >= 0) {
        if (nums1[nums1Pointer] > nums2[nums2Pointer]) {
            nums1[insertPointer] = nums1[nums1Pointer];
            nums1Pointer--;
        } else {
            nums1[insertPointer] = nums2[nums2Pointer];
            nums2Pointer--;
        }

        insertPointer--;
    }
}

// 3
// | With Sort
// | O((m+n) * log(m+n)): for, sort
// | Runtime: 1ms Beats: 15.90%
// | Memory: 55.63MB Beats: 85.49%
function merge2(nums1: number[], m: number, nums2: number[], n: number): void {
    for (let i = 0; i < n; i++) {
        nums1[m + i] = nums2[i]
    }

    nums1.sort((a, b) => a - b);
};