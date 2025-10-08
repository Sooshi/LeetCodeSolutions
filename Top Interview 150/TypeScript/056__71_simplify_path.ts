// 1
// | Simple stack solution
// | Runtime: 1ms Beats: 92.51%
// |  Asymptotic complexity: O(n):
//    O(n): .split()
//    O(n): for()
//    O(n): join()
//    O(n) + O(n) + O(n) => still O(n)
// | Memory: 58.61MB Beats: 16.03%
// |  Spatial complexity: O(n):
//    O(n): absolutePath
//    O(n): stack
//    O(n): join()
//    O(n) + O(n) + O(n) => still O(n)
function simplifyPath(path: string): string {
    const absolutePath = path.split("/");
    const stack = [];

    for (const directory of absolutePath) {
        if (directory === '') {
            continue;
        }

        if (directory === '.') {
            continue;
        }

        if (directory === '..') {
            stack.pop();
            continue;
        }

        stack.push(directory);
    }
    
    const res = '/' + stack.join('/')
    return res;
};
