// 1
// | Hash map
// | Runtime: 9ms Beats: 25.60%
// |  Asymptotic complexity: O(m^2): 
//    O(m): m = s.length ( == t.length)
//    O(m): indexOf (This is because indexOf in JavaScript arrays is implemented as a linear search.)
//    O(m) * O(m) => O(m^2)
// | Memory: 57.22MB Beats: 41.69%
// |  Spatial complexity: O(n): t.length
function isIsomorphic(s: string, t: string): boolean {
    const map = new Map();

    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i])) {
            if (map.get(s[i]) != t[i]) {
                return false;
            }
        } else {
            if (t.indexOf(t[i]) != i) {
                return false;
            } else {
                map.set(s[i], t[i]);
            }
        }
    }

    return true;
};
