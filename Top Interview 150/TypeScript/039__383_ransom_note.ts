// 1
// | HashMap
// | Runtime: 18ms Beats: 49.27%
// |  Asymptotic complexity: O(m + n):
//    O(m): m = length of magazine
//    O(n): n = length of ransomNote
//    O(m): for ()
//    O(n): for ()
//    O(m) + O(n) => O(m + n)
// | Memory: 61.10MB Beats: 29.62%
// |  Spatial complexity: O(m): map
function canConstruct_1(ransomNote: string, magazine: string): boolean {
    const map = new Map();

    for (const char of magazine) {
        const current = map.get(char);
        if (current) {
            map.set(char, current + 1);
        } else {
            map.set(char, 1);
        }
    };

    for (const char of ransomNote) {
        const current = map.get(char);
        if (current) {
            map.set(char, current - 1);
        } else {
            return false;
        }
    }

    return true;
};

// 2
// | Brute-Force
// | Runtime: 7ms Beats: 88.86%
// |  Asymptotic complexity: O(m*n):
//    O(m): m = length of magazine
//    O(n): n = length of ransomNote
//    O(n): for ()
//    O(m): slice
//    O(n) * O(m) => O(n*m)
// | Memory: 62.46MB Beats: 10.70%
// |  Spatial complexity: O(m*n): slice (slice copies array N times with M elements)
function canConstruct_2(ransomNote: string, magazine: string): boolean {
    for (const char of ransomNote) {
        const index = magazine.indexOf(char);
        if (index < 0) {
            return false;
        }

        magazine = magazine.slice(0, index) + magazine.slice(index + 1);
    };

    return true;
};
