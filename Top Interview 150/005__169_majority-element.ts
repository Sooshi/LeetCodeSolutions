// 1
// | Remove duplicate in place
// | Runtime: 7ms Beats: 6.06%
// |  Asymptotic complexity: O(n): forEach, Object.values, ...values, Object.entries, find
// | Memory: 57.77MB Beats: 86.06%
// |  Spatial complexity: O(1): remove duplicates in place 
function majorityElement(nums: number[]): number {
  const hashTable = {};

  nums.forEach((n) => {
      if (hashTable[n]) {
          hashTable[n] += 1;
      } else {
          hashTable[n] = 1;
      }
  })

  const values = Object.values(hashTable) as number[];
  const max = Math.max(...values);

  const keys = Object.entries(hashTable);
  const result = keys.find(([_, val]) => val == max)?.[0];
  return Number(result);
};
