// 1
// | Hirsch index (H-index) - Greedy
// | Runtime: 2ms Beats: 42.82%
// |  Asymptotic complexity: O(n*log n):
//    O(n*log n): sort()
//    O(n):      for()
//  = O(n*log n) + O(n) => still O(n*log n)
// | Memory: 56.70MB Beats: 72.25%
// |  Spatial complexity: 
//    if citations is huge - O(n) (Timsort)
//    if citations is not huge - O(log n) (QuickSort)
//    Cause in JS sort() needs additional memory for the sorting
function hIndex(citations: number[]): number {
    let hIndex = 0;
    citations.sort((a, b) => b - a);

    for (let i = 0; i < citations.length; i++) {
        if (citations[i] > i) {
            hIndex += 1;
        }
    }

    return hIndex;
};
