// 1
// | Greedy
// | Runtime: 5ms Beats: 71.92%
// |  Asymptotic complexity: O(n): for()
// | Memory: 63.97MB Beats: 32.37%
// |  Spatial complexity: O(1): map, values
function intToRoman(num: number): string {
    const map = {
        1000: "M",
        900: "CM",
        500: "D",
        400: "CD",
        100: "C",
        90: "XC",
        50: "L",
        40: "XL",
        10: "X",
        9: "IX",
        5: "V",
        4: "IV",
        1: "I"
    };
    let result = "";
    let values = Object.keys(map).reverse();

    for (let i = 0; i < values.length; i++) {
        const value = Number(values[i]);
        const count = Math.trunc(num / value);

        result += map[value].repeat(count);
        num = num - value * count;
    }

    return result;
};
