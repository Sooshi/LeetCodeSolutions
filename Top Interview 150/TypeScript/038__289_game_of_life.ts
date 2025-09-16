// 1
// | Game of life
// | Runtime: 4ms Beats: 26.00%
// |  Asymptotic complexity: O(m*n):
//    O(m): m = number of rows
//    O(n): n = number of columns
//    O(m*n): for ()
//    O(m*n): for ()
//    O(m*n) + O(m*n) => O(m*n)
// | Memory: 59.53MB Beats: 7.33%
// |  Spatial complexity: O(m*n): newBoard
function gameOfLife(board: number[][]): void {
    const newBoard = board.map(row => [...row]);
    const rows = board.length;
    const cols = board[0].length;

    const neighbors: number[][] = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],           [0, 1],
        [1, -1],  [1, 0],  [1, 1]
    ];

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let count = 0;

            for (const [dx, dy] of neighbors) {
                const nx = i + dx;
                const ny = j + dy;

                if (nx >= 0 && nx < rows && ny >= 0 && ny < cols) {
                    if (newBoard[nx][ny]) {
                        count++;
                    }
                }
            }

            if (newBoard[i][j] == 1) {
                if (count < 2) {
                    board[i][j] = 0;
                } else if (count > 3) {
                    board[i][j] = 0;
                }
            } else {
                if (count == 3) {
                    board[i][j] = 1;
                }
            }
        }
    };
};
