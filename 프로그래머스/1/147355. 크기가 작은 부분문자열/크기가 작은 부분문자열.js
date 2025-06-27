function solution(t, p) {
    let count=0;
    let pLen = p.length;
    
    for(let i=0; i<t.length-pLen+1;i++){
        const tSlice = t.slice(i,i+pLen);
        if(+p >= +tSlice) count++;
    }
    
    return count;
}