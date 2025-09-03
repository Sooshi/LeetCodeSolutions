// 1
// | Two-pointers
// | Runtime: 61ms Beats: 22.16%

// | Memory: 100.66MB Beats: 5.05%

function lengthOfLongestSubstring(s: string): number {
    const result: string[][] = [];
    let current: string[] = [];

    for (let i = 0; i < s.length; i++) {
        if (current.includes(s[i])) {
            result.push(current);

            const index = current.indexOf(s[i]);
            current = current.slice(index + 1, current.length);
            i -= 1;
        } else {
            current.push(s[i])
        }

        if (current.length > 0) {
            result.push(current);
        }
    }

    const longest = result.reduce((a, b) => b.length > a.length ? b : a, []);
    return longest.length;
};
