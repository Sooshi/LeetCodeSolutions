// 1
// | Straightforward approach
// | Runtime: 0ms Beats: 100.00%
// |  Asymptotic complexity: O(n):
//    O(n): trim()
//    O(n): split()
//  = O(n) + O(n) + O(n) => still O(n)
// | Memory: 55.36MB Beats: 51.57%
// |  Spatial complexity: O(n): split() - create new array
function lengthOfLastWord(s: string): number {
    const newString = s.trim();
    const newStringArray = newString.split(" ");
    
    return newStringArray[newStringArray.length - 1].length;
};
