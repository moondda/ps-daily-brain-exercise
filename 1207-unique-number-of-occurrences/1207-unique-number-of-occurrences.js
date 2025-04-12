/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = new Map();
    for(let i of arr) {
         map.set(i,(map.get(i) || 0) + 1);
    }
    const set = new Set();
    for(let [key,val] of map) {
        if(set.has(val)) return false;
        set.add(val);
    }
    return true;
};