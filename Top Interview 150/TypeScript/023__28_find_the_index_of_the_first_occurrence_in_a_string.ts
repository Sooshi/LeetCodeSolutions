// 1
// | Brute-force
// | Runtime: 0ms Beats: 100.00%
// |  Asymptotic complexity: O(n * m): indexOf method in the worst case must check every possible position of the start of a substring in haystack and match up to needle.length characters (every symbol of haystack and every needle symbol on it)
//    O(n): haystack.length
//    O(m): needle.length
//  = O((n - m + 1) * m) => m < n => O(n * m): (n - m + 1) all possible starts for checking substring in string
// | Memory: 55.01MB Beats: 75.08%
// |  Spatial complexity: O(1): none
function strStr_1(haystack: string, needle: string): number {
    return haystack.indexOf(needle);
};

// 2
// | Knuth-Morris-Pratt and LPS
// | Runtime: 3ms Beats: 8.47%
// |  Asymptotic complexity: O(n + m):
//    O(n): haystack.length => while (i < haystack.length)
//    O(m): needle.length   => while (i < length)
// =  O(n + m):  
// | Memory: 56.28MB Beats: 12.01%
// |  Spatial complexity: O(m): LPS from needle.length
function strStr_2(haystack: string, needle: string): number {
    const LPS = finding_lps(needle);

    let i = 0;
    let j = 0;

    while (i < haystack.length) {
        if (haystack[i] != needle[j]) {
            if (j != 0) {
                j = LPS[j - 1];
            } else {
                i += 1;
            }
        } else {
            i += 1;
            j += 1;
        }

        if (j == needle.length) {
            return i - j;
        }
    }

    return -1;
};

function finding_lps(pattern: string): number[] {
    const length = pattern.length;
    const LPS = new Array(length).fill(0);
   
    let j = 0;
    let i = 1;

    while (i < length) {
        if (pattern[i] == pattern[j]) {
            j += 1;
            LPS[i] = j;
            i += 1;
        } else {
            if (j !=0) {
                j = LPS[j - 1];
            } else {
                LPS[i] = 0;
                i += 1;
            }
        }
    }

    return LPS;
}
