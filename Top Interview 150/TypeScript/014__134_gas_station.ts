function canCompleteCircuit(gas: number[], cost: number[]): number {
    let startIndex = 0;
    let current = 0;
    let total = 0;

    for (let i = 0; i < gas.length; i++) {
        let gain = gas[i] - cost[i];
        current += gain;
        total += gain;

        if (current < 0) {
            startIndex = i + 1;
            current = 0;
        }
    }

    if (total < 0) {
        return -1;
    }

    return startIndex;
}
