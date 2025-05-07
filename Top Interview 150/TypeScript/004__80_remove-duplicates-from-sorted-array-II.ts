// 1
// | Remove duplicate in place
// | t: O(n): for
// | Runtime: 60ms Beats: 51.35%
// | m: O(1): remove duplicates in place 
// | Memory: 60.36MB Beats: 16.33%
function removeDuplicates(nums: number[]): number {
  let pointer = 2;

  for (let i = 2; i < nums.length; i++) {
      if (nums[i] != nums[pointer - 2]) {
          nums[pointer] = nums[i]
          pointer++;
      }
  }

  return pointer;
};
