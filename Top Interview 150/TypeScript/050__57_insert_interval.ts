function insert(intervals: number[][], newInterval: number[]): number[][] {    
    intervals.push(newInterval);
    intervals.sort((a, b) => a[0] - b[0]);

    const result = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        let current = intervals[i];
        let prev = result[result.length - 1];

        if (current[0] <= prev[1]) {
            result.pop();
            result.push([prev[0], Math.max(prev[1], current[1])]);
        } else {
            result.push(current);
        }
    }
    
    return result
};
