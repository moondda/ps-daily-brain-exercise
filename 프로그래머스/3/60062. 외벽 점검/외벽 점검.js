function solution(n, weak, dist) {
    //dist조합 1명부터 dist.length 명까지 다 조합해보고 있으면 최소 명수 리턴, 없으면 -1리턴.
     //[1,5,6,10,13,17,18,22] [2,4]
    const weakAdd = weak.map((e)=> e+n);
    const allWeak = [...weak,...weakAdd];
    
    const slicedWeak = [];
    
    for(let i=0; i<weak.length; i++) {
        slicedWeak.push(allWeak.slice(i,i+weak.length));
    }
    
    const permutation = (arr,k) => {
        if(k===1) return arr.map(e=> [e]);
        
        const result = [];
        
        arr.forEach((fixed,idx,origin) => {
            const rest = [...origin.slice(0,idx),...origin.slice(idx+1)];
            const perms = permutation(rest,k-1);
            const attached = perms.map((e)=> [fixed,...e]);
            result.push(...attached);
        });
        
        return result;
    }
    
    for(let i=1; i<=dist.length; i++) {
        const perms = permutation(dist,i); //i명이 담긴 조합후보 [[1,2],[2,3],[1,3]]
        for(let sliced of slicedWeak) {
            for(let perm of perms) { //[1,2]
                let weakCandi = [...sliced];
                for(let p of perm) {
            const covered = weakCandi[0] + p;
            weakCandi = weakCandi.filter((e)=> e>covered);
            if(weakCandi.length === 0) return i;
                }
            }
        }
    }
    return -1;
}