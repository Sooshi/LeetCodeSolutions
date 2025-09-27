
function groupAnagrams(strs: string[]): string[][] {
    const map = new Map();

    for (let i = 0; i < strs.length; i++) {
        const mask = new Array(26).fill(0);
        for (let j = 0; j < strs[i].length; j++) {
            const unicode = (strs[i].charCodeAt(j) - 97);
            mask[unicode]++;
        }

        const key = mask.join("-");
        if (!map.get(key)) {
            map.set(key, []);
        } else {
            map.set(key, map.get(key).push(strs[i]));
        }
    }

    return Object.values(map);
};
