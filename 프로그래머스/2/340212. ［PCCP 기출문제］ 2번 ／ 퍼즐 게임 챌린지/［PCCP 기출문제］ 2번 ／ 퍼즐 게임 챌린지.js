function solution(diffs, times, limit) {

    let left = 1;
    let right = 300000;
    
    const canSolve = (targetLevel) => {
        let timeCost = 0;
        for(let i = 0 ; i <diffs.length ; i++) {
            if(diffs[i]<= targetLevel) timeCost += times[i];
            else timeCost += (diffs[i] - targetLevel) * (times[i] + times[i-1] ) + times[i];
        }
        if(timeCost <= limit) return true;
        else return false;
    }
    
    while(left <= right) {
        const mid = Math.floor((left+right)/2);
        
        if(canSolve(mid)) right = mid-1;
        else left = mid + 1;
    } 
    
    return right+1;
}