function summaryRanges(nums: number[]): string[] {
    const result = [];
    let startIndex = 0;

    for (let i = 1; i <= nums.length; i++) {
        if (nums[i] !== nums[i - 1] + 1) {
            const start = nums[startIndex];
            const end = nums[i - 1];

            result.push(start === end ? `${start}` : `${start}->${end}`);
            startIndex = i;
        }
    }

    return result;
};
