function solution(stones, k) {
    //밝으면 -1
    //0이면 더이상 밟을수없음
    //건너뛸수있음. 가장 가까운 디딤돌로만
    
    let right = 200000000;
    let left = 1;
    
    const canCross = (mid,k) => {
        let skip = 0;
        for(let i=0; i<stones.length; i++) {
            if(stones[i] < mid) skip++;
            else skip = 0;
            
            if(skip >= k) return false;
        }
        return true;
    }
    
    while(left <= right) {
        const mid = Math.floor((left+right)/2);
        if(canCross(mid,k)) {
            left = mid+1;
        }
        else right = mid-1;
        
        
    }
    
    return left-1;
}
    
