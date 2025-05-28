// 1
// | Remove duplicate in place
// | Runtime: 7ms Beats: 6.06%
// |  Asymptotic complexity: O(n): forEach, Object.values, ...values, Object.entries, find
// | Memory: 57.77MB Beats: 86.06%
// |  Spatial complexity: O(n): Object.values, hashTable, ....
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

// 2
// | Boyer-Moore Voting Algorithm
// | Runtime: 2ms Beats: 76.41%
// |  Asymptotic complexity: O(n): for
// | Memory: 60.10MB Beats: 28.53%
// |  Spatial complexity: O(1): only counters, without using data structures that grow with input
function majorityElement2(nums: number[]): number {
    let counter = 0;
    let candidate = 0;

    for (const num of nums) {
        if (counter === 0) {
            candidate = num;
        }

        counter += (candidate === num) ? 1 : -1;
    }

    return candidate;
};
