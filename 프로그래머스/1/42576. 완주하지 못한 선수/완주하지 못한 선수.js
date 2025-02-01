function solution(participant, completion) {
    const pplList = {};
    
    for(const i of participant) {
        //동명이인이 이미 있으면
        if(i in pplList) pplList[i] += 1;
        else pplList[i] = 1;
    }
    
    for(const i of completion) {
        pplList[i] -= 1;
    }

    for(const i in pplList) {
        if(pplList[i] === 1) return i;
    }

}