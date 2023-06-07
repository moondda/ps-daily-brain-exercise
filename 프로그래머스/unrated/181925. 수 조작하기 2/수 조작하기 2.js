function solution(numLog) {
    var answer = '';
    for(let i=0; i<numLog.length; i++) {
        
        if((numLog[i+1] - numLog[i]) == 1) answer=answer+'w';
        if((numLog[i+1] - numLog[i]) == -1) answer=answer+'s';
        if((numLog[i+1] - numLog[i]) == 10) answer=answer+'d';
        if((numLog[i+1] - numLog[i]) == -10) answer=answer+'a';
    }
    return answer;
}