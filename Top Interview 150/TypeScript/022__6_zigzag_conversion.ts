// 1
// | Brute-force
// | Runtime: 15ms Beats: 24.89%
// |  Asymptotic complexity: O(n):
//    O(numRows): fill()
//    O(numRows): map()
//    O(n): for()
//    O(n): flat()
//    O(n): join()
//  = O(numRows) + O(numRows) + O(n) + O(n) + O(n) => numRows << n => still O(n)
// | Memory: 63.34MB Beats: 20.98%
// |  Spatial complexity: O(n): matrix
function convert(s: string, numRows: number): string {
    if (numRows === 1) {
        return s;
    }

    const matrix: string[][] = new Array(numRows).fill(null).map(() => []);
    
    let direction = "down";
    let currentLine = 0;

    for (let i = 0; i < s.length; i++) {
        if (direction == "down") {
            matrix[currentLine].push(s[i])
            currentLine += 1;
            
            if (currentLine == numRows - 1) {
                direction = "up";
            }
        } else if (direction == "up") {
            matrix[currentLine].push(s[i])
            currentLine -= 1;

            if (currentLine == 0) {
                direction = "down";
            }
        }
    }

    return matrix.flat().join('');
};
