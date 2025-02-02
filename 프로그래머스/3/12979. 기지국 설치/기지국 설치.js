function solution(n, stations, w) {    
    const bound = 2*w + 1;
    const boundList = [];
    
    for(let i=0; i<stations.length;i++) {
        const start  = (stations[i] - w > 0) ? stations[i] - w : 1;
        const end = (stations[i] + w > n) ? n : stations[i] + w;
        boundList.push([start,end]);
    }
    
    const emptyList = [];
    
    //처음 bound 
    if(1 !== boundList[0][0]) emptyList.push(boundList[0][0]-1);
    
    //중간 bound
    for(let i=0; i<boundList.length-1;i++) {
        emptyList.push(boundList[i+1][0] - boundList[i][1] - 1);
    }
    
    //마지막 bound 
    if(n !== boundList[boundList.length -1][1]) emptyList.push(n-boundList[boundList.length -1][1]);
    

    let answer = 0;
    for(let i=0; i<emptyList.length; i++) {
        answer += Math.ceil(emptyList[i]/bound)
    }
    return answer;
}