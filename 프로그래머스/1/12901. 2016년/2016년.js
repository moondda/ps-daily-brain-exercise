function solution(a, b) {
    const DATE=[31,29,31,30,31,30,31,31,30,31,30,31];
    const DAY=["THU","FRI","SAT","SUN","MON","TUE","WED",];
    let index = 0;
 
    
        for(let i=0;i< a-1;i++) { 
            index += DATE[i] % 7  ;
        }
    
      index += b % 7;

    return DAY[index%7];
}

