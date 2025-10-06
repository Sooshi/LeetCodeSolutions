// 1
// | Simple stack solution
// | Runtime: 6ms Beats: 24.95%
// |  Asymptotic complexity: O(n): for ()
// | Memory: 58.69MB Beats: 24.63%
// |  Spatial complexity: O(n): stack
function isValid(s: string): boolean {
    type TBraces = "(" | "[" | "{";
    const stack: Array<TBraces> = [];
    const map = {
        '(': ')',
        '[': ']',
        '{': '}',
    }

    for (const symbol of s) {
        if (symbol == '(' || symbol == '[' || symbol == '{') {
            stack.push(symbol);
        } else {
            const current = stack.pop();
            if (!current) {
                return false;
            }

            if (map[current] != symbol) {
                return false;
            }
        }
    }

    return stack.length == 0;
};
