// 1
// | Brute-force
// | Runtime: 1ms Beats: 72.27%
// |  Asymptotic complexity: O(n·m):
//    O(n): for ()    n = t.length
//    O(m): s.split() m = s.length
//    O(n) * O(m) => O(n*m)
// | Memory: 56.03MB Beats: 43.48%
// |  Spatial complexity: O(m) arr
function isSubsequence(s: string, t: string): boolean {
    if (s.length == 0) {
        return true;
    }

    const arr = s.split("");

    for (let i = 0; i < t.length; i++) {
        if (t[i] == arr[0]) {
            arr.shift();
        }

        if (arr.length == 0) {
            return true;
        }
    }

    return false;
};

