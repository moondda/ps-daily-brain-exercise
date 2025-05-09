function solution(stones, k) {
    
    let left = 1;
    let right = 200000000;
    
    const canCross = (mid) => {
        let count = 0;
        for(let i of stones) {
            if(i<=mid) count++;
            else count =0;
            if(count === k) return false;
        }
        return true;
    }
    
    while(left <= right) {
        const mid = Math.floor((left + right) /2);
        if(canCross(mid)) left = mid+1;
        else right = mid-1;     
    }
    
    return left;
}
    
