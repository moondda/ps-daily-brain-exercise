function solution(gems) {
    //모든 종료 최소 1개 포함하는 가장 짧은 구간
    //[시작번호, 끝번호] return
    //여러개라면 시작번호가 가장 작은 구간 return
    var answer = [];
    const allGems = new Set();
    for(let i of gems) {
        allGems.add(i);
    }
    
    const currentGems = new Map();
    let left = 0;
    let minLength = Infinity;
    let minArr = [];
    
    //i는 right
    for(let i=0; i<gems.length;i++) {
        if(currentGems.has(gems[i])) currentGems.set(gems[i], currentGems.get(gems[i]) + 1);
        else currentGems.set(gems[i],1);
        
        while(currentGems.size === allGems.size) {
            if(minLength > i-left+1) {
                minLength = i-left+1;
                minArr= [left+1,i+1];
            }
            else if (minLength === i-left+1) {
                if(minArr[0] > left) minArr = [left+1,i+1];
            }
            
            if(currentGems.get(gems[left]) === 1) currentGems.delete(gems[left]);
            else currentGems.set(gems[left], currentGems.get(gems[left])-1);
            left += 1;
        }
    }
    return minArr;
}