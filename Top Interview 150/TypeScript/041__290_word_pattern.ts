// 1
// | Hash map
// | Runtime: 3ms Beats: 7.85%
// |  Asymptotic complexity: O(m^2): 
//    O(m): m = pattern.length ( == arr.length)
//    O(m): indexOf (This is because indexOf in JavaScript arrays is implemented as a linear search.)
//    O(m) * O(m) => O(m^2)
// | Memory: 55.59MB Beats: 28.03%
// |  Spatial complexity: O(n): arr.length
function wordPattern(pattern: string, s: string): boolean {
    const map = new Map();
    const arr = s.split(" ");

    if (arr.length != pattern.length) {
        return false;
    }

    for (let i = 0; i < arr.length; i++) {
        if (map.get(pattern[i])) {
            if (map.get(pattern[i]) != arr[i]) {
                return false;
            }
        } else {
            if (arr.indexOf(arr[i]) != i) {
                return false;
            } else {
                map.set(pattern[i], arr[i]);
            }
        }
    }

    console.log(map)

    return true;
};
