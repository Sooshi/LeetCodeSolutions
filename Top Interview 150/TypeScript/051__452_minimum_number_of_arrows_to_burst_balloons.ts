function findMinArrowShots(points: number[][]): number {    
    points.sort((a,b) => a[0] - b[0])
    
    const result = [points[0]];

    for (let i = 1; i < points.length; i++) {
        let current = points[i];
        let prev = result[result.length - 1];

        if (current[0] <= prev[1]) {
            result.pop();
            result.push([Math.max(prev[0], current[0]), Math.min(prev[1], current[1])]);
        } else {
            result.push(current);
        }
    }
    
    return result.length;
};
