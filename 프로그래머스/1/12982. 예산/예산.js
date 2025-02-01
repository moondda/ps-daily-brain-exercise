function solution(d, budget) {
    d.sort((a,b) => a-b);
    let sum = 0;
    for(let i=0; i<d.length; i++){
        
        if(sum + d[i] > budget) return i;
        else if(sum + d[i] === budget) return i+1;
        else sum += d[i];
    }
    return d.length;
}