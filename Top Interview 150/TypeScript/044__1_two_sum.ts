function twoSum(nums: number[], target: number): number[] {
    const map = new Map();

    for(let i = 0; i < nums.length; i++) {
        const remainder = target - nums[i];
        if(map.has(remainder)) {
            return [map.get(remainder), i]
        }
        map.set(nums[i], i);
    }

    return [];
};
