// 1
// | Default O(1) solution
// | Runtime: 89ms Beats: 43.57%
// |  Asymptotic complexity: O(1): O(1) at every operation
// | Memory: 56.70MB Beats: 72.25%
// |  Spatial complexity: O(n): map, array
class RandomizedSet {
    private map: Map<number, number>;
    private array: Array<number>;

    constructor() {
        this.map = new Map<number, number>;
        this.array = new Array();
    }

    insert(val: number): boolean {
        if (this.map.has(val)) {
            return false;
        }

        this.map.set(val, this.array.length)
        this.array.push(val);

        return true;
    }

    remove(val: number): boolean {
        if (!this.map.has(val)) {
            return false;
        }

        const index = this.map.get(val)!;

        const arrayLastIndex = this.array.length - 1;
        const arrayLastValue = this.array[arrayLastIndex];

        this.map.set(arrayLastValue, index);
        this.array[index] = this.array[arrayLastIndex];

        this.array.pop();
        this.map.delete(val);

        return true;
    }

    getRandom(): number {
        const randomIndex = Math.floor(Math.random() * this.array.length);

        return this.array[randomIndex];
    }
}
