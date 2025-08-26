// 1
// | Two-pointers
// | Runtime: 3ms Beats: 37.94%
// |  Asymptotic complexity: O(n):
//    O(n): for ()
// | Memory: 56.87MB Beats: 45.41%
// |  Spatial complexity: O(1)
function twoSum(numbers: number[], target: number): number[] {
    let leftPointer = 0;
    let rightPointer = numbers.length - 1

    for(let i = 0; i < numbers.length; i++) {
        if (numbers[leftPointer] + numbers[rightPointer] > target) {
            rightPointer -= 1;
        }

        if (numbers[leftPointer] + numbers[rightPointer] < target) {
            leftPointer += 1;
        }

        if (numbers[leftPointer] + numbers[rightPointer] == target) {
            return [leftPointer + 1, rightPointer + 1];
        }
    }

    return [];
};

// classic with while
// function twoSum(numbers: number[], target: number): number[] {
//     let left = 0;
//     let right = numbers.length - 1;

//     while (left < right) {
//         const sum = numbers[left] + numbers[right];

//         if (sum === target) {
//             return [left + 1, right + 1];
//         } else if (sum < target) {
//             left++;
//         } else {
//             right--;
//         }
//     }

//     return [];
// }
