function solution(gems) {
    const allGems = new Set(); //모든 보석 종류
    for(let gem of gems) {
        allGems.add(gem);
    }
    let currGems = new Map();
    let left = 0;
    let minLength = Infinity;
    let minArr = [];
    
    //i는 right
    for(let i=0; i<gems.length; i++) {
        currGems.set(gems[i], (currGems.get(gems[i]) || 0)+1);
        
        while(currGems.size === allGems.size) {
            if(minLength > i-left + 1) {
                minLength = i-left+1;
                minArr = [left+1,i+1];
            }
            else if (minLength === i-left+1) {
                if(minArr[0] > left) minArr = [left+1,i+1];
            }
            
            if(currGems.get(gems[left]) === 1) currGems.delete(gems[left]);
                else currGems.set(gems[left], currGems.get(gems[left])-1);
            left+=1;
        }
    }
    
    return minArr;
    
    
}