// 1
// |
// |
// |
// |
// |
function isPalindrome(s: string): boolean {
    const normalized = s.replace(/[^a-z\d]+/gi, '').toLowerCase();
    const palindrome = normalized.split('').reverse().join('').toLowerCase();

    return normalized === palindrome;
};


// 2
// | Two Pointers
// |
// |
// |
// |