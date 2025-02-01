function solution(participant, completion) {
    const pplList = {};
    
    for(let i=0; i< participant.length; i++) {
        //동명이인이 이미 있으면
        if(participant[i] in pplList) pplList[participant[i]] += 1;
        else pplList[participant[i]] = 1;
    }
    
    for(let i=0; i<completion.length; i++) {
        pplList[completion[i]] -= 1;
    }
    
    const pplListArr =  Object.entries(pplList);
    
    for(let i=0; i<pplListArr.length; i++) {
        if(pplListArr[i][1] === 1) return pplListArr[i][0];
    }

}