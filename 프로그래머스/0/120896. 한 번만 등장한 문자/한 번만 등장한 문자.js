function solution(s) {
    const sMap = new Map();
    
    for(let i of s) {
        if(sMap.get(i)) sMap.set(i,sMap.get(i)+1);
        else sMap.set(i,1);
    }
    
    const arr = [];
    
    for(let [key,value] of sMap) {
        if (value === 1) arr.push(key);
    }
    
    return arr.sort().join("");
}