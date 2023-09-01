function solution(d, budget) {
    
    d.sort((a,b)=> a-b);
    
    let sum = 0;
    
    
    for(let i = 0 ; i< d.length; i++) {
        if ( sum + d[i] < budget ) sum += d[i];
        else return (sum + d[i] == budget) ? i+1 : i;
    }
    
    return d.length;

}