function solution(stones, k) {
    let right = 200000000;
    let left = 0;
    
    while(left <= right) {
        let mid = Math.floor((left+right)/2);
        let skip =0;
        for(let stone of stones) {
            if(stone < mid) skip++;
            else skip = 0;
            
            if(skip >= k) break;
        }
        if(skip >= k) right = mid-1; //무조건 안됨
        else left = mid +1; //더 커도 됨
        
    }
    return left-1;
}