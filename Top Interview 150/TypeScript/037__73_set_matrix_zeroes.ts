// 1
// | Matrix
// | Runtime: 2ms Beats: 81.32%
// |  Asymptotic complexity: O(m*n):
//    O(m): m = number of rows
//    O(n): n = number of columns
//    O(m*n): for () 
//    O(m*n): for () 
//    O(m*n) + O(m*n) => O(m*n)
// | Memory: 59.21MB Beats: 89.48%
// |  Spatial complexity: O(m+n):
//    O(m): m = new Set<number>()
//    O(n): n = new Set<number>()
//    O(m) + O(n) => O(m+n)
function setZeroes(matrix: number[][]): void {
    const zeroRows = new Set<number>();
    const zeroCols = new Set<number>();
  
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 0) {
                zeroRows.add(i);
                zeroCols.add(j);
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        if (zeroRows.has(i)) {
            for (let k = 0; k < matrix[i].length; k++) {
                matrix[i][k] = 0;
            }
        }
        
        for (let j = 0; j < matrix[i].length; j++) {
            if (zeroCols.has(j)) {
                matrix[i][j] = 0;
            }
        }
    }
};
