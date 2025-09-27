function longestConsecutive(nums: number[]): number {
    const numbers = new Set(nums);
    let result = 0; 
    for (const number of numbers) {
        if (!numbers.has(number - 1)) {
            let current = number;
            let temp = 1;

            while(numbers.has(current + 1)) {
                current++;
                temp++;
            }
            
            result = Math.max(result, temp)
        }
    };

    return result;
};
