// 1
// | Brute-force
// | Runtime: 1ms Beats: 72.03%
// |  Asymptotic complexity: O(n·m):
//    O(n): for ()    n = t.length
//    O(m): s.split() m = s.length
//    O(n) * O(m) => O(n*m)
// | Memory: 55.72MB Beats 66.40%
// |  Spatial complexity: O(m) arr
function isSubsequence(s: string, t: string): boolean {
    if (s.length == 0) {
        return true;
    }

    const arr = s.split("");

    for (let i = 0; i < t.length; i++) {
        const index = arr.indexOf(t[i]);
        if (index == 0) {
            arr.splice(index, 1);
        }

        if (arr.length == 0) {
            return true;
        }
    }

    return false;
};
