// 1
// | Vertical scanning Greedy
// | Runtime: 2ms Beats: 52.04%
// |  Asymptotic complexity: O(n·m):
//    O(n): for()
//    O(m): every()
//  = O(n) * O(m) => O(n*m): n - pattern length, m - prefix, if all pattern => every from N strs
// | Memory: 55.36MB Beats: 51.57%
// |  Spatial complexity: O(1)
function longestCommonPrefix_1(strs: string[]): string {
    const pattern = strs[0];
    let prefix = "";

    for (let i = 0; i < pattern.length; i++) {
        if (strs.every((str) => str[i] == pattern[i])) {
            prefix += pattern[i];
        } else {
            return prefix;
        }
    }

    return prefix;
};

// 2
// | Horizontal scanning Greedy
// | Runtime: 9ms Beats: 8.67%
// |  Asymptotic complexity: O(n): for()
// | Memory: 57.74MB Beats: 19.98%
// |  Spatial complexity: O(1)
function longestCommonPrefix_2(strs: string[]): string {
    let prefix = strs[0];

    for (let i = 0; i < strs.length; i++) {
        for (let j = 0; j < prefix.length; j++) {
            if (strs[i][j] != prefix[j]) {
                prefix = prefix.slice(0, j)
            }
        }

        if (prefix.length == 0) {
            return "";
        }
    }

    return prefix;
};
