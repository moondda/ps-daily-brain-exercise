function solution(info, n, m) {
    let dpA = Array.from({length:info.length+1}, ()=>Array(121).fill(Infinity));
    //[몇번째까지 진행됐는지][b흔적 개수] = a 흔적 최소 개수
    dpA[0][0] = 0;
    
    for(let i=0; i<info.length; i++) {
        const [aAdd,bAdd] = info[i];
        for(let b = 0; b <= 120; b++){
            //a가 훔침
            if(dpA[i][b] + aAdd < n)
            dpA[i+1][b] = Math.min(dpA[i+1][b] , dpA[i][b] + aAdd);
            //b가 훔침
            if(b+bAdd < m)
            dpA[i+1][b+bAdd] = Math.min(dpA[i+1][b+bAdd], dpA[i][b])
        }
    }
    
    const result = Math.min(...dpA[info.length]);
    
    
    return result === Infinity ? -1 : result;
}